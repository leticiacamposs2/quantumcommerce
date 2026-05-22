import { createFileRoute } from "@tanstack/react-router";
import { Card, KpiCard, Eyebrow } from "@/components/dash";
import { carriers } from "@/lib/mock";
import { Truck, AlertTriangle, MapPin, Activity } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

export const Route = createFileRoute("/app/logistics")({ component: Logistics });

const sla = Array.from({ length: 12 }, (_, i) => ({ h: `${i * 2}h`, sla: 92 + Math.sin(i) * 3 + i * 0.3 }));

function Logistics() {
  return (
    <div className="space-y-6">
      <header>
        <Eyebrow>AI Logistics Orchestration</Eyebrow>
        <h1 className="text-3xl font-bold">Centro de Comando Logístico</h1>
        <p className="text-sm text-muted-foreground">Orquestração autônoma de 5 transportadoras · 12.408 entregas ativas</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard label="SLA hoje" value="98,2%" delta="+1,4 p.p." accent />
        <KpiCard label="Entregas em curso" value="12.408" delta="+8%" />
        <KpiCard label="Reroteamentos IA" value="287" delta="autônomos" />
        <KpiCard label="Custo médio frete" value="R$ 9,40" delta="-12%" />
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <Card title="Decisão por transportadora (real-time)">
            <div className="space-y-3">
              {carriers.map((c) => (
                <div key={c.name} className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Truck className="size-4 text-primary" />
                      <div>
                        <div className="font-semibold text-sm">{c.name}</div>
                        <div className="text-xs text-muted-foreground">SLA {c.sla} · carga {c.load}%</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-primary">{c.score}</div>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full gradient-primary" style={{ width: `${c.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Heatmap de entregas">
            <div className="grid grid-cols-12 gap-1 h-44">
              {Array.from({ length: 12 * 6 }).map((_, i) => {
                const intensity = Math.random();
                return <div key={i} className="rounded-sm" style={{ background: `oklch(${0.3 + intensity * 0.45} 0.2 ${280 + intensity * 30})`, opacity: 0.4 + intensity * 0.6 }} />;
              })}
            </div>
            <div className="text-xs text-muted-foreground mt-3 flex justify-between"><span>São Paulo · zona alta densidade</span><span>Belém · zona baixa densidade</span></div>
          </Card>
        </div>

        <div className="space-y-5">
          <Card title="SLA últimas 24h">
            <div className="h-44">
              <ResponsiveContainer><LineChart data={sla}>
                <CartesianGrid stroke="oklch(0.4 0.05 290 / 20%)" /><XAxis dataKey="h" stroke="#888" fontSize={10} /><YAxis stroke="#888" fontSize={10} domain={[85, 100]} />
                <Tooltip contentStyle={{ background: "oklch(0.2 0.04 285)", border: "1px solid oklch(0.4 0.06 290 / 40%)", borderRadius: 12 }} />
                <Line dataKey="sla" stroke="oklch(0.7 0.28 300)" strokeWidth={2} dot={false} />
              </LineChart></ResponsiveContainer>
            </div>
          </Card>

          <Card title="Alertas IA">
            <div className="space-y-3">
              {[
                { i: AlertTriangle, t: "Possível atraso · Hub Manaus", d: "Confiança 78%", c: "text-amber-400" },
                { i: Activity, t: "Pico de demanda · Pix Sexta", d: "Escalando capacidade", c: "text-primary" },
                { i: MapPin, t: "Rerouting Loggi 412 pacotes", d: "ETA mantido", c: "text-emerald-400" },
              ].map((a, i) => (
                <div key={i} className="glass rounded-xl p-3 flex items-start gap-3">
                  <a.i className={`size-4 ${a.c} mt-0.5`} />
                  <div><div className="text-sm font-semibold">{a.t}</div><div className="text-xs text-muted-foreground">{a.d}</div></div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
