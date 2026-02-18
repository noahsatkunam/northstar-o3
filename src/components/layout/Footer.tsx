import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
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

    setSubscribeStatus("success");
    setEmail("");
  };

  return (
    <footer className="relative border-t border-border/80 bg-sidebar text-sidebar-foreground">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-[-8%] h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-[-8%] h-72 w-72 rounded-full bg-accent/12 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.07]" />
      </div>

      <section className="relative border-b border-border/70 py-16 md:py-20">
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="rounded-3xl border border-border/80 bg-card/55 p-8 shadow-elevated backdrop-blur md:p-10">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold tracking-tight text-sidebar-foreground md:text-3xl">
                  Ready to transform your IT?
                </h2>
                <p className="mt-2 text-sidebar-foreground/75">
                  Let&apos;s discuss how we can help your business thrive.
                </p>
              </div>
              <Button size="lg" onClick={openModal}>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="container relative mx-auto px-4 py-14 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-sidebar-foreground/70">
                Company
              </h3>
              <Link to="/" className="mt-4 inline-flex items-center">
                <img
                  src="/logos/northstar-logo-white.png"
                  alt="NorthStar Technology Group"
                  className="h-14 w-auto"
                />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-sidebar-foreground/70">
                Your trusted partner for managed IT services, cybersecurity, compliance, and AI automation.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-sidebar-foreground/70">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-sidebar-foreground/72 transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-sidebar-foreground/70">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-sidebar-foreground/72 transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-sidebar-foreground/70">
                Contact
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="tel:+1-866-337-9096"
                    className="flex items-center gap-2 text-sm text-sidebar-foreground/72 transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    866-337-9096
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@northstar-tg.com"
                    className="flex items-center gap-2 text-sm text-sidebar-foreground/72 transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    info@northstar-tg.com
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-sm text-sidebar-foreground/72">
                    <MapPin className="h-4 w-4" />
                    Fargo, ND
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-border/70 pt-10">
            <div className="mx-auto max-w-xl rounded-2xl border border-border/70 bg-card/55 p-6 text-center backdrop-blur">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-sidebar-foreground/70">
                Stay Updated
              </h3>
              <p className="mt-2 text-sm text-sidebar-foreground/72">
                Subscribe to our newsletter for IT insights and updates.
              </p>

              <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2 sm:flex-row">
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
                  className="flex-1 bg-sidebar/55 text-sidebar-foreground placeholder:text-sidebar-foreground/45"
                  aria-label="Email for newsletter"
                />
                <Button type="submit" className="sm:w-auto">
                  Subscribe
                </Button>
              </form>

              {subscribeStatus === "error" && errorMessage && (
                <p className="mt-2 text-sm text-destructive">{errorMessage}</p>
              )}
              {subscribeStatus === "success" && (
                <p className="mt-2 text-sm text-primary">Thank you for subscribing!</p>
              )}

              <div className="mt-4 flex items-center justify-center gap-3 text-xs text-sidebar-foreground/55">
                <Link to="/webinars" className="transition-colors hover:text-primary">
                  Upcoming Webinars
                </Link>
                <span>|</span>
                <Link to="/risk-assessment" className="transition-colors hover:text-primary">
                  Free Security Check
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-border/70 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border/65 bg-card/45 px-4 py-3">
                <img src={inc5000Badge} alt="Inc. 5000" className="h-10 w-auto object-contain" />
                <span className="text-[10px] text-sidebar-foreground/60">Inc. 5000</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border/65 bg-card/45 px-4 py-3">
                <img src={soc2Badge} alt="SOC 2 Type II" className="h-10 w-auto object-contain" />
                <span className="text-[10px] text-sidebar-foreground/60">SOC 2 Certified</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border/65 bg-card/45 px-4 py-3">
                <img src={hipaaBadge} alt="HIPAA Compliant" className="h-10 w-auto object-contain" />
                <span className="text-[10px] text-sidebar-foreground/60">HIPAA Compliant</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/70 pt-8 md:flex-row">
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
              <p className="text-sm text-sidebar-foreground/66">
                © {new Date().getFullYear()} NorthStar Technology Group. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/privacy-policy"
                  className="text-sm text-sidebar-foreground/66 transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className="text-sm text-sidebar-foreground/66 transition-colors hover:text-primary"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/northstar-technology-group"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/75 text-sidebar-foreground/72 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/NorthstarTG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/75 text-sidebar-foreground/72 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                aria-label="X (Twitter)"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/NorthStarTG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/75 text-sidebar-foreground/72 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/northstartechno"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/75 text-sidebar-foreground/72 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
