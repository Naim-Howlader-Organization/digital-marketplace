import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/marketplace";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Categories", to: "#", hasDropdown: true },
  { label: "Pricing", to: "/#pricing" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-wide flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold">
          <img src={logo} alt="DigiMart" className="w-9 h-9 rounded-lg object-cover" />
          <span className="gradient-text">DigiMart</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative" onMouseEnter={() => link.hasDropdown && setCatOpen(true)} onMouseLeave={() => link.hasDropdown && setCatOpen(false)}>
              <Link
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  location.pathname === link.to ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
              {link.hasDropdown && catOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-0 mt-1 w-64 bg-card rounded-xl border border-border shadow-card p-2"
                >
                  {categories.map((cat) => (
                    <Link key={cat.id} to={`/products?category=${cat.slug}`} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted/50 transition-colors text-sm text-foreground">
                      <span className="text-muted-foreground">{cat.name}</span>
                      <span className="ml-auto text-xs text-muted-foreground">{cat.count}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/products" className="p-2 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full gradient-bg text-[10px] text-primary-foreground flex items-center justify-center font-bold">3</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 ml-2">
            <Link to="/auth" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Log in</Link>
            <Link to="/auth?mode=register" className="px-4 py-2 text-sm font-medium rounded-lg gradient-bg text-primary-foreground hover:opacity-90 transition-opacity">Sign up</Link>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-border/50 overflow-hidden">
            <div className="container-wide py-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input type="text" placeholder="Search products, templates, tools..." className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="lg:hidden border-t border-border/50 overflow-hidden bg-background">
            <div className="container-wide py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.to} onClick={() => setMobileOpen(false)} className="px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-3 pt-3 border-t border-border/50">
                <Link to="/auth" className="flex-1 text-center px-4 py-2.5 text-sm font-medium rounded-lg border border-border hover:bg-muted/50 transition-colors">Log in</Link>
                <Link to="/auth?mode=register" className="flex-1 text-center px-4 py-2.5 text-sm font-medium rounded-lg gradient-bg text-primary-foreground">Sign up</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
