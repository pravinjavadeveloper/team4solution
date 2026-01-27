import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react"; 

// --- IMPORT LOCAL IMAGES ---
import uk from "../location/uk.avif";
import navimum from "../location/navimum.avif";
import italy from "../location/italy.avif";
import malaysia from "../location/mal.avif";
import newzealan from "../location/newzealan.avif";

// --- UPDATED DATA (Using Imported Variables) ---
const locationsData = [
  {
    id: 1,
    name: "United Kingdom",
    address: "123 Portland Street, LN57LG. Lincoln. United Kingdom",
    number: "+44-7774986218", 
    image: uk, // Using imported variable
  },
  {
    id: 2,
    name: "Malaysia",
    address: "Scott sentral B11-03, Kuala Lumpur, Malaysia",
    number: "+60-187699352",
    image: malaysia, // Using imported variable
  },
  {
    id: 5,
    name: "Italy",
    address: "Via Caravaggio 20, Casalecchio di Reno 40033, Italy",
    number: "+39-3518079394",
    image: italy, // Using imported variable
  },
  {
    id: 3,
    name: "Navi Mumbai",
    address: "Sadguru kripa 301, plot no 54A sector 19 Kharghar, Navi Mumbai",
    number: "+91-8976280708",
    image: navimum, // Using imported variable
  },
  {
    id: 4,
    name: "New Zealand",
    address: "2/271 Ormiston road, Flat Bush, Auckland, 2019, New Zealand",
    number: "+64-272581328",
    image: newzealan, // Using imported variable
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function Locations() {
  return (
    <section className="bg-[#050505] text-white py-24 px-4 md:px-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/20 blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Global Presence</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Locations Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          // --- LAYOUT FIX: 5 COLUMNS ON LARGE SCREENS (One Row) ---
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {locationsData.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- INDIVIDUAL LOCATION CARD COMPONENT ---
function LocationCard({ location }) {
  return (
    <motion.div 
        variants={cardVariants} 
        className="group cursor-default flex flex-col w-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-[#111] shadow-lg border border-white/5">
        <img 
          src={location.image} 
          alt={location.name} 
          loading="lazy" 
          // Logic: Full Color on Mobile, Grayscale -> Color on Desktop Hover
          className="w-full h-full object-cover transform transition-all duration-500 ease-in-out 
                     grayscale-0 lg:grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="hidden lg:block absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>

      {/* Text Content */}
      <div className="text-left flex flex-col flex-grow px-2">
        <h3 className="text-xl font-bold mb-3 lg:group-hover:text-blue-500 transition-colors duration-300">
          {location.name}
        </h3>
        
        {/* Address Section */}
        <div className="flex items-start gap-3 mb-3 min-h-[40px]">
          <MapPin size={18} className="text-blue-500 flex-shrink-0 mt-1" />
          <p className="text-gray-400 text-xs leading-relaxed">
            {location.address}
          </p>
        </div>

        {/* Phone Number Section */}
        {location.number && (
          <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/10">
            <Phone size={16} className="text-blue-500 flex-shrink-0" />
            <p className="text-white text-xs font-medium tracking-wide">
              {location.number}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}