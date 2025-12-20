import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  Box, 
  Layers, 
  Eye, 
  EyeOff, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut,
  Play,
  Pause,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Wifi,
  ThermometerSun,
  Droplets,
  Wind,
  Activity,
  MapPin,
  Building2,
  Bot,
  Sparkles,
  Camera,
  Maximize2,
  Clock,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

const DigitalTwinPage = () => {
  const [selectedFloor, setSelectedFloor] = useState(2);
  const [timelinePosition, setTimelinePosition] = useState([50]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLayers, setShowLayers] = useState({
    structure: true,
    electrical: true,
    plumbing: false,
    hvac: true,
    interior: false,
  });

  const iotSensors = [
    { id: 1, name: "Concrete Sensor A1", type: "curing", value: "72%", status: "optimal", icon: ThermometerSun },
    { id: 2, name: "Humidity Zone B", type: "humidity", value: "45%", status: "warning", icon: Droplets },
    { id: 3, name: "Air Quality C3", type: "air", value: "Good", status: "optimal", icon: Wind },
    { id: 4, name: "Structural Load D2", type: "load", value: "Normal", status: "optimal", icon: Activity },
  ];

  const aiPredictions = [
    { type: "delay", message: "HVAC installation may delay by 3 days due to material shortage", confidence: 87, severity: "high" },
    { type: "cost", message: "Budget overrun of ~$12,400 predicted in electrical phase", confidence: 79, severity: "medium" },
    { type: "safety", message: "Scaffolding in Zone C needs inspection before Dec 20", confidence: 94, severity: "high" },
    { type: "optimization", message: "Reroute plumbing through Zone B to save 2 days", confidence: 82, severity: "info" },
  ];

  const floors = [
    { id: 0, name: "Foundation", progress: 100 },
    { id: 1, name: "Ground Floor", progress: 85 },
    { id: 2, name: "First Floor", progress: 60 },
    { id: 3, name: "Second Floor", progress: 25 },
    { id: 4, name: "Roof", progress: 0 },
  ];

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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Box className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">AI Digital Twin</h1>
                  <p className="text-sm text-muted-foreground">Real-time 3D visualization with IoT & AI predictions</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 gap-1">
                <Wifi className="w-3 h-3" />
                24 IoT Sensors Active
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 gap-1">
                <Cpu className="w-3 h-3" />
                AI Processing
              </Badge>
              <Button variant="outline" size="sm">
                <Maximize2 className="w-4 h-4 mr-2" />
                Fullscreen
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* 3D Viewport */}
            <div className="col-span-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  {/* 3D Scene Container */}
                  <div className="relative h-[500px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                    {/* Grid Floor */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-500/20 to-transparent" 
                           style={{ 
                             backgroundImage: 'linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px)',
                             backgroundSize: '40px 40px',
                             transform: 'perspective(500px) rotateX(60deg)',
                             transformOrigin: 'bottom'
                           }} 
                      />
                    </div>
                    
                    {/* 3D Building Representation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative" style={{ perspective: '1000px' }}>
                        {/* Building Floors */}
                        <div className="relative transform-gpu" style={{ transform: 'rotateX(-15deg) rotateY(-25deg)' }}>
                          {floors.map((floor, idx) => (
                            <div
                              key={floor.id}
                              onClick={() => setSelectedFloor(floor.id)}
                              className={cn(
                                "relative w-64 h-16 mb-1 rounded transition-all duration-300 cursor-pointer",
                                selectedFloor === floor.id 
                                  ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/50" 
                                  : "hover:ring-1 hover:ring-blue-500/50",
                                floor.progress === 100 
                                  ? "bg-gradient-to-r from-emerald-600/80 to-emerald-500/60" 
                                  : floor.progress > 0 
                                  ? "bg-gradient-to-r from-blue-600/80 to-blue-500/60" 
                                  : "bg-gradient-to-r from-slate-600/50 to-slate-500/30 border border-dashed border-slate-500/50"
                              )}
                              style={{ 
                                transform: `translateZ(${idx * 20}px)`,
                                boxShadow: selectedFloor === floor.id ? '0 0 30px rgba(59,130,246,0.5)' : undefined
                              }}
                            >
                              <div className="absolute inset-0 flex items-center justify-between px-4">
                                <span className="text-white/80 text-sm font-medium">{floor.name}</span>
                                <span className="text-white/60 text-xs">{floor.progress}%</span>
                              </div>
                              {/* Progress indicator */}
                              <div 
                                className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-b"
                                style={{ width: `${floor.progress}%` }}
                              />
                            </div>
                          ))}
                        </div>

                        {/* AI Hotspots */}
                        <div className="absolute top-12 left-32 animate-pulse">
                          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <AlertTriangle className="w-2 h-2 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-28 right-8">
                          <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center animate-bounce">
                            <Sparkles className="w-2 h-2 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Stats */}
                    <div className="absolute top-4 left-4 space-y-2">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">
                        <div className="flex items-center gap-2 text-white/80">
                          <Building2 className="w-4 h-4 text-blue-400" />
                          <span>Green Valley Villa</span>
                        </div>
                      </div>
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">
                        <div className="flex items-center gap-2 text-white/80">
                          <Clock className="w-4 h-4 text-emerald-400" />
                          <span>Last sync: 2 min ago</span>
                        </div>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-black/60 backdrop-blur-sm">
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-black/60 backdrop-blur-sm">
                        <ZoomIn className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-black/60 backdrop-blur-sm">
                        <ZoomOut className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* View Cameras */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-black/60 backdrop-blur-sm gap-2">
                        <Camera className="w-4 h-4" />
                        Drone View
                      </Button>
                    </div>
                  </div>

                  {/* Timeline Scrubber */}
                  <div className="p-4 bg-secondary/30 border-t border-border">
                    <div className="flex items-center gap-4">
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                      <div className="flex-1">
                        <Slider
                          value={timelinePosition}
                          onValueChange={setTimelinePosition}
                          max={100}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>Oct 2024</span>
                          <span>Current</span>
                          <span>Mar 2025 (Projected)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">Dec 10, 2024</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* IoT Sensors Grid */}
              <div className="grid grid-cols-4 gap-4 mt-6">
                {iotSensors.map((sensor) => (
                  <Card key={sensor.id} className={cn(
                    "border-l-4",
                    sensor.status === "optimal" ? "border-l-emerald-500" : "border-l-amber-500"
                  )}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <sensor.icon className={cn(
                          "w-5 h-5",
                          sensor.status === "optimal" ? "text-emerald-500" : "text-amber-500"
                        )} />
                        <Badge variant="outline" className={cn(
                          "text-xs",
                          sensor.status === "optimal" 
                            ? "border-emerald-500/30 text-emerald-500" 
                            : "border-amber-500/30 text-amber-500"
                        )}>
                          {sensor.status}
                        </Badge>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{sensor.value}</p>
                      <p className="text-xs text-muted-foreground truncate">{sensor.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="col-span-4 space-y-6">
              {/* Layer Controls */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Layer Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(showLayers).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {value ? <Eye className="w-4 h-4 text-primary" /> : <EyeOff className="w-4 h-4 text-muted-foreground" />}
                        <span className="text-sm capitalize">{key}</span>
                      </div>
                      <Switch
                        checked={value}
                        onCheckedChange={(checked) => setShowLayers(prev => ({ ...prev, [key]: checked }))}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* AI Predictions */}
              <Card className="border-primary/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Bot className="w-4 h-4 text-primary" />
                    AI Predictions
                    <Badge className="bg-primary/20 text-primary border-0 ml-auto">Live</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {aiPredictions.map((prediction, idx) => (
                    <div 
                      key={idx} 
                      className={cn(
                        "p-3 rounded-lg border",
                        prediction.severity === "high" 
                          ? "bg-red-500/10 border-red-500/30" 
                          : prediction.severity === "medium"
                          ? "bg-amber-500/10 border-amber-500/30"
                          : "bg-blue-500/10 border-blue-500/30"
                      )}
                    >
                      <div className="flex items-start gap-2">
                        {prediction.severity === "high" ? (
                          <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        ) : prediction.severity === "medium" ? (
                          <TrendingUp className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        ) : (
                          <Sparkles className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm text-foreground">{prediction.message}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-muted-foreground">
                              {prediction.confidence}% confidence
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Floor Details */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Floor Details: {floors[selectedFloor]?.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="font-bold">{floors[selectedFloor]?.progress}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-300"
                        style={{ width: `${floors[selectedFloor]?.progress}%` }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Active Tasks</p>
                        <p className="text-lg font-bold">8</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Workers</p>
                        <p className="text-lg font-bold">12</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Issues</p>
                        <p className="text-lg font-bold text-amber-500">2</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">IoT Sensors</p>
                        <p className="text-lg font-bold">6</p>
                      </div>
                    </div>
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

export default DigitalTwinPage;
