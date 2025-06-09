import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Get In Touch</h3>
            <div className="space-y-4">
              <a href="mailto:mibhu27@gmail.com" className="flex items-center text-blue-200 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                mibhu27@gmail.com
              </a>
              <a href="tel:+610481136997" className="flex items-center text-blue-200 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                +61 0481 136 997
              </a>
              <div className="flex items-center text-blue-200">
                <MapPin className="w-5 h-5 mr-3" />
                Brisbane, QLD, Australia
              </div>
            </div>
          </div>

          {/* Professional Status */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Professional Status</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-blue-200">Available for Opportunities</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                <span className="text-blue-200">Engineers Australia Assessed</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-blue-200">Full Work Rights</span>
              </div>
              <div className="text-sm text-blue-300 mt-4 p-3 bg-blue-900/50 rounded-lg border border-blue-700">
                Open to any opportunity, including unpaid internships. Immediately available to start.
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Connect</h3>
            <div className="flex space-x-6">
              {/* <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110 group">
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a> */}
              {/* <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110 group">
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a> */}
              <a href="mailto:mibhu27@gmail.com"
                 className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 hover:scale-110 group">
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-200 mb-2">
            &copy; 2025 Manikandaprabhu Balu. All rights reserved.
          </p>
          {/* <p className="text-blue-300 text-sm flex items-center justify-center">
            Built with <Heart className="w-4 h-4 mx-1 text-red-400" /> and modern web technologies
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;