import { 
  TrendingUp, 
  Zap, 
  Layers, 
  User,
  CheckCircle2,
  FileText,
  PlusCircle,
  Bot,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  {
    title: "Clients",
    subtitle: "Real-time project visibility",
    icon: TrendingUp,
    gradient: "from-primary to-primary/60",
  },
  {
    title: "Contractors",
    subtitle: "Unified team coordination",
    icon: Zap,
    gradient: "from-accent to-accent/60",
  },
  {
    title: "Architects",
    subtitle: "Seamless design integration",
    icon: Layers,
    gradient: "from-primary to-accent",
  },
  {
    title: "Interior Designers",
    subtitle: "Client collaboration hub",
    icon: User,
    gradient: "from-gold to-gold/80",
  },
  {
    title: "Vendors",
    subtitle: "Automated BOQ tracking",
    icon: CheckCircle2,
    gradient: "from-accent to-accent/60",
  },
  {
    title: "Subcontractors",
    subtitle: "Live document access",
    icon: FileText,
    gradient: "from-primary to-primary/60",
  },
  {
    title: "Finance Teams",
    subtitle: "Invoice automation",
    icon: PlusCircle,
    gradient: "from-gold to-gold/80",
  },
  {
    title: "AI Copilot",
    subtitle: "24/7 intelligent assistant",
    icon: Bot,
    gradient: "from-primary to-accent",
  },
];

const RolesSection = () => {
  return (
    <section id="roles" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <User className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Role-Based Solutions</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for Every Role in the
            <br />
            <span className="text-gradient">Construction Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored experiences that empower every stakeholder with the tools they need to excel.
          </p>
        </div>

        {/* Roles grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto mb-16">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className="group bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {role.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {role.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 shadow-glow group">
            Explore All Solutions
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;