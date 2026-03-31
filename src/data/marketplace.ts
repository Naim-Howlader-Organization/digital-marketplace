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
    slug: "business-tools",
    name: "Business Tools",
    icon: "Briefcase",
    count: 890,
    color: "from-violet-500 to-purple-400",
  },
  {
    id: "3",
    slug: "marketing-tools",
    name: "Marketing Tools",
    icon: "Megaphone",
    count: 670,
    color: "from-orange-500 to-amber-400",
  },
  {
    id: "4",
    slug: "website-templates",
    name: "Website Templates",
    icon: "Layout",
    count: 2100,
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: "5",
    slug: "ui-kits",
    name: "UI Kits",
    icon: "Palette",
    count: 560,
    color: "from-pink-500 to-rose-400",
  },
  {
    id: "6",
    slug: "wordpress-plugins",
    name: "WordPress Plugins",
    icon: "Puzzle",
    count: 1830,
    color: "from-indigo-500 to-blue-400",
  },
  {
    id: "7",
    slug: "automation-tools",
    name: "Automation Tools",
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
    name: "CloudFlow CRM",
    description:
      "A powerful cloud-based CRM solution designed to streamline your sales pipeline, manage customer relationships, and boost team productivity. Features AI-powered insights and seamless integrations.",
    shortDescription: "AI-powered CRM for modern sales teams",
    price: 49,
    originalPrice: 79,
    rating: 4.8,
    reviews: 324,
    category: "SaaS Software",
    categorySlug: "saas-software",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    badge: "Best Seller",
    features: [
      "AI-powered lead scoring",
      "Pipeline management",
      "Email automation",
      "Analytics dashboard",
      "Team collaboration",
      "API integrations",
    ],
    downloads: 12400,
  },
  {
    id: "2",
    name: "DesignPro UI Kit",
    description:
      "A comprehensive UI kit with 500+ carefully crafted components, 100+ page templates, and a complete design system for Figma and Sketch.",
    shortDescription: "500+ components for modern web apps",
    price: 39,
    rating: 4.9,
    reviews: 567,
    category: "UI Kits",
    categorySlug: "ui-kits",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop",
    badge: "Popular",
    features: [
      "500+ components",
      "100+ templates",
      "Dark & light mode",
      "Figma & Sketch",
      "Auto-layout",
      "Design tokens",
    ],
    downloads: 8900,
  },
  {
    id: "3",
    name: "AutoMailer Pro",
    description:
      "Advanced email marketing automation platform with AI-driven personalization, A/B testing, and detailed analytics to maximize your campaign performance.",
    shortDescription: "Smart email marketing automation",
    price: 29,
    originalPrice: 49,
    rating: 4.7,
    reviews: 231,
    category: "Marketing Tools",
    categorySlug: "marketing-tools",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    features: [
      "AI personalization",
      "A/B testing",
      "Drag & drop builder",
      "Advanced analytics",
      "Segmentation",
      "Deliverability tools",
    ],
    downloads: 6700,
  },
  {
    id: "4",
    name: "LaunchKit Template",
    description:
      "A beautifully designed, conversion-optimized landing page template perfect for SaaS products, startups, and digital products.",
    shortDescription: "High-converting SaaS landing page",
    price: 19,
    rating: 4.6,
    reviews: 189,
    category: "Website Templates",
    categorySlug: "website-templates",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    features: [
      "Responsive design",
      "SEO optimized",
      "Fast loading",
      "Tailwind CSS",
      "React components",
      "Animation effects",
    ],
    downloads: 15200,
  },
  {
    id: "5",
    name: "TaskFlow Engine",
    description:
      "Powerful workflow automation tool that connects your apps and automates repetitive tasks without coding.",
    shortDescription: "No-code workflow automation",
    price: 59,
    originalPrice: 99,
    rating: 4.8,
    reviews: 412,
    category: "Automation Tools",
    categorySlug: "automation-tools",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    badge: "Trending",
    features: [
      "500+ integrations",
      "Visual workflow builder",
      "Conditional logic",
      "Scheduling",
      "Webhooks",
      "Team workspaces",
    ],
    downloads: 9800,
  },
  {
    id: "6",
    name: "AnalyticsDash",
    description:
      "Real-time business analytics dashboard with customizable widgets, automated reports, and data visualization tools.",
    shortDescription: "Real-time analytics & reporting",
    price: 69,
    rating: 4.7,
    reviews: 276,
    category: "Business Tools",
    categorySlug: "business-tools",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    features: [
      "Real-time data",
      "Custom dashboards",
      "Automated reports",
      "Data export",
      "Team sharing",
      "API access",
    ],
    downloads: 7400,
  },
  {
    id: "7",
    name: "SEO PowerSuite",
    description:
      "All-in-one SEO toolkit with keyword research, rank tracking, site auditing, and backlink analysis.",
    shortDescription: "Complete SEO toolkit",
    price: 44,
    originalPrice: 69,
    rating: 4.6,
    reviews: 198,
    category: "Marketing Tools",
    categorySlug: "marketing-tools",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    features: [
      "Keyword research",
      "Rank tracking",
      "Site audit",
      "Backlink analysis",
      "Competitor analysis",
      "Content optimization",
    ],
    downloads: 5600,
  },
  {
    id: "8",
    name: "FormCraft Plugin",
    description:
      "Advanced WordPress form builder plugin with conditional logic, multi-step forms, and payment integrations.",
    shortDescription: "Advanced WordPress form builder",
    price: 24,
    rating: 4.5,
    reviews: 342,
    category: "WordPress Plugins",
    categorySlug: "wordpress-plugins",
    image:
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&h=400&fit=crop",
    features: [
      "Drag & drop builder",
      "Conditional logic",
      "Payment integration",
      "Multi-step forms",
      "Email notifications",
      "Anti-spam",
    ],
    downloads: 21000,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CEO at TechStart",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    review:
      "This marketplace has been a game-changer for our startup. We found all the tools we needed in one place, saving us months of development time.",
    rating: 5,
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "Head of Marketing, ScaleUp",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    review:
      "The quality of digital products here is outstanding. Every tool we've purchased has exceeded our expectations.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Freelance Designer",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    review:
      "As a designer, the UI kits and templates saved me countless hours. The marketplace curation is top-notch.",
    rating: 4,
  },
  {
    id: "4",
    name: "David Park",
    role: "CTO at CloudNine",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    review:
      "We've integrated several SaaS tools from this marketplace into our stack. The quality and support are exceptional.",
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "1",
    name: "Starter",
    price: 0,
    period: "forever",
    description: "Perfect for individuals exploring digital products",
    features: [
      "Browse all products",
      "5 free downloads/month",
      "Community support",
      "Basic analytics",
      "Email notifications",
    ],
    cta: "Get Started Free",
  },
  {
    id: "2",
    name: "Pro",
    price: 29,
    period: "month",
    description: "For professionals and growing teams",
    features: [
      "Unlimited downloads",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "API access",
      "Custom integrations",
      "Early access to new products",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    id: "3",
    name: "Enterprise",
    price: 99,
    period: "month",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom licensing",
      "SSO & SAML",
      "SLA guarantee",
      "Volume discounts",
      "White-label options",
      "Custom development",
    ],
    cta: "Contact Sales",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Must-Have SaaS Tools for 2024",
    excerpt:
      "Discover the essential SaaS tools that every modern business needs to stay competitive.",
    category: "Guide",
    date: "Mar 15, 2024",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
  },
  {
    id: "2",
    title: "How to Choose the Right UI Kit",
    excerpt:
      "A comprehensive guide to selecting the perfect UI kit for your next project.",
    category: "Tutorial",
    date: "Mar 12, 2024",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop",
  },
  {
    id: "3",
    title: "Scaling Your Business with Automation",
    excerpt:
      "Learn how automation tools can help you scale operations efficiently.",
    category: "Case Study",
    date: "Mar 8, 2024",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
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
