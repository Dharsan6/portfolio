import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import SectionTitle from './ui/SectionTitle';
import { personal } from '../data/portfolioData';

const SOCIALS = [
  { icon: FiGithub,   href: personal.github,   label: 'GitHub',   handle: 'Dharsan6' },
  { icon: FiLinkedin, href: personal.linkedin,  label: 'LinkedIn', handle: 'dharsan-s' },
  { icon: FiMail,     href: `mailto:${personal.email}`, label: 'Email', handle: personal.email },
];

const Field = ({ label, name, type = 'text', required, rows, placeholder }) => (
  <div>
    <label
      htmlFor={name}
      style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}
    >
      {label} {required && <span style={{ color: 'var(--accent-primary)' }}>*</span>}
    </label>
    {rows ? (
      <textarea
        id={name} name={name} rows={rows} required={required} placeholder={placeholder}
        className="input"
        style={{ resize: 'none' }}
      />
    ) : (
      <input
        id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="input"
      />
    )}
  </div>
);

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY');
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="section relative"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(99,102,241,0.05) 0%, transparent 60%)' }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">

          {/* ── Left: Editorial CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col h-full"
          >
            <div className="section-eyebrow mb-5">
              <span className="section-eyebrow-line" />
              <span className="label-eyebrow">Contact</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.08,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}
            >
              Let's build
              <br />
              <span className="gradient-text">
                something great.
              </span>
            </h2>

            <p
              className="text-body-lg"
              style={{
                maxWidth: '26rem',
                marginBottom: '2.5rem',
              }}
            >
              Open to internships, full-time roles, and side projects that push AI forward.
              If you're building something ambitious, I'd love to hear about it.
            </p>

            <div className="flex flex-col gap-3 mt-auto">
              <motion.a
                href={`mailto:${personal.email}`}
                whileHover={{ y: -2 }}
                className="surface-card p-4 rounded-xl flex items-center gap-4 transition-all"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }}
                >
                  <FiMail style={{ fontSize: '1.2rem', color: 'var(--accent-primary)' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.15rem' }}>
                    Email
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {personal.email}
                  </p>
                </div>
              </motion.a>

              <div className="grid grid-cols-2 gap-3">
                {SOCIALS.slice(0, 2).map(({ icon: Icon, href, label, handle }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="surface-card p-4 rounded-xl flex items-center gap-4 transition-all"
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }}
                    >
                      <Icon style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.15rem' }}>
                        {label}
                      </p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {handle}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="surface-card p-4 rounded-xl flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#10b981', boxShadow: '0 0 10px rgba(16,185,129,0.5)' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.15rem' }}>
                    Status · Location
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Available · {personal.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <div
              className="surface-glass-strong rounded-2xl p-8 h-full flex flex-col"
              style={{ boxShadow: 'var(--shadow-lg)' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.75rem',
                }}
              >
                Send a message
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Your Name" name="from_name" required placeholder="Jane Smith" />
                  <Field label="Email" name="from_email" type="email" required placeholder="jane@company.com" />
                </div>
                <Field label="Message" name="message" required rows={5} placeholder="Tell me about the role or project..." />

                {/* Status messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-xl text-sm"
                    style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', border: '1px solid rgba(16,185,129,0.2)', fontFamily: 'var(--font-body)' }}
                  >
                    <FiCheckCircle />
                    Message sent — I'll reply within 24h.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-xl text-sm"
                    style={{ background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)', fontFamily: 'var(--font-body)' }}
                  >
                    <FiAlertCircle />
                    Something went wrong — email me directly.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn btn-primary btn-shimmer py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin-slow 0.7s linear infinite' }} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
