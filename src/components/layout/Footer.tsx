import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import inc5000Badge from "@/assets/inc-5000-badge.png";
import soc2Badge from "@/assets/soc2-badge.webp";
import hipaaBadge from "@/assets/hipaa-badge.png";
import { useContactModal } from "@/components/ContactModal";

const quickLinks = [
  { name: "Services", href: "/services" },
  { name: "Compliance", href: "/compliance" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const resources = [
  { name: "Webinars", href: "/webinars" },
  { name: "DMARC Tool", href: "/dmarc-checker" },
  { name: "Contact", href: "/about" },
];

export function Footer() {
  const { openModal } = useContactModal();
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus("idle");
    setErrorMessage("");

    if (!email.trim()) {
      setSubscribeStatus("error");
      setErrorMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setSubscribeStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // UI only - no actual API call
    setSubscribeStatus("success");
    setEmail("");
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#0B1120] text-slate-100">
      <div className="absolute inset-0 grain-texture opacity-20 pointer-events-none" />
      {/* CTA Band */}
      <section className="relative overflow-hidden hero-gradient-bg py-16 md:py-20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.4),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.3),transparent_60%)]" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Ready to transform your IT?
              </h2>
              <p className="mt-2 text-slate-300">
                Let's discuss how we can help your business thrive.
              </p>
            </div>
            <Button size="lg" onClick={openModal}>
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--accent)),transparent_40%)]" />
        </div>

        <div className="container relative mx-auto px-4 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Company</h3>
              <Link to="/" className="mt-4 flex items-center">
                <img
                  src="/logos/northstar-logo-white.png"
                  alt="NorthStar Technology Group"
                  className="h-16 w-auto"
                />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
                Your trusted partner for managed IT services, cybersecurity, compliance, and AI automation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-slate-400 transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Resources</h3>
              <ul className="mt-4 space-y-3">
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-slate-400 transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="tel:+1-866-337-9096"
                    className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    866-337-9096
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@northstar-tg.com"
                    className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    info@northstar-tg.com
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-sm text-slate-400">
                    <MapPin className="h-4 w-4" />
                    Fargo, ND
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 border-t border-white/10 pt-10">
            <div className="mx-auto max-w-md text-center">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                Stay Updated
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Subscribe to our newsletter for IT insights and updates.
              </p>
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (subscribeStatus !== "idle") {
                      setSubscribeStatus("idle");
                      setErrorMessage("");
                    }
                  }}
                  className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-primary focus-visible:border-primary"
                  aria-label="Email for newsletter"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">Subscribe</Button>
              </form>
              {subscribeStatus === "error" && errorMessage && (
                <p className="mt-2 text-sm text-destructive">{errorMessage}</p>
              )}
              {subscribeStatus === "success" && (
                <p className="mt-2 text-sm text-primary">Thank you for subscribing!</p>
              )}
              <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-500">
                <Link to="/webinars" className="hover:text-primary transition-colors">Upcoming Webinars</Link>
                <span>|</span>
                <Link to="/risk-assessment" className="hover:text-primary transition-colors">Free Security Check</Link>
              </div>
            </div>
          </div>

          {/* Certification Badges */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <div className="flex flex-col items-center gap-1.5">
                <img src={inc5000Badge} alt="Inc. 5000" className="h-12 w-auto object-contain" />
                <span className="text-[10px] text-slate-500">Inc. 5000</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <img src={soc2Badge} alt="SOC 2 Type II" className="h-12 w-auto object-contain" />
                <span className="text-[10px] text-slate-500">SOC 2 Certified</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <img src={hipaaBadge} alt="HIPAA Compliant" className="h-12 w-auto object-contain" />
                <span className="text-[10px] text-slate-500">HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} NorthStar Technology Group. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/privacy-policy"
                  className="text-sm text-slate-400 transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className="text-sm text-slate-400 transition-colors hover:text-primary"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/northstar-technology-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/NorthstarTG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-primary"
                aria-label="X (Twitter)"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/NorthStarTG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/northstartechno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-all duration-200 hover:-translate-y-1 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
