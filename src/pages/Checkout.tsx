import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ChevronRight,
  CircleDollarSign,
  CreditCard,
  DollarSign,
  Lock,
  Package,
  Shield,
  Smartphone,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ShippingData {
  name: string;
  phone: string;
  email: string;
  address: string;
}

interface PaymentData {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface ValidationErrors {
  shipping: { [key: string]: string };
  payment: { [key: string]: string };
}

const paymentMethods = [
  {
    id: "credit-card",
    name: "Credit/Debit Card",
    icon: CreditCard,
    description: "Visa, Mastercard, American Express",
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: CircleDollarSign,
    description: "Quick and secure payment",
  },
  {
    id: "crypto",
    name: "Cryptocurrency",
    icon: DollarSign,
    description: "Bitcoin, Ethereum, USDC",
  },
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    icon: Smartphone,
    description: "Direct bank payment",
  },
];

const cartItems = [
  {
    id: "1",
    name: "Advanced UI Kit Pro",
    price: 49.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Marketing Automation Blueprint",
    price: 79.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop",
  },
];

export default function Checkout() {
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">(
    "shipping",
  );
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [shippingData, setShippingData] = useState<ShippingData>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({
    shipping: {},
    payment: {},
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shippingCost = subtotal > 100 ? 0 : 9.99;
  const tax = (subtotal + shippingCost) * 0.08;
  const total = subtotal + shippingCost + tax;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setShippingData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors.shipping[name]) {
      setErrors((prev) => ({
        ...prev,
        shipping: {
          ...prev.shipping,
          [name]: "",
        },
      }));
    }
  };

  const handlePaymentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors.payment[name]) {
      setErrors((prev) => ({
        ...prev,
        payment: {
          ...prev.payment,
          [name]: "",
        },
      }));
    }
  };

  const validateShippingForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!shippingData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email optional, validate only if provided
    if (
      shippingData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shippingData.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (!shippingData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!shippingData.address.trim()) {
      newErrors.address = "Street address is required";
    }

    setErrors((prev) => ({
      ...prev,
      shipping: newErrors,
    }));

    return Object.keys(newErrors).length === 0;
  };

  const validatePaymentForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (paymentMethod === "credit-card") {
      if (!paymentData.cardholderName.trim()) {
        newErrors.cardholderName = "Cardholder name is required";
      }
      if (!paymentData.cardNumber.trim()) {
        newErrors.cardNumber = "Card number is required";
      } else if (
        !/^\d{13,19}$/.test(paymentData.cardNumber.replace(/\s/g, ""))
      ) {
        newErrors.cardNumber = "Please enter a valid card number";
      }
      if (!paymentData.expiryDate.trim()) {
        newErrors.expiryDate = "Expiry date is required";
      } else if (!/^\d{2}\/\d{2}$/.test(paymentData.expiryDate)) {
        newErrors.expiryDate = "Please use MM/YY format";
      }
      if (!paymentData.cvv.trim()) {
        newErrors.cvv = "CVV is required";
      } else if (!/^\d{3,4}$/.test(paymentData.cvv)) {
        newErrors.cvv = "CVV must be 3-4 digits";
      }
    }

    if (!termsAccepted) {
      newErrors.terms = "You must agree to terms and conditions";
    }

    setErrors((prev) => ({
      ...prev,
      payment: newErrors,
    }));

    return Object.keys(newErrors).length === 0;
  };

  const continueToPayment = () => {
    if (validateShippingForm()) {
      setStep("payment");
    }
  };

  const completePayment = () => {
    if (validatePaymentForm()) {
      setStep("confirmation");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      {/* Header */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-12 border-b border-border/50 bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold">
                <span className="gradient-text">Checkout</span>
              </h1>
            </div>

            {/* Progress Indicator */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
              {/* Step 1 */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-medium text-xs sm:text-sm ${
                    step === "shipping"
                      ? "gradient-bg text-primary-foreground"
                      : step !== "shipping"
                        ? "bg-primary/20 text-primary"
                        : ""
                  }`}
                >
                  {step === "shipping" ? (
                    "1"
                  ) : (
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </div>
                <span className="font-medium text-sm sm:text-base">
                  Shipping
                </span>
              </div>

              {/* Chevron */}
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hidden sm:block flex-shrink-0" />

              {/* Step 2 */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-medium text-xs sm:text-sm ${
                    step === "payment"
                      ? "gradient-bg text-primary-foreground"
                      : step !== "payment"
                        ? "bg-muted text-muted-foreground"
                        : ""
                  }`}
                >
                  {step === "payment" ? (
                    "2"
                  ) : (
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </div>
                <span className="font-medium text-sm sm:text-base">
                  Payment
                </span>
              </div>

              {/* Chevron */}
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hidden sm:block flex-shrink-0" />

              {/* Step 3 */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-medium text-xs sm:text-sm ${
                    step === "confirmation"
                      ? "gradient-bg text-primary-foreground"
                      : step !== "confirmation"
                        ? "bg-muted text-muted-foreground"
                        : ""
                  }`}
                >
                  {step === "confirmation" ? (
                    "3"
                  ) : (
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </div>
                <span className="font-medium text-sm sm:text-base">
                  Confirmation
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Shipping Information */}
              {step === "shipping" && (
                <div className="rounded-xl border border-border bg-card p-8 space-y-6">
                  <div>
                    <h2 className="font-heading text-xl font-bold mb-2">
                      Shipping Address
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Where should we deliver your order?
                    </p>
                  </div>

                  <div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={shippingData.name}
                        onChange={handleInputChange}
                        placeholder="John"
                        className={`w-full px-4 py-2.5 rounded-lg bg-muted/50 border text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.shipping.name
                            ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                            : "border-border focus:ring-primary/20 focus:border-primary/50"
                        }`}
                      />
                      {errors.shipping.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.shipping.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-2 md:gap-x-8">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={shippingData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                      />
                      {errors.shipping.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.shipping.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={shippingData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 rounded-lg bg-muted/50 border text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.shipping.email
                            ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                            : "border-border focus:ring-primary/20 focus:border-primary/50"
                        }`}
                      />
                      {errors.shipping.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.shipping.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Address <span className="text-red-500">*</span>
                    </label>

                    <textarea
                      name="address"
                      value={shippingData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street"
                      rows={4}
                      className={`w-full px-4 py-2.5 rounded-lg bg-muted/50 border text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.shipping.address
                          ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                          : "border-border focus:ring-primary/20 focus:border-primary/50"
                      }`}
                    />

                    {errors.shipping.address && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.shipping.address}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <input
                      type="checkbox"
                      id="same-billing"
                      checked={sameAsBilling}
                      onChange={(e) => setSameAsBilling(e.target.checked)}
                      className="w-4 h-4 rounded"
                    />
                    <label htmlFor="same-billing" className="text-sm">
                      Billing address is the same as shipping
                    </label>
                  </div>

                  <button
                    onClick={continueToPayment}
                    className="w-full px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                  >
                    Continue to Payment
                  </button>
                </div>
              )}

              {/* Confirmation Section */}
              {step === "confirmation" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Success Message */}
                  <div className="rounded-xl border border-success/20 bg-success/5 p-8 text-center space-y-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="flex justify-center"
                    >
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-success" />
                      </div>
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        Order Confirmed!
                      </h2>
                      <p className="text-muted-foreground">
                        Thank you for your purchase. Your order has been
                        successfully placed.
                      </p>
                    </div>
                  </div>

                  {/* Order Number */}
                  <div className="rounded-xl border border-border bg-card p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Order Number
                    </p>
                    <p className="text-2xl font-bold">
                      #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                    </p>
                  </div>

                  {/* Order Details */}
                  <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                    <h3 className="font-heading font-bold text-lg">
                      Order Summary
                    </h3>

                    {/* Items */}
                    <div className="space-y-3 pb-4 border-b border-border/50">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-medium text-sm">{item.name}</p>
                              <p className="text-xs text-muted-foreground">
                                Qty: {item.quantity}
                              </p>
                            </div>
                          </div>
                          <span className="font-semibold text-sm">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Price Breakdown */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>
                          {shippingCost === 0 ? (
                            <span className="text-success">Free</span>
                          ) : (
                            `$${shippingCost.toFixed(2)}`
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-border/50">
                        <span className="font-semibold">Total</span>
                        <span className="text-xl font-bold gradient-text">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Shipping Information */}
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-heading font-bold mb-4">
                      Shipping Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Name
                        </p>
                        <p className="font-medium">{shippingData.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Phone
                        </p>
                        <p className="font-medium">{shippingData.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Email
                        </p>
                        <p className="font-medium">
                          {shippingData.email ?? "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Address
                        </p>
                        <p className="font-medium">{shippingData.address}</p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-heading font-bold mb-4">
                      Payment Method
                    </h3>
                    <p className="font-medium">
                      {paymentMethods.find((m) => m.id === paymentMethod)?.name}
                    </p>
                    {paymentMethod === "credit-card" && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Card ending in {paymentData.cardNumber.slice(-4)}
                      </p>
                    )}
                  </div>

                  {/* Confirmation Message */}
                  <div className="rounded-xl border border-success/20 bg-success/5 p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">
                        Confirmation email sent
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        A confirmation email has been sent to{" "}
                        <span className="font-medium">
                          {shippingData.email}
                        </span>
                        . Please check your inbox for order details and download
                        your digital products.
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Link
                      to="/"
                      className="flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-muted/30 transition-colors font-medium"
                    >
                      Continue Shopping
                    </Link>
                    <button className="flex items-center justify-center px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                      Download Products
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Payment Information */}
              {step === "payment" && (
                <div className="space-y-6">
                  {/* Back Button */}
                  <button
                    onClick={() => setStep("shipping")}
                    className="text-primary hover:text-primary/80 transition-colors font-medium text-sm flex items-center gap-1"
                  >
                    ← Back to Shipping
                  </button>

                  {/* Order Review */}
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-heading font-bold mb-4">
                      Order Review
                    </h3>
                    <div className="space-y-3 pb-4 border-b border-border/50">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <span className="font-semibold text-sm">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button className="text-primary text-sm font-medium mt-3 hover:text-primary/80 transition-colors">
                      Edit Cart
                    </button>
                  </div>

                  {/* Payment Methods */}
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-heading font-bold mb-4">
                      Payment Method
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {paymentMethods.map((method) => {
                        const Icon = method.icon;
                        const isSelected = paymentMethod === method.id;
                        return (
                          <motion.button
                            key={method.id}
                            onClick={() => setPaymentMethod(method.id)}
                            whileHover={{ scale: 1.02 }}
                            className={`p-4 rounded-lg border-2 transition-all text-left ${
                              isSelected
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/30 bg-muted/20"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <Icon
                                className={`w-5 h-5 mt-0.5 ${
                                  isSelected
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                }`}
                              />
                              <div>
                                <p className="font-medium text-sm">
                                  {method.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {method.description}
                                </p>
                              </div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Payment Gateway Details */}
                  {paymentMethod === "credit-card" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-border bg-card p-6 space-y-4"
                    >
                      <h4 className="font-heading font-semibold">
                        Card Details
                      </h4>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          name="cardholderName"
                          value={paymentData.cardholderName}
                          onChange={handlePaymentInputChange}
                          placeholder="John Doe"
                          className={`w-full px-4 py-2.5 rounded-lg bg-muted/50 border text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.payment.cardholderName
                              ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                              : "border-border focus:ring-primary/20 focus:border-primary/50"
                          }`}
                        />
                        {errors.payment.cardholderName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.payment.cardholderName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={paymentData.cardNumber}
                          onChange={handlePaymentInputChange}
                          placeholder="4242 4242 4242 4242"
                          className={`w-full px-4 py-2.5 rounded-lg bg-muted/50 border text-sm focus:outline-none focus:ring-2 transition-all font-mono ${
                            errors.payment.cardNumber
                              ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                              : "border-border focus:ring-primary/20 focus:border-primary/50"
                          }`}
                        />
                        {errors.payment.cardNumber && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.payment.cardNumber}
                          </p>
                        )}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={paymentData.expiryDate}
                            onChange={handlePaymentInputChange}
                            placeholder="MM/YY"
                            className={`w-full px-4 py-2.5 rounded-lg bg-muted/50 border text-sm focus:outline-none focus:ring-2 transition-all ${
                              errors.payment.expiryDate
                                ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                                : "border-border focus:ring-primary/20 focus:border-primary/50"
                            }`}
                          />
                          {errors.payment.expiryDate && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.payment.expiryDate}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={paymentData.cvv}
                            onChange={handlePaymentInputChange}
                            placeholder="123"
                            className={`w-full px-4 py-2.5 rounded-lg bg-muted/50 border text-sm focus:outline-none focus:ring-2 transition-all ${
                              errors.payment.cvv
                                ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                                : "border-border focus:ring-primary/20 focus:border-primary/50"
                            }`}
                          />
                          {errors.payment.cvv && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.payment.cvv}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {paymentMethod === "paypal" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-border bg-card p-6 text-center space-y-4"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <CircleDollarSign className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-2">
                          You will be redirected to PayPal
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Complete your payment securely with your PayPal
                          account
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {paymentMethod === "crypto" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-border bg-card p-6 space-y-4"
                    >
                      <h4 className="font-heading font-semibold">
                        Select Cryptocurrency
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {["Bitcoin", "Ethereum", "USDC", "USDT"].map(
                          (crypto) => (
                            <button
                              key={crypto}
                              className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors font-medium text-sm"
                            >
                              {crypto}
                            </button>
                          ),
                        )}
                      </div>
                    </motion.div>
                  )}

                  {paymentMethod === "bank-transfer" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-border bg-card p-6 space-y-4"
                    >
                      <h4 className="font-heading font-semibold">
                        Bank Transfer Details
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        We will provide you with bank transfer details after you
                        place the order. You'll receive an email with complete
                        instructions.
                      </p>
                    </motion.div>
                  )}

                  {/* Terms & Security */}
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">
                        Your payment is secure and encrypted
                      </p>
                      <p className="text-xs text-muted-foreground">
                        We use industry-standard SSL encryption to protect your
                        payment information.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={termsAccepted}
                        onChange={(e) => {
                          setTermsAccepted(e.target.checked);
                          if (e.target.checked && errors.payment.terms) {
                            setErrors((prev) => ({
                              ...prev,
                              payment: {
                                ...prev.payment,
                                terms: "",
                              },
                            }));
                          }
                        }}
                        className="w-4 h-4 rounded mt-1"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-muted-foreground"
                      >
                        I agree to the{" "}
                        <Link
                          to="#"
                          className="text-primary hover:text-primary/80"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="#"
                          className="text-primary hover:text-primary/80"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    {errors.payment.terms && (
                      <p className="text-red-500 text-xs mt-2 ml-7">
                        {errors.payment.terms}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={completePayment}
                    className="w-full px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    Complete Purchase - ${total.toFixed(2)}
                  </button>
                </div>
              )}
            </motion.div>

            {/* Order Summary Sidebar */}
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

                {/* Items Summary */}
                <div className="space-y-3 pb-6 border-b border-border/50">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? (
                        <span className="text-success">Free</span>
                      ) : (
                        `$${shippingCost.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
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
                    { icon: Truck, text: "Instant digital delivery" },
                    { icon: Shield, text: "Secure checkout" },
                    { icon: Package, text: "Lifetime access" },
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

                {/* Shipping Info */}
                {step === "payment" && (
                  <div className="p-4 rounded-lg bg-muted/50 space-y-2">
                    <h4 className="font-medium text-sm">Shipping To:</h4>
                    <p className="text-xs text-muted-foreground">
                      {shippingData.firstName} {shippingData.lastName}
                      <br />
                      {shippingData.address}
                      <br />
                      {shippingData.city}, {shippingData.state}{" "}
                      {shippingData.zipCode}
                    </p>
                    <button
                      onClick={() => setStep("shipping")}
                      className="text-xs text-primary hover:text-primary/80 font-medium mt-2"
                    >
                      Change Address
                    </button>
                  </div>
                )}

                {/* Security Badges */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground text-center mb-3">
                    Payments are secure & encrypted
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-medium">SSL Encrypted</p>
                      <p className="text-xs text-muted-foreground">
                        256-bit security
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            {[
              {
                icon: Shield,
                title: "100% Secure",
                description: "All transactions protected by SSL encryption",
              },
              {
                icon: Truck,
                title: "Digital Products",
                description: "Instant delivery after purchase",
              },
              {
                icon: Lock,
                title: "Money-Back Guarantee",
                description: "14-day refund policy if not satisfied",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center"
                >
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-heading font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
