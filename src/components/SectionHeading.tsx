import { motion } from "framer-motion";

export default function SectionHeading({ tag, title, description }: { tag?: string; title: string; description?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-2xl mx-auto mb-12"
    >
      {tag && <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-4">{tag}</span>}
      <h2 className="text-section">{title}</h2>
      {description && <p className="text-sub text-muted-foreground mt-3">{description}</p>}
    </motion.div>
  );
}
