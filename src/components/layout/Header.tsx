import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Wrench } from "lucide-react";
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "glass border-b border-white/10 shadow-lg backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 py-2"
            : "bg-background/80 backdrop-blur-sm py-1"
        )}
      >
        <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logos/northstar-logo.png"
              alt="NorthStar Technology Group"
              className="h-[9.6rem] w-auto transition-all duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                  item.isTool
                    ? cn(
                        "flex items-center gap-1.5 bg-secondary/10 hover:bg-secondary/20",
                        isActive(item.href)
                          ? "text-secondary bg-secondary/20"
                          : "text-secondary"
                      )
                    : cn(
                        // Base styles with underline animation setup
                        "relative hover:text-primary hover:bg-muted",
                        // Underline pseudo-element: slides in from left on hover
                        "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary",
                        "after:origin-left after:scale-x-0 after:transition-transform after:duration-200",
                        "hover:after:scale-x-100",
                        // Active dot indicator: small centered dot below the underline (distinct from hover)
                        "before:absolute before:bottom-[-4px] before:left-1/2 before:-translate-x-1/2",
                        "before:h-1 before:w-1 before:rounded-full before:bg-primary",
                        "before:opacity-0 before:transition-opacity before:duration-200",
                        isActive(item.href)
                          ? "text-primary bg-muted after:scale-x-100 before:opacity-100"
                          : "text-muted-foreground"
                      )
                )}
              >
                {item.isTool && <Wrench className="h-3.5 w-3.5" />}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Button
              variant="default"
              size="sm"
              onClick={openModal}
              className="border-0 text-white animate-subtle-glow hover:brightness-110 transition-all"
              style={{ background: 'var(--gradient-primary)' }}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-out",
          mobileMenuOpen
            ? "bg-foreground/25 backdrop-blur-[8px] opacity-100"
            : "bg-transparent backdrop-blur-0 opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Slide-in Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[280px] max-w-[85vw] bg-background shadow-xl lg:hidden transition-transform duration-300 ease-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-border">
          <span className="text-lg font-bold text-foreground">Menu</span>
          <button
            type="button"
            className="p-2 text-foreground hover:bg-muted rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-[calc(100%-4rem)] overflow-y-auto">
          <div className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-2 px-3 py-3 text-base font-medium rounded-md",
                  // Smooth transitions for hover and active states
                  "transition-all duration-150",
                  // Touch/tap feedback - scale down slightly when pressed
                  "active:scale-[0.98] active:transition-none",
                  // Staggered fade-in-up animation when menu is open
                  mobileMenuOpen
                    ? "animate-fade-in-up"
                    : "opacity-0",
                  item.isTool
                    ? cn(
                        "bg-secondary/10",
                        isActive(item.href)
                          ? "text-secondary bg-secondary/20"
                          : "text-secondary hover:bg-secondary/20 active:bg-secondary/30"
                      )
                    : cn(
                        // Add relative and before: for active left border indicator
                        "relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2",
                        "before:h-4 before:w-1 before:rounded-full before:bg-primary",
                        "before:opacity-0 before:transition-opacity before:duration-200",
                        isActive(item.href)
                          ? "text-primary bg-muted before:opacity-100"
                          : "text-foreground hover:bg-muted hover:text-primary active:bg-muted/80"
                      )
                )}
                style={{
                  animationDelay: mobileMenuOpen ? `${index * 75}ms` : '0ms',
                }}
              >
                {item.isTool && <Wrench className="h-4 w-4" />}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer with CTA */}
          <div className="p-4 border-t border-border">
            <Button
              variant="default"
              className="w-full border-0 text-white animate-subtle-glow hover:brightness-110 transition-all"
              style={{ background: 'var(--gradient-primary)' }}
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
