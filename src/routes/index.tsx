import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "R2 DreamForge | Marketing, Software Development & AI Agents" },
      { name: "description", content: "R2 DreamForge builds growth marketing systems, websites, apps, custom ERP, CRM and SCM software, and practical AI agents." },
      { property: "og:title", content: "R2 DreamForge | Digital Engineering & Marketing" },
      { property: "og:description", content: "Connected marketing, software development and AI automation for ambitious businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <main>
      <section className="blueprint">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12 gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:py-24">
          <div className="lg:col-span-7 lg:pr-12">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-brand-paper/50"><span className="size-1.5 bg-brand-orange" />R2 DreamForge — Digital growth systems</div>
            <h1 className="mt-6 max-w-[17ch] text-4xl leading-[1.1] sm:mt-8 sm:text-5xl sm:leading-[1.04] lg:text-6xl">Marketing momentum. Software built around your business.</h1>
            <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-brand-paper/70 sm:mt-7 sm:text-lg">We connect strategy, campaigns, web and app development, custom business software, and AI agents into one practical growth engine.</p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
              <Link to="/contact" className="w-full bg-brand-orange px-6 py-4 text-center text-sm font-semibold text-brand-ink transition-opacity hover:opacity-90 sm:w-auto sm:py-3">Request a scope →</Link>
              <Link to="/services" className="w-full text-center text-sm font-medium text-brand-paper/80 transition-colors hover:text-brand-paper sm:w-auto">Explore every service</Link>
            </div>
            <div className="draw-rule mt-10 h-px bg-brand-orange sm:mt-12" />
            <div className="mt-4 flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-brand-paper/40 sm:flex-row sm:justify-between sm:gap-0"><span>Strategy to deployment</span><span>One team</span></div>
          </div>
          <div className="mt-8 lg:col-span-5 lg:mt-0">
            <div className="relative border border-brand-line/50 bg-brand-ink-2/40 p-5 sm:p-6">
              <span className="absolute -left-px -top-px size-4 border-l border-t border-brand-orange" />
              <span className="absolute -bottom-px -right-px size-4 border-b border-r border-brand-orange" />
              <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-brand-paper/40"><span>Capability map</span><span>Connected</span></div>
              <div className="mt-6 space-y-5">
                {[["01","Brand, content & demand","w-4/5"],["02","Web & mobile products","w-3/5"],["03","ERP, CRM & SCM systems","w-2/3"],["04","AI agent orchestration","w-full"]].map(([n,label,width]) => <div key={n} className="flex items-center gap-3"><span className="grid size-7 shrink-0 place-items-center border border-brand-line/60 text-[10px] text-brand-paper/60">{n}</span><div className="flex-1"><p className={n === "04" ? "text-sm text-brand-orange" : "text-sm text-brand-paper/85"}>{label}</p><div className="mt-2 h-px w-full bg-brand-line/30"><div className={`h-px bg-brand-orange ${width}`} /></div></div></div>)}
              </div>
              <div className="mt-6 flex justify-between border-t border-brand-line/30 pt-4 text-[10px] uppercase tracking-[0.2em] text-brand-paper/40"><span>From idea</span><span className="text-brand-orange">To operation</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="blueprint-light text-brand-ink">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12 gap-8 px-5 py-16 sm:px-8 sm:py-20">
          <div className="lg:col-span-4"><p className="text-[11px] uppercase tracking-[0.3em] text-brand-ink/50">01 — Service architecture</p><h2 className="mt-4 max-w-[18ch] text-3xl leading-tight sm:mt-5 lg:text-4xl">The message and the machine move together.</h2><p className="mt-4 max-w-[40ch] leading-relaxed text-brand-ink/60 sm:mt-5">Marketing creates demand. Development turns it into a dependable digital operation.</p><div className="mt-6 h-px w-24 bg-brand-orange sm:mt-8" /></div>
          <div className="space-y-8 lg:col-span-8">
            <ServiceGroup title="Marketing" code="Group A" items={["Brand strategy & positioning","SEO & content marketing","Paid media & lead generation","Social media marketing","Email & lifecycle campaigns","Analytics & conversion optimization"]} to="/marketing" />
            <ServiceGroup title="Development" code="Group B" items={["Web development & eCommerce","iOS & Android app development","Custom ERP systems","CRM & sales platforms","SCM & logistics software","Cloud, APIs & integrations"]} to="/development" />
          </div>
        </div>
      </section>

      <section className="blueprint border-y border-brand-line/40">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12 gap-8 px-5 py-16 sm:px-8 sm:py-20">
          <div className="lg:col-span-5"><p className="text-[11px] uppercase tracking-[0.3em] text-brand-orange">02 — AI agents</p><h2 className="mt-4 text-3xl leading-tight sm:mt-5 sm:text-4xl">Automate the work between your systems.</h2><p className="mt-4 max-w-[46ch] text-base leading-relaxed text-brand-paper/65 sm:mt-6 sm:text-lg">We design secure AI agents for customer support, lead qualification, reporting, internal knowledge, scheduling, document handling, and multi-step workflows.</p><Link to="/ai-agents" className="mt-6 inline-flex border-b border-brand-orange pb-1 text-sm font-medium text-brand-orange sm:mt-8">Explore AI agent services →</Link></div>
          <div className="border border-brand-line/50 bg-brand-ink-2/50 p-5 sm:p-6 lg:col-span-7"><div className="flex justify-between border-b border-brand-line/30 pb-4 text-[10px] uppercase tracking-[0.2em] text-brand-paper/40"><span>Agent workflow</span><span className="text-brand-orange">Human-controlled</span></div>{["Receive and classify requests","Retrieve approved business knowledge","Take action across connected tools","Record outcomes for review"].map((step,index)=><div key={step} className="flex items-center gap-4 border-b border-brand-line/20 py-4 last:border-0"><span className="text-xs text-brand-orange">0{index+1}</span><p className="text-sm text-brand-paper/80">{step}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-brand-paper text-brand-ink"><div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20"><div className="flex items-end justify-between border-b border-brand-ink/15 pb-5"><h2 className="text-2xl sm:text-3xl">How a build moves</h2><span className="text-[11px] uppercase tracking-[0.2em] text-brand-ink/45">03 — Delivery sequence</span></div><div className="mt-8 grid gap-0 border border-brand-ink/15 sm:grid-cols-2 lg:grid-cols-4">{[["01","Discover","Goals, users and operational constraints."],["02","Blueprint","Strategy, scope and technical architecture."],["03","Build","Iterative delivery with visible progress."],["04","Improve","Launch, measure and evolve the system."]].map(([n,t,d])=><div key={n} className="border-b border-brand-ink/15 p-5 last:border-0 sm:p-6 sm:even:border-l sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(4)]:border-b-0 lg:border-b-0 lg:border-l lg:first:border-l-0"><p className="text-2xl text-brand-orange">{n}</p><h3 className="mt-3 text-xl sm:mt-4">{t}</h3><p className="mt-2 text-sm leading-relaxed text-brand-ink/60">{d}</p></div>)}</div></div></section>

      <section className="bg-brand-ink-2"><div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12 items-start gap-8 px-5 py-16 sm:items-end sm:px-8 sm:py-20"><div className="lg:col-span-7"><p className="text-[11px] uppercase tracking-[0.3em] text-brand-paper/50">04 — Start a project</p><h2 className="mt-4 max-w-[18ch] text-3xl leading-tight sm:mt-5 sm:text-4xl lg:text-5xl">Send us the problem. We’ll shape the path forward.</h2></div><div className="lg:col-span-5"><Link to="/contact" className="flex w-full items-center justify-between bg-brand-orange px-6 py-4 font-semibold text-brand-ink">Contact R2 DreamForge <span>→</span></Link><p className="mt-3 text-sm text-brand-paper/50">Tell us your goal, current systems, and ideal timeline.</p></div></div></section>
    </main>
  );
}

function ServiceGroup({ title, code, items, to }: { title: string; code: string; items: string[]; to: "/marketing" | "/development" }) {
  return <div className="border-t border-brand-ink/15 pt-6"><div className="flex items-baseline justify-between"><h3 className="text-2xl">{title}</h3><span className="text-[11px] uppercase tracking-[0.2em] text-brand-ink/40">{code}</span></div><div className="mt-4 grid border border-brand-ink/10 sm:grid-cols-2">{items.map((item,index)=><div key={item} className="flex gap-3 border-b border-brand-ink/10 p-4 last:border-0 sm:even:border-l sm:[&:nth-child(5)]:border-b-0 sm:[&:nth-child(6)]:border-b-0"><span className="text-xs text-brand-orange">{String(index+1).padStart(2,"0")}</span><span className="text-sm font-medium">{item}</span></div>)}</div><Link to={to} className="mt-4 inline-flex text-sm font-semibold text-brand-orange">View {title.toLowerCase()} services →</Link></div>;
}
