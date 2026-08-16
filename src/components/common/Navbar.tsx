import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track location change to close mobile menu cleanly
  const [currentPath, setCurrentPath] = useState(location.pathname);
  if (currentPath !== location.pathname) {
    setCurrentPath(location.pathname);
    setMobileMenuOpen(false);
  }

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Process', path: '/process' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#161D18]/90 backdrop-blur-md py-4 border-b border-[#EDE8DF]/10 shadow-xs'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col focus:outline-hidden"
            data-cursor="hover"
            data-cursor-text="HOME"
          >
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wider text-[#EDE8DF] transition-colors group-hover:text-[#C5A880]">
              {COMPANY_INFO.name}
            </span>
            <span className="font-sans text-[9px] font-medium tracking-[0.25em] uppercase text-[#8E877D]">
              RENOVATION & ARCHITECTURE
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-sans text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 py-1 ${
                    isActive ? 'text-[#EDE8DF]' : 'text-[#8E877D] hover:text-[#EDE8DF]'
                  }`}
                  data-cursor="hover"
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A880]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 rounded-full border border-[#C5A880] bg-[#C5A880] px-5 py-2.5 font-sans text-xs font-semibold tracking-wider uppercase text-[#161D18] transition-all duration-300 hover:bg-[#EDE8DF] hover:border-[#EDE8DF] focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:ring-offset-2"
              data-cursor="hover"
              data-cursor-text="QUOTE"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#EDE8DF] focus:outline-hidden focus:ring-2 focus:ring-[#C5A880] rounded-md"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-45 bg-[#161D18] text-[#EDE8DF] pt-28 px-8 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#C5A880] uppercase">
                NAVIGATION
              </span>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-serif text-3xl font-medium tracking-wide transition-colors ${
                      isActive ? 'text-[#C5A880]' : 'text-[#EDE8DF] hover:text-[#C5A880]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="space-y-6 pt-8 border-t border-[#EDE8DF]/10">
              <div className="flex flex-col space-y-1 text-xs font-sans text-[#8E877D]">
                <span>{COMPANY_INFO.location}</span>
                <span>{COMPANY_INFO.phone}</span>
                <span>{COMPANY_INFO.email}</span>
              </div>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center space-x-2 rounded-full bg-[#C5A880] py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-[#161D18]"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
