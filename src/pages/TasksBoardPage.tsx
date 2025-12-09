import { useState } from "react";
import { Filter, Plus, Bot, User, Clock, AlertTriangle } from "lucide-react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";

type TaskStatus = "todo" | "in-progress" | "review" | "done";

interface Task {
  id: string;
  title: string;
  assignee?: string;
  priority: "low" | "medium" | "high";
  dueDate?: string;
  aiSuggested?: boolean;
  blocked?: boolean;
}

const initialTasks: Record<TaskStatus, Task[]> = {
  "todo": [
    { id: "1", title: "Material ordering", priority: "high", dueDate: "Dec 12", aiSuggested: true },
    { id: "2", title: "Tile spec finalizing", priority: "medium", dueDate: "Dec 15" },
    { id: "3", title: "Window measurements", priority: "low", dueDate: "Dec 18", aiSuggested: true },
  ],
  "in-progress": [
    { id: "4", title: "Electrical wiring", assignee: "Sam", priority: "high", dueDate: "Dec 10" },
    { id: "5", title: "AC duct layout", assignee: "Subcontractor", priority: "medium", dueDate: "Dec 14", blocked: true },
    { id: "6", title: "Kitchen cabinet install", assignee: "Mike", priority: "medium", dueDate: "Dec 16" },
  ],
  "review": [
    { id: "7", title: "Plan revision review", assignee: "Architect", priority: "high", dueDate: "Dec 11" },
    { id: "8", title: "Inspection Request", priority: "medium", dueDate: "Dec 13" },
  ],
  "done": [
    { id: "9", title: "Plumbing complete", assignee: "John", priority: "high" },
    { id: "10", title: "Flooring complete", assignee: "Team A", priority: "medium" },
    { id: "11", title: "Foundation work", assignee: "Team B", priority: "high" },
  ],
};

const filters = ["All", "My Tasks", "Blocked", "Completed", "AI Suggestions"];

const columns: { key: TaskStatus; label: string; color: string }[] = [
  { key: "todo", label: "To Do", color: "bg-muted" },
  { key: "in-progress", label: "In Progress", color: "bg-blue-500/10" },
  { key: "review", label: "Review", color: "bg-amber-500/10" },
  { key: "done", label: "Done", color: "bg-green-500/10" },
];

const TasksBoardPage = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [tasks] = useState(initialTasks);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium": return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "low": return "bg-green-500/10 text-green-600 border-green-500/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getColumnCount = (key: TaskStatus) => tasks[key].length;

  return (
    <div className="min-h-screen flex w-full bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Tasks Board</h1>
              <p className="text-muted-foreground">Project: Green Valley Villa</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => setCopilotOpen(true)}>
                <Bot className="w-4 h-4 mr-2" />
                AI Suggestions
              </Button>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Task
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground mr-2">Filters:</span>
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Kanban Board */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {columns.map((column) => (
              <Card key={column.key} className={`${column.color} border-border/50`}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold flex items-center justify-between">
                    {column.label}
                    <Badge variant="secondary" className="ml-2">
                      {getColumnCount(column.key)}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {tasks[column.key].map((task) => (
                    <Card
                      key={task.id}
                      className="bg-card border-border hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <CardContent className="p-3">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-sm font-medium text-foreground flex-1">
                            {task.title}
                          </h4>
                          {task.aiSuggested && (
                            <Bot className="w-3 h-3 text-primary ml-2 flex-shrink-0" />
                          )}
                          {task.blocked && (
                            <AlertTriangle className="w-3 h-3 text-destructive ml-2 flex-shrink-0" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline" className={`text-xs ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </Badge>
                          {task.assignee && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <User className="w-3 h-3" />
                              {task.assignee}
                            </div>
                          )}
                          {task.dueDate && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {task.dueDate}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button variant="ghost" size="sm" className="w-full text-muted-foreground">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Task
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Insight Card */}
          <Card className="mt-6 bg-primary/5 border-primary/20">
            <CardContent className="p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">AI Task Suggestions</h4>
                <p className="text-sm text-muted-foreground">
                  Based on project timeline, consider prioritizing "Material ordering" to avoid delays. 
                  The electrical wiring task may be blocked by pending material delivery.
                </p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default TasksBoardPage;
