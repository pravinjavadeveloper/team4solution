import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import Lenis from "@studio-freight/lenis";

// --- Existing Components ---
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import WhoWeAre from './components/WhoWeAre';
import Revi from './components/Revi';
import Solutions from './components/Solution';
import WhyPartner from './components/WhyPartner';
import PartnerStats from './components/PartnerStats';
import AISolutions from './components/AISolutions';
import Locations from './components/Locations';
import FAQSection from './components/FAQSection';
import ScrollToTop from './components/ScrollToTop';

// --- New Pages ---
import ServicePage from './Pages/ServicePage';
import IndustryPage from './Pages/IndustryPage';
import Career from './Pages/Career'; // <--- Imported here

// --- IMPORT FOOTER ---
import Footer from './components/Footer';
import Banner from './components/Banner';
import InteractiveLanding from './components/InteractiveLanding';
import ProjectDiscussion from './components/ProjectDiscussion';
import AllIndustries from './pages/AllIndustries';
import Contact from './pages/Contact';

// --- Wrapper to handle Scroll Reset on Route Change ---
const ScrollHandler = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <ScrollToTop/>
      <ScrollHandler /> 
      
      <div className="relative z-10 bg-[#050505] mb-[100vh] shadow-2xl">
        
        <Navbar />
        
        <Routes>
          {/* --- HOME PAGE --- */}
          <Route path="/" element={
            <main>
              <HeroBanner />
              <WhoWeAre />
              <Solutions />
              <AISolutions/>
              <WhyPartner />
              <PartnerStats />
              <FAQSection/>
              <Banner/>
            </main>
          } />

          {/* --- ABOUT US --- */}
          <Route path="/who-we-are" element={
            <div className="pt-32 min-h-screen">
              <WhoWeAre />
              <WhyPartner />
            </div>
          } />

          {/* --- PORTFOLIO --- */}
          <Route path="/solutions" element={
            <div className="pt-32 min-h-screen">
              <Solutions />
              <Banner />
            </div>
          } />

          {/* --- BLOGS --- */}
          <Route path="/interactive-landing" element={
            <div className="pt-32 min-h-screen">
              <InteractiveLanding />
            </div>
          } />

          {/* --- DYNAMIC ROUTES --- */}
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          
          {/* --- CAREER PAGE (FIXED) --- */}
          {/* 1. Changed path to lowercase "/career" to match Navbar */}
          {/* 2. Replaced the <div> placeholder with the actual <Career /> component */}
          <Route path="/career" element={<Career />} />
          <Route path="/industries" element={<AllIndustries />} />

          {/* --- CONTACT (Placeholder) --- */}
          <Route path="/contact" element={<Contact />} />

        </Routes>

        {/* --- GLOBAL SECTIONS --- */}
        <Revi />
        <Locations/>
        <ProjectDiscussion/>
        
      </div>

      <Footer />

    </Router>
  )
}