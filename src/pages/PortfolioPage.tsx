import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Download,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "1",
    name: "Green Valley Villa",
    status: "on-track",
    budget: 400000,
    spent: 168500,
    completion: 42,
    tasks: { total: 45, completed: 18 },
  },
  {
    id: "2",
    name: "Shahjahanabad Tower",
    status: "at-risk",
    budget: 2500000,
    spent: 1450000,
    completion: 58,
    tasks: { total: 120, completed: 72 },
  },
  {
    id: "3",
    name: "Lakefront Apartments",
    status: "delayed",
    budget: 1800000,
    spent: 1206000,
    completion: 67,
    tasks: { total: 85, completed: 58 },
  },
  {
    id: "4",
    name: "Metro Business Hub",
    status: "on-track",
    budget: 3200000,
    spent: 960000,
    completion: 30,
    tasks: { total: 150, completed: 45 },
  },
];

const portfolioInsights = [
  "Electrical subcontractor is the bottleneck in 2 projects.",
  "Shared vendor between 3 projects causing schedule overlap.",
  "Cash-flow risk predicted for Shahjahanabad Tower.",
  "Bulk material order opportunity: save $24,000 across projects.",
];

const PortfolioPage = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "on-track":
        return {
          label: "On Track",
          icon: CheckCircle2,
          className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
        };
      case "at-risk":
        return {
          label: "At Risk",
          icon: AlertTriangle,
          className: "bg-amber-500/10 text-amber-600 border-amber-500/20",
        };
      case "delayed":
        return {
          label: "Delayed",
          icon: Clock,
          className: "bg-destructive/10 text-destructive border-destructive/20",
        };
      default:
        return {
          label: status,
          icon: CheckCircle2,
          className: "bg-muted text-muted-foreground border-border",
        };
    }
  };

  const totalBudget = projects.reduce((acc, p) => acc + p.budget, 0);
  const totalSpent = projects.reduce((acc, p) => acc + p.spent, 0);
  const avgCompletion = Math.round(projects.reduce((acc, p) => acc + p.completion, 0) / projects.length);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 overflow-auto">
          {/* Page header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground">
                Portfolio Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Multi-project overview and insights
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </Button>
              <Button
                variant="accent"
                className="gap-2"
                onClick={() => setCopilotOpen(true)}
              >
                <Bot className="w-4 h-4" />
                AI Copilot
              </Button>
            </div>
          </div>

          {/* Portfolio summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-card rounded-xl border border-border p-6 shadow-card">
              <p className="text-sm text-muted-foreground mb-1">Total Projects</p>
              <p className="text-3xl font-display font-bold text-foreground">{projects.length}</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 shadow-card">
              <p className="text-sm text-muted-foreground mb-1">Total Budget</p>
              <p className="text-3xl font-display font-bold text-foreground">
                ${(totalBudget / 1000000).toFixed(1)}M
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 shadow-card">
              <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
              <p className="text-3xl font-display font-bold text-accent">
                ${(totalSpent / 1000000).toFixed(2)}M
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 shadow-card">
              <p className="text-sm text-muted-foreground mb-1">Avg. Completion</p>
              <p className="text-3xl font-display font-bold text-foreground">{avgCompletion}%</p>
            </div>
          </div>

          {/* Project list */}
          <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden mb-8">
            <div className="p-6 border-b border-border">
              <h3 className="font-display font-semibold text-lg text-foreground">
                Project Summary
              </h3>
            </div>

            <div className="divide-y divide-border">
              {projects.map((project) => {
                const statusConfig = getStatusConfig(project.status);
                const StatusIcon = statusConfig.icon;
                const budgetPercent = (project.spent / project.budget) * 100;

                return (
                  <div
                    key={project.id}
                    className="p-6 hover:bg-secondary/30 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-6">
                      {/* Project name and status */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-display font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                            {project.name}
                          </h4>
                          <span
                            className={cn(
                              "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full border",
                              statusConfig.className
                            )}
                          >
                            <StatusIcon className="w-3 h-3" />
                            {statusConfig.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span>
                            Tasks: {project.tasks.completed}/{project.tasks.total}
                          </span>
                          <span>Completion: {project.completion}%</span>
                        </div>
                      </div>

                      {/* Budget */}
                      <div className="w-48">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Budget</span>
                          <span className="font-medium text-foreground">
                            {budgetPercent.toFixed(0)}% used
                          </span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full",
                              budgetPercent > 80 ? "bg-destructive" : "bg-accent"
                            )}
                            style={{ width: `${Math.min(budgetPercent, 100)}%` }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
                        </p>
                      </div>

                      {/* Action */}
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Portfolio Insights */}
          <div className="bg-gradient-to-br from-accent/10 to-amber-500/10 rounded-xl border border-accent/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-gradient rounded-xl flex items-center justify-center shadow-glow">
                <Sparkles className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground">
                AI Portfolio Insights
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {portfolioInsights.map((insight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card/50 rounded-xl border border-border/50"
                >
                  {index < 2 ? (
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  ) : (
                    <TrendingUp className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm text-foreground">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default PortfolioPage;
