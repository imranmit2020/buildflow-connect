import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Button } from "@/components/ui/button";
import {
  FileImage,
  Bot,
  Check,
  X,
  MessageSquare,
  AlertTriangle,
  Lightbulb,
  ZoomIn,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";

const drawings = [
  { id: "1", name: "Floor Plan v2", status: "approved", version: 2 },
  { id: "2", name: "Electrical Layout v3", status: "review", version: 3 },
  { id: "3", name: "Structural Sheet v1", status: "pending", version: 1 },
  { id: "4", name: "Plumbing Layout v2", status: "review", version: 2 },
];

const comments = [
  {
    id: "1",
    author: "Contractor",
    role: "contractor",
    message: "Need revision before execution.",
    time: "2 hours ago",
  },
  {
    id: "2",
    author: "Architect",
    role: "architect",
    message: "Fixing duct clash today.",
    time: "1 hour ago",
  },
];

const aiOverlays = [
  {
    type: "conflict",
    message: "AC duct overlaps beam",
    severity: "high",
  },
  {
    type: "suggestion",
    message: "Shift duct by 30cm",
    severity: "info",
  },
];

const ArchitectDashboard = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [selectedDrawing, setSelectedDrawing] = useState(drawings[1]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
      case "review":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
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
              <p className="text-sm text-accent font-medium mb-1">Role: Architect</p>
              <h1 className="text-3xl font-display font-bold text-foreground">
                Drawing Review Panel
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

          {/* Drawing tabs */}
          <div className="flex flex-wrap gap-3 mb-6">
            {drawings.map((drawing) => (
              <button
                key={drawing.id}
                onClick={() => setSelectedDrawing(drawing)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg border transition-all",
                  selectedDrawing.id === drawing.id
                    ? "bg-accent text-accent-foreground border-accent shadow-glow"
                    : "bg-card border-border hover:border-accent/50"
                )}
              >
                <FileImage className="w-4 h-4" />
                <span className="font-medium">{drawing.name}</span>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Drawing preview */}
            <div className="lg:col-span-2 bg-card rounded-xl border border-border overflow-hidden shadow-card">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    {selectedDrawing.name}
                  </h3>
                  <span
                    className={cn(
                      "text-xs font-medium px-2 py-1 rounded-full border mt-1 inline-block",
                      getStatusColor(selectedDrawing.status)
                    )}
                  >
                    {selectedDrawing.status}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Blueprint preview area */}
              <div className="relative h-96 bg-gradient-to-br from-blue-950 to-slate-900 flex items-center justify-center">
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20 pattern-grid" />
                
                {/* Mock blueprint lines */}
                <div className="absolute inset-8 border border-blue-400/30 rounded">
                  <div className="absolute top-4 left-4 w-32 h-20 border border-blue-400/50" />
                  <div className="absolute top-4 right-4 w-24 h-32 border border-blue-400/50" />
                  <div className="absolute bottom-4 left-4 w-40 h-24 border border-blue-400/50" />
                  <div className="absolute bottom-8 right-8 w-20 h-16 border border-blue-400/50" />
                </div>

                {/* AI Overlays */}
                <div className="absolute top-20 right-20 bg-destructive/90 text-destructive-foreground px-3 py-2 rounded-lg text-sm flex items-center gap-2 animate-pulse">
                  <AlertTriangle className="w-4 h-4" />
                  Conflict Detected
                </div>
                <div className="absolute bottom-20 left-20 bg-accent/90 text-accent-foreground px-3 py-2 rounded-lg text-sm flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  AI Suggestion
                </div>
              </div>

              {/* AI Overlays list */}
              <div className="p-4 border-t border-border bg-secondary/30">
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  AI Analysis
                </p>
                <div className="space-y-2">
                  {aiOverlays.map((overlay, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg",
                        overlay.severity === "high"
                          ? "bg-destructive/10 border border-destructive/20"
                          : "bg-accent/10 border border-accent/20"
                      )}
                    >
                      {overlay.type === "conflict" ? (
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                      ) : (
                        <Lightbulb className="w-4 h-4 text-accent" />
                      )}
                      <span className="text-sm text-foreground">{overlay.message}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">
              {/* Comments */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-card">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Comments
                </h3>
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-amber-light flex items-center justify-center text-accent-foreground text-xs font-bold shrink-0">
                        {comment.author[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm text-foreground">
                            {comment.author}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {comment.time}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {comment.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Add Comment
                </Button>
              </div>

              {/* Action buttons */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-card">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Actions
                </h3>
                <div className="space-y-3">
                  <Button variant="accent" className="w-full gap-2">
                    <Check className="w-4 h-4" />
                    Approve Drawing
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <X className="w-4 h-4" />
                    Request Changes
                  </Button>
                  <Button variant="ghost" className="w-full gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Add Note
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default ArchitectDashboard;
