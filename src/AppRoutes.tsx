import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from './App';

// Home (App) stays eagerly imported — it is the first conversion surface and must
// not flash a loading fallback. The heavier secondary routes are code-split so a
// first-time visitor only downloads the route they open. Each lazy import becomes
// its own chunk in the production build.
const HydrobioPage = lazy(() => import('./pages/HydrobioPage'));
const MicroplantesPage = lazy(() => import('./pages/MicroplantesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center" role="status" aria-live="polite">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-hairline border-t-brand" aria-hidden />
      <span className="sr-only">Loading…</span>
    </div>
  );
}

// Single source of truth for the route table so it can be exercised in tests
// (e.g. the wildcard fallback) without booting the real DOM root in main.tsx.
export function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hydrobio" element={<HydrobioPage />} />
        <Route path="/microplantes" element={<MicroplantesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
