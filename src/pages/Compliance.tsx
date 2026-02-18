import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, Building2, Search, Map, Settings, Activity, CheckCircle, Award, ChevronDown, Lock, ShieldCheck, BarChart3, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useContactModal } from "@/components/ContactModal";
import soc2Badge from "@/assets/soc2-badge.webp";
import hipaaBadge from "@/assets/hipaa-badge.png";

const complianceAreas = [
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Comprehensive solutions for healthcare organizations",
    features: [
      "Risk assessments",
      "Policy and procedure development",
      "Technical safeguard implementation",
      "Business Associate Agreement management",
      "Ongoing compliance monitoring",
      "Breach response planning",
    ],
  },
  {
    icon: FileCheck,
    title: "SOC 2 Readiness",
    description: "Prepare for and maintain SOC 2 certification",
    features: [
      "Gap analysis and remediation",
      "Control implementation",
      "Documentation support",
      "Audit preparation",
      "Continuous compliance monitoring",
    ],
  },
  {
    icon: Building2,
    title: "Industry-Specific Compliance",
    description: "Tailored compliance for your sector",
    features: [
      "PCI DSS for payment processing",
      "FINRA and SEC for financial services",
      "State privacy regulations",
      "NIST framework alignment",
    ],
  },
  {
    icon: Lock,
    title: "ITAR Compliance",
    description: "International Traffic in Arms Regulations for defense/aerospace contractors",
    features: [
      "ITAR registration support",
      "Technical data protection",
      "Export control procedures",
      "Personnel screening",
      "Compliance documentation",
      "Audit readiness",
    ],
  },
  {
    icon: ShieldCheck,
    title: "CMMC (1 & 2)",
    description: "Cybersecurity Maturity Model Certification for DoD contractors",
    features: [
      "CMMC level assessment",
      "Gap analysis and remediation",
      "CUI protection controls",
      "Policy and procedure development",
      "Assessment preparation",
      "Continuous monitoring",
    ],
  },
  {
    icon: BarChart3,
    title: "NIST Framework",
    description: "National Institute of Standards and Technology cybersecurity framework alignment",
    features: [
      "NIST CSF assessment",
      "Risk management framework",
      "Security control implementation",
      "Continuous monitoring program",
      "Incident response alignment",
      "Documentation and reporting",
    ],
  },
  {
    icon: Scale,
    title: "FTC Safeguards Rule",
    description: "Federal Trade Commission requirements for financial institutions and data handlers",
    features: [
      "Risk assessment and management",
      "Information security program",
      "Access control implementation",
      "Encryption and data protection",
      "Vendor management oversight",
      "Annual compliance review",
    ],
  },
];

const processSteps = [
  {
    icon: Search,
    number: "01",
    title: "Assess",
    description: "Comprehensive evaluation of current state",
  },
  {
    icon: Map,
    number: "02",
    title: "Plan",
    description: "Prioritized roadmap to compliance",
  },
  {
    icon: Settings,
    number: "03",
    title: "Implement",
    description: "Technical and administrative controls",
  },
  {
    icon: Activity,
    number: "04",
    title: "Monitor",
    description: "Ongoing validation and improvement",
  },
];

const certifications = ["HIPAA", "SOC 2", "PCI DSS", "NIST", "CMMC", "ITAR", "FTC Safeguards"];

export default function Compliance() {
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
              Compliance Without the <span className="text-gradient">Complexity</span>
            </h1>
            <p
              className="mx-auto mt-8 max-w-2xl text-lg text-gray-300 md:text-xl animate-fade-in-up leading-relaxed"
              style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            >
              Navigate HIPAA, CMMC, NIST, ITAR, and industry regulations with confidence through our expert-led approach.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle opacity-50">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light">
              NorthStar helps healthcare providers, financial services, and regulated businesses 
              achieve and maintain compliance. We combine <span className="text-foreground font-medium">technical expertise</span> with <span className="text-foreground font-medium">practical 
              implementation</span> to simplify your compliance journey.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link to="/risk-assessment">
                <Button variant="default" className="bg-primary hover:bg-primary/90">
                  Start with a Free Security Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-primary/20 hover:border-primary">
                  View Implementation Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Areas Grid */}
      <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.05),transparent_40%)]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Compliance Areas We Cover
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {complianceAreas.map((area, index) => (
              <div
                key={area.title}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <area.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {area.title}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
                <ul className="space-y-3 border-t border-border/50 pt-6">
                  {area.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Compliance Approach
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative group">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-10 hidden h-0.5 w-full bg-gradient-to-r from-border to-transparent lg:block group-hover:from-primary/50 transition-colors duration-500" />
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:scale-110">
                    <step.icon className="h-8 w-8 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Elements Section */}
      <section className="py-16 bg-muted/50 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <p className="text-lg font-medium text-foreground max-w-md">
                Our team includes certified compliance professionals dedicated to your success
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {certifications.map((cert) => {
                const badgeMap: Record<string, string> = { "SOC 2": soc2Badge, "HIPAA": hipaaBadge };
                const badge = badgeMap[cert];
                return badge ? (
                  <div key={cert} className="flex flex-col items-center gap-1 rounded-lg border border-border bg-background px-4 py-2 shadow-sm transition-transform hover:-translate-y-0.5">
                    <img src={badge} alt={cert} className="h-10 w-auto object-contain" />
                    <span className="text-[10px] font-semibold text-foreground/60">{cert}</span>
                  </div>
                ) : (
                  <div key={cert} className="flex h-12 min-w-[100px] items-center justify-center rounded-lg border border-border bg-background px-6 shadow-sm transition-transform hover:-translate-y-0.5">
                    <span className="text-sm font-semibold text-foreground/80">{cert}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden hero-gradient-bg text-center">
        <div className="absolute inset-0 grain-texture opacity-20 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl mb-8">
              Concerned About Your Compliance Posture?
            </h2>
            <Button 
              size="lg" 
              className="h-14 px-10 text-lg bg-white text-black hover:bg-white/90 shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
              onClick={openModal}
            >
              Request a Compliance Assessment
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
