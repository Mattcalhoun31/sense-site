import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { colors as C, fonts } from '../brand';

function StatCard({ number, label, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{ textAlign: 'center', padding: 'clamp(28px, 3.5vw, 48px) clamp(16px, 2vw, 32px)', flex: '1 1 160px', minWidth: 140 }}>
      <div style={{ fontFamily: fonts.display, fontSize: 'clamp(36px, 5vw, 58px)', color: C.skyBlue, fontWeight: 700, lineHeight: 1 }}>{number}</div>
      <div style={{ fontFamily: fonts.heading, fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 12, lineHeight: 1.4 }}>{label}</div>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <div style={{ padding: '0 clamp(16px, 3vw, 40px)', background: '#ffffff' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', background: '#0a0a0a',
        borderRadius: 16, display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
        transform: 'translateY(-32px)', boxShadow: '0 12px 48px rgba(0,0,0,0.25)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none',
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(104,199,220,0.3) 10px, rgba(104,199,220,0.3) 11px)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: '20%', right: '20%', height: '60%',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(104,199,220,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <StatCard number="20%" label="Faster Campaign Launch" delay={0} />
        <StatCard number="48%" label="More Third-Party Reach" delay={0.1} />
        <StatCard number="60%" label="Lower CAC" delay={0.2} />
        <StatCard number="3×" label="Return on Ad Spend" delay={0.3} />
      </div>
    </div>
  );
}
