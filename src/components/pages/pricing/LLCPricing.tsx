import SectionHeading from "@/components/SectionHeading";
import { pricingPlans } from "@/data/marketplace";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

interface PricingCardProps {
  plan: (typeof pricingPlans)[number];
  index: number;
}

const PricingCard = ({ plan, index }: PricingCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`relative rounded-2xl border p-8 transition-all ${
      plan.popular
        ? "border-primary bg-gradient-to-br from-primary/5 to-accent/5 shadow-xl scale-105 lg:scale-100"
        : "border-border bg-card hover:border-primary/30"
    }`}
  >
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
          <Zap className="w-3.5 h-3.5" />
          Most Popular
        </span>
      </div>
    )}

    <div className="mb-6">
      <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
      <p className="text-sm text-muted-foreground">{plan.description}</p>
    </div>

    <div className="mb-6">
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-bold gradient-text">
          {plan.price === 0 ? "Free" : `$${plan.price}`}
        </span>
        {plan.price !== 0 && (
          <span className="text-muted-foreground">/{plan.period}</span>
        )}
      </div>
    </div>

    <button
      className={`w-full py-3 rounded-lg font-medium mb-8 transition-all ${
        plan.popular
          ? "gradient-bg text-primary-foreground hover:opacity-90"
          : "border border-border hover:bg-muted/50 text-foreground"
      }`}
    >
      {plan.cta}
    </button>

    <div className="space-y-4">
      <p className="text-xs font-semibold text-muted-foreground uppercase">
        What's Included
      </p>
      {plan.features.map((feature) => (
        <div key={feature} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-sm text-foreground">{feature}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

function LLCPricing() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          tag="LLC Packages"
          title="SkilledZone LLC Packages"
          description="Choose the service package that fits your business formation needs"
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LLCPricing;
