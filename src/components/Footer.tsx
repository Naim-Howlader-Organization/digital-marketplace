import { Link } from "react-router-dom";

const footerLinks = {
  Marketplace: [
    { label: "Browse Products", to: "/products" },
    { label: "Categories", to: "/products" },
    { label: "Pricing", to: "/#pricing" },
    { label: "New Arrivals", to: "/products" },
  ],
  Company: [
    { label: "About", to: "/#about" },
    { label: "Careers", to: "#" },
    { label: "Contact", to: "#" },
    { label: "Blog", to: "#" },
  ],
  Support: [
    { label: "Help Center", to: "#" },
    { label: "FAQs", to: "#" },
    { label: "Terms of Service", to: "#" },
    { label: "Privacy Policy", to: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-heading text-xl font-bold mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-sm font-bold">D</span>
              </div>
              DigiMart
            </div>
            <p className="text-sm opacity-60 leading-relaxed">The premier marketplace for digital products, tools, and services for modern businesses.</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm opacity-60 hover:opacity-100 transition-opacity">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-50">© 2024 DigiMart. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Twitter", "GitHub", "LinkedIn", "YouTube"].map((s) => (
              <a key={s} href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
