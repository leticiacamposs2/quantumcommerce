import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, MapPin, CreditCard, Check } from "lucide-react";

export const Route = createFileRoute("/app/checkout")({ component: Checkout });

function Checkout() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-5">
        <h1 className="text-3xl font-bold">Checkout</h1>

        <Steps current={1} />

        <section className="glass-strong rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2"><MapPin className="size-5 text-primary" /><h2 className="font-bold">Endereço de entrega</h2></div>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="glass rounded-xl p-4 ring-glow">
              <div className="text-xs text-primary">Casa</div>
              <div className="font-semibold">Clara Souza</div>
              <div className="text-xs text-muted-foreground">Rua das Flores, 123 · Jardim Paulista · SP · 01415-000</div>
            </div>
            <button className="glass rounded-xl p-4 border-dashed border text-muted-foreground text-sm">+ Adicionar novo endereço</button>
          </div>
        </section>

        <section className="glass-strong rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2"><Sparkles className="size-5 text-primary" /><h2 className="font-bold">Entrega Inteligente (com IA)</h2></div>
          <p className="text-xs text-muted-foreground">Recomendamos a melhor opção para você:</p>
          <Opt sel title="Entrega Padrão" sub="Chega entre 23 e 25/05 · Loggi" price="Grátis" badge="Melhor custo-benefício" />
          <Opt title="Entrega Rápida" sub="Chega amanhã, 22/05" price="R$ 14,90" />
          <Opt title="Entrega Expressa" sub="Hoje até 20h · Local courier" price="R$ 29,90" />
        </section>

        <Link to="/app/payment" className="block w-full gradient-primary text-white py-3 rounded-xl font-semibold glow-purple text-center">Continuar para pagamento</Link>
      </div>

      <aside className="glass rounded-2xl p-6 h-fit sticky top-6 space-y-2">
        <h3 className="font-bold mb-2">Pedido</h3>
        <div className="flex justify-between text-sm"><span>3 itens</span><span>R$ 2.027,90</span></div>
        <div className="flex justify-between text-sm text-emerald-400"><span>Cupom IA</span><span>- R$ 100,00</span></div>
        <div className="flex justify-between text-sm"><span>Frete</span><span>Grátis</span></div>
        <div className="border-t border-border/40 pt-3 mt-3 flex justify-between font-bold"><span>Total</span><span>R$ 1.927,90</span></div>
        <div className="text-xs glass rounded-xl p-3 mt-3"><Sparkles className="size-4 text-primary inline mr-1" /> Best shipping selected by AI: SLA, price & risk balanced for your profile.</div>
      </aside>
    </div>
  );
}

export function Steps({ current }: { current: number }) {
  const steps = ["Endereço", "Pagamento", "Revisão"];
  return (
    <div className="flex items-center gap-2">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2 flex-1">
          <div className={`size-7 grid place-items-center rounded-full text-xs font-bold ${i <= current ? "gradient-primary text-white" : "bg-secondary text-muted-foreground"}`}>{i < current ? <Check className="size-4" /> : i + 1}</div>
          <div className={`text-sm ${i === current ? "font-semibold" : "text-muted-foreground"}`}>{s}</div>
          {i < steps.length - 1 && <div className="flex-1 h-px bg-border" />}
        </div>
      ))}
    </div>
  );
}
function Opt({ title, sub, price, sel, badge }: any) {
  return (
    <div className={`flex items-center gap-3 glass rounded-xl p-4 ${sel ? "ring-glow" : ""}`}>
      <div className={`size-4 rounded-full border-2 ${sel ? "bg-primary border-primary" : "border-muted-foreground"}`} />
      <div className="flex-1">
        <div className="font-semibold text-sm flex items-center gap-2">{title} {badge && <span className="text-[10px] text-primary border border-primary/40 px-2 py-0.5 rounded-full">{badge}</span>}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
      <div className="font-semibold text-sm">{price}</div>
    </div>
  );
}
