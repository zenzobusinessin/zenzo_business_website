import React from 'react';

export default function Pricing() {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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
          <span className="text-primary font-bold uppercase tracking-wider text-label-sm">Digital Presence</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-base">Websites & E-commerce Solutions</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-sm">
            High-converting websites and shopping storefronts designed to grow your business, showcase your work, and automate sales.
          </p>
        </div>

        {/* Main Split Cards */}
        <div className="grid md:grid-cols-2 gap-lg items-stretch mb-xl">
          {/* Business Website Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col justify-between hover:border-primary transition-all duration-300 shadow-sm">
            <div>
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-sm rounded-lg text-3xl">
                  language
                </span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Custom Business Websites</h3>
                  <p className="text-label-sm text-primary font-semibold">Perfect for services, schools, & local businesses</p>
                </div>
              </div>
              
              <p className="text-on-surface-variant text-body-md mb-lg">
                Establish authority, showcase your services, and capture user leads 24/7. Perfect for coaching centers, clinics, real estate, and professional consulting firms in Hyderabad.
              </p>

              <h4 className="font-label-md text-label-md text-on-surface mb-sm">Key Features Included:</h4>
              <ul className="space-y-sm mb-lg">
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-primary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Custom Homepage & Service Showcases
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-primary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Interactive Contact & Lead Capture Forms
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-primary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  WhatsApp Quick-Chat Widget Integration
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-primary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Google Maps & Local Search SEO setup
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-primary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Content Management System (CMS) for blogs/updates
                </li>
              </ul>
            </div>

            <button
              onClick={handleScrollToContact}
              className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-md hover:bg-opacity-90 transition-all cursor-pointer mt-md"
            >
              Inquire About Business Website
            </button>
          </div>

          {/* E-commerce Store Card */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col justify-between hover:border-primary transition-all duration-300 shadow-sm relative overflow-hidden">
            <span className="absolute top-4 right-4 bg-secondary text-on-secondary px-sm py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Scalable E-com
            </span>
            <div>
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-secondary bg-secondary/10 p-sm rounded-lg text-3xl">
                  shopping_bag
                </span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">E-commerce Stores</h3>
                  <p className="text-label-sm text-secondary font-semibold">Perfect for retail, products, & clothing brands</p>
                </div>
              </div>

              <p className="text-on-surface-variant text-body-md mb-lg">
                Sell physical or digital items directly to customers. We build powerful catalog systems, smooth checkouts, and clean admin portals to manage your sales, customers, and inventory.
              </p>

              <h4 className="font-label-md text-label-md text-on-surface mb-sm">Key Features Included:</h4>
              <ul className="space-y-sm mb-lg">
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-secondary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Interactive Product Catalog & Filters
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-secondary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Secure Checkout with Razorpay / GPay / UPI
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-secondary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Inventory Management & Admin Sales Dashboard
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-secondary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Automated Order Invoice & WhatsApp Alert system
                </li>
                <li className="flex items-start gap-xs text-body-md">
                  <span className="material-symbols-outlined text-secondary text-xl mt-[2px]" style={{ fontVariationSettings: "'wght' 600" }}>check</span>
                  Discount Coupon & Promotional Codes engine
                </li>
              </ul>
            </div>

            <button
              onClick={handleScrollToContact}
              className="w-full border-2 border-secondary text-secondary py-sm rounded-lg font-label-md hover:bg-secondary/5 transition-all cursor-pointer mt-md"
            >
              Inquire About E-commerce Store
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
