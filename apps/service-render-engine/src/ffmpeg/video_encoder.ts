export interface EncoderOptions {
  codec?: string;
  preset?: string;
  crf?: number;
  pixFmt?: string;
}

export class VideoEncoder {
  static getEncodingArgs(options: EncoderOptions = {}): string[] {
    const codec = options.codec || 'libx264';
    const preset = options.preset || 'medium';
    const crf = options.crf !== undefined ? options.crf : 23;
    const pixFmt = options.pixFmt || 'yuv420p';

    return [
      '-c:v', codec,
      '-preset', preset,
      '-crf', crf.toString(),
      '-pix_fmt', pixFmt
    ];
  }
}
