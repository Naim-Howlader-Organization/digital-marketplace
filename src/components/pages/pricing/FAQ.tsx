import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
const faqs = [
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
];
function FAQ() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeading
          tag="Questions"
          title="Pricing FAQs"
          description="Common questions about our pricing and plans"
        />

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
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {faq.question}
                </span>
                <span className="text-primary transition-transform group-open:rotate-180">
                  +
                </span>
              </summary>
              <p className="mt-4 ml-8 text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
