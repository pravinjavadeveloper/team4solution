import React, { useRef, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  motion, 
  useMotionValue, 
  useTransform, 
  animate, 
  useInView 
} from 'framer-motion';
import { servicesData } from '../data'; 
import { ArrowRight, Code, Star } from 'lucide-react';
import UniqueButton from '../components/UniqueButton';
import GetConsulting from '../components/GetConsulting'; 

// --- Helper Component for Counting Animation ---
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <h4 ref={ref} className="text-2xl md:text-3xl font-bold text-white flex justify-center md:justify-start items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </h4>
  );
};

// --- Animation Variants ---
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const pageData = servicesData.find(item => item.slug === slug);

  // 404 Fallback
  if (!pageData) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Service Not Found</h2>
        <Link to="/" className="text-blue-500 hover:underline flex items-center gap-2">
          <ArrowRight /> Go Back Home
        </Link>
      </div>
    );
  }

  const features = pageData.features || [];
  const process = pageData.process || [];
  const tools = pageData.tools || [];

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-12 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          
          {/* Left: Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-blue-400 text-xs md:text-sm font-bold tracking-widest uppercase">Premium Services</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {pageData.name}
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-base md:text-xl text-gray-400 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {pageData.desc}
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <UniqueButton/>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={fadeInUp} className="mt-10 md:mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 md:flex md:items-center md:gap-8">
              <div className="text-center md:text-left">
                <Counter value={7} suffix="+" />
                <p className="text-[10px] md:text-sm text-gray-500 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/20"></div>
              <div className="text-center md:text-left">
                <Counter value={200} suffix="+" />
                <p className="text-[10px] md:text-sm text-gray-500 uppercase tracking-wider">Projects</p>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/20"></div>
              <div className="text-center md:text-left">
                <Counter value={30} suffix="+" />
                <p className="text-[10px] md:text-sm text-gray-500 uppercase tracking-wider">Countries</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Hero Image (FIXED SIZE) */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center lg:justify-end" 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Added max-w-lg (approx 500px) to limit size while keeping aspect-square */}
            <div className="relative w-full max-w-lg rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 group aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 z-10"></div>
              <img src={pageData.heroImage} alt={pageData.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 z-20 p-4 md:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-blue-600 rounded-lg shrink-0">
                    <Star size={20} fill="white" className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-base md:text-lg text-white">Top Rated Agency</h5>
                    <p className="text-xs md:text-sm text-gray-300">Consistent 5-Star Delivery</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      {features.length > 0 && (
        <section className="py-16 md:py-24 px-4 md:px-12 bg-[#0a0a0a] relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="mb-12 md:mb-16 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Comprehensive <span className="text-blue-500">{pageData.name}</span> Solutions</h2>
              <p className="text-base md:text-xl text-gray-400 max-w-3xl leading-relaxed mx-auto md:mx-0">
                We leverage the most robust tech stacks to ensure your solution is scalable, secure, and future-proof.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} variants={fadeInUp}
                  className="group relative p-6 md:p-8 bg-[#111] rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="text-blue-500 -rotate-45" />
                  </div>
                  <div className="w-12 h-12 md:w-14 md:h-14 mb-6 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {feature.icon || <Code size={24} className="md:w-7 md:h-7" />}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-blue-500 transition-colors">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">{feature.desc}</p>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-blue-600 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* 3. PROCESS SECTION */}
      {process.length > 0 && (
        <section className="py-16 md:py-24 px-4 md:px-12 bg-[#050505] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-center mb-12 md:mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Development Process</h2>
              <p className="text-gray-400 text-base md:text-lg">How we bring your vision to life</p>
            </motion.div>

            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 z-0"></div>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              >
                {process.map((step, idx) => (
                  <motion.div 
                    key={idx} variants={fadeInUp}
                    className="relative p-6 md:p-8 bg-[#111] border border-white/5 rounded-2xl hover:border-blue-500 transition-colors group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#222] border border-white/10 rounded-full flex items-center justify-center text-lg md:text-xl font-bold text-white mb-4 md:mb-6 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shadow-lg shadow-black/50">
                      {step.step}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* 4. TOOLS & TECH */}
      {tools.length > 0 && (
        <section className="py-16 md:py-24 px-4 md:px-12 border-y border-white/5 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 text-center md:text-left gap-4">
              <h2 className="text-2xl md:text-3xl font-bold">Tools & Technologies</h2>
              <p className="text-gray-400">Our Tech Stack</p>
            </div>
            
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              {tools.map((tool, idx) => (
                <motion.div 
                  key={idx} variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                  className="px-4 py-3 md:px-6 md:py-4 bg-[#151515] rounded-lg border border-white/5 flex items-center gap-2 md:gap-3 hover:bg-[#222] hover:border-blue-500/50 transition-all cursor-default"
                >
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-semibold text-sm md:text-base text-gray-300 group-hover:text-white">{tool}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* 5. CTA SECTION (MODAL TRIGGER) */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-blue-600 text-center px-6 py-16 md:px-12 md:py-20"
        >
          <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-black/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
              Ready to Build Your {pageData.name}?
            </h2>
            <p className="text-base md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto">
              Partner with us to create a solution that drives growth, engages users, and scales with your business.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-900 px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-colors shadow-xl w-full sm:w-auto"
            >
              Get A Free Quote
            </button>
          </div>
        </motion.div>
      </section>

      {/* 4. RENDER MODAL */}
      <GetConsulting isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}