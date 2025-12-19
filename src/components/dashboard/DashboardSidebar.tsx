import { useState } from "react";
import { Link } from "react-router-dom";
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
  HardHat,
  Award,
  ScanSearch,
} from "lucide-react";
import { cn } from "@/lib/utils";

type RoleId = "client" | "contractor" | "architect" | "designer" | "vendor" | "finance" | "labor";

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
  { icon: LayoutDashboard, label: "Dashboard", path: "/labor", roles: ["labor"] },
  
  // Marketplace
  { icon: Store, label: "Marketplace", path: "/marketplace", roles: ["client", "contractor", "architect", "designer"] },
  { icon: HardHat, label: "Hire Labor", path: "/labor-marketplace", roles: ["client", "contractor"] },
  
  // Labor specific
  { icon: Briefcase, label: "My Jobs", path: "/labor", roles: ["labor"] },
  { icon: Award, label: "Profile", path: "/labor", roles: ["labor"] },
  { icon: Calendar, label: "Availability", path: "/labor", roles: ["labor"] },
  
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
  { icon: ScanSearch, label: "Data Labeling", path: "/data-labeling", roles: ["contractor", "architect"] },
];

const roles = [
  { id: "client" as RoleId, label: "Client", path: "/dashboard" },
  { id: "contractor" as RoleId, label: "Contractor", path: "/contractor" },
  { id: "architect" as RoleId, label: "Architect", path: "/architect" },
  { id: "designer" as RoleId, label: "Designer", path: "/designer" },
  { id: "vendor" as RoleId, label: "Vendor", path: "/vendor" },
  { id: "finance" as RoleId, label: "Finance", path: "/finance-dashboard" },
  { id: "labor" as RoleId, label: "Labor", path: "/labor" },
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
    <aside className="flex flex-col items-center h-screen w-32 bg-background border-r border-border sticky top-0 py-8">
      {/* Logo */}
      <Link to="/" className="mb-8">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
          <Building2 className="w-6 h-6 text-primary-foreground" />
        </div>
      </Link>

      {/* Role Switcher */}
      <div className="mb-4 w-full px-2">
        <select
          value={currentRole.id}
          onChange={(e) => {
            const role = roles.find(r => r.id === e.target.value);
            if (role) handleRoleChange(role);
          }}
          className="w-full text-[11px] font-medium text-center bg-transparent border border-border rounded-md py-1.5 px-1 text-foreground cursor-pointer focus:outline-none focus:border-primary"
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.label}
            </option>
          ))}
        </select>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 flex flex-col items-center w-full px-3 overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]">
        {filteredNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center w-full py-4 text-muted-foreground hover:text-primary transition-colors duration-200"
              activeClassName="text-primary bg-primary/10 rounded-xl"
            >
              <Icon className="w-6 h-6 mb-1.5 stroke-[1.5]" />
              <span className="text-[11px] font-normal">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="flex flex-col items-center gap-5 mt-auto pt-6">
        {/* Settings */}
        <NavLink
          to="/settings"
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          activeClassName="text-primary"
        >
          <Settings className="w-5 h-5 stroke-[1.5]" />
        </NavLink>

        {/* Notifications */}
        <NavLink
          to="/notifications"
          className="relative text-muted-foreground hover:text-foreground transition-colors duration-200"
          activeClassName="text-primary"
        >
          <Bell className="w-5 h-5 stroke-[1.5]" />
          {hasNotification && (
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-destructive rounded-full" />
          )}
        </NavLink>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mt-4 mb-4">
          <User className="w-5 h-5 text-muted-foreground stroke-[1.5]" />
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;