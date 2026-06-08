import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiArrowUpRight } from 'react-icons/fi';
import { HiStar } from 'react-icons/hi';
import SectionTitle from './ui/SectionTitle';
import { projects } from '../data/portfolioData';

const Pill = ({ label }) => <span className="pill">{label}</span>;

/* ── Project Detail Modal ── */
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(5,5,5,0.85)', backdropFilter: 'blur(16px)' }}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
          className="relative w-full max-w-xl rounded-2xl overflow-hidden z-10"
          style={{
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-default)',
            boxShadow: 'var(--shadow-xl)',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          {/* Accent top */}
          <div style={{ height: '2px', background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }} />

          <div className="p-7">
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="label-eyebrow mb-2">
                  {project.featured ? '⭐ Featured Project' : 'Project'}
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                  {project.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                  {project.tagline}
                </p>
              </div>
              <button
                onClick={onClose}
                className="btn-icon flex-shrink-0 ml-4"
                aria-label="Close modal"
              >
                <FiX className="text-sm" />
              </button>
            </div>

            {/* Description */}
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              {project.longDescription}
            </p>

            {/* Features */}
            <div className="mb-5">
              <p className="label-eyebrow mb-3" style={{ color: 'var(--text-tertiary)' }}>Key Features</p>
              <div className="grid grid-cols-1 gap-2">
                {project.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: project.accentColor, flexShrink: 0 }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech */}
            <div className="mb-6">
              <p className="label-eyebrow mb-3" style={{ color: 'var(--text-tertiary)' }}>Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map(t => <Pill key={t} label={t} />)}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-shimmer flex-1 justify-center"
                >
                  <FiGithub /> View Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary flex-1 justify-center"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ── Featured project card ── */
const FeaturedCard = ({ project, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    className="relative rounded-2xl overflow-hidden cursor-pointer group surface-card"
    style={{
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = `${project.accentColor}35`;
      e.currentTarget.style.boxShadow = `0 24px 60px ${project.accentColor}12`;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    onClick={() => onOpen(project)}
  >
    {/* Accent line */}
    <div style={{ height: '2px', background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }} />

    <div className="p-8 lg:p-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:items-start">

        {/* Content */}
        <div className="flex-1">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-5">
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                background: 'rgba(99, 102, 241, 0.08)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                color: 'var(--accent-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
              }}
            >
              <span className="status-dot" style={{ width: 4, height: 4 }} />
              CASE STUDY
            </div>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.7rem',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: '0.35rem',
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: project.accentColor, marginBottom: '1rem' }}>
            {project.tagline}
          </p>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '38rem' }}>
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map(t => <Pill key={t} label={t} />)}
          </div>

          {/* Actions */}
          <div className="flex gap-3" onClick={e => e.stopPropagation()}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-shimmer"
              >
                <FiGithub /> GitHub
              </a>
            )}
            <button onClick={() => onOpen(project)} className="btn btn-secondary">
              Case Study <FiArrowUpRight className="text-xs" />
            </button>
          </div>
        </div>

        {/* Visual: mini-terminal */}
        <div className="flex-shrink-0 lg:w-64">
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-circle" style={{ background: '#f87171' }} />
              <div className="terminal-circle" style={{ background: '#fbbf24' }} />
              <div className="terminal-circle" style={{ background: '#4ade80' }} />
              <span style={{ marginLeft: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#4a5568' }}>
                system_init.sh
              </span>
            </div>
            <div className="terminal-body" style={{ fontSize: '0.72rem' }}>
              <div><span className="t-comment">{`// Initializing core microservices`}</span></div>
              <div className="mt-1"><span className="t-keyword">docker-compose</span> up <span className="t-string">-d</span></div>
              <div className="mt-2"><span className="t-keyword">Starting</span> api-gateway <span className="t-output">... done</span></div>
              <div><span className="t-keyword">Starting</span> auth-service <span className="t-output">... done</span></div>
              <div><span className="t-keyword">Starting</span> ml-inference <span className="t-output">... done</span></div>
              <div className="mt-2"><span style={{ color: '#4ade80' }}>✓</span> System healthy</div>
              <div><span style={{ color: '#4ade80' }}>✓</span> Ready for production</div>
              <div className="mt-1"><span className="t-cursor">▌</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ── Other project card ── */
const ProjectCard = ({ project, index, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    onClick={() => onOpen(project)}
    className="group rounded-2xl overflow-hidden cursor-pointer flex flex-col surface-card"
    style={{
      transition: 'all 0.25s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = `${project.accentColor}30`;
      e.currentTarget.style.boxShadow = `0 16px 40px ${project.accentColor}10`;
      e.currentTarget.style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    {/* Accent top line */}
    <div style={{ height: '1px', background: `linear-gradient(90deg, ${project.accentColor} 0%, transparent 100%)`, opacity: 0.7 }} />

    <div className="p-6 flex flex-col flex-1">
      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: 1,
            color: `${project.accentColor}12`,
            letterSpacing: '-0.06em',
            userSelect: 'none',
            transition: 'color 0.25s ease',
          }}
          className="group-hover:!opacity-100"
          onMouseEnter={e => { e.currentTarget.style.color = `${project.accentColor}25`; }}
          onMouseLeave={e => { e.currentTarget.style.color = `${project.accentColor}12`; }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="btn-icon w-8 h-8 rounded-lg"
            title="GitHub"
          >
            <FiGithub style={{ fontSize: '0.85rem' }} />
          </a>
        )}
      </div>

      <h3 className="text-card mb-2">{project.title}</h3>

      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1rem', flexGrow: 1 }}>
        {project.description}
      </p>

      {/* Tech */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 4).map(t => <Pill key={t} label={t} />)}
        {project.tech.length > 4 && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-tertiary)', padding: '0.2rem 0.4rem' }}>
            +{project.tech.length - 4} more
          </span>
        )}
      </div>

      {/* View details */}
      <div
        className="flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ fontFamily: 'var(--font-mono)', color: project.accentColor }}
      >
        View details <FiArrowUpRight className="text-xs" />
      </div>
    </div>
  </motion.div>
);

/* ── Main component ── */
const Projects = () => {
  const [selected, setSelected] = useState(null);
  const featured = projects.find(p => p.featured);
  const others   = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      className="section relative"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 40% at 5% 70%, rgba(99,102,241,0.04) 0%, transparent 60%)' }}
      />

      <div className="container relative">
        <SectionTitle
          eyebrow="Projects"
          title="What I've built."
          subtitle="Production-ready applications across AI/ML, full-stack, and data engineering."
        />

        {/* Featured */}
        {featured && (
          <div className="mb-8">
            <FeaturedCard project={featured} onOpen={setSelected} />
          </div>
        )}

        {/* Other projects */}
        <div>
          <p className="label-eyebrow mb-5" style={{ color: 'var(--text-tertiary)' }}>More Projects</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Projects;
