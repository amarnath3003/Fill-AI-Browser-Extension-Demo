import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Store your data',
    description: 'Save your personal details, work experience, resume, and bio securely on your device.',
  },
  {
    num: '02',
    title: 'Find a form',
    description: 'Navigate to any complex form, CRM, or portal on the web.',
  },
  {
    num: '03',
    title: 'Click the magic button',
    description: 'FillAI intelligently maps your stored data to the form fields using local heuristics.',
  },
  {
    num: '04',
    title: 'Review and submit',
    description: 'Watch the AI draft answers for complex inputs instantly. Review and submit.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden bg-card/30 border-y border-white/5">
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-bold text-lime tracking-widest uppercase mb-4">
              From empty form to done
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
              In four simple steps
            </h3>
            <p className="text-white/60 text-lg mb-12 font-body">
              Stop wasting time re-typing the same information. FillAI maps your stored profile data instantly to the inputs that need it.
            </p>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 mt-1">
                    <span className="text-sm font-display font-bold text-lime/50">{step.num}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">{step.title}</h4>
                    <p className="text-white/60 font-body text-sm leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-full">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
             className="w-full aspect-square rounded-[40px] bg-[#141414] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center p-8 shadow-2xl shadow-black/50"
           >
             {/* Abstract Visualization */}
             <div className="relative w-full h-full flex flex-col max-w-sm mx-auto justify-center pb-4">
                
                {/* Step 1: Store Data (Profile) */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: false }}
                  className="w-full glass rounded-xl p-5 border border-white/5 relative z-10"
                >
                   <div className="flex items-center justify-between mb-4">
                     <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">1. Secured Profile</span>
                     <motion.div 
                       initial={{ scale: 0 }}
                       whileInView={{ scale: 1 }}
                       transition={{ delay: 0.8, type: "spring" }}
                       className="w-4 h-4 rounded-full bg-lime/20 flex items-center justify-center"
                     >
                       <div className="w-1.5 h-1.5 rounded-full bg-lime" />
                     </motion.div>
                   </div>
                   <div className="space-y-2.5">
                     <div className="h-2 w-full bg-white/10 rounded overflow-hidden">
                       <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} transition={{ delay: 0.5, duration: 0.5 }} className="h-full bg-white/40" />
                     </div>
                     <div className="h-2 w-3/4 bg-white/10 rounded overflow-hidden">
                       <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} transition={{ delay: 0.7, duration: 0.5 }} className="h-full bg-white/40" />
                     </div>
                     <div className="h-2 w-5/6 bg-white/10 rounded overflow-hidden">
                       <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} transition={{ delay: 0.9, duration: 0.5 }} className="h-full bg-white/40" />
                     </div>
                   </div>
                </motion.div>

                {/* Step 2 & 3: Connection / Trigger */}
                <div className="relative h-12 flex justify-center items-center my-2">
                  <div className="absolute top-0 bottom-0 w-0.5 bg-white/5" />
                  <motion.div 
                    initial={{ height: "0%" }} 
                    whileInView={{ height: "100%" }} 
                    transition={{ delay: 1.5, duration: 0.5 }} 
                    className="absolute top-0 w-0.5 bg-lime/80 shadow-[0_0_10px_rgba(200,241,53,0.8)] z-0" 
                  />
                  {/* FillAI Magic Button */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.8, type: "spring" }}
                    className="w-10 h-10 rounded-xl bg-lime z-20 flex items-center justify-center shadow-[0_0_30px_rgba(200,241,53,0.4)] border border-lime-lt"
                  >
                    <Zap className="w-5 h-5 text-black" fill="currentColor" />
                  </motion.div>
                </div>

                {/* Step 4: Web Form (Fill & Review) */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  viewport={{ once: false }}
                  className="w-full glass rounded-xl p-5 border border-white/5 relative z-10"
                >
                   <div className="flex justify-between items-center mb-4">
                     <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">2. Target Web Form</span>
                     <motion.span 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 3.5 }}
                       className="text-[10px] font-bold text-lime uppercase tracking-widest"
                     >
                       Autofilled
                     </motion.span>
                   </div>
                   
                   <div className="space-y-3">
                     {/* Input 1 */}
                     <div className="w-full h-10 border border-white/10 bg-black/50 rounded-lg p-2.5 relative overflow-hidden">
                       <motion.div 
                         initial={{ x: "-100%" }} 
                         whileInView={{ x: "0%" }} 
                         transition={{ delay: 2.2, duration: 0.5 }} 
                         className="h-full w-full bg-lime/10 absolute inset-0" 
                       />
                       <motion.div 
                         initial={{ width: "0%" }} 
                         whileInView={{ width: "65%" }} 
                         transition={{ delay: 2.2, duration: 0.5 }} 
                         className="h-2 bg-lime rounded mt-1.5 relative z-10 shadow-[0_0_10px_rgba(200,241,53,0.5)]" 
                       />
                     </div>
                     {/* Input 2 */}
                     <div className="w-full h-10 border border-white/10 bg-black/50 rounded-lg p-2.5 relative overflow-hidden">
                       <motion.div 
                         initial={{ x: "-100%" }} 
                         whileInView={{ x: "0%" }} 
                         transition={{ delay: 2.4, duration: 0.5 }} 
                         className="h-full w-full bg-lime/10 absolute inset-0" 
                       />
                       <motion.div 
                         initial={{ width: "0%" }} 
                         whileInView={{ width: "85%" }} 
                         transition={{ delay: 2.4, duration: 0.5 }} 
                         className="h-2 bg-lime rounded mt-1.5 relative z-10 shadow-[0_0_10px_rgba(200,241,53,0.5)]" 
                       />
                     </div>
                     {/* Submit */}
                     <div className="flex justify-end pt-2">
                       <motion.div 
                         initial={{ opacity: 0.5, borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.05)" }}
                         whileInView={{ opacity: 1, borderColor: "rgba(200,241,53,0.4)", backgroundColor: "rgba(200,241,53,0.2)", scale: [1, 1.05, 1] }}
                         transition={{ delay: 3.0, duration: 0.5 }}
                         className="px-5 py-2 border rounded-lg"
                       >
                         <motion.div 
                           initial={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                           whileInView={{ backgroundColor: "rgba(200,241,53,1)" }}
                           transition={{ delay: 3.0 }}
                           className="w-10 h-1.5 rounded-full" 
                         />
                       </motion.div>
                     </div>
                   </div>
                </motion.div>
                
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
