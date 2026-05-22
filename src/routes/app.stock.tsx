import { createFileRoute } from "@tanstack/react-router";
import { Card, KpiCard, Eyebrow } from "@/components/dash";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Bar, BarChart } from "recharts";
import { AlertTriangle, Package, Sparkles } from "lucide-react";

export const Route = createFileRoute("/app/stock")({ component: Stock });

const forecast = Array.from({ length: 30 }, (_, i) => ({ d: i + 1, real: i < 14 ? 200 + Math.sin(i / 2) * 60 + i * 5 : null, prev: 240 + Math.sin(i / 2) * 70 + i * 6 }));
const skus = [
  { n: "Fone Sound Pro", s: 92, status: "Saudável" },
  { n: "Galaxy Watch 6", s: 64, status: "Atenção" },
  { n: "Echo Dot 5", s: 28, status: "Crítico" },
  { n: "Tênis Run X", s: 78, status: "Saudável" },
  { n: "Cafeteira Auto", s: 41, status: "Atenção" },
];

function Stock() {
  return (
    <div className="space-y-6">
      <header><Eyebrow>Stock Prediction</Eyebrow><h1 className="text-3xl font-bold">Previsão de Estoque com IA</h1></header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard label="SKUs monitorados" value="14.298" />
        <KpiCard label="Acurácia preditiva" value="92,4%" delta="+3,2 p.p." accent />
        <KpiCard label="Oversell evitado" value="2.184" delta="últimos 30d" />
        <KpiCard label="Rupturas previstas" value="63" delta="7d" />
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Card title="Demanda real vs previsão IA (30d)">
            <div className="h-72">
              <ResponsiveContainer><AreaChart data={forecast}>
                <defs>
                  <linearGradient id="r" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="oklch(0.7 0.22 250)" stopOpacity={0.6} /><stop offset="100%" stopColor="oklch(0.7 0.22 250)" stopOpacity={0} /></linearGradient>
                  <linearGradient id="p" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="oklch(0.7 0.28 300)" stopOpacity={0.6} /><stop offset="100%" stopColor="oklch(0.7 0.28 300)" stopOpacity={0} /></linearGradient>
                </defs>
                <CartesianGrid stroke="oklch(0.4 0.05 290 / 20%)" /><XAxis dataKey="d" stroke="#888" fontSize={11} /><YAxis stroke="#888" fontSize={11} />
                <Tooltip contentStyle={{ background: "oklch(0.2 0.04 285)", border: "1px solid oklch(0.4 0.06 290 / 40%)", borderRadius: 12 }} />
                <Area dataKey="real" stroke="oklch(0.7 0.22 250)" fill="url(#r)" />
                <Area dataKey="prev" stroke="oklch(0.7 0.28 300)" fill="url(#p)" strokeDasharray="4 4" />
              </AreaChart></ResponsiveContainer>
            </div>
          </Card>
        </div>
        <Card title="SKU Health">
          <div className="space-y-3">
            {skus.map((s) => (
              <div key={s.n}>
                <div className="flex justify-between text-sm"><span>{s.n}</span><span className={s.s < 40 ? "text-rose-400" : s.s < 70 ? "text-amber-400" : "text-emerald-400"}>{s.status}</span></div>
                <div className="h-1.5 mt-1 bg-secondary rounded-full overflow-hidden"><div className={`h-full ${s.s < 40 ? "bg-rose-500" : s.s < 70 ? "bg-amber-500" : "bg-emerald-500"}`} style={{ width: `${s.s}%` }} /></div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Alertas Operacionais" action={<Sparkles className="size-5 text-primary" />}>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { i: AlertTriangle, t: "Echo Dot 5 · ruptura em 6 dias", d: "Reabastecer 800 un. via fornecedor SP" },
            { i: Package, t: "Cafeteira Auto · giro lento", d: "Sugestão: promo 12% off · ROI +R$ 18k" },
            { i: AlertTriangle, t: "API ML drift detectado", d: "Retreino agendado em 12h" },
          ].map((a, i) => (
            <div key={i} className="glass rounded-xl p-4"><a.i className="size-5 text-primary mb-2" /><div className="text-sm font-semibold">{a.t}</div><div className="text-xs text-muted-foreground mt-1">{a.d}</div></div>
          ))}
        </div>
      </Card>
    </div>
  );
}
