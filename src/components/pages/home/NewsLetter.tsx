import SectionHeading from "@/components/SectionHeading";

function NewsLetter() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <div className="max-w-xl mx-auto text-center">
          <SectionHeading
            tag="Newsletter"
            title="Stay Updated"
            description="Get the latest products and marketplace news delivered to your inbox"
          />
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
            />
            <button className="px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
