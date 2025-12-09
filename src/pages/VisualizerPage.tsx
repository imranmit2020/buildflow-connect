import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Box, Palette, Lightbulb, Send, Save, Bot, RotateCcw, Image } from "lucide-react";

const VisualizerPage = () => {
  const materials = [
    { name: "Marble Tile", variant: "White", selected: true },
    { name: "Wooden Floor", variant: "Walnut", selected: false },
    { name: "Wall Paint", variant: "Sandstone", selected: true },
    { name: "Lighting", variant: "Warm LED", selected: true },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Box className="h-6 w-6 text-primary" />
                3D Interior Visualizer
              </h1>
              <p className="text-muted-foreground">Preview and customize room designs</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Materials Panel */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Materials
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {materials.map((material, index) => (
                    <div key={index} className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      material.selected ? "bg-primary/10 border-primary/30" : "bg-muted/50 border-border hover:border-primary/50"
                    }`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">{material.name}</p>
                          <p className="text-sm text-muted-foreground">{material.variant}</p>
                        </div>
                        {material.selected && (
                          <div className="w-4 h-4 rounded-full bg-primary" />
                        )}
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full gap-2 mt-4">
                    <Palette className="h-4 w-4" />
                    Browse Library
                  </Button>
                </CardContent>
              </Card>

              {/* 3D Preview */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>3D Room Preview</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-purple-500/5" />
                    <div className="text-center z-10">
                      <Image className="h-20 w-20 mx-auto text-muted-foreground mb-4" />
                      <p className="text-lg font-medium text-foreground">3D Room Model</p>
                      <p className="text-sm text-muted-foreground">Rotate, zoom, and pan to explore</p>
                    </div>
                  </div>

                  {/* AI Note */}
                  <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">AI Note</span>
                    </div>
                    <p className="text-muted-foreground mt-1">
                      Based on theme "Minimalist Luxury" — recommended material combo applied.
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" className="flex-1 gap-2">
                      <Lightbulb className="h-4 w-4" />
                      Toggle Lighting
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2">
                      <Box className="h-4 w-4" />
                      Change View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Render
              </Button>
              <Button variant="outline" className="gap-2">
                <Send className="h-4 w-4" />
                Send to Client
              </Button>
              <Button variant="secondary" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Generate Alternatives (AI)
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VisualizerPage;