import { Button } from "@/components/ui/button";
import { Building2, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Role-based navigation structure
const roleMenus = [
  {
    role: "Client",
    path: "/dashboard",
    items: [
      { name: "Dashboard", path: "/dashboard" },
      { name: "Marketplace", path: "/marketplace" },
      { name: "Projects", path: "/projects" },
      { name: "Timeline", path: "/timeline" },
      { name: "Tasks", path: "/tasks" },
      { name: "Documents", path: "/documents" },
      { name: "Messaging", path: "/messaging" },
      { name: "Reports", path: "/reports" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "AI Copilot", path: "/ai-copilot" },
      { name: "Workflow", path: "/workflow" },
    ],
  },
  {
    role: "Contractor",
    path: "/contractor-dashboard",
    items: [
      { name: "Dashboard", path: "/contractor-dashboard" },
      { name: "Marketplace", path: "/marketplace" },
      { name: "Hire Labor", path: "/labor-marketplace" },
      { name: "Projects", path: "/projects" },
      { name: "Timeline", path: "/timeline" },
      { name: "Tasks", path: "/tasks" },
      { name: "Documents", path: "/documents" },
      { name: "Messaging", path: "/messaging" },
      { name: "Reports", path: "/reports" },
      { name: "Procurement", path: "/procurement" },
      { name: "Vendors", path: "/vendors" },
      { name: "Delivery Tracking", path: "/delivery-tracking" },
      { name: "Site Inspection", path: "/site-inspection" },
      { name: "Risk Management", path: "/risk-management" },
      { name: "Safety Scanner", path: "/safety-scanner" },
      { name: "Resource Scheduling", path: "/resource-scheduling" },
      { name: "Attendance", path: "/attendance" },
      { name: "Daily Logbook", path: "/daily-logbook" },
      { name: "Equipment Maintenance", path: "/equipment-maintenance" },
      { name: "Subcontractor Assignment", path: "/subcontractor-assignment" },
      { name: "Handover Checklist", path: "/handover-checklist" },
      { name: "BOQ Generator", path: "/boq-generator" },
      { name: "Budget Planning", path: "/budget-planning" },
      { name: "Change Orders", path: "/change-orders" },
      { name: "AI Copilot", path: "/ai-copilot" },
      { name: "Workflow", path: "/workflow" },
      { name: "Data Labeling", path: "/data-labeling" },
    ],
  },
  {
    role: "Architect",
    path: "/architect-dashboard",
    items: [
      { name: "Dashboard", path: "/architect-dashboard" },
      { name: "Marketplace", path: "/marketplace" },
      { name: "Projects", path: "/projects" },
      { name: "Timeline", path: "/timeline" },
      { name: "Tasks", path: "/tasks" },
      { name: "Documents", path: "/documents" },
      { name: "Messaging", path: "/messaging" },
      { name: "Site Inspection", path: "/site-inspection" },
      { name: "Risk Management", path: "/risk-management" },
      { name: "Visualizer", path: "/visualizer" },
      { name: "BOQ Generator", path: "/boq-generator" },
      { name: "AI Copilot", path: "/ai-copilot" },
      { name: "Workflow", path: "/workflow" },
      { name: "Data Labeling", path: "/data-labeling" },
    ],
  },
  {
    role: "Interior Designer",
    path: "/interior-designer-dashboard",
    items: [
      { name: "Dashboard", path: "/interior-designer-dashboard" },
      { name: "Marketplace", path: "/marketplace" },
      { name: "Projects", path: "/projects" },
      { name: "Timeline", path: "/timeline" },
      { name: "Documents", path: "/documents" },
      { name: "Messaging", path: "/messaging" },
      { name: "Visualizer", path: "/visualizer" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "AI Copilot", path: "/ai-copilot" },
      { name: "Workflow", path: "/workflow" },
    ],
  },
  {
    role: "Vendor",
    path: "/vendor-dashboard",
    items: [
      { name: "Dashboard", path: "/vendor-dashboard" },
      { name: "Documents", path: "/documents" },
      { name: "Messaging", path: "/messaging" },
      { name: "Procurement", path: "/procurement" },
      { name: "Delivery Tracking", path: "/delivery-tracking" },
      { name: "AI Copilot", path: "/ai-copilot" },
      { name: "Workflow", path: "/workflow" },
    ],
  },
  {
    role: "Finance",
    path: "/finance-dashboard",
    items: [
      { name: "Dashboard", path: "/finance-dashboard" },
      { name: "Documents", path: "/documents" },
      { name: "Messaging", path: "/messaging" },
      { name: "Reports", path: "/reports" },
      { name: "Procurement", path: "/procurement" },
      { name: "Vendors", path: "/vendors" },
      { name: "Budget Planning", path: "/budget-planning" },
      { name: "Payment Release", path: "/payment-release" },
      { name: "Multi-Currency", path: "/multi-currency" },
      { name: "Change Orders", path: "/change-orders" },
      { name: "Audit Logs", path: "/audit-logs" },
      { name: "AI Copilot", path: "/ai-copilot" },
      { name: "Workflow", path: "/workflow" },
    ],
  },
  {
    role: "Labor",
    path: "/labor-dashboard",
    items: [
      { name: "Dashboard", path: "/labor-dashboard" },
      { name: "My Jobs", path: "/labor-dashboard" },
      { name: "Profile", path: "/labor-dashboard" },
      { name: "Availability", path: "/labor-dashboard" },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-xl text-foreground">
              Construq
            </span>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {roleMenus.map((menu) => (
                  <NavigationMenuItem key={menu.role}>
                    <NavigationMenuTrigger className="h-9 px-3 text-sm font-medium text-muted-foreground hover:text-foreground bg-transparent hover:bg-accent data-[state=open]:bg-accent">
                      {menu.role}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[280px] gap-1 p-3 md:w-[320px] md:grid-cols-2 lg:w-[400px]">
                        {menu.items.map((item) => (
                          <li key={item.path + item.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.path}
                                className={cn(
                                  "block select-none rounded-md p-2.5 text-sm leading-none no-underline outline-none transition-colors",
                                  "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  "text-muted-foreground hover:text-foreground"
                                )}
                              >
                                {item.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                
                {/* Data Labeling Link */}
                <NavigationMenuItem>
                  <Link
                    to="/data-labeling"
                    className="h-9 px-3 text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center"
                  >
                    Data Labeling
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Log In
              </Button>
            </Link>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              Contact Sales
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {roleMenus.map((menu) => (
                <div key={menu.role} className="border-b border-border/50 last:border-b-0">
                  <button
                    onClick={() => setExpandedRole(expandedRole === menu.role ? null : menu.role)}
                    className="flex items-center justify-between w-full py-3 px-2 text-foreground font-medium hover:bg-accent/50 rounded-md"
                  >
                    {menu.role}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        expandedRole === menu.role && "rotate-180"
                      )}
                    />
                  </button>
                  {expandedRole === menu.role && (
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      {menu.items.map((item) => (
                        <Link
                          key={item.path + item.name}
                          to={item.path}
                          className="py-2 px-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Data Labeling Mobile */}
              <Link
                to="/data-labeling"
                className="py-3 px-2 text-foreground font-medium hover:bg-accent/50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Data Labeling
              </Link>
              
              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                    Log In
                  </Button>
                </Link>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
