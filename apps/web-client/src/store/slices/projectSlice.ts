import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectState {
  projectId: string | null;
  title: string;
  resolution: { width: number; height: number };
  isSaving: boolean;
  lastSaved: string | null;
  fps: number;
}

const initialState: ProjectState = {
  projectId: null,
  title: 'Untitled Project',
  resolution: { width: 1920, height: 1080 }, // Default 1080p
  isSaving: false,
  lastSaved: null,
  fps: 30,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjectInfo: (state, action: PayloadAction<Partial<ProjectState>>) => {
      return { ...state, ...action.payload };
    },
    setSavingStatus: (state, action: PayloadAction<boolean>) => {
      state.isSaving = action.payload;
      if (!action.payload) {
        state.lastSaved = new Date().toISOString();
      }
    },
    updateTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    closeProject: () => initialState, // Reset state saat kembali ke Dashboard
  },
});

export const { setProjectInfo, setSavingStatus, updateTitle, closeProject } = projectSlice.actions;
export default projectSlice.reducer;import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectState {
  projectId: string | null;
  title: string;
  resolution: { width: number; height: number };
  isSaving: boolean;
  lastSaved: string | null;
  fps: number;
}

const initialState: ProjectState = {
  projectId: null,
  title: 'Untitled Project',
  resolution: { width: 1920, height: 1080 }, // Default 1080p
  isSaving: false,
  lastSaved: null,
  fps: 30,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjectInfo: (state, action: PayloadAction<Partial<ProjectState>>) => {
      return { ...state, ...action.payload };
    },
    setSavingStatus: (state, action: PayloadAction<boolean>) => {
      state.isSaving = action.payload;
      if (!action.payload) {
        state.lastSaved = new Date().toISOString();
      }
    },
    updateTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    closeProject: () => initialState, // Reset state saat kembali ke Dashboard
  },
});

export const { setProjectInfo, setSavingStatus, updateTitle, closeProject } = projectSlice.actions;
export default projectSlice.reducer;
