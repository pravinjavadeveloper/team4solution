import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function GetConsulting({ isOpen, onClose }) {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  // --- 1. STATE FOR INPUTS & ERRORS ---
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    country_code: '+1',
    user_mobile: '',
    user_budget: 'Not Selected',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // --- 2. HANDLE INPUT CHANGE ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // --- 3. VALIDATION FUNCTION ---
  const validate = () => {
    let newErrors = {};

    // Name Validation
    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    } else if (formData.user_name.trim().length < 2) {
      newErrors.user_name = "Name must be at least 2 chars";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!emailRegex.test(formData.user_email)) {
      newErrors.user_email = "Invalid email format";
    }

    // Mobile Validation (Simple length check for digits)
    const mobileDigits = formData.user_mobile.replace(/\D/g, ''); // Remove non-digits
    if (!formData.user_mobile.trim()) {
      newErrors.user_mobile = "Mobile is required";
    } else if (mobileDigits.length < 7 || mobileDigits.length > 15) {
      newErrors.user_mobile = "Invalid phone number";
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 chars";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // --- SCROLL LOCK & LAYOUT SHIFT FIX ---
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => { 
      document.body.style.overflow = 'unset'; 
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  const sendEmail = (e) => {
    e.preventDefault();

    // --- 4. RUN VALIDATION BEFORE SENDING ---
    if (!validate()) {
      return; // Stop if validation fails
    }

    setIsSending(true);

    const SERVICE_ID = "service_a6ds2qx"; 
    const TEMPLATE_ID = "template_ydy3tqv"; 
    const PUBLIC_KEY = "dOcIpsv19zWgxqo3W";   

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          setIsSending(false);
          setStatus('success');
          setTimeout(() => {
            setFormData({ // Reset Form State
              user_name: '', user_email: '', country_code: '+1', 
              user_mobile: '', user_budget: 'Not Selected', message: '' 
            });
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
              <form ref={form} onSubmit={sendEmail} className="space-y-3" noValidate>
                
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Name Input */}
                  <motion.div variants={itemVariants} className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase">Full Name</label>
                    <input 
                      name="user_name" 
                      type="text" 
                      placeholder="John Doe" 
                      value={formData.user_name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 rounded-lg border focus:border-blue-600 outline-none text-xs md:text-sm transition-colors ${errors.user_name ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    />
                    {errors.user_name && <span className="text-[10px] text-red-500 font-medium">{errors.user_name}</span>}
                  </motion.div>

                  {/* Email Input */}
                  <motion.div variants={itemVariants} className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase">Email</label>
                    <input 
                      name="user_email" 
                      type="email" 
                      placeholder="email@ex.com" 
                      value={formData.user_email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 rounded-lg border focus:border-blue-600 outline-none text-xs md:text-sm transition-colors ${errors.user_email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    />
                    {errors.user_email && <span className="text-[10px] text-red-500 font-medium">{errors.user_email}</span>}
                  </motion.div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Mobile Input */}
                  <motion.div variants={itemVariants} className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase">Mobile</label>
                    <div className="flex">
                      <select 
                        name="country_code" 
                        value={formData.country_code}
                        onChange={handleChange}
                        className="px-1 py-2 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-600 outline-none text-xs"
                      >
                        <option value="+1">+1</option>
                        <option value="+91">+91</option>
                        <option value="+44">+44</option>
                      </select>
                      <input 
                        name="user_mobile" 
                        type="tel" 
                        placeholder="1234567890" 
                        value={formData.user_mobile}
                        onChange={handleChange}
                        className={`w-full px-2 py-2 rounded-r-lg border focus:border-blue-600 outline-none text-xs md:text-sm transition-colors ${errors.user_mobile ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                      />
                    </div>
                    {errors.user_mobile && <span className="text-[10px] text-red-500 font-medium">{errors.user_mobile}</span>}
                  </motion.div>

                  {/* Budget Select */}
                  <motion.div variants={itemVariants} className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase">Budget</label>
                    <select 
                      name="user_budget" 
                      value={formData.user_budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:border-blue-600 outline-none text-xs md:text-sm"
                    >
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
                  <textarea 
                    name="message" 
                    rows="2" 
                    placeholder="Tell us about your project..." 
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg border focus:border-blue-600 outline-none resize-none text-xs md:text-sm transition-colors ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  ></textarea>
                  {errors.message && <span className="text-[10px] text-red-500 font-medium">{errors.message}</span>}
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants} className="pt-1">
                  <button 
                    type="submit"
                    disabled={isSending}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
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