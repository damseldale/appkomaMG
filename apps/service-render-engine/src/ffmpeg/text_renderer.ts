export interface TextOverlayOptions {
  text: string;
  fontSize?: number;
  fontColor?: string;
  x?: string | number;
  y?: string | number;
  enableTimeExpression?: string;
}

export class TextRenderer {
  /**
   * Menghasilkan argumen filter drawtext untuk disisipkan ke dalam perintah FFmpeg.
   */
  static getDrawTextFilter(options: TextOverlayOptions): string {
    const escapedText = options.text.replace(/'/g, "\\'").replace(/:/g, '\\:');
    const fontSize = options.fontSize || 32;
    const fontColor = options.fontColor || 'white';
    const x = options.x !== undefined ? options.x : '(w-text_w)/2';
    const y = options.y !== undefined ? options.y : '(h-text_h)/2';
    
    let filter = `drawtext=text='${escapedText}':fontsize=${fontSize}:fontcolor=${fontColor}:x=${x}:y=${y}`;
    
    if (options.enableTimeExpression) {
      filter += `:enable='${options.enableTimeExpression}'`;
    }

    return filter;
  }
}
