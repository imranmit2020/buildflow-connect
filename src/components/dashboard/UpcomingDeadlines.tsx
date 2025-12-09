import { Calendar, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Deadline {
  id: string;
  title: string;
  date: string;
  assignee: string;
  priority: "high" | "medium" | "low";
  daysLeft: number;
}

const deadlines: Deadline[] = [
  {
    id: "1",
    title: "Electrical Plan Review",
    date: "Dec 12, 2024",
    assignee: "John Smith",
    priority: "high",
    daysLeft: 3,
  },
  {
    id: "2",
    title: "Interior Design Approval",
    date: "Dec 17, 2024",
    assignee: "Elena Rodriguez",
    priority: "medium",
    daysLeft: 8,
  },
  {
    id: "3",
    title: "Material Order Deadline",
    date: "Dec 20, 2024",
    assignee: "Vendor B",
    priority: "high",
    daysLeft: 11,
  },
  {
    id: "4",
    title: "Foundation Inspection",
    date: "Dec 25, 2024",
    assignee: "City Inspector",
    priority: "low",
    daysLeft: 16,
  },
];

const priorityStyles = {
  high: "bg-destructive/10 text-destructive",
  medium: "bg-amber-50 text-amber-600",
  low: "bg-emerald-50 text-emerald-600",
};

const UpcomingDeadlines = () => {
  return (
    <div className="bg-card rounded-xl border border-border/60 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">Upcoming Deadlines</h3>
        <button className="text-sm text-primary hover:underline font-medium">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {deadlines.map((deadline) => (
          <div
            key={deadline.id}
            className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4 text-primary" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-foreground truncate">
                {deadline.title}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {deadline.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {deadline.assignee}
                </span>
              </div>
            </div>

            <span
              className={cn(
                "text-xs font-medium px-2.5 py-1 rounded-full",
                priorityStyles[deadline.priority]
              )}
            >
              {deadline.daysLeft}d left
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingDeadlines;
