import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import {
  Sparkles, Brain, ShieldCheck, Network, Truck, BarChart3, ArrowRight,
  Zap, Globe, Bot, TrendingUp, Lock, CheckCircle2,
} from "lucide-react";
import { kpis, agents } from "@/lib/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quantum Commerce — AI-Native Marketplace" },
      { name: "description", content: "O primeiro marketplace AI-native do Brasil. Agentes inteligentes em toda a jornada de compra, venda e logística." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-40 glass-strong border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-7 text-sm text-foreground/80">
            <a href="#vision" className="hover:text-primary transition">Visão</a>
            <a href="#strategy" className="hover:text-primary transition">Estratégia</a>
            <a href="#hub" className="hover:text-primary transition">AI Hub</a>
            <a href="#governance" className="hover:text-primary transition">Governança</a>
            <a href="#roadmap" className="hover:text-primary transition">Roadmap</a>
          </nav>
          <Link
            to="/app/shop"
            className="gradient-primary text-white text-sm font-medium px-4 py-2 rounded-xl glow-purple hover:scale-105 transition flex items-center gap-2"
          >
            Entrar na plataforma <ArrowRight className="size-4" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden grid-bg">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs mb-6">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Apresentação Executiva · MBA · Q1 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl">
            O primeiro marketplace <span className="gradient-text">AI-native</span> do Brasil.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Quantum Commerce orquestra agentes inteligentes em toda a jornada — do clique à entrega — combinando inteligência operacional de Amazon, conversação Klarna, ecossistema Shopify e simpleza Nubank.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/app/shop" className="gradient-primary text-white px-6 py-3 rounded-xl font-medium glow-purple flex items-center gap-2 hover:scale-105 transition">
              Explorar a plataforma <ArrowRight className="size-4" />
            </Link>
            <Link to="/app/executive" className="glass px-6 py-3 rounded-xl font-medium hover:bg-secondary transition">
              Ver Dashboard Executivo
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.slice(0, 4).map((k) => (
              <div key={k.label} className="glass rounded-2xl p-5">
                <div className="text-xs text-muted-foreground">{k.label}</div>
                <div className="text-2xl font-bold mt-1">{k.value}</div>
                <div className="text-xs text-emerald-400 mt-1">{k.delta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="max-w-7xl mx-auto px-6 py-24">
        <SectionTitle eyebrow="Nossa Visão" title="IA como infraestrutura operacional do marketplace." />
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {[
            { icon: Brain, title: "Inteligência em cada etapa", desc: "Agentes de IA operam desde busca, recomendação, checkout até pós-venda." },
            { icon: Bot, title: "Experiência conversacional", desc: "Quantum AI guia o comprador em linguagem natural com contexto completo." },
            { icon: Globe, title: "Omnichannel real", desc: "Web, mobile, voz, WhatsApp e parceiros — mesma camada de inteligência." },
          ].map((f, i) => (
            <div key={i} className="glass rounded-2xl p-6 hover:ring-glow transition">
              <div className="size-12 rounded-xl gradient-primary grid place-items-center mb-4">
                <f.icon className="size-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategy */}
      <section id="strategy" className="max-w-7xl mx-auto px-6 py-24">
        <SectionTitle eyebrow="Estratégia com IA" title="Da hipótese ao impacto, em três horizontes." />
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {[
            { h: "H1 · Now", t: "Fundamentos AI-native", b: ["Busca semântica", "Recomendação contextual", "Suporte agêntico 24/7"] },
            { h: "H2 · Next", t: "Operação autônoma", b: ["Logística orquestrada", "Previsão de demanda", "Pricing dinâmico do seller"] },
            { h: "H3 · Beyond", t: "Comércio agêntico", b: ["Agentes negociam por você", "Comércio por voz/IoT", "Marketplaces verticais autônomos"] },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 gradient-primary" />
              <div className="text-xs uppercase tracking-widest text-primary mb-3">{s.h}</div>
              <h3 className="text-xl font-bold">{s.t}</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {s.b.map((x) => (
                  <li key={x} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" /> {x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* AI Hub preview */}
      <section id="hub" className="max-w-7xl mx-auto px-6 py-24">
        <SectionTitle eyebrow="Quantum AI Hub" title="10 agentes orquestrados sob governança contínua." />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 mt-10">
          {agents.map((a) => (
            <div key={a.name} className="glass rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className={`size-2 rounded-full ${a.status === "guarding" ? "bg-amber-400" : "bg-emerald-400"} animate-pulse`} />
                <div className="text-sm font-semibold">{a.name}</div>
              </div>
              <div className="text-[11px] text-muted-foreground line-clamp-2">{a.desc}</div>
              <div className="mt-3 h-1 bg-secondary rounded-full overflow-hidden">
                <div className="h-full gradient-primary" style={{ width: `${a.confidence}%` }} />
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">Confidence {a.confidence}%</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/app/hub" className="text-primary hover:underline text-sm">Ver arquitetura completa →</Link>
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="max-w-7xl mx-auto px-6 py-24">
        <SectionTitle eyebrow="Trustworthy AI by Design" title="Governança, conformidade e auditoria como pilar." />
        <div className="grid md:grid-cols-4 gap-5 mt-10">
          {[
            { icon: ShieldCheck, t: "LGPD nativa", d: "Privacy-by-design em todo dado pessoal." },
            { icon: Lock, t: "Human-in-the-loop", d: "Decisões de alto risco passam por aprovação humana." },
            { icon: Brain, t: "Monitor de hallucinations", d: "Telemetria contínua + rollback automático." },
            { icon: Network, t: "Shadow AI prevention", d: "Catálogo central de modelos e prompts auditados." },
          ].map((g, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <g.icon className="size-6 text-primary mb-3" />
              <div className="font-semibold">{g.t}</div>
              <div className="text-xs text-muted-foreground mt-1">{g.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benchmarks */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionTitle eyebrow="Benchmarks" title="Quantum vs. marketplaces convencionais." />
        <div className="glass rounded-2xl p-6 mt-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-muted-foreground border-b border-border/40">
              <tr>
                <th className="py-3">Dimensão</th>
                <th>Marketplace tradicional</th>
                <th className="text-primary">Quantum Commerce</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Busca", "Keyword match", "Semântica + intenção"],
                ["Recomendação", "Estática", "Contextual em tempo real"],
                ["Suporte", "Filas humanas", "Agêntico com supervisão"],
                ["Logística", "Tabela de frete", "Orquestração por IA"],
                ["Estoque", "Reativo", "Preditivo c/ confiança"],
                ["Seller", "Painel manual", "Co-piloto IA"],
                ["Governança", "Posterior", "Embarcada"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-border/20 last:border-0">
                  <td className="py-3 font-medium">{r[0]}</td>
                  <td className="text-muted-foreground">{r[1]}</td>
                  <td className="text-primary font-medium">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="max-w-7xl mx-auto px-6 py-24">
        <SectionTitle eyebrow="Roadmap" title="Maturidade AI da plataforma." />
        <div className="grid md:grid-cols-4 gap-4 mt-10">
          {[
            { q: "Q1", t: "AI Foundations", c: ["Busca semântica", "Quantum AI Chat", "Recomendação base"] },
            { q: "Q2", t: "Smart Operations", c: ["Logística orquestrada", "Stock prediction", "Fraud agent"] },
            { q: "Q3", t: "Seller Co-Pilot", c: ["Pricing IA", "Descrição IA", "Insights de campanha"] },
            { q: "Q4", t: "Agentic Commerce", c: ["Negociação autônoma", "Voice commerce", "Marketplaces verticais"] },
          ].map((r, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <div className="text-xs text-primary font-semibold">{r.q}</div>
              <div className="font-bold mt-1">{r.t}</div>
              <ul className="mt-3 space-y-1 text-xs text-foreground/80">
                {r.c.map((x) => <li key={x}>· {x}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="glass-strong rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative">
            <Sparkles className="size-10 text-primary mx-auto mb-4 animate-float" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              O futuro do e-commerce é <span className="gradient-text">agêntico</span>.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Navegue por toda a experiência: loja, checkout, tracking, seller hub, logística, governança e estratégia executiva.
            </p>
            <Link to="/app/shop" className="inline-flex mt-8 gradient-primary text-white px-7 py-3.5 rounded-xl font-semibold glow-purple items-center gap-2 hover:scale-105 transition">
              Entrar na Quantum Commerce <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-3"><Logo small /> · Inteligência que move o comércio</div>
          <div>© 2026 Quantum Commerce · Trustworthy AI by Design</div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">{eyebrow}</div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}
