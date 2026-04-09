import type { PricingPlan } from "@/data/marketplace";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingCard({
  plan,
  index = 0,
  currency = "$",
}: {
  plan: PricingPlan;
  index?: number;
  currency?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className={`relative rounded-2xl border p-8 ${plan.popular ? "border-primary shadow-glow bg-card" : "border-border bg-card"}`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full gradient-bg text-primary-foreground">
          Most Popular
        </span>
      )}
      <h3 className="font-heading text-xl font-bold mb-2">{plan.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
      <div className="mb-6">
        <span className="text-4xl font-heading font-bold">
          {currency}
          {plan.price}
        </span>
        {plan.price > 0 && (
          <span className="text-muted-foreground">/{plan.period}</span>
        )}
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 mt-0.5 text-success shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-lg font-medium text-sm transition-all ${plan.popular ? "gradient-bg text-primary-foreground hover:opacity-90" : "border border-border hover:bg-muted/50"}`}
      >
        {plan.cta}
      </button>
    </motion.div>
  );
}
