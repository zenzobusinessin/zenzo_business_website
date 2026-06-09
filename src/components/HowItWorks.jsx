import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'Book a free demo',
      desc: 'We understand your business needs and show you how automation helps.',
      hasLine: true
    },
    {
      num: 2,
      title: 'We build your automation',
      desc: 'Our team handles the technical setup, API integration, and bot training.',
      hasLine: true
    },
    {
      num: 3,
      title: 'Watch your business grow',
      desc: 'Start receiving leads and serving customers 24/7 on autopilot.',
      hasLine: false
    }
  ];

  return (
    <section className="py-xl bg-on-tertiary-container/30" id="how-it-works">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-xl">Up and running in 3 simple steps</h2>
        <div className="grid md:grid-cols-3 gap-lg relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative z-10">
              <div className={`w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-md text-headline-md mb-md relative ${step.hasLine ? 'step-line' : ''}`}>
                {step.num}
              </div>
              <h3 className="font-headline-md text-headline-md mb-xs">{step.title}</h3>
              <p className="text-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
