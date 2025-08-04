import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button.jsx';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState(0);

  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Rotating text for dynamic effect
  const rotatingTexts = [
    "Full Stack Developer",
    "MERN Stack Expert", 
    "Problem Solver",
    "Code Enthusiast"
  ];

  // Mouse tracking for subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => setIsLoaded(true), 600);
    return () => clearTimeout(timer);
  }, []);

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full  flex flex-col relative overflow-hidden bg-black" id="home">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/25 to-cyan-400/15 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/25 to-pink-400/15 rounded-full blur-3xl animate-pulse opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full"></div>
        
        {/* Enhanced Floating Elements */}
        <div 
          className="absolute top-32 left-10 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full shadow-lg shadow-blue-400/30"
          style={{ 
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-20 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full shadow-lg shadow-purple-400/30"
          style={{ 
            transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * 0.15}px)`,
            animation: 'float 8s ease-in-out infinite',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-20 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full shadow-lg shadow-green-400/30"
          style={{ 
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * -0.1}px)`,
            animation: 'float 7s ease-in-out infinite',
            animationDelay: '4s'
          }}
        ></div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'grid-move 20s linear infinite'
            }}
          ></div>
        </div>
      </div>

      {/* Hero Content - Properly spaced from navbar */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-4 pt-20 pb-16">
        <div className={`
          max-w-4xl mx-auto text-center space-y-6
          transform transition-all duration-1000 ease-out
          ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        `}>
          {/* Compact Profile Image */}
          <div className="relative mb-6  group">
            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 p-1 animate-spin-slow group-hover:animate-pulse">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-400/30 via-purple-500/20 to-pink-400/30 flex items-center justify-center text-xl sm:text-2xl font-bold text-white backdrop-blur-sm">
                  <span className="relative z-10">MH</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-1 right-1/2 transform translate-x-10 sm:translate-x-12 flex items-center gap-1 bg-green-500 px-2 py-1 rounded-full text-xs font-medium text-white shadow-lg">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
              Available
            </div>
          </div>

          {/* Compact Main Greeting */}
          <div className="space-y-4">
            <div className={`
              transform transition-all duration-1000 delay-100
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
            `}>
              <p className="text-lg sm:text-xl text-gray-300 font-medium">
                <span className="inline-block animate-wave mr-2">👋</span>
                Hello, I'm
              </p>
            </div>
            
            <div className={`
              transform transition-all duration-1000 delay-200
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
            `}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                <span className="inline-block">Muhammad</span>
                <br className="sm:hidden" />
                <span className="relative inline-block ml-0 sm:ml-3">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent bg-300% animate-gradient">
                    Hamnas
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/15 via-purple-500/15 to-pink-400/15 blur-lg opacity-75 animate-pulse"></div>
                </span>
              </h1>
            </div>

            {/* Compact Rotating Job Title */}
            <div className={`
              h-12 sm:h-16 flex items-center justify-center
              transform transition-all duration-1000 delay-300
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
            `}>
              <div className="relative">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient">
                  {rotatingTexts[currentText]}
                </h2>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/5 via-pink-400/5 to-purple-400/5 blur-xl opacity-50 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Compact Description */}
          <div className={`
            transform transition-all duration-1000 delay-400
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
          `}>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Passionate about creating 
              <span className="text-blue-400 font-medium"> amazing web experiences </span>
              with modern technologies. I specialize in React, Node.js, and building 
              <span className="text-purple-400 font-medium"> scalable applications</span>.
            </p>
          </div>

          {/* Compact Tech Stack Pills */}
          <div className={`
            flex flex-wrap justify-center gap-2 sm:gap-3 mt-6
            transform transition-all duration-1000 delay-600
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
          `}>
            {[
              { name: 'React', color: 'from-blue-400 to-cyan-400' },
              { name: 'Node.js', color: 'from-green-400 to-emerald-400' },
              { name: 'MongoDB', color: 'from-green-500 to-green-400' },
              { name: 'Express', color: 'from-gray-400 to-gray-300' },
              { name: 'JavaScript', color: 'from-yellow-400 to-orange-400' },
              { name: 'TypeScript', color: 'from-blue-500 to-blue-400' }
            ].map((tech, index) => (
              <span 
                key={tech.name}
                className={`
                  px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 
                  rounded-full text-xs sm:text-sm font-medium text-gray-300 
                  hover:border-transparent hover:text-white hover:scale-105 
                  transition-all duration-300 cursor-default
                  hover:bg-gradient-to-r hover:${tech.color}
                  hover:shadow-lg hover:shadow-current/20
                `}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: isLoaded ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* Compact CTA Buttons */}
          <div className={`
            flex flex-col sm:flex-row gap-4 justify-center mt-8
            transform transition-all duration-1000 delay-800
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
          `}>
            <a href="#about" className="group">
              <Button 
                name="View My Work" 
                isBeam 
                containerClass="px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25" 
              />
            </a>
            
            <a 
              href="mailto:hamnascp98@gmail.com" 
              className="px-6 py-3 sm:px-8 sm:py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </div>

          {/* Compact Social Links */}
          <div className={`
            flex justify-center gap-4 sm:gap-6 mt-6
            transform transition-all duration-1000 delay-1000
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
          `}>
            {[
              { 
                href: "https://github.com/hamnas98", 
                color: "hover:text-gray-300 hover:border-gray-500/50 hover:bg-gray-500/10",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.374-12-12-12z"/>
                  </svg>
                )
              },
               {
                href: "mailto:hamnascp98@gmail.com",
                color: "hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                href: "https://www.linkedin.com/in/muhammad-hamnas-cp",
                color: "hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )
              }
             
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                className={`
                  w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 
                  rounded-full flex items-center justify-center text-gray-400 
                  transition-all duration-300 hover:scale-110 hover:shadow-lg
                  ${social.color}
                `}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Compact Scroll Indicator */}
      <div className={`
        absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30
        ${isLoaded ? 'opacity-100' : 'opacity-0'}
        transition-opacity duration-1000 delay-1200
      `}>
        <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce cursor-pointer group">
          <span className="text-xs font-medium group-hover:text-blue-400 transition-colors duration-300">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-gray-600 group-hover:border-blue-500 rounded-full flex justify-center transition-colors duration-300">
            <div className="w-0.5 h-2 bg-gray-400 group-hover:bg-blue-400 rounded-full mt-1.5 animate-pulse transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
