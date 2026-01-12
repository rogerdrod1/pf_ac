import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Clock, DollarSign, Wrench } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Over a decade of professional HVAC service with thousands of satisfied customers."
  },
  {
    icon: CheckCircle,
    title: "Licensed & Certified", 
    description: "Fully licensed technicians with ongoing training and industry certifications."
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Round-the-clock emergency repairs because comfort can't wait."
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No hidden fees or surprises. You'll know the cost before we start work."
  },
  {
    icon: Wrench,
    title: "Quality Workmanship",
    description: "We use premium parts and follow industry best practices for lasting results."
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "100% satisfaction guarantee with friendly, professional service every time."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Why Choose Our HVAC Services?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            We're committed to providing exceptional HVAC services that exceed expectations.
            Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="mb-3 sm:mb-4 mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div className="group">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
              2000+
            </div>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">Happy Customers</p>
          </div>
          <div className="group">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
              15+
            </div>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">Years Experience</p>
          </div>
          <div className="group">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">Emergency Service</p>
          </div>
          <div className="group">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;