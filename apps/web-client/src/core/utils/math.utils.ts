/**
 * Membatasi (clamp) sebuah nilai agar selalu berada di antara nilai minimum dan maksimum.
 * Berguna saat men-drag objek agar tidak keluar dari batas area Canvas.
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Mengonversi derajat (degrees) menjadi radian (radians).
 * Fabric.js kadang menggunakan derajat untuk rotasi, tapi fungsi Math bawaan JS menggunakan radian.
 */
export const degreesToRadians = (degrees: number): number => {
  return degrees * (Math.PI / 180);
};

/**
 * Mengonversi radian ke derajat.
 */
export const radiansToDegrees = (radians: number): number => {
  return radians * (180 / Math.PI);
};

/**
 * Menghitung jarak antara dua titik koordinat (x, y).
 * Berguna untuk menghitung panjang garis antar objek atau deteksi tabrakan (collision).
 */
export const getDistance = (x1: number, y1: number, x2: number, y2: number): number => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
};

/**
 * Menghitung rasio skala (aspect ratio) untuk memastikan gambar atau video 
 * yang diunggah pengguna tidak gepeng (stretch) saat dimasukkan ke dalam Canvas.
 */
export const calculateAspectRatioFit = (
  srcWidth: number, 
  srcHeight: number, 
  maxWidth: number, 
  maxHeight: number
) => {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return { 
    width: srcWidth * ratio, 
    height: srcHeight * ratio,
    scale: ratio
  };
};
