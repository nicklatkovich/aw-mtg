import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
