import React from 'react';
import { Cpu, MapPin, Mail, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>

      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-xl pulse-subtle"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mobile-text-adjust">
          {/* Profile Icon */}
          <div className="mb-6 md:mb-8 animate-fade-in-up animate-delay-100">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold border-4 border-white/20 electric-glow">
              <Cpu className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 leading-tight tracking-tight gradient-text animate-fade-in-up animate-delay-200">
            Manikandaprabhu Balu
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-blue-100 mb-6 md:mb-8 animate-fade-in-up animate-delay-300">
            Electrical & Electronics Engineer
          </p>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-8 text-sm sm:text-base md:text-lg animate-fade-in-up animate-delay-400">
            <div className="flex items-center text-blue-200 hover:text-white transition-colors">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <span className="text-xs sm:text-sm md:text-base">Brisbane, QLD, Australia</span>
            </div>
            <a href="mailto:mibhu27@gmail.com" className="flex items-center text-blue-200 hover:text-white transition-colors group">
              <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm md:text-base">mibhu27@gmail.com</span>
            </a>
            <a href="tel:+610481136997" className="flex items-center text-blue-200 hover:text-white transition-colors group">
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm md:text-base">+61 0481 136 997</span>
            </a>
          </div>

          {/* Status Badge */}
          <div className="mt-6 md:mt-8 animate-fade-in-up animate-delay-500">
            <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 font-medium backdrop-blur-sm text-xs sm:text-sm md:text-base">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full mr-2 md:mr-3 animate-pulse"></div>
              <span className="hidden sm:inline">Engineers Australia Assessed | Full Work Rights </span>
              <span className="sm:hidden">EA Assessed | Full Work Rights</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;