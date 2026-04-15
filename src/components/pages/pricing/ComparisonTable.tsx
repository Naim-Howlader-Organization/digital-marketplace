import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

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

function ComparisonTable() {
  return (
    <section className="section-padding">
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
  );
}

export default ComparisonTable;
