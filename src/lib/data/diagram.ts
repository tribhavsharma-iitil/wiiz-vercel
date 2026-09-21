import type { DiagramCard } from "@/lib/types";

/** Tuple (not an array) so consuming code can destructure both sides without an undefined check. */
export const infrastructureDiagram: readonly [DiagramCard, DiagramCard] = [
  {
    title: "WILZ Core",
    variant: "primary",
    capabilities: ["Real-time Routing", "Surge Pricing", "Fleet Intelligence"],
  },
  {
    title: "ViteEats App",
    variant: "secondary",
    capabilities: ["Customer Delight", "Vendor Relations", "Growth Scale"],
  },
];
