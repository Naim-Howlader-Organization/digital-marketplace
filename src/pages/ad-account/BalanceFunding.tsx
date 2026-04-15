import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import SectionHeading from "../../components/SectionHeading";
import { dollarLoadInfo, dollarLoadRates } from "../../data/dollar-load";

export default function BalanceFunding() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Ad Account & Funding Services
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">
              Ad Account <span className="gradient-text">Balance</span> Funding
            </h1>
            <p className="text-sub text-muted-foreground mb-8 mx-auto">
              Get the best rates for loading dollars to your Facebook, TikTok,
              and other ad accounts. Enjoy transparent pricing, fast processing,
              and special rates when you run ads through us!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Rates Section */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            title="Current Dollar Rate"
            description="Check the latest rates for Facebook and TikTok ad dollars. For agency clients, enjoy even better rates!"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-xl shadow p-6 flex flex-col gap-2"
            >
              <h2 className="text-lg font-semibold mb-2">Standard Rate</h2>
              <ul className="space-y-2">
                {dollarLoadInfo.currentRates.map((item) => (
                  <li key={item.platform} className="flex items-center gap-2">
                    <span className="text-lg">🔹</span>
                    <span>
                      {item.platform}:{" "}
                      <span className="font-medium">{item.rate} BDT</span>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-xl shadow p-6 flex flex-col gap-2"
            >
              <h2 className="text-lg font-semibold mb-2">
                Agency Rate{" "}
                <span className="ml-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                  Best Value
                </span>
              </h2>
              <ul className="space-y-2">
                {dollarLoadInfo.agencyRates.map((item) => (
                  <li key={item.platform} className="flex items-center gap-2">
                    <span className="font-medium">{item.platform}:</span>{" "}
                    <span>{item.rate} BDT</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 text-xs text-muted-foreground">
                Run your ads through us for the best rates and support!
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Slab Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            title="Dollar Load Rate (Pricing Slab)"
            description="The more dollars you load, the lower the rate!"
          />
          <div className="overflow-x-auto mt-8">
            <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow bg-card">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="py-3 px-4">USD Range</th>
                  <th className="py-3 px-4">Rate (BDT)</th>
                </tr>
              </thead>
              <tbody>
                {dollarLoadRates.map((slab, idx) => (
                  <tr
                    key={idx}
                    className="border-b last:border-0 hover:bg-muted/10 transition-colors"
                  >
                    <td className="py-2 px-4 font-medium">
                      {slab.min} – {slab.max} USD
                    </td>
                    <td className="py-2 px-4">{slab.rate} BDT</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center text-muted-foreground font-medium">
            {dollarLoadInfo.note}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            title="How Dollar Load Works"
            description="Simple steps to get your ad dollars loaded quickly and securely."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-xl shadow p-6 flex flex-col items-center text-center"
            >
              <span className="text-3xl mb-3">📝</span>
              <h3 className="font-semibold mb-2">1. Submit Request</h3>
              <p className="text-muted-foreground text-sm">
                Contact us with your ad account details and the amount you want
                to load.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-xl shadow p-6 flex flex-col items-center text-center"
            >
              <span className="text-3xl mb-3">💳</span>
              <h3 className="font-semibold mb-2">2. Make Payment</h3>
              <p className="text-muted-foreground text-sm">
                Pay the BDT amount based on the rate slab. We accept multiple
                payment methods for your convenience.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-xl shadow p-6 flex flex-col items-center text-center"
            >
              <span className="text-3xl mb-3">🚀</span>
              <h3 className="font-semibold mb-2">3. Get Dollars Loaded</h3>
              <p className="text-muted-foreground text-sm">
                We process your request and load dollars to your ad account
                quickly and securely.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
