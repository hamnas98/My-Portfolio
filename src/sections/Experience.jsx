import { useState, useEffect, useRef } from 'react';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [activeExperience, setActiveExperience] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef();

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.experience]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-experience]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="c-space my-20 relative" id="work">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          My professional journey and the experiences that shaped my development skills
        </p>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
        {workExperiences.map((item, index) => (
          <div
            key={item.id}
            data-experience={item.id}
            onMouseEnter={() => setActiveExperience(item.id)}
            onMouseLeave={() => setActiveExperience(null)}
            className={`
              work-card group relative
              transform transition-all duration-700
              ${isVisible[item.id] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              ${activeExperience === item.id ? 'scale-105' : 'hover:scale-102'}
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl"></div>
            
            {/* Gradient overlay on hover */}
            <div className={`
              absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent
              rounded-2xl transition-opacity duration-500
              ${activeExperience === item.id ? 'opacity-100' : 'opacity-0'}
            `} />
            
            {/* Animated border */}
            <div className={`
              absolute inset-0 rounded-2xl transition-all duration-500
              ${activeExperience === item.id 
                ? 'border-2 border-purple-500/50 shadow-lg shadow-purple-500/20' 
                : 'border border-gray-800/50 hover:border-gray-600/50'
              }
            `} />

            {/* Content */}
            <div className="relative z-10 p-6">
              {/* Header with icon and company info */}
              <div className="flex items-start mb-6">
                <div className={`
                  w-14 h-14 bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 mr-4 
                  flex items-center justify-center border border-gray-700/50
                  transition-all duration-300
                  ${activeExperience === item.id ? 'bg-purple-500/20 border-purple-500/50' : ''}
                `}>
                  <img 
                    className="w-full h-full object-contain filter brightness-110" 
                    src={item.icon} 
                    alt={item.name}
                  />
                </div>
                <div className="flex-1">
                  <h3 className={`
                    text-xl font-bold mb-2 transition-colors duration-300
                    ${activeExperience === item.id ? 'text-white' : 'text-gray-100'}
                  `}>
                    {item.name}
                  </h3>
                  <p className={`
                    text-sm font-medium transition-colors duration-300
                    ${activeExperience === item.id ? 'text-purple-300' : 'text-gray-400'}
                  `}>
                    {item.pos}
                  </p>
                </div>
              </div>

              {/* Duration badge */}
              <div className={`
                inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4
                border transition-all duration-300
                ${activeExperience === item.id 
                  ? 'bg-purple-500/30 text-purple-200 border-purple-400/50' 
                  : 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                }
              `}>
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item.duration}
              </div>

              {/* Description */}
              <p className={`
                leading-relaxed text-sm mb-6 transition-colors duration-300
                ${activeExperience === item.id ? 'text-gray-100' : 'text-gray-300'}
              `}>
                {item.title}
              </p>

              {/* Skills/Technologies used */}
              {item.technologies && (
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-400 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-1">
                    {item.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom accent line */}
              <div className={`
                h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full
                transition-all duration-500 transform origin-left
                ${activeExperience === item.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-50'}
              `} />

              {/* Floating elements on hover */}
              {activeExperience === item.id && (
                <>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/60 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"></div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Mobile Timeline View */}
      <div className="block lg:hidden">
        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent"></div>
          
          {workExperiences.map((item, index) => (
            <div 
              key={`timeline-${item.id}`} 
              data-experience={`timeline-${item.id}`}
              className={`
                relative flex items-start mb-12 last:mb-0
                transform transition-all duration-700
                ${isVisible[`timeline-${item.id}`] ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Enhanced Timeline dot */}
              <div className="absolute left-6 mt-6">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-black flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                {/* Connecting line to content */}
                <div className="absolute left-6 top-3 w-6 h-0.5 bg-gray-700"></div>
              </div>
              
              {/* Enhanced Content Card */}
              <div className="ml-16 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 flex-1 hover:border-gray-600/50 transition-all duration-300 group">
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-800/50 rounded-lg p-2 mr-3 flex items-center justify-center border border-gray-700/50 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                    <img 
                      className="w-full h-full object-contain" 
                      src={item.icon} 
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg group-hover:text-purple-200 transition-colors duration-300">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="group-hover:text-purple-300 transition-colors duration-300">
                        {item.pos}
                      </span>
                      <span>•</span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {item.title}
                </p>

                {/* Technologies for mobile too */}
                {item.technologies && (
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs border border-gray-700/50 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Progress indicator */}
                <div className="mt-4 h-0.5 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 delay-200"></div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Timeline end indicator */}
          <div className="absolute left-6 bottom-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-blue-500/50 transition-all duration-300">
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {workExperiences.length}+
          </div>
          <div className="text-gray-400 text-sm">Companies</div>
        </div>
        
        <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-purple-500/50 transition-all duration-300">
          <div className="text-2xl font-bold text-purple-400 mb-1">2+</div>
          <div className="text-gray-400 text-sm">Years Experience</div>
        </div>
        
        <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-green-500/50 transition-all duration-300">
          <div className="text-2xl font-bold text-green-400 mb-1">10+</div>
          <div className="text-gray-400 text-sm">Projects</div>
        </div>
        
        <div className="text-center p-4 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-orange-500/50 transition-all duration-300">
          <div className="text-2xl font-bold text-orange-400 mb-1">5+</div>
          <div className="text-gray-400 text-sm">Technologies</div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
