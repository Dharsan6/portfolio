import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar } from 'react-icons/hi';
import SectionTitle from './ui/SectionTitle';
import { about } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const About = () => (
  <section
    id="about"
    className="section relative"
    style={{ background: 'var(--bg-secondary)' }}
  >
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(99,102,241,0.05) 0%, transparent 60%)' }}
    />

    <div className="container relative">
      <SectionTitle
        eyebrow="About"
        title="Who I am."
        subtitle=""
      />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start lg:mt-8">

        {/* Left: Bio */}
        <div className="lg:col-span-7">
          <div className="space-y-6">
            {about.bio.map((para, i) => (
              <motion.p
                key={i}
                {...fadeUp(i * 0.1)}
                className="text-body-lg"
                style={{ lineHeight: 1.85, color: 'var(--text-secondary)' }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Right: Education card */}
        <div className="lg:col-span-5">
          <motion.div
            {...fadeUp(0.2)}
            className="rounded-2xl overflow-hidden surface-card p-8 lg:p-10"
            style={{
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
              >
                <HiAcademicCap style={{ color: 'var(--accent-primary)', fontSize: '1.4rem' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                Education
              </h3>
            </div>

            <div className="space-y-5">
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.4, marginBottom: '0.35rem' }}>
                  {about.education.degree}
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  {about.education.institution}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}
                >
                  <HiCalendar style={{ fontSize: '1rem' }} />
                  {about.education.years}
                </div>
                <div style={{ width: 1, height: '1rem', background: 'var(--border-subtle)' }} />
                <div
                  className="text-sm font-medium"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}
                >
                  CGPA {about.education.cgpa}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  </section>
);

export default About;
