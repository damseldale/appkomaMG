import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CanvasState {
  selectedObjectIds: string[];
  zoomScale: number;
  backgroundColor: string;
  isGuidelinesEnabled: boolean;
}

const initialState: CanvasState = {
  selectedObjectIds: [],
  zoomScale: 1, // 1 = 100%
  backgroundColor: '#ffffff',
  isGuidelinesEnabled: true, // Garis bantu grid untuk snapping
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    setSelectedObjects: (state, action: PayloadAction<string[]>) => {
      state.selectedObjectIds = action.payload;
    },
    clearSelection: (state) => {
      state.selectedObjectIds = [];
    },
    setZoomScale: (state, action: PayloadAction<number>) => {
      state.zoomScale = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
    toggleGuidelines: (state) => {
      state.isGuidelinesEnabled = !state.isGuidelinesEnabled;
    },
  },
});

export const { 
  setSelectedObjects, 
  clearSelection, 
  setZoomScale, 
  setBackgroundColor, 
  toggleGuidelines 
} = canvasSlice.actions;
export default canvasSlice.reducer;
