import React from 'react';

const ACCENTS = {
  teal:  { '--ac': '#0f766e', '--ac-light': '#14b8a6', '--ac-dark': '#065f46' },
  navy:  { '--ac': '#1e3a8a', '--ac-light': '#3b82f6', '--ac-dark': '#1e2a5e' },
  slate: { '--ac': '#475569', '--ac-light': '#94a3b8', '--ac-dark': '#1e293b' },
};

const PAGE_CHIPS = [
  { val:'landing',      label:'Bosh sahifa' },
  { val:'jobs',         label:'Vakansiyalar' },
  { val:'dashboard',    label:'Kabinet' },
  { val:'applications', label:'Arizalarim' },
  { val:'rewards',      label:'Mukofotlar' },
  { val:'community',    label:'Jamiyat' },
  { val:'gov',          label:'Nazorat' },
  { val:'profile',      label:'Profil' },
  { val:'pricing',      label:'Narxlar' },
  { val:'company',      label:'Kompaniya' },
  { val:'flagged',      label:'Belgilangan' },
];

const MODAL_CHIPS = [
  { val:'report',         label:'Shikoyat modali' },
  { val:'emergency',      label:'Favqulodda hisobot' },
  { val:'auth-seeker',    label:'Auth: Ish qidiruvchi' },
  { val:'auth-company',   label:'Auth: Kompaniya' },
  { val:'auth-gov',       label:'Auth: Davlat' },
];

export function TweaksPanel({ currentPage, onNavigate, onReport, onEmergency, onAuth }) {
  const [open, setOpen] = React.useState(false);
  const [accent, setAccent] = React.useState('teal');

  function handleModal(val) {
    if (val === 'report')       onReport();
    if (val === 'emergency')    onEmergency();
    if (val === 'auth-seeker')  onAuth('seeker');
    if (val === 'auth-company') onAuth('company');
    if (val === 'auth-gov')     onAuth('gov');
  }

  function handleAccent(val) {
    setAccent(val);
    const vars = ACCENTS[val];
    if (vars) Object.entries(vars).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  }

  return (
    <>
      {/* FAB */}
      {!open && (
        <button onClick={() => setOpen(true)} style={{
          position:'fixed', bottom:24, right:24, zIndex:2999,
          width:44, height:44, borderRadius:'50%', background:'#0f766e',
          border:'none', color:'#fff', fontSize:18, cursor:'pointer',
          boxShadow:'0 4px 14px rgba(15,118,110,0.35)',
          display:'flex', alignItems:'center', justifyContent:'center',
          transition:'transform .2s, box-shadow .2s',
          fontFamily:"'Inter',sans-serif",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform='scale(1.1)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(15,118,110,0.45)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform='scale(1)';   e.currentTarget.style.boxShadow='0 4px 14px rgba(15,118,110,0.35)'; }}
        >⚙</button>
      )}

      {/* Panel */}
      {open && (
        <div style={{
          position:'fixed', bottom:24, right:24, zIndex:3000,
          width:300, background:'#fff', borderRadius:16,
          border:'1.5px solid #e2e8f0', boxShadow:'0 16px 48px rgba(15,23,42,0.18)',
          fontFamily:"'Inter',sans-serif", overflow:'hidden',
          animation:'slideUp .22s ease',
        }}>
          {/* Head */}
          <div style={{
            padding:'14px 18px', background:'#0f766e', color:'#fff',
            display:'flex', alignItems:'center', justifyContent:'space-between',
          }}>
            <span style={{ fontSize:13, fontWeight:700, letterSpacing:'.02em' }}>⚙ Tweaks</span>
            <button onClick={() => setOpen(false)} style={{
              background:'rgba(255,255,255,0.15)', border:'none', color:'#fff',
              width:24, height:24, borderRadius:6, fontSize:12, cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:"'Inter',sans-serif",
            }}>✕</button>
          </div>

          {/* Body */}
          <div style={{ padding:'16px 18px', display:'flex', flexDirection:'column', gap:14 }}>

            {/* Page */}
            <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
              <div style={{ fontSize:11, fontWeight:700, color:'#94a3b8', textTransform:'uppercase', letterSpacing:'.05em' }}>
                Sahifa [Page]
              </div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                {PAGE_CHIPS.map(c => (
                  <button key={c.val} onClick={() => { onNavigate(c.val); }} style={{
                    padding:'5px 12px', borderRadius:7, fontSize:12, fontWeight: currentPage===c.val ? 700 : 500,
                    border:`1.5px solid ${currentPage===c.val ? '#0f766e' : '#e2e8f0'}`,
                    background: currentPage===c.val ? '#f0fdfa' : '#f8fafc',
                    color: currentPage===c.val ? '#0f766e' : '#334155',
                    cursor:'pointer', fontFamily:"'Inter',sans-serif", transition:'all .14s',
                  }}>{c.label}</button>
                ))}
              </div>
            </div>

            {/* Modal */}
            <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
              <div style={{ fontSize:11, fontWeight:700, color:'#94a3b8', textTransform:'uppercase', letterSpacing:'.05em' }}>
                Modal [Modal]
              </div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                {MODAL_CHIPS.map(c => (
                  <button key={c.val} onClick={() => handleModal(c.val)} style={{
                    padding:'5px 12px', borderRadius:7, fontSize:12, fontWeight:500,
                    border:'1.5px solid #e2e8f0', background:'#f8fafc', color:'#334155',
                    cursor:'pointer', fontFamily:"'Inter',sans-serif", transition:'all .14s',
                  }}>{c.label}</button>
                ))}
              </div>
            </div>

            {/* Accent */}
            <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
              <div style={{ fontSize:11, fontWeight:700, color:'#94a3b8', textTransform:'uppercase', letterSpacing:'.05em' }}>
                Rang sxemasi [Accent]
              </div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                {Object.keys(ACCENTS).map(key => (
                  <button key={key} onClick={() => handleAccent(key)} style={{
                    padding:'5px 12px', borderRadius:7, fontSize:12, fontWeight: accent===key ? 700 : 500,
                    border:`1.5px solid ${accent===key ? '#0f766e' : '#e2e8f0'}`,
                    background: accent===key ? '#f0fdfa' : '#f8fafc',
                    color: accent===key ? '#0f766e' : '#334155',
                    cursor:'pointer', fontFamily:"'Inter',sans-serif", transition:'all .14s',
                  }}>{key.charAt(0).toUpperCase()+key.slice(1)}{key==='teal' ? ' (asl)' : ''}</button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
