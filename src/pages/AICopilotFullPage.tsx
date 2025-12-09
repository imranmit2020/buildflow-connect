import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Bot, Send, CheckCircle, Edit, Share2, Clock, AlertTriangle, Users } from "lucide-react";

const AICopilotFullPage = () => {
  const [query, setQuery] = useState("Summarize project delays and create a recovery plan.");

  const aiPlan = {
    title: "Recovery Plan for Electrical Delays",
    criticalDelay: "Electrical Wiring",
    steps: [
      { action: "Add 2 subcontractors to electrical team", timeline: "Immediate" },
      { action: "Order missing materials immediately", timeline: "Today" },
      { action: "Reschedule tasks 12–16 to accommodate changes", timeline: "By Dec 10" },
      { action: "Increase daily work hours by 2hrs", timeline: "Dec 8–15" },
    ],
    impact: {
      scheduleRecovery: "5 days",
      additionalCost: "$3,200",
      riskReduction: "75%",
    },
  };

  const conversationHistory = [
    { role: "user", message: "What's causing the main delays?" },
    { role: "ai", message: "The primary delay is in Electrical Wiring (3 days behind schedule). Secondary factors include material delivery delays from Vendor B." },
    { role: "user", message: "How can we recover?" },
    { role: "ai", message: "I've analyzed the project and created a comprehensive recovery plan. See the generated output on the right." },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Bot className="h-6 w-6 text-primary" />
                  AI Copilot — Full Screen
                </h1>
                <p className="text-muted-foreground">Ask anything, get intelligent insights and actions</p>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline">Project AI</Badge>
                <Badge variant="secondary">Finance AI</Badge>
                <Badge variant="secondary">Vendor AI</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Query & Conversation */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Query & Command Interface</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1 space-y-4 mb-4 max-h-[400px] overflow-y-auto">
                    {conversationHistory.map((msg, index) => (
                      <div key={index} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                        {msg.role === "ai" && (
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                            <Bot className="h-4 w-4 text-primary" />
                          </div>
                        )}
                        <div className={`p-3 rounded-lg max-w-[80%] ${
                          msg.role === "user" 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-muted"
                        }`}>
                          <p className="text-sm">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Input 
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Ask AI anything..."
                      className="flex-1"
                    />
                    <Button className="gap-2">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Generated Output */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>AI Generated Plan</span>
                    <Badge className="bg-primary/20 text-primary">Auto-Generated</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <div className="flex items-center gap-2 text-red-600 mb-1">
                      <AlertTriangle className="h-4 w-4" />
                      <span className="font-medium">Critical Delay</span>
                    </div>
                    <p className="text-foreground">{aiPlan.criticalDelay}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Recovery Steps:</h4>
                    <div className="space-y-2">
                      {aiPlan.steps.map((step, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-foreground">{step.action}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {step.timeline}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-green-500/10 rounded-lg text-center">
                      <p className="text-xs text-muted-foreground">Schedule Recovery</p>
                      <p className="font-bold text-green-600">{aiPlan.impact.scheduleRecovery}</p>
                    </div>
                    <div className="p-3 bg-orange-500/10 rounded-lg text-center">
                      <p className="text-xs text-muted-foreground">Additional Cost</p>
                      <p className="font-bold text-orange-600">{aiPlan.impact.additionalCost}</p>
                    </div>
                    <div className="p-3 bg-blue-500/10 rounded-lg text-center">
                      <p className="text-xs text-muted-foreground">Risk Reduction</p>
                      <p className="font-bold text-blue-600">{aiPlan.impact.riskReduction}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="gap-2">
                <CheckCircle className="h-4 w-4" />
                Apply Plan
              </Button>
              <Button variant="outline" className="gap-2">
                <Edit className="h-4 w-4" />
                Edit
              </Button>
              <Button variant="secondary" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AICopilotFullPage;