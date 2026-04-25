// Applications.jsx — Enhanced My Applications page with expandable rows

const APP_DATA = [
  { id:1, company:"Uzcard MCHJ", logo:"U", title:"Senior Frontend Developer", salary:"15–25M UZS", date:"22 aprel 2026",
    status:"interview", desc:"React/TypeScript bo'yicha 3+ yillik tajribaga ega dasturchi.", message:"5 yillik React tajribam bor...",
    interview:{ date:"28 aprel, 10:00", type:"Online (Zoom)", contact:"hr@uzcard.uz" } },
  { id:2, company:"DIM Media Group", logo:"D", title:"Marketing Manager", salary:"10–18M UZS", date:"20 aprel 2026",
    status:"accepted", desc:"Raqamli marketing strategiyasi ishlab chiqish.", message:"Marketing sohasida 3 yil ishlaganman...",
    contract:{ salary:"16,000,000 UZS", start:"1 may 2026" } },
  { id:3, company:"Angren Kimyo Zavodi", logo:"A", title:"Bosh Buxgalter", salary:"8–12M UZS", date:"18 aprel 2026",
    status:"rejected", desc:"Moliyaviy hisobot va audit.", message:"IFRS sertifikatim bor...",
    rejection:"Malaka mos kelmadi. ACCA sertifikati talab qilinadi. Qayta ariza 3 oydan keyin mumkin." },
  { id:4, company:"National Bank", logo:"N", title:"Risk Analyst", salary:"20–30M UZS", date:"15 aprel 2026",
    status:"reviewing", desc:"Moliyaviy risklar tahlili.", message:"Moliya sohasida 4 yillik tajriba..." },
  { id:5, company:"Farg'ona Farmatsevtika", logo:"F", title:"QA Engineer", salary:"12–17M UZS", date:"10 aprel 2026",
    status:"started", desc:"GMP/ISO standartlari asosida nazorat.", message:"ISO 9001 auditor sertifikatim bor...",
    contract:{ salary:"15,000,000 UZS", start:"14 aprel 2026" } },
];

const STATUS_MAP = {
  reviewing: { label:"Ko'rib chiqilmoqda", en:"Under review", color:COLORS.textMuted, bg:COLORS.bgAlt },
  interview: { label:"Interview taklifi",  en:"Interview invited", color:COLORS.green, bg:COLORS.greenBg },
  accepted:  { label:"Qabul qilindi",      en:"Accepted", color:COLORS.green, bg:COLORS.greenBg },
  rejected:  { label:"Rad etildi",         en:"Rejected", color:COLORS.red, bg:COLORS.redBg },
  started:   { label:"Ish boshlandi",      en:"Started", color:COLORS.teal, bg:COLORS.tealBg },
};

function AppStatusChip({ status }) {
  const s = STATUS_MAP[status];
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:4,
      background:s.bg, color:s.color, padding:'4px 12px', borderRadius:20,
      fontSize:12, fontWeight:600,
    }}>
      <span style={{ width:6, height:6, borderRadius:'50%', background:s.color, flexShrink:0 }}/>
      {s.label}
    </span>
  );
}

function InterviewModal({ app, onClose }) {
  const [response, setResponse] = React.useState(null);
  const [msg, setMsg] = React.useState('');
  const [sent, setSent] = React.useState(false);

  return (
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{
      position:'fixed', inset:0, background:'rgba(10,22,40,0.6)', zIndex:2000,
      display:'flex', alignItems:'center', justifyContent:'center',
      backdropFilter:'blur(4px)', fontFamily:"'Inter',sans-serif",
    }}>
      <div style={{
        background:COLORS.white, borderRadius:16, padding:32, width:420, maxWidth:'92vw',
        boxShadow:'0 24px 48px rgba(0,0,0,0.2)', animation:'slideUp .25s ease',
      }}>
        {!sent ? (
          <>
            <h3 style={{ margin:'0 0 6px', fontSize:18, fontWeight:800, color:COLORS.text }}>Intervyu taklifi</h3>
            <p style={{ margin:'0 0 20px', fontSize:13, color:COLORS.textMuted }}>
              {app.company} — {app.title}
            </p>
            <div style={{ background:COLORS.tealBg, borderRadius:10, padding:'14px 18px', marginBottom:20 }}>
              <div style={{ display:'flex', gap:20, fontSize:13 }}>
                <div><span style={{ color:COLORS.textLight }}>Sana:</span> <strong>{app.interview?.date}</strong></div>
                <div><span style={{ color:COLORS.textLight }}>Turi:</span> <strong>{app.interview?.type}</strong></div>
              </div>
            </div>
            <div style={{ display:'flex', gap:10, marginBottom:16 }}>
              {[['accept','Qabul qilish','✓',COLORS.green,COLORS.greenBg],['decline','Rad etish','✕',COLORS.red,COLORS.redBg]].map(([id,l,ic,c,bg])=>(
                <button key={id} onClick={()=>setResponse(id)} style={{
                  flex:1, padding:'11px', borderRadius:10, fontSize:13, fontWeight:600,
                  border:`1.5px solid ${response===id ? c : COLORS.border}`,
                  background: response===id ? bg : 'transparent',
                  color: response===id ? c : COLORS.textMid,
                  cursor:'pointer', fontFamily:"'Inter',sans-serif",
                  display:'flex', alignItems:'center', justifyContent:'center', gap:6,
                }}>{ic} {l}</button>
              ))}
            </div>
            <textarea value={msg} onChange={e=>setMsg(e.target.value)}
              placeholder="Qo'shimcha xabar [Optional message]..."
              rows={3} style={{
                width:'100%', boxSizing:'border-box', border:`1.5px solid ${COLORS.border}`,
                borderRadius:10, padding:'10px 14px', fontSize:13, resize:'none',
                fontFamily:"'Inter',sans-serif", outline:'none', marginBottom:16,
              }}/>
            <button onClick={()=>response&&setSent(true)} style={{
              width:'100%', padding:'12px', borderRadius:10, border:'none',
              background: response ? COLORS.teal : COLORS.bgAlt2,
              color: response ? '#fff' : COLORS.textLight,
              fontSize:14, fontWeight:700, cursor: response ? 'pointer' : 'not-allowed',
              fontFamily:"'Inter',sans-serif",
            }}>Javobni yuborish [Send response]</button>
          </>
        ) : (
          <div style={{ textAlign:'center', padding:'16px 0' }}>
            <div style={{ fontSize:48, marginBottom:14 }}>{response==='accept' ? '🎉' : '📨'}</div>
            <h3 style={{ margin:'0 0 8px', fontSize:18, fontWeight:800, color:COLORS.text }}>
              {response==='accept' ? 'Qabul qilindi!' : 'Javob yuborildi'}
            </h3>
            <p style={{ fontSize:13, color:COLORS.textMuted, marginBottom:20 }}>
              {response==='accept' ? 'Intervyuda omad!' : "Kompaniyaga xabar yuborildi."}
            </p>
            <button onClick={onClose} style={{
              padding:'10px 32px', borderRadius:10, border:'none',
              background:COLORS.teal, color:'#fff', fontSize:14, fontWeight:600,
              cursor:'pointer', fontFamily:"'Inter',sans-serif",
            }}>Yopish</button>
          </div>
        )}
      </div>
    </div>
  );
}

function ApplicationRow({ app, onReport }) {
  const [expanded, setExpanded] = React.useState(false);
  const [interviewModal, setInterviewModal] = React.useState(false);

  return (
    <div style={{
      background:COLORS.white, borderRadius:12, border:`1.5px solid ${COLORS.border}`,
      overflow:'hidden', transition:'all .15s',
      boxShadow: expanded ? '0 4px 16px rgba(15,118,110,0.08)' : 'none',
    }}>
      {/* Main row */}
      <div onClick={()=>setExpanded(e=>!e)} style={{
        padding:'16px 22px', display:'flex', alignItems:'center', gap:16, cursor:'pointer',
        transition:'background .12s',
      }}
      onMouseEnter={e=>e.currentTarget.style.background=COLORS.bgAlt}
      onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
        <div style={{
          width:42, height:42, borderRadius:10, background:COLORS.tealBg,
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:16, fontWeight:800, color:COLORS.teal, flexShrink:0,
        }}>{app.logo}</div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontSize:15, fontWeight:700, color:COLORS.text }}>{app.title}</div>
          <div style={{ fontSize:12, color:COLORS.textMuted, marginTop:2 }}>{app.company} · {app.salary}</div>
        </div>
        <div style={{ fontSize:12, color:COLORS.textLight, flexShrink:0 }}>{app.date}</div>
        <AppStatusChip status={app.status}/>
        <span style={{
          fontSize:14, color:COLORS.textLight, transition:'transform .2s',
          transform: expanded ? 'rotate(180deg)' : 'none',
        }}>▾</span>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div style={{
          borderTop:`1px solid ${COLORS.border}`, padding:'20px 22px',
          background:COLORS.bgAlt, animation:'fadeIn .15s ease',
        }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginBottom:18 }}>
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:COLORS.textLight, textTransform:'uppercase', letterSpacing:'.05em', marginBottom:6 }}>
                Vakansiya tavsifi [Job description]
              </div>
              <p style={{ margin:0, fontSize:13, color:COLORS.textMid, lineHeight:1.65 }}>{app.desc}</p>
            </div>
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:COLORS.textLight, textTransform:'uppercase', letterSpacing:'.05em', marginBottom:6 }}>
                Sizning xabaringiz [Your message]
              </div>
              <p style={{ margin:0, fontSize:13, color:COLORS.textMid, lineHeight:1.65 }}>{app.message}</p>
            </div>
          </div>

          {/* Status-specific content */}
          {app.status === 'interview' && app.interview && (
            <div style={{
              background:COLORS.greenBg, borderRadius:10, padding:'14px 18px', marginBottom:14,
              border:`1px solid ${COLORS.greenLight}`, display:'flex', justifyContent:'space-between', alignItems:'center',
            }}>
              <div>
                <div style={{ fontSize:13, fontWeight:600, color:COLORS.green }}>Intervyu rejalashtirilgan</div>
                <div style={{ fontSize:12, color:COLORS.textMuted, marginTop:3 }}>
                  {app.interview.date} · {app.interview.type} · {app.interview.contact}
                </div>
              </div>
              <button onClick={e=>{e.stopPropagation();setInterviewModal(true);}} style={{
                padding:'8px 18px', borderRadius:8, border:'none',
                background:COLORS.green, color:'#fff', fontSize:13, fontWeight:600,
                cursor:'pointer', fontFamily:"'Inter',sans-serif",
              }}>Javobni berish [Respond]</button>
            </div>
          )}

          {app.status === 'accepted' && app.contract && (
            <div style={{
              background:COLORS.greenBg, borderRadius:10, padding:'14px 18px', marginBottom:14,
              border:`1px solid ${COLORS.greenLight}`,
            }}>
              <div style={{ fontSize:13, fontWeight:600, color:COLORS.green, marginBottom:6 }}>Taklif qabul qilindi!</div>
              <div style={{ display:'flex', gap:24, fontSize:13 }}>
                <div><span style={{ color:COLORS.textLight }}>Maosh:</span> <strong>{app.contract.salary}</strong></div>
                <div><span style={{ color:COLORS.textLight }}>Boshlanish:</span> <strong>{app.contract.start}</strong></div>
              </div>
              <button style={{
                marginTop:12, padding:'8px 18px', borderRadius:8, border:'none',
                background:COLORS.green, color:'#fff', fontSize:13, fontWeight:600,
                cursor:'pointer', fontFamily:"'Inter',sans-serif",
              }}>Maoshni tasdiqlash [Confirm salary]</button>
            </div>
          )}

          {app.status === 'rejected' && (
            <div style={{
              background:COLORS.redBg, borderRadius:10, padding:'14px 18px', marginBottom:14,
              border:`1px solid ${COLORS.redLight}`,
            }}>
              <div style={{ fontSize:13, fontWeight:600, color:COLORS.red, marginBottom:6 }}>Rad etish sababi [Rejection reason]</div>
              <p style={{ margin:'0 0 12px', fontSize:13, color:COLORS.textMid, lineHeight:1.6 }}>{app.rejection}</p>
              <button onClick={e=>{e.stopPropagation();onReport();}} style={{
                padding:'8px 18px', borderRadius:8,
                border:`1.5px solid ${COLORS.amber}`, background:COLORS.amberBg,
                color:COLORS.amber, fontSize:13, fontWeight:600,
                cursor:'pointer', fontFamily:"'Inter',sans-serif",
                display:'flex', alignItems:'center', gap:6,
              }}>
                <FlagIcon size={12} color={COLORS.amber}/> Shikoyat qilish [Appeal]
              </button>
            </div>
          )}

          {app.status === 'started' && app.contract && (
            <div style={{
              background:COLORS.tealBg, borderRadius:10, padding:'14px 18px', marginBottom:14,
              border:`1px solid ${COLORS.tealBorder}`,
            }}>
              <div style={{ fontSize:13, fontWeight:600, color:COLORS.teal, marginBottom:6 }}>Ish boshlangan!</div>
              <div style={{ display:'flex', gap:24, fontSize:13 }}>
                <div><span style={{ color:COLORS.textLight }}>Maosh:</span> <strong>{app.contract.salary}</strong></div>
                <div><span style={{ color:COLORS.textLight }}>Boshlanish sanasi:</span> <strong>{app.contract.start}</strong></div>
              </div>
            </div>
          )}
        </div>
      )}

      {interviewModal && <InterviewModal app={app} onClose={()=>setInterviewModal(false)}/>}
    </div>
  );
}

function ApplicationsPage({ onReport }) {
  const [filter, setFilter] = React.useState('all');
  const filters = [
    { id:'all', label:'Barchasi' },
    { id:'reviewing', label:"Ko'rib chiqilmoqda" },
    { id:'interview', label:'Interview' },
    { id:'accepted', label:'Qabul qilindi' },
    { id:'rejected', label:'Rad etildi' },
    { id:'started', label:'Ish boshlandi' },
  ];
  const list = filter === 'all' ? APP_DATA : APP_DATA.filter(a=>a.status===filter);

  return (
    <div style={{ minHeight:'100vh', background:COLORS.bg, fontFamily:"'Inter',sans-serif" }}>
      <div style={{ maxWidth:920, margin:'0 auto', padding:'32px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
          <div>
            <h1 style={{ margin:'0 0 4px', fontSize:24, fontWeight:800, color:COLORS.text, letterSpacing:'-0.03em' }}>
              Arizalarim <span style={{ color:COLORS.textLight, fontWeight:400, fontSize:16 }}>[My Applications]</span>
            </h1>
            <p style={{ margin:0, fontSize:13, color:COLORS.textMuted }}>{APP_DATA.length} ta ariza · 1 qabul qilindi · 1 intervyu kutmoqda</p>
          </div>
        </div>

        {/* Filter bar */}
        <div style={{ display:'flex', gap:6, marginBottom:22, flexWrap:'wrap' }}>
          {filters.map(f=>(
            <button key={f.id} onClick={()=>setFilter(f.id)} style={{
              padding:'8px 14px', borderRadius:8, fontSize:12.5, fontWeight:500,
              border:`1.5px solid ${filter===f.id ? COLORS.teal : COLORS.border}`,
              background: filter===f.id ? COLORS.tealBg : COLORS.white,
              color: filter===f.id ? COLORS.teal : COLORS.textMuted,
              cursor:'pointer', fontFamily:"'Inter',sans-serif",
            }}>{f.label}</button>
          ))}
        </div>

        {/* Application list */}
        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          {list.map(a=><ApplicationRow key={a.id} app={a} onReport={onReport}/>)}
          {list.length===0 && (
            <div style={{ textAlign:'center', padding:48, color:COLORS.textMuted }}>
              <p style={{ fontSize:15 }}>Bu filtrada ariza topilmadi</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ApplicationsPage });
