import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import POSPricing from "@/components/pages/home/POSPricing";
import SectionHeading from "@/components/SectionHeading";
import { pricingPlans } from "@/data/marketplace";
import { motion } from "framer-motion";
import { ArrowRight, Check, DollarSign, X, Zap } from "lucide-react";
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

export default function Pricing() {
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
              <DollarSign className="w-4 h-4" />
              Simple, Transparent Pricing
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">
              Choose Your Perfect <span className="gradient-text">Plan</span>
            </h1>
            <p className="text-sub text-muted-foreground mb-8">
              Whether you're an individual exploring digital products or an
              enterprise with custom needs, we have the perfect plan for you.
            </p>

            {/* Billing Toggle */}
            {/* <div className="flex items-center justify-center gap-4">
              <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-muted/50 border border-border">
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    billingPeriod === "monthly"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod("annual")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    billingPeriod === "annual"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Annual
                </button>
              </div>
              <span className="text-sm text-success font-medium">
                Save 20% on annual 💰
              </span>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
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

      <POSPricing />

      {/* Comparison Table */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            tag="Detailed Comparison"
            title="Feature Comparison"
            description="See what's included in each plan"
          />

          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-6 font-heading font-semibold bg-muted/50 w-1/4">
                    Features
                  </th>
                  <th className="text-center p-6 font-heading font-semibold bg-muted/50 min-w-32">
                    Starter
                  </th>
                  <th className="text-center p-6 font-heading font-semibold bg-primary/10 min-w-32">
                    Pro
                  </th>
                  <th className="text-center p-6 font-heading font-semibold bg-muted/50 min-w-32">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <motion.tr
                    key={feature.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                    className={`border-b border-border/50 ${
                      i % 2 === 0 ? "bg-background" : "bg-muted/20"
                    }`}
                  >
                    <td className="p-6 font-medium">{feature.name}</td>
                    <td className="p-6 text-center">
                      {typeof feature.starter === "boolean" ? (
                        feature.starter ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          {feature.starter}
                        </span>
                      )}
                    </td>
                    <td className="p-6 text-center bg-primary/5">
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-sm font-medium text-foreground">
                          {feature.pro}
                        </span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          {feature.enterprise}
                        </span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits */}
      {/* <Benifit /> */}

      {/* FAQs */}
      {/* <PricingFAQ /> */}

      {/* CTA Section */}
      {/* <CTA /> */}

      {/* Contact Sales */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-section mb-4">Need Enterprise Solution?</h2>
            <p className="text-sub text-muted-foreground mb-8">
              Looking for a custom plan with special features or volume
              discounts? Our sales team would love to chat with you.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted/50 transition-colors font-medium text-foreground">
              <span>Contact Sales</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
