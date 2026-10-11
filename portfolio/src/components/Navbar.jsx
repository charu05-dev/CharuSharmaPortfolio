import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: Brand Pill */}
        <a 
          href="#hero" 
          className="group flex items-center gap-2.5 bg-paper px-3.5 py-2 rounded-pill border border-carbon shadow-[2px_2px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] hover:-translate-y-0.5 transition-all"
        >
          <span className="w-8 h-8 rounded-full bg-sunburst flex items-center justify-center font-display font-black text-sm border border-carbon">
            CS
          </span>
          <span className="font-display font-extrabold tracking-tight text-base sm:text-lg text-carbon">
            CHARU SHARMA
          </span>
        </a>

        {/* Center / Desktop Navigation Pills */}
        <nav className="hidden lg:flex items-center gap-1 bg-paper/95 backdrop-blur-md px-3 py-1.5 rounded-pill border border-carbon shadow-[2px_2px_0px_#000000]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-pill font-display font-bold text-xs tracking-wider text-carbon hover:bg-mist transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-carbon text-paper px-5 py-2.5 rounded-pill border border-carbon font-display font-black text-xs tracking-wider uppercase hover:bg-carbon/90 hover:-translate-y-0.5 shadow-[2px_2px_0px_#000000] transition-all"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-pill bg-paper border border-carbon shadow-[2px_2px_0px_#000000]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-carbon" /> : <Menu className="w-5 h-5 text-carbon" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-sm mx-auto bg-paper border-[1.5px] border-carbon rounded-card p-5 shadow-[5px_5px_0px_#000000] animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-pill font-display font-black text-sm tracking-wider text-carbon hover:bg-sky transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="w-2 h-2 rounded-full bg-sunburst"></span>
              </a>
            ))}
            <div className="pt-3 border-t border-carbon/20 mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-carbon text-paper py-3 rounded-pill font-display font-black text-sm uppercase"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
