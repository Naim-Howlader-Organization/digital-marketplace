import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/marketplace";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Gift,
  Lock,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: "1",
    name: "Advanced UI Kit Pro",
    price: 49.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop",
    category: "UI Kits",
  },
  {
    id: "2",
    name: "Marketing Automation Blueprint",
    price: 79.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop",
    category: "Marketing Tools",
  },
  {
    id: "3",
    name: "E-commerce Website Template",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop",
    category: "Website Templates",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
  } | null>(null);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    setCouponError("");
    if (!couponCode.trim()) {
      setCouponError("Please enter a coupon code");
      return;
    }
    if (couponCode.toUpperCase() === "SAVE20") {
      setAppliedCoupon({ code: couponCode.toUpperCase(), discount: 0.2 });
      setCouponCode("");
    } else if (couponCode.toUpperCase() === "SAVE10") {
      setAppliedCoupon({ code: couponCode.toUpperCase(), discount: 0.1 });
      setCouponCode("");
    } else {
      setCouponError("Invalid coupon code");
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const discountAmount = appliedCoupon ? subtotal * appliedCoupon.discount : 0;
  const total = subtotal + tax - discountAmount;

  const isEmpty = cartItems.length === 0;

  if (isEmpty) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center py-20">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center max-w-md mx-auto"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-section mb-4">Your Cart is Empty</h2>
              <p className="text-sub text-muted-foreground mb-8">
                Looks like you haven't added any products yet. Explore our
                marketplace and find amazing digital products!
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Continue Shopping <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-12 border-b border-border/50 bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold">
                Shopping <span className="gradient-text">Cart</span>
              </h1>
            </div>
            <p className="text-sub text-muted-foreground">
              You have {cartItems.length} item
              {cartItems.length !== 1 ? "s" : ""} in your cart
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-4"
            >
              <div className="space-y-4">
                {cartItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-4 p-6 rounded-xl border border-border bg-card hover-lift"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <p className="text-xs text-primary font-medium mb-1">
                            {item.category}
                          </p>
                          <h3 className="font-heading font-semibold text-foreground">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-lg font-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity and Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Minus className="w-4 h-4 text-muted-foreground" />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Plus className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Continue Shopping */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Continue Shopping
                </Link>
              </motion.div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="rounded-xl border border-border bg-card p-6 sticky top-24 space-y-6">
                <h2 className="font-heading font-semibold text-lg">
                  Order Summary
                </h2>

                {/* Coupon Section */}
                <div className="space-y-3 pb-6 border-b border-border/50">
                  {appliedCoupon ? (
                    <div className="flex items-center justify-between bg-success/10 border border-success/30 rounded-lg p-3">
                      <div>
                        <p className="text-xs text-success font-medium">
                          Coupon Applied
                        </p>
                        <p className="text-sm font-semibold text-foreground">
                          {appliedCoupon.code}
                        </p>
                      </div>
                      <button
                        onClick={removeCoupon}
                        className="text-success hover:text-success/80 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) =>
                          setCouponCode(e.target.value.toUpperCase())
                        }
                        placeholder="Coupon code"
                        className="w-full sm:flex-1 px-3 py-2 rounded-lg bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                      />
                      <button
                        onClick={applyCoupon}
                        className="w-full sm:w-auto px-4 py-2 rounded-lg border border-border hover:bg-muted/50 transition-colors font-medium text-sm"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                  {couponError && (
                    <p className="text-xs text-destructive">{couponError}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Try codes: SAVE10 or SAVE20
                  </p>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Tax ({(taxRate * 100).toFixed(0)}%)
                    </span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  {appliedCoupon && (
                    <div className="flex justify-between text-sm text-success">
                      <span>
                        Discount ({(appliedCoupon.discount * 100).toFixed(0)}%)
                      </span>
                      <span className="font-semibold">
                        -${discountAmount.toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-3 border-t border-border/50">
                    <span className="text-foreground font-semibold">Total</span>
                    <span className="text-2xl font-bold gradient-text">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-3 py-6 border-y border-border/50">
                  {[
                    { icon: Truck, text: "Instant delivery" },
                    { icon: Lock, text: "Secure checkout" },
                    { icon: Gift, text: "Lifetime access" },
                  ].map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={benefit.text}
                        className="flex items-center gap-3"
                      >
                        <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {benefit.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <Link
                  to="/checkout"
                  className="w-full px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/products"
                  className="w-full px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted/50 transition-colors text-foreground inline-flex items-center justify-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-section">You Might Also Like</h2>
            <p className="text-sub text-muted-foreground text-center mt-3">
              Enhance your purchase with these popular products
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.slice(0, 4).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <ProductCard product={p} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-info/30 bg-info/5 flex gap-4"
          >
            <AlertCircle className="w-5 h-5 text-info flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                100% Satisfaction Guaranteed
              </h3>
              <p className="text-sm text-muted-foreground">
                Not satisfied with your purchase? We offer a 14-day money-back
                guarantee on all products. No questions asked!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
