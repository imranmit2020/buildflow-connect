import { Linkedin, Twitter, Youtube, Instagram, MapPin } from "lucide-react";
import footerBg from "@/assets/footer-bg.jpg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-primary/80" />
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border border-white/20 rotate-45 -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-white/20 rotate-12 translate-x-32 translate-y-32" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 border border-white/10 -rotate-12" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-white text-xl mb-2">Construq</h3>
            <p className="text-white/70 text-sm flex items-center gap-1 mb-6">
              <MapPin className="w-3 h-3" /> Dubai, UAE
            </p>
            
            <div className="flex gap-3 mb-4">
              {[Twitter, Youtube, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-white/50 text-xs">© 2025 Construq</p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-medium text-white text-sm mb-4">Products</h4>
            <ul className="space-y-3">
              {["Project Management", "AI Copilot", "Marketplace", "Analytics"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-medium text-white text-sm mb-4">Solutions</h4>
            <ul className="space-y-3">
              {["For Contractors", "For Architects", "For Vendors", "Enterprise"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-medium text-white text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {["About", "Careers", "Blog", "Press"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-medium text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@construq.com" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                  hello@construq.com
                </a>
              </li>
              <li>
                <a href="mailto:support@construq.com" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                  support@construq.com
                </a>
              </li>
              <li>
                <a href="mailto:sales@construq.com" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                  sales@construq.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
