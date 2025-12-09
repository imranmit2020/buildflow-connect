import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ClipboardCheck, Camera, AlertTriangle, CheckCircle, MessageSquare, FileText, Image } from "lucide-react";

const SiteInspectionPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);

  const photos = [
    { id: 1, name: "Photo_001", thumbnail: "🖼️" },
    { id: 2, name: "Photo_002", thumbnail: "🖼️" },
    { id: 3, name: "Photo_003", thumbnail: "🖼️" },
  ];

  const aiDetections = [
    { id: 1, issue: "Detected cracks near pipe entry", severity: "high" },
    { id: 2, issue: "Moisture level above normal in corner A", severity: "medium" },
  ];

  const comments = [
    { role: "Contractor", message: "Will apply additional sealant.", time: "2 hours ago" },
    { role: "Architect", message: "Please verify moisture after 24h.", time: "1 hour ago" },
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
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                  Site Inspection Log
                </h1>
                <p className="text-muted-foreground">Bathroom — Waterproofing Layer</p>
              </div>
              <Badge variant="outline" className="text-sm">Today's Inspection</Badge>
            </div>

            {/* Photos Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Inspection Photos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {photos.map((photo) => (
                    <div key={photo.id} className="aspect-square bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border hover:border-primary cursor-pointer transition-colors">
                      <div className="text-center">
                        <Image className="h-8 w-8 mx-auto text-muted-foreground" />
                        <span className="text-xs text-muted-foreground mt-1">{photo.name}</span>
                      </div>
                    </div>
                  ))}
                  <div className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border hover:border-primary cursor-pointer transition-colors">
                    <div className="text-center">
                      <Camera className="h-8 w-8 mx-auto text-muted-foreground" />
                      <span className="text-xs text-muted-foreground mt-1">Add Photo</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Auto-Detections */}
            <Card className="border-orange-500/30 bg-orange-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <AlertTriangle className="h-5 w-5" />
                  AI Auto-Detections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {aiDetections.map((detection) => (
                  <div key={detection.id} className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                    <Badge variant={detection.severity === "high" ? "destructive" : "secondary"}>
                      {detection.severity}
                    </Badge>
                    <span className="text-foreground">{detection.issue}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Comments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comments.map((comment, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">
                      {comment.role[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{comment.role}</span>
                        <span className="text-xs text-muted-foreground">{comment.time}</span>
                      </div>
                      <p className="text-muted-foreground">{comment.message}</p>
                    </div>
                  </div>
                ))}
                <Textarea placeholder="Add a comment..." className="mt-4" />
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex-1 gap-2">
                <CheckCircle className="h-4 w-4" />
                Approve
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <AlertTriangle className="h-4 w-4" />
                Request Fix
              </Button>
              <Button variant="secondary" className="flex-1 gap-2">
                <FileText className="h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default SiteInspectionPage;
