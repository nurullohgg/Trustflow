import React from 'react';
import { COLORS, CheckCircleIcon } from './Shared';

const TIERS = [
  { id:'free', name:'Free', price:"Bepul", priceUz:"0 so'm",
    features:["5 ta e'lon/oy","Oddiy qidiruv","48 soatlik yordam","Asosiy profil"],
    noFeatures:["Maosh tahlili","Brend profil","AI matching"],
    cta:"Boshlash [Start free]", popular:false },
  { id:'plus', name:'Plus', price:"20,000 so'm", priceUz:"~$2/oy",
    features:["50 ta e'lon/oy","Kengaytirilgan filtrlar","Maosh tahlili (avg/min/max)","Brend profil","24 soatlik yordam"],
    noFeatures:["CSV eksport","AI matching","Maxsus hisobotlar"],
    cta:"Upgrade to Plus", popular:true },
  { id:'pro', name:'Pro', price:"50,000 so'm", priceUz:"~$5/oy",
    features:["Cheksiz e'lon","CSV eksport","Jamoa workflow","Real-time AI matching","Maosh benchmarking","Maxsus hisobotlar","Shaxsiy menejer"],
    noFeatures:[],
    cta:"Upgrade to Pro", popular:false },
];

const COMPARISON = [
  { feature:"E'lonlar soni",       free:"5/oy",     plus:"50/oy",            pro:"Cheksiz"       },
  { feature:"Kandidat qidiruv",    free:"Oddiy",    plus:"Kengaytirilgan",   pro:"AI-powered"    },
  { feature:"Maosh tahlili",       free:"—",        plus:"✓",               pro:"✓ + Benchmark" },
  { feature:"Brend profil",        free:"—",        plus:"✓",               pro:"✓"             },
  { feature:"CSV eksport",         free:"—",        plus:"—",               pro:"✓"             },
  { feature:"Jamoa workflow",      free:"—",        plus:"—",               pro:"✓"             },
  { feature:"AI matching",         free:"—",        plus:"—",               pro:"✓"             },
  { feature:"Yordam SLA",          free:"48 soat",  plus:"24 soat",          pro:"Shaxsiy menejer" },
];

export function PricingPage() {
  const [annual, setAnnual] = React.useState(false);

  return (
    <div style={{ minHeight:'100vh', background:COLORS.bg, fontFamily:"'Inter',sans-serif" }}>
      <div style={{ maxWidth:1060, margin:'0 auto', padding:'56px 32px' }}>

        <div style={{ textAlign:'center', marginBottom:48 }}>
          <h1 style={{ margin:'0 0 12px', fontSize:40, fontWeight:900, color:COLORS.text, letterSpacing:'-0.04em' }}>
            Tarif rejalar
          </h1>
          <p style={{ margin:'0 0 24px', fontSize:16, color:COLORS.textMuted }}>
            Ish qidiruvchilar uchun bepul. Kompaniyalar uchun moslashuvchan tariflar.
          </p>
          <div style={{
            display:'inline-flex', background:COLORS.white, borderRadius:10,
            border:`1.5px solid ${COLORS.border}`, padding:4,
          }}>
            {[['monthly','Oylik'],['annual','Yillik (−20%)']].map(([id,l])=>(
              <button key={id} onClick={()=>setAnnual(id==='annual')} style={{
                padding:'8px 20px', borderRadius:7, fontSize:13, fontWeight:500,
                border:'none', cursor:'pointer', fontFamily:"'Inter',sans-serif",
                background: (annual&&id==='annual')||(!annual&&id==='monthly') ? COLORS.teal : 'transparent',
                color: (annual&&id==='annual')||(!annual&&id==='monthly') ? '#fff' : COLORS.textMuted,
                transition:'all .15s',
              }}>{l}</button>
            ))}
          </div>
        </div>

        <div className="pricing-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20, marginBottom:56 }}>
          {TIERS.map(t=>(
            <div key={t.id} style={{
              background:COLORS.white, borderRadius:16, padding:'36px 28px',
              border:`2px solid ${t.popular ? COLORS.teal : COLORS.border}`,
              position:'relative', boxShadow: t.popular ? '0 8px 32px rgba(15,118,110,0.16)' : 'none',
              transform: t.popular ? 'scale(1.03)' : 'none',
            }}>
              {t.popular && (
                <div style={{
                  position:'absolute', top:-13, left:'50%', transform:'translateX(-50%)',
                  background:COLORS.teal, color:'#fff', padding:'4px 18px', borderRadius:20,
                  fontSize:11, fontWeight:700, letterSpacing:'.04em',
                }}>MASHHUR [Popular]</div>
              )}
              <div style={{ fontSize:13, fontWeight:600, color:COLORS.tealLight, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:8 }}>
                {t.name}
              </div>
              <div style={{ fontSize:36, fontWeight:900, color:COLORS.text, letterSpacing:'-0.04em', lineHeight:1, marginBottom:4 }}>
                {t.price}
              </div>
              {t.priceUz && <div style={{ fontSize:13, color:COLORS.textLight, marginBottom:20 }}>{t.priceUz}</div>}

              <button style={{
                width:'100%', padding:'13px', borderRadius:10, border:'none',
                background: t.popular ? COLORS.teal : COLORS.bgAlt,
                color: t.popular ? '#fff' : COLORS.textMid,
                fontSize:14, fontWeight:700, cursor:'pointer', fontFamily:"'Inter',sans-serif",
                marginBottom:24,
              }}>{t.cta}</button>

              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {t.features.map(f=>(
                  <div key={f} style={{ display:'flex', alignItems:'center', gap:8, fontSize:13 }}>
                    <CheckCircleIcon size={14} color={COLORS.green}/>
                    <span style={{ color:COLORS.textMid }}>{f}</span>
                  </div>
                ))}
                {t.noFeatures.map(f=>(
                  <div key={f} style={{ display:'flex', alignItems:'center', gap:8, fontSize:13 }}>
                    <span style={{ width:14, height:14, display:'flex', alignItems:'center', justifyContent:'center', color:COLORS.textLight, fontSize:12 }}>✕</span>
                    <span style={{ color:COLORS.textLight }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background:COLORS.tealBg, borderRadius:12, padding:'20px 28px', marginBottom:44,
          border:`1px solid ${COLORS.tealBorder}`, textAlign:'center',
        }}>
          <div style={{ fontSize:15, fontWeight:700, color:COLORS.teal, marginBottom:4 }}>
            Ish qidiruvchilar uchun — Doimo bepul!
          </div>
          <div style={{ fontSize:13, color:COLORS.textMuted }}>
            Barcha funksiyalar ochiq: ariza topshirish, profil yaratish, shikoyat yuborish, mukofotlar.
          </div>
        </div>

        <h2 style={{ textAlign:'center', margin:'0 0 24px', fontSize:24, fontWeight:800, color:COLORS.text }}>
          Batafsil taqqoslash
        </h2>
        <div style={{ background:COLORS.white, borderRadius:14, border:`1px solid ${COLORS.border}`, overflow:'hidden' }}>
          <div style={{
            display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr',
            padding:'14px 24px', borderBottom:`2px solid ${COLORS.border}`,
            background:COLORS.bgAlt,
          }}>
            <span style={{ fontSize:12, fontWeight:700, color:COLORS.textMid }}>Funksiya [Feature]</span>
            <span style={{ fontSize:12, fontWeight:700, color:COLORS.textMid, textAlign:'center' }}>Free</span>
            <span style={{ fontSize:12, fontWeight:700, color:COLORS.teal, textAlign:'center' }}>Plus</span>
            <span style={{ fontSize:12, fontWeight:700, color:COLORS.textMid, textAlign:'center' }}>Pro</span>
          </div>
          {COMPARISON.map((r,i)=>(
            <div key={i} style={{
              display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr',
              padding:'12px 24px', borderBottom: i<COMPARISON.length-1 ? `1px solid ${COLORS.borderLight}` : 'none',
            }}>
              <span style={{ fontSize:13, fontWeight:500, color:COLORS.text }}>{r.feature}</span>
              {[r.free, r.plus, r.pro].map((v,j)=>(
                <span key={j} style={{
                  fontSize:13, textAlign:'center', fontWeight: v==='✓' || v.includes('✓') ? 600 : 400,
                  color: v==='—' ? COLORS.textLight : v==='✓' || v.includes('✓') ? COLORS.green : COLORS.textMid,
                }}>{v}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
