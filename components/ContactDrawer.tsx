import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Mail, Calendar } from 'lucide-react';
import { useForm } from '@formspree/react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  const [state, handleSubmitFormspree] = useForm("mjgjaobd");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: ''
  });

  // Handle success state and form reset
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ firstName: '', lastName: '', message: '' });
    }
  }, [state.succeeded]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1D2B36]/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl z-[110] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#1D2B36] uppercase tracking-tight">Let's Connect</h2>
                <p className="text-[#FF9E80] font-bold uppercase tracking-widest text-[10px] mt-1">Start a Conversation</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-50 transition-colors"
              >
                <X className="w-6 h-6 text-[#1D2B36]" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8">
              {/* Contact Form */}
              <form 
                onSubmit={handleSubmitFormspree} 
                className="space-y-6 mb-12"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-widest text-[#64748B]">First Name</label>
                    <input
                      required
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF9E80]/20 focus:border-[#FF9E80] transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-widest text-[#64748B]">Last Name</label>
                    <input
                      required
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF9E80]/20 focus:border-[#FF9E80] transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-[#64748B]">Your Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF9E80]/20 focus:border-[#FF9E80] transition-all resize-none"
                    placeholder="Tell us about your brand or project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all duration-300 border-2 border-[#1D2B36] ${
                    state.submitting || state.succeeded
                      ? 'bg-[#1D2B36] text-white'
                      : 'bg-transparent text-[#1D2B36] hover:bg-[#1D2B36] hover:text-white active:bg-[#1D2B36] active:text-white'
                  } disabled:opacity-50`}
                >
                  {state.submitting ? (
                    'Sending...'
                  ) : state.succeeded ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                
                {state.errors && (
                  <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>

              {/* Alternative Contact Options */}
              <div className="space-y-12 p-8 bg-slate-100/50 rounded-3xl border border-slate-200/50 mt-12">
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-4 h-4 text-[#FF9E80]" />
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1D2B36]">Email Us</h3>
                  </div>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    Prefer direct communication? Send us an email and we'll get back to you within 24 hours.
                  </p>
                  <a
                    href="mailto:luccianog@thegenteagency.com?subject=Inquiry%20from%20The%20Gente%20Agency%20Website&body=Hi%20The%20Gente%20Agency%2C%0A%0AI'd%20like%20to%20learn%20more%20about..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-4 bg-[#1D2B36] rounded-xl text-xs font-black uppercase tracking-widest text-white hover:bg-[#FF9E80] transition-all shadow-md cursor-pointer"
                  >
                    Send Direct Email
                  </a>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-4 h-4 text-[#FF9E80]" />
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1D2B36]">Intro Call</h3>
                  </div>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    Ready to scale your business? Book a 30-minute discovery call with our team.
                  </p>
                  <a
                    href="https://calendly.com/luccianog-thegenteagency/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-4 border-2 border-[#1D2B36] rounded-xl text-xs font-black uppercase tracking-widest text-[#1D2B36] hover:bg-[#1D2B36] hover:text-white transition-all shadow-sm"
                  >
                    Schedule Intro Call
                  </a>
                </section>
              </div>
            </div>

            {/* Footer Text */}
            <div className="p-8 mt-auto bg-slate-50">
              <p className="text-[10px] text-center text-[#94A3B8] font-bold uppercase tracking-[0.2em]">
                The Gente Agency &copy; {new Date().getFullYear()}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
