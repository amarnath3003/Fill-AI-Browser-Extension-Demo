import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  const [isFilled, setIsFilled] = useState(false);
  const [promptText, setPromptText] = useState('');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-lime/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden mb-8 shadow-[0_0_25px_rgba(200,241,53,0.25)] group"
        >
          {/* Rotating border gradient background */}
          <div className="absolute inset-[-1000%] animate-rotate-border bg-[conic-gradient(from_90deg_at_50%_50%,#c8f135_0%,#000000_50%,#c8f135_100%)] opacity-80" />
          
          {/* Badge body overlay */}
          <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0a0a] backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-lime" />
            <span className="text-sm font-medium text-white/80">FillAI 1.0 is now available</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-tight"
        >
          Never type out a <br className="hidden md:block" />
          <span className="text-lime">complex form</span> again.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 font-body leading-relaxed"
        >
          AI that deeply understands your profile to contextually autofill any complex form, CRM, or portal in a single click.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="px-8 py-4 bg-lime hover:bg-lime-dk text-black rounded-2xl font-display font-bold text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(200,241,53,0.3)] flex items-center gap-2 group">
            Add to Chrome — It's Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#pricing" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-display font-bold text-lg transition-all backdrop-blur-md">
            View Pricing
          </a>
        </motion.div>

        {/* Hero Image/Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative w-full max-w-5xl aspect-[16/10] rounded-2xl md:rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden shadow-[0_0_80px_rgba(200,241,53,0.1)] group"
        >
          {/* Subtle gradient behind the window */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-lime/5 pointer-events-none" />
          
          {/* Mac window header */}
          <div className="absolute top-0 left-0 right-0 h-14 bg-black/40 backdrop-blur-md border-b border-white/5 flex items-center px-6 gap-2 z-20">
            <div className="flex gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-white/10" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-white/10" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-white/10" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1.5 bg-black/50 border border-white/10 rounded-full text-xs text-white/50 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime/50 animate-pulse" />
                jobs.lever.co/example/apply
              </div>
            </div>
            <div className="w-14" /> {/* Spacer for centering */}
          </div>

          <div className="absolute inset-0 top-14 bg-transparent flex items-center justify-center p-8 z-10">
             {/* The Form Content */}
             <div className="w-full max-w-3xl border border-white/10 rounded-2xl bg-[#0a0a0a]/80 shadow-2xl p-10 flex flex-col relative text-left backdrop-blur-xl">
                {/* Form Header */}
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">Submit your application</h3>
                    <div className="w-32 h-1 bg-gradient-to-r from-lime to-transparent rounded-full" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                     <div className="w-6 h-6 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-xs text-white/50 mb-3 uppercase tracking-wider font-bold">First Name</label>
                    <div className={`w-full h-14 border rounded-xl flex items-center px-5 relative overflow-hidden transition-colors ${isFilled ? 'border-lime/30 bg-lime/5 shadow-[inset_0_0_20px_rgba(200,241,53,0.05)]' : 'border-white/10 bg-black/40'}`}>
                      {isFilled && (
                        <>
                          <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.5 }} className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-lime/10 to-transparent" />
                          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white relative z-10 font-medium text-lg">Jane</motion.span>
                        </>
                      )}
                      {!isFilled && <span className="text-white/20 font-medium text-lg">First Name</span>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-3 uppercase tracking-wider font-bold">Last Name</label>
                    <div className={`w-full h-14 border rounded-xl flex items-center px-5 relative overflow-hidden transition-colors ${isFilled ? 'border-lime/30 bg-lime/5 shadow-[inset_0_0_20px_rgba(200,241,53,0.05)]' : 'border-white/10 bg-black/40'}`}>
                      {isFilled && (
                        <>
                          <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ delay: 0.2, duration: 0.5 }} className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-lime/10 to-transparent" />
                          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-white relative z-10 font-medium text-lg">Doe</motion.span>
                        </>
                      )}
                      {!isFilled && <span className="text-white/20 font-medium text-lg">Last Name</span>}
                    </div>
                  </div>
                </div>

                <div className="mb-8 relative">
                  <div className="flex justify-between items-end mb-3">
                    <label className="block text-xs text-white/50 uppercase tracking-wider font-bold">Why do you want to work here?</label>
                  </div>
                  
                  <div className={`w-full h-40 border rounded-xl p-5 relative transition-colors ${isFilled ? 'border-lime/30 bg-lime/5 shadow-[inset_0_0_30px_rgba(200,241,53,0.05)]' : 'border-white/10 bg-black/40 focus-within:border-white/30'}`}>
                    {isFilled ? (
                      <div className="w-full h-full relative overflow-hidden">
                        <motion.div initial={{ height: "0%" }} animate={{ height: "100%" }} transition={{ delay: 0.6, duration: 0.8 }} className="absolute left-0 top-0 bottom-0 right-0 bg-gradient-to-b from-lime/5 to-transparent pointer-events-none" />
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-white relative z-10 text-base leading-relaxed block font-body">
                          {promptText.toLowerCase().includes('enthusiastic') || promptText.toLowerCase().includes('excit') 
                            ? "I am absolutely thrilled about the opportunity! I'm a senior frontend engineer with a deep background in React and building browser extensions. I am incredibly excited to bring my experience in AI to help your team build the next generation of productivity tools."
                            : "I'm a senior frontend engineer with a deep background in React and building browser extensions. I am excited about the opportunity to bring my experience in AI and LLMs to help your team build the next generation of productivity tools."}
                        </motion.span>
                      </div>
                    ) : (
                      <textarea
                        value={promptText}
                        onChange={(e) => {
                          setPromptText(e.target.value);
                          setIsFilled(false);
                        }}
                        placeholder="Write your answer here... or type a prompt for AI (e.g. 'make it enthusiastic')"
                        className="w-full h-full bg-transparent border-none outline-none text-white text-base leading-relaxed font-body placeholder:text-white/20 resize-none pb-12"
                      />
                    )}

                    {/* The Extension Autofill Trigger Mockup - Attached to the textarea */}
                    <button 
                      onClick={() => setIsFilled(true)}
                      className={`absolute right-3 bottom-3 flex items-center gap-2 bg-[#111111]/90 backdrop-blur-xl border ${isFilled ? 'border-white/20' : (promptText.length > 0 ? 'border-lime shadow-[0_0_20px_rgba(200,241,53,0.3)]' : 'border-white/15 hover:border-lime/40')} rounded-xl p-1 pr-3.5 z-50 transition-all duration-200 cursor-pointer group`}
                    >
                       <div className={`w-8 h-8 rounded-lg ${isFilled ? 'bg-white/10 text-white/50' : 'bg-lime text-black'} flex items-center justify-center transition-colors shadow-inner`}>
                         <Zap size={14} fill="currentColor" />
                       </div>
                       <span className={`text-xs font-display font-bold ${isFilled ? 'text-white/50' : 'text-white'} transition-colors`}>
                         {isFilled ? 'Autofilled' : 'Autofill with FillAI'}
                       </span>
                    </button>
                  </div>
                </div>

                <div className="mt-2 flex justify-end">
                   <button className="px-8 py-4 bg-white/10 hover:bg-white/20 transition-all border border-white/20 rounded-xl text-white font-bold tracking-wide">
                     Submit Application
                   </button>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
