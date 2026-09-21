import type { IconProps } from "./types";

/** Checkmark glyph. Color is driven by `currentColor` via the parent's text color class. */
export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3328 4L6.0002 11.3328L2.6672 7.99971"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
