// Mock data shared across the Quantum Commerce prototype
export const products = [
  {
    id: "p1",
    name: "Fone Noise Cancelling Quantum Sound Pro",
    price: 479.9,
    oldPrice: 559.9,
    rating: 4.8,
    reviews: 1238,
    category: "Eletrônicos",
    emoji: "🎧",
    badge: "AI Pick",
    fast: true,
    image:
      "https://images.pexels.com/photos/7772549/pexels-photo-7772549.jpeg",
  },
  {
    id: "p2",
    name: "Smartwatch Galaxy Watch 6",
    price: 1199,
    rating: 4.7,
    reviews: 842,
    category: "Eletrônicos",
    emoji: "⌚",
    badge: "Trending",
    fast: true,
    image:
      "https://images.pexels.com/photos/31406895/pexels-photo-31406895.jpeg",
  },
  {
    id: "p3",
    name: "Câmera Wi-Fi Inteligente",
    price: 189,
    rating: 4.6,
    reviews: 540,
    category: "Casa Inteligente",
    emoji: "📷",
    fast: true,
    image:
      "https://images.pexels.com/photos/22610381/pexels-photo-22610381.jpeg",
  },
  {
    id: "p4",
    name: "Echo Dot 5ª Geração",
    price: 349,
    rating: 4.7,
    reviews: 2102,
    category: "Casa Inteligente",
    emoji: "🔊",
    badge: "Best Seller",
    image:
      "https://images.pexels.com/photos/14309806/pexels-photo-14309806.jpeg",
  },
  {
    id: "p5",
    name: "Tênis Performance Run X",
    price: 599,
    rating: 4.5,
    reviews: 311,
    category: "Esportes",
    emoji: "👟",
    fast: true,
    image:
      "https://images.pexels.com/photos/28879459/pexels-photo-28879459.jpeg",
  },
  {
    id: "p6",
    name: "Cafeteira Automática",
    price: 1499,
    rating: 4.6,
    reviews: 188,
    category: "Casa",
    emoji: "☕",
    image:
      "https://images.pexels.com/photos/15577886/pexels-photo-15577886.jpeg",
  },
  {
    id: "p7",
    name: "Notebook Ultra 14\" AI",
    price: 6299,
    rating: 4.9,
    reviews: 412,
    category: "Eletrônicos",
    emoji: "💻",
    badge: "Premium",
    image:
      "https://images.pexels.com/photos/17461073/pexels-photo-17461073.jpeg",
  },
  {
    id: "p8",
    name: "Mochila Tech Anti-furto",
    price: 289,
    rating: 4.4,
    reviews: 902,
    category: "Acessórios",
    emoji: "🎒",
    image:
      "https://images.pexels.com/photos/32620402/pexels-photo-32620402.jpeg",
  },
];

export const categories = [
  { name: "Eletrônicos", icon: "📱" },
  { name: "Casa Inteligente", icon: "🏠" },
  { name: "Moda", icon: "👗" },
  { name: "Beleza", icon: "💄" },
  { name: "Esportes", icon: "🏃" },
  { name: "Automotivo", icon: "🚗" },
  { name: "Brinquedos", icon: "🧸" },
  { name: "Mais", icon: "✨" },
];

export const agents = [
  { name: "Customer Profile", desc: "Entende perfil, contexto e intenção do comprador.", status: "active", confidence: 96 },
  { name: "Recommendation", desc: "Sugere produtos com modelos de embeddings e re-ranking.", status: "active", confidence: 94 },
  { name: "Logistics", desc: "Escolhe transportadora ótima por SLA, custo e risco.", status: "active", confidence: 91 },
  { name: "Stock Prediction", desc: "Antecipa demanda e evita rupturas/oversell.", status: "active", confidence: 88 },
  { name: "Fraud Detection", desc: "Score de risco em tempo real com human-in-the-loop.", status: "active", confidence: 99 },
  { name: "Policy Interpretation", desc: "Interpreta políticas de devolução, garantias, fiscais.", status: "active", confidence: 92 },
  { name: "Conversational Support", desc: "Atendimento 24/7 com fallback humano supervisionado.", status: "active", confidence: 90 },
  { name: "Seller Intelligence", desc: "Insights de pricing, descrição e campanhas para seller.", status: "active", confidence: 87 },
  { name: "Governance", desc: "Auditoria, observabilidade e mitigação de Shadow AI.", status: "guarding", confidence: 100 },
  { name: "Risk Monitoring", desc: "Telemetria de hallucinations, drift e LGPD.", status: "guarding", confidence: 100 },
];

export const kpis = [
  { label: "GMV (12m)", value: "R$ 4,8 Bi", delta: "+38%" },
  { label: "NPS", value: "74", delta: "+12" },
  { label: "Custo Operacional", value: "-27%", delta: "AI driven" },
  { label: "Adoção de IA", value: "92%", delta: "+18p.p." },
  { label: "Automação Suporte", value: "81%", delta: "+22p.p." },
  { label: "Conversão", value: "6,4%", delta: "+1,9p.p." },
  { label: "Retenção Seller", value: "94%", delta: "+9p.p." },
  { label: "SLA Logística", value: "98,2%", delta: "+3,1p.p." },
];

export const carriers = [
  { name: "Correios", score: 88, sla: "2-5 dias", load: 42 },
  { name: "Loggi", score: 95, sla: "1-2 dias", load: 28 },
  { name: "Jadlog", score: 91, sla: "2-4 dias", load: 18 },
  { name: "Local Delivery", score: 97, sla: "Same-day", load: 8 },
  { name: "Pickup Points", score: 99, sla: "2h", load: 4 },
];
