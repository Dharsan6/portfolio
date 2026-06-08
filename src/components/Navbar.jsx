import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import ThemeToggle from './ui/ThemeToggle';
import { personal } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
];

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeId,    setActiveId]    = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const ids = ['home', 'projects', 'about', 'skills', 'achievements', 'certifications', 'contact'];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveId(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'var(--bg-secondary)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        }}
      >
        <div className="container w-full">
          <div className="flex items-center justify-between lg:justify-start h-[72px] w-full">

            {/* Left: 20% width (Logo) */}
            <div className="flex-shrink-0 lg:w-[20%] flex items-center">
              <motion.button
                onClick={() => scrollTo('#home')}
                whileHover={{ opacity: 0.75 }}
                className="flex items-center gap-2.5"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-violet))',
                    fontFamily: 'var(--font-display)',
                    boxShadow: '0 0 16px rgba(99,102,241,0.3)',
                  }}
                >
                  DS
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {personal.domain}
                </span>
              </motion.button>
            </div>

            {/* Center: 50% width (Nav Links) */}
            <div className="hidden lg:flex w-[50%] items-center justify-center gap-9">
              {NAV_LINKS.map((link) => {
                const active = activeId === link.href.slice(1);
                return (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="relative py-1 transition-colors duration-200"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      fontWeight: 500,
                      color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                    }}
                    onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'var(--text-primary)'; }}
                    onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {active && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 rounded-full"
                        style={{ width: 4, height: 4, background: 'var(--text-primary)' }}
                        transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: 30% width (Actions) */}
            <div className="flex items-center justify-end gap-4 lg:w-[30%]">
              {/* Availability Badge */}
              <div className="hidden xl:flex badge-available items-center h-[34px]">
                <span className="status-dot" />
                Open to roles
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center h-[34px]">
                <ThemeToggle />
              </div>

              {/* Resume Button */}
              <motion.a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="hidden md:flex btn btn-primary btn-shimmer items-center justify-center h-[34px] px-4"
                style={{ borderRadius: '8px', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}
              >
                Resume
              </motion.a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(v => !v)}
                className="lg:hidden btn-icon h-[34px] w-[34px] flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {mobileOpen
                  ? <HiX className="text-lg" />
                  : <HiMenuAlt3 className="text-lg" />
                }
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 lg:hidden surface-glass-strong"
            style={{ borderBottom: '1px solid var(--border-subtle)' }}
          >
            <div className="container py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: activeId === link.href.slice(1) ? 'var(--text-primary)' : 'var(--text-secondary)',
                    background: activeId === link.href.slice(1) ? 'var(--bg-card-hover)' : 'transparent',
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-4 mt-3 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center py-2.5"
                  style={{ borderRadius: '10px' }}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
