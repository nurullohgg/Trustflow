// Profile.jsx — LinkedIn-style profile page (Ish tarixi, Ta'lim, Sertifikatlar, Ko'nikmalar, Erishgan muvaffaqiyatlar, Tavsiyalar)

const PROFILE_DATA = {
  name: "Aziz Jo'rayev",
  title: "Senior Frontend Developer",
  company: "Uzcard MCHJ",
  location: "Toshkent shahri, O'zbekiston",
  photo: "👨‍💼",
  bio: "5+ yillik React va TypeScript tajribasi. Raqamli transformatsiya va foydalanuvchi tajribasiga ixtisoslashgan.",
  workExperience: [
    {
      id: 1,
      company: "Uzcard MCHJ",
      title: "Senior Frontend Developer",
      period: "2023 - Hozir",
      description:
        "React, TypeScript, Next.js asosida katta o'lchamli loyihalarni ishlab chiqish va rahbariyat...",
      current: true,
    },
    {
      id: 2,
      company: "DIM Media Group",
      title: "Frontend Developer",
      period: "2021 - 2023",
      description:
        "Veb-saytlar va mobile app interfeyslarini dizayn va ishlab chiqish.",
    },
    {
      id: 3,
      company: "TechStart LLC",
      title: "Junior Developer",
      period: "2020 - 2021",
      description:
        "HTML, CSS, JavaScript asoslarini o'rganish va biринchi proyektlarni bajarish.",
    },
  ],
  education: [
    {
      id: 1,
      institution: "Tashkent University of Information Technologies",
      degree: "Bachelor",
      field: "Information Technology",
      graduation: "2020",
    },
    {
      id: 2,
      institution: "Code Academy",
      degree: "Certificate",
      field: "Full Stack Web Development",
      graduation: "2019",
    },
  ],
  certificates: [
    {
      id: 1,
      name: "React Advanced Patterns",
      issuer: "Udemy",
      date: "2023",
      link: "#",
    },
    {
      id: 2,
      name: "TypeScript Mastery",
      issuer: "Scrimba",
      date: "2022",
      link: "#",
    },
    {
      id: 3,
      name: "AWS Certified Solutions Architect",
      issuer: "AWS",
      date: "2022",
      link: "#",
    },
  ],
  skills: [
    { name: "React", endorsed: 45 },
    { name: "TypeScript", endorsed: 32 },
    { name: "JavaScript", endorsed: 28 },
    { name: "Next.js", endorsed: 21 },
    { name: "TEAM WORK", endorsed: 19 },
    { name: "Problem Solving", endorsed: 15 },
    { name: "CSS/SCSS", endorsed: 12 },
    { name: "API Design", endorsed: 10 },
  ],
  achievements: [
    {
      id: 1,
      title: "3 yil uzatish",
      desc: "Uzcard loyihasi uchun 3 yillik tasdiqlangan xizmat",
      date: "2026",
      icon: "⭐",
    },
    {
      id: 2,
      title: "Top Contributor",
      desc: "Community forumida eng ko'p yordam beruvchilclardan biri",
      date: "2023",
      icon: "🏆",
    },
    {
      id: 3,
      title: "Project Lead",
      desc: "To'rtt katta loyihani muvaffaqiyatli boshqarish",
      date: "2024",
      icon: "👥",
    },
  ],
  endorsements: [
    {
      id: 1,
      skill: "React",
      endorsedBy: 45,
      people: ["Ali Valiyev", "Maftuna Karimova", "+ 43 boshqasi"],
    },
    {
      id: 2,
      skill: "TypeScript",
      endorsedBy: 32,
      people: ["Alisher Qo'chqov", "Feruza Rakhimova", "+ 30 boshqasi"],
    },
  ],
  recommendations: [
    {
      id: 1,
      author: "Maftuna Karimova",
      role: "Data scientist, DIM Media Group",
      text: "Aziz - o'ta qobiliyatli va mas'ul dasturchi. Uning kamanda yetishmasi va texnik qobiliyati ishning sifatini juda yuksaltiradi.",
      date: "2023",
    },
    {
      id: 2,
      author: "Alisher Qo'chqov",
      role: "CTO, TechStart LLC",
      text: "Yaxshi musobaqachining biri. Tez o'rganadi va muammolarni hal qilishda haddan tashqari innovative.",
      date: "2021",
    },
  ],
};

function EditableSection({ title, children, onEdit, isOwn }) {
  const [editing, setEditing] = React.useState(false);
  return (
    <div
      style={{
        background: COLORS.white,
        borderRadius: 14,
        border: `1px solid ${COLORS.border}`,
        padding: "24px 28px",
        marginBottom: 18,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 18,
            fontWeight: 700,
            color: COLORS.text,
          }}
        >
          {title}
        </h3>
        {isOwn && (
          <button
            onClick={() => setEditing(!editing)}
            style={{
              background: editing ? COLORS.teal : COLORS.bgAlt,
              border: "none",
              width: 32,
              height: 32,
              borderRadius: 8,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              color: editing ? "#fff" : COLORS.textMuted,
              transition: "all .15s",
            }}
          >
            {editing ? "✓" : "✏"}
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

function WorkExperienceItem({ item, isOwn }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        paddingBottom: 16,
        marginBottom: 16,
        borderBottom: `1px solid ${COLORS.borderLight}`,
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: item.current ? COLORS.teal : COLORS.textLight,
          marginTop: 6,
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 4,
          }}
        >
          <div>
            <h4
              style={{
                margin: "0 0 2px",
                fontSize: 15,
                fontWeight: 700,
                color: COLORS.text,
              }}
            >
              {item.title}
            </h4>
            <div style={{ fontSize: 13, color: COLORS.textMuted }}>
              {item.company}
              {item.current && (
                <span
                  style={{
                    marginLeft: 8,
                    color: COLORS.green,
                    fontWeight: 600,
                  }}
                >
                  ✓ Hozir
                </span>
              )}
            </div>
          </div>
          <span style={{ fontSize: 12, color: COLORS.textLight }}>
            {item.period}
          </span>
        </div>
        <p
          style={{
            margin: "8px 0 0",
            fontSize: 13,
            color: COLORS.textMid,
            lineHeight: 1.6,
          }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

function EducationItem({ item }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        paddingBottom: 16,
        marginBottom: 16,
        borderBottom: `1px solid ${COLORS.borderLight}`,
      }}
    >
      <span style={{ fontSize: 24 }}>🎓</span>
      <div style={{ flex: 1 }}>
        <h4
          style={{
            margin: "0 0 2px",
            fontSize: 15,
            fontWeight: 700,
            color: COLORS.text,
          }}
        >
          {item.institution}
        </h4>
        <div style={{ fontSize: 13, color: COLORS.textMuted, marginBottom: 4 }}>
          {item.degree} — {item.field}
        </div>
        <div style={{ fontSize: 12, color: COLORS.textLight }}>
          Tugatish sanasi: {item.graduation}
        </div>
      </div>
    </div>
  );
}

function CertificateItem({ item }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 0",
        borderBottom: `1px solid ${COLORS.borderLight}`,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: COLORS.text,
            marginBottom: 2,
          }}
        >
          {item.name}
        </div>
        <div style={{ fontSize: 12, color: COLORS.textMuted }}>
          {item.issuer} · {item.date}
        </div>
      </div>
      <a
        href={item.link}
        style={{
          color: COLORS.teal,
          textDecoration: "none",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Ko'rish →
      </a>
    </div>
  );
}

function SkillTag({ skill, endorsed, onEndorse }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: COLORS.tealBg,
        border: `1px solid ${COLORS.tealBorder}`,
        borderRadius: 20,
        padding: "8px 14px",
        margin: "6px 8px 6px 0",
        fontSize: 13,
        fontWeight: 600,
        color: COLORS.teal,
      }}
    >
      {skill}
      <span style={{ fontSize: 11, color: COLORS.textLight, marginLeft: 4 }}>
        {endorsed}
      </span>
    </div>
  );
}

function AchievementCard({ item, isOwn }) {
  return (
    <div
      style={{
        background: COLORS.tealBg,
        borderRadius: 12,
        padding: "18px 20px",
        border: `1px solid ${COLORS.tealBorder}`,
        marginBottom: 12,
      }}
    >
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <span style={{ fontSize: 32, flexShrink: 0 }}>{item.icon}</span>
        <div style={{ flex: 1 }}>
          <h4
            style={{
              margin: "0 0 4px",
              fontSize: 15,
              fontWeight: 700,
              color: COLORS.teal,
            }}
          >
            {item.title}
          </h4>
          <p
            style={{
              margin: "0 0 6px",
              fontSize: 13,
              color: COLORS.text,
              lineHeight: 1.5,
            }}
          >
            {item.desc}
          </p>
          <div style={{ fontSize: 11, color: COLORS.textLight }}>
            Sertifikatlashtirish: {item.date}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfilePage() {
  const [tab, setTab] = React.useState("overview");
  const isOwn = true;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
        {/* Header Section */}
        <div
          style={{
            background: COLORS.white,
            borderRadius: 16,
            border: `1px solid ${COLORS.border}`,
            padding: "32px 28px",
            marginBottom: 24,
            position: "relative",
          }}
        >
          {/* Edit button */}
          {isOwn && (
            <button
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: COLORS.teal,
                border: "none",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              ✏ Tahrirlash [Edit]
            </button>
          )}

          <div style={{ display: "flex", gap: 24, marginBottom: 24 }}>
            {/* Profile photo */}
            <div
              style={{
                width: 120,
                height: 120,
                background: COLORS.tealBg,
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 56,
                flexShrink: 0,
                border: `2px solid ${COLORS.tealBorder}`,
              }}
            >
              {PROFILE_DATA.photo}
            </div>

            {/* Profile info */}
            <div style={{ flex: 1 }}>
              <h1
                style={{
                  margin: "0 0 4px",
                  fontSize: 24,
                  fontWeight: 800,
                  color: COLORS.text,
                }}
              >
                {PROFILE_DATA.name}
              </h1>
              <div
                style={{ fontSize: 15, color: COLORS.textMid, marginBottom: 8 }}
              >
                {PROFILE_DATA.title} · {PROFILE_DATA.company}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: COLORS.textMuted,
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <MapPinIcon size={13} color={COLORS.textMuted} />
                {PROFILE_DATA.location}
              </div>
              <p
                style={{
                  margin: "0 0 12px",
                  fontSize: 13,
                  color: COLORS.text,
                  lineHeight: 1.6,
                }}
              >
                {PROFILE_DATA.bio}
              </p>
              <button
                style={{
                  background: COLORS.amberBg,
                  border: `1px solid ${COLORS.amberBorder}`,
                  color: COLORS.amber,
                  padding: "8px 16px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                ❤ Shamol qilish [Endorse]
              </button>
            </div>
          </div>

          {/* Quick stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 14,
              marginTop: 20,
              paddingTop: 20,
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            {[
              { label: "Bog'lanuvchilar [Connections]", value: 342 },
              { label: "Ko'nikmalar [Skills]", value: 8 },
              { label: "Sertifikatlar [Certificates]", value: 3 },
              { label: "Tavsiyalar [Recommendations]", value: 2 },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{ fontSize: 20, fontWeight: 800, color: COLORS.teal }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: COLORS.textLight,
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ish tarixi [Work Experience] */}
        <EditableSection title="Ish tarixi [Work Experience]" isOwn={isOwn}>
          {PROFILE_DATA.workExperience.map((item) => (
            <WorkExperienceItem key={item.id} item={item} isOwn={isOwn} />
          ))}
          {isOwn && (
            <button
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: 10,
                border: `1.5px dashed ${COLORS.tealBorder}`,
                background: COLORS.white,
                color: COLORS.teal,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                transition: "all .15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = COLORS.tealBg)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = COLORS.white)
              }
            >
              + Ish o'rni qo'shish [Add work]
            </button>
          )}
        </EditableSection>

        {/* Ta'lim [Education] */}
        <EditableSection title="Ta'lim [Education]" isOwn={isOwn}>
          {PROFILE_DATA.education.map((item) => (
            <EducationItem key={item.id} item={item} />
          ))}
          {isOwn && (
            <button
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: 10,
                border: `1.5px dashed ${COLORS.tealBorder}`,
                background: COLORS.white,
                color: COLORS.teal,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = COLORS.tealBg)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = COLORS.white)
              }
            >
              + Ta'lim qo'shish [Add education]
            </button>
          )}
        </EditableSection>

        {/* Sertifikatlar [Certificates] */}
        <EditableSection title="Sertifikatlar [Certificates]" isOwn={isOwn}>
          {PROFILE_DATA.certificates.map((item) => (
            <CertificateItem key={item.id} item={item} />
          ))}
          {isOwn && (
            <button
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: 10,
                border: `1.5px dashed ${COLORS.tealBorder}`,
                background: COLORS.white,
                color: COLORS.teal,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = COLORS.tealBg)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = COLORS.white)
              }
            >
              + Sertifikat qo'shish [Add certificate]
            </button>
          )}
        </EditableSection>

        {/* Ko'nikmalar [Skills] */}
        <EditableSection title="Ko'nikmalar [Skills]" isOwn={isOwn}>
          <div style={{ marginBottom: 16 }}>
            {PROFILE_DATA.skills.map((skill, i) => (
              <SkillTag key={i} skill={skill.name} endorsed={skill.endorsed} />
            ))}
          </div>
          {isOwn && (
            <button
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: 10,
                border: `1.5px dashed ${COLORS.tealBorder}`,
                background: COLORS.white,
                color: COLORS.teal,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              + Ko'nikma qo'shish [Add skill]
            </button>
          )}
        </EditableSection>

        {/* Erishgan muvaffaqiyatlar [Achievements] */}
        <EditableSection
          title="Erishgan muvaffaqiyatlar [Achievements]"
          isOwn={isOwn}
        >
          {PROFILE_DATA.achievements.map((item) => (
            <AchievementCard key={item.id} item={item} isOwn={isOwn} />
          ))}
        </EditableSection>

        {/* Tavsiyalar [Recommendations & Endorsements] */}
        <div
          style={{
            background: COLORS.white,
            borderRadius: 14,
            border: `1px solid ${COLORS.border}`,
            padding: "24px 28px",
            marginBottom: 18,
          }}
        >
          <h3
            style={{
              margin: "0 0 16px",
              fontSize: 18,
              fontWeight: 700,
              color: COLORS.text,
            }}
          >
            Tavsiyalar va Shamollar [Recommendations & Endorsements]
          </h3>

          {/* Tabs */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 20,
              borderBottom: `1px solid ${COLORS.border}`,
              paddingBottom: 16,
            }}
          >
            {[
              ["recommendations", "Tavsiyalar [Recommendations]"],
              ["endorsements", "Shamollar [Endorsements]"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                style={{
                  padding: "8px 12px",
                  border: "none",
                  background: "transparent",
                  fontSize: 13,
                  fontWeight: 600,
                  color: tab === id ? COLORS.teal : COLORS.textLight,
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  borderBottom:
                    tab === id ? `2px solid ${COLORS.teal}` : "none",
                  paddingBottom: tab === id ? 6 : 8,
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Recommendations */}
          {tab === "recommendations" && (
            <div>
              {PROFILE_DATA.recommendations.map((rec) => (
                <div
                  key={rec.id}
                  style={{
                    background: COLORS.bgAlt,
                    borderRadius: 10,
                    padding: "16px 18px",
                    marginBottom: 12,
                    border: `1px solid ${COLORS.borderLight}`,
                  }}
                >
                  <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 32, flexShrink: 0 }}>👤</span>
                    <div>
                      <h4
                        style={{
                          margin: "0 0 2px",
                          fontSize: 14,
                          fontWeight: 700,
                          color: COLORS.text,
                        }}
                      >
                        {rec.author}
                      </h4>
                      <div style={{ fontSize: 12, color: COLORS.textMuted }}>
                        {rec.role}
                      </div>
                    </div>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      color: COLORS.textMid,
                      lineHeight: 1.6,
                      fontStyle: "italic",
                    }}
                  >
                    "{rec.text}"
                  </p>
                  <div
                    style={{
                      fontSize: 11,
                      color: COLORS.textLight,
                      marginTop: 8,
                    }}
                  >
                    {rec.date}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Endorsements */}
          {tab === "endorsements" && (
            <div>
              {PROFILE_DATA.endorsements.map((end) => (
                <div
                  key={end.id}
                  style={{
                    background: COLORS.bgAlt,
                    borderRadius: 10,
                    padding: "16px 18px",
                    marginBottom: 12,
                    border: `1px solid ${COLORS.borderLight}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    <h4
                      style={{
                        margin: 0,
                        fontSize: 15,
                        fontWeight: 700,
                        color: COLORS.text,
                      }}
                    >
                      {end.skill}
                    </h4>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: COLORS.teal,
                      }}
                    >
                      {end.endorsedBy} ta shamol
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: COLORS.textMuted }}>
                    {end.people.map((p, i) => (
                      <span key={i}>
                        {p}
                        {i < end.people.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ProfilePage });

const PROFILE_DATA = {
  name: "Aziz Jo'rayev",
  title: "Senior Frontend Developer",
  company: "Uzcard MCHJ",
  location: "Toshkent, O'zbekiston",
  oneId: "12345678",
  bio: "5 yillik tajribaga ega frontend dasturchi. React, TypeScript va Node.js bo'yicha mutaxassis.",
  experience: [
    {
      company: "Uzcard MCHJ",
      title: "Senior Frontend Developer",
      from: "2024",
      to: "Hozir",
      desc: "React/TypeScript ilovalar, dizayn tizimi yaratish, jamoa rahbariyati.",
    },
    {
      company: "Payme MCHJ",
      title: "Frontend Developer",
      from: "2022",
      to: "2024",
      desc: "Mobil va web ilovalar, A/B test, CI/CD pipeline sozlash.",
    },
    {
      company: "Freelance",
      title: "Web Developer",
      from: "2020",
      to: "2022",
      desc: "WordPress, HTML/CSS, kichik biznes loyihalari.",
    },
  ],
  education: [
    {
      inst: "Toshkent Axborot Texnologiyalari Universiteti (TATU)",
      degree: "Bakalavr",
      field: "Kompyuter fanlari",
      year: "2020",
    },
  ],
  certs: [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon",
      date: "2025",
      link: "#",
    },
    {
      name: "React Advanced Patterns",
      issuer: "Frontend Masters",
      date: "2024",
      link: "#",
    },
  ],
  skills: [
    { name: "React", endorsed: 24 },
    { name: "TypeScript", endorsed: 18 },
    { name: "Node.js", endorsed: 15 },
    { name: "Python", endorsed: 9 },
    { name: "SQL", endorsed: 12 },
    { name: "Figma", endorsed: 7 },
    { name: "AWS", endorsed: 5 },
    { name: "Docker", endorsed: 4 },
  ],
  achievements: [
    {
      title: "3 yil uzluksiz ish",
      desc: "Uzcard MChJda 3 yil davomida yuqori samaradorlik.",
      date: "2026",
      icon: "🏆",
    },
    {
      title: "Ishonchli mutaxassis",
      desc: "TrustFlow platformasida 1,200+ ball to'plangan.",
      date: "2026",
      icon: "⭐",
    },
  ],
  endorsements: [
    {
      from: "Bobur Karimov",
      role: "Team Lead, Payme",
      skill: "React",
      text: "Aziz bilan ishlash juda qulay. Murakkab muammolarni tez hal qiladi.",
    },
    {
      from: "Nilufar Rashidova",
      role: "PM, Uzcard",
      skill: "TypeScript",
      text: "Kodni sifatli va toza yozadi. Jamoada ishonchli a'zo.",
    },
  ],
};

function SectionCard({ title, children, onAdd }) {
  return (
    <div
      style={{
        background: COLORS.white,
        borderRadius: 13,
        border: `1px solid ${COLORS.border}`,
        marginBottom: 18,
        overflow: "hidden",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          padding: "16px 22px",
          borderBottom: `1px solid ${COLORS.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 700,
            color: COLORS.text,
          }}
        >
          {title}
        </h3>
        {onAdd && (
          <button
            onClick={onAdd}
            style={{
              background: COLORS.tealBg,
              border: "none",
              color: COLORS.teal,
              padding: "5px 12px",
              borderRadius: 7,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Inter',sans-serif",
            }}
          >
            + Qo'shish
          </button>
        )}
      </div>
      <div style={{ padding: "18px 22px" }}>{children}</div>
    </div>
  );
}

function ProfilePage() {
  const p = PROFILE_DATA;
  const [editingBio, setEditingBio] = React.useState(false);
  const [bio, setBio] = React.useState(p.bio);
  const [endorseTab, setEndorseTab] = React.useState("endorsements");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        fontFamily: "'Inter',sans-serif",
      }}
    >
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "32px" }}>
        {/* ── Header card ── */}
        <div
          style={{
            background: COLORS.white,
            borderRadius: 16,
            overflow: "hidden",
            border: `1px solid ${COLORS.border}`,
            marginBottom: 22,
            boxShadow: "0 2px 8px rgba(15,118,110,0.06)",
          }}
        >
          {/* Cover */}
          <div
            style={{
              height: 120,
              background: `linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealDark} 100%)`,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: -36,
                left: 28,
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: COLORS.white,
                border: "4px solid #fff",
                boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 800,
                color: COLORS.teal,
              }}
            >
              AJ
            </div>
          </div>
          <div
            style={{
              padding: "48px 28px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 4,
                }}
              >
                <h1
                  style={{
                    margin: 0,
                    fontSize: 22,
                    fontWeight: 800,
                    color: COLORS.text,
                  }}
                >
                  {p.name}
                </h1>
                <VerifiedBadge />
              </div>
              <div
                style={{ fontSize: 14, color: COLORS.textMid, marginBottom: 3 }}
              >
                {p.title} — {p.company}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  color: COLORS.textMuted,
                }}
              >
                <MapPinIcon /> {p.location}
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 10,
                  background: COLORS.tealBg,
                  padding: "3px 10px",
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 600,
                  color: COLORS.teal,
                }}
              >
                <ShieldIcon size={12} color={COLORS.teal} /> OneID: {p.oneId}
              </div>
            </div>
            <button
              style={{
                background: COLORS.bgAlt,
                border: `1px solid ${COLORS.border}`,
                padding: "8px 16px",
                borderRadius: 8,
                fontSize: 13,
                color: COLORS.textMid,
                cursor: "pointer",
                fontFamily: "'Inter',sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              ✏️ Tahrirlash
            </button>
          </div>
          {/* Bio */}
          <div style={{ padding: "0 28px 22px" }}>
            {editingBio ? (
              <div>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={3}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    border: `1.5px solid ${COLORS.teal}`,
                    borderRadius: 8,
                    padding: "10px 12px",
                    fontSize: 14,
                    fontFamily: "'Inter',sans-serif",
                    resize: "none",
                    outline: "none",
                  }}
                />
                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  <button
                    onClick={() => setEditingBio(false)}
                    style={{
                      padding: "7px 16px",
                      borderRadius: 8,
                      background: COLORS.teal,
                      border: "none",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "'Inter',sans-serif",
                    }}
                  >
                    Saqlash
                  </button>
                  <button
                    onClick={() => {
                      setBio(p.bio);
                      setEditingBio(false);
                    }}
                    style={{
                      padding: "7px 16px",
                      borderRadius: 8,
                      background: "transparent",
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.textMuted,
                      fontSize: 12,
                      cursor: "pointer",
                      fontFamily: "'Inter',sans-serif",
                    }}
                  >
                    Bekor
                  </button>
                </div>
              </div>
            ) : (
              <p
                onClick={() => setEditingBio(true)}
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: COLORS.textMid,
                  lineHeight: 1.7,
                  cursor: "pointer",
                  padding: "8px 12px",
                  borderRadius: 8,
                  transition: "background .12s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = COLORS.bgAlt)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {bio}
              </p>
            )}
          </div>
        </div>

        {/* ── Experience ── */}
        <SectionCard title="Ish tarixi [Work experience]" onAdd={() => {}}>
          {p.experience.map((e, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 16,
                marginBottom: i < p.experience.length - 1 ? 20 : 0,
                paddingBottom: i < p.experience.length - 1 ? 20 : 0,
                borderBottom:
                  i < p.experience.length - 1
                    ? `1px solid ${COLORS.borderLight}`
                    : "none",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: COLORS.tealBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  fontWeight: 800,
                  color: COLORS.teal,
                  flexShrink: 0,
                }}
              >
                {e.company[0]}
              </div>
              <div>
                <div
                  style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}
                >
                  {e.title}
                </div>
                <div
                  style={{ fontSize: 13, color: COLORS.textMid, marginTop: 2 }}
                >
                  {e.company}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: COLORS.textLight,
                    marginTop: 2,
                  }}
                >
                  {e.from} – {e.to}
                </div>
                <p
                  style={{
                    margin: "8px 0 0",
                    fontSize: 13,
                    color: COLORS.textMuted,
                    lineHeight: 1.6,
                  }}
                >
                  {e.desc}
                </p>
              </div>
            </div>
          ))}
        </SectionCard>

        {/* ── Education ── */}
        <SectionCard title="Ta'lim [Education]" onAdd={() => {}}>
          {p.education.map((e, i) => (
            <div key={i} style={{ display: "flex", gap: 14 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background: COLORS.amberBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                🎓
              </div>
              <div>
                <div
                  style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}
                >
                  {e.inst}
                </div>
                <div
                  style={{ fontSize: 13, color: COLORS.textMid, marginTop: 2 }}
                >
                  {e.degree} — {e.field}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: COLORS.textLight,
                    marginTop: 2,
                  }}
                >
                  Bitirgan yili: {e.year}
                </div>
              </div>
            </div>
          ))}
        </SectionCard>

        {/* ── Certificates ── */}
        <SectionCard title="Sertifikatlar [Certificates]" onAdd={() => {}}>
          {p.certs.map((c, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: i < p.certs.length - 1 ? 14 : 0,
                paddingBottom: i < p.certs.length - 1 ? 14 : 0,
                borderBottom:
                  i < p.certs.length - 1
                    ? `1px solid ${COLORS.borderLight}`
                    : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 20 }}>📜</span>
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: COLORS.text,
                    }}
                  >
                    {c.name}
                  </div>
                  <div style={{ fontSize: 12, color: COLORS.textMuted }}>
                    {c.issuer} · {c.date}
                  </div>
                </div>
              </div>
              <a
                href={c.link}
                style={{
                  fontSize: 12,
                  color: COLORS.teal,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Ko'rish →
              </a>
            </div>
          ))}
        </SectionCard>

        {/* ── Skills ── */}
        <SectionCard title="Ko'nikmalar [Skills]" onAdd={() => {}}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {p.skills.map((s) => (
              <span
                key={s.name}
                style={{
                  background: COLORS.tealBg,
                  color: COLORS.teal,
                  padding: "6px 14px",
                  borderRadius: 20,
                  fontSize: 13,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {s.name}
                <span
                  style={{
                    fontSize: 11,
                    color: COLORS.textLight,
                    fontWeight: 600,
                  }}
                >
                  {s.endorsed}
                </span>
              </span>
            ))}
          </div>
        </SectionCard>

        {/* ── Achievements ── */}
        <SectionCard title="Erishgan muvaffaqiyatlar [Achievements]">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            {p.achievements.map((a, i) => (
              <div
                key={i}
                style={{
                  background: COLORS.bgAlt,
                  borderRadius: 10,
                  padding: "16px 18px",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: 28 }}>{a.icon}</span>
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: COLORS.text,
                    }}
                  >
                    {a.title}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: COLORS.textMuted,
                      marginTop: 3,
                      lineHeight: 1.5,
                    }}
                  >
                    {a.desc}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: COLORS.textLight,
                      marginTop: 4,
                    }}
                  >
                    {a.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* ── Endorsements & Recommendations ── */}
        <SectionCard title="Izoh va tavsiyalar [Endorsements & Recommendations]">
          <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
            {[
              ["endorsements", "Tavsiyalar"],
              ["testimonials", "Guvohnomalar"],
            ].map(([id, l]) => (
              <button
                key={id}
                onClick={() => setEndorseTab(id)}
                style={{
                  padding: "7px 16px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  border: `1.5px solid ${endorseTab === id ? COLORS.teal : COLORS.border}`,
                  background: endorseTab === id ? COLORS.tealBg : "transparent",
                  color: endorseTab === id ? COLORS.teal : COLORS.textMuted,
                  cursor: "pointer",
                  fontFamily: "'Inter',sans-serif",
                }}
              >
                {l}
              </button>
            ))}
          </div>
          {p.endorsements.map((e, i) => (
            <div
              key={i}
              style={{
                background: COLORS.bgAlt,
                borderRadius: 10,
                padding: "14px 18px",
                marginBottom: i < p.endorsements.length - 1 ? 10 : 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: COLORS.teal,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {e.from[0]}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: COLORS.text,
                    }}
                  >
                    {e.from}
                  </div>
                  <div style={{ fontSize: 11, color: COLORS.textMuted }}>
                    {e.role} · {e.skill}
                  </div>
                </div>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: COLORS.textMid,
                  lineHeight: 1.65,
                  fontStyle: "italic",
                }}
              >
                "{e.text}"
              </p>
            </div>
          ))}
        </SectionCard>
      </div>
    </div>
  );
}

Object.assign(window, { ProfilePage });
