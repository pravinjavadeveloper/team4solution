import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "../assets/herobanner.png"; 
import UniqueButton from "./UniqueButton";

const words = ["Software", "Mobile Apps", "Website", "SaaS", "UI/UX"];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050505] flex items-center">
      
      {/* --- Background Image --- */}
      <motion.div
      
        className="absolute inset-0 z-0 will-change-transform"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.09, 1] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <img src={heroBg} alt="AI Background" className="w-full h-full object-cover opacity-50"/>
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60 z-10"></div>
      </motion.div>

      {/* --- Text Content --- */}
      <div className="relative z-20 px-6 sm:px-8 md:px-12 w-full max-w-7xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl" // Increased max-width to fit longer text
        >
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6">
            Building Future-Ready <br className="hidden sm:block" />
            AI Apps &{" "}
            
            {/* FIXED LAYOUT CONTAINER:
               1. inline-flex: Keeps it on the same line.
               2. w-[280px]...: Reserves specific width for longest word ("Mobile Apps") so "Solutions" doesn't jump.
               3. text-left: Aligns text to start.
            */}
            <span className="text-blue-600 inline-flex flex-col h-[1.2em] w-[220px] sm:w-[340px] md:w-[400px] lg:w-[480px] overflow-hidden align-bottom relative top-0 sm:top-3 md:-top-1">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={words[index]}
                  // Absolute positioning ensures the outgoing word doesn't push the new one
                  className="absolute left-0" 
                  initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }} 
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}   
                  exit={{ y: "-120%", opacity: 0, filter: "blur(10px)" }}   
                  transition={{ 
                    y: { type: "spring", stiffness: 100, damping: 20 }, // Smooth GSAP-like spring
                    opacity: { duration: 0.4 }
                  }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            
            <span className="text-white-600 block sm:inline"> Solutions</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
            We are a globally recognized software development company, best known for our agile apps for multiple industry verticals. We aim to deliver feature-rich solutions.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-6 items-center sm:items-start">
             <UniqueButton/>
            
          </div>

        </motion.div>
      </div>

    </div>
  );
}