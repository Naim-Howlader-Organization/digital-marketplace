// src/data/blog.ts
// Blog categories and blog content for the marketplace

export type BlogCategory = {
  id: string;
  name: string;
  description?: string;
};

export type Blog = {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage: string;
};

export const blogCategories: BlogCategory[] = [
  {
    id: "tech",
    name: "Tech",
    description: "Latest technology trends and tips.",
  },
  {
    id: "business",
    name: "Business",
    description: "Business strategies and insights.",
  },
  {
    id: "design",
    name: "Design",
    description: "UI/UX and creative design inspiration.",
  },
  {
    id: "marketplace",
    name: "Marketplace",
    description: "Updates and news about Skilled Zone.",
  },
];

export const blogs: Blog[] = [
  {
    id: "1",
    title: "How to Launch Your First Digital Product",
    slug: "launch-your-first-digital-product",
    categoryId: "tech",
    author: "Alex Johnson",
    date: "2026-04-01",
    excerpt:
      "A step-by-step guide to launching your first digital product and reaching your audience.",
    content: `Launching your first digital product can be daunting. In this article, we'll walk you through the essential steps, from ideation to marketing and sales.\n\n1. Identify your audience.\n2. Build a minimum viable product.\n3. Set up your marketplace presence.\n4. Promote your launch.\n\nRemember, iteration is key!`,
    coverImage: "images/blogs/launch-your-first-digital-product.jpeg",
  },
  {
    id: "2",
    title: "Top 5 UI/UX Trends in 2026",
    slug: "top-5-ui-ux-trends-2026",
    categoryId: "design",
    author: "Sarah Chen",
    date: "2026-03-20",
    excerpt:
      "Stay ahead with the latest UI/UX trends shaping digital products this year.",
    content: `UI/UX is evolving rapidly. Here are the top trends for 2026:\n\n- Neumorphism\n- Micro-interactions\n- Voice UI\n- Accessibility-first design\n- AI-driven personalization`,
    coverImage: "images/blogs/top-5-ui-ux-trends-2026.jpeg",
  },
  {
    id: "3",
    title: "Scaling Your Marketplace Business",
    slug: "scaling-your-marketplace-business",
    categoryId: "business",
    author: "Mike Williams",
    date: "2026-02-15",
    excerpt:
      "Proven strategies to grow your digital marketplace business efficiently.",
    content: `Scaling a marketplace requires focus on both supply and demand.\n\n- Invest in marketing.\n- Build trust with reviews.\n- Optimize your onboarding process.\n- Leverage analytics for growth.`,
    coverImage: "images/blogs/scaling-your-marketplace-business.jpeg",
  },
  {
    id: "4",
    title: "Marketplace Feature Updates: Spring 2026",
    slug: "marketplace-feature-updates-spring-2026",
    categoryId: "marketplace",
    author: "Emma Davis",
    date: "2026-04-05",
    excerpt: "Discover the latest features and improvements on Skilled Zone.",
    content: `We're excited to announce new features this spring:\n\n- Advanced search filters\n- Seller analytics dashboard\n- Enhanced messaging system\n- Improved mobile experience`,
    coverImage: "images/blogs/marketplace-feature-updates-spring-2026.jpeg",
  },
];
