import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Handshake, Lightbulb, ChevronDown } from "lucide-react";
import { useContactModal } from "@/components/ContactModal";
import inc5000Badge from "@/assets/inc-5000-badge.png";
import soc2Badge from "@/assets/soc2-badge.webp";
import hipaaBadge from "@/assets/hipaa-badge.png";
import microsoftPartner from "@/assets/microsoft-partner.svg";
import comptiaPartner from "@/assets/comptia-partner.svg";
import ciscoPartner from "@/assets/cisco-partner.svg";

const values = [
  {
    icon: CheckCircle,
    title: "Reliability",
    description: "We do what we say, every time",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Deep technical knowledge across industries",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Your success is our success",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring better solutions",
  },
];

const teamMembers = [
  {
    name: "Ken Satkunam",
    title: "Co-Founder & CEO",
    image: "/team/ken-satkunam.jpg",
    bio: "CISM-certified leader with 25+ years in IT. Co-founded NorthStar in 2000 and has served organizations of up to 23,000 employees. HCCA speaker and Amazon Best-Selling co-author of \"Cyber Attack Prevention.\"",
  },
];

const badgeAffiliations = [
  { name: "Inc. 5000", image: inc5000Badge },
  { name: "SOC 2 Type II", image: soc2Badge },
  { name: "HIPAA Compliant", image: hipaaBadge },
];

const partnerAffiliations = [
  { name: "Microsoft Partner", image: microsoftPartner },
  { name: "CompTIA", image: comptiaPartner },
  { name: "Cisco Partner", image: ciscoPartner },
];

export default function About() {
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
              Your Technology Partner for the{' '}
              <span className="text-gradient">
                Long Haul
              </span>
            </h1>
            <p
              className="mx-auto mt-8 max-w-2xl text-lg text-gray-300 md:text-xl animate-fade-in-up leading-relaxed"
              style={{ animationDelay: '100ms', animationFillMode: 'both' }}
            >
              Building trusted relationships through reliable IT solutions since 2000
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle opacity-50">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-10 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg prose-gray mx-auto text-muted-foreground leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3">
                NorthStar Technology Group was co-founded in 2000 by Ken Satkunam with a simple mission: to provide businesses 
                with the same caliber of IT support that large enterprises enjoy, but with the 
                personalized attention and responsiveness that only a dedicated partner can deliver.
              </p>
              <p>
                Over 25 years, what started as a small team helping local businesses has grown into a 
                comprehensive managed services provider serving clients across healthcare, financial services, 
                manufacturing, and professional services. NorthStar expanded through the acquisition of 
                eWranglers in 2022 and SmartFirm IT in 2023, strengthening our capabilities and reach. 
                We have been recognized as a back-to-back Inc. 5000 honoree (#3837 in 2024 and #2393 in 2025) 
                with 178% three-year growth.
              </p>
              <p>
                Today, we combine deep technical expertise with a genuine understanding of business 
                operations. We don't just fix problems; we anticipate them. We don't just implement 
                solutions; we ensure they align with your goals. And we don't just provide support; 
                we become an extension of your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_70%)]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground mb-16">
            What Drives Us
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-8 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground mb-16">
            Leadership Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                {/* Photo */}
                <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-gray-100 to-gray-200 ring-4 ring-background shadow-inner">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-gray-400">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                
                <h3 className="mb-1 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm font-medium text-primary">{member.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations & Certifications */}
      <section className="py-16 bg-muted/50 border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-10 text-center text-xl font-semibold text-foreground">
            Our Partners & Certifications
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[...badgeAffiliations, ...partnerAffiliations].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 shadow-sm transition-transform hover:-translate-y-1"
              >
                <img src={item.image} alt={item.name} className="h-10 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In / Press */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6 text-center">
              Featured In
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                { label: "Faces of Fargo 2023", url: "https://facesoffargo.com/meet-the-face-of-it-cyber-security-northstar-technology-group/" },
                { label: "Faces of Fargo 2024", url: "https://facesoffargo.com/face-of-it-and-cyber-security-northstar-technology-group/" },
                { label: "BisMan Inc.", url: "https://bismaninc.com/how-to-survive-cybersecurity-threats-with-ken-satkunam-and-dan-defay/" },
                { label: "Fargo INC!", url: "https://fargoinc.com/northstar-technology-group-is-your-business-pitstop-for-growth-and-security/" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-border/50 bg-card p-5 text-center hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <span className="font-semibold text-foreground">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="text-center mb-12">
              <h3 className="text-xl font-bold text-foreground mb-3">Amazon Best-Selling Book</h3>
              <p className="text-muted-foreground mb-4">
                Our team co-authored "Cyber Attack Prevention," covering IT department and third-party security strategies.
              </p>
              <a
                href="https://www.amazon.com/Cyber-Attack-Prevention-Department-Third-Party-ebook/dp/B0C79TXWFK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                View on Amazon →
              </a>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>Proud NDLTCA Associate Member, FMWF Chamber member, and HCCA presenter.</p>
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
              Want to Learn More?
            </h2>
            <Button 
              size="lg" 
              className="h-14 px-10 text-lg bg-white text-black hover:bg-white/90 shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
              onClick={openModal}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
