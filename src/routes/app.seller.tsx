import { createFileRoute } from "@tanstack/react-router";
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Card, KpiCard, Eyebrow } from "@/components/dash";
import { Sparkles, TrendingUp, DollarSign, Eye, Tag } from "lucide-react";

export const Route = createFileRoute("/app/seller")({ component: Seller });

const sales = Array.from({ length: 14 }, (_, i) => ({ d: `${i + 1}/05`, v: 18000 + Math.sin(i) * 3000 + i * 600, ad: 12000 + i * 400 }));
const conv = [
  { c: "Visitas", v: 18420 }, { c: "Carrinho", v: 4210 }, { c: "Checkout", v: 1880 }, { c: "Pedidos", v: 1124 },
];

function Seller() {
  return (
    <div className="space-y-6">
      <header>
        <Eyebrow>Seller Hub</Eyebrow>
        <h1 className="text-3xl font-bold">Olá, Quantum Tech Store 👋</h1>
        <p className="text-sm text-muted-foreground">Seu copiloto IA está monitorando 12 KPIs em tempo real.</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard label="GMV (mês)" value="R$ 482k" delta="+24%" accent />
        <KpiCard label="Pedidos" value="1.124" delta="+18%" />
        <KpiCard label="Ticket médio" value="R$ 429" delta="+6%" />
        <KpiCard label="Conversão" value="6,1%" delta="+1,4 p.p." />
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Card title="Vendas vs Anúncios (últimos 14 dias)">
            <div className="h-64">
              <ResponsiveContainer><AreaChart data={sales}>
                <defs>
                  <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="oklch(0.65 0.26 295)" stopOpacity={0.8} /><stop offset="100%" stopColor="oklch(0.65 0.26 295)" stopOpacity={0} /></linearGradient>
                  <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="oklch(0.7 0.22 250)" stopOpacity={0.6} /><stop offset="100%" stopColor="oklch(0.7 0.22 250)" stopOpacity={0} /></linearGradient>
                </defs>
                <CartesianGrid stroke="oklch(0.4 0.05 290 / 20%)" />
                <XAxis dataKey="d" stroke="#888" fontSize={11} /><YAxis stroke="#888" fontSize={11} />
                <Tooltip contentStyle={{ background: "oklch(0.2 0.04 285)", border: "1px solid oklch(0.4 0.06 290 / 40%)", borderRadius: 12 }} />
                <Area dataKey="v" stroke="oklch(0.7 0.28 300)" fill="url(#g1)" />
                <Area dataKey="ad" stroke="oklch(0.7 0.22 250)" fill="url(#g2)" />
              </AreaChart></ResponsiveContainer>
            </div>
          </Card>
        </div>
        <Card title="Funil de conversão">
          <div className="h-64">
            <ResponsiveContainer><BarChart data={conv} layout="vertical">
              <XAxis type="number" hide /><YAxis dataKey="c" type="category" stroke="#888" fontSize={11} width={70} />
              <Tooltip contentStyle={{ background: "oklch(0.2 0.04 285)", border: "1px solid oklch(0.4 0.06 290 / 40%)", borderRadius: 12 }} />
              <Bar dataKey="v" fill="oklch(0.65 0.26 295)" radius={[0, 8, 8, 0]} />
            </BarChart></ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card title="Quantum AI · Recomendações para você" action={<Sparkles className="size-5 text-primary" />}>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: DollarSign, t: "Ajustar preço do Fone Pro", d: "Sugestão: R$ 469 (-2,3%) · projeção +18% conversão" },
            { icon: Tag, t: "Gerar descrição IA", d: "12 produtos com descrições fracas detectados" },
            { icon: Eye, t: "Boost campanha 'Inverno'", d: "ROAS projetado 4,2x · investir R$ 1.2k" },
          ].map((r, i) => (
            <div key={i} className="glass rounded-xl p-4">
              <r.icon className="size-5 text-primary mb-2" />
              <div className="font-semibold text-sm">{r.t}</div>
              <div className="text-xs text-muted-foreground mt-1">{r.d}</div>
              <button className="text-xs gradient-primary text-white px-3 py-1.5 rounded-lg mt-3">Aplicar</button>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Sentimento dos clientes">
        <div className="grid grid-cols-3 gap-4">
          {[{ l: "Positivo", v: "82%", c: "bg-emerald-500" }, { l: "Neutro", v: "12%", c: "bg-amber-500" }, { l: "Negativo", v: "6%", c: "bg-rose-500" }].map((s) => (
            <div key={s.l} className="glass rounded-xl p-4">
              <div className="text-xs text-muted-foreground">{s.l}</div>
              <div className="text-2xl font-bold">{s.v}</div>
              <div className={`h-1 rounded-full mt-2 ${s.c}`} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
