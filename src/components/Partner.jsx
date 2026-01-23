import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --- CONFIGURATION ---
const POINTS = [
  { id: 1, x: 200, y: 250, label: "Legacy Systems & Data Silos" }, 
  { id: 2, x: 1100, y: 400, label: "Inefficient Manual Workflows" }, 
  { id: 3, x: 400, y: 650, label: "Lack of Scalability" }, 
  { id: 4, x: 1200, y: 800, label: "Security Vulnerabilities" }, 
];

const CONNECTIONS = [
    { start: {x: 0, y: 0}, end: POINTS[0], id: "path-0" }, 
    { start: POINTS[0], end: POINTS[1], id: "path-1" },
    { start: POINTS[1], end: POINTS[2], id: "path-2" },
    { start: POINTS[2], end: POINTS[3], id: "path-3" },
];

export default function Partner() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    const paths = gsap.utils.toArray(".connect-path");
    const circles = gsap.utils.toArray(".problem-circle");

    // 1. Hide circles initially
    gsap.set(circles, { scale: 0, opacity: 0 });

    // 2. Prepare SVG paths for "drawing" animation
    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
      });
    });

    // --- The Animation Timeline ---
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      delay: 0.5, 
    });

    CONNECTIONS.forEach((conn, index) => {
       // Animate the Green Path
       tl.to(`#${conn.id}`, {
         strokeDashoffset: 0,
         duration: 1.2,
         ease: "power2.inOut",
       });

       // Animate the White Bubble popping up
       if(index < POINTS.length) {
         tl.to(`#circle-${POINTS[index].id}`, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
          }, "-=0.3");
       }
    });
    
    // Dim background video
    tl.to(videoRef.current, { opacity: 0.4, duration: 2 }, 0);

  }, { scope: containerRef });

  // --- HELPER: Create ZigZag "Tech" Lines ---
  // Matches the angular style of your reference image
  const getPathD = (start, end) => {
     // Creates an elbow connector: Horizontal then Vertical
     // M startX,startY L endX,startY L endX,endY
     return `M${start.x},${start.y} L${end.x},${start.y} L${end.x},${end.y}`;
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-[#050505] overflow-hidden flex items-center justify-center">
      
      {/* --- LAYER 1: BACKGROUND VIDEO --- */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          // loop attribute REMOVED so it plays only once
          className="w-full h-full object-cover opacity-60 transition-opacity"
          // Ensure this path is correct relative to your public folder
          src="assets\partner.mp4" 
        ></video>
        <div className="absolute inset-0 bg-[#050505]/80"></div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative w-full h-full max-w-[1440px] max-h-[900px] mx-auto z-10">

        {/* --- LAYER 2: SVG CONNECTING LINES --- */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {CONNECTIONS.map((conn) => (
            <path
              key={conn.id}
              id={conn.id}
              // Uses the new ZigZag logic for that "circuit" look
              d={getPathD(conn.start, conn.end)}
              className="connect-path"
              stroke="#00FF99" // EXACT NEON GREEN from your image
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round" // Makes the corners sharp/clean
              fill="none"
              style={{ opacity: 0 }}
            />
          ))}
        </svg>

        {/* --- LAYER 3: HTML BUBBLES --- */}
        {POINTS.map((point) => (
          <div
            key={point.id}
            id={`circle-${point.id}`}
            className="problem-circle absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(point.x / 1440) * 100}%`,
              top: `${(point.y / 900) * 100}%`,
            }}
          >
            {/* White Bubble Style (Matches Reference Image) */}
            <div className="bg-white text-blue-600 px-6 py-6 rounded-full shadow-[0_0_20px_rgba(0,255,153,0.3)] w-[180px] h-[180px] flex items-center justify-center text-center border-4 border-[#00FF99]">
              <p className="font-bold text-lg leading-tight">
                {point.label}
              </p>
            </div>

          </div>
        ))}
      </div>
      
    </section>
  );
}

