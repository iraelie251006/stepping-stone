/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-dark-green">About Stepping Stone Ltd</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stepping Stone Ltd is a newly established packaging manufacturing plant in Rwanda. 
              We are on a journey to become a leading supplier of sustainable packaging solutions.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-dark-green bg-light-green/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-dark-green mt-1" />
                  <div>
                    <h3 className="font-bold text-dark-green mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To provide innovative, sustainable packaging solutions that protect products 
                      while minimizing environmental impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-dark-yellow bg-dark-yellow/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Eye className="w-6 h-6 text-dark-yellow mt-1" />
                  <div>
                    <h3 className="font-bold text-dark-green mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To become Rwanda&apos;s premier packaging manufacturer, known for quality, 
                      sustainability, and exceptional customer service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-dark-green bg-light-green/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-dark-green mt-1" />
                  <div>
                    <h3 className="font-bold text-dark-green mb-2">Our Values</h3>
                    <p className="text-muted-foreground">
                      Quality craftsmanship, environmental responsibility, customer satisfaction, 
                      and continuous innovation in everything we do.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-yellow/20 to-dark-green/20 rounded-2xl transform -rotate-3"></div>
          <img 
            src='/SteppingStone logo.png'
            alt="Various packaging products"
            className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;