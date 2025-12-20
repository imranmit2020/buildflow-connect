import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { 
  Smartphone, 
  Glasses, 
  Sun, 
  Moon, 
  Cloud, 
  CloudRain,
  Camera,
  Share2,
  Download,
  Maximize2,
  RotateCcw,
  Move3D,
  Layers,
  Eye,
  Sparkles,
  MapPin,
  Play,
  QrCode,
  Users,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Palette
} from "lucide-react";
import { cn } from "@/lib/utils";

const ARVisualizerPage = () => {
  const [selectedView, setSelectedView] = useState<"exterior" | "interior" | "walkthrough">("exterior");
  const [timeOfDay, setTimeOfDay] = useState([12]);
  const [weather, setWeather] = useState<"sunny" | "cloudy" | "rainy">("sunny");
  const [showFurniture, setShowFurniture] = useState(true);
  const [showAnnotations, setShowAnnotations] = useState(true);

  const arFeatures = [
    { id: 1, name: "Measure Distances", icon: Move3D, description: "Tap any two points to measure real-world distances" },
    { id: 2, name: "Change Materials", icon: Palette, description: "Swap flooring, wall colors, and finishes in real-time" },
    { id: 3, name: "Add Furniture", icon: Layers, description: "Place virtual furniture to see how it fits" },
    { id: 4, name: "Sun Study", icon: Sun, description: "See how sunlight moves through the space throughout the day" },
  ];

  const savedViews = [
    { id: 1, name: "Living Room - Morning", thumbnail: "🌅", time: "8:00 AM" },
    { id: 2, name: "Bedroom - Sunset", thumbnail: "🌆", time: "6:00 PM" },
    { id: 3, name: "Kitchen - Noon", thumbnail: "☀️", time: "12:00 PM" },
    { id: 4, name: "Garden View", thumbnail: "🌿", time: "3:00 PM" },
  ];

  const collaborators = [
    { id: 1, name: "Imran A.", role: "Client", avatar: "IA", online: true },
    { id: 2, name: "Sarah K.", role: "Architect", avatar: "SK", online: true },
    { id: 3, name: "Mike R.", role: "Designer", avatar: "MR", online: false },
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
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Glasses className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">AR Site Visualization</h1>
                  <p className="text-sm text-muted-foreground">See your finished building before it's built</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 gap-1">
                <Sparkles className="w-3 h-3" />
                AI Enhanced
              </Badge>
              <Button variant="outline" size="sm" className="gap-2">
                <QrCode className="w-4 h-4" />
                Open on Mobile
              </Button>
              <Button size="sm" className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500">
                <Play className="w-4 h-4" />
                Launch AR
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Main AR Viewport */}
            <div className="col-span-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  {/* AR Preview Container */}
                  <div className="relative h-[500px] bg-gradient-to-br from-sky-400 via-sky-300 to-blue-200 overflow-hidden">
                    {/* Simulated AR View */}
                    
                    {/* Ground/Environment */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-emerald-600/40 to-transparent" />
                    
                    {/* Building Visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Main Building */}
                        <div className="relative w-80 h-64 bg-gradient-to-br from-white/90 to-gray-100/80 rounded-lg shadow-2xl transform perspective-1000 rotate-y-[-5deg]">
                          {/* Roof */}
                          <div className="absolute -top-8 left-0 right-0 h-12 bg-gradient-to-br from-amber-700 to-amber-800 rounded-t-lg transform skew-x-[-2deg]" />
                          
                          {/* Windows */}
                          <div className="absolute top-8 left-6 grid grid-cols-3 gap-4">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="w-16 h-20 bg-gradient-to-br from-sky-200 to-blue-300 rounded border-2 border-white/50 shadow-inner">
                                <div className="w-full h-full bg-gradient-to-br from-transparent to-white/30" />
                              </div>
                            ))}
                          </div>
                          
                          {/* Ground Floor */}
                          <div className="absolute bottom-4 left-6 right-6 flex gap-4">
                            {/* Door */}
                            <div className="w-14 h-24 bg-gradient-to-b from-amber-600 to-amber-700 rounded-t-lg shadow-lg">
                              <div className="w-2 h-2 bg-amber-400 rounded-full absolute right-2 top-12" />
                            </div>
                            {/* Large Window */}
                            <div className="flex-1 h-20 bg-gradient-to-br from-sky-200 to-blue-300 rounded border-2 border-white/50 shadow-inner" />
                          </div>

                          {/* AR Hotspot */}
                          <div className="absolute top-4 right-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/50">
                            <MapPin className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Garden */}
                        <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-4">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-6 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full transform" style={{ transform: `translateY(${Math.random() * 8}px)` }} />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sun Position Indicator */}
                    <div 
                      className="absolute w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg shadow-yellow-500/50"
                      style={{ 
                        top: `${20 + (12 - Math.abs(timeOfDay[0] - 12)) * 3}%`,
                        left: `${10 + timeOfDay[0] * 3.5}%`,
                        transition: 'all 0.5s ease'
                      }}
                    >
                      <Sun className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    {/* Weather Overlay */}
                    {weather === "cloudy" && (
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-400/30 to-transparent pointer-events-none" />
                    )}
                    {weather === "rainy" && (
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-600/40 to-transparent pointer-events-none">
                        <div className="absolute inset-0 animate-rain opacity-20" />
                      </div>
                    )}

                    {/* AR Controls Overlay */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-lg">
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-lg">
                        <Move3D className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-lg">
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* View Mode Tabs */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 flex gap-1 shadow-lg">
                        {["exterior", "interior", "walkthrough"].map((view) => (
                          <Button
                            key={view}
                            size="sm"
                            variant={selectedView === view ? "default" : "ghost"}
                            onClick={() => setSelectedView(view as any)}
                            className="capitalize"
                          >
                            {view}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Device Indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-white" />
                        <span className="text-white text-sm">Point camera at location marker</span>
                      </div>
                    </div>

                    {/* Share/Download */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-lg">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-lg">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-lg">
                        <Maximize2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Time of Day Slider */}
                  <div className="p-4 bg-secondary/30 border-t border-border">
                    <div className="flex items-center gap-4">
                      <Moon className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <Slider
                          value={timeOfDay}
                          onValueChange={setTimeOfDay}
                          min={6}
                          max={20}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>6 AM</span>
                          <span>12 PM</span>
                          <span>8 PM</span>
                        </div>
                      </div>
                      <Sun className="w-5 h-5 text-amber-500" />
                      <div className="flex gap-1 ml-4">
                        <Button 
                          size="sm" 
                          variant={weather === "sunny" ? "default" : "ghost"}
                          onClick={() => setWeather("sunny")}
                        >
                          <Sun className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant={weather === "cloudy" ? "default" : "ghost"}
                          onClick={() => setWeather("cloudy")}
                        >
                          <Cloud className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant={weather === "rainy" ? "default" : "ghost"}
                          onClick={() => setWeather("rainy")}
                        >
                          <CloudRain className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AR Features */}
              <div className="grid grid-cols-4 gap-4 mt-6">
                {arFeatures.map((feature) => (
                  <Card key={feature.id} className="hover:border-purple-500/50 transition-colors cursor-pointer group">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                        <feature.icon className="w-6 h-6 text-purple-500" />
                      </div>
                      <p className="font-medium text-foreground text-sm">{feature.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="col-span-4 space-y-6">
              {/* Saved Views */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Saved Views
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {savedViews.map((view) => (
                    <div 
                      key={view.id}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary cursor-pointer transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-2xl">
                        {view.thumbnail}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{view.name}</p>
                        <p className="text-xs text-muted-foreground">{view.time}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-2">
                    <Camera className="w-4 h-4 mr-2" />
                    Save Current View
                  </Button>
                </CardContent>
              </Card>

              {/* Live Collaboration */}
              <Card className="border-purple-500/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-500" />
                    Live Collaboration
                    <Badge className="bg-purple-500/20 text-purple-400 border-0 ml-auto">3 Online</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {collaborators.map((user) => (
                    <div key={user.id} className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium text-sm">
                          {user.avatar}
                        </div>
                        {user.online && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.role}</p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-2">
                    <Users className="w-4 h-4 mr-2" />
                    Invite to Session
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Palette className="w-4 h-4" />
                    Change Materials
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Layers className="w-4 h-4" />
                    Add Furniture
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Move3D className="w-4 h-4" />
                    Measure Distances
                  </Button>
                  <Button className="w-full justify-start gap-2 bg-gradient-to-r from-purple-500 to-pink-500">
                    <CheckCircle2 className="w-4 h-4" />
                    Approve Design
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ARVisualizerPage;
