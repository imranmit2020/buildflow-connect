import { 
  TrendingUp, 
  Zap, 
  Layers, 
  User,
  CheckCircle2,
  FileText,
  PlusCircle,
  LayoutGrid
} from "lucide-react";

const roles = [
  {
    title: "Client",
    subtitle: "Frequent schedulers",
    icon: TrendingUp,
    color: "bg-teal-500",
  },
  {
    title: "Contractor",
    subtitle: "Uncoordinated teams",
    icon: Zap,
    color: "bg-teal-500",
  },
  {
    title: "Architect",
    subtitle: "Costly design errors",
    icon: Layers,
    color: "bg-teal-500",
  },
  {
    title: "Interior Designer",
    subtitle: "Client Recession",
    icon: User,
    color: "bg-orange-400",
  },
  {
    title: "Vendor",
    subtitle: "Manual BOQ-tracking",
    icon: CheckCircle2,
    color: "bg-teal-500",
  },
  {
    title: "Subcontractor",
    subtitle: "Outdated documents",
    icon: FileText,
    color: "bg-teal-500",
  },
  {
    title: "Finance",
    subtitle: "Invoice-chaining",
    icon: PlusCircle,
    color: "bg-teal-500",
  },
  {
    title: "AI Copilot",
    subtitle: "(OI./Bin)",
    icon: LayoutGrid,
    color: "bg-teal-500",
  },
];

const RolesSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
            Made for Every Role in the Build Cycle
          </h2>
        </div>

        {/* Roles grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-slate-900 mb-1">{role.title}</p>
                <p className="text-sm text-slate-500 mb-4">{role.subtitle}</p>
                <div className={`w-14 h-14 ${role.color} rounded-2xl flex items-center justify-center mx-auto`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
