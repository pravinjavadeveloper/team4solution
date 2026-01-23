import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useMotionValue } from "framer-motion";
import { Award, RefreshCw, Layers } from "lucide-react";

// REPLACE these with your actual image paths
import image1 from "../assets/h1.jpg"; 
import image2 from "../assets/h1.jpg"; 
import image3 from "../assets/h1.jpg"; 

// --- Sub-Component: Animated Counter ---
const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2.5,
        ease: [0.25, 1, 0.5, 1], 
      });
      return () => controls.stop();
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [motionValue]);

  return <span ref={ref}>{displayValue}</span>;
};

// --- Main Component ---
export default function WhoWeAre() {
  return (
    <section className="bg-[#050505] py-20 px-6 md:px-12 flex justify-center text-white overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- LEFT SIDE: Stacked Images Animation --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          // Height adjusts automatically based on content, but we ensure minimum height for animation space
          className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center" 
        >
          
          {/* IMAGE 1 (Back) - Rotated Left */}
          <motion.div 
            // FIXED: Responsive sizing (260px for small mobile -> 350px for desktop)
            className="absolute w-[260px] h-[320px] sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[400px] rounded-[1.5rem] overflow-hidden border-4 border-[#0a0a0a] shadow-2xl z-10"
            initial={{ rotate: 0, scale: 0.8 }}
            // FIXED: Reduced X shift on mobile to prevent cutting off (-20px vs -40px)
            whileInView={{ rotate: -12, scale: 0.9, x: window.innerWidth < 768 ? -20 : -40 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={image1} alt="About 1" className="w-full h-full object-cover opacity-60" />
          </motion.div>

          {/* IMAGE 2 (Middle) - Rotated Right */}
          <motion.div 
            className="absolute w-[260px] h-[320px] sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[400px] rounded-[1.5rem] overflow-hidden border-4 border-[#0a0a0a] shadow-2xl z-20"
            initial={{ rotate: 0, scale: 0.8 }}
            whileInView={{ rotate: 12, scale: 0.95, x: window.innerWidth < 768 ? 20 : 40 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={image2} alt="About 2" className="w-full h-full object-cover opacity-80" />
          </motion.div>

          {/* IMAGE 3 (Front) - Center */}
          <motion.div 
            className="absolute w-[260px] h-[320px] sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[400px] rounded-[1.5rem] overflow-hidden border-4 border-[#0a0a0a] shadow-2xl z-30"
            initial={{ rotate: 0, scale: 0.8, y: 50 }}
            whileInView={{ rotate: 0, scale: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          >
            <img src={image3} alt="About 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
          </motion.div>

          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-blue-600/30 rounded-full blur-[80px] -z-10"></div>

        </motion.div>


        {/* --- RIGHT SIDE: Text & Stats --- */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2">
              About Team4Solution Software
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Who We Are?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              GMTA Software is a thought-driven IT services provider, leveraging the industry's
              best tools and technologies. We foster industry dreams in our
              innovative software product development. We are committed to delivering excellence
              and driving digital transformation for businesses worldwide.
            </p>
          </motion.div>

          {/* Stats Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            
            <StatBox 
              icon={<Award size={32} />} 
              value={7} 
              suffix="+" 
              label="Year Of Experience" 
              delay={0.4} 
            />
            
            <StatBox 
              icon={<RefreshCw size={32} />} 
              value={90} 
              suffix="%" 
              label="Customer Retention" 
              delay={0.5} 
            />
            
            <StatBox 
              icon={<Layers size={32} />} 
              value={200} 
              suffix="+" 
              label="Projects Completed" 
              delay={0.6} 
            />

          </div>
        </div>

      </div>
    </section>
  );
}


function StatBox({ icon, value, suffix, label, delay }) {
  return (
    <motion.div 
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay }}
       viewport={{ once: true }}
       className="bg-[#0a0a0a] border border-white/20 p-6 flex flex-col items-center justify-center text-center rounded-tl-[2rem] rounded-br-[2rem] hover:border-blue-600/50 transition-colors group"
    >
      <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold flex items-baseline mb-1">
        <Counter value={value} />{suffix}
      </h3>
      <span className="text-sm text-gray-400 font-medium">{label}</span>
    </motion.div>
  );
}