import { createFileRoute, Link } from "@tanstack/react-router";
import { Steps } from "./app.checkout";
import { CreditCard, Sparkles } from "lucide-react";

export const Route = createFileRoute("/app/payment")({ component: Payment });

function Payment() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-5">
        <h1 className="text-3xl font-bold">Pagamento</h1>
        <Steps current={1} />

        <div className="grid md:grid-cols-2 gap-5">
          <div className="glass-strong rounded-2xl p-5 space-y-3">
            <h2 className="font-bold">Meios de pagamento</h2>
            {[
              { t: "Cartão de crédito", s: "Visa, Mastercard, Elo...", sel: true },
              { t: "Pix", s: "Aprovação imediata · 5% off" },
              { t: "Boleto", s: "Aprovação em até 2 dias" },
              { t: "Carteiras digitais", s: "Apple Pay, Google Pay..." },
            ].map((o) => (
              <div key={o.t} className={`flex items-center gap-3 glass rounded-xl p-3 ${o.sel ? "ring-glow" : ""}`}>
                <CreditCard className="size-4 text-primary" />
                <div className="flex-1">
                  <div className="text-sm font-semibold">{o.t}</div>
                  <div className="text-xs text-muted-foreground">{o.s}</div>
                </div>
                <div className={`size-4 rounded-full border-2 ${o.sel ? "bg-primary border-primary" : "border-muted-foreground"}`} />
              </div>
            ))}
          </div>

          <div className="glass-strong rounded-2xl p-5 space-y-3">
            <h2 className="font-bold">Cartão de crédito</h2>
            <Field label="Número do cartão" v="4242 4242 4242 4242 · VISA" />
            <Field label="Nome no cartão" v="Clara Souza" />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Validade" v="12/27" />
              <Field label="CVV" v="123" />
            </div>
            <div className="glass rounded-xl p-3 text-xs flex items-start gap-2"><Sparkles className="size-4 text-primary mt-0.5" /> Quantum AI: cartão validado · risco de fraude <span className="text-emerald-400 font-semibold">muito baixo (0.04)</span>. Aprovação 1-clique disponível.</div>
          </div>
        </div>

        <Link to="/app/confirmation" className="block w-full gradient-primary text-white py-3 rounded-xl font-semibold glow-purple text-center">Revisar e pagar</Link>
      </div>

      <aside className="glass rounded-2xl p-6 h-fit space-y-2 sticky top-6">
        <h3 className="font-bold mb-2">Resumo</h3>
        <div className="flex justify-between text-sm"><span>Subtotal</span><span>R$ 2.027,90</span></div>
        <div className="flex justify-between text-sm text-emerald-400"><span>Desconto</span><span>- R$ 100,00</span></div>
        <div className="flex justify-between text-sm"><span>Frete</span><span>Grátis</span></div>
        <div className="border-t border-border/40 pt-3 mt-3 flex justify-between font-bold text-lg"><span>Total</span><span>R$ 1.927,90</span></div>
      </aside>
    </div>
  );
}
function Field({ label, v }: { label: string; v: string }) {
  return <div><div className="text-xs text-muted-foreground mb-1">{label}</div><div className="bg-input/60 border border-border rounded-xl px-3 py-2 text-sm">{v}</div></div>;
}
