import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export type BadgeVariant = "dark" | "light";

const variantStyles: Record<BadgeVariant, string> = {
  dark: "bg-brand-ink text-white",
  light: "bg-white text-brand",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  readonly variant?: BadgeVariant;
}

export function Badge({ variant = "dark", className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center self-start whitespace-nowrap rounded-full px-3 py-1.5 text-caption font-medium uppercase tracking-wide",
        variantStyles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
