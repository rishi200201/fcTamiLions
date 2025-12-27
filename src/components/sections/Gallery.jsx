import { useState } from "react";
import { FaPlay, FaTimes, FaFutbol, FaTrophy, FaUsers, FaCamera } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";
import galleryImage1 from "../../assets/0E7A7542.jpg";
import galleryImage2 from "../../assets/0E7A7563.jpg";
import galleryImage3 from "../../assets/0E7A8425.jpg";
import galleryImage4 from "../../assets/0E7A8636.jpg";
import galleryImage5 from "../../assets/0E7A8680.jpg";
import galleryImage6 from "../../assets/0E7A8707.jpg";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      image: galleryImage1,
      title: "Training Session",
      category: "training",
      description: "Intensive skill development session with young players"
    },
    {
      id: 2,
      image: galleryImage2,
      title: "Team Formation",
      category: "team",
      description: "Strategic team formation practice for upcoming matches"
    },
    {
      id: 3,
      image: galleryImage3,
      title: "Championship Victory",
      category: "matches",
      description: "Celebrating victory in the regional championship"
    },
    {
      id: 4,
      image: galleryImage4,
      title: "Youth Camp",
      category: "events",
      description: "Summer training camp for aspiring young footballers"
    },
    {
      id: 5,
      image: galleryImage5,
      title: "Technical Training",
      category: "training",
      description: "Advanced technical skills development session"
    },
    {
      id: 6,
      image: galleryImage6,
      title: "Team Photo",
      category: "team",
      description: "Official team photo before the season kickoff"
    }
  ];

  const categories = [
    { id: "all", name: "All Photos", icon: FaCamera },
    { id: "training", name: "Training", icon: FaFutbol },
    { id: "matches", name: "Matches", icon: FaTrophy },
    { id: "team", name: "Team", icon: FaUsers },
    { id: "events", name: "Events", icon: FaCamera }
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-green-900 to-green-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.1)_49%,rgba(255,255,255,0.1)_51%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealOnScroll>
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-green-100 text-lg max-w-3xl mx-auto leading-relaxed">
              Capturing moments of excellence, teamwork, and passion in our journey to develop football talent in Tamil Nadu.
            </p>
          </div>
        </RevealOnScroll>

        {/* Category Filter */}
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-yellow-500 text-green-900'
                    : 'bg-green-700/50 text-green-100 hover:bg-green-600/70'
                }`}
              >
                <category.icon className="text-lg" />
                {category.name}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredItems.map((item) => (
            <RevealOnScroll key={item.id}>
              <div 
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-green-700/30 backdrop-blur-sm border border-green-600/30 hover:border-yellow-400/50 transition-all"
                onClick={() => openModal(item)}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-yellow-500/90 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <FaPlay className="text-green-900 text-xl ml-1" />
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-green-100 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Stats */}
        <RevealOnScroll>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm border border-green-600/30 rounded-2xl p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8">
                Memories in Numbers
              </h3>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-yellow-400 mb-2">500+</div>
                  <p className="text-green-200 font-semibold">Training Photos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-yellow-400 mb-2">100+</div>
                  <p className="text-green-200 font-semibold">Match Moments</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-yellow-400 mb-2">50+</div>
                  <p className="text-green-200 font-semibold">Team Events</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-yellow-400 mb-2">25+</div>
                  <p className="text-green-200 font-semibold">Trophy Ceremonies</p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-2">{selectedImage.title}</h3>
                <p className="text-green-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};