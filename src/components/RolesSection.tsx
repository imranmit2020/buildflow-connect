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
import { HardHat } from "lucide-react";
import { Link } from "react-router-dom";

const roles = [
  {
    title: "Client",
    subtitle: "Frequent schedulers",
    icon: TrendingUp,
    color: "bg-teal-500",
    path: "/dashboard",
  },
  {
    title: "Contractor",
    subtitle: "Uncoordinated teams",
    icon: Zap,
    color: "bg-teal-500",
    path: "/contractor-dashboard",
  },
  {
    title: "Architect",
    subtitle: "Costly design errors",
    icon: Layers,
    color: "bg-teal-500",
    path: "/architect-dashboard",
  },
  {
    title: "Interior Designer",
    subtitle: "Client Recession",
    icon: User,
    color: "bg-orange-400",
    path: "/interior-designer-dashboard",
  },
  {
    title: "Labor",
    subtitle: "AI-Matched Hiring",
    icon: HardHat,
    color: "bg-blue-500",
    path: "/labor-dashboard",
  },
  {
    title: "Vendor",
    subtitle: "Manual BOQ-tracking",
    icon: CheckCircle2,
    color: "bg-teal-500",
    path: "/vendor-dashboard",
  },
  {
    title: "Subcontractor",
    subtitle: "Outdated documents",
    icon: FileText,
    color: "bg-teal-500",
    path: "/contractor-dashboard",
  },
  {
    title: "Finance",
    subtitle: "Invoice-chaining",
    icon: PlusCircle,
    color: "bg-teal-500",
    path: "/finance-dashboard",
  },
  {
    title: "Data Labeling",
    subtitle: "ML Training Data",
    icon: LayoutGrid,
    color: "bg-purple-500",
    path: "/data-labeling",
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
              <Link
                to={role.path}
                key={role.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <p className="font-semibold text-slate-900 mb-1">{role.title}</p>
                <p className="text-sm text-slate-500 mb-4">{role.subtitle}</p>
                <div className={`w-14 h-14 ${role.color} rounded-2xl flex items-center justify-center mx-auto`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
