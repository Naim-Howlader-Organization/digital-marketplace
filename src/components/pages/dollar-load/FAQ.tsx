import SectionHeading from "@/components/SectionHeading";

function FAQ() {
  return (
    <section className="section-padding">
      <div className="container-wide max-w-3xl mx-auto">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mt-8 space-y-6">
          <div className="bg-card rounded-lg shadow p-5">
            <h4 className="font-semibold mb-2">
              Is there a minimum or maximum amount for dollar load?
            </h4>
            <p className="text-muted-foreground text-sm">
              Yes, you can load from 20 USD up to 5000 USD per transaction as
              per our pricing slabs.
            </p>
          </div>
          <div className="bg-card rounded-lg shadow p-5">
            <h4 className="font-semibold mb-2">
              How long does it take to process?
            </h4>
            <p className="text-muted-foreground text-sm">
              Most loads are processed within 1-3 hours during business hours.
              For large amounts, processing time may vary.
            </p>
          </div>
          <div className="bg-card rounded-lg shadow p-5">
            <h4 className="font-semibold mb-2">
              What payment methods do you accept?
            </h4>
            <p className="text-muted-foreground text-sm">
              We accept bank transfer, bKash, Nagad, Rocket, and other popular
              payment methods in Bangladesh.
            </p>
          </div>
          <div className="bg-card rounded-lg shadow p-5">
            <h4 className="font-semibold mb-2">Can I get a better rate?</h4>
            <p className="text-muted-foreground text-sm">
              Yes! If you run ads through us or load larger amounts, you get a
              better rate as shown in the pricing slab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
