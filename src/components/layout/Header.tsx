import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Wrench, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/ContactModal";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", isTool: false },
  { name: "Services", href: "/services", isTool: false },
  { name: "Compliance", href: "/compliance", isTool: false },
  { name: "About", href: "/about", isTool: false },
  { name: "Blog", href: "/blog", isTool: false },
  { name: "Webinars", href: "/webinars", isTool: false },
  { name: "Security Check", href: "/security-check", isTool: true },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openModal } = useContactModal();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
          isScrolled
            ? "border-border/80 bg-background/88 shadow-[0_18px_35px_-28px_hsl(var(--foreground)/0.85)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/72"
            : "bg-background/70 backdrop-blur-sm"
        )}
      >
        <nav className="container mx-auto flex h-[4.75rem] items-center justify-between px-4 lg:px-8">
          <Link
            to="/"
            className="group flex items-center rounded-xl border border-transparent p-1 transition-colors hover:border-border/70"
            aria-label="NorthStar Technology Group Home"
          >
            <img
              src="/logos/northstar-logo-white.png"
              alt="NorthStar Technology Group"
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-border/75 bg-card/70 p-1 backdrop-blur">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                    item.isTool
                      ? cn(
                          "inline-flex items-center gap-1.5 border",
                          isActive(item.href)
                            ? "border-secondary/45 bg-secondary/22 text-secondary"
                            : "border-secondary/30 bg-secondary/12 text-secondary hover:bg-secondary/20"
                        )
                      : cn(
                          isActive(item.href)
                            ? "bg-primary/14 text-primary"
                            : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                        )
                  )}
                >
                  {item.isTool && <Wrench className="h-3.5 w-3.5" />}
                  {item.name}
                </Link>
              ))}
            </div>

            <Button size="sm" onClick={openModal} className="ml-1 px-5">
              Contact Us
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-border/70 bg-card/70 p-2 text-foreground transition-colors hover:bg-muted/70 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/55 transition-all duration-300 lg:hidden",
          mobileMenuOpen ? "opacity-100 backdrop-blur-[4px]" : "pointer-events-none opacity-0 backdrop-blur-0"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-[310px] max-w-[88vw] border-l border-border/80 bg-background/96 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-[4.75rem] items-center justify-between border-b border-border/70 px-4">
          <span className="text-sm font-semibold tracking-[0.08em] text-muted-foreground uppercase">
            Navigation
          </span>
          <button
            type="button"
            className="rounded-lg border border-border/70 bg-card/70 p-2 text-foreground transition-colors hover:bg-muted/70"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex h-[calc(100%-4.75rem)] flex-col">
          <div className="flex-1 space-y-1 overflow-y-auto px-4 py-4">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-150",
                  mobileMenuOpen ? "animate-fade-in-up" : "opacity-0",
                  item.isTool
                    ? cn(
                        isActive(item.href)
                          ? "border border-secondary/40 bg-secondary/18 text-secondary"
                          : "border border-secondary/25 bg-secondary/10 text-secondary hover:bg-secondary/18"
                      )
                    : cn(
                        isActive(item.href)
                          ? "bg-primary/12 text-primary"
                          : "text-foreground hover:bg-muted/70"
                      )
                )}
                style={{
                  animationDelay: mobileMenuOpen ? `${index * 70}ms` : "0ms",
                }}
              >
                {item.isTool && <Wrench className="h-4 w-4" />}
                {item.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-border/70 p-4">
            <Button
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
