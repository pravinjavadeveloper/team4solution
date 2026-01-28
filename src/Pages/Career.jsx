import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, MapPin, Clock, ArrowRight, 
  Heart, Zap, Users, Globe, CheckCircle, 
  Mail, X, ExternalLink
} from 'lucide-react';

// --- Data: Open Positions ---
const jobOpenings = [
  {
    id: 1,
    title: "Senior React Developer",
    department: "Engineering",
    location: "Remote / London",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-Time",
  },
  {
    id: 3,
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
  },
  {
    id: 4,
    title: "Project Manager",
    department: "Management",
    location: "London",
    type: "Full-Time",
  }
];

// --- Data: Perks ---
const perks = [
  { icon: <Globe size={24} />, title: "Remote Friendly", desc: "Work from where you feel most productive." },
  { icon: <Heart size={24} />, title: "Health Insurance", desc: "Comprehensive health coverage for you and family." },
  { icon: <Zap size={24} />, title: "Learning Budget", desc: "Annual allowance for courses and conferences." },
  { icon: <Users size={24} />, title: "Team Retreats", desc: "Quarterly meetups and fun team activities." },
];

export default function Career() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("General Application");

  // --- Modal Logic ---
  const openModal = (role = "General Application") => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-blue-600/30 pt-24 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-16 md:py-24 px-6 md:px-12 border-b border-white/5">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-400 text-sm font-bold tracking-wide uppercase mb-6">
            <Briefcase size={16} /> We are hiring
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Build the Future with <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Team4Solutions</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Join a team of innovators. We don’t just write code; we solve complex problems and build digital experiences that matter.
          </p>
        </div>
      </section>

      {/* 2. WHY JOIN US */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation First", desc: "We constantly push boundaries and explore new technologies." },
              { title: "Growth Mindset", desc: "We invest in your personal and professional development." },
              { title: "Global Impact", desc: "Work on projects that reach millions of users worldwide." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-[#111] rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-500 mb-6">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS */}
      <section className="py-20 px-6 md:px-12 bg-[#0a0a0a]" id="openings">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Current Openings</h2>
            <p className="text-gray-400">Find your place at Team4Solutions.</p>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div 
                key={job.id}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 bg-[#111] border border-white/5 rounded-2xl hover:border-blue-500/50 transition-all hover:bg-[#151515] cursor-pointer gap-4"
              >
                <div className="w-full md:w-auto">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-500 transition-colors mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                  </div>
                </div>
                
                <div className="w-full md:w-auto">
                  <button 
                    onClick={() => openModal(job.title)}
                    className="w-full md:w-auto px-6 py-2 rounded-full border border-white/20 text-sm font-semibold hover:bg-white hover:text-black transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PERKS & BENEFITS */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Life at Team4Solutions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => (
              <div key={idx} className="p-6 bg-[#111] rounded-2xl text-center border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-900/20">
                  {perk.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{perk.title}</h4>
                <p className="text-sm text-gray-400">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GENERAL CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't see the right role?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              We are always on the lookout for exceptional talent. If you think you'd be a great fit for Team4Solutions, send us your resume!
            </p>
            
            <button 
              onClick={() => openModal("General Application")}
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Drop your Resume <ArrowRight size={18} />
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
      </section>

      {/* --- APPLICATION MODAL --- */}
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        role={selectedRole}
      />

    </div>
  );
}

// ==========================================
// EMAIL GENERATOR MODAL COMPONENT
// ==========================================
const ApplicationModal = ({ isOpen, onClose, role }) => {
  const [formData, setFormData] = useState({ name: '', portfolio: '' });

  // Handle "Continue to Email" logic
  const handleOpenEmail = (e) => {
    e.preventDefault();

    // 1. Define Email Variables
    const recipient = "Team4Solutions@gmail.com";
    const subject = encodeURIComponent(`Application for ${role} - ${formData.name}`);
    
    // 2. Create Email Body with Line Breaks
    const body = encodeURIComponent(
      `Hi Team,\n\nI am interested in applying for the ${role} position at Team4Solutions.\n\n` +
      `Here is my portfolio/LinkedIn: ${formData.portfolio || 'Attached in resume'}\n\n` +
      `Please find my resume attached to this email.\n\n` +
      `Best regards,\n${formData.name}`
    );

    // 3. Open Default Mail Client
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // 4. Close Modal after short delay
    setTimeout(() => {
        onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#111] border border-white/10 w-full max-w-md rounded-2xl p-6 md:p-8 relative shadow-2xl"
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-1">Apply for {role}</h2>
            <p className="text-gray-400 text-sm mb-6">Enter your details to generate your application email.</p>

            <form onSubmit={handleOpenEmail} className="space-y-4">
              
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Full Name <span className="text-red-500">*</span></label>
                <input 
                  required 
                  type="text" 
                  className="w-full bg-[#222] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Portfolio Input */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Portfolio / LinkedIn URL</label>
                <input 
                  type="url" 
                  className="w-full bg-[#222] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="https://linkedin.com/in/john"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                />
              </div>

              {/* Reminder Box */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 flex gap-3 items-start">
                 <Mail className="text-blue-400 shrink-0 mt-0.5" size={18} />
                 <p className="text-xs text-blue-200 leading-relaxed">
                    Clicking continue will open your default email app. <br/>
                    <span className="font-bold text-white">Don't forget to attach your resume PDF!</span>
                 </p>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-white hover:bg-gray-200 text-black font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 mt-2"
              >
                Draft Email Application <ExternalLink size={18} />
              </button>

            </form>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};