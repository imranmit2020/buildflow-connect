import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";
import {
  CheckSquare,
  Clock,
  AlertTriangle,
  FileText,
  Package,
  Users,
  Bot,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const todaysTasks = [
  {
    id: "1",
    title: "Electrical Ducting",
    progress: 60,
    due: "Dec 12",
    priority: "high",
  },
  {
    id: "2",
    title: "Tile Laying (Bathroom A)",
    progress: 0,
    due: "Start Today",
    priority: "medium",
  },
  {
    id: "3",
    title: "Material Pickup Required",
    progress: 0,
    due: "Vendor B",
    priority: "high",
  },
  {
    id: "4",
    title: "Plumbing Inspection",
    progress: 85,
    due: "Dec 13",
    priority: "low",
  },
];

const ContractorDashboard = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      default:
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 overflow-auto">
          {/* Page header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-accent font-medium mb-1">Role: Contractor</p>
              <h1 className="text-3xl font-display font-bold text-foreground">
                Contractor Dashboard
              </h1>
            </div>
            <Button
              variant="accent"
              className="gap-2"
              onClick={() => setCopilotOpen(true)}
            >
              <Bot className="w-4 h-4" />
              AI Copilot
            </Button>
          </div>

          {/* Summary metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard
              title="Tasks Assigned"
              value="32"
              subtitle="Across 4 projects"
              icon={CheckSquare}
              variant="accent"
            />
            <MetricCard
              title="Tasks In Progress"
              value="11"
              subtitle="Active work items"
              icon={Clock}
              variant="success"
            />
            <MetricCard
              title="Blockers"
              value="3"
              subtitle="Require attention"
              icon={AlertTriangle}
              trend={{ value: "2 new", positive: false }}
              variant="warning"
            />
          </div>

          {/* AI Insights */}
          <div className="bg-gradient-to-r from-accent/10 to-amber-500/10 rounded-xl border border-accent/20 p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent-gradient rounded-xl flex items-center justify-center shadow-glow shrink-0">
                <Bot className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  AI Insights
                </h3>
                <p className="text-foreground">
                  "3 tasks may not meet deadline. Assign subcontractors to avoid
                  delay. Consider prioritizing electrical ducting work."
                </p>
              </div>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>

          {/* Today's Work */}
          <div className="bg-card rounded-xl border border-border p-6 mb-8 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold text-lg text-foreground">
                Today's Work
              </h3>
              <button className="text-sm text-accent hover:underline font-medium">
                View All Tasks
              </button>
            </div>

            <div className="space-y-4">
              {todaysTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckSquare className="w-5 h-5 text-accent" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {task.title}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-muted-foreground">
                        {task.due}
                      </span>
                      {task.progress > 0 && (
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent rounded-full"
                              style={{ width: `${task.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {task.progress}%
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <span
                    className={cn(
                      "text-xs font-medium px-2 py-1 rounded-full border",
                      getPriorityColor(task.priority)
                    )}
                  >
                    {task.priority}
                  </span>

                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <h3 className="font-display font-semibold text-lg text-foreground mb-4">
              Quick Actions
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="gap-2">
                <FileText className="w-4 h-4" />
                Add Report
              </Button>
              <Button variant="outline" className="gap-2">
                <Package className="w-4 h-4" />
                Order Material
              </Button>
              <Button variant="accent" className="gap-2">
                <Users className="w-4 h-4" />
                Assign Subcontractor
              </Button>
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default ContractorDashboard;
