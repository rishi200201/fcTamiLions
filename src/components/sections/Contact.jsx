import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFutbol, FaEnvelope } from "react-icons/fa";
import { TamiLionSLogo } from "../TamiLionSLogo";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    ageGroup: "",
    program: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleWhatsApp = () => {
    if (!formData.name || !formData.phone) {
      setSubmitStatus({ type: 'error', message: 'Please fill in your name and phone number.' });
      return;
    }
    
    setIsSubmitting(true);
    const message = `🏈 FC TamiLionS Inquiry 🏈\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nAge Group: ${formData.ageGroup}\nProgram Interest: ${formData.program}\nMessage: ${formData.message}`;
    const url = `https://wa.me/917358755490?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(url, "_blank");
      setIsSubmitting(false);
      setSubmitStatus({ type: 'success', message: 'Redirecting to WhatsApp...' });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      info: "+91 73587 55490",
      link: "https://wa.me/917358755490",
      color: "success"
    },
    {
      icon: FaPhoneAlt,
      title: "Phone",
      info: "+91 73587 55490",
      link: "tel:+917358755490",
      color: "primary"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      info: "info@fctamilans.com",
      link: "mailto:info@fctamilans.com",
      color: "accent"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      info: "Tamil Nadu, India",
      link: "#",
      color: "primary"
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-32 relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary-500/8 to-accent-500/8 blur-3xl animate-breathe" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-accent-500/6 to-primary-600/6 blur-3xl animate-float" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-primary-400/5 to-accent-400/5 blur-2xl animate-pulse-slow" />

      <RevealOnScroll>
        <div className="px-4 w-full max-w-7xl z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="mb-8">
              <TamiLionSLogo 
                variant="dark" 
                size="custom" 
                customSize="w-16 h-16" 
                className="mx-auto mb-6 opacity-80 animate-breathe"
              />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-display tracking-tight">
              <span className="block text-gradient-primary mb-2">Join</span>
              <span className="block text-white">FC TamiLionS</span>
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 mx-auto rounded-full mb-10 animate-shimmer overflow-hidden">
              <div className="h-full w-10 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -translate-x-full animate-shimmer" />
            </div>
            <p className="text-neutral-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              Ready to start your <span className="text-gradient-primary font-medium">football journey</span>? Get in touch with our team and discover your potential.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              <div className="glass rounded-3xl p-8 shadow-luxury">
                <h3 className="text-2xl font-bold text-white mb-8 font-display flex items-center gap-3">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-xl">
                    <FaFutbol className="text-white text-lg" />
                  </div>
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.link}
                        className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-neutral-800/30 group"
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${
                          contact.color === 'success' ? 'from-success-500 to-success-600' :
                          contact.color === 'accent' ? 'from-accent-500 to-accent-600' :
                          'from-primary-500 to-primary-600'
                        } group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="text-white text-lg" />
                        </div>
                        <div>
                          <p className="text-neutral-400 text-sm font-medium">{contact.title}</p>
                          <p className="text-white font-semibold group-hover:text-primary-400 transition-colors">{contact.info}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-2xl p-6 shadow-elegant">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FaInstagram className="text-pink-400" />
                  Follow Us
                </h4>
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-neutral-300 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-neutral-800/20"
                >
                  <FaInstagram className="text-lg" />
                  @fc_tamilions
                </a>
              </div>
            </div>

            {/* Enhanced Enrollment Form - Right Side */}
            <div className="lg:col-span-3">
              <div className="glass rounded-3xl p-8 md:p-12 shadow-luxury border border-neutral-700/30">
                <h3 className="text-3xl font-bold text-white mb-8 font-display flex items-center gap-3">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-3 rounded-xl">
                    <FaFutbol className="text-white text-xl" />
                  </div>
                  Enrollment Form
                </h3>
                
                {/* Form Status Messages */}
                {submitStatus && (
                  <div className={`p-4 rounded-2xl mb-6 border ${
                    submitStatus.type === 'success' 
                      ? 'bg-success-50 border-success-200 text-success-800' 
                      : 'bg-error-50 border-error-200 text-error-800'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-neutral-300 font-semibold mb-3 text-sm uppercase tracking-wide group-focus-within:text-primary-400 transition-colors">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        placeholder="Enter your full name"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-neutral-800/50 border border-neutral-600/50 px-4 py-4 rounded-2xl text-white placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:bg-neutral-800/80 hover:border-neutral-500"
                        required
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-neutral-300 font-semibold mb-3 text-sm uppercase tracking-wide group-focus-within:text-primary-400 transition-colors">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        placeholder="Your contact number"
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-neutral-800/50 border border-neutral-600/50 px-4 py-4 rounded-2xl text-white placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:bg-neutral-800/80 hover:border-neutral-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-neutral-300 font-semibold mb-3 text-sm uppercase tracking-wide group-focus-within:text-primary-400 transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      placeholder="your.email@example.com"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-800/50 border border-neutral-600/50 px-4 py-4 rounded-2xl text-white placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:bg-neutral-800/80 hover:border-neutral-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-neutral-300 font-semibold mb-3 text-sm uppercase tracking-wide group-focus-within:text-primary-400 transition-colors">
                        Age Group
                      </label>
                      <select
                        value={formData.ageGroup}
                        onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                        className="w-full bg-neutral-800/50 border border-neutral-600/50 px-4 py-4 rounded-2xl text-white transition-all duration-300 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:bg-neutral-800/80 hover:border-neutral-500"
                      >
                        <option value="" className="bg-neutral-800">Select age group</option>
                        <option value="5-8" className="bg-neutral-800">5-8 years</option>
                        <option value="9-12" className="bg-neutral-800">9-12 years</option>
                        <option value="13-15" className="bg-neutral-800">13-15 years</option>
                        <option value="16-19" className="bg-neutral-800">16-19 years</option>
                        <option value="adult" className="bg-neutral-800">Adult (20+)</option>
                      </select>
                    </div>
                    
                    <div className="group">
                      <label className="block text-neutral-300 font-semibold mb-3 text-sm uppercase tracking-wide group-focus-within:text-primary-400 transition-colors">
                        Program Interest
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full bg-neutral-800/50 border border-neutral-600/50 px-4 py-4 rounded-2xl text-white transition-all duration-300 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:bg-neutral-800/80 hover:border-neutral-500"
                      >
                        <option value="" className="bg-neutral-800">Select program</option>
                        <option value="academy" className="bg-neutral-800">Football Academy</option>
                        <option value="coaching" className="bg-neutral-800">Coaching Program</option>
                        <option value="trials" className="bg-neutral-800">Player Trials</option>
                        <option value="camps" className="bg-neutral-800">Training Camps</option>
                        <option value="other" className="bg-neutral-800">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-neutral-300 font-semibold mb-3 text-sm uppercase tracking-wide group-focus-within:text-primary-400 transition-colors">
                      Additional Message
                    </label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      placeholder="Tell us about your football experience, goals, or any questions you have..."
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-neutral-800/50 border border-neutral-600/50 px-4 py-4 rounded-2xl text-white placeholder-neutral-400 transition-all duration-300 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:bg-neutral-800/80 hover:border-neutral-500 resize-none"
                    />
                  </div>

                  {/* Enhanced Submit Button */}
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    disabled={isSubmitting || !formData.name || !formData.phone}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 disabled:from-neutral-700 disabled:to-neutral-600 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 shadow-luxury hover:shadow-glow-green hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 group relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3 relative z-10">
                        <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                        <span className="tracking-wide text-lg">SEND VIA WHATSAPP</span>
                      </span>
                    )}
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out" />
                  </button>
                  
                  <p className="text-neutral-400 text-sm text-center mt-4">
                    * Required fields. We'll respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Enhanced Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-neutral-700/30">
            <div className="flex items-center gap-6">
              <TamiLionSLogo 
                variant="dark" 
                size="custom" 
                customSize="w-10 h-10" 
                className="opacity-70 animate-breathe"
              />
              <div className="text-center md:text-left">
                <p className="text-neutral-400 text-sm">
                  Developed with <span className="text-red-400">♥</span> by{' '}
                  <span className="font-medium text-gradient-primary">Rishi</span>
                </p>
                <p className="text-neutral-500 text-xs mt-1">
                  FC TamiLionS © 2024 - All rights reserved
                </p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#about" className="text-neutral-400 hover:text-primary-400 transition-colors">About</a>
              <a href="#programs" className="text-neutral-400 hover:text-primary-400 transition-colors">Programs</a>
              <a href="#gallery" className="text-neutral-400 hover:text-primary-400 transition-colors">Gallery</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};