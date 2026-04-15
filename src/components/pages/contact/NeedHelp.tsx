import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
function NeedHelp() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-section mb-6">Need More Help?</h2>
          <p className="text-sub text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out our comprehensive help center, documentation, and
            community forum for more information.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted/50 transition-colors"
            >
              Visit Help Center
            </Link>
            <Link
              to="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View Documentation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NeedHelp;
