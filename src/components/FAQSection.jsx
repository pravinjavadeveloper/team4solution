import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Award } from "lucide-react";

// --- DATA: AWARDS / DIRECTORIES ---
const awardsData = [
  { name: "Design Rush", color: "text-white" },
  { name: "TopDevelopers", color: "text-blue-400" },
  { name: "SelectedFirms", color: "text-green-400" },
  { name: "TechImply", color: "text-red-400" },
];

// --- DATA: FAQS ---
const faqData = [
  {
    id: "01",
    question: "What software development services do you offer?",
    answer: (
      <>
        We offer different industry solutions and services such as:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
          <li>Mobile app development</li>
          <li>Website development</li>
          <li>UX/UI designing</li>
          <li>SaaS development</li>
          <li>CRM development</li>
        </ul>
      </>
    ),
  },
  {
    id: "02",
    question: "What is the average development cost and time?",
    answer: "The average cost of development is around $8,000–$25,000, depending on your software type, business model, and other relevant factors. For a basic app, this development period spans between 3 and 6 months. But if you go with custom app development, the time and cost differ.",
  },
  {
    id: "03",
    question: "Which hiring model do you provide?",
    answer: (
      <>
        We offer different hiring models catered to business needs. Basically, there are three types of hiring you can opt for:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
          <li>Dedicated team hiring</li>
          <li>Fixed project cost</li>
          <li>Hourly cost model</li>
        </ul>
      </>
    ),
  },
  {
    id: "04",
    question: "How do you ensure the security of my app?",
    answer: "We rely on industry-standard security compliance to ensure that business-specific policies are followed. By utilizing multiple layers of encryption and third-party security systems, we provide comprehensive protection for your app.",
  },
];

export default function FAQSection() {
  // Track which FAQ is currently open (null = all closed)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* =========================================
            1. TOP SECTION: AWARDS / DIRECTORIES
           ========================================= */}
        <div className="mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-10 max-w-2xl"
          >
            Proudly Listed on Top-Tier Mobile <br />
            App Development Directories
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {awardsData.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-24 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-center gap-3 hover:border-blue-600/50 transition-colors group"
              >
                {/* Placeholder Logo Icon */}
                <Award className={`w-6 h-6 ${award.color}`} />
                <span className={`font-bold text-lg ${award.color} group-hover:scale-105 transition-transform`}>
                  {award.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>


        {/* =========================================
            2. BOTTOM SECTION: FAQ ACCORDION
           ========================================= */}
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-5xl font-bold mb-16"
          >
            Frequently Asked Question
          </motion.h2>

          <div className="flex flex-col gap-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-blue-600 bg-[#0a0a0a]" : "border-white/10 bg-transparent hover:border-white/30"
                  }`}
                >
                  {/* --- QUESTION HEADER (Clickable) --- */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg md:text-xl font-semibold flex gap-4">
                      <span className="text-gray-500 font-mono">{item.id}.</span>
                      {item.question}
                    </span>
                    
                    {/* Plus/Minus Button */}
                    <div 
                      className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        isOpen ? "bg-blue-600 text-white" : "bg-blue-600/10 text-blue-500"
                      }`}
                    >
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  {/* --- ANSWER CONTENT (Animated Dropdown) --- */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 pl-14 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}