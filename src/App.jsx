import React from 'react';
import { Nav, ReportModal } from './components/Shared';
import { LandingPage } from './components/Landing';
import { AuthChooser, JobSeekerAuth, CompanyAuth, GovAuth } from './components/Auth';
import { DashboardPage } from './components/Dashboard';
import { JobListingsPage } from './components/JobListings';
import { GovDashboardPage } from './components/GovDashboard';
import { ApplicationsPage } from './components/Applications';
import { CommunityPage } from './components/Community';
import { RewardsPage } from './components/Rewards';
import { ProfilePage } from './components/Profile';
import { PricingPage } from './components/Pricing';
import { EmergencyReportModal } from './components/EmergencyReport';
import { CompanyPanelPage } from './components/CompanyPanel';
import { FlaggedCompanyPage } from './components/FlaggedCompany';
import { TweaksPanel } from './components/TweaksPanel';

function App() {
  const [page, setPage] = React.useState('landing');
  const [report, setReport] = React.useState(false);
  const [emergency, setEmergency] = React.useState(false);
  const [authModal, setAuthModal] = React.useState(null);

  React.useEffect(() => {
    window.__tfNavigate = setPage;
    window.__tfShowReport = () => setReport(true);
    window.__tfShowEmergency = () => setEmergency(true);
    window.__tfShowAuth = (type) => setAuthModal(type);
  }, []);

  const closeAuth = () => setAuthModal(null);
  const onGovSuccess = () => setPage('gov');

  return (
    <div>
      <Nav
        currentPage={page}
        onNavigate={setPage}
        onReport={() => setReport(true)}
        onLogin={() => setAuthModal('chooser')}
        onRegister={() => setAuthModal('seeker')}
      />
      <div className="page-transition" key={page}>
        {page === 'landing'      && <LandingPage onNavigate={setPage} onReport={() => setReport(true)} onRegister={() => setAuthModal('seeker')}/>}
        {page === 'jobs'         && <JobListingsPage onReport={() => setReport(true)} onEmergency={() => setEmergency(true)}/>}
        {page === 'dashboard'    && <DashboardPage onNavigate={setPage} onEmergency={() => setEmergency(true)}/>}
        {page === 'applications' && <ApplicationsPage/>}
        {page === 'rewards'      && <RewardsPage/>}
        {page === 'community'    && <CommunityPage/>}
        {page === 'gov'          && <GovDashboardPage/>}
        {page === 'profile'      && <ProfilePage/>}
        {page === 'pricing'      && <PricingPage/>}
        {page === 'company'      && <CompanyPanelPage/>}
        {page === 'flagged'      && <FlaggedCompanyPage onReport={() => setReport(true)}/>}
      </div>

      {report    && <ReportModal onClose={() => setReport(false)}/>}
      {emergency && <EmergencyReportModal onClose={() => setEmergency(false)}/>}

      {authModal === 'chooser' && <AuthChooser onClose={closeAuth} onPick={(id) => setAuthModal(id)}/>}
      {authModal === 'seeker'  && <JobSeekerAuth onClose={closeAuth} onSuccess={() => { setAuthModal(null); setPage('dashboard'); }}/>}
      {authModal === 'company' && <CompanyAuth onClose={closeAuth}/>}
      {authModal === 'gov'     && <GovAuth onClose={closeAuth} onSuccess={onGovSuccess}/>}

      <TweaksPanel
        currentPage={page}
        onNavigate={setPage}
        onReport={() => setReport(true)}
        onEmergency={() => setEmergency(true)}
        onAuth={(type) => setAuthModal(type)}
      />
    </div>
  );
}

export default App;
