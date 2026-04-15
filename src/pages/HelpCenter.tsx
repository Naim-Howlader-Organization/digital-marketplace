import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { contactInfo as contactInformation } from "@/data/contact";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock3,
  LifeBuoy,
  Mail,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import { useState } from "react";

const supportCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    items: [
      "Create your account and complete profile setup",
      "Explore products and service pages easily",
      "Place orders and track support status",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Orders & Delivery",
    items: [
      "Instant digital delivery for most products",
      "Manual delivery support for custom services",
      "Order updates and revision request process",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Privacy",
    items: [
      "Safe payment flow and account protection",
      "Password reset and account recovery support",
      "Privacy handling and data protection guidance",
    ],
  },
  {
    icon: LifeBuoy,
    title: "Technical Support",
    items: [
      "Product setup and onboarding assistance",
      "Issue troubleshooting from our support team",
      "Guidance for updates, maintenance and scaling",
    ],
  },
];

const supportChannels = [
  {
    icon: Mail,
    title: "Email Support",
    value: contactInformation.email,
    description: "Response within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: contactInformation.phone,
    description: "Sat-Thu, 10:00 PM – 6:00 AM",
  },
  {
    icon: Clock3,
    title: "Availability",
    value: "24/7 Priority Support",
    description: "For active client requests",
  },
];

interface HelpFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function HelpCenter() {
  const [formData, setFormData] = useState<HelpFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

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
              <LifeBuoy className="w-4 h-4" />
              Help Center
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">
              How can we support your next step?
            </h1>
            <p className="text-sub text-muted-foreground mb-8 mx-auto">
              Get practical help across setup, orders, billing, and technical
              support. Browse key resources or send us your issue directly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {supportCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-2xl border border-border bg-background shadow-card p-7"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-3 font-heading">
                    {category.title}
                  </h2>
                  <ul className="space-y-2.5 text-muted-foreground text-sm leading-relaxed">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;

              return (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-1.5">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-foreground mb-1">
                    {channel.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {channel.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                Contact Help Desk
              </div>
              <h2 className="text-section">Still Need Help?</h2>
              <p className="text-sub text-muted-foreground mt-3">
                Send your query and our support team will get back to you with
                the best next steps.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-2xl border border-border bg-card"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Tell us what you need help with"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Share your issue, order details, or service requirement"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {submitted ? "Message Sent!" : "Send Support Request"}
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-success/10 border border-success/30 text-success text-sm"
                >
                  ✓ Thank you! Your request has been submitted successfully.
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
