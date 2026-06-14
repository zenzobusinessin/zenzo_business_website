import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'services', 'how-it-works', 'solutions', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop h-16">
        <div className="flex items-center gap-xs">
          <span className="text-primary font-headline-md font-bold text-headline-md">Zenzo</span>
          <span className="hidden md:block text-on-surface-variant font-body-md text-body-md">Business Solutions</span>
        </div>
        <div className="hidden md:flex items-center gap-md xl:gap-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`py-1 transition-all ${
                activeSection === link.id
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary transition-colors'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={(e) => handleLinkClick(e, 'contact')}
          className="bg-primary text-on-primary px-sm py-xs rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all active:scale-95 cursor-pointer"
        >
          Get Free Demo
        </button>
      </div>
    </nav>
  );
}
