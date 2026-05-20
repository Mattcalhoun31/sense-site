import { colors as C, fonts } from '../brand';
import { Reveal } from './Animations';

const differentiators = [
  { label: 'Unlock New Audiences', detail: 'Access both elite and niche publishers at scale. We find the audiences your competitors can\'t reach — and we put your brand in front of them first.' },
  { label: 'Best Performance Efficiency', detail: 'Every dollar works harder. Our platform optimizes spend allocation in real time, maximizing ROAS and driving down cost per acquisition across every channel.' },
  { label: 'Growth Gap Analysis', detail: 'Before we run a single impression, we identify where you\'re leaving money on the table. Strategic consultation that maps the gap between where you are and where you should be.' },
  { label: 'Creative Development', detail: 'Our in-house creative team develops assets purpose-built for your audience and your compliance requirements. No generic templates. No outsourced freelancers.' },
  { label: 'Incrementality Measurement', detail: 'We don\'t just track clicks — we measure real lift and incremental impact. Structured holdout testing that proves whether your campaign drove new revenue or just took credit for it.' },
  { label: 'Dedicated Client Success', detail: 'Backed by decades of expertise and an unwavering commitment to your results. We\'re known for delivering some of the best customer service in the industry — and we intend to keep it that way.' },
];

export default function WhySense() {
  return (
    <section id="why" style={{
      background: 'linear-gradient(180deg, #d4eef5 0%, #ffffff 20%, #ffffff 35%, #e8f6fa 65%, #d4eef5 100%)',
      position: 'relative',
    }}>
      <div style={{ padding: 'clamp(80px, 12vh, 160px) clamp(24px, 8vw, 120px)', maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <span style={{ fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.sandstone, fontWeight: 700 }}>The Sense Advantage</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, marginTop: 16, marginBottom: 24, color: C.black }}>
            Your Strategic Partner.<br /><span style={{ color: C.skyBlue }}>Not Just Another Vendor.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: 1.8, color: C.black, opacity: 0.7, maxWidth: 700, marginBottom: 64 }}>
            Sense supports every stage of the process — from campaign strategy and creative development to execution and in-depth analytics. We bring a level of sophistication essential for industries where compliance and precision matter most.
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {differentiators.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{
                background: '#ffffff', padding: 'clamp(28px, 3vw, 44px)',
                position: 'relative', borderRadius: 14, overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${i % 2 === 0 ? C.skyBlue : C.sandstone}, ${i % 2 === 0 ? '#a2eeff' : C.champagne})`,
                }} />
                <h4 style={{ fontFamily: fonts.heading, fontSize: 15, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: C.black, marginBottom: 12, marginTop: 8 }}>{item.label}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: C.black, opacity: 0.65 }}>{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div style={{
            marginTop: 72, padding: 'clamp(28px, 4vw, 48px)',
            borderLeft: `3px solid ${C.skyBlue}`,
            background: '#ffffff', borderRadius: 14,
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          }}>
            <p style={{ fontFamily: fonts.display, fontSize: 'clamp(20px, 2.5vw, 30px)', fontStyle: 'italic', lineHeight: 1.5, color: C.black }}>
              "An investment in knowledge pays the best interest."
            </p>
            <p style={{ fontSize: 14, color: C.sandstone, marginTop: 16, letterSpacing: '0.05em', fontWeight: 600 }}>— Benjamin Franklin</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
