import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// --- Contact Info Data ---
const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: "Visit Us",
    details: ["123 Tech Park, Cyber City", "London, UK - SW1A 1AA"],
    color: "bg-blue-500"
  },
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    details: ["+44 20 7946 0958", "Mon-Fri from 9am to 6pm"],
    color: "bg-purple-500"
  },
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    details: ["hello@team4solution.com", "support@team4solution.com"],
    color: "bg-pink-500"
  }
];

// --- FAQs Data ---
const faqs = [
  { q: "What services do you offer?", a: "We specialize in Custom Software Development, Mobile Apps, Web Development, UI/UX Design, and AI Solutions." },
  { q: "How much does a custom app cost?", a: "Costs vary based on complexity. We offer packages starting from $5k for MVP builds. Contact us for a precise quote." },
  { q: "Do you provide post-launch support?", a: "Yes! We offer 3 months of free support with every project and flexible maintenance packages thereafter." },
  { q: "What is your typical timeline?", a: "A standard project takes 8-12 weeks. Complex enterprise solutions may take 4-6 months." }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // --- Replace with your EmailJS credentials ---
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-24 font-sans overflow-x-hidden">
      
      {/* 1. HEADER SECTION */}
      <section className="px-6 md:px-12 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Let’s Start a <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Conversation</span>
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project in mind? We’d love to hear from you. Let’s create something amazing together.
        </p>
      </section>

      {/* 2. CONTACT INFO CARDS */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {contactInfo.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#111] border border-white/10 p-8 rounded-2xl text-center hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            {item.details.map((line, i) => (
              <p key={i} className="text-gray-400">{line}</p>
            ))}
          </motion.div>
        ))}
      </section>

      {/* 3. FORM & MAP GRID */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* LEFT: Contact Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            {status === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center py-12">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-green-400">Message Sent!</h3>
                <p className="text-gray-400 mt-2">We'll get back to you shortly.</p>
                <button onClick={() => setStatus(null)} className="mt-6 text-sm underline text-gray-500 hover:text-white">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Name</label>
                    <input 
                      required type="text" placeholder="John Doe"
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email</label>
                    <input 
                      required type="email" placeholder="john@example.com"
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Subject</label>
                  <input 
                    required type="text" placeholder="Project Inquiry..."
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea 
                    required rows="4" placeholder="Tell us about your project..."
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none resize-none transition-colors"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" disabled={status === 'sending'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {!status && <Send size={18} />}
                </button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm flex items-center gap-2 mt-2">
                    <AlertCircle size={14} /> Failed to send. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* RIGHT: Map & Office Image */}
          <div className="relative h-[400px] lg:h-auto bg-[#1a1a1a]">
            {/* Google Map Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
            
            {/* Overlay Info */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-sm">London HQ</h4>
                  <p className="text-xs text-gray-400">Open now until 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="px-6 md:px-12 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-800 pb-4">
              <button 
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between text-left text-lg font-medium hover:text-blue-500 transition-colors py-2"
              >
                {faq.q}
                <ChevronDown className={`transition-transform duration-300 ${activeAccordion === idx ? 'rotate-180 text-blue-500' : 'text-gray-500'}`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 pt-2 pb-4 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}