import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-neutral-950/90 backdrop-blur-xl z-40 flex flex-col items-center justify-center border-b border-neutral-800/50
                     transition-all duration-500 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer hover:text-primary-400 transition-colors duration-300"
        aria-label="Close Menu"
      >
        ×
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-medium text-white my-4 transform transition-all duration-500 hover:text-primary-400 relative group
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0 delay-100"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        Home
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-medium text-white my-4 transform transition-all duration-500 hover:text-primary-400 relative group
            ${
              menuOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-5"
            }        
    `}
      >
        About
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
      </a>
      <a
        href="#founder-team"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-medium text-white my-4 transform transition-all duration-500 hover:text-primary-400 relative group
            ${
              menuOpen ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Team
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
      </a>
      <a
        href="#programs"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-medium text-white my-4 transform transition-all duration-500 hover:text-primary-400 relative group
            ${
              menuOpen ? "opacity-100 translate-y-0 delay-[400ms]" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Programs
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
      </a>
      <a
        href="#aiff-leagues"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-medium text-white my-4 transform transition-all duration-500 hover:text-primary-400 relative group
            ${
              menuOpen ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-5"
            }        
    `}
      >
        AIFF Leagues
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
      </a>
      <a
        href="#partnerships"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-medium text-white my-4 transform transition-all duration-500 hover:text-primary-400 relative group
            ${
              menuOpen ? "opacity-100 translate-y-0 delay-[600ms]" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Partners
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
      </a>
      <a
        href="#achievements"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-medium text-white my-4 transform transition-all duration-500 hover:text-primary-400 relative group
            ${
              menuOpen ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Achievements
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
      </a>
      <a
        href="#gallery"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-medium text-white my-4 transform transition-all duration-500 hover:text-primary-400 relative group
            ${
              menuOpen ? "opacity-100 translate-y-0 delay-[800ms]" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Gallery
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white px-8 py-3 rounded-full text-xl font-semibold transform transition-all duration-500 shadow-lg hover:shadow-xl mt-6
            ${
              menuOpen ? "opacity-100 translate-y-0 delay-[900ms]" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Contact Us
      </a>
    </div>
  );
};
