import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 md:py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h2 className="text-lg md:text-xl font-bold leading-tight">PF AIR CONDITIONING & HEATING LLC</h2>
              <p className="text-xs md:text-sm text-white/80 mt-1">Serving Fulshear, Katy & Surrounding Areas</p>
            </div>
            <p className="text-sm md:text-base text-white/80">
              Your trusted partner for all heating, ventilation, and air conditioning needs.
              Professional service with guaranteed satisfaction.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="p-2 h-auto text-white hover:bg-white/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto text-white hover:bg-white/20">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto text-white hover:bg-white/20">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Our Services</h3>
            <ul className="space-y-2 text-sm md:text-base text-white/80">
              <li><a href="#services" className="hover:text-white transition-colors">Heating Installation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AC Installation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">System Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Maintenance Plans</a></li>
              <li><a href="tel:+18325082699" className="hover:text-white transition-colors">Emergency Service</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Ventilation Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Free Estimates</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="tel:+18325082699" className="hover:text-white transition-colors">Emergency Service</a></li>
              <li><a href="#home" className="hover:text-white transition-colors">Back to Top</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+18325082699" className="font-semibold hover:underline">(832) 508-2699</a>
                  <p className="text-sm text-white/80">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:roger@pfairconditioning.com" className="font-semibold hover:underline break-all">roger@pfairconditioning.com</a>
                  <p className="text-sm text-white/80">Quick Response</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Fulshear, Katy & Surrounding Areas</p>
                  <p className="text-sm text-white/80">Southwest Harris County</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Mon-Fri: 8AM-6PM</p>
                  <p className="text-sm text-white/80">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm md:text-base">
                © 2026 PF AIR CONDITIONING & HEATING LLC. All rights reserved. Licensed & Insured.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white/80 text-xs md:text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;