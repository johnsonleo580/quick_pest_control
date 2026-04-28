import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, Calendar, Shield } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GreenShield Pest Control" },
      { name: "description", content: "Get a free pest control inspection. Call 9865066266, email hello@greenshield.com, or send a message — same-day response guaranteed." },
      { property: "og:title", content: "Contact GreenShield Pest Control" },
      { property: "og:description", content: "Get a free pest inspection — fast response, no obligation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const info = [
    { icon: Phone, label: "Phone", value: "9865066266", href: "tel:+919865066266" },
    { icon: Mail, label: "Email", value: "hello@greenshield.com", href: "mailto:hello@greenshield.com" },
    { icon: MapPin, label: "Service Area", value: "Greater Metro Region" },
    { icon: Clock, label: "Hours", value: "Mon–Sat · 7am – 7pm" },
  ];

  const promises = [
    { icon: Calendar, title: "Same-day response", desc: "Most calls are scheduled within 24 hours." },
    { icon: Shield, title: "No obligation", desc: "Free inspection. No pressure, no commitment." },
    { icon: CheckCircle2, title: "Honest pricing", desc: "Transparent quote before any work begins." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative py-24 text-primary-foreground overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_70%,white,transparent_50%)]" />
        <div className="container mx-auto px-6 max-w-3xl text-center relative">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-semibold tracking-wide">
            <MessageCircle className="h-3.5 w-3.5" /> WE REPLY WITHIN 1 BUSINESS HOUR
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">Get in Touch</h1>
          <p className="mt-4 text-lg text-primary-foreground/85">Free inspection. Fast response. No obligation.</p>
        </div>
      </section>

      {/* PROMISES */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-4">
          {promises.map((p) => (
            <div key={p.title} className="p-5 rounded-2xl bg-card border border-border flex items-start gap-4" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--gradient-cta)" }}>
                <p.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold">{p.title}</div>
                <div className="text-sm text-muted-foreground">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="container mx-auto px-6 py-12 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {info.map((i) => {
            const Inner = (
              <>
                <div className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--gradient-cta)" }}>
                  <i.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{i.label}</div>
                  <div className="font-semibold">{i.value}</div>
                </div>
              </>
            );
            return i.href ? (
              <a key={i.label} href={i.href} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary transition-colors" style={{ boxShadow: "var(--shadow-soft)" }}>
                {Inner}
              </a>
            ) : (
              <div key={i.label} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
                {Inner}
              </div>
            );
          })}
          <div className="p-6 rounded-2xl text-primary-foreground" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}>
            <h3 className="font-bold text-lg">Pest Emergency?</h3>
            <p className="text-sm text-primary-foreground/85 mt-2">Wasps, rodents indoors, or bed bug discovery — call us right now for priority same-day service.</p>
            <a href="tel:+919865066266" className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-background text-foreground font-semibold">
              <Phone className="h-4 w-4" /> 9865066266
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="lg:col-span-3 p-8 rounded-3xl bg-card border border-border space-y-5"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="h-16 w-16 mx-auto text-primary" />
              <h3 className="mt-4 text-2xl font-bold text-primary">Thank you!</h3>
              <p className="mt-2 text-muted-foreground">We'll reach out within 1 business hour to schedule your free inspection.</p>
            </div>
          ) : (
            <>
              <div>
                <h2 className="text-2xl font-bold">Request a free inspection</h2>
                <p className="text-sm text-muted-foreground mt-1">Tell us about your pest issue and we'll get back to you fast.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground">Service Needed</label>
                  <select name="service" className="mt-2 w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition">
                    <option>General Inspection</option>
                    <option>Termites</option>
                    <option>Rodents</option>
                    <option>Roaches / Ants</option>
                    <option>Bed Bugs</option>
                    <option>Mosquito / Outdoor</option>
                    <option>Commercial</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground">Property Type</label>
                  <select name="property" className="mt-2 w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition">
                    <option>Single-Family Home</option>
                    <option>Apartment / Condo</option>
                    <option>Multi-Family</option>
                    <option>Business / Commercial</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="Tell us about your pest issue, when it started, and where you've seen them..."
                />
              </div>
              <button type="submit" className="w-full py-4 rounded-full text-primary-foreground font-semibold text-lg hover:opacity-95 transition" style={{ background: "var(--gradient-cta)" }}>
                Request Free Inspection
              </button>
              <p className="text-xs text-muted-foreground text-center">By submitting, you agree to be contacted about your inquiry. We never share your info.</p>
            </>
          )}
        </form>
      </section>

      {/* SERVICE AREA */}
      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-3xl p-10 bg-secondary/40 border border-border">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Service Area</span>
            <h2 className="mt-3 text-3xl font-bold">Proudly serving the greater metro region</h2>
            <p className="mt-3 text-muted-foreground">Including all surrounding suburbs within 50 miles of downtown.</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {["Downtown", "Northside", "Eastview", "Westwood", "Southbrook", "Lakeshore", "Greenfield", "Maplewood", "Riverside", "Hilltop", "Pinegrove", "Oakridge"].map((c) => (
              <span key={c} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">{c}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold text-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition"
      />
    </div>
  );
}
