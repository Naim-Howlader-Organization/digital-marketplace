import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
    Ban,
    CircleHelp,
    CreditCard,
    RefreshCcw,
    ShieldCheck,
    Wallet,
} from "lucide-react";
import { refundPolicyContent } from "../data/legal";

const iconMap = [ShieldCheck, CreditCard, Ban, CircleHelp, Wallet, RefreshCcw];

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="container-wide relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <RefreshCcw className="w-4 h-4" /> Refund & Returns
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">
              {refundPolicyContent.title}
            </h1>
            <p className="text-sub text-muted-foreground mb-8 mx-auto">
              We believe in transparent and fair policies. Please review our
              refund terms to understand eligibility, timelines, and support
              process.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="space-y-10">
            {refundPolicyContent.sections.map((section, idx) => {
              const Icon = iconMap[idx % iconMap.length];

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-background shadow-card p-8 flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                      <Icon className="w-7 h-7" />
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2 font-heading">
                      {section.heading}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16">
            <h2 className="text-section mb-4 font-heading">Important Notes</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Refunds are reviewed case-by-case based on order details.</li>
              <li>
                Please avoid duplicate refund submissions for the same order.
              </li>
              <li>
                For service-based projects, refund scope depends on delivered
                milestones.
              </li>
              <li>
                In case of technical issues, our support team will try to
                resolve the issue before refund processing.
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-section mb-4 font-heading">Need Assistance?</h2>
            <p className="text-muted-foreground">
              For refund inquiries, please contact us through the Help Center or
              Contact page with your order details for faster support.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
