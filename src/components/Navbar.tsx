import { useState, useEffect } from 'react';
import { Menu, X, Download, Cpu } from 'lucide-react';
import { navLinks, personal } from '@/data/portfolio';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-midnight-950/85 backdrop-blur-xl border-b border-electric-500/15 shadow-[0_4px_30px_-10px_rgba(10,168,240,0.2)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group"
            aria-label="Go to home"
          >
            <div className="relative">
              <Cpu className="w-7 h-7 text-electric-400 transition-transform group-hover:rotate-12 group-hover:scale-110" />
              <div className="absolute inset-0 bg-electric-400/20 blur-lg rounded-full" />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight">
              Sreevani<span className="text-electric-400">.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeId === link.id
                    ? 'text-electric-300'
                    : 'text-gray-400 hover:text-electric-200 hover:bg-electric-500/5'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-glow shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
                )}
              </button>
            ))}
          </div>

          {/* Resume button + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={personal.resumePath}
              download="Chatla-Sreevani-Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-electric-500 to-cyan-glow text-midnight-950 text-sm font-semibold transition-all hover:shadow-[0_0_20px_-3px_rgba(34,211,238,0.6)] hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              My Resume
            </a>
            <button
              className="lg:hidden text-electric-300 p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-midnight-900/95 backdrop-blur-xl border-t border-electric-500/15">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeId === link.id
                    ? 'bg-electric-500/15 text-electric-300'
                    : 'text-gray-400 hover:text-electric-200 hover:bg-electric-500/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={personal.resumePath}
              download="Chatla-Sreevani-Resume.pdf"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-electric-500 to-cyan-glow text-midnight-950 text-sm font-semibold mt-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
