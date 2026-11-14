import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, Calendar } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { education, educationStats } from '@/data/portfolio';

const levelIcons = [GraduationCap, School, BookOpen];

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="text-center mb-14">
        <p className="section-subheading mb-3">My academic foundation</p>
        <h2 className="section-heading">Academic Journey</h2>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
        {educationStats.map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass-card glass-card-hover p-4 text-center"
          >
            <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
            <div className="text-xs text-gray-400 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-500/40 via-cyan-glow/30 to-transparent" />

          {education.map((edu, idx) => {
            const Icon = levelIcons[idx] ?? GraduationCap;
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-16 pb-8 last:pb-0"
              >
                <div className="absolute left-4 top-0 w-5 h-5 rounded-full bg-electric-500/20 border-2 border-electric-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-glow" />
                </div>

                <div className="glass-card glass-card-hover p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-electric-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-white leading-tight">{edu.institution}</h3>
                      <p className="text-sm text-electric-300/80 mt-0.5">{edu.degree}</p>
                      {edu.board && <p className="text-xs text-gray-500 mt-0.5">{edu.board}</p>}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 ml-13">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-midnight-700/40 px-3 py-1.5 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 text-electric-400" />
                      {edu.period}
                    </div>
                    <div className="text-xs font-semibold text-cyan-glow bg-cyan-glow/10 px-3 py-1.5 rounded-lg">
                      {edu.score}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
