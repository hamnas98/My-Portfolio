export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Tools',
    href: '#tools',
  },
  {
    id: 5,
    name: 'Experience',
    href: '#work',
  },
  {
    id: 6,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Muhammad Hamnas was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Muhammad\'s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He\'s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech',
    img: 'assets/review3.png',
    review:
      'I can\'t say enough good things about Muhammad. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Muhammad was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    id: 1,
    title: 'Fairway Grocery - E-Commerce Platform',
    desc: 'A comprehensive full-stack e-commerce application built with modern technologies, featuring user authentication, real-time order tracking, and seamless payment integration.',
    subdesc: 'Complete online grocery shopping experience with admin dashboard, inventory management, and customer analytics.',
    href: 'https://www.fairwaygrocery.shop',
    github: 'https://github.com/hamnas98/hamnas98-fairway-grocery-ecommerce',
    texture: '/textures/project/fairway.mp4',
    logo: '/assets/fairway-logo.png',
    logoStyle: {
      backgroundColor: '#0D1117',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    spotlight: '/assets/fairway-spotlight.png',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 2,
        name: 'Express.js',
        path: '/assets/express.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 5,
        name: 'Tailwind CSS',
        path: '/assets/tailwind.png',
      },
      {
        id: 6,
        name: 'AWS EC2',
        path: '/assets/aws.png',
      },
      {
        id: 7,
        name: 'Razorpay',
        path: '/assets/razorpay.png',
      },
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
    title: 'Advanced React Todo App',
    desc: 'A feature-rich Todo application built with React, showcasing modern state management patterns and user experience design with drag-and-drop functionality.',
    subdesc: 'Comprehensive task management with dark mode, filters, persistence, and intuitive drag-and-drop interface for optimal productivity.',
    href: 'https://todo-app-swart-ten-18.vercel.app/',
    github: 'https://github.com/hamnas98/TODO-APP.git',
    texture: '/textures/project/todo.mp4',
    logo: '/assets/todo-logo.png',
    logoStyle: {
      backgroundColor: '#0D1117',
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    },
    spotlight: '/assets/todo-spotlight.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/react.png',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 3,
        name: 'CSS Modules',
        path: '/assets/css.png',
      },
      {
        id: 4,
        name: 'LocalStorage',
        path: '/assets/storage.png',
      },
      {
        id: 5,
        name: 'react-beautiful-dnd',
        path: '/assets/dnd.png',
      },
      {
        id: 6,
        name: 'dayjs',
        path: '/assets/dayjs.png',
      },
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
  },
  {
    id: 3,
    title: 'StudyBangaloreInternational - Admission Booking Platform',
    desc: 'StudyBangaloreInternational is an educational platform that helps students explore and book admissions into top colleges across Karnataka. It features detailed college info, course listings, and contact forms.',
    subdesc: 'Developed using HTML, CSS, Bootstrap, and JavaScript, it includes pages for course categories, student support, and a responsive design. Deployed at studybangaloreinternational.in.',
    href: 'https://studybangaloreinternational.in',
    github: 'https://github.com/hamnas98/studybangalore', // Add your actual GitHub link
    texture: '/textures/project/studybangalore.mp4',
    logo: '/assets/studybangalore-logo.png',
    logoStyle: {
      backgroundColor: '#005792',
      border: '0.2px solid #0074B7',
      boxShadow: '0px 0px 60px 0px #2196F34D',
    },
    spotlight: '/assets/studybangalore-spotlight.png',
    tags: [
      {
        id: 1,
        name: 'HTML5',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'CSS3',
        path: '/assets/css.png',
      },
      {
        id: 3,
        name: 'Bootstrap',
        path: '/assets/bootstrap.png',
      },
      {
        id: 4,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
    ],
    features: [
      "College Information Portal",
      "Course Category Browsing",
      "Admission Inquiry Forms",
      "Student Support System",
      "Responsive Design",
      "Contact Management",
      "SEO Optimized",
      "Fast Loading"
    ],
    category: "Educational",
    status: "Live",
    duration: "1 month"
  },
  {
    id: 4,
    title: 'VoltCraft - Electronics Gadget E-Commerce Site',
    desc: 'VoltCraft is an advanced electronics e-commerce platform offering a smooth shopping experience for tech gadgets. It includes dynamic product filtering, cart management, order tracking, and real-time offers.',
    subdesc: 'Developed using the MERN stack (MongoDB, Express, React, Node.js) with integrated payment gateway, session management, and real-time AI chatbot. Ensures user-friendly UI and secure transactions.',
    href: "https://voltcraft.onrender.com",
    github: "https://github.com/hamnas98/voltcraft", // Add your actual GitHub link
    texture: '/textures/project/voltcraft.mp4',
    logo: '/assets/voltcraft.webp',
    logoStyle: {
      backgroundColor: '#212121',
      border: '0.2px solid #3A3A3A',
      boxShadow: '0px 0px 60px 0px #FFC1074D',
    },
    spotlight: '/assets/voltcraft-spotlight.png',
    tags: [
      {
        id: 1,
        name: 'MongoDB',
        path: '/assets/mongo.png',
      },
      {
        id: 2,
        name: 'Express.js',
        path: '/assets/express.png',
      },
      {
        id: 3,
        name: 'React',
        path: '/assets/react.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 5,
        name: 'AI Chatbot',
        path: '/assets/ai.png',
      },
      {
        id: 6,
        name: 'Payment Gateway',
        path: '/assets/payment.png',
      },
    ],
    features: [
      "Dynamic Product Filtering",
      "Cart Management System",
      "Order Tracking",
      "Real-time AI Chatbot",
      "Payment Gateway Integration",
      "Session Management",
      "Admin Panel",
      "Secure Transactions"
    ],
    category: "E-Commerce",
    status: "Live",
    duration: "4 months"
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Freelance Full Stack Developer',
    pos: 'Independent Developer',
    duration: '2023 - Present',
    title: "Working as a freelance full stack developer, I've built multiple e-commerce platforms, educational websites, and productivity applications. Specialized in MERN stack development with a focus on creating scalable, user-friendly solutions.",
    icon: '/assets/freelance.svg',
    animation: 'victory',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind CSS']
  },
  {
    id: 2,
    name: 'React.js Specialist',
    pos: 'Frontend Developer',
    duration: '2022 - Present',
    title: "React is my go-to library for building dynamic and responsive user interfaces. I use it to create reusable components, manage state efficiently, and deliver fast, interactive web apps with modern hooks and patterns.",
    icon: '/assets/react.svg',
    animation: 'clapping',
    technologies: ['React', 'Redux Toolkit', 'React Router', 'Context API', 'Custom Hooks']
  },
  {
    id: 3,
    name: 'Backend Development',
    pos: 'Node.js Developer',
    duration: '2022 - Present',
    title: "Node.js helps me build scalable backend services and REST APIs. I've used it to handle server-side logic, manage authentication, integrate payment systems, and connect to various databases in full-stack projects.",
    icon: '/assets/nodejs.png',
    animation: 'salute',
    technologies: ['Node.js', 'Express.js', 'JWT', 'Passport.js', 'Socket.io']
  },
  {
    id: 4,
    name: 'Database Management',
    pos: 'Database Developer',
    duration: '2022 - Present',
    title: "Experienced with both SQL and NoSQL databases. I design efficient database schemas, optimize queries, and ensure data integrity. MongoDB is my primary choice for modern web applications requiring flexibility.",
    icon: '/assets/mongo.png',
    animation: 'jump',
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Prisma']
  },
  {
    id: 5,
    name: 'UI/UX Collaboration',
    pos: 'Design-Dev Bridge',
    duration: '2021 - Present',
    title: "I bridge the gap between design and development using tools like Figma for collaboration. I translate designs into pixel-perfect, responsive interfaces while maintaining design consistency and user experience standards.",
    icon: '/assets/figma.svg',
    animation: 'thumbs-up',
    technologies: ['Figma', 'Tailwind CSS', 'Bootstrap', 'CSS3', 'Responsive Design']
  },
];

// Tools data for the My Tools section
export const toolsData = [
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
