import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Download,
  Filter,
  AlertTriangle,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tasks = [
  { id: 1, name: "Foundation Work", start: 0, duration: 20, progress: 100, status: "completed" },
  { id: 2, name: "Plumbing Base Work", start: 12, duration: 22, progress: 100, status: "completed" },
  { id: 3, name: "Electrical Wiring", start: 25, duration: 25, progress: 65, status: "delayed" },
  { id: 4, name: "Flooring Installation", start: 45, duration: 15, progress: 0, status: "pending" },
  { id: 5, name: "Interior Design", start: 55, duration: 10, progress: 0, status: "pending" },
  { id: 6, name: "HVAC Installation", start: 35, duration: 18, progress: 30, status: "at-risk" },
  { id: 7, name: "Painting & Finishing", start: 60, duration: 12, progress: 0, status: "pending" },
];

const aiOverlays = [
  { type: "delay", message: "Predicted Delay (Electrical Wiring)", color: "destructive" },
  { type: "risk", message: "Conditional Delay (Material Delivery Risk)", color: "warning" },
  { type: "suggestion", message: "AI-optimized Sequence Suggestion", color: "info" },
];

const TimelinePage = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500";
      case "delayed":
        return "bg-destructive";
      case "at-risk":
        return "bg-amber-500";
      default:
        return "bg-muted-foreground";
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500";
      case "delayed":
        return "bg-destructive";
      case "at-risk":
        return "bg-amber-500";
      default:
        return "bg-accent";
    }
  };

  const totalDays = 75;

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
                Project Timeline
              </h1>
              <p className="text-muted-foreground mt-1">
                Gantt view with AI-powered predictions
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button
                variant="accent"
                className="gap-2"
                onClick={() => setCopilotOpen(true)}
              >
                <Bot className="w-4 h-4" />
                Reschedule with AI
              </Button>
            </div>
          </div>

          {/* AI Overlays legend */}
          <div className="flex flex-wrap gap-4 mb-6">
            {aiOverlays.map((overlay, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm",
                  overlay.color === "destructive" && "bg-destructive/10 text-destructive",
                  overlay.color === "warning" && "bg-amber-500/10 text-amber-600",
                  overlay.color === "info" && "bg-blue-500/10 text-blue-600"
                )}
              >
                {overlay.type === "delay" && <AlertTriangle className="w-4 h-4" />}
                {overlay.type === "risk" && <AlertCircle className="w-4 h-4" />}
                {overlay.type === "suggestion" && <Lightbulb className="w-4 h-4" />}
                {overlay.message}
              </div>
            ))}
          </div>

          {/* Gantt chart */}
          <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
            {/* Timeline header */}
            <div className="flex border-b border-border">
              <div className="w-64 shrink-0 p-4 font-medium text-foreground border-r border-border">
                Tasks
              </div>
              <div className="flex-1 flex">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 p-4 text-center text-sm text-muted-foreground border-r border-border last:border-r-0"
                  >
                    Week {i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Task rows */}
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors"
              >
                {/* Task name */}
                <div className="w-64 shrink-0 p-4 border-r border-border">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn("w-3 h-3 rounded-full", getStatusColor(task.status))}
                    />
                    <span className="font-medium text-foreground text-sm">
                      {task.name}
                    </span>
                  </div>
                </div>

                {/* Gantt bar */}
                <div className="flex-1 relative py-4 px-2">
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-8 rounded-lg bg-secondary overflow-hidden"
                    style={{
                      left: `${(task.start / totalDays) * 100}%`,
                      width: `${(task.duration / totalDays) * 100}%`,
                    }}
                  >
                    <div
                      className={cn(
                        "h-full rounded-lg transition-all",
                        getProgressColor(task.status)
                      )}
                      style={{ width: `${task.progress}%` }}
                    />

                    {/* Delay indicator */}
                    {task.status === "delayed" && (
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <AlertTriangle className="w-4 h-4 text-destructive-foreground" />
                      </div>
                    )}

                    {/* At risk indicator */}
                    {task.status === "at-risk" && (
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <AlertCircle className="w-4 h-4 text-amber-900" />
                      </div>
                    )}
                  </div>

                  {/* AI suggestion overlay for delayed task */}
                  {task.status === "delayed" && (
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-8 rounded-lg border-2 border-dashed border-blue-500 bg-blue-500/10"
                      style={{
                        left: `${((task.start + task.duration) / totalDays) * 100}%`,
                        width: `${(5 / totalDays) * 100}%`,
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-card rounded-xl border border-border p-4 shadow-card">
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="text-2xl font-display font-bold text-emerald-600">2 tasks</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 shadow-card">
              <p className="text-sm text-muted-foreground">In Progress</p>
              <p className="text-2xl font-display font-bold text-accent">2 tasks</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 shadow-card">
              <p className="text-sm text-muted-foreground">Delayed</p>
              <p className="text-2xl font-display font-bold text-destructive">1 task</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4 shadow-card">
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl font-display font-bold text-muted-foreground">3 tasks</p>
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default TimelinePage;
