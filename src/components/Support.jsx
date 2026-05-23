import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is FillAI really free to use?",
    answer: "Yes! Our core extension is 100% free forever. If you need advanced AI features or custom formatting workflows, you can upgrade to FillAI Pro."
  },
  {
    question: "How does FillAI know what to type?",
    answer: "FillAI uses state-of-the-art AI models combined with a secure local profile you set up. It understands the context of the fields on your screen and accurately maps your profile data to the required inputs."
  },
  {
    question: "Is my personal data secure?",
    answer: "Absolutely. Your core profile data is stored securely and is only accessed when you explicitly click the FillAI button to trigger an autofill."
  },
  {
    question: "Does it work on any website?",
    answer: "FillAI is designed to work on 99% of web forms, CRMs, and application portals. If you find a site it doesn't support, just let us know and we'll train the AI to handle it!"
  }
];

export default function Support() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="support" className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Background radial glow/aurora */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-lime/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold font-display uppercase tracking-widest text-lime bg-lime/10 border border-lime/20 px-3.5 py-1.5 rounded-full mb-5 inline-block">
            Support
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Help & <span className="text-lime">FAQs</span>
          </h2>
          <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent mx-auto rounded-full mb-6" />
          <p className="text-xl text-white/60 font-body">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 relative ${
                  isOpen 
                    ? 'border-lime/30 bg-lime/[0.02] shadow-[0_0_24px_rgba(200,241,53,0.04)]' 
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className={`font-display font-bold text-lg transition-colors duration-300 ${isOpen ? 'text-lime' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-lime transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 pt-2 text-white/60 font-body leading-relaxed border-l-2 border-transparent">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
