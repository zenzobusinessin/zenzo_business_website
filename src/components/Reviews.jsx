import React from 'react';

export default function Reviews() {
  const plans = [
    {
      name: 'Starter',
      price: '₹2,999',
      period: '/mo',
      features: [
        { text: 'Basic Auto-replies', included: true },
        { text: 'Lead Capture', included: true },
        { text: '1,000 Messages/mo', included: true },
        { text: 'AI Chatbot', included: false }
      ],
      popular: false,
      buttonText: 'Choose Starter'
    },
    {
      name: 'Growth',
      price: '₹5,999',
      period: '/mo',
      features: [
        { text: 'Everything in Starter', included: true },
        { text: 'AI Smart Chatbot', included: true },
        { text: 'SEO optimization', included: true },
        { text: '5,000 Messages/mo', included: true }
      ],
      popular: true,
      buttonText: 'Get Started'
    },
    {
      name: 'Pro',
      price: '₹9,999',
      period: '/mo',
      features: [
        { text: 'Everything in Growth', included: true },
        { text: 'Multi-agent Support', included: true },
        { text: 'Unlimited Broadcasts', included: true },
        { text: 'API Integration', included: true }
      ],
      popular: false,
      buttonText: 'Contact Sales'
    }
  ];

  const promoText = "Be one of our first clients — get a discounted rate and a case study feature";

  const handleScrollToContact = (planName) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    const selectEl = document.querySelector('select[name="businessType"]');
    if (selectEl && planName) {
      if (planName === 'Starter' || planName === 'Growth') {
        selectEl.value = 'WhatsApp Automation Bot';
      } else if (planName === 'Pro') {
        selectEl.value = 'Complete Web + Automation Suite';
      }
      const event = new Event('change', { bubbles: true });
      selectEl.dispatchEvent(event);
    }
  };

  return (
    <section className="py-xl bg-surface-container-high" id="pricing">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-xl">
          <span className="text-primary font-bold uppercase tracking-wider text-label-sm">Pricing</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-base">Simple, affordable pricing</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-sm">
            Choose the perfect plan for your business scale. Setup in 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-lg flex flex-col justify-between h-full transition-all duration-300 ${
                plan.popular
                  ? 'bg-surface-container-lowest border-2 border-primary relative scale-100 md:scale-105 shadow-md hover:shadow-lg'
                  : 'bg-surface border border-outline-variant hover:border-primary/50 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-sm py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="font-headline-md text-headline-md mb-xs text-on-surface">{plan.name}</h3>
                <div className="mb-md flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-on-surface-variant text-label-sm">{plan.period}</span>
                </div>
                <ul className="space-y-sm mb-lg">
                  {plan.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className={`flex items-start gap-xs text-body-md ${
                        feat.included ? 'text-on-surface' : 'text-on-surface-variant/40'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-xl mt-[2px] ${
                          feat.included ? 'text-primary' : 'text-on-surface-variant/20'
                        }`}
                        style={{ fontVariationSettings: "'wght' 600" }}
                      >
                        {feat.included ? 'check' : 'close'}
                      </span>
                      <span>{feat.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleScrollToContact(plan.name)}
                className={`w-full py-sm rounded-lg font-label-md transition-all cursor-pointer mt-md active:scale-95 ${
                  plan.popular
                    ? 'bg-primary text-on-primary hover:bg-opacity-90'
                    : 'border border-primary text-primary hover:bg-primary/5'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center bg-primary text-on-primary p-lg rounded-xl gap-md">
          <p className="font-body-lg text-body-lg text-center md:text-left flex-1">
            {promoText}
          </p>
          <div className="w-full md:w-auto text-center md:text-right">
            <button
              onClick={handleScrollToContact}
              className="w-full md:w-auto bg-on-primary text-primary px-lg py-sm rounded-lg font-label-md cursor-pointer hover:bg-opacity-95 transition-all"
            >
              Join Them Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
