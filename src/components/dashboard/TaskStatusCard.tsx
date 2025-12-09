import { CheckCircle2, Circle, Clock, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  status: "completed" | "in-progress" | "pending" | "blocked";
}

const tasks: Task[] = [
  { id: "1", title: "Foundation Work", status: "completed" },
  { id: "2", title: "Electrical Planning", status: "in-progress" },
  { id: "3", title: "Interior Material Selection", status: "pending" },
  { id: "4", title: "HVAC System Design", status: "in-progress" },
  { id: "5", title: "Permit Approval", status: "blocked" },
];

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    label: "Completed",
  },
  "in-progress": {
    icon: Clock,
    color: "text-accent",
    bg: "bg-accent/10",
    label: "In Progress",
  },
  pending: {
    icon: Circle,
    color: "text-muted-foreground",
    bg: "bg-muted",
    label: "Pending",
  },
  blocked: {
    icon: AlertCircle,
    color: "text-destructive",
    bg: "bg-destructive/10",
    label: "Blocked",
  },
};

const TaskStatusCard = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display font-semibold text-lg text-foreground">
          Task Status
        </h3>
        <button className="text-sm text-accent hover:underline font-medium">
          View Board
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => {
          const config = statusConfig[task.status];
          const Icon = config.icon;

          return (
            <div
              key={task.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                  config.bg
                )}
              >
                <Icon className={cn("w-4 h-4", config.color)} />
              </div>
              <span className="flex-1 text-foreground group-hover:text-accent transition-colors truncate">
                {task.title}
              </span>
              <span
                className={cn(
                  "text-xs font-medium px-2 py-1 rounded-full",
                  config.bg,
                  config.color
                )}
              >
                {config.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskStatusCard;
