import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogCategories, blogs } from "../data/blog";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredBlogs = selectedCategory
    ? blogs.filter((b) => b.categoryId === selectedCategory)
    : blogs;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container-wide relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              📝 Blog
            </span>
            <h1 className="text-hero lg:text-hero-lg mb-6">
              Insights & Stories
            </h1>
            <p className="text-sub text-muted-foreground mb-8 mx-auto">
              Explore the latest articles, tips, and updates from the Skilled
              Zone team and community.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-surface">
        <div className="container-wide">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            <button
              className={`px-4 py-2 rounded-full border border-border text-sm font-medium transition-colors ${selectedCategory === "" ? "bg-primary text-primary-foreground" : "bg-background hover:bg-primary/10"}`}
              onClick={() => setSelectedCategory("")}
            >
              All
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                className={`px-4 py-2 rounded-full border border-border text-sm font-medium transition-colors ${selectedCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-background hover:bg-primary/10"}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <Link
                to={`/blog/${blog.slug}`}
                key={blog.id}
                className="block rounded-2xl overflow-hidden border border-border bg-background shadow-card hover:shadow-lg transition-shadow group"
              >
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                      {
                        blogCategories.find((c) => c.id === blog.categoryId)
                          ?.name
                      }
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {blog.date}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold mb-2 font-heading line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {blog.excerpt}
                  </p>
                  <span className="text-primary text-xs font-semibold">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
            {filteredBlogs.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="text-muted-foreground">
                  No blogs found for this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
