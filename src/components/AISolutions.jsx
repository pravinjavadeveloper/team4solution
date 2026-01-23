import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion"; 
import { Cpu, BrainCircuit, Bot, LineChart } from "lucide-react";

import robotVideo from "../assets/ai-web.mp4"; 

// --- DATA ---
const solutionsData = [
  {
    id: 1,
    title: "AI-Powered Apps",
    desc: "Machine-based intelligent tools boost the operational flow of a business, offering them a power-packed environment of modern technologies.",
    icon: <Cpu size={32} className="text-blue-400" />,
    position: "left",
  },
  {
    id: 2,
    title: "Generative AI Solutions",
    desc: "Generative AI is a form of intelligence that responds based on a large database stored within it, creating novel content.",
    icon: <BrainCircuit size={32} className="text-purple-400" />,
    position: "right",
  },
  {
    id: 3,
    title: "Intelligent Automation",
    desc: "Intelligent automation is most effective at automating functions, reducing costs, and increasing business efficiency.",
    icon: <Bot size={32} className="text-cyan-400" />,
    position: "left",
  },
  {
    id: 4,
    title: "Data-Driven Insights",
    desc: "Businesses gain more access to their data with AI-driven insights, helping them improve their operations and user experiences.",
    icon: <LineChart size={32} className="text-green-400" />,
    position: "right",
  },
];

// --- ANIMATION VARIANTS ---
const headerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const robotVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      delay: 0.1, 
      type: "spring", 
      bounce: 0.4 
    } 
  },
};

const cardPopVariant = {
  hidden: { opacity: 0, scale: 0.6, y: 60 },
  visible: (i) => ({ 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { 
      // INCREASED BASE DELAY: 1.0s (Wait for video) + Stagger
      delay: 1.0 + (i * 0.9), 
      type: "spring", 
      damping: 10, 
      stiffness: 100 
    } 
  }),
};

export default function AISolutions() {
  const leftCards = solutionsData.filter((item) => item.position === "left");
  const rightCards = solutionsData.filter((item) => item.position === "right");

  // --- VIDEO LOGIC STATE ---
  const videoRef = useRef(null);
  const containerRef = useRef(null); 
  const [videoFinished, setVideoFinished] = useState(false);
  
  // 1. SINGLE SOURCE OF TRUTH FOR ANIMATION TRIGGER
  // 'amount: 0.8' ensures we wait until the robot is mostly visible
  const isRobotInView = useInView(containerRef, { amount: 0.8, once: true });

  useEffect(() => {
    if (isRobotInView && videoRef.current) {
        videoRef.current.play().catch(error => {
            console.log("Autoplay prevented:", error);
        });
    }
  }, [isRobotInView]);

  return (
    <section className="bg-black text-white py-24 relative overflow-hidden min-h-screen flex items-center">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-900/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* --- HEADER --- */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 variants={headerVariant} className="text-4xl md:text-6xl font-bold mb-6">
            Next-Gen AI Solutions
          </motion.h2>
          <motion.p variants={headerVariant} className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            As a leading AI development company, we facilitate AI-powered and AI-native solutions to bring life to your custom apps.
          </motion.p>
        </motion.div>


        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 relative">
          
          {/* --- CENTER: THE ROBOT --- */}
          <div className="relative w-full h-[300px] lg:h-auto lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:mt-10 z-0 lg:w-[1000px] flex items-center justify-center">
            <motion.div
               ref={containerRef} 
               variants={robotVariant}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="w-full h-full flex items-center justify-center"
            >
               <video
                  ref={videoRef}
                  src={robotVideo}
                  muted
                  playsInline
                  loop={false}
                  className="w-full h-full object-contain lg:object-cover"
                  onTimeUpdate={(e) => {
                    const stopPoint = e.target.duration * 0.99;
                    if (e.target.currentTime >= stopPoint) {
                      e.target.pause();
                      e.target.currentTime = stopPoint;
                      if (!videoFinished) setVideoFinished(true);
                    }
                  }}
               />
            </motion.div>
          </div>


          {/* --- CARDS CONTAINER --- */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-12 z-10 relative mt-8 lg:mt-0">
              
              {/* LEFT CARDS */}
              <div className="flex flex-col gap-16 lg:gap-32 lg:mt-12 order-2 lg:order-1">
                  {leftCards.map(item => (
                    <AISolutionCard 
                      key={item.id} 
                      item={item} 
                      index={item.id === 1 ? 1 : 3}
                      shouldAnimate={isRobotInView} // PASS TRIGGER
                    />
                  ))}
              </div>

              {/* MIDDLE SPACER */}
              <div className="hidden lg:block order-1 lg:order-2"></div>

              {/* RIGHT CARDS */}
              <div className="flex flex-col gap-16 lg:gap-32 lg:mt-12 order-3">
                  {rightCards.map(item => (
                    <AISolutionCard 
                      key={item.id} 
                      item={item} 
                      index={item.id === 2 ? 0 : 2}
                      shouldAnimate={isRobotInView} // PASS TRIGGER
                    />
                  ))}
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- CARD COMPONENT ---
function AISolutionCard({ item, index, shouldAnimate }) {
  const isLeftSide = item.id === 1 || item.id === 3;

  return (
    <motion.div 
      custom={index} 
      variants={cardPopVariant}
      initial="hidden"
      // FIXED: Use the 'shouldAnimate' prop instead of 'whileInView'
      // This ensures cards ONLY reveal when the robot video actually starts.
      animate={shouldAnimate ? "visible" : "hidden"}
      
      className={`flex flex-col gap-4 max-w-sm mx-auto lg:mx-0 items-center text-center ${
        isLeftSide ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
      }`} 
    >
      <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-2 relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         <div className="relative z-10">{item.icon}</div>
      </div>
      
      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
      <p className="text-gray-400 leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  );
}