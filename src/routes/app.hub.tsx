import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Card } from "@/components/dash";
import { agents } from "@/lib/mock";
import { Brain, Database, Workflow, ShieldCheck, Users, Cpu } from "lucide-react";

export const Route = createFileRoute("/app/hub")({ component: Hub });

function Hub() {
  return (
    <div className="space-y-6">
      <header><Eyebrow>Quantum AI Hub</Eyebrow><h1 className="text-3xl font-bold">Arquitetura Multi-Agente</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">10 agentes orquestrados em pipeline observável, com human-in-the-loop, governança e telemetria contínua.</p>
      </header>

      {/* Architecture viz */}
      <div className="glass-strong rounded-3xl p-6 md:p-10 grid-bg">
        <div className="grid lg:grid-cols-5 gap-6 items-center">
          <Layer icon={Users} title="Touchpoints" items={["Web", "Mobile", "Voz", "WhatsApp", "Sellers"]} />
          <Arrow />
          <Layer icon={Workflow} title="Orchestrator" items={["Router", "Context", "Memory", "Tools"]} center />
          <Arrow />
          <Layer icon={Database} title="Data & ML" items={["Embeddings", "Feature Store", "Vector DB", "Telemetria"]} />
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3">
          {agents.map((a) => (
            <div key={a.name} className="glass rounded-xl p-3 text-center hover:ring-glow transition">
              <Brain className="size-5 text-primary mx-auto mb-2" />
              <div className="text-xs font-semibold">{a.name}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">conf {a.confidence}%</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Pill icon={ShieldCheck} t="Governance Layer" d="Auditoria, LGPD, risk tiers, kill-switch" />
          <Pill icon={Cpu} t="Model Catalog" d="LLMs, embeddings, classifiers, ranking" />
          <Pill icon={Users} t="Human-in-the-loop" d="Aprovações + feedback loop contínuo" />
        </div>
      </div>

      <Card title="Pipelines em execução">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-muted-foreground text-left text-xs"><tr><th className="py-2">Pipeline</th><th>Trigger</th><th>Latência p95</th><th>Conf.</th><th>Status</th></tr></thead>
            <tbody>
              {[
                ["Search · semantic-rerank", "User query", "180ms", "94%", "healthy"],
                ["Reco · ctx-aware", "Page load", "210ms", "92%", "healthy"],
                ["Fraud · score", "Checkout", "85ms", "99%", "healthy"],
                ["Logistics · routing", "New order", "320ms", "91%", "scaling"],
                ["Support · agent", "Chat msg", "640ms", "90%", "healthy"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-border/30">
                  <td className="py-2 font-medium">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td className="text-primary">{r[3]}</td>
                  <td><span className={`text-xs px-2 py-0.5 rounded-full ${r[4] === "healthy" ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"}`}>{r[4]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

function Layer({ icon: I, title, items, center }: any) {
  return (
    <div className={`glass rounded-2xl p-5 ${center ? "ring-glow animate-pulse-glow" : ""}`}>
      <I className="size-5 text-primary mb-2" />
      <div className="font-semibold mb-3">{title}</div>
      <div className="space-y-1.5">{items.map((it: string) => <div key={it} className="text-xs bg-secondary/60 rounded-md px-2 py-1">{it}</div>)}</div>
    </div>
  );
}
function Arrow() { return <div className="hidden lg:flex justify-center"><div className="h-px w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0" /></div>; }
function Pill({ icon: I, t, d }: any) {
  return <div className="glass rounded-xl p-4 flex items-start gap-3"><I className="size-5 text-primary mt-0.5" /><div><div className="font-semibold text-sm">{t}</div><div className="text-xs text-muted-foreground">{d}</div></div></div>;
}
