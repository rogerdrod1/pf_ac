import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden flex-shrink-0">
              <img src={logo} alt="HVAC Pro Logo" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <h1 className="text-sm sm:text-lg md:text-2xl font-bold text-foreground leading-tight">PF AIR CONDITIONING & HEATING LLC</h1>
              <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">Serving Fulshear, Katy & Surrounding Areas</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Call Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="#contact">
                Free Estimate
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="tel:+18325082699">
                <Phone className="w-4 h-4" />
                (832) 508-2699
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" asChild>
                  <a href="#contact">
                    Free Estimate
                  </a>
                </Button>
                <Button variant="hero" size="sm" asChild>
                  <a href="tel:+18325082699">
                    <Phone className="w-4 h-4" />
                    (832) 508-2699
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;