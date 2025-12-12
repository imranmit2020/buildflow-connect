import { Sparkles, ShoppingCart, DollarSign, Check, ArrowUpRight, Bot, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Project Orchestration",
    description: "Intelligent automation that predicts, optimizes, and executes with precision.",
    gradient: "from-primary to-primary/60",
    items: ["Predictive delay analysis", "Smart task assignment", "Real-time schedule optimization"],
  },
  {
    icon: ShoppingCart,
    title: "Smart Procurement",
    description: "End-to-end material management with AI-powered vendor selection.",
    gradient: "from-accent to-accent/60",
    items: ["Auto-generated BOQ", "AI vendor comparison", "Live delivery tracking"],
  },
  {
    icon: DollarSign,
    title: "Financial Intelligence",
    description: "Complete financial visibility with automated compliance and forecasting.",
    gradient: "from-gold to-gold/80",
    items: ["Automated payments", "Variance forecasting", "Invoice verification"],
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Core Capabilities</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Construction Projects That
            <br />
            <span className="text-gradient">Run Themselves</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Harness the power of AI to automate complex workflows, reduce costs, and deliver projects on time.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-card rounded-3xl p-8 border border-border shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  {feature.title}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-3">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Bottom stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-border">
          {[
            { label: "Faster Project Delivery", value: "40%" },
            { label: "Cost Savings", value: "25%" },
            { label: "Reduced Manual Work", value: "60%" },
            { label: "Higher Accuracy", value: "99%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;