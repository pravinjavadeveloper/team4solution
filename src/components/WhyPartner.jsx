import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Replace with your actual video
import handShakeVideo from '../assets/human.mp4'; 

// --- DATA CONFIGURATION ---
const points = [
  // --- LEFT SIDE ---
  { 
    id: 1, title: "Certified Developers", desc: "Expert teams trained in the latest AI & ML technologies.", 
    top: 10, left: 0, delay: 0.1,
    pathD: "M 48 45 L 30 20 L 15 20" 
  },
  { 
    id: 2, title: "Cost-Effective", desc: "Scale higher in less time with our strategic roadmaps.", 
    top: 40, left: -5, delay: 0.3,
    pathD: "M 45 50 L 10 50" 
  },
  { 
    id: 3, title: "Agile Methodology", desc: "Faster, seamless delivery working on the same page with stakeholders.", 
    top: 70, left: 5, delay: 0.5,
    pathD: "M 48 55 L 30 80 L 15 80" 
  },

  // --- RIGHT SIDE ---
  { 
    id: 4, title: "No-Cost Maintenance", desc: "6 months support included covering bug fixes and updates.", 
    top: 10, left: 83, delay: 0.2,
    pathD: "M 52 45 L 70 20 L 85 20" 
  },
  { 
    id: 5, title: "NDA Protection", desc: "Your data remains safe. We build trustworthy global connections.", 
    top: 40, left: 70, delay: 0.4,
    pathD: "M 55 50 L 90 50" 
  },
  { 
    id: 6, title: "Transparent Comms", desc: "Open collaboration building trust and confidence.", 
    top: 70, left: 80, delay: 0.6,
    pathD: "M 52 55 L 70 80 L 85 80" 
  },
];

export default function WhyPartner() {
  const [videoFinished, setVideoFinished] = useState(false);
  const videoRef = useRef(null);

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center py-20">
      
      {/* --- SECTION HEADER --- */}
      <div className="text-center mb-10 md:mb-16 px-6 relative z-50">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Partner With Team4Solutions Software?
          </h2>
          <p className="text-gray-400 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            We combine expertise, innovation, and agility to deliver IT solutions that drive measurable results.
          </p>
      </div>

      {/* =========================================
          MOBILE VIEW (Vertical Grid) - Visible only on small screens
         ========================================= */}
      <div className="md:hidden w-full px-6 flex flex-col gap-8 relative z-40">
        
        {/* Mobile Video (Top) */}
        <div className="w-full h-[250px] rounded-2xl overflow-hidden border border-[#00ff9d]/30 shadow-lg relative">
             <video
                src={handShakeVideo}
                autoPlay
                muted
                playsInline
                loop={true} // Loop on mobile for constant visual interest
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Mobile Cards (Grid) */}
        <div className="grid grid-cols-1 gap-4">
            {points.map((point) => (
                <div 
                    key={point.id} 
                    className="p-5 rounded-xl border border-[#00ff9d]/20 bg-[#0a0a0a] flex items-start gap-4"
                >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#00ff9d]/10 text-[#00ff9d] flex items-center justify-center font-bold text-lg border border-[#00ff9d]/30">
                        {point.id}
                    </div>
                    <div>
                        <h3 className="text-[#00ff9d] font-bold text-lg mb-1">{point.title}</h3>
                        <p className="text-gray-400 text-sm leading-snug">{point.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>


      {/* =========================================
          DESKTOP VIEW (Spider Layout) - Hidden on small screens
         ========================================= */}
      <div className="hidden md:flex relative w-full max-w-7xl h-[800px] items-center justify-center">
        
        {/* --- 1. THE CONNECTING LINES (SVG LAYER) --- */}
        <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-30"
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
        >
          <defs>
            <radialGradient 
                id="fadeGradient" 
                cx="50%" cy="50%" r="50%" 
                fx="50%" fy="50%" 
                gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#00ff9d" stopOpacity="0" />
              <stop offset="15%" stopColor="#00ff9d" stopOpacity="0" />
              <stop offset="35%" stopColor="#00ff9d" stopOpacity="1" />
              <stop offset="100%" stopColor="#00ff9d" stopOpacity="1" />
            </radialGradient>
          </defs>

          {videoFinished && points.map((point) => (
            <motion.path
              key={point.id}
              d={point.pathD}
              fill="transparent"
              stroke="url(#fadeGradient)" 
              strokeWidth="0.5" 
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: point.delay, ease: "easeOut" }}
            />
          ))}
        </svg>

        {/* --- 2. THE BUBBLES (TEXT BOXES) --- */}
        {points.map((point) => (
            <motion.div
            key={point.id}
            className="absolute z-40 w-72 p-5 rounded-2xl border border-[#00ff9d]/30 bg-black/90 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,157,0.1)] flex flex-col items-center text-center"
            style={{ 
                top: `${point.top}%`, 
                left: `${point.left}%`,
                transform: 'translate(-50%, -50%)' 
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={videoFinished ? { scale: 1, opacity: 1 } : {}}
            transition={{ 
                duration: 0.5, 
                delay: point.delay + 0.8, 
                type: "spring", 
                stiffness: 100 
            }}
            >
            <div className="w-10 h-10 mb-3 rounded-full bg-[#00ff9d] text-black flex items-center justify-center font-bold text-lg shadow-lg shadow-[#00ff9d]/50">
                {point.id}
            </div>
            <h3 className="text-[#00ff9d] font-bold text-xl leading-tight mb-2">{point.title}</h3>
            <p className="text-gray-400 text-base leading-snug">{point.desc}</p>
            </motion.div>
        ))}

        {/* --- 3. CENTRAL VIDEO CIRCLE --- */}
        <div className="relative z-20 w-[800px] h-[450px]">
          <video
            ref={videoRef}
            src={handShakeVideo}
            autoPlay
            muted
            playsInline
            loop={false}
            onTimeUpdate={(e) => {
                const stopPoint = e.target.duration * 0.95;
                if (e.target.currentTime >= stopPoint) {
                  e.target.pause();
                  e.target.currentTime = stopPoint;
                  if (!videoFinished) setVideoFinished(true);
                }
            }}
            className="w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl opacity-60"
          />
          <div className="absolute inset-0 bg-black/20 rounded-3xl z-10 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}

