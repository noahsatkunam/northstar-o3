import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Server, Shield, Bot, Lightbulb, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useContactModal } from "@/components/ContactModal";

const serviceCategories = [
  {
    id: "managed-it",
    icon: Server,
    title: "Managed IT Services",
    description: "Comprehensive IT support that keeps your business running smoothly",
    features: [
      "24/7 monitoring and support",
      "Help desk and end-user support",
      "Network management & firewalls",
      "Hardware and software lifecycle management",
      "Vendor management",
      "Cloud infrastructure management",
      "Advanced patching",
      "Tenant backups (M365/cloud)",
      "Endpoint backups",
      "Disaster recovery & backup",
    ],
    cta: "Learn more about Managed IT",
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Protect your business and meet regulatory requirements with confidence",
    features: [
      "EDR/AV (Endpoint Detection & Response)",
      "Ringfencing (application isolation)",
      "SASE/SD-WAN (Secure Access Service Edge)",
      "DNS filtering",
      "Anti-spam, DLP & phishing protection",
      "Mobile device security (MDM)",
      "Dark web monitoring",
      "Training & simulations (security awareness)",
      "CSRA (Cybersecurity Risk Assessment)",
      "Cyberinsurance readiness",
      "HIPAA, SOC 2 & regulatory compliance",
      "Incident response planning",
    ],
    cta: "Strengthen Your Security Posture",
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI & Automation Solutions",
    description: "Leverage intelligent automation to transform your operations",
    features: [
      "Business process automation",
      "AI-powered workflow optimization",
      "Intelligent document processing",
      "Custom automation development",
      "AI strategy consulting",
    ],
    cta: "Explore AI Solutions",
  },
  {
    id: "consulting",
    icon: Lightbulb,
    title: "Strategic IT Consulting",
    description: "Expert guidance to align technology with your business goals",
    features: [
      "vCISO (Virtual Chief Information Security Officer)",
      "Technology roadmap development",
      "IT budgeting and planning",
      "Digital transformation strategy",
      "Infrastructure architecture",
      "M&A technology due diligence",
      "Projects (rebuilds, migrations, etc.)",
    ],
    cta: "Schedule a Strategy Session",
  },
];

export default function Services() {
  const { openModal } = useContactModal();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient-bg hero-grid-pattern relative isolate overflow-hidden border-b border-border/70 py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 grain-texture opacity-30 pointer-events-none" />
        
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-gradient-shift bg-[length:200%_200%]"
          aria-hidden="true"
        />

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1
              className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl animate-fade-in-up"
              style={{ animationDelay: '0ms', animationFillMode: 'both' }}
            >
              Technology Solutions That Drive Your <span className="text-gradient-light">Business Forward</span>
            </h1>
            <p
              className="mx-auto mt-8 max-w-2xl text-lg text-white/78 md:text-xl animate-fade-in-up leading-relaxed"
              style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            >
              From day-to-day IT support to AI-powered automation, we deliver the expertise you need.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/5 p-1.5 text-white/75">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Service Categories - Bento Grid Style */}
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,hsl(var(--primary)/0.1),transparent_40%),radial-gradient(circle_at_84%_84%,hsl(var(--accent)/0.1),transparent_40%)]" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {serviceCategories.map((category, index) => (
              <div 
                key={category.id} 
                className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/75 p-8 shadow-soft backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated md:p-10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -mr-8 -mt-8 right-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <category.icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="mb-8 text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  
                  <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground/90">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline" 
                      className="group/btn w-full sm:w-auto border-primary/30 hover:border-primary hover:bg-primary/10" 
                      onClick={openModal}
                    >
                      {category.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                    {category.id === "cybersecurity" && (
                      <Link to="/risk-assessment">
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 text-xs">
                          Try our free Security Check →
                        </Button>
                      </Link>
                    )}
                    {category.id === "cybersecurity" && (
                      <Link to="/compliance">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary text-xs">
                          Compliance frameworks →
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="hero-gradient-bg hero-grid-pattern relative overflow-hidden border-t border-border/70 py-24 text-center md:py-32">
        <div className="absolute inset-0 grain-texture opacity-30 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-white/78 mb-10">
              Our team will assess your current environment and recommend the right solutions.
            </p>
            <Button 
              size="lg" 
              className="h-14 px-10 text-lg"
              onClick={openModal}
            >
              Get a Free Assessment
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
