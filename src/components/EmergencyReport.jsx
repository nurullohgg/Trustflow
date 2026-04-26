import React from 'react';
import { COLORS, CheckCircleIcon, GPSIcon, MicIcon, VideoIcon } from './Shared';

export function EmergencyReportModal({ onClose }) {
  const [step, setStep] = React.useState('verify');
  const [description, setDescription] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [recordingType, setRecordingType] = React.useState(null);
  const [isRecording, setIsRecording] = React.useState(false);
  const [recordingTime, setRecordingTime] = React.useState(0);
  const [shareContact, setShareContact] = React.useState(false);
  const [phone, setPhone] = React.useState('+998 ');
  const [files, setFiles] = React.useState([]);
  const [code] = React.useState(()=>'REPORT-'+new Date().getFullYear()+'-'+Math.random().toString(36).slice(2,6).toUpperCase()+'K');

  React.useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => setRecordingTime(t => t + 1), 100);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (ms) => {
    const secs = Math.floor(ms / 1000);
    const mins = Math.floor(secs / 60);
    return `${mins}:${(secs % 60).toString().padStart(2, '0')}`;
  };

  const getGPS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation(`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`),
        () => setLocation('GPS mavjud emas')
      );
    }
  };

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files || []);
    if (files.length + newFiles.length <= 3) {
      setFiles(f => [...f, ...newFiles.map(f => ({ file:f, name:f.name, size:f.size }))]);
    }
  };

  return (
    <div onClick={e=>e.target===e.currentTarget&&onClose()} style={{
      position:'fixed', inset:0, background:'rgba(10,22,40,0.65)',
      zIndex:2000, display:'flex', alignItems:'center', justifyContent:'center',
      backdropFilter:'blur(5px)', fontFamily:"'Inter',sans-serif",
    }}>
      <div style={{
        background:COLORS.white, borderRadius:18, padding:'40px', width:540,
        maxWidth:'92vw', maxHeight:'90vh', overflowY:'auto',
        boxShadow:'0 32px 64px rgba(0,0,0,0.2)', animation:'slideUp .25s ease',
      }}>

        {step === 'verify' && (
          <>
            <div style={{ textAlign:'center', marginBottom:32 }}>
              <div style={{
                width:72, height:72, borderRadius:'50%', background:COLORS.redBg,
                display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px',
              }}>
                <span style={{ fontSize:40 }}>🚨</span>
              </div>
              <h2 style={{ margin:'0 0 10px', fontSize:22, fontWeight:800, color:COLORS.text }}>
                Favqulodda hisobot
              </h2>
              <p style={{ margin:0, fontSize:14, color:COLORS.textMuted, lineHeight:1.6 }}>
                Agar siz korruptsiyaga guvohlik bo'lsangiz, uni darhol xabar bering.
              </p>
            </div>

            <div style={{
              background:COLORS.greenBg, border:`1px solid ${COLORS.greenLight}`,
              borderRadius:10, padding:'12px 16px', marginBottom:24,
              display:'flex', alignItems:'center', gap:10,
            }}>
              <CheckCircleIcon size={20} color={COLORS.green}/>
              <div>
                <div style={{ fontSize:13, fontWeight:600, color:COLORS.green }}>OneID bilan tasdiqlandi ✓</div>
                <div style={{ fontSize:12, color:COLORS.textMuted }}>Sizning shaxsiyatingiz to'liq himoyalangan</div>
              </div>
            </div>

            <div style={{
              background:COLORS.tealBg, borderRadius:12, padding:'16px',
              marginBottom:24, display:'flex', gap:12,
            }}>
              <span style={{ fontSize:24, flexShrink:0 }}>🔒</span>
              <div style={{ fontSize:12, color:COLORS.teal, lineHeight:1.6 }}>
                <strong>Maxfiylik kafolatlari:</strong> Sizning ma'lumotlaringiz shifrlangan, IP manzil yoki lokatsiya asosiy serverda saqlanmaydi.
              </div>
            </div>

            <button onClick={()=>setStep('form')} style={{
              width:'100%', padding:'14px', borderRadius:10, border:'none',
              background:COLORS.teal, color:COLORS.white, fontSize:15, fontWeight:700,
              cursor:'pointer', fontFamily:"'Inter',sans-serif", marginBottom:8,
            }}>Hisobotni boshlash</button>
            <button onClick={onClose} style={{
              width:'100%', padding:'14px', borderRadius:10, border:`1.5px solid ${COLORS.border}`,
              background:'transparent', color:COLORS.textMid, fontSize:15, fontWeight:600,
              cursor:'pointer', fontFamily:"'Inter',sans-serif",
            }}>Bekor qilish</button>
          </>
        )}

        {step === 'form' && (
          <>
            <h2 style={{ margin:'0 0 24px', fontSize:20, fontWeight:800, color:COLORS.text }}>
              Hodisa bo'yicha ma'lumot
            </h2>

            <div style={{ marginBottom:18 }}>
              <label style={{ display:'block', fontSize:12, fontWeight:700, color:COLORS.textMid, marginBottom:8, textTransform:'uppercase' }}>
                Joylashuv [Location]
              </label>
              <div style={{ display:'flex', gap:8 }}>
                <input type="text" placeholder="Koordinatalar yoki manzil..." value={location} onChange={e=>setLocation(e.target.value)}
                  style={{
                    flex:1, padding:'11px 14px', border:`1.5px solid ${COLORS.border}`, borderRadius:10,
                    fontSize:14, color:COLORS.text, fontFamily:"'Inter',sans-serif", outline:'none',
                  }}/>
                <button onClick={getGPS} style={{
                  padding:'11px 14px', borderRadius:10, border:`1.5px solid ${COLORS.tealBorder}`,
                  background:COLORS.tealBg, color:COLORS.teal, cursor:'pointer', fontSize:13, fontWeight:600,
                  fontFamily:"'Inter',sans-serif", display:'flex', alignItems:'center', gap:4,
                }}>
                  <GPSIcon size={14} color={COLORS.teal}/> GPS
                </button>
              </div>
            </div>

            <div style={{ marginBottom:18 }}>
              <label style={{ display:'block', fontSize:12, fontWeight:700, color:COLORS.textMid, marginBottom:8, textTransform:'uppercase' }}>
                Hodisa tavfsifi (500 belgi max)
              </label>
              <textarea value={description} onChange={e=>setDescription(e.target.value.slice(0,500))}
                placeholder="Nima sodir bo'lganini batafsil tushuntiring..."
                rows={4} style={{
                  width:'100%', boxSizing:'border-box', padding:'12px 14px',
                  border:`1.5px solid ${COLORS.border}`, borderRadius:10, fontSize:13,
                  fontFamily:"'Inter',sans-serif", outline:'none', resize:'vertical',
                }}/>
              <div style={{ fontSize:11, color:COLORS.textLight, marginTop:4 }}>
                {description.length} / 500
              </div>
            </div>

            <div style={{ marginBottom:18 }}>
              <label style={{ display:'block', fontSize:12, fontWeight:700, color:COLORS.textMid, marginBottom:8, textTransform:'uppercase' }}>
                Dalillar [Evidence] — max 3 fayl
              </label>
              <div style={{
                border:`2px dashed ${COLORS.tealBorder}`, borderRadius:10, padding:16,
                textAlign:'center', background:COLORS.tealBg, cursor:'pointer', marginBottom:8,
              }}>
                <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.mp4,.wav,.m4a" onChange={handleFileUpload}
                  style={{ display:'none' }} id="evidence-upload"/>
                <label htmlFor="evidence-upload" style={{ cursor:'pointer', display:'block' }}>
                  <div style={{ fontSize:20, marginBottom:6 }}>📎</div>
                  <div style={{ fontSize:12, fontWeight:600, color:COLORS.teal }}>Fayl yuklash</div>
                </label>
              </div>
              {files.length > 0 && (
                <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                  {files.map((f,i)=>(
                    <div key={i} style={{
                      display:'flex', alignItems:'center', justifyContent:'space-between',
                      background:COLORS.bgAlt, padding:'8px 12px', borderRadius:8, fontSize:12,
                    }}>
                      <span style={{ color:COLORS.textMuted }}>{f.name}</span>
                      <button onClick={()=>setFiles(files.filter((_,j)=>j!==i))} style={{
                        background:'none', border:'none', cursor:'pointer', color:COLORS.red,
                      }}>✕</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ marginBottom:20 }}>
              <label style={{ display:'block', fontSize:12, fontWeight:700, color:COLORS.textMid, marginBottom:8, textTransform:'uppercase' }}>
                Ovoz yoki video yozib olish [Recording]
              </label>
              <div style={{ display:'flex', gap:8 }}>
                {[
                  { id:'audio', label:'🎙 Ovoz yozib olish' },
                  { id:'video', label:'📹 Video yozib olish' },
                ].map(opt=>(
                  <button key={opt.id} onClick={()=>{setRecordingType(opt.id);setStep('recording');}}
                    style={{
                      flex:1, padding:'11px', borderRadius:10, border:`1.5px solid ${COLORS.tealBorder}`,
                      background:COLORS.tealBg, color:COLORS.teal, cursor:'pointer', fontSize:13,
                      fontWeight:600, fontFamily:"'Inter',sans-serif",
                    }}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom:20 }}>
              <label style={{ display:'flex', alignItems:'center', gap:10, cursor:'pointer' }}>
                <input type="checkbox" checked={shareContact} onChange={e=>setShareContact(e.target.checked)}
                  style={{ width:18, height:18, cursor:'pointer' }}/>
                <span style={{ fontSize:13, color:COLORS.text, fontWeight:500 }}>Sorash uchun raqamimni berish</span>
              </label>
              {shareContact && (
                <input type="tel" placeholder="+998 90 123 4567" value={phone} onChange={e=>setPhone(e.target.value)}
                  style={{
                    width:'100%', padding:'11px 14px', marginTop:8, border:`1.5px solid ${COLORS.border}`,
                    borderRadius:10, fontSize:13, fontFamily:"'Inter',sans-serif", outline:'none',
                  }}/>
              )}
            </div>

            <div style={{ display:'flex', gap:10 }}>
              <button onClick={()=>setStep('verify')} style={{
                flex:1, padding:'12px', borderRadius:10, border:`1.5px solid ${COLORS.border}`,
                background:'transparent', color:COLORS.textMid, fontSize:14, cursor:'pointer',
                fontFamily:"'Inter',sans-serif",
              }}>Orqaga</button>
              <button onClick={()=>description.trim()&&setStep('done')} style={{
                flex:1, padding:'12px', borderRadius:10, border:'none',
                background: description.trim() ? COLORS.teal : COLORS.bgAlt2,
                color: description.trim() ? COLORS.white : COLORS.textLight,
                fontSize:14, fontWeight:700, cursor: description.trim() ? 'pointer' : 'not-allowed',
                fontFamily:"'Inter',sans-serif",
              }}>Jo'natish</button>
            </div>
          </>
        )}

        {step === 'recording' && (
          <>
            <div style={{ textAlign:'center', marginBottom:32 }}>
              <div style={{
                width:80, height:80, borderRadius:'50%',
                background: isRecording ? COLORS.redBg : COLORS.tealBg,
                display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px',
              }}>
                <span style={{ fontSize:40 }}>{recordingType === 'audio' ? '🎙' : '📹'}</span>
              </div>
              <h3 style={{ margin:'0 0 8px', fontSize:18, fontWeight:800, color:COLORS.text }}>
                {recordingType === 'audio' ? 'Ovoz yozib olish' : 'Video yozib olish'}
              </h3>
              {isRecording && (
                <div style={{ fontSize:28, fontWeight:800, color:COLORS.red, fontFamily:'monospace', marginTop:12 }}>
                  ● {formatTime(recordingTime)}
                </div>
              )}
            </div>

            <button
              onMouseDown={()=>setIsRecording(true)} onMouseUp={()=>setIsRecording(false)}
              onTouchStart={()=>setIsRecording(true)} onTouchEnd={()=>setIsRecording(false)}
              style={{
                width:'100%', padding:'16px', borderRadius:12, border:'none',
                background: isRecording ? COLORS.red : COLORS.teal, color:COLORS.white,
                fontSize:16, fontWeight:700, cursor:'pointer', marginBottom:16,
                fontFamily:"'Inter',sans-serif", display:'flex', alignItems:'center', justifyContent:'center', gap:8,
              }}>
              {isRecording ? (
                <><span style={{ fontSize:20 }}>●</span> Ushlab turish va gapirish</>
              ) : (
                <>{recordingType === 'audio' ? '🎙' : '📹'} Boshlash</>
              )}
            </button>

            <button onClick={()=>setRecordingTime(0)} style={{
              width:'100%', padding:'12px', borderRadius:10, border:`1.5px solid ${COLORS.border}`,
              background:'transparent', color:COLORS.textMid, fontSize:14, cursor:'pointer',
              marginBottom:16, fontFamily:"'Inter',sans-serif",
            }}>Qayta boshlash (Clear)</button>

            <div style={{ display:'flex', gap:10 }}>
              <button onClick={()=>setStep('form')} style={{
                flex:1, padding:'12px', borderRadius:10, border:`1.5px solid ${COLORS.border}`,
                background:'transparent', color:COLORS.textMid, fontSize:14, cursor:'pointer',
                fontFamily:"'Inter',sans-serif",
              }}>Orqaga</button>
              <button onClick={()=>recordingTime>0&&setStep('done')} style={{
                flex:1, padding:'12px', borderRadius:10, border:'none',
                background: recordingTime>0 ? COLORS.teal : COLORS.bgAlt2,
                color: recordingTime>0 ? COLORS.white : COLORS.textLight,
                fontSize:14, fontWeight:700, cursor: recordingTime>0 ? 'pointer' : 'not-allowed',
                fontFamily:"'Inter',sans-serif",
              }}>Tasdiqla</button>
            </div>
          </>
        )}

        {step === 'done' && (
          <>
            <div style={{ textAlign:'center', marginBottom:32 }}>
              <div style={{
                width:80, height:80, borderRadius:'50%', background:COLORS.greenBg,
                display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px',
              }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="19" stroke={COLORS.green} strokeWidth="2.5"/>
                  <path d="M12 20l6 6 12-12" stroke={COLORS.green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 style={{ margin:'0 0 8px', fontSize:20, fontWeight:800, color:COLORS.text }}>
                Favqulodda hisobot jo'natildi
              </h2>
              <p style={{ margin:0, fontSize:14, color:COLORS.textMuted }}>
                Foydalanuvchi himoyalangan holda tekshirilmoqda
              </p>
            </div>

            <div style={{
              background:COLORS.tealBg, borderRadius:12, padding:'16px', marginBottom:24,
              border:`1px solid ${COLORS.tealBorder}`,
            }}>
              <div style={{ fontSize:11, color:COLORS.textMuted, fontWeight:600, marginBottom:4, textTransform:'uppercase', letterSpacing:'0.05em' }}>Kuzatuv kodi</div>
              <div style={{ fontSize:24, fontWeight:800, color:COLORS.teal, letterSpacing:'0.06em' }}>{code}</div>
              <div style={{ fontSize:11, color:COLORS.textMuted, marginTop:6 }}>Bu kodni saqlang — holat tekshirish uchun</div>
            </div>

            <button onClick={onClose} style={{
              width:'100%', padding:'14px', borderRadius:10, border:'none',
              background:COLORS.teal, color:COLORS.white, fontSize:15, fontWeight:700,
              cursor:'pointer', fontFamily:"'Inter',sans-serif",
            }}>Yopish</button>
          </>
        )}
      </div>
    </div>
  );
}
