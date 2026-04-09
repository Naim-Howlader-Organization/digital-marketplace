import SectionHeading from "@/components/SectionHeading";
import { blogs } from "@/data/blog";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          tag="Blog"
          title="Resources & Insights"
          description="Guides, tutorials, and case studies for digital product creators"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((post, i) => (
            <Link to={`/blog/${post.slug}`}>
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card overflow-hidden hover-lift group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {post.categoryId}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
