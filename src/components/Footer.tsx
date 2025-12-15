import { Building2, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg text-background">Construq</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">About</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">Features</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">Pricing</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">Contact</a>
          </div>

          {/* Social & Copyright */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {[Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4 text-background" />
                </a>
              ))}
            </div>
            <span className="text-background/40 text-sm">© 2024 Construq</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
