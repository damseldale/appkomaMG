/**
 * Bagian-bagian tubuh karakter (modular).
 * Menyimpan URL aset S3 untuk setiap potongan tubuh.
 */
export interface ICharacterParts {
  headUrl: string;
  bodyUrl: string;
  outfitUrl: string;
  accessoriesUrls?: string[];
}

/**
 * Aksi yang sedang dilakukan karakter (seperti animasi berjalan, melambai).
 * Biasanya berupa Sprite Sheet atau data Lottie JSON.
 */
export interface ICharacterAction {
  id: string;
  name: string;           // Contoh: "Walking", "Waving", "Working on Laptop"
  animationDataUrl: string;
  isLooping: boolean;     // Apakah animasi diulang terus atau berhenti di akhir
}

/**
 * Sinkronisasi gerak bibir berdasarkan input suara (Lip-sync / Text-to-Speech).
 */
export interface ILipSyncData {
  audioUrl: string;       // File suara yang di-generate atau di-upload user
  
  // Visemes adalah bentuk mulut pada waktu (time) tertentu.
  // Contoh: pada detik ke-0.5, mulut berbentuk huruf "O" (value: "O")
  visemes: Array<{ time: number; value: string }>; 
}

/**
 * Representasi Data Karakter Keseluruhan
 */
export interface ICharacter {
  id: string;
  name: string;
  parts: ICharacterParts;
  
  // State karakter saat ini di kanvas
  currentAction?: ICharacterAction;
  currentExpression?: string;  // Contoh: "Happy", "Sad", "Angry", "Surprised"
  
  // Data suara jika karakter sedang berbicara
  lipSync?: ILipSyncData;
}
