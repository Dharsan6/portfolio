import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiBookOpen, FiAward, FiTarget } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';
import { achievements } from '../data/portfolioData';

const ICONS = {
  code: FiCode,
  project: FiBookOpen,
  trophy: FiTarget,
  cert: FiAward,
};

const CountUp = ({ target, duration = 1800 }) => {
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
    <span ref={ref} className="stat-number" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
      {count}{suffix}
    </span>
  );
};

const AchievementCard = ({ achievement, index }) => {
  const Icon = ICONS[achievement.icon] || FiCode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl p-8 text-center overflow-hidden group transition-all duration-300 surface-card"
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${achievement.color}08 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
        style={{ background: `${achievement.color}15`, border: `1px solid ${achievement.color}30` }}
      >
        <Icon className="text-2xl" style={{ color: achievement.color }} />
      </div>

      {/* Animated count */}
      <CountUp target={achievement.value} />

      {/* Label */}
      <h3 className="text-card mt-2 mb-1">
        {achievement.label}
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        {achievement.detail}
      </p>
    </motion.div>
  );
};

const ACHIEVEMENT_ITEMS = [
  "Solved 450+ coding problems on Skillrack platform",
  "Built multiple production-ready full-stack web applications",
  "Developed AI/ML projects using NLP, BERT, and scikit-learn",
  "Participated in AI-focused hackathons and national ideathons",
  "Earned certifications from Salesforce and IIT Madras (NPTEL)",
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="section relative"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="container relative">
        <SectionTitle
          eyebrow="Achievements"
          title="Achievements"
          subtitle="Milestones that reflect consistent growth and dedication"
        />

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {achievements.map((a, i) => (
            <AchievementCard key={a.label} achievement={a} index={i} />
          ))}
        </div>

        {/* Achievement list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="surface-card rounded-2xl p-8"
        >
          <h3 className="text-card mb-6 gradient-text-blue" style={{ fontSize: '1.1rem' }}>Highlights</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {ACHIEVEMENT_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-3"
              >
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-violet))' }}
                />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
