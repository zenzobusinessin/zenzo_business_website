import React from 'react';

export default function Pricing() {
  const handleScrollToContact = (serviceType) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    const selectEl = document.querySelector('select[name="businessType"]');
    if (selectEl && serviceType) {
      selectEl.value = serviceType;
      const event = new Event('change', { bubbles: true });
      selectEl.dispatchEvent(event);
    }
  };

  const essentials = [
    {
      icon: 'bolt',
      title: 'Blazing Fast Speed',
      desc: 'Optimized images and clean code for under 2-second load times.'
    },
    {
      icon: 'search',
      title: 'SEO Ready',
      desc: 'Structured meta-tags, clean HTML, and sitemaps so Google finds you.'
    },
    {
      icon: 'security',
      title: 'Secure by Default',
      desc: 'SSL security encryption setup to keep your site and clients safe.'
    },
    {
      icon: 'devices',
      title: 'Mobile First',
      desc: 'Designed to look stunning on iPhones, Androids, and desktops alike.'
    }
  ];

  return (
    <section className="py-xl" id="solutions">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-xl">
          <span className="text-primary font-bold uppercase tracking-wider text-label-sm">Digital Growth</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-base">Web & Scaling Solutions</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-sm">
            High-converting website layouts and smart automation systems designed to establish your brand presence and multiply your business growth.
          </p>
        </div>

        {/* Main Split Cards */}
        <div className="grid md:grid-cols-2 gap-lg items-stretch mb-xl">
          {/* Website Design & Dev Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col justify-between hover:border-primary transition-all duration-300 shadow-sm">
            <div>
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-sm rounded-lg text-3xl">
                  language
                </span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Website Design & Dev</h3>
                  <p className="text-label-sm text-primary font-semibold">Perfect for brand presence, portfolios, & local businesses</p>
                </div>
              </div>
              
              <p className="text-on-surface-variant text-body-md mb-lg">
                Create a stunning, responsive website that represents your business, captures qualified leads, and ranks high on Google. Includes domain configuration, secure hosting, custom design, and local SEO setup.
              </p>

              <h4 className="font-label-md text-label-md text-on-surface mb-sm">Key Features Included:</h4>
              <ul className="space-y-sm mb-lg">
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-primary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Custom Responsive Layouts & Graphics
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-primary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Interactive Contact & Registration Forms
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-primary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Google Maps & Local Search SEO setup
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-primary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  CMS Setup for Blogs, Reviews, & Updates
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-primary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Secure SSL, Domain & Hosting Integration
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleScrollToContact('Website Design & Development')}
              className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-md hover:bg-opacity-90 transition-all cursor-pointer mt-md active:scale-95"
            >
              Inquire About Website Design & Dev
            </button>
          </div>

          {/* Marketing & Scaling Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col justify-between hover:border-primary transition-all duration-300 shadow-sm relative overflow-hidden">
            <span className="absolute top-4 right-4 bg-secondary text-on-secondary px-sm py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Scale Fast
            </span>
            <div>
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-secondary bg-secondary/10 p-sm rounded-lg text-3xl">
                  trending_up
                </span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Marketing & Scaling</h3>
                  <p className="text-label-sm text-secondary font-semibold">Perfect for lead automation, chatbot support, & broadcast marketing</p>
                </div>
              </div>

              <p className="text-on-surface-variant text-body-md mb-lg">
                Supercharge your customer acquisition and retention. We integrate smart AI chatbots and 24/7 automated WhatsApp message flows to instantly nurture leads, send fee/appointment reminders, and broadcast promotions.
              </p>

              <h4 className="font-label-md text-label-md text-on-surface mb-sm">Key Features Included:</h4>
              <ul className="space-y-sm mb-lg">
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-secondary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Smart AI Chatbots Custom-Trained on Your Business
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-secondary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  24/7 Automated WhatsApp Follow-ups & Reminders
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-secondary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Bulk Broadcast Campaigns to Your Customer Lists
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-secondary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Instant Lead Sync from Website to WhatsApp Chat
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-secondary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Analytics Dashboard to Track Conversions & ROI
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleScrollToContact('Marketing & Scaling Solutions')}
              className="w-full border-2 border-secondary text-secondary py-sm rounded-lg font-label-md hover:bg-secondary/5 transition-all cursor-pointer mt-md active:scale-95"
            >
              Inquire About Marketing & Scaling
            </button>
          </div>
        </div>

        {/* Core Web Essentials */}
        <div className="bg-surface-container-high/40 rounded-2xl p-lg border border-outline-variant/40">
          <h3 className="font-headline-md text-headline-md text-center text-on-surface mb-lg">Standard in Every Project</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {essentials.map((item, idx) => (
              <div key={idx} className="text-center flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-3xl mb-xs">
                  {item.icon}
                </span>
                <h4 className="font-label-md text-label-md text-on-surface mb-1">{item.title}</h4>
                <p className="text-on-surface-variant text-label-sm max-w-[180px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
