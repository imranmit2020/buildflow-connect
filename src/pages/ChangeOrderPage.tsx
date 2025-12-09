import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileEdit, DollarSign, Clock, CheckCircle, XCircle, Bot, User } from "lucide-react";

const ChangeOrderPage = () => {
  const changeOrder = {
    id: "#12",
    title: "Tile Upgrade to Marble",
    originalMaterial: "Ceramic Tile",
    originalPrice: "$7.50/sqft",
    newMaterial: "Marble Tile",
    newPrice: "$12.90/sqft",
    area: "420 sqft",
    costIncrease: "+$2,480",
    reason: "Client requested premium finish",
  };

  const approvals = [
    { role: "Client", status: "pending", name: "Imran Ahmed" },
    { role: "Finance", status: "pending", name: "Sarah Khan" },
    { role: "Contractor", status: "approved", name: "Raj Builders" },
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
                  <FileEdit className="h-6 w-6 text-primary" />
                  Change Order {changeOrder.id}
                </h1>
                <p className="text-muted-foreground">{changeOrder.title}</p>
              </div>
              <Badge variant="secondary" className="text-sm">Pending Approval</Badge>
            </div>

            {/* Change Details */}
            <Card>
              <CardHeader>
                <CardTitle>Change Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Original Material</p>
                    <p className="font-medium text-foreground">{changeOrder.originalMaterial}</p>
                    <p className="text-sm text-muted-foreground">{changeOrder.originalPrice}</p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                    <p className="text-sm text-muted-foreground mb-1">New Material</p>
                    <p className="font-medium text-foreground">{changeOrder.newMaterial}</p>
                    <p className="text-sm text-primary">{changeOrder.newPrice}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">Area Impacted</p>
                    <p className="text-lg font-bold text-foreground">{changeOrder.area}</p>
                  </div>
                  <div className="text-center p-4 bg-red-500/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">Cost Increase</p>
                    <p className="text-lg font-bold text-red-600">{changeOrder.costIncrease}</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">Reason</p>
                    <p className="text-sm font-medium text-foreground">{changeOrder.reason}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Analysis */}
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  AI Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  This upgrade adds <span className="font-semibold text-primary">1.8 days</span> to schedule and increases overall variance by{" "}
                  <span className="font-semibold text-primary">0.62%</span>. Budget remains within safe limits.
                </p>
              </CardContent>
            </Card>

            {/* Approvals */}
            <Card>
              <CardHeader>
                <CardTitle>Approval Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {approvals.map((approval, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{approval.role}</p>
                      <p className="text-sm text-muted-foreground">{approval.name}</p>
                    </div>
                    <Badge variant={approval.status === "approved" ? "default" : "secondary"}>
                      {approval.status === "approved" ? (
                        <><CheckCircle className="h-3 w-3 mr-1" /> Approved</>
                      ) : (
                        <><Clock className="h-3 w-3 mr-1" /> Pending</>
                      )}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex-1 gap-2">
                <CheckCircle className="h-4 w-4" />
                Approve
              </Button>
              <Button variant="destructive" className="flex-1 gap-2">
                <XCircle className="h-4 w-4" />
                Reject
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Bot className="h-4 w-4" />
                Ask AI for Alternatives
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChangeOrderPage;