import { useState } from "react";
import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Bug, Phone, Menu, X } from "lucide-react";

import appCss from "../styles.css?url";
import iconImg from "@/assets/icon.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GreenShield Pest Control — Safe & Effective Pest Solutions" },
      { name: "description", content: "Family-safe pest control services for homes and businesses. Termites, rodents, roaches and more." },
      { property: "og:title", content: "GreenShield Pest Control" },
      { property: "og:description", content: "Family-safe pest control services for homes and businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const linkBase = "text-sm font-medium text-foreground/80 hover:text-primary transition-colors block py-2 md:py-0";
  
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg" onClick={closeMenu}>
          <img src={iconImg} alt="QuickPest Logo" className="h-12 w-12 object-contain" />
          <span className="tracking-tight">QUICK PEST CONTROL</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkBase} activeProps={{ className: "text-primary font-semibold" }} activeOptions={{ exact: true }}>Home</Link>
          <Link to="/about" className={linkBase} activeProps={{ className: "text-primary font-semibold" }}>About</Link>
          <Link to="/services" className={linkBase} activeProps={{ className: "text-primary font-semibold" }}>Services</Link>
          <Link to="/contact" className={linkBase} activeProps={{ className: "text-primary font-semibold" }}>Contact</Link>
        </nav>
        <div className="hidden md:flex items-center">
          <a href="tel:+919865066266" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground shadow-md hover:opacity-90 transition-opacity" style={{ background: "var(--gradient-cta)" }}>
            <Phone className="h-4 w-4" /> 9865066266
          </a>
        </div>
        <button 
          className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg px-6 py-4 flex flex-col gap-4">
          <Link to="/" className={linkBase} activeProps={{ className: "text-primary font-semibold" }} activeOptions={{ exact: true }} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={linkBase} activeProps={{ className: "text-primary font-semibold" }} onClick={closeMenu}>About</Link>
          <Link to="/services" className={linkBase} activeProps={{ className: "text-primary font-semibold" }} onClick={closeMenu}>Services</Link>
          <Link to="/contact" className={linkBase} activeProps={{ className: "text-primary font-semibold" }} onClick={closeMenu}>Contact</Link>
          
          <a href="tel:+919865066266" className="inline-flex items-center justify-center gap-2 px-4 py-3 mt-2 rounded-full text-sm font-semibold text-primary-foreground shadow-md hover:opacity-90 transition-opacity text-center" style={{ background: "var(--gradient-cta)" }}>
            <Phone className="h-4 w-4" /> 9865066266
          </a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-20">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} GreenShield Pest Control. Licensed & Insured.</p>
        <div className="flex gap-6 text-sm">
          <Link to="/about" className="text-muted-foreground hover:text-primary">About</Link>
          <Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
