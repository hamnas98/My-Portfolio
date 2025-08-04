import { useState, useEffect } from 'react';

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Your projects data - now with both projects
  const myProjects = [
    {
      id: 1,
      title: "Fairway Grocery - E-Commerce Platform",
      desc: "A comprehensive full-stack e-commerce application built with modern technologies, featuring user authentication, real-time order tracking, and seamless payment integration.",
      subdesc: "Complete online grocery shopping experience with admin dashboard, inventory management, and customer analytics.",
      href: "https://www.fairwaygrocery.shop",
      github: "https://github.com/hamnas98/hamnas98-fairway-grocery-ecommerce",
      texture: "/assets/project-fairway.jpg",
      logo: "/assets/fairway-logo.png",
      logoStyle: {
        backgroundColor: '#0D1117',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      spotlight: "/assets/fairway-spotlight.jpg",
      tags: [
        { id: 1, name: 'Node.js', path: '/assets/nodejs.png' },
        { id: 2, name: 'Express.js', path: '/assets/express.png' },
        { id: 3, name: 'MongoDB', path: '/assets/mongodb.png' },
        { id: 4, name: 'JavaScript', path: '/assets/javascript.png' },
        { id: 5, name: 'Tailwind CSS', path: '/assets/tailwind.png' },
        { id: 6, name: 'AWS EC2', path: '/assets/aws.png' },
        { id: 7, name: 'Razorpay', path: '/assets/razorpay.png' },
      ],
      features: [
        "User Authentication & Authorization",
        "Real-time Order Tracking",
        "Razorpay Payment Integration", 
        "Admin Dashboard & Analytics",
        "Wallet & Coupon System",
        "Cart & Wishlist Functionality",
        "Referral System",
        "Invoice Generation"
      ],
      category: "E-Commerce",
      status: "Live",
      duration: "3 months"
    },
    {
      id: 2,
      title: "Advanced React Todo App",
      desc: "A feature-rich Todo application built with React, showcasing modern state management patterns and user experience design with drag-and-drop functionality.",
      subdesc: "Comprehensive task management with dark mode, filters, persistence, and intuitive drag-and-drop interface for optimal productivity.",
      href: "https://todo-app-swart-ten-18.vercel.app/",
      github: "https://github.com/hamnas98/TODO-APP.git",
      texture: "/assets/project-todo.jpg",
      logo: "/assets/todo-logo.png",
      logoStyle: {
        backgroundColor: '#0D1117',
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      },
      spotlight: "/assets/todo-spotlight.jpg",
      tags: [
        { id: 1, name: 'React', path: '/assets/react.png' },
        { id: 2, name: 'JavaScript', path: '/assets/javascript.png' },
        { id: 3, name: 'CSS Modules', path: '/assets/css.png' },
        { id: 4, name: 'LocalStorage', path: '/assets/storage.png' },
        { id: 5, name: 'react-beautiful-dnd', path: '/assets/dnd.png' },
        { id: 6, name: 'dayjs', path: '/assets/dayjs.png' },
      ],
      features: [
        "Drag & Drop Task Reordering",
        "Dark Mode Toggle",
        "Form Validation",
        "Relative Time Display",
        "LocalStorage Persistence",
        "Task Filters (All/Completed/Pending)",
        "Optimistic UI Updates",
        "Responsive Design"
      ],
      category: "Productivity",
      status: "Live",
      duration: "2 weeks"
    }
  ];

  const projectCount = myProjects.length;
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [selectedProjectIndex]);

  return (
    <section className="c-space my-20 relative" id="projects">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore my latest work and the technologies I've used to bring ideas to life
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-8 w-full">
        {/* Project Details Panel */}
        <div className={`
          relative bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8
          hover:border-gray-600/50 transition-all duration-500
          transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
        `}>
          {/* Dynamic Background Spotlight based on project */}
          <div className="absolute top-0 right-0 w-full h-64 overflow-hidden rounded-t-2xl">
            <div className="relative w-full h-full">
              <div className={`absolute inset-0 ${
                currentProject.id === 1 
                  ? 'bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent'
                  : 'bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-transparent'
              }`}></div>
              <div className="absolute inset-0 bg-black/40"></div>
              {/* Animated grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-4 gap-2 p-4 h-full">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`rounded animate-pulse ${
                        currentProject.id === 1 ? 'bg-blue-400/50' : 'bg-green-400/50'
                      }`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Logo */}
          <div 
            className="relative z-10 p-3 backdrop-blur-xl w-fit rounded-xl mb-6 border border-white/10"
            style={currentProject.logoStyle}
          >
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {currentProject.id === 1 ? 'FG' : 'TD'}
              </span>
            </div>
          </div>

          {/* Project Info */}
          <div className="relative z-10 space-y-6">
            {/* Title and Status */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <span className={`
                  px-3 py-1 rounded-full text-xs font-medium
                  ${currentProject.status === 'Live' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }
                `}>
                  {currentProject.status}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  currentProject.category === 'E-Commerce'
                    ? 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                    : 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                }`}>
                  {currentProject.category}
                </span>
                <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs font-medium border border-gray-500/30">
                  {currentProject.duration}
                </span>
              </div>
              
              <h3 className={`
                text-2xl sm:text-3xl font-bold text-white leading-tight
                transform transition-all duration-500 delay-100
                ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
              `}>
                {currentProject.title}
              </h3>
            </div>

            {/* Description */}
            <div className={`
              space-y-4 text-gray-300
              transform transition-all duration-500 delay-200
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
            `}>
              <p className="leading-relaxed">{currentProject.desc}</p>
              <p className="leading-relaxed text-gray-400">{currentProject.subdesc}</p>
            </div>

            {/* Key Features */}
            <div className={`
              transform transition-all duration-500 delay-300
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
            `}>
              <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentProject.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 text-sm text-gray-300 p-2 bg-gray-800/30 rounded-lg border border-gray-700/50"
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      currentProject.id === 1 ? 'bg-blue-400' : 'bg-green-400'
                    }`}></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className={`
              transform transition-all duration-500 delay-400
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
            `}>
              <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div 
                    key={tag.id} 
                    className={`flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50 transition-all duration-300 ${
                      currentProject.id === 1 
                        ? 'hover:border-blue-500/50 hover:bg-blue-500/10' 
                        : 'hover:border-green-500/50 hover:bg-green-500/10'
                    }`}
                  >
                    <span className="text-sm text-gray-300 font-medium">{tag.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`
              flex flex-wrap gap-4 pt-6
              transform transition-all duration-500 delay-500
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
            `}>
              <a
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 group ${
                  currentProject.id === 1
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                    : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                }`}
              >
                <span>View Live Site</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <a
                href={currentProject.github}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-6 py-3 border-2 text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:scale-105 group ${
                  currentProject.id === 1
                    ? 'border-gray-600 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10'
                    : 'border-gray-600 hover:border-green-500 hover:text-green-400 hover:bg-green-500/10'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.374-12-12-12z"/>
                </svg>
                <span>View Code</span>
              </a>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-800/50">
              <button 
                className={`flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 rounded-lg transition-all duration-300 hover:scale-105 border border-gray-700/50 ${
                  currentProject.id === 1 ? 'hover:border-blue-500/50' : 'hover:border-green-500/50'
                }`}
                onClick={() => handleNavigation('previous')}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              <div className="flex gap-2">
                {Array.from({ length: projectCount }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === selectedProjectIndex 
                        ? (currentProject.id === 1 ? 'bg-blue-500 scale-110' : 'bg-green-500 scale-110')
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    onClick={() => setSelectedProjectIndex(index)}
                  />
                ))}
              </div>

              <button 
                className={`flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 rounded-lg transition-all duration-300 hover:scale-105 border border-gray-700/50 ${
                  currentProject.id === 1 ? 'hover:border-blue-500/50' : 'hover:border-green-500/50'
                }`}
                onClick={() => handleNavigation('next')}
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Project Mockup/Preview Panel */}
        <div className={`
          relative bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden
          hover:border-gray-600/50 transition-all duration-500
          transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          delay-300
        `}>
          {/* Device Mockup */}
          <div className="relative h-full min-h-[500px] p-8 flex items-center justify-center">
            {/* Background pattern - dynamic based on project */}
            <div className={`absolute inset-0 ${
              currentProject.id === 1 
                ? 'bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent'
                : 'bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-transparent'
            }`}></div>
            
            {/* Laptop Mockup */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative bg-gray-800 rounded-t-xl p-2">
                <div className="bg-black rounded-lg overflow-hidden">
                  {/* Screen content - dynamic based on project */}
                  <div className={`aspect-video relative ${
                    currentProject.id === 1
                      ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50'
                      : 'bg-gradient-to-br from-green-900/50 to-emerald-900/50'
                  }`}>
                    {/* Simulated website interface */}
                    <div className="absolute inset-0 p-4">
                      {/* Header bar */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg h-8 mb-4 flex items-center px-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex-1 flex justify-center">
                          <div className="bg-white/10 rounded px-3 py-1 text-xs text-white/60">
                            {currentProject.id === 1 ? 'fairwaygrocery.shop' : 'todo-app-swart-ten-18.vercel.app'}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content area - different layouts for each project */}
                      {currentProject.id === 1 ? (
                        // E-commerce layout
                        <div className="space-y-3">
                          <div className="bg-white/10 rounded h-4 w-3/4"></div>
                          <div className="bg-white/5 rounded h-3 w-full"></div>
                          <div className="bg-white/5 rounded h-3 w-2/3"></div>
                          <div className="grid grid-cols-3 gap-2 mt-4">
                            {Array.from({ length: 6 }).map((_, i) => (
                              <div key={i} className="bg-white/10 rounded h-12 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        // Todo app layout
                        <div className="space-y-2">
                          <div className="bg-white/10 rounded h-6 w-2/3 mb-3"></div>
                          <div className="space-y-2">
                            {Array.from({ length: 4 }).map((_, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded border-2 ${i % 2 === 0 ? 'bg-green-400/30 border-green-400' : 'border-white/30'}`}></div>
                                <div className={`bg-white/10 rounded h-3 flex-1 ${i === 1 ? 'opacity-50' : ''} animate-pulse`} style={{ animationDelay: `${i * 0.3}s` }}></div>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2 mt-4">
                            <div className="bg-white/20 rounded px-2 py-1 text-xs">All</div>
                            <div className="bg-white/10 rounded px-2 py-1 text-xs">Pending</div>
                            <div className="bg-white/10 rounded px-2 py-1 text-xs">Completed</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Laptop base */}
              <div className="bg-gray-700 h-4 rounded-b-xl"></div>
              <div className="bg-gray-600 h-2 rounded-b-lg mx-8"></div>
            </div>

            {/* Floating elements - dynamic colors */}
            <div className={`absolute top-20 right-20 w-4 h-4 rounded-full animate-bounce ${
              currentProject.id === 1 ? 'bg-blue-400/60' : 'bg-green-400/60'
            }`} style={{ animationDelay: '0s' }}></div>
            <div className={`absolute bottom-32 left-16 w-3 h-3 rounded-full animate-bounce ${
              currentProject.id === 1 ? 'bg-purple-400/60' : 'bg-emerald-400/60'
            }`} style={{ animationDelay: '1s' }}></div>
            <div className={`absolute top-40 left-12 w-2 h-2 rounded-full animate-bounce ${
              currentProject.id === 1 ? 'bg-indigo-400/60' : 'bg-teal-400/60'
            }`} style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
