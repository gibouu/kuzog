import { Routes, Route } from 'react-router-dom';
import App from './App';
import BlogPage from './pages/BlogPage';
import HydrobioPage from './pages/HydrobioPage';
import MicroplantesPage from './pages/MicroplantesPage';
import CareersPage from './pages/CareersPage';
import NotFoundPage from './pages/NotFoundPage';

// Single source of truth for the route table so it can be exercised in tests
// (e.g. the wildcard fallback) without booting the real DOM root in main.tsx.
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/hydrobio" element={<HydrobioPage />} />
      <Route path="/microplantes" element={<MicroplantesPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
