import type { ServiceItem } from "@/lib/types";
import { blurPlaceholders } from "@/lib/constants/blur-placeholders";

export const services: readonly ServiceItem[] = [
  {
    id: "route-optimization",
    title: "Route Optimization",
    description:
      "Routing that reads traffic, weather, and demand the moment they change — across millions of nodes, so your drivers stop taking the scenic route.",
    highlight: "40% faster deliveries",
    image: {
      src: "/images/services/route-optimization.png",
      alt: "Illustration of an optimized delivery route",
      blurDataURL: blurPlaceholders.routeOptimization,
    },
  },
  {
    id: "bare-metal-compute",
    title: "Bare-Metal Compute",
    description: "Dedicated hardware at the edge, with latency low enough to feel like cheating.",
    highlight: "<1ms P99 latency",
    image: {
      src: "/images/services/bare-metal-compute.png",
      alt: "Illustration of bare-metal compute server racks",
      blurDataURL: blurPlaceholders.bareMetalCompute,
    },
  },
  {
    id: "dynamic-pricing",
    title: "Dynamic Pricing",
    description:
      "Surge pricing and tuning that respond to demand in real time, because leaving money on the table isn't a strategy.",
    highlight: "+12% revenue uplift",
    image: {
      src: "/images/services/dynamic-pricing.png",
      alt: "Illustration of a dynamic pricing trend chart",
      blurDataURL: blurPlaceholders.dynamicPricing,
    },
  },
  {
    id: "fleet-intelligence",
    title: "Fleet Intelligence",
    description: "Predictive maintenance and courier scoring that flag the breakdown before it breaks down.",
    highlight: "99.99% uptime",
    image: {
      src: "/images/services/fleet-intelligence.png",
      alt: "Illustration of a fleet intelligence dashboard",
      blurDataURL: blurPlaceholders.fleetIntelligence,
    },
  },
  {
    id: "demand-forecasting",
    title: "Demand Forecasting",
    description: "Models that predict the rush while you can still prep for it.",
    highlight: "94% forecast accuracy",
    image: {
      src: "/images/services/demand-forecasting.png",
      alt: "Illustration of demand forecasting analytics",
      blurDataURL: blurPlaceholders.demandForecasting,
    },
  },
  {
    id: "global-edge-network",
    title: "Global Edge Network",
    description: "Nodes in 150+ cities keeping your local data local and your responses instant.",
    highlight: "150+ cities",
    image: {
      src: "/images/services/global-edge-network.png",
      alt: "Illustration of a global edge network",
      blurDataURL: blurPlaceholders.globalEdgeNetwork,
    },
  },
];
