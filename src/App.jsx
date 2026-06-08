import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy-load non-critical sections
const About       = lazy(() => import('./components/About'));
const Projects    = lazy(() => import('./components/Projects'));
const Skills      = lazy(() => import('./components/Skills'));
const ByTheNumbers = lazy(() => import('./components/ByTheNumbers'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact     = lazy(() => import('./components/Contact'));

const Fallback = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 0' }}>
    <div style={{ display: 'flex', gap: '6px' }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 6, height: 6,
            borderRadius: '50%',
            background: 'var(--accent-primary)',
            animation: `float ${0.6 + i * 0.15}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>
  </div>
);

function App() {
  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<Fallback />}><Projects /></Suspense>
        <Suspense fallback={<Fallback />}><About /></Suspense>
        <Suspense fallback={<Fallback />}><Skills /></Suspense>
        <Suspense fallback={<Fallback />}><ByTheNumbers /></Suspense>
        <Suspense fallback={<Fallback />}><Certifications /></Suspense>
        <Suspense fallback={<Fallback />}><Contact /></Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
