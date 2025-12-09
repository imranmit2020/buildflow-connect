import { 
  BarChart3, 
  Clock, 
  FileCheck, 
  Globe2, 
  Lock, 
  MessageSquare, 
  Smartphone,
  Zap 
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Live dashboards with project metrics, budget tracking, and performance insights updated in real-time.",
  },
  {
    icon: MessageSquare,
    title: "Unified Communication",
    description: "In-app messaging, comments on tasks, and notification system keeping everyone aligned.",
  },
  {
    icon: FileCheck,
    title: "Document Management",
    description: "Centralized repository for drawings, contracts, invoices with version control and approvals.",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "AI-powered scheduling with dependency tracking, resource allocation, and delay predictions.",
  },
  {
    icon: Lock,
    title: "Role-Based Security",
    description: "Granular permissions ensuring each stakeholder sees only what they need to see.",
  },
  {
    icon: Globe2,
    title: "Multi-Currency Support",
    description: "Handle international projects with automatic currency conversion and localized invoicing.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Full functionality on mobile devices for on-site updates and approvals.",
  },
  {
    icon: Zap,
    title: "API Integrations",
    description: "Connect with your existing tools - accounting software, CAD systems, and more.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            Powerful Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Build Better</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive suite of tools designed specifically for the construction industry
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-lg hover:border-accent/30 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-accent-gradient rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <Icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
