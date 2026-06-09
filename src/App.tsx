import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { RepresentativePage } from './pages/RepresentativePage';

function ScrollToTop() {
  // Scroll to top on route change
  const { pathname } = window.location;
  if (pathname) {
    window.scrollTo(0, 0);
  }
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
        <Route path="/privacidade" element={<PrivacyPolicyPage />} />
        <Route path="/termos" element={<TermsPage />} />
        <Route path="/representante" element={<RepresentativePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
