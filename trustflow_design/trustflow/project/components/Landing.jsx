// Landing.jsx — Hero, StatsBar, Features, How it works, CTA

function AnimatedCounter({ target, suffix = '' }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    let cur = 0;
    const step = target / (1800 / 16);
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(Math.floor(cur));
      if (cur >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [target]);
  return <span>{val.toLocaleString()}{suffix}</span>;
}

function StatsBar() {
  const stats = [
    { value: 284750, suffix: '+', label: "Ro'yxatdagi foydalanuvchilar", en: "Registered users" },
    { value: 12840,  suffix: '',  label: "Tasdiqlangan kompaniyalar",    en: "Verified companies" },
    { value: 1247,   suffix: '',  label: "Aniqlangan korrupsiya holatlari", en: "Flagged cases" },
    { value: 89430,  suffix: '+', label: "Himoyalangan ish joylari",     en: "Protected jobs" },
  ];
  return (
    <div style={{
      background: COLORS.tealDark,
      padding: '22px 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16,
      borderBottom: `3px solid ${COLORS.tealLight}`,
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: COLORS.white, letterSpacing: '-0.04em', lineHeight: 1 }}>
            <AnimatedCounter target={s.value} suffix={s.suffix}/>
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 5, lineHeight: 1.4 }}>
            {s.label}<br/><span style={{ opacity: 0.45 }}>[{s.en}]</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeatureCard({ icon, title, desc, index }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: COLORS.white,
        borderRadius: 14,
        padding: '32px 28px',
        border: `1.5px solid ${hov ? COLORS.tealBorder : COLORS.border}`,
        boxShadow: hov ? '0 12px 32px rgba(15,118,110,0.14)' : '0 2px 8px rgba(15,118,110,0.05)',
        transform: hov ? 'translateY(-3px)' : 'none',
        transition: 'all .2s ease',
      }}
    >
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: COLORS.tealBg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 20,
        boxShadow: `0 0 0 8px ${COLORS.tealBg}`,
        outline: `6px solid ${COLORS.tealBg}`,
      }}>
        {icon}
      </div>
      <h3 style={{ margin: '0 0 10px', fontSize: 16, fontWeight: 700, color: COLORS.text, lineHeight: 1.3 }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 14, color: COLORS.textMuted, lineHeight: 1.75 }}>{desc}</p>
    </div>
  );
}

function LandingPage({ onNavigate, onReport }) {
  return (
    <div style={{ fontFamily: "'Inter',sans-serif" }}>

      {/* ── Hero ── */}
      <section style={{
        background: `linear-gradient(150deg, ${COLORS.teal} 0%, ${COLORS.tealDark} 60%, #042f27 100%)`,
        padding: '100px 32px 88px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* grid texture */}
        <svg style={{ position:'absolute',top:0,left:0,width:'100%',height:'100%',opacity:.04,pointerEvents:'none' }}
          viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="heroPat" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0L0 0 0 48" fill="none" stroke="white" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="600" height="400" fill="url(#heroPat)"/>
        </svg>
        {/* amber accent ring */}
        <div style={{
          position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
          width:600, height:600, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)',
          pointerEvents:'none',
        }}/>

        <div style={{ position:'relative', zIndex:1, maxWidth:740, margin:'0 auto' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8,
            background:'rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.85)',
            padding:'6px 18px', borderRadius:20, fontSize:12, fontWeight:600,
            letterSpacing:'0.07em', textTransform:'uppercase', marginBottom:28,
            border:'1px solid rgba(255,255,255,0.18)', backdropFilter:'blur(4px)',
          }}>
            <ShieldIcon size={13} color="rgba(255,255,255,0.85)"/>
            O'zbekiston Mehnat Shaffofligi Platformasi
          </div>

          <h1 style={{
            margin: '0 0 8px', fontSize: 58, fontWeight: 900,
            color: COLORS.white, lineHeight: 1.05, letterSpacing: '-0.04em',
          }}>
            Shaffof ish,
          </h1>
          <h1 style={{
            margin: '0 0 28px', fontSize: 58, fontWeight: 900,
            color: COLORS.amberLight, lineHeight: 1.05, letterSpacing: '-0.04em',
          }}>
            adolatli davlat
          </h1>
          <p style={{
            margin: '0 auto 44px', maxWidth: 540,
            fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75,
          }}>
            O'zbekistonda ish qidirish va yollashning yagona shaffof platformasi —
            har bir vakansiya tekshirilgan, har bir shikoyat muhofaza qilingan.
          </p>

          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <button onClick={()=>onNavigate('jobs')} style={{
              background:COLORS.white, border:'none', color:COLORS.teal,
              padding:'16px 36px', borderRadius:12, fontSize:15.5, fontWeight:800,
              cursor:'pointer', letterSpacing:'-0.01em',
              boxShadow:'0 6px 20px rgba(0,0,0,0.2)', fontFamily:"'Inter',sans-serif",
              transition:'all .2s',
            }}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 10px 28px rgba(0,0,0,0.25)'}}
            onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 6px 20px rgba(0,0,0,0.2)'}}>
              🔍 Ish qidirish <span style={{ fontWeight:400, opacity:.65 }}>[Find work]</span>
            </button>
            <button onClick={()=>onNavigate('jobs')} style={{
              background:'rgba(255,255,255,0.1)',
              border:'2px solid rgba(255,255,255,0.35)',
              color:COLORS.white, padding:'16px 36px', borderRadius:12,
              fontSize:15.5, fontWeight:800, cursor:'pointer',
              backdropFilter:'blur(8px)', fontFamily:"'Inter',sans-serif",
              transition:'all .2s',
            }}
            onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.18)'}
            onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
              📋 Ish e'lon qilish <span style={{ fontWeight:400, opacity:.65 }}>[Post a job]</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <StatsBar/>

      {/* ── Features ── */}
      <section style={{ padding:'88px 32px', maxWidth:1120, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <h2 style={{ margin:'0 0 16px', fontSize:38, fontWeight:900, color:COLORS.text, letterSpacing:'-0.04em' }}>
            Nima uchun TrustFlow?
          </h2>
          <p style={{ margin:0, fontSize:16, color:COLORS.textMuted, lineHeight:1.75, maxWidth:500, marginLeft:'auto', marginRight:'auto' }}>
            Har bir ish joyi tekshiriladi. Har bir shikoyat muhofaza qilinadi.<br/>
            <span style={{ color:COLORS.textLight }}>[Every job verified. Every report protected.]</span>
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
          <FeatureCard
            icon={<CheckCircleIcon size={26} color={COLORS.teal}/>}
            title="Tasdiqlangan profillar [Verified profiles]"
            desc="Har bir kompaniya va xodim OneID orqali real vaqtda tekshiriladi. Soxta profillar tizimdan avtomatik bloklanadi."
          />
          <FeatureCard
            icon={<ChartLineIcon size={26} color={COLORS.teal}/>}
            title="AI anomaliya aniqlash [AI anomaly detection]"
            desc="Sun'iy intellekt maosh farqlari, ghost xodimlar va shubhali yollash naqshlarini real vaqtda kuzatib boradi."
          />
          <FeatureCard
            icon={<ShieldIcon size={26} color={COLORS.teal}/>}
            title="Anonim shikoyat [Anonymous reporting]"
            desc="Hech qanday shaxsiy ma'lumot saqlanmasdan korrupsiya va qonunbuzarliklar haqida xabar bering."
          />
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ background:COLORS.bgAlt, padding:'80px 32px' }}>
        <div style={{ maxWidth:1120, margin:'0 auto' }}>
          <h2 style={{ textAlign:'center', margin:'0 0 52px', fontSize:38, fontWeight:900, color:COLORS.text, letterSpacing:'-0.04em' }}>
            Qanday ishlaydi?
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', background:COLORS.white, borderRadius:16, overflow:'hidden', border:`1px solid ${COLORS.border}`, boxShadow:'0 2px 12px rgba(15,118,110,0.07)' }}>
            {[
              { n:'01', t:'OneID orqali kirish', d:"O'zbekiston raqamli identifikatsiya tizimi orqali autentifikatsiyadan o'ting. Shaxsiyatingiz davlat tomonidan tasdiqlangan." },
              { n:'02', t:"Ish qidiring yoki e'lon bering", d:"AI tomonidan tekshirilgan, xavfsizlik ko'rsatkichi bilan belgilangan minglab vakansiyalarni ko'ring." },
              { n:'03', t:'Shikoyat yuboring', d:"Shubhali holatni anonim tarzda xabar qiling. Sizning ma'lumotingiz hech qachon oshkor qilinmaydi." },
            ].map((s,i)=>(
              <div key={i} style={{ padding:'40px 36px', borderRight: i<2 ? `1px solid ${COLORS.border}` : 'none' }}>
                <div style={{ fontSize:52, fontWeight:900, color:COLORS.tealBg, lineHeight:1, marginBottom:18, letterSpacing:'-0.04em' }}>{s.n}</div>
                <h3 style={{ margin:'0 0 12px', fontSize:17, fontWeight:700, color:COLORS.text }}>{s.t}</h3>
                <p style={{ margin:0, fontSize:14, color:COLORS.textMuted, lineHeight:1.75 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background:`linear-gradient(150deg, ${COLORS.teal} 0%, ${COLORS.tealDark} 100%)`,
        padding:'72px 32px', textAlign:'center',
      }}>
        <h2 style={{ margin:'0 0 14px', fontSize:38, fontWeight:900, color:COLORS.white, letterSpacing:'-0.04em' }}>
          Bugun boshlang
        </h2>
        <p style={{ margin:'0 0 36px', fontSize:16, color:'rgba(255,255,255,0.65)' }}>
          284,000+ foydalanuvchiga qo'shiling
        </p>
        <button onClick={()=>onNavigate('dashboard')} style={{
          background:COLORS.amber, border:'none', color:COLORS.white,
          padding:'16px 44px', borderRadius:12, fontSize:16, fontWeight:800,
          cursor:'pointer', fontFamily:"'Inter',sans-serif",
          boxShadow:'0 6px 24px rgba(217,119,6,0.5)',
          transition:'all .2s',
        }}
        onMouseEnter={e=>e.currentTarget.style.boxShadow='0 10px 32px rgba(217,119,6,0.6)'}
        onMouseLeave={e=>e.currentTarget.style.boxShadow='0 6px 24px rgba(217,119,6,0.5)'}>
          Hoziroq ro'yxatdan o'tish [Get started now]
        </button>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        background:COLORS.darkSurface, color:COLORS.darkMuted,
        padding:'32px 40px', display:'flex', alignItems:'center', justifyContent:'space-between',
        fontFamily:"'Inter',sans-serif", flexWrap:'wrap', gap:16,
      }}>
        <Logo dark/>
        <span style={{ fontSize:12 }}>© 2026 TrustFlow · O'zbekiston Mehnat Vazirligi hamkorligi</span>
        <div style={{ display:'flex', gap:20, fontSize:12 }}>
          <span style={{ cursor:'pointer' }}>Maxfiylik siyosati</span>
          <span style={{ cursor:'pointer' }}>Foydalanish shartlari</span>
          <span style={{ cursor:'pointer' }}>Aloqa</span>
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, { LandingPage });
