import ContactSale from "@/components/ContactSale";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LLCPricing from "@/components/pages/home/LLCPricing";
import { motion } from "framer-motion";

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

export default function Documentation() {
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
              LLC Formation Services
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">
              Documentation &{" "}
              <span className="gradient-text">Compliance Support</span>
            </h1>
            <p className="text-sub text-muted-foreground mb-8">
              Whether you're an individual exploring digital products or an
              enterprise with custom needs, we have the perfect plan for you.
            </p>
          </motion.div>
        </div>
      </section>

      <LLCPricing />

      <ContactSale />

      <Footer />
    </div>
  );
}
