import { Sparkles, ShoppingCart, DollarSign, Check } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Project Orchestration",
    color: "bg-violet-100",
    iconColor: "text-violet-600",
    items: ["Predicts delays", "Flags assigning tasks", "Optimizes schedule"],
  },
  {
    icon: ShoppingCart,
    title: "Smart Procurement",
    color: "bg-teal-100",
    iconColor: "text-teal-600",
    items: ["Auto-generated BOQ", "Vendor comparison", "Real-time delivery tracking"],
  },
  {
    icon: DollarSign,
    title: "Financial Control",
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
    items: ["Automated payments", "Variance forecasting", "Invoice-milestone verification"],
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Finally—Construction{" "}
            <span className="block">Projects That Run Themselves.</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-5`}>
                  <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                      <Check className="w-4 h-4 text-teal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
