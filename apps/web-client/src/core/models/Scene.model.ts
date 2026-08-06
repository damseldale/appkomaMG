/**
 * Efek transisi saat berpindah dari satu scene ke scene berikutnya.
 */
export interface ISceneTransition {
  type: 'fade' | 'slide-left' | 'slide-right' | 'wipe' | 'none';
  duration: number; // Durasi transisi dalam milidetik (ms)
}

/**
 * Representasi satu Scene (Slide) animasi.
 */
export interface IScene {
  id: string;
  name: string;                 // Contoh: "Scene 1", "Intro"
  duration: number;             // Durasi scene dalam milidetik (contoh: 5000 = 5 detik)
  backgroundColor: string;      // Warna background dasar (Hex)
  backgroundImageUrl?: string;  // (Opsional) URL gambar background
  transitionOut: ISceneTransition; 
  
  /** 
   * Array berisi semua objek (teks, karakter, gambar) yang ada di dalam scene ini.
   * Formatnya mengikuti struktur JSON ekspor dari Fabric.js
   */
  elements: any[]; 
  
  order: number; // Urutan scene di timeline (0, 1, 2, dst)
}
