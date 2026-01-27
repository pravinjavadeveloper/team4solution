import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// --- IMPORT YOUR IMAGES HERE ---
import img1 from "../blog/img1.png";
import img2 from "../blog/img2.png";
import img3 from "../blog/img3.png";
import img4 from "../blog/img4.png";
import img5 from "../blog/img5.png";
import img6 from "../blog/img6.png";


const IMAGES = [img1, img2, img3, img4, img5, img6];

export default function InteractiveLanding() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  
  // State to track screen size for positioning & text logic
  const [isDesktop, setIsDesktop] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false); // Tracks if user clicked yet

  useEffect(() => {
    // 1. Handle Resize
    const checkSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    // Initial check
    checkSize();
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  // --- 2. Cursor Movement ---
  const moveCursor = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: "power2.out",
      autoAlpha: 1, 
    });
  };

  // --- 3. Click Interaction ---
  const handleInteraction = (event) => {
    if (!hasInteracted) setHasInteracted(true);

    const container = containerRef.current;
    
    // Check for mobile screen on every click
    const isMobile = window.innerWidth <= 768;

    // --- STRICT SIZE CONFIGURATION ---
    const elWidth = isMobile ? 100 : 400; 
    const elHeight = isMobile ? 120 : 350; 

    // Create Container
    let itemContainer = document.createElement("div");
    const randomImg = IMAGES[Math.floor(Math.random() * IMAGES.length)];
    
    itemContainer.innerHTML = `<img src="${randomImg}" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px; display: block;" />`;
    container.appendChild(itemContainer); 

    // --- POSITIONING ---
    Object.assign(itemContainer.style, {
      position: "fixed", 
      width: `${elWidth}px`,
      height: `${elHeight}px`,
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      zIndex: 100,
      borderRadius: "12px"
    });

    // --- ANIMATION ---
    const randomRotation = Math.random() * 10 - 5;
    
    gsap.set(itemContainer, {
      scale: 0,
      rotation: randomRotation,
      transformOrigin: "center",
      xPercent: -50,
      yPercent: -50
    });

    const tl = gsap.timeline();
    const floatDist = isMobile ? 150 : 400;

    tl.to(itemContainer, {
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)"
    });

    tl.to(itemContainer, {
      y: `-=${floatDist}`,
      opacity: 0,
      duration: 3,
      ease: "power1.in",
      onComplete: () => {
        if (itemContainer.parentNode) {
          itemContainer.parentNode.removeChild(itemContainer);
        }
      }
    }, "-=0.2");
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, {
        autoAlpha: 0,
        duration: 0.3
    });
  };

  return (
    <div
      onMouseMove={moveCursor}
      onMouseDown={handleInteraction} 
      onMouseLeave={handleMouseLeave}
      style={{
        width: "100%", // Fixed horizontal scrollbar issue
        height: "80vh",
        overflow: "hidden",
        background: "#000",
        fontFamily: '"PP Neue Montreal", sans-serif',
        position: "relative",
        cursor: "none", 
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 10,
        }}
      ></div>

      {/* --- RESPONSIVE HINT TEXT --- */}
      {!hasInteracted && (
        <div 
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "rgba(255, 255, 255, 0.4)",
                
                // --- RESPONSIVE STYLES START ---
                fontSize: isDesktop ? "14px" : "10px",   // Smaller on mobile
                letterSpacing: isDesktop ? "2px" : "1px", // Tighter on mobile
                // --- RESPONSIVE STYLES END ---
                
                textTransform: "uppercase",
                pointerEvents: "none",
                zIndex: 15,
                whiteSpace: "nowrap", // Prevents text breaking into 2 lines
                animation: "pulse 2s infinite"
            }}
        >
            {/* Change Text based on Device: "CLICK" for PC, "TAP" for Mobile */}
            ( {isDesktop ? "CLICK" : "TAP"} TO REVEAL )
        </div>
      )}

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "0px",
          height: "0px",
          zIndex: 0,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          opacity: 0 
        }}
      >
        
      </div>

      {/* Wrapper (Header Content) */}
      <div
        className="wrapper"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 20,
          pointerEvents: "none",
        }}
      >
        <div
          className="header"
          style={{
            position: "absolute",
            // Pushed down 30px on laptop/desktop to create space, 0 on mobile
            bottom: isDesktop ? "-30px" : "0px", 
            width: "100%",
            transition: "bottom 0.3s ease",
          }}
        >
          <h1
            style={{
              textTransform: "uppercase",
              fontFamily: '"PP Editorial Old", serif',
              fontSize: "15vw",
              fontWeight: 300,
              color: "#fff",
              textAlign: "center",
              lineHeight: "100%",
              margin: 0,
            }}
          >
            Our-Blogs
          </h1>
        </div>
      </div>

      {/* Inline Style for Pulse Animation */}
      <style>{`
        @keyframes pulse {
            0% { opacity: 0.3; }
            50% { opacity: 0.8; }
            100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}