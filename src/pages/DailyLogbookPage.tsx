import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Sun, Camera, Plus, Send, Sparkles, Image } from "lucide-react";

const DailyLogbookPage = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);

  const todaysWork = [
    { task: "Electrical wiring", progress: "70%", status: "in-progress" },
    { task: "Bathroom waterproofing", progress: "100%", status: "completed" },
    { task: "Marble tile sample installed", progress: "100%", status: "completed" },
  ];

  const photos = [
    { id: 1, name: "Photo_001" },
    { id: 2, name: "Photo_002" },
    { id: 3, name: "Photo_003" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Daily Site Logbook
                </h1>
                <p className="text-muted-foreground">Record daily progress and activities</p>
              </div>
              <Badge variant="outline" className="text-sm">Dec 08, 2024</Badge>
            </div>

            {/* Weather & Conditions */}
            <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sun className="h-8 w-8 text-yellow-500" />
                    <div>
                      <p className="font-medium text-foreground">Weather: Sunny</p>
                      <p className="text-sm text-muted-foreground">AI prediction: Safe to work outdoors</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-600">Good Conditions</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Today's Work Done */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Work Done</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {todaysWork.map((work, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                    <div className={`w-3 h-3 rounded-full ${
                      work.status === "completed" ? "bg-green-500" : "bg-yellow-500"
                    }`} />
                    <span className="flex-1 text-foreground">{work.task}</span>
                    <Badge variant={work.status === "completed" ? "default" : "secondary"}>
                      {work.progress}
                    </Badge>
                  </div>
                ))}
                <Button variant="outline" className="w-full gap-2 mt-2">
                  <Plus className="h-4 w-4" />
                  Add Work Item
                </Button>
              </CardContent>
            </Card>

            {/* Photos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Site Photos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  {photos.map((photo) => (
                    <div key={photo.id} className="aspect-square bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border hover:border-primary cursor-pointer transition-colors">
                      <div className="text-center">
                        <Image className="h-8 w-8 mx-auto text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{photo.name}</span>
                      </div>
                    </div>
                  ))}
                  <div className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border hover:border-primary cursor-pointer transition-colors">
                    <div className="text-center">
                      <Plus className="h-8 w-8 mx-auto text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Add Photo</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea 
                  placeholder="Add any additional notes, observations, or issues..."
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex-1 gap-2">
                <Send className="h-4 w-4" />
                Submit Log
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Sparkles className="h-4 w-4" />
                Generate AI Summary
              </Button>
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default DailyLogbookPage;
