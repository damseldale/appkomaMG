import { fabric } from 'fabric';

export class ExportManager {
  
  /**
   * Mengambil struktur data Canvas menjadi JSON.
   * Properti bawaan fabric (left, top, scale) otomatis masuk.
   * Kita wajib mendaftarkan properti custom (id, animation) ke dalam array agar tidak hilang.
   */
  public static exportToJSON(canvas: fabric.Canvas): object {
    return canvas.toJSON([
      'id',           // ID unik objek
      'name',         // Nama layer
      'inEffect',     // Efek masuk animasi (misal: "fade-in")
      'outEffect',    // Efek keluar animasi (misal: "slide-out")
      'duration',     // Durasi objek tampil di timeline (ms)
      'startTime',    // Kapan objek mulai muncul di timeline (ms)
      'audioUrl'      // Jika objek adalah lip-sync character
    ]);
  }

  /**
   * Menghasilkan gambar base64 (DataURL) dari canvas saat ini.
   * Sangat berguna untuk:
   * 1. Membuat Thumbnail/Cover project di halaman Dashboard.
   * 2. Preview cepat.
   */
  public static generateThumbnail(canvas: fabric.Canvas): string {
    // Kita buat multiplier 0.5 agar resolusi thumbnail kecil dan tidak membebani database/S3
    return canvas.toDataURL({
      format: 'jpeg',
      quality: 0.8,
      multiplier: 0.5, 
    });
  }

  /**
   * Membuat file JSON murni (String) yang siap dikirim sebagai file ke Render Engine Worker.
   * File JSON inilah yang akan dibaca oleh FFmpeg di backend.
   */
  public static buildRenderPayload(canvas: fabric.Canvas, projectId: string, fps: number = 30): string {
    const sceneData = this.exportToJSON(canvas);
    
    const payload = {
      projectId,
      resolution: {
        width: canvas.getWidth(),
        height: canvas.getHeight(),
      },
      fps,
      scene: sceneData
    };

    return JSON.stringify(payload, null, 2);
  }
}
