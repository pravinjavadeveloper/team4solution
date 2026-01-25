import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GetConsulting from "./GetConsulting"; // Import the form directly here

export default function UniqueButton() {
  // Internal state to handle the form
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* --- THE BUTTON --- */}
      <motion.button
        onClick={() => setIsFormOpen(true)} // Opens the form
        className="group relative w-full sm:w-[220px] h-[60px] rounded-full bg-blue-600 overflow-hidden shadow-lg"
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        {/* --- LAYER 1: BOTTOM (Static State) --- */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="pl-12 font-bold uppercase tracking-wider text-white">
            Get Consult
          </span>
        </div>

        {/* --- LAYER 2: THE WIPER (Animation State) --- */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 bg-white rounded-full overflow-hidden z-10"
          variants={{
            initial: { width: "60px" }, 
            hover: { width: "100%" }, 
          }}
          transition={{ duration: 1, ease: [0.5, 1, 0.5, 1] }} 
        >
          {/* Content inside the wiper */}
          <div className="absolute inset-0 w-[calc(100vw-3rem)] sm:w-[220px] h-full flex items-center justify-center">
            <motion.span 
              className="font-bold uppercase tracking-wider text-blue-600 whitespace-nowrap pr-8"
              variants={{
                  initial: { opacity: 0, x: -20 }, 
                  hover: { opacity: 1, x: 0 } 
              }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Book Now
            </motion.span>
          </div>

          {/* The Arrow */}
          <div className="absolute right-0 top-0 h-full w-[60px] flex items-center justify-center">
            <ArrowRight className="text-blue-600" size={24} strokeWidth={2.5} />
          </div>

        </motion.div>
      </motion.button>

      {/* --- THE FORM (Rendered automatically) --- */}
      <GetConsulting 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
}