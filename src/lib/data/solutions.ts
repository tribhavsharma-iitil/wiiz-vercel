import type { SolutionItem } from "@/lib/types";

export const solutions: readonly SolutionItem[] = [
  {
    id: "real-time-routing",
    title: "Real-Time Routing Engine",
    description:
      "We optimise millions of routes at once with graph-based AI that reads live traffic, weather, and whoever just clocked off, then points your drivers at the door instead of the scenic route.",
    liveLabel: "Live routing engine",
    stats: [
      { value: "4.2M/day", label: "Routes optimized" },
      { value: "8.4 min", label: "Avg. time saved" },
      { value: "+60%", label: "Efficiency gain" },
    ],
  },
  {
    id: "fleet-intelligence-platform",
    title: "Fleet Intelligence Platform",
    description:
      "We watch courier health and maintenance before it becomes a breakdown, and score performance across your whole network in real time. We spot the bigger problems while they're still small to fix.",
    liveLabel: "Live fleet intelligence",
    stats: [
      { value: "12,400", label: "Active couriers" },
      { value: "99.99%", label: "Fleet health" },
      { value: "847", label: "Incidents prevented" },
    ],
  },
  {
    id: "demand-forecasting-engine",
    title: "Demand Forecasting Engine",
    description:
      "We spot demand spikes before they happen. Our models learn your hyper-local patterns and tell you where demand's headed, so you staff for the surge instead of apologising for it.",
    liveLabel: "Live demand forecasting",
    stats: [
      { value: "94.2%", label: "Forecast accuracy" },
      { value: "98%", label: "Surge events caught" },
      { value: "+12%", label: "Revenue uplift" },
    ],
  },
  {
    id: "bare-metal-infrastructure",
    title: "Bare-Metal Infrastructure",
    description:
      "We dedicate compute at the edge, fast enough to keep millions of local data points a second, latency low enough that your users assume it's magic.",
    liveLabel: "Live infrastructure",
    stats: [
      { value: "<1ms", label: "P99 latency" },
      { value: "12.4K/s", label: "Throughput" },
      { value: "99.99%", label: "Uptime SLA" },
    ],
  },
];
