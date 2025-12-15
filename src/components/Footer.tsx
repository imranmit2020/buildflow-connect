import { Building2, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "API Reference", "Guides", "Webinars", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "GDPR"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 tracking-tight">
              Ready to build{" "}
              <span className="font-serif italic text-primary-foreground/80">smarter</span>?
            </h2>
            <p className="text-background/60 mb-8 text-lg">
              Join hundreds of construction teams already transforming their workflows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base font-medium rounded-xl group"
              >
                Request a demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-background/20 text-background hover:bg-background/10 px-8 py-6 text-base font-medium rounded-xl"
              >
                Contact sales
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-xl text-background">
                Construq
              </span>
            </a>
            <p className="text-background/60 mb-6 max-w-xs text-sm leading-relaxed">
              The unified AI-powered construction platform connecting every stakeholder in your project ecosystem.
            </p>
            <div className="flex gap-2">
              {[Twitter, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Icon className="w-4 h-4 text-background" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium text-background mb-4 text-sm">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/60 hover:text-background transition-colors duration-200 text-sm"
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
            © 2024 Construq. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/40">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>All systems operational</span>
            </div>
            <span>SOC 2 Type II</span>
            <span>99.9% Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
