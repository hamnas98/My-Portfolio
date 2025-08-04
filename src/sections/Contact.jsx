import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const sectionRef = useRef();
  
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Mouse tracking for subtle effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setLoading(false);
      showAlert({
        show: true,
        text: 'Please fill in all required fields.',
        type: 'danger',
      });
      return;
    }

    console.log('Service ID:', import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    console.log('Template ID:', import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
    console.log('Public Key:', import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Muhammad Hamnas',
        from_email: form.email,
        to_email: 'hamnascp98@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    )    
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message! I\'ll get back to you soon 😃',
            type: 'success',
          });

          // Clear form after successful submission
          setForm({
            name: '',
            email: '',
            message: '',
          });

          // Auto-hide alert after 5 seconds
          setTimeout(() => {
            hideAlert();
          }, 5000);
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS Error:', error);

          showAlert({
            show: true,
            text: "I didn't receive your message. Please try again 😢",
            type: 'danger',
          });

          // Auto-hide error alert after 5 seconds
          setTimeout(() => {
            hideAlert();
          }, 5000);
        },
      );
  };

  return (
    <section ref={sectionRef} className="c-space my-20 relative overflow-hidden" id="contact">
      {/* Alert positioned at top-right with proper z-index */}
      {alert.show && (
        <div className="fixed top-20 right-4 z-[9999] animate-fadeInDown">
          <Alert {...alert} />
        </div>
      )}

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
        </p>
      </div>

      <div className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ 
              transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)` 
            }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" 
            style={{ 
              animationDelay: '2s',
              transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)` 
            }}
          ></div>
          
          {/* Floating Elements */}
          <div 
            className="absolute top-20 right-20 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce"
            style={{ 
              transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
              animationDelay: '0s' 
            }}
          ></div>
          <div 
            className="absolute bottom-32 left-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce"
            style={{ 
              transform: `translate(${mousePosition.x * -0.08}px, ${mousePosition.y * 0.08}px)`,
              animationDelay: '1s' 
            }}
          ></div>
          <div 
            className="absolute top-1/2 right-10 w-2 h-2 bg-green-400/30 rounded-full animate-bounce"
            style={{ 
              transform: `translate(${mousePosition.x * 0.12}px, ${mousePosition.y * -0.06}px)`,
              animationDelay: '2s' 
            }}
          ></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full w-full p-4">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border border-white/10 rounded"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className={`
          relative z-10 w-full max-w-4xl mx-auto
          transform transition-all duration-1000
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Contact Info */}
            <div className={`
              space-y-8
              transform transition-all duration-1000 delay-200
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
            `}>
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Together</span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help turn your vision into reality.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">hamnascp98@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30 group-hover:bg-purple-500/30 transition-all duration-300">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-green-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30 group-hover:bg-green-500/30 transition-all duration-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-white font-medium">Status</p>
                    <p className="text-gray-400">Available for opportunities</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/hamnas98" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.374-12-12-12z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/muhammad-hamnas-cp" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                <a 
                  href="mailto:hamnascp98@gmail.com" 
                  className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className={`
              transform transition-all duration-1000 delay-400
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
            `}>
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-500">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <label className="block">
                      <span className="text-white font-medium mb-2 block">Full Name</span>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 outline-none focus:border-blue-500/50 focus:bg-gray-800/80 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </label>

                    <label className="block">
                      <span className="text-white font-medium mb-2 block">Email Address</span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 outline-none focus:border-blue-500/50 focus:bg-gray-800/80 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </label>

                    <label className="block">
                      <span className="text-white font-medium mb-2 block">Your Message</span>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 outline-none focus:border-blue-500/50 focus:bg-gray-800/80 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or say hello..."
                      />
                    </label>
                  </div>

                  <button 
                    className={`
                      w-full flex items-center justify-center gap-3 px-6 py-4 
                      bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                      text-white font-semibold rounded-lg transition-all duration-300 
                      hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                      ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
                    type="submit" 
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>

                {/* Form footer */}
                <div className="mt-6 pt-6 border-t border-gray-800/50">
                  <p className="text-center text-gray-400 text-sm">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
