import { motion } from 'framer-motion';
import { Sparkles, BrainCircuit, Shield, Zap, Globe, Coins } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'AI-Powered Answers',
    description: 'Uses Google Gemini to dynamically generate tailored answers for complex questions, matching your tone and style.',
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: 'Smart Form Detection',
    description: 'Intelligent heuristics ensure the extension only triggers on real, meaningful forms, ignoring useless search bars.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Privacy First',
    description: 'Your profile details stay securely on your device. We do not store your personally identifiable information (PII) in our cloud.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast Cache',
    description: 'Smart local caching remembers your previous AI answers to speed up future form fills and save API quota.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Works Everywhere',
    description: 'Seamlessly handles complex shadow-DOM structures on CRMs, ATS platforms, and custom enterprise portals.',
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: 'Freemium Flexibility',
    description: 'Unlimited standard autofills for free. Get 50 advanced AI generations per month on our free tier, or upgrade for unlimited power.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            FillAI is built to help you <span className="text-lime">move faster.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/60 font-body"
          >
            Everything you need to automate your workflows and form filling, packed into one powerful browser extension.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-3xl hover:border-lime/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                <div className="w-32 h-32 bg-lime rounded-full blur-[60px] translate-x-10 -translate-y-10" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-lime mb-6 group-hover:scale-110 group-hover:bg-lime/10 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed font-body text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
