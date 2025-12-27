import { FaUniversity, FaSchool, FaFutbol, FaHandshake, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const Partnerships = () => {
  const partners = [
    {
      name: "Nazareth College of Arts & Science",
      type: "Higher Education",
      location: "Tamil Nadu",
      partnership: "Academic & Football Development",
      description: "Comprehensive partnership providing academic support and football training opportunities for college students.",
      icon: FaUniversity,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Nazareth Matriculation School",
      type: "Secondary Education",
      location: "Tamil Nadu", 
      partnership: "Youth Development Program",
      description: "School-level football training and talent identification program for young students.",
      icon: FaSchool,
      color: "from-green-600 to-green-700"
    },
    {
      name: "Nazareth Academy (CBSE)",
      type: "CBSE Education",
      location: "Tamil Nadu",
      partnership: "Elite Training Program", 
      description: "Specialized football coaching for CBSE curriculum students with flexible schedules.",
      icon: FaSchool,
      color: "from-purple-600 to-purple-700"
    },
    {
      name: "ICF Silver Jubilee School",
      type: "Government Institution",
      location: "Tamil Nadu",
      partnership: "Community Outreach",
      description: "Community-focused football development program reaching underprivileged students.",
      icon: FaSchool,
      color: "from-orange-600 to-orange-700"
    },
    {
      name: "Biinnggo Sports Turf",
      type: "Sports Infrastructure",
      location: "Tamil Nadu",
      partnership: "Training Facilities",
      description: "Premium turf facilities for professional training sessions and match preparations.",
      icon: FaFutbol,
      color: "from-teal-600 to-teal-700"
    },
    {
      name: "Don Bosco School Ground",
      type: "Training Venue",
      location: "Tamil Nadu",
      partnership: "Ground Partnership",
      description: "Quality ground facilities for regular training sessions and local competitions.",
      icon: FaFutbol,
      color: "from-red-600 to-red-700"
    }
  ];

  const partnershipBenefits = [
    {
      icon: FaStar,
      title: "Quality Infrastructure",
      description: "Access to top-notch training facilities and FIFA-standard grounds"
    },
    {
      icon: FaUniversity,
      title: "Academic Integration",
      description: "Seamless balance between education and football development"
    },
    {
      icon: FaHandshake,
      title: "Community Reach",
      description: "Expanding football opportunities across diverse communities"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Strategic Locations",
      description: "Multiple training venues across Tamil Nadu for convenient access"
    }
  ];

  return (
    <section id="partnerships" className="py-20 px-4 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <RevealOnScroll>
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Our Partnerships
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-green-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Strategic partnerships with educational institutions and sports facilities to provide comprehensive football development opportunities.
            </p>
          </div>
        </RevealOnScroll>

        {/* Partners Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {partners.map((partner, index) => (
            <RevealOnScroll key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all border-l-4 border-l-green-500 group">
                <div className="flex items-start gap-6">
                  <div className={`bg-gradient-to-br ${partner.color} p-4 rounded-lg text-white group-hover:scale-105 transition-transform`}>
                    <partner.icon className="text-2xl" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-green-800">{partner.name}</h3>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {partner.type}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-green-600 mb-2">
                        <FaMapMarkerAlt className="text-sm" />
                        <span className="text-sm font-medium">{partner.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 mb-3">
                        <FaHandshake className="text-sm" />
                        <span className="text-sm font-medium">{partner.partnership}</span>
                      </div>
                    </div>
                    
                    <p className="text-green-600 leading-relaxed">{partner.description}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Partnership Benefits */}
        <RevealOnScroll>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                Partnership Benefits
              </h3>
              <p className="text-green-600 max-w-2xl mx-auto">
                Our strategic partnerships create a comprehensive ecosystem for football development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-white text-center shadow-lg hover:shadow-xl transition-all group">
                  <div className="bg-white/20 p-4 rounded-lg inline-block mb-4 group-hover:bg-white/30 transition-colors">
                    <benefit.icon className="text-yellow-300 text-2xl" />
                  </div>
                  <h4 className="text-lg font-bold mb-3">{benefit.title}</h4>
                  <p className="text-green-100 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Partnership Impact */}
        <RevealOnScroll>
          <div className="bg-gradient-to-r from-green-800 to-green-900 p-10 rounded-2xl text-white shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Partnership Impact</h3>
              <p className="text-green-100 max-w-3xl mx-auto text-lg">
                Through our strategic partnerships, we've created a comprehensive network that supports every aspect of a young footballer's development journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-yellow-400 mb-2">6+</div>
                <p className="text-green-200 font-semibold">Partner Institutions</p>
              </div>
              <div>
                <div className="text-4xl font-black text-yellow-400 mb-2">500+</div>
                <p className="text-green-200 font-semibold">Students Reached</p>
              </div>
              <div>
                <div className="text-4xl font-black text-yellow-400 mb-2">12+</div>
                <p className="text-green-200 font-semibold">Training Venues</p>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <FaHandshake className="text-xl" />
                Partner With Us
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Future Partnerships */}
        <RevealOnScroll>
          <div className="mt-20 text-center">
            <div className="bg-yellow-50 border-2 border-yellow-200 p-10 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
                Expanding Our Network
              </h3>
              <p className="text-green-700 text-lg mb-8 max-w-2xl mx-auto">
                We're constantly seeking new partnerships with educational institutions, sports facilities, and community organizations to expand our reach and impact in football development.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-all inline-flex items-center justify-center gap-3"
                >
                  <FaHandshake />
                  Explore Partnership
                </a>
                <a
                  href="#programs"
                  className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-bold transition-all inline-flex items-center justify-center gap-3"
                >
                  <FaFutbol />
                  View Programs
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};