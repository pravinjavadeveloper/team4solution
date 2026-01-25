// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Send, Phone, Mail, User, DollarSign, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
// import emailjs from '@emailjs/browser';

// // --- Data for the Timeline ---
// const steps = [
//   {
//     title: "First Contact",
//     desc: "Our team will contact you in no time.",
//   },
//   {
//     title: "Requirement Analysis",
//     desc: "Discuss your project requirements with experts.",
//   },
//   {
//     title: "Create a Proposal",
//     desc: "Based on your requirements, we create a proposal.",
//   },
//   {
//     title: "Start Your Project",
//     desc: "Transforming ideas into digital reality.",
//   },
// ];

// export default function ProjectDiscussion() {
//   const form = useRef();
//   const [isSending, setIsSending] = useState(false);
//   const [status, setStatus] = useState(null); // 'success' | 'error' | null

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSending(true);

//     // --- YOUR SPECIFIC KEYS ---
//     const SERVICE_ID = "service_a6ds2qx";
//     const TEMPLATE_ID = "template_ydy3tqv";
//     const PUBLIC_KEY = "dOcIpsv19zWgxqo3W";

//     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
//       .then((result) => {
//           setIsSending(false);
//           setStatus('success');
//           // Reset form after 3 seconds
//           setTimeout(() => {
//             e.target.reset();
//             setStatus(null);
//           }, 3000);
//       }, (error) => {
//           console.log(error.text);
//           setIsSending(false);
//           setStatus('error');
//       });
//   };

//   return (
//     <section className="py-20 px-4 md:px-12 bg-[#050505] overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
//           {/* =========================================
//               LEFT COLUMN: TIMELINE & PATH ANIMATION
//               (HIDDEN on Mobile/Tablet -> Visible on Large Screens)
//              ========================================= */}
//           <motion.div 
//             className="hidden lg:block bg-blue-600 rounded-3xl p-8 md:p-12 relative overflow-hidden text-white"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {/* Background Texture */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

//             <div className="relative z-10">
//               <motion.h2 
//                 className="text-3xl md:text-4xl font-bold mb-4"
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//                 }}
//               >
//                 Let's Discuss Your Next Project
//               </motion.h2>
//               <motion.p 
//                 className="text-blue-100 text-lg mb-12"
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
//                 }}
//               >
//                 You have the Idea & We have the solution.
//               </motion.p>

//               {/* --- THE TIMELINE PATH --- */}
//               <div className="relative pl-6">
                
//                 {/* 1. The Faint Background Line (Dotted) */}
//                 <div className="absolute left-[35px] top-2 bottom-10 w-0.5 border-l-2 border-dotted border-white/30"></div>

//                 {/* 2. THE ANIMATED PATH (Solid Line drawing downwards) */}
//                 <motion.div 
//                   className="absolute left-[35px] top-2 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
//                   variants={{
//                     hidden: { height: "0%" },
//                     visible: { height: "85%", transition: { duration: 2.5, ease: "easeInOut", delay: 0.5 } }
//                   }}
//                 ></motion.div>

//                 {/* 3. Steps */}
//                 <div className="space-y-12">
//                   {steps.map((step, idx) => (
//                     <div key={idx} className="relative flex items-start gap-8">
//                       {/* Diamond Point */}
//                       <motion.div 
//                         className="relative z-10 w-5 h-5 bg-white rotate-45 mt-1.5 shrink-0 shadow-lg"
//                         initial={{ opacity: 0, scale: 0 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.4, delay: 0.5 + (idx * 0.5) }} // Staggers with the line
//                       ></motion.div>

//                       {/* Text Content */}
//                       <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5, delay: 0.6 + (idx * 0.5) }}
//                       >
//                         <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
//                         <p className="text-blue-100 text-base leading-relaxed">{step.desc}</p>
//                       </motion.div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>


//           {/* =========================================
//               RIGHT COLUMN: CONTACT FORM (Visible on ALL screens)
//              ========================================= */}
//           <motion.div 
//             className="bg-white rounded-3xl p-6 md:p-12 text-gray-800 shadow-2xl relative"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               hidden: { opacity: 0, x: 30 },
//               visible: { 
//                 opacity: 1, 
//                 x: 0,
//                 transition: { 
//                   duration: 0.8,
//                   staggerChildren: 0.1 
//                 }
//               }
//             }}
//           >
//             <div className="mb-6 lg:hidden">
//                 <h2 className="text-2xl font-bold text-gray-900">Let's Talk</h2>
//                 <p className="text-gray-500 text-sm">Fill out the form below to get started.</p>
//             </div>

//             {/* Status Messages */}
//             {status === 'success' && (
//               <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-green-50 text-green-700 rounded-xl flex items-center gap-2 text-sm font-bold border border-green-200">
//                 <CheckCircle size={18} /> Inquiry Sent Successfully!
//               </motion.div>
//             )}
//             {status === 'error' && (
//               <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-red-50 text-red-700 rounded-xl flex items-center gap-2 text-sm font-bold border border-red-200">
//                 <AlertCircle size={18} /> Failed to send. Please try again.
//               </motion.div>
//             )}

//             {/* Form Fields */}
//             <form ref={form} onSubmit={sendEmail} className="space-y-6">
              
//               {/* Row 1 */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
//                   <label className="block text-sm font-bold text-gray-600 mb-2">Full Name</label>
//                   <div className="relative">
//                     <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                     <input required name="user_name" type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all outline-none" />
//                   </div>
//                 </motion.div>

//                 <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
//                   <label className="block text-sm font-bold text-gray-600 mb-2">Email Address</label>
//                   <div className="relative">
//                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                     <input required name="user_email" type="email" placeholder="email@example.com" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all outline-none" />
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Row 2 */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
//                   <label className="block text-sm font-bold text-gray-600 mb-2">Mobile Number</label>
//                   <div className="relative flex">
//                     <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 flex items-center gap-1">
//                       <Phone size={18} />
//                     </div>
//                     <select name="country_code" className="pl-10 pr-2 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-sm focus:border-blue-600 outline-none text-gray-600">
//                       <option value="+1">+1</option>
//                       <option value="+91">+91</option>
//                       <option value="+44">+44</option>
//                     </select>
//                     <input required name="user_mobile" type="tel" placeholder="123 456 7890" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-r-xl focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all outline-none" />
//                   </div>
//                 </motion.div>

//                 <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
//                   <label className="block text-sm font-bold text-gray-600 mb-2">Budget (Optional)</label>
//                   <div className="relative">
//                     <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                     <select name="user_budget" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all outline-none appearance-none text-gray-500">
//                       <option value="Not Selected">Select Budget</option>
//                       <option value="&lt; $5k">&lt; $5k</option>
//                       <option value="$5k - $10k">$5k - $10k</option>
//                       <option value="$10k - $50k">$10k - $50k</option>
//                       <option value="$50k+">$50k+</option>
//                     </select>
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Row 3 - Textarea */}
//               <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
//                 <label className="block text-sm font-bold text-gray-600 mb-2">Inquiry & Requirement</label>
//                 <div className="relative">
//                   <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
//                   <textarea required name="message" rows="4" placeholder="Tell us about your project..." className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all outline-none resize-none"></textarea>
//                 </div>
//               </motion.div>

//               {/* Captcha & Button */}
//               <motion.div 
//                 className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-6"
//                 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
//               >
        

//                 <motion.button 
//                   type="submit"
//                   disabled={isSending}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
//                 >
//                   {isSending ? 'Sending...' : 'Send Inquiry'}
//                   {!isSending && <Send size={18} />}
//                 </motion.button>
//               </motion.div>

//             </form>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, User, DollarSign, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

// --- Data for the Timeline ---
const steps = [
  {
    title: "First Contact",
    desc: "Our team will contact you in no time.",
  },
  {
    title: "Requirement Analysis",
    desc: "Discuss your project requirements with experts.",
  },
  {
    title: "Create a Proposal",
    desc: "Based on your requirements, we create a proposal.",
  },
  {
    title: "Start Your Project",
    desc: "Transforming ideas into digital reality.",
  },
];

export default function ProjectDiscussion() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // --- YOUR SPECIFIC KEYS ---
    const SERVICE_ID = "service_a6ds2qx";
    const TEMPLATE_ID = "template_ydy3tqv";
    const PUBLIC_KEY = "dOcIpsv19zWgxqo3W";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setIsSending(false);
          setStatus('success');
          // Reset form after 3 seconds
          setTimeout(() => {
            e.target.reset();
            setStatus(null);
          }, 3000);
      }, (error) => {
          console.log(error.text);
          setIsSending(false);
          setStatus('error');
      });
  };

  return (
    <section className="py-20 px-4 md:px-12 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* =========================================
              LEFT COLUMN: TIMELINE & PATH ANIMATION
              (HIDDEN on Mobile/Tablet -> Visible on Large Screens)
             ========================================= */}
          <motion.div 
            className="hidden lg:block bg-blue-600 rounded-3xl p-8 md:p-12 relative overflow-hidden text-white"
            initial="hidden"
            whileInView="visible"
            // CHANGED: once: false ensures it animates EVERY time it enters view
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                Let's Discuss Your Next Project
              </motion.h2>
              <motion.p 
                className="text-blue-100 text-lg mb-12"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                }}
              >
                You have the Idea & We have the solution.
              </motion.p>

              {/* --- THE TIMELINE PATH --- */}
              <div className="relative pl-6">
                
                {/* 1. The Faint Background Line (Dotted) */}
                <div className="absolute left-[35px] top-2 bottom-10 w-0.5 border-l-2 border-dotted border-white/30"></div>

                {/* 2. THE ANIMATED PATH (Solid Line drawing downwards) */}
                <motion.div 
                  className="absolute left-[35px] top-2 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  variants={{
                    hidden: { height: "0%" },
                    visible: { height: "85%", transition: { duration: 2.5, ease: "easeInOut", delay: 0.5 } }
                  }}
                ></motion.div>

                {/* 3. Steps */}
                <div className="space-y-12">
                  {steps.map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-8">
                      {/* Diamond Point */}
                      <motion.div 
                        className="relative z-10 w-5 h-5 bg-white rotate-45 mt-1.5 shrink-0 shadow-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        // CHANGED: once: false
                        viewport={{ once: false, amount: 0.8 }} 
                        transition={{ duration: 0.4, delay: 0.5 + (idx * 0.5) }} // Staggers with the line
                      ></motion.div>

                      {/* Text Content */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        // CHANGED: once: false
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.6 + (idx * 0.5) }}
                      >
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-blue-100 text-base leading-relaxed">{step.desc}</p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>


          {/* =========================================
              RIGHT COLUMN: CONTACT FORM (Visible on ALL screens)
             ========================================= */}
          <motion.div 
            className="bg-white rounded-3xl p-6 md:p-12 text-gray-800 shadow-2xl relative"
            initial="hidden"
            whileInView="visible"
            // CHANGED: once: false
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.8,
                  staggerChildren: 0.1 
                }
              }
            }}
          >
            <div className="mb-6 lg:hidden">
                <h2 className="text-2xl font-bold text-gray-900">Let's Talk</h2>
                <p className="text-gray-500 text-sm">Fill out the form below to get started.</p>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-green-50 text-green-700 rounded-xl flex items-center gap-2 text-sm font-bold border border-green-200">
                <CheckCircle size={18} /> Inquiry Sent Successfully!
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-red-50 text-red-700 rounded-xl flex items-center gap-2 text-sm font-bold border border-red-200">
                <AlertCircle size={18} /> Failed to send. Please try again.
              </motion.div>
            )}

            {/* Form Fields */}
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                  <label className="block text-sm font-bold text-gray-600 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input required name="user_name" type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all outline-none" />
                  </div>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                  <label className="block text-sm font-bold text-gray-600 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input required name="user_email" type="email" placeholder="email@example.com" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all outline-none" />
                  </div>
                </motion.div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                  <label className="block text-sm font-bold text-gray-600 mb-2">Mobile Number</label>
                  <div className="relative flex">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 flex items-center gap-1">
                      <Phone size={18} />
                    </div>
                    <select name="country_code" className="pl-10 pr-2 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-sm focus:border-blue-600 outline-none text-gray-600">
                      <option value="+1">+1</option>
                      <option value="+91">+91</option>
                      <option value="+44">+44</option>
                    </select>
                    <input required name="user_mobile" type="tel" placeholder="123 456 7890" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-r-xl focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all outline-none" />
                  </div>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                  <label className="block text-sm font-bold text-gray-600 mb-2">Budget (Optional)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select name="user_budget" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all outline-none appearance-none text-gray-500">
                      <option value="Not Selected">Select Budget</option>
                      <option value="&lt; $5k">&lt; $5k</option>
                      <option value="$5k - $10k">$5k - $10k</option>
                      <option value="$10k - $50k">$10k - $50k</option>
                      <option value="$50k+">$50k+</option>
                    </select>
                  </div>
                </motion.div>
              </div>

              {/* Row 3 - Textarea */}
              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                <label className="block text-sm font-bold text-gray-600 mb-2">Inquiry & Requirement</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400" size={18} />
                  <textarea required name="message" rows="4" placeholder="Tell us about your project..." className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 transition-all outline-none resize-none"></textarea>
                </div>
              </motion.div>

              {/* Button */}
              <motion.div 
                className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-6"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <motion.button 
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSending ? 'Sending...' : 'Send Inquiry'}
                  {!isSending && <Send size={18} />}
                </motion.button>
              </motion.div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
