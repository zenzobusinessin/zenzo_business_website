import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '₹2,999',
      features: [
        { text: 'Basic Auto-replies', included: true },
        { text: 'Lead Capture', included: true },
        { text: '1,000 Messages/mo', included: true },
        { text: 'AI Chatbot', included: false }
      ],
      cta: 'Choose Plan',
      isPopular: false
    },
    {
      name: 'Growth',
      price: '₹5,999',
      features: [
        { text: 'Everything in Starter', included: true },
        { text: 'AI Smart Chatbot', included: true },
        { text: 'Fee Reminders', included: true },
        { text: '5,000 Messages/mo', included: true }
      ],
      cta: 'Get Started',
      isPopular: true
    },
    {
      name: 'Pro',
      price: '₹9,999',
      features: [
        { text: 'Everything in Growth', included: true },
        { text: 'Multi-agent Support', included: true },
        { text: 'Unlimited Broadcasts', included: true },
        { text: 'API Integration', included: true }
      ],
      cta: 'Contact Sales',
      isPopular: false
    }
  ];

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-xl" id="pricing">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-xl">Simple, affordable pricing</h2>
        <div className="grid md:grid-cols-3 gap-md items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-surface-container-lowest border rounded-lg p-lg flex flex-col relative ${
                plan.isPopular
                  ? 'border-2 border-primary scale-105 shadow-md z-10 md:my-0 my-4'
                  : 'border-outline-variant z-0'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-sm py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="font-headline-md text-headline-md mb-xs">{plan.name}</h3>
              <div className="mb-md">
                <span className="text-3xl font-bold text-primary">{plan.price}</span>
                <span className="text-on-surface-variant">/mo</span>
              </div>
              <ul className="space-y-sm mb-xl flex-grow">
                {plan.features.map((feat, fIdx) => (
                  <li
                    key={fIdx}
                    className={`flex items-center gap-xs text-body-md ${
                      !feat.included ? 'opacity-40' : ''
                    }`}
                  >
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'wght' 600" }}>
                      check
                    </span>
                    {feat.text}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleScrollToContact}
                className={`w-full py-sm rounded-lg font-label-md transition-all cursor-pointer ${
                  plan.isPopular
                    ? 'bg-primary text-on-primary hover:bg-opacity-90'
                    : 'border border-primary text-primary hover:bg-primary/5'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
