// CompanyPanel.jsx — Recruiter dashboard with sub-sections

const COMPANY_JOBS = [
  { id:1, title:"Senior Frontend Developer", status:"open", posted:"15 apr", applicants:47, risk:12 },
  { id:2, title:"UX Designer", status:"open", posted:"18 apr", applicants:23, risk:0 },
  { id:3, title:"DevOps Engineer", status:"closed", posted:"1 apr", applicants:89, risk:3 },
  { id:4, title:"Marketing Intern", status:"open", posted:"22 apr", applicants:15, risk:0 },
];

const COMPANY_APPLICANTS = [
  { id:1, name:"Aziz Jo'rayev", job:"Senior Frontend Developer", status:"reviewing", match:92, avatar:"A" },
  { id:2, name:"Bobur Karimov", job:"Senior Frontend Developer", status:"interview", match:87, avatar:"B" },
  { id:3, name:"Nilufar Rashidova", job:"UX Designer", status:"new", match:78, avatar:"N" },
  { id:4, name:"Kamola Yusupova", job:"Marketing Intern", status:"hired", match:95, avatar:"K" },
  { id:5, name:"Sardor Mirzayev", job:"DevOps Engineer", status:"rejected", match:45, avatar:"S" },
];

const COMPANY_ACTIVITY = [
  { text:"Bobur Karimovga intervyu taklifi yuborildi", time:"2 soat oldin" },
  { text:"Kamola Yusupova ishga qabul qilindi", time:"1 kun oldin" },
  { text:"Yangi ariza: Aziz Jo'rayev — Frontend Developer", time:"2 kun oldin" },
  { text:"DevOps Engineer vakansiyasi yopildi", time:"3 kun oldin" },
];

const SALARY_DATA = [
  { role:"Frontend Developer", posted:"18,000,000", benchmark:"20,000,000", flag:true },
  { role:"UX Designer", posted:"14,000,000", benchmark:"15,000,000", flag:false },
  { role:"DevOps Engineer", posted:"22,000,000", benchmark:"21,000,000", flag:false },
  { role:"Marketing Intern", posted:"5,000,000", benchmark:"6,000,000", flag:true },
];

const TEAM_MEMBERS = [
  { name:"Jasur Tursunov", role:"Admin", email:"jasur@uzcard.uz" },
  { name:"Madina Aliyeva", role:"Recruiter", email:"madina@uzcard.uz" },
  { name:"Otabek Rahimov", role:"Viewer", email:"otabek@uzcard.uz" },
];

function CompanyPanelPage() {
  const [section, setSection] = React.useState('dashboard');
  const [selectedCandidate, setSelectedCandidate] = React.useState(null);

  const sideItems = [
    { id:'dashboard', icon:'\u229e', label:'Dashboard' },
    { id:'postings', icon:'\ud83d\udcdd', label:"Vakansiyalar [Job postings]" },
    { id:'applicants', icon:'\ud83d\udc65', label:'Arizalar [Applications]' },
    { id:'salaries', icon:'\ud83d\udcb0', label:'Maosh tahlili [Salaries]' },
    { id:'team', icon:'\ud83d\udc68\u200d\ud83d\udcbb', label:'Jamoa [Team]' },
    { id:'billing', icon:'\ud83d\udcb3', label:'Tarif [Billing & Plan]' },
  ];

  return (
    <div style={{ display:'flex', minHeight:'calc(100vh - 62px)', background:COLORS.bg, fontFamily:"'Inter',sans-serif" }}>

      {/* Sidebar */}
      <aside style={{ width:256, flexShrink:0, background:COLORS.white, borderRight:`1px solid ${COLORS.border}`, display:'flex', flexDirection:'column' }}>
        <div style={{ padding:'22px 20px', borderBottom:`1px solid ${COLORS.border}` }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:12 }}>
            <div style={{
              width:44, height:44, borderRadius:10, background:COLORS.tealBg,
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:18, fontWeight:800, color:COLORS.teal,
            }}>U</div>
            <div>
              <div style={{ fontSize:14, fontWeight:700, color:COLORS.text }}>Uzcard MCHJ</div>
              <div style={{ fontSize:12, color:COLORS.textMuted }}>IT / Fintech</div>
            </div>
          </div>
          <div style={{
            background:COLORS.tealBg, borderRadius:8, padding:'8px 12px',
            display:'flex', alignItems:'center', justifyContent:'space-between',
          }}>
            <span style={{ fontSize:12, fontWeight:600, color:COLORS.teal }}>Plus — 50 e'lon/oy</span>
            <span style={{ fontSize:11, color:COLORS.teal, fontWeight:500, cursor:'pointer' }}>Upgrade →</span>
          </div>
        </div>

        <nav style={{ flex:1, padding:'8px 0' }}>
          {sideItems.map(item=>(
            <button key={item.id} onClick={()=>{setSection(item.id);setSelectedCandidate(null);}} style={{
              width:'100%', padding:'11px 20px', background: section===item.id ? COLORS.tealBg : 'transparent',
              border:'none', borderLeft:`3px solid ${section===item.id ? COLORS.teal : 'transparent'}`,
              color: section===item.id ? COLORS.teal : COLORS.textMuted,
              fontSize:13.5, fontWeight: section===item.id ? 600 : 400,
              cursor:'pointer', textAlign:'left', display:'flex', alignItems:'center', gap:10,
              fontFamily:"'Inter',sans-serif", transition:'all .12s',
            }}>
              <span style={{ fontSize:14 }}>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main style={{ flex:1, padding:'28px 36px', overflowY:'auto' }}>
        <div style={{ maxWidth:960 }}>

          {/* ── Dashboard ── */}
          {section === 'dashboard' && (
            <>
              <h1 style={{ margin:'0 0 22px', fontSize:22, fontWeight:800, color:COLORS.text }}>
                Kompaniya paneli <span style={{ color:COLORS.textLight, fontWeight:400, fontSize:15 }}>[Company Dashboard]</span>
              </h1>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginBottom:24 }}>
                {[
                  { label:"Ochiq vakansiyalar", val:3, color:COLORS.teal },
                  { label:"Arizalar (bu oy)", val:85, color:COLORS.amber },
                  { label:"Intervyular", val:4, color:COLORS.green },
                  { label:"Ishga olindi", val:1, color:'#8b5cf6' },
                ].map((k,i)=>(
                  <div key={i} style={{ background:COLORS.white, borderRadius:12, padding:'20px 22px', border:`1px solid ${COLORS.border}` }}>
                    <div style={{ fontSize:32, fontWeight:900, color:k.color, letterSpacing:'-0.04em', lineHeight:1 }}>{k.val}</div>
                    <div style={{ fontSize:13, color:COLORS.textMid, fontWeight:500, marginTop:6 }}>{k.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 320px', gap:20 }}>
                {/* Recent jobs */}
                <div style={{ background:COLORS.white, borderRadius:12, border:`1px solid ${COLORS.border}`, overflow:'hidden' }}>
                  <div style={{ padding:'14px 20px', borderBottom:`1px solid ${COLORS.border}` }}>
                    <h3 style={{ margin:0, fontSize:14, fontWeight:700 }}>Vakansiyalar</h3>
                  </div>
                  {COMPANY_JOBS.slice(0,3).map((j,i)=>(
                    <div key={j.id} style={{
                      padding:'12px 20px', display:'flex', justifyContent:'space-between', alignItems:'center',
                      borderBottom: i<2 ? `1px solid ${COLORS.borderLight}` : 'none',
                    }}>
                      <div>
                        <div style={{ fontSize:14, fontWeight:600, color:COLORS.text }}>{j.title}</div>
                        <div style={{ fontSize:12, color:COLORS.textMuted }}>{j.applicants} ta ariza</div>
                      </div>
                      <span style={{
                        fontSize:11, fontWeight:600, padding:'3px 10px', borderRadius:6,
                        background: j.status==='open' ? COLORS.greenBg : COLORS.bgAlt,
                        color: j.status==='open' ? COLORS.green : COLORS.textMuted,
                      }}>{j.status==='open' ? 'Ochiq' : 'Yopildi'}</span>
                    </div>
                  ))}
                </div>
                {/* Activity */}
                <div style={{ background:COLORS.white, borderRadius:12, border:`1px solid ${COLORS.border}`, overflow:'hidden' }}>
                  <div style={{ padding:'14px 20px', borderBottom:`1px solid ${COLORS.border}` }}>
                    <h3 style={{ margin:0, fontSize:14, fontWeight:700 }}>Faoliyat [Activity]</h3>
                  </div>
                  {COMPANY_ACTIVITY.map((a,i)=>(
                    <div key={i} style={{ padding:'11px 20px', borderBottom: i<COMPANY_ACTIVITY.length-1 ? `1px solid ${COLORS.borderLight}` : 'none' }}>
                      <div style={{ fontSize:13, color:COLORS.text, lineHeight:1.5 }}>{a.text}</div>
                      <div style={{ fontSize:11, color:COLORS.textLight, marginTop:2 }}>{a.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ── Job Postings ── */}
          {section === 'postings' && (
            <>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:22 }}>
                <h1 style={{ margin:0, fontSize:22, fontWeight:800, color:COLORS.text }}>Vakansiyalar</h1>
                <button style={{
                  background:COLORS.teal, border:'none', color:'#fff', padding:'10px 20px',
                  borderRadius:10, fontSize:13, fontWeight:700, cursor:'pointer', fontFamily:"'Inter',sans-serif",
                }}>+ Yangi vakansiya [Create job]</button>
              </div>
              <div style={{ background:COLORS.white, borderRadius:12, border:`1px solid ${COLORS.border}`, overflow:'hidden' }}>
                <div style={{
                  display:'grid', gridTemplateColumns:'2fr .8fr .8fr .8fr .8fr 120px',
                  padding:'10px 20px', borderBottom:`1px solid ${COLORS.border}`,
                  fontSize:11, fontWeight:600, color:COLORS.textLight, textTransform:'uppercase', letterSpacing:'.04em',
                }}>
                  <span>Lavozim</span><span>Holat</span><span>Sana</span><span>Arizalar</span><span>AI Risk</span><span>Amallar</span>
                </div>
                {COMPANY_JOBS.map((j,i)=>(
                  <div key={j.id} style={{
                    display:'grid', gridTemplateColumns:'2fr .8fr .8fr .8fr .8fr 120px',
                    padding:'13px 20px', alignItems:'center',
                    borderBottom: i<COMPANY_JOBS.length-1 ? `1px solid ${COLORS.borderLight}` : 'none',
                  }}>
                    <span style={{ fontSize:14, fontWeight:600, color:COLORS.text }}>{j.title}</span>
                    <span style={{
                      fontSize:11, fontWeight:600, padding:'3px 9px', borderRadius:6, justifySelf:'start',
                      background: j.status==='open' ? COLORS.greenBg : COLORS.bgAlt,
                      color: j.status==='open' ? COLORS.green : COLORS.textMuted,
                    }}>{j.status==='open' ? 'Ochiq' : 'Yopiq'}</span>
                    <span style={{ fontSize:12, color:COLORS.textMuted }}>{j.posted}</span>
                    <span style={{ fontSize:13, fontWeight:700, color:COLORS.textMid }}>{j.applicants}</span>
                    <span style={{
                      fontSize:12, fontWeight:600,
                      color: j.risk > 5 ? COLORS.red : COLORS.green,
                    }}>{j.risk > 0 ? `${j.risk} ta` : '—'}</span>
                    <div style={{ display:'flex', gap:6 }}>
                      <button style={{ background:COLORS.bgAlt, border:'none', padding:'5px 10px', borderRadius:6, fontSize:11, cursor:'pointer', fontFamily:"'Inter',sans-serif", color:COLORS.textMid }}>✏️</button>
                      <button style={{ background:COLORS.bgAlt, border:'none', padding:'5px 10px', borderRadius:6, fontSize:11, cursor:'pointer', fontFamily:"'Inter',sans-serif", color:COLORS.textMid }}>{j.status==='open' ? '⏸' : '▶'}</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ── Applications ── */}
          {section === 'applicants' && (
            <div style={{ display:'flex', gap:20 }}>
              <div style={{ flex:1 }}>
                <h1 style={{ margin:'0 0 22px', fontSize:22, fontWeight:800, color:COLORS.text }}>Arizalar</h1>
                <div style={{ background:COLORS.white, borderRadius:12, border:`1px solid ${COLORS.border}`, overflow:'hidden' }}>
                  {COMPANY_APPLICANTS.map((a,i)=>{
                    const sts = { new:{l:'Yangi',c:COLORS.teal,b:COLORS.tealBg}, reviewing:{l:"Ko'rilmoqda",c:COLORS.amber,b:COLORS.amberBg},
                      interview:{l:'Intervyu',c:COLORS.green,b:COLORS.greenBg}, hired:{l:'Qabul',c:COLORS.green,b:COLORS.greenBg},
                      rejected:{l:'Rad',c:COLORS.red,b:COLORS.redBg} }[a.status];
                    return (
                      <div key={a.id} onClick={()=>setSelectedCandidate(a)} style={{
                        padding:'14px 20px', display:'flex', alignItems:'center', gap:14, cursor:'pointer',
                        borderBottom: i<COMPANY_APPLICANTS.length-1 ? `1px solid ${COLORS.borderLight}` : 'none',
                        background: selectedCandidate?.id===a.id ? COLORS.tealBg : 'transparent',
                        transition:'background .1s',
                      }}>
                        <div style={{
                          width:34, height:34, borderRadius:'50%', background:COLORS.tealBg,
                          display:'flex', alignItems:'center', justifyContent:'center',
                          fontSize:13, fontWeight:700, color:COLORS.teal, flexShrink:0,
                        }}>{a.avatar}</div>
                        <div style={{ flex:1, minWidth:0 }}>
                          <div style={{ fontSize:14, fontWeight:600, color:COLORS.text }}>{a.name}</div>
                          <div style={{ fontSize:12, color:COLORS.textMuted }}>{a.job}</div>
                        </div>
                        <div style={{ fontSize:13, fontWeight:700, color:COLORS.teal }}>{a.match}%</div>
                        <span style={{
                          fontSize:11, fontWeight:600, padding:'3px 9px', borderRadius:6,
                          background:sts.b, color:sts.c,
                        }}>{sts.l}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Candidate side panel */}
              {selectedCandidate && (
                <div style={{
                  width:340, background:COLORS.white, borderRadius:12,
                  border:`1px solid ${COLORS.border}`, padding:'22px 24px', alignSelf:'flex-start',
                  position:'sticky', top:94,
                }}>
                  <div style={{ textAlign:'center', marginBottom:18 }}>
                    <div style={{
                      width:56, height:56, borderRadius:'50%', background:COLORS.tealBg,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontSize:20, fontWeight:800, color:COLORS.teal, margin:'0 auto 10px',
                    }}>{selectedCandidate.avatar}</div>
                    <div style={{ fontSize:16, fontWeight:700, color:COLORS.text }}>{selectedCandidate.name}</div>
                    <div style={{ fontSize:13, color:COLORS.textMuted }}>{selectedCandidate.job}</div>
                    <div style={{
                      display:'inline-block', marginTop:8, background:COLORS.tealBg, color:COLORS.teal,
                      padding:'4px 14px', borderRadius:20, fontSize:13, fontWeight:700,
                    }}>Moslik: {selectedCandidate.match}%</div>
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                    <button style={{
                      width:'100%', padding:'10px', borderRadius:9, border:'none',
                      background:COLORS.green, color:'#fff', fontSize:13, fontWeight:600,
                      cursor:'pointer', fontFamily:"'Inter',sans-serif",
                    }}>Intervyu taklifi</button>
                    <button style={{
                      width:'100%', padding:'10px', borderRadius:9,
                      border:`1.5px solid ${COLORS.border}`, background:'transparent',
                      color:COLORS.textMid, fontSize:13, fontWeight:500,
                      cursor:'pointer', fontFamily:"'Inter',sans-serif",
                    }}>Rad etish</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Salaries ── */}
          {section === 'salaries' && (
            <>
              <h1 style={{ margin:'0 0 22px', fontSize:22, fontWeight:800, color:COLORS.text }}>Maosh tahlili</h1>
              {/* Bar chart */}
              <div style={{ background:COLORS.white, borderRadius:12, border:`1px solid ${COLORS.border}`, padding:'24px', marginBottom:20 }}>
                <h3 style={{ margin:'0 0 18px', fontSize:14, fontWeight:700 }}>Sohaviy taqqoslash [Industry benchmark]</h3>
                <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  {SALARY_DATA.map(s=>{
                    const pVal = parseInt(s.posted.replace(/,/g,''));
                    const bVal = parseInt(s.benchmark.replace(/,/g,''));
                    const max = Math.max(pVal, bVal);
                    return (
                      <div key={s.role}>
                        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
                          <span style={{ fontSize:13, fontWeight:600, color:COLORS.text }}>{s.role}</span>
                          {s.flag && <span style={{ fontSize:11, color:COLORS.red, fontWeight:600 }}>⚠ Past maosh</span>}
                        </div>
                        <div style={{ display:'flex', gap:6, alignItems:'center' }}>
                          <div style={{ flex:1 }}>
                            <div style={{ height:8, background:COLORS.teal, borderRadius:4, width:`${pVal/max*100}%`, marginBottom:3 }}/>
                            <div style={{ height:8, background:COLORS.bgAlt2, borderRadius:4, width:`${bVal/max*100}%` }}/>
                          </div>
                          <div style={{ fontSize:11, color:COLORS.textMuted, width:80, textAlign:'right' }}>
                            <div style={{ color:COLORS.teal, fontWeight:600 }}>{s.posted}</div>
                            <div>{s.benchmark}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div style={{ display:'flex', gap:16, marginTop:14, fontSize:11, color:COLORS.textMuted }}>
                  <span style={{ display:'flex', alignItems:'center', gap:4 }}><div style={{ width:10, height:10, borderRadius:2, background:COLORS.teal }}/>Sizning maosh</span>
                  <span style={{ display:'flex', alignItems:'center', gap:4 }}><div style={{ width:10, height:10, borderRadius:2, background:COLORS.bgAlt2 }}/>Sohaviy o'rtacha</span>
                </div>
              </div>
            </>
          )}

          {/* ── Team ── */}
          {section === 'team' && (
            <>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:22 }}>
                <h1 style={{ margin:0, fontSize:22, fontWeight:800, color:COLORS.text }}>Jamoa</h1>
                <button style={{
                  background:COLORS.teal, border:'none', color:'#fff', padding:'10px 20px',
                  borderRadius:10, fontSize:13, fontWeight:700, cursor:'pointer', fontFamily:"'Inter',sans-serif",
                }}>+ Qo'shish [Add member]</button>
              </div>
              <div style={{ background:COLORS.white, borderRadius:12, border:`1px solid ${COLORS.border}`, overflow:'hidden' }}>
                {TEAM_MEMBERS.map((m,i)=>(
                  <div key={i} style={{
                    padding:'14px 22px', display:'flex', justifyContent:'space-between', alignItems:'center',
                    borderBottom: i<TEAM_MEMBERS.length-1 ? `1px solid ${COLORS.borderLight}` : 'none',
                  }}>
                    <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                      <div style={{
                        width:36, height:36, borderRadius:'50%', background:COLORS.tealBg,
                        display:'flex', alignItems:'center', justifyContent:'center',
                        fontSize:13, fontWeight:700, color:COLORS.teal,
                      }}>{m.name[0]}</div>
                      <div>
                        <div style={{ fontSize:14, fontWeight:600, color:COLORS.text }}>{m.name}</div>
                        <div style={{ fontSize:12, color:COLORS.textMuted }}>{m.email}</div>
                      </div>
                    </div>
                    <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                      <span style={{
                        fontSize:11, fontWeight:600, padding:'3px 10px', borderRadius:6,
                        background: m.role==='Admin' ? COLORS.tealBg : COLORS.bgAlt,
                        color: m.role==='Admin' ? COLORS.teal : COLORS.textMuted,
                      }}>{m.role}</span>
                      <button style={{ background:'transparent', border:'none', fontSize:14, cursor:'pointer', color:COLORS.textLight }}>⋯</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ── Billing ── */}
          {section === 'billing' && (
            <>
              <h1 style={{ margin:'0 0 22px', fontSize:22, fontWeight:800, color:COLORS.text }}>Tarif va to'lov</h1>
              <div style={{
                background:`linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealDark} 100%)`,
                borderRadius:14, padding:'28px 32px', color:'#fff', marginBottom:22,
              }}>
                <div style={{ fontSize:12, opacity:.7, textTransform:'uppercase', letterSpacing:'.05em', marginBottom:6 }}>Joriy tarif</div>
                <div style={{ fontSize:28, fontWeight:900, marginBottom:4 }}>Plus</div>
                <div style={{ fontSize:14, opacity:.8 }}>50 ta e'lon/oy · Maosh tahlili · Brend profil</div>
                <div style={{ fontSize:22, fontWeight:800, marginTop:14 }}>20,000 so'm<span style={{ fontSize:13, fontWeight:400, opacity:.7 }}>/oy</span></div>
              </div>
              <div style={{ display:'flex', gap:12 }}>
                <button style={{
                  flex:1, padding:'12px', borderRadius:10, border:`1.5px solid ${COLORS.border}`,
                  background:'transparent', color:COLORS.textMid, fontSize:14, fontWeight:500,
                  cursor:'pointer', fontFamily:"'Inter',sans-serif",
                }}>Pro ga o'tish [Upgrade to Pro]</button>
                <button style={{
                  padding:'12px 24px', borderRadius:10, border:`1.5px solid ${COLORS.border}`,
                  background:'transparent', color:COLORS.textMuted, fontSize:14,
                  cursor:'pointer', fontFamily:"'Inter',sans-serif",
                }}>To'lov tarixi</button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

Object.assign(window, { CompanyPanelPage });
