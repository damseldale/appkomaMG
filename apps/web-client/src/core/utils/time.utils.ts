/**
 * Mengonversi waktu dalam milidetik menjadi format Timecode (MM:SS:ms).
 * Contoh: 6500 ms -> "00:06:50" (Menit:Detik:Milidetik).
 * Sangat dibutuhkan untuk menampilkan angka di Ruler/Penggaris Timeline bawah.
 */
export const formatTimecode = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  // Ambil 2 digit pertama dari milidetik untuk ditampilkan
  const ms = Math.floor((milliseconds % 1000) / 10); 

  const pad = (num: number) => num.toString().padStart(2, '0');

  return `${pad(minutes)}:${pad(seconds)}:${pad(ms)}`;
};

/**
 * Mengonversi Milidetik (ms) ke Frame berdasarkan FPS.
 * Jika video dirender di 30 FPS, maka detik ke-1 sama dengan frame ke-30.
 * Render Engine (FFmpeg) backend akan membutuhkan nilai frame, bukan ms.
 */
export const msToFrames = (milliseconds: number, fps: number = 30): number => {
  const seconds = milliseconds / 1000;
  return Math.round(seconds * fps);
};

/**
 * Mengonversi Frame kembali ke Milidetik (ms).
 * Berguna saat data dari backend ditarik kembali ke UI frontend.
 */
export const framesToMs = (frames: number, fps: number = 30): number => {
  return (frames / fps) * 1000;
};

/**
 * Menghitung posisi X (dalam pixel) dari sebuah item di Timeline 
 * berdasarkan waktu mulai (startTime) dan skala zoom UI.
 * 
 * @param timeMs - Waktu saat ini atau waktu mulai klip (dalam ms)
 * @param zoomScale - Skala perbesaran timeline (misal: 10px per 1000ms)
 */
export const timeToPixel = (timeMs: number, zoomScale: number): number => {
  // Misalnya 1 detik (1000ms) = 50 pixel jika zoomScale = 1
  const pixelsPerMs = 50 / 1000; 
  return timeMs * pixelsPerMs * zoomScale;
};

/**
 * Kebalikan dari timeToPixel. 
 * Berguna saat user men-drag klip di Timeline (berupa pixel) 
 * dan kita harus mengubahnya kembali jadi waktu (ms) untuk disimpan ke database.
 */
export const pixelToTime = (pixel: number, zoomScale: number): number => {
  const msPerPixel = 1000 / 50; 
  return Math.round((pixel / zoomScale) * msPerPixel);
};
