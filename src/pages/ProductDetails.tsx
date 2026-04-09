import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/marketplace";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Download, ShoppingCart, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const related = products.filter((p) => p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-wide py-20 text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">
            Product not found
          </h1>
          <Link to="/products" className="text-primary hover:underline">
            Back to products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-wide py-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to products
        </Link>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl overflow-hidden border border-border mb-4">
              <img
                src={`/${product.image}`}
                alt={product.name}
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[product.image, product.image, product.image].map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-border cursor-pointer hover:border-primary/50 transition-colors"
                >
                  <img
                    src={`/public/${img}`}
                    alt=""
                    className="w-full aspect-video object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-10">
              <h2 className="font-heading text-xl font-bold mb-4">
                About this product
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>
              <h3 className="font-heading font-semibold mb-3">Features</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-success shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-10">
              <h2 className="font-heading text-xl font-bold mb-4">
                Reviews ({product.reviews})
              </h2>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex gap-4 mb-5 pb-5 border-b border-border/50 last:border-0"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${i === 1 ? "1494790108377-be9c29b29330" : i === 2 ? "1507003211169-0a1dd7228f2d" : "1438761681033-6461ffad8d80"}?w=40&h=40&fit=crop&crop=face`}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold">User {i}</span>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className="w-3 h-3 fill-warning text-warning"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Excellent product! Highly recommended for any development
                      team looking to streamline their workflow.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24 p-6 rounded-2xl border border-border bg-card">
              <span className="text-xs font-medium text-primary mb-2 block">
                {product.category}
              </span>
              <h1 className="font-heading text-2xl font-bold mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 fill-warning text-warning" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
                {product.downloads && (
                  <span className="text-sm text-muted-foreground ml-auto">
                    {product.downloads.toLocaleString()} downloads
                  </span>
                )}
              </div>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-3xl font-heading font-bold">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-sm font-medium text-success ml-1">
                    Save{" "}
                    {Math.round(
                      (1 - product.price / product.originalPrice) * 100,
                    )}
                    %
                  </span>
                )}
              </div>
              <button className="w-full py-3 rounded-lg gradient-bg text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mb-3">
                <ShoppingCart className="w-4 h-4" /> Buy Now
              </button>
              <button className="w-full py-3 rounded-lg border border-border font-medium flex items-center justify-center gap-2 hover:bg-muted/50 transition-colors">
                <Download className="w-4 h-4" /> Download Trial
              </button>
              <div className="mt-6 pt-6 border-t border-border/50 space-y-3">
                {[
                  "Instant download",
                  "Lifetime access",
                  "Free updates",
                  "Priority support",
                ].map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-success" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        <div className="mt-16">
          <h2 className="font-heading text-2xl font-bold mb-6">
            Related Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
