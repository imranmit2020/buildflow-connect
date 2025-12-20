import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plane, 
  Play, 
  Pause, 
  RotateCcw,
  MapPin,
  Camera,
  Video,
  Battery,
  Wifi,
  Signal,
  Wind,
  Thermometer,
  Calendar,
  Clock,
  Download,
  Upload,
  Eye,
  Layers,
  AlertTriangle,
  CheckCircle2,
  Bot,
  Sparkles,
  Map,
  Navigation,
  Target,
  Maximize2,
  Settings,
  Radio
} from "lucide-react";
import { cn } from "@/lib/utils";

const DroneHubPage = () => {
  const [selectedDrone, setSelectedDrone] = useState<string>("drone-1");
  const [isFlying, setIsFlying] = useState(false);

  const drones = [
    { 
      id: "drone-1", 
      name: "Surveyor Alpha", 
      status: "flying", 
      battery: 78, 
      signal: 95,
      altitude: "45m",
      speed: "12 m/s",
      mission: "Site Survey - Zone A"
    },
    { 
      id: "drone-2", 
      name: "Inspector Beta", 
      status: "charging", 
      battery: 32, 
      signal: 0,
      altitude: "0m",
      speed: "0 m/s",
      mission: "Charging..."
    },
    { 
      id: "drone-3", 
      name: "Scout Gamma", 
      status: "ready", 
      battery: 100, 
      signal: 98,
      altitude: "0m",
      speed: "0 m/s",
      mission: "Awaiting Mission"
    },
  ];

  const scheduledFlights = [
    { id: 1, name: "Morning Survey", time: "08:00 AM", drone: "Surveyor Alpha", status: "completed" },
    { id: 2, name: "Noon Inspection", time: "12:30 PM", drone: "Inspector Beta", status: "scheduled" },
    { id: 3, name: "Evening Progress", time: "05:00 PM", drone: "Scout Gamma", status: "scheduled" },
    { id: 4, name: "Safety Patrol", time: "03:00 PM", drone: "Surveyor Alpha", status: "in-progress" },
  ];

  const aiDetections = [
    { type: "progress", message: "Foundation work 95% complete in Zone A", confidence: 94, icon: CheckCircle2, color: "emerald" },
    { type: "safety", message: "Scaffolding irregularity detected in Zone C", confidence: 87, icon: AlertTriangle, color: "amber" },
    { type: "material", message: "Steel delivery confirmed in parking area", confidence: 91, icon: Layers, color: "blue" },
    { type: "worker", message: "12 workers detected in active zones", confidence: 96, icon: Target, color: "purple" },
  ];

  const recentCaptures = [
    { id: 1, type: "photo", name: "Zone_A_Overview.jpg", time: "2 min ago", size: "4.2 MB" },
    { id: 2, type: "3d", name: "Site_3D_Scan.ply", time: "15 min ago", size: "128 MB" },
    { id: 3, type: "video", name: "Inspection_Flight.mp4", time: "1 hour ago", size: "2.1 GB" },
    { id: 4, type: "thermal", name: "Thermal_Analysis.png", time: "3 hours ago", size: "8.4 MB" },
  ];

  const selectedDroneData = drones.find(d => d.id === selectedDrone);

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Autonomous Drone Hub</h1>
                  <p className="text-sm text-muted-foreground">Fleet management, AI analysis, and 3D mapping</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm text-emerald-400">1 Drone Active</span>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="w-4 h-4" />
                Schedule Flight
              </Button>
              <Button size="sm" className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-500">
                <Play className="w-4 h-4" />
                Launch Mission
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Live Feed */}
            <div className="col-span-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Drone Camera Feed */}
                  <div className="relative h-[400px] bg-gradient-to-br from-slate-900 to-slate-800">
                    {/* Simulated aerial view */}
                    <div className="absolute inset-0 overflow-hidden">
                      {/* Grid overlay */}
                      <div 
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                          backgroundSize: '50px 50px'
                        }}
                      />
                      
                      {/* Construction site from above */}
                      <div className="absolute inset-8 bg-gradient-to-br from-amber-900/30 to-amber-800/20 rounded-lg border border-amber-500/20">
                        {/* Buildings */}
                        <div className="absolute top-4 left-4 w-24 h-32 bg-gradient-to-br from-gray-600 to-gray-700 rounded shadow-lg" />
                        <div className="absolute top-8 right-8 w-32 h-24 bg-gradient-to-br from-gray-500 to-gray-600 rounded shadow-lg" />
                        <div className="absolute bottom-8 left-12 w-40 h-20 bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded border-2 border-dashed border-blue-500/50" />
                        
                        {/* AI Detection Boxes */}
                        <div className="absolute top-16 left-16 w-16 h-16 border-2 border-emerald-500 rounded animate-pulse">
                          <div className="absolute -top-6 left-0 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded">Worker</div>
                        </div>
                        <div className="absolute bottom-16 right-24 w-20 h-12 border-2 border-amber-500 rounded">
                          <div className="absolute -top-6 left-0 bg-amber-500 text-white text-xs px-2 py-0.5 rounded">Equipment</div>
                        </div>
                      </div>

                      {/* Drone crosshair */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 border-2 border-cyan-500/50 rounded-full">
                          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-cyan-500/50" />
                          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-cyan-500/50" />
                        </div>
                      </div>
                    </div>

                    {/* Telemetry Overlay */}
                    <div className="absolute top-4 left-4 space-y-2">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-white">
                            <Navigation className="w-4 h-4 text-cyan-400" />
                            <span>ALT: {selectedDroneData?.altitude}</span>
                          </div>
                          <div className="flex items-center gap-1 text-white">
                            <Wind className="w-4 h-4 text-cyan-400" />
                            <span>SPD: {selectedDroneData?.speed}</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="flex items-center gap-2 text-sm text-white">
                          <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                          <span>Recording: Zone A Survey</span>
                        </div>
                      </div>
                    </div>

                    {/* Battery & Signal */}
                    <div className="absolute top-4 right-4 space-y-2">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Battery className={cn(
                            "w-4 h-4",
                            selectedDroneData?.battery && selectedDroneData.battery > 50 ? "text-emerald-400" : "text-amber-400"
                          )} />
                          <span className="text-white text-sm">{selectedDroneData?.battery}%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Signal className="w-4 h-4 text-cyan-400" />
                          <span className="text-white text-sm">{selectedDroneData?.signal}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-black/70 backdrop-blur-sm">
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        className={cn(
                          "gap-2",
                          isFlying ? "bg-red-500 hover:bg-red-600" : "bg-emerald-500 hover:bg-emerald-600"
                        )}
                        onClick={() => setIsFlying(!isFlying)}
                      >
                        {isFlying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        {isFlying ? "Pause" : "Resume"}
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-black/70 backdrop-blur-sm">
                        <Camera className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-black/70 backdrop-blur-sm">
                        <Video className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-black/70 backdrop-blur-sm">
                        <Maximize2 className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Map Toggle */}
                    <div className="absolute bottom-4 right-4">
                      <Button size="sm" variant="secondary" className="bg-black/70 backdrop-blur-sm gap-2">
                        <Map className="w-4 h-4" />
                        Show Map
                      </Button>
                    </div>
                  </div>

                  {/* Drone Selector */}
                  <div className="p-4 bg-secondary/30 border-t border-border">
                    <div className="flex gap-4">
                      {drones.map((drone) => (
                        <div
                          key={drone.id}
                          onClick={() => setSelectedDrone(drone.id)}
                          className={cn(
                            "flex-1 p-3 rounded-lg border cursor-pointer transition-all",
                            selectedDrone === drone.id 
                              ? "border-cyan-500 bg-cyan-500/10" 
                              : "border-border hover:border-cyan-500/50"
                          )}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Plane className={cn(
                                "w-4 h-4",
                                drone.status === "flying" ? "text-emerald-500" : 
                                drone.status === "charging" ? "text-amber-500" : "text-muted-foreground"
                              )} />
                              <span className="font-medium text-sm">{drone.name}</span>
                            </div>
                            <Badge variant="outline" className={cn(
                              "text-xs capitalize",
                              drone.status === "flying" ? "border-emerald-500 text-emerald-500" :
                              drone.status === "charging" ? "border-amber-500 text-amber-500" : ""
                            )}>
                              {drone.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Battery className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{drone.battery}%</span>
                            </div>
                            <Progress value={drone.battery} className="flex-1 h-1" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Detections */}
              <div className="grid grid-cols-4 gap-4 mt-6">
                {aiDetections.map((detection, idx) => (
                  <Card key={idx} className={cn(
                    "border-l-4",
                    detection.color === "emerald" ? "border-l-emerald-500" :
                    detection.color === "amber" ? "border-l-amber-500" :
                    detection.color === "blue" ? "border-l-blue-500" : "border-l-purple-500"
                  )}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <detection.icon className={cn(
                          "w-4 h-4",
                          detection.color === "emerald" ? "text-emerald-500" :
                          detection.color === "amber" ? "text-amber-500" :
                          detection.color === "blue" ? "text-blue-500" : "text-purple-500"
                        )} />
                        <span className="text-xs text-muted-foreground">{detection.confidence}% confidence</span>
                      </div>
                      <p className="text-sm text-foreground">{detection.message}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="col-span-4 space-y-6">
              {/* Scheduled Flights */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Today's Flights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {scheduledFlights.map((flight) => (
                    <div key={flight.id} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        flight.status === "completed" ? "bg-emerald-500" :
                        flight.status === "in-progress" ? "bg-cyan-500 animate-pulse" : "bg-muted-foreground"
                      )} />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{flight.name}</p>
                        <p className="text-xs text-muted-foreground">{flight.drone}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{flight.time}</p>
                        <p className="text-xs text-muted-foreground capitalize">{flight.status}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Captures */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Camera className="w-4 h-4" />
                    Recent Captures
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {recentCaptures.map((capture) => (
                    <div key={capture.id} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary cursor-pointer transition-colors">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        capture.type === "photo" ? "bg-blue-500/20" :
                        capture.type === "video" ? "bg-red-500/20" :
                        capture.type === "3d" ? "bg-purple-500/20" : "bg-amber-500/20"
                      )}>
                        {capture.type === "photo" ? <Camera className="w-5 h-5 text-blue-500" /> :
                         capture.type === "video" ? <Video className="w-5 h-5 text-red-500" /> :
                         capture.type === "3d" ? <Layers className="w-5 h-5 text-purple-500" /> :
                         <Thermometer className="w-5 h-5 text-amber-500" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm truncate">{capture.name}</p>
                        <p className="text-xs text-muted-foreground">{capture.time} • {capture.size}</p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Weather Conditions */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Wind className="w-4 h-4" />
                    Flight Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-emerald-500/10 rounded-lg">
                      <Wind className="w-6 h-6 mx-auto text-emerald-500 mb-1" />
                      <p className="text-lg font-bold">8 km/h</p>
                      <p className="text-xs text-muted-foreground">Wind Speed</p>
                    </div>
                    <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                      <Thermometer className="w-6 h-6 mx-auto text-blue-500 mb-1" />
                      <p className="text-lg font-bold">28°C</p>
                      <p className="text-xs text-muted-foreground">Temperature</p>
                    </div>
                  </div>
                  <Badge className="w-full justify-center mt-4 bg-emerald-500/20 text-emerald-500 border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Optimal Flying Conditions
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DroneHubPage;
