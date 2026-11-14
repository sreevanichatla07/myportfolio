import { ArrowRight, Download, Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { personal, stats } from '@/data/portfolio';
import ChipVisual from './ChipVisual';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
            <span className="text-xs text-electric-200 font-medium tracking-wide">Open to opportunities</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            Hi, I'm <span className="gradient-text">Chatla Sreevani</span>
          </h1>

          <p className="mt-4 text-lg text-electric-200/90 font-medium leading-snug">
            Electronics &amp; Communication Engineer
            <span className="text-electric-400/60 mx-2">|</span>
            VLSI Design Enthusiast
            <span className="text-electric-400/60 mx-2">|</span>
            Semiconductor Engineer
          </p>

          <p className="mt-5 text-gray-400 leading-relaxed max-w-xl">{personal.intro}</p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
            {stats.map((s) => (
              <div key={s.label} className="glass-card glass-card-hover p-4 text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-[0.7rem] sm:text-xs text-gray-400 mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={scrollToProjects} className="btn-primary">
              Explore My Work
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href={personal.resumePath} download="Chatla-Sreevani-Resume.pdf" className="btn-ghost">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass-card glass-card-hover flex items-center justify-center text-electric-300 hover:text-cyan-glow"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="w-10 h-10 rounded-xl glass-card glass-card-hover flex items-center justify-center text-electric-300 hover:text-cyan-glow"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Chip visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <ChipVisual />
        </motion.div>
      </div>
    </section>
  );
}
