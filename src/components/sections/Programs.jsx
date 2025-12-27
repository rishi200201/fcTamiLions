import { FaFutbol, FaClock, FaUsers, FaCalendarAlt, FaStar, FaTrophy, FaGraduationCap, FaHome } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";
import programImage1 from "../../assets/0E7A8636.jpg";
import programImage2 from "../../assets/0E7A8680.jpg";
import programImage3 from "../../assets/0E7A8707.jpg";

export const Programs = () => {
  const programs = [
    {
      title: "Soccer School Programme",
      description: "Foundational football training for young players aged 5-12 years",
      ageGroup: "5-12 Years",
      duration: "Weekends",
      features: [
        "Basic football skills development",
        "Fun-based learning approach",
        "Character building activities",
        "Age-appropriate training methods"
      ],
      image: programImage1,
      color: "from-green-600 to-green-700"
    },
    {
      title: "Residential Academy Programme",
      description: "Comprehensive residential training for serious young footballers",
      ageGroup: "13-19 Years",
      duration: "Full-time",
      features: [
        "24/7 professional environment",
        "Academic education support",
        "Elite level training",
        "Boarding facilities"
      ],
      image: programImage2,
      color: "from-yellow-600 to-yellow-700"
    },
    {
      title: "Elite Youth Training",
      description: "Advanced training program for exceptional young talent",
      ageGroup: "16-21 Years",
      duration: "Daily Sessions",
      features: [
        "Professional level coaching",
        "Tactical development",
        "Physical conditioning",
        "Mental training"
      ],
      image: programImage3,
      color: "from-blue-600 to-blue-700"
    }
  ];

  const trainingTypes = [
    {
      icon: FaCalendarAlt,
      title: "Weekend Coaching",
      description: "Perfect for school-going children who want to develop football skills alongside their studies.",
      timing: "Saturdays & Sundays",
      suitable: "Age 5-19"
    },
    {
      icon: FaClock,
      title: "Daily Coaching",
      description: "Intensive daily training sessions for serious players aiming for professional careers.",
      timing: "Monday to Friday",
      suitable: "Age 13-21"
    },
    {
      icon: FaGraduationCap,
      title: "After-School Coaching",
      description: "Evening sessions designed to fit around school schedules while maintaining high training standards.",
      timing: "4:00 PM - 6:00 PM",
      suitable: "Age 8-16"
    }
  ];

  const specialPrograms = [
    {
      icon: FaUsers,
      title: "School & College Team Development",
      description: "Comprehensive team training programs for educational institutions",
      highlight: "Team Building"
    },
    {
      icon: FaTrophy,
      title: "Senior Team Training",
      description: "Professional level training for senior players and adult teams",
      highlight: "Professional Level"
    }
  ];

  return (
    <section id="programs" className="py-20 px-4 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <RevealOnScroll>
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Our Programs & Offerings
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-green-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive football training programs designed to nurture talent at every level, 
              from grassroots to professional development.
            </p>
          </div>
        </RevealOnScroll>

        {/* Main Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <RevealOnScroll key={index}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group border border-green-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-80`}></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{program.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-green-700 mb-4 leading-relaxed">{program.description}</p>
                  
                  <div className="flex gap-4 mb-6">
                    <div className="bg-green-50 px-3 py-2 rounded-lg text-center flex-1">
                      <FaUsers className="text-green-600 mx-auto mb-1" />
                      <p className="text-sm font-semibold text-green-800">{program.ageGroup}</p>
                    </div>
                    <div className="bg-yellow-50 px-3 py-2 rounded-lg text-center flex-1">
                      <FaClock className="text-yellow-600 mx-auto mb-1" />
                      <p className="text-sm font-semibold text-yellow-800">{program.duration}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-800 mb-3">Key Features:</h4>
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-green-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Training Types */}
        <RevealOnScroll>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                Training Schedules
              </h3>
              <p className="text-green-600 max-w-2xl mx-auto">
                Flexible training options designed to accommodate different lifestyles and commitments
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {trainingTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-xl text-white shadow-lg hover:shadow-xl transition-all group">
                  <div className="bg-white/20 p-4 rounded-lg inline-block mb-6 group-hover:bg-white/30 transition-colors">
                    <type.icon className="text-yellow-300 text-3xl" />
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4">{type.title}</h4>
                  <p className="text-green-100 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div className="space-y-2">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <span className="text-yellow-300 font-semibold">Timing: </span>
                      <span className="text-white">{type.timing}</span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <span className="text-yellow-300 font-semibold">Age Group: </span>
                      <span className="text-white">{type.suitable}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Special Programs */}
        <RevealOnScroll>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                Specialized Training Programs
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {specialPrograms.map((program, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-2 border-yellow-200 hover:border-yellow-400 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="bg-yellow-100 p-4 rounded-lg group-hover:bg-yellow-200 transition-colors">
                      <program.icon className="text-yellow-600 text-3xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-2xl font-bold text-green-800">{program.title}</h4>
                        <span className="bg-yellow-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold">
                          {program.highlight}
                        </span>
                      </div>
                      <p className="text-green-600 leading-relaxed">{program.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* CTA Section */}
        <RevealOnScroll>
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-800 to-green-900 p-10 rounded-2xl shadow-2xl">
              <FaFutbol className="text-yellow-400 text-5xl mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Football Journey?
              </h3>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Choose the program that best fits your goals and schedule. Our expert coaches are ready to help you reach your full potential.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#contact"
                  className="bg-yellow-500 hover:bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-3"
                >
                  <FaStar className="text-xl" />
                  Enroll Now
                </a>
                <a
                  href="#founder-team"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-3"
                >
                  <FaUsers className="text-xl" />
                  Meet Our Coaches
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};