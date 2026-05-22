import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Truck, Package, Home, Sparkles, MapPin } from "lucide-react";

export const Route = createFileRoute("/app/tracking")({ component: Track });

const steps = [
  { icon: CheckCircle2, t: "Pedido realizado", d: "21/05 · 14:22", done: true },
  { icon: CheckCircle2, t: "Pagamento aprovado", d: "21/05 · 14:23", done: true },
  { icon: Truck, t: "Em transporte", d: "22/05 · 09:10", done: true, active: true },
  { icon: Package, t: "Saiu para entrega", d: "Previsto 23/05", done: false },
  { icon: Home, t: "Entregue", d: "Previsto 23/05", done: false },
];

function Track() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div>
          <div className="text-xs text-muted-foreground">Pedido</div>
          <h1 className="text-3xl font-bold">#QC45821 · Em transporte</h1>
          <div className="text-sm text-muted-foreground mt-1">Previsão de entrega: <span className="text-primary font-semibold">23/05</span></div>
        </div>

        <div className="glass-strong rounded-2xl p-6">
          <div className="grid grid-cols-5 gap-3">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className={`mx-auto size-10 rounded-full grid place-items-center mb-2 ${s.active ? "gradient-primary animate-pulse-glow" : s.done ? "bg-primary/30" : "bg-secondary"}`}>
                  <s.icon className="size-5 text-white" />
                </div>
                <div className={`text-xs font-semibold ${s.done ? "" : "text-muted-foreground"}`}>{s.t}</div>
                <div className="text-[10px] text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6 h-72 grid-bg relative overflow-hidden">
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <MapPin className="size-10 text-primary mx-auto mb-2 animate-bounce" />
              <div className="text-sm">Veículo em São Paulo / SP</div>
              <div className="text-xs text-muted-foreground">Hub Loggi VL · ETA 23/05 14h</div>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-4 flex items-start gap-3">
          <Sparkles className="size-5 text-primary mt-0.5" />
          <div className="text-sm">
            <span className="font-semibold">Quantum AI:</span> nenhum risco de atraso detectado. Confiança de SLA <span className="text-emerald-400 font-semibold">96%</span>. Em caso de imprevisto, ativarei rerouting automático.
          </div>
        </div>
      </div>

      <aside className="glass-strong rounded-2xl p-6 h-fit space-y-4 sticky top-6">
        <div>
          <h3 className="font-bold mb-3">Detalhes do envio</h3>
          <div className="text-xs text-muted-foreground">Transportadora</div>
          <div className="font-semibold">Loggi · Quantum Logistics</div>
          <div className="text-xs text-muted-foreground mt-3">Código de rastreio</div>
          <div className="font-mono text-sm">QL123456789BR</div>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-sm">Itens (3)</h4>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div>🎧 Quantum Sound Pro</div>
            <div>⌚ Galaxy Watch 6</div>
            <div>🔊 Echo Dot 5</div>
          </div>
        </div>
      </aside>
    </div>
  );
}
