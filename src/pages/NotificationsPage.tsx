import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertTriangle, CheckCircle, Truck, FileText, Shield, DollarSign, Sparkles, Check } from "lucide-react";

const NotificationsPage = () => {
  const notifications = [
    { 
      id: 1, 
      type: "ai", 
      icon: Sparkles, 
      title: "Electrical wiring delay predicted", 
      description: "AI detected potential 3-day delay in electrical work",
      time: "5 min ago",
      read: false 
    },
    { 
      id: 2, 
      type: "vendor", 
      icon: Truck, 
      title: "Marble delivery confirmed", 
      description: "Vendor C confirmed delivery for Dec 14",
      time: "1 hour ago",
      read: false 
    },
    { 
      id: 3, 
      type: "finance", 
      icon: DollarSign, 
      title: "Payment #885 approved", 
      description: "Payment to Bright Electrical Co. processed",
      time: "2 hours ago",
      read: true 
    },
    { 
      id: 4, 
      type: "document", 
      icon: FileText, 
      title: "Document ready for review", 
      description: "Electrical Layout v3 submitted by Architect",
      time: "3 hours ago",
      read: true 
    },
    { 
      id: 5, 
      type: "safety", 
      icon: Shield, 
      title: "Safety issue detected", 
      description: "AI flagged missing safety equipment in Zone A",
      time: "4 hours ago",
      read: false 
    },
    { 
      id: 6, 
      type: "task", 
      icon: CheckCircle, 
      title: "Task completed", 
      description: "Bathroom waterproofing marked as complete",
      time: "5 hours ago",
      read: true 
    },
    { 
      id: 7, 
      type: "alert", 
      icon: AlertTriangle, 
      title: "Budget variance alert", 
      description: "Material costs exceeded estimate by 3.2%",
      time: "Yesterday",
      read: true 
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "ai": return "text-primary bg-primary/10";
      case "vendor": return "text-blue-600 bg-blue-500/10";
      case "finance": return "text-green-600 bg-green-500/10";
      case "document": return "text-purple-600 bg-purple-500/10";
      case "safety": return "text-red-600 bg-red-500/10";
      case "task": return "text-emerald-600 bg-emerald-500/10";
      case "alert": return "text-orange-600 bg-orange-500/10";
      default: return "text-muted-foreground bg-muted";
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Bell className="h-6 w-6 text-primary" />
                  Notification Center
                </h1>
                <p className="text-muted-foreground">
                  {unreadCount > 0 ? `${unreadCount} unread notifications` : "All caught up!"}
                </p>
              </div>
              <Button variant="outline" className="gap-2">
                <Check className="h-4 w-4" />
                Mark All Read
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`flex items-start gap-4 p-4 rounded-lg transition-colors cursor-pointer ${
                      notification.read ? "bg-muted/30" : "bg-muted/70 border border-primary/20"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getTypeColor(notification.type)}`}>
                      <notification.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-foreground">{notification.title}</p>
                        {!notification.read && (
                          <span className="w-2 h-2 bg-primary rounded-full" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {notification.type}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotificationsPage;
