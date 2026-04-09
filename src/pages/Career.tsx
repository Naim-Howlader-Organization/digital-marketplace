import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { contactInfo } from "@/data/contact";

export default function Career() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container-wide relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              🚀 Careers
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">Join Our Team</h1>
            <p className="text-sub text-muted-foreground mb-8 mx-auto">
              We're always looking for talented, passionate people to join
              Skilled Zone. Explore our open positions and grow your career with
              us!
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-surface">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border bg-background shadow-card p-8 mb-8">
            <h2 className="text-xl font-semibold mb-2 font-heading">
              Why Work With Us?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Remote-friendly and flexible hours</li>
              <li>Collaborative, innovative team culture</li>
              <li>Opportunities for growth and learning</li>
              <li>Competitive compensation and benefits</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background shadow-card p-8">
            <h2 className="text-xl font-semibold mb-2 font-heading">
              Open Positions
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Frontend Engineer (React/TypeScript)</li>
              <li>Backend Engineer (Node.js)</li>
              <li>Product Designer</li>
              <li>Community Manager</li>
              <li>Marketing Specialist</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Interested? Email your resume to{" "}
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-primary underline"
              >
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
