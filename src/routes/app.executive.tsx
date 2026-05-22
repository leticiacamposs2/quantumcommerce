import { createFileRoute } from "@tanstack/react-router";
import { Card, KpiCard, Eyebrow } from "@/components/dash";
import { kpis } from "@/lib/mock";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/app/executive")({ component: Exec });

const roi = Array.from({ length: 8 }, (_, i) => ({ q: `Q${(i % 4) + 1}'${25 + Math.floor(i / 4)}`, roi: 1.2 + i * 0.35, cost: 1 - i * 0.07 }));

function Exec() {
  return (
    <div className="space-y-6">
      <header><Eyebrow>C-Level Strategy</Eyebrow><h1 className="text-3xl font-bold">Executive AI Dashboard</h1>
        <p className="text-sm text-muted-foreground">Visão consolidada de impacto da IA no negócio.</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((k, i) => <KpiCard key={k.label} label={k.label} value={k.value} delta={k.delta} accent={i === 0} />)}
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Card title="ROI da IA vs Custo Operacional (projeção)">
            <div className="h-72">
              <ResponsiveContainer><AreaChart data={roi}>
                <defs>
                  <linearGradient id="er" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="oklch(0.7 0.28 300)" stopOpacity={0.7} /><stop offset="100%" stopColor="oklch(0.7 0.28 300)" stopOpacity={0} /></linearGradient>
                  <linearGradient id="ec" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="oklch(0.7 0.22 250)" stopOpacity={0.5} /><stop offset="100%" stopColor="oklch(0.7 0.22 250)" stopOpacity={0} /></linearGradient>
                </defs>
                <CartesianGrid stroke="oklch(0.4 0.05 290 / 20%)" /><XAxis dataKey="q" stroke="#888" fontSize={11} /><YAxis stroke="#888" fontSize={11} />
                <Tooltip contentStyle={{ background: "oklch(0.2 0.04 285)", border: "1px solid oklch(0.4 0.06 290 / 40%)", borderRadius: 12 }} />
                <Area dataKey="roi" stroke="oklch(0.7 0.28 300)" fill="url(#er)" />
                <Area dataKey="cost" stroke="oklch(0.7 0.22 250)" fill="url(#ec)" />
              </AreaChart></ResponsiveContainer>
            </div>
          </Card>
        </div>

        <Card title="AI Maturity Roadmap">
          {[
            { h: "H1 · Now", t: "AI Foundations", p: 100 },
            { h: "H2 · 6m", t: "Smart Operations", p: 62 },
            { h: "H3 · 12m+", t: "Agentic Commerce", p: 18 },
          ].map((s) => (
            <div key={s.h} className="glass rounded-xl p-3 mt-2">
              <div className="text-xs text-primary">{s.h}</div>
              <div className="font-semibold text-sm">{s.t}</div>
              <div className="h-1.5 mt-2 bg-secondary rounded-full overflow-hidden"><div className="h-full gradient-primary" style={{ width: `${s.p}%` }} /></div>
              <div className="text-[10px] text-muted-foreground mt-1">{s.p}% concluído</div>
            </div>
          ))}
        </Card>
      </div>

      <Card title="Vantagens competitivas">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "AI-native by design", d: "IA não é feature: é a infraestrutura operacional." },
            { t: "Governança embarcada", d: "Trust desde a concepção · LGPD + auditoria contínua." },
            { t: "Ecossistema de sellers", d: "Co-piloto de IA elevando performance da long-tail." },
            { t: "Logística orquestrada", d: "Otimização multi-carrier autônoma em tempo real." },
            { t: "Conversational commerce", d: "Quantum AI guiando do clique à entrega." },
            { t: "Escala unicórnio", d: "Arquitetura pronta para 10x sem 10x de custo." },
          ].map((c) => (
            <div key={c.t} className="glass rounded-xl p-4"><div className="font-semibold">{c.t}</div><div className="text-xs text-muted-foreground mt-1">{c.d}</div></div>
          ))}
        </div>
      </Card>
    </div>
  );
}
