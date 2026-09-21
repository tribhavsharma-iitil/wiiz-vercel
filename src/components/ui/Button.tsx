import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export type ButtonVariant = "primary" | "secondary" | "inverted";

export const buttonBaseStyles =
  "inline-flex shrink-0 items-center justify-center rounded-control px-6 py-3.5 text-body-sm font-medium leading-none transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

export const buttonVariantStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand/90",
  secondary: "border border-brand bg-white text-brand hover:bg-surface-tint",
  inverted: "bg-white text-brand hover:bg-white/90",
};

interface ButtonProps extends ComponentPropsWithoutRef<typeof Link> {
  readonly variant?: ButtonVariant;
}

/** Shared CTA control. New visual styles extend `variantStyles` without changing this component. */
export function Button({ variant = "primary", className, href, ...rest }: ButtonProps) {
  return (
    <Link href={href} className={cn(buttonBaseStyles, buttonVariantStyles[variant], className)} {...rest} />
  );
}
