import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { products } from "@/lib/mock";
import { ProductGrid } from "./app.shop";

export const Route = createFileRoute("/app/recommendations")({ component: Reco });

function Reco() {
  return (
    <div className="space-y-8">
      <div className="glass-strong rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="size-12 rounded-xl gradient-primary grid place-items-center animate-pulse-glow"><Sparkles className="size-6 text-white" /></div>
          <div>
            <div className="text-xs uppercase tracking-widest text-primary">Quantum AI</div>
            <h1 className="text-2xl font-bold">Curadoria inteligente baseada no seu perfil</h1>
          </div>
        </div>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Analisei 18 sinais do seu comportamento (busca, navegação, carrinho, devoluções, preferências de marca, ticket médio). Aqui estão coleções otimizadas para você.
        </p>
      </div>

      {[
        { t: "Para sua rotina fitness", d: "Match com 'tênis Run X' e busca por fones esportivos" },
        { t: "Home office produtivo", d: "Aproveite combos para o seu setup" },
        { t: "Smart home essencial", d: "Itens compatíveis com sua Echo Dot" },
        { t: "Sustentáveis e premium", d: "Marcas com selo ESG verificado" },
      ].map((s, i) => (
        <section key={i}>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary">Coleção IA</div>
              <h2 className="text-xl font-bold">{s.t}</h2>
              <div className="text-xs text-muted-foreground">{s.d}</div>
            </div>
            <div className="text-xs text-muted-foreground">Confiança: <span className="text-primary font-semibold">{92 - i * 3}%</span></div>
          </div>
          <ProductGrid products={i % 2 ? [...products].reverse() : products} />
        </section>
      ))}
    </div>
  );
}
