import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Logo({ to = "/", small = false }: { to?: string; small?: boolean }) {
  return (
    <Link to={to} className="flex items-center gap-2 group">
      <div className={`relative grid place-items-center rounded-xl gradient-primary ${small ? "size-8" : "size-9"} glow-purple group-hover:scale-105 transition`}>
        <Sparkles className={small ? "size-4 text-white" : "size-5 text-white"} />
      </div>
      <div className="leading-tight">
        <div className={`font-bold tracking-tight ${small ? "text-sm" : "text-base"}`}>
          QUANTUM
        </div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-primary/80 -mt-0.5">
          Commerce
        </div>
      </div>
    </Link>
  );
}
