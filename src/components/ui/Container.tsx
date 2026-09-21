import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  readonly as?: ElementType;
  readonly children: ReactNode;
}

export function Container({ as: Tag = "div", className, children, ...rest }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-container px-6 md:px-10 lg:px-20", className)} {...rest}>
      {children}
    </Tag>
  );
}
