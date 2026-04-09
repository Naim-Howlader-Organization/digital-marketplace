import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Info, Lock, Mail, ShieldCheck, UserCheck } from "lucide-react";
import { privacyPolicyContent } from "../data/legal";

const iconMap = [ShieldCheck, UserCheck, Lock, Info, Mail];

export default function PrivacyPolicy() {
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
              <ShieldCheck className="w-4 h-4" /> Privacy & Protection
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">
              {privacyPolicyContent.title}
            </h1>
            <p className="text-sub text-muted-foreground mb-8 mx-auto">
              Your privacy is important to us. Learn how we collect, use, and
              safeguard your information while you use Skilled Zone.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="section-padding bg-surface">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="space-y-10">
            {privacyPolicyContent.sections.map((section, idx) => {
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

          {/* Extra Section: Your Rights */}
          <div className="mt-16">
            <h2 className="text-section mb-4 font-heading">Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You can request access to your personal data at any time.</li>
              <li>You have the right to correct or delete your information.</li>
              <li>You may opt out of marketing communications.</li>
              <li>Contact us for any privacy-related concerns or questions.</li>
            </ul>
          </div>

          {/* Extra Section: Updates */}
          <div className="mt-12">
            <h2 className="text-section mb-4 font-heading">Policy Updates</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We encourage
              you to review this page regularly for any changes. Your continued
              use of Skilled Zone constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
