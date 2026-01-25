import React, { useRef, useState } from "react";
import gsap from "gsap";
import ig from "../assets/l3.png"

// --- CONFIGURATION ---
const stats = [
  { 
    id: 1, label: "Increased ROI", sub: "We help startups turn their ideas into profit.", value: 30, 
    color: "#d946ef", 
  },
  { 
    id: 2, label: "Customer Base", sub: "Expanding reach globally.", value: 25, 
    color: "#8b5cf6",  
  },
  { 
    id: 3, label: "Time Reduction", sub: "Faster market delivery.", value: 15, 
    color: "#f59e0b",  
  },
  { 
    id: 4, label: "Brand Visibility", sub: "Seen by millions daily.", value: 20, 
    color: "#ec4899", 
  },
  { 
    id: 5, label: "Lower Cost", sub: "Optimized spending.", value: 10, 
    color: "#ef4444", 
  },
];

// --- MATH HELPERS ---
const RADIUS = 140; // Radius of the donut ring
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0);
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

export default function PartnerStats() {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // --- ANIMATION HANDLER ---
  const handleReveal = () => {
    if (isOpen) return;
    setIsOpen(true);

    const tl = gsap.timeline();

    // 1. Center Button Pulse
    tl.to(".click-hint", { opacity: 0, duration: 0.2 })
      .to(".center-btn", { scale: 1.1, duration: 0.2 })
      .to(".center-btn", { scale: 1, duration: 0.2 });

    // 2. Circular "Wipe" Fill
    tl.to(".donut-segment", {
      strokeDasharray: (i, target) => target.dataset.finalDash,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.1
    });

  
    // 4. Lines Draw Out (Bent Lines)
    tl.to(".connector-path", { strokeDashoffset: 0, duration: 0.6, stagger: 0.05 }, "-=0.8");

    // 5. Text Reveals
    tl.to(".stat-label", { opacity: 1, x: 0, duration: 0.5, stagger: 0.05 }, "-=0.6");
  };

  // --- PRE-CALCULATE LAYOUT ---
  let currentOffset = 0;
  
  const chartData = stats.map((stat) => {
    const segmentLength = (stat.value / 100) * CIRCUMFERENCE;
    const gapLength = CIRCUMFERENCE - segmentLength;
    const rotation = (currentOffset / 100) * 360;
    const midAngle = rotation + ((stat.value / 100) * 360) / 2;
    currentOffset += stat.value;

    // --- LINE CALCULATION ---
    const lineStart = polarToCartesian(400, 400, RADIUS + 40, midAngle);
    const elbow = polarToCartesian(400, 400, RADIUS + 80, midAngle);
    
    const isRightSide = midAngle < 180;
    const lineEnd = { 
        x: isRightSide ? elbow.x + 60 : elbow.x - 60, 
        y: elbow.y 
    };

    const pathD = `M ${lineStart.x} ${lineStart.y} L ${elbow.x} ${elbow.y} L ${lineEnd.x} ${lineEnd.y}`;

    return {
      ...stat,
      rotation,
      segmentLength,
      gapLength,
      midAngle,
      iconPos: polarToCartesian(400, 400, RADIUS, midAngle),
      lineEnd, 
      pathD, 
      isRightSide
    };
  });

  return (
    <section ref={containerRef} className="bg-black text-white min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
        
        {/* --- LEFT SIDE: TEXT --- */}
        <div className="relative z-10 space-y-8 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Partner with us
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Businesses are built on trust and integrity. Our partners rely on us for top-class software services 
            and unmatched business relationships. They trust us with our result-oriented development strategies 
            and success metrics.
          </p>
        </div>

        {/* --- RIGHT SIDE: INTERACTIVE CHART --- */}
        {/* <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center scale-100 md:scale-100"> */}
          <div className="relative w-full h-[350px] md:h-[600px] flex items-center justify-center scale-80 md:scale-100">
          
          {/* CENTER BUTTON */}
          <div 
            onClick={handleReveal}
            className={`center-btn absolute z-50 w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 ${isOpen ? 'cursor-default' : 'cursor-pointer hover:scale-105'}`}
          >
             <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    {isOpen ? (
                        <img src={ig} alt="AI Background" className="w-11 object-contain"/>
                    ) : (
                        <span className="click-hint text-pink-600 font-bold text-xs uppercase tracking-widest text-center leading-tight">Click<br/>Me</span>
                    )}
                 </div>
             </div>
          </div>

          {/* SVG LAYER */}
          <svg className="w-full h-full pointer-events-none" viewBox="0 0 800 800">
          {/* <svg className="w-full h-full pointer-events-none" viewBox="-100 0 1000 800"> */}

            
            {chartData.map((slice) => (
              <g key={slice.id}>
                
                {/* 1. DONUT SEGMENT */}
                <circle
                  cx="400" cy="400" r={RADIUS}
                  fill="none"
                  stroke={slice.color}
                  strokeWidth="80" 
                  className="donut-segment"
                  strokeDasharray={`0 ${CIRCUMFERENCE}`}
                  data-final-dash={`${slice.segmentLength} ${slice.gapLength}`}
                  transform={`rotate(${slice.rotation - 90} 400 400)`}
                />

                {/* 2. ICON (FIXED: Added the Icon Component Here) */}

                {/* 3. BENT CONNECTOR LINE */}
                <path
                    d={slice.pathD}
                    fill="none"
                    stroke={slice.color}
                    strokeWidth="2"
                    className="connector-path"
                    strokeDasharray="300"
                    strokeDashoffset="300"
                />

                {/* 4. TEXT LABEL */}
                <foreignObject
                    // Adjusted X position to prevent cutoff
                    x={slice.isRightSide ? slice.lineEnd.x + 15 : slice.lineEnd.x - 175}
                    y={slice.lineEnd.y - 40}
                    width="180" height="100" // Increased width for better text wrapping
                    className="overflow-visible"
                >
                      <div className={`stat-label opacity-0 ${slice.isRightSide ? 'text-left translate-x-4' : 'text-right -translate-x-4'}`}>
                         <div className="text-3xl font-black text-white leading-none mb-1" style={{ color: slice.color }}>
                             {slice.value}%
                         </div>
                         <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                             {slice.label}
                         </div>
                         <div className="text-xs text-gray-400 leading-tight">
                             {slice.sub}
                         </div>
                      </div>
                </foreignObject>

              </g>
            ))}
          </svg>

        </div>
      </div>
    </section>
  );
}

