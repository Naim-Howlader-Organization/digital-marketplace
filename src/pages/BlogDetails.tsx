import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogCategories, blogs } from "../data/blog";

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The blog post you are looking for does not exist.
            </p>
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 rounded bg-primary text-primary-foreground font-medium"
            >
              Go Back
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const category = blogCategories.find((c) => c.id === blog.categoryId);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container-wide relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {category?.name || "Blog"}
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">{blog.title}</h1>
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mb-8">
              <span>By {blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-surface">
        <div className="container-wide max-w-2xl mx-auto">
          <img
            src={`/${blog.coverImage}`} // Adjust the path as needed
            alt={blog.title}
            className="w-full h-64 object-cover rounded-2xl mb-8 border border-border"
          />
          <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
            {blog.content.split("\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <Link
              to="/blog"
              className="text-primary font-medium hover:underline"
            >
              ← Back to Blog
            </Link>
            <span className="text-xs text-muted-foreground">
              Category: {category?.name}
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
