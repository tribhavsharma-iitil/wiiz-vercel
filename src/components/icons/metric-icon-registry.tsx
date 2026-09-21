import type { MetricIconName } from "@/lib/types";
import { ChartLineIcon, MapIcon, ServerIcon, ZapIcon } from "./index";
import type { IconProps } from "./types";

type IconComponent = (props: IconProps) => JSX.Element;

/** Maps data-driven icon names to their components, so new metrics can be added without touching MetricCard. */
export const metricIconRegistry: Record<MetricIconName, IconComponent> = {
  "chart-line": ChartLineIcon,
  server: ServerIcon,
  map: MapIcon,
  zap: ZapIcon,
};
