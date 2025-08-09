"use client"
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-light-green to-background">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl lg:text-6xl font-bold text-dark-green leading-tight">
              Professional
              <span className="block text-dark-yellow">Packaging</span>
              <span className="block">Solutions</span>
            </h1>
            <p className="text-xl text-dark-green/80 font-medium">Made by us for you</p>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Stepping Stone Ltd is your trusted partner for sustainable packaging solutions in Rwanda. 
            We manufacture high-quality boxes and packaging materials tailored to your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-dark-green hover:bg-dark-green/90 text-white brand-shadow"
            >
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-dark-green text-dark-green hover:bg-dark-green hover:text-white"
            >
              View Our Services
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-dark-green">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-dark-green">100%</div>
              <div className="text-sm text-muted-foreground">Sustainable</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-dark-green">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-green/20 to-dark-yellow/20 rounded-2xl transform rotate-3"></div>
          <img 
            src='/SteppingStone logo.png'
            alt="Professional packaging warehouse"
            className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;