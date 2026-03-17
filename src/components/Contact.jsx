import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);


  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: clientX - left, y: clientY - top });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n---\nSent from Portfolio Contact Form\nSender Email: ${formData.email}`);
    const mailtoLink = `mailto:harshsingh45831@gmail.com?subject=${subject}&body=${body}`;
    
    // Trigger mail client
    window.location.href = mailtoLink;
    
    // Show success feedback
    setIsSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSent(false), 5000);
  };


  return (
    <section 
      id="contact" 
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#050505] py-28 md:py-36 overflow-hidden border-t border-white/5"
    >
      {/* Interactive Spotlight */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 38, 38, 0.15), transparent 80%)`
        }}
      />
      
      {/* Static Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Contact Info */}
          <div className="flex-1 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl shadow-red-500/10"
              >
                <MessageSquare className="w-6 h-6 text-white" />
              </motion.div>
              <p className="text-[11px] font-semibold tracking-[0.4em] text-white/30 uppercase mb-4">Get in Touch</p>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] tracking-tighter uppercase text-white mb-8">
                Let's Build <br /> Something <span className="text-red-500 italic">Cool</span>.
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-md">
                Have a project idea, a question, or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ContactMethod 
                icon={<Phone className="w-5 h-5 text-red-500" />}
                title="Phone"
                value="+91 7008594099"
                href="tel:+917008594099"
              />
              <ContactMethod 
                icon={<Mail className="w-5 h-5 text-red-500" />}
                title="Email"
                value="harshsingh45831@gmail.com"
                href="mailto:harshsingh45831@gmail.com"
              />
              <ContactMethod 
                icon={<Linkedin className="w-5 h-5 text-red-500" />}
                title="LinkedIn"
                value="harsh-singh1712"
                href="https://linkedin.com/in/harsh-singh1712"
              />
              <ContactMethod 
                icon={<Github className="w-5 h-5 text-red-500" />}
                title="GitHub"
                value="Harsh-sing007"
                href="https://github.com/Harsh-sing007"
              />
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Send a Message</h3>
              <p className="text-white/40 text-sm mb-10 tracking-wide">I'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">
                    <div className="w-1 h-1 bg-red-500 rounded-full" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-red-500/50 transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">
                    <div className="w-1 h-1 bg-red-500 rounded-full" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-red-500/50 transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">
                    <div className="w-1 h-1 bg-red-500 rounded-full" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSent}
                  className={`w-full group/btn relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-[15px] font-bold transition-all duration-300 overflow-hidden shadow-lg ${
                    isSent ? 'bg-green-600 shadow-green-900/20' : 'bg-red-600 hover:bg-red-700 active:scale-[0.98] hover:scale-[1.02] shadow-red-900/20'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 uppercase tracking-widest font-black">
                    {isSent ? 'Message Prepared!' : 'Send Message'}
                  </span>
                  {isSent ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="relative z-10"
                    >
                      ✅
                    </motion.div>
                  ) : (
                    <Send className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  )}
                </button>
                {isSent && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-500 text-xs font-bold uppercase tracking-widest mt-4"
                  >
                    Your mail client should open now!
                  </motion.p>
                )}

              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactMethod = ({ icon, title, value, href }) => (
  <a 
    href={href} 
    target={href.startsWith('http') ? "_blank" : "_self"}
    rel="noopener noreferrer"
    className="group flex flex-col gap-4 p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">{title}</p>
      <p className="text-white/70 text-sm font-semibold truncate group-hover:text-red-400 transition-colors">{value}</p>
    </div>
  </a>
);

export default Contact;
