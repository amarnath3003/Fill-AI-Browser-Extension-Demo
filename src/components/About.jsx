import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">About FillAI</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-lime to-transparent mx-auto rounded-full mb-10" />
          
          <p className="text-xl text-white/70 font-body leading-relaxed mb-8">
            We believe you shouldn't have to repeatedly teach browsers who you are. FillAI is built around a powerful contextual engine that deeply understands your personal background, career history, and custom data.
          </p>
          <p className="text-xl text-white/70 font-body leading-relaxed">
            Instead of simply copying and pasting raw text, FillAI intelligently reads any complex form or CRM, matches the fields to your profile, and writes tailored responses. One click, infinite understanding, and zero friction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
