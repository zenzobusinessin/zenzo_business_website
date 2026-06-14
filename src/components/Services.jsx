import React from 'react';

export default function Services() {
  const services = [
    {
      icon: 'language',
      title: 'Professional Websites',
      desc: 'Custom-designed, blazing-fast, and mobile-responsive websites that establish your brand.'
    },
    {
      icon: 'shopping_bag',
      title: 'E-commerce Solutions',
      desc: 'Full-featured online stores with product management, shopping cart, and secure UPI/card checkout.'
    },
    {
      icon: 'chat',
      title: 'WhatsApp Automation',
      desc: 'Connect with clients via smart automated responses, bulk announcements, and follow-ups.'
    },
    {
      icon: 'smart_toy',
      title: 'AI Chatbot Setup',
      desc: 'Intellectual AI agents custom-trained on your business details to handle complex customer queries.'
    },
    {
      icon: 'search',
      title: 'SEO & Online Visibility',
      desc: 'Structure your site and local profile so customers in Hyderabad and beyond find you first.'
    },
    {
      icon: 'support_agent',
      title: 'Managed Tech Support',
      desc: 'Domain setup, secure hosting, and reliable local support to keep your site running smoothly.'
    }
  ];

  return (
    <section className="py-xl bg-surface-container-lowest" id="services">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-primary">What we do for your business</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-base">Stunning web design, e-commerce engines, and smart automation built for your growth.</p>
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
