import { useState } from "react";
import { MessageSquare, Send, Sparkles, X } from "lucide-react";

type Msg = { role: "user" | "ai"; text: string };

const seed: Msg[] = [
  { role: "ai", text: "Olá! Sou o Quantum AI. Posso recomendar produtos, prever entregas, comparar opções e ajudar no checkout. Como posso ajudar?" },
];

const canned: Record<string, string> = {
  default:
    "Analisei seu perfil e contexto. Posso sugerir 3 fones < R$ 600 com boa autonomia e cancelamento de ruído. Quer ver?",
  entrega:
    "Com base em sua localização (São Paulo - SP) e estoque mais próximo, prevejo entrega em 23/05 com 96% de confiança via Loggi.",
  comparar:
    "Comparando: Quantum Sound Pro (4.8★, R$479) vs Sony WH-CH720N (4.7★, R$599). Recomendo o Quantum Pro: melhor custo-benefício e SLA mais rápido.",
  pagamento:
    "Detectei seu perfil de baixo risco. Sugiro Pix (5% desconto) ou 10x sem juros no cartão final 4242.",
};

function reply(input: string): string {
  const t = input.toLowerCase();
  if (t.includes("entrega") || t.includes("frete")) return canned.entrega;
  if (t.includes("comparar") || t.includes("vs")) return canned.comparar;
  if (t.includes("pagar") || t.includes("pix") || t.includes("cartão")) return canned.pagamento;
  return canned.default;
}

export function QuantumAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(seed);
  const [input, setInput] = useState("");

  function send() {
    if (!input.trim()) return;
    const userMsg: Msg = { role: "user", text: input };
    const aiMsg: Msg = { role: "ai", text: reply(input) };
    setMsgs((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => setMsgs((m) => [...m, aiMsg]), 600);
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full gradient-primary glow-purple grid place-items-center text-white animate-pulse-glow hover:scale-110 transition"
        aria-label="Quantum AI"
      >
        {open ? <X className="size-6" /> : <Sparkles className="size-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] glass-strong rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-glow">
          <div className="p-4 border-b border-border/40 flex items-center gap-3">
            <div className="size-10 rounded-xl gradient-primary grid place-items-center">
              <Sparkles className="size-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-sm">Quantum AI</div>
              <div className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Online · confiança 96%
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "gradient-primary text-white"
                      : "bg-secondary/70 text-foreground border border-border/40"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-border/40 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Pergunte algo ao Quantum AI..."
              className="flex-1 bg-input/60 border border-border rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              onClick={send}
              className="size-9 grid place-items-center rounded-xl gradient-primary text-white"
            >
              <Send className="size-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export { MessageSquare };
