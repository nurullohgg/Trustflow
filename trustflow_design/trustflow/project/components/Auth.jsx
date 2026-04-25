// Auth.jsx — Three authentication flows: Job Seeker, Company, Government

function AuthInput({ label, type='text', placeholder, value, onChange, error, icon }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display:'block', fontSize:12, fontWeight:600, color:COLORS.textMid, marginBottom:6 }}>{label}</label>
      <div style={{ position:'relative' }}>
        {icon && <span style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', fontSize:14, opacity:.5 }}>{icon}</span>}
        <input type={type} placeholder={placeholder} value={value} onChange={e=>onChange(e.target.value)}
          style={{
            width:'100%', boxSizing:'border-box', padding: icon ? '11px 14px 11px 36px' : '11px 14px',
            border:`1.5px solid ${error ? COLORS.red : COLORS.border}`, borderRadius:10,
            fontSize:14, color:COLORS.text, fontFamily:"'Inter',sans-serif", outline:'none',
            borderLeft: error ? `3px solid ${COLORS.red}` : undefined,
            transition:'border-color .15s',
          }}/>
      </div>
      {error && <div style={{ fontSize:11, color:COLORS.red, marginTop:4 }}>{error}</div>}
    </div>
  );
}

function OneIDButton({ onClick, label="OneID orqali kirish" }) {
  const [hov, setHov] = React.useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        width:'100%', padding:'13px', borderRadius:10, border:'none', cursor:'pointer',
        background: hov ? '#0d6b63' : COLORS.teal, color:COLORS.white,
        fontSize:15, fontWeight:700, fontFamily:"'Inter',sans-serif",
        display:'flex', alignItems:'center', justifyContent:'center', gap:10,
        boxShadow:'0 4px 14px rgba(15,118,110,0.3)', transition:'all .15s',
      }}>
      <ShieldIcon size={18} color="#fff"/> {label}
    </button>
  );
}

function AuthDivider() {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:14, margin:'20px 0' }}>
      <div style={{ flex:1, height:1, background:COLORS.border }}/>
      <span style={{ fontSize:12, color:COLORS.textLight, fontWeight:500 }}>yoki [or]</span>
      <div style={{ flex:1, height:1, background:COLORS.border }}/>
    </div>
  );
}

function AuthModalShell({ title, subtitle, onClose, children, width=420 }) {
  return (
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{
      position:'fixed', inset:0, background:'rgba(10,22,40,0.65)', zIndex:2000,
      display:'flex', alignItems:'center', justifyContent:'center',
      backdropFilter:'blur(5px)', fontFamily:"'Inter',sans-serif",
    }}>
      <div style={{
        background:COLORS.white, borderRadius:18, width, maxWidth:'94vw',
        maxHeight:'90vh', overflowY:'auto', boxShadow:'0 32px 64px rgba(0,0,0,0.22)',
        animation:'slideUp .25s ease',
      }}>
        {/* Header */}
        <div style={{ padding:'28px 32px 0', display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <div>
            <h2 style={{ margin:'0 0 6px', fontSize:20, fontWeight:800, color:COLORS.text }}>{title}</h2>
            {subtitle && <p style={{ margin:0, fontSize:13, color:COLORS.textMuted }}>{subtitle}</p>}
          </div>
          <button onClick={onClose} style={{
            background:COLORS.bgAlt, border:'none', width:30, height:30, borderRadius:8,
            cursor:'pointer', fontSize:16, color:COLORS.textMuted, display:'flex',
            alignItems:'center', justifyContent:'center', flexShrink:0,
          }}>✕</button>
        </div>
        <div style={{ padding:'24px 32px 32px' }}>{children}</div>
      </div>
    </div>
  );
}

// ── Job Seeker Registration ─────────────────────────────────────────────

function JobSeekerAuth({ onClose, onSuccess }) {
  const [step, setStep] = React.useState('initial'); // initial, oneid_done, manual
  const [form, setForm] = React.useState({ name:'', email:'', phone:'+998 ', password:'', jobTitle:'', salaryMin:'', salaryMax:'', skills:'', availability:'full' });
  const [errors, setErrors] = React.useState({});
  const upd = (k,v) => { setForm(f=>({...f,[k]:v})); setErrors(e=>({...e,[k]:undefined})); };

  const doOneID = () => {
    setTimeout(()=>{
      setForm(f=>({...f, name:"Aziz Jo'rayev", phone:'+998 90 123 4567' }));
      setStep('oneid_done');
    }, 800);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Ism kiritilmagan";
    if (!form.email.includes('@') && step!=='oneid_done') e.email = "Email noto'g'ri";
    if (form.password.length < 6 && step!=='oneid_done') e.password = "Kamida 6 ta belgi";
    if (!form.jobTitle.trim()) e.jobTitle = "Kasbingizni kiriting";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => { if (validate()) { onSuccess && onSuccess(); onClose(); } };

  return (
    <AuthModalShell title="Ish qidiruvchi sifatida ro'yxatdan o'tish"
      subtitle="OneID orqali tezkor kirish yoki qo'lda to'ldiring"
      onClose={onClose}>

      {step === 'initial' && (
        <>
          <OneIDButton onClick={doOneID} label="OneID orqali ro'yxatdan o'tish"/>
          <AuthDivider/>
          <button onClick={()=>setStep('manual')} style={{
            width:'100%', padding:'12px', borderRadius:10, border:`1.5px solid ${COLORS.border}`,
            background:'transparent', color:COLORS.textMid, fontSize:14, fontWeight:500,
            cursor:'pointer', fontFamily:"'Inter',sans-serif",
          }}>
            Qo'lda ro'yxatdan o'tish [Manual registration]
          </button>
        </>
      )}

      {step === 'oneid_done' && (
        <>
          <div style={{
            background:COLORS.greenBg, border:`1px solid ${COLORS.greenLight}`,
            borderRadius:10, padding:'12px 16px', marginBottom:20,
            display:'flex', alignItems:'center', gap:10,
          }}>
            <CheckCircleIcon size={18} color={COLORS.green}/>
            <div>
              <div style={{ fontSize:13, fontWeight:600, color:COLORS.green }}>OneID bilan tasdiqlandi</div>
              <div style={{ fontSize:12, color:COLORS.textMuted }}>Aziz Jo'rayev · Passport: AA1234567</div>
            </div>
          </div>
          <AuthInput label="Ism [Name]" value={form.name} onChange={v=>upd('name',v)} error={errors.name} icon="👤"/>
          <AuthInput label="Telefon [Phone]" value={form.phone} onChange={v=>upd('phone',v)} icon="📱"/>
          <AuthInput label="Kerakli lavozim [Desired job title] *" placeholder="masalan: Frontend Developer"
            value={form.jobTitle} onChange={v=>upd('jobTitle',v)} error={errors.jobTitle} icon="💼"/>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            <AuthInput label="Min maosh (UZS)" placeholder="8,000,000" value={form.salaryMin} onChange={v=>upd('salaryMin',v)}/>
            <AuthInput label="Max maosh (UZS)" placeholder="25,000,000" value={form.salaryMax} onChange={v=>upd('salaryMax',v)}/>
          </div>
          <AuthInput label="Ko'nikmalar [Skills]" placeholder="React, Python, Excel..."
            value={form.skills} onChange={v=>upd('skills',v)} icon="⚡"/>
          <div style={{ marginBottom:20 }}>
            <label style={{ display:'block', fontSize:12, fontWeight:600, color:COLORS.textMid, marginBottom:8 }}>Bandlik turi [Availability]</label>
            <div style={{ display:'flex', gap:8 }}>
              {[["full","To'liq stavka"],["part","Yarim stavka"],["remote","Masofaviy"],["freelance","Frilanser"]].map(([id,l])=>(
                <button key={id} onClick={()=>upd('availability',id)} style={{
                  flex:1, padding:'9px 6px', borderRadius:8, fontSize:12, fontWeight:500,
                  border:`1.5px solid ${form.availability===id ? COLORS.teal : COLORS.border}`,
                  background: form.availability===id ? COLORS.tealBg : 'transparent',
                  color: form.availability===id ? COLORS.teal : COLORS.textMuted,
                  cursor:'pointer', fontFamily:"'Inter',sans-serif",
                }}>{l}</button>
              ))}
            </div>
          </div>
          <button onClick={submit} style={{
            width:'100%', padding:'13px', borderRadius:10, border:'none',
            background:COLORS.teal, color:'#fff', fontSize:15, fontWeight:700,
            cursor:'pointer', fontFamily:"'Inter',sans-serif",
          }}>Ro'yxatdan o'tish [Register]</button>
        </>
      )}

      {step === 'manual' && (
        <>
          <AuthInput label="Ism [Name] *" placeholder="To'liq ismingiz" value={form.name} onChange={v=>upd('name',v)} error={errors.name} icon="👤"/>
          <AuthInput label="Email *" type="email" placeholder="sizning@email.uz" value={form.email} onChange={v=>upd('email',v)} error={errors.email} icon="✉"/>
          <AuthInput label="Parol [Password] *" type="password" placeholder="Kamida 6 ta belgi" value={form.password} onChange={v=>upd('password',v)} error={errors.password} icon="🔒"/>
          <AuthInput label="Telefon [Phone]" placeholder="+998 90 123 4567" value={form.phone} onChange={v=>upd('phone',v)} icon="📱"/>
          <AuthDivider/>
          <AuthInput label="Kerakli lavozim [Desired job title] *" placeholder="masalan: Frontend Developer"
            value={form.jobTitle} onChange={v=>upd('jobTitle',v)} error={errors.jobTitle} icon="💼"/>
          <AuthInput label="Ko'nikmalar [Skills]" placeholder="React, Python, Excel..."
            value={form.skills} onChange={v=>upd('skills',v)} icon="⚡"/>
          <button onClick={submit} style={{
            width:'100%', padding:'13px', borderRadius:10, border:'none',
            background:COLORS.teal, color:'#fff', fontSize:15, fontWeight:700,
            cursor:'pointer', fontFamily:"'Inter',sans-serif",
          }}>Ro'yxatdan o'tish [Register]</button>
        </>
      )}
    </AuthModalShell>
  );
}

// ── Company Registration ────────────────────────────────────────────────

function CompanyAuth({ onClose }) {
  const [form, setForm] = React.useState({ regNum:'', email:'', password:'', companyName:'', field:'', empCount:'', location:'', plan:'plus' });
  const [errors, setErrors] = React.useState({});
  const upd = (k,v)=>{ setForm(f=>({...f,[k]:v})); setErrors(e=>({...e,[k]:undefined})); };

  const plans = [
    { id:'free', name:'Free', price:"Bepul", desc:'5 ta e\'lon/oy' },
    { id:'plus', name:'Plus', price:"20,000 so'm/oy", desc:'50 ta e\'lon/oy' },
    { id:'pro',  name:'Pro',  price:"50,000 so'm/oy", desc:"Cheksiz e'lon" },
  ];

  return (
    <AuthModalShell title="Kompaniyani ro'yxatdan o'tkazish"
      subtitle="Ish beruvchi sifatida platformaga qo'shiling" onClose={onClose} width={460}>

      <OneIDButton onClick={()=>{}} label="OneID korporativ autentifikatsiya"/>
      <AuthDivider/>

      <AuthInput label="Kompaniya ro'yxat raqami [Reg. number] *" placeholder="12345678"
        value={form.regNum} onChange={v=>upd('regNum',v)} error={errors.regNum} icon="🏢"/>
      <AuthInput label="Admin email *" type="email" placeholder="admin@kompaniya.uz"
        value={form.email} onChange={v=>upd('email',v)} error={errors.email} icon="✉"/>
      <AuthInput label="Parol [Password] *" type="password" placeholder="Kamida 6 ta belgi"
        value={form.password} onChange={v=>upd('password',v)} error={errors.password} icon="🔒"/>
      <AuthInput label="Kompaniya nomi [Company name] *" placeholder="MCHJ nomi"
        value={form.companyName} onChange={v=>upd('companyName',v)} icon="🏗"/>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
        <AuthInput label="Faoliyat sohasi [Field]" placeholder="IT, Qurilish..."
          value={form.field} onChange={v=>upd('field',v)}/>
        <AuthInput label="Xodimlar soni [Employees]" placeholder="50"
          value={form.empCount} onChange={v=>upd('empCount',v)}/>
      </div>
      <AuthInput label="Manzil [HQ Location]" placeholder="Toshkent shahri"
        value={form.location} onChange={v=>upd('location',v)} icon="📍"/>

      {/* Plan selector */}
      <div style={{ marginBottom:20 }}>
        <label style={{ display:'block', fontSize:12, fontWeight:600, color:COLORS.textMid, marginBottom:8 }}>Tarif rejasi [Plan]</label>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8 }}>
          {plans.map(p=>(
            <button key={p.id} onClick={()=>upd('plan',p.id)} style={{
              padding:'12px 8px', borderRadius:10, textAlign:'center', cursor:'pointer',
              border:`1.5px solid ${form.plan===p.id ? COLORS.teal : COLORS.border}`,
              background: form.plan===p.id ? COLORS.tealBg : 'transparent',
              fontFamily:"'Inter',sans-serif", transition:'all .15s',
            }}>
              <div style={{ fontSize:13, fontWeight:700, color: form.plan===p.id ? COLORS.teal : COLORS.textMid }}>{p.name}</div>
              <div style={{ fontSize:11, color:COLORS.textMuted, marginTop:3 }}>{p.price}</div>
              <div style={{ fontSize:10, color:COLORS.textLight, marginTop:2 }}>{p.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <button onClick={onClose} style={{
        width:'100%', padding:'13px', borderRadius:10, border:'none',
        background:COLORS.teal, color:'#fff', fontSize:15, fontWeight:700,
        cursor:'pointer', fontFamily:"'Inter',sans-serif",
      }}>Kompaniyani ro'yxatdan o'tkazish [Register company]</button>
    </AuthModalShell>
  );
}

// ── Government Admin Login ──────────────────────────────────────────────

function GovAuth({ onClose, onSuccess }) {
  const [step, setStep] = React.useState('login'); // login, twofa
  const [form, setForm] = React.useState({ email:'', password:'', code:'' });
  const [errors, setErrors] = React.useState({});
  const [method, setMethod] = React.useState('sms');
  const upd = (k,v)=>{ setForm(f=>({...f,[k]:v})); setErrors(e=>({...e,[k]:undefined})); };

  const doLogin = () => {
    const e = {};
    if (!form.email.includes('@')) e.email = "Email noto'g'ri";
    if (form.password.length < 6) e.password = "Parol noto'g'ri";
    setErrors(e);
    if (Object.keys(e).length === 0) setStep('twofa');
  };

  const verify2FA = () => {
    if (form.code.length < 6) { setErrors({ code:"6 raqamli kod kiriting" }); return; }
    onSuccess && onSuccess();
    onClose();
  };

  return (
    <AuthModalShell title="Davlat nazorat tizimi" subtitle="Faqat vakolatli xodimlar uchun" onClose={onClose} width={400}>
      <div style={{
        background:'rgba(220,38,38,0.06)', border:`1px solid ${COLORS.redLight}`,
        borderRadius:10, padding:'10px 14px', marginBottom:20,
        display:'flex', alignItems:'center', gap:10,
      }}>
        <span style={{ fontSize:15 }}>🔐</span>
        <div style={{ fontSize:12, color:COLORS.red, fontWeight:500, lineHeight:1.5 }}>
          Maxfiy tizim. Ruxsatsiz kirish qonunan ta'qiqlanadi.<br/>
          <span style={{ color:COLORS.textLight }}>[Classified system. Unauthorized access is prohibited by law.]</span>
        </div>
      </div>

      {step === 'login' && (
        <>
          <AuthInput label="Xizmat emaili [Official email] *" type="email" placeholder="ism@mehnat.uz"
            value={form.email} onChange={v=>upd('email',v)} error={errors.email} icon="✉"/>
          <AuthInput label="Parol [Password] *" type="password" placeholder="••••••••"
            value={form.password} onChange={v=>upd('password',v)} error={errors.password} icon="🔒"/>
          <button onClick={doLogin} style={{
            width:'100%', padding:'13px', borderRadius:10, border:'none',
            background:COLORS.teal, color:'#fff', fontSize:15, fontWeight:700,
            cursor:'pointer', fontFamily:"'Inter',sans-serif",
          }}>Kirish [Login]</button>
          <p style={{ textAlign:'center', fontSize:12, color:COLORS.textLight, marginTop:14 }}>
            Ro'yxatdan o'tish imkoni yo'q. Faqat admin tomonidan yaratilgan hisoblar.<br/>
            [No self-registration. Admin-created accounts only.]
          </p>
        </>
      )}

      {step === 'twofa' && (
        <>
          <div style={{ textAlign:'center', marginBottom:20 }}>
            <div style={{
              width:56, height:56, borderRadius:'50%', background:COLORS.tealBg,
              display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 14px',
            }}>
              <ShieldIcon size={26} color={COLORS.teal}/>
            </div>
            <h3 style={{ margin:'0 0 6px', fontSize:16, fontWeight:700, color:COLORS.text }}>
              Ikki bosqichli tasdiqlash [2FA]
            </h3>
            <p style={{ fontSize:13, color:COLORS.textMuted }}>
              {form.email} ga kod yuborildi
            </p>
          </div>

          <div style={{ display:'flex', gap:8, marginBottom:18 }}>
            {[['sms','SMS'],['app','Authenticator']].map(([id,l])=>(
              <button key={id} onClick={()=>setMethod(id)} style={{
                flex:1, padding:'9px', borderRadius:8, fontSize:13, fontWeight:500,
                border:`1.5px solid ${method===id ? COLORS.teal : COLORS.border}`,
                background: method===id ? COLORS.tealBg : 'transparent',
                color: method===id ? COLORS.teal : COLORS.textMuted,
                cursor:'pointer', fontFamily:"'Inter',sans-serif",
              }}>{l}</button>
            ))}
          </div>

          <AuthInput label="Tasdiqlash kodi [Verification code] *" placeholder="123456"
            value={form.code} onChange={v=>upd('code',v)} error={errors.code} icon="🔢"/>

          <button onClick={verify2FA} style={{
            width:'100%', padding:'13px', borderRadius:10, border:'none',
            background:COLORS.teal, color:'#fff', fontSize:15, fontWeight:700,
            cursor:'pointer', fontFamily:"'Inter',sans-serif",
          }}>Tasdiqlash [Verify]</button>
        </>
      )}
    </AuthModalShell>
  );
}

Object.assign(window, { JobSeekerAuth, CompanyAuth, GovAuth, AuthInput, OneIDButton, AuthModalShell });
