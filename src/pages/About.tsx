import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Team from "@/components/pages/about/Team";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Heart, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Customer First",
    description:
      "We prioritize our customers' needs and ensure the best experience for both buyers and sellers.",
  },
  {
    icon: Heart,
    title: "Quality",
    description:
      "Every product is carefully curated to meet our high standards and provide real value.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We continuously improve our platform with the latest technologies and features.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description:
      "We connect creators and customers from around the world in a trusted marketplace.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
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
              📖 Our Story
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">
              Empowering <span className="gradient-text">Creators</span> &
              Businesses
            </h1>
            <p className="text-sub text-muted-foreground mb-8 mx-auto">
              Skilled Zone is the leading marketplace for digital products,
              connecting talented creators with businesses looking for
              innovative solutions. We're committed to democratizing access to
              premium digital tools and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-section mb-6">Our Mission</h2>
              <p className="text-sub text-muted-foreground mb-6">
                We believe that every creator deserves access to a platform
                where they can showcase their work and earn a living. Our
                mission is to create the world's most trusted and user-friendly
                digital marketplace.
              </p>
              <p className="text-sub text-muted-foreground">
                By connecting talented creators with businesses worldwide, we're
                building a community that thrives on innovation, quality, and
                mutual success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden border border-border shadow-card h-96 bg-gradient-to-br from-primary/20 to-accent/20"
            >
              <img
                src="images/pages/About-Page-Banner.jpeg"
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            tag="Core Values"
            title="What We Stand For"
            description="Our values guide everything we do"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-xl border border-border bg-card hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <Team />

      {/* Timeline */}
      {/* <Timeline /> */}

      {/* Stats */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Users", value: "100K+" },
              { label: "Products Listed", value: "1M+" },
              { label: "Creator Earnings", value: "$50M+" },
              { label: "Countries", value: "180+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface">
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
                Join Our Community
              </h2>
              <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
                Whether you're a business looking for high-quality digital
                products or tools to grow your operations, Skilled Zone has
                everything you need to succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/auth?mode=register"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground text-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="px-6 py-3 rounded-lg border border-primary-foreground/30 font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
