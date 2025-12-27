import { FaFutbol, FaUsers, FaTrophy, FaHeart, FaGlobe, FaStar } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";
import { TamiLionSLogo } from "../TamiLionSLogo";

export const About = () => {
  return (
    <section id="about" className="py-32 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Professional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-100/30 to-transparent z-0" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/10 to-slate-100/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-20 w-64 h-64 bg-gradient-to-br from-slate-100/8 to-blue-100/8 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-100/5 to-slate-100/5 rounded-full blur-xl hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealOnScroll>
          {/* Professional Header */}
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-8 mb-10">
              <TamiLionSLogo 
                variant="light" 
                size="custom" 
                customSize="w-16 h-16" 
                className="opacity-90"
              />
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 font-display tracking-tight">
                  <span className="block text-blue-700">About</span>
                  <span className="block text-slate-900">FC TamiLionS</span>
                </h2>
              </div>
              <TamiLionSLogo 
                variant="light" 
                size="custom" 
                customSize="w-16 h-16" 
                className="opacity-90 scale-x-[-1]"
              />
            </div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto mb-10 rounded-full"></div>
            <p className="text-slate-700 text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed font-medium">
              Established in <span className="font-bold text-blue-700 px-3 py-1 bg-blue-50 rounded-lg border border-blue-200">2021</span>, FC TamiLionS is a premier football academy committed to excellence in player development and professional football pathways in Tamil Nadu.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          {/* Professional Club History */}
          <div className="mb-28">
            <div className="bg-white/80 backdrop-blur-sm p-12 md:p-16 rounded-2xl shadow-2xl border border-slate-200 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              <div className="flex flex-col lg:flex-row items-start gap-12 relative z-10">
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl border border-blue-100 flex-shrink-0 shadow-lg">
                  <FaFutbol className="text-blue-700 text-5xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-display">
                    Our <span className="text-blue-700">Foundation</span>
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-slate-700 text-xl leading-relaxed mb-8 font-medium">
                      <strong className="text-slate-900 font-bold">FC TamiLionS Football Academy</strong> was established in <span className="text-blue-700 font-bold px-3 py-1 bg-blue-50 rounded-lg border border-blue-200">2021</span> as a response to the growing demand for structured, professional football development in Tamil Nadu. Our academy operates with the highest standards of coaching excellence and player development methodologies.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      We are committed to fostering not only exceptional football skills but also the character, discipline, and leadership qualities essential for success in professional sports and life beyond the field.
                    </p>
                  </div>
                  
                  {/* Professional Highlights */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    <span className="px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold border border-blue-200">Founded 2021</span>
                    <span className="px-6 py-2 bg-slate-100 text-slate-800 rounded-full text-sm font-semibold border border-slate-200">Professional Development</span>
                    <span className="px-6 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold border border-green-200">AIFF Recognized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Core Values & Objectives */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <RevealOnScroll>
            <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-8 md:p-10 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-blue-600/20">
              <div className="bg-white/15 backdrop-blur-sm p-5 rounded-xl inline-block mb-6">
                <FaTrophy className="text-blue-100 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Mission Statement</h3>
              <p className="leading-relaxed opacity-95 text-blue-50">
                To develop and nurture <strong className="text-white">elite football talent</strong> through comprehensive training programs, producing 20+ professional players annually with pathways to national and international football.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 md:p-10 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-slate-600/20">
              <div className="bg-white/15 backdrop-blur-sm p-5 rounded-xl inline-block mb-6">
                <FaGlobe className="text-slate-100 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Vision & Goals</h3>
              <p className="leading-relaxed opacity-95 text-slate-50">
                To establish ourselves as a <strong className="text-white">premier football academy</strong> in South India, preparing athletes for professional leagues and contributing to India's football excellence on the global stage.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="bg-gradient-to-br from-green-700 to-green-800 p-8 md:p-10 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-green-600/20">
              <div className="bg-white/15 backdrop-blur-sm p-5 rounded-xl inline-block mb-6">
                <FaHeart className="text-green-100 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Core Values</h3>
              <p className="leading-relaxed opacity-95 text-green-50">
                Excellence, integrity, and dedication drive our approach to <strong className="text-white">holistic player development</strong>, ensuring both athletic success and character building for life beyond football.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          {/* Professional Credentials */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-2xl text-white shadow-2xl border border-slate-700">
            <h3 className="text-3xl font-bold text-center mb-12 text-slate-100 font-display">Academy Excellence & Recognition</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-blue-500/20 p-5 rounded-2xl inline-block mb-4 group-hover:bg-blue-500/30 transition-colors border border-blue-500/30">
                  <FaStar className="text-blue-400 text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-blue-400">AIFF 1-Star Certification</h4>
                <p className="text-slate-300 text-sm leading-relaxed">Officially recognized by the All India Football Federation for maintaining the highest standards in youth development and coaching excellence.</p>
              </div>

              <div className="text-center group">
                <div className="bg-slate-500/20 p-5 rounded-2xl inline-block mb-4 group-hover:bg-slate-500/30 transition-colors border border-slate-500/30">
                  <FaUsers className="text-slate-400 text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-slate-400">Comprehensive Development</h4>
                <p className="text-slate-300 text-sm leading-relaxed">Structured programs across all age groups (5-19 years) with focus on technical skills, tactical awareness, and physical conditioning.</p>
              </div>

              <div className="text-center group">
                <div className="bg-green-500/20 p-5 rounded-2xl inline-block mb-4 group-hover:bg-green-500/30 transition-colors border border-green-500/30">
                  <FaTrophy className="text-green-400 text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-green-400">Professional Pathways</h4>
                <p className="text-slate-300 text-sm leading-relaxed">Proven track record in player advancement to state, national levels and professional league opportunities.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="#programs"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl border border-blue-500"
              >
                <FaFutbol className="text-xl" />
                View Training Programs
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};