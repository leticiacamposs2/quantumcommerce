import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Send, Bot, User } from "lucide-react";

export const Route = createFileRoute("/app/support")({ component: Support });

const convo = [
  { who: "ai", t: "Olá Clara! Sou o Quantum AI. Vejo que seu pedido #QC45821 está em transporte. Posso ajudar com algo?" },
  { who: "user", t: "Quero saber se posso trocar o endereço de entrega." },
  { who: "ai", t: "Sim! Como o pedido ainda está no hub Loggi VL, é possível alterar sem custo até 22/05 18h. Endereço atual: Rua das Flores, 123. Para qual endereço deseja mudar?" },
  { who: "user", t: "Para Av. Paulista 1000, ap 502." },
  { who: "ai", t: "Atualizado. Nova previsão: 23/05 (sem alteração). Confidence 94%. Enviei confirmação para seu e-mail. Algo mais? 🙂" },
];

function Support() {
  return (
    <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-100px)]">
      <aside className="glass-strong rounded-2xl p-4 space-y-2 lg:col-span-1 overflow-y-auto">
        <h2 className="font-bold mb-3">Conversas</h2>
        {["Pedido #QC45821", "Devolução cabo USB", "Pagamento recusado", "Garantia smartwatch"].map((c, i) => (
          <div key={i} className={`p-3 rounded-xl text-sm cursor-pointer ${i === 0 ? "ring-glow gradient-primary text-white" : "glass hover:bg-secondary"}`}>{c}</div>
        ))}
      </aside>

      <section className="glass-strong rounded-2xl flex flex-col lg:col-span-3 overflow-hidden">
        <header className="p-4 border-b border-border/40 flex items-center gap-3">
          <div className="size-10 rounded-xl gradient-primary grid place-items-center"><Sparkles className="size-5 text-white" /></div>
          <div>
            <div className="font-bold">Quantum AI · Suporte</div>
            <div className="text-xs text-muted-foreground flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> Conversational Agent · confiança 92%</div>
          </div>
          <div className="ml-auto text-xs text-muted-foreground">Human-in-the-loop ativo</div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {convo.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.who === "user" ? "justify-end" : ""}`}>
              {m.who === "ai" && <div className="size-8 rounded-lg gradient-primary grid place-items-center shrink-0"><Bot className="size-4 text-white" /></div>}
              <div className={`max-w-[70%] rounded-2xl px-4 py-3 text-sm ${m.who === "user" ? "gradient-primary text-white" : "glass"}`}>{m.t}</div>
              {m.who === "user" && <div className="size-8 rounded-lg bg-secondary grid place-items-center shrink-0"><User className="size-4" /></div>}
            </div>
          ))}
        </div>

        <footer className="p-4 border-t border-border/40 flex gap-2">
          <input className="flex-1 bg-input/60 border border-border rounded-xl px-4 py-2.5 text-sm outline-none" placeholder="Digite uma mensagem..." />
          <button className="px-5 gradient-primary text-white rounded-xl flex items-center gap-2"><Send className="size-4" /> Enviar</button>
        </footer>
      </section>
    </div>
  );
}
