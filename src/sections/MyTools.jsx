import { useState, useEffect, useRef } from 'react';

const MyTools = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef();

  // Categorized tools data
  const toolsData = [
    // Frontend Technologies
    { name: 'HTML5', category: 'Frontend', icon: '🌐', color: 'from-orange-500 to-red-500', level: 95 },
    { name: 'CSS3', category: 'Frontend', icon: '🎨', color: 'from-blue-500 to-cyan-500', level: 90 },
    { name: 'JavaScript', category: 'Frontend', icon: '⚡', color: 'from-yellow-400 to-orange-500', level: 95 },
    { name: 'TypeScript', category: 'Frontend', icon: '📘', color: 'from-blue-600 to-blue-800', level: 85 },
    { name: 'React.js', category: 'Frontend', icon: '⚛️', color: 'from-cyan-400 to-blue-500', level: 95 },
    { name: 'Redux Toolkit', category: 'Frontend', icon: '🔄', color: 'from-purple-500 to-pink-500', level: 80 },
    { name: 'ES6', category: 'Frontend', icon: '✨', color: 'from-green-400 to-blue-500', level: 90 },

    // Backend Technologies
    { name: 'Node.js', category: 'Backend', icon: '🟢', color: 'from-green-500 to-emerald-600', level: 90 },
    { name: 'Express.js', category: 'Backend', icon: '🚂', color: 'from-gray-600 to-gray-800', level: 90 },
    { name: 'EJS', category: 'Backend', icon: '📄', color: 'from-red-500 to-pink-500', level: 85 },
    { name: 'REST APIs', category: 'Backend', icon: '🔌', color: 'from-indigo-500 to-purple-600', level: 90 },
    { name: 'MVC Architecture', category: 'Backend', icon: '🏗️', color: 'from-teal-500 to-cyan-600', level: 85 },

    // Databases
    { name: 'MongoDB', category: 'Database', icon: '🍃', color: 'from-green-600 to-green-800', level: 90 },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘', color: 'from-blue-700 to-indigo-800', level: 80 },
    { name: 'MySQL', category: 'Database', icon: '🗄️', color: 'from-orange-600 to-red-600', level: 85 },
    { name: 'Firebase', category: 'Database', icon: '🔥', color: 'from-yellow-500 to-orange-600', level: 80 },

    // Styling & Design
    { name: 'Tailwind', category: 'Styling', icon: '💨', color: 'from-teal-400 to-blue-500', level: 95 },
    { name: 'Bootstrap', category: 'Styling', icon: '🅱️', color: 'from-purple-600 to-indigo-700', level: 90 },
    { name: 'Figma', category: 'Design', icon: '🎯', color: 'from-pink-500 to-violet-600', level: 75 },

    // Tools & Services
    { name: 'Git', category: 'Tools', icon: '📝', color: 'from-red-600 to-red-800', level: 90 },
    { name: 'Github', category: 'Tools', icon: '🐙', color: 'from-gray-700 to-black', level: 90 },
    { name: 'VS Code', category: 'Tools', icon: '💻', color: 'from-blue-600 to-cyan-600', level: 95 },
    { name: 'Postman', category: 'Tools', icon: '📮', color: 'from-orange-500 to-red-500', level: 85 },

    // Payment & Services
    { name: 'Razorpay', category: 'Services', icon: '💳', color: 'from-blue-600 to-purple-700', level: 85 },
    { name: 'Stripe', category: 'Services', icon: '💰', color: 'from-purple-600 to-blue-700', level: 80 },
    { name: 'Cloudinary', category: 'Services', icon: '☁️', color: 'from-sky-500 to-blue-600', level: 80 },
    { name: 'Node Mailer', category: 'Services', icon: '📧', color: 'from-green-500 to-teal-600', level: 85 },

    // Advanced Tools
    { name: 'Web Push', category: 'Advanced', icon: '📱', color: 'from-indigo-500 to-purple-600', level: 75 },
    { name: 'Socket.io', category: 'Advanced', icon: '🔗', color: 'from-green-400 to-blue-500', level: 80 },
    { name: 'JWT', category: 'Advanced', icon: '🔐', color: 'from-red-500 to-pink-600', level: 85 },
    { name: 'Axios', category: 'Advanced', icon: '📡', color: 'from-purple-500 to-indigo-600', level: 90 },
    { name: 'SDK', category: 'Advanced', icon: '🛠️', color: 'from-gray-600 to-gray-800', level: 80 },
    { name: 'Google Map', category: 'Advanced', icon: '🗺️', color: 'from-green-500 to-blue-500', level: 75 },
    { name: 'Auth 0.2', category: 'Advanced', icon: '🛡️', color: 'from-orange-500 to-red-600', level: 75 },
    { name: 'Moon Moduler', category: 'Advanced', icon: '🌙', color: 'from-purple-400 to-pink-500', level: 70 },
    { name: 'JSON', category: 'Advanced', icon: '📋', color: 'from-yellow-500 to-green-500', level: 95 },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Styling', 'Design', 'Tools', 'Services', 'Advanced'];

  const filteredTools = selectedCategory === 'All' 
    ? toolsData 
    : toolsData.filter(tool => tool.category === selectedCategory);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.tool]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const tools = document.querySelectorAll('[data-tool]');
    tools.forEach(tool => observer.observe(tool));

    return () => observer.disconnect();
  }, [selectedCategory]);

  return (
    <section ref={sectionRef} className="c-space my-20 relative" id="tools">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            My Tools & Technologies
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A comprehensive overview of the technologies, tools, and frameworks I use to build modern web applications
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
              ${selectedCategory === category 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-blue-500/50 shadow-lg scale-105' 
                : 'bg-black/40 text-gray-300 border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400'
              }
            `}
          >
            {category} {category === 'All' ? `(${toolsData.length})` : `(${toolsData.filter(tool => tool.category === category).length})`}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {filteredTools.map((tool, index) => (
          <div
            key={`${tool.name}-${selectedCategory}`}
            data-tool={`${tool.name}-${selectedCategory}`}
            className={`
              tool-card group relative
              transform transition-all duration-700
              ${isVisible[`${tool.name}-${selectedCategory}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              hover:scale-105 hover:-translate-y-2
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background Card */}
            <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-500 overflow-hidden">
              
              {/* Gradient Background on Hover */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 
                transition-opacity duration-500 rounded-2xl
              `}></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className={`
                  w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl 
                  flex items-center justify-center text-2xl transform group-hover:scale-110 
                  transition-all duration-300 shadow-lg
                `}>
                  <span className="filter drop-shadow-sm">{tool.icon}</span>
                </div>

                {/* Tool Name */}
                <h3 className="text-white font-semibold text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                  {tool.name}
                </h3>

                {/* Skill Level Bar */}
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400">Proficiency</span>
                    <span className="text-xs text-gray-400">{tool.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${tool.color} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                      style={{ 
                        width: isVisible[`${tool.name}-${selectedCategory}`] ? `${tool.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className={`
                  px-2 py-1 bg-gradient-to-r ${tool.color} bg-opacity-20 
                  text-xs font-medium rounded-full border border-white/10
                  opacity-0 group-hover:opacity-100 transition-all duration-300
                `}>
                  {tool.category}
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group">
          <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
            {toolsData.filter(tool => tool.category === 'Frontend').length}
          </div>
          <div className="text-gray-400 text-sm">Frontend Tools</div>
        </div>
        
        <div className="text-center p-6 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-green-500/50 transition-all duration-300 group">
          <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
            {toolsData.filter(tool => tool.category === 'Backend').length}
          </div>
          <div className="text-gray-400 text-sm">Backend Tools</div>
        </div>
        
        <div className="text-center p-6 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group">
          <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
            {toolsData.filter(tool => tool.category === 'Database').length}
          </div>
          <div className="text-gray-400 text-sm">Databases</div>
        </div>
        
        <div className="text-center p-6 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-orange-500/50 transition-all duration-300 group">
          <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
            {toolsData.length}
          </div>
          <div className="text-gray-400 text-sm">Total Tools</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">collaborate?</span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            With expertise across the full stack, I can help bring your ideas to life using the latest technologies and best practices.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 group"
          >
            <span>Let's Build Something Amazing</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyTools;
