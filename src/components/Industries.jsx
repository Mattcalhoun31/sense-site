import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { colors as C, fonts } from '../brand';
import { Reveal } from './Animations';

const industries = [
  {
    name: 'Firearms', icon: '⬡',
    desc: 'From manufacturers and retailers to ranges and outfitters — we reach passionate, engaged firearms audiences across every compliant channel at scale.',
    gradient: 'linear-gradient(135deg, #3a3f47 0%, #5a6068 100%)',
    shadow: 'rgba(58,63,71,0.35)',
  },
  {
    name: 'Gambling', icon: '◆',
    desc: 'Sportsbooks, casinos, online gaming — we navigate the patchwork of state-by-state regulations and platform restrictions to put your brand in front of high-intent players.',
    gradient: 'linear-gradient(135deg, #1a472a 0%, #2d6b42 100%)',
    shadow: 'rgba(26,71,42,0.35)',
    link: '/gambling',
  },
  {
    name: 'Alcohol', icon: '⬢',
    desc: 'Age-gated, compliance-first media strategy for spirits, wine, and beer brands that value sophistication over saturation.',
    gradient: 'linear-gradient(135deg, #8a6d4b 0%, #c4a882 100%)',
    shadow: 'rgba(138,109,75,0.35)',
  },
  {
    name: 'Tobacco', icon: '◈',
    desc: "Crafting compliant, high-impact campaigns for the world's most regulated — and most loyal — consumer base.",
    gradient: 'linear-gradient(135deg, #3d2b1f 0%, #5c3d2e 100%)',
    shadow: 'rgba(61,43,31,0.35)',
  },
];

function IndustryCard({ name, icon, desc, gradient, shadow, index, link }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onClick={() => link && navigate(link)}
      style={{
        padding: 'clamp(24px, 2.5vw, 36px)', background: gradient, borderRadius: 14,
        cursor: link ? 'pointer' : 'default',
        transition: 'all 0.4s', boxShadow: hovered ? `0 12px 36px ${shadow}` : `0 4px 16px ${shadow}`,
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)', position: 'relative', overflow: 'hidden',
      }}>
      <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120,
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <span style={{ fontSize: 22, color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: 12, position: 'relative' }}>{icon}</span>
      <h4 style={{ fontFamily: fonts.display, fontSize: 'clamp(15px, 1.6vw, 18px)', fontWeight: 600, color: '#fff', marginBottom: 8, position: 'relative' }}>{name}</h4>
      <p style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.8)', position: 'relative' }}>{desc}</p>
      {link && (
        <div style={{ marginTop: 16, fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', position: 'relative', transition: 'color 0.3s', ...(hovered ? { color: '#fff' } : {}) }}>
          Learn More →
        </div>
      )}
    </motion.div>
  );
}

export default function Industries() {
  return (
    <>
      <section id="industries" style={{ background: '#ffffff', position: 'relative' }}>
        <div style={{ padding: 'clamp(80px, 12vh, 140px) clamp(24px, 8vw, 120px) clamp(60px, 8vh, 100px)', maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <span style={{ fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.sandstone, fontWeight: 700 }}>Industries We Serve</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, marginTop: 16, marginBottom: 20, color: C.black }}>
              Where the <span style={{ color: '#aaa' }}>Lines</span> Blur.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: 1.8, color: C.black, opacity: 0.7, maxWidth: 640, marginBottom: 64 }}>
              The most compelling brands don't fit neatly inside the box. They push boundaries, challenge norms, and demand a partner that knows how to navigate the space between. That's where we live — and that's where your next customer is waiting.
            </p>
          </Reveal>
          <div className="industry-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {industries.map((ind, i) => <IndustryCard key={i} {...ind} index={i} />)}
          </div>
        </div>
      </section>

      {/* Results showcase strip — car image as THIS section's bg */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/sense-hero.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
        </div>
        <div style={{ padding: 'clamp(56px, 10vh, 100px) clamp(24px, 8vw, 120px)', maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Reveal>
            <span style={{ fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.sandstone, fontWeight: 700 }}>Real Client Results</span>
            <h3 style={{ fontFamily: fonts.display, fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, marginTop: 12, marginBottom: 8, color: '#ffffff' }}>
              $1,879 Spent. <span style={{ color: C.skyBlue }}>$9,352 Returned.</span>
            </h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', maxWidth: 480, margin: '0 auto 32px' }}>
              5:1 ROAS. 98% conversion rate. $12.96 CPA. This is what happens when measurement drives every decision.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{
              background: C.black, borderRadius: 16, padding: 'clamp(12px, 2vw, 24px)',
              boxShadow: '0 12px 48px rgba(0,0,0,0.3)',
            }}>
              <img src="/gambling-dashboard.png" alt="Sense advertising performance dashboard showing 5:1 ROAS"
                style={{ width: '100%', borderRadius: 10, display: 'block' }} />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
