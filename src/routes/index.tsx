import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, ShieldCheck, Leaf, Clock, Star, ArrowRight, CheckCircle2, Phone, Search, ClipboardList, Sparkles, RefreshCcw, Bug, Rat, Home as HomeIcon, Award, Users, ThumbsUp } from "lucide-react";
import heroImg from "@/assets/hero-pest.jpg";
import ecoSpray from "@/assets/eco-spray.jpg";
import familySafe from "@/assets/family-safe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GreenShield Pest Control — Safe, Fast, Guaranteed" },
      { name: "description", content: "Eco-friendly pest control for homes & businesses. Same-day service, licensed technicians, 100% satisfaction guarantee. Call 9865066266." },
      { property: "og:title", content: "GreenShield Pest Control" },
      { property: "og:description", content: "Eco-friendly pest control. Same-day service." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black z-0">
        <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#22c55e,transparent_50%)]" />
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_80%_80%,#16a34a,transparent_50%)]" />
        <div className="container mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 backdrop-blur text-xs font-semibold tracking-wide border border-green-500/30 text-green-400">
              <Clock className="h-3.5 w-3.5" /> 24/7 RAPID RESPONSE
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Pests gone.<br />In record time.
            </h1>
            <p className="mt-6 text-lg text-zinc-300 max-w-lg">
              Don't wait for pests to take over. QuickPest Control delivers rapid, commercial-grade eradication for your home or business. Fast dispatch, zero hassle, and guaranteed results.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-black font-bold shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-105 hover:bg-green-400 transition-all">
                Dispatch Technician <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+919865066266" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-green-500/30 text-white font-semibold hover:bg-white/10 transition-colors">
                <Phone className="h-4 w-4 text-green-400" /> 9865066266
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-1"><Star className="h-4 w-4 fill-green-500 text-green-500" /> 4.9/5 (2,500+ reviews)</div>
              <div>Under 2-Hour Response</div>
              <div>Licensed Experts</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-green-500/20 blur-2xl" />
            <img
              src={heroImg}
              alt="QuickPest control technician arriving quickly"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[420px] border border-green-500/20"
            />
            <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-green-500/30 rounded-2xl p-4 shadow-2xl hidden sm:flex items-center gap-3">
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-green-500/20">
                <Clock className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Same-Day</div>
                <div className="text-xs text-zinc-400">Service Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Users, n: "12,000+", l: "Homes Treated" },
            { icon: Award, n: "15+", l: "Years Experience" },
            { icon: Star, n: "4.9/5", l: "Customer Rating" },
            { icon: ShieldCheck, n: "100%", l: "Guarantee" },
          ].map((s) => (
            <div key={s.l}>
              <s.icon className="h-6 w-6 mx-auto text-primary" />
              <div className="mt-2 text-2xl font-bold">{s.n}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Why GreenShield</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Pest control done the right way</h2>
          <p className="mt-4 text-muted-foreground">We combine science-backed treatments with eco-friendly products so your home stays safe — for everyone in it.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: "Licensed & Insured", desc: "Every technician is state-certified, background-checked, and continuously trained." },
            { icon: Leaf, title: "Eco-Friendly Products", desc: "EPA-approved, low-toxicity treatments that are safe for kids, pets, and the planet." },
            { icon: Clock, title: "Same-Day Service", desc: "Call before noon and we'll be at your door today. We treat pests like the emergency they are." },
            { icon: RefreshCcw, title: "Free Re-Treatments", desc: "Pests come back? So do we — at no extra cost, until the problem is solved." },
            { icon: Sparkles, title: "Transparent Pricing", desc: "No hidden fees, no surprise charges. You'll know the price before we lift a finger." },
            { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "Not happy with the result? We'll refund your last service. Simple as that." },
          ].map((f) => (
            <div key={f.title} className="p-8 rounded-2xl bg-card border border-border hover:-translate-y-1 transition-transform" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-cta)" }}>
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div className="max-w-xl">
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Our Services</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">Complete pest protection</h2>
              <p className="mt-4 text-muted-foreground">From termites in the attic to rodents in the basement — we handle it all.</p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HomeIcon, title: "Termites", desc: "Detection & treatment that protects your foundation." },
              { icon: Rat, title: "Rodents", desc: "Humane trapping, sealing, and ongoing exclusion." },
              { icon: Bug, title: "Roaches & Ants", desc: "Eliminate the colony at its source — for good." },
              { icon: Leaf, title: "Mosquito Yard", desc: "Reclaim your backyard with seasonal treatments." },
            ].map((s) => (
              <Link key={s.title} to="/services" className="group p-6 rounded-2xl bg-card border border-border hover:-translate-y-1 hover:border-primary transition-all" style={{ boxShadow: "var(--shadow-soft)" }}>
                <s.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={ecoSpray}
              alt="Eco-friendly pest control spray equipment"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-3xl shadow-xl object-cover w-full h-[480px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-5 shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="font-bold text-sm">EPA-Approved</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">All treatments are tested & approved for residential safety.</p>
            </div>
          </div>
          <div>
            <span className="text-sm font-bold tracking-widest text-primary uppercase">How It Works</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">A simple, proven 4-step process</h2>
            <div className="mt-8 space-y-6">
              {[
                { icon: Phone, title: "Book your free inspection", desc: "Call or fill out the form. We'll schedule a visit at your convenience." },
                { icon: Search, title: "Detailed property inspection", desc: "Our certified tech identifies pests, entry points, and risk areas." },
                { icon: ClipboardList, title: "Custom treatment plan", desc: "Get a transparent quote and a plan tailored to your home." },
                { icon: RefreshCcw, title: "Treat, monitor, protect", desc: "We treat the issue and follow up to keep pests away long-term." },
              ].map((s, i) => (
                <div key={s.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full flex items-center justify-center text-primary-foreground font-bold" style={{ background: "var(--gradient-cta)" }}>
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg flex items-center gap-2"><s.icon className="h-4 w-4 text-primary" /> {s.title}</h3>
                    <p className="text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY SAFE BANNER */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-elegant)" }}>
          <div className="p-10 md:p-14 bg-card flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Safe for Everyone</span>
            <h2 className="mt-3 text-3xl font-bold">Treatments your family can trust</h2>
            <p className="mt-4 text-muted-foreground">We only use products rated safe for indoor use around children and pets. No lingering odors, no harsh residues — just results that last.</p>
            <ul className="mt-6 space-y-3">
              {["Pet-safe formulations", "Odorless after drying", "Same-day re-entry", "No relocation needed"].map((t) => (
                <li key={t} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary" /> {t}</li>
              ))}
            </ul>
          </div>
          <img
            src={familySafe}
            alt="Happy family safe at home after pest treatment"
            loading="lazy"
            width={1280}
            height={896}
            className="object-cover w-full h-full min-h-[320px]"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Reviews</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Loved by 12,000+ households</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", role: "Homeowner · Suburb", text: "GreenShield came out same day for a wasp nest by our front door. Quick, polite, and the price was exactly what they quoted." },
              { name: "David L.", role: "Restaurant Owner", text: "We've used three companies. GreenShield is the only one that actually solved our roach problem — and kept it solved for 2 years now." },
              { name: "Priya K.", role: "Mother of 2", text: "I was nervous about chemicals around my kids. They explained every product and we felt completely safe. Highly recommend!" },
            ].map((t) => (
              <div key={t.name} className="p-8 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <p className="text-foreground/90 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <span className="text-sm font-bold tracking-widest text-primary uppercase">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Common questions</h2>
            <p className="mt-4 text-muted-foreground">Don't see your question? Call us at 9865066266 — we're happy to help.</p>
          </div>
          <div className="lg:col-span-2 space-y-4">
            {[
              { q: "Are your treatments safe for my children and pets?", a: "Absolutely. We exclusively use EPA-approved, low-toxicity products. Most are dry within 30 minutes, and you can return to treated areas the same day." },
              { q: "How quickly can you come out?", a: "For most calls, we offer same-day or next-day service. Emergency situations (wasps, rodents in living spaces) get top priority." },
              { q: "Do you offer one-time service or only contracts?", a: "Both! We offer flexible one-time treatments and quarterly protection plans. No contracts required." },
              { q: "What if the pests come back?", a: "We offer free re-treatments between scheduled visits if pests return. Your satisfaction is fully guaranteed." },
              { q: "Do you service businesses?", a: "Yes — we work with restaurants, offices, warehouses, multi-family housing, and retail. Discreet, after-hours service available." },
            ].map((f) => (
              <details key={f.q} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary transition-colors" style={{ boxShadow: "var(--shadow-soft)" }}>
                <summary className="font-semibold cursor-pointer flex items-center justify-between">
                  {f.q}
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-3xl p-10 md:p-16 text-primary-foreground relative overflow-hidden" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,white,transparent_50%)]" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Ready for a pest-free home?</h2>
              <p className="mt-4 text-primary-foreground/85">Book your free inspection today. No obligation, no pressure — just honest advice from local experts.</p>
            </div>
            <ul className="space-y-3">
              {["Free, no-obligation quote", "Same-day & weekend availability", "100% satisfaction guarantee", "Licensed, insured & background-checked"].map((t) => (
                <li key={t} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-accent" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="relative mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground font-semibold hover:scale-105 transition-transform">
              Book Free Inspection <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+919865066266" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-primary-foreground font-semibold hover:bg-white/10 transition-colors">
              <Phone className="h-4 w-4" /> Call 9865066266
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

