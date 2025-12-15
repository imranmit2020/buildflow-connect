import { Linkedin, Twitter, Youtube, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-foreground text-lg mb-2">Construq</h3>
            <p className="text-muted-foreground text-sm flex items-center gap-1 mb-6">
              <MapPin className="w-3 h-3" /> Dubai, UAE
            </p>
            
            <div className="flex gap-3 mb-3">
              {[Twitter, Youtube, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-xs">© 2025 Construq</p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-medium text-foreground text-sm mb-3">Products</h4>
            <ul className="space-y-2">
              {["Project Management", "AI Copilot", "Marketplace", "Analytics"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-medium text-foreground text-sm mb-3">Solutions</h4>
            <ul className="space-y-2">
              {["For Contractors", "For Architects", "For Vendors", "Enterprise"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-medium text-foreground text-sm mb-3">Company</h4>
            <ul className="space-y-2">
              {["About", "Careers", "Blog", "Press"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-medium text-foreground text-sm mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@construq.com" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  hello@construq.com
                </a>
              </li>
              <li>
                <a href="mailto:support@construq.com" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  support@construq.com
                </a>
              </li>
              <li>
                <a href="mailto:sales@construq.com" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
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
