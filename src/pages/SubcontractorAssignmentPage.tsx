import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Calendar, DollarSign, Bot, Plus, CheckCircle } from "lucide-react";

const SubcontractorAssignmentPage = () => {
  const task = {
    name: "Electrical Wiring Installation",
    project: "Green Valley Villa",
    deadline: "Dec 12",
  };

  const subcontractors = [
    { name: "Sam Electrical Services", rating: 4.8, cost: "$18/hr", availability: "Dec 10–15", recommended: true },
    { name: "BrightWire Co.", rating: 4.5, cost: "$21/hr", availability: "Dec 09–12", recommended: false },
    { name: "PowerLine Experts", rating: 4.6, cost: "$19/hr", availability: "Dec 11–16", recommended: false },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Subcontractor Assignment
              </h1>
              <p className="text-muted-foreground">Assign qualified subcontractors to tasks</p>
            </div>

            {/* Task Info */}
            <Card>
              <CardHeader>
                <CardTitle>Task Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Task</p>
                    <p className="font-medium text-foreground">{task.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Project</p>
                    <p className="font-medium text-foreground">{task.project}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Deadline</p>
                    <p className="font-medium text-foreground">{task.deadline}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Available Subcontractors */}
            <Card>
              <CardHeader>
                <CardTitle>Available Subcontractors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {subcontractors.map((sub, index) => (
                  <div key={index} className={`flex items-center gap-4 p-4 rounded-lg border ${sub.recommended ? "bg-primary/5 border-primary/30" : "bg-muted/50 border-border"}`}>
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-foreground">{sub.name}</p>
                        {sub.recommended && (
                          <Badge className="bg-primary/20 text-primary">AI Recommended</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          {sub.rating}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {sub.cost}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {sub.availability}
                        </span>
                      </div>
                    </div>
                    <Button variant={sub.recommended ? "default" : "outline"}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Assign
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Suggestion */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">AI Suggestion</p>
                    <p className="text-muted-foreground">Assign Sam Electrical — cheaper and fully available within deadline.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="gap-2">
                <Sparkles className="h-4 w-4" />
                Auto-Assign Best Option
              </Button>
              <Button variant="outline" className="gap-2">
                <Plus className="h-4 w-4" />
                Add New Subcontractor
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SubcontractorAssignmentPage;