// Dashboard.jsx — Job seeker dashboard

const APPLIED_JOBS = [
  { id:1, company:'Uzcard MCHJ',               title:'Senior Frontend Developer', date:'22 aprel 2026', status:'reviewing' },
  { id:2, company:'DIM Media Group',            title:'Marketing Manager',          date:'20 aprel 2026', status:'accepted'  },
  { id:3, company:'Angren Kimyo Zavodi',        title:'Bosh Buxgalter',             date:'18 aprel 2026', status:'rejected'  },
  { id:4, company:'National Bank of Uzbekistan',title:'Risk Analyst',               date:'15 aprel 2026', status:'reviewing' },
];

const ACTIVITY = [
  { icon:'📋', text:"National Bank UZ ga ariza topshirdingiz",                         time:'9 kun oldin' },
  { icon:'✅', text:"DIM Media Group arizangizni qabul qildi",                         time:'4 kun oldin' },
  { icon:'👀', text:"Profilingiz 12 ta kompaniya tomonidan ko\u02BBrildi",                  time:'2 kun oldin' },
  { icon:'⭐', text:"150 ball to'pladingiz — 'Ishonchli mutaxassis' darajasiga yetdingiz", time:'1 kun oldin' },
  { icon:'🔔', text:"Yangi vakansiya: Senior React Developer — Uzcard MCHJ",           time:'Bugun' },
];

const PROFILE_ITEMS = [
  { label:"Asosiy ma'lumotlar [Basic info]",    done:true  },
  { label:"Ish tajribasi [Work experience]",     done:false },
  { label:"Ta'lim [Education]",                 done:true  },
  { label:"Ko'nikmalar [Skills]",               done:true  },
  { label:"Sertifikatlar [Certifications]",     done:false },
];

function ProgressBar({ pct, color = COLORS.teal, height = 7 }) {
  return (
    <div style={{ height, background:COLORS.bgAlt, borderRadius:height }}>
      <div style={{ height:'100%', width:`${pct}%`, background:color, borderRadius:height, transition:'width 1s ease' }}/>
    </div>
  );
}

function DashboardPage({ onReport }) {
  const [tab, setTab] = React.useState('overview');

  const navItems = [
    { id:'overview',  icon:'⊞', label:"Umumiy ko\u02BBrinish [Overview]" },
    { id:'applied',   icon:'📋', label:'Arizalarim [My Applications]' },
    { id:'saved',     icon:'\u2605',  label:'Saqlangan [Saved]' },
    { id:'messages',  icon:'💬', label:'Xabarlar [Messages]',  badge:3 },
    { id:'settings',  icon:'⚙',  label:'Sozlamalar [Settings]' },
  ];

  return (
    <div style={{ display:'flex', minHeight:'calc(100vh - 62px)', background:COLORS.bg, fontFamily:"'Inter',sans-serif" }}>

      {/* ── Sidebar ── */}
      <aside style={{
        width:264, flexShrink:0, background:COLORS.white,
        borderRight:`1px solid ${COLORS.border}`, display:'flex', flexDirection:'column',
      }}>
        {/* Profile block */}
        <div style={{ padding:'24px 20px 20px', borderBottom:`1px solid ${COLORS.border}` }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:18 }}>
            <div style={{
              width:50, height:50, borderRadius:'50%', background:COLORS.teal,
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:18, fontWeight:800, color:COLORS.white, letterSpacing:'-0.02em', flexShrink:0,
            }}>AJ</div>
            <div>
              <div style={{ fontWeight:700, fontSize:14.5, color:COLORS.text }}>Aziz Jo'rayev</div>
              <div style={{ fontSize:12, color:COLORS.textMuted, marginTop:1 }}>OneID: 12345678</div>
            </div>
          </div>

          {/* Completeness */}
          <div style={{ marginBottom:10 }}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:7 }}>
              <span style={{ fontSize:12, fontWeight:600, color:COLORS.textMid }}>Profil to'liqligi</span>
              <span style={{ fontSize:12, fontWeight:800, color:COLORS.teal }}>60%</span>
            </div>
            <ProgressBar pct={60}/>
            <div style={{ marginTop:10, display:'flex', flexDirection:'column', gap:5 }}>
              {PROFILE_ITEMS.map((p,i)=>(
                <div key={i} style={{ display:'flex', alignItems:'center', gap:7, fontSize:11.5 }}>
                  <span style={{ color: p.done ? COLORS.green : COLORS.textLight, fontSize:13 }}>
                    {p.done ? '✓' : '○'}
                  </span>
                  <span style={{ color: p.done ? COLORS.textMid : COLORS.textLight }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OneID badge */}
        <div style={{ padding:'12px 20px', borderBottom:`1px solid ${COLORS.border}` }}>
          <div style={{
            background:COLORS.tealBg, borderRadius:9, padding:'10px 14px',
            display:'flex', alignItems:'center', gap:9,
          }}>
            <ShieldIcon size={18} color={COLORS.teal}/>
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:COLORS.teal }}>OneID Tasdiqlangan</div>
              <div style={{ fontSize:10.5, color:COLORS.textMuted }}>Milliy identifikatsiya tizimi</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding:'8px 0', flex:1 }}>
          {navItems.map(item=>(
            <button key={item.id} onClick={()=>setTab(item.id)} style={{
              width:'100%', padding:'10px 20px', background: tab===item.id ? COLORS.tealBg : 'transparent',
              border:'none', borderLeft:`3px solid ${tab===item.id ? COLORS.teal : 'transparent'}`,
              color: tab===item.id ? COLORS.teal : COLORS.textMuted,
              fontSize:13.5, fontWeight: tab===item.id ? 600 : 400,
              cursor:'pointer', textAlign:'left',
              display:'flex', alignItems:'center', justifyContent:'space-between',
              fontFamily:"'Inter',sans-serif", transition:'all .15s',
            }}>
              <span style={{ display:'flex', alignItems:'center', gap:9 }}>
                <span style={{ fontSize:14, width:18, textAlign:'center' }}>{item.icon}</span>
                {item.label}
              </span>
              {item.badge && (
                <span style={{
                  background:COLORS.red, color:COLORS.white,
                  fontSize:10, fontWeight:700, padding:'1px 6px', borderRadius:10,
                }}>{item.badge}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Report button */}
        <div style={{ padding:'16px 20px', borderTop:`1px solid ${COLORS.border}` }}>
          <button onClick={onReport} style={{
            width:'100%', padding:'10px', borderRadius:9,
            background:COLORS.amberBg, border:`1px solid ${COLORS.amberBorder}`,
            color:COLORS.amber, fontSize:13, fontWeight:600, cursor:'pointer',
            fontFamily:"'Inter',sans-serif", display:'flex', alignItems:'center', justifyContent:'center', gap:7,
          }}>
            <FlagIcon size={13} color={COLORS.amber}/>
            Shikoyat yuborish
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main style={{ flex:1, padding:'32px 36px', overflowY:'auto' }}>
        <div style={{ maxWidth:920 }}>

          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:28 }}>
            <div>
              <h1 style={{ margin:'0 0 5px', fontSize:23, fontWeight:800, color:COLORS.text, letterSpacing:'-0.03em' }}>
                Xush kelibsiz, Aziz! 👋
              </h1>
              <p style={{ margin:0, fontSize:14, color:COLORS.textMuted }}>
                Bu oyda 4 ta ariza berdingiz. Bir taklif kutmoqda.
              </p>
            </div>
            <button style={{
              background:COLORS.teal, border:'none', color:COLORS.white,
              padding:'10px 20px', borderRadius:10, fontSize:13.5, fontWeight:700,
              cursor:'pointer', fontFamily:"'Inter',sans-serif",
            }}>
              + Yangi ariza [New application]
            </button>
          </div>

          {/* KPI chips */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginBottom:28 }}>
            {[
              { label:'Berilgan arizalar [Applications]',   val:4,  sub:'Bu oy',         color:COLORS.teal  },
              { label:'Qabul qilingan [Accepted]',          val:1,  sub:'1 ta taklif',    color:COLORS.green },
              { label:"Ko'rilgan profil [Profile views]",   val:12, sub:"So'nggi 7 kun", color:COLORS.amber },
            ].map((c,i)=>(
              <div key={i} style={{
                background:COLORS.white, borderRadius:13, padding:'22px 24px',
                border:`1px solid ${COLORS.border}`, boxShadow:'0 1px 4px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize:34, fontWeight:900, color:c.color, letterSpacing:'-0.04em', lineHeight:1 }}>{c.val}</div>
                <div style={{ fontSize:13, fontWeight:600, color:COLORS.textMid, marginTop:6 }}>{c.label}</div>
                <div style={{ fontSize:11.5, color:COLORS.textLight, marginTop:3 }}>{c.sub}</div>
              </div>
            ))}
          </div>

          {/* Applications + side column */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 310px', gap:22 }}>

            {/* Applications table */}
            <div style={{ background:COLORS.white, borderRadius:13, border:`1px solid ${COLORS.border}`, overflow:'hidden', boxShadow:'0 1px 4px rgba(0,0,0,0.04)' }}>
              <div style={{ padding:'16px 24px', borderBottom:`1px solid ${COLORS.border}`, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <h2 style={{ margin:0, fontSize:15, fontWeight:700, color:COLORS.text }}>Arizalarim [My Applications]</h2>
                <span style={{ fontSize:12, color:COLORS.textMuted }}>{APPLIED_JOBS.length} ta</span>
              </div>
              {APPLIED_JOBS.map((j,i)=>(
                <div key={j.id} style={{
                  padding:'16px 24px', display:'flex', justifyContent:'space-between', alignItems:'center',
                  borderBottom: i<APPLIED_JOBS.length-1 ? `1px solid ${COLORS.borderLight}` : 'none',
                  transition:'background .12s',
                }}
                onMouseEnter={e=>e.currentTarget.style.background=COLORS.bgAlt}
                onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                  <div>
                    <div style={{ fontSize:14, fontWeight:600, color:COLORS.text }}>{j.title}</div>
                    <div style={{ fontSize:12, color:COLORS.textMuted, marginTop:2 }}>{j.company} · {j.date}</div>
                  </div>
                  <StatusChip status={j.status}/>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div style={{ display:'flex', flexDirection:'column', gap:18 }}>

              {/* Reward card */}
              <div style={{
                background:`linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealDark} 100%)`,
                borderRadius:13, padding:'22px 24px', color:COLORS.white,
              }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:18 }}>
                  <div>
                    <div style={{ fontSize:11.5, opacity:.7, marginBottom:5, textTransform:'uppercase', letterSpacing:'0.05em' }}>
                      Mukofot ballari [Reward points]
                    </div>
                    <div style={{ fontSize:38, fontWeight:900, letterSpacing:'-0.04em', lineHeight:1 }}>1,240</div>
                  </div>
                  <StarIcon size={28} color={COLORS.amberLight}/>
                </div>
                <div style={{ marginBottom:10 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:7 }}>
                    <span style={{ fontSize:11, opacity:.7 }}>Keyingi daraja: 2,000 ball</span>
                    <span style={{ fontSize:11, fontWeight:700 }}>62%</span>
                  </div>
                  <div style={{ height:5, background:'rgba(255,255,255,0.2)', borderRadius:5 }}>
                    <div style={{ height:'100%', width:'62%', background:COLORS.amberLight, borderRadius:5 }}/>
                  </div>
                </div>
                <div style={{ fontSize:11.5, opacity:.7 }}>
                  🏆 Daraja: Ishonchli mutaxassis [Trusted specialist]
                </div>
              </div>

              {/* Activity feed */}
              <div style={{ background:COLORS.white, borderRadius:13, border:`1px solid ${COLORS.border}`, overflow:'hidden', boxShadow:'0 1px 4px rgba(0,0,0,0.04)' }}>
                <div style={{ padding:'14px 20px', borderBottom:`1px solid ${COLORS.border}` }}>
                  <h2 style={{ margin:0, fontSize:14, fontWeight:700, color:COLORS.text }}>
                    So'nggi faoliyat [Recent activity]
                  </h2>
                </div>
                {ACTIVITY.map((a,i)=>(
                  <div key={i} style={{
                    padding:'12px 20px', display:'flex', gap:12, alignItems:'flex-start',
                    borderBottom: i<ACTIVITY.length-1 ? `1px solid ${COLORS.borderLight}` : 'none',
                  }}>
                    <span style={{ fontSize:16, flexShrink:0, marginTop:1 }}>{a.icon}</span>
                    <div>
                      <p style={{ margin:0, fontSize:12.5, color:COLORS.text, lineHeight:1.55 }}>{a.text}</p>
                      <p style={{ margin:'3px 0 0', fontSize:11, color:COLORS.textLight }}>{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Object.assign(window, { DashboardPage });
