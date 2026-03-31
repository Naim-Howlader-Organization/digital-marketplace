import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Heart, Target, Zap } from "lucide-react";
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

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Visionary entrepreneur with 10+ years of experience in digital marketplaces.",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    bio: "Tech innovator passionate about building scalable platforms.",
  },
  {
    name: "Mike Williams",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Operational excellence expert ensuring smooth marketplace operations.",
  },
  {
    name: "Emma Davis",
    role: "Head of Community",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Community builder fostering meaningful connections between creators.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Founded",
    description:
      "Skilled Zone was launched with a vision to revolutionize digital product sales.",
  },
  {
    year: "2021",
    title: "1K Sellers",
    description: "Reached 1,000 active sellers on our platform.",
  },
  {
    year: "2022",
    title: "100K Users",
    description: "Surpassed 100,000 registered users worldwide.",
  },
  {
    year: "2024",
    title: "1M Products",
    description: "Reached 1 million products listed across all categories.",
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
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
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            tag="Leadership"
            title="Meet Our Team"
            description="Talented individuals passionate about building the future of digital commerce"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card overflow-hidden hover-lift"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold">{member.name}</h3>
                  <p className="text-xs text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            tag="Journey"
            title="Our Growth Story"
            description="Key milestones in our journey to revolutionize digital commerce"
          />
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex gap-8 mb-12 ${
                  i % 2 === 1 ? "flex-row-reverse lg:flex-row-reverse" : ""
                } items-start last:mb-0`}
              >
                <div className="flex-1" />
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 relative z-10">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-primary">
                    {milestone.year}
                  </span>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-surface">
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
      <section className="section-padding">
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
                Whether you're a creator looking to sell or a business seeking
                quality digital products, Skilled Zone is the place for you.
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
