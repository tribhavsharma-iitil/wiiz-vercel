import type { MetricItem } from "@/lib/types";
import { metricIconRegistry } from "@/components/icons/metric-icon-registry";

interface MetricCardProps {
  readonly metric: MetricItem;
}

export function MetricCard({ metric }: MetricCardProps) {
  const Icon = metricIconRegistry[metric.icon];

  return (
    <div className="flex flex-1 items-center gap-4 lg:justify-center ">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand">
        <Icon className="size-5 text-white" />
      </span>
      <div className="flex flex-col gap-0.5">
        <p className="text-heading-lg font-bold text-brand-ink">{metric.value}</p>
        <p className="text-body-sm text-muted-foreground">{metric.label}</p>
      </div>
    </div>
  );
}
