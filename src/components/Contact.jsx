import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, Send, MessageSquare, Sparkles, Copy, CheckCircle2 } from 'lucide-react';

const ContactMethod = ({ icon: Icon, title, value, href, index, accentColor }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col gap-4 p-6 rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
    >
      {/* Platform Iconic Glow */}
      <div className={`absolute -right-10 -top-10 w-32 h-32 bg-${accentColor}/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

      <div className="flex items-center justify-between">
        <div className={`w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-${accentColor}/30 shadow-2xl`}>
          <Icon size={20} className={`text-white/40 group-hover:text-${accentColor} transition-colors`} />
        </div>
        <button 
          onClick={handleCopy}
          className="p-2 rounded-xl bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/10 active:scale-90"
          title="Copy to clipboard"
        >
          {copied ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} className="text-white/40" />}
        </button>
      </div>

      <div className="space-y-1">
        <p className={`text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-${accentColor}/50 transition-colors`}>
          {title}
        </p>
        <a 
          href={href} 
          target={href.startsWith('http') ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="text-white/60 text-[14px] md:text-[15px] font-bold break-all hover:text-white transition-colors block leading-tight"
        >
          {value}
        </a>
      </div>

      {/* Subtle Progress Trace */}
      <div className={`absolute bottom-0 left-0 h-[2px] bg-${accentColor} group-hover:w-full transition-all duration-700 w-0`} />
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [3, -3]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-3, 3]), { stiffness: 400, damping: 30 });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleFormMouseMove = (e) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n---\nSent from Portfolio\nEmail: ${formData.email}`);
    window.location.href = `mailto:harshsingh45831@gmail.com?subject=${subject}&body=${body}`;
    setIsSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="relative w-full h-screen min-h-[750px] bg-[#050505] overflow-hidden flex flex-col justify-center border-t border-white/5 py-16 px-6 md:px-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] pointer-events-none select-none">
        <span className="font-display text-[50vw] uppercase text-white tracking-tighter">VOICE</span>
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10 max-w-[1500px]">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 items-center justify-center">
          
          {/* Left: Enhanced Contact Details */}
          <div className="flex-1 space-y-10 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="w-14 h-14 rounded-[22px] bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-2xl backdrop-blur-3xl">
                <MessageSquare className="w-7 h-7 text-red-500" />
              </div>
              <p className="text-[11px] font-bold tracking-[0.5em] text-white/20 uppercase mb-4 italic">Direct Access</p>
              <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.8] tracking-tighter uppercase text-white mb-8">
               Launch <br /> <span className="text-white/20 italic">Discussion</span>.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ContactMethod 
                icon={Phone} 
                title="Phone" 
                value="+91 7008594099" 
                href="tel:+917008594099" 
                index={0} 
                accentColor="orange-500"
              />
              <ContactMethod 
                icon={Mail} 
                title="Email" 
                value="harshsingh45831@gmail.com" 
                href="mailto:harshsingh45831@gmail.com" 
                index={1} 
                accentColor="cyan-400"
              />
              <ContactMethod 
                icon={Linkedin} 
                title="LinkedIn" 
                value="harsh-singh1712" 
                href="https://linkedin.com/in/harsh-singh1712" 
                index={2} 
                accentColor="blue-500"
              />
              <ContactMethod 
                icon={Github} 
                title="GitHub" 
                value="Harsh-sing007" 
                href="https://github.com/Harsh-sing007" 
                index={3} 
                accentColor="purple-500"
              />
            </div>
          </div>

          {/* Right: Premium Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-2xl"
          >
            <motion.div
              ref={formRef}
              onMouseMove={handleFormMouseMove}
              onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative rounded-[48px] border border-white/10 bg-[#080808] p-10 md:p-14 overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.5)] h-full backdrop-blur-3xl"
            >
              <div style={{ transform: 'translateZ(30px)' }}>
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles className="w-5 h-5 text-red-500" />
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">System Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase ml-2 italic">Identity</label>
                      <input
                        name="name" required placeholder="Name/Alias" value={formData.name} onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:border-red-500/30 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase ml-2 italic">Node Address</label>
                      <input
                        name="email" type="email" required placeholder="Email Address" value={formData.email} onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:border-red-500/30 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase ml-2 italic">Payload Data</label>
                    <textarea
                      name="message" required rows="4" placeholder="How can I assist you today?" value={formData.message} onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:border-red-500/30 transition-all outline-none resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSent}
                    className={`w-full group/btn relative flex items-center justify-center gap-4 py-6 rounded-[24px] text-[14px] font-black tracking-[0.4em] uppercase transition-all duration-700 overflow-hidden shadow-2xl ${
                      isSent ? 'bg-emerald-600' : 'bg-red-600 hover:bg-red-700 active:bg-red-800'
                    }`}
                  >
                    <span className="relative z-10 text-white">{isSent ? 'Transmitted' : 'Initiate Transmission'}</span>
                    {!isSent && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    )}
                    <Send className={`w-4 h-4 relative z-10 text-white ${isSent ? 'hidden' : 'group-hover/btn:translate-x-1 transition-transform'}`} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-red-600/[0.03] blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Contact;
