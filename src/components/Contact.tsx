import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, User, AtSign, MessageSquare } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { personal } from '@/data/portfolio';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialState: FormState = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) {
      e.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address';
    }
    if (!form.subject.trim()) e.subject = 'Please enter a subject';
    if (!form.message.trim()) {
      e.message = 'Please enter a message';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message should be at least 10 characters';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    setStatus('idle');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }

    // mailto fallback — no backend configured
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${encodeURIComponent(form.message)}`;
    const subject = encodeURIComponent(form.subject);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus('success');
    setForm(initialState);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'Chatla Sreevani', href: personal.linkedin },
    { icon: MapPin, label: 'Location', value: personal.location, href: undefined },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-14">
        <p className="section-subheading mb-3">Get in touch</p>
        <h2 className="section-heading">Let's Connect</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          I'm always interested in connecting with professionals, researchers, and opportunities in the semiconductor and VLSI industry.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            const content = (
              <div className="glass-card glass-card-hover p-5 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-glow/10 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                  <Icon className="w-5 h-5 text-electric-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{info.label}</p>
                  <p className="text-sm text-gray-200 font-medium truncate">{info.value}</p>
                </div>
              </div>
            );
            return info.href ? (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {content}
              </a>
            ) : (
              <div key={info.label}>{content}</div>
            );
          })}
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4" noValidate>
            {/* Name */}
            <div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-electric-400/60" />
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange('name')}
                  placeholder="Your Name"
                  aria-label="Your name"
                  className={`w-full bg-midnight-900/60 border rounded-xl pl-10 pr-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-electric-400/60 transition-colors ${
                    errors.name ? 'border-red-400/50' : 'border-electric-500/15'
                  }`}
                />
              </div>
              {errors.name && <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-electric-400/60" />
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  placeholder="Your Email"
                  aria-label="Your email"
                  className={`w-full bg-midnight-900/60 border rounded-xl pl-10 pr-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-electric-400/60 transition-colors ${
                    errors.email ? 'border-red-400/50' : 'border-electric-500/15'
                  }`}
                />
              </div>
              {errors.email && <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                value={form.subject}
                onChange={handleChange('subject')}
                placeholder="Subject"
                aria-label="Subject"
                className={`w-full bg-midnight-900/60 border rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-electric-400/60 transition-colors ${
                  errors.subject ? 'border-red-400/50' : 'border-electric-500/15'
                }`}
              />
              {errors.subject && <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-electric-400/60" />
                <textarea
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="Your Message"
                  aria-label="Your message"
                  rows={4}
                  className={`w-full bg-midnight-900/60 border rounded-xl pl-10 pr-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-electric-400/60 transition-colors resize-none ${
                    errors.message ? 'border-red-400/50' : 'border-electric-500/15'
                  }`}
                />
              </div>
              {errors.message && <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
            </div>

            {/* Submit */}
            <button type="submit" className="btn-primary w-full justify-center">
              <Send className="w-4 h-4" />
              Send Message
            </button>

            {/* Feedback */}
            {status === 'success' && (
              <div className="flex items-center gap-2 text-sm text-cyan-glow bg-cyan-glow/10 border border-cyan-glow/20 rounded-xl px-4 py-3">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Your email client should now be open. If not, please email me directly at {personal.email}.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                <AlertCircle className="w-4 h-4 shrink-0" />
                Please fix the errors above before sending.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
