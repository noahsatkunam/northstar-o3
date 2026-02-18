import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { StaggerContainer } from "@/components/motion/StaggerContainer";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { CountUp } from "@/components/motion/CountUp";
import {
  ArrowRight,
  Bot,
  Building,
  CheckCircle2,
  ChevronDown,
  Heart,
  Lock,
  Rocket,
  Scale,
  Server,
  Shield,
} from "lucide-react";
import inc5000Badge from "@/assets/inc-5000-badge.png";
import soc2Badge from "@/assets/soc2-badge.webp";
import hipaaBadge from "@/assets/hipaa-badge.png";

const industries = [
  {
    icon: Heart,
    label: "Healthcare Organizations",
    description: "HIPAA-secure systems that protect patient care and reduce audit stress.",
    link: "/compliance",
  },
  {
    icon: Shield,
    label: "DoD Contractors (CMMC)",
    description: "CMMC-ready cybersecurity that keeps contracts compliant and assessments smooth.",
    link: "/services",
  },
  {
    icon: Scale,
    label: "Law Firms & Professional Services",
    description: "Technology that protects client confidentiality and billable momentum.",
    link: "/services",
  },
  {
    icon: Building,
    label: "Financial Institutions",
    description: "Audit-ready security that reduces risk and strengthens client trust.",
    link: "/services",
  },
];

const serviceHighlights = [
  {
    icon: Server,
    title: "Managed IT & Operations",
    subtitle: "Reliable operations, zero surprises.",
    description:
      "Always-on systems that reduce downtime and keep your organization running smoothly.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    subtitle: "Protection built for audit pressure.",
    description:
      "24/7 security and compliance-ready controls that keep audits stress-free.",
  },
  {
    icon: Bot,
    title: "AI Modernization",
    subtitle: "Practical AI, implemented safely.",
    description:
      "Automation and productivity gains, with the guardrails regulated teams require.",
  },
];

const proofStats = [
  {
    prefix: "",
    value: 25,
    suffix: "+",
    label: "Years of trusted IT partnership",
  },
  {
    prefix: "",
    value: 178,
    suffix: "%",
    label: "Three-year growth",
  },
  {
    prefix: "#",
    value: 2393,
    suffix: "",
    label: "Inc. 5000 rank in 2025",
  },
];

export default function Index() {
  const scrollToProtectPropel = () => {
    const element = document.getElementById("protect-propel");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <section className="hero-gradient-bg hero-grid-pattern relative isolate flex min-h-[90vh] items-center overflow-hidden py-24 md:py-32 lg:py-36">
        <div className="grain-texture absolute inset-0 opacity-35" />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="hero-floating-shape hero-floating-shape-primary -left-24 top-12 h-96 w-96 blur-3xl" />
          <div className="hero-floating-shape hero-floating-shape-accent -right-28 bottom-0 h-[26rem] w-[26rem] blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Technology should <span className="text-gradient-light">protect</span> your
              organization and <span className="text-gradient-light">propel</span> it into the
              future.
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/78 md:text-xl">
              We help regulated organizations stay secure, audit-ready, and fully operational -
              then safely modernize with AI to move faster and scale with confidence.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Button
                size="lg"
                variant="default"
                className="h-14 w-full px-8 text-lg sm:w-auto"
                onClick={scrollToProtectPropel}
              >
                See How It Works
              </Button>

              <Link to="/risk-assessment" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 w-full border-white/35 bg-white/8 px-8 text-lg text-white hover:bg-white/14 hover:text-white sm:w-auto"
                >
                  Run a Security & AI Readiness Check
                </Button>
              </Link>
            </div>

            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2.5 text-xs font-medium text-white/72 sm:text-sm">
              <span className="rounded-full border border-white/15 bg-white/6 px-3 py-1.5">
                Cybersecurity and compliance for regulated organizations
              </span>
              <span className="rounded-full border border-white/15 bg-white/6 px-3 py-1.5">
                Safe AI adoption strategy
              </span>
            </div>
          </AnimatedSection>
        </div>

        <button
          type="button"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/5 p-2 text-white/70 transition-colors hover:text-white"
          onClick={scrollToProtectPropel}
          aria-label="Scroll to Protect and Propel section"
        >
          <ChevronDown className="h-6 w-6 animate-bounce-subtle" />
        </button>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto max-w-4xl rounded-3xl border border-border/75 bg-card/60 p-8 text-center shadow-soft backdrop-blur md:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Most regulated organizations are being pulled in two directions.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Cyber risk is rising. Compliance expectations are tightening. And AI is
                transforming the world faster than most teams can safely adapt.
              </p>
              <p>
                Yet many IT strategies are still reactive: fragmented vendors, constant
                firefighting, and no clear path forward.
              </p>
              <p>
                We believe organizations entrusted with sensitive data deserve more than survival.
                They deserve technology that creates stability, confidence, and a future-ready
                advantage, without adding chaos or complexity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="protect-propel" className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,hsl(var(--primary)/0.12),transparent_48%),radial-gradient(circle_at_82%_84%,hsl(var(--accent)/0.1),transparent_45%)]" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              A safer path for regulated organizations: <span className="text-primary">Protect</span>{" "}
              <span className="text-muted-foreground">→</span>{" "}
              <span className="text-accent">Propel™</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A two-part system that keeps you secure and audit-ready today, then helps you
              modernize with safe, practical AI.
            </p>
          </AnimatedSection>

          <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-border/70 lg:block">
              <ArrowRight className="h-11 w-11" />
            </div>

            <AnimatedSection className="group rounded-3xl border border-primary/24 bg-card/72 p-8 shadow-soft backdrop-blur md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/12">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">PROTECT</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Protected from ransomware and breaches",
                  "Audit-ready year-round (HIPAA / CMMC / GLBA)",
                  "Operational uptime you can count on",
                  "24/7 monitoring and response",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary/75" />
                    <span className="text-base text-foreground/92 md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection
              className="group rounded-3xl border border-accent/24 bg-card/72 p-8 shadow-soft backdrop-blur md:p-10"
              delay={0.2}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/12">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-accent">PROPEL</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Secure, compliant AI adoption",
                  "Automation that frees up staff time",
                  "Faster workflows and documentation",
                  "Scale without adding headcount",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent/75" />
                    <span className="text-base text-foreground/92 md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p className="mb-8 text-lg italic text-muted-foreground">
              "Protection is your foundation. Propulsion is your advantage."
            </p>
            <Link to="/risk-assessment" className="hidden sm:inline-block">
              <Button size="lg" className="h-14 px-8 text-lg">
                Assess Your Readiness
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built for organizations that can&apos;t afford mistakes.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              If security, compliance, and operational confidence matter to your organization,
              you&apos;re in the right place.
            </p>
            <p className="mt-1 text-base text-muted-foreground/85">
              Where audits, downtime, and sensitive data exposure carry real consequences.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, i) => (
              <StaggerItem key={i} className="h-full">
                <Link to={industry.link} className="group block h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-card/70 p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-secondary/30 bg-secondary/15">
                      <industry.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{industry.label}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>
                    <span className="mt-4 inline-flex items-center justify-center text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-10 text-center">
            <Link to="/risk-assessment" className="hidden sm:inline-block">
              <Button size="lg" className="h-14 px-8 text-lg">
                Check Your Security Posture <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              How we help, built for regulated confidence.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Everything you need to stay secure, audit-ready, and prepared for safe AI
              modernization, under one trusted partner.
            </p>
          </AnimatedSection>

          <StaggerContainer className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {serviceHighlights.map((service, i) => (
              <StaggerItem key={i} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-card/70 p-7 text-center shadow-soft">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/22 bg-primary/10">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{service.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-primary/30 px-8 text-lg hover:bg-primary/10"
              >
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/risk-assessment">
              <Button size="lg" className="h-14 px-8 text-lg">
                Free Security Check <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Trusted in high-stakes, regulated environments.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Organizations choose NorthStar when cybersecurity, compliance, and uptime can&apos;t
              be left to chance.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <div className="rounded-2xl border border-border/70 bg-card/62 p-4 shadow-soft">
                <img src={inc5000Badge} alt="Inc. 5000" className="h-14 w-auto object-contain" />
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/62 p-4 shadow-soft">
                <img src={soc2Badge} alt="SOC 2 Type II" className="h-14 w-auto object-contain" />
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/62 p-4 shadow-soft">
                <img src={hipaaBadge} alt="HIPAA Compliant" className="h-14 w-auto object-contain" />
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {proofStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/70 bg-card/55 p-5 text-center shadow-soft"
                >
                  <p className="text-3xl font-bold text-primary md:text-4xl">
                    {stat.prefix}
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Back-to-back Inc. 5000 honoree: #3837 (2024) and #2393 (2025) with 178% three-year
              growth. Founded in 2000, 25+ years of trusted IT partnership.
            </p>

            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border/70 bg-card/65 p-7 shadow-soft">
              <blockquote className="text-lg italic leading-relaxed text-muted-foreground">
                "NorthStar gave us the confidence that our security and compliance posture could
                keep pace with our growth. They don&apos;t just manage our IT. They genuinely
                understand the regulatory pressures we face every day."
              </blockquote>
              <p className="mt-4 text-sm font-medium text-foreground">
                - IT Director, Healthcare Organization
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                to="/dmarc-checker"
                className="inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <Lock className="h-4 w-4" /> Free Phishing Check <ArrowRight className="h-3 w-3" />
              </Link>
              <span className="hidden text-border sm:inline">|</span>
              <Link
                to="/webinars"
                className="inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Upcoming Webinars <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="hero-gradient-bg relative overflow-hidden py-24 text-center md:py-32">
        <div className="grain-texture absolute inset-0 opacity-35" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Start with clarity, not a sales pitch.
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-white/75">
              In regulated environments, you don&apos;t need more noise. You need to know where you
              stand. We&apos;ll help you understand your security, compliance, and AI readiness,
              clearly and calmly.
            </p>
            <Link to="/risk-assessment" className="mt-10 inline-block">
              <Button
                size="lg"
                className="h-14 bg-white px-10 text-lg text-black hover:bg-white/92"
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
