/**
 * Disconnected-plug logo mark.
 * Two halves of a connector separated by a gap — the brand symbol.
 */
export function LogoMark({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Left plug body */}
      <rect x="1" y="7" width="11" height="18" rx="3" />
      {/* Left prongs */}
      <line x1="12" y1="13" x2="15" y2="13" />
      <line x1="12" y1="19" x2="15" y2="19" />

      {/* Right socket body */}
      <rect x="20" y="7" width="11" height="18" rx="3" />
      {/* Right slots */}
      <line x1="20" y1="13" x2="17" y2="13" />
      <line x1="20" y1="19" x2="17" y2="19" />
    </svg>
  );
}
