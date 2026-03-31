import { Star } from "lucide-react";
import type { Testimonial } from "@/data/marketplace";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-6 rounded-xl border border-border bg-card min-w-[320px] max-w-[400px] shrink-0">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "fill-warning text-warning" : "text-border"}`} />
        ))}
      </div>
      <p className="text-sm text-foreground leading-relaxed mb-5">"{testimonial.review}"</p>
      <div className="flex items-center gap-3">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
