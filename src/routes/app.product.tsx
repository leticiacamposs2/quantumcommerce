import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Truck, RotateCcw, ShieldCheck, Sparkles, Minus, Plus } from "lucide-react";
import { products } from "@/lib/mock";
import { ProductGrid } from "./app.shop";

export const Route = createFileRoute("/app/product")({ component: Product });

function Product() {
  const p = products[0];
  return (
    <div className="space-y-10">
      <div className="text-xs text-muted-foreground">Início › Eletrônicos › Fones e Headphones</div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass-strong rounded-3xl p-10 aspect-square grid place-items-center relative">
          <div className="text-[260px]">{p.emoji}</div>
          <span className="absolute top-4 left-4 gradient-primary text-white text-xs px-3 py-1 rounded-full">-15%</span>
        </div>

        <div className="space-y-5">
          <div>
            <h1 className="text-3xl font-bold">{p.name}</h1>
            <div className="flex items-center gap-3 mt-2 text-sm">
              <div className="flex items-center gap-1 text-amber-400"><Star className="size-4 fill-current" /> {p.rating}</div>
              <span className="text-muted-foreground">({p.reviews.toLocaleString()} avaliações)</span>
            </div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground line-through">R$ {p.oldPrice?.toFixed(2)}</div>
            <div className="text-4xl font-bold">R$ {p.price.toFixed(2)}</div>
            <div className="text-xs text-emerald-400">em até 10x de R$ 47,99 sem juros</div>
          </div>

          <div className="glass rounded-2xl p-4 flex items-start gap-3">
            <Sparkles className="size-5 text-primary mt-0.5" />
            <div className="text-sm">
              <span className="font-semibold">Quantum AI:</span> com base em seu histórico, este modelo tem 94% de fit com seu perfil. Bateria 30h, ideal para academia + trabalho remoto.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="glass rounded-xl p-3 flex gap-2 items-center"><Truck className="size-4 text-primary" /><div><div className="text-xs font-semibold">Frete Inteligente</div><div className="text-[11px] text-muted-foreground">Chega entre 23 e 25/05</div></div></div>
            <div className="glass rounded-xl p-3 flex gap-2 items-center"><RotateCcw className="size-4 text-primary" /><div><div className="text-xs font-semibold">Devolução Fácil</div><div className="text-[11px] text-muted-foreground">Até 30 dias</div></div></div>
          </div>

          <div>
            <div className="text-sm mb-2">Cor: <span className="font-semibold">Preto</span></div>
            <div className="flex gap-2">
              {["#0d0d0d", "#6b3a2a", "#cccccc"].map((c) => (
                <button key={c} className="size-9 rounded-full border-2 border-border hover:ring-2 hover:ring-primary" style={{ background: c }} />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 glass rounded-xl px-3 py-2">
              <button><Minus className="size-4" /></button>
              <span className="w-8 text-center">1</span>
              <button><Plus className="size-4" /></button>
            </div>
            <Link to="/app/cart" className="flex-1 gradient-primary text-white py-3 rounded-xl font-semibold glow-purple text-center">Adicionar ao carrinho</Link>
          </div>

          <div className="text-xs text-muted-foreground flex items-center gap-2"><ShieldCheck className="size-4" /> Vendido e entregue por Quantum Commerce</div>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold">Comparações inteligentes</h2>
        <ProductGrid products={products.slice(1, 5)} />
      </section>
    </div>
  );
}
