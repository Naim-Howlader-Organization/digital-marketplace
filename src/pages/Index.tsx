import AnimatedCounter from "@/components/AnimatedCounter";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Blog from "@/components/pages/home/Blog";
import LLCPricing from "@/components/pages/home/LLCPricing";
import POSPricing from "@/components/pages/home/POSPricing";
import Testimonial from "@/components/pages/home/Testimonial";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { benefits, categories, products, stats } from "@/data/marketplace";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Download,
  Headphones,
  Infinity,
  Play,
  RefreshCw,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const benefitIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = { Shield, Download, BadgeCheck, Infinity, RefreshCw, Headphones };

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="container-wide relative py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                🚀 Over 10,000+ digital products
              </span>
              <h1 className="text-hero lg:text-hero-lg mb-6">
                Discover Premium{" "}
                <span className="gradient-text">Digital Products</span> &
                Business Software
              </h1>
              <p className="text-sub text-muted-foreground mb-8 max-w-lg">
                The #1 marketplace for SaaS tools, templates, UI kits, plugins,
                and digital services. Built by creators, for modern teams.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Browse Marketplace <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted/50 transition-colors">
                  <Play className="w-4 h-4" /> Watch Demo
                </button>
              </div>
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border/50">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://images.unsplash.com/photo-${i === 1 ? "1494790108377-be9c29b29330" : i === 2 ? "1507003211169-0a1dd7228f2d" : i === 3 ? "1438761681033-6461ffad8d80" : "1472099645785-5658abf4ff4e"}?w=40&h=40&fit=crop&crop=face`}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-background object-cover"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by{" "}
                  <span className="font-semibold text-foreground">100k+</span>{" "}
                  customers worldwide
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-border">
                <img
                  src="/images/pages/Hero-Banner-1.jpeg"
                  alt="Dashboard preview"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 rounded-xl glass-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <span className="text-success text-lg">↑</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                    <p className="font-heading font-bold">+127%</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 p-4 rounded-xl glass-card animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg">⭐</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                    <p className="font-heading font-bold">4.9/5</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/50 bg-surface">
        <div className="container-wide py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <AnimatedCounter value={s.value} suffix={s.suffix} />
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            tag="Categories"
            title="Browse by Category"
            description="Explore our curated collection of digital products across all categories"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            tag="Featured"
            title="Popular Products"
            description="Handpicked tools loved by thousands of users"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.slice(0, 8).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted/50 transition-colors"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Software Showcase */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            tag="Showcase"
            title="Featured Software"
            description="Enterprise-grade tools for modern businesses"
          />
          {products.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center mb-20 last:mb-0`}
            >
              <div className="flex-1">
                <span className="text-xs font-semibold text-primary mb-2 block">
                  {p.category}
                </span>
                <h3 className="font-heading text-2xl font-bold mb-3">
                  {p.name}
                </h3>
                <p className="text-muted-foreground mb-5">{p.description}</p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <ChevronRight className="w-3.5 h-3.5 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3">
                  <Link
                    to={`/product/${p.id}`}
                    className="px-5 py-2.5 rounded-lg gradient-bg text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    Buy Now — ${p.price}
                  </Link>
                  <button className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-muted/50 transition-colors">
                    Free Trial
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden border border-border shadow-card">
                  <img src={p.image} alt={p.name} className="w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            tag="Trending"
            title="Trending Tools"
            description="Most popular tools this week"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.slice(0, 4).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/product/${p.id}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover-lift"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-primary font-medium">
                      {p.category}
                    </p>
                    <h4 className="font-semibold text-sm truncate">{p.name}</h4>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm font-bold">${p.price}</span>
                      <span className="text-xs text-muted-foreground">
                        ⭐ {p.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            tag="Why Skilled Zone"
            title="Why Choose Our Marketplace"
            description="We provide the best experience for buyers and sellers"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = benefitIcons[b.icon];
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-xl border border-border bg-card hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-5 h-5 text-primary" />}
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {b.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Screenshots */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            tag="Preview"
            title="Product Demos"
            description="See our top products in action"
          />
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-demo",
              prevEl: ".swiper-button-prev-demo",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            className="pb-10 relative"
          >
            {products.slice(0, 5).map((p) => (
              <SwiperSlide key={p.id}>
                <Link to={`/product/${p.id}`}>
                  <div className="rounded-xl overflow-hidden border border-border bg-card hover-lift">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-heading font-semibold text-sm">
                        {p.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {p.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev swiper-button-prev-demo" />
            <div className="swiper-button-next swiper-button-next-demo" />
          </Swiper>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonial />

      {/* LLC Pricing */}
      <LLCPricing />

      {/* POS Pricing */}
      <POSPricing />

      {/* CTA */}
      {/* <CTA /> */}

      {/* Blog */}
      <Blog />

      {/* Newsletter */}
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

      <Footer />
    </div>
  );
}
