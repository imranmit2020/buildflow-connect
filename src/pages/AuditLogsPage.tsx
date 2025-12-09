import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, Download, Filter, DollarSign, FileText, CheckCircle, Bot, User } from "lucide-react";

const AuditLogsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "payments", label: "Payments" },
    { id: "documents", label: "Documents" },
    { id: "approvals", label: "Approvals" },
    { id: "ai", label: "AI Actions" },
  ];

  const logs = [
    { id: 1, type: "payment", action: "Payment #885 approved by Finance", user: "Sarah Khan", time: "Dec 05, 3:22 PM", icon: DollarSign },
    { id: 2, type: "approval", action: "Change Order #12 approved by Client", user: "Imran Ahmed", time: "Dec 05, 2:15 PM", icon: CheckCircle },
    { id: 3, type: "ai", action: "AI generated BOQ for Floor Plan v2", user: "System", time: "Dec 05, 1:30 PM", icon: Bot },
    { id: 4, type: "documents", action: "Electrical Layout v3 uploaded", user: "Architect Team", time: "Dec 05, 11:45 AM", icon: FileText },
    { id: 5, type: "payment", action: "Vendor B updated cement price", user: "Vendor B Admin", time: "Dec 04, 4:30 PM", icon: DollarSign },
    { id: 6, type: "approval", action: "Subcontractor assignment approved", user: "Raj Builders", time: "Dec 04, 3:00 PM", icon: CheckCircle },
    { id: 7, type: "ai", action: "AI detected potential delay in electrical work", user: "System", time: "Dec 04, 10:15 AM", icon: Bot },
    { id: 8, type: "documents", action: "Site inspection report submitted", user: "Site Manager", time: "Dec 03, 5:45 PM", icon: FileText },
  ];

  const filteredLogs = activeFilter === "all" 
    ? logs 
    : logs.filter(log => log.type === activeFilter);

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
                  <ClipboardList className="h-6 w-6 text-primary" />
                  Audit Logs
                </h1>
                <p className="text-muted-foreground">Complete activity history and compliance tracking</p>
              </div>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>

            {/* Filters */}
            <div className="flex gap-2 flex-wrap">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>

            {/* Log Entries */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Log Entries
                  <Badge variant="secondary" className="ml-2">{filteredLogs.length} entries</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {filteredLogs.map((log) => {
                  const Icon = log.icon;
                  return (
                    <div key={log.id} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        log.type === "payment" ? "bg-green-500/20 text-green-600" :
                        log.type === "approval" ? "bg-blue-500/20 text-blue-600" :
                        log.type === "ai" ? "bg-primary/20 text-primary" :
                        "bg-purple-500/20 text-purple-600"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{log.action}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-3 w-3" />
                          <span>{log.user}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{log.time}</p>
                        <Badge variant="outline" className="text-xs capitalize">{log.type}</Badge>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AuditLogsPage;