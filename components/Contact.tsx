import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-muted/30">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold text-dark-green">Get In Touch</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to start your packaging project? Contact us today for a personalized quote
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-dark-green mx-auto mb-3" />
                <h3 className="font-bold text-dark-green mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">
                  Kigali, Rwanda<br />
                  Industrial Zone
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-dark-yellow mx-auto mb-3" />
                <h3 className="font-bold text-dark-green mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">
                  +250 XXX XXX XXX<br />
                  Available 24/7
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-dark-green mx-auto mb-3" />
                <h3 className="font-bold text-dark-green mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">
                  info@steppingstoneltd.com<br />
                  quotes@steppingstoneltd.com
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-dark-yellow mx-auto mb-3" />
                <h3 className="font-bold text-dark-green mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon-Fri: 8AM-6PM<br />
                  Sat: 9AM-4PM
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Google Maps Embed */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-dark-green">Find Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63855.01244910245!2d30.013840899999997!3d-1.9440269999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Contact Form */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-dark-green">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-dark-green">First Name</label>
                <Input placeholder="John" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium text-dark-green">Last Name</label>
                <Input placeholder="Doe" className="mt-1" />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-dark-green">Email</label>
              <Input type="email" placeholder="john@example.com" className="mt-1" />
            </div>
            
            <div>
              <label className="text-sm font-medium text-dark-green">Phone</label>
              <Input type="tel" placeholder="+250 XXX XXX XXX" className="mt-1" />
            </div>
            
            <div>
              <label className="text-sm font-medium text-dark-green">Subject</label>
              <Input placeholder="Packaging Quote Request" className="mt-1" />
            </div>
            
            <div>
              <label className="text-sm font-medium text-dark-green">Message</label>
              <Textarea 
                placeholder="Tell us about your packaging needs..."
                className="mt-1 min-h-[120px]"
              />
            </div>
            
            <Button className="w-full bg-dark-green hover:bg-dark-green/90 text-white brand-shadow">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;