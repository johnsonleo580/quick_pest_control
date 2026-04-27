import { createFileRoute, Link } from "@tanstack/react-router";
import { Bug, Rat, Cog as Cockroach, Footprints, Spade, Home, CheckCircle2, ArrowRight, Building2, Sprout, ShieldCheck, Phone } from "lucide-react";
import ecoSpray from "@/assets/eco-spray.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GreenShield Pest Control" },
      { name: "description", content: "Termite, rodent, roach, ant, bed bug, mosquito and commercial pest control. Eco-friendly treatments backed by a 100% guarantee." },
      { property: "og:title", content: "Pest Control Services" },
      { property: "og:description", content: "Comprehensive pest control for residential and commercial properties." },
      { property: "og:image", content: ecoSpray },
      { name: "twitter:image", content: ecoSpray },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Home,
    title: "Termite Control",
    desc: "Detection, treatment, and prevention to protect your structure.",
    details: "Our termite specialists conduct thorough inspections of foundations, attics, and wood structures. Treatments include liquid barriers, baiting systems, and wood injections — backed by a renewable warranty.",
    includes: ["Free inspection & report", "Liquid barrier treatments", "Baiting system installation", "Annual renewable warranty"],
  },
  {
    icon: Rat,
    title: "Rodent Removal",
    desc: "Humane trapping, exclusion, and ongoing monitoring.",
    details: "Mice and rats spread disease and damage wiring. We trap, seal entry points, sanitize, and set up monitoring stations to keep them out for good.",
    includes: ["Humane trapping", "Entry point sealing", "Sanitization", "30-day follow-up"],
  },
  {
    icon: Cockroach,
    title: "Roach Extermination",
    desc: "Targeted treatments that eliminate infestations at the source.",
    details: "We use gel baits, growth regulators, and crack-and-crevice treatments to eliminate roaches at the colony level — not just the ones you see.",
    includes: ["Gel bait & growth regulators", "Kitchen & bath focus", "Re-treatment guarantee", "Prevention tips"],
  },
  {
    icon: Footprints,
    title: "Ant Control",
    desc: "Identify the colony, eliminate it, prevent return.",
    details: "From sugar ants to carpenter ants, we identify the species and target the colony with bait technology that workers carry back to the queen.",
    includes: ["Species identification", "Colony-level bait", "Perimeter treatment", "90-day protection"],
  },
  {
    icon: Bug,
    title: "Bed Bug Treatment",
    desc: "Heat and chemical treatments tailored to your home.",
    details: "Bed bugs require precision. We offer heat treatments (no chemicals) or targeted chemical applications, with discreet service and a 60-day guarantee.",
    includes: ["Heat or chemical options", "Mattress & furniture focus", "60-day guarantee", "Discreet service"],
  },
  {
    icon: Spade,
    title: "Mosquito & Outdoor",
    desc: "Yard treatments so you can enjoy the outdoors again.",
    details: "Seasonal yard treatments target mosquito breeding sites and resting areas — reducing populations by up to 90% within 24 hours.",
    includes: ["Monthly treatments", "Breeding site removal", "Special event service", "Tick & flea add-on"],
  },
];

const commercial = [
  { icon: Building2, title: "Restaurants & Food Service", desc: "Health-code compliant programs with discreet service." },
  { icon: Building2, title: "Offices & Retail", desc: "Scheduled visits that keep workplaces pest-free." },
  { icon: Building2, title: "Multi-Family Housing", desc: "Building-wide protection for property managers." },
  { icon: Building2, title: "Warehouses & Industrial", desc: "Integrated pest management at scale." },
];

const plans = [
  { name: "One-Time Treatment", price: "From $149", desc: "Single targeted visit for a specific issue.", features: ["Inspection included", "Targeted treatment", "30-day guarantee", "No commitment"], featured: false },
  { name: "Quarterly Protection", price: "From $89/visit", desc: "Our most popular — year-round defense.", features: ["4 visits per year", "All common pests covered", "Free re-treatments", "Priority scheduling"], featured: true },
  { name: "Premium Annual", price: "From $129/visit", desc: "Full coverage with termite warranty included.", features: ["Monthly visits", "Termite warranty", "Mosquito yard treatment", "24/7 emergency response"], featured: false },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-24 text-primary-foreground overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,white,transparent_50%)]" />
        <div className="container mx-auto px-6 max-w-3xl text-center relative">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-semibold tracking-wide">
            <ShieldCheck className="h-3.5 w-3.5" /> 100% SATISFACTION GUARANTEED
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">Our Services</h1>
          <p className="mt-4 text-lg text-primary-foreground/85">Comprehensive pest control for every home and business — backed by a guarantee and built on trust.</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-8 rounded-2xl bg-card border border-border hover:-translate-y-1 hover:border-primary transition-all flex flex-col" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-cta)" }}>
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.details}</p>
              <ul className="mt-5 space-y-2 flex-1">
                {s.includes.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {i}</li>
                ))}
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Simple Pricing</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Plans that fit any home</h2>
            <p className="mt-4 text-muted-foreground">No contracts. Cancel anytime. Final pricing depends on home size and pest type — get a free quote in minutes.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`p-8 rounded-2xl border flex flex-col ${p.featured ? "bg-card border-primary scale-105" : "bg-card border-border"}`}
                style={{ boxShadow: p.featured ? "var(--shadow-elegant)" : "var(--shadow-soft)" }}
              >
                {p.featured && <span className="self-start mb-4 px-3 py-1 rounded-full text-xs font-bold text-primary-foreground" style={{ background: "var(--gradient-cta)" }}>MOST POPULAR</span>}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <div className="mt-2 text-3xl font-bold text-primary">{p.price}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 space-y-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-6 inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold transition-all ${p.featured ? "text-primary-foreground" : "border border-border hover:border-primary"}`} style={p.featured ? { background: "var(--gradient-cta)" } : {}}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Commercial</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Pest control for your business</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From restaurants to warehouses, we deliver discreet, health-code-compliant pest management programs tailored to your industry. Flexible scheduling — including after-hours and weekends.
            </p>
            <ul className="mt-6 space-y-3">
              {["Health department compliance", "Detailed digital reporting", "Integrated Pest Management (IPM)", "After-hours service available"].map((t) => (
                <li key={t} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> {t}</li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex mt-8 items-center gap-2 px-6 py-3 rounded-full text-primary-foreground font-semibold" style={{ background: "var(--gradient-cta)" }}>
              Request Commercial Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {commercial.map((c) => (
              <div key={c.title} className="p-6 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
                <c.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-3 font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-3xl p-10 md:p-14 bg-card border border-border grid md:grid-cols-3 gap-8 items-center" style={{ boxShadow: "var(--shadow-elegant)" }}>
          <div className="md:col-span-2">
            <Sprout className="h-10 w-10 text-primary" />
            <h2 className="mt-4 text-3xl font-bold">Our 100% satisfaction guarantee</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If pests come back between scheduled visits, so will we — at no extra cost. If you're still not happy, we'll refund your last service. No fine print, no excuses.
            </p>
          </div>
          <div className="text-center md:text-right">
            <a href="tel:+18005551234" className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-primary-foreground font-semibold text-lg" style={{ background: "var(--gradient-cta)" }}>
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
