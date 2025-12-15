import { Linkedin, Twitter, Youtube, Instagram, MapPin } from "lucide-react";
import footerBg from "@/assets/footer-bg.jpg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      
      {/* Dark base */}
      <div className="absolute inset-0 bg-slate-900" style={{ zIndex: -1 }} />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/80" />
      
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
