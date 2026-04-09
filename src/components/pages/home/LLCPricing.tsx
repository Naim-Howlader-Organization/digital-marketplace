import PricingCard from "@/components/PricingCard";
import SectionHeading from "@/components/SectionHeading";
import { pricingPlans } from "@/data/marketplace";
function LLCPricing() {
  return (
    <section id="pricing" className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeading
          tag="LLC Pricing"
          title="SkilledZone LLC Packages"
          description="Choose the service package that fits your business formation needs"
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingPlans.map((p, i) => (
            <PricingCard key={p.id} plan={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LLCPricing;
