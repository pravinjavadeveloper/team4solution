import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight, X } from "lucide-react";
// Kept your path exactly as you requested
import GetConsulting from "./GetConsulting"; 

export default function Footer() {
  const [isConsultingOpen, setIsConsultingOpen] = useState(false);

  return (
    <>
      <footer 
        // 1. pt-28 (Mobile) & md:pt-32 (Desktop): Pushes content down so it's not hidden behind the Navbar.
        // 2. h-[100dvh]: Full height to look impressive.
        // 3. overflow-hidden: Keeps the single-screen look (no scrollbar).
        className="fixed bottom-0 left-0 w-full h-[100dvh] bg-[#0a0a0a] text-white flex flex-col justify-between px-4 md:px-12 pt-28 md:pt-12 pb-6 md:pb-12 -z-10 overflow-hidden"
      >
        
        {/* --- TOP SECTION: CALL TO ACTION --- */}
        {/* flex-shrink-0 ensures this section doesn't get crushed if screen is short */}
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-3 md:space-y-0 min-h-0 flex-shrink-0">
          <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1 md:space-y-4"
          >
              <h2 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-[10px] md:text-base">
                  Ready to Scale?
              </h2>
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]">
                  HAVE AN <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">IDEA?</span>
              </h1>
          </motion.div>

          {/* --- BUTTON (Fixed White Circle Issue) --- */}
          <motion.button
            onClick={() => setIsConsultingOpen(true)}
            // Added flex-shrink-0 to prevent button from getting flattened on laptop screens
            className="group relative w-[180px] md:w-[220px] h-[50px] md:h-[60px] rounded-full bg-blue-600 overflow-hidden shadow-lg mt-4 flex-shrink-0 cursor-pointer"
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="pl-8 md:pl-12 font-bold uppercase tracking-wider text-white text-xs md:text-sm">
                Start Project
              </span>
            </div>

            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-white rounded-full overflow-hidden z-10"
              variants={{
                // FIX: Used 28% so it matches height on both Mobile (50px) and Desktop (60px)
                initial: { width: "28%" }, 
                hover: { width: "100%" }, 
              }}
              transition={{ duration: 0.8, ease: [0.5, 1, 0.5, 1] }} 
            >
              <div className="absolute inset-0 w-[180px] md:w-[220px] h-full flex items-center justify-center">
                <motion.span 
                  className="font-bold uppercase tracking-wider text-blue-600 whitespace-nowrap pr-6 md:pr-8 text-xs md:text-sm"
                  variants={{
                      initial: { opacity: 0, x: -20 }, 
                      hover: { opacity: 1, x: 0 } 
                  }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Book Now
                </motion.span>
              </div>

              {/* Arrow Container matches width of the white circle */}
              <div className="absolute right-0 top-0 h-full w-[50px] md:w-[60px] flex items-center justify-center">
                <ArrowRight className="text-blue-600 w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
              </div>

            </motion.div>
          </motion.button>
        </div>

        {/* --- MIDDLE SECTION: LINKS --- */}
        {/* flex-shrink-0 ensures links are always visible and not pushed off screen */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-4 border-t border-white/10 pt-3 pb-2 md:pt-12 md:pb-8 shrink-0">
          
          <div className="space-y-1 md:space-y-4">
              <h3 className="text-xs md:text-lg font-bold text-white">Services</h3>
              <ul className="space-y-0.5 md:space-y-2 text-gray-400 text-[9px] md:text-sm leading-tight">
                  <li className="hover:text-blue-500 cursor-pointer">Staff Augmentation</li>
                  <li className="hover:text-blue-500 cursor-pointer">Managed Services</li>
                  <li className="hover:text-blue-500 cursor-pointer">Technology Solutions</li>
              </ul>
          </div>

          <div className="space-y-1 md:space-y-4">
              <h3 className="text-xs md:text-lg font-bold text-white">Expertise</h3>
              <ul className="space-y-0.5 md:space-y-2 text-gray-400 text-[9px] md:text-sm leading-tight">
                  <li className="hover:text-blue-500 cursor-pointer">Software Development</li>
                  <li className="hover:text-blue-500 cursor-pointer">Cloud Computing</li>
                  <li className="hover:text-blue-500 cursor-pointer">Data & AI</li>
              </ul>
          </div>

          <div className="space-y-1 md:space-y-4">
              <h3 className="text-xs md:text-lg font-bold text-white">Solutions</h3>
              <ul className="space-y-0.5 md:space-y-2 text-gray-400 text-[9px] md:text-sm leading-tight">
                  <li className="hover:text-blue-500 cursor-pointer">AI Procurement Bot</li>
                  <li className="hover:text-blue-500 cursor-pointer">Copilot Adoption</li>
                  <li className="hover:text-blue-500 cursor-pointer">Cloud FinOps</li>
              </ul>
          </div>

          <div className="space-y-1 md:space-y-4">
              <h3 className="text-xs md:text-lg font-bold text-white">About us</h3>
              <ul className="space-y-0.5 md:space-y-2 text-gray-400 text-[9px] md:text-sm leading-tight">
                  <li className="hover:text-blue-500 cursor-pointer">Our Culture</li>
                  <li className="hover:text-blue-500 cursor-pointer">People</li>
                  <li className="hover:text-blue-500 cursor-pointer">Careers</li>
              </ul>
          </div>

          <div className="space-y-1 md:space-y-4">
              <h3 className="text-xs md:text-lg font-bold text-white">Resources</h3>
              <ul className="space-y-0.5 md:space-y-2 text-gray-400 text-[9px] md:text-sm leading-tight">
                  <li className="hover:text-blue-500 cursor-pointer">Blog</li>
                  <li className="hover:text-blue-500 cursor-pointer">Success Stories</li>
                  <li className="hover:text-blue-500 cursor-pointer">News</li>
              </ul>
          </div>

          <div className="space-y-1 md:space-y-4">
              <h3 className="text-xs md:text-lg font-bold text-white">Contact</h3>
              <ul className="space-y-0.5 md:space-y-2 text-gray-400 text-[9px] md:text-sm leading-tight">
                  <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
                  <li className="hover:text-blue-500 cursor-pointer">Support</li>
              </ul>
          </div>

        </div>

        {/* --- BOTTOM SECTION: COPYRIGHT & SOCIALS --- */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-2 md:pt-6 border-t border-white/10 text-[9px] md:text-sm text-gray-500 shrink-0">
          
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center mt-2 md:mt-0">
              <span>&copy; T4 Software Solutions 2003-2026</span>
              <div className="flex gap-4">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
              </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
              <div className="flex gap-3 md:gap-4">
                  <a href="https://www.linkedin.com/company/team4solution/" target="_blank" className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={14} /></a>
                  <a href="#" target="_blank" className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Twitter size={14} /></a>
                  <a href="#" className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Facebook size={14} /></a>
                  <a href="https://www.instagram.com/team4solution?igsh=OHB3Mjl1NmExYWZh" target="_blank" className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Instagram size={14} /></a>
                  {/* <a href="#" className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Youtube size={14} /></a> */}
              </div>
          </div>

        </div>

      </footer>

      {/* --- CONSULTING FORM MODAL --- */}
      <GetConsulting 
        isOpen={isConsultingOpen} 
        onClose={() => setIsConsultingOpen(false)} 
      />
    </>
  );
}