import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { NavigationProvider } from './contexts/NavigationContext';
import App from './App';
import BlogPage from './pages/BlogPage';
import HydrobioPage from './pages/HydrobioPage';
import MicroplantesPage from './pages/MicroplantesPage';
import GroupPage from './pages/GroupPage';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <NavigationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/hydrobio" element={<HydrobioPage />} />
            <Route path="/microplantes" element={<MicroplantesPage />} />
            <Route path="/group" element={<GroupPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </BrowserRouter>
      </NavigationProvider>
    </LanguageProvider>
  </React.StrictMode>
);
