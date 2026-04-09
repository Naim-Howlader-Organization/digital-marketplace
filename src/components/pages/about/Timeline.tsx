import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
const milestones = [
  {
    year: "2020",
    title: "Founded",
    description:
      "Skilled Zone was launched with a vision to revolutionize digital product sales.",
  },
  {
    year: "2021",
    title: "1K Sellers",
    description: "Reached 1,000 active sellers on our platform.",
  },
  {
    year: "2022",
    title: "100K Users",
    description: "Surpassed 100,000 registered users worldwide.",
  },
  {
    year: "2024",
    title: "1M Products",
    description: "Reached 1 million products listed across all categories.",
  },
];
function Timeline() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          tag="Journey"
          title="Our Growth Story"
          description="Key milestones in our journey to revolutionize digital commerce"
        />
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex gap-8 mb-12 ${
                i % 2 === 1 ? "flex-row-reverse lg:flex-row-reverse" : ""
              } items-start last:mb-0`}
            >
              <div className="flex-1" />
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 relative z-10">
                <Award className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-primary">
                  {milestone.year}
                </span>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {milestone.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
