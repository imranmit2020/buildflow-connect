import { 
  Users, 
  HardHat, 
  Ruler, 
  Palette, 
  Package, 
  Wrench,
  DollarSign,
  ArrowRight 
} from "lucide-react";
import { useState } from "react";

const roles = [
  {
    id: "client",
    icon: Users,
    title: "Client",
    description: "Full visibility into project progress, budget tracking, and approval workflows",
    features: ["Real-time budget tracking", "Project status dashboard", "Approval workflows", "Document access"],
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    id: "contractor",
    icon: HardHat,
    title: "Contractor",
    description: "Streamlined task management, payments, and subcontractor coordination",
    features: ["Task management", "Payment tracking", "Subcontractor coordination", "Schedule optimization"],
    color: "from-amber-500 to-orange-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    id: "architect",
    icon: Ruler,
    title: "Architect",
    description: "Centralized drawings, revision tracking, and design approval workflows",
    features: ["Drawing management", "Revision tracking", "Approval workflows", "Design collaboration"],
    color: "from-violet-500 to-purple-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
  },
  {
    id: "designer",
    icon: Palette,
    title: "Interior Designer",
    description: "3D render sharing, material selection, and vendor synchronization",
    features: ["3D render uploads", "Material selection", "Vendor sync", "Client presentations"],
    color: "from-pink-500 to-rose-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
  },
  {
    id: "vendor",
    icon: Package,
    title: "Vendors",
    description: "Material delivery tracking, invoicing, and pricing updates",
    features: ["Delivery tracking", "Invoice management", "Pricing updates", "Order history"],
    color: "from-emerald-500 to-green-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    id: "subcontractor",
    icon: Wrench,
    title: "Subcontractors",
    description: "Task assignments, scheduling, and payment tracking",
    features: ["Task assignments", "Schedule access", "Payment tracking", "Progress updates"],
    color: "from-slate-500 to-gray-400",
    bgColor: "bg-slate-500/10",
    borderColor: "border-slate-500/20",
  },
  {
    id: "finance",
    icon: DollarSign,
    title: "Finance Team",
    description: "Comprehensive AP/AR, payroll, bills, invoices, and forecasting",
    features: ["AP/AR management", "Payroll processing", "Invoice tracking", "Financial forecasting"],
    color: "from-teal-500 to-cyan-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
  },
];

const RolesSection = () => {
  const [activeRole, setActiveRole] = useState(roles[0]);

  return (
    <section id="roles" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-steel-blue/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4">
            Role-Based Access
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            One Platform,{" "}
            <span className="text-gradient">Every Stakeholder</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Purpose-built dashboards and workflows for each role in your
            construction ecosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Role selector - left column */}
          <div className="lg:col-span-2 space-y-3">
            {roles.map((role) => {
              const Icon = role.icon;
              const isActive = activeRole.id === role.id;
              
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group ${
                    isActive
                      ? `${role.bgColor} ${role.borderColor} shadow-card`
                      : "bg-card border-border hover:border-accent/30 hover:bg-secondary/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}
                    >
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-foreground">
                        {role.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {role.description}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 transition-all ${
                        isActive
                          ? "text-foreground translate-x-0"
                          : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Role details - right column */}
          <div className="lg:col-span-3">
            <div
              className={`${activeRole.bgColor} ${activeRole.borderColor} border rounded-2xl p-8 h-full animate-scale-in`}
              key={activeRole.id}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeRole.color} flex items-center justify-center shadow-xl`}
                >
                  <activeRole.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {activeRole.title} Portal
                  </h3>
                  <p className="text-muted-foreground">
                    {activeRole.description}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {activeRole.features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-4 bg-card/50 rounded-xl border border-border/50 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${activeRole.color} flex items-center justify-center`}
                    >
                      <span className="text-accent-foreground font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <span className="font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Mock dashboard preview */}
              <div className="bg-card rounded-xl border border-border p-4 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-destructive/60" />
                  <div className="w-2 h-2 rounded-full bg-amber-primary/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  <span className="text-xs text-muted-foreground ml-2">
                    {activeRole.title} Dashboard
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 bg-secondary rounded-lg" />
                  <div className="h-16 bg-secondary rounded-lg" />
                  <div className="h-16 bg-secondary rounded-lg" />
                </div>
                <div className="h-24 bg-secondary rounded-lg mt-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
