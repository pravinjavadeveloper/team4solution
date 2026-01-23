import React from "react";
import { 
  // Services Icons
  LayoutTemplate, Layers, Monitor, Search, FileCode, Smartphone, Globe, 
  ShoppingCart, CreditCard, Server, Cloud, Database, Users, BarChart, 
  Lock, Settings, ShieldCheck, Code, Terminal, Zap, Link as LinkIcon,
  // Industries Icons
  LayoutGrid, Briefcase, Truck, Plane, Stethoscope, Landmark, Car, 
  Music, Video, Dumbbell, RefreshCw, Star, MapPin, Bell, Shield, Box,
  Receipt, GraduationCap, Wallet, Home, Speaker, PlayCircle, HeartPulse,
  Navigation, Calendar, MessageSquare
} from "lucide-react";

// ==========================================
// 1. SERVICES DATA
// ==========================================
export const servicesData = [
  { 
    name: "UI/UX Designing", 
    slug: "ui-ux-designing", 
    desc: "We craft intuitive, engaging, and aesthetically pleasing user interfaces that ensure a seamless user experience.",
    heroImage: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Wireframing", desc: "Structural blueprints.", icon: <LayoutTemplate className="text-blue-500" /> },
      { title: "Prototyping", desc: "Interactive mockups.", icon: <Layers className="text-purple-500" /> },
      { title: "Mobile UI", desc: "Optimized for screens.", icon: <Monitor className="text-green-500" /> },
      { title: "User Research", desc: "Behavior analysis.", icon: <Search className="text-orange-500" /> },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Analyze brand & goals." },
      { step: "02", title: "Design", desc: "Create visual assets." },
      { step: "03", title: "Testing", desc: "Validate with users." },
    ],
    tools: ["Figma", "Adobe XD", "Sketch", "InVision"]
  },
  { 
    name: "Mobile App Development", 
    slug: "mobile-app-development", 
    desc: "High-performance native and cross-platform mobile applications tailored to your business.",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "iOS Apps", desc: "Native Swift apps.", icon: <Smartphone className="text-blue-500" /> },
      { title: "Android Apps", desc: "Kotlin/Java apps.", icon: <FileCode className="text-green-500" /> },
      { title: "Flutter", desc: "Cross-platform code.", icon: <Layers className="text-purple-500" /> },
      { title: "Maintenance", desc: "Updates & bug fixes.", icon: <Settings className="text-gray-500" /> },
    ],
    process: [
      { step: "01", title: "Strategy", desc: "Roadmap creation." },
      { step: "02", title: "Code", desc: "Agile development." },
      { step: "03", title: "Deploy", desc: "App Store launch." },
    ],
    tools: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  { 
    name: "Website Development", 
    slug: "website-development", 
    desc: "Responsive, fast, and SEO-friendly websites built with modern technologies.",
    heroImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Custom Dev", desc: "Tailored frontend coding.", icon: <Code className="text-indigo-500" /> },
      { title: "CMS", desc: "Easy content management.", icon: <LayoutTemplate className="text-blue-500" /> },
      { title: "PWA", desc: "App-like web experience.", icon: <Globe className="text-green-500" /> },
      { title: "API Integration", desc: "Third-party connections.", icon: <LinkIcon className="text-red-500" /> },
    ],
    process: [
      { step: "01", title: "Plan", desc: "Sitemap & tech stack." },
      { step: "02", title: "Build", desc: "Frontend & Backend." },
      { step: "03", title: "Launch", desc: "Deploy & SEO check." },
    ],
    tools: ["React", "Next.js", "Node.js", "WordPress"]
  },
  { 
    name: "Ecommerce Development", 
    slug: "ecommerce-development", 
    desc: "Scalable online stores with secure payment gateways and optimized user journeys.",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Storefronts", desc: "Custom themes & UI.", icon: <ShoppingCart className="text-orange-500" /> },
      { title: "Payments", desc: "Secure gateways.", icon: <CreditCard className="text-blue-500" /> },
      { title: "Inventory", desc: "Stock management.", icon: <Database className="text-purple-500" /> },
      { title: "Marketplace", desc: "Multi-vendor setups.", icon: <Users className="text-green-500" /> },
    ],
    process: [
      { step: "01", title: "Setup", desc: "Platform configuration." },
      { step: "02", title: "Integrate", desc: "Payment & Shipping." },
      { step: "03", title: "Optimize", desc: "Speed & Conversion." },
    ],
    tools: ["Shopify", "WooCommerce", "Magento", "Stripe"]
  },
  { 
    name: "SaaS Development", 
    slug: "saas-development", 
    desc: "Robust Software-as-a-Service solutions designed for scalability and security.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Multi-Tenancy", desc: "Single instance, many users.", icon: <Users className="text-blue-500" /> },
      { title: "Cloud Native", desc: "AWS/Azure infrastructure.", icon: <Cloud className="text-sky-500" /> },
      { title: "Billing", desc: "Subscription management.", icon: <CreditCard className="text-green-500" /> },
      { title: "API First", desc: "Extensible architecture.", icon: <Server className="text-purple-500" /> },
    ],
    process: [
      { step: "01", title: "Architect", desc: "Cloud structure design." },
      { step: "02", title: "MVP", desc: "Core feature build." },
      { step: "03", title: "Scale", desc: "Load balancing & security." },
    ],
    tools: ["AWS", "Docker", "Kubernetes", "PostgreSQL"]
  },
  { 
    name: "CRM Development", 
    slug: "crm-development", 
    desc: "Custom CRM tools to streamline customer relationship management.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "Leads", desc: "Tracking sales pipelines.", icon: <Users className="text-indigo-500" /> },
      { title: "Analytics", desc: "Visual data dashboards.", icon: <BarChart className="text-blue-500" /> },
      { title: "Automation", desc: "Task workflows.", icon: <Settings className="text-gray-500" /> },
      { title: "Security", desc: "Role-based access.", icon: <Lock className="text-red-500" /> },
    ],
    process: [
      { step: "01", title: "Consult", desc: "Workflow analysis." },
      { step: "02", title: "Build", desc: "Custom module dev." },
      { step: "03", title: "Train", desc: "Team onboarding." },
    ],
    tools: ["Salesforce", "HubSpot", "React", "Python"]
  },
  { 
    name: "Software Development", 
    slug: "software-development", 
    desc: "Tailor-made software solutions to address specific business challenges.",
    heroImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1200",
    features: [
      { title: "ERP", desc: "Enterprise resource planning.", icon: <Briefcase className="text-blue-500" /> },
      { title: "Modernization", desc: "Updating legacy systems.", icon: <ShieldCheck className="text-green-500" /> },
      { title: "Microservices", desc: "Decoupled architecture.", icon: <Server className="text-purple-500" /> },
      { title: "QA", desc: "Automated testing.", icon: <Terminal className="text-orange-500" /> },
    ],
    process: [
      { step: "01", title: "Specs", desc: "Requirement gathering." },
      { step: "02", title: "Dev", desc: "Iterative coding." },
      { step: "03", title: "Support", desc: "SLA maintenance." },
    ],
    tools: ["Java", ".NET", "Python", "Angular"]
  },
];

// ==========================================
// 2. INDUSTRIES DATA
// ==========================================
export const industriesData = [
  { 
    name: "On Demand App", 
    slug: "on-demand-app", 
    icon: <LayoutGrid size={20} className="text-blue-500" />, 
    tagline: "Instant Solutions",
    desc: "We build scalable on-demand applications that connect service providers with customers instantly.",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "$335B", label: "Market Size" },
      { value: "85%", label: "Mobile Usage" },
      { value: "10.9%", label: "Annual Growth" },
    ],
    subServices: [
      { title: "Taxi Booking", desc: "Uber-like dispatch.", icon: <Car className="text-yellow-500" /> },
      { title: "Food Delivery", desc: "DoorDash clones.", icon: <ShoppingCart className="text-orange-500" /> },
      { title: "Home Services", desc: "Handyman booking.", icon: <Briefcase className="text-blue-500" /> },
    ],
    features: [
      { title: "Tracking", desc: "Real-time GPS.", icon: <MapPin /> },
      { title: "Payments", desc: "Secure gateways.", icon: <Shield /> },
      { title: "Alerts", desc: "Push notifications.", icon: <Bell /> },
    ],
    compliance: [
      { name: "GDPR", desc: "Data Privacy" },
      { name: "PCI DSS", desc: "Secure Payments" },
    ]
  },
  { 
    name: "Laundry App", 
    slug: "laundry-app", 
    icon: <RefreshCw size={20} className="text-orange-500" />, 
    tagline: "Clean & Fast",
    desc: "Digitize your laundry business with custom pickup and delivery apps.",
    heroImage: "https://images.unsplash.com/photo-1517677208171-0bc12dd59915?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "$113B", label: "Global Market" },
      { value: "96%", label: "Retention Rate" },
      { value: "40%", label: "Efficiency" },
    ],
    subServices: [
      { title: "Dry Cleaning", desc: "Premium care.", icon: <Star className="text-blue-500" /> },
      { title: "Wash & Fold", desc: "Subscription.", icon: <Layers className="text-green-500" /> },
      { title: "Ironing", desc: "On-demand pressing.", icon: <Zap className="text-yellow-500" /> },
    ],
    features: [
      { title: "Schedule", desc: "Easy pickup slots.", icon: <Bell /> },
      { title: "Tracking", desc: "Order status.", icon: <Box /> },
      { title: "Payment", desc: "Cashless checkout.", icon: <CreditCard /> },
    ],
    compliance: [
      { name: "PCI DSS", desc: "Secure Payments" },
      { name: "Consumer Protection", desc: "Guarantees" },
    ]
  },
  { 
    name: "Travel App", 
    slug: "travel-app", 
    icon: <Plane size={20} className="text-sky-500" />, 
    tagline: "Journey Made Easy",
    desc: "Comprehensive travel booking and management solutions for agencies and travelers.",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "70%", label: "Mobile Bookings" },
      { value: "$800B", label: "Online Travel" },
      { value: "24/7", label: "Availability" },
    ],
    subServices: [
      { title: "Flight Booking", desc: "Real-time GDS.", icon: <Plane className="text-sky-500" /> },
      { title: "Hotel Reserve", desc: "Room inventory.", icon: <Home className="text-orange-500" /> },
      { title: "Tours", desc: "Package management.", icon: <MapPin className="text-green-500" /> },
    ],
    features: [
      { title: "Itinerary", desc: "Trip planning.", icon: <Calendar /> },
      { title: "Currency", desc: "Converter tools.", icon: <RefreshCw /> },
      { title: "GPS", desc: "Location guides.", icon: <Navigation /> },
    ],
    compliance: [
      { name: "GDPR", desc: "User Data" },
      { name: "PCI DSS", desc: "Payments" },
    ]
  },
  { 
    name: "Job Portal", 
    slug: "job-portal", 
    icon: <Briefcase size={20} className="text-indigo-600" />, 
    tagline: "Connect Talent",
    desc: "Platforms connecting job seekers with employers, featuring resume parsing and smart matching.",
    heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "50M+", label: "Active Resumes" },
      { value: "85%", label: "Mobile Apply" },
      { value: "3X", label: "Faster Hiring" },
    ],
    subServices: [
      { title: "Recruitment", desc: "ATS systems.", icon: <Users className="text-blue-500" /> },
      { title: "Freelance", desc: "Gig marketplace.", icon: <Briefcase className="text-green-500" /> },
      { title: "Video Interview", desc: "Remote hiring.", icon: <Video className="text-red-500" /> },
    ],
    features: [
      { title: "Search", desc: "Advanced filters.", icon: <Search /> },
      { title: "Resume", desc: "CV Parsing.", icon: <FileCode /> },
      { title: "Alerts", desc: "Job notifications.", icon: <Bell /> },
    ],
    compliance: [
      { name: "EEOC", desc: "Fair Hiring" },
      { name: "GDPR", desc: "Data Privacy" },
    ]
  },
  { 
    name: "Fintech App", 
    slug: "fintech-app", 
    icon: <Landmark size={20} className="text-blue-700" />, 
    tagline: "Future of Finance",
    desc: "Secure financial technology apps for banking, investing, and payments.",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "$305B", label: "Market Value" },
      { value: "64%", label: "Adoption Rate" },
      { value: "99.9%", label: "Uptime" },
    ],
    subServices: [
      { title: "Banking", desc: "Neo-bank apps.", icon: <Landmark className="text-blue-500" /> },
      { title: "Investment", desc: "Stock trading.", icon: <BarChart className="text-green-500" /> },
      { title: "Lending", desc: "P2P loans.", icon: <CreditCard className="text-yellow-500" /> },
    ],
    features: [
      { title: "Security", desc: "Biometric login.", icon: <ShieldCheck /> },
      { title: "Transfers", desc: "Instant send.", icon: <Zap /> },
      { title: "History", desc: "Spending analytics.", icon: <Receipt /> },
    ],
    compliance: [
      { name: "PCI DSS", desc: "Payments" },
      { name: "KYC/AML", desc: "Identity Check" },
    ]
  },
  { 
    name: "Healthcare App", 
    slug: "healthcare-app", 
    icon: <Stethoscope size={20} className="text-red-500" />, 
    tagline: "Digital Health",
    desc: "Telemedicine and patient management apps compliant with healthcare regulations.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "40%", label: "Telehealth Growth" },
      { value: "$185B", label: "mHealth Market" },
      { value: "50%", label: "Efficiency" },
    ],
    subServices: [
      { title: "Telemedicine", desc: "Video consults.", icon: <Video className="text-blue-500" /> },
      { title: "Pharmacy", desc: "Medicine delivery.", icon: <Truck className="text-green-500" /> },
      { title: "EHR", desc: "Medical records.", icon: <Database className="text-red-500" /> },
    ],
    features: [
      { title: "Appointments", desc: "Booking system.", icon: <Calendar /> },
      { title: "Chat", desc: "Doctor messaging.", icon: <MessageSquare /> },
      { title: "Prescriptions", desc: "Digital Rx.", icon: <FileCode /> },
    ],
    compliance: [
      { name: "HIPAA", desc: "Patient Data" },
      { name: "HL7", desc: "Interoperability" },
    ]
  },
  { 
    name: "Price Comparison", 
    slug: "price-comparison", 
    icon: <Receipt size={20} className="text-teal-500" />, 
    tagline: "Best Deals Instantly",
    desc: "Aggregator platforms allowing users to compare prices across different vendors in real-time.",
    heroImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "60%", label: "Users Compare" },
      { value: "200M", label: "Products Listed" },
      { value: "15%", label: "Savings Avg" },
    ],
    subServices: [
      { title: "Flights", desc: "Fare aggregators.", icon: <Plane className="text-sky-500" /> },
      { title: "Shopping", desc: "Product comparison.", icon: <ShoppingCart className="text-orange-500" /> },
      { title: "Insurance", desc: "Policy rates.", icon: <Shield className="text-blue-500" /> },
    ],
    features: [
      { title: "Scraping", desc: "Real-time data.", icon: <Database /> },
      { title: "Alerts", desc: "Price drops.", icon: <Bell /> },
      { title: "Reviews", desc: "User ratings.", icon: <Star /> },
    ],
    compliance: [
      { name: "GDPR", desc: "User Data" },
      { name: "FTC", desc: "Advertising" },
    ]
  },
  { 
    name: "Education App", 
    slug: "education-app", 
    icon: <GraduationCap size={20} className="text-purple-500" />, 
    tagline: "Smart Learning",
    desc: "E-learning platforms and LMS solutions for schools, universities, and training centers.",
    heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "$375B", label: "EdTech Market" },
      { value: "90%", label: "Student Access" },
      { value: "40%", label: "Cost Savings" },
    ],
    subServices: [
      { title: "LMS", desc: "Management systems.", icon: <Server className="text-blue-500" /> },
      { title: "Live Class", desc: "Virtual classroom.", icon: <Video className="text-red-500" /> },
      { title: "Gamification", desc: "Kids learning.", icon: <Star className="text-yellow-500" /> },
    ],
    features: [
      { title: "Quizzes", desc: "Interactive tests.", icon: <FileCode /> },
      { title: "Certificates", desc: "Digital awards.", icon: <ShieldCheck /> },
      { title: "Offline", desc: "Download content.", icon: <Cloud /> },
    ],
    compliance: [
      { name: "FERPA", desc: "Student Privacy" },
      { name: "COPPA", desc: "Kids Safety" },
    ]
  },
  { 
    name: "E-Wallet App", 
    slug: "e-wallet-app", 
    icon: <Wallet size={20} className="text-green-500" />, 
    tagline: "Cashless Freedom",
    desc: "Digital wallet solutions for fast, secure, and convenient cashless transactions.",
    heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "4B+", label: "Users Globally" },
      { value: "$10T", label: "Transaction Vol" },
      { value: "Instant", label: "Speed" },
    ],
    subServices: [
      { title: "P2P", desc: "Peer payments.", icon: <Users className="text-blue-500" /> },
      { title: "Merchant", desc: "QR payments.", icon: <ShoppingCart className="text-orange-500" /> },
      { title: "Crypto", desc: "Blockchain wallet.", icon: <Lock className="text-purple-500" /> },
    ],
    features: [
      { title: "QR Scan", desc: "Fast pay.", icon: <Zap /> },
      { title: "NFC", desc: "Tap to pay.", icon: <Smartphone /> },
      { title: "Rewards", desc: "Loyalty points.", icon: <Star /> },
    ],
    compliance: [
      { name: "PCI DSS", desc: "Security" },
      { name: "Tokenization", desc: "Data Masking" },
    ]
  },
  { 
    name: "Logistics App", 
    slug: "logistics-app", 
    icon: <Truck size={20} className="text-yellow-600" />, 
    tagline: "Streamlined Supply Chain",
    desc: "Supply chain and fleet management apps to optimize logistics operations.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "15%", label: "Fuel Saved" },
      { value: "99%", label: "On-Time Delivery" },
      { value: "$15T", label: "Industry Value" },
    ],
    subServices: [
      { title: "Fleet Mgmt", desc: "Vehicle tracking.", icon: <Truck className="text-blue-500" /> },
      { title: "Warehouse", desc: "Inventory control.", icon: <Box className="text-orange-500" /> },
      { title: "Last Mile", desc: "Delivery routing.", icon: <MapPin className="text-red-500" /> },
    ],
    features: [
      { title: "GPS", desc: "Live location.", icon: <Navigation /> },
      { title: "Route Opt", desc: "AI planning.", icon: <Settings /> },
      { title: "POD", desc: "Proof of delivery.", icon: <FileCode /> },
    ],
    compliance: [
      { name: "ELD", desc: "Electronic Logging" },
      { name: "GDPR", desc: "Driver Data" },
    ]
  },
  { 
    name: "Real Estate App", 
    slug: "real-estate-app", 
    icon: <Home size={20} className="text-cyan-600" />, 
    tagline: "Find Your Home",
    desc: "Property listing and management apps for agents, buyers, and renters.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "90%", label: "Online Search" },
      { value: "300%", label: "Inquiry Boost" },
      { value: "AR/VR", label: "Virtual Tours" },
    ],
    subServices: [
      { title: "Listings", desc: "Property marketplace.", icon: <Home className="text-blue-500" /> },
      { title: "Rental", desc: "Tenant management.", icon: <Briefcase className="text-green-500" /> },
      { title: "Mortgage", desc: "Loan calculators.", icon: <Landmark className="text-yellow-500" /> },
    ],
    features: [
      { title: "Map View", desc: "Location search.", icon: <MapPin /> },
      { title: "Virtual Tour", desc: "3D walkthrough.", icon: <Video /> },
      { title: "Chat", desc: "Agent connect.", icon: <MessageSquare /> },
    ],
    compliance: [
      { name: "FHA", desc: "Housing Laws" },
      { name: "ADA", desc: "Accessibility" },
    ]
  },
  { 
    name: "Music Streaming", 
    slug: "music-streaming", 
    icon: <Music size={20} className="text-orange-600" />, 
    tagline: "Uninterrupted Beats",
    desc: "Audio streaming apps with playlist management and offline playback capabilities.",
    heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "500M+", label: "Subscribers" },
      { value: "$25B", label: "Revenue" },
      { value: "HI-FI", label: "Audio Quality" },
    ],
    subServices: [
      { title: "Streaming", desc: "Live audio.", icon: <PlayCircle className="text-red-500" /> },
      { title: "Podcast", desc: "Audio shows.", icon: <Speaker className="text-blue-500" /> },
      { title: "Radio", desc: "Live stations.", icon: <Music className="text-yellow-500" /> },
    ],
    features: [
      { title: "Offline", desc: "Download mode.", icon: <Cloud /> },
      { title: "Playlists", desc: "Custom mixes.", icon: <Settings /> },
      { title: "Lyrics", desc: "Live sync.", icon: <FileCode /> },
    ],
    compliance: [
      { name: "DMCA", desc: "Copyright" },
      { name: "GDPR", desc: "User Data" },
    ]
  },
  { 
    name: "Media App", 
    slug: "media-app", 
    icon: <Video size={20} className="text-purple-600" />, 
    tagline: "Stream Everywhere",
    desc: "Video streaming and content distribution platforms for creators and media houses.",
    heroImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "82%", label: "Internet Traffic" },
      { value: "4K", label: "Resolution" },
      { value: "Global", label: "Reach" },
    ],
    subServices: [
      { title: "OTT", desc: "Netflix clones.", icon: <Video className="text-red-500" /> },
      { title: "Live", desc: "Event broadcasting.", icon: <PlayCircle className="text-blue-500" /> },
      { title: "Shorts", desc: "Social video.", icon: <Smartphone className="text-purple-500" /> },
    ],
    features: [
      { title: "Casting", desc: "Chromecast/Airplay.", icon: <Monitor /> },
      { title: "Adaptive", desc: "Bitrate stream.", icon: <Settings /> },
      { title: "DRM", desc: "Content protection.", icon: <Lock /> },
    ],
    compliance: [
      { name: "DRM", desc: "Copyright" },
      { name: "COPPA", desc: "Kids Safety" },
    ]
  },
  { 
    name: "Fitness Health", 
    slug: "fitness-health", 
    icon: <Dumbbell size={20} className="text-red-600" />, 
    tagline: "Train Smart",
    desc: "Workout tracking and diet planning apps to help users achieve their health goals.",
    heroImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "30%", label: "Market Growth" },
      { value: "1B+", label: "Downloads" },
      { value: "AI", label: "Coaching" },
    ],
    subServices: [
      { title: "Workout", desc: "Gym guides.", icon: <Dumbbell className="text-blue-500" /> },
      { title: "Diet", desc: "Calorie counter.", icon: <HeartPulse className="text-green-500" /> },
      { title: "Yoga", desc: "Meditation apps.", icon: <Users className="text-purple-500" /> },
    ],
    features: [
      { title: "Wearables", desc: "Watch sync.", icon: <Smartphone /> },
      { title: "Goals", desc: "Progress track.", icon: <BarChart /> },
      { title: "Video", desc: "Live classes.", icon: <Video /> },
    ],
    compliance: [
      { name: "GDPR", desc: "Health Data" },
      { name: "HIPAA", desc: "If Medical" },
    ]
  },
  { 
    name: "Car Rental App", 
    slug: "car-rental-app", 
    icon: <Car size={20} className="text-amber-600" />, 
    tagline: "Drive Your Way",
    desc: "Booking systems for car rental agencies with fleet tracking and availability management.",
    heroImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "$120B", label: "Market Size" },
      { value: "Instant", label: "Booking" },
      { value: "Paperless", label: "Process" },
    ],
    subServices: [
      { title: "Self Drive", desc: "Hourly rentals.", icon: <Car className="text-blue-500" /> },
      { title: "Corporate", desc: "Business fleet.", icon: <Briefcase className="text-gray-500" /> },
      { title: "Luxury", desc: "Premium cars.", icon: <Star className="text-yellow-500" /> },
    ],
    features: [
      { title: "Documents", desc: "Upload license.", icon: <FileCode /> },
      { title: "Keyless", desc: "App unlock.", icon: <Lock /> },
      { title: "GPS", desc: "Car finder.", icon: <MapPin /> },
    ],
    compliance: [
      { name: "Insurance", desc: "Coverage" },
      { name: "GDPR", desc: "User Data" },
    ]
  },
];


// ... existing imports and data

// ==========================================
// 4. LOCATIONS DATA
// ==========================================
export const locationsData = [
  {
    id: 1,
    name: "Navi Mumbai",
    address: "Sadguru kripa 301 , plot no 54A sector 19 Khargahr , Navi Mumbai",
    number:+91-8976280708,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop", // Hawa Mahal
  },
  {
    id: 2,
    name: "Malaysia",
    address: "Scott sentral B11-03 , kuala Lumpur, Malaysia",
    number:+60-187699352,
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800&auto=format&fit=crop", // Vidhana Soudha
  },
  {
    id: 3,
    name: "United Kingdo",
    address: "123 Portland Street , LN57LG. Lincoln. United Kingdom",
    number:+60-656565655,
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=800&auto=format&fit=crop", // Chureito Pagoda
  },
  {
    id: 4,
    name: "New Zealand",
    address: "2/271 Ormiston road, Flat Bush, Auckland, 2019, New Zealand",
    number:+64-272581328,
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=800&auto=format&fit=crop", // Statue of Liberty
  },
];