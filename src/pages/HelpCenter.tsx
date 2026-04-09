import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container-wide relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              💡 Help Center
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">
              How can we help you?
            </h1>
            <p className="text-sub text-muted-foreground mb-8 mx-auto">
              Find answers to common questions, get support, and explore helpful
              resources for Skilled Zone.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-surface">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-background shadow-card p-8">
              <h2 className="text-xl font-semibold mb-2 font-heading">
                Getting Started
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>How to create an account</li>
                <li>How to buy your first product</li>
                <li>How to become a seller</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background shadow-card p-8">
              <h2 className="text-xl font-semibold mb-2 font-heading">
                Account & Security
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Resetting your password</li>
                <li>Managing your profile</li>
                <li>Privacy and data protection</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background shadow-card p-8">
              <h2 className="text-xl font-semibold mb-2 font-heading">
                Payments & Orders
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Accepted payment methods</li>
                <li>Order tracking</li>
                <li>Refunds and cancellations</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background shadow-card p-8">
              <h2 className="text-xl font-semibold mb-2 font-heading">
                Contact Support
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Email: support@skilledzone.com</li>
                <li>Live chat (coming soon)</li>
                <li>Community forum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
