import { motion } from 'framer-motion';
import { Trophy, FileText, Award, ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { achievements, personal } from '@/data/portfolio';

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="text-center mb-14">
        <p className="section-subheading mb-3">Recognition &amp; research</p>
        <h2 className="section-heading">Achievements &amp; Research</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {achievements.map((ach, idx) => {
          const isGate = ach.type === 'gate';
          return (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="glass-card glass-card-hover p-6 relative overflow-hidden group"
            >
              {/* Decorative glow */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 blur-2xl rounded-full transition-opacity group-hover:opacity-100 ${
                  isGate ? 'bg-electric-500/15' : 'bg-accent-violet/15'
                }`}
              />

              <div className="relative flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                    isGate
                      ? 'bg-gradient-to-br from-electric-500/20 to-cyan-glow/10'
                      : 'bg-gradient-to-br from-accent-violet/20 to-electric-500/10'
                  }`}
                >
                  {isGate ? (
                    <Trophy className="w-7 h-7 text-electric-300" />
                  ) : (
                    <FileText className="w-7 h-7 text-accent-violet" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-white mb-3">{ach.title}</h3>

                  <div className="space-y-2">
                    {ach.details.map((d, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2 ${
                          i === 1 && !isGate ? 'text-electric-200 font-medium italic' : 'text-gray-300'
                        } text-sm leading-relaxed`}
                      >
                        {isGate ? (
                          <Award className="w-4 h-4 text-electric-400/70 shrink-0 mt-0.5" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-violet/60 shrink-0 mt-1.5" />
                        )}
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tag */}
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-block text-xs font-mono px-3 py-1 rounded-full ${
                        isGate
                          ? 'bg-electric-500/10 text-electric-300 border border-electric-500/20'
                          : 'bg-accent-violet/10 text-accent-violet border border-accent-violet/20'
                      }`}
                    >
                      {isGate ? 'GATE 2026 • ECE' : 'IEEE • Nov 2025'}
                    </span>
                    {!isGate && (
                      <a
                        href={personal.researchPaperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric-300 hover:text-cyan-glow transition-colors"
                      >
                        Research Paper
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
