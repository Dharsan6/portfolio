import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  delay = 0,
  hoverGlow = false,
  glowColor = 'var(--accent-primary)',
  style = {},
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hoverGlow ? { y: -4, boxShadow: `0 20px 50px ${glowColor}20, 0 0 0 1px ${glowColor}15` } : undefined}
      onClick={onClick}
      className={`surface-card rounded-2xl transition-all duration-300 ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
