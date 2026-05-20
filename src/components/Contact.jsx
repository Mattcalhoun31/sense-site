import { useState, useRef } from 'react';
import { colors as C, fonts } from '../brand';
import { Reveal } from './Animations';

const FORM_ID = '261114368343049';

export default function Contact() {
  const [form, setForm] = useState({ first: '', last: '', email: '', company: '', industry: '', message: '' });
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

  const s = {
    background: '#ffffff', border: 'none', padding: '16px 20px', color: C.black,
    fontFamily: "'DM Sans', sans-serif", fontSize: 15, outline: 'none', borderRadius: 10,
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)', transition: 'box-shadow 0.3s', width: '100%',
  };
  const f = (e) => e.target.style.boxShadow = `0 0 0 2px ${C.skyBlue}`;
  const b = (e) => e.target.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';

  return (
    <section id="contact" style={{ background: '#ffffff', position: 'relative' }}>
      {/* Hidden iframe target */}
      <iframe name="jf_target" title="submit" style={{ display: 'none' }} />

      {/* Hidden HTML form with exact Jotform field names */}
      <form ref={formRef} method="POST" action={`https://submit.jotform.com/submit/${FORM_ID}/`}
        target="jf_target" style={{ display: 'none' }}>
        <input type="hidden" name="formID" value={FORM_ID} />
        <input type="hidden" name="q3_name[first]" value={form.first} />
        <input type="hidden" name="q3_name[last]" value={form.last} />
        <input type="hidden" name="q4_email" value={form.email} />
        <input type="hidden" name="q5_company" value={form.company} />
        <input type="hidden" name="q6_typeA6" value={form.industry} />
        <input type="hidden" name="q7_message" value={form.message} />
        <input type="hidden" name="website" value="" />
      </form>

      <div style={{ padding: 'clamp(80px, 12vh, 160px) clamp(24px, 8vw, 120px)', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/giraffe-only.png" alt="SENSE" style={{ height: 140, width: 'auto', objectFit: 'contain' }} />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, marginTop: 28, marginBottom: 20, color: C.black }}>
            Let's Build<br /><span style={{ color: C.skyBlue }}>Something That Works.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: 1.8, color: C.black, opacity: 0.7, maxWidth: 560, margin: '0 auto 16px' }}>
            If you've been told your brand is "too difficult" to advertise — you're in the right place. We built Sense specifically for the categories everyone else avoids.
          </p>
          <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.7, color: C.sandstone, maxWidth: 480, margin: '0 auto 48px', fontStyle: 'italic' }}>
            No pitch decks. No 6-week onboarding. Just a direct conversation about your goals and whether we're the right fit.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          {submitted ? (
            <div style={{
              maxWidth: 440, margin: '0 auto 40px', background: '#f7f7f7', borderRadius: 20,
              padding: 'clamp(40px, 5vw, 64px)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: C.skyBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 28, color: '#fff' }}>✓</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: C.black, marginBottom: 12 }}>We Got It.</h3>
              <p style={{ fontSize: 16, color: C.black, opacity: 0.7, lineHeight: 1.6 }}>
                Someone from the Sense team will be in touch shortly.
              </p>
            </div>
          ) : (
            <div style={{
              display: 'flex', flexDirection: 'column', gap: 16,
              maxWidth: 440, margin: '0 auto 40px',
              background: '#f7f7f7', borderRadius: 20,
              padding: 'clamp(24px, 3vw, 40px)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <input placeholder="First Name *" value={form.first} onChange={u('first')} onFocus={f} onBlur={b} style={s} />
                <input placeholder="Last Name" value={form.last} onChange={u('last')} onFocus={f} onBlur={b} style={s} />
              </div>
              <input type="email" placeholder="Email *" value={form.email} onChange={u('email')} onFocus={f} onBlur={b} style={s} />
              <input placeholder="Company / Brand *" value={form.company} onChange={u('company')} onFocus={f} onBlur={b} style={s} />
              <select value={form.industry} onChange={u('industry')} onFocus={f} onBlur={b}
                style={{ ...s, color: form.industry ? C.black : C.sandstone, appearance: 'none', WebkitAppearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23967656' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat', backgroundPosition: 'right 20px center' }}>
                <option value="">What industry are you in?</option>
                <option value="Firearms">Firearms</option>
                <option value="Gambling">Gambling</option>
                <option value="Alcohol">Alcohol</option>
                <option value="Tobacco">Tobacco</option>
                <option value="Other">Other</option>
              </select>
              <textarea placeholder="What's your biggest challenge with advertising right now?" rows={3}
                value={form.message} onChange={u('message')} onFocus={f} onBlur={b}
                style={{ ...s, resize: 'vertical' }} />
              <button onClick={handleSubmit} disabled={submitting}
                style={{
                  padding: '18px 40px', background: submitting ? C.sandstone : C.skyBlue,
                  color: C.black, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  border: 'none', cursor: submitting ? 'wait' : 'pointer',
                  transition: 'all 0.3s', borderRadius: 10,
                  boxShadow: '0 4px 20px rgba(104,199,220,0.3)', opacity: submitting ? 0.7 : 1,
                }}
                onMouseEnter={(e) => { if (!submitting) { e.target.style.background = C.lightBlue; } }}
                onMouseLeave={(e) => { if (!submitting) { e.target.style.background = C.skyBlue; } }}
              >{submitting ? 'Sending...' : 'Book a Demo'}</button>
            </div>
          )}
        </Reveal>
      </div>

      <div style={{ height: 3, background: `linear-gradient(90deg, ${C.skyBlue}, #0c7180)` }} />

      <div style={{
        background: '#0a0a0a', padding: '48px clamp(24px, 8vw, 120px)',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <img src="/sense-giraffe.png" alt="" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '0.12em' }}>SENSE</span>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 280 }}>
            Premium advertising platform for sensitive verticals. Built by experts. Backed by results.
          </p>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Contact</p>
          <a href="mailto:info@sensedigitalmedia.com" style={{ fontSize: 14, color: C.skyBlue, display: 'block', marginBottom: 8, transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = C.lightBlue}
            onMouseLeave={(e) => e.target.style.color = C.skyBlue}
          >info@sensedigitalmedia.com</a>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Legal</p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy', 'Terms'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = C.skyBlue}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >{l}</a>
            ))}
          </div>
        </div>
        <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20, marginTop: 8 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>© 2026 Sense Digital Media. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
