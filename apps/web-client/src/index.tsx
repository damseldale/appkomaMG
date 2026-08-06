import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store'; // Konfigurasi Redux Toolkit
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* Provider untuk menghubungkan Redux Store ke seluruh aplikasi */}
    <Provider store={store}>
      {/* BrowserRouter untuk mengaktifkan sistem navigasi pindah halaman */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
