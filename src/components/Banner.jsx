import { motion } from 'framer-motion';
import UniqueButton from './UniqueButton';

const Banner = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const floatAnimation = {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  };

  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Added pb-8 on mobile to ensure image bottom isn't cut off */}
        <div className="flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 lg:p-16 pb-8 lg:pb-16">
          
          {/* Left Content Section */}
          <div className="lg:w-1/2 text-white z-10 text-center lg:text-left">
            <motion.h2
              // Reduced text size on mobile (text-3xl) to save vertical space
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 sm:mb-8"
              variants={itemVariants}
            >
              Turn Your Ideas into Reality with Mobile and Web Solutions!
            </motion.h2>
            <motion.div variants={itemVariants}>
              <UniqueButton>Get Consulting</UniqueButton>
            </motion.div>
          </div>

          {/* Right Image Section */}
          <motion.div
            className="lg:w-1/2 relative mt-8 lg:mt-0 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            viewport={{ once: true }}
          >
            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Professional working on laptop"
              // Added w-full and h-auto to ensure it scales perfectly. 
              // Removed max-w-md on mobile so it uses available width.
              className="w-full sm:max-w-md mx-auto lg:ml-auto object-cover rounded-xl shadow-lg border-4 border-white/20 relative z-10"
            />

            {/* Floating Tech Icons - Adjusted positioning for mobile to prevent cutoff */}
            <motion.div
              // Changed positions to use % or small pixel values to keep them inside the frame
              className="absolute -top-4 left-2 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 bg-white p-2 rounded-full shadow-lg z-20"
              animate={floatAnimation}
              transition={{ delay: 0.5 }}
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
                alt="Figma" 
                className="w-full h-full object-contain" 
              />
            </motion.div>
            
            <motion.div
              className="absolute top-10 right-2 sm:right-20 w-10 h-10 sm:w-12 sm:h-12 bg-white p-2 rounded-full shadow-lg z-20"
              animate={floatAnimation}
              transition={{ delay: 1 }}
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" 
                alt="Angular" 
                className="w-full h-full object-contain" 
              />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 left-4 sm:left-20 w-10 h-10 sm:w-12 sm:h-12 bg-white p-2 rounded-full shadow-lg z-20"
              animate={floatAnimation}
              transition={{ delay: 1.5 }}
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" 
                alt="Android" 
                className="w-full h-full object-contain" 
              />
            </motion.div>
            
            <motion.div
              className="absolute bottom-10 -right-2 sm:right-5 w-10 h-10 sm:w-12 sm:h-12 bg-white p-2 rounded-full shadow-lg z-20"
              animate={floatAnimation}
              transition={{ delay: 2 }}
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" 
                alt="Flutter" 
                className="w-full h-full object-contain" 
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{ backgroundPosition: '100% 50%' }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
            backgroundSize: '32px 32px',
          }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;