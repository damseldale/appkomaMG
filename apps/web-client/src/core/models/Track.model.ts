// Jenis-jenis track yang ada di Timeline Editor
export type TrackType = 'video' | 'audio' | 'voiceover' | 'element';

/**
 * Blok klip / objek yang diletakkan di dalam sebuah Track.
 */
export interface ITrackItem {
  id: string;
  elementId: string;       // Merujuk pada ID objek di Fabric Canvas atau S3 URL (untuk audio)
  startTime: number;       // Titik mulai di timeline (dalam milidetik)
  duration: number;        // Panjang durasi klip/objek tampil (dalam milidetik)
  
  // Efek animasi In/Out khusus untuk item ini
  inEffect?: string;       // Contoh: "pop-in", "fade-in"
  outEffect?: string;      // Contoh: "slide-out"
}

/**
 * Representasi satu baris Layer/Track di panel Timeline bawah.
 */
export interface ITrack {
  id: string;
  name: string;            // Contoh: "Background Music", "Karakter Utama"
  type: TrackType;
  isLocked: boolean;       // Jika true, objek di track ini tidak bisa diedit/digeser
  isHidden: boolean;       // Jika true, objek di track ini disembunyikan dari Canvas
  isMuted?: boolean;       // (Khusus audio) Jika true, suara dibisukan
  
  items: ITrackItem[];     // Daftar item yang berada di baris track ini
}
