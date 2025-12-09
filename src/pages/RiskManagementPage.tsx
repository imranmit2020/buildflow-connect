import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ShieldAlert, AlertTriangle, TrendingUp, Clock, DollarSign, Users, Sparkles, Eye, Wrench } from "lucide-react";

const RiskManagementPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);

  const overallScore = 62;

  const riskBreakdown = [
    { name: "Schedule Risk", level: "High", score: 78, color: "bg-red-500", icon: Clock, description: "Electrical delay impacting timeline" },
    { name: "Budget Risk", level: "Medium", score: 52, color: "bg-yellow-500", icon: DollarSign, description: "Vendor price increases detected" },
    { name: "Vendor Risk", level: "Low", score: 28, color: "bg-green-500", icon: Users, description: "All vendors performing well" },
    { name: "Resource Risk", level: "Medium", score: 45, color: "bg-yellow-500", icon: Users, description: "Team capacity at 85%" },
  ];

  const aiActions = [
    { action: "Add subcontractor to accelerate wiring", priority: "High", impact: "-15 days delay" },
    { action: "Lock marble price before vendor increase", priority: "Medium", impact: "Save $2,400" },
    { action: "Reschedule flooring to avoid overlap", priority: "Medium", impact: "Reduce conflicts" },
  ];

  const riskEvents = [
    { date: "Dec 08", event: "Electrical delay detected", status: "active" },
    { date: "Dec 06", event: "Vendor B price increase", status: "resolved" },
    { date: "Dec 04", event: "Material shortage risk", status: "monitoring" },
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
                  <ShieldAlert className="h-6 w-6 text-primary" />
                  Risk Management Dashboard
                </h1>
                <p className="text-muted-foreground">Monitor and mitigate project risks</p>
              </div>
            </div>

            {/* Overall Risk Score */}
            <Card className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-500/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Overall Risk Score</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-foreground">{overallScore}</span>
                      <span className="text-lg text-muted-foreground">/100</span>
                    </div>
                    <Badge variant="secondary" className="mt-2 bg-yellow-500/20 text-yellow-600">
                      Medium Risk
                    </Badge>
                  </div>
                  <div className="w-32 h-32 rounded-full border-8 border-yellow-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <ShieldAlert className="h-8 w-8 mx-auto text-yellow-500" />
                      <span className="text-xs text-muted-foreground">Moderate</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {riskBreakdown.map((risk) => (
                <Card key={risk.name}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <risk.icon className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium text-foreground">{risk.name}</span>
                      </div>
                      <Badge variant={risk.level === "High" ? "destructive" : risk.level === "Medium" ? "secondary" : "outline"}>
                        {risk.level}
                      </Badge>
                    </div>
                    <Progress value={risk.score} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">{risk.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* AI Action Items */}
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    AI Action Items
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {aiActions.map((action, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{action.action}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={action.priority === "High" ? "destructive" : "secondary"} className="text-xs">
                            {action.priority}
                          </Badge>
                          <span className="text-xs text-green-600">{action.impact}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Wrench className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Risk Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Risk Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {riskEvents.map((event, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <span className="text-xs text-muted-foreground w-16">{event.date}</span>
                      <span className="flex-1 text-foreground">{event.event}</span>
                      <Badge variant={event.status === "active" ? "destructive" : event.status === "monitoring" ? "secondary" : "outline"}>
                        {event.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="gap-2">
                <Eye className="h-4 w-4" />
                View Details
              </Button>
              <Button variant="outline" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Apply AI Fix
              </Button>
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default RiskManagementPage;
