import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@/data/marketplace";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link to={`/product/${product.id}`} className="group block rounded-xl border border-border bg-card overflow-hidden hover-lift">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          {product.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full gradient-bg text-primary-foreground">{product.badge}</span>
          )}
        </div>
        <div className="p-5">
          <p className="text-xs font-medium text-primary mb-1.5">{product.category}</p>
          <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-1.5">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.shortDescription}</p>
          <div className="flex items-center gap-1.5 mb-3">
            <Star className="w-4 h-4 fill-warning text-warning" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-heading font-bold text-foreground">${product.price}</span>
              {product.originalPrice && <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>}
            </div>
            <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/5 text-primary group-hover:gradient-bg group-hover:text-primary-foreground transition-all">View Details</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
