import { FaCertificate, FaTrophy, FaUsers, FaFutbol, FaGraduationCap, FaStar } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";
import founderImage from "../../assets/0E7A7563.jpg";
import coachImage from "../../assets/0E7A8425.jpg";

export const FounderTeam = () => {
  const coaches = [
    {
      name: "Mr. D C Nethanieal",
      role: "Technical Director",
      license: "AIFF Licensed",
      experience: "15+ Years",
      achievements: ["Youth Development Expert", "State Level Coach"],
      image: coachImage
    },
    {
      name: "Mr. Muthumalai",
      role: "Technical Lead",
      license: "AIFF 'B' License",
      experience: "12+ Years",
      achievements: ["Tactical Specialist", "Player Development"],
      image: coachImage
    },
    {
      name: "Mr. Bala C",
      role: "Head Coach",
      license: "AIFF 'C' License",
      experience: "10+ Years",
      achievements: ["Grassroots Expert", "Youth Trainer"],
      image: coachImage
    },
    {
      name: "Mr. Pandiyan Srinivasan",
      role: "Head Coach",
      license: "AIFF Licensed",
      experience: "8+ Years",
      achievements: ["Skills Development", "Match Analysis"],
      image: coachImage
    }
  ];

  return (
    <section id="founder-team" className="py-20 px-4 bg-gradient-to-b from-green-900 to-green-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.1)_49%,rgba(255,255,255,0.1)_51%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealOnScroll>
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Founder & Coaching Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-green-100 text-lg max-w-3xl mx-auto leading-relaxed">
              Meet the passionate professionals driving excellence in football development at FC TamiLionS
            </p>
          </div>
        </RevealOnScroll>

        {/* Founder Section */}
        <RevealOnScroll>
          <div className="mb-20">
            <div className="bg-gradient-to-r from-green-800/50 to-green-700/50 backdrop-blur-sm border border-green-600/30 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="relative">
                    <img
                      src={founderImage}
                      alt="Rajarajan Srinivasan"
                      className="w-64 h-64 rounded-full object-cover mx-auto shadow-2xl border-4 border-yellow-400/30"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-yellow-500 p-3 rounded-full shadow-lg">
                      <FaCertificate className="text-green-900 text-2xl" />
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                    Rajarajan Srinivasan
                  </h3>
                  <p className="text-xl text-green-200 mb-6 font-semibold">Founder & Director</p>
                  
                  {/* Qualifications */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                    <span className="bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium">
                      AIFF 'C' Licensed Coach
                    </span>
                    <span className="bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium">
                      MBA Graduate
                    </span>
                    <span className="bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium">
                      Former National Player
                    </span>
                  </div>

                  <div className="space-y-4 text-green-100 leading-relaxed">
                    <p>
                      <strong className="text-yellow-400">Former Indian Bank & National Player</strong> with extensive experience in professional football and player development. His vision for FC TamiLionS stems from years of understanding what it takes to succeed at the highest levels.
                    </p>
                    <p>
                      With comprehensive <strong className="text-yellow-400">coaching and management experience</strong>, Rajarajan brings a unique blend of playing expertise and business acumen to develop young talent systematically.
                    </p>
                    <p className="text-yellow-200">
                      "My mission is to create a pathway for young Tamil Nadu footballers to achieve their dreams at national and international levels."
                    </p>
                  </div>

                  {/* Career Highlights */}
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <FaTrophy className="text-yellow-400 text-2xl mx-auto mb-2" />
                      <p className="text-sm text-green-200">National Player</p>
                    </div>
                    <div>
                      <FaGraduationCap className="text-yellow-400 text-2xl mx-auto mb-2" />
                      <p className="text-sm text-green-200">MBA Graduate</p>
                    </div>
                    <div>
                      <FaCertificate className="text-yellow-400 text-2xl mx-auto mb-2" />
                      <p className="text-sm text-green-200">AIFF Licensed</p>
                    </div>
                    <div>
                      <FaUsers className="text-yellow-400 text-2xl mx-auto mb-2" />
                      <p className="text-sm text-green-200">Youth Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Coaching Team Section */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Expert Coaching Team
            </h3>
            <p className="text-green-200 text-lg max-w-2xl mx-auto">
              AIFF licensed professionals dedicated to nurturing the next generation of football talent
            </p>
          </div>
        </RevealOnScroll>

        {/* Coach Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <RevealOnScroll key={index}>
              <div className="bg-white/10 backdrop-blur-sm border border-green-600/30 rounded-xl p-6 hover:bg-white/15 transition-all shadow-lg hover:shadow-xl group">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-3 border-yellow-400/50 group-hover:border-yellow-400 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-yellow-500 p-2 rounded-full">
                      <FaStar className="text-green-900 text-sm" />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">{coach.name}</h4>
                  <p className="text-yellow-400 font-semibold mb-2">{coach.role}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="bg-green-700/50 px-3 py-1 rounded-full">
                      <span className="text-green-200 text-sm">{coach.license}</span>
                    </div>
                    <div className="bg-yellow-400/20 px-3 py-1 rounded-full">
                      <span className="text-yellow-300 text-sm">{coach.experience}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {coach.achievements.map((achievement, i) => (
                      <p key={i} className="text-green-200 text-sm">• {achievement}</p>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA Section */}
        <RevealOnScroll>
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
                Learn from the Best
              </h3>
              <p className="text-green-800 mb-6 max-w-2xl mx-auto">
                Our experienced coaching team brings decades of combined expertise in player development, 
                tactical training, and professional football preparation.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl"
              >
                <FaFutbol className="text-xl" />
                Join Our Academy
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};