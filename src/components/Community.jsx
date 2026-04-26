import React from 'react';
import { COLORS, SearchIcon } from './Shared';

const COMMUNITY_POSTS = [
  { id:1, author:"Sardor_K", avatar:"S", time:"2 soat oldin", tags:["#Maosh","#Savol"],
    title:"Toshkentda Frontend Developer uchun o'rtacha maosh qancha?",
    body:"Salom! 3 yillik tajribam bor React bo'yicha. Hozir 12M olaman, lekin boshqa kompaniyalarda qancha berishini bilmoqchiman. Uzcard va Payme kabi kompaniyalar qancha taklif qiladi? Tajribangizni ulashing!",
    upvotes:34, comments:12, awards:2 },
  { id:2, author:"Nilufar_R", avatar:"N", time:"5 soat oldin", tags:["#Yollash","#Tajriba"],
    title:"Intervyuda so'raladigan eng ko'p savollar — mening tajribam",
    body:"Oxirgi 2 oyda 8 ta intervyudan o'tdim. Eng ko'p so'raladigan savollar: 1) O'zingiz haqingizda gapirib bering, 2) Nima uchun oldingi ishdan ketdingiz, 3) 5 yildan keyin o'zingizni qayerda ko'rasiz...",
    upvotes:67, comments:23, awards:5 },
  { id:3, author:"Bekzod_IT", avatar:"B", time:"1 kun oldin", tags:["#Kompaniya","#Ogohlantirish"],
    title:"Oltin Yort Qurilish — ehtiyot bo'ling!",
    body:"Bu kompaniyada 6 oy ishladim. Maosh har doim kech beriladi, ba'zan umuman berilmaydi. Mehnat shartnomasi rasmiy emas. TrustFlow orqali shikoyat qildim, tekshirilmoqda. Boshqalar ham shu kompaniyada ishlaganmi?",
    upvotes:89, comments:45, awards:8 },
  { id:4, author:"Kamola_UZ", avatar:"K", time:"2 kun oldin", tags:["#Tajriba","#Maslahat"],
    title:"OneID bilan ro'yxatdan o'tish qanday ishlaydi?",
    body:"Yangi foydalanuvchilar uchun: OneID tugmasini bosasiz, shaxsiy ma'lumotlaringiz avtomatik to'ldiriladi. Pasport, diplom, ish tajribasi — hammasi bir joyda. Juda qulay!",
    upvotes:23, comments:8, awards:1 },
  { id:5, author:"Alisher_Dev", avatar:"A", time:"3 kun oldin", tags:["#Maosh","#Kompaniya"],
    title:"IT sohada eng ko'p maosh beradigan kompaniyalar 2026",
    body:"O'z tadqiqotim natijasida top 5 kompaniya: 1) EPAM (masofaviy), 2) Uzcard, 3) Payme, 4) Click, 5) Humans.uz. Senior pozitsiyada 25-40M orasida. Junior uchun 8-15M. Bu ma'lumot sizga mos keladimi?",
    upvotes:112, comments:67, awards:12 },
];

const TRENDING_TAGS = ["#Yollash","#Maosh","#Kompaniya","#Salomat","#Tajriba","#Maslahat","#Remote","#Startup"];

function PostCard({ post, onClick }) {
  const [voted, setVoted] = React.useState(0);
  const [hov, setHov] = React.useState(false);
  const votes = post.upvotes + voted;

  return (
    <div onClick={onClick}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        background:COLORS.white, borderRadius:12, border:`1.5px solid ${hov ? COLORS.tealBorder : COLORS.border}`,
        padding:'18px 22px', cursor:'pointer', transition:'all .15s',
        boxShadow: hov ? '0 4px 14px rgba(15,118,110,0.08)' : 'none',
        display:'flex', gap:16,
      }}>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:2, flexShrink:0 }}
        onClick={e=>e.stopPropagation()}>
        <button onClick={()=>setVoted(v=>v===1?0:1)} style={{
          background:'transparent', border:'none', cursor:'pointer', padding:2,
          color: voted===1 ? COLORS.teal : COLORS.textLight, fontSize:16, lineHeight:1,
        }}>▲</button>
        <span style={{ fontSize:14, fontWeight:800, color: voted!==0 ? COLORS.teal : COLORS.textMid }}>{votes}</span>
        <button onClick={()=>setVoted(v=>v===-1?0:-1)} style={{
          background:'transparent', border:'none', cursor:'pointer', padding:2,
          color: voted===-1 ? COLORS.red : COLORS.textLight, fontSize:16, lineHeight:1,
        }}>▼</button>
      </div>

      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
          <div style={{
            width:26, height:26, borderRadius:'50%', background:COLORS.tealBg,
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:11, fontWeight:700, color:COLORS.teal, flexShrink:0,
          }}>{post.avatar}</div>
          <span style={{ fontSize:12, fontWeight:600, color:COLORS.textMid }}>{post.author}</span>
          <span style={{ fontSize:11, color:COLORS.textLight }}>{post.time}</span>
          {post.awards > 0 && (
            <span style={{ fontSize:11, color:COLORS.amber, fontWeight:600, display:'flex', alignItems:'center', gap:3 }}>
              🏆 {post.awards}
            </span>
          )}
        </div>
        <h3 style={{ margin:'0 0 6px', fontSize:16, fontWeight:700, color:COLORS.text, lineHeight:1.35 }}>{post.title}</h3>
        <p style={{ margin:'0 0 10px', fontSize:13, color:COLORS.textMuted, lineHeight:1.65,
          overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical',
        }}>{post.body}</p>
        <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
          {post.tags.map(t=>(
            <span key={t} style={{ background:COLORS.bgAlt, color:COLORS.teal, padding:'2px 9px', borderRadius:6, fontSize:11.5, fontWeight:500 }}>{t}</span>
          ))}
          <span style={{ fontSize:12, color:COLORS.textLight, marginLeft:6, display:'flex', alignItems:'center', gap:4 }}>
            💬 {post.comments} ta izoh
          </span>
        </div>
      </div>
    </div>
  );
}

const SAMPLE_COMMENTS = [
  { author:"Javlon_M", avatar:"J", time:"1 soat oldin", text:"Uzcard hozir 20-28M taklif qilmoqda senior pozitsiya uchun.", votes:8, replies:[
    { author:"Sardor_K", avatar:"S", time:"45 min oldin", text:"Rahmat, foydali ma'lumot! Remote imkoniyat bormi?", votes:3 },
  ]},
  { author:"Diyor_B", avatar:"D", time:"3 soat oldin", text:"Payme 15-22M orasida. Lekin stack muhim — React bilsangiz ko'proq beradi.", votes:12, replies:[] },
  { author:"Madina_A", avatar:"M", time:"5 soat oldin", text:"EPAM remote ishlash imkonini beradi, 30-45M gacha. Lekin ingliz tili C1 bo'lishi kerak.", votes:15, replies:[
    { author:"Bekzod_IT", avatar:"B", time:"4 soat oldin", text:"C1 bo'lmasa, B2 ham qabul qilishadi ba'zan. Sinovdan o'tish kerak.", votes:5 },
  ]},
];

function CommentItem({ comment, depth=0 }) {
  const [voted, setVoted] = React.useState(0);
  const [replying, setReplying] = React.useState(false);
  const [replyText, setReplyText] = React.useState('');

  return (
    <div style={{ marginLeft: depth * 32, marginBottom:12 }}>
      <div style={{
        background: depth > 0 ? COLORS.bgAlt : COLORS.white, borderRadius:10,
        padding:'12px 16px', border:`1px solid ${depth > 0 ? 'transparent' : COLORS.border}`,
        borderLeft: depth > 0 ? `3px solid ${COLORS.tealBorder}` : undefined,
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
          <div style={{
            width:24, height:24, borderRadius:'50%', background:COLORS.tealBg,
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:10, fontWeight:700, color:COLORS.teal,
          }}>{comment.avatar}</div>
          <span style={{ fontSize:12, fontWeight:600, color:COLORS.textMid }}>{comment.author}</span>
          <span style={{ fontSize:11, color:COLORS.textLight }}>{comment.time}</span>
        </div>
        <p style={{ margin:'0 0 8px', fontSize:13.5, color:COLORS.text, lineHeight:1.65 }}>{comment.text}</p>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ display:'flex', alignItems:'center', gap:4 }}>
            <button onClick={()=>setVoted(v=>v===1?0:1)} style={{
              background:'transparent', border:'none', cursor:'pointer', padding:1,
              color: voted===1 ? COLORS.teal : COLORS.textLight, fontSize:13,
            }}>▲</button>
            <span style={{ fontSize:12, fontWeight:700, color: voted!==0 ? COLORS.teal : COLORS.textMid }}>
              {comment.votes + voted}
            </span>
            <button onClick={()=>setVoted(v=>v===-1?0:-1)} style={{
              background:'transparent', border:'none', cursor:'pointer', padding:1,
              color: voted===-1 ? COLORS.red : COLORS.textLight, fontSize:13,
            }}>▼</button>
          </div>
          {depth === 0 && (
            <button onClick={()=>setReplying(r=>!r)} style={{
              background:'transparent', border:'none', padding:'2px 8px',
              color:COLORS.textMuted, fontSize:12, cursor:'pointer', fontFamily:"'Inter',sans-serif",
            }}>💬 Javob berish</button>
          )}
          <button style={{
            background:'transparent', border:'none', padding:'2px 8px',
            color:COLORS.textLight, fontSize:12, cursor:'pointer', fontFamily:"'Inter',sans-serif",
          }}>⋯</button>
        </div>
        {replying && (
          <div style={{ marginTop:10, display:'flex', gap:8 }}>
            <input value={replyText} onChange={e=>setReplyText(e.target.value)}
              placeholder="Javob yozing..."
              style={{
                flex:1, border:`1.5px solid ${COLORS.border}`, borderRadius:8,
                padding:'8px 12px', fontSize:13, fontFamily:"'Inter',sans-serif", outline:'none',
              }}/>
            <button onClick={()=>{setReplying(false);setReplyText('');}} style={{
              padding:'8px 16px', borderRadius:8, border:'none', background:COLORS.teal,
              color:'#fff', fontSize:12, fontWeight:600, cursor:'pointer', fontFamily:"'Inter',sans-serif",
            }}>Jo'natish</button>
          </div>
        )}
      </div>
      {comment.replies && comment.replies.map((r,i)=>(
        <CommentItem key={i} comment={r} depth={depth+1}/>
      ))}
    </div>
  );
}

function SinglePostView({ post, onBack }) {
  const [newComment, setNewComment] = React.useState('');

  return (
    <div>
      <button onClick={onBack} style={{
        background:'transparent', border:'none', color:COLORS.teal, fontSize:13,
        fontWeight:600, cursor:'pointer', marginBottom:16, padding:0, fontFamily:"'Inter',sans-serif",
      }}>← Orqaga [Back to feed]</button>

      <div style={{
        background:COLORS.white, borderRadius:13, border:`1px solid ${COLORS.border}`,
        padding:'24px 28px', marginBottom:20,
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
          <div style={{
            width:36, height:36, borderRadius:'50%', background:COLORS.tealBg,
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:14, fontWeight:700, color:COLORS.teal,
          }}>{post.avatar}</div>
          <div>
            <span style={{ fontSize:14, fontWeight:600, color:COLORS.text }}>{post.author}</span>
            <span style={{ fontSize:12, color:COLORS.textLight, marginLeft:8 }}>{post.time}</span>
          </div>
        </div>
        <h2 style={{ margin:'0 0 12px', fontSize:20, fontWeight:800, color:COLORS.text, lineHeight:1.35 }}>{post.title}</h2>
        <p style={{ margin:'0 0 16px', fontSize:14.5, color:COLORS.textMid, lineHeight:1.75 }}>{post.body}</p>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {post.tags.map(t=>(
            <span key={t} style={{ background:COLORS.tealBg, color:COLORS.teal, padding:'3px 10px', borderRadius:6, fontSize:12, fontWeight:500 }}>{t}</span>
          ))}
        </div>
      </div>

      <h3 style={{ margin:'0 0 14px', fontSize:16, fontWeight:700, color:COLORS.text }}>
        Izohlar [Comments] ({SAMPLE_COMMENTS.length})
      </h3>
      {SAMPLE_COMMENTS.map((c,i)=><CommentItem key={i} comment={c}/>)}

      <div style={{
        background:COLORS.white, borderRadius:12, border:`1px solid ${COLORS.border}`,
        padding:'16px 20px', marginTop:16,
      }}>
        <textarea value={newComment} onChange={e=>setNewComment(e.target.value)}
          placeholder="Izoh qoldirish [Add a comment]..."
          rows={3} style={{
            width:'100%', boxSizing:'border-box', border:`1.5px solid ${COLORS.border}`,
            borderRadius:8, padding:'10px 14px', fontSize:14, resize:'none',
            fontFamily:"'Inter',sans-serif", outline:'none', marginBottom:10,
          }}/>
        <button style={{
          padding:'10px 24px', borderRadius:8, border:'none', background:COLORS.teal,
          color:'#fff', fontSize:14, fontWeight:600, cursor:'pointer', fontFamily:"'Inter',sans-serif",
        }}>Jo'natish [Post]</button>
      </div>
    </div>
  );
}

export function CommunityPage() {
  const [selectedPost, setSelectedPost] = React.useState(null);
  const [q, setQ] = React.useState('');
  const [subscribed, setSubscribed] = React.useState({});

  const filtered = COMMUNITY_POSTS.filter(p=>
    p.title.toLowerCase().includes(q.toLowerCase()) || p.body.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div style={{ display:'flex', minHeight:'calc(100vh - 62px)', background:COLORS.bg, fontFamily:"'Inter',sans-serif" }} className="side-layout">

      <aside style={{ width:240, flexShrink:0, background:COLORS.white, borderRight:`1px solid ${COLORS.border}`, padding:'24px 18px' }}>
        <button style={{
          width:'100%', padding:'12px', borderRadius:10, border:'none',
          background:COLORS.teal, color:'#fff', fontSize:14, fontWeight:700,
          cursor:'pointer', fontFamily:"'Inter',sans-serif", marginBottom:22,
        }}>+ Yangi post [New post]</button>

        <div style={{ fontSize:12, fontWeight:700, color:COLORS.textLight, textTransform:'uppercase', letterSpacing:'.05em', marginBottom:12 }}>
          Trendlar [Trending]
        </div>
        {TRENDING_TAGS.map(tag=>(
          <div key={tag} style={{
            display:'flex', justifyContent:'space-between', alignItems:'center',
            padding:'8px 0', borderBottom:`1px solid ${COLORS.borderLight}`,
          }}>
            <span style={{ fontSize:13, fontWeight:500, color:COLORS.teal }}>{tag}</span>
            <button onClick={()=>setSubscribed(s=>({...s,[tag]:!s[tag]}))} style={{
              background: subscribed[tag] ? COLORS.tealBg : 'transparent',
              border:`1px solid ${subscribed[tag] ? COLORS.teal : COLORS.border}`,
              color: subscribed[tag] ? COLORS.teal : COLORS.textLight,
              padding:'3px 8px', borderRadius:6, fontSize:10, cursor:'pointer',
              fontFamily:"'Inter',sans-serif", fontWeight:600,
            }}>{subscribed[tag] ? '✓' : '+'}</button>
          </div>
        ))}

        <div style={{ marginTop:22, background:COLORS.bgAlt, borderRadius:10, padding:'14px 16px' }}>
          <div style={{ fontSize:12, fontWeight:600, color:COLORS.textMid, marginBottom:6 }}>Jamiyat statistikasi</div>
          <div style={{ fontSize:11, color:COLORS.textMuted, lineHeight:2 }}>
            👥 12,450 a'zo<br/>
            📝 3,240 post<br/>
            💬 28,900 izoh
          </div>
        </div>
      </aside>

      <main style={{ flex:1, padding:'32px 36px', overflowY:'auto' }}>
        <div style={{ maxWidth:720 }}>
          {selectedPost ? (
            <SinglePostView post={selectedPost} onBack={()=>setSelectedPost(null)}/>
          ) : (
            <>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:22 }}>
                <h1 style={{ margin:0, fontSize:24, fontWeight:800, color:COLORS.text, letterSpacing:'-0.03em' }}>
                  Jamiyat <span style={{ color:COLORS.textLight, fontWeight:400, fontSize:16 }}>[Community]</span>
                </h1>
              </div>

              <div style={{
                display:'flex', alignItems:'center', gap:10, background:COLORS.white,
                border:`1.5px solid ${COLORS.border}`, borderRadius:10, padding:'10px 14px', marginBottom:20,
              }}>
                <SearchIcon/>
                <input value={q} onChange={e=>setQ(e.target.value)}
                  placeholder="Post qidirish [Search posts]..."
                  style={{
                    border:'none', background:'transparent', flex:1, fontSize:14,
                    outline:'none', fontFamily:"'Inter',sans-serif", color:COLORS.text,
                  }}/>
              </div>

              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                {filtered.map(p=>(
                  <PostCard key={p.id} post={p} onClick={()=>setSelectedPost(p)}/>
                ))}
                {filtered.length===0 && (
                  <div style={{ textAlign:'center', padding:48, color:COLORS.textMuted }}>
                    <p>Hech narsa topilmadi</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
