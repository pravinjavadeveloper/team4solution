import React, { useLayoutEffect, useRef } from 'react'; // Changed useEffect to useLayoutEffect for better GSAP stability
import { useLocation } from 'react-router-dom'; // 1. IMPORT THIS
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import i1 from "../Blogs/img1.jpg";
import i2 from "../Blogs/img2.jpg";
import i3 from "../Blogs/img3.jpg";
import i4 from "../Blogs/img4.jpg";
import i5 from "../Blogs/img5.jpg";
import i6 from "../Blogs/img6.jpg";
import i7 from "../Blogs/img7.jpg";

gsap.registerPlugin(ScrollTrigger);

const BlogReveal = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  
  // 2. GET CURRENT LOCATION
  const location = useLocation(); 

  useLayoutEffect(() => { // Changed to useLayoutEffect
    const ctx = gsap.context(() => {
      
      // ========================================================
      // 1. INITIAL SETUP
      // ========================================================
      gsap.set("nav", { y: -100 });
      gsap.set(".letter-wrapper", { y: 400 });
      gsap.set(".item-copy-wrapper p", { y: 50 });

      gsap.set(".center-reveal", { clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" }); 
      gsap.set(".side-reveal", { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" });

      // ========================================================
      // 2. THE TIMELINE
      // ========================================================
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top", 
          end: "+=200%",
          scrub: 2, 
          pin: true, 
          invalidateOnRefresh: true, // IMPORTANT: Helps recalculate on resize/refresh
        },
        defaults: { ease: "power3.out" } 
      });

      // Step 1: Reveal Letters
      tl.to(".letter-wrapper", {
        y: 0,
        stagger: 0.3,
      })
      
      // Step 2: Split Text
      .to(".header-item-1", {
        left: "15vw", 
      })
      .to(".header-item-2", {
        right: "5vw", 
      }, "<")

      // Reveal Center Image
      .to(".center-reveal", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1
      }, "<")

      // Step 3: Text Comes Back
      .to(".header-item-1", {
        left: 0, 
        scale: 1, 
      })
      .to(".header-item-2", {
        right: 0, 
        scale: 1,
      }, "<")
      .to(".center-reveal img", {
        scale: 1, 
      }, "<")

      // Reveal Side Images
      .to(".side-reveal", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", 
        stagger: 0.1, 
      }, "<")
      
      // Final Adjustments
      .to(".header", {
        bottom: "0", 
      }, "<")
      .to(".item-copy-wrapper p", {
        y: 0, 
        stagger: 0.05,
      }, "<")
      .to("nav", {
        y: 0, 
      }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, []); // Run once on mount

  // 3. FORCE REFRESH WHEN ROUTE CHANGES
  // This detects when you navigate to a new page and forces GSAP to
  // re-measure where the BlogReveal section is located.
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100); // Small delay to allow new page to render
    return () => clearTimeout(timer);
  }, [location.pathname]); // Dependency: Runs every time URL changes

  return (
    <div ref={containerRef} className="bg-[#000000] font-['PP_Neue_Montreal',sans-serif]">
      
      <div ref={triggerRef} className="h-screen w-full relative overflow-hidden flex justify-center items-center">
        
        {/* GRID CONTAINER */}
        <div className="w-full h-auto md:h-[50vh] flex flex-col md:flex-row items-center md:items-end justify-center gap-4 px-4 pt-[20vh] md:pt-[15vh] relative z-10 -top-35">
          
          {/* LEFT ITEMS (Hidden on Mobile) */}
          <SideItem img={i1}/>
          <SideItem img={i2} />
          <SideItem img={i3} />

          {/* CENTER ITEM */}
          <div className="relative w-full h-[50vh] md:h-[120%] md:flex-[1.5] flex flex-col justify-end">
            
            <div className="center-reveal flex-1 overflow-hidden w-full h-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}>
              <img src={i4} alt="Main" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* RIGHT ITEMS (Hidden on Mobile) */}
          <SideItem img={i5}  />
          <SideItem img={i6} />
          <SideItem img={i7}/>

        </div>

        {/* HEADER TEXT */}
        <div className="header absolute top-[12%] md:top-auto md:bottom-[35%] w-full flex justify-center pointer-events-none z-10 mix-blend-difference md:mix-blend-normal transform-origin-center">
          <div className="header-item-1 relative flex justify-center scale-25 left-[25vw]">
            <Letter char="O" />
            <Letter char="U" />
            <Letter char="R" />
          </div>
          <div className="header-item-2 relative flex justify-center scale-25 right-[11vw]">
            <Letter char="B" />
            <Letter char="L" />
            <Letter char="O" />
            <Letter char="G" />
            <Letter char="S" />
          </div>
        </div>

      </div>
      
    </div>
  );
};

// --- Helper Components ---

const SideItem = ({ title, cat, img }) => (
  // Hidden on mobile (hidden md:flex)
  <div className="hidden md:flex relative h-[150px] md:h-full flex-1 flex-col w-full justify-end shrink-0">
    <div className="p-2 h-[40px] flex flex-col justify-center">
      <div className="item-copy-wrapper overflow-hidden clip-path-polygon">
        <p className="text-[13.5px] font-medium leading-[100%] text-white">{title}</p>
      </div>
      <div className="item-copy-wrapper overflow-hidden clip-path-polygon">
        <p className="text-[10px] text-gray-500 leading-[100%]">{cat}</p>
      </div>
    </div>

    <div className="side-reveal flex-1 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}>
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>
  </div>
);

const Letter = ({ char }) => (
  <div className="flex-1 text-[17vw] font-light flex justify-center items-center h-full text-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
    <div className="letter-wrapper relative">
      {char}
    </div>
  </div>
);

export default BlogReveal;