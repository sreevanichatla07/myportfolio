import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, Calendar, Building2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { about } from '@/data/portfolio';

const infoIcons: Record<string, typeof GraduationCap> = {
  Degree: GraduationCap,
  College: Building2,
  Graduation: Calendar,
  CGPA: Award,
  Location: MapPin,
};

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-14">
        <p className="section-subheading mb-3">Get to know me</p>
        <h2 className="section-heading">About Me</h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Profile chip graphic */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-500/10 blur-2xl rounded-full" />
            {/* Stylized chip avatar */}
            <div className="relative w-full aspect-square max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/20 to-cyan-glow/10 rounded-3xl" />
              <svg viewBox="0 0 300 300" className="relative w-full h-full">
                <rect x="50" y="50" width="200" height="200" rx="20" fill="#0c1424" stroke="#36c5ff" strokeWidth="2" />
                {/* Central IC die */}
                <rect x="90" y="90" width="120" height="120" rx="12" fill="#111c30" stroke="#22d3ee" strokeWidth="1.5" />
                <text x="150" y="155" textAnchor="middle" fill="#22d3ee" fontSize="24" fontFamily="Space Grotesk, sans-serif" fontWeight="700">CS</text>
                {/* Pins */}
                {[90, 130, 170, 210].map((y) => (
                  <g key={`lp-${y}`}>
                    <line x1="30" y1={y} x2="50" y2={y} stroke="#36c5ff" strokeWidth="2" />
                    <rect x="42" y={y - 4} width="8" height="8" rx="1" fill="#22d3ee" opacity="0.6" />
                  </g>
                ))}
                {[90, 130, 170, 210].map((y) => (
                  <g key={`rp-${y}`}>
                    <line x1="250" y1={y} x2="270" y2={y} stroke="#36c5ff" strokeWidth="2" />
                    <rect x="250" y={y - 4} width="8" height="8" rx="1" fill="#22d3ee" opacity="0.6" />
                  </g>
                ))}
                {[90, 130, 170, 210].map((x) => (
                  <g key={`tp-${x}`}>
                    <line x1={x} y1="30" x2={x} y2="50" stroke="#36c5ff" strokeWidth="2" />
                  </g>
                ))}
                {[90, 130, 170, 210].map((x) => (
                  <g key={`bp-${x}`}>
                    <line x1={x} y1="250" x2={x} y2="270" stroke="#36c5ff" strokeWidth="2" />
                  </g>
                ))}
                {/* Glowing center */}
                <circle cx="150" cy="150" r="40" fill="none" stroke="#22d3ee" strokeWidth="0.5" opacity="0.3" />
                <circle cx="150" cy="150" r="60" fill="none" stroke="#36c5ff" strokeWidth="0.5" opacity="0.2" />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <p className="font-display text-lg font-semibold text-white">Chatla Sreevani</p>
              <p className="text-sm text-electric-300/70">Semiconductor Design Engineer</p>
            </div>
          </div>
        </motion.div>

        {/* Text + info panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-6"
        >
          <div className="space-y-4">
            {about.paragraphs.map((para, i) => (
              <p key={i} className="text-gray-300 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Info panel */}
          <div className="glass-card p-6">
            <h3 className="font-display text-lg font-semibold text-electric-200 mb-4">Quick Profile</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {about.info.map((item) => {
                const Icon = infoIcons[item.label] ?? GraduationCap;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 w-9 h-9 rounded-lg bg-electric-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-electric-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm text-gray-200 font-medium">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
