import PricingCard from "@/components/PricingCard";
import SectionHeading from "@/components/SectionHeading";
import { posPricingPlans } from "@/data/marketplace";
function POSPricing() {
  return (
    <section id="pricing" className="section-padding bg-surface">
      <div className="container-wide">
        <SectionHeading
          tag="POS Pricing"
          title="Affordable POS Plans for Every Business"
          description="Pick the plan that fits your store and scale with ease"
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {posPricingPlans.map((p, i) => (
            <PricingCard key={p.id} plan={p} index={i} currency="৳" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default POSPricing;
