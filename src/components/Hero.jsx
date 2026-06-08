import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiExternalLink } from 'react-icons/fi';
import { personal, stats } from '../data/portfolioData';

/* ── Fade-up variant factory ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Ambient orb ── */
const Orb = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      filter: 'blur(80px)',
      ...style,
    }}
  />
);

/* ── Profile avatar ── */
const ProfileAvatar = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    className="relative flex-shrink-0"
    style={{
      boxShadow: '0 0 35px rgba(56, 189, 248, 0.25), 0 0 70px rgba(99, 102, 241, 0.12)',
      borderRadius: '50%',
    }}
  >
    {/* Gradient ring (animated) */}
    <div
      className="absolute inset-[-3px] rounded-full animate-spin-slow"
      style={{
        background: 'conic-gradient(from 0deg, var(--accent-primary), var(--accent-violet), var(--accent-sky), var(--accent-primary))',
        borderRadius: '50%',
      }}
    />
    {/* Ring gap */}
    <div
      className="absolute inset-[-1px] rounded-full"
      style={{ background: 'var(--bg-primary)', borderRadius: '50%' }}
    />
    {/* Avatar container */}
    <div
      className="relative w-44 h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #111827 0%, #1e1b4b 50%, #0f172a 100%)' }}
    >
      <motion.img
        src="/profile.jpg"
        alt="Dharsan S"
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>

    {/* Floating badge — Available */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -bottom-2 -right-3"
    >
      <div className="badge-available shadow-lg" style={{ fontSize: '0.6rem' }}>
        <span className="status-dot" />
        Available
      </div>
    </motion.div>
  </motion.div>
);

/* ── Stat strip ── */
const StatStrip = () => (
  <motion.div
    {...fadeUp(0.7)}
    className="flex flex-wrap gap-6 items-center pt-2"
  >
    {stats.map((s, i) => (
      <div key={i} className="flex items-baseline gap-1.5">
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: s.color,
          }}
        >
          {s.value}{s.suffix}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            color: 'var(--text-tertiary)',
          }}
        >
          {s.label}
        </span>
        {i < stats.length - 1 && (
          <span style={{ color: 'var(--border-strong)', marginLeft: '0.5rem', fontSize: '0.85rem' }}>·</span>
        )}
      </div>
    ))}
  </motion.div>
);

/* ── Social link ── */
const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.92 }}
    className="btn-icon w-9 h-9 rounded-xl"
    title={label}
  >
    <Icon style={{ fontSize: '1rem' }} />
  </motion.a>
);

/* ── Main Hero ── */
const Hero = () => {
  const scrollToWork = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

      {/* Ambient orbs */}
      <Orb style={{ top: '10%', left: '5%', width: 500, height: 500, background: 'rgba(99,102,241,0.07)' }} />
      <Orb style={{ bottom: '5%', right: '8%', width: 600, height: 600, background: 'rgba(139,92,246,0.05)' }} />
      <Orb style={{ top: '50%', left: '40%', width: 400, height: 400, background: 'rgba(56,189,248,0.04)' }} />

      <div className="container relative w-full pt-28 pb-24" style={{ zIndex: 1 }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-14 lg:gap-20">

          {/* ── Left: Content ── */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">

            {/* Eyebrow */}
            <motion.div {...fadeUp(0)} className="flex items-center justify-center lg:justify-start gap-3 mb-7">
              <span className="label-eyebrow">{personal.headline}</span>
            </motion.div>

            {/* Hero headline */}
            <motion.div {...fadeUp(0.1)}>
              <h1 className="text-hero mb-5">
                {personal.heroLine1}
                <br />
                <span className="gradient-text">{personal.heroLine2}</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.22)}
              className="text-body-lg mb-8 mx-auto lg:mx-0"
              style={{ maxWidth: '30rem' }}
            >
              {personal.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.35)}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToWork}
                className="btn btn-primary btn-shimmer"
              >
                View Projects
                <FiArrowDown className="text-sm" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToContact}
                className="btn btn-secondary"
              >
                Get in Touch
              </motion.button>

              <motion.a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-ghost"
              >
                Resume
                <FiExternalLink className="text-xs" />
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...fadeUp(0.48)}
              className="flex items-center gap-3 justify-center lg:justify-start mb-10"
            >
              <span className="label-eyebrow" style={{ color: 'var(--text-tertiary)', fontSize: '0.58rem' }}>
                CONNECT
              </span>
              <SocialLink href={personal.github}   icon={FiGithub}   label="GitHub" />
              <SocialLink href={personal.linkedin}  icon={FiLinkedin} label="LinkedIn" />
              <SocialLink href={`mailto:${personal.email}`} icon={FiMail} label="Email" />
            </motion.div>

            {/* Stats */}
            <div className="hidden lg:block">
              <StatStrip />
            </div>
          </div>

          {/* ── Right: Profile avatar ── */}
          <div className="flex flex-col items-center gap-8 lg:pt-6">
            <ProfileAvatar />

            {/* Location badge */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex items-center gap-2"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--text-tertiary)',
                letterSpacing: '0.08em',
              }}
            >
              <span style={{ color: 'var(--accent-emerald)', fontSize: '0.5rem' }}>◉</span>
              {personal.location}
            </motion.div>
          </div>
        </div>

        {/* Stats on mobile */}
        <motion.div {...fadeUp(0.8)} className="lg:hidden mt-10">
          <StatStrip />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToWork}
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
