import { createFileRoute } from "@tanstack/react-router";
import { Card, KpiCard, Eyebrow } from "@/components/dash";
import { ShieldCheck, AlertTriangle, Eye, Lock } from "lucide-react";

export const Route = createFileRoute("/app/governance")({ component: Gov });

function Gov() {
  return (
    <div className="space-y-6">
      <header><Eyebrow>Trustworthy AI</Eyebrow><h1 className="text-3xl font-bold">Governance & Trust Center</h1></header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard label="Modelos catalogados" value="42" delta="100% auditados" accent />
        <KpiCard label="Hallucination rate" value="0,38%" delta="-0,12 p.p." />
        <KpiCard label="Aprovações humanas" value="1.284" delta="últimos 30d" />
        <KpiCard label="Shadow AI bloqueada" value="17" delta="esta semana" />
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <Card title="Risk tiers ativos">
          {[
            { t: "Tier 1 · Crítico", d: "Fraud, Pagamento, Compliance", v: 8, c: "bg-rose-500" },
            { t: "Tier 2 · Alto", d: "Logística, Pricing, Estoque", v: 14, c: "bg-amber-500" },
            { t: "Tier 3 · Médio", d: "Recomendação, Busca, Suporte", v: 18, c: "bg-primary" },
            { t: "Tier 4 · Baixo", d: "Sumarização, Tags, Insights", v: 22, c: "bg-emerald-500" },
          ].map((r) => (
            <div key={r.t} className="glass rounded-xl p-3 mt-2">
              <div className="flex justify-between text-sm font-semibold">{r.t}<span>{r.v}</span></div>
              <div className="text-xs text-muted-foreground">{r.d}</div>
              <div className={`h-1 rounded-full mt-2 ${r.c}`} style={{ width: `${r.v * 4}%` }} />
            </div>
          ))}
        </Card>

        <Card title="Audit log (últimos eventos)">
          <div className="space-y-2 text-xs">
            {[
              { i: ShieldCheck, t: "Aprovação humana · refund > R$ 5k", w: "ana.silva", c: "text-emerald-400" },
              { i: AlertTriangle, t: "Drift detectado · model reco-v3", w: "auto", c: "text-amber-400" },
              { i: Eye, t: "Observability spike · latency p95", w: "auto", c: "text-primary" },
              { i: Lock, t: "LGPD · request de exclusão atendido", w: "sistema", c: "text-emerald-400" },
              { i: ShieldCheck, t: "Kill-switch ensaiado · pricing-agent", w: "joao.lima", c: "text-emerald-400" },
            ].map((e, i) => (
              <div key={i} className="glass rounded-lg p-3 flex items-center gap-3">
                <e.i className={`size-4 ${e.c}`} />
                <div className="flex-1"><div className="font-semibold">{e.t}</div><div className="text-muted-foreground">por {e.w}</div></div>
                <div className="text-muted-foreground">há {i + 2}m</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="LGPD & Compliance">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { t: "Data minimization", v: "100%" },
            { t: "DPIA aprovadas", v: "28/28" },
            { t: "Consent rate", v: "94%" },
            { t: "Right-to-erasure SLA", v: "< 24h" },
          ].map((c) => (
            <div key={c.t} className="glass rounded-xl p-4"><div className="text-xs text-muted-foreground">{c.t}</div><div className="text-2xl font-bold mt-1 text-primary">{c.v}</div></div>
          ))}
        </div>
      </Card>
    </div>
  );
}
