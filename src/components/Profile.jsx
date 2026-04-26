import React from 'react';
import { COLORS, ShieldIcon, MapPinIcon, VerifiedBadge } from './Shared';

const PROFILE_DATA = {
  name: "Aziz Jo'rayev",
  title: "Senior Frontend Developer",
  company: "Uzcard MCHJ",
  location: "Toshkent, O'zbekiston",
  oneId: "12345678",
  bio: "5 yillik tajribaga ega frontend dasturchi. React, TypeScript va Node.js bo'yicha mutaxassis.",
  experience: [
    { company:"Uzcard MCHJ",   title:"Senior Frontend Developer", from:"2024", to:"Hozir", desc:"React/TypeScript ilovalar, dizayn tizimi yaratish, jamoa rahbariyati." },
    { company:"Payme MCHJ",    title:"Frontend Developer",         from:"2022", to:"2024",  desc:"Mobil va web ilovalar, A/B test, CI/CD pipeline sozlash." },
    { company:"Freelance",     title:"Web Developer",              from:"2020", to:"2022",  desc:"WordPress, HTML/CSS, kichik biznes loyihalari." },
  ],
  education: [
    { inst:"Toshkent Axborot Texnologiyalari Universiteti (TATU)", degree:"Bakalavr", field:"Kompyuter fanlari", year:"2020" },
  ],
  certs: [
    { name:"AWS Certified Developer",  issuer:"Amazon",          date:"2025", link:"#" },
    { name:"React Advanced Patterns",  issuer:"Frontend Masters", date:"2024", link:"#" },
  ],
  skills: [
    { name:"React",      endorsed:24 }, { name:"TypeScript", endorsed:18 },
    { name:"Node.js",    endorsed:15 }, { name:"Python",     endorsed:9  },
    { name:"SQL",        endorsed:12 }, { name:"Figma",      endorsed:7  },
    { name:"AWS",        endorsed:5  }, { name:"Docker",     endorsed:4  },
  ],
  achievements: [
    { title:"3 yil uzluksiz ish",     desc:"Uzcard MChJda 3 yil davomida yuqori samaradorlik.", date:"2026", icon:"🏆" },
    { title:"Ishonchli mutaxassis",   desc:"TrustFlow platformasida 1,200+ ball to'plangan.",   date:"2026", icon:"⭐" },
  ],
  endorsements: [
    { from:"Bobur Karimov",   role:"Team Lead, Payme", skill:"React",      text:"Aziz bilan ishlash juda qulay. Murakkab muammolarni tez hal qiladi." },
    { from:"Nilufar Rashidova", role:"PM, Uzcard",     skill:"TypeScript", text:"Kodni sifatli va toza yozadi. Jamoada ishonchli a'zo." },
  ],
};

function SectionCard({ title, children, onAdd }) {
  return (
    <div style={{
      background:COLORS.white, borderRadius:13, border:`1px solid ${COLORS.border}`,
      marginBottom:18, overflow:'hidden', boxShadow:'0 1px 4px rgba(0,0,0,0.04)',
    }}>
      <div style={{
        padding:'16px 22px', borderBottom:`1px solid ${COLORS.border}`,
        display:'flex', justifyContent:'space-between', alignItems:'center',
      }}>
        <h3 style={{ margin:0, fontSize:15, fontWeight:700, color:COLORS.text }}>{title}</h3>
        {onAdd && (
          <button onClick={onAdd} style={{
            background:COLORS.tealBg, border:'none', color:COLORS.teal,
            padding:'5px 12px', borderRadius:7, fontSize:12, fontWeight:600,
            cursor:'pointer', fontFamily:"'Inter',sans-serif",
          }}>+ Qo'shish</button>
        )}
      </div>
      <div style={{ padding:'18px 22px' }}>{children}</div>
    </div>
  );
}

export function ProfilePage() {
  const p = PROFILE_DATA;
  const [editingBio, setEditingBio] = React.useState(false);
  const [bio, setBio] = React.useState(p.bio);
  const [endorseTab, setEndorseTab] = React.useState('endorsements');

  return (
    <div style={{ minHeight:'100vh', background:COLORS.bg, fontFamily:"'Inter',sans-serif" }}>
      <div style={{ maxWidth:780, margin:'0 auto', padding:'32px' }}>

        {/* Header card */}
        <div style={{
          background:COLORS.white, borderRadius:16, overflow:'hidden',
          border:`1px solid ${COLORS.border}`, marginBottom:22,
          boxShadow:'0 2px 8px rgba(15,118,110,0.06)',
        }}>
          <div style={{
            height:120,
            background:`linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealDark} 100%)`,
            position:'relative',
          }}>
            <div style={{
              position:'absolute', bottom:-36, left:28,
              width:80, height:80, borderRadius:'50%',
              background:COLORS.white, border:'4px solid #fff',
              boxShadow:'0 2px 12px rgba(0,0,0,0.15)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:28, fontWeight:800, color:COLORS.teal,
            }}>AJ</div>
          </div>
          <div style={{ padding:'48px 28px 24px', display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:4 }}>
                <h1 style={{ margin:0, fontSize:22, fontWeight:800, color:COLORS.text }}>{p.name}</h1>
                <VerifiedBadge/>
              </div>
              <div style={{ fontSize:14, color:COLORS.textMid, marginBottom:3 }}>
                {p.title} — {p.company}
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:13, color:COLORS.textMuted }}>
                <MapPinIcon/> {p.location}
              </div>
              <div style={{
                display:'inline-flex', alignItems:'center', gap:6, marginTop:10,
                background:COLORS.tealBg, padding:'3px 10px', borderRadius:6,
                fontSize:11, fontWeight:600, color:COLORS.teal,
              }}>
                <ShieldIcon size={12} color={COLORS.teal}/> OneID: {p.oneId}
              </div>
            </div>
            <button style={{
              background:COLORS.bgAlt, border:`1px solid ${COLORS.border}`,
              padding:'8px 16px', borderRadius:8, fontSize:13, color:COLORS.textMid,
              cursor:'pointer', fontFamily:"'Inter',sans-serif",
              display:'flex', alignItems:'center', gap:6,
            }}>✏️ Tahrirlash</button>
          </div>

          <div style={{ padding:'0 28px 22px' }}>
            {editingBio ? (
              <div>
                <textarea value={bio} onChange={e=>setBio(e.target.value)} rows={3} style={{
                  width:'100%', boxSizing:'border-box', border:`1.5px solid ${COLORS.teal}`,
                  borderRadius:8, padding:'10px 12px', fontSize:14,
                  fontFamily:"'Inter',sans-serif", resize:'none', outline:'none',
                }}/>
                <div style={{ display:'flex', gap:8, marginTop:8 }}>
                  <button onClick={()=>setEditingBio(false)} style={{
                    padding:'7px 16px', borderRadius:8, background:COLORS.teal, border:'none',
                    color:'#fff', fontSize:12, fontWeight:600, cursor:'pointer', fontFamily:"'Inter',sans-serif",
                  }}>Saqlash</button>
                  <button onClick={()=>{setBio(p.bio);setEditingBio(false);}} style={{
                    padding:'7px 16px', borderRadius:8, background:'transparent',
                    border:`1px solid ${COLORS.border}`, color:COLORS.textMuted,
                    fontSize:12, cursor:'pointer', fontFamily:"'Inter',sans-serif",
                  }}>Bekor</button>
                </div>
              </div>
            ) : (
              <p onClick={()=>setEditingBio(true)} style={{
                margin:0, fontSize:14, color:COLORS.textMid, lineHeight:1.7,
                cursor:'pointer', padding:'8px 12px', borderRadius:8, transition:'background .12s',
              }}
              onMouseEnter={e=>e.currentTarget.style.background=COLORS.bgAlt}
              onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                {bio}
              </p>
            )}
          </div>
        </div>

        {/* Experience */}
        <SectionCard title="Ish tarixi [Work experience]" onAdd={()=>{}}>
          {p.experience.map((e,i)=>(
            <div key={i} style={{
              display:'flex', gap:16,
              marginBottom: i<p.experience.length-1 ? 20 : 0,
              paddingBottom: i<p.experience.length-1 ? 20 : 0,
              borderBottom: i<p.experience.length-1 ? `1px solid ${COLORS.borderLight}` : 'none',
            }}>
              <div style={{
                width:42, height:42, borderRadius:10, background:COLORS.tealBg,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:15, fontWeight:800, color:COLORS.teal, flexShrink:0,
              }}>{e.company[0]}</div>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:COLORS.text }}>{e.title}</div>
                <div style={{ fontSize:13, color:COLORS.textMid, marginTop:2 }}>{e.company}</div>
                <div style={{ fontSize:12, color:COLORS.textLight, marginTop:2 }}>{e.from} – {e.to}</div>
                <p style={{ margin:'8px 0 0', fontSize:13, color:COLORS.textMuted, lineHeight:1.6 }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </SectionCard>

        {/* Education */}
        <SectionCard title="Ta'lim [Education]" onAdd={()=>{}}>
          {p.education.map((e,i)=>(
            <div key={i} style={{ display:'flex', gap:14 }}>
              <div style={{
                width:42, height:42, borderRadius:10, background:COLORS.amberBg,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:18, flexShrink:0,
              }}>🎓</div>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:COLORS.text }}>{e.inst}</div>
                <div style={{ fontSize:13, color:COLORS.textMid, marginTop:2 }}>{e.degree} — {e.field}</div>
                <div style={{ fontSize:12, color:COLORS.textLight, marginTop:2 }}>Bitirgan yili: {e.year}</div>
              </div>
            </div>
          ))}
        </SectionCard>

        {/* Certificates */}
        <SectionCard title="Sertifikatlar [Certificates]" onAdd={()=>{}}>
          {p.certs.map((c,i)=>(
            <div key={i} style={{
              display:'flex', justifyContent:'space-between', alignItems:'center',
              marginBottom: i<p.certs.length-1 ? 14 : 0,
              paddingBottom: i<p.certs.length-1 ? 14 : 0,
              borderBottom: i<p.certs.length-1 ? `1px solid ${COLORS.borderLight}` : 'none',
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <span style={{ fontSize:20 }}>📜</span>
                <div>
                  <div style={{ fontSize:14, fontWeight:600, color:COLORS.text }}>{c.name}</div>
                  <div style={{ fontSize:12, color:COLORS.textMuted }}>{c.issuer} · {c.date}</div>
                </div>
              </div>
              <a href={c.link} style={{ fontSize:12, color:COLORS.teal, fontWeight:600, textDecoration:'none' }}>Ko'rish →</a>
            </div>
          ))}
        </SectionCard>

        {/* Skills */}
        <SectionCard title="Ko'nikmalar [Skills]" onAdd={()=>{}}>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {p.skills.map(s=>(
              <span key={s.name} style={{
                background:COLORS.tealBg, color:COLORS.teal,
                padding:'6px 14px', borderRadius:20, fontSize:13, fontWeight:500,
                display:'flex', alignItems:'center', gap:6,
              }}>
                {s.name}
                <span style={{ fontSize:11, color:COLORS.textLight, fontWeight:600 }}>{s.endorsed}</span>
              </span>
            ))}
          </div>
        </SectionCard>

        {/* Achievements */}
        <SectionCard title="Erishgan muvaffaqiyatlar [Achievements]">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            {p.achievements.map((a,i)=>(
              <div key={i} style={{
                background:COLORS.bgAlt, borderRadius:10, padding:'16px 18px',
                display:'flex', gap:14, alignItems:'flex-start',
              }}>
                <span style={{ fontSize:28 }}>{a.icon}</span>
                <div>
                  <div style={{ fontSize:14, fontWeight:700, color:COLORS.text }}>{a.title}</div>
                  <div style={{ fontSize:12, color:COLORS.textMuted, marginTop:3, lineHeight:1.5 }}>{a.desc}</div>
                  <div style={{ fontSize:11, color:COLORS.textLight, marginTop:4 }}>{a.date}</div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Endorsements */}
        <SectionCard title="Izoh va tavsiyalar [Endorsements & Recommendations]">
          <div style={{ display:'flex', gap:6, marginBottom:16 }}>
            {[['endorsements','Tavsiyalar'],['testimonials','Guvohnomalar']].map(([id,l])=>(
              <button key={id} onClick={()=>setEndorseTab(id)} style={{
                padding:'7px 16px', borderRadius:8, fontSize:13, fontWeight:500,
                border:`1.5px solid ${endorseTab===id ? COLORS.teal : COLORS.border}`,
                background: endorseTab===id ? COLORS.tealBg : 'transparent',
                color: endorseTab===id ? COLORS.teal : COLORS.textMuted,
                cursor:'pointer', fontFamily:"'Inter',sans-serif",
              }}>{l}</button>
            ))}
          </div>
          {p.endorsements.map((e,i)=>(
            <div key={i} style={{
              background:COLORS.bgAlt, borderRadius:10, padding:'14px 18px',
              marginBottom: i<p.endorsements.length-1 ? 10 : 0,
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8 }}>
                <div style={{
                  width:32, height:32, borderRadius:'50%', background:COLORS.teal,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:13, fontWeight:700, color:'#fff', flexShrink:0,
                }}>{e.from[0]}</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:600, color:COLORS.text }}>{e.from}</div>
                  <div style={{ fontSize:11, color:COLORS.textMuted }}>{e.role} · {e.skill}</div>
                </div>
              </div>
              <p style={{ margin:0, fontSize:13, color:COLORS.textMid, lineHeight:1.65, fontStyle:'italic' }}>
                "{e.text}"
              </p>
            </div>
          ))}
        </SectionCard>
      </div>
    </div>
  );
}
