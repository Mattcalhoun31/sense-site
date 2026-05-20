import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { colors as C, fonts } from '../brand';

function Reveal({ children, delay = 0, y = 40 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

// ─── 3D Rotating Dice ───
function RotatingDice() {
  const [face, setFace] = useState(0);
  const stats = [
    { number: '$30.2B', label: 'Market by 2028' },
    { number: '5:1', label: 'Client ROAS' },
    { number: '38+', label: 'Legal States' },
    { number: '$12.96', label: 'Cost Per Acquisition' },
    { number: '98%', label: 'Conversion Rate' },
    { number: '72%', label: 'Digital Acquisition' },
  ];

  // Each face gets a different 3D rotation to simulate real dice rolling
  const rotations = [
    { rotateX: 0, rotateY: 0 },        // front
    { rotateX: 0, rotateY: -90 },       // right
    { rotateX: -90, rotateY: 0 },       // top
    { rotateX: 0, rotateY: 90 },        // left
    { rotateX: 90, rotateY: 0 },        // bottom
    { rotateX: 0, rotateY: 180 },       // back
  ];

  useEffect(() => {
    const t = setInterval(() => setFace((p) => (p + 1) % stats.length), 6000);
    return () => clearInterval(t);
  }, []);

  const s = 220; // cube size
  const faceStyle = (i) => {
    const transforms = [
      `translateZ(${s/2}px)`,                                    // front
      `rotateY(90deg) translateZ(${s/2}px)`,                     // right
      `rotateX(90deg) translateZ(${s/2}px)`,                     // top
      `rotateY(-90deg) translateZ(${s/2}px)`,                    // left
      `rotateX(-90deg) translateZ(${s/2}px)`,                    // bottom
      `rotateY(180deg) translateZ(${s/2}px)`,                    // back
    ];
    return {
      position: 'absolute', width: s, height: s,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: `linear-gradient(145deg, #fff8f0, ${C.champagne})`,
      borderRadius: 20, backfaceVisibility: 'hidden',
      boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.06)',
      transform: transforms[i],
    };
  };

  const r = rotations[face];

  return (
    <div style={{ perspective: 800, width: s, height: s + 40, margin: '0 auto' }}>
      <motion.div
        animate={{
          rotateX: r.rotateX,
          rotateY: r.rotateY,
        }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          width: s, height: s, position: 'relative',
          transformStyle: 'preserve-3d',
        }}>
        {stats.map((stat, i) => (
          <div key={i} style={faceStyle(i)}>
            <div style={{
              fontFamily: fonts.display, fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: 900, color: C.black, lineHeight: 1,
            }}>{stat.number}</div>
            <div style={{
              fontFamily: fonts.heading, fontSize: 11, fontWeight: 700,
              color: C.sandstone, letterSpacing: '0.15em', textTransform: 'uppercase',
              marginTop: 12,
            }}>{stat.label}</div>
          </div>
        ))}
      </motion.div>
      {/* Dots */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 20 }}>
        {stats.map((_, i) => (
          <div key={i} onClick={() => setFace(i)} style={{
            width: 8, height: 8, borderRadius: '50%', cursor: 'pointer',
            background: i === face ? C.skyBlue : C.sandstone,
            opacity: i === face ? 1 : 0.35, transition: 'all 0.3s',
          }} />
        ))}
      </div>
    </div>
  );
}

// ─── Nav ───
function GamblingNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 clamp(24px, 5vw, 80px)', height: 72,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(0,0,0,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.4s',
      }}>
      <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/sense-giraffe.png" alt="SENSE" style={{ height: 44, width: 'auto' }} />
      </a>
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        <a href="/" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: fonts.heading, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, transition: 'color 0.3s' }}
          onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>Home</a>
        <a href="#demo" style={{
          color: C.black, fontFamily: fonts.heading, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700,
          background: C.skyBlue, padding: '10px 24px', borderRadius: 8, transition: 'all 0.3s',
        }}
          onMouseEnter={(e) => e.target.style.background = C.lightBlue} onMouseLeave={(e) => e.target.style.background = C.skyBlue}>Book a Demo</a>
      </div>
    </motion.nav>
  );
}

// ═══════════════════════════════════════════════════════
export default function Gambling() {
  const FORM_ID = '261114368343049';
  const [form, setForm] = useState({ first: '', last: '', email: '', company: '', industry: 'Gambling', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef(null);
  const u = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const handleSubmit = () => {
    if (!form.first || !form.email || !form.company) return;
    setSubmitting(true);
    formRef.current.submit();
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1800);
  };
  const inputStyle = {
    background: '#ffffff', border: 'none', padding: '16px 20px', color: C.black,
    fontFamily: "'DM Sans', sans-serif", fontSize: 15, outline: 'none', borderRadius: 10,
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)', transition: 'box-shadow 0.3s', width: '100%',
  };
  const focus = (e) => e.target.style.boxShadow = `0 0 0 2px ${C.skyBlue}`;
  const blur = (e) => e.target.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <GamblingNav />

      {/* Hidden form */}
      <iframe name="jf_gambling" title="form-target" style={{ display: 'none' }} />
      <form ref={formRef} method="POST" action={`https://submit.jotform.com/submit/${FORM_ID}/`}
        target="jf_gambling" style={{ display: 'none' }}>
        <input type="hidden" name="formID" value={FORM_ID} />
        <input type="hidden" name="q3_name[first]" value={form.first} />
        <input type="hidden" name="q3_name[last]" value={form.last} />
        <input type="hidden" name="q4_email" value={form.email} />
        <input type="hidden" name="q5_company" value={form.company} />
        <input type="hidden" name="q6_typeA6" value={form.industry} />
        <input type="hidden" name="q7_message" value={form.message} />
        <input type="hidden" name="website" value="" />
      </form>

      {/* ═══ HERO ═══ */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', padding: '120px 0 100px',
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/gambling-bg.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.15) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)' }} />
        </div>
        <div style={{ padding: '0 clamp(24px, 8vw, 120px)', maxWidth: 920, zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '8px 20px', border: `2px solid ${C.skyBlue}`, marginBottom: 36, borderRadius: 24 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.skyBlue }} />
              <span style={{ fontFamily: fonts.heading, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff', fontWeight: 700 }}>Gambling & Sports Betting</span>
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6 }}
            style={{ fontFamily: fonts.display, fontSize: 'clamp(38px, 6.5vw, 74px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 28, color: '#fff', textShadow: '0 3px 20px rgba(0,0,0,0.7)' }}>
            Your Ads Shouldn't<br />Be a <span style={{ color: C.skyBlue }}>Gamble.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
            style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.9)', maxWidth: 560, marginBottom: 48, textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
            Most platforms don't want your money. The ones that do charge a premium. Sense navigates the regulatory patchwork to deliver measurable, compliant campaigns that acquire players — not just impressions.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#demo" style={{ padding: '16px 44px', background: C.skyBlue, color: C.black, fontWeight: 700, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 8, boxShadow: '0 4px 24px rgba(104,199,220,0.4)', transition: 'all 0.3s' }}
              onMouseEnter={(e) => e.target.style.background = C.lightBlue} onMouseLeave={(e) => e.target.style.background = C.skyBlue}>Book a Demo</a>
          </motion.div>
        </div>
      </section>

      {/* ═══ BREATHING STRIP — white bg, desert chip + copy ═══ */}
      <div style={{ background: '#ffffff', padding: 'clamp(48px, 8vh, 80px) clamp(24px, 8vw, 120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 'clamp(32px, 5vw, 64px)', flexWrap: 'wrap' }}>
          <Reveal>
            <img src="/desert-chip.jpg" alt="Sense poker chip" style={{
              width: 'clamp(200px, 28vw, 340px)', height: 'auto', borderRadius: 16,
              boxShadow: '0 8px 36px rgba(0,0,0,0.1)',
            }} />
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <span style={{ fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.sandstone, fontWeight: 700 }}>Built for Your Industry</span>
              <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: C.black, marginTop: 12, marginBottom: 16, lineHeight: 1.15 }}>
                Compliance-Native.<br /><span style={{ color: C.skyBlue }}>Performance-Obsessed.</span>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: C.black, opacity: 0.65, maxWidth: 480 }}>
                38+ legal states. Different rules in every one. Platform policies that change weekly. We handle the complexity — geotargeting, age gating, responsible gaming messaging — so you can focus on acquiring high-LTV players.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ═══ DICE SECTION — "Six Sides. One Outcome." ═══ */}
      <section style={{ background: C.black, padding: 'clamp(80px, 12vh, 140px) clamp(24px, 8vw, 120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 'clamp(40px, 6vw, 80px)', flexWrap: 'wrap' }}>
          <Reveal>
            <div style={{ flex: 1, minWidth: 280 }}>
              <span style={{ fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.sandstone, fontWeight: 700 }}>Six Sides. One Outcome.</span>
              <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.05, marginTop: 16, marginBottom: 24, color: '#ffffff' }}>
                We don't <span style={{ fontStyle: 'italic', color: C.skyBlue }}>roll</span><br />the dice.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', maxWidth: 480, marginBottom: 32 }}>
                Every face is a number we already know. ROAS. CPA. Conversion. Coverage. Channel mix. Market scale. Six metrics that decide whether your campaign works or burns. We measure them before we run, while we run, and after we run.
              </p>
              <div style={{ borderLeft: `3px solid ${C.skyBlue}`, paddingLeft: 20 }}>
                <p style={{ fontFamily: fonts.display, fontSize: 18, fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                  "Luck is what happens when preparation meets opportunity."
                </p>
                <p style={{ fontSize: 12, color: C.sandstone, marginTop: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>— Seneca</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <RotatingDice />
          </Reveal>
        </div>
      </section>

      {/* ═══ CONTACT FORM ═══ */}
      <section id="demo" style={{ background: '#ffffff', padding: 'clamp(80px, 12vh, 140px) clamp(24px, 8vw, 120px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <img src="/giraffe-only.png" alt="" style={{ height: 100, width: 'auto', margin: '0 auto 24px' }} />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 16, color: C.black }}>
              Ready to <span style={{ color: C.skyBlue }}>Talk Numbers?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: C.black, opacity: 0.65, maxWidth: 460, margin: '0 auto 40px' }}>
              Stop burning budget on platforms that don't understand your business.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            {submitted ? (
              <div style={{
                maxWidth: 440, margin: '0 auto', background: '#f7f7f7', borderRadius: 20,
                padding: 'clamp(40px, 5vw, 64px)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: C.skyBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 28, color: '#fff' }}>✓</div>
                <h3 style={{ fontFamily: fonts.display, fontSize: 24, fontWeight: 700, color: C.black, marginBottom: 12 }}>We Got It.</h3>
                <p style={{ fontSize: 16, color: C.black, opacity: 0.7, lineHeight: 1.6 }}>Someone from the Sense team will be in touch shortly.</p>
              </div>
            ) : (
              <div style={{
                display: 'flex', flexDirection: 'column', gap: 16,
                maxWidth: 440, margin: '0 auto',
                background: '#f7f7f7', borderRadius: 20,
                padding: 'clamp(24px, 3vw, 40px)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <input placeholder="First Name *" value={form.first} onChange={u('first')} onFocus={focus} onBlur={blur} style={inputStyle} />
                  <input placeholder="Last Name" value={form.last} onChange={u('last')} onFocus={focus} onBlur={blur} style={inputStyle} />
                </div>
                <input type="email" placeholder="Email *" value={form.email} onChange={u('email')} onFocus={focus} onBlur={blur} style={inputStyle} />
                <input placeholder="Company / Brand *" value={form.company} onChange={u('company')} onFocus={focus} onBlur={blur} style={inputStyle} />
                <textarea placeholder="Tell us about your advertising goals" rows={3}
                  value={form.message} onChange={u('message')} onFocus={focus} onBlur={blur}
                  style={{ ...inputStyle, resize: 'vertical' }} />
                <button onClick={handleSubmit} disabled={submitting}
                  style={{
                    padding: '18px 40px', background: submitting ? C.sandstone : C.skyBlue,
                    color: C.black, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    border: 'none', cursor: submitting ? 'wait' : 'pointer',
                    transition: 'all 0.3s', borderRadius: 10,
                    boxShadow: '0 4px 20px rgba(104,199,220,0.3)', opacity: submitting ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => { if (!submitting) e.target.style.background = C.lightBlue; }}
                  onMouseLeave={(e) => { if (!submitting) e.target.style.background = C.skyBlue; }}
                >{submitting ? 'Sending...' : 'Book a Demo'}</button>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${C.skyBlue}, ${C.deepTeal})` }} />
      <div style={{
        background: '#0a0a0a', padding: '40px clamp(24px, 8vw, 120px)',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/sense-giraffe.png" alt="" style={{ height: 24, width: 'auto' }} />
          <span style={{ fontFamily: fonts.display, fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '0.12em' }}>SENSE</span>
        </div>
        <a href="mailto:info@sensedigitalmedia.com" style={{ fontSize: 13, color: C.skyBlue }}>info@sensedigitalmedia.com</a>
        <a href="/" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s' }}
          onMouseEnter={(e) => e.target.style.color = C.skyBlue} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}>← Back to Sense</a>
      </div>
    </div>
  );
}
