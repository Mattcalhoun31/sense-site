import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { colors as C, fonts } from '../brand';
import { Reveal } from './Animations';

const cards = [
  {
    icon: '◎', title: 'Full-Funnel Activation',
    desc: 'Display, Video, CTV, DOOH, Social, and Search — every channel, every format, unified under one strategy. We place your brand where your audience actually lives, from first impression to final conversion.',
    gradient: 'linear-gradient(135deg, #0c7180 0%, #1a8fa0 50%, #3ba8be 100%)',
    shadow: 'rgba(12,113,128,0.35)',
  },
  {
    icon: '◈', title: 'In-House Creative & Strategy',
    desc: 'From campaign strategy and creative development to growth gap analysis and consultation — our in-house team builds what your audience needs to see, not what every other brand is already running.',
    gradient: 'linear-gradient(135deg, #3ba8be 0%, #5cbdd0 50%, #68c7dc 100%)',
    shadow: 'rgba(92,189,208,0.35)',
  },
  {
    icon: '◇', title: 'Incrementality Measurement',
    desc: 'Precise performance tracking and analytics that prove what actually moved the needle. We measure real lift and incremental impact — so you know exactly which dollars drove new revenue, not just activity.',
    gradient: 'linear-gradient(135deg, #68c7dc 0%, #7ed4e5 50%, #a2eeff 100%)',
    shadow: 'rgba(104,199,220,0.35)',
  },
];

function ServiceCard({ icon, title, desc, gradient, shadow, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: gradient, padding: 'clamp(32px, 3.5vw, 52px)',
        flex: '1 1 280px', maxWidth: 420, transition: 'all 0.4s ease', cursor: 'default',
        position: 'relative', overflow: 'hidden', borderRadius: 16,
        boxShadow: hovered ? `0 16px 48px ${shadow}` : `0 6px 24px ${shadow}`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '128px 128px' }} />
      <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200,
        background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ fontSize: 28, marginBottom: 20, color: 'rgba(255,255,255,0.85)', position: 'relative' }}>{icon}</div>
      <h3 style={{ fontFamily: fonts.heading, fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 700, color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16, position: 'relative' }}>{title}</h3>
      <p style={{ fontFamily: fonts.body, fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, position: 'relative' }}>{desc}</p>
    </motion.div>
  );
}

export default function Solutions() {
  return (
    <section id="solutions" style={{ background: '#ffffff', position: 'relative' }}>
      <div style={{ padding: 'clamp(60px, 10vh, 140px) clamp(24px, 8vw, 120px)', maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <span style={{ fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.sandstone, fontWeight: 700 }}>What We Do</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, marginTop: 16, marginBottom: 24, color: C.black }}>
            Market the <span style={{ fontStyle: 'italic', color: C.skyBlue }}>Unmarketable</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: 1.8, color: C.black, opacity: 0.7, maxWidth: 700, marginBottom: 64 }}>
            Measurement sits at the heart of every campaign, ensuring precise performance tracking and analytics while unlocking access to both elite and niche publishers at scale. That data powers highly customized audience personas and well-defined targeting parameters.
          </p>
        </Reveal>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {cards.map((c, i) => <ServiceCard key={i} {...c} delay={i * 0.15} />)}
        </div>
      </div>
    </section>
  );
}
