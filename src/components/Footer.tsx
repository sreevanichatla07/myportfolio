import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Linkedin, Mail, Cpu } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative border-t border-electric-500/15 bg-midnight-950/60 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-electric-400" />
            <span className="font-display font-bold text-lg text-white">
              Chatla Sreevani<span className="text-electric-400">.</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            Building circuits, exploring innovation, and shaping the future of semiconductor technology.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
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

          {/* Credit */}
          <div className="pt-4 border-t border-electric-500/10 w-full">
            <p className="text-sm text-gray-500">
              Designed &amp; Developed by <span className="text-electric-300 font-medium">Chatla Sreevani</span>
            </p>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 w-11 h-11 rounded-xl bg-gradient-to-r from-electric-500 to-cyan-glow text-midnight-950 flex items-center justify-center shadow-[0_0_20px_-3px_rgba(34,211,238,0.6)] hover:scale-110 transition-transform z-40"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
