import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function CTA() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden gradient-bg p-12 md:p-16 text-center text-primary-foreground"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent" />
          <div className="relative">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Start Selling Your Digital Products Today
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
              Join thousands of creators earning revenue on the world's
              fastest-growing digital marketplace.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/auth?mode=register"
                className="px-6 py-3 rounded-lg bg-primary-foreground text-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Become a Seller
              </Link>
              <Link
                to="/products"
                className="px-6 py-3 rounded-lg border border-primary-foreground/30 font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                Browse Marketplace
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
