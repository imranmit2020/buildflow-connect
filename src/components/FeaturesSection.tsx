import { Sparkles, ShoppingCart, DollarSign, Check, ArrowRight, Brain, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Project Orchestration",
    description: "Intelligent automation that predicts, optimizes, and executes.",
    items: ["Predictive delay analysis", "Smart task assignment", "Auto-optimized scheduling"],
  },
  {
    icon: ShoppingCart,
    title: "Smart Procurement",
    description: "From BOQ to delivery, completely automated.",
    items: ["AI-generated BOQ", "Real-time vendor comparison", "Live delivery tracking"],
  },
  {
    icon: DollarSign,
    title: "Financial Intelligence",
    description: "Complete visibility and control over project finances.",
    items: ["Automated milestone payments", "Variance forecasting", "Invoice verification"],
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
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Intelligent Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4 tracking-tight">
            Construction projects that
            <span className="font-serif italic text-primary"> run themselves</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            AI-powered automation for every stage of your construction workflow.
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
            { icon: Zap, value: '60%', label: 'Faster project delivery' },
            { icon: DollarSign, value: '35%', label: 'Cost reduction' },
            { icon: Shield, value: '99.9%', label: 'Platform uptime' },
            { icon: Brain, value: '24/7', label: 'AI assistance' },
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
