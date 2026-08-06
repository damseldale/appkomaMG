import { fabric } from 'fabric';

export class CanvasManager {
  public canvas: fabric.Canvas;

  constructor(canvasElementId: string, width: number, height: number) {
    // Inisialisasi Fabric Canvas
    this.canvas = new fabric.Canvas(canvasElementId, {
      width,
      height,
      preserveObjectStacking: true, // Mencegah objek yang di-klik pindah ke layer paling atas secara otomatis
      backgroundColor: '#ffffff',
      selection: true, // Mengizinkan drag selection multiple object
    });

    // Kustomisasi control border (titik untuk drag/resize) agar terlihat modern
    fabric.Object.prototype.set({
      transparentCorners: false,
      cornerColor: '#FF5A5F',
      borderColor: '#FF5A5F',
      cornerSize: 10,
      padding: 5,
    });
  }

  /** Menambahkan teks ke tengah layar */
  public addText(text: string, options?: fabric.ITextOptions) {
    const textObj = new fabric.IText(text, {
      left: this.canvas.getWidth() / 2,
      top: this.canvas.getHeight() / 2,
      originX: 'center',
      originY: 'center',
      fontFamily: 'Inter',
      fontSize: 48,
      fill: '#000000',
      ...options,
    });
    this.canvas.add(textObj);
    this.canvas.setActiveObject(textObj);
    this.canvas.renderAll();
  }

  /** Menambahkan gambar dari URL (S3 / Library) */
  public addImage(url: string) {
    fabric.Image.fromURL(url, (img) => {
      // Scale gambar agar tidak melebihi ukuran canvas jika terlalu besar
      if (img.width! > this.canvas.getWidth()) {
        img.scaleToWidth(this.canvas.getWidth() - 100);
      }
      img.set({
        left: this.canvas.getWidth() / 2,
        top: this.canvas.getHeight() / 2,
        originX: 'center',
        originY: 'center',
      });
      this.canvas.add(img);
      this.canvas.setActiveObject(img);
      this.canvas.renderAll();
    }, { crossOrigin: 'anonymous' }); // Penting untuk menghindari error CORS saat merender gambar dari S3
  }

  /** Menghapus objek yang sedang dipilih */
  public deleteSelected() {
    const activeObjects = this.canvas.getActiveObjects();
    if (activeObjects.length) {
      this.canvas.discardActiveObject();
      activeObjects.forEach((obj) => {
        this.canvas.remove(obj);
      });
    }
  }

  /** Membersihkan memori saat berpindah halaman (Cleanup) */
  public destroy() {
    this.canvas.dispose();
  }
}
