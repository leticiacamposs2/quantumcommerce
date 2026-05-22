import { Link, useLocation } from "@tanstack/react-router";
import { Logo } from "./Logo";
import {
  Home, ShoppingBag, Sparkles, ShoppingCart, CreditCard, Truck, MessageSquare,
  Store, BarChart3, ShieldCheck, LineChart, Network, Package, Map,
} from "lucide-react";
import { ReactNode } from "react";
import { QuantumAssistant } from "./QuantumAssistant";

const groups: { title: string; items: { to: string; label: string; icon: any }[] }[] = [
  {
    title: "Loja",
    items: [
      { to: "/app/shop", label: "Início", icon: Home },
      { to: "/app/product", label: "Produto", icon: ShoppingBag },
      { to: "/app/recommendations", label: "IA Recomenda", icon: Sparkles },
      { to: "/app/cart", label: "Carrinho", icon: ShoppingCart },
      { to: "/app/checkout", label: "Checkout IA", icon: CreditCard },
      { to: "/app/tracking", label: "Tracking", icon: Map },
      { to: "/app/support", label: "Suporte IA", icon: MessageSquare },
    ],
  },
  {
    title: "Plataforma",
    items: [
      { to: "/app/seller", label: "Seller Hub", icon: Store },
      { to: "/app/logistics", label: "Logística IA", icon: Truck },
      { to: "/app/stock", label: "Estoque IA", icon: Package },
      { to: "/app/analytics", label: "Analytics", icon: BarChart3 },
      { to: "/app/hub", label: "AI Hub", icon: Network },
      { to: "/app/governance", label: "Governança", icon: ShieldCheck },
      { to: "/app/executive", label: "Executivo", icon: LineChart },
    ],
  },
];

export function AppShell({ children }: { children: ReactNode }) {
  const loc = useLocation();
  return (
    <div className="min-h-screen flex">
      <aside className="hidden lg:flex w-64 flex-col glass-strong border-r border-border/50 sticky top-0 h-screen">
        <div className="p-5 border-b border-border/40">
          <Logo />
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-5">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground px-2 mb-2">
                {g.title}
              </div>
              <div className="space-y-0.5">
                {g.items.map((it) => {
                  const active = loc.pathname === it.to;
                  const Icon = it.icon;
                  return (
                    <Link
                      key={it.to}
                      to={it.to}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                        active
                          ? "gradient-primary text-white glow-purple"
                          : "text-foreground/80 hover:bg-sidebar-accent hover:text-foreground"
                      }`}
                    >
                      <Icon className="size-4" />
                      <span>{it.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        <div className="p-3 border-t border-border/40">
          <Link to="/" className="block text-xs text-muted-foreground hover:text-primary px-2 py-1">
            ← Apresentação Executiva
          </Link>
        </div>
      </aside>
      <main className="flex-1 min-w-0 relative">
        <div className="p-6 md:p-8 max-w-[1500px] mx-auto">{children}</div>
        <QuantumAssistant />
      </main>
    </div>
  );
}
