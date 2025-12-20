import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Eye, Camera, Upload, Video, AlertTriangle, CheckCircle2, 
  Shield, HardHat, Truck, Building2, Scan, Zap, TrendingUp,
  MapPin, Clock, Users, Activity, Brain, Target
} from "lucide-react";
import { cn } from "@/lib/utils";

const ComputerVisionPage = () => {
  const [selectedCamera, setSelectedCamera] = useState("cam-1");

  const cameras = [
    { id: "cam-1", name: "Main Entrance", location: "Gate A", status: "online", alerts: 2 },
    { id: "cam-2", name: "Tower A - Floor 12", location: "East Wing", status: "online", alerts: 0 },
    { id: "cam-3", name: "Material Yard", location: "South", status: "online", alerts: 1 },
    { id: "cam-4", name: "Crane Area", location: "Central", status: "offline", alerts: 0 },
  ];

  const detections = [
    { id: 1, type: "safety", label: "Missing Hard Hat", confidence: 94, severity: "high", time: "2 min ago", location: "Zone B" },
    { id: 2, type: "progress", label: "Rebar Installation", confidence: 89, severity: "info", time: "5 min ago", location: "Floor 8" },
    { id: 3, type: "safety", label: "Unauthorized Access", confidence: 97, severity: "critical", time: "8 min ago", location: "Gate C" },
    { id: 4, type: "equipment", label: "Crane Movement", confidence: 92, severity: "info", time: "12 min ago", location: "Central" },
    { id: 5, type: "progress", label: "Concrete Pour Complete", confidence: 88, severity: "success", time: "15 min ago", location: "Floor 7" },
  ];

  const analytics = [
    { label: "Objects Detected Today", value: "12,456", change: "+8%", icon: Target },
    { label: "Safety Violations", value: "23", change: "-15%", icon: Shield },
    { label: "Workers Tracked", value: "187", change: "+3%", icon: Users },
    { label: "Progress Events", value: "89", change: "+12%", icon: TrendingUp },
  ];

  const cvModels = [
    { name: "PPE Detection", accuracy: 96, status: "active" },
    { name: "Progress Tracking", accuracy: 91, status: "active" },
    { name: "Equipment Recognition", accuracy: 94, status: "active" },
    { name: "Crowd Analysis", accuracy: 88, status: "training" },
  ];

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-red-500/20 text-red-500 border-red-500/30";
      case "high": return "bg-orange-500/20 text-orange-500 border-orange-500/30";
      case "success": return "bg-emerald-500/20 text-emerald-500 border-emerald-500/30";
      default: return "bg-blue-500/20 text-blue-500 border-blue-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Computer Vision Analytics</h1>
                <p className="text-sm text-muted-foreground">AI-powered site monitoring and safety analysis</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Upload className="w-4 h-4" />
                Upload Footage
              </Button>
              <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-500">
                <Video className="w-4 h-4" />
                Live Analysis
              </Button>
            </div>
          </div>

          {/* Analytics Row */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {analytics.map((stat, i) => (
              <Card key={i} className="bg-secondary/30">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-cyan-500" />
                    <Badge variant="outline" className={stat.change.startsWith("+") ? "text-emerald-500" : "text-red-500"}>
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Main Video Feed */}
            <div className="col-span-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Video Player Placeholder */}
                  <div className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="w-16 h-16 mx-auto text-cyan-500/50 mb-4" />
                        <p className="text-white/80 font-medium">Live Feed - Main Entrance</p>
                        <p className="text-white/50 text-sm">AI Processing Active</p>
                      </div>
                    </div>
                    
                    {/* Overlay Detection Boxes (Simulated) */}
                    <div className="absolute top-16 left-24 w-20 h-28 border-2 border-emerald-500 rounded">
                      <span className="absolute -top-5 left-0 text-xs bg-emerald-500 text-white px-1 rounded">Worker ✓</span>
                    </div>
                    <div className="absolute top-20 right-32 w-16 h-24 border-2 border-orange-500 rounded">
                      <span className="absolute -top-5 left-0 text-xs bg-orange-500 text-white px-1 rounded">No Helmet!</span>
                    </div>
                    <div className="absolute bottom-24 left-1/2 w-32 h-20 border-2 border-blue-500 rounded">
                      <span className="absolute -top-5 left-0 text-xs bg-blue-500 text-white px-1 rounded">Excavator</span>
                    </div>

                    {/* Live Indicator */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-white text-sm">LIVE</span>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <div className="bg-black/50 px-3 py-2 rounded-lg">
                        <p className="text-white text-xs">Objects: <span className="text-cyan-400 font-bold">12</span></p>
                      </div>
                      <div className="bg-black/50 px-3 py-2 rounded-lg">
                        <p className="text-white text-xs">FPS: <span className="text-cyan-400 font-bold">30</span></p>
                      </div>
                      <div className="bg-black/50 px-3 py-2 rounded-lg">
                        <p className="text-white text-xs">AI Latency: <span className="text-cyan-400 font-bold">45ms</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Camera Selector */}
                  <div className="p-4 border-t border-border">
                    <div className="flex gap-2 overflow-x-auto">
                      {cameras.map((cam) => (
                        <Button
                          key={cam.id}
                          variant={selectedCamera === cam.id ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCamera(cam.id)}
                          className="relative shrink-0"
                        >
                          <Camera className="w-4 h-4 mr-2" />
                          {cam.name}
                          {cam.alerts > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                              {cam.alerts}
                            </span>
                          )}
                          {cam.status === "offline" && (
                            <Badge variant="outline" className="ml-2 text-red-500 text-[10px]">Offline</Badge>
                          )}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detection Log */}
              <Card className="mt-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Scan className="w-4 h-4" />
                    Recent Detections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {detections.map((det) => (
                      <div key={det.id} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center border", getSeverityStyles(det.severity))}>
                          {det.type === "safety" ? <Shield className="w-5 h-5" /> :
                           det.type === "equipment" ? <Truck className="w-5 h-5" /> :
                           <Building2 className="w-5 h-5" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-sm">{det.label}</p>
                            <Badge variant="outline" className="text-[10px]">{det.confidence}% confidence</Badge>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{det.location}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{det.time}</span>
                          </div>
                        </div>
                        <Badge className={getSeverityStyles(det.severity)}>{det.severity}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Panel */}
            <div className="col-span-4 space-y-6">
              {/* AI Models Status */}
              <Card className="border-cyan-500/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    AI Models
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cvModels.map((model, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{model.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{model.accuracy}%</span>
                          <Badge 
                            variant="outline" 
                            className={model.status === "active" ? "text-emerald-500" : "text-amber-500"}
                          >
                            {model.status}
                          </Badge>
                        </div>
                      </div>
                      <Progress value={model.accuracy} className="h-1.5" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Safety Summary */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Safety Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <div className="flex items-center gap-2">
                        <HardHat className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm">PPE Compliance</span>
                      </div>
                      <span className="font-bold text-emerald-500">94%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                        <span className="text-sm">Active Warnings</span>
                      </div>
                      <span className="font-bold text-amber-500">3</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-500" />
                        <span className="text-sm">Workers on Site</span>
                      </div>
                      <span className="font-bold text-blue-500">187</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Activity Feed */}
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-5 h-5 text-cyan-500" />
                    <span className="font-medium">Real-time Activity</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">• Crane #2 movement detected in Zone A</p>
                    <p className="text-muted-foreground">• 12 workers entered via Gate B</p>
                    <p className="text-muted-foreground">• Material delivery truck identified</p>
                    <p className="text-muted-foreground">• Concrete mixer active on Floor 8</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ComputerVisionPage;
