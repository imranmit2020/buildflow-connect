import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Camera, Shield, Clock, Users, CheckCircle, Image } from "lucide-react";

const AttendancePage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);

  const attendanceStats = [
    { label: "Present Today", value: "24", total: "28" },
    { label: "On Time", value: "21", total: "24" },
    { label: "Late Arrivals", value: "3", total: "24" },
    { label: "Absent", value: "4", total: "28" },
  ];

  const recentCheckins = [
    { name: "John S.", role: "Electrician", task: "Electrical Wiring", time: "7:42 AM", status: "verified" },
    { name: "Maria L.", role: "Tile Specialist", task: "Bathroom Tiling", time: "7:45 AM", status: "verified" },
    { name: "Ahmed K.", role: "Plumber", task: "Plumbing Work", time: "7:52 AM", status: "verified" },
    { name: "David R.", role: "Helper", task: "General Support", time: "8:05 AM", status: "late" },
  ];

  const currentScan = {
    name: "John S.",
    role: "Electrician",
    task: "Electrical Wiring",
    time: "7:42 AM",
    status: "Identity verified. No mismatch.",
  };

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
                  <UserCheck className="h-6 w-6 text-primary" />
                  Workforce Attendance
                </h1>
                <p className="text-muted-foreground">AI Face Recognition Check-in System</p>
              </div>
              <Badge variant="default" className="text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Scanner Active
              </Badge>
            </div>

            {/* Attendance Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {attendanceStats.map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}<span className="text-lg text-muted-foreground">/{stat.total}</span>
                    </p>
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
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-primary/30 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 border-4 border-primary rounded-full animate-pulse" />
                    </div>
                    <div className="text-center z-10">
                      <Image className="h-16 w-16 mx-auto text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">Face Detected — {currentScan.name}</p>
                    </div>
                  </div>
                  
                  {/* Scan Status */}
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <Shield className="h-5 w-5" />
                      <span className="font-medium">AI Security Note</span>
                    </div>
                    <p className="text-foreground">{currentScan.status}</p>
                  </div>

                  {/* Current Scan Info */}
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Check-in Time:</span>
                      <span className="text-foreground font-medium">{currentScan.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Role:</span>
                      <span className="text-foreground font-medium">{currentScan.role}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Assigned Task:</span>
                      <span className="text-foreground font-medium">{currentScan.task}</span>
                    </div>
                  </div>

                  <Button className="w-full mt-4 gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Confirm Check-In
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Check-ins */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Check-ins
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentCheckins.map((checkin, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{checkin.name}</span>
                          <Badge variant="outline" className="text-xs">{checkin.role}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{checkin.task}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{checkin.time}</p>
                        <Badge variant={checkin.status === "verified" ? "outline" : "destructive"} className="text-xs">
                          {checkin.status === "verified" ? "✓ Verified" : "Late"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default AttendancePage;
