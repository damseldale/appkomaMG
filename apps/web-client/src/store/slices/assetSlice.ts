import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AssetItem {
  id: string;
  url: string;
  thumbnailUrl?: string;
  name: string;
  category: 'image' | 'audio' | 'video' | 'prop' | 'character';
  isUserUploaded: boolean;
}

interface AssetState {
  libraryAssets: AssetItem[];
  userUploads: AssetItem[];
  isLoadingAssets: boolean;
  searchQuery: string;
}

const initialState: AssetState = {
  libraryAssets: [],
  userUploads: [],
  isLoadingAssets: false,
  searchQuery: '',
};

const assetSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    setLoadingAssets: (state, action: PayloadAction<boolean>) => {
      state.isLoadingAssets = action.payload;
    },
    setLibraryAssets: (state, action: PayloadAction<AssetItem[]>) => {
      state.libraryAssets = action.payload;
    },
    setUserUploads: (state, action: PayloadAction<AssetItem[]>) => {
      state.userUploads = action.payload;
    },
    addUserUpload: (state, action: PayloadAction<AssetItem>) => {
      state.userUploads.unshift(action.payload); // Tambahkan ke paling atas
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { 
  setLoadingAssets, 
  setLibraryAssets, 
  setUserUploads, 
  addUserUpload, 
  setSearchQuery 
} = assetSlice.actions;
export default assetSlice.reducer;
