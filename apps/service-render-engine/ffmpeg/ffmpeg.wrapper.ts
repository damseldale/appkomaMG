import { spawn } from 'child_process';

export class FFmpegWrapper {
  static runCommand(commandArgs: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log(`Spawning ffmpeg with args: ${commandArgs.join(' ')}`);
      const ffmpegProcess = spawn('ffmpeg', commandArgs);

      ffmpegProcess.stdout.on('data', (data) => {
        console.log(`ffmpeg stdout: ${data}`);
      });

      ffmpegProcess.stderr.on('data', (data) => {
        // FFmpeg mengirim log kemajuan dan informasi proses ke stderr
        // console.log(`ffmpeg progress: ${data}`);
      });

      ffmpegProcess.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`FFmpeg process exited with code ${code}`));
        }
      });

      ffmpegProcess.on('error', (err) => {
        reject(err);
      });
    });
  }
}
