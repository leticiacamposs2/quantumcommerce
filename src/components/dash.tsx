import { ReactNode } from "react";

export function KpiCard({ label, value, delta, accent }: { label: string; value: string; delta?: string; accent?: boolean }) {
  return (
    <div className={`glass rounded-2xl p-5 ${accent ? "ring-glow" : ""}`}>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
      {delta && <div className="text-xs text-emerald-400 mt-1">{delta}</div>}
    </div>
  );
}

export function Card({ title, children, action }: { title?: string; children: ReactNode; action?: ReactNode }) {
  return (
    <div className="glass-strong rounded-2xl p-5">
      {(title || action) && (
        <div className="flex items-center justify-between mb-4">
          {title && <h3 className="font-bold">{title}</h3>}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="text-xs uppercase tracking-widest text-primary mb-1">{children}</div>;
}
