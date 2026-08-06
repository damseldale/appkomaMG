import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IScene } from '../../core/models/Scene.model';

interface TimelineState {
  currentTimeMs: number;       // Posisi playhead (jarum timeline) saat ini
  isPlaying: boolean;          // Status play/pause
  totalDurationMs: number;     // Total panjang semua scene dijumlahkan
  activeSceneId: string | null;// Scene mana yang sedang diedit
  scenes: IScene[];            // Daftar scene di video ini
}

const initialState: TimelineState = {
  currentTimeMs: 0,
  isPlaying: false,
  totalDurationMs: 5000,       // Default awal 5 detik
  activeSceneId: null,
  scenes: [],
};

const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTimeMs = action.payload;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    stopPlayback: (state) => {
      state.isPlaying = false;
      state.currentTimeMs = 0; // Kembali ke awal
    },
    setActiveScene: (state, action: PayloadAction<string>) => {
      state.activeSceneId = action.payload;
    },
    setScenes: (state, action: PayloadAction<IScene[]>) => {
      state.scenes = action.payload;
      // Otomatis kalkulasi durasi total setiap kali scene berubah
      state.totalDurationMs = action.payload.reduce((total, scene) => total + scene.duration, 0);
    },
  },
});

export const { setCurrentTime, togglePlay, stopPlayback, setActiveScene, setScenes } = timelineSlice.actions;
export default timelineSlice.reducer;
