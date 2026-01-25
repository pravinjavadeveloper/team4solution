import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function GetConsulting({ isOpen, onClose }) {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  // --- SCROLL LOCK & LAYOUT SHIFT FIX ---
  useEffect(() => {
    if (isOpen) {
      // 1. Calculate the width of the scrollbar
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // 2. Lock scroll AND add padding to prevent content jumping
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // 3. Reset when closed
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }

    // Cleanup function
    return () => { 
      document.body.style.overflow = 'unset'; 
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_a6ds2qx"; 
    const TEMPLATE_ID = "template_ydy3tqv"; 
    const PUBLIC_KEY = "dOcIpsv19zWgxqo3W";   

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          setIsSending(false);
          setStatus('success');
          setTimeout(() => {
            e.target.reset();
            setStatus(null);
            onClose();
          }, 3000);
      }, (error) => {
          console.log(error.text);
          setIsSending(false);
          setStatus('error');
      });
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  // Wrap in Portal to ensure it sits on top of everything
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            variants={modalVariants}
            initial="hidden" animate="visible" exit="exit"
            className="relative bg-white w-[95%] md:w-full max-w-xl max-h-[95vh] overflow-y-auto rounded-2xl shadow-2xl z-10"
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute top-3 right-3 p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-20">
              <X size={18} className="text-gray-600" />
            </button>

            {/* Content */}
            <div className="p-5 md:p-8">
              
              {/* Header */}
              <div className="mb-4 text-center">
                <motion.h2 variants={itemVariants} className="text-xl md:text-3xl font-bold text-blue-900 leading-tight">Get in Touch</motion.h2>
                <motion.p variants={itemVariants} className="text-gray-500 text-xs md:text-sm mt-1">Let's turn your ideas into reality.</motion.p>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div variants={itemVariants} className="mb-3 p-2 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 text-xs font-medium">
                  <CheckCircle size={14} /> Sent! We will contact you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div variants={itemVariants} className="mb-3 p-2 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 text-xs font-medium">
                  <AlertCircle size={14} /> Failed. Please try again.
                </motion.div>
              )}

              {/* Form */}
              <form ref={form} onSubmit={sendEmail} className="space-y-3">
                
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.div variants={itemVariants} className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase">Full Name</label>
                    <input required name="user_name" type="text" placeholder="John Doe" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-600 outline-none text-xs md:text-sm"/>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase">Email</label>
                    <input required name="user_email" type="email" placeholder="email@ex.com" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-600 outline-none text-xs md:text-sm"/>
                  </motion.div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.div variants={itemVariants} className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase">Mobile</label>
                    <div className="flex">
                      <select name="country_code" className="px-1 py-2 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-600 outline-none text-xs">
                        <option value="+1">+1</option>
                        <option value="+91">+91</option>
                        <option value="+44">+44</option>
                      </select>
                      <input required name="user_mobile" type="tel" placeholder="1234567890" className="w-full px-2 py-2 rounded-r-lg border border-gray-300 focus:border-blue-600 outline-none text-xs md:text-sm"/>
                    </div>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase">Budget</label>
                    <select name="user_budget" className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:border-blue-600 outline-none text-xs md:text-sm">
                      <option value="Not Selected">Select</option>
                      <option value="&lt; $5k">&lt; $5k</option>
                      <option value="$5k - $10k">$5k-$10k</option>
                      <option value="$10k+">$10k+</option>
                    </select>
                  </motion.div>
                </div>

                {/* Row 3 - Requirement */}
                <motion.div variants={itemVariants} className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-600 uppercase">Requirement</label>
                  <textarea required name="message" rows="2" placeholder="Tell us about your project..." className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-600 outline-none resize-none text-xs md:text-sm"></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants} className="pt-1">
                  <button 
                    type="submit"
                    disabled={isSending}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group ${isSending ? 'opacity-70' : ''}`}
                  >
                    {isSending ? 'Sending...' : 'Send Inquiry'}
                    {!isSending && <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={16} />}
                  </button>
                </motion.div>

              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}