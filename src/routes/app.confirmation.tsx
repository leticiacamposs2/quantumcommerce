import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Truck } from "lucide-react";

export const Route = createFileRoute("/app/confirmation")({ component: Conf });

function Conf() {
  return (
    <div className="max-w-2xl mx-auto py-16 text-center space-y-6">
      <div className="size-20 rounded-full gradient-primary grid place-items-center mx-auto glow-purple animate-pulse-glow">
        <CheckCircle2 className="size-10 text-white" />
      </div>
      <h1 className="text-4xl font-bold">Pedido confirmado!</h1>
      <div className="text-sm text-muted-foreground">Pedido <span className="font-mono text-primary">#QC45821</span></div>
      <p className="text-muted-foreground">Você receberá um e-mail com todos os detalhes. Quantum AI está orquestrando seu envio.</p>
      <div className="glass-strong rounded-2xl p-6 text-left space-y-3">
        <div className="flex items-center gap-3"><Truck className="size-5 text-primary" /><div><div className="font-semibold text-sm">Chega entre 23 e 25/05</div><div className="text-xs text-muted-foreground">Via Loggi · SLA 96% confiança</div></div></div>
        <div className="h-1 bg-secondary rounded-full"><div className="h-full w-1/4 gradient-primary rounded-full" /></div>
        <div className="grid grid-cols-4 text-[10px] text-muted-foreground">
          <div className="text-primary">Pedido</div><div>Pagamento</div><div>Em transporte</div><div>Entregue</div>
        </div>
      </div>
      <Link to="/app/tracking" className="inline-block gradient-primary text-white px-6 py-3 rounded-xl font-semibold glow-purple">Acompanhar pedido</Link>
    </div>
  );
}
