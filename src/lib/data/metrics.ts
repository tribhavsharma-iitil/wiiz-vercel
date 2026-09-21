import type { MetricItem } from "@/lib/types";

export const performanceMetrics: readonly MetricItem[] = [
  { id: "routes-optimized", icon: "chart-line", value: "4.2M", label: "Routes optimized / day" },
  { id: "uptime", icon: "server", value: "99.99%", label: "Infrastructure uptime" },
  { id: "cities", icon: "map", value: "150+", label: "Cities connected" },
  { id: "latency", icon: "zap", value: "<1ms", label: "P99 latency" },
];
