import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { CountUp } from "@/components/motion/CountUp";
import { 
  Shield, 
  Server, 
  Bot, 
  ArrowRight, 
  ChevronDown, 
  Heart, 
  Lock, 
  Scale, 
  Building, 
  Rocket, 
  CheckCircle2,
  Check
} from "lucide-react";
import { useContactModal } from "@/components/ContactModal";
import inc5000Badge from "@/assets/inc-5000-badge.png";
import soc2Badge from "@/assets/soc2-badge.webp";
import hipaaBadge from "@/assets/hipaa-badge.png";

export default function Index() {
  const { openModal } = useContactModal();

  const scrollToProtectPropel = () => {
    const element = document.getElementById('protect-propel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-gradient-bg py-20 md:py-28 lg:py-32">
        {/* Grain texture overlay */}
        <div className="absolute inset-0 grain-texture opacity-20 pointer-events-none" />

        {/* Animated gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-gradient-shift bg-[length:200%_200%]"
          aria-hidden="true"
        />

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float will-change-transform" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float will-change-transform" style={{ animationDelay: '3s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto max-w-5xl text-center">
            <h1
              className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl mb-8"
            >
              Technology should <span className="text-primary">protect</span> your organization and <span className="text-accent">propel</span> it into the future.
            </h1>
            <p
              className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl leading-relaxed mb-10"
            >
              We help regulated organizations stay secure, audit-ready, and fully operational - then safely modernize with AI to move faster and scale with confidence.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button
                size="lg"
                variant="default"
                className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(0,102,204,0.3)] hover:shadow-[0_0_30px_rgba(0,102,204,0.5)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                onClick={scrollToProtectPropel}
              >
                See How It Works
              </Button>
              <Link to="/risk-assessment">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white hover:border-white/40 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                >
                  Run a Security & AI Readiness Check
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle opacity-50 cursor-pointer" onClick={scrollToProtectPropel}>
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* SECTION 2 - BELIEF EXPANSION */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-6">
              Most regulated organizations are being pulled in two directions.
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Cyber risk is rising. Compliance expectations are tightening. And AI is transforming the world faster than most teams can safely adapt.
              </p>
              <p>
                Yet many IT strategies are still reactive: fragmented vendors, constant firefighting, and no clear path forward.
              </p>
              <p>
                We believe organizations entrusted with sensitive data deserve more than survival. They deserve technology that creates stability, confidence, and a future-ready advantage, without adding chaos or complexity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 - THE DIFFERENT WAY (HOW) */}
      <section id="protect-propel" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl mb-4">
              A safer path for regulated organizations: <span className="text-primary">Protect</span> <span className="text-muted-foreground">→</span> <span className="text-accent">Propel™</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A two-part system that keeps you secure and audit-ready today, then helps you modernize with safe, practical AI.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto relative">
            {/* Connecting Arrow for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-muted-foreground/30">
              <ArrowRight className="h-12 w-12" />
            </div>

            {/* PROTECT Column */}
            <AnimatedSection className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg relative overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield className="h-32 w-32" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">PROTECT</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Protected from ransomware and breaches",
                  "Audit-ready year-round (HIPAA / CMMC / GLBA)",
                  "Operational uptime you can count on",
                  "24/7 monitoring and response"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary/60 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* PROPEL Column */}
            <AnimatedSection className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg relative overflow-hidden group hover:border-accent/30 transition-colors" delay={0.2}>
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Rocket className="h-32 w-32" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-accent">PROPEL</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Secure, compliant AI adoption",
                  "Automation that frees up staff time",
                  "Faster workflows and documentation",
                  "Scale without adding headcount"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent/60 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="text-lg font-medium text-muted-foreground italic mb-8">
              "Protection is your foundation. Propulsion is your advantage."
            </p>
            <Link to="/risk-assessment" className="hidden sm:inline-block">
              <Button
                size="lg"
                variant="default"
                className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(0,102,204,0.3)] hover:shadow-[0_0_30px_rgba(0,102,204,0.5)] transition-all duration-300 hover:-translate-y-1"
              >
                Assess Your Readiness
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 - WHO IT'S FOR */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
              Built for organizations that can't afford mistakes.
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              If security, compliance, and operational confidence matter to your organization, you're in the right place.
            </p>
            <p className="text-base text-muted-foreground/80">
              Where audits, downtime, and sensitive data exposure carry real consequences.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Heart, label: "Healthcare Organizations", description: "HIPAA-secure systems that protect patient care and reduce audit stress.", link: "/compliance" },
              { icon: Shield, label: "DoD Contractors (CMMC)", description: "CMMC-ready cybersecurity that keeps contracts compliant and assessments smooth.", link: "/services" },
              { icon: Scale, label: "Law Firms & Professional Services", description: "Technology that protects client confidentiality and billable momentum.", link: "/services" },
              { icon: Building, label: "Financial Institutions", description: "Audit-ready security that reduces risk and strengthens client trust.", link: "/services" },
            ].map((industry, i) => (
              <StaggerItem key={i} className="h-full">
                <Link to={industry.link} className="block h-full">
                <div className="bg-background border border-border/50 rounded-xl p-6 h-full flex flex-col items-center text-center hover:shadow-md transition-all hover:-translate-y-1 group">
                  <div className="h-14 w-14 rounded-full bg-secondary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <industry.icon className="h-7 w-7 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{industry.label}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                  <span className="mt-3 inline-flex items-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-10 hidden sm:block">
            <Link to="/risk-assessment">
              <Button
                size="lg"
                variant="default"
                className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1"
              >
                Check Your Security Posture <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 - SERVICES (WHAT) */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
              How we help, built for regulated confidence.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to stay secure, audit-ready, and prepared for safe AI modernization, under one trusted partner.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Server,
                title: "Managed IT & Operations",
                subtitle: "Reliable operations, zero surprises.",
                description: "Always-on systems that reduce downtime and keep your organization running smoothly."
              },
              {
                icon: Shield,
                title: "Cybersecurity & Compliance",
                subtitle: "Protection built for audit pressure.",
                description: "24/7 security and compliance-ready controls that keep audits stress-free."
              },
              {
                icon: Bot,
                title: "AI Modernization",
                subtitle: "Practical AI, implemented safely.",
                description: "Automation and productivity gains, with the guardrails regulated teams require."
              }
            ].map((service, i) => (
              <StaggerItem key={i}>
                <div className="flex flex-col items-center text-center p-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{service.subtitle}</p>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/risk-assessment">
              <Button
                size="lg"
                variant="default"
                className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1"
              >
                Free Security Check <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 - PROOF */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
              Trusted in high-stakes, regulated environments.
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Organizations choose NorthStar when cybersecurity, compliance, and uptime can't be left to chance.
            </p>
            
            {/* Badges */}
            <div className="flex justify-center items-center gap-6 mb-4 transition-all duration-500">
              <img src={inc5000Badge} alt="Inc. 5000" className="h-14 w-auto object-contain" />
              <img src={soc2Badge} alt="SOC 2 Type II" className="h-14 w-auto object-contain" />
              <img src={hipaaBadge} alt="HIPAA Compliant" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Back-to-back Inc. 5000 honoree: #3837 (2024) and #2393 (2025) with 178% three-year growth. Founded in 2000, 25+ years of trusted IT partnership.
            </p>

            {/* Testimonial */}
            <div className="max-w-2xl mx-auto mt-10 p-6 bg-background rounded-xl border border-border/50 shadow-sm">
              <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                "NorthStar gave us the confidence that our security and compliance posture could keep pace with our growth. They don't just manage our IT. They genuinely understand the regulatory pressures we face every day."
              </blockquote>
              <p className="mt-4 text-sm font-medium text-foreground">- IT Director, Healthcare Organization</p>
            </div>

          </AnimatedSection>

          {/* Free Tools & Resources */}
          <AnimatedSection className="mt-12">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link to="/dmarc-checker" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors font-medium">
                <Lock className="h-4 w-4" /> Free Phishing Check <ArrowRight className="h-3 w-3" />
              </Link>
              <span className="text-border hidden sm:inline">|</span>
              <Link to="/webinars" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors font-medium">
                Upcoming Webinars <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 - GUIDED NEXT STEP (Final CTA) */}
      <section className="relative py-24 md:py-32 overflow-hidden hero-gradient-bg text-center">
        <div className="absolute inset-0 grain-texture opacity-20 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl mb-6">
              Start with clarity, not a sales pitch.
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              In regulated environments, you don't need more noise. You need to know where you stand. We'll help you understand your security, compliance, and AI readiness, clearly and calmly.
            </p>
            <Link to="/risk-assessment">
              <Button
                size="lg"
                className="h-14 px-10 text-lg bg-white text-black hover:bg-white/90 shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                Run a Security & AI Readiness Check
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
