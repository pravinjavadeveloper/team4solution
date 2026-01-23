import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import ig from "../assets/l3.png"; // Assuming you want your logo/image here

export default function Footer() {
  return (
    <footer 
      className="fixed bottom-0 left-0 w-full h-screen min-h-[800px] bg-[#0a0a0a] text-white flex flex-col justify-between px-6 md:px-12 py-12 -z-10"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      
      {/* --- TOP SECTION: GRAND CALL TO ACTION --- */}
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
        >
            <h2 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base">
                Ready to Scale?
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]">
                HAVE AN <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">IDEA?</span>
            </h1>
        </motion.div>

        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-white text-black rounded-full text-xl font-bold flex items-center gap-3 overflow-hidden"
        >
            <span className="relative z-10">Start a Project</span>
            <ArrowUpRight className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
            <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
            <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3">
                Start a Project <ArrowUpRight className="group-hover:rotate-45" />
            </span>
        </motion.button>
      </div>

      {/* --- MIDDLE SECTION: LINKS (From your Image) --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 border-t border-white/10 pt-16 pb-12">
        
        {/* Column 1 */}
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Staff Augmentation</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Managed Services</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Technology Solutions</li>
            </ul>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Expertise</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Software Development</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Cloud Computing</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Data & AI</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Enterprise Platforms</li>
            </ul>
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Business Solutions</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-blue-500 cursor-pointer transition-colors">AI Procurement Bot</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Copilot Adoption</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Cloud FinOps</li>
            </ul>
        </div>

        {/* Column 4 */}
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">About us</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Our Culture</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">People</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Our Story</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Careers</li>
            </ul>
        </div>

        {/* Column 5 */}
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Resources</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Success Stories</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">News</li>
            </ul>
        </div>

        {/* Column 6: Contact */}
        <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Contact Us</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Support</li>
            </ul>
        </div>

      </div>

      {/* --- BOTTOM SECTION: COPYRIGHT & SOCIALS --- */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
        
        <div className="flex flex-col md:flex-row gap-6 items-center mb-6 md:mb-0">
            <span>&copy; T4 Software Solutions 2003-2026</span>
            <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <span className="hidden md:block">Check out what's going on</span>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <Youtube size={18} />
                </a>
            </div>
        </div>

      </div>

    </footer>
  );
}