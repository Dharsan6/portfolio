import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personal } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative py-8"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.4) 40%, rgba(139,92,246,0.4) 60%, transparent 100%)' }}
      />

      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Left: Wordmark + copyright */}
          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              dharsan
              <span style={{ color: 'var(--accent-primary)' }}>.dev</span>
            </span>
            <span style={{ color: 'var(--border-default)' }}>·</span>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
              © {new Date().getFullYear()} Dharsan S
            </p>
          </div>



          {/* Right: Social icons + back to top */}
          <div className="flex items-center gap-3">
            {[
              { icon: FiGithub,   href: personal.github,                  label: 'GitHub' },
              { icon: FiLinkedin, href: personal.linkedin,                 label: 'LinkedIn' },
              { icon: FiMail,     href: `mailto:${personal.email}`,        label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="btn-icon w-8 h-8 rounded-lg"
              >
                <Icon style={{ fontSize: '0.82rem' }} />
              </motion.a>
            ))}

            <div style={{ width: '1px', height: '1rem', background: 'var(--border-subtle)' }} />

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
              className="btn-icon w-8 h-8 rounded-lg"
            >
              <FiArrowUp style={{ fontSize: '0.82rem', color: 'var(--accent-primary)' }} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
