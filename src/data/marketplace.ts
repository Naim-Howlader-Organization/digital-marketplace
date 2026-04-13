export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  categorySlug: string;
  image: string;
  features: string[];
  badge?: string;
  downloads?: number;
  demoUrl?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  icon: string;
  count: number;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  review: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "1",
    slug: "saas-software",
    name: "SaaS Software",
    icon: "Cloud",
    count: 1240,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "2",
    slug: "erp-solutions",
    name: "ERP Solutions",
    icon: "Briefcase",
    count: 890,
    color: "from-violet-500 to-purple-400",
  },
  {
    id: "3",
    slug: "pos-systems",
    name: "POS Systems",
    icon: "Megaphone",
    count: 670,
    color: "from-orange-500 to-amber-400",
  },
  {
    id: "4",
    slug: "ecommerce-website",
    name: "E-commerce Website",
    icon: "Layout",
    count: 2100,
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: "5",
    slug: "school-management",
    name: "School Management",
    icon: "Palette",
    count: 560,
    color: "from-pink-500 to-rose-400",
  },
  {
    id: "6",
    slug: "wordpress-website",
    name: "WordPress Website",
    icon: "Puzzle",
    count: 1830,
    color: "from-indigo-500 to-blue-400",
  },
  {
    id: "7",
    slug: "custom-software",
    name: "Custom Software",
    icon: "Zap",
    count: 430,
    color: "from-yellow-500 to-orange-400",
  },
  {
    id: "8",
    slug: "digital-services",
    name: "Digital Services",
    icon: "Globe",
    count: 780,
    color: "from-cyan-500 to-blue-400",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Complete POS Solution",
    description:
      "Complete POS Solution is a cloud-based SaaS Point of Sale system designed to simplify retail and business operations. Manage sales, inventory, customers, and staff from anywhere with real-time synchronization, powerful analytics, and secure cloud storage. Perfect for retail shops, restaurants, and growing businesses.",
    shortDescription: "Cloud-based SaaS POS for modern businesses",
    price: 29,
    originalPrice: 49,
    rating: 4.7,
    reviews: 512,
    category: "SaaS Software",
    categorySlug: "saas-software",
    image: "images/services/Total-Biz-POS.jpeg",
    badge: "Popular",
    features: [
      "Fast sales & billing system",
      "Inventory & stock management",
      "Barcode scanning support",
      "Sales reports & analytics",
      "Customer & supplier management",
      "Multi-store & user management",
    ],
    downloads: 18600,
  },
  {
    id: "2",
    name: "EduMaster SMS",
    description:
      "EduMaster SMS is a comprehensive school management software designed to manage students, teachers, classes, exams, and attendance seamlessly. It provides a centralized dashboard, reporting tools, and parent-student communication features for modern educational institutions.",
    shortDescription: "Complete school management software",
    price: 79,
    rating: 4.8,
    reviews: 432,
    category: "UI Kits",
    categorySlug: "school-management",
    image: "images/services/EduMaster-SMS.jpeg",
    badge: "Top Rated",
    features: [
      "Student & teacher management",
      "Attendance & exam tracking",
      "Class scheduling & timetables",
      "Parent-student communication",
      "Performance reports & analytics",
      "Fee & finance management",
    ],
    downloads: 6100,
  },
  {
    id: "3",
    name: "RetailFlow POS",
    description:
      "RetailFlow POS is a smart point-of-sale system designed to simplify retail and store operations. It helps businesses manage sales transactions, inventory tracking, customer records, and real-time reports through an easy-to-use interface built for modern retail environments.",
    shortDescription: "Smart POS system for retail management",
    price: 29,
    originalPrice: 49,
    rating: 4.7,
    reviews: 231,
    category: "Marketing Tools",
    categorySlug: "pos-systems",
    image: "images/services/RetailFlow-POS.jpeg",
    features: [
      "Fast sales & billing system",
      "Inventory & stock tracking",
      "Barcode scanning support",
      "Customer purchase history",
      "Daily sales reports",
      "Multi-user cashier management",
    ],
    downloads: 6700,
  },
  {
    id: "4",
    name: "EcomPOS Solution",
    description:
      "EcomPOS Solution is a modern, responsive landing page designed for Ecommerce businesses integrated with POS systems. Perfect for online stores, retail shops, and startups, it highlights products, features seamless checkout, and showcases analytics dashboards with attractive UI components.",
    shortDescription: "SaaS Ecommerce + POS landing page template",
    price: 29,
    rating: 4.7,
    reviews: 210,
    category: "Website Templates",
    categorySlug: "ecommerce-website",
    image: "images/services/EcomPOS-Solution.jpeg",
    features: [
      "Responsive design for web & mobile",
      "Ecommerce product showcase",
      "POS integration showcase",
      "Fast loading & SEO optimized",
      "Tailwind CSS + React components",
      "Animated sections & UI effects",
    ],
    downloads: 15800,
  },
  {
    id: "5",
    name: "CustomSoft Pro",
    description:
      "CustomSoft Pro is a fully customizable software solution designed to meet unique business requirements. Whether it’s inventory management, CRM, workflow automation, or analytics, this platform can be tailored to fit any organization’s processes with minimal coding effort.",
    shortDescription: "Fully customizable software for any business need",
    price: 79,
    originalPrice: 149,
    rating: 4.9,
    reviews: 326,
    category: "Automation Tools",
    categorySlug: "custom-software",
    image: "images/services/CustomSoft-Pro.jpeg",
    badge: "Top Rated",
    features: [
      "Customizable modules for any process",
      "Flexible workflow automation",
      "Analytics & reporting tools",
      "Multi-user & role-based access",
      "Integrations with existing apps",
      "Minimal coding required",
    ],
    downloads: 7400,
  },
  {
    id: "6",
    name: "Garments ERP",
    description:
      "Garments ERP is a powerful all-in-one enterprise resource planning platform designed to manage business operations from a single dashboard. It integrates finance, inventory, HR, sales, and procurement with real-time insights to help companies streamline workflows and improve decision-making.",
    shortDescription: "All-in-one ERP for modern business operations",
    price: 79,
    rating: 4.7,
    reviews: 312,
    category: "Business Tools",
    categorySlug: "erp-solutions",
    image: "images/services/Bizcore-ERP.jpeg",
    features: [
      "Inventory & stock management",
      "Accounting & financial tracking",
      "HR & payroll management",
      "Sales & purchase management",
      "Business reports & analytics",
      "Role-based user access",
    ],
    downloads: 9100,
  },
  {
    id: "7",
    name: "Ship Breaking ERP",
    description:
      "Ship Breaking ERP is a specialized enterprise resource planning system built for ship recycling and breaking yards. It helps manage vessel purchases, dismantling operations, scrap inventory, workforce management, and financial tracking from a centralized platform with real-time reporting.",
    shortDescription: "ERP solution for ship recycling & scrap management",
    price: 89,
    rating: 4.6,
    reviews: 184,
    category: "Business Tools",
    categorySlug: "erp-solutions",
    image: "images/services/Ship-Breaking-ERP.jpeg",
    features: [
      "Vessel purchase & valuation management",
      "Scrap inventory & material tracking",
      "Yard operation & dismantling workflow",
      "Worker & contractor management",
      "Sales & scrap distribution tracking",
      "Operational reports & financial analytics",
    ],
    downloads: 5300,
  },
  {
    id: "8",
    name: "Flexi POS",
    description:
      "Flexi POS is a versatile point-of-sale system designed to adapt to any type of business. Developers and business owners can easily configure it for supershops, garages, mobile stores, electronics shops, and more. It provides powerful tools for sales processing, inventory management, customer tracking, and real-time reporting in one customizable platform.",
    shortDescription: "Flexible POS system for any business type",
    price: 44,
    originalPrice: 69,
    rating: 4.6,
    reviews: 198,
    category: "Marketing Tools",
    categorySlug: "pos-systems",
    image: "images/services/Flexi-POS.jpeg",
    features: [
      "Customizable for any business type",
      "Sales & billing management",
      "Inventory & stock control",
      "Customer & supplier management",
      "Role-based staff access",
      "Detailed sales reports & analytics",
    ],
    downloads: 5600,
  },
  {
    id: "9",
    name: "FitLife Gym WP",
    description:
      "FitLife Gym WP is a complete WordPress website for fitness centers and gyms. It includes class schedules, trainer profiles, membership plans, event calendars, and online booking features for a seamless fitness experience.",
    shortDescription: "Full WordPress website for gyms & fitness centers",
    price: 89,
    rating: 4.8,
    reviews: 198,
    category: "WordPress Plugins",
    categorySlug: "wordpress-website",
    image: "images/services/FitLife-Gym-WP.jpeg",
    features: [
      "Class schedules & booking system",
      "Trainer & staff profiles",
      "Membership plans & pricing",
      "Event calendar & news",
      "Responsive & modern UI",
      "SEO optimized & fast loading",
    ],
    downloads: 6200,
  },
  {
    id: "10",
    name: "MultiVendor Ecommerce",
    description:
      "MultiVendor Ecommerce is a modern, responsive landing page designed for online marketplaces. Perfect for multi-vendor stores, digital products, and startups, it showcases vendor products, smooth checkout, ratings, and analytics dashboards to boost sales and engagement.",
    shortDescription: "Complete multi-vendor ecommerce website solution",
    price: 39,
    rating: 4.8,
    reviews: 245,
    category: "Website Templates",
    categorySlug: "ecommerce-website",
    image: "images/services/Multivendor-Ecommerce.jpeg",
    features: [
      "Responsive design for web & mobile",
      "Multi-vendor product showcase",
      "Vendor dashboards & analytics",
      "Smooth checkout experience",
      "SEO optimized & fast loading",
      "Tailwind CSS + React components with animations",
    ],
    downloads: 17200,
  },
  {
    id: "11",
    name: "ProFloor Services WP",
    description:
      "ProFloor Services WP is a professional WordPress website for hardwood floor refinishing, restoration, and installation companies. Includes service pages, project galleries, customer testimonials, and booking request forms.",
    shortDescription: "Complete WordPress website for flooring services",
    price: 99,
    rating: 4.7,
    reviews: 145,
    category: "WordPress Plugins",
    categorySlug: "wordpress-website",
    image: "images/services/ProFloor-Services-WP.jpeg",
    features: [
      "Service pages & detailed descriptions",
      "Project gallery & portfolio",
      "Customer testimonials",
      "Booking & inquiry forms",
      "Responsive & modern design",
      "SEO optimized for local search",
    ],
    downloads: 4100,
  },
  {
    id: "18",
    name: "GourmetBites WP",
    description:
      "GourmetBites WP is a complete WordPress website for restaurants and cafes. It includes menu pages, online reservation system, chef profiles, event promotions, and food gallery to showcase your culinary offerings.",
    shortDescription: "Full WordPress website for restaurants & cafes",
    price: 89,
    rating: 4.9,
    reviews: 220,
    category: "WordPress Plugins",
    categorySlug: "wordpress-website",
    image: "images/services/GourmetBites-WP.jpeg",
    features: [
      "Menu & pricing pages",
      "Online reservation system",
      "Chef & staff profiles",
      "Event promotions & specials",
      "Food gallery & testimonials",
      "Responsive & SEO optimized",
    ],
    downloads: 5800,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Tanvir Hasan",
    role: "Founder at DhakaTech Solutions",
    avatar: "images/testimonials/Person-BD1.webp",
    review:
      "এই মার্কেটপ্লেস থেকে আমাদের ব্যবসার জন্য প্রয়োজনীয় ডিজিটাল টুল খুব সহজে পেয়েছি। অনেক সময় এবং খরচ বাঁচিয়েছে, সত্যিই দারুণ একটি প্ল্যাটফর্ম।",
    rating: 5,
  },
  {
    id: "2",
    name: "Emon Chowdhury",
    role: "Marketing Manager, GrowFast BD",
    avatar: "images/testimonials/Person-BD2.webp",
    review:
      "এখানকার ডিজিটাল প্রোডাক্টগুলোর মান খুবই ভালো। যেগুলো কিনেছি সবগুলোই কাজের ক্ষেত্রে প্রত্যাশার চেয়ে বেশি উপকার করেছে।",
    rating: 5,
  },
  {
    id: "3",
    name: "Mahin Ahmed",
    role: "Freelance UI/UX Designer",
    avatar: "images/testimonials/Person-BD3.webp",
    review:
      "ডিজাইনার হিসেবে এখানকার টেমপ্লেট আর UI কিটগুলো আমার অনেক সময় বাঁচিয়েছে। কাজের মানও খুব প্রফেশনাল লেগেছে।",
    rating: 4,
  },
  {
    id: "4",
    name: "Arman Rahman",
    role: "CTO at SoftEdge Bangladesh",
    avatar: "images/testimonials/Person-BD4.webp",
    review:
      "আমাদের টিমের জন্য এখান থেকে নেওয়া কয়েকটি সফটওয়্যার নিয়মিত ব্যবহার করছি। কোয়ালিটি এবং সাপোর্ট দুইটাই সন্তোষজনক।",
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "1",
    name: "Basic LLC Package",
    price: 280,
    period: "one-time",
    description: "Ideal for individuals who only need US LLC registration",
    features: [
      "US LLC formation",
      "State filing and document preparation",
      "Company Formation Certificate",
      "Digital documents in PDF format",
      "Submission and processing",
      "US business address",
    ],
    cta: "Get Started",
  },
  {
    id: "2",
    name: "Complete LLC Business Package",
    price: 359,
    period: "one-time",
    description: "Everything you need to start your business",
    features: [
      "US LLC registration",
      "EIN (Tax ID) filing with IRS",
      "PayPal & Stripe activation guide",
      "USA bank account & debit card setup guide",
      "Tax filing and full legal support",
      "US phone number (1st month) & US address",
    ],
    cta: "Start Complete Package",
    popular: true,
  },
  {
    id: "3",
    name: "ITIN Processing Package",
    price: 175,
    period: "one-time",
    description: "Get full support for ITIN application and IRS filing",
    features: [
      "Form W-7 completion and submission",
      "IRS filing and tracking",
      "Passport notarization guidance",
      "Tax return / LLC document assistance",
      "Follow-up and problem resolution support",
    ],
    cta: "Start ITIN Package",
  },
];

export const posPricingPlans: PricingPlan[] = [
  {
    id: "1",
    name: "Basic",
    price: 700,
    period: "month",
    description:
      "Perfect for small shops and startups to manage sales and inventory efficiently.",
    features: [
      "1 outlet",
      "Up to 500 products",
      "800 customers & suppliers",
      "3 accounts",
      "800 brands & categories",
      "Unlimited sales & purchases",
    ],
    cta: "Start Basic Plan",
  },
  {
    id: "2",
    name: "Medium",
    price: 1000,
    period: "month",
    description:
      "Ideal for growing businesses with multiple outlets and higher inventory needs.",
    features: [
      "2 outlets",
      "Up to 1000 products",
      "1500 customers & suppliers",
      "5 accounts",
      "1200 brands & categories",
      "Unlimited sales & purchases",
    ],
    cta: "Start Medium Plan",
    popular: true,
  },
  {
    id: "3",
    name: "Premium",
    price: 1800,
    period: "month",
    description:
      "Best for large businesses, includes CRM & HRM for complete management.",
    features: [
      "3 outlets",
      "Up to 2500 products",
      "2000 customers & suppliers",
      "8 accounts",
      "200 brands & categories",
      "Unlimited sales & purchases",
      "CRM system",
      "HRM system",
    ],
    cta: "Start Premium Plan",
  },
];

export const stats = [
  { label: "Products", value: 10000, suffix: "+" },
  { label: "Developers", value: 5000, suffix: "+" },
  { label: "Customers", value: 100000, suffix: "+" },
  { label: "Categories", value: 50, suffix: "+" },
];

export const benefits = [
  {
    icon: "Shield",
    title: "Secure Payments",
    description: "Enterprise-grade encryption for all transactions",
  },
  {
    icon: "Download",
    title: "Instant Downloads",
    description: "Get your products immediately after purchase",
  },
  {
    icon: "BadgeCheck",
    title: "Verified Creators",
    description: "Every seller is vetted and verified",
  },
  {
    icon: "Infinity",
    title: "Lifetime Access",
    description: "Buy once, access forever with free updates",
  },
  {
    icon: "RefreshCw",
    title: "Regular Updates",
    description: "Products are continuously improved",
  },
  {
    icon: "Headphones",
    title: "24/7 Support",
    description: "Round-the-clock customer assistance",
  },
];
