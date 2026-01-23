import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data'; // Ensure this path matches your file structure
import { 
  ArrowRight, CheckCircle, ChevronRight, Star, 
  Settings, Smartphone, Globe, Code 
} from 'lucide-react';

// Animation Variants for easy reuse
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ServicePage() {
  const { slug } = useParams();
  const pageData = servicesData.find(item => item.slug === slug);

  // 404 Fallback
  if (!pageData) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <Link to="/" className="text-blue-500 hover:underline flex items-center gap-2">
          <ArrowRight /> Go Back Home
        </Link>
      </div>
    );
  }

  // Safe defaults
  const features = pageData.features || [];
  const process = pageData.process || [];
  const tools = pageData.tools || [];

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-blue-500/30">
      
      {/* =========================================
          1. HERO SECTION
         ========================================= */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-white/5 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Text Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">
                Premium Services
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {pageData.name}
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              {pageData.desc}
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 group">
                Let's Discuss
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/5 transition-all">
                View Portfolio
              </button>
            </motion.div>

            {/* Quick Stats (Reference Match) */}
            <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-3xl font-bold text-white">7+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div>
                <h4 className="text-3xl font-bold text-white">200+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Projects</p>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div>
                <h4 className="text-3xl font-bold text-white">30+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Countries</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 z-10"></div>
              <img 
                src={pageData.heroImage} 
                alt={pageData.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Card Element for Animation */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-8 left-8 right-8 z-20 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Star size={24} fill="white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Top Rated Agency</h5>
                    <p className="text-sm text-gray-300">5-Star Reviews on Clutch & GoodFirms</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* =========================================
          2. SERVICES GRID ("Sustainable Mobile App...")
         ========================================= */}
      {features.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16 md:text-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Comprehensive <span className="text-blue-500">{pageData.name}</span> Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                We leverage the most robust tech stacks to ensure your solution is scalable, secure, and future-proof.
              </p>
            </motion.div>

            {/* Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  className="group relative p-8 bg-[#111] rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="text-blue-500 -rotate-45" />
                  </div>

                  <div className="w-14 h-14 mb-6 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {feature.icon || <Code size={28} />}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-blue-600 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}


      {/* =========================================
          3. PROCESS SECTION ("How We Develop...")
         ========================================= */}
      {process.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-[#050505] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Development Process</h2>
              <p className="text-gray-400 text-lg">How we bring your vision to life</p>
            </motion.div>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 z-0"></div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {process.map((step, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={fadeInUp}
                    className="relative p-8 bg-[#111] border border-white/5 rounded-2xl hover:border-blue-500 transition-colors group"
                  >
                    {/* Step Number Bubble */}
                    <div className="w-12 h-12 bg-[#222] border border-white/10 rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shadow-lg shadow-black/50">
                      {step.step}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}


      {/* =========================================
          4. TOOLS & TECH ("Futuristic Technologies")
         ========================================= */}
      {tools.length > 0 && (
        <section className="py-24 px-6 md:px-12 border-y border-white/5 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Tools & Technologies</h2>
              <p className="text-gray-400">Our Tech Stack</p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {tools.map((tool, idx) => (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="px-6 py-4 bg-[#151515] rounded-lg border border-white/5 flex items-center gap-3 hover:bg-[#222] hover:border-blue-500/50 transition-all cursor-default"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-semibold text-gray-300 group-hover:text-white">{tool}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}


      {/* =========================================
          5. CTA SECTION
         ========================================= */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-blue-600 text-center px-6 py-20"
        >
          {/* Abstract Shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Your {pageData.name}?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Partner with us to create a solution that drives growth, engages users, and scales with your business.
            </p>
            <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
              Get A Free Quote
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}