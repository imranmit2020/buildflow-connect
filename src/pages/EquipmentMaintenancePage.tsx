import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, AlertTriangle, CheckCircle, Calendar, Clock, Bot } from "lucide-react";

const EquipmentMaintenancePage = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);

  const equipment = [
    { name: "Concrete Mixer", nextMaintenance: "Dec 20", status: "ok", lastService: "Nov 15", hours: 120 },
    { name: "Tile Cutter", nextMaintenance: "-", status: "ok", lastService: "Dec 01", hours: 45 },
    { name: "Generator", nextMaintenance: "Overdue", status: "overdue", lastService: "Oct 28", hours: 280 },
    { name: "Scaffolding Set A", nextMaintenance: "Dec 25", status: "ok", lastService: "Nov 20", hours: 0 },
    { name: "Power Drill Set", nextMaintenance: "Dec 18", status: "warning", lastService: "Nov 10", hours: 95 },
  ];

  const stats = [
    { label: "Total Equipment", value: "12" },
    { label: "OK Status", value: "9" },
    { label: "Needs Attention", value: "2" },
    { label: "Overdue", value: "1" },
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
                  <Wrench className="h-6 w-6 text-primary" />
                  Equipment Maintenance Tracker
                </h1>
                <p className="text-muted-foreground">Monitor and schedule equipment maintenance</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Note */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Bot className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">AI Recommendation</p>
                    <p className="text-muted-foreground">Service generator before Dec 12 to avoid downtime during critical electrical work.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Equipment List */}
            <Card>
              <CardHeader>
                <CardTitle>Equipment Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {equipment.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.status === "ok" ? "bg-green-500/20" :
                        item.status === "warning" ? "bg-yellow-500/20" : "bg-red-500/20"
                      }`}>
                        {item.status === "ok" ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : item.status === "warning" ? (
                          <Clock className="h-5 w-5 text-yellow-600" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-foreground">{item.name}</span>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Last Service: {item.lastService}</span>
                          <span>•</span>
                          <span>Hours: {item.hours}h</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Next Maintenance</p>
                        <Badge variant={
                          item.status === "ok" ? "outline" :
                          item.status === "warning" ? "secondary" : "destructive"
                        }>
                          {item.nextMaintenance}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Calendar className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="gap-2">
                <CheckCircle className="h-4 w-4" />
                Mark Serviced
              </Button>
              <Button variant="outline" className="gap-2">
                <Calendar className="h-4 w-4" />
                Schedule Maintenance
              </Button>
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default EquipmentMaintenancePage;
