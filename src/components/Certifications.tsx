import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="text-center mb-14">
        <p className="section-subheading mb-3">Continuous learning</p>
        <h2 className="section-heading">Certifications &amp; Learning</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass-card glass-card-hover p-6 group flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-glow/10 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Award className="w-6 h-6 text-electric-300" />
                <div className="absolute inset-0 bg-electric-400/20 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {cert.badge && (
                <span className="text-[0.65rem] font-semibold text-cyan-glow bg-cyan-glow/10 px-2.5 py-1 rounded-full border border-cyan-glow/20 whitespace-nowrap">
                  {cert.badge}
                </span>
              )}
            </div>

            <h3 className="font-display text-base font-semibold text-white leading-snug mb-2 group-hover:text-electric-200 transition-colors">
              {cert.title}
            </h3>

            <div className="mt-auto flex items-center gap-2 pt-3 border-t border-electric-500/10">
              <BadgeCheck className="w-4 h-4 text-electric-400/70" />
              <span className="text-sm text-electric-300/80 font-medium">{cert.org}</span>
            </div>
          </motion.div>
        ))}

        {/* Fill card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card glass-card-hover p-6 flex flex-col justify-center items-center text-center"
        >
          <Award className="w-8 h-8 text-electric-400/50 mb-3" />
          <p className="text-sm text-gray-400 leading-relaxed">
            Committed to lifelong learning and staying current with semiconductor industry advancements.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
