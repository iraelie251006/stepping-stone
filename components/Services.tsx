import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Shield, Recycle, Truck, Settings, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Custom Packaging",
      description: "Tailored packaging solutions designed specifically for your products and brand requirements."
    },
    {
      icon: Shield,
      title: "Protective Solutions", 
      description: "Durable packaging that ensures your products arrive safely at their destination."
    },
    {
      icon: Recycle,
      title: "Eco-Friendly Materials",
      description: "Sustainable packaging options that reduce environmental impact while maintaining quality."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick turnaround times and reliable delivery services across Rwanda."
    },
    {
      icon: Settings,
      title: "Custom Design",
      description: "Professional design services to create packaging that represents your brand perfectly."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you with all your packaging needs."
    }
  ];

  return (
    <section id="services" className="bg-muted/30">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold text-dark-green">Our Services</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive packaging solutions to meet all your business requirements
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-smooth hover:-translate-y-1 bg-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-dark-green to-dark-yellow rounded-full flex items-center justify-center">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-dark-green">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;