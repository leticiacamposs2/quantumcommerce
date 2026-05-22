import { createFileRoute } from "@tanstack/react-router";
import { Card, KpiCard, Eyebrow } from "@/components/dash";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/app/analytics")({ component: Analytics });

const gmv = Array.from({ length: 12 }, (_, i) => ({ m: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"][i], v: 280 + i * 32 + Math.sin(i) * 20 }));
const cat = [{ n: "Eletrônicos", v: 38 }, { n: "Casa", v: 22 }, { n: "Moda", v: 18 }, { n: "Esportes", v: 12 }, { n: "Outros", v: 10 }];
const COLORS = ["oklch(0.65 0.26 295)", "oklch(0.7 0.22 250)", "oklch(0.75 0.2 200)", "oklch(0.7 0.25 330)", "oklch(0.6 0.24 270)"];

function Analytics() {
  return (
    <div className="space-y-6">
      <header><Eyebrow>AI Analytics</Eyebrow><h1 className="text-3xl font-bold">Inteligência de Negócio</h1></header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard label="GMV YTD" value="R$ 4,8 Bi" delta="+38%" accent />
        <KpiCard label="Usuários ativos" value="8,4M" delta="+22%" />
        <KpiCard label="Conversão" value="6,4%" delta="+1,9 p.p." />
        <KpiCard label="LTV" value="R$ 2.184" delta="+14%" />
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Card title="GMV mensal (R$ Mi)">
            <div className="h-72">
              <ResponsiveContainer><AreaChart data={gmv}>
                <defs><linearGradient id="ga" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="oklch(0.65 0.26 295)" stopOpacity={0.8} /><stop offset="100%" stopColor="oklch(0.65 0.26 295)" stopOpacity={0} /></linearGradient></defs>
                <CartesianGrid stroke="oklch(0.4 0.05 290 / 20%)" /><XAxis dataKey="m" stroke="#888" fontSize={11} /><YAxis stroke="#888" fontSize={11} />
                <Tooltip contentStyle={{ background: "oklch(0.2 0.04 285)", border: "1px solid oklch(0.4 0.06 290 / 40%)", borderRadius: 12 }} />
                <Area dataKey="v" stroke="oklch(0.7 0.28 300)" fill="url(#ga)" />
              </AreaChart></ResponsiveContainer>
            </div>
          </Card>
        </div>
        <Card title="Mix por categoria">
          <div className="h-72">
            <ResponsiveContainer><PieChart>
              <Pie data={cat} dataKey="v" nameKey="n" innerRadius={60} outerRadius={95} paddingAngle={3}>
                {cat.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "oklch(0.2 0.04 285)", border: "1px solid oklch(0.4 0.06 290 / 40%)", borderRadius: 12 }} />
            </PieChart></ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <Card title="Coorte de retenção (semanas)">
          <div className="grid grid-cols-9 gap-1 text-[10px] text-center">
            {Array.from({ length: 6 * 9 }).map((_, i) => {
              const v = Math.max(0, 100 - Math.floor(i / 9) * 8 - (i % 9) * 6 + Math.random() * 5);
              return <div key={i} className="rounded-sm py-2" style={{ background: `oklch(${0.3 + (v / 100) * 0.4} 0.2 295)`, opacity: 0.3 + (v / 100) }}>{Math.round(v)}</div>;
            })}
          </div>
        </Card>
        <Card title="Top searches IA">
          <div className="space-y-2">
            {["fone bluetooth para academia", "smartwatch com gps", "echo dot 5", "tênis run x feminino", "câmera segurança wi-fi"].map((q, i) => (
              <div key={q} className="glass rounded-lg p-3 flex justify-between text-sm"><span>{q}</span><span className="text-primary font-semibold">{(20 - i * 2)}k</span></div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
