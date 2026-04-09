import logo from "@/assets/logo.jpg";
import { contactInfo } from "@/data/contact";
import { Link } from "react-router-dom";

const footerLinks = {
  Marketplace: [
    { label: "Browse Products", to: "/products" },
    { label: "Services", to: "/products" },
    { label: "Pricing", to: "/pricing" },
    { label: "New Arrivals", to: "/products" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Careers", to: "/career" },
    { label: "Contact", to: "/contact" },
    { label: "Blog", to: "/blog" },
  ],
  Support: [
    { label: "Help Center", to: "/help-center" },
    { label: "FAQs", to: "/faq" },
    { label: "Terms and Condition", to: "/terms-and-conditions" },
    { label: "Privacy Policy", to: "/privacy-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-heading text-xl font-bold mb-4">
              <img
                src={logo}
                alt="Skilled Zone"
                className="w-8 h-8 rounded-lg object-cover"
              />
              Skilled Zone
            </div>
            <p className="text-sm opacity-60 leading-relaxed">
              The premier marketplace for digital products, tools, and services
              for modern businesses.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[13px] opacity-60 hover:opacity-100 transition-opacity uppercase"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-50">
            © 2026 Skilled Zone. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {Object.entries(contactInfo.socialMedia).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
