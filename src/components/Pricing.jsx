import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for trying out FillAI on basic forms.',
    features: [
      'Unlimited standard form autofills',
      'Local profile storage',
      'Basic heuristics',
      '50 AI generations per month'
    ],
    buttonText: 'Get Started for Free',
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '$10',
    period: '/month',
    description: 'For power users who need advanced AI filling capabilities.',
    features: [
      'Everything in Free',
      'Unlimited AI generations',
      'Advanced shadow-DOM support',
      'Custom LLM prompt instructions',
      'Priority email support'
    ],
    buttonText: 'Upgrade to Pro',
    isPopular: true,
  },
  {
    name: 'Pay-as-you-go',
    price: '$5',
    period: '/500 credits',
    description: 'Need more AI generations but don\'t want a subscription?',
    features: [
      'Top up your AI credits anytime',
      'Credits never expire',
      'Access to advanced AI models',
      'No monthly commitment'
    ],
    buttonText: 'Buy Credits',
    isPopular: false,
  }
];

export default function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden bg-black border-t border-white/5" id="pricing">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-lime/5 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/60 font-body"
          >
            Start automating your workflows for free. Upgrade when you need more AI power.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass p-8 rounded-[32px] flex flex-col h-full ${
                tier.isPopular ? 'border-lime/50 shadow-[0_0_30px_rgba(200,241,53,0.1)]' : 'border-white/10 hover:border-white/20'
              } transition-colors`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-lime text-black text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                <p className="text-white/60 text-sm font-body h-10">{tier.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-display font-bold">{tier.price}</span>
                {tier.period && <span className="text-white/40 text-sm font-body">{tier.period}</span>}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm font-body text-white/80">
                    <Check className="w-5 h-5 text-lime shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold font-display text-sm transition-all ${
                  tier.isPopular
                    ? 'bg-lime text-black hover:bg-lime-dk hover:shadow-[0_0_20px_rgba(200,241,53,0.3)]'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
