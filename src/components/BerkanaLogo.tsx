/**
 * Berkana Rune Logo Mark – SVG inline component.
 * Geometric interlocking-diamond rune inspired by the brand mark.
 */
export default function BerkanaLogo({
  className = "w-10 h-auto",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 150"
      fill="none"
      stroke={color}
      strokeWidth="5.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-label="Berkana logo"
    >
      {/* Small top diamond */}
      <path d="M50 4 L58 13 L50 22 L42 13 Z" />

      {/* X-crossing lines from top diamond */}
      <line x1="42" y1="13" x2="27" y2="48" />
      <line x1="58" y1="13" x2="73" y2="48" />

      {/* Upper diamond – lower edges */}
      <path d="M27 48 L50 82 L73 48" />

      {/* Lower diamond – full outline */}
      <line x1="50" y1="62" x2="73" y2="96" />
      <line x1="73" y1="96" x2="50" y2="130" />
      <line x1="50" y1="130" x2="27" y2="96" />
      <line x1="27" y1="96" x2="50" y2="62" />

      {/* Inner diamond in lower section */}
      <path d="M50 78 L61 90 L50 102 L39 90 Z" />

      {/* Innermost tiny diamond */}
      <path d="M50 86 L54 90 L50 94 L46 90 Z" />
    </svg>
  );
}
