import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiBookOpen, FiAward, FiStar, FiCalendar } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';
import { stats } from '../data/portfolioData';

/* ─── Animated counter ─── */
const CountUp = ({ target, duration = 1600 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const numericTarget = parseInt(target.replace(/\D/g, ''), 10);
  const suffix = target.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = numericTarget / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const ICONS = {
  'Problems Solved': FiCode,
  'Projects Built': FiBookOpen,
  'Certifications': FiAward,
  'Hackathons': FiStar,
};

const ByTheNumbers = () => {
  return (
    <section
      id="achievements"
      className="section relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 65%)' }}
      />

      <div className="container relative">
        <SectionTitle
          eyebrow="Impact"
          title="By the numbers."
          subtitle="A snapshot of consistent output — from code to competition."
          align="center"
        />

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((s, i) => {
            const Icon = ICONS[s.label] || FiCode;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="surface-card rounded-2xl flex flex-col items-center justify-center text-center p-8 relative group"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${s.color}08 0%, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${s.color}12`, border: `1px solid ${s.color}25` }}
                >
                  <Icon style={{ fontSize: '1.25rem', color: s.color }} />
                </div>

                {/* Animated number */}
                <div className="stat-number text-4xl lg:text-5xl mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--text-primary)' }}>
                  <CountUp target={`${s.value}${s.suffix}`} />
                </div>

                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  {s.label}
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-tertiary)', letterSpacing: '0.06em' }}>
                  {s.sub}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ByTheNumbers;
