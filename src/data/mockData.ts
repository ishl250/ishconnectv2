import { 
  Code, 
  Smartphone, 
  Shield, 
  Cloud, 
  Database, 
  Palette,
  Terminal,
  Globe,
  Cpu,
  Lock,
  Server,
  Layers,
  Github
} from 'lucide-react';
import { Project } from '@/components/ProjectCard';
import { TrainingProgram } from '@/components/TrainingCard';

// Services Data
export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
    icon: Code,
    features: ['React & Next.js', 'Full-Stack Solutions', 'E-commerce Platforms', 'Progressive Web Apps'],
    href: '/services#web',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android devices.',
    icon: Smartphone,
    features: ['React Native', 'Flutter Development', 'iOS & Android Native', 'App Store Optimization'],
    href: '/services#mobile',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets, data, and infrastructure from cyber threats.',
    icon: Shield,
    features: ['Security Audits', 'Penetration Testing', 'Threat Detection', 'Compliance Solutions'],
    href: '/services#security',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to power your business with reliability and flexibility.',
    icon: Cloud,
    features: ['AWS & Azure', 'Cloud Migration', 'DevOps & CI/CD', 'Serverless Architecture'],
    href: '/services#cloud',
  },
  {
    id: 'backend-systems',
    title: 'Backend Systems',
    description: 'Robust backend architectures and APIs that power your applications with speed and reliability.',
    icon: Database,
    features: ['API Development', 'Database Design', 'Microservices', 'Performance Optimization'],
    href: '/services#backend',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with user experience at the forefront.',
    icon: Palette,
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    href: '/services#design',
  },
];

// Projects Data
// 
export const projects: Project[] = [
  {
    id: 'greenafrica-dashboard',
    title: 'GreenAfrica Climate & Sustainability Dashboard',
    category: 'Climate Tech',
    description:
      'A futuristic, real-time sustainability dashboard visualizing Africa’s renewable energy and environmental impact.',
    longDescription:
      'GreenAfrica is a flagship climate-tech web platform designed to visualize Africa’s sustainability data in real time. The dashboard combines immersive 3D visualization, animated HUD interfaces, and data-driven insights to make climate impact understandable and actionable. It features an interactive 3D globe highlighting renewable energy projects across Africa, live environmental metrics, and cinematic motion design optimized for all screen sizes.',
    image: '/assets/GA.png',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'React Three Fiber',
      'Zustand',
      'Recharts',
    ],
    metrics: [
      { label: 'Energy Types Visualized', value: '4+' },
      { label: 'Regions Covered', value: 'Africa-wide' },
      { label: 'UI Performance', value: '60 FPS' },
      { label: 'Responsive Breakpoints', value: '6+' },
    ],
    year: '2024',
    client: 'GreenAfrica Initiative',
    liveUrl: 'https://green-africa-green.vercel.app',
    githubUrl: 'https://github.com/ishl250',
  },

  {
    id: 'logistics-command-center',
    title: 'Mission-Critical Logistics Command Center',
    category: 'Logistics & HealthTech',
    description:
      'A real-time operations platform for autonomous and instant delivery systems inspired by Zipline.',
    longDescription:
      'This project is a mission-critical logistics command center designed for real-time monitoring of autonomous delivery operations. Built with production-grade architecture, the system allows operators to track live deliveries, manage fleet health, prioritize emergency orders, and monitor operational metrics across regions. The UI is optimized for high-stakes environments, emphasizing clarity, speed, and reliability.',
    image: '/assets/dron.png',
    technologies: [
      'React (Vite)',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'WebSockets',
      'JWT Authentication',
    ],
    metrics: [
      { label: 'Real-Time Latency', value: '<1s' },
      { label: 'System Roles', value: '4' },
      { label: 'Operational Modules', value: '5+' },
      { label: 'Architecture', value: 'Event-driven' },
    ],
    year: '2024',
    client: 'Autonomous Logistics (Concept)',
    githubUrl: 'https://github.com/ishl250',
  },

  {
    id: 'foodieapp',
    title: 'FoodieApp – Food Ordering Mobile Application',
    category: 'Mobile Applications',
    description:
      'A cross-platform food ordering mobile app with real-time order tracking and integrated payments.',
    longDescription:
      'FoodieApp is a modern mobile food ordering application designed for both users and administrators. The app supports secure authentication, food discovery, cart and checkout flows, and multiple payment options including mobile money. Real-time order tracking ensures transparency and improves the customer experience.',
    image: '/assets/Food.png',
    technologies: ['Flutter', 'Firebase', 'REST APIs'],
    metrics: [
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Payment Methods', value: '3+' },
      { label: 'User Roles', value: '2' },
      { label: 'Order Tracking', value: 'Real-time' },
    ],
    year: '2025',
    client: 'Food Service Platform',
  },

  {
    id: 'deepfake-detection',
    title: 'Real-Time Deepfake Detection Browser Extension',
    category: 'AI & Cybersecurity',
    description:
      'An AI-powered browser extension that detects manipulated media in real time while browsing.',
    longDescription:
      'This project is a next-generation browser extension designed to detect deepfake videos, manipulated images, and AI-generated text in real time. Built with a privacy-first approach, the system performs sub-second analysis without tracking or data harvesting. The platform is open-source and focused on restoring trust in online content.',
    image: '/assets/DDF.png',
    technologies: [
      'JavaScript',
      'Machine Learning',
      'Browser Extensions',
      'AI Inference',
    ],
    metrics: [
      { label: 'Media Scanned / Day', value: '1.2M+' },
      { label: 'Detection Speed', value: 'Milliseconds' },
      { label: 'Privacy Model', value: 'Zero Tracking' },
      { label: 'Launch Status', value: 'Coming Soon' },
    ],
    year: '2024',
    client: 'Open Source Community',
  },

  {
    id: 'healguard-ai',
    title: 'HealGuard AI',
    category: 'HealthTech & AI',
    description:
      'An AI-powered healthcare platform focused on safety, intelligence, and decision support.',
    longDescription:
      'HealGuard AI is a healthcare-focused artificial intelligence platform designed to enhance safety, analysis, and trust in medical data. The project explores the use of intelligent systems to support healthcare workflows while maintaining privacy, scalability, and compliance with healthcare-grade requirements.',
    image: '/assets/HlG.png',
    technologies: ['AI Models', 'Node.js', 'Secure APIs'],
    metrics: [
      { label: 'AI Focus', value: 'Healthcare Safety' },
      { label: 'Architecture', value: 'Scalable' },
      { label: 'Security Level', value: 'High' },
      { label: 'Use Cases', value: 'Clinical Support' },
    ],
    year: '2024',
    client: 'Health Innovation (R&D)',
  },

  {
    id: 'agrilink-rwanda',
    title: 'AgriLink Rwanda',
    category: 'AgriTech',
    description:
      'A farmer marketplace and advisory platform connecting smallholder farmers directly to buyers with real-time pricing and crop insights.',
    longDescription:
      'AgriLink Rwanda addresses key challenges faced by smallholder farmers, including unfair pricing, middlemen dependency, and lack of market information. The platform connects farmers directly to buyers, provides transparent market price trends, enables real-time communication, and delivers simple crop advisory and weather alerts. Designed to support SDG 2 (Zero Hunger) and SDG 8 (Decent Work), the solution empowers farmers with technology-driven access to markets and knowledge.',
    image: '/assets/agrilink.png',
    technologies: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Socket.io',
      'Google Maps API',
      'OpenWeather API',
    ],
    metrics: [
      { label: 'Target Users', value: 'Smallholder Farmers' },
      { label: 'Languages', value: 'English + Kinyarwanda' },
      { label: 'Core Features', value: 'Marketplace + Chat' },
      { label: 'MVP Build Time', value: '2–4 Weeks' },
    ],
    year: '2026',
    client: 'Agricultural Communities (Concept)',
  },

  {
    id: 'ikibina',
    title: 'IKIBINA – Digital Savings & Lending Platform',
    category: 'FinTech',
    description:
      'A community-driven digital savings and lending platform designed for groups, cooperatives, and families in Rwanda.',
    longDescription:
      'IKIBINA modernizes traditional community savings groups by providing a secure, transparent, and easy-to-use digital platform. Groups can save together, issue loans, track balances, and grow wealth collectively. The platform strengthens trust through transparent tracking, supports community-first financial growth, and enables cooperatives to scale their financial operations efficiently.',
    image: '/assets/ikibina-rw.vercel.app.jpeg',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
      'JWT Authentication',
    ],
    metrics: [
      { label: 'Active Members', value: '12+' },
      { label: 'Group Balance', value: '450,000 RWF' },
      { label: 'Loans Issued', value: '85,000 RWF' },
      { label: 'Use Cases', value: 'Savings & Lending' },
    ],
    year: '2024',
    client: 'Community Savings Groups',
    liveUrl: 'https://ikibina-rw.vercel.app/',
  },

  {
    id: 'sraila',
    title: 'SRAILA – Smart Rwanda AI Learning Assistant',
    category: 'EdTech & AI',
    description:
      'An AI-powered, multilingual learning platform designed to deliver inclusive and personalized education across Rwanda.',
    longDescription:
      'SRAILA is an intelligent educational platform built to address teacher shortages, language barriers, and unequal access to quality education. It delivers personalized, adaptive learning through an AI assistant that supports Kinyarwanda, English, and French. The platform features 24/7 chatbot support, gamified quizzes, adaptive learning paths, and low-data optimization for rural accessibility.',
    image: '/assets/Sraila (2).png',
    technologies: [
      'React',
      'AI Models',
      'Natural Language Processing',
      'Gamification Systems',
    ],
    metrics: [
      { label: 'Languages Supported', value: '3' },
      { label: 'Learning Mode', value: 'Adaptive AI' },
      { label: 'Availability', value: '24/7' },
      { label: 'Target Reach', value: 'Nationwide' },
    ],
    year: '2025',
    client: 'Education Sector (Rwanda)',
    liveUrl: 'https://srailaai.vercel.app/',
  },
  {
  id: 'kiyumba-tss',
  title: 'Kiyumba Technical Secondary School',
  category: 'Education / TVET',
  description:
    'Official digital platform for Kiyumba Technical Secondary School showcasing academic programs, admissions, achievements, and campus life.',
  longDescription:
    'The Kiyumba TSS platform is a modern, responsive school website designed to represent a leading Technical and Vocational Education and Training (TVET) institution in Rwanda. The platform highlights admissions information, academic and technical programs, institutional values, achievements, and student life. It serves as a digital gateway for prospective students, parents, and partners, combining clear information architecture, strong visual identity, and accessibility across all devices.',
  image: '/assets/scholl.png', 
  technologies: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Responsive Design',
  ],
  metrics: [
    { label: 'Students Enrolled', value: '2,500+' },
    { label: 'National Exam Pass Rate', value: '100%' },
    { label: 'Academic & Technical Programs', value: '6+' },
    { label: 'Years of Excellence', value: '5+' },
  ],
  year: '2024',
  client: 'Kiyumba Technical Secondary School',
  liveUrl: 'https://kiyumbatvet.vercel.app/',
}

];

// Training Programs Data
export const trainingPrograms: TrainingProgram[] = [
  {
    id: 'python',
    title: 'Python Programming',
    description: 'Master Python from basics to advanced concepts including data science and automation.',
    icon: Terminal,
    duration: '12 weeks',
    level: 'Beginner',
    students: 250,
    topics: ['Python Basics', 'Data Structures', 'OOP', 'APIs', 'Automation'],
    price: '10000',
  },
  {
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    description: 'Comprehensive web development bootcamp covering frontend and backend technologies.',
    icon: Globe,
    duration: '16 weeks',
    level: 'Intermediate',
    students: 180,
    topics: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Databases'],
    price: '10000/Free',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Fundamentals',
    description: 'Learn essential cybersecurity skills including ethical hacking and defense strategies.',
    icon: Lock,
    duration: '10 weeks',
    level: 'Beginner',
    students: 120,
    topics: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Forensics'],
    price: '80000',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile applications using React Native and Flutter.',
    icon: Smartphone,
    duration: '14 weeks',
    level: 'Intermediate',
    students: 95,
    topics: ['React Native', 'Flutter', 'App Design', 'Publishing'],
    price: '10000',
  },
  {
    id: 'cloud-computing',
    title: 'Cloud & DevOps',
    description: 'Master cloud platforms and DevOps practices for modern software delivery.',
    icon: Server,
    duration: '12 weeks',
    level: 'Advanced',
    students: 75,
    topics: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure'],
    price: '10000',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Create stunning user interfaces and experiences that delight users.',
    icon: Palette,
    duration: '8 weeks',
    level: 'Beginner',
    students: 150,
    topics: ['Design Thinking', 'Figma', 'Prototyping', 'User Research'],
    price: '8000',
  },
];

// Team Members Data
// 

export const teamMembers = [
  {
    id: 'ceo',
    name: 'Ishimwe J. Claude',
    role: 'CEO & Founder',
    bio: 'Founder and strategic leader driving vision, growth, and innovation across the company.',
    image: '/Team/ish.jpg',
    social: {
      github: 'https://github.com/ishl250',
      linkedin: 'https://www.linkedin.com/in/ish-claude/',
      twitter: 'https://x.com/ishlicky25',
      instagram: 'https://www.instagram.com/ishl250',
    },
  },
  {
    id: 'fullstack-dev',
    name: 'Ishimwe Kevin',
    role: 'Full Stack Developer',
    bio: 'Skilled full stack developer building scalable web applications from frontend to backend.',
    image: '/Team/Kvin.jpg',
    social: {
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com/in/kevin-ishimwe-551815368/',
      instagram: 'https://www.instagram.com/ishimwekevin2007/',
    },
  },
  {
    id: 'content-manager',
    name: 'Iradukunda U. Cynthia',
    role: 'Content Manager',
    bio: 'Creative storyteller managing digital content, brand voice, and online presence.',
    image: '/Team/Cthia.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://www.instagram.com/uwineza_cynthia0/',
    },
  },
  {
    id: 'web-dev',
    name: 'Ndatabaye Tumaine',
    role: 'Web Developer',
    bio: 'Frontend-focused web developer crafting fast, responsive, and user-friendly websites.',
    image: '/Team/tumain.jpg',
    social: {
      github: 'https://github.com',
      instagram: 'https://www.instagram.com/bugzappercode/',
    },
  },
  {
    id: 'designer',
    name: 'Uwitonze P. Trinita',
    role: 'Graphic Designer',
    bio: 'Creative designer specializing in branding, UI visuals, and digital design experiences.',
    image: '/Team/Trin.jpg',
    social: {
      Github: '#',
      instagram: 'https://www.instagram.com/u_trin1ta/',
    },
  },
  {
    id: 'customer-success',
    name: 'Uwineza Ange',
    role: 'Customer Success Agent',
    bio: 'Focused on customer satisfaction, onboarding, and long-term client relationships.',
    image: '/Team/anguw-removebg-preview.png',
    social: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://www.instagram.com/uwinezaange4/',
    },
  },
  {
    id: 'support-partnerships',
    name: 'Biranejeje Divine',
    role: 'Support & Partnerships',
    bio: 'Managing partnerships and providing reliable support to clients and collaborators.',
    image: '/Team/Dv.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://www.instagram.com/divin_e3021',
    },
  },
  {
    id: 'mobile-dev',
    name: 'Derick',
    role: 'Mobile App Developer',
    bio: 'Mobile developer building high-performance Android and iOS applications.',
    image: '/Team/Drick.jpg',
    social: {
      github: 'https://github.com',
      instagram: 'https://instagram.com',
    },
  },
  {
  id: 'operations-admin',
  name: 'Irasubiza Sandrine',
  role: 'Operations & Administration',
  bio: 'Ensuring smooth day-to-day operations and supporting internal team coordination.',
  image: '/Team/Sanny.jpg',
  social: {
    linkedin: 'https://www.linkedin.com/in/sandrine-irasubiza-097823385/',
    instagram: 'https://www.instagram.com/san.drinee__/',
  },
},

];


// Company Stats
export const companyStats = [
  { value: '500+', label: 'Students Trained' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '10+', label: 'Tech Programs' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Team Members' },
];

// Timeline Data
export const timeline = [
  {
    year: '2020',
    title: 'Founded in Kigali',
    description: 'IshConnect was founded with a mission to bridge the digital skills gap in Rwanda.',
  },
  {
    year: '2021',
    title: 'First Training Cohort',
    description: 'Launched our first Python programming bootcamp with 25 students.',
  },
  {
    year: '2022',
    title: 'Enterprise Solutions',
    description: 'Expanded into enterprise software development, delivering our first major project.',
  },
  {
    year: '2023',
    title: 'Regional Expansion',
    description: 'Extended services to East African countries including Uganda and Kenya.',
  },
  {
    year: '2024',
    title: 'Cybersecurity Division',
    description: 'Launched dedicated cybersecurity services and training programs.',
  },
  {
    year: '2025',
    title: 'AI & Innovation Hub',
    description: 'Opened our AI research and innovation center in Kigali.',
  },
];
