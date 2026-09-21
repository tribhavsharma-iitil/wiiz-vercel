import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type TrustPillProps = HTMLAttributes<HTMLDivElement>;

/** Generic pill shell; callers compose their own icon + label content for full styling control. */
export function TrustPill({ className, children, ...rest }: TrustPillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-control border border-border-subtle bg-white px-4 py-3",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
