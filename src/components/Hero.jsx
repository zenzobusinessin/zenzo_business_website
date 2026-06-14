import React, { useState } from 'react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('website'); // 'website' | 'ecommerce' | 'whatsapp'
  
  // Website Form State
  const [webFormState, setWebFormState] = useState('idle'); // 'idle' | 'typing' | 'success'
  const [webFormName, setWebFormName] = useState('');
  
  // E-commerce Checkout State
  const [ecomCart, setEcomCart] = useState(0);
  const [ecomState, setEcomState] = useState('idle'); // 'idle' | 'checking_out' | 'success'
  
  // WhatsApp State
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi! I am the Zenzo AI Assistant. How can we help your business today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const triggerWebFormSimulation = () => {
    if (webFormState !== 'idle') return;
    
    // If the user already typed a name, submit it directly!
    if (webFormName.trim() !== '') {
      setWebFormState('typing');
      setTimeout(() => {
        setWebFormState('success');
        setTimeout(() => {
          setWebFormState('idle');
          setWebFormName('');
        }, 3000);
      }, 1000);
      return;
    }

    // Otherwise, simulate auto-typing
    setWebFormState('typing');
    let name = '';
    const targetName = 'Rajesh Kumar';
    let charIdx = 0;
    const interval = setInterval(() => {
      name += targetName[charIdx];
      setWebFormName(name);
      charIdx++;
      if (charIdx === targetName.length) {
        clearInterval(interval);
        setTimeout(() => {
          setWebFormState('success');
          setTimeout(() => {
            setWebFormState('idle');
            setWebFormName('');
          }, 3000);
        }, 800);
      }
    }, 100);
  };

  const triggerCheckoutSimulation = () => {
    if (ecomState !== 'idle') return;
    setEcomCart(prev => prev + 1);
    setEcomState('checking_out');
    setTimeout(() => {
      setEcomState('success');
      setTimeout(() => {
        setEcomState('idle');
        setEcomCart(0);
      }, 3500);
    }, 1200);
  };

  const handleWhatsAppReply = (replyText, botResponse) => {
    if (isTyping) return;
    setChatMessages(prev => [...prev, { sender: 'user', text: replyText }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 1200);
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-xl bg-on-tertiary-container/30" id="home">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-lg items-center">
        <div className="space-y-md">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary leading-tight">
            Stunning Websites.<br />Smart Automation.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Hyderabad's trusted partner for modern business websites, e-commerce stores, and smart WhatsApp automation. Convert visitors and scale your business 24/7.
          </p>
          <div className="flex flex-wrap gap-sm pt-base">
            <button
              onClick={() => handleScrollTo('contact')}
              className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md text-label-md flex items-center gap-xs hover:bg-opacity-90 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              Get Free Demo <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button
              onClick={() => handleScrollTo('how-it-works')}
              className="border-2 border-primary text-primary px-lg py-sm rounded-lg font-label-md text-label-md hover:bg-primary/5 transition-all cursor-pointer active:scale-95"
            >
              See How It Works
            </button>
          </div>
          <div className="pt-lg flex flex-wrap gap-md items-center text-on-surface-variant font-label-sm text-label-sm border-t border-outline-variant/30">
            <span className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Custom Web & E-com Design
            </span>
            <span className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
              Smart Chat Automation
            </span>
            <span className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              Hyderabad-based Support
            </span>
          </div>
        </div>

        {/* Dynamic Simulator Visual Component */}
        <div className="flex flex-col h-full space-y-md">
          {/* Selector Tabs */}
          <div className="flex bg-surface-container/80 p-[4px] rounded-xl border border-outline-variant/50 max-w-md w-full mx-auto">
            <button
              onClick={() => setActiveTab('website')}
              className={`flex-1 flex items-center justify-center gap-xs py-2 px-sm rounded-lg font-label-md text-xs transition-all cursor-pointer ${
                activeTab === 'website'
                  ? 'bg-primary text-on-primary shadow'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/40'
              }`}
            >
              <span className="material-symbols-outlined text-sm">language</span>
              Website
            </button>
            <button
              onClick={() => setActiveTab('ecommerce')}
              className={`flex-1 flex items-center justify-center gap-xs py-2 px-sm rounded-lg font-label-md text-xs transition-all cursor-pointer ${
                activeTab === 'ecommerce'
                  ? 'bg-primary text-on-primary shadow'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/40'
              }`}
            >
              <span className="material-symbols-outlined text-sm">shopping_bag</span>
              E-commerce
            </button>
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`flex-1 flex items-center justify-center gap-xs py-2 px-sm rounded-lg font-label-md text-xs transition-all cursor-pointer ${
                activeTab === 'whatsapp'
                  ? 'bg-primary text-on-primary shadow'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/40'
              }`}
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              WhatsApp Bot
            </button>
          </div>

          {/* Interactive Screen Frame */}
          <div className="bg-surface-container-lowest border-2 border-outline-variant/60 rounded-2xl shadow-xl p-md relative overflow-hidden flex flex-col justify-between min-h-[360px] max-w-md w-full mx-auto group hover:border-primary transition-all duration-300">
            {/* Device Bar */}
            <div className="flex items-center justify-between pb-sm border-b border-outline-variant/20 mb-md">
              <div className="flex gap-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              </div>
              <span className="text-[10px] text-on-surface-variant font-mono bg-surface-container-high px-sm py-[2px] rounded-full">
                {activeTab === 'website' && 'mybusiness.com'}
                {activeTab === 'ecommerce' && 'zenzostore.in/shop'}
                {activeTab === 'whatsapp' && 'Zenzo Chatbot Sim v1.2'}
              </span>
              <div className="w-8"></div>
            </div>

            {/* TAB 1: WEBSITE SCREEN */}
            {activeTab === 'website' && (
              <div className="space-y-md flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-md text-label-md font-bold text-primary">Hyderabad Academy</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Cracking IIT-JEE & NEET. Join our classroom batches.</p>
                </div>
                
                {/* Simulated Lead form */}
                <div className="bg-surface-container rounded-xl p-sm border border-outline-variant/30 space-y-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] uppercase font-bold text-on-surface-variant">Instant Registration Form</span>
                    <span className="text-[8px] bg-primary/10 text-primary font-semibold px-xs py-[1px] rounded animate-pulse">
                      Live Lead Sync
                    </span>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name..."
                      value={webFormName}
                      onChange={(e) => setWebFormName(e.target.value)}
                      disabled={webFormState !== 'idle'}
                      className="w-full text-xs bg-surface-container-lowest border border-outline-variant rounded p-xs outline-none focus:border-primary disabled:opacity-75"
                    />
                  </div>
                  
                  {webFormState === 'idle' && (
                    <button
                      onClick={triggerWebFormSimulation}
                      className="w-full bg-primary text-on-primary py-1.5 rounded text-xs font-semibold hover:bg-opacity-95 transition-all flex items-center justify-center gap-xs cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">touch_app</span>
                      Test Submit Lead
                    </button>
                  )}
                  {webFormState === 'typing' && (
                    <button
                      disabled
                      className="w-full bg-primary/15 text-primary py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-xs"
                    >
                      <span className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                      Simulating Typing...
                    </button>
                  )}
                  {webFormState === 'success' && (
                    <div className="bg-green-500/15 border border-green-500/30 text-green-700 py-1.5 px-sm rounded text-xs font-medium flex items-center justify-center gap-xs animate-bounce">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      Demo request instantly sent to WhatsApp!
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: E-COMMERCE SHOP */}
            {activeTab === 'ecommerce' && (
              <div className="space-y-sm flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <h4 className="font-headline-md text-label-md font-bold text-secondary">Aroma Roasters</h4>
                  <div className="relative">
                    <span className="material-symbols-outlined text-secondary text-xl">shopping_cart</span>
                    {ecomCart > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-bounce">
                        {ecomCart}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-sm">
                  <div className="bg-surface-container rounded-lg p-xs border border-outline-variant/30 flex flex-col justify-between">
                    <span className="material-symbols-outlined text-3xl text-center text-primary mt-1">coffee</span>
                    <div className="text-center mt-xs">
                      <p className="text-[10px] font-bold">Hazelnut Coffee</p>
                      <p className="text-[11px] text-primary font-bold">₹499</p>
                    </div>
                  </div>
                  <div className="bg-surface-container rounded-lg p-xs border border-outline-variant/30 flex flex-col justify-between">
                    <span className="material-symbols-outlined text-3xl text-center text-primary mt-1">coffee_maker</span>
                    <div className="text-center mt-xs">
                      <p className="text-[10px] font-bold">French Press Maker</p>
                      <p className="text-[11px] text-primary font-bold">₹1,299</p>
                    </div>
                  </div>
                </div>

                <div className="mt-xs">
                  {ecomState === 'idle' && (
                    <button
                      onClick={triggerCheckoutSimulation}
                      className="w-full bg-secondary text-on-secondary py-1.5 rounded text-xs font-semibold hover:bg-opacity-95 transition-all flex items-center justify-center gap-xs cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">credit_card</span>
                      Order via UPI Checkout
                    </button>
                  )}
                  {ecomState === 'checking_out' && (
                    <button
                      disabled
                      className="w-full bg-secondary-container text-on-secondary-container py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-xs"
                    >
                      <span className="w-3 h-3 border-2 border-secondary border-t-transparent rounded-full animate-spin"></span>
                      Opening UPI Interface...
                    </button>
                  )}
                  {ecomState === 'success' && (
                    <div className="bg-green-500/15 border border-green-500/30 text-green-700 py-1 px-sm rounded text-xs font-medium flex flex-col items-center justify-center text-center animate-bounce">
                      <div className="flex items-center gap-xs">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                        <span>UPI Payment Confirmed!</span>
                      </div>
                      <p className="text-[9px] text-on-surface-variant font-normal">WhatsApp Confirmation Sent: Invoice #8012</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 3: WHATSAPP BOT */}
            {activeTab === 'whatsapp' && (
              <div className="flex-grow flex flex-col justify-between h-[230px]">
                {/* Scrollable Chat Area */}
                <div className="flex-grow overflow-y-auto space-y-sm bg-surface-container-high/40 p-sm rounded-lg border border-outline-variant/20 max-h-[170px] text-[11px]">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-sm rounded-lg max-w-[85%] shadow-sm ${
                        msg.sender === 'user'
                          ? 'bg-[#DCF8C6] ml-auto rounded-tr-none'
                          : 'bg-white rounded-tl-none border border-outline-variant/30 text-on-surface'
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="bg-white rounded-lg rounded-tl-none p-xs border border-outline-variant/30 max-w-[50px] flex gap-1 justify-center items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  )}
                </div>

                {/* Quick Reply Chips */}
                <div className="mt-sm pt-xs border-t border-outline-variant/20">
                  <p className="text-[9px] text-on-surface-variant font-bold mb-xs">Tap a response to interact:</p>
                  <div className="flex flex-wrap gap-xs">
                    <button
                      onClick={() => handleWhatsAppReply("What services do you build?", "We build Professional Websites, fully-integrated E-commerce Stores, and smart AI WhatsApp chat bots.")}
                      className="bg-primary/5 border border-primary/20 text-primary px-sm py-1 rounded-full text-[9px] font-semibold hover:bg-primary/10 transition-colors cursor-pointer"
                    >
                      What services do you build?
                    </button>
                    <button
                      onClick={() => handleWhatsAppReply("Can I get a custom web setup?", "Yes! We design custom systems based on your needs. Submit your requirements in the contact form below!")}
                      className="bg-primary/5 border border-primary/20 text-primary px-sm py-1 rounded-full text-[9px] font-semibold hover:bg-primary/10 transition-colors cursor-pointer"
                    >
                      Can I get a custom setup?
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Ambient glows inside screen */}
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-secondary/5 rounded-full blur-xl pointer-events-none"></div>
          </div>
          
          {/* Creative floating badges orbiting simulation */}
          <div className="hidden md:flex justify-center gap-md text-on-surface-variant text-[10px] font-bold">
            <span className="flex items-center gap-xs bg-surface-container border border-outline-variant/30 px-sm py-1 rounded-full shadow-sm animate-float">
              <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>offline_bolt</span>
              Fast Setup
            </span>
            <span className="flex items-center gap-xs bg-surface-container border border-outline-variant/30 px-sm py-1 rounded-full shadow-sm animate-float-delayed">
              <span className="material-symbols-outlined text-xs text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              SEO Rank #1
            </span>
            <span className="flex items-center gap-xs bg-surface-container border border-outline-variant/30 px-sm py-1 rounded-full shadow-sm animate-float">
              <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
              Secure UPI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
