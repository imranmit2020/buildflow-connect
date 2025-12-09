import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent } from "@/components/ui/card";
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
  ArrowDown,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

interface WorkflowNode {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  tasks: string[];
  status: "active" | "pending" | "completed";
}

const WorkflowPage = () => {
  const workflowNodes: WorkflowNode[] = [
    {
      id: "client",
      title: "Client",
      subtitle: "Approvals & Inputs",
      icon: <User className="h-6 w-6" />,
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      tasks: ["Project Requirements", "Budget Approval", "Design Sign-offs", "Milestone Reviews"],
      status: "completed"
    },
    {
      id: "architect",
      title: "Architect",
      subtitle: "Drawings • Layouts • BOQs",
      icon: <PenTool className="h-6 w-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      tasks: ["Floor Plans", "Structural Drawings", "MEP Layouts", "BOQ Generation"],
      status: "completed"
    },
    {
      id: "designer",
      title: "Interior Designer",
      subtitle: "Material & Finish Choices",
      icon: <Palette className="h-6 w-6" />,
      color: "text-pink-600",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      tasks: ["Material Selection", "Color Schemes", "Furniture Layout", "3D Visualization"],
      status: "active"
    },
    {
      id: "contractor",
      title: "Contractor",
      subtitle: "Executes Plan • Creates Tasks",
      icon: <HardHat className="h-6 w-6" />,
      color: "text-amber-600",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      tasks: ["Task Breakdown", "Resource Allocation", "Timeline Management", "Quality Control"],
      status: "active"
    },
    {
      id: "subcontractor",
      title: "Subcontractor",
      subtitle: "Executes Work On-Site",
      icon: <Users className="h-6 w-6" />,
      color: "text-orange-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      tasks: ["Electrical Work", "Plumbing", "HVAC Installation", "Progress Updates"],
      status: "pending"
    },
    {
      id: "vendor",
      title: "Vendor",
      subtitle: "Supplies Materials",
      icon: <Truck className="h-6 w-6" />,
      color: "text-teal-600",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/30",
      tasks: ["Material Sourcing", "PO Management", "Delivery Tracking", "Quality Assurance"],
      status: "pending"
    },
    {
      id: "finance",
      title: "Finance",
      subtitle: "Payments • Invoices • Audit",
      icon: <DollarSign className="h-6 w-6" />,
      color: "text-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      tasks: ["Invoice Processing", "Payment Release", "Budget Tracking", "Audit Logs"],
      status: "pending"
    }
  ];

  const aiEngine = {
    title: "AI Engine",
    subtitle: "Predictions • Alerts • Tasks • Summaries • Risk Detection",
    icon: <Bot className="h-8 w-8" />,
    capabilities: [
      "Smart Task Predictions",
      "Risk Detection & Alerts",
      "Auto-Generated Summaries",
      "Resource Optimization",
      "Cost Forecasting",
      "Delay Predictions"
    ]
  };

  const getStatusIcon = (status: WorkflowNode["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "active":
        return <Clock className="h-4 w-4 text-blue-500 animate-pulse" />;
      case "pending":
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusLabel = (status: WorkflowNode["status"]) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Completed</Badge>;
      case "active":
        return <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">In Progress</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-muted-foreground">Pending</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-foreground">Project Workflow</h1>
              <p className="text-muted-foreground">End-to-end construction project lifecycle</p>
            </div>

            {/* Workflow Nodes */}
            <div className="relative space-y-4">
              {workflowNodes.map((node, index) => (
                <div key={node.id} className="relative">
                  {/* Connection Line */}
                  {index < workflowNodes.length - 1 && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full z-0">
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-4 bg-gradient-to-b from-border to-primary/30" />
                        <ArrowDown className="h-4 w-4 text-primary/50 -mt-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* Node Card */}
                  <Card className={`relative z-10 border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${node.borderColor} ${node.status === "active" ? "ring-2 ring-primary/20" : ""}`}>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`p-3 rounded-xl ${node.bgColor} ${node.color} shrink-0`}>
                          {node.icon}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-foreground">{node.title}</h3>
                              {getStatusIcon(node.status)}
                            </div>
                            {getStatusLabel(node.status)}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{node.subtitle}</p>
                          
                          {/* Tasks */}
                          <div className="flex flex-wrap gap-2">
                            {node.tasks.map((task, idx) => (
                              <Badge 
                                key={idx} 
                                variant="secondary" 
                                className={`text-xs ${node.status === "completed" ? "bg-green-500/10 text-green-700" : ""}`}
                              >
                                {node.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                                {task}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}

              {/* Connection to AI Engine */}
              <div className="flex flex-col items-center py-2">
                <div className="w-0.5 h-6 bg-gradient-to-b from-border to-primary/50" />
                <ArrowDown className="h-5 w-5 text-primary -mt-1" />
              </div>

              {/* AI Engine Card */}
              <Card className="relative z-10 border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-3">
                      {aiEngine.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{aiEngine.title}</h3>
                    <p className="text-sm text-muted-foreground">{aiEngine.subtitle}</p>
                  </div>
                  
                  {/* AI Capabilities Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                    {aiEngine.capabilities.map((capability, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-background/50 border border-primary/20"
                      >
                        <Bot className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-xs font-medium text-foreground">{capability}</span>
                      </div>
                    ))}
                  </div>

                  {/* AI Insight */}
                  <div className="mt-4 p-3 rounded-lg bg-background/80 border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Bot className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-foreground">AI Insight</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Current project is 35% complete. Interior design phase active. Estimated completion: March 2025. 
                          2 potential risks detected - weather delay and material shortage.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Legend */}
            <Card className="mt-8">
              <CardContent className="p-4">
                <p className="text-xs font-medium text-muted-foreground mb-3">Status Legend</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-foreground">Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-foreground">In Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">Pending</span>
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
