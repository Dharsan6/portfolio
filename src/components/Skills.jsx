import { motion } from 'framer-motion';
import {
  SiPython, SiCplusplus,
  SiReact, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiFlask,
  SiMongodb,
  SiGithub, SiVite, SiPostman,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import { FiCpu, FiLayers, FiServer, FiDatabase, FiZap, FiTool } from 'react-icons/fi';
import SectionTitle from './ui/SectionTitle';
import { skills } from '../data/portfolioData';

/* ── Tech icon map ── */
const TECH_ICONS = {
  Python:       SiPython,
  'C++':        SiCplusplus,
  Java:         FaJava,
  React:        SiReact,
  HTML5:        SiHtml5,
  CSS3:         SiCss,
  'Tailwind CSS': SiTailwindcss,
  'Node.js':    SiNodedotjs,
  'Express.js': SiExpress,
  Flask:        SiFlask,
  'MongoDB Atlas': SiMongodb,
  GitHub:       SiGithub,
  'VS Code':    VscVscode,
  Vite:         SiVite,
  Postman:      SiPostman,
};

const CATEGORY_ICONS = {
  terminal: FiCpu,
  layout:   FiLayers,
  server:   FiServer,
  database: FiDatabase,
  brain:    FiZap,
  tools:    FiTool,
};

const SkillBadge = ({ name, color }) => {
  const Icon = TECH_ICONS[name];
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -2 }}
      className="flex items-center gap-2 px-3 py-2.5 rounded-xl surface-card"
      style={{
        cursor: 'default',
        transition: 'all 0.18s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${color}35`;
        e.currentTarget.style.boxShadow = `0 8px 24px ${color}12`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {Icon ? (
        <Icon style={{ fontSize: '1rem', color, flexShrink: 0 }} />
      ) : (
        <div
          style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }}
        />
      )}
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
        {name}
      </span>
    </motion.div>
  );
};

const SkillCard = ({ group, index }) => {
  const CatIcon = CATEGORY_ICONS[group.icon] || FiZap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="p-6 rounded-2xl flex flex-col gap-5 surface-card"
      style={{
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = `${group.color}30`; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${group.color}12`, border: `1px solid ${group.color}25` }}
        >
          <CatIcon style={{ color: group.color, fontSize: '1rem' }} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
          {group.category}
        </h3>
      </div>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2">
        {group.items.map(item => (
          <SkillBadge key={item} name={item} color={group.color} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => (
  <section
    id="skills"
    className="section relative"
    style={{ background: 'var(--bg-primary)' }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 50% 45% at 90% 30%, rgba(139,92,246,0.04) 0%, transparent 65%)' }}
    />

    <div className="container relative">
      <SectionTitle
        eyebrow="Skills"
        title="The stack I ship with."
        subtitle="Technologies I use daily to build production AI and full-stack applications."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, i) => (
          <SkillCard key={group.category} group={group} index={i} />
        ))}
      </div>

      {/* Currently exploring strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 p-5 rounded-2xl flex flex-wrap items-center gap-4 surface-card"
        style={{}}
      >
        <span className="label-eyebrow flex-shrink-0">Currently Exploring</span>
        <div className="flex flex-wrap gap-2">
          {['LLM fine-tuning', 'TypeScript', 'Docker', 'FastAPI', 'System Design'].map(item => (
            <span
              key={item}
              className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
                background: 'rgba(99,102,241,0.05)',
                border: '1px solid rgba(99,102,241,0.15)',
              }}
            >
              <span style={{ color: 'var(--accent-primary)', fontSize: '0.45rem' }}>●</span>
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
