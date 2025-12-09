import { Bell, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DashboardHeader = () => {
  return (
    <header className="h-20 border-b border-border bg-card flex items-center justify-between px-6 sticky top-0 z-40">
      {/* Search */}
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search projects, tasks, vendors..."
            className="pl-10 bg-secondary/50 border-0 focus-visible:ring-accent"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Project selector */}
        <Button variant="outline" className="gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Green Valley Villa
          <ChevronDown className="w-4 h-4" />
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full" />
        </Button>

        {/* User avatar */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-amber-light flex items-center justify-center text-accent-foreground font-bold">
            IA
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-foreground">Imran Ahmed</p>
            <p className="text-xs text-muted-foreground">Client</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
