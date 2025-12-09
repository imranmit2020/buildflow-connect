import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Camera, CheckCircle, XCircle, Eye, Bell, Image } from "lucide-react";

const SafetyScannerPage = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);

  const aiFlags = [
    { id: 1, issue: "Worker missing helmet", severity: "high", location: "Zone A", time: "2 min ago" },
    { id: 2, issue: "Uneven scaffold detected", severity: "high", location: "Zone B", time: "5 min ago" },
    { id: 3, issue: "Wet floor — slip risk", severity: "medium", location: "Zone C", time: "12 min ago" },
    { id: 4, issue: "Improper lifting technique", severity: "low", location: "Zone A", time: "18 min ago" },
  ];

  const safetyStats = [
    { label: "Days Without Incident", value: "14", trend: "up" },
    { label: "Active Flags", value: "4", trend: "down" },
    { label: "Resolved Today", value: "8", trend: "up" },
    { label: "Compliance Rate", value: "94%", trend: "up" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Safety Compliance Scanner
                </h1>
                <p className="text-muted-foreground">AI Vision-powered safety monitoring</p>
              </div>
              <Badge variant="destructive" className="text-sm animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping" />
                LIVE
              </Badge>
            </div>

            {/* Safety Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {safetyStats.map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Live Camera Feed */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Live Camera Feed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <Image className="h-16 w-16 mx-auto text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">Camera Feed Preview</p>
                      <p className="text-xs text-muted-foreground">AI analysis running...</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">Zone A</Button>
                    <Button variant="outline" size="sm" className="flex-1">Zone B</Button>
                    <Button variant="outline" size="sm" className="flex-1">Zone C</Button>
                  </div>
                </CardContent>
              </Card>

              {/* AI Flags */}
              <Card className="border-red-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <AlertTriangle className="h-5 w-5" />
                    AI Flags
                    <Badge variant="destructive" className="ml-auto">Severity: High</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {aiFlags.map((flag) => (
                    <div key={flag.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border">
                      <div className={`w-3 h-3 rounded-full ${
                        flag.severity === "high" ? "bg-red-500" : 
                        flag.severity === "medium" ? "bg-yellow-500" : "bg-blue-500"
                      }`} />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{flag.issue}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{flag.location}</span>
                          <span>•</span>
                          <span>{flag.time}</span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-green-600">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="gap-2">
                <Bell className="h-4 w-4" />
                Alert Contractor
              </Button>
              <Button variant="outline" className="gap-2">
                <Camera className="h-4 w-4" />
                Request Photo
              </Button>
              <Button variant="secondary" className="gap-2">
                <CheckCircle className="h-4 w-4" />
                Mark Resolved
              </Button>
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default SafetyScannerPage;
