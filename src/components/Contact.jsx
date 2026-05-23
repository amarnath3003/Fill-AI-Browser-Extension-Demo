import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="w-full text-left">
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <div className="w-16 h-16 bg-lime/20 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-lime" />
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-white/60 font-body text-sm">We'll get back to you as soon as possible.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-lime/50 transition-colors text-sm"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-lime/50 transition-colors text-sm"
                placeholder="jane@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Message</label>
            <textarea 
              id="message"
              required
              rows={4}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-lime/50 transition-colors resize-none text-sm"
              placeholder="How can we help you?"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-lime hover:bg-lime-dk text-black font-display font-bold text-base rounded-xl py-3.5 transition-all hover:shadow-[0_0_20px_rgba(200,241,53,0.3)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
