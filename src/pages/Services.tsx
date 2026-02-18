import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      <section className="relative overflow-hidden hero-gradient-bg py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 grain-texture opacity-20 pointer-events-none" />
        
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
              Technology Solutions That Drive Your <span className="text-gradient">Business Forward</span>
            </h1>
            <p
              className="mx-auto mt-8 max-w-2xl text-lg text-gray-300 md:text-xl animate-fade-in-up leading-relaxed"
              style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            >
              From day-to-day IT support to AI-powered automation, we deliver the expertise you need.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle opacity-50">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Service Categories - Bento Grid Style */}
      <section className="py-24 md:py-32 relative bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {serviceCategories.map((category, index) => (
              <div 
                key={category.id} 
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 md:p-10 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
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
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground/90">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline" 
                      className="group/btn w-full sm:w-auto border-primary/20 hover:border-primary hover:bg-primary/5" 
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
      <section className="relative py-24 md:py-32 overflow-hidden hero-gradient-bg text-center">
        <div className="absolute inset-0 grain-texture opacity-20 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Our team will assess your current environment and recommend the right solutions.
            </p>
            <Button 
              size="lg" 
              className="h-14 px-10 text-lg bg-white text-black hover:bg-white/90 shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
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
