import { CheckCircle2, Circle, Clock, AlertCircle, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  category: string;
  progress: number;
  status: "completed" | "in-progress" | "pending" | "blocked";
}

const tasks: Task[] = [
  { id: "1", title: "Foundation Work", category: "Structure", progress: 100, status: "completed" },
  { id: "2", title: "Electrical Planning", category: "MEP", progress: 65, status: "in-progress" },
  { id: "3", title: "Interior Material Selection", category: "Design", progress: 40, status: "in-progress" },
  { id: "4", title: "HVAC System Design", category: "MEP", progress: 90, status: "in-progress" },
  { id: "5", title: "Permit Approval", category: "Admin", progress: 20, status: "blocked" },
];

const statusConfig = {
  completed: {
    label: "Done",
    color: "text-emerald-600 bg-emerald-50",
  },
  "in-progress": {
    label: "Review",
    color: "text-primary bg-primary/10",
  },
  pending: {
    label: "Pending",
    color: "text-muted-foreground bg-muted",
  },
  blocked: {
    label: "On Hold",
    color: "text-destructive bg-destructive/10",
  },
};

const TaskStatusCard = () => {
  return (
    <div className="bg-card rounded-xl border border-border/60 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">Recent Active Tasks</h3>
        <button className="text-sm text-primary hover:underline font-medium">
          View All
        </button>
      </div>

      <div className="space-y-1">
        {tasks.map((task) => {
          const config = statusConfig[task.status];
          const initials = task.title.split(' ').map(w => w[0]).slice(0, 2).join('');

          return (
            <div
              key={task.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer group"
            >
              {/* Avatar/Initials */}
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-xs font-semibold text-primary">{initials}</span>
              </div>

              {/* Task Info */}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground truncate">
                  {task.title}
                </p>
                <p className="text-xs text-muted-foreground">{task.category}</p>
              </div>

              {/* Progress */}
              <div className="w-24 hidden sm:block">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{task.progress}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>

              {/* Status Badge */}
              <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full", config.color)}>
                {config.label}
              </span>

              {/* More */}
              <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskStatusCard;
