import { motion } from 'framer-motion';
import {
  Cpu, Database, Binary, Wrench, Code2, CheckCircle2, type LucideIcon,
} from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { skillCategories } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Database,
  Binary,
  Wrench,
  Code2,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-14">
        <p className="section-subheading mb-3">What I bring to the table</p>
        <h2 className="section-heading">Technical Expertise</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = iconMap[cat.icon] ?? Cpu;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="glass-card glass-card-hover p-6 h-full group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-glow/10 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="w-6 h-6 text-electric-300" />
                    <div className="absolute inset-0 bg-electric-400/20 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white leading-tight">{cat.title}</h3>
                </div>

                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-electric-400/70 shrink-0" />
                      <span className="transition-colors group-hover:text-electric-100">{skill}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative bottom bar */}
                <div className="mt-5 h-0.5 bg-gradient-to-r from-electric-500/30 via-cyan-glow/20 to-transparent rounded-full" />
              </div>
            </motion.div>
          );
        })}

        {/* CTA card to fill grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="glass-card glass-card-hover p-6 h-full flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-violet/20 to-electric-500/10 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-accent-violet" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Continuously expanding my expertise in VLSI design, semiconductor verification, and digital system architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
