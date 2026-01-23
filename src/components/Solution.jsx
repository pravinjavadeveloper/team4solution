import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import mob from "../assets/Parallex/mobapp.png";
import web from "../assets/Parallex/webdev.png";
import ecomm from "../assets/Parallex/ecom.png";
import saas from "../assets/Parallex/sassdev.png";
import uiux from "../assets/Parallex/uiiuxdes.png";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

// --- 1. DATA CONFIGURATION ---
const SOLUTIONS = [
  {
    id: 1,
    title: "Mobile App Development",
    desc: "We build high-performance, feature-packed native mobile applications for iOS & Android. Our apps deliver seamless user experiences and robust functionality.",
    img: mob,
  },
  {
    id: 2,
    title: "Website Development",
    desc: "Create a powerful digital footprint with our custom web development services. We ensure responsive, fast, and secure websites tailored to your brand.",
    img: web,
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    desc: "Drive sales with our scalable e-commerce platforms. From Shopify to custom builds, we create secure shopping experiences that convert visitors into customers.",
    img: ecomm,
  },
  {
    id: 4,
    title: "SaaS Development",
    desc: "We engineer scalable Software-as-a-Service products. Our multi-tenant architectures are secure, efficient, and ready for global growth.",
    img: saas,
  },
  {
    id: 5,
    title: "UI/UX Designing",
    desc: "User-centric design is at our core. We craft intuitive interfaces and engaging user experiences that make your digital products a joy to use.",
    img: uiux,
  },
];

export default function Solutions() {
  const containerRef = useRef(null);
  const rightPanelRef = useRef(null);
  const cardsRef = useRef([]);

  const [activeIndex, setActiveIndex] = useState(-1);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      // RESPONSIVE LOGIC: Only run pinning/active-index logic on Desktop
      const mm = gsap.matchMedia();

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
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative bg-[#050505] text-white">
      {/* Header Section */}
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

      {/* Main Content Area */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row relative">
        
        {/* --- LEFT SIDE: SCROLLING CONTENT --- */}
        <div className="w-full md:w-1/2 order-2 md:order-1 relative z-10">
          {SOLUTIONS.map((item, index) => (
            <div
              key={item.id}
              ref={addToRefs}
              className="flex flex-col justify-center border-l border-white/10 p-6 py-20 md:p-[5.5rem] md:pt-32 md:min-h-screen"
            >
              <div
                // --- FIXED HERE ---
                // 1. Removed style={{ opacity: ... }}
                // 2. Used Tailwind classes: "md:opacity-30" handles desktop dimming.
                // 3. On Mobile, "md:" is ignored, so it defaults to opacity-100 (Full Visibility).
                className={`max-w-lg transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-100" : "md:opacity-30"
                }`}
              >
                
                {/* Mobile Only Image */}
                <div className="block md:hidden mb-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img src={item.img} alt={item.title} className="w-full h-auto object-cover" />
                </div>

                <span className="text-6xl font-black text-white/5 mb-4 block">
                  0{item.id}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  {item.desc}
                </p>
                <button className="flex items-center gap-3 text-blue-500 font-bold uppercase tracking-wider text-sm group hover:text-white transition-colors">
                  <span className="w-8 h-[1px] bg-blue-500 group-hover:w-16 transition-all duration-300"></span>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- RIGHT SIDE: PINNED IMAGES (Desktop Only) --- */}
        <div
          ref={rightPanelRef}
          className="hidden md:flex w-1/2 h-screen items-start justify-center order-1 md:order-2 sticky top-0 overflow-hidden pt-[150px]"
        >
          {/* Image Container */}
          <div className="relative w-[80%] aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
            {SOLUTIONS.map((item, index) => (
              <motion.div
                key={item.id}
                className="absolute inset-0 w-full h-full"
                
                // Initial State
                initial={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                }}
                
                // Animate based on active index
                animate={{
                  clipPath:
                    index <= activeIndex
                      ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" // Visible
                      : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", // Hidden
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[10vh]"></div>
    </section>
  );
}