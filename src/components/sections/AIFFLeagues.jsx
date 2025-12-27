import { FaTrophy, FaFutbol, FaGlobe, FaUsers, FaFlag, FaStar, FaMedal, FaTv } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";
import leagueImage from "../../assets/0E7A8425.jpg";

export const AIFFLeagues = () => {
  const leagueFeatures = [
    {
      icon: FaTrophy,
      title: "AIFF Academy Accreditation",
      description: "Applied for AIFF Academy Accreditation for 2024-25 season",
      status: "In Process"
    },
    {
      icon: FaUsers,
      title: "Youth League Eligibility",
      description: "Eligible to participate in AIFF & State Youth Leagues",
      status: "Qualified"
    },
    {
      icon: FaGlobe,
      title: "National Platform",
      description: "Access to national level competitions and exposure",
      status: "Active"
    }
  ];

  const ageGroups = [
    { age: "U-13", description: "Foundation level competitive football" },
    { age: "U-15", description: "Intermediate skill development" },
    { age: "U-17", description: "Advanced tactical training" },
    { age: "U-19", description: "Pre-professional preparation" },
    { age: "U-21", description: "Professional pathway transition" }
  ];

  const opportunities = [
    {
      icon: FaTv,
      title: "Media Coverage",
      description: "National and regional media attention for outstanding performances"
    },
    {
      icon: FaFlag,
      title: "State & National Selection",
      description: "Scouting opportunities for state and national team selections"
    },
    {
      icon: FaStar,
      title: "FIFA Standard Grounds",
      description: "All matches played on FIFA-standard grounds with proper facilities"
    },
    {
      icon: FaMedal,
      title: "Professional Exposure",
      description: "Experience professional match conditions and environments"
    }
  ];

  return (
    <section id="aiff-leagues" className="py-20 px-4 bg-gradient-to-b from-green-800 to-green-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.1)_49%,rgba(255,255,255,0.1)_51%,transparent_51%)] bg-[length:30px_30px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealOnScroll>
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AIFF & Youth Leagues
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-green-100 text-lg max-w-3xl mx-auto leading-relaxed">
              Providing access to national-level competitions and professional development pathways through AIFF recognized programs.
            </p>
          </div>
        </RevealOnScroll>

        {/* AIFF Accreditation Section */}
        <RevealOnScroll>
          <div className="mb-20">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-10 rounded-2xl shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <img
                    src={leagueImage}
                    alt="AIFF Youth League"
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="lg:w-2/3 text-green-900">
                  <h3 className="text-3xl font-bold mb-6">AIFF Academy Accreditation</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    FC TamiLionS has applied for <strong>AIFF Academy Accreditation for the 2024-25 season</strong>, 
                    demonstrating our commitment to maintaining the highest standards in youth football development.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {leagueFeatures.map((feature, index) => (
                      <div key={index} className="bg-white/20 p-4 rounded-lg text-center">
                        <feature.icon className="text-2xl mx-auto mb-2" />
                        <h4 className="font-bold mb-2">{feature.title}</h4>
                        <span className="bg-green-800 text-white px-3 py-1 rounded-full text-sm">
                          {feature.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Age Groups */}
        <RevealOnScroll>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AIFF Youth I-League Age Groups
              </h3>
              <p className="text-green-200 max-w-2xl mx-auto">
                Comprehensive age-group competitions organized by AIFF & Tamil Nadu Football Association
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {ageGroups.map((group, index) => (
                <div key={index} className="bg-green-700/50 backdrop-blur-sm border border-green-600/30 rounded-xl p-6 text-center hover:bg-green-700/70 transition-all">
                  <div className="bg-yellow-400 text-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-xl">
                    {group.age}
                  </div>
                  <p className="text-green-100 text-sm leading-relaxed">{group.description}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* League Structure */}
        <RevealOnScroll>
          <div className="mb-20">
            <div className="bg-white/10 backdrop-blur-sm border border-green-600/30 rounded-2xl p-10">
              <h3 className="text-3xl font-bold text-center text-yellow-400 mb-8">League Structure & Format</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                    <FaGlobe className="text-yellow-400" />
                    Competition Levels
                  </h4>
                  <ul className="space-y-3 text-green-100">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Zonal Level Competitions
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      National Level Championships
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Home & Away Format
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Professional Match Conditions
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                    <FaFutbol className="text-yellow-400" />
                    Match Standards
                  </h4>
                  <ul className="space-y-3 text-green-100">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      FIFA-Standard Grounds
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Professional Referees
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Live Streaming Coverage
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Medical Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Opportunities */}
        <RevealOnScroll>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Opportunities & Exposure
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 rounded-xl text-green-900 shadow-lg hover:shadow-xl transition-all text-center">
                  <opportunity.icon className="text-3xl mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-3">{opportunity.title}</h4>
                  <p className="text-sm leading-relaxed">{opportunity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll>
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-700 to-green-800 p-10 rounded-2xl border-2 border-yellow-400/30">
              <FaTrophy className="text-yellow-400 text-5xl mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-6">
                Compete at the National Level
              </h3>
              <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                Join FC TamiLionS and get the opportunity to compete in AIFF Youth Leagues, 
                gain national exposure, and take your football career to the next level.
              </p>
              <a
                href="#contact"
                className="bg-yellow-500 hover:bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3"
              >
                <FaFutbol className="text-xl" />
                Join Our League Team
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};