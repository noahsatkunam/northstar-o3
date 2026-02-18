import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const helpfulLinks = [
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "DMARC Checker", href: "/dmarc-checker" },
];

const NotFound = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient-bg hero-grid-pattern relative isolate overflow-hidden border-b border-border/70 py-20 md:py-28">
        <div className="absolute inset-0 grain-texture opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-8xl font-bold text-white/20 md:text-9xl">
              404
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Page Not Found
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
              >
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl border border-border/70 bg-card/72 p-8 text-center shadow-soft backdrop-blur">
            <h2 className="text-xl font-semibold text-foreground">
              Looking for something? Try:
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="rounded-full border border-border/70 bg-background/65 px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
