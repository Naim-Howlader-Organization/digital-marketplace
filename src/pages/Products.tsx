import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/marketplace";

const sortOptions = ["Most Popular", "Latest", "Price: Low → High", "Price: High → Low"];
const ratingFilters = [4, 3, 2, 1];

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "";
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [sort, setSort] = useState(sortOptions[0]);
  const [minRating, setMinRating] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (search) result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()));
    if (selectedCategory) result = result.filter(p => p.categorySlug === selectedCategory);
    if (minRating) result = result.filter(p => p.rating >= minRating);
    if (sort === "Price: Low → High") result.sort((a, b) => a.price - b.price);
    else if (sort === "Price: High → Low") result.sort((a, b) => b.price - a.price);
    else if (sort === "Latest") result.reverse();
    return result;
  }, [search, selectedCategory, sort, minRating]);

  const Sidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading font-semibold mb-3">Categories</h3>
        <div className="space-y-1">
          <button onClick={() => setSelectedCategory("")} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${!selectedCategory ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted/50"}`}>All Categories</button>
          {categories.map(c => (
            <button key={c.id} onClick={() => setSelectedCategory(c.slug)} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex justify-between ${selectedCategory === c.slug ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted/50"}`}>
              {c.name} <span className="text-xs opacity-60">{c.count}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-heading font-semibold mb-3">Rating</h3>
        <div className="space-y-1">
          {ratingFilters.map(r => (
            <button key={r} onClick={() => setMinRating(minRating === r ? 0 : r)} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${minRating === r ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted/50"}`}>
              {"⭐".repeat(r)} & up
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-wide py-8">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-heading text-2xl font-bold">All Products</h1>
            <p className="text-sm text-muted-foreground">{filtered.length} products found</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." className="w-full pl-9 pr-4 py-2 rounded-lg bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <select value={sort} onChange={e => setSort(e.target.value)} className="px-3 py-2 rounded-lg bg-muted/50 border border-border text-sm focus:outline-none">
              {sortOptions.map(s => <option key={s}>{s}</option>)}
            </select>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 rounded-lg border border-border hover:bg-muted/50">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <div className="hidden lg:block w-60 shrink-0"><Sidebar /></div>
          {/* Mobile sidebar */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-foreground/20" onClick={() => setSidebarOpen(false)} />
              <motion.div initial={{ x: -300 }} animate={{ x: 0 }} className="absolute left-0 top-0 bottom-0 w-72 bg-background p-6 border-r border-border overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-heading font-bold text-lg">Filters</h2>
                  <button onClick={() => setSidebarOpen(false)}><X className="w-5 h-5" /></button>
                </div>
                <Sidebar />
              </motion.div>
            </div>
          )}
          {/* Products grid */}
          <div className="flex-1">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No products found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
