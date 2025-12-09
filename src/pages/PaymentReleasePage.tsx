import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DollarSign, CheckCircle, XCircle, FileText, Camera, Sparkles, User, Clock } from "lucide-react";

const PaymentReleasePage = () => {
  const invoice = {
    vendor: "Bright Electrical Co.",
    amount: "$4,200",
    stage: "Partial Payment #1",
    workCompletion: 62,
  };

  const verifications = [
    { check: "Work completion validated", status: "passed", value: "62%" },
    { check: "Photos auto-verified", status: "passed", value: "12 photos" },
    { check: "No discrepancies in labor or materials", status: "passed", value: "Clean" },
  ];

  const approvals = [
    { role: "Contractor", status: "approved", name: "Raj Builders" },
    { role: "Finance", status: "pending", name: "Sarah Khan" },
    { role: "Client", status: "pending", name: "Imran Ahmed" },
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
                <DollarSign className="h-6 w-6 text-primary" />
                Payment Release Workflow
              </h1>
              <p className="text-muted-foreground">Review and approve vendor payments</p>
            </div>

            {/* Invoice Details */}
            <Card>
              <CardHeader>
                <CardTitle>Invoice Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Vendor</p>
                    <p className="font-medium text-foreground">{invoice.vendor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Amount</p>
                    <p className="text-2xl font-bold text-primary">{invoice.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Stage</p>
                    <p className="font-medium text-foreground">{invoice.stage}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Work Completion</span>
                    <span className="font-medium text-foreground">{invoice.workCompletion}%</span>
                  </div>
                  <Progress value={invoice.workCompletion} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* AI Verification */}
            <Card className="border-green-500/30 bg-green-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <Sparkles className="h-5 w-5" />
                  AI Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {verifications.map((verify, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="flex-1 text-foreground">{verify.check}</span>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {verify.value}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Approval Route */}
            <Card>
              <CardHeader>
                <CardTitle>Approval Route</CardTitle>
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
                <Camera className="h-4 w-4" />
                Request Evidence
              </Button>
              <Button variant="secondary" className="flex-1 gap-2">
                <Sparkles className="h-4 w-4" />
                AI Generate Summary
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PaymentReleasePage;