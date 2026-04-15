import { contactInfo } from "@/data/contact";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function ContactSale({ isBgSurface = false }: { isBgSurface?: boolean }) {
  return (
    <section className={`section-padding ${isBgSurface ? "bg-surface" : ""}`}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-section mb-4">Need Enterprise Solution?</h2>
          <p className="text-sub text-muted-foreground mb-8">
            Looking for a custom plan with special features or volume discounts?
            Our sales team would love to chat with you.
          </p>
          <a href={contactInfo.socialMedia.whatsapp}>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted/50 transition-colors font-medium text-foreground">
              <span>Contact Sales</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSale;
