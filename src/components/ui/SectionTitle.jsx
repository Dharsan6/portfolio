import { motion } from 'framer-motion';

const SectionTitle = ({
  eyebrow,
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';
  const eyebrowText = eyebrow || label;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 ${isCenter ? 'text-center' : ''} ${className}`}
    >
      {/* Eyebrow */}
      {eyebrowText && (
        <div className={`section-eyebrow mb-4 ${isCenter ? 'justify-center' : ''}`}>
          {!isCenter && <span className="section-eyebrow-line" />}
          <span className="label-eyebrow">{eyebrowText}</span>
          {isCenter && <span className="section-eyebrow-line" />}
        </div>
      )}

      {/* Title */}
      <h2
        className="text-section"
        style={{ marginBottom: subtitle ? '0.75rem' : 0 }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="text-body-lg"
          style={{
            maxWidth: isCenter ? '36rem' : '28rem',
            marginLeft: isCenter ? 'auto' : undefined,
            marginRight: isCenter ? 'auto' : undefined,
            marginTop: '0.6rem',
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
