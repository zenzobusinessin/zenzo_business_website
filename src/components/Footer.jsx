import React from 'react';

export default function Footer() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-inverse-surface text-on-tertiary-fixed pt-xl pb-lg">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-lg mb-xl">
        <div className="col-span-2 md:col-span-1">
          <span className="text-primary-fixed font-headline-md font-bold text-headline-md block mb-md">Zenzo</span>
          <p className="text-on-surface-variant text-body-md mb-md">Empowering Hyderabad's businesses with custom websites, e-commerce stores, and smart WhatsApp automation.</p>
          <div className="flex gap-sm">
            <a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary transition-all text-on-surface" href="#">FB</a>
            <a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary transition-all text-on-surface" href="#">LI</a>
            <a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary transition-all text-on-surface" href="#">TW</a>
          </div>
        </div>
        <div>
          <h4 className="font-label-md text-label-md mb-md text-on-surface">Quick Links</h4>
          <ul className="space-y-sm text-surface-variant">
            <li><a className="hover:text-primary-fixed transition-colors" href="#home" onClick={(e) => handleScrollTo(e, 'home')}>Home</a></li>
            <li><a className="hover:text-primary-fixed transition-colors" href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Services</a></li>
            <li><a className="hover:text-primary-fixed transition-colors" href="#solutions" onClick={(e) => handleScrollTo(e, 'solutions')}>Web & E-commerce</a></li>
            <li><a className="hover:text-primary-fixed transition-colors" href="#reviews" onClick={(e) => handleScrollTo(e, 'reviews')}>Reviews</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md mb-md text-on-surface">Services</h4>
          <ul className="space-y-sm text-surface-variant">
            <li><a className="hover:text-primary-fixed transition-colors" href="#solutions">Business Websites</a></li>
            <li><a className="hover:text-primary-fixed transition-colors" href="#solutions">E-commerce Stores</a></li>
            <li><a className="hover:text-primary-fixed transition-colors" href="#services">WhatsApp Automation</a></li>
            <li><a className="hover:text-primary-fixed transition-colors" href="#services">AI Chatbots</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md mb-md text-on-surface">Support</h4>
          <ul className="space-y-sm text-surface-variant">
            <li><a className="hover:text-primary-fixed transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-primary-fixed transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-primary-fixed transition-colors" href="#">FAQ</a></li>
            <li><a className="hover:text-primary-fixed transition-colors" href="#">Contact Support</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-lg border-t border-outline/30 text-center text-surface-variant font-label-sm text-label-sm">
        © {new Date().getFullYear()} Zenzo Business Solutions. All rights reserved. Made in Hyderabad.
      </div>
    </footer>
  );
}
