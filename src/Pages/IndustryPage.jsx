import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industriesData } from '../data'; // Ensure path is correct
import { 
  ArrowRight, CheckCircle, ShieldCheck, Star, 
  TrendingUp, Activity, Lock 
} from 'lucide-react';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Faster cascade for smoother feel
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function IndustryPage() {
  const { slug } = useParams();
  const pageData = industriesData.find(item => item.slug === slug);

  // 404 Fallback
  if (!pageData) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">Industry Not Found</h2>
        <Link to="/" className="text-blue-500 hover:underline flex items-center gap-2">
          <ArrowRight /> Go Back Home
        </Link>
      </div>
    );
  }

  // Safe Defaults
  const stats = pageData.stats || [];
  const subServices = pageData.subServices || [];
  const features = pageData.features || [];
  const compliance = pageData.compliance || [];

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden font-sans">
      
      {/* =========================================
          1. HERO SECTION
         ========================================= */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-white/5 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Text Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Tagline Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-purple-500/30 rounded-full bg-purple-500/10">
              <span className="text-purple-400 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                {pageData.icon && React.cloneElement(pageData.icon, { size: 16 })}
                Industry Solutions
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {pageData.name} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Development
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              {pageData.desc}
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-lg shadow-white/10 flex items-center justify-center gap-3">
                Book Consultation
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all">
                Explore Solutions
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 aspect-video md:aspect-square lg:aspect-video group">
              <img 
                src={pageData.heroImage} 
                alt={pageData.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4"
              >
                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase">Growth Potential</p>
                  <p className="text-lg font-bold text-white">High ROI</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* =========================================
          2. MARKET STATISTICS BAR
         ========================================= */}
      {stats.length > 0 && (
        <section className="border-b border-white/5 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8 md:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  className="text-center md:border-r border-white/10 last:border-0"
                >
                  <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-500 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-white font-bold text-lg mb-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}


      {/* =========================================
          3. SUB-NICHES / TAILORED SOLUTIONS
         ========================================= */}
      {subServices.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Tailored Solutions</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Specific niches we cover within the {pageData.name} industry
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {subServices.map((service, idx) => (
                <motion.div 
                  key={idx} 
                  variants={scaleIn}
                  className="group p-8 bg-[#111] rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/10"
                >
                  <div className="mb-6 p-4 bg-[#1a1a1a] rounded-xl inline-block text-white group-hover:bg-purple-600 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}


      {/* =========================================
          4. ESSENTIAL FEATURES GRID
         ========================================= */}
      {features.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Features</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {features.map((feat, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  className="flex gap-5 p-6 bg-[#050505] rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors"
                >
                  <div className="mt-1 text-blue-500 shrink-0">
                    {feat.icon || <CheckCircle />}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-white">{feat.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}


      {/* =========================================
          5. COMPLIANCE & SECURITY
         ========================================= */}
      {compliance.length > 0 && (
        <section className="py-20 px-6 md:px-12 border-t border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-10 flex items-center justify-center gap-3"
            >
              <ShieldCheck className="text-green-500" />
              Industry Compliance & Security
            </motion.h3>

            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {compliance.map((comp, idx) => (
                <motion.div 
                  key={idx} 
                  variants={scaleIn}
                  className="px-8 py-4 bg-[#111] rounded-full border border-white/10 flex items-center gap-3 hover:bg-[#1a1a1a] transition-colors"
                >
                  <Lock size={16} className="text-gray-500" />
                  <span className="font-bold text-white">{comp.name}</span>
                  <span className="w-1 h-4 bg-white/20"></span>
                  <span className="text-gray-400 text-sm">{comp.desc}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}


      {/* =========================================
          6. CTA SECTION
         ========================================= */}
      <section className="py-32 px-6">
        <motion.div 
          className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden p-12 text-center border border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-purple-900/40 z-0"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Launch Your App Today</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Partner with GMTA to build scalable, secure, and future-proof {pageData.name} solutions.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-900/50"
            >
              Get a Free Quote
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}