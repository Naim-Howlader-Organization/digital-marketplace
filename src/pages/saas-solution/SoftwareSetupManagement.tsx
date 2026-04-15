import ContactSale from "@/components/ContactSale";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import POSPricing from "@/components/pages/home/POSPricing";
import ComparisonTable from "@/components/pages/pricing/ComparisonTable";
import { pricingPlans } from "@/data/marketplace";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { useState } from "react";

const comparisonFeatures = [
  {
    name: "Product Browsing",
    starter: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Monthly Downloads",
    starter: "5",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    name: "Support",
    starter: "Community",
    pro: "Priority Email",
    enterprise: "24/7 Phone & Email",
  },
  {
    name: "Analytics",
    starter: "Basic",
    pro: "Advanced",
    enterprise: "Advanced + Custom",
  },
  {
    name: "Team Collaboration",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "API Access",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Custom Integrations",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Early Access",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Dedicated Manager",
    starter: false,
    pro: false,
    enterprise: true,
  },
  {
    name: "SSO & SAML",
    starter: false,
    pro: false,
    enterprise: true,
  },
  {
    name: "SLA Guarantee",
    starter: false,
    pro: false,
    enterprise: true,
  },
  {
    name: "Volume Discounts",
    starter: false,
    pro: false,
    enterprise: true,
  },
];

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

export default function SoftwareSetupManagement() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly",
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              SaaS Solutions
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">
              Software Setup & <span className="gradient-text">Management</span>
            </h1>
            <p className="text-sub text-muted-foreground mb-8">
              Whether you're an individual exploring digital products or an
              enterprise with custom needs, we have the perfect plan for you.
            </p>
          </motion.div>
        </div>
      </section>

      <POSPricing />

      <ComparisonTable />
      <ContactSale isBgSurface={true} />

      <Footer />
    </div>
  );
}
