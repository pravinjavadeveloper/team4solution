import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="fixed bottom-0 left-0 w-full h-screen bg-[#0a0a0a] text-white flex flex-col justify-between px-4 md:px-12 py-6 md:py-12 -z-10 overflow-hidden"
    >
      
      {/* --- TOP SECTION: CALL TO ACTION --- */}
      {/* Reduced space-y for mobile to fit screen */}
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-3 md:space-y-8">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 md:space-y-4"
        >
            <h2 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-[10px] md:text-base">
                Ready to Scale?
            </h2>
            {/* TEXT SIZE FIX: Reduced to text-3xl on mobile to prevent cutoff */}
            <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]">
                HAVE AN <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">IDEA?</span>
            </h1>
        </motion.div>

        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 py-2 md:px-10 md:py-5 bg-white text-black rounded-full text-sm md:text-xl font-bold flex items-center gap-2 md:gap-3 overflow-hidden"
        >
            <span className="relative z-10">Start a Project</span>
            <ArrowUpRight className="relative z-10 w-4 h-4 md:w-6 md:h-6 group-hover:rotate-45 transition-transform duration-300" />
            <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
            <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2 md:gap-3">
                Start a Project <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 group-hover:rotate-45" />
            </span>
        </motion.button>
      </div>

      {/* --- MIDDLE SECTION: LINKS --- */}
      {/* MOBILE FIXES:
         1. 'py-4' instead of 'pt-16' to save vertical space.
         2. 'gap-4' instead of 'gap-8'.
         3. 'text-[10px]' for links so they are compact.
         4. 'leading-tight' to reduce line height.
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 border-t border-white/10 pt-4 pb-4 md:pt-16 md:pb-12">
        
        <div className="space-y-2 md:space-y-6">
            <h3 className="text-sm md:text-lg font-bold text-white">Services</h3>
            <ul className="space-y-1 md:space-y-3 text-gray-400 text-[10px] md:text-sm leading-tight">
                <li className="hover:text-blue-500 cursor-pointer">Staff Augmentation</li>
                <li className="hover:text-blue-500 cursor-pointer">Managed Services</li>
                <li className="hover:text-blue-500 cursor-pointer">Technology Solutions</li>
            </ul>
        </div>

        <div className="space-y-2 md:space-y-6">
            <h3 className="text-sm md:text-lg font-bold text-white">Expertise</h3>
            <ul className="space-y-1 md:space-y-3 text-gray-400 text-[10px] md:text-sm leading-tight">
                <li className="hover:text-blue-500 cursor-pointer">Software Development</li>
                <li className="hover:text-blue-500 cursor-pointer">Cloud Computing</li>
                <li className="hover:text-blue-500 cursor-pointer">Data & AI</li>
            </ul>
        </div>

        <div className="space-y-2 md:space-y-6">
            <h3 className="text-sm md:text-lg font-bold text-white">Solutions</h3>
            <ul className="space-y-1 md:space-y-3 text-gray-400 text-[10px] md:text-sm leading-tight">
                <li className="hover:text-blue-500 cursor-pointer">AI Procurement Bot</li>
                <li className="hover:text-blue-500 cursor-pointer">Copilot Adoption</li>
                <li className="hover:text-blue-500 cursor-pointer">Cloud FinOps</li>
            </ul>
        </div>

        <div className="space-y-2 md:space-y-6">
            <h3 className="text-sm md:text-lg font-bold text-white">About us</h3>
            <ul className="space-y-1 md:space-y-3 text-gray-400 text-[10px] md:text-sm leading-tight">
                <li className="hover:text-blue-500 cursor-pointer">Our Culture</li>
                <li className="hover:text-blue-500 cursor-pointer">People</li>
                <li className="hover:text-blue-500 cursor-pointer">Careers</li>
            </ul>
        </div>

        <div className="space-y-2 md:space-y-6">
            <h3 className="text-sm md:text-lg font-bold text-white">Resources</h3>
            <ul className="space-y-1 md:space-y-3 text-gray-400 text-[10px] md:text-sm leading-tight">
                <li className="hover:text-blue-500 cursor-pointer">Blog</li>
                <li className="hover:text-blue-500 cursor-pointer">Success Stories</li>
                <li className="hover:text-blue-500 cursor-pointer">News</li>
            </ul>
        </div>

        <div className="space-y-2 md:space-y-6">
            <h3 className="text-sm md:text-lg font-bold text-white">Contact</h3>
            <ul className="space-y-1 md:space-y-3 text-gray-400 text-[10px] md:text-sm leading-tight">
                <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
                <li className="hover:text-blue-500 cursor-pointer">Support</li>
            </ul>
        </div>

      </div>

      {/* --- BOTTOM SECTION: COPYRIGHT & SOCIALS --- */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-2 md:pt-8 border-t border-white/10 text-[10px] md:text-sm text-gray-500">
        
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center mt-2 md:mt-0">
            <span>&copy; T4 Software Solutions 2003-2026</span>
            <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
            </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
            <div className="flex gap-3 md:gap-4">
                <a href="#" className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={14} /></a>
                <a href="#" className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Twitter size={14} /></a>
                <a href="#" className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Facebook size={14} /></a>
                <a href="#" className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Instagram size={14} /></a>
                <a href="#" className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Youtube size={14} /></a>
            </div>
        </div>

      </div>

    </footer>
  );
}