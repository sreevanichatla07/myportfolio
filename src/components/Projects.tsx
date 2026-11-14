import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Wrench, ArrowUpRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import ProjectVisual from './ProjectVisual';
import { projects, type Project } from '@/data/portfolio';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-14">
        <p className="section-subheading mb-3">Hands-on engineering work</p>
        <h2 className="section-heading">Featured Engineering Projects</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="glass-card glass-card-hover overflow-hidden flex flex-col group"
          >
            {/* Visual */}
            <div className="relative overflow-hidden border-b border-electric-500/10">
              <div className="aspect-[16/9] bg-midnight-900 transition-transform duration-500 group-hover:scale-[1.02]">
                <ProjectVisual type={project.visual} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-800/40 to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="w-3.5 h-3.5 text-electric-400" />
                <span className="text-xs text-electric-300/80 font-mono">{project.tools}</span>
              </div>

              <h3 className="font-display text-lg font-semibold text-white leading-tight mb-2 group-hover:text-electric-200 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>

              <div className="mt-auto">
                <button
                  onClick={() => setSelected(project)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-300 hover:text-cyan-glow transition-colors group/btn"
                >
                  View Details
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-midnight-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 22, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-3xl w-full max-h-[85vh] overflow-y-auto"
            >
              {/* Header with visual */}
              <div className="relative">
                <div className="aspect-[16/8] bg-midnight-900 rounded-t-2xl overflow-hidden">
                  <ProjectVisual type={selected.visual} />
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-midnight-900/80 backdrop-blur flex items-center justify-center text-electric-300 hover:text-white hover:bg-electric-500/20 transition-all"
                  aria-label="Close project details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-4 h-4 text-electric-400" />
                  <span className="text-xs text-electric-300/80 font-mono">{selected.tools}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">{selected.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{selected.description}</p>

                <h4 className="font-display text-sm font-semibold text-electric-200 uppercase tracking-wide mb-3">
                  Key Contributions
                </h4>
                <ul className="space-y-2.5">
                  {selected.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
