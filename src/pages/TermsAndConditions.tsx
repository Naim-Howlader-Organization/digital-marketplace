import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  AlertTriangle,
  CheckCircle2,
  Copyright,
  FileText,
  RefreshCw,
  User,
} from "lucide-react";
import { termsAndConditionsContent } from "../data/legal";

const iconMap = [
  FileText,
  User,
  Copyright,
  AlertTriangle,
  RefreshCw,
  CheckCircle2,
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="container-wide relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <FileText className="w-4 h-4" /> Legal Notice
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">
              {termsAndConditionsContent.title}
            </h1>
            <p className="text-sub text-muted-foreground mb-8 mx-auto">
              Please read these terms and conditions carefully before using
              Skilled Zone. By accessing or using our marketplace, you agree to
              be bound by these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="section-padding bg-surface">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="space-y-10">
            {termsAndConditionsContent.sections.map((section, idx) => {
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

          {/* Extra Section: Prohibited Activities */}
          <div className="mt-16">
            <h2 className="text-section mb-4 font-heading">
              Prohibited Activities
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Do not use the marketplace for unlawful or fraudulent purposes.
              </li>
              <li>
                Do not attempt to gain unauthorized access to other accounts or
                systems.
              </li>
              <li>
                Do not post or distribute harmful, offensive, or misleading
                content.
              </li>
              <li>Respect intellectual property rights of others.</li>
            </ul>
          </div>

          {/* Extra Section: Governing Law */}
          <div className="mt-12">
            <h2 className="text-section mb-4 font-heading">Governing Law</h2>
            <p className="text-muted-foreground">
              These terms are governed by the laws of your jurisdiction. Any
              disputes arising from the use of Skilled Zone will be subject to
              the exclusive jurisdiction of the courts in your region.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
