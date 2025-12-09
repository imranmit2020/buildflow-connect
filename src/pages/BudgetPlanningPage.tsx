import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { DollarSign, TrendingUp, Bot, Download, Settings } from "lucide-react";

const BudgetPlanningPage = () => {
  const budgetData = {
    current: "$400,000",
    spent: "$168,500",
    forecast: "$412,900",
    variance: "+3.2%",
  };

  const breakdown = [
    { name: "Materials", value: 46, color: "#f59e0b" },
    { name: "Labor", value: 28, color: "#3b82f6" },
    { name: "Interior", value: 15, color: "#8b5cf6" },
    { name: "Misc", value: 11, color: "#6b7280" },
  ];

  const insights = [
    { text: "Marble upgrade increased cost by 2.1%", type: "warning" },
    { text: "Vendor B price increase expected next week", type: "alert" },
    { text: "Payment clustering around Dec 20; risk of cash-flow compression", type: "info" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                Budget Planning & Forecasting
              </h1>
              <p className="text-muted-foreground">Track spending and forecast project costs</p>
            </div>

            {/* Budget Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-muted-foreground">Current Budget</p>
                  <p className="text-2xl font-bold text-foreground">{budgetData.current}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-muted-foreground">Spent to Date</p>
                  <p className="text-2xl font-bold text-primary">{budgetData.spent}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-muted-foreground">AI Forecasted Total</p>
                  <p className="text-2xl font-bold text-foreground">{budgetData.forecast}</p>
                </CardContent>
              </Card>
              <Card className="bg-red-500/10 border-red-500/30">
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-muted-foreground">Variance</p>
                  <p className="text-2xl font-bold text-red-600">{budgetData.variance}</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Cost Breakdown Pie Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Cost Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={breakdown}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {breakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {breakdown.map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-muted-foreground">{item.name}</span>
                        <span className="text-sm font-medium text-foreground ml-auto">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Insights */}
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-primary" />
                    AI Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {insights.map((insight, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <TrendingUp className={`h-5 w-5 mt-0.5 ${
                        insight.type === "warning" ? "text-yellow-500" :
                        insight.type === "alert" ? "text-red-500" : "text-blue-500"
                      }`} />
                      <p className="text-foreground">{insight.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="gap-2">
                <Bot className="h-4 w-4" />
                AI Optimize Budget
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export to Finance
              </Button>
              <Button variant="secondary" className="gap-2">
                <Settings className="h-4 w-4" />
                Adjust Categories
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BudgetPlanningPage;