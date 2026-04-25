// JobListings.jsx — Job cards, comments, filters

const JOB_DATA = [
  { id:1, company:'Uzcard MCHJ', verified:true,  title:'Senior Frontend Developer', salary:'15,000,000 – 25,000,000 UZS', loc:'Toshkent', type:"To'liq stavka", posted:'2 kun oldin', applicants:47,  risk:'safe',       desc:"React/TypeScript bo'yicha 3+ yillik tajribaga ega dasturchi kerak. Remote-friendly imkoniyat mavjud.", tags:['React','TypeScript','Node.js'] },
  { id:2, company:'Angren Kimyo Zavodi', verified:false, title:'Bosh Buxgalter', salary:'8,000,000 – 12,000,000 UZS', loc:'Angren', type:"To'liq stavka", posted:'1 kun oldin', applicants:23,  risk:'suspicious',  desc:"Moliyaviy hisobot, soliq hisobotlarini yuritish va audit jarayonlarini boshqarish.", tags:['1C','Buxgalteriya','IFRS'] },
  { id:3, company:'DIM Media Group', verified:true, title:'Marketing Manager', salary:'10,000,000 – 18,000,000 UZS', loc:'Toshkent', type:'Masofaviy', posted:'3 kun oldin', applicants:89, risk:'safe', desc:"Raqamli marketing strategiyasi ishlab chiqish, jamoa boshqaruvi va brend rivojlantirish.", tags:['Digital Marketing','SMM','Analytics'] },
  { id:4, company:'Oltin Yort Qurilish', verified:false, title:"Qurilish Ustasi", salary:'6,000,000 – 9,000,000 UZS', loc:'Samarqand', type:"To'liq stavka", posted:'Bugun', applicants:12, risk:'flagged', desc:"Turar-joy kompleksi qurilishi uchun tajribali usta. Kunlik ish grafigi talab qilinadi.", tags:['Qurilish','Beton','Liftchi'] },
  { id:5, company:'National Bank of Uzbekistan', verified:true, title:'Risk Analyst', salary:'20,000,000 – 30,000,000 UZS', loc:'Toshkent', type:"To'liq stavka", posted:'1 hafta oldin', applicants:156, risk:'safe', desc:"Moliyaviy risklar tahlili, stresstest modellari va nazorat hisobotlari.", tags:['Finance','SQL','Risk Mgmt','Excel'] },
  { id:6, company:"Farg'ona Farmatsevtika", verified:true, title:'QA Engineer', salary:'12,000,000 – 17,000,000 UZS', loc:"Farg'ona", type:"To'liq stavka", posted:'5 kun oldin', applicants:31, risk:'suspicious', desc:"Dori vositalari sifatini GMP/ISO standartlari asosida nazorat qilish tizimi.", tags:['QA','ISO 9001','GMP','Laboratoriya'] },
];

const PRESET_COMMENTS = {
  1: [{ a:'Foydalanuvchi_7743', t:'3 soat oldin', txt:"Bu kompaniya bilan muloqot qildim — juda professional. Intervyu jarayoni ham aniq. Tavsiya qilaman!" }],
  4: [{ a:'Qurilishchi_M22', t:'5 soat oldin', txt:"Bu kompaniya avval ham shunday e'lon bergan, lekin asl maosh kamroq bo'ladi. Ehtiyot bo'ling!" }],
};

function CommentSection({ jobId, onReport }) {
  const [open, setOpen] = React.useState(false);
  const [comments, setComments] = React.useState(PRESET_COMMENTS[jobId] || []);
  const [draft, setDraft] = React.useState('');

  const submit = () => {
    if (!draft.trim()) return;
    setComments(c=>[...c, { a:'Siz [You]', t:'Hozir', txt:draft.trim() }]);
    setDraft('');
  };

  return (
    <div style={{ borderTop:`1px solid ${COLORS.border}`, marginTop:18, paddingTop:16 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <button onClick={()=>setOpen(o=>!o)} style={{
          background:'transparent', border:'none', padding:0, cursor:'pointer',
          color:COLORS.textMuted, fontSize:13, display:'flex', alignItems:'center', gap:6,
          fontFamily:"'Inter',sans-serif",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 2h10a1 1 0 011 1v6a1 1 0 01-1 1H4l-3 2.5V3a1 1 0 011-1z"
              stroke={COLORS.textMuted} strokeWidth="1.2" fill={COLORS.textMuted} fillOpacity="0.08"/>
          </svg>
          {open ? 'Yopish' : `Izohlar [Comments] (${comments.length})`}
        </button>
        <button onClick={onReport} style={{
          background:'transparent', border:'none', padding:'4px 10px', borderRadius:6,
          color:COLORS.textLight, fontSize:12, cursor:'pointer', display:'flex', alignItems:'center', gap:5,
          fontFamily:"'Inter',sans-serif", transition:'all .15s',
        }}
        onMouseEnter={e=>{e.currentTarget.style.color=COLORS.amber;e.currentTarget.style.background=COLORS.amberBg;}}
        onMouseLeave={e=>{e.currentTarget.style.color=COLORS.textLight;e.currentTarget.style.background='transparent';}}>
          <FlagIcon size={12} color="inherit"/>
          Shubhali deb hisoblaysizmi? [Think this is suspicious?]
        </button>
      </div>

      {open && (
        <div style={{ marginTop:14 }}>
          {comments.length === 0 && (
            <p style={{ fontSize:13, color:COLORS.textLight, marginBottom:12 }}>Hali izoh yo'q. Birinchi bo'ling!</p>
          )}
          {comments.map((c,i)=>(
            <div key={i} style={{ background:COLORS.bgAlt, borderRadius:9, padding:'10px 14px', marginBottom:8 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:5 }}>
                <div style={{
                  width:26, height:26, borderRadius:'50%', background:COLORS.tealBg,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:11, fontWeight:700, color:COLORS.teal, flexShrink:0,
                }}>{c.a[0]}</div>
                <span style={{ fontSize:12, fontWeight:600, color:COLORS.textMid }}>{c.a}</span>
                <span style={{ fontSize:11, color:COLORS.textLight }}>{c.t}</span>
              </div>
              <p style={{ margin:'0 0 0 34px', fontSize:13, color:COLORS.text, lineHeight:1.6 }}>{c.txt}</p>
            </div>
          ))}
          <div style={{ display:'flex', gap:8, marginTop:10 }}>
            <input value={draft} onChange={e=>setDraft(e.target.value)}
              onKeyDown={e=>e.key==='Enter'&&submit()}
              placeholder="Izoh qoldirish [Leave a comment]..."
              style={{
                flex:1, border:`1.5px solid ${COLORS.border}`, borderRadius:8,
                padding:'9px 12px', fontSize:13, fontFamily:"'Inter',sans-serif",
                outline:'none', color:COLORS.text,
              }}/>
            <button onClick={submit} style={{
              background:COLORS.teal, border:'none', color:COLORS.white,
              padding:'9px 18px', borderRadius:8, fontSize:13, fontWeight:600,
              cursor:'pointer', fontFamily:"'Inter',sans-serif",
            }}>Yuborish</button>
          </div>
        </div>
      )}
    </div>
  );
}

function JobCard({ job, onReport }) {
  const [saved, setSaved] = React.useState(false);
  const [applied, setApplied] = React.useState(false);

  return (
    <div style={{
      background:COLORS.white, borderRadius:14, border:`1.5px solid ${COLORS.border}`,
      padding:26, boxShadow:'0 1px 6px rgba(15,118,110,0.05)', transition:'all .2s',
    }}
    onMouseEnter={e=>{e.currentTarget.style.borderColor=COLORS.tealBorder;e.currentTarget.style.boxShadow='0 6px 20px rgba(15,118,110,0.1)';}}
    onMouseLeave={e=>{e.currentTarget.style.borderColor=COLORS.border;e.currentTarget.style.boxShadow='0 1px 6px rgba(15,118,110,0.05)';}}>

      {/* Header row */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:14 }}>
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:7, flexWrap:'wrap' }}>
            <div style={{
              width:38, height:38, borderRadius:9, background:COLORS.tealBg,
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:15, fontWeight:800, color:COLORS.teal, flexShrink:0,
            }}>{job.company[0]}</div>
            <span style={{ fontSize:14, fontWeight:600, color:COLORS.textMid }}>{job.company}</span>
            {job.verified && <VerifiedBadge/>}
          </div>
          <h3 style={{ margin:0, fontSize:19, fontWeight:800, color:COLORS.text, letterSpacing:'-0.02em' }}>{job.title}</h3>
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:8, flexShrink:0, marginLeft:16 }}>
          <RiskBadge level={job.risk}/>
          <button onClick={()=>setSaved(s=>!s)} style={{
            background: saved ? COLORS.amberBg : 'transparent',
            border:`1px solid ${saved ? COLORS.amber : COLORS.border}`,
            color: saved ? COLORS.amber : COLORS.textMuted,
            borderRadius:8, padding:'4px 10px', fontSize:12, cursor:'pointer',
            fontFamily:"'Inter',sans-serif", transition:'all .15s',
          }}>
            {saved ? '★ Saqlangan' : '☆ Saqlash'}
          </button>
        </div>
      </div>

      {/* Meta */}
      <div style={{ display:'flex', gap:16, flexWrap:'wrap', marginBottom:12, alignItems:'center' }}>
        <span style={{ fontSize:12.5, color:COLORS.textMuted, display:'flex', alignItems:'center', gap:4 }}>
          <MapPinIcon/> {job.loc}
        </span>
        <span style={{ fontSize:12.5, color:COLORS.textMuted, display:'flex', alignItems:'center', gap:4 }}>
          <ClockIcon/> {job.posted}
        </span>
        <span style={{ fontSize:12.5, color:COLORS.textMuted, display:'flex', alignItems:'center', gap:4 }}>
          <UsersIcon/> {job.applicants} ta ariza
        </span>
        <span style={{
          fontSize:11.5, background:COLORS.bgAlt, color:COLORS.textMid,
          padding:'2px 9px', borderRadius:6, fontWeight:500,
        }}>{job.type}</span>
      </div>

      {/* Salary */}
      <div style={{ fontSize:16, fontWeight:800, color:COLORS.teal, marginBottom:12, letterSpacing:'-0.02em' }}>
        {job.salary}
      </div>

      {/* Desc */}
      <p style={{ margin:'0 0 14px', fontSize:13.5, color:COLORS.textMuted, lineHeight:1.7 }}>{job.desc}</p>

      {/* Tags */}
      <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:18 }}>
        {job.tags.map(t=>(
          <span key={t} style={{
            background:COLORS.bgAlt, color:COLORS.textMid,
            padding:'3px 10px', borderRadius:7, fontSize:12, fontWeight:500,
          }}>{t}</span>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display:'flex', gap:10, marginBottom:4 }}>
        <button onClick={()=>setApplied(a=>!a)} style={{
          flex:1, padding:'11px 22px', borderRadius:10, fontSize:14, fontWeight:700,
          border:`1.5px solid ${applied ? COLORS.green : COLORS.teal}`,
          background: applied ? COLORS.greenBg : COLORS.teal,
          color: applied ? COLORS.green : COLORS.white,
          cursor:'pointer', fontFamily:"'Inter',sans-serif", transition:'all .15s',
        }}>
          {applied ? '✓ Ariza yuborildi [Applied]' : 'Ariza topshirish [Apply now]'}
        </button>
        <button style={{
          padding:'11px 22px', borderRadius:10,
          background:'transparent', border:`1.5px solid ${COLORS.border}`,
          color:COLORS.textMid, fontSize:14, fontWeight:500,
          cursor:'pointer', fontFamily:"'Inter',sans-serif",
        }}>
          Batafsil [Details]
        </button>
      </div>

      <CommentSection jobId={job.id} onReport={onReport}/>
    </div>
  );
}

function JobListingsPage({ onReport }) {
  const [q, setQ] = React.useState('');
  const [risk, setRisk] = React.useState('all');

  const list = JOB_DATA.filter(j=>{
    const m = j.title.toLowerCase().includes(q.toLowerCase()) || j.company.toLowerCase().includes(q.toLowerCase());
    return m && (risk==='all' || j.risk===risk);
  });

  const riskBtns = [
    { id:'all',        label:'Barchasi' },
    { id:'safe',       label:'\uD83D\uDFE2 Xavfsiz' },
    { id:'suspicious', label:'\uD83D\uDFE1 Shubhali' },
    { id:'flagged',    label:'\uD83D\uDD34 Belgilangan' },
  ];

  return (
    <div style={{ minHeight:'100vh', background:COLORS.bg, fontFamily:"'Inter',sans-serif" }}>
      {/* Search bar */}
      <div style={{ background:COLORS.white, borderBottom:`1px solid ${COLORS.border}`, padding:'24px 32px' }}>
        <div style={{ maxWidth:920, margin:'0 auto' }}>
          <h1 style={{ margin:'0 0 18px', fontSize:24, fontWeight:800, color:COLORS.text, letterSpacing:'-0.03em' }}>
            Vakansiyalar <span style={{ color:COLORS.textLight, fontWeight:400, fontSize:18 }}>[Job Listings]</span>
          </h1>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'center' }}>
            <div style={{
              flex:1, minWidth:260, display:'flex', alignItems:'center', gap:10,
              background:COLORS.bg, border:`1.5px solid ${COLORS.border}`,
              borderRadius:10, padding:'10px 14px',
            }}>
              <SearchIcon/>
              <input value={q} onChange={e=>setQ(e.target.value)}
                placeholder="Ish yoki kompaniya qidirish [Search jobs or companies]..."
                style={{
                  border:'none', background:'transparent', flex:1, fontSize:14,
                  outline:'none', fontFamily:"'Inter',sans-serif", color:COLORS.text,
                }}/>
            </div>
            <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
              {riskBtns.map(r=>(
                <button key={r.id} onClick={()=>setRisk(r.id)} style={{
                  padding:'9px 14px', borderRadius:9, fontSize:12.5, fontWeight:500,
                  border:`1.5px solid ${risk===r.id ? COLORS.teal : COLORS.border}`,
                  background: risk===r.id ? COLORS.tealBg : COLORS.white,
                  color: risk===r.id ? COLORS.teal : COLORS.textMuted,
                  cursor:'pointer', fontFamily:"'Inter',sans-serif", transition:'all .15s',
                }}>{r.label}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:920, margin:'0 auto', padding:'32px 32px 64px' }}>
        <p style={{ fontSize:13, color:COLORS.textMuted, margin:'0 0 22px' }}>
          <strong style={{ color:COLORS.text }}>{list.length}</strong> ta vakansiya topildi [vacancies found]
        </p>
        <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
          {list.map(j=><JobCard key={j.id} job={j} onReport={onReport}/>)}
          {list.length===0 && (
            <div style={{ textAlign:'center', padding:'64px 0', color:COLORS.textMuted }}>
              <div style={{ fontSize:40, marginBottom:12 }}>🔍</div>
              <p style={{ fontSize:15 }}>Hech narsa topilmadi [Nothing found]</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { JobListingsPage });
