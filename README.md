# TrustFlow — Mehnat Bozori Shaffoflik Platformasi

> Uzbekistan's labor transparency platform — protecting workers, exposing corrupt employers, and putting power back in the hands of job seekers.

---

## Screenshot

![TrustFlow Landing Page](./public/screenshot.png)

> Run the app locally and navigate pages using the **⚙ Tweaks** panel (bottom-right corner).

---

## Key Features — Fighting Corruption in the Workplace

### For Workers (Always Free)
- **OneID Verification** — Every worker profile is tied to a verified national ID, eliminating fake reviews and ghost employees
- **Anonymous Reporting** — Submit complaints about salary fraud, late payments, and illegal practices without revealing your identity
- **Emergency Report** — Record audio/video evidence on-site, auto-capture GPS location, and generate a traceable report code
- **AI Risk Scores** — Every job posting is scanned for red flags: below-benchmark salaries, suspicious patterns, ghost listings
- **Salary Transparency** — See real min/avg/max salary ranges for any role before you apply — no more "competitive salary" smoke screens
- **Reward System** — Earn points for verified reports, endorsements, and platform contributions; redeem for real rewards

### For Accountability
- **Flagged Company Profiles** — Public pages exposing companies with verified complaints, low trust scores, and salary discrepancies
- **Government Dashboard** — Regional heat map of labor violations across all 14 Uzbekistan provinces; sortable risk tables
- **Community Forum** — Workers share experiences, vote on posts, and warn each other about bad actors in real time
- **Report History & Tracking** — Every submitted report gets a unique code (`REPORT-YYYY-XXXXK`) for follow-up and audit trails
- **Employer Salary Benchmarking** — Companies are shown how their posted salaries compare to industry averages, with public flags for outliers

### For Employers (Paid Plans)
- **Transparent Hiring Pipeline** — Applicant tracking with AI match scores and full audit log
- **Salary Analytics** — Know where your compensation stands vs. the market before regulators flag it
- **Trust Score** — Build verifiable reputation through fair hiring history and zero complaints

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd trustflow

# Install dependencies
npm install
```

### Running in Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

Use the **⚙ Tweaks** button (bottom-right) to:
- Switch between all pages instantly
- Open any modal (Report, Emergency Report, Auth flows)
- Switch accent color theme

### Building for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build:

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
src/
├── App.jsx                  # Root component — page router + modal state
├── main.jsx                 # Vite entry point
├── index.css                # Global styles, animations, responsive utilities
└── components/
    ├── Shared.jsx           # COLORS, icons, Nav, ReportModal, shared atoms
    ├── Landing.jsx          # Home page with stats and feature highlights
    ├── Auth.jsx             # AuthChooser, JobSeekerAuth, CompanyAuth, GovAuth
    ├── Dashboard.jsx        # Job seeker personal cabinet
    ├── JobListings.jsx      # Job board with AI risk badges and filters
    ├── Applications.jsx     # Application tracker with interview management
    ├── Rewards.jsx          # Points balance, history, and reward shop
    ├── Community.jsx        # Forum with voting, comments, and trending tags
    ├── Profile.jsx          # Candidate profile with endorsements and achievements
    ├── Pricing.jsx          # Subscription tiers (Free / Plus / Pro)
    ├── GovDashboard.jsx     # Government oversight panel with UZ regional map
    ├── CompanyPanel.jsx     # Recruiter dashboard (postings, applicants, billing)
    ├── FlaggedCompany.jsx   # Public page for flagged/suspicious employers
    ├── EmergencyReport.jsx  # 4-step emergency report with GPS + media recording
    └── TweaksPanel.jsx      # Dev navigation panel (floating ⚙ button)
```

---

## Roadmap

### v1.0 — Core Platform (Current)
- [x] Worker registration via OneID
- [x] Job listings with AI risk scoring
- [x] Anonymous complaint/report system
- [x] Emergency report with GPS and media capture
- [x] Flagged company public profiles
- [x] Government regional oversight dashboard
- [x] Community forum with voting
- [x] Reward points system
- [x] Company recruiter panel
- [x] Pricing tiers (Free / Plus / Pro)

### v1.1 — Real Data Integration
- [ ] Connect to live OneID API (O'zbekiston Respublikasi DAVAT)
- [ ] Real salary data ingestion from State Statistics Committee
- [ ] Live report submission to Labor Inspection Agency
- [ ] Email/SMS notifications for report status updates

### v1.2 — AI & Analytics
- [ ] GPT-powered job posting risk analysis (beyond rule-based scoring)
- [ ] Salary prediction model trained on verified UZ market data
- [ ] Automatic ghost employee detection via payroll pattern analysis
- [ ] Anomaly detection for fake job listings

### v1.3 — Mobile & Scale
- [ ] React Native mobile app (iOS + Android)
- [ ] Offline-capable emergency reports (sync when connected)
- [ ] Multi-language support (Uzbek / Russian / English)
- [ ] Public API for NGOs and investigative journalists

### v2.0 — Regional Expansion
- [ ] Kazakhstan, Kyrgyzstan, Tajikistan support
- [ ] Cross-border employer tracking
- [ ] International labor standards compliance scoring

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite 8 |
| Styling | Inline styles + CSS utility classes |
| Icons | Custom SVG components |
| Auth concept | OneID (national digital identity) |
| Routing | State-based (no router library) |
| Build | Vite + @vitejs/plugin-react |

---

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

---

## License

MIT
