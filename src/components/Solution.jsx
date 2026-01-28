import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  X, Smartphone, Globe, ShoppingCart, 
  Cloud, Lock, TrendingUp, Code, Database, 
  Server, Layout, BarChart, Search, Mail, 
  Camera, Facebook, ShieldCheck, Cpu
} from "lucide-react"; 

// --- IMAGES ---
import mob from "../assets/Parallex/mobapp.png";
import web from "../assets/Parallex/webdev.png";
import ecomm from "../assets/Parallex/ecom.png";
import saas from "../assets/Parallex/sassdev.png";
import uiux from "../assets/Parallex/uiiuxdes.png";
import securityAudit from "../assets/Parallex/saa.png";
import mss from "../assets/Parallex/mss.png";
import cloudSec from "../assets/Parallex/cloudsec.png";
import digitalMark from "../assets/Parallex/digital.png"; 

import UniqueButton from "./UniqueButton";

gsap.registerPlugin(ScrollTrigger);

// --- DATA ---
const SOLUTIONS = [
  {
    id: 1,
    title: "Mobile App Development",
    desc: "We build high-performance, feature-packed native mobile applications for iOS & Android.",
    img: mob,
    backIcon: <Smartphone size={48} className="text-white" />,
    backTitle: "Mobile App Development",
    backDesc: "Expand your business globally by connecting it with your industrial mobile application. Reports show that over 85% of users spend a lot of time on mobile devices.",
    techStack: [
      { icon: <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="iOS" className="w-6 h-6 invert" />, label: "iOS" },
      { icon: <img src="https://cdn-icons-png.flaticon.com/512/174/174836.png" alt="Android" className="w-6 h-6 invert" />, label: "Android" },
      { icon: <Code size={24} />, label: "Flutter" },
      { icon: <Cpu size={24} />, label: "React Native" },
      { icon: <Layout size={24} />, label: "Xamarin" },
      { icon: <Globe size={24} />, label: "PWA" },
    ]
  },
  {
    id: 2,
    title: "Digital Marketing",
    desc: "Accelerate your brand's growth with data-driven marketing strategies.",
    img: digitalMark,
    backIcon: <TrendingUp size={48} className="text-white" />,
    backTitle: "Digital Marketing",
    backDesc: "Boost your online presence and drive targeted traffic. We utilize advanced analytics and creative strategies.",
    techStack: [
      { icon: <Search size={24} />, label: "SEO" },
      { icon: <BarChart size={24} />, label: "Analytics" },
      { icon: <Mail size={24} />, label: "Email" },
      { icon: <Facebook size={24} />, label: "Social" },
      { icon: <Camera size={24} />, label: "Content" },
      { icon: <Globe size={24} />, label: "PPC" },
    ]
  },
  {
    id: 3,
    title: "Website Development",
    desc: "Create a powerful digital footprint with our custom web development services.",
    img: web,
    backIcon: <Globe size={48} className="text-white" />,
    backTitle: "Website Development",
    backDesc: "From landing pages to complex enterprise portals, we build responsive, fast, and SEO-friendly websites.",
    techStack: [
      { icon: <Code size={24} />, label: "React" },
      { icon: <Database size={24} />, label: "Node.js" },
      { icon: <Layout size={24} />, label: "Next.js" },
      { icon: <Server size={24} />, label: "PHP" },
      { icon: <Cloud size={24} />, label: "AWS" },
      { icon: <Lock size={24} />, label: "SSL" },
    ]
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    desc: "Drive sales with our scalable e-commerce platforms.",
    img: ecomm,
    backIcon: <ShoppingCart size={48} className="text-white" />,
    backTitle: "E-Commerce Solutions",
    backDesc: "Transform visitors into loyal customers with secure, seamless shopping experiences.",
    techStack: [
      { icon: <ShoppingCart size={24} />, label: "Shopify" },
      { icon: <Code size={24} />, label: "Magento" },
      { icon: <Database size={24} />, label: "Woo" },
      { icon: <Lock size={24} />, label: "Stripe" },
      { icon: <Globe size={24} />, label: "Global" },
      { icon: <BarChart size={24} />, label: "Sales" },
    ]
  },
  {
    id: 5,
    title: "SaaS Development",
    desc: "We engineer scalable Software-as-a-Service products.",
    img: saas,
    backIcon: <Cloud size={48} className="text-white" />,
    backTitle: "SaaS Development",
    backDesc: "Build scalable, multi-tenant cloud applications tailored for efficiency and growth.",
    techStack: [
      { icon: <Cloud size={24} />, label: "Cloud" },
      { icon: <Server size={24} />, label: "Docker" },
      { icon: <Database size={24} />, label: "SQL" },
      { icon: <Lock size={24} />, label: "Auth" },
      { icon: <Code size={24} />, label: "API" },
      { icon: <TrendingUp size={24} />, label: "Scale" },
    ]
  },
  {
    id: 6,
    title: "UI/UX Designing",
    desc: "User-centric design is at our core.",
    img: uiux,
    backIcon: <Layout size={48} className="text-white" />,
    backTitle: "UI/UX Designing",
    backDesc: "We craft intuitive interfaces and engaging user experiences.",
    techStack: [
      { icon: <Layout size={24} />, label: "Figma" },
      { icon: <Code size={24} />, label: "Adobe" },
      { icon: <TrendingUp size={24} />, label: "Flow" },
      { icon: <Globe size={24} />, label: "Web" },
      { icon: <Smartphone size={24} />, label: "Mobile" },
      { icon: <Camera size={24} />, label: "Assets" },
    ]
  },
  {
    id: 7,
    title: "Security Assessments",
    desc: "Identify weaknesses before attackers do.",
    img: securityAudit,
    backIcon: <ShieldCheck size={48} className="text-white" />,
    backTitle: "Security Assessments",
    backDesc: "Vulnerability assessments and penetration testing to secure your infrastructure.",
    techStack: [
      { icon: <Lock size={24} />, label: "VAPT" },
      { icon: <Code size={24} />, label: "Audit" },
      { icon: <ShieldCheck size={24} />, label: "Compliance" },
      { icon: <Server size={24} />, label: "Network" },
      { icon: <Cloud size={24} />, label: "Cloud" },
      { icon: <Database size={24} />, label: "Data" },
    ]
  },
  {
    id: 8,
    title: "Managed Security",
    desc: "Secure your business 24/7 with our SOC as a Service.",
    img: mss,
    backIcon: <Lock size={48} className="text-white" />,
    backTitle: "Managed Security",
    backDesc: "Continuous monitoring, threat detection, and incident response.",
    techStack: [
      { icon: <ShieldCheck size={24} />, label: "SOC" },
      { icon: <TrendingUp size={24} />, label: "Monitor" },
      { icon: <Lock size={24} />, label: "MDR" },
      { icon: <Cloud size={24} />, label: "SIEM" },
      { icon: <Server size={24} />, label: "Firewall" },
      { icon: <Code size={24} />, label: "Logs" },
    ]
  },
  {
    id: 9,
    title: "Cloud Security",
    desc: "Secure your infrastructure across AWS, Azure, and GCP.",
    img: cloudSec,
    backIcon: <Cloud size={48} className="text-white" />,
    backTitle: "Cloud Security",
    backDesc: "Architecture hardening and Cloud Security Posture Management.",
    techStack: [
      { icon: <Cloud size={24} />, label: "AWS/Azure" },
      { icon: <Lock size={24} />, label: "IAM" },
      { icon: <ShieldCheck size={24} />, label: "CSPM" },
      { icon: <Code size={24} />, label: "DevSecOps" },
      { icon: <Database size={24} />, label: "Crypto" },
      { icon: <Server size={24} />, label: "Container" },
    ]
  },
];

// --- REUSABLE FLIP CARD COMPONENT (Mobile & Desktop) ---
const FlipCard = ({ item, isFlipped, onFlip }) => {
  return (
    <div 
      className="relative w-full h-full"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "backOut" }}
      >
        
        {/* --- FRONT FACE --- */}
        <div 
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img 
            src={item.img} 
            alt={item.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* --- BACK FACE --- */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#0a0a0a] rounded-2xl border border-white/10 p-6 md:p-10 flex flex-col justify-center items-center text-center"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          {/* Close Icon */}
          <div 
            className="absolute top-4 right-4 md:top-6 md:right-6 cursor-pointer text-gray-500 hover:text-white z-50" 
            onClick={(e) => { e.stopPropagation(); onFlip(item.id); }}
          >
            <X size={24} />
          </div>

          {/* Content */}
          <div className="mb-4 md:mb-6 scale-90 md:scale-100">{item.backIcon}</div>
          <h4 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6">{item.backTitle}</h4>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6 md:mb-10 max-w-sm">
            {item.backDesc}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {item.techStack.map((tech, i) => (
              <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-white/20 flex items-center justify-center hover:border-blue-500 hover:bg-white/5 transition-all cursor-default relative group/tech">
                <span className="text-white scale-75 md:scale-100">{tech.icon}</span>
                <span className="absolute -bottom-8 opacity-0 group-hover/tech:opacity-100 text-[10px] bg-blue-600 text-white px-2 py-1 rounded transition-opacity whitespace-nowrap pointer-events-none z-50">
                    {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default function Solutions() {
  const containerRef = useRef(null);
  const rightPanelRef = useRef(null);
  const cardsRef = useRef([]);

  const [activeIndex, setActiveIndex] = useState(-1);
  const [flippedCardId, setFlippedCardId] = useState(null);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const handleFlip = (id) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop Only Animations
      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top-=250",
          end: "bottom bottom",
          pin: rightPanelRef.current,
          pinSpacing: false,
        });

        cardsRef.current.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              setActiveIndex(index);
              setFlippedCardId(null);
            },
            onEnterBack: () => {
              setActiveIndex(index);
              setFlippedCardId(null);
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative bg-[#050505] text-white">
      {/* Header */}
      <div className="py-20 px-6 text-center border-b border-white/10">
        <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-3">
          Our Expertise
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold">
          Solutions That Power{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Growth
          </span>
        </h3>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row relative">
        
        {/* --- LEFT SIDE: SCROLL CONTENT --- */}
        <div className="w-full md:w-1/2 order-2 md:order-1 relative z-10">
          {SOLUTIONS.map((item, index) => (
            <div
              key={item.id}
              ref={addToRefs}
              className="flex flex-col justify-center border-l border-white/10 p-6 py-20 md:p-[5.5rem] md:pt-32 md:min-h-screen"
            >
              <div
                className={`max-w-lg transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-100" : "md:opacity-30"
                }`}
              >
                {/* --- MOBILE FLIP CARD --- */}
                <div className="block md:hidden w-full aspect-square mb-8 rounded-2xl overflow-hidden shadow-2xl">
                   <FlipCard 
                      item={item} 
                      isFlipped={flippedCardId === item.id} 
                      onFlip={handleFlip} 
                   />
                </div>

                <span className="text-6xl font-black text-blue-500 mb-4 block">
                  0{item.id}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  {item.desc}
                </p>
                
                {/* Button that Toggles Flip (Works for Mobile & Desktop logic) */}
                <button 
                  onClick={() => handleFlip(item.id)}
                  className="flex items-center gap-3 text-blue-500 font-bold uppercase tracking-wider text-sm group hover:text-white transition-colors focus:outline-none"
                >
                  <span className="w-8 h-[1px] bg-blue-500 group-hover:w-16 transition-all duration-300"></span>
                  {flippedCardId === item.id ? "Close Details" : "Learn More"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- RIGHT SIDE: DESKTOP STACKED FLIP CARDS --- */}
        <div
          ref={rightPanelRef}
          className="hidden md:flex w-1/2 h-screen items-start justify-center order-1 md:order-2 sticky top-0 overflow-hidden pt-[150px]"
        >
          <div className="relative w-[80%] aspect-square">
            
            {SOLUTIONS.map((item, index) => {
              const isActive = index <= activeIndex;
              const isFlipped = flippedCardId === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  className="absolute inset-0 w-full h-full"
                  style={{ zIndex: index }}
                  
                  // "Wipe" Animation for Stacking
                  initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
                  animate={{
                    clipPath: isActive
                        ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" // Visible
                        : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",    // Hidden
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  
                  {/* --- FIX: STATIC BLACK BLOCKER --- 
                      This prevents seeing the previous card underneath during the flip. 
                  */}
                  <div className="absolute inset-0 bg-[#0a0a0a] rounded-2xl" />

                  {/* Reuse the FlipCard Component */}
                  <FlipCard 
                    item={item} 
                    isFlipped={isFlipped} 
                    onFlip={handleFlip} 
                  />

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative top-15 z-10 flex items-center justify-center"><UniqueButton/></div>
    </section>
  );
}