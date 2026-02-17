import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wallet,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  
  MapPin,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
   // { name: "Careers", href: "/careers" },
   // { name: "Press", href: "/press" },
   // { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/#faq" },
   // { name: "Agent Locator", href: "/agents" },
    { name: "NRB Gunaso Portal", href: "https://gunaso.nrb.org.np/" , target: "_blank"},
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
   // { name: "Compliance", href: "/compliance" },
  ],
  pricing: [
    { name: "Transaction Limits", href: "/limits" },
    { name: "Service Charges", href: "/charges" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Link to="/" className="flex items-center gap-2">
                <div className="ncash-gradient-bg p-2 rounded-xl">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <span className="font-display font-bold text-2xl ncash-gradient-text">
                  N-Cash
                </span>
              </Link>
            </motion.div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Nepal's unified digital payment platform. Bringing together
              payments, financial services, and lifestyle — all in one app.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@himalpay.com.np</span>
              </div>
              {/* <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+977 1-XXX-XXX</span>
              </div> */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Durbarmarg, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    target={link.target}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Pricing</h4>
            <ul className="space-y-3">
              {footerLinks.pricing.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Himal Pay Pvt. Ltd. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
