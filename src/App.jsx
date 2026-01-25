import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from "@studio-freight/lenis";

// --- Existing Components ---
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Feedback from './Feedback'; // Optional
import WhoWeAre from './components/WhoWeAre';
import Revi from './components/Revi';
import Solutions from './components/Solution';
import Partner from './components/Partner';
import WhyPartner from './components/WhyPartner';
import PartnerStats from './components/PartnerStats';
import BlogReveal from './components/BlogReveal';

// --- New Pages ---
import ServicePage from './Pages/ServicePage';
import IndustryPage from './Pages/IndustryPage';
import AISolutions from './components/AISolutions';
import Locations from './components/Locations';
import FAQSection from './components/FAQSection';
import ScrollToTop from './components/ScrollToTop';

// --- IMPORT FOOTER ---
import Footer from './components/Footer';
import Banner from './components/Banner';
import InteractiveLanding from './components/InteractiveLanding';
import ProjectDiscussion from './components/ProjectDiscussion';

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
      
      {/* WRAPPER FOR SCROLLING CONTENT 
         - z-10: Puts it ABOVE the footer
         - bg-[#050505]: Opaque background hides footer until scroll
         - mb-[100vh]: Creates space at the bottom for footer reveal
      */}
      <div className="relative z-10 bg-[#050505] mb-[100vh] shadow-2xl">
        
        <Navbar />
        
        <Routes>
          {/* --- HOME PAGE ROUTE --- */}
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
              {/* Note: Revi, Blog, Locations moved DOWN to be global */}
            </main>
          } />

          {/* --- DYNAMIC SERVICE ROUTE --- */}
          <Route path="/services/:slug" element={<ServicePage />} />

          {/* --- DYNAMIC INDUSTRY ROUTE --- */}
          <Route path="/industries/:slug" element={<IndustryPage />} />
          
        </Routes>

        {/* --- GLOBAL SECTIONS (Visible on ALL Pages) --- */}
        <Revi />
        {/* <BlogReveal /> */}
        <InteractiveLanding/>
        <Locations/>
<ProjectDiscussion/>
      </div>

      {/* --- FOOTER (Fixed behind the content) --- */}
      <Footer />

    </Router>
  )
}