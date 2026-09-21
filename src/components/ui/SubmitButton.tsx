import type { ButtonHTMLAttributes } from "react";
import { buttonBaseStyles, buttonVariantStyles, type ButtonVariant } from "./Button";
import { cn } from "@/lib/utils/cn";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
}

/** Native <button> counterpart to Button, for use inside forms. Shares the same variant styles. */
export function SubmitButton({ variant = "primary", type = "submit", className, ...rest }: SubmitButtonProps) {
  return (
    <button type={type} className={cn(buttonBaseStyles, buttonVariantStyles[variant], className)} {...rest} />
  );
}
