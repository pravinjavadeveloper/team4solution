import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function UniqueButton() {
  return (
    <motion.button
      className="group relative w-full sm:w-[220px] h-[60px] rounded-full bg-blue-600 overflow-hidden shadow-lg"
      initial="initial"
      whileHover="hover"
    >
      {/* --- LAYER 1: BOTTOM (Static State) --- */}
      {/* Visible initially. Covered by the white wiper on hover. */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* We use padding-left to offset text because the circle is on the left initially */}
        <span className="pl-12 font-bold uppercase tracking-wider text-white">
          Get Consult
        </span>
      </div>

      {/* --- LAYER 2: THE WIPER (Animation State) --- */}
      {/* This is the White Circle that expands to fill the button */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 bg-white rounded-full overflow-hidden z-10"
        variants={{
          initial: { width: "60px" }, // Start as a perfect circle (60px x 60px)
          hover: { width: "100%" },   // Expand to full width
        }}
        transition={{ duration: 1, ease: [0.5, 1, 0.5, 1] }} // Smooth "Bezier" easing
      >
        {/* --- CONTENT INSIDE THE WIPER --- */}
        {/* We need a container that is the FULL width of the button so the text stays centered relative to the button, not the growing circle */}
        <div className="absolute inset-0 w-[calc(100vw-3rem)] sm:w-[220px] h-full flex items-center justify-center">
          
          {/* 1. The Text "Book Now" (Blue) */}
          {/* It is revealed as the white background expands over it */}
          <motion.span 
            className="font-bold uppercase tracking-wider text-blue-600 whitespace-nowrap pr-8"
            variants={{
                initial: { opacity: 0, x: -20 }, // Starts slightly left and invisible
                hover: { opacity: 1, x: 0 }      // Slides in naturally with the wipe
            }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Book Now
          </motion.span>

        </div>

        {/* 2. The Arrow (The Leader) */}
        {/* This stays pinned to the RIGHT edge of the white wiper, effectively moving Left -> Right */}
        <div className="absolute right-0 top-0 h-full w-[60px] flex items-center justify-center">
          <ArrowRight className="text-blue-600" size={24} strokeWidth={2.5} />
        </div>

      </motion.div>
    </motion.button>
  );
}