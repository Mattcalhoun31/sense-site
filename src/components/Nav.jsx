import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { colors as C, fonts } from '../brand';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const linkStyle = {
    color: '#ffffff', fontFamily: fonts.heading, fontSize: 13,
    letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600,
    transition: 'color 0.3s', textShadow: '0 1px 8px rgba(0,0,0,0.3)',
    cursor: 'pointer', background: 'none', border: 'none', padding: 0,
  };

  return (
    <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 clamp(24px, 5vw, 80px)', height: 72,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        transition: 'all 0.4s',
      }}>
      <a href="#hero" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/sense-giraffe.png" alt="SENSE" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
      </a>

      <div className="nav-desktop" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <a href="#solutions" style={linkStyle}
          onMouseEnter={(e) => e.target.style.color = C.skyBlue}
          onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Solutions</a>

        {/* Industries dropdown */}
        <div style={{ position: 'relative' }}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}>
          <button style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: 6 }}
            onMouseEnter={(e) => e.target.style.color = C.skyBlue}
            onMouseLeave={(e) => e.target.style.color = '#ffffff'}>
            Industries
            <span style={{ fontSize: 8, marginTop: 2, transition: 'transform 0.3s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
          </button>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute', top: '100%', left: -16, marginTop: 12,
                  background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(16px)',
                  borderRadius: 12, padding: '12px 0', minWidth: 240,
                  boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                <div onClick={() => { navigate('/gambling'); setDropdownOpen(false); }}
                  style={{
                    padding: '12px 24px', cursor: 'pointer', transition: 'background 0.2s',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <span style={{ fontFamily: fonts.heading, fontSize: 13, fontWeight: 600, color: '#ffffff', letterSpacing: '0.08em' }}>Gambling</span>
                  <span style={{ fontSize: 11, color: C.skyBlue }}>→</span>
                </div>
                <div style={{
                  padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  opacity: 0.4, cursor: 'default',
                }}>
                  <span style={{ fontFamily: fonts.heading, fontSize: 13, fontWeight: 600, color: '#ffffff', letterSpacing: '0.08em' }}>Firearms</span>
                  <span style={{ fontSize: 10, color: C.sandstone, fontStyle: 'italic' }}>Coming Soon</span>
                </div>
                <div style={{
                  padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  opacity: 0.4, cursor: 'default',
                }}>
                  <span style={{ fontFamily: fonts.heading, fontSize: 13, fontWeight: 600, color: '#ffffff', letterSpacing: '0.08em' }}>Alcohol & Tobacco</span>
                  <span style={{ fontSize: 10, color: C.sandstone, fontStyle: 'italic' }}>Coming Soon</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a href="#why" style={linkStyle}
          onMouseEnter={(e) => e.target.style.color = C.skyBlue}
          onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Why Sense</a>

        <a href="#contact" style={{
          color: C.black, fontFamily: fonts.heading, fontSize: 13,
          letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700,
          background: C.skyBlue, padding: '10px 24px', borderRadius: 8, transition: 'all 0.3s',
        }}
          onMouseEnter={(e) => e.target.style.background = C.lightBlue}
          onMouseLeave={(e) => e.target.style.background = C.skyBlue}>Book a Demo</a>
      </div>

      <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
        <div style={{ width: 24, height: 2, background: '#fff', marginBottom: 5, transition: '0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
        <div style={{ width: 24, height: 2, background: '#fff', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: '0.3s' }} />
        <div style={{ width: 24, height: 2, background: '#fff', transition: '0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="nav-mobile-menu" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{ position: 'absolute', top: 72, left: 12, right: 12, background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(16px)', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 20, borderRadius: 16, marginTop: 8, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
            <a href="#solutions" onClick={() => setMenuOpen(false)} style={{ color: '#fff', fontFamily: fonts.heading, fontSize: 16, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Solutions</a>
            <div onClick={() => { navigate('/gambling'); setMenuOpen(false); }} style={{ color: '#fff', fontFamily: fonts.heading, fontSize: 16, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer' }}>Gambling</div>
            <a href="#why" onClick={() => setMenuOpen(false)} style={{ color: '#fff', fontFamily: fonts.heading, fontSize: 16, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Why Sense</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{ color: '#fff', fontFamily: fonts.heading, fontSize: 16, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Book a Demo</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
