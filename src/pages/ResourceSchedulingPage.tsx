import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Wrench, Calendar, AlertTriangle, Plus, Sparkles, CheckCircle } from "lucide-react";

const ResourceSchedulingPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);

  const workers = [
    { team: "Team A", task: "Electrical Wiring", dates: "Dec 8–12", status: "active", members: 4 },
    { team: "Team B", task: "Tile Installation", dates: "Dec 10–14", status: "scheduled", members: 3 },
    { team: "Team C", task: "Plumbing Work", dates: "Dec 12–16", status: "available", members: 2 },
  ];

  const equipment = [
    { name: "Concrete Mixer", status: "Reserved", date: "Dec 9", availability: "booked" },
    { name: "Tile Cutter", status: "Available", date: "-", availability: "available" },
    { name: "Generator", status: "In Use", date: "Dec 8–15", availability: "in-use" },
    { name: "Scaffolding Set", status: "Available", date: "-", availability: "available" },
  ];

  const aiInsights = [
    { issue: "Team A overbooked — 3 conflicts detected", severity: "high" },
    { issue: "Reassign Team C to avoid bottleneck", severity: "medium" },
    { issue: "Generator requires service before Dec 12", severity: "low" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader onCopilotToggle={() => setCopilotOpen(!copilotOpen)} />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Resource Scheduling
                </h1>
                <p className="text-muted-foreground">Manage workers, teams, and equipment</p>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Resource
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Workers & Teams */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Workers & Teams
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {workers.map((worker, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{worker.team}</span>
                          <Badge variant="outline" className="text-xs">{worker.members} members</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{worker.task}</p>
                        <p className="text-xs text-muted-foreground">{worker.dates}</p>
                      </div>
                      <Badge variant={
                        worker.status === "active" ? "default" : 
                        worker.status === "scheduled" ? "secondary" : "outline"
                      }>
                        {worker.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Equipment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Equipment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {equipment.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.availability === "available" ? "bg-green-500/20" :
                        item.availability === "booked" ? "bg-yellow-500/20" : "bg-blue-500/20"
                      }`}>
                        <Wrench className={`h-5 w-5 ${
                          item.availability === "available" ? "text-green-600" :
                          item.availability === "booked" ? "text-yellow-600" : "text-blue-600"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-foreground">{item.name}</span>
                        <p className="text-sm text-muted-foreground">{item.date !== "-" ? item.date : "No reservation"}</p>
                      </div>
                      <Badge variant={
                        item.availability === "available" ? "outline" :
                        item.availability === "booked" ? "secondary" : "default"
                      }>
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* AI Schedule Insights */}
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  AI Schedule Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <AlertTriangle className={`h-5 w-5 ${
                      insight.severity === "high" ? "text-red-500" :
                      insight.severity === "medium" ? "text-yellow-500" : "text-blue-500"
                    }`} />
                    <span className="flex-1 text-foreground">{insight.issue}</span>
                    <Button size="sm" variant="outline">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="gap-2">
                <Sparkles className="h-4 w-4" />
                Auto-Optimize
              </Button>
              <Button variant="outline" className="gap-2">
                <Plus className="h-4 w-4" />
                Add Resource
              </Button>
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default ResourceSchedulingPage;
