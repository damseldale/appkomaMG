export class JsonToCommands {
  static generate(timelineScript: any, audioPath: string, outputPath: string, resolution: string): string {
    // Tentukan resolusi video target
    let width = 1280;
    let height = 720;
    if (resolution === '1080p') {
      width = 1920;
      height = 1080;
    } else if (resolution === '4K') {
      width = 3840;
      height = 2160;
    }

    const bgColor = timelineScript.backgroundColor || '#10101E';
    const durationSec = (timelineScript.totalDuration || 5000) / 1000;

    // Konstruksi string perintah FFmpeg dasar (mendukung background warna solid + audio mix)
    const command = `ffmpeg -y -f lavfi -i color=c=${bgColor.replace('#', '0x')}:s=${width}x${height}:d=${durationSec} -i ${audioPath} -c:v libx264 -pix_fmt yuv420p -c:a aac -shortest ${outputPath}`;

    return command;
  }
}
