import React from 'react';
import { COLORS, MapPinIcon, AlertIcon, FlagIcon } from './Shared';

const FLAGGED_CO = {
  name:"Oltin Yort Qurilish",
  risk:78,
  regNum:"QR-2019-45672",
  location:"Samarqand viloyati",
  industry:"Qurilish [Construction]",
  employees:45,
  founded:"2019",
  verified:false,
  flagReason:"Ko'p sonli shikoyatlar va maosh nomuvofiqligi aniqlangan",
  salary:{ min:"4,500,000", max:"9,000,000", avg:"6,200,000", benchmark:"8,500,000", delta:"-27%" },
  roles:[
    { name:"Qurilish ustasi", salary:6.0, benchmark:8.5, flagged:true },
    { name:"Elektrik", salary:5.5, benchmark:7.0, flagged:true },
    { name:"Buxgalter", salary:7.0, benchmark:8.0, flagged:false },
    { name:"Haydovchi", salary:4.5, benchmark:5.5, flagged:true },
  ],
  postings:[
    { title:"Qurilish Ustasi", date:"22 apr", applicants:12, risk:92 },
    { title:"Elektrik mutaxassisi", date:"18 apr", applicants:8, risk:78 },
    { title:"Yuk haydovchisi", date:"15 apr", applicants:22, risk:65 },
    { title:"Buxgalter", date:"10 apr", applicants:34, risk:25 },
  ],
  reports:{ total:12, categories:[
    { name:"Maosh nomuvofiq", count:5 },
    { name:"Sekin yollash", count:3 },
    { name:"Ghost xodimlar", count:2 },
    { name:"Boshqa", count:2 },
  ]},
  trustScore:28,
  hiring:{ hired6mo:8, avgTimeToHire:"45 kun", retention:"42%" },
};

export function FlaggedCompanyPage({ onReport }) {
  const co = FLAGGED_CO;
  const maxSalary = Math.max(...co.roles.map(r=>Math.max(r.salary, r.benchmark)));

  return (
    <div style={{ minHeight:'100vh', background:COLORS.bg, fontFamily:"'Inter',sans-serif" }}>
      <div style={{ maxWidth:960, margin:'0 auto', padding:'32px' }}>

        {/* Header */}
        <div style={{
          background:COLORS.white, borderRadius:14, border:`1px solid ${COLORS.border}`,
          padding:'28px 32px', marginBottom:22, boxShadow:'0 2px 8px rgba(0,0,0,0.04)',
        }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 }}>
            <div style={{ display:'flex', alignItems:'center', gap:16 }}>
              <div style={{
                width:56, height:56, borderRadius:14, background:COLORS.redBg,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:22, fontWeight:800, color:COLORS.red,
              }}>O</div>
              <div>
                <h1 style={{ margin:'0 0 4px', fontSize:24, fontWeight:800, color:COLORS.text }}>{co.name}</h1>
                <div style={{ display:'flex', gap:14, fontSize:13, color:COLORS.textMuted, flexWrap:'wrap' }}>
                  <span>{co.regNum}</span>
                  <span><MapPinIcon/> {co.location}</span>
                  <span>{co.industry}</span>
                </div>
              </div>
            </div>
            <div style={{
              background:COLORS.redBg, borderRadius:12, padding:'12px 18px', textAlign:'center',
              border:`1px solid ${COLORS.redLight}`,
            }}>
              <div style={{ fontSize:11, color:COLORS.red, fontWeight:600, marginBottom:2 }}>Xavf darajasi</div>
              <div style={{ fontSize:32, fontWeight:900, color:COLORS.red, lineHeight:1 }}>{co.risk}</div>
              <div style={{ fontSize:10, color:COLORS.textLight }}>/100</div>
            </div>
          </div>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:12 }}>
            <span style={{ fontSize:12, background:COLORS.bgAlt, padding:'4px 12px', borderRadius:7, color:COLORS.textMid }}>
              {co.employees} xodim
            </span>
            <span style={{ fontSize:12, background:COLORS.bgAlt, padding:'4px 12px', borderRadius:7, color:COLORS.textMid }}>
              Tashkil etilgan: {co.founded}
            </span>
            <span style={{
              fontSize:12, background:COLORS.redBg, padding:'4px 12px', borderRadius:7,
              color:COLORS.red, fontWeight:600, display:'flex', alignItems:'center', gap:4,
            }}>
              <FlagIcon size={11} color={COLORS.red}/> Belgilangan [Flagged]
            </span>
          </div>
          <div style={{
            background:COLORS.redBg, borderRadius:8, padding:'10px 14px',
            fontSize:13, color:COLORS.red, lineHeight:1.5,
            display:'flex', alignItems:'center', gap:8,
          }}>
            <AlertIcon size={16} color={COLORS.red}/>
            {co.flagReason}
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginBottom:22 }}>

          {/* Salary Analytics */}
          <div style={{ background:COLORS.white, borderRadius:13, border:`1px solid ${COLORS.border}`, overflow:'hidden' }}>
            <div style={{ padding:'16px 22px', borderBottom:`1px solid ${COLORS.border}` }}>
              <h3 style={{ margin:0, fontSize:15, fontWeight:700 }}>Maosh tahlili [Salary Analytics]</h3>
            </div>
            <div style={{ padding:'18px 22px' }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12, marginBottom:18 }}>
                {[["Min",co.salary.min],["O'rtacha",co.salary.avg],["Max",co.salary.max]].map(([l,v])=>(
                  <div key={l} style={{ textAlign:'center' }}>
                    <div style={{ fontSize:11, color:COLORS.textLight, marginBottom:4 }}>{l}</div>
                    <div style={{ fontSize:15, fontWeight:800, color:COLORS.text }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{
                background:COLORS.redBg, borderRadius:8, padding:'10px 14px',
                display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18,
              }}>
                <div>
                  <div style={{ fontSize:11, color:COLORS.textMuted }}>Sohaviy o'rtacha</div>
                  <div style={{ fontSize:14, fontWeight:700, color:COLORS.text }}>{co.salary.benchmark} UZS</div>
                </div>
                <span style={{ fontSize:18, fontWeight:900, color:COLORS.red }}>{co.salary.delta}</span>
              </div>
              <div style={{ fontSize:11, fontWeight:600, color:COLORS.textLight, textTransform:'uppercase', letterSpacing:'.04em', marginBottom:10 }}>
                Lavozimlar bo'yicha [By role]
              </div>
              {co.roles.map(r=>(
                <div key={r.name} style={{ marginBottom:10 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:4 }}>
                    <span style={{ fontSize:12, fontWeight:500, color:COLORS.textMid }}>{r.name}</span>
                    {r.flagged && <span style={{ fontSize:10, color:COLORS.red, fontWeight:600 }}>⚠</span>}
                  </div>
                  <div style={{ display:'flex', gap:4, height:7 }}>
                    <div style={{ width:`${r.salary/maxSalary*100}%`, background: r.flagged ? COLORS.red : COLORS.teal, borderRadius:4, transition:'width .5s' }}/>
                  </div>
                  <div style={{ display:'flex', gap:4, height:7, marginTop:2 }}>
                    <div style={{ width:`${r.benchmark/maxSalary*100}%`, background:COLORS.bgAlt2, borderRadius:4 }}/>
                  </div>
                  <div style={{ display:'flex', gap:12, fontSize:10, color:COLORS.textLight, marginTop:2 }}>
                    <span style={{ color: r.flagged ? COLORS.red : COLORS.teal }}>{r.salary}M</span>
                    <span>{r.benchmark}M (o'rtacha)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Feedback + Hiring */}
          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
            <div style={{ background:COLORS.white, borderRadius:13, border:`1px solid ${COLORS.border}`, overflow:'hidden' }}>
              <div style={{ padding:'16px 22px', borderBottom:`1px solid ${COLORS.border}`, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <h3 style={{ margin:0, fontSize:15, fontWeight:700 }}>Jamiyat fikri [Community Feedback]</h3>
                <span style={{ fontSize:12, fontWeight:700, color:COLORS.red }}>{co.reports.total} ta hisobot</span>
              </div>
              <div style={{ padding:'18px 22px' }}>
                <div style={{ textAlign:'center', marginBottom:18 }}>
                  <div style={{
                    width:80, height:80, borderRadius:'50%', margin:'0 auto 8px',
                    border:`5px solid ${co.trustScore < 40 ? COLORS.red : co.trustScore < 70 ? COLORS.amber : COLORS.green}`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>
                    <span style={{ fontSize:28, fontWeight:900, color: co.trustScore < 40 ? COLORS.red : COLORS.textMid }}>{co.trustScore}</span>
                  </div>
                  <div style={{ fontSize:12, color:COLORS.textMuted }}>Ishonch bali [Trust score]</div>
                </div>
                {co.reports.categories.map(c=>(
                  <div key={c.name} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
                    <span style={{ fontSize:13, color:COLORS.textMid }}>{c.name}</span>
                    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                      <div style={{ width:80, height:5, background:COLORS.bgAlt, borderRadius:3 }}>
                        <div style={{ width:`${c.count/co.reports.total*100}%`, height:'100%', background:COLORS.red, borderRadius:3 }}/>
                      </div>
                      <span style={{ fontSize:12, fontWeight:700, color:COLORS.red, width:16, textAlign:'right' }}>{c.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background:COLORS.white, borderRadius:13, border:`1px solid ${COLORS.border}`, overflow:'hidden' }}>
              <div style={{ padding:'16px 22px', borderBottom:`1px solid ${COLORS.border}` }}>
                <h3 style={{ margin:0, fontSize:15, fontWeight:700 }}>Yollash tarixi [Hiring History]</h3>
              </div>
              <div style={{ padding:'18px 22px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12 }}>
                {[
                  ["Ishga olingan (6 oy)",co.hiring.hired6mo+" kishi",COLORS.textMid],
                  ["O'rtacha vaqt",co.hiring.avgTimeToHire,COLORS.amber],
                  ["Saqlash darajasi",co.hiring.retention,COLORS.red],
                ].map(([l,v,c])=>(
                  <div key={l} style={{ textAlign:'center', background:COLORS.bgAlt, borderRadius:9, padding:'14px 10px' }}>
                    <div style={{ fontSize:20, fontWeight:900, color:c, lineHeight:1 }}>{v}</div>
                    <div style={{ fontSize:11, color:COLORS.textMuted, marginTop:5 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Job Postings */}
        <div style={{ background:COLORS.white, borderRadius:13, border:`1px solid ${COLORS.border}`, overflow:'hidden', marginBottom:22 }}>
          <div style={{ padding:'16px 22px', borderBottom:`1px solid ${COLORS.border}` }}>
            <h3 style={{ margin:0, fontSize:15, fontWeight:700 }}>Vakansiyalar [Job Postings]</h3>
          </div>
          <div style={{
            display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr',
            padding:'10px 22px', borderBottom:`1px solid ${COLORS.border}`,
            fontSize:11, fontWeight:600, color:COLORS.textLight, textTransform:'uppercase', letterSpacing:'.04em',
          }}>
            <span>Lavozim</span><span>Sana</span><span>Arizalar</span><span>AI Risk</span>
          </div>
          {co.postings.map((p,i)=>(
            <div key={i} style={{
              display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr',
              padding:'12px 22px', alignItems:'center',
              borderBottom: i<co.postings.length-1 ? `1px solid ${COLORS.borderLight}` : 'none',
              background: p.risk > 70 ? 'rgba(251,146,60,0.05)' : 'transparent',
              borderLeft: p.risk > 70 ? `3px solid ${COLORS.amber}` : '3px solid transparent',
            }}>
              <span style={{ fontSize:14, fontWeight:600, color:COLORS.text }}>{p.title}</span>
              <span style={{ fontSize:12, color:COLORS.textMuted }}>{p.date}</span>
              <span style={{ fontSize:13, color:COLORS.textMid }}>{p.applicants}</span>
              <span style={{
                fontSize:13, fontWeight:800,
                color: p.risk >= 80 ? COLORS.red : p.risk >= 60 ? COLORS.amber : COLORS.green,
              }}>{p.risk}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display:'flex', gap:12 }}>
          <button onClick={onReport} style={{
            flex:1, padding:'14px', borderRadius:10, border:'none',
            background:COLORS.amber, color:'#fff', fontSize:15, fontWeight:700,
            cursor:'pointer', fontFamily:"'Inter',sans-serif",
            display:'flex', alignItems:'center', justifyContent:'center', gap:8,
          }}>
            <FlagIcon size={15} color="#fff"/> Hisobot qilish [Report]
          </button>
          <button style={{
            flex:1, padding:'14px', borderRadius:10, border:`1.5px solid ${COLORS.border}`,
            background:'transparent', color:COLORS.textMid, fontSize:15, fontWeight:500,
            cursor:'pointer', fontFamily:"'Inter',sans-serif",
          }}>Izoh qoldirish [Leave comment]</button>
        </div>
      </div>
    </div>
  );
}
