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
  ChevronLeft,
  ChevronRight,
  Building2,
  LogOut,
  ChevronDown,
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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  { icon: Truck, label: "Delivery Tracking", path: "/delivery-tracking", roles: ["contractor", "vendor"] },
  
  // Site Operations
  { icon: ClipboardCheck, label: "Site Inspection", path: "/site-inspection", roles: ["contractor", "architect"] },
  { icon: AlertTriangle, label: "Risk Management", path: "/risk-management", roles: ["contractor", "architect"] },
  { icon: Shield, label: "Safety Scanner", path: "/safety-scanner", roles: ["contractor"] },
  { icon: Calendar, label: "Resource Scheduling", path: "/resource-scheduling", roles: ["contractor"] },
  { icon: UserCheck, label: "Attendance", path: "/attendance", roles: ["contractor"] },
  { icon: BookOpen, label: "Daily Logbook", path: "/daily-logbook", roles: ["contractor"] },
  { icon: Wrench, label: "Equipment Maintenance", path: "/equipment-maintenance", roles: ["contractor"] },
  { icon: UserPlus, label: "Subcontractor Assignment", path: "/subcontractor-assignment", roles: ["contractor"] },
  { icon: ClipboardList, label: "Handover Checklist", path: "/handover-checklist", roles: ["contractor"] },
  
  // Design & Visualization
  { icon: Palette, label: "Visualizer", path: "/visualizer", roles: ["architect", "designer"] },
  { icon: Calculator, label: "BOQ Generator", path: "/boq-generator", roles: ["architect", "contractor"] },
  { icon: Briefcase, label: "Portfolio", path: "/portfolio", roles: ["client", "designer"] },
  
  // Finance
  { icon: DollarSign, label: "Budget Planning", path: "/budget-planning", roles: ["contractor", "finance"] },
  { icon: CreditCard, label: "Payment Release", path: "/payment-release", roles: ["finance"] },
  { icon: Coins, label: "Multi-Currency", path: "/multi-currency", roles: ["finance"] },
  { icon: FileSpreadsheet, label: "Change Orders", path: "/change-orders", roles: ["contractor", "finance"] },
  { icon: ScrollText, label: "Audit Logs", path: "/audit-logs", roles: ["finance"] },
  
  // AI
  { icon: Bot, label: "AI Copilot", path: "/ai-copilot", roles: ["client", "contractor", "architect", "designer", "vendor", "finance"] },
];

const roles = [
  { id: "client" as RoleId, label: "Client", path: "/dashboard" },
  { id: "contractor" as RoleId, label: "Contractor", path: "/contractor" },
  { id: "architect" as RoleId, label: "Architect", path: "/architect" },
  { id: "designer" as RoleId, label: "Interior Designer", path: "/designer" },
  { id: "vendor" as RoleId, label: "Vendor", path: "/vendor" },
  { id: "finance" as RoleId, label: "Finance Team", path: "/finance-dashboard" },
];

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(roles[0]);

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 sticky top-0",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between h-20 px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center shadow-glow">
            <Building2 className="w-5 h-5 text-accent-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-display font-bold text-foreground">ConstruQ</span>
              <span className="text-xs text-accent font-semibold">NEXUS AI</span>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Role Switcher */}
      {!collapsed && (
        <div className="p-3 border-b border-sidebar-border">
          <div className="relative">
            <button
              onClick={() => setRoleMenuOpen(!roleMenuOpen)}
              className="w-full flex items-center justify-between px-3 py-2 bg-accent/10 border border-accent/20 rounded-lg text-sm font-medium text-foreground hover:bg-accent/20 transition-colors"
            >
              <span>Role: {currentRole.label}</span>
              <ChevronDown className={cn("w-4 h-4 transition-transform", roleMenuOpen && "rotate-180")} />
            </button>
            
            {roleMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
                {roles.map((role) => (
                  <NavLink
                    key={role.id}
                    to={role.path}
                    onClick={() => {
                      setCurrentRole(role);
                      setRoleMenuOpen(false);
                    }}
                    className={cn(
                      "block px-3 py-2 text-sm hover:bg-secondary transition-colors",
                      currentRole.id === role.id ? "bg-accent/10 text-accent" : "text-foreground"
                    )}
                  >
                    {role.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {allNavItems
          .filter((item) => item.roles.includes(currentRole.id))
          .map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors duration-200 group",
                  collapsed && "justify-center px-2"
                )}
                activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
              >
                <Icon className="w-5 h-5 shrink-0 group-hover:text-accent transition-colors" />
                {!collapsed && (
                  <span className="truncate text-sm">{item.label}</span>
                )}
              </NavLink>
            );
          })}
      </nav>

      {/* Bottom section */}
      <div className="p-3 border-t border-sidebar-border space-y-2">
        <NavLink
          to="/settings"
          className={cn(
            "flex items-center gap-3 px-3 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors duration-200",
            collapsed && "justify-center px-2"
          )}
          activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
        >
          <Settings className="w-5 h-5 shrink-0" />
          {!collapsed && <span>Settings</span>}
        </NavLink>

        {/* User */}
        <div
          className={cn(
            "flex items-center gap-3 px-3 py-3 rounded-lg bg-secondary/50",
            collapsed && "justify-center px-2"
          )}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-amber-light flex items-center justify-center text-accent-foreground font-bold text-sm shrink-0">
            IA
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Imran Ahmed</p>
              <p className="text-xs text-muted-foreground">{currentRole.label}</p>
            </div>
          )}
          {!collapsed && (
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
              <LogOut className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
