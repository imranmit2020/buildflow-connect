import { Sparkles, ShoppingCart, DollarSign, Check, ArrowRight, Brain, Zap, Shield, Bot, Network, Eye } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Autonomous Schedule Agent",
    description: "Self-optimizing AI that continuously plans, adjusts, and executes project timelines.",
    items: ["Auto-reschedules around delays", "Proactive resource allocation", "24/7 timeline optimization"],
  },
  {
    icon: Network,
    title: "Procurement Agent Swarm",
    description: "Multiple AI agents working in parallel to source, compare, and negotiate.",
    items: ["Multi-vendor negotiation", "Autonomous reordering", "Price anomaly detection"],
  },
  {
    icon: Eye,
    title: "Predictive Risk Agent",
    description: "Always-on monitoring that detects, prevents, and resolves issues before they happen.",
    items: ["Early warning system", "Auto-mitigation actions", "Learning from patterns"],
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Bot className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Multi-Agent Architecture</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4 tracking-tight">
            Specialized AI agents that
            <span className="font-serif italic text-primary"> think, act, and learn</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Deploy autonomous agents that collaborate, make decisions, and continuously improve your operations.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  {feature.description}
                </p>
                
                <ul className="space-y-2.5">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Bot, value: '15+', label: 'Specialized AI agents' },
            { icon: Zap, value: '10K+', label: 'Autonomous decisions/day' },
            { icon: Shield, value: '94%', label: 'Issues auto-resolved' },
            { icon: Brain, value: '24/7', label: 'Always learning' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-semibold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
