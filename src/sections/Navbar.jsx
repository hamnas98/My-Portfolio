import { useState, useEffect } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {}, isMobile = false }) => (
  <ul className={`nav-ul ${isMobile ? 'mobile-nav-ul' : ''}`}>
    {navLinks.map((item, index) => (
      <li 
        key={item.id} 
        className="nav-li"
        style={{ 
          animationDelay: isMobile ? `${index * 0.1}s` : '0s' 
        }}
      >
        <a 
          href={item.href} 
          className={`nav-li_a group relative ${isMobile ? 'mobile-nav-link' : ''}`}
          onClick={onClick}
        >
          <span className="relative z-10">{item.name}</span>
          <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-xl border-b border-gray-700/30' 
        : 'bg-black/90 backdrop-blur-sm'
      }
    `}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3 mx-auto c-space">
          {/* Enhanced Logo */}
          <a 
            href="/" 
            className="group relative text-neutral-200 font-bold text-xl hover:text-white transition-all duration-300"
            aria-label="Hamnas - Home"
          >
            <span className="relative z-10">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Muhammad Hamnas
              </span>
              <span className="text-white ml-2 text-sm opacity-70">CP</span>
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </a>

          {/* Enhanced Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="relative text-neutral-400 hover:text-white focus:outline-none sm:hidden flex p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group border border-gray-700/30"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <span className={`
                absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 rounded-full
                ${isOpen ? 'rotate-45 top-3 bg-blue-400' : ''}
              `}></span>
              <span className={`
                absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 rounded-full
                ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
              `}></span>
              <span className={`
                absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 rounded-full
                ${isOpen ? '-rotate-45 top-3 bg-blue-400' : ''}
              `}></span>
            </div>
          </button>

          {/* Desktop navigation */}
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Enhanced Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 top-[84px] transition-all duration-300 sm:hidden z-40
        ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}
      `}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={closeMenu}
        ></div>
        
        {/* Mobile Menu Panel */}
        <div className={`
          relative bg-gradient-to-b from-gray-900/98 via-gray-900/95 to-black/95 
          backdrop-blur-xl border-r border-gray-700/50 h-full w-80 max-w-[85vw]
          transform transition-all duration-300 shadow-2xl
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          {/* Menu Header */}
          <div className="p-6 border-b border-gray-700/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold text-white">Navigation</span>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg hover:bg-gray-800/50 text-gray-400 hover:text-white transition-all duration-200 border border-gray-700/30"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-6 flex-1">
            <NavItems onClick={closeMenu} isMobile={true} />
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-700/30 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-3">Connect with me</p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/hamnas98" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/60 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 border border-gray-700/30"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.374-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/muhammad-hamnas-cp" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/60 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 border border-gray-700/30"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <div className="w-1 h-1 bg-green-400 rounded-full"></div>
              Available for opportunities
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
