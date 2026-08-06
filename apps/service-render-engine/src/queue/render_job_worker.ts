import { SceneCompiler } from '../parser/scene_compiler';
import { JsonToCommands } from '../parser/json_to_commands';
import { AudioMixer } from '../parser/audio_mixer';
import { exec } from 'child_process';
import { promisify } from 'util';
import * as fs from 'fs';
import * as path from 'path';

const execAsync = promisify(exec);

export class RenderJobWorker {
  constructor() {}

  async processJob(jobData: { projectId: string; scenes: any[]; resolution: string }): Promise<string> {
    console.log(`Starting render job for project: ${jobData.projectId}`);
    
    const outputDir = path.join('/tmp', `render_${jobData.projectId}_${Date.now()}`);
    fs.mkdirSync(outputDir, { recursive: true });

    const outputPath = path.join(outputDir, 'output.mp4');

    // 1. Kompilasi scene dan urutan waktu timeline
    const timelineScript = SceneCompiler.compile(jobData.scenes);

    // 2. Campur trek audio (voiceover & latar musik)
    const mixedAudioPath = await AudioMixer.mix(jobData.scenes, outputDir);

    // 3. Konversi struktur JSON menjadi argumen baris perintah FFmpeg
    const ffmpegCommand = JsonToCommands.generate(timelineScript, mixedAudioPath, outputPath, jobData.resolution);

    console.log(`Executing FFmpeg command: ${ffmpegCommand}`);

    try {
      // Eksekusi perintah FFmpeg secara asinkron di sistem operasi container
      await execAsync(ffmpegCommand);
      console.log(`Render completed successfully for project: ${jobData.projectId}`);
      return outputPath;
    } catch (error: any) {
      console.error(`Render failed for project ${jobData.projectId}:`, error);
      throw new Error(`FFmpeg rendering failed: ${error.message}`);
    }
  }
}
