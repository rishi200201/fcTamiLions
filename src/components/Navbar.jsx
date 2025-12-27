import { useEffect, useState } from "react";
import { FullBrand } from "./TamiLionSLogo";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      href: "#home", 
      label: "Home"
    },
    { 
      href: "#about", 
      label: "About",
      submenu: [
        { href: "#about", label: "Our Story" },
        { href: "#founder-team", label: "Leadership Team" },
        { href: "#achievements", label: "Achievements" }
      ]
    },
    { 
      href: "#programs", 
      label: "Programs",
      submenu: [
        { href: "#programs", label: "Youth Development" },
        { href: "#aiff-leagues", label: "AIFF Leagues" },
        { href: "#programs", label: "Training Camps" }
      ]
    },
    { 
      href: "#academy", 
      label: "Academy",
      submenu: [
        { href: "#partnerships", label: "Partnerships" },
        { href: "#programs", label: "Facilities" },
        { href: "#about", label: "Certification" }
      ]
    },
    { 
      href: "#gallery", 
      label: "Media",
      submenu: [
        { href: "#gallery", label: "Photo Gallery" },
        { href: "#gallery", label: "Videos" }
      ]
    },
   
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50' 
        : 'bg-slate-900/95 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Professional Logo */}
          <a 
            href="#home" 
            className="flex items-center group transition-all duration-200"
          >
            <FullBrand 
              logoVariant={isScrolled ? "light" : "dark"}
              logoSize="sm" 
              textSize="md" 
              textTheme={isScrolled ? "dark" : "light"}
              orientation="horizontal" 
              gap="gap-3"
              className="transition-all duration-300"
            />
          </a>

          {/* Professional Mobile Menu Button */}
          <button
            className={`relative w-10 h-10 cursor-pointer z-40 md:hidden focus:outline-none rounded-lg p-2 transition-all duration-200 ${
              isScrolled 
                ? 'hover:bg-slate-100 focus:ring-2 focus:ring-slate-300' 
                : 'hover:bg-slate-800/50 focus:ring-2 focus:ring-slate-600'
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 transform transition-all duration-200 ease-in-out ${
                  isScrolled ? 'bg-slate-800' : 'bg-white'
                } ${
                  menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`} />
                <span className={`absolute block h-0.5 w-6 transform transition-all duration-200 ease-in-out ${
                  isScrolled ? 'bg-slate-800' : 'bg-white'
                } ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute block h-0.5 w-6 transform transition-all duration-200 ease-in-out ${
                  isScrolled ? 'bg-slate-800' : 'bg-white'
                } ${
                  menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`} />
              </div>
            </div>
          </button>

          {/* Professional Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <div key={link.href} className="relative group">
                <a
                  href={link.href}
                  className={`relative transition-all duration-200 text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-1 ${
                    isScrolled 
                      ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {link.submenu && (
                    <svg className={`w-3 h-3 transition-transform duration-200 group-hover:rotate-180 ${
                      isScrolled ? 'text-slate-600' : 'text-slate-400'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className={`absolute bottom-1 left-1/2 w-0 h-0.5 transition-all duration-200 group-hover:w-6 transform -translate-x-1/2 rounded-full ${
                    isScrolled ? 'bg-slate-800' : 'bg-white'
                  }`}></span>
                </a>

                {/* Professional Dropdown Menu */}
                {link.submenu && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-52 bg-white border border-slate-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {link.submenu.map((sublink, subIndex) => (
                        <a
                          key={subIndex}
                          href={sublink.href}
                          className="block px-4 py-3 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-150 relative group/sub border-l-2 border-transparent hover:border-slate-400"
                        >
                          <span className="relative z-10">{sublink.label}</span>
                        </a>
                      ))}
                    </div>
                    {/* Professional Arrow */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-l border-t border-slate-200 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Professional CTA Button */}
            <div className="ml-6 pl-6 border-l border-slate-300">
              <a
                href="#contact"
                className={`inline-flex items-center px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isScrolled 
                    ? 'bg-slate-800 text-white hover:bg-slate-900 shadow-sm hover:shadow-md' 
                    : 'bg-white text-slate-900 hover:bg-slate-100 shadow-sm hover:shadow-md'
                }`}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};