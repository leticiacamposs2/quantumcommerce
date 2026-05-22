import { createFileRoute, Link } from "@tanstack/react-router";
import { products, categories } from "@/lib/mock";
import { Search, Mic, Heart, ShoppingCart, Star, Sparkles, Truck, Bell } from "lucide-react";

export const Route = createFileRoute("/app/shop")({ component: Shop });

function Shop() {
  return (
    <div className="space-y-8">
      <Topbar />

      {/* Hero banner */}
      <div className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-3">Ofertas Exclusivas</div>
          <h1 className="text-3xl md:text-5xl font-bold">Tecnologia que <span className="gradient-text">transforma seu dia</span></h1>
          <p className="text-muted-foreground mt-3 max-w-md">Produtos curados por IA para uma vida mais prática, conectada e eficiente.</p>
          <Link to="/app/product" className="inline-flex mt-6 gradient-primary text-white px-5 py-2.5 rounded-xl font-medium glow-purple">Ver ofertas</Link>
        </div>
        <div className="text-[180px] text-center animate-float select-none">🎧</div>
        <div className="absolute -top-20 -right-20 size-80 rounded-full bg-primary/30 blur-3xl" />
      </div>

      {/* Quick badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { icon: Truck, t: "Entrega Inteligente", s: "Prazo e frete otimizados com IA" },
          { icon: Sparkles, t: "Atendimento 24/7", s: "Agentes inteligentes prontos" },
          { icon: Bell, t: "Pagamento Seguro", s: "Transações protegidas" },
          { icon: Heart, t: "Devolução Fácil", s: "Processo simples e transparente" },
        ].map((b, i) => (
          <div key={i} className="glass rounded-2xl p-4 flex items-start gap-3">
            <div className="size-10 rounded-lg gradient-primary grid place-items-center"><b.icon className="size-5 text-white" /></div>
            <div><div className="text-sm font-semibold">{b.t}</div><div className="text-xs text-muted-foreground">{b.s}</div></div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section>
        <SectionHeader title="Categorias em destaque" link="Ver todas" />
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mt-4">
          {categories.map((c) => (
            <div key={c.name} className="glass rounded-2xl p-4 text-center hover:ring-glow transition cursor-pointer">
              <div className="text-3xl">{c.icon}</div>
              <div className="text-xs mt-2 font-medium">{c.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Recommended */}
      <section>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary">Quantum AI recomenda</div>
            <h2 className="text-2xl font-bold mt-1">Recomendado para você</h2>
          </div>
          <Link to="/app/recommendations" className="text-sm text-primary hover:underline">Ver tudo →</Link>
        </div>
        <ProductGrid products={products} />
      </section>

      {/* Trending */}
      <section>
        <SectionHeader title="Trending agora" link="Ver todos" />
        <ProductGrid products={[...products].reverse()} />
      </section>
    </div>
  );
}

export function Topbar() {
  return (
    <div className="flex items-center gap-3 glass rounded-2xl p-3">
      <div className="flex-1 flex items-center gap-2 bg-input/60 rounded-xl px-4 py-2.5 border border-border/40">
        <Search className="size-4 text-muted-foreground" />
        <input placeholder="Buscar produtos, marcas, intenções... (ex: 'fone para academia até R$600')" className="bg-transparent flex-1 outline-none text-sm" />
        <Mic className="size-4 text-primary" />
      </div>
      <button className="size-10 grid place-items-center rounded-xl glass hover:ring-glow"><Heart className="size-4" /></button>
      <Link to="/app/cart" className="size-10 grid place-items-center rounded-xl gradient-primary text-white relative">
        <ShoppingCart className="size-4" />
        <span className="absolute -top-1 -right-1 text-[10px] bg-destructive rounded-full size-4 grid place-items-center">3</span>
      </Link>
    </div>
  );
}

export function SectionHeader({ title, link }: { title: string; link?: string }) {
  return (
    <div className="flex items-end justify-between">
      <h2 className="text-2xl font-bold">{title}</h2>
      {link && <a className="text-sm text-primary hover:underline">{link} →</a>}
    </div>
  );
}

export function ProductGrid({ products: list }: { products: typeof products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {list.map((p) => (
        <Link to="/app/product" key={p.id} className="glass rounded-2xl p-4 hover:ring-glow transition group">
          <div className="aspect-square rounded-xl bg-gradient-to-br from-secondary to-card grid place-items-center text-6xl relative overflow-hidden">
            {p.emoji}
            {p.badge && <span className="absolute top-2 left-2 text-[10px] gradient-primary text-white px-2 py-0.5 rounded-full">{p.badge}</span>}
            <Heart className="size-4 absolute top-2 right-2 text-muted-foreground hover:text-primary" />
          </div>
          <div className="mt-3 text-sm font-medium line-clamp-2 min-h-[2.5rem]">{p.name}</div>
          <div className="mt-2 flex items-center justify-between">
            <div className="font-bold">R$ {p.price.toFixed(2)}</div>
            <div className="text-xs flex items-center gap-1 text-amber-400"><Star className="size-3 fill-current" />{p.rating}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
