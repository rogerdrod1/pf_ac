import { Button } from "@/components/ui/button";
import { Phone, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hvac-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Emergency Banner */}
          <div className="mb-6 md:mb-8 inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/20">
            <Clock className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base font-semibold">24/7 Emergency Service Available</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2">
            Fulshear & Katy's Trusted
            <span className="block text-secondary">HVAC Experts</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto px-4">
            Serving Fulshear, Katy, and surrounding Texas areas with professional heating, ventilation, and air conditioning services. Fast, reliable, and affordable solutions for your home and business.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-6 md:mb-8 text-white/80 px-4">
            <div className="flex items-center gap-1 md:gap-2">
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-current text-secondary flex-shrink-0" />
              <span className="text-xs md:text-base font-semibold">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-current text-secondary flex-shrink-0" />
              <span className="text-xs md:text-base font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-current text-secondary flex-shrink-0" />
              <span className="text-xs md:text-base font-semibold">100% Satisfaction Guaranteed</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <Button variant="emergency" size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4" asChild>
              <a href="tel:+18325082699">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Call Now: (832) 508-2699
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
              <a href="#contact">
                Free Estimate
              </a>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;