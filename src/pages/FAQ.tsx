import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
const faqs = [
  {
    question: "How long does an order typically take to deliver?",
    answer:
      "Most digital products are delivered instantly upon purchase. Some products may require manual delivery, which typically happens within 2-4 hours.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "Yes, we offer a 14-day money-back guarantee on all products. If you're not satisfied, simply contact our support team.",
  },
  {
    question: "How do I become a seller on Skilled Zone?",
    answer:
      "You can apply to become a seller by visiting our seller application page. We'll review your application and get back to you within 3-5 business days.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, bank transfers, and multiple cryptocurrency options.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes, you can change your plan at any time. If you upgrade, you'll only pay the difference for the rest of the billing period. If you downgrade, the change takes effect at your next billing cycle.",
  },
  {
    question: "Do you offer annual billing discounts?",
    answer:
      "Absolutely! Sign up for an annual plan and get 20% off the regular monthly price. Contact our sales team for bulk discounts.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments. Enterprise customers can arrange custom payment terms.",
  },
  {
    question: "Is there a free trial for Pro and Enterprise plans?",
    answer:
      "Yes! Pro plan includes a 14-day free trial with full access to all features. Enterprise plans can be customized with a dedicated trial period.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your account and all your data remain accessible for 30 days after cancellation. You can download or export all your data at any time.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 7-day money-back guarantee on all subscription plans. If you're not satisfied, we'll refund your entire payment, no questions asked.",
  },
  {
    question: "Is there a minimum or maximum amount for dollar load?",
    answer:
      "Yes, you can load from 20 USD up to 5000 USD per transaction as per our pricing slabs.",
  },
  {
    question: "How long does it take to process?",
    answer:
      "Most loads are processed within 1-3 hours during business hours. For large amounts, processing time may vary.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfer, bKash, Nagad, Rocket, and other popular payment methods in Bangladesh.",
  },
  {
    question: "Can I get a better rate?",
    answer:
      "Yes! If you run ads through us or load larger amounts, you get a better rate as shown in the pricing slab.",
  },
  {
    question: "How long does an order typically take to deliver?",
    answer:
      "Most digital products are delivered instantly upon purchase. Some products may require manual delivery, which typically happens within 2-4 hours.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "Yes, we offer a 14-day money-back guarantee on all products. If you're not satisfied, simply contact our support team.",
  },
];

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container-wide relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              💡 FAQ
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-sub text-muted-foreground mb-8 mx-auto">
              Browse frequently asked questions to quickly find answers and
              discover helpful resources for using Skilled Zone.
            </p>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-xl border border-border bg-card cursor-pointer hover:border-primary/30 transition-colors"
              >
                <summary className="flex items-center justify-between font-heading font-semibold text-foreground list-none">
                  <span>{faq.question}</span>
                  <span className="text-primary transition-transform group-open:rotate-180">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
