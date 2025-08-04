import { useState, useEffect, useRef } from 'react';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText('naveenpl1081@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.card]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-card]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="c-space my-20 relative" id="about">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Get to know more about my skills, passion, and what drives me as a developer
        </p>
      </div>

      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-6 h-full">
        {/* Enhanced Intro Card */}
        <div 
          className="col-span-1 xl:row-span-3"
          data-card="intro"
        >
          <div className={`
            about-card relative group
            transform transition-all duration-700
            ${isVisible.intro ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative z-10 p-6">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src="assets/grid1.png" 
                  alt="grid-1" 
                  className="w-full sm:h-[276px] h-fit object-contain transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white relative">
                  Hi, I'm <span className="text-blue-400">Muhammad Hamnas</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-500"></div>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate full stack developer with strong expertise in the MERN & MEAN stacks. I enjoy creating dynamic web applications and solving real-world problems with code.
                </p>
                
                {/* Skills badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">MERN Stack</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium border border-green-500/30">MEAN Stack</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">Full Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Tech Stack Card */}
        <div 
          className="col-span-1 xl:row-span-3"
          data-card="tech"
        >
          <div className={`
            about-card relative group
            transform transition-all duration-700 delay-100
            ${isVisible.tech ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative z-10 p-6">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src="assets/grid2.png" 
                  alt="grid-2" 
                  className="w-full sm:h-[276px] h-fit object-contain transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white relative">
                  <span className="text-green-400">Tech Stack</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I work with JavaScript, TypeScript, React, Node.js, Express, MongoDB, Angular, and more. I also use tools like Bootstrap, Socket.IO, and JWT to build powerful and secure apps.
                </p>
                
                {/* Tech stack grid */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {['React', 'Node.js', 'MongoDB', 'Express', 'Angular', 'TypeScript'].map((tech, index) => (
                    <div 
                      key={tech}
                      className="flex items-center justify-center p-2 bg-gray-800/50 rounded-lg hover:bg-blue-500/20 transition-colors border border-gray-700/50 hover:border-blue-500/50"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-xs text-gray-300 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Availability Card (Replacing Globe) */}
        <div 
          className="col-span-1 xl:row-span-4"
          data-card="location"
        >
          <div className={`
            about-card relative group
            transform transition-all duration-700 delay-200
            ${isVisible.location ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative z-10 p-6">
              {/* World Map Illustration */}
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 mb-6 relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent animate-pulse"></div>
                  <div className="grid grid-cols-8 grid-rows-6 gap-2 p-4 h-full opacity-20">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-blue-400/30 rounded animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Location marker */}
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping"></div>
                    <div className="relative w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-blue-400 font-semibold">Bangalore, India</div>
                  <div className="text-gray-400 text-sm">Available Worldwide</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white relative">
                  <span className="text-purple-400">Open to Opportunities</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm based in Bangalore, India and available for remote work or exciting on-site opportunities anywhere in the world.
                </p>
                
                {/* Availability indicators */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Available for Remote Work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Open to Relocation</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button 
                    name="Contact Me" 
                    isBeam 
                    containerClass="w-full group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Passion Card */}
        <div 
          className="xl:col-span-2 xl:row-span-3"
          data-card="passion"
        >
          <div className={`
            about-card relative group
            transform transition-all duration-700 delay-300
            ${isVisible.passion ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative z-10 p-6">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src="assets/grid3.png" 
                  alt="grid-3" 
                  className="w-full sm:h-[266px] h-fit object-contain transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white relative">
                  <span className="text-orange-400">My Passion</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-500"></div>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I love motivating others, playing cricket, and constantly pushing myself to improve. Coding isn't just a career for me—it's a lifestyle. I'm always building projects and learning new technologies.
                </p>
                
                {/* Passion grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                  <div className="flex flex-col items-center p-3 bg-orange-500/10 rounded-lg border border-orange-500/30 hover:bg-orange-500/20 transition-colors">
                    <span className="text-2xl mb-1">🏏</span>
                    <span className="text-xs text-orange-300 font-medium">Cricket</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-red-500/10 rounded-lg border border-red-500/30 hover:bg-red-500/20 transition-colors">
                    <span className="text-2xl mb-1">💪</span>
                    <span className="text-xs text-red-300 font-medium">Motivation</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30 hover:bg-yellow-500/20 transition-colors">
                    <span className="text-2xl mb-1">🚀</span>
                    <span className="text-xs text-yellow-300 font-medium">Innovation</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-pink-500/10 rounded-lg border border-pink-500/30 hover:bg-pink-500/20 transition-colors">
                    <span className="text-2xl mb-1">📚</span>
                    <span className="text-xs text-pink-300 font-medium">Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Card */}
        <div 
          className="xl:col-span-1 xl:row-span-2"
          data-card="contact"
        >
          <div className={`
            about-card relative group
            transform transition-all duration-700 delay-400
            ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative z-10 p-6">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src="assets/grid4.png"
                  alt="grid-4"
                  className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-center text-white relative">
                  <span className="text-cyan-400">Contact Me</span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-500 group-hover:w-full transition-all duration-500"></div>
                </h3>
                
                <div 
                  className="cursor-pointer p-4 rounded-xl bg-gray-800/30 hover:bg-gray-700/40 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 group/copy" 
                  onClick={handleCopy}
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                      <img 
                        src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} 
                        alt="copy" 
                        className="w-4 h-4 group-hover/copy:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <div className="flex-1 text-center">
                      <p className="text-xs text-gray-400 mb-1">Email Address</p>
                      <p className="text-sm font-medium text-cyan-400 group-hover/copy:text-cyan-300 transition-colors break-all">
                        hamnascp98@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  {/* Copy feedback */}
                  {hasCopied && (
                    <div className="text-center mt-2">
                      <span className="text-green-400 text-xs font-medium">✓ Copied to clipboard!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
