import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import ig from "../assets/l3.png";

// Import the centralized data
import { servicesData, industriesData } from "../data"; 

export default function Navbar() {
  const [hoveredTab, setHoveredTab] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);

  const toggleMobileSubmenu = (menuName) => {
    setMobileActiveSubmenu(mobileActiveSubmenu === menuName ? null : menuName);
  };

  return (
    <nav className="fixed z-[999] top-0 left-0 right-0 bg-[#050505] text-white px-6 md:px-12 py-5 flex items-center justify-between">
      
      {/* --- Logo --- */}
      {/* Added relative z-50 so it stays visible when mobile menu opens */}
      <Link to="/" className="flex items-center gap-3 relative z-50">
        <div className="flex flex-col -mt-1">
             {/* FIXED: Changed w-15 to w-16 (w-15 doesn't exist in default Tailwind) */}
             <img src={ig} alt="AI Background" className="w-13 object-contain"/> 
             <span className="text-[11px] text-white uppercase tracking-widest leading-none mt-1">Software Solutions</span>
        </div>
      </Link>

      {/* --- Desktop Navigation --- */}
      <div className="hidden lg:flex items-center gap-10 font-semibold text-[15px] tracking-wide">
        
        <Link to="/about" className="hover:text-blue-500 transition-colors">ABOUT US</Link>

        {/* --- SERVICES DROPDOWN --- */}
        <div 
          className="relative cursor-pointer h-full py-2 flex items-center gap-1 hover:text-blue-500 transition-colors"
          onMouseEnter={() => setHoveredTab("services")} onMouseLeave={() => setHoveredTab(null)}
        >
          SERVICES <ChevronDown size={16} strokeWidth={3} />
          
          <AnimatePresence>
            {hoveredTab === "services" && (
              <motion.div
                initial="hidden" animate="visible" exit="exit"
                variants={{
                  hidden: { opacity: 0, y: 15, height: 0 },
                  visible: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.6, ease: [0.5, 1.1, 0.3, 1], staggerChildren: 0.05 } },
                  exit: { opacity: 0, y: 15, height: 0, transition: { duration: 0.2 } }
                }}
                className="absolute top-[calc(100%+0.25rem)] -left-4 w-72 bg-white text-gray-800 shadow-2xl rounded-md overflow-hidden"
              >
                <div className="py-3">
                  {servicesData.map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    >
                      <Link 
                        to={`/services/${item.slug}`} 
                        className="group block px-8 py-3 text-[15px] font-medium transition-colors hover:text-blue-600"
                      >
                        <span className="relative inline-block">
                          {item.name}
                          <span className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-blue-600 transition-all duration-900 ease-out group-hover:w-full"></span>
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link to="/portfolio" className="hover:text-blue-500 transition-colors">PORTFOLIO</Link>
        <Link to="/career" className="hover:text-blue-500 transition-colors">CAREER</Link>

        {/* --- INDUSTRIES DROPDOWN --- */}
        <div 
          className="relative cursor-pointer h-full py-2 flex items-center gap-1 hover:text-blue-500 transition-colors"
          onMouseEnter={() => setHoveredTab("industries")} onMouseLeave={() => setHoveredTab(null)}
        >
          INDUSTRIES <ChevronDown size={16} strokeWidth={3} />

          <AnimatePresence>
            {hoveredTab === "industries" && (
              <motion.div
                initial="hidden" animate="visible" exit="exit"
                variants={{
                  hidden: { opacity: 0, y: 15, height: 0 },
                  visible: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.04 } },
                  exit: { opacity: 0, y: 15, height: 0, transition: { duration: 0.2 } }
                }}
                // FIXED: Width is now responsive (90vw on laptop, 950px on large screens) to prevent overflow
                className="absolute top-[calc(100%)] right-0 w-[90vw] xl:w-[950px] max-w-[950px] bg-white text-gray-800 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] rounded-md overflow-hidden"
              >
                <div className="grid grid-cols-4 gap-y-8 gap-x-6 p-10">
                  {industriesData.map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                      <Link 
                        to={`/industries/${item.slug}`} 
                        className="flex items-center gap-4 group/item"
                      >
                        <span className="transition-transform group-hover/item:-translate-y-1 duration-300">
                          {item.icon}
                        </span>
                        <span className="relative inline-block text-[15px] font-medium text-gray-700 group-hover/item:text-blue-600 transition-colors">
                          {item.name}
                          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 ease-out group-hover/item:w-full"></span>
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                   variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.4 } }}}
                   className="bg-[#3b55e6] text-white px-10 py-5 flex items-center justify-between"
                >
                    <span className="text-xl font-bold">Trending Solution</span>
                    <Link to="/contact" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:underline">
                        view all <ArrowRight size={18} />
                    </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link to="/blogs" className="hover:text-blue-500 transition-colors">BLOGS</Link>
      </div>

      {/* --- Mobile Menu Button --- */}
      <div className="lg:hidden relative z-50">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 bg-[#0a0a0a] text-white pt-24 px-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-medium">
              
              <button className="w-full bg-blue-600 text-white py-3 rounded uppercase font-bold tracking-wider mb-4">
                Let's Talk AI
              </button>

              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-800 pb-4">ABOUT US</Link>

              {/* Mobile Services */}
              <div className="border-b border-gray-800 pb-4">
                <button onClick={() => toggleMobileSubmenu('services')} className="flex items-center justify-between w-full">
                  SERVICES
                  <ChevronDown size={20} className={`transition-transform duration-300 ${mobileActiveSubmenu === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileActiveSubmenu === 'services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col pl-4 pt-4 gap-3 text-gray-400 text-base">
                        {servicesData.map((item, i) => (
                           <Link 
                             key={i} 
                             to={`/services/${item.slug}`} 
                             onClick={() => setMobileMenuOpen(false)}
                             className="block py-1 hover:text-white"
                           >
                             {item.name}
                           </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-800 pb-4">PORTFOLIO</Link>
              <Link to="/career" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-800 pb-4">CAREER</Link>

              {/* Mobile Industries */}
              <div className="border-b border-gray-800 pb-4">
                <button onClick={() => toggleMobileSubmenu('industries')} className="flex items-center justify-between w-full">
                  INDUSTRIES
                  <ChevronDown size={20} className={`transition-transform duration-300 ${mobileActiveSubmenu === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileActiveSubmenu === 'industries' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-4 pl-4 pt-4 text-gray-400 text-base">
                        {industriesData.map((item, i) => (
                           <Link 
                             key={i} 
                             to={`/industries/${item.slug}`} 
                             onClick={() => setMobileMenuOpen(false)}
                             className="flex items-center gap-3 py-1 hover:text-white"
                           >
                             {React.cloneElement(item.icon, { size: 18 })}
                             <span>{item.name}</span>
                           </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/blogs" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-800 pb-4">BLOGS</Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}