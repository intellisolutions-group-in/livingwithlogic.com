'use client';

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Calendar, LogIn, ChevronDown } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setMobileDropdownOpen(null); // Reset dropdown state when menu closes
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const mainNavItems = [
    { href: '/', label: 'Home' },
    { 
      href: '/about', 
      label: 'About',
      dropdown: [
        { href: '/about', label: 'About Us' },
        { href: '/our-team', label: 'Our Team' },
      ]
    },
    { 
      href: '/services', 
      label: 'Services',
      dropdown: [
        { href: '/services', label: 'All Services' },
        { href: '/services/strategic-consulting', label: 'Strategic Consulting' },
        { href: '/services/leadership-development', label: 'Leadership Development' },
        { href: '/services/team-workshops', label: 'Team Workshops' },
        { href: '/services/organizational-transformation', label: 'Organizational Transformation' },
      ]
    },
    { 
      href: '/case-studies', 
      label: 'Success Stories',
      dropdown: [
        { href: '/case-studies', label: 'Case Studies' },
        { href: '/testimonials', label: 'Testimonials' },
      ]
    },
    { 
      href: '/resources', 
      label: 'Resources',
      dropdown: [
        { href: '/resources', label: 'Knowledge Hub' },
        { href: '/blog', label: 'Blog' },
        { href: '/faq', label: 'FAQ' },
        { href: '/industries', label: 'Industries' },
      ]
    },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-soft-lg border-b border-surface-200/50' 
            : 'bg-white/80 backdrop-blur-md shadow-soft border-b border-surface-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex items-center h-20 lg:h-24 gap-2 lg:gap-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/" 
                className="flex items-center group focus-ring"
                aria-label="Living With Logic - Home"
              >
                <div className="relative flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/assets/logo/Living-with-logic_Website.png"
                    alt="Living With Logic"
                    width={350}
                    height={112}
                    className="object-contain h-12 lg:h-16 w-auto max-w-[200px] sm:max-w-[250px] lg:max-w-[320px]"
                    priority
                    quality={100}
                  />
                </div>
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 ml-3 xl:ml-6" aria-label="Main navigation">
              {mainNavItems.map((item, index) => {
                // Hide less critical nav items at lg breakpoint to prevent overflow
                const isHiddenAtLg = ['Success Stories', 'Resources'].includes(item.label);
                
                return (
                <div
                  key={item.href}
                  className={`relative ${isHiddenAtLg ? 'hidden xl:block' : ''}`}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-3 xl:px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl group focus-ring flex items-center whitespace-nowrap ${
                        isActive(item.href)
                          ? 'text-primary-600 bg-primary-50 shadow-soft'
                          : 'text-surface-700 hover:text-primary-600 hover:bg-surface-50'
                      }`}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      {item.label}
                      {item.dropdown && <ChevronDown size={14} className="ml-1" />}
                      {isActive(item.href) && (
                        <motion.div 
                          layoutId="activeIndicator"
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary-600 rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 pt-2 z-50"
                    >
                      <div className="bg-white rounded-xl shadow-elevated border border-surface-200 py-2 w-64">
                        {item.dropdown.map((dropItem, idx) => (
                          <Link
                            key={idx}
                            href={dropItem.href}
                            className="block px-4 py-2 text-sm font-semibold text-surface-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
                );
              })}
            </nav>

            {/* Desktop Auth & CTA */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 ml-auto flex-shrink-0">
              <Link
                href="/login"
                className="flex items-center space-x-1 px-2 lg:px-3 py-2 text-sm font-semibold text-surface-700 hover:text-primary-600 transition-colors rounded-xl focus-ring group"
              >
                <LogIn size={16} className="group-hover:scale-110 transition-transform" />
                <span className="hidden xl:inline">Login</span>
              </Link>
              
              <Link
                href="/signup"
                className="px-2.5 lg:px-3 xl:px-4 py-2 lg:py-2.5 text-sm font-semibold bg-surface-100 hover:bg-surface-200 text-surface-900 rounded-xl transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring whitespace-nowrap"
              >
                <span className="hidden lg:inline">Sign up</span>
                <span className="lg:hidden">Join</span>
              </Link>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/booking"
                  className="flex items-center space-x-1 lg:space-x-1.5 px-2.5 lg:px-3 xl:px-4 py-2 lg:py-2.5 text-sm font-semibold bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl shadow-soft hover:shadow-elevated hover:from-primary-700 hover:to-accent-700 transition-all duration-300 focus-ring group whitespace-nowrap"
                >
                  <Calendar size={16} className="group-hover:rotate-12 transition-transform flex-shrink-0" />
                  <span className="hidden lg:inline">Book Consultation</span>
                  <span className="lg:hidden">Book</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform flex-shrink-0 hidden xl:inline" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              type="button"
              onClick={toggleMobileMenu}
              className="lg:hidden relative p-2 sm:p-3 text-surface-700 hover:text-primary-600 focus-ring-inset rounded-xl transition-colors ml-auto flex-shrink-0"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
                {isMobileMenuOpen ? (
                  <X size={20} className="absolute inset-0 sm:hidden" />
                ) : (
                  <Menu size={20} className="absolute inset-0 sm:hidden" />
                )}
                {isMobileMenuOpen ? (
                  <X size={24} className="absolute inset-0 hidden sm:block" />
                ) : (
                  <Menu size={24} className="absolute inset-0 hidden sm:block" />
                )}
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-surface-900/50 backdrop-blur-sm lg:hidden"
              onClick={toggleMobileMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-80 h-full bg-white shadow-soft-lg lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-surface-200">
                  <span className="font-display font-black text-surface-900 text-xl">Menu</span>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 text-surface-500 hover:text-surface-700 focus-ring-inset rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobile navigation">
                  <div className="space-y-3">
                    {mainNavItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.dropdown ? (
                          // Item with dropdown - make it toggleable
                          <div>
                            <button
                              onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.label ? null : item.label)}
                              className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold transition-all duration-300 rounded-xl ${
                                isActive(item.href)
                                  ? 'text-primary-600 bg-primary-50 shadow-soft'
                                  : 'text-surface-700 hover:text-primary-600 hover:bg-surface-50'
                              }`}
                            >
                              <span>{item.label}</span>
                              <ChevronDown 
                                size={16} 
                                className={`transition-transform duration-300 ${
                                  mobileDropdownOpen === item.label ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            
                            {/* Mobile Dropdown Items with Animation */}
                            <AnimatePresence>
                              {mobileDropdownOpen === item.label && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-4 mt-2 space-y-2">
                                    {item.dropdown.map((dropItem, dropIdx) => (
                                      <Link
                                        key={dropIdx}
                                        href={dropItem.href}
                                        className="block px-4 py-2 text-sm font-medium text-surface-600 hover:text-primary-600 hover:bg-surface-50 rounded-lg transition-colors"
                                      >
                                        {dropItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          // Regular link item without dropdown
                          <Link
                            href={item.href}
                            className={`flex items-center px-4 py-3 text-base font-semibold transition-all duration-300 rounded-xl ${
                              isActive(item.href)
                                ? 'text-primary-600 bg-primary-50 shadow-soft'
                                : 'text-surface-700 hover:text-primary-600 hover:bg-surface-50'
                            }`}
                            aria-current={isActive(item.href) ? 'page' : undefined}
                          >
                            {item.label}
                            {isActive(item.href) && (
                              <div className="ml-auto w-2 h-2 bg-primary-600 rounded-full"></div>
                            )}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Auth Section */}
                  <div className="mt-8 pt-8 border-t border-surface-200">
                    <div className="space-y-3">
                      {/* Login and Sign up on same line */}
                      <div className="flex items-center gap-3">
                        <Link
                          href="/login"
                          className="flex-1 flex items-center justify-center space-x-2 px-3 py-3 text-sm font-semibold text-surface-700 hover:text-primary-600 hover:bg-surface-50 transition-all duration-300 rounded-xl border border-surface-200"
                        >
                          <LogIn size={18} />
                          <span>Login</span>
                        </Link>
                        
                        <Link
                          href="/signup"
                          className="flex-1 flex items-center justify-center px-3 py-3 bg-surface-100 text-surface-900 text-sm font-semibold rounded-xl hover:bg-surface-200 transition-all duration-300 shadow-soft"
                        >
                          Sign up
                        </Link>
                      </div>
                      
                      {/* Book Consultation on separate line */}
                      <Link
                        href="/booking"
                        className="flex items-center justify-center space-x-2 px-4 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-soft"
                      >
                        <Calendar size={20} />
                        <span>Book Consultation</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}