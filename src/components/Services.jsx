import React from 'react';

export default function Services() {
  const services = [
    {
      icon: 'quickreply',
      title: 'Instant auto-replies',
      desc: 'Instantly respond to FAQs and common queries without lifting a finger.'
    },
    {
      icon: 'payments',
      title: 'Fee & reminder alerts',
      desc: 'Automated payment reminders and fee collection links for coaching centers.'
    },
    {
      icon: 'person_add',
      title: 'Lead capture & follow-up',
      desc: 'Automatically capture details from chat and schedule intelligent follow-ups.'
    },
    {
      icon: 'smart_toy',
      title: 'AI chatbot setup',
      desc: 'Custom-trained AI agents that understand your business and handle complex queries.'
    },
    {
      icon: 'campaign',
      title: 'Broadcast campaigns',
      desc: 'Send personalized updates and offers to your entire list with one click.'
    },
    {
      icon: 'support_agent',
      title: 'Dedicated support',
      desc: 'Local Hyderabad support available whenever you need help with your setup.'
    }
  ];

  return (
    <section className="py-xl bg-surface-container-lowest" id="services">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-primary">What we do for your business</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-base">Powerful WhatsApp automation tools, set up in 48 hours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {services.map((svc, idx) => (
            <div key={idx} className="p-lg bg-surface border border-outline-variant rounded-lg hover:border-primary transition-colors group">
              <span className="material-symbols-outlined text-primary text-4xl mb-sm" style={{ fontVariationSettings: "'wght' 300" }}>
                {svc.icon}
              </span>
              <h3 className="font-headline-md text-headline-md mb-xs text-on-surface">{svc.title}</h3>
              <p className="text-on-surface-variant text-body-md">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
