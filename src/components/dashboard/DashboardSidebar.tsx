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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: FolderKanban, label: "Projects", path: "/projects" },
  { icon: CheckSquare, label: "Tasks", path: "/tasks" },
  { icon: FileText, label: "Documents", path: "/documents" },
  { icon: ShoppingCart, label: "Procurement", path: "/procurement" },
  { icon: Users, label: "Vendors", path: "/vendors" },
  { icon: DollarSign, label: "Finance", path: "/finance" },
  { icon: Bot, label: "AI Copilot", path: "/ai-copilot" },
];

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

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

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors duration-200 group",
                collapsed && "justify-center px-2"
              )}
              activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
            >
              <Icon className="w-5 h-5 shrink-0 group-hover:text-accent transition-colors" />
              {!collapsed && (
                <span className="truncate">{item.label}</span>
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
              <p className="text-xs text-muted-foreground">Client</p>
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
