import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/mock";
import { Trash2, Sparkles, Minus, Plus } from "lucide-react";

export const Route = createFileRoute("/app/cart")({ component: Cart });

function Cart() {
  const items = products.slice(0, 3).map((p, i) => ({ ...p, qty: i === 0 ? 1 : 1 }));
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = 100;
  const total = subtotal - discount;

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-3">
        <h1 className="text-3xl font-bold mb-4">Meu carrinho ({items.length})</h1>
        {items.map((it) => (
          <div key={it.id} className="glass rounded-2xl p-4 flex items-center gap-4">
            <div className="size-16 grid place-items-center text-4xl rounded-xl bg-secondary">{it.emoji}</div>
            <div className="flex-1">
              <div className="font-semibold text-sm">{it.name}</div>
              <div className="text-xs text-muted-foreground">{it.category}</div>
              <div className="font-bold mt-1">R$ {it.price.toFixed(2)}</div>
            </div>
            <div className="flex items-center gap-2 glass rounded-lg px-2 py-1"><button><Minus className="size-3" /></button><span className="w-6 text-center text-sm">{it.qty}</span><button><Plus className="size-3" /></button></div>
            <button className="text-muted-foreground hover:text-destructive"><Trash2 className="size-4" /></button>
          </div>
        ))}

        <div className="glass rounded-2xl p-4 flex items-start gap-3">
          <Sparkles className="size-5 text-primary mt-0.5" />
          <div className="text-sm">
            <span className="font-semibold">Quantum AI:</span> aplicando cupom inteligente <code className="text-primary">QUANTUM10</code> — economia de R$ 100. Frete grátis com Loggi (entrega 23/05).
          </div>
        </div>
      </div>

      <aside className="glass-strong rounded-2xl p-6 h-fit sticky top-6 space-y-3">
        <h2 className="font-bold">Resumo</h2>
        <Row l="Subtotal" v={`R$ ${subtotal.toFixed(2)}`} />
        <Row l="Desconto" v={`- R$ ${discount.toFixed(2)}`} accent />
        <Row l="Frete Inteligente" v="Grátis" />
        <div className="border-t border-border/40 pt-3 flex justify-between font-bold text-lg">
          <span>Total</span><span>R$ {total.toFixed(2)}</span>
        </div>
        <Link to="/app/checkout" className="block w-full gradient-primary text-white py-3 rounded-xl font-semibold glow-purple text-center">Finalizar compra</Link>
        <Link to="/app/shop" className="block text-center text-sm text-primary">Continuar comprando</Link>
      </aside>
    </div>
  );
}
function Row({ l, v, accent }: { l: string; v: string; accent?: boolean }) {
  return <div className="flex justify-between text-sm"><span className="text-muted-foreground">{l}</span><span className={accent ? "text-emerald-400 font-medium" : ""}>{v}</span></div>;
}
