import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';

// Import your centralized data
import { industriesData } from '../data';

export default function AllIndustries() {
  
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-24 pb-20 px-6 md:px-12 font-sans">
      
      {/* --- Page Header --- */}
      <section className="max-w-7xl mx-auto mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-400 text-sm font-bold tracking-wide uppercase mb-6"
        >
          <Layers size={16} /> Industries We Serve
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Transforming Every <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Business Sector
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          We deliver tailored software solutions across a wide range of industries, 
          helping businesses innovate, scale, and succeed in the digital age.
        </motion.p>
      </section>

      {/* --- Industries Grid --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {industriesData.map((item, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Link 
              to={`/industries/${item.slug}`}
              className="group block h-full bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-blue-600/50 hover:bg-[#161616] transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100"></div>

              {/* Icon */}
              <div className="w-14 h-14 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {React.cloneElement(item.icon, { size: 28 })}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {item.name}
              </h3>

              {/* Arrow Indicator (Bottom Right) */}
              <div className="absolute bottom-6 right-6 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500">
                <ArrowRight size={20} />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* --- Bottom CTA --- */}
      <section className="max-w-4xl mx-auto mt-24 text-center">
        <div className="p-8 md:p-12 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't see your industry?</h2>
          <p className="text-gray-400 mb-8">
            Our expertise goes beyond these sectors. Let's discuss your specific needs and build a custom solution for you.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
          >
            Contact Us Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}