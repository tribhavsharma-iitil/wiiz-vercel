import type { ReactNode } from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  readonly eyebrow: string;
  readonly title: ReactNode;
  readonly description?: ReactNode;
  readonly align?: "left" | "center";
  readonly theme?: "light" | "dark";
  readonly titleId?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  titleId,
}: SectionHeadingProps) {
  const isCentered = align === "center";
  const isDark = theme === "dark";

  return (
    <div className={cn("flex flex-col gap-4", isCentered ? "items-center text-center" : "items-start")}>
      <Badge variant={isDark ? "light" : "dark"} className={isCentered ? "self-center" : undefined}>
        {eyebrow}
      </Badge>
      <h2
        id={titleId}
        className={cn(
          "text-display-lg font-bold",
          isDark ? "text-white" : "text-brand-ink",
          isCentered && "max-w-3xl",
        )}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={cn(
            "flex flex-col gap-4 text-body-lg",
            isDark ? "text-white/70" : "text-muted",
            isCentered && "max-w-2xl",
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
