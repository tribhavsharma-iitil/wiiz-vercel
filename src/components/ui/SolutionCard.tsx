import type { SolutionItem } from "@/lib/types";

interface SolutionCardProps {
  readonly solution: SolutionItem;
}

export function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <article className="flex flex-col gap-6 rounded-card border border-border-subtle bg-surface-tint p-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-heading-lg font-bold leading-snug text-brand-ink">{solution.title}</h3>
        <p className="text-body-md leading-relaxed text-muted">{solution.description}</p>
      </div>

      <div className="flex flex-col gap-4 rounded-xl border border-border-subtle bg-white p-4">
        <p className="text-caption font-semibold uppercase text-muted">{solution.liveLabel}</p>
        <dl className="flex gap-3">
          {solution.stats.map((stat) => (
            <div key={stat.label} className="flex flex-1 flex-col gap-1">
              <dd className="text-[18px] font-bold text-brand">{stat.value}</dd>
              <dt className="text-[11px] text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
