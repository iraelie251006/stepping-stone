"use client";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-green text-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-white to-dark-yellow rounded-lg"></div>
              <div>
                <h3 className="text-lg font-bold">Stepping Stone Ltd</h3>
                <p className="text-sm text-white/80">Made by us for you</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Leading supplier of sustainable packaging solutions in Rwanda. 
              We&apos;re committed to quality, innovation, and environmental responsibility.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-smooth"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-smooth"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-smooth"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/70 hover:text-white transition-smooth"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-dark-yellow" />
                <span className="text-white/70">Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-dark-yellow" />
                <span className="text-white/70">+250 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-dark-yellow" />
                <span className="text-white/70">info@steppingstoneltd.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70">
            © 2024 Stepping Stone Ltd. All rights reserved. Built with sustainability in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;