import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ClipboardCheck, CheckCircle, Clock, FileText, Calendar, Download } from "lucide-react";

const HandoverChecklistPage = () => {
  const checklistItems = [
    { item: "Electrical Testing", status: "completed", date: "Dec 05" },
    { item: "Plumbing Pressure Test", status: "completed", date: "Dec 04" },
    { item: "HVAC System Check", status: "completed", date: "Dec 03" },
    { item: "Flooring Inspection", status: "pending", date: "-" },
    { item: "Final Cleaning", status: "scheduled", date: "Dec 12" },
    { item: "Safety Compliance Audit", status: "pending", date: "-" },
    { item: "Client Walkthrough", status: "scheduled", date: "Dec 15" },
  ];

  const documents = [
    { name: "Handover Certificate (Draft)", status: "ready" },
    { name: "Warranty Booklets", status: "ready" },
    { name: "Final Invoice", status: "pending" },
    { name: "As-Built Drawings", status: "ready" },
    { name: "Maintenance Manual", status: "pending" },
  ];

  const completedItems = checklistItems.filter(i => i.status === "completed").length;
  const progress = Math.round((completedItems / checklistItems.length) * 100);

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                  Client Handover Checklist
                </h1>
                <p className="text-muted-foreground">Track completion for project handover</p>
              </div>
              <Badge variant="secondary" className="text-lg px-4 py-2">{progress}% Complete</Badge>
            </div>

            {/* Progress */}
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Overall Progress</span>
                  <span className="font-medium text-foreground">{completedItems} of {checklistItems.length} items</span>
                </div>
                <Progress value={progress} className="h-3" />
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Checklist Items */}
              <Card>
                <CardHeader>
                  <CardTitle>Checklist Items</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.status === "completed" ? "bg-green-500/20" :
                        item.status === "scheduled" ? "bg-blue-500/20" : "bg-muted"
                      }`}>
                        {item.status === "completed" ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clock className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${item.status === "completed" ? "text-muted-foreground line-through" : "text-foreground"}`}>
                          {item.item}
                        </p>
                      </div>
                      <Badge variant={
                        item.status === "completed" ? "default" :
                        item.status === "scheduled" ? "secondary" : "outline"
                      }>
                        {item.status === "completed" ? item.date : item.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Documents */}
              <Card>
                <CardHeader>
                  <CardTitle>Handover Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <FileText className={`h-5 w-5 ${doc.status === "ready" ? "text-green-600" : "text-muted-foreground"}`} />
                      <span className="flex-1 text-foreground">{doc.name}</span>
                      <Badge variant={doc.status === "ready" ? "default" : "secondary"}>
                        {doc.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Generate Handover PDF
              </Button>
              <Button variant="outline" className="gap-2">
                <Calendar className="h-4 w-4" />
                Schedule Final Walkthrough
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HandoverChecklistPage;