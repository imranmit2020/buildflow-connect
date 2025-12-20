import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Wand2, Sparkles, Download, RefreshCw, Layers, Building2, Home, Maximize2, Grid3X3, Bot, Image, FileText, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const GenerativeDesignPage = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("modern");

  const styles = [
    { id: "modern", name: "Modern", icon: "🏢" },
    { id: "traditional", name: "Traditional", icon: "🏠" },
    { id: "minimalist", name: "Minimalist", icon: "⬜" },
    { id: "industrial", name: "Industrial", icon: "🏭" },
  ];

  const generatedDesigns = [
    { id: 1, name: "Floor Plan A", type: "floor-plan", status: "ready" },
    { id: 2, name: "Elevation Front", type: "elevation", status: "ready" },
    { id: 3, name: "3D Render", type: "render", status: "generating" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Wand2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Generative Design AI</h1>
              <p className="text-sm text-muted-foreground">Create floor plans and designs from text prompts</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <label className="text-sm font-medium mb-2 block">Describe your design</label>
                    <Textarea 
                      placeholder="e.g., 4-bedroom modern villa with open kitchen, home office, 2-car garage, and rooftop terrace..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-24"
                    />
                  </div>
                  <div className="flex gap-2 mb-4">
                    {styles.map((style) => (
                      <Button
                        key={style.id}
                        variant={selectedStyle === style.id ? "default" : "outline"}
                        onClick={() => setSelectedStyle(style.id)}
                        className="gap-2"
                      >
                        <span>{style.icon}</span>
                        {style.name}
                      </Button>
                    ))}
                  </div>
                  <Button className="w-full gap-2 bg-gradient-to-r from-violet-500 to-purple-500" disabled={isGenerating}>
                    <Sparkles className="w-4 h-4" />
                    {isGenerating ? "Generating..." : "Generate Designs"}
                  </Button>
                </CardContent>
              </Card>

              {/* Generated Preview */}
              <Card className="mt-6">
                <CardContent className="p-0">
                  <div className="h-80 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <Grid3X3 className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">AI-generated floor plan will appear here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-4 space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Generated Outputs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {generatedDesigns.map((design) => (
                    <div key={design.id} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                      <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                        {design.type === "floor-plan" ? <Grid3X3 className="w-5 h-5 text-violet-500" /> :
                         design.type === "elevation" ? <Building2 className="w-5 h-5 text-violet-500" /> :
                         <Image className="w-5 h-5 text-violet-500" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{design.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{design.type}</p>
                      </div>
                      {design.status === "ready" ? (
                        <Button size="sm" variant="ghost"><Download className="w-4 h-4" /></Button>
                      ) : (
                        <RefreshCw className="w-4 h-4 animate-spin text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-violet-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-5 h-5 text-violet-500" />
                    <span className="font-medium">AI Suggestions</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Consider adding a mudroom between garage and kitchen for better flow. Natural light optimization suggests south-facing windows."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GenerativeDesignPage;
