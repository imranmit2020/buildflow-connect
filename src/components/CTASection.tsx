import { Check, BarChart3, Search, Truck } from "lucide-react";

const modules = [
  {
    title: "Project Management",
    subtitle: "Pillars of smart work",
    icon: BarChart3,
    color: "from-yellow-400 to-teal-400",
    features: ["Task auto assign", "Manage Slippages"],
  },
  {
    title: "Material Procurement",
    subtitle: "Auto-generated BOQ",
    icon: Search,
    features: ["Real-time-insights", "Variance alerts", "Milestone: Based"],
    hasSubItems: true,
    subItems: ["Vendor-spense", "Delivery meeting map"],
  },
  {
    title: "Financial Intelligence",
    subtitle: "",
    icon: BarChart3,
    features: ["Real-time Insights", "Variance alerts", "Milestone Based Payments"],
    hasChart: true,
  },
];

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
            For Requisite Management
          </h2>
        </div>

        {/* Modules grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Project Management */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-lg text-slate-900 mb-1">Project Management</h3>
            <p className="text-sm text-slate-500 mb-6">Pillars of smart work</p>
            
            {/* Mini chart visualization */}
            <div className="flex items-end gap-1 h-24 mb-6">
              {[40, 60, 35, 80, 55, 70, 45, 85, 50].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-yellow-400 to-teal-400 rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <Check className="w-4 h-4 text-teal-500" />
                Task auto assign
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <Check className="w-4 h-4 text-teal-500" />
                Manage Slippages
              </li>
            </ul>
          </div>

          {/* Material Procurement */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-lg text-slate-900 mb-1">Material Procurement</h3>
            <p className="text-sm text-slate-500 mb-6">Auto-generated BOQ</p>
            
            {/* Sub items */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                <Search className="w-4 h-4 text-teal-500" />
                <span className="text-sm text-slate-700">Vendor-spense</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                <Truck className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-slate-700">Delivery meeting map</span>
              </div>
            </div>

            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <Check className="w-4 h-4 text-teal-500" />
                Real-time-insights
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <Check className="w-4 h-4 text-teal-500" />
                Variance alerts
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <Check className="w-4 h-4 text-teal-500" />
                Milestone: Based
              </li>
            </ul>
          </div>

          {/* Financial Intelligence */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-lg text-slate-900 mb-1">Financial Intelligence</h3>
            <p className="text-sm text-slate-500 mb-6">&nbsp;</p>
            
            {/* Bar chart visualization */}
            <div className="flex items-end justify-center gap-3 h-24 mb-6">
              <div className="w-8 bg-gradient-to-t from-teal-500 to-teal-300 rounded-t h-16" />
              <div className="w-8 bg-gradient-to-t from-teal-500 to-teal-300 rounded-t h-20" />
              <div className="w-8 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t h-12" />
              <div className="w-8 bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-t h-8" />
            </div>

            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <Check className="w-4 h-4 text-teal-500" />
                Real-time Insights
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <Check className="w-4 h-4 text-teal-500" />
                Variance alerts
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <Check className="w-4 h-4 text-teal-500" />
                Milestone Based Payments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
