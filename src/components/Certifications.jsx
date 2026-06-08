import { motion } from 'framer-motion';
import { FiAward, FiCalendar } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';
import { certifications } from '../data/portfolioData';

const CertCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.12 }}
    whileHover={{ y: -6 }}
    className="relative group rounded-2xl overflow-hidden transition-all duration-300 surface-card h-full flex flex-col"
  >
    {/* Gradient accent bar */}
    <div
      className="h-1 w-full"
      style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
    />

    <div className="p-6">
      {/* Icon + badge */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
        >
          {cert.icon}
        </div>
        <div
          className="px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5"
          style={{ background: `${cert.color}10`, color: cert.color, border: `1px solid ${cert.color}20` }}
        >
          <FiAward className="text-xs" />
          Certified
        </div>
      </div>

      {/* Title */}
      <h3 className="text-card mb-1.5 leading-snug">
        {cert.title}
      </h3>

      {/* Issuer */}
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 500, color: cert.color, marginBottom: '0.75rem' }}>
        {cert.issuer}
      </p>

      {/* Description */}
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '1rem' }}>
        {cert.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 mt-auto" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="flex items-center gap-1.5" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-tertiary)' }}>
          <FiCalendar style={{ fontSize: '0.6rem' }} />
          {cert.date}
        </div>
        {cert.score && (
          <div
            className="px-2.5 py-1 rounded-lg"
            style={{
              background: 'rgba(16,185,129,0.1)',
              color: '#10b981',
              border: '1px solid rgba(16,185,129,0.2)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              fontWeight: 700,
            }}
          >
            Score: {cert.score}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="section relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 40% 60% at 50% 50%, rgba(124,58,237,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="container relative">
        <SectionTitle
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Industry-recognized credentials and academic achievements"
        />

        {/* Timeline connector line (decorative) */}
        <div className="hidden lg:block">
          <div className="relative">
            <div
              className="absolute top-1/2 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.15), rgba(139,92,246,0.15), transparent)' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
