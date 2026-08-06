import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import projectReducer from './slices/projectSlice';
import canvasReducer from './slices/canvasSlice';
import timelineReducer from './slices/timelineSlice';
import assetReducer from './slices/assetSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
    canvas: canvasReducer,
    timeline: timelineReducer,
    assets: assetReducer,
  },
  // Menonaktifkan serializableCheck opsional, sering digunakan jika ada objek Canvas kompleks 
  // yang masuk ke store, namun untuk performa standar dibiarkan default.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Mengekspor RootState dan AppDispatch untuk digunakan dengan useTypedSelector / useDispatch di komponen React
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
