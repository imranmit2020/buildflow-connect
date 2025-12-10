import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  FileText,
  ShoppingCart,
  Users,
  DollarSign,
  Bot,
  Settings,
  Building2,
  CalendarDays,
  BarChart3,
  MessageSquare,
  Bell,
  ClipboardCheck,
  AlertTriangle,
  Shield,
  Calendar,
  UserCheck,
  BookOpen,
  Wrench,
  UserPlus,
  Truck,
  FileSpreadsheet,
  Palette,
  Calculator,
  CreditCard,
  Coins,
  ScrollText,
  ClipboardList,
  Briefcase,
  Store,
  GitBranch,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

type RoleId = "client" | "contractor" | "architect" | "designer" | "vendor" | "finance";

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  path: string;
  roles: RoleId[];
}

const allNavItems: NavItem[] = [
  // Common
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard", roles: ["client"] },
  { icon: LayoutDashboard, label: "Dashboard", path: "/contractor", roles: ["contractor"] },
  { icon: LayoutDashboard, label: "Dashboard", path: "/architect", roles: ["architect"] },
  { icon: LayoutDashboard, label: "Dashboard", path: "/designer", roles: ["designer"] },
  { icon: LayoutDashboard, label: "Dashboard", path: "/vendor", roles: ["vendor"] },
  { icon: LayoutDashboard, label: "Dashboard", path: "/finance-dashboard", roles: ["finance"] },
  
  // Marketplace
  { icon: Store, label: "Marketplace", path: "/marketplace", roles: ["client", "contractor", "architect", "designer"] },
  
  // Projects & Planning
  { icon: FolderKanban, label: "Projects", path: "/projects", roles: ["client", "contractor", "architect", "designer"] },
  { icon: CalendarDays, label: "Timeline", path: "/timeline", roles: ["client", "contractor", "architect", "designer"] },
  { icon: CheckSquare, label: "Tasks", path: "/tasks", roles: ["client", "contractor", "architect"] },
  
  // Documents & Communication
  { icon: FileText, label: "Documents", path: "/documents", roles: ["client", "contractor", "architect", "designer", "vendor", "finance"] },
  { icon: MessageSquare, label: "Messaging", path: "/messaging", roles: ["client", "contractor", "architect", "designer", "vendor", "finance"] },
  { icon: Bell, label: "Notifications", path: "/notifications", roles: ["client", "contractor", "architect", "designer", "vendor", "finance"] },
  { icon: BarChart3, label: "Reports", path: "/reports", roles: ["client", "contractor", "finance"] },
  
  // Procurement & Vendors
  { icon: ShoppingCart, label: "Procurement", path: "/procurement", roles: ["contractor", "vendor", "finance"] },
  { icon: Users, label: "Vendors", path: "/vendors", roles: ["contractor", "finance"] },
  { icon: Truck, label: "Delivery", path: "/delivery-tracking", roles: ["contractor", "vendor"] },
  
  // Site Operations
  { icon: ClipboardCheck, label: "Inspection", path: "/site-inspection", roles: ["contractor", "architect"] },
  { icon: AlertTriangle, label: "Risks", path: "/risk-management", roles: ["contractor", "architect"] },
  { icon: Shield, label: "Safety", path: "/safety-scanner", roles: ["contractor"] },
  { icon: Calendar, label: "Resources", path: "/resource-scheduling", roles: ["contractor"] },
  { icon: UserCheck, label: "Attendance", path: "/attendance", roles: ["contractor"] },
  { icon: BookOpen, label: "Logbook", path: "/daily-logbook", roles: ["contractor"] },
  { icon: Wrench, label: "Equipment", path: "/equipment-maintenance", roles: ["contractor"] },
  { icon: UserPlus, label: "Subcontract", path: "/subcontractor-assignment", roles: ["contractor"] },
  { icon: ClipboardList, label: "Handover", path: "/handover-checklist", roles: ["contractor"] },
  
  // Design & Visualization
  { icon: Palette, label: "Visualizer", path: "/visualizer", roles: ["architect", "designer"] },
  { icon: Calculator, label: "BOQ", path: "/boq-generator", roles: ["architect", "contractor"] },
  { icon: Briefcase, label: "Portfolio", path: "/portfolio", roles: ["client", "designer"] },
  
  // Finance
  { icon: DollarSign, label: "Budget", path: "/budget-planning", roles: ["contractor", "finance"] },
  { icon: CreditCard, label: "Payments", path: "/payment-release", roles: ["finance"] },
  { icon: Coins, label: "Currency", path: "/multi-currency", roles: ["finance"] },
  { icon: FileSpreadsheet, label: "Changes", path: "/change-orders", roles: ["contractor", "finance"] },
  { icon: ScrollText, label: "Audit", path: "/audit-logs", roles: ["finance"] },
  
  // AI
  { icon: Bot, label: "AI Copilot", path: "/ai-copilot", roles: ["client", "contractor", "architect", "designer", "vendor", "finance"] },
  { icon: GitBranch, label: "Workflow", path: "/workflow", roles: ["client", "contractor", "architect", "designer", "vendor", "finance"] },
];

const roles = [
  { id: "client" as RoleId, label: "Client", path: "/dashboard" },
  { id: "contractor" as RoleId, label: "Contractor", path: "/contractor" },
  { id: "architect" as RoleId, label: "Architect", path: "/architect" },
  { id: "designer" as RoleId, label: "Designer", path: "/designer" },
  { id: "vendor" as RoleId, label: "Vendor", path: "/vendor" },
  { id: "finance" as RoleId, label: "Finance", path: "/finance-dashboard" },
];

const DashboardSidebar = () => {
  const [hasNotification] = useState(true);
  
  const getInitialRole = (): typeof roles[0] => {
    const savedRoleId = localStorage.getItem("selectedRole");
    if (savedRoleId) {
      const found = roles.find(r => r.id === savedRoleId);
      if (found) return found;
    }
    return roles[0];
  };
  
  const [currentRole, setCurrentRole] = useState(getInitialRole);
  
  const handleRoleChange = (role: typeof roles[0]) => {
    setCurrentRole(role);
    localStorage.setItem("selectedRole", role.id);
  };

  const filteredNavItems = allNavItems.filter((item) => item.roles.includes(currentRole.id));

  return (
    <aside className="flex flex-col items-center h-screen w-28 bg-sidebar border-r border-sidebar-border sticky top-0 py-5">
      {/* Logo */}
      <div className="mb-6">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
          <Building2 className="w-7 h-7 text-primary-foreground" />
        </div>
      </div>

      {/* Role Switcher */}
      <div className="mb-6 w-full px-3">
        <select
          value={currentRole.id}
          onChange={(e) => {
            const role = roles.find(r => r.id === e.target.value);
            if (role) handleRoleChange(role);
          }}
          className="w-full text-[10px] font-semibold text-center bg-primary/10 border border-primary/20 rounded-lg py-2 text-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.label}
            </option>
          ))}
        </select>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-1.5 w-full px-2 overflow-y-auto scrollbar-thin">
        {filteredNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center w-full py-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              )}
              activeClassName="text-primary bg-primary/15 font-semibold shadow-sm"
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-[11px] font-medium leading-tight text-center">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="flex flex-col items-center gap-4 mt-auto pt-5 border-t border-sidebar-border w-full px-2">
        {/* Settings */}
        <NavLink
          to="/settings"
          className="p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
          activeClassName="text-primary bg-primary/15"
        >
          <Settings className="w-6 h-6" />
        </NavLink>

        {/* Notifications */}
        <NavLink
          to="/notifications"
          className="relative p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
          activeClassName="text-primary bg-primary/15"
        >
          <Bell className="w-6 h-6" />
          {hasNotification && (
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-destructive rounded-full border-2 border-sidebar" />
          )}
        </NavLink>

        {/* User Avatar */}
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mt-2 mb-3 ring-2 ring-primary/20">
          <User className="w-6 h-6 text-primary" />
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;