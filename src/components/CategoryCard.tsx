import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cloud, Briefcase, Megaphone, Layout, Palette, Puzzle, Zap, Globe } from "lucide-react";
import type { Category } from "@/data/marketplace";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud, Briefcase, Megaphone, Layout, Palette, Puzzle, Zap, Globe,
};

export default function CategoryCard({ category, index = 0 }: { category: Category; index?: number }) {
  const Icon = iconMap[category.icon] || Cloud;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link to={`/products?category=${category.slug}`} className="group block p-6 rounded-xl border border-border bg-card hover-lift text-center">
        <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="font-heading font-semibold text-foreground mb-1">{category.name}</h3>
        <p className="text-sm text-muted-foreground">{category.count.toLocaleString()} products</p>
      </Link>
    </motion.div>
  );
}
