import { fabric } from 'fabric';

export class HistoryManager {
  private canvas: fabric.Canvas;
  private history: string[] = []; // Menyimpan state JSON dari canvas
  private currentIndex: number = -1;
  private isProcessing: boolean = false; // Mencegah infinite loop saat undo/redo

  constructor(canvas: fabric.Canvas) {
    this.canvas = canvas;
    this.setupListeners();
    this.saveState(); // Simpan state awal (kanvas kosong)
  }

  private setupListeners() {
    // Dengarkan event dari Fabric.js setiap kali objek ditambah, diubah, atau dihapus
    this.canvas.on('object:added', () => this.saveState());
    this.canvas.on('object:modified', () => this.saveState());
    this.canvas.on('object:removed', () => this.saveState());
  }

  /** Menyimpan state ke riwayat */
  private saveState() {
    // Jika perubahan dipicu oleh sistem Undo/Redo, jangan catat state baru
    if (this.isProcessing) return;

    // Jika user melakukan Undo lalu membuat objek baru, hapus riwayat "masa depan" (Redo)
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1);
    }

    const stateJSON = JSON.stringify(this.canvas.toJSON(['id', 'name', 'duration', 'animation']));
    this.history.push(stateJSON);
    this.currentIndex++;
  }

  /** Mundur satu langkah (Undo) */
  public undo() {
    if (this.currentIndex > 0) {
      this.isProcessing = true;
      this.currentIndex--;
      const prevState = this.history[this.currentIndex];
      
      this.canvas.loadFromJSON(prevState, () => {
        this.canvas.renderAll();
        this.isProcessing = false;
      });
    }
  }

  /** Maju satu langkah (Redo) */
  public redo() {
    if (this.currentIndex < this.history.length - 1) {
      this.isProcessing = true;
      this.currentIndex++;
      const nextState = this.history[this.currentIndex];
      
      this.canvas.loadFromJSON(nextState, () => {
        this.canvas.renderAll();
        this.isProcessing = false;
      });
    }
  }
}
