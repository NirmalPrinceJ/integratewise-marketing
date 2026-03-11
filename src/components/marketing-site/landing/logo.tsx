/**
 * Landing logo — uses main Logo so it adopts UI color (currentColor).
 */

import { Logo as MainLogo, LogoMark as MainLogoMark } from "@/components/Logo";

const LOGO_SRC = "/Group%202.svg";
const ASPECT_RATIO = 159 / 545;

/** For <img src> usage when an image is required. */
export const logoSrc = LOGO_SRC;

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Full brand mark; inherits color from parent (e.g. text-foreground, text-white).
 */
export function Logo({ className = "", width = 200, height }: LogoProps) {
  const h = height ?? Math.round(width * ASPECT_RATIO);
  return (
    <MainLogo
      className={className || "text-foreground"}
      width={width}
      height={h}
    />
  );
}

/**
 * Compact mark; adopts UI color from className.
 */
export function LogoMark({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <MainLogoMark
      className={className || "text-foreground"}
      size={size}
    />
  );
}

/**
 * Logo + wordmark text; logo adopts UI color (use inverted for dark backgrounds).
 */
export function LogoWithText({
  className = "",
  markSize = 100,
  textSize = "text-lg",
  inverted = false,
}: {
  className?: string;
  markSize?: number;
  textSize?: string;
  inverted?: boolean;
}) {
  const h = Math.round(markSize * ASPECT_RATIO);
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <MainLogo
        width={markSize}
        height={h}
        className={inverted ? "text-white" : "text-foreground"}
      />
      <span className={`font-bold tracking-tight ${textSize} ${inverted ? "text-white" : "text-[#4152A1]"}`}>
        Integrate<span className={inverted ? "text-white/80" : "text-[#EE4B75]"}>Wise</span>
      </span>
    </span>
  );
}
