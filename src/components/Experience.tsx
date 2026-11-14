import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-14">
        <p className="section-subheading mb-3">My professional journey</p>
        <h2 className="section-heading">Experience</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-500/40 via-cyan-glow/30 to-transparent" />

          {experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-16 pb-8 last:pb-0"
            >
              {/* Node */}
              <div className="absolute left-4 top-0 w-5 h-5 rounded-full bg-electric-500/20 border-2 border-electric-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
              </div>

              <div className="glass-card glass-card-hover p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-electric-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{exp.position}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-electric-300/80">
                        <Building2 className="w-3.5 h-3.5" />
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-midnight-700/40 px-3 py-1.5 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-electric-400" />
                    {exp.duration}
                  </div>
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow mt-1.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
