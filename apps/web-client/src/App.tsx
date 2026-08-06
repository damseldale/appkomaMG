import React, { Suspense } from 'react';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <>
      {/* 
        Suspense wajib digunakan jika kita memakai React.lazy() di routing.
        Fallback ini akan muncul sepersekian detik saat user pindah dari Dashboard ke Studio.
      */}
      <Suspense 
        fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#FF5A5F' }}>
            Memuat Modul...
          </div>
        }
      >
        <AppRoutes />
      </Suspense>
    </>
  );
};

export default App;
