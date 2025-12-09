import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  PenTool, 
  Palette, 
  HardHat, 
  Users, 
  Truck, 
  DollarSign, 
  Bot,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface SwimLane {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  steps: { number: number; text: string }[];
  flowsTo: string[];
}

const WorkflowPage = () => {
  const swimLanes: SwimLane[] = [
    {
      id: "client",
      title: "Client",
      icon: <User className="h-5 w-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-l-blue-500",
      steps: [
        { number: 1, text: "Provides requirements" },
        { number: 2, text: "Approves designs + drawings" },
        { number: 3, text: "Selects finishes (optional)" },
        { number: 4, text: "Approves Change Orders" },
        { number: 5, text: "Approves Payments" },
      ],
      flowsTo: ["Architect", "Designer", "Contractor"]
    },
    {
      id: "architect",
      title: "Architect",
      icon: <PenTool className="h-5 w-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-l-purple-500",
      steps: [
        { number: 6, text: "Receives client requirements" },
        { number: 7, text: "Creates drawings" },
        { number: 8, text: "Uploads layouts, electrical, plumbing plans" },
        { number: 9, text: "Resolves AI-detected clashes" },
      ],
      flowsTo: ["Contractor"]
    },
    {
      id: "designer",
      title: "Interior Designer",
      icon: <Palette className="h-5 w-5" />,
      color: "text-pink-600",
      bgColor: "bg-pink-500/10",
      borderColor: "border-l-pink-500",
      steps: [
        { number: 10, text: "Receives room themes, style preferences" },
        { number: 11, text: "Creates moodboards" },
        { number: 12, text: "Selects materials + vendors" },
        { number: 13, text: "Sends final selections to Client + Contractor" },
      ],
      flowsTo: ["Vendor", "Contractor"]
    },
    {
      id: "contractor",
      title: "Contractor",
      icon: <HardHat className="h-5 w-5" />,
      color: "text-amber-600",
      bgColor: "bg-amber-500/10",
      borderColor: "border-l-amber-500",
      steps: [
        { number: 14, text: "Receives drawings + material specs" },
        { number: 15, text: "Breaks project into tasks" },
        { number: 16, text: "Assigns tasks to Subcontractors" },
        { number: 17, text: "Orders materials via Vendors" },
        { number: 18, text: "Updates progress daily" },
      ],
      flowsTo: ["Subcontractor", "Vendor", "Finance"]
    },
    {
      id: "subcontractor",
      title: "Subcontractor",
      icon: <Users className="h-5 w-5" />,
      color: "text-orange-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-l-orange-500",
      steps: [
        { number: 19, text: "Receives assigned tasks" },
        { number: 20, text: "Performs on-site work" },
        { number: 21, text: "Uploads photos, logs, checklists" },
        { number: 22, text: "Marks tasks completed" },
      ],
      flowsTo: ["Contractor"]
    },
    {
      id: "vendor",
      title: "Vendor",
      icon: <Truck className="h-5 w-5" />,
      color: "text-teal-600",
      bgColor: "bg-teal-500/10",
      borderColor: "border-l-teal-500",
      steps: [
        { number: 23, text: "Receives Purchase Orders from Contractor" },
        { number: 24, text: "Sends pricing + quotes" },
        { number: 25, text: "Ships materials" },
        { number: 26, text: "Updates delivery status" },
        { number: 27, text: "Uploads invoices" },
      ],
      flowsTo: ["Finance", "Contractor"]
    },
    {
      id: "finance",
      title: "Finance",
      icon: <DollarSign className="h-5 w-5" />,
      color: "text-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-l-green-500",
      steps: [
        { number: 28, text: "Receives invoices from Vendors" },
        { number: 29, text: "Verifies milestone completion (via Contractor & AI)" },
        { number: 30, text: "Releases partial/full payments" },
        { number: 31, text: "Tracks budget variance" },
        { number: 32, text: "Sends payment updates to Client + Vendor" },
      ],
      flowsTo: ["Client", "Vendor"]
    }
  ];

  const aiEngineCapabilities = [
    "Predicts delays",
    "Flags material shortages",
    "Auto-assigns subcontractors",
    "Detects drawing clashes",
    "Summarizes project status",
    "Suggests schedule optimizations",
    "Validates payments (completion evidence)",
    "Auto-generates BOQ from drawings"
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h1 className="text-2xl font-bold text-foreground mb-1">Construq Swimlane Diagram</h1>
                <p className="text-muted-foreground">Complete workflow across all stakeholders</p>
              </CardContent>
            </Card>

            {/* Swimlanes */}
            <div className="space-y-4">
              {swimLanes.map((lane) => (
                <Card 
                  key={lane.id} 
                  className={`border-l-4 ${lane.borderColor} hover:shadow-md transition-shadow`}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${lane.bgColor} ${lane.color}`}>
                          {lane.icon}
                        </div>
                        <span className="font-semibold text-foreground">{lane.title} Lane</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ArrowRight className="h-3 w-3" />
                        <span>Flows to: {lane.flowsTo.join(", ")}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {lane.steps.map((step) => (
                        <div 
                          key={step.number}
                          className="flex items-start gap-2 p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <Badge 
                            variant="outline" 
                            className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center p-0 ${lane.bgColor} ${lane.color} border-0 font-semibold text-xs`}
                          >
                            {step.number}
                          </Badge>
                          <span className="text-sm text-foreground leading-tight pt-0.5">{step.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* AI Engine Lane - Global */}
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/20 text-primary">
                        <Bot className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">AI Engine Lane</span>
                        <Badge className="ml-2 bg-primary/20 text-primary border-0">Global</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ArrowRight className="h-3 w-3" />
                      <span>Feeds all lanes</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {aiEngineCapabilities.map((capability, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-lg bg-background/50 border border-primary/10"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground">{capability}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Flow Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Flow Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  {swimLanes.map((lane, idx) => (
                    <div key={lane.id} className="flex items-center gap-2">
                      <div className={`p-1.5 rounded ${lane.bgColor} ${lane.color}`}>
                        {lane.icon}
                      </div>
                      <span className="font-medium text-foreground">{lane.title}</span>
                      {idx < swimLanes.length - 1 && (
                        <ArrowRight className="h-4 w-4 text-muted-foreground mx-1" />
                      )}
                    </div>
                  ))}
                  <ArrowRight className="h-4 w-4 text-primary mx-1" />
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-primary/20 text-primary">
                      <Bot className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-primary">AI Engine</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkflowPage;
