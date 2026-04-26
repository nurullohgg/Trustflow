import React from 'react';
import { COLORS } from './Shared';

const GOV_KPIS = [
  { label:"Nazorat qilingan ish haqi [Payroll monitored]", val:'₽2.4T',  sub:'UZS jami',     trend:'+12%', up:true,  color:COLORS.tealLight },
  { label:"Aniqlangan soliq bo'shlig'i [Tax gap]",         val:'384B',   sub:'UZS, bu oy',   trend:'-3%',  up:false, color:COLORS.amber    },
  { label:"Belgilangan yollovchilar [Flagged hires]",      val:'247',    sub:'bu oy',         trend:'+8%',  up:true,  color:COLORS.red      },
  { label:"Tasdiqlangan korrupsiya [Confirmed cases]",     val:'89',     sub:'bu oy',         trend:'-14%', up:false, color:'#34d399'       },
];

const FLAGGED = [
  { id:1, name:"Oltin Yort Qurilish",        region:"Samarqand",  emp:45,  rep:12, risk:92, status:'flagged'    },
  { id:2, name:"Yangi Hayot QMJ",            region:"Farg'ona",   emp:67,  rep:15, risk:95, status:'flagged'    },
  { id:3, name:"Angren Kimyo Zavodi",        region:"Angren",     emp:120, rep:8,  risk:78, status:'flagged'    },
  { id:4, name:"Toshkent Qurilish Trust",    region:"Toshkent",   emp:234, rep:6,  risk:65, status:'suspicious' },
  { id:5, name:"Buxoro Gaz Xizmatlari",      region:"Buxoro",     emp:89,  rep:4,  risk:58, status:'suspicious' },
  { id:6, name:"Farg'ona Farmatsevtika QMJ", region:"Farg'ona",   emp:156, rep:9,  risk:71, status:'suspicious' },
];

const UZ_REGIONS = [
  { id:'qr',  name:"Qoraqalpog'iston", density:.15, cases:23,  pts:"10,10 228,10 222,36 202,55 182,72 155,95 122,115 72,128 28,135 10,135" },
  { id:'xr',  name:"Xorazm",          density:.45, cases:67,  pts:"122,115 155,95 168,108 164,128 138,132" },
  { id:'nv',  name:"Navoiy",          density:.22, cases:31,  pts:"155,95 222,52 302,60 314,85 294,115 258,135 222,145 188,140 164,128 168,108" },
  { id:'bx',  name:"Buxoro",          density:.55, cases:82,  pts:"72,128 122,115 138,132 164,128 188,140 188,175 168,197 125,207 68,202 65,172" },
  { id:'sm',  name:"Samarqand",       density:.78, cases:118, pts:"222,145 258,135 294,115 308,132 292,162 258,178 228,178 215,165" },
  { id:'jz',  name:"Jizzax",          density:.30, cases:44,  pts:"258,135 294,115 314,122 308,145 292,148 275,145" },
  { id:'qq',  name:"Qashqadaryo",     density:.82, cases:126, pts:"168,197 215,165 228,178 258,178 252,215 225,228 188,226 172,208" },
  { id:'sx',  name:"Surxondaryo",     density:.62, cases:93,  pts:"225,228 252,215 265,225 260,255 232,272 208,265 205,245" },
  { id:'sd',  name:"Sirdaryo",        density:.28, cases:38,  pts:"294,115 342,108 354,128 334,145 310,148 308,132" },
  { id:'tv',  name:"Toshkent v.",     density:.65, cases:97,  pts:"302,60 368,52 394,75 384,105 358,118 342,112 334,108 314,85" },
  { id:'ts',  name:"Toshkent shahri", density:.90, cases:189, pts:"345,97 365,97 365,115 345,115" },
  { id:'nm',  name:"Namangan",        density:.48, cases:71,  pts:"384,65 424,55 444,72 434,99 408,105 388,97" },
  { id:'an',  name:"Andijon",         density:.88, cases:145, pts:"434,99 455,88 478,106 468,134 444,137 428,125" },
  { id:'fg',  name:"Farg'ona",        density:.72, cases:108, pts:"388,105 428,105 444,137 435,158 405,162 382,148" },
];

function densityColor(d) {
  if (d < .25) return '#bbf7d0';
  if (d < .45) return '#6ee7b7';
  if (d < .60) return '#fde68a';
  if (d < .75) return '#fb923c';
  return '#f87171';
}
function densityLabel(d) {
  if (d < .25) return 'Juda past';
  if (d < .45) return 'Past';
  if (d < .60) return "O'rta";
  if (d < .75) return 'Yuqori';
  return 'Juda yuqori';
}

function UzbekistanMap() {
  const [hov, setHov] = React.useState(null);
  const reg = UZ_REGIONS.find(r=>r.id===hov);

  return (
    <div style={{ position:'relative' }}>
      <svg viewBox="0 0 510 290" style={{ width:'100%', height:'auto', display:'block' }}>
        <rect width="510" height="290" fill="#1e293b" rx="8"/>
        {UZ_REGIONS.map(r=>(
          <polygon key={r.id} points={r.pts}
            fill={hov===r.id ? '#60a5fa' : densityColor(r.density)}
            stroke="#1e293b" strokeWidth="1.5"
            style={{ cursor:'pointer', transition:'fill .18s' }}
            onMouseEnter={()=>setHov(r.id)}
            onMouseLeave={()=>setHov(null)}
          />
        ))}
        {[
          { x:82,  y:72,  t:'QQR',       fs:7   },
          { x:248, y:100, t:'Navoiy',    fs:7   },
          { x:132, y:172, t:'Buxoro',    fs:7   },
          { x:258, y:155, t:'Samarqand', fs:6.5 },
          { x:212, y:205, t:'QQD',       fs:6   },
          { x:240, y:245, t:'SXD',       fs:6   },
          { x:352, y:88,  t:'Tsh.v',     fs:6   },
          { x:355, y:108, t:'T.sh',      fs:5   },
          { x:414, y:82,  t:'Namangan',  fs:6.5 },
          { x:454, y:118, t:'Andijon',   fs:6   },
          { x:413, y:138, t:"Farg'ona",  fs:6   },
          { x:320, y:130, t:'Sirdaryo',  fs:5.5 },
          { x:298, y:142, t:'Jizzax',    fs:5   },
        ].map((l,i)=>(
          <text key={i} x={l.x} y={l.y} fontSize={l.fs}
            fill="rgba(15,23,42,0.75)" fontFamily="Inter,sans-serif"
            fontWeight="700" textAnchor="middle" style={{ pointerEvents:'none' }}>
            {l.t}
          </text>
        ))}
      </svg>

      {reg && (
        <div style={{
          position:'absolute', top:12, right:12,
          background:'#0f172a', borderRadius:10, padding:'13px 16px',
          border:'1px solid #334155', minWidth:175,
          boxShadow:'0 8px 28px rgba(0,0,0,0.45)',
          pointerEvents:'none',
        }}>
          <div style={{ fontSize:13, fontWeight:700, color:'#f8fafc', marginBottom:3 }}>{reg.name}</div>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:4 }}>
            <span style={{ fontSize:11, color:'#94a3b8' }}>Holatlari:</span>
            <span style={{ fontSize:11, fontWeight:700, color:'#fb923c' }}>{reg.cases}</span>
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
            <span style={{ fontSize:11, color:'#94a3b8' }}>Zichlik:</span>
            <span style={{ fontSize:11, fontWeight:600, color: densityColor(reg.density) }}>{densityLabel(reg.density)}</span>
          </div>
          <div style={{ height:4, background:'#334155', borderRadius:4 }}>
            <div style={{ height:'100%', width:`${reg.density*100}%`, background: densityColor(reg.density), borderRadius:4 }}/>
          </div>
        </div>
      )}

      <div style={{ display:'flex', gap:5, flexWrap:'wrap', marginTop:10 }}>
        {[['#bbf7d0','Juda past'],['#6ee7b7','Past'],['#fde68a',"O'rta"],['#fb923c','Yuqori'],['#f87171','Juda yuqori']].map(([c,l])=>(
          <div key={l} style={{ display:'flex', alignItems:'center', gap:4 }}>
            <div style={{ width:9, height:9, borderRadius:2, background:c, flexShrink:0 }}/>
            <span style={{ fontSize:10, color:'#64748b' }}>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RiskBar({ val }) {
  const c = val>=80 ? COLORS.red : val>=60 ? COLORS.amber : COLORS.green;
  return (
    <div style={{ display:'flex', alignItems:'center', gap:7 }}>
      <div style={{ flex:1, height:5, background:'#334155', borderRadius:3 }}>
        <div style={{ width:`${val}%`, height:'100%', background:c, borderRadius:3 }}/>
      </div>
      <span style={{ fontSize:12, fontWeight:700, color:c, width:26, textAlign:'right' }}>{val}</span>
    </div>
  );
}

export function GovDashboardPage() {
  const [sortCol, setSortCol] = React.useState('risk');
  const [sortDir, setSortDir] = React.useState('desc');
  const [activeNav, setActiveNav] = React.useState('overview');

  const toggleSort = col => {
    if (sortCol===col) setSortDir(d=>d==='desc'?'asc':'desc');
    else { setSortCol(col); setSortDir('desc'); }
  };

  const rows = [...FLAGGED].sort((a,b)=>{
    const diff = a[sortCol]-b[sortCol];
    return sortDir==='desc' ? -diff : diff;
  });

  const sideItems = [
    { id:'overview', icon:'⊞', label:"Umumiy ko'rinish" },
    { id:'flagged',  icon:'🚩', label:"Belgilangan kompaniyalar" },
    { id:'geo',      icon:'🗺', label:"Geografik tahlil" },
    { id:'reports',  icon:'📈', label:"Hisobotlar" },
    { id:'alerts',   icon:'🔔', label:"Ogohlantirishlar", badge:7 },
    { id:'config',   icon:'⚙',  label:"Sozlamalar" },
  ];

  return (
    <div style={{ display:'flex', minHeight:'calc(100vh - 62px)', background:COLORS.darkSurface, fontFamily:"'Inter',sans-serif" }} className="side-layout">

      <aside style={{
        width:240, flexShrink:0, background:COLORS.darkBg,
        borderRight:'1px solid #1e293b', display:'flex', flexDirection:'column',
      }}>
        <div style={{ padding:'22px 20px 18px', borderBottom:'1px solid #1e293b' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:6,
            background:'rgba(15,118,110,0.22)', color:COLORS.tealLight,
            padding:'4px 11px', borderRadius:6, fontSize:10.5, fontWeight:700,
            letterSpacing:'0.07em', textTransform:'uppercase', marginBottom:14,
          }}>🔐 Maxfiy [Classified]</div>
          <div style={{ fontSize:13.5, fontWeight:700, color:COLORS.darkText }}>Muzaffar Yusupov</div>
          <div style={{ fontSize:12, color:COLORS.darkMuted, marginTop:3 }}>Nazorat inspektori</div>
          <div style={{ fontSize:12, color:COLORS.darkMuted }}>Mehnat vazirligi</div>
        </div>

        <nav style={{ flex:1, paddingTop:8 }}>
          {sideItems.map(item=>(
            <div key={item.id} onClick={()=>setActiveNav(item.id)} style={{
              padding:'10px 20px', cursor:'pointer',
              background: activeNav===item.id ? 'rgba(15,118,110,0.18)' : 'transparent',
              borderLeft:`3px solid ${activeNav===item.id ? COLORS.teal : 'transparent'}`,
              display:'flex', alignItems:'center', justifyContent:'space-between',
              transition:'all .15s',
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <span style={{ fontSize:15 }}>{item.icon}</span>
                <span style={{ fontSize:13, fontWeight: activeNav===item.id ? 600 : 400, color: activeNav===item.id ? COLORS.tealLight : COLORS.darkMuted }}>
                  {item.label}
                </span>
              </div>
              {item.badge && (
                <span style={{ background:COLORS.red, color:'white', fontSize:10, fontWeight:700, padding:'1px 6px', borderRadius:10 }}>
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>

        <div style={{ padding:'16px 20px', borderTop:'1px solid #1e293b' }}>
          <div style={{ fontSize:11, color:'#334155', marginBottom:5 }}>Sessiya xavfsizligi</div>
          <div style={{ display:'flex', alignItems:'center', gap:6 }}>
            <div style={{ width:7, height:7, borderRadius:'50%', background:'#22c55e', flexShrink:0 }}/>
            <span style={{ fontSize:11, color:COLORS.darkMuted }}>Shifrlangan ulanish aktiv</span>
          </div>
        </div>
      </aside>

      <main style={{ flex:1, padding:'28px 32px', overflowY:'auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:26 }}>
          <div>
            <h1 style={{ margin:'0 0 5px', fontSize:22, fontWeight:800, color:COLORS.darkText, letterSpacing:'-0.03em' }}>
              Nazorat paneli [Monitoring Dashboard]
            </h1>
            <p style={{ margin:0, fontSize:13, color:COLORS.darkMuted }}>
              Real vaqt tahlili · Aprel 2026 [Real-time analytics · April 2026]
            </p>
          </div>
          <div style={{ display:'flex', gap:8 }}>
            <button style={{
              background:'#1e293b', border:'1px solid #334155', color:COLORS.darkMuted,
              padding:'8px 16px', borderRadius:8, fontSize:13, cursor:'pointer',
              fontFamily:"'Inter',sans-serif",
            }}>📥 Hisobot yuklab olish</button>
            <button style={{
              background:COLORS.teal, border:'none', color:'white',
              padding:'8px 18px', borderRadius:8, fontSize:13, fontWeight:700,
              cursor:'pointer', fontFamily:"'Inter',sans-serif",
            }}>🚀 Tezkor tekshirish</button>
          </div>
        </div>

        <div className="kpi-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginBottom:24 }}>
          {GOV_KPIS.map((k,i)=>(
            <div key={i} style={{ background:COLORS.darkCard, borderRadius:12, padding:'20px 22px', border:'1px solid #334155' }}>
              <div style={{ fontSize:11, color:'#64748b', lineHeight:1.5, marginBottom:10 }}>{k.label}</div>
              <div style={{ fontSize:30, fontWeight:900, color:k.color, letterSpacing:'-0.04em', lineHeight:1, marginBottom:7 }}>{k.val}</div>
              <div style={{ fontSize:11, color:COLORS.darkMuted, display:'flex', alignItems:'center', gap:6 }}>
                {k.sub}
                <span style={{
                  color: k.label.includes('Flagged')||k.label.includes("bo'shlig'i") ? (k.up ? COLORS.red : '#34d399') : (k.up ? '#34d399' : COLORS.red),
                  fontWeight:700,
                }}>{k.trend}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gov-grid" style={{ display:'grid', gridTemplateColumns:'1fr 380px', gap:22 }}>
          <div style={{ background:COLORS.darkCard, borderRadius:12, border:'1px solid #334155', overflow:'hidden' }}>
            <div style={{ padding:'15px 22px', borderBottom:'1px solid #334155', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <h2 style={{ margin:0, fontSize:14, fontWeight:700, color:COLORS.darkText }}>
                Belgilangan kompaniyalar [Flagged Companies]
              </h2>
              <span style={{ background:'rgba(220,38,38,0.15)', color:COLORS.red, fontSize:11, fontWeight:700, padding:'3px 9px', borderRadius:6 }}>
                {FLAGGED.length} ta kompaniya
              </span>
            </div>

            <div style={{
              display:'grid', gridTemplateColumns:'1.8fr .9fr 62px 70px 105px 88px',
              padding:'9px 22px', borderBottom:'1px solid #334155',
              fontSize:10.5, color:'#475569', fontWeight:600,
              textTransform:'uppercase', letterSpacing:'0.05em',
            }}>
              {[['Kompaniya',''],['Viloyat',''],['Xodim','emp'],["Shikoyat",'rep'],['Risk','risk'],['Holat','']].map(([h,col],i)=>(
                <span key={i} onClick={()=>col&&toggleSort(col)}
                  style={{ cursor:col?'pointer':'default', userSelect:'none', display:'flex', alignItems:'center', gap:4 }}>
                  {h}
                  {col && <span style={{ opacity:.5 }}>{sortCol===col ? (sortDir==='desc'?'↓':'↑') : '⇅'}</span>}
                </span>
              ))}
            </div>

            {rows.map((co,i)=>(
              <div key={co.id} style={{
                display:'grid', gridTemplateColumns:'1.8fr .9fr 62px 70px 105px 88px',
                padding:'13px 22px', borderBottom: i<rows.length-1 ? '1px solid rgba(51,65,85,0.5)' : 'none',
                alignItems:'center', transition:'background .12s',
              }}
              onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.03)'}
              onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                <div style={{ fontSize:13, fontWeight:600, color:COLORS.darkText }}>{co.name}</div>
                <div style={{ fontSize:12, color:COLORS.darkMuted }}>{co.region}</div>
                <div style={{ fontSize:12, color:COLORS.darkMuted }}>{co.emp}</div>
                <div style={{ fontSize:12, fontWeight:700, color:COLORS.red }}>{co.rep}</div>
                <RiskBar val={co.risk}/>
                <span style={{
                  display:'inline-block',
                  background: co.status==='flagged' ? 'rgba(220,38,38,0.15)' : 'rgba(217,119,6,0.15)',
                  color: co.status==='flagged' ? COLORS.red : COLORS.amber,
                  fontSize:10, fontWeight:700, padding:'3px 9px', borderRadius:6,
                  textTransform:'uppercase', letterSpacing:'0.04em',
                }}>
                  {co.status==='flagged' ? 'Belgilangan' : 'Shubhali'}
                </span>
              </div>
            ))}
          </div>

          <div style={{ background:COLORS.darkCard, borderRadius:12, border:'1px solid #334155', overflow:'hidden' }}>
            <div style={{ padding:'15px 20px', borderBottom:'1px solid #334155' }}>
              <h2 style={{ margin:'0 0 3px', fontSize:14, fontWeight:700, color:COLORS.darkText }}>
                Viloyatlar zichligi [Regional density]
              </h2>
              <p style={{ margin:0, fontSize:11, color:'#475569' }}>
                Korrupsiya holatlari · Aprel 2026
              </p>
            </div>
            <div style={{ padding:'16px 18px' }}>
              <UzbekistanMap/>
            </div>

            <div style={{ padding:'0 18px 18px' }}>
              <div style={{ fontSize:11, fontWeight:600, color:'#475569', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:10 }}>
                Top viloyatlar [Top regions]
              </div>
              {[['Toshkent sh.',189],['Andijon',145],['Qashqadaryo',126],['Samarqand',118]].map(([n,v])=>(
                <div key={n} style={{ display:'flex', alignItems:'center', gap:8, marginBottom:7 }}>
                  <span style={{ fontSize:11, color:COLORS.darkMuted, width:90, flexShrink:0 }}>{n}</span>
                  <div style={{ flex:1, height:5, background:'#334155', borderRadius:3 }}>
                    <div style={{ height:'100%', width:`${v/200*100}%`, background:COLORS.red, borderRadius:3 }}/>
                  </div>
                  <span style={{ fontSize:11, fontWeight:700, color:COLORS.red, width:28, textAlign:'right' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
