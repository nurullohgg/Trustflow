import React from 'react';

export const COLORS = {
  teal: '#0f766e', tealHover: '#0d6b63', tealLight: '#14b8a6',
  tealBg: '#f0fdfa', tealBorder: '#99f6e4', tealDark: '#065f46',
  amber: '#d97706', amberLight: '#fbbf24', amberBg: '#fffbeb', amberBorder: '#fde68a',
  red: '#dc2626', redBg: '#fef2f2', redLight: '#fca5a5',
  green: '#16a34a', greenBg: '#f0fdf4', greenLight: '#86efac',
  bg: '#f8fafc', bgAlt: '#f1f5f9', bgAlt2: '#e2e8f0',
  text: '#0f172a', textMid: '#334155', textMuted: '#64748b', textLight: '#94a3b8',
  border: '#e2e8f0', borderLight: '#f1f5f9',
  white: '#ffffff',
  darkBg: '#0a1628', darkSurface: '#0f172a', darkCard: '#1e293b',
  darkBorder: '#334155', darkText: '#f8fafc', darkMuted: '#94a3b8',
};

export function ShieldIcon({ size = 24, color = COLORS.teal }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 6v6c0 5.25 3.5 10.14 8 11.25C16.5 22.14 20 17.25 20 12V6l-8-4z"
        fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CheckCircleIcon({ size = 16, color = COLORS.green }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.2"/>
      <path d="M5 8l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function AlertIcon({ size = 16, color = COLORS.amber }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 2L14.5 13H1.5L8 2z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M8 6.5v3M8 11v.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function FlagIcon({ size = 16, color = COLORS.red }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 2v12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 2h8l-2 4 2 4H3" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  );
}

export function SearchIcon({ size = 18, color = COLORS.textMuted }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke={color} strokeWidth="1.5"/>
      <path d="M12.5 12.5L16 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function MapPinIcon({ size = 14, color = COLORS.textMuted }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M7 1a3.5 3.5 0 013.5 3.5c0 2.625-3.5 8-3.5 8S3.5 7.125 3.5 4.5A3.5 3.5 0 017 1z"
        fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.2"/>
      <circle cx="7" cy="4.5" r="1.2" fill={color}/>
    </svg>
  );
}

export function ClockIcon({ size = 14, color = COLORS.textMuted }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke={color} strokeWidth="1.2"/>
      <path d="M7 4v3.5l2 1.2" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function UsersIcon({ size = 14, color = COLORS.textMuted }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <circle cx="5.5" cy="4.5" r="2.5" stroke={color} strokeWidth="1.2"/>
      <path d="M1 12c0-2.48 2.02-4.5 4.5-4.5S10 9.52 10 12" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M10.5 7.5c1.38 0 2.5.9 2.5 3" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="11" cy="4" r="1.8" stroke={color} strokeWidth="1.2"/>
    </svg>
  );
}

export function StarIcon({ size = 16, color = COLORS.amber }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
      <path d="M8 1l1.8 4.1 4.4.4-3.2 2.9.95 4.3L8 10.5l-3.95 2.2.95-4.3L1.8 5.5l4.4-.4L8 1z"/>
    </svg>
  );
}

export function ChartLineIcon({ size = 22, color = COLORS.teal }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <path d="M3 16L7.5 10l4 3.5L15 8l4 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 19h16" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    </svg>
  );
}

export function BriefcaseIcon({ size = 22, color = COLORS.teal }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <rect x="2" y="8" width="18" height="12" rx="2" stroke={color} strokeWidth="1.5"/>
      <path d="M7.5 8V6a2 2 0 014 0v2" stroke={color} strokeWidth="1.5"/>
      <path d="M2 13h18" stroke={color} strokeWidth="1.5" opacity="0.5"/>
    </svg>
  );
}

export function HeartIcon({ size = 16, color = COLORS.textMuted, filled = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={filled ? color : 'none'}>
      <path d="M8 14.5c-1.5-1.2-5-3.5-5-6.5C3 5.6 4.6 4 6.5 4c1 0 1.9.5 2.5 1.2.6-.7 1.5-1.2 2.5-1.2 1.9 0 3.5 1.6 3.5 3.5 0 3-3.5 5.3-5 6.5z"
        fill={color} fillOpacity={filled ? 1 : 0.15} stroke={color} strokeWidth={filled ? 0 : 1.2}/>
    </svg>
  );
}

export function FileIcon({ size = 14, color = COLORS.textMuted }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M2 1h7.5v4H10V12H2V1z" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M9.5 1v4h4" stroke={color} strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M4 6h6M4 9h4" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

export function XIcon({ size = 16, color = COLORS.text }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 2l12 12M14 2L2 14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function MicIcon({ size = 16, color = COLORS.textMuted }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 2a2 2 0 012 2v4a2 2 0 11-4 0V4a2 2 0 012-2z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.2"/>
      <path d="M4.5 7.5c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M8 12v2.5M5.5 14.5h5" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function VideoIcon({ size = 16, color = COLORS.textMuted }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="2" y="3" width="10" height="8" rx="1" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.2"/>
      <path d="M13 5.5l2 1.5-2 1.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function GPSIcon({ size = 16, color = COLORS.teal }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="4" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.2"/>
      <circle cx="8" cy="8" r="2" fill={color}/>
      <path d="M8 1v3M8 12v3M1 8h3M12 8h3" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function VerifiedBadge() {
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:3,
      background: COLORS.greenBg, color: COLORS.green,
      padding:'2px 8px', borderRadius:20, fontSize:11, fontWeight:600,
    }}>
      <CheckCircleIcon size={11} color={COLORS.green}/> Tasdiqlangan
    </span>
  );
}

export function RiskBadge({ level }) {
  const map = {
    safe:       { label:'Xavfsiz',     color:COLORS.green, bg:COLORS.greenBg, Icon:()=><CheckCircleIcon size={11} color={COLORS.green}/> },
    suspicious: { label:'Shubhali',    color:COLORS.amber, bg:COLORS.amberBg, Icon:()=><AlertIcon size={11} color={COLORS.amber}/> },
    flagged:    { label:'Belgilangan', color:COLORS.red,   bg:COLORS.redBg,   Icon:()=><FlagIcon size={11} color={COLORS.red}/> },
  };
  const c = map[level] || map.safe;
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:4,
      background:c.bg, color:c.color, padding:'3px 9px', borderRadius:20, fontSize:11, fontWeight:600,
    }}>
      <c.Icon/> AI: {c.label}
    </span>
  );
}

export function StatusChip({ status }) {
  const map = {
    reviewing: { label:"Ko'rib chiqilmoqda", color:COLORS.amber, bg:COLORS.amberBg },
    accepted:  { label:'Qabul qilindi',      color:COLORS.green, bg:COLORS.greenBg },
    rejected:  { label:'Rad etildi',         color:COLORS.red,   bg:COLORS.redBg   },
  };
  const c = map[status] || map.reviewing;
  return (
    <span style={{ background:c.bg, color:c.color, padding:'3px 10px', borderRadius:20, fontSize:11, fontWeight:600 }}>
      {c.label}
    </span>
  );
}

export function Logo({ onClick, dark }) {
  return (
    <div onClick={onClick} style={{ display:'flex', alignItems:'center', gap:9, cursor:'pointer', userSelect:'none' }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill={COLORS.teal}/>
        <path d="M16 5L7 9.5V15a10 10 0 009 9.95A10 10 0 0025 15V9.5L16 5z"
          fill="white" fillOpacity="0.18" stroke="white" strokeWidth="1.2"/>
        <path d="M12 16l2.5 2.5 5.5-5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{ fontWeight:800, fontSize:18, color: dark ? COLORS.darkText : COLORS.text, letterSpacing:'-0.03em' }}>
        Trust<span style={{ color:COLORS.tealLight }}>Flow</span>
      </span>
    </div>
  );
}

export function Nav({ currentPage, onNavigate, onReport, onLogin, onRegister }) {
  const pages = [
    { id:'landing',      label:'Bosh sahifa' },
    { id:'jobs',         label:'Vakansiyalar' },
    { id:'dashboard',    label:'Kabinetim' },
    { id:'applications', label:'Arizalarim' },
    { id:'rewards',      label:'Mukofotlar' },
    { id:'community',    label:'Jamiyat' },
    { id:'gov',          label:'Nazorat paneli' },
  ];
  return (
    <nav style={{
      background:COLORS.white, borderBottom:`1px solid ${COLORS.border}`,
      padding:'0 32px', height:62,
      display:'flex', alignItems:'center', justifyContent:'space-between',
      position:'sticky', top:0, zIndex:1000,
      boxShadow:'0 1px 4px rgba(15,118,110,0.06)',
      fontFamily:"'Inter',sans-serif",
    }}>
      <Logo onClick={()=>onNavigate('landing')}/>

      <div style={{ display:'flex', gap:2 }}>
        {pages.map(p=>(
          <button key={p.id} onClick={()=>onNavigate(p.id)} style={{
            background: currentPage===p.id ? COLORS.tealBg : 'transparent',
            color: currentPage===p.id ? COLORS.teal : COLORS.textMuted,
            border:'none', padding:'7px 14px', borderRadius:8, cursor:'pointer',
            fontSize:13.5, fontWeight: currentPage===p.id ? 600 : 400,
            fontFamily:"'Inter',sans-serif", transition:'all .15s',
          }}>
            {p.label}
          </button>
        ))}
      </div>

      <div style={{ display:'flex', gap:8, alignItems:'center' }}>
        <button onClick={onReport} style={{
          display:'flex', alignItems:'center', gap:6,
          background:COLORS.amberBg, border:`1px solid ${COLORS.amberBorder}`,
          color:COLORS.amber, padding:'7px 14px', borderRadius:8, cursor:'pointer',
          fontSize:13, fontWeight:600, fontFamily:"'Inter',sans-serif",
        }}>
          <FlagIcon size={13} color={COLORS.amber}/> Shikoyat
        </button>
        <button onClick={onLogin} style={{
          background:'transparent', border:`1px solid ${COLORS.border}`,
          color:COLORS.textMid, padding:'7px 16px', borderRadius:8, cursor:'pointer',
          fontSize:13.5, fontWeight:500, fontFamily:"'Inter',sans-serif",
        }}>
          Kirish
        </button>
        <button onClick={onRegister} style={{
          background:COLORS.teal, border:'none', color:COLORS.white,
          padding:'7px 16px', borderRadius:8, cursor:'pointer',
          fontSize:13.5, fontWeight:600, fontFamily:"'Inter',sans-serif",
        }}>
          Ro'yxatdan o'tish
        </button>
      </div>
    </nav>
  );
}

export function ReportModal({ onClose, prefilledCompany = null }) {
  const [step, setStep] = React.useState('form');
  const [category, setCategory] = React.useState('');
  const [text, setText] = React.useState('');
  const [company, setCompany] = React.useState(prefilledCompany || '');
  const [jobLink, setJobLink] = React.useState('');
  const [files, setFiles] = React.useState([]);
  const [code] = React.useState(()=>'REPORT-'+new Date().getFullYear()+'-'+Math.random().toString(36).slice(2,6).toUpperCase()+'K');

  const cats = [
    { id:'fake_salary',  label:'Yolg\'on maosh',          en:'Fake salary' },
    { id:'nepotism',     label:'Tanish-bilishchilik',    en:'Nepotism' },
    { id:'ghost',        label:'Ko\'zgu xodim',          en:'Ghost employee' },
    { id:'bribe',        label:'Sovg\'a talab',          en:'Bribe required' },
    { id:'other',        label:'Boshqa',                 en:'Other' },
  ];

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files || []);
    if (files.length + newFiles.length <= 3) {
      setFiles(f => [...f, ...newFiles.map(f => ({ file: f, name: f.name, size: f.size }))]);
    }
  };

  const removeFile = (idx) => {
    setFiles(f => f.filter((_, i) => i !== idx));
  };

  return (
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{
      position:'fixed', inset:0, background:'rgba(10,22,40,0.65)',
      zIndex:2000, display:'flex', alignItems:'center', justifyContent:'center',
      backdropFilter:'blur(5px)', fontFamily:"'Inter',sans-serif",
    }}>
      <div style={{
        background:COLORS.white, borderRadius:18, padding:'40px 40px 36px', width:540,
        maxWidth:'92vw', maxHeight:'90vh', overflowY:'auto',
        boxShadow:'0 32px 64px rgba(0,0,0,0.2)',
        animation:'slideUp .25s ease',
      }}>
        {step==='form' ? (
          <>
            <div style={{ textAlign:'center', marginBottom:28 }}>
              <div style={{
                width:64, height:64, borderRadius:'50%', background:COLORS.tealBg,
                display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 14px',
              }}>
                <ShieldIcon size={30} color={COLORS.teal}/>
              </div>
              <h2 style={{ margin:'0 0 8px', fontSize:20, fontWeight:800, color:COLORS.text }}>
                Sizning shaxsiyatingiz to'liq himoyalangan
              </h2>
              <p style={{ margin:0, fontSize:14, color:COLORS.textMuted }}>
                Anonim shikoyat yuborish
              </p>
            </div>

            <label style={{ display:'block', fontSize:12, fontWeight:700, color:COLORS.textMid, marginBottom:8, letterSpacing:'0.04em', textTransform:'uppercase' }}>
              Toifa [Category]
            </label>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:20 }}>
              {cats.map(c=>(
                <button key={c.id} onClick={()=>setCategory(category===c.id?'':c.id)} style={{
                  padding:'11px 14px', borderRadius:10, textAlign:'left', cursor:'pointer',
                  border:`1.5px solid ${category===c.id?COLORS.teal:COLORS.border}`,
                  background: category===c.id ? COLORS.tealBg : COLORS.white,
                  fontFamily:"'Inter',sans-serif", transition:'all .15s',
                }}>
                  <div style={{ fontSize:13, fontWeight: category===c.id ? 600 : 500, color: category===c.id ? COLORS.teal : COLORS.textMid }}>{c.label}</div>
                  <div style={{ fontSize:11, color:COLORS.textLight, marginTop:2 }}>[{c.en}]</div>
                </button>
              ))}
            </div>

            <label style={{ display:'block', fontSize:12, fontWeight:700, color:COLORS.textMid, marginBottom:8, letterSpacing:'0.04em', textTransform:'uppercase' }}>
              Nima bo'lganini tushuntiring [Description]
            </label>
            <textarea value={text} onChange={e=>setText(e.target.value)}
              placeholder="Nima sodir bo'lganini batafsil tasvirlab bering..."
              rows={4} style={{
                width:'100%', boxSizing:'border-box',
                border:`1.5px solid ${COLORS.border}`, borderRadius:10, padding:'12px 14px',
                fontSize:14, color:COLORS.text, resize:'vertical', lineHeight:1.6,
                fontFamily:"'Inter',sans-serif", outline:'none', marginBottom:16,
              }}/>

            <label style={{ display:'block', fontSize:12, fontWeight:700, color:COLORS.textMid, marginBottom:8, letterSpacing:'0.04em', textTransform:'uppercase' }}>
              Fayl yuklash [Files] — PDF, JPG, PNG, MP4 (max 3 ta)
            </label>
            <div style={{
              border:`2px dashed ${COLORS.tealBorder}`, borderRadius:10, padding:16,
              textAlign:'center', background:COLORS.tealBg, marginBottom:12,
              cursor:'pointer', transition:'all .15s',
            }}>
              <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.mp4" onChange={handleFileUpload}
                style={{ display:'none' }} id="file-upload"/>
              <label htmlFor="file-upload" style={{ cursor:'pointer', display:'block' }}>
                <div style={{ fontSize:28, marginBottom:6 }}>📎</div>
                <div style={{ fontSize:13, fontWeight:600, color:COLORS.teal, marginBottom:2 }}>Fayl qo'shish yoki drag-drop qiling</div>
                <div style={{ fontSize:11, color:COLORS.textMuted }}>Max 3 fayl, 50MB har biri</div>
              </label>
            </div>
            {files.length > 0 && (
              <div style={{ display:'flex', flexDirection:'column', gap:6, marginBottom:16 }}>
                {files.map((f, i) => (
                  <div key={i} style={{
                    display:'flex', alignItems:'center', justifyContent:'space-between',
                    background:COLORS.bgAlt, padding:'10px 14px', borderRadius:8,
                  }}>
                    <div style={{ display:'flex', alignItems:'center', gap:8, flex:1, minWidth:0 }}>
                      <FileIcon size={14} color={COLORS.teal}/>
                      <span style={{ fontSize:13, color:COLORS.text, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{f.name}</span>
                      <span style={{ fontSize:11, color:COLORS.textMuted, whiteSpace:'nowrap' }}>({Math.round(f.size/1024)}KB)</span>
                    </div>
                    <button onClick={() => removeFile(i)} style={{
                      background:'transparent', border:'none', cursor:'pointer', padding:4,
                      display:'flex', alignItems:'center', justifyContent:'center',
                    }}>
                      <XIcon size={14} color={COLORS.red}/>
                    </button>
                  </div>
                ))}
              </div>
            )}

            <label style={{ display:'block', fontSize:12, fontWeight:700, color:COLORS.textMid, marginBottom:8, letterSpacing:'0.04em', textTransform:'uppercase' }}>
              Kompaniya nomi [Optional]
            </label>
            <input type="text" placeholder="Masalan: Uzcard MCHJ" value={company} onChange={e=>setCompany(e.target.value)}
              style={{
                width:'100%', boxSizing:'border-box', padding:'11px 14px', marginBottom:16,
                border:`1.5px solid ${COLORS.border}`, borderRadius:10, fontSize:14,
                color:COLORS.text, fontFamily:"'Inter',sans-serif", outline:'none',
              }}/>

            <label style={{ display:'block', fontSize:12, fontWeight:700, color:COLORS.textMid, marginBottom:8, letterSpacing:'0.04em', textTransform:'uppercase' }}>
              Vakansiya linki [Optional]
            </label>
            <input type="url" placeholder="https://..." value={jobLink} onChange={e=>setJobLink(e.target.value)}
              style={{
                width:'100%', boxSizing:'border-box', padding:'11px 14px', marginBottom:16,
                border:`1.5px solid ${COLORS.border}`, borderRadius:10, fontSize:14,
                color:COLORS.text, fontFamily:"'Inter',sans-serif", outline:'none',
              }}/>

            <div style={{
              background:COLORS.bgAlt, borderRadius:10, padding:'12px 14px',
              fontSize:11, color:COLORS.textMuted, lineHeight:1.65, marginBottom:20,
            }}>
              🔒 Yolg'on hisobot yuboirish mumkin emas. Algoritm soxta hisobotlarni aniqlaydi.
            </div>

            <div style={{ display:'flex', gap:10 }}>
              <button onClick={onClose} style={{
                flex:1, padding:'12px', borderRadius:10,
                border:`1.5px solid ${COLORS.border}`, background:'transparent',
                color:COLORS.textMid, fontSize:14, cursor:'pointer', fontFamily:"'Inter',sans-serif",
              }}>Bekor qilish</button>
              <button onClick={()=>text.trim()&&setStep('done')} style={{
                flex:2, padding:'12px', borderRadius:10, border:'none',
                background: text.trim() && category ? COLORS.teal : COLORS.bgAlt2,
                color: text.trim() && category ? COLORS.white : COLORS.textLight,
                fontSize:14, fontWeight:700, cursor: (text.trim() && category) ? 'pointer' : 'not-allowed',
                display:'flex', alignItems:'center', justifyContent:'center', gap:8,
                fontFamily:"'Inter',sans-serif", transition:'all .15s',
              }}>
                <ShieldIcon size={16} color={(text.trim() && category)?COLORS.white:COLORS.textLight}/>
                Shikoyatni yuborish
              </button>
            </div>
          </>
        ) : (
          <div style={{ textAlign:'center', padding:'16px 0' }}>
            <div style={{
              width:72, height:72, borderRadius:'50%', background:COLORS.greenBg,
              display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px',
            }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="17" stroke={COLORS.green} strokeWidth="2"/>
                <path d="M11 18l5.5 5.5 9-9" stroke={COLORS.green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 style={{ margin:'0 0 10px', fontSize:22, fontWeight:800, color:COLORS.text }}>Sizning hisobot qabul qilindi!</h2>
            <p style={{ color:COLORS.textMuted, fontSize:14, lineHeight:1.7, margin:'0 0 24px' }}>
              Kami 48 soat ichida tekshiriladi.<br/>[We'll review within 48 hours.]
            </p>
            <div style={{
              background:COLORS.tealBg, borderRadius:12, padding:'16px 28px', marginBottom:28,
              border:`1px solid ${COLORS.tealBorder}`,
            }}>
              <div style={{ fontSize:11, color:COLORS.textMuted, fontWeight:600, marginBottom:4, textTransform:'uppercase', letterSpacing:'0.05em' }}>Kuzatuv kodi [Tracking code]</div>
              <div style={{ fontSize:22, fontWeight:800, color:COLORS.teal, letterSpacing:'0.06em' }}>{code}</div>
              <div style={{ fontSize:11, color:COLORS.textMuted, marginTop:6 }}>Bu kodni saqlang — holat tekshirish uchun</div>
            </div>
            <button onClick={onClose} style={{
              background:COLORS.teal, border:'none', color:COLORS.white,
              padding:'12px 36px', borderRadius:10, fontSize:14, fontWeight:700,
              cursor:'pointer', fontFamily:"'Inter',sans-serif",
            }}>Yopish</button>
          </div>
        )}
      </div>
    </div>
  );
}
