import SectionHeading from "@/components/SectionHeading";
import { BadgeCheck, Star } from "lucide-react";

const reviewPlatforms = [
  {
    id: 1,
    name: "Trustpilot",
    link: "https://www.trustpilot.com/review/inskilledzone.com",
  },
  {
    id: 2,
    name: "Google Reviews",
    link: "https://g.page/r/CWzOGhxgB4f2EAE/review",
  },
];

function Testimonial() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          tag="Testimonials"
          title="Trusted by Our Customers"
          description="See our verified reviews on trusted platforms"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {reviewPlatforms.map((platform) => (
            <a
              key={platform.id}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <BadgeCheck className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-heading">
                  {platform.name}
                </h3>

                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground group-hover:text-primary transition">
                  Click to view reviews
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
