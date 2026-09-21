import type { IconProps } from "./types";

/** Soft blurred ellipse used as a decorative backdrop behind service illustrations. */
export function GlowEllipse({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 530 365"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#glow-ellipse-blur)">
        <ellipse cx="265" cy="182.5" rx="125" ry="42.5" fill="#00A2F5" fillOpacity="0.3" />
      </g>
      <defs>
        <filter
          id="glow-ellipse-blur"
          x="0"
          y="0"
          width="530"
          height="365"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="70" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}
