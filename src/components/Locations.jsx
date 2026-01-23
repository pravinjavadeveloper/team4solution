import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react"; // Imported Icons

// --- UPDATED DATA WITH CORRECT IMAGES & 4 LOCATIONS ---
const locationsData = [
  {
    id: 1,
    name: "Navi Mumbai",
    address: "Sadguru kripa 301, plot no 54A sector 19 Kharghar, Navi Mumbai",
    number: "+91-8976280708",
    // Image: Navi Mumbai / Mumbai vibe
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=800&auto=format&fit=crop", 
  },
  {
    id: 2,
    name: "Malaysia",
    address: "Scott sentral B11-03, Kuala Lumpur, Malaysia",
    number: "+60-187699352",
    // Image: Petronas Towers (Kuala Lumpur)
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop", 
  },
  {
    id: 3,
    name: "United Kingdom",
    address: "123 Portland Street, LN57LG. Lincoln. United Kingdom",
    number: "XX-XXXXXXXXX", // Placeholder kept as requested
    // Image: Big Ben (UK)
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop", 
  },
  {
    id: 4,
    name: "New Zealand",
    address: "2/271 Ormiston road, Flat Bush, Auckland, 2019, New Zealand",
    number: "+64-272581328",
    // Image: Auckland Sky Tower (NZ)
    image: "https://i2.wp.com/eternalarrival.com/wp-content/uploads/2020/09/shutterstock_647554633.jpg?q=80&w=800&auto=format&fit=crop", 
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function Locations() {
  return (
    <section className="bg-[#050505] text-white py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/20 blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl xl:max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Global Presence</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Locations Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          // UPDATED GRID: 
          // Mobile: 1 col | Tablet: 2 cols | Laptop/Desktop: 4 cols (Perfect for 4 items)
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
    <motion.div variants={cardVariants} className="group cursor-default flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#111] shadow-lg border border-white/5">
        <img 
          src={location.image} 
          alt={location.name} 
          // FIXED LOGIC: Full Color on Mobile, B&W -> Color on Desktop Hover
          className="w-full h-full object-cover transform transition-all duration-500 ease-in-out 
                     grayscale-0 lg:grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-110"
        />
        {/* Overlay: Hidden on mobile, appears on desktop to darken B&W image, fades on hover */}
        <div className="hidden lg:block absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>

      {/* Text Content */}
      <div className="text-left flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-4 lg:group-hover:text-blue-500 transition-colors duration-300">
          {location.name}
        </h3>
        
        {/* Address Section */}
        <div className="flex items-start gap-3 mb-3">
          <MapPin size={20} className="text-blue-500 flex-shrink-0 mt-1" />
          <p className="text-gray-400 text-sm leading-relaxed">
            {location.address}
          </p>
        </div>

        {/* Phone Number Section (Added) */}
        {location.number && (
          <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/10">
            <Phone size={18} className="text-blue-500 flex-shrink-0" />
            <p className="text-white text-sm font-medium tracking-wide">
              {location.number}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}