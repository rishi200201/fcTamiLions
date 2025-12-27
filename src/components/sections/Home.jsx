import { TamiLionSLogo, BrandText } from "../TamiLionSLogo";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaTrophy, FaUsers, FaFutbol } from "react-icons/fa";

export const Home = () => {
  const statsData = [
    {
      icon: FaTrophy,
      number: "AIFF",
      label: "1-Star Rated Club",
      color: "primary",
      delay: "0.1s"
    },
    {
      icon: FaUsers,
      number: "50+",
      label: "Elite Players",
      color: "accent",
      delay: "0.2s"
    },
    {
      icon: FaFutbol,
      number: "5-19",
      label: "Age Groups",
      color: "primary",
      delay: "0.3s"
    }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Modern Professional Background */}
      <div className="absolute inset-0 z-0">
        {/* Sophisticated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#475569_1px,transparent_1px),linear-gradient(to_bottom,#475569_1px,transparent_1px)] bg-[size:120px_120px]" />
        
        {/* Modern Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-800/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/30 to-transparent" />
        
        {/* Subtle Accent Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-400/3 rounded-full blur-3xl" />
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 px-6 relative max-w-7xl mx-auto pt-32 pb-16">
          {/* Modern Logo Section */}
          <div className="mb-16">
            <div className="flex justify-center mb-12">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-slate-500/10 to-blue-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                  <TamiLionSLogo 
                    variant="dark" 
                    size="custom"
                    customSize="w-24 md:w-28 lg:w-32 h-24 md:h-28 lg:h-32"
                    className="drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Premium Brand Presentation */}
            <div className="mb-12">
              <BrandText 
                size="xxl"
                theme="light"
                className="text-center mb-6"
              />
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <span className="text-sm font-bold text-blue-400 tracking-[0.25em] uppercase px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  Football Academy
                </span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent via-blue-500 to-transparent"></div>
              </div>
            </div>

            {/* Elite Credentials Bar */}
            <div className="bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 backdrop-blur-xl border border-slate-600/30 rounded-2xl p-6 mb-12 shadow-xl">
              <div className="flex items-center justify-center gap-8 flex-wrap text-sm">
                <div className="text-center group cursor-default">
                  <div className="font-bold text-white mb-1 text-lg group-hover:text-blue-400 transition-colors">2021</div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Established</div>
                </div>
                <div className="w-px h-10 bg-slate-600/50"></div>
                <div className="text-center group cursor-default">
                  <div className="font-bold text-white mb-1 text-lg group-hover:text-blue-400 transition-colors">AIFF</div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Certified</div>
                </div>
                <div className="w-px h-10 bg-slate-600/50"></div>
                <div className="text-center group cursor-default">
                  <div className="font-bold text-white mb-1 text-lg group-hover:text-blue-400 transition-colors">50+</div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Athletes</div>
                </div>
                <div className="w-px h-10 bg-slate-600/50"></div>
                <div className="text-center group cursor-default">
                  <div className="font-bold text-white mb-1 text-lg group-hover:text-blue-400 transition-colors">Tamil Nadu</div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Based</div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Mission Statement */}
          <div className="max-w-5xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight tracking-tight">
              <span className="block mb-2">Elite Football</span>
              <span className="block text-blue-400">Development Academy</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-10 max-w-4xl mx-auto">
              Transforming passionate players into professional athletes through 
              <span className="text-white font-medium"> world-class training programs</span>, 
              <span className="text-blue-400 font-medium"> AIFF-certified coaching</span>, and 
              <span className="text-white font-medium"> structured career pathways</span>.
            </p>
            
            {/* Premium Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-slate-700/40 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-600/40 hover:border-blue-500/50 transition-all duration-300 group">
                <span className="text-slate-300 group-hover:text-blue-400 transition-colors font-medium">Professional Coaching</span>
              </div>
              <div className="bg-slate-700/40 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-600/40 hover:border-blue-500/50 transition-all duration-300 group">
                <span className="text-slate-300 group-hover:text-blue-400 transition-colors font-medium">Career Development</span>
              </div>
              <div className="bg-slate-700/40 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-600/40 hover:border-blue-500/50 transition-all duration-300 group">
                <span className="text-slate-300 group-hover:text-blue-400 transition-colors font-medium">AIFF Standards</span>
              </div>
            </div>
          </div>

          {/* Modern Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/40 rounded-2xl p-8 text-center hover:border-blue-500/30 hover:bg-slate-700/20 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-slate-500/20 border border-slate-600/40 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-blue-400 text-2xl group-hover:text-blue-300 transition-colors" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{stat.number}</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wide font-semibold">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
