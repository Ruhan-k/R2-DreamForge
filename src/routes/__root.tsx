import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Libre+Baskerville:wght@400;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
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
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-brand-ink text-brand-paper">
        <SiteHeader />
        <Outlet />
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/marketing", label: "Marketing" },
  { to: "/development", label: "Development" },
  { to: "/ai-agents", label: "AI Agents" },
] as const;

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="R2 DreamForge home">
      <span className="grid size-9 place-items-center border border-brand-orange/70 font-serif text-sm text-brand-orange">R2</span>
      <span className="leading-none">
        <span className="block font-serif text-lg font-bold">DreamForge</span>
        <span className="mt-1 block text-[10px] uppercase tracking-[0.3em] text-brand-paper/45">Digital Engineering</span>
      </span>
    </Link>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line/40 bg-brand-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8">
        <Brand />
        <nav className="hidden items-center gap-7 text-sm text-brand-paper/70 lg:flex" aria-label="Primary navigation">
          {navLinks.map((item) => <Link key={item.to} to={item.to} activeProps={{ className: "text-brand-orange" }} className="transition-colors hover:text-brand-paper">{item.label}</Link>)}
          <Link to="/contact" className="transition-colors hover:text-brand-paper">Contact Us</Link>
        </nav>
        <Link to="/contact" className="hidden border border-brand-orange/70 px-4 py-2 text-sm font-medium text-brand-orange transition-colors hover:bg-brand-orange hover:text-brand-ink sm:inline-flex">Start a project →</Link>
        <details className="relative lg:hidden group">
          <summary className="cursor-pointer list-none border border-brand-line/60 px-3 py-2 text-xs uppercase tracking-[0.15em]">Menu</summary>
          <nav className="absolute right-0 top-12 w-[calc(100vw-40px)] max-w-sm border border-brand-line/60 bg-brand-ink p-3 shadow-xl" aria-label="Mobile navigation">
            {navLinks.map((item) => <Link key={item.to} to={item.to} className="block border-b border-brand-line/30 px-2 py-4 text-sm">{item.label}</Link>)}
            <Link to="/contact" className="mt-3 block bg-brand-orange px-3 py-4 text-center text-sm font-semibold text-brand-ink">Contact Us</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-brand-line/40 bg-brand-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <Brand />
        <div className="text-left sm:text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-paper/35">Marketing · Software · AI automation</p>
          <p className="mt-2 text-xs text-brand-paper/50">Owned by R2 DreamForge LLC</p>
        </div>
      </div>
    </footer>
  );
}
