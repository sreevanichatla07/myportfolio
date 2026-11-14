/**
 * Animated 6T SRAM-inspired circuit visualization rendered as SVG.
 * Shows cross-coupled inverters, access transistors, word line, bit lines,
 * with flowing animated traces.
 */
export default function ChipVisual() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 bg-electric-500/15 blur-3xl rounded-full animate-glow-pulse" />

      <svg viewBox="0 0 400 400" className="relative w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0c1424" />
            <stop offset="100%" stopColor="#111c30" />
          </linearGradient>
          <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#36c5ff" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#36c5ff" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer chip body */}
        <rect x="40" y="40" width="320" height="320" rx="16" fill="url(#chipGrad)" stroke="#36c5ff" strokeWidth="1.5" opacity="0.9" />

        {/* Chip pins */}
        {[80, 140, 200, 260, 320].map((y) => (
          <g key={`pin-l-${y}`}>
            <line x1="20" y1={y} x2="40" y2={y} stroke="#36c5ff" strokeWidth="2" />
            <circle cx="20" cy={y} r="3" fill="#22d3ee" />
          </g>
        ))}
        {[80, 140, 200, 260, 320].map((y) => (
          <g key={`pin-r-${y}`}>
            <line x1="360" y1={y} x2="380" y2={y} stroke="#36c5ff" strokeWidth="2" />
            <circle cx="380" cy={y} r="3" fill="#22d3ee" />
          </g>
        ))}

        {/* Internal grid */}
        {[120, 200, 280].map((x) => (
          <line key={`v-${x}`} x1={x} y1="60" x2={x} y2="340" stroke="#36c5ff" strokeWidth="0.3" opacity="0.15" />
        ))}
        {[120, 200, 280].map((y) => (
          <line key={`h-${y}`} x1="60" y1={y} x2="340" y2={y} stroke="#36c5ff" strokeWidth="0.3" opacity="0.15" />
        ))}

        {/* Word Line (WL) - top */}
        <line x1="60" y1="80" x2="340" y2="80" stroke="#22d3ee" strokeWidth="2" filter="url(#glow)" opacity="0.8" />
        <text x="55" y="74" fill="#22d3ee" fontSize="9" fontFamily="monospace" opacity="0.7">WL</text>

        {/* Bit Lines (BL & BLB) */}
        <line x1="120" y1="60" x2="120" y2="340" stroke="#36c5ff" strokeWidth="2" filter="url(#glow)" opacity="0.6" />
        <line x1="280" y1="60" x2="280" y2="340" stroke="#36c5ff" strokeWidth="2" filter="url(#glow)" opacity="0.6" />
        <text x="108" y="355" fill="#36c5ff" fontSize="9" fontFamily="monospace" opacity="0.7">BL</text>
        <text x="268" y="355" fill="#36c5ff" fontSize="9" fontFamily="monospace" opacity="0.7">BLB</text>

        {/* Access transistors (M5, M6) */}
        {/* Left access transistor */}
        <rect x="115" y="110" width="10" height="40" rx="2" fill="#0aa8f0" opacity="0.7" filter="url(#glow)" />
        <line x1="120" y1="80" x2="120" y2="110" stroke="#36c5ff" strokeWidth="1.5" />
        <line x1="120" y1="150" x2="120" y2="200" stroke="#36c5ff" strokeWidth="1.5" />

        {/* Right access transistor */}
        <rect x="275" y="110" width="10" height="40" rx="2" fill="#0aa8f0" opacity="0.7" filter="url(#glow)" />
        <line x1="280" y1="80" x2="280" y2="110" stroke="#36c5ff" strokeWidth="1.5" />
        <line x1="280" y1="150" x2="280" y2="200" stroke="#36c5ff" strokeWidth="1.5" />

        {/* Cross-coupled inverters */}
        {/* Left inverter (M1-M2) */}
        <rect x="150" y="170" width="30" height="20" rx="3" fill="#16243d" stroke="#36c5ff" strokeWidth="1" />
        <rect x="150" y="210" width="30" height="20" rx="3" fill="#16243d" stroke="#36c5ff" strokeWidth="1" />
        <text x="157" y="185" fill="#36c5ff" fontSize="8" fontFamily="monospace">M1</text>
        <text x="157" y="225" fill="#36c5ff" fontSize="8" fontFamily="monospace">M2</text>

        {/* Right inverter (M3-M4) */}
        <rect x="220" y="170" width="30" height="20" rx="3" fill="#16243d" stroke="#22d3ee" strokeWidth="1" />
        <rect x="220" y="210" width="30" height="20" rx="3" fill="#16243d" stroke="#22d3ee" strokeWidth="1" />
        <text x="227" y="185" fill="#22d3ee" fontSize="8" fontFamily="monospace">M3</text>
        <text x="227" y="225" fill="#22d3ee" fontSize="8" fontFamily="monospace">M4</text>

        {/* Cross-coupling connections */}
        <path d="M 180 180 L 200 180 L 200 260 L 250 260 L 250 230 L 220 230" fill="none" stroke="#36c5ff" strokeWidth="1.5" opacity="0.7" />
        <path d="M 250 180 L 230 180 L 230 260 L 150 260 L 150 230 L 180 230" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.7" />

        {/* Q and Qb nodes */}
        <circle cx="200" cy="180" r="4" fill="#22d3ee" filter="url(#glow)" />
        <circle cx="200" cy="220" r="4" fill="#36c5ff" filter="url(#glow)" />

        {/* VDD rail */}
        <line x1="60" y1="140" x2="340" y2="140" stroke="#36c5ff" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />
        <text x="62" y="135" fill="#36c5ff" fontSize="8" fontFamily="monospace" opacity="0.5">VDD</text>

        {/* GND rail */}
        <line x1="60" y1="260" x2="340" y2="260" stroke="#36c5ff" strokeWidth="1" opacity="0.4" strokeDasharray="4 4" />
        <text x="62" y="275" fill="#36c5ff" fontSize="8" fontFamily="monospace" opacity="0.5">GND</text>

        {/* Animated flowing traces */}
        <line x1="120" y1="80" x2="280" y2="80" stroke="url(#traceGrad)" strokeWidth="3" strokeDasharray="20 80" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="120" y1="60" x2="120" y2="200" stroke="url(#traceGrad)" strokeWidth="2" strokeDasharray="15 60" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-75" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="280" y1="60" x2="280" y2="200" stroke="url(#traceGrad)" strokeWidth="2" strokeDasharray="15 60" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-75" dur="3s" repeatCount="indefinite" />
        </line>

        {/* Corner labels */}
        <text x="50" y="55" fill="#36c5ff" fontSize="7" fontFamily="monospace" opacity="0.4">6T SRAM CELL</text>
        <text x="305" y="355" fill="#36c5ff" fontSize="7" fontFamily="monospace" opacity="0.4">CMOS</text>

        {/* Floating technical symbols */}
        <text x="70" y="300" fill="#22d3ee" fontSize="10" fontFamily="monospace" opacity="0.3">∂V/∂t</text>
        <text x="300" y="100" fill="#22d3ee" fontSize="10" fontFamily="monospace" opacity="0.3">μA</text>
      </svg>
    </div>
  );
}
