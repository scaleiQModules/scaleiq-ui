import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@scaleiq/scaleiq-ui';
import './index.css';
import routes from './routes/routes'; // Importar el enrutador correctamente

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider darkMode={true}>
      <RouterProvider router={routes} /> {/* Usar el enrutador generado */}
    </ThemeProvider>
  </StrictMode>
);
