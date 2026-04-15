import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const upcomingHighlights = [
  {
    title: "New service bundles",
    description:
      "Launch-ready packages for LLC setup, ad account funding, and growth campaigns.",
  },
  {
    title: "Faster delivery workflow",
    description:
      "Improved support pipeline with quicker onboarding and structured progress updates.",
  },
  {
    title: "Dedicated success support",
    description:
      "Priority assistance with strategy guidance and implementation recommendations.",
  },
];

export default function CommingSoon() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              New Experience in Progress
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">
              Something <span className="gradient-text">Awesome</span> is Coming
              Soon
            </h1>
            <p className="text-sub text-muted-foreground mb-8 mx-auto">
              We are crafting a better and faster experience for this section.
              Stay tuned for the launch and explore our current services in the
              meantime.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted/50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-6">
            {upcomingHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CircleCheckBig className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
          >
            <div>
              <h2 className="font-heading text-2xl font-semibold mb-2">
                Want launch updates?
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Reach our support team and ask for early access information.
              </p>
            </div>
            <Link
              to="/help-center"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border hover:bg-muted/50 transition-colors font-medium"
            >
              <BellRing className="w-4 h-4" />
              Visit Help Center
            </Link>
          </motion.div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarClock className="w-4 h-4" />
            Launch timeline will be announced soon.
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
