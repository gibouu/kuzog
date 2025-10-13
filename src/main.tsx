import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AgriPage from './pages/AgriPage';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/kuzog">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/agri" element={<AgriPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
