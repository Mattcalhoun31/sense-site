import { motion } from 'motion/react';
import { colors as C, fonts } from '../brand';

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '120px 0 100px',
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="/sense-hero.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.15) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)' }} />
      </div>
      <div style={{ padding: '0 clamp(24px, 8vw, 120px)', maxWidth: 920, zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '8px 20px', border: `2px solid ${C.skyBlue}`, marginBottom: 36, borderRadius: 24 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.skyBlue }} />
            <span style={{ fontFamily: fonts.heading, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff', fontWeight: 700 }}>Premium Advertising for Sensitive Verticals</span>
          </div>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6 }}
          style={{ fontFamily: fonts.display, fontSize: 'clamp(40px, 7vw, 78px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 28, color: '#fff', textShadow: '0 3px 20px rgba(0,0,0,0.7)' }}>
          Grow Sales.<br /><span style={{ color: C.skyBlue, textShadow: '0 3px 20px rgba(0,0,0,0.5)' }}>Measure Performance.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.85 }}
          style={{ fontFamily: fonts.heading, fontSize: 'clamp(14px, 1.6vw, 18px)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.skyBlue, marginBottom: 20, textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
          Lifetime Value Experts
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }}
          style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.95)', maxWidth: 580, marginBottom: 48, textShadow: '0 2px 12px rgba(0,0,0,0.5)', fontWeight: 400 }}>
          Sense is a premium advertising platform built by industry experts in sensitive verticals. We deliver better advertising outcomes, maximize ROAS, lower Cost Per Acquisition, and drive lifetime value.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.3 }} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="#contact" style={{ padding: '16px 44px', background: C.skyBlue, color: C.black, fontWeight: 700, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 8, boxShadow: '0 4px 24px rgba(104,199,220,0.4)', transition: 'all 0.3s' }}
            onMouseEnter={(e) => { e.target.style.background = C.lightBlue; }}
            onMouseLeave={(e) => { e.target.style.background = C.skyBlue; }}
          >Book a Demo</a>
          <a href="#solutions" style={{ padding: '16px 40px', border: '2px solid #fff', color: '#fff', fontWeight: 600, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 8, transition: 'all 0.3s' }}
            onMouseEnter={(e) => { e.target.style.background = '#fff'; e.target.style.color = C.black; }}
            onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#fff'; }}
          >See How It Works</a>
        </motion.div>
      </div>
    </section>
  );
}
