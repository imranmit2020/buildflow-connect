import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import {
  Search,
  Home,
  Users,
  DollarSign,
  User,
  Settings,
  Bell,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  path: string;
}

const mainNavItems: NavItem[] = [
  { icon: Search, label: "Explore", path: "/marketplace" },
  { icon: Home, label: "Home", path: "/dashboard" },
  { icon: Users, label: "Referrals", path: "/vendors" },
  { icon: DollarSign, label: "Earnings", path: "/reports" },
  { icon: User, label: "Profile", path: "/settings" },
];

const DashboardSidebar = () => {
  const [hasNotification] = useState(true);

  return (
    <aside className="flex flex-col items-center h-screen w-20 bg-sidebar border-r border-sidebar-border sticky top-0 py-6">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Building2 className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-2 w-full px-2">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center w-full py-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 group"
              )}
              activeClassName="text-primary bg-primary/10"
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="flex flex-col items-center gap-4 mt-auto pt-6">
        {/* Settings */}
        <NavLink
          to="/settings"
          className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
          activeClassName="text-primary bg-primary/10"
        >
          <Settings className="w-5 h-5" />
        </NavLink>

        {/* Notifications */}
        <NavLink
          to="/notifications"
          className="relative p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
          activeClassName="text-primary bg-primary/10"
        >
          <Bell className="w-5 h-5" />
          {hasNotification && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
          )}
        </NavLink>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mt-2">
          <User className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
