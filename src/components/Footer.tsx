import { Building2, Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "API Reference", "Guides", "Webinars", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "GDPR"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-background">
                BuildFlow
              </span>
            </a>
            <p className="text-background/60 mb-6 max-w-xs">
              The unified construction platform connecting every stakeholder in your project ecosystem.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-background mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/60 hover:text-accent transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © 2024 BuildFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/40">
            <span>🌍 Global</span>
            <span>🔒 SOC 2 Certified</span>
            <span>⚡ 99.9% Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
