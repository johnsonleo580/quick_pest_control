import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, Leaf, ShieldCheck, Heart, Target, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GreenShield Pest Control" },
      { name: "description", content: "15+ years protecting families and businesses with eco-friendly pest control. Family-owned, licensed, and trusted by 12,000+ homes." },
      { property: "og:title", content: "About GreenShield Pest Control" },
      { property: "og:description", content: "Family-owned, eco-friendly pest control with 15+ years of experience." },
      { property: "og:image", content: teamImg },
      { name: "twitter:image", content: teamImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "12,000+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: ShieldCheck, label: "Satisfaction", value: "100%" },
    { icon: Leaf, label: "Eco-Safe Treatments", value: "100%" },
  ];

  const values = [
    { icon: Heart, title: "Care First", desc: "We treat your home like our own — with respect, honesty, and attention to every detail." },
    { icon: Leaf, title: "Planet Friendly", desc: "Eco-conscious products and methods that are tough on pests, gentle on the environment." },
    { icon: Target, title: "Results Driven", desc: "We don't stop until the pests are gone. Free re-treatments are part of our promise." },
    { icon: Sparkles, title: "Always Improving", desc: "Continuous training, modern equipment, and the latest pest science." },
  ];

  const team = [
    { name: "Mark Johnson", role: "Founder & Lead Technician", years: "20+ yrs" },
    { name: "Lisa Chen", role: "Operations Director", years: "12 yrs" },
    { name: "Carlos Ruiz", role: "Senior Field Tech", years: "10 yrs" },
    { name: "Aisha Patel", role: "Customer Success Lead", years: "8 yrs" },
  ];

  const milestones = [
    { year: "2009", text: "Founded as a family business in our hometown garage." },
    { year: "2013", text: "Reached 1,000 customers and certified as an eco-friendly provider." },
    { year: "2017", text: "Expanded to commercial pest control and added 20 technicians." },
    { year: "2021", text: "Crossed 10,000 happy households and won Best Local Service." },
    { year: "2024", text: "Launched our 100% satisfaction guarantee and free re-treatment promise." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative py-24 text-primary-foreground overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_50%)]" />
        <div className="container mx-auto px-6 max-w-3xl text-center relative">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-semibold tracking-wide">
            <Heart className="h-3.5 w-3.5" /> FAMILY-OWNED SINCE 2009
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">About GreenShield</h1>
          <p className="mt-4 text-lg text-primary-foreground/85">A family-owned company on a mission to make pest control safer, smarter, and friendlier — one home at a time.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={teamImg}
            alt="GreenShield technician at a customer's home"
            loading="lazy"
            width={1280}
            height={896}
            className="rounded-3xl shadow-xl object-cover w-full h-[480px]"
          />
        </div>
        <div>
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Our Story</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Built on trust, grown by referrals</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Founded in 2009 by Mark Johnson, GreenShield was born from a simple belief: protecting your home shouldn't mean compromising your family's health. After watching his own kids react to harsh chemicals from another company, Mark set out to do things differently.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We pioneered eco-conscious treatments that actually work — and we've never looked back. Today, our team of certified technicians serves thousands of homes and businesses across the metro region, with the same care we'd give our own family.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Over 80% of our new business comes from referrals. That's not luck — it's the result of showing up on time, doing the job right, and standing behind our work.
          </p>
          <Link to="/contact" className="inline-flex mt-6 items-center gap-2 px-6 py-3 rounded-full text-primary-foreground font-semibold" style={{ background: "var(--gradient-cta)" }}>
            Work With Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="p-6 rounded-2xl bg-card border border-border text-center" style={{ boxShadow: "var(--shadow-soft)" }}>
              <s.icon className="h-7 w-7 mx-auto text-primary" />
              <div className="mt-3 text-3xl font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Mission & Vision</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Pest control that puts people first</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Our mission</strong> is to deliver effective, eco-friendly pest control that families can trust — without harsh chemicals, hidden fees, or pushy contracts.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Our vision</strong> is to be the most trusted name in residential and commercial pest control by 2030 — known for science, sustainability, and service.
            </p>
            <ul className="mt-6 space-y-3">
              {["Locally owned and operated", "Members of the National Pest Management Association", "Continuous technician education", "Community partner — supporting local schools"].map((t) => (
                <li key={t} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-cta)" }}>
                  <v.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Our Journey</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">15 years of growth</h2>
          </div>
          <ol className="mt-12 relative border-l-2 border-primary/30 ml-4 space-y-8">
            {milestones.map((m) => (
              <li key={m.year} className="ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full text-primary-foreground text-xs font-bold" style={{ background: "var(--gradient-cta)" }}>•</span>
                <div className="font-bold text-primary text-lg">{m.year}</div>
                <p className="text-muted-foreground">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TEAM */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Meet the Team</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">The faces behind GreenShield</h2>
          <p className="mt-4 text-muted-foreground">Certified, friendly, and ready to help.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="p-6 rounded-2xl bg-card border border-border text-center hover:-translate-y-1 transition-transform" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="h-20 w-20 mx-auto rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold" style={{ background: "var(--gradient-cta)" }}>
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-4 font-bold">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
              <p className="text-xs text-primary mt-1 font-semibold">{m.years} with us</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-3xl p-10 md:p-14 text-center text-primary-foreground" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}>
          <h2 className="text-3xl md:text-4xl font-bold">Experience the GreenShield difference</h2>
          <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto">Join 12,000+ neighbors who trust us with their homes.</p>
          <Link to="/contact" className="inline-flex mt-8 items-center gap-2 px-8 py-4 rounded-full bg-background text-foreground font-semibold hover:scale-105 transition-transform">
            Get Your Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
