"use client";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-dark-green to-dark-yellow rounded-lg"></div>
            <div>
              <h1 className="text-lg font-bold text-dark-green">Stepping Stone Ltd</h1>
              <p className="text-xs text-muted-foreground">Made by us for you</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-dark-green transition-smooth"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-dark-green transition-smooth"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-dark-green transition-smooth"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-dark-green transition-smooth"
            >
              Contact
            </button>
          </nav>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-dark-green hover:bg-dark-green/90 text-white"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;