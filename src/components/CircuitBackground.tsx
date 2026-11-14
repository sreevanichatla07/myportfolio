/**
 * Animated circuit-board background pattern — subtle grid with glowing traces and nodes.
 */
export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-950 via-midnight-900 to-midnight-950" />

      {/* Circuit grid */}
      <div className="absolute inset-0 circuit-grid opacity-60" />

      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-500/8 rounded-full blur-[120px] animate-glow-pulse" />
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-glow/8 rounded-full blur-[100px] animate-glow-pulse"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-accent-violet/6 rounded-full blur-[100px] animate-glow-pulse"
        style={{ animationDelay: '3s' }}
      />

      {/* SVG circuit traces */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="trace-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path
              d="M0 50 L60 50 L60 100 L120 100 L120 50 L200 50"
              fill="none"
              stroke="#36c5ff"
              strokeWidth="1"
            />
            <path
              d="M0 150 L40 150 L40 80 L100 80 L100 200 L200 200"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1"
            />
            <circle cx="60" cy="50" r="2.5" fill="#36c5ff" />
            <circle cx="120" cy="100" r="2.5" fill="#22d3ee" />
            <circle cx="40" cy="150" r="2.5" fill="#36c5ff" />
            <circle cx="100" cy="80" r="2.5" fill="#22d3ee" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#trace-pattern)" />
      </svg>
    </div>
  );
}
