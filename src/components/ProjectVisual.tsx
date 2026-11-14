import type { Project } from '@/data/portfolio';

/**
 * Technical circuit illustration for each project type.
 * SVG-based, no external images.
 */
export default function ProjectVisual({ type }: { type: Project['visual'] }) {
  if (type === 'sram') {
    return (
      <svg viewBox="0 0 500 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="sramGlow"><feGaussianBlur stdDeviation="1.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <rect x="0" y="0" width="500" height="280" fill="#070d1a" rx="12" />

        {/* Word Line */}
        <line x1="40" y1="30" x2="460" y2="30" stroke="#22d3ee" strokeWidth="2" filter="url(#sramGlow)" />
        <text x="30" y="34" fill="#22d3ee" fontSize="10" fontFamily="monospace">WL</text>

        {/* Bit Lines */}
        <line x1="120" y1="15" x2="120" y2="260" stroke="#36c5ff" strokeWidth="2" filter="url(#sramGlow)" />
        <line x1="380" y1="15" x2="380" y2="260" stroke="#36c5ff" strokeWidth="2" filter="url(#sramGlow)" />
        <text x="105" y="275" fill="#36c5ff" fontSize="10" fontFamily="monospace">BL</text>
        <text x="365" y="275" fill="#36c5ff" fontSize="10" fontFamily="monospace">BLB</text>

        {/* Access transistors M5 & M6 */}
        <g>
          <rect x="113" y="60" width="14" height="40" rx="3" fill="#0aa8f0" opacity="0.7" filter="url(#sramGlow)" />
          <line x1="120" y1="30" x2="120" y2="60" stroke="#36c5ff" strokeWidth="1.5" />
          <line x1="120" y1="100" x2="120" y2="150" stroke="#36c5ff" strokeWidth="1.5" />
          <text x="135" y="85" fill="#36c5ff" fontSize="9" fontFamily="monospace">M5</text>
        </g>
        <g>
          <rect x="373" y="60" width="14" height="40" rx="3" fill="#0aa8f0" opacity="0.7" filter="url(#sramGlow)" />
          <line x1="380" y1="30" x2="380" y2="60" stroke="#36c5ff" strokeWidth="1.5" />
          <line x1="380" y1="100" x2="380" y2="150" stroke="#36c5ff" strokeWidth="1.5" />
          <text x="355" y="85" fill="#36c5ff" fontSize="9" fontFamily="monospace">M6</text>
        </g>

        {/* Cross-coupled inverter pair */}
        {/* Left inverter */}
        <rect x="170" y="125" width="40" height="22" rx="4" fill="#111c30" stroke="#36c5ff" strokeWidth="1" />
        <rect x="170" y="160" width="40" height="22" rx="4" fill="#111c30" stroke="#36c5ff" strokeWidth="1" />
        <text x="180" y="140" fill="#36c5ff" fontSize="9" fontFamily="monospace">M1</text>
        <text x="180" y="175" fill="#36c5ff" fontSize="9" fontFamily="monospace">M2</text>

        {/* Right inverter */}
        <rect x="290" y="125" width="40" height="22" rx="4" fill="#111c30" stroke="#22d3ee" strokeWidth="1" />
        <rect x="290" y="160" width="40" height="22" rx="4" fill="#111c30" stroke="#22d3ee" strokeWidth="1" />
        <text x="300" y="140" fill="#22d3ee" fontSize="9" fontFamily="monospace">M3</text>
        <text x="300" y="175" fill="#22d3ee" fontSize="9" fontFamily="monospace">M4</text>

        {/* Cross-coupling */}
        <path d="M 210 136 L 250 136 L 250 210 L 330 210 L 330 182 L 290 182" fill="none" stroke="#36c5ff" strokeWidth="1.5" />
        <path d="M 290 136 L 250 136 L 250 210 L 170 210 L 170 182 L 210 182" fill="none" stroke="#22d3ee" strokeWidth="1.5" />

        {/* Storage nodes */}
        <circle cx="250" cy="136" r="4" fill="#22d3ee" filter="url(#sramGlow)" />
        <circle cx="250" cy="182" r="4" fill="#36c5ff" filter="url(#sramGlow)" />
        <text x="258" y="130" fill="#22d3ee" fontSize="9" fontFamily="monospace">Q</text>
        <text x="258" y="200" fill="#36c5ff" fontSize="9" fontFamily="monospace">Q̄</text>

        {/* VDD & GND */}
        <line x1="100" y1="110" x2="400" y2="110" stroke="#36c5ff" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
        <text x="85" y="114" fill="#36c5ff" fontSize="8" fontFamily="monospace" opacity="0.5">VDD</text>
        <line x1="100" y1="210" x2="400" y2="210" stroke="#36c5ff" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
        <text x="88" y="225" fill="#36c5ff" fontSize="8" fontFamily="monospace" opacity="0.5">GND</text>
      </svg>
    );
  }

  if (type === 'dff') {
    return (
      <svg viewBox="0 0 500 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="dffGlow"><feGaussianBlur stdDeviation="1.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <rect x="0" y="0" width="500" height="280" fill="#070d1a" rx="12" />

        {/* D Flip-Flop block */}
        <rect x="170" y="90" width="160" height="100" rx="8" fill="#0c1424" stroke="#36c5ff" strokeWidth="2" filter="url(#dffGlow)" />
        <text x="215" y="130" fill="#22d3ee" fontSize="14" fontFamily="monospace" fontWeight="bold">TSPC</text>
        <text x="200" y="155" fill="#36c5ff" fontSize="11" fontFamily="monospace">D Flip-Flop</text>
        <text x="220" y="178" fill="#36c5ff" fontSize="8" fontFamily="monospace" opacity="0.6">90nm CMOS</text>

        {/* D input */}
        <line x1="40" y1="115" x2="170" y2="115" stroke="#36c5ff" strokeWidth="2" filter="url(#dffGlow)" />
        <text x="30" y="119" fill="#36c5ff" fontSize="11" fontFamily="monospace">D</text>

        {/* CLK input */}
        <line x1="40" y1="165" x2="170" y2="165" stroke="#22d3ee" strokeWidth="2" filter="url(#dffGlow)" />
        <text x="20" y="169" fill="#22d3ee" fontSize="11" fontFamily="monospace">CLK</text>
        {/* Clock triangle indicator */}
        <polygon points="160,158 172,165 160,172" fill="#22d3ee" opacity="0.6" />

        {/* Q output */}
        <line x1="330" y1="115" x2="460" y2="115" stroke="#22d3ee" strokeWidth="2" filter="url(#dffGlow)" />
        <text x="455" y="119" fill="#22d3ee" fontSize="11" fontFamily="monospace">Q</text>

        {/* Q̄ output */}
        <line x1="330" y1="165" x2="460" y2="165" stroke="#36c5ff" strokeWidth="2" filter="url(#dffGlow)" />
        <text x="450" y="169" fill="#36c5ff" fontSize="11" fontFamily="monospace">Q̄</text>

        {/* Waveform illustrations */}
        {/* CLK waveform */}
        <text x="30" y="220" fill="#22d3ee" fontSize="8" fontFamily="monospace" opacity="0.6">CLK</text>
        <path d="M 70 230 L 100 230 L 100 215 L 140 215 L 140 230 L 170 230 L 170 215 L 210 215 L 210 230 L 250 230 L 250 215 L 290 215 L 290 230 L 330 230 L 330 215 L 370 215 L 370 230 L 410 230 L 410 215 L 450 215" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.6" />

        {/* D waveform */}
        <text x="30" y="260" fill="#36c5ff" fontSize="8" fontFamily="monospace" opacity="0.6">D</text>
        <path d="M 70 265 L 130 265 L 130 250 L 250 250 L 250 265 L 350 265 L 350 250 L 450 250" fill="none" stroke="#36c5ff" strokeWidth="1.5" opacity="0.5" />
      </svg>
    );
  }

  // uart
  return (
    <svg viewBox="0 0 500 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="uartGlow"><feGaussianBlur stdDeviation="1.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect x="0" y="0" width="500" height="280" fill="#070d1a" rx="12" />

      {/* TX block */}
      <rect x="40" y="70" width="110" height="80" rx="8" fill="#0c1424" stroke="#36c5ff" strokeWidth="2" filter="url(#uartGlow)" />
      <text x="72" y="105" fill="#36c5ff" fontSize="14" fontFamily="monospace" fontWeight="bold">UART</text>
      <text x="72" y="125" fill="#22d3ee" fontSize="11" fontFamily="monospace">TX</text>

      {/* RX block */}
      <rect x="350" y="70" width="110" height="80" rx="8" fill="#0c1424" stroke="#22d3ee" strokeWidth="2" filter="url(#uartGlow)" />
      <text x="383" y="105" fill="#36c5ff" fontSize="14" fontFamily="monospace" fontWeight="bold">UART</text>
      <text x="383" y="125" fill="#22d3ee" fontSize="11" fontFamily="monospace">RX</text>

      {/* Connection line */}
      <line x1="150" y1="110" x2="350" y2="110" stroke="#22d3ee" strokeWidth="2" strokeDasharray="6 4" filter="url(#uartGlow)" />
      <text x="220" y="100" fill="#22d3ee" fontSize="9" fontFamily="monospace" opacity="0.7">Serial Data</text>

      {/* Clock */}
      <rect x="200" y="175" width="100" height="50" rx="6" fill="#0c1424" stroke="#36c5ff" strokeWidth="1.5" />
      <text x="222" y="200" fill="#36c5ff" fontSize="11" fontFamily="monospace">CLK 16×</text>
      <text x="230" y="215" fill="#36c5ff" fontSize="8" fontFamily="monospace" opacity="0.5">Oversample</text>

      {/* Clock to TX/RX */}
      <line x1="95" y1="150" x2="95" y2="200" stroke="#36c5ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      <line x1="95" y1="200" x2="200" y2="200" stroke="#36c5ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      <line x1="405" y1="150" x2="405" y2="200" stroke="#36c5ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      <line x1="300" y1="200" x2="405" y2="200" stroke="#36c5ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

      {/* Start/Stop bit waveform */}
      <text x="30" y="250" fill="#22d3ee" fontSize="8" fontFamily="monospace" opacity="0.5">TX:</text>
      <path d="M 60 255 L 80 255 L 80 245 L 120 245 L 120 255 L 160 255 L 160 245 L 200 245 L 200 255 L 240 255 L 240 245 L 280 245 L 280 255 L 320 255 L 320 245 L 360 245 L 360 255 L 460 255" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.5" />

      {/* Labels */}
      <text x="60" y="65" fill="#36c5ff" fontSize="8" fontFamily="monospace" opacity="0.4">Parity | Baud</text>
      <text x="370" y="65" fill="#36c5ff" fontSize="8" fontFamily="monospace" opacity="0.4">16× Sample</text>
    </svg>
  );
}
