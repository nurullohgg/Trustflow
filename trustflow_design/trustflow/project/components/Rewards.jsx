// Rewards.jsx — Reward history + Redemption shop

const REWARD_HISTORY = [
  { type:"Muvaffaqiyatli ariza",        en:"Successful application",    pts:+100,  date:"22 apr 2026", status:"completed" },
  { type:"Ishga qabul qilindi",         en:"Hired",                     pts:+250,  date:"20 apr 2026", status:"completed" },
  { type:"Tasdiqlangan shikoyat",       en:"Verified corruption report",pts:+300,  date:"18 apr 2026", status:"completed" },
  { type:"Foydali post (10+ ovoz)",     en:"Helpful post (10+ votes)",  pts:+50,   date:"15 apr 2026", status:"completed" },
  { type:"Mukofot ishlatildi: Badge",   en:"Reward redeemed: Badge",    pts:-200,  date:"12 apr 2026", status:"completed" },
  { type:"Muvaffaqiyatli ariza",        en:"Successful application",    pts:+100,  date:"10 apr 2026", status:"completed" },
  { type:"Soxta hisobot (-50)",         en:"False report",              pts:-50,   date:"8 apr 2026",  status:"completed", tooltip:"Tekshiruv natijasida asos topilmadi" },
  { type:"Foydali post (10+ ovoz)",     en:"Helpful post",              pts:+50,   date:"5 apr 2026",  status:"pending"   },
  { type:"Muvaffaqiyatli ariza",        en:"Successful application",    pts:+100,  date:"1 apr 2026",  status:"completed" },
];

const DIGITAL_ITEMS = [
  { id:'avatar',  name:"Maxsus avatar / profil ramkasi",  en:"Custom avatar / profile frame", cost:500,  stock:null, icon:"🎨" },
  { id:'badge',   name:"Profil nishoni",                  en:"Profile badge",                 cost:200,  stock:null, icon:"🏅" },
  { id:'pet',     name:"Virtual hayvon / kolleksiya",     en:"Virtual pet / collectible",     cost:750,  stock:null, icon:"🐾" },
  { id:'theme',   name:"Dark mode premium mavzu",         en:"Dark mode premium theme",       cost:300,  stock:null, icon:"🌙" },
];

const PHYSICAL_ITEMS = [
  { id:'backpack', name:"Brendli ryukzak",       en:"Branded backpack",    cost:1500,  stock:23,  icon:"🎒" },
  { id:'sleeve',   name:"Noutbuk g'ilofi",       en:"Laptop sleeve",      cost:800,   stock:45,  icon:"💼" },
  { id:'case',     name:"Telefon chexoli",        en:"Phone case",         cost:600,   stock:112, icon:"📱" },
  { id:'tshirt',   name:"Futbolka",               en:"T-shirt",            cost:400,   stock:89,  icon:"👕" },
  { id:'tablet',   name:"Planshet (byudjet)",     en:"Tablet (budget)",    cost:5000,  stock:5,   icon:"📟" },
  { id:'laptop',   name:"Noutbuk (boshlang'ich)", en:"Laptop (entry)",     cost:10000, stock:2,   icon:"💻" },
];

function RedeemModal({ item, balance, onClose }) {
  const [step, setStep] = React.useState('confirm');
  const isDigital = !item.stock && item.stock !== 0;
  const canAfford = balance >= item.cost;

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
        {step === 'confirm' ? (
          <>
            <div style={{ textAlign:'center', marginBottom:20 }}>
              <div style={{ fontSize:48, marginBottom:10 }}>{item.icon}</div>
              <h3 style={{ margin:'0 0 6px', fontSize:18, fontWeight:800, color:COLORS.text }}>{item.name}</h3>
              <div style={{ fontSize:22, fontWeight:900, color:COLORS.teal }}>{item.cost.toLocaleString()} ball</div>
            </div>
            {!isDigital && (
              <div style={{ background:COLORS.bgAlt, borderRadius:10, padding:'14px 16px', marginBottom:16 }}>
                <div style={{ fontSize:12, fontWeight:600, color:COLORS.textMid, marginBottom:8 }}>Yetkazib berish manzili [Delivery address]</div>
                <div style={{ fontSize:13, color:COLORS.text }}>Toshkent sh., Yunusobod t., 12-uy, 45-xonadon</div>
                <div style={{ fontSize:11, color:COLORS.textLight, marginTop:6 }}>Taxminiy yetkazish: 5-7 ish kuni</div>
              </div>
            )}
            {isDigital && (
              <div style={{ background:COLORS.greenBg, borderRadius:10, padding:'10px 14px', marginBottom:16, display:'flex', alignItems:'center', gap:8 }}>
                <CheckCircleIcon size={16} color={COLORS.green}/>
                <span style={{ fontSize:13, color:COLORS.green, fontWeight:500 }}>Raqamli sovg'a — darhol yetkaziladi</span>
              </div>
            )}
            {!canAfford && (
              <div style={{ background:COLORS.redBg, borderRadius:10, padding:'10px 14px', marginBottom:16, display:'flex', alignItems:'center', gap:8 }}>
                <AlertIcon size={16} color={COLORS.red}/>
                <span style={{ fontSize:13, color:COLORS.red, fontWeight:500 }}>Balans yetarli emas ({balance.toLocaleString()} / {item.cost.toLocaleString()})</span>
              </div>
            )}
            <div style={{ display:'flex', gap:10 }}>
              <button onClick={onClose} style={{
                flex:1, padding:'12px', borderRadius:10,
                border:`1.5px solid ${COLORS.border}`, background:'transparent',
                color:COLORS.textMid, fontSize:14, cursor:'pointer', fontFamily:"'Inter',sans-serif",
              }}>Bekor</button>
              <button onClick={()=>canAfford&&setStep('done')} style={{
                flex:2, padding:'12px', borderRadius:10, border:'none',
                background: canAfford ? COLORS.teal : COLORS.bgAlt2,
                color: canAfford ? '#fff' : COLORS.textLight,
                fontSize:14, fontWeight:700, cursor: canAfford ? 'pointer' : 'not-allowed',
                fontFamily:"'Inter',sans-serif",
              }}>Sotib olish [Redeem]</button>
            </div>
          </>
        ) : (
          <div style={{ textAlign:'center', padding:'12px 0' }}>
            <div style={{ fontSize:56, marginBottom:14 }}>🎉</div>
            <h3 style={{ margin:'0 0 8px', fontSize:20, fontWeight:800, color:COLORS.text }}>
              {isDigital ? 'Tabriklaymiz!' : 'Buyurtma qabul qilindi!'}
            </h3>
            <p style={{ fontSize:13, color:COLORS.textMuted, marginBottom:20, lineHeight:1.6 }}>
              {isDigital
                ? "Mukofotingiz profilingizga qo'shildi."
                : "Buyurtmangiz 5-7 ish kuni ichida yetkaziladi."}
            </p>
            <button onClick={onClose} style={{
              padding:'10px 36px', borderRadius:10, border:'none', background:COLORS.teal,
              color:'#fff', fontSize:14, fontWeight:600, cursor:'pointer', fontFamily:"'Inter',sans-serif",
            }}>Yopish</button>
          </div>
        )}
      </div>
    </div>
  );
}

function ShopItem({ item, onRedeem }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{
      background:COLORS.white, borderRadius:12, border:`1.5px solid ${hov ? COLORS.tealBorder : COLORS.border}`,
      padding:'20px 18px', transition:'all .15s',
      boxShadow: hov ? '0 8px 20px rgba(15,118,110,0.1)' : 'none',
      transform: hov ? 'translateY(-2px)' : 'none',
      display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center',
    }}>
      <div style={{ fontSize:36, marginBottom:12 }}>{item.icon}</div>
      <div style={{ fontSize:14, fontWeight:700, color:COLORS.text, marginBottom:4, lineHeight:1.3 }}>{item.name}</div>
      <div style={{ fontSize:11, color:COLORS.textLight, marginBottom:10 }}>{item.en}</div>
      <div style={{ fontSize:18, fontWeight:900, color:COLORS.teal, marginBottom:6 }}>{item.cost.toLocaleString()} ball</div>
      {item.stock != null && (
        <div style={{ fontSize:11, color: item.stock < 10 ? COLORS.red : COLORS.textMuted, marginBottom:10 }}>
          {item.stock < 10 ? `Faqat ${item.stock} ta qoldi!` : `${item.stock} ta mavjud`}
        </div>
      )}
      <button onClick={()=>onRedeem(item)} style={{
        width:'100%', padding:'9px', borderRadius:8, border:'none',
        background:COLORS.teal, color:'#fff', fontSize:13, fontWeight:600,
        cursor:'pointer', fontFamily:"'Inter',sans-serif",
      }}>Sotib olish [Redeem]</button>
    </div>
  );
}

function RewardsPage() {
  const [tab, setTab] = React.useState('history');
  const [shopTab, setShopTab] = React.useState('digital');
  const [filter, setFilter] = React.useState('all');
  const [redeemItem, setRedeemItem] = React.useState(null);
  const balance = 4250;
  const [hovTip, setHovTip] = React.useState(null);

  const filtered = filter === 'all' ? REWARD_HISTORY : REWARD_HISTORY.filter(r => filter === 'earned' ? r.pts > 0 : r.pts < 0);

  return (
    <div style={{ display:'flex', minHeight:'calc(100vh - 62px)', background:COLORS.bg, fontFamily:"'Inter',sans-serif" }}>

      {/* Sidebar */}
      <aside style={{ width:264, flexShrink:0, background:COLORS.white, borderRight:`1px solid ${COLORS.border}`, padding:'24px 20px' }}>
        {/* Balance card */}
        <div style={{
          background:`linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealDark} 100%)`,
          borderRadius:14, padding:'24px 20px', color:'#fff', marginBottom:22, textAlign:'center',
        }}>
          <div style={{ fontSize:11, opacity:.7, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:8 }}>
            Mukofot balansi [Reward balance]
          </div>
          <div style={{ fontSize:40, fontWeight:900, letterSpacing:'-0.04em', lineHeight:1 }}>
            {balance.toLocaleString()}
          </div>
          <div style={{ fontSize:13, opacity:.7, marginTop:4 }}>ball [points]</div>
          <div style={{ height:4, background:'rgba(255,255,255,0.2)', borderRadius:4, marginTop:16 }}>
            <div style={{ height:'100%', width:'42.5%', background:COLORS.amberLight, borderRadius:4 }}/>
          </div>
          <div style={{ fontSize:11, opacity:.6, marginTop:6 }}>Keyingi daraja: 10,000 ball</div>
        </div>

        {/* Tabs */}
        {[['history','📊','Tarix [History]'],['shop','🛍','Do\'kon [Shop]']].map(([id,ic,l])=>(
          <button key={id} onClick={()=>setTab(id)} style={{
            width:'100%', padding:'11px 16px', marginBottom:6, borderRadius:10,
            background: tab===id ? COLORS.tealBg : 'transparent',
            border: tab===id ? `1.5px solid ${COLORS.tealBorder}` : '1.5px solid transparent',
            color: tab===id ? COLORS.teal : COLORS.textMuted,
            fontSize:14, fontWeight: tab===id ? 600 : 400,
            cursor:'pointer', fontFamily:"'Inter',sans-serif", textAlign:'left',
            display:'flex', alignItems:'center', gap:10,
          }}>{ic} {l}</button>
        ))}

        {/* Quick stats */}
        <div style={{ marginTop:20, padding:'16px', background:COLORS.bgAlt, borderRadius:10 }}>
          <div style={{ fontSize:11, fontWeight:600, color:COLORS.textLight, textTransform:'uppercase', letterSpacing:'.05em', marginBottom:10 }}>
            Bu oyda [This month]
          </div>
          {[['Ishlab topilgan','+550 ball',COLORS.green],['Ishlatilgan','-200 ball',COLORS.red]].map(([l,v,c])=>(
            <div key={l} style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
              <span style={{ fontSize:12, color:COLORS.textMuted }}>{l}</span>
              <span style={{ fontSize:12, fontWeight:700, color:c }}>{v}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex:1, padding:'32px 36px', overflowY:'auto' }}>
        <div style={{ maxWidth:860 }}>

          {tab === 'history' && (
            <>
              <h1 style={{ margin:'0 0 20px', fontSize:24, fontWeight:800, color:COLORS.text, letterSpacing:'-0.03em' }}>
                Mukofotlar tarixi <span style={{ color:COLORS.textLight, fontWeight:400, fontSize:16 }}>[Rewards History]</span>
              </h1>

              <div style={{ display:'flex', gap:6, marginBottom:20 }}>
                {[['all','Barchasi'],['earned','Ishlab topilgan (+)'],['spent','Ishlatilgan (-)']].map(([id,l])=>(
                  <button key={id} onClick={()=>setFilter(id)} style={{
                    padding:'8px 14px', borderRadius:8, fontSize:12.5, fontWeight:500,
                    border:`1.5px solid ${filter===id ? COLORS.teal : COLORS.border}`,
                    background: filter===id ? COLORS.tealBg : COLORS.white,
                    color: filter===id ? COLORS.teal : COLORS.textMuted,
                    cursor:'pointer', fontFamily:"'Inter',sans-serif",
                  }}>{l}</button>
                ))}
              </div>

              <div style={{ background:COLORS.white, borderRadius:13, border:`1px solid ${COLORS.border}`, overflow:'hidden' }}>
                {filtered.map((r,i)=>(
                  <div key={i}
                    onMouseEnter={()=>r.tooltip&&setHovTip(i)}
                    onMouseLeave={()=>setHovTip(null)}
                    style={{
                      padding:'14px 22px', display:'flex', justifyContent:'space-between', alignItems:'center',
                      borderBottom: i<filtered.length-1 ? `1px solid ${COLORS.borderLight}` : 'none',
                      transition:'background .12s', position:'relative',
                    }}
                    onMouseOver={e=>e.currentTarget.style.background=COLORS.bgAlt}
                    onMouseOut={e=>e.currentTarget.style.background='transparent'}>
                    <div style={{ display:'flex', alignItems:'center', gap:14 }}>
                      <div style={{
                        width:8, height:8, borderRadius:'50%',
                        background: r.pts > 0 ? COLORS.green : COLORS.red, flexShrink:0,
                      }}/>
                      <div>
                        <div style={{ fontSize:14, fontWeight:600, color:COLORS.text }}>{r.type}</div>
                        <div style={{ fontSize:11, color:COLORS.textLight }}>{r.en}</div>
                      </div>
                    </div>
                    <div style={{ display:'flex', alignItems:'center', gap:20 }}>
                      <span style={{ fontSize:12, color:COLORS.textLight }}>{r.date}</span>
                      <span style={{
                        fontSize:11, padding:'3px 10px', borderRadius:6,
                        background: r.status==='completed' ? COLORS.greenBg : COLORS.amberBg,
                        color: r.status==='completed' ? COLORS.green : COLORS.amber,
                        fontWeight:600,
                      }}>{r.status==='completed' ? 'Bajarildi' : 'Kutilmoqda'}</span>
                      <span style={{
                        fontSize:15, fontWeight:800, minWidth:65, textAlign:'right',
                        color: r.pts > 0 ? COLORS.green : COLORS.red,
                      }}>{r.pts > 0 ? '+' : ''}{r.pts}</span>
                    </div>

                    {/* Tooltip */}
                    {hovTip === i && r.tooltip && (
                      <div style={{
                        position:'absolute', top:-8, right:90, background:'#0f172a', color:'#f8fafc',
                        padding:'8px 12px', borderRadius:8, fontSize:12, maxWidth:220, zIndex:10,
                        boxShadow:'0 8px 24px rgba(0,0,0,0.3)', pointerEvents:'none',
                      }}>
                        {r.tooltip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {tab === 'shop' && (
            <>
              <h1 style={{ margin:'0 0 20px', fontSize:24, fontWeight:800, color:COLORS.text, letterSpacing:'-0.03em' }}>
                Mukofotlar do'koni <span style={{ color:COLORS.textLight, fontWeight:400, fontSize:16 }}>[Rewards Shop]</span>
              </h1>

              <div style={{ display:'flex', gap:6, marginBottom:24 }}>
                {[['digital','🎁 Raqamli sovg\'alar [Digital]'],['physical','📦 Jismoniy tovarlar [Physical]']].map(([id,l])=>(
                  <button key={id} onClick={()=>setShopTab(id)} style={{
                    padding:'9px 18px', borderRadius:9, fontSize:13, fontWeight:500,
                    border:`1.5px solid ${shopTab===id ? COLORS.teal : COLORS.border}`,
                    background: shopTab===id ? COLORS.tealBg : COLORS.white,
                    color: shopTab===id ? COLORS.teal : COLORS.textMuted,
                    cursor:'pointer', fontFamily:"'Inter',sans-serif",
                  }}>{l}</button>
                ))}
              </div>

              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
                {(shopTab==='digital' ? DIGITAL_ITEMS : PHYSICAL_ITEMS).map(item=>(
                  <ShopItem key={item.id} item={item} onRedeem={setRedeemItem}/>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      {redeemItem && <RedeemModal item={redeemItem} balance={balance} onClose={()=>setRedeemItem(null)}/>}
    </div>
  );
}

Object.assign(window, { RewardsPage });
