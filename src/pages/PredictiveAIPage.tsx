import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, TrendingUp, TrendingDown, AlertTriangle, Clock, DollarSign, Shield, Sparkles, Target, Activity, BarChart3, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const predictionData = [
  { day: "Mon", actual: 82, predicted: 85 },
  { day: "Tue", actual: 78, predicted: 80 },
  { day: "Wed", actual: 85, predicted: 82 },
  { day: "Thu", actual: 79, predicted: 78 },
  { day: "Fri", actual: null, predicted: 75 },
  { day: "Sat", actual: null, predicted: 72 },
  { day: "Sun", actual: null, predicted: 70 },
];

const PredictiveAIPage = () => {
  const predictions = [
    { type: "delay", title: "Schedule Delay Risk", value: "3 days", probability: 78, trend: "up", impact: "high" },
    { type: "cost", title: "Budget Overrun", value: "$18,400", probability: 65, trend: "stable", impact: "medium" },
    { type: "safety", title: "Safety Incident Risk", value: "Low", probability: 12, trend: "down", impact: "low" },
    { type: "weather", title: "Weather Disruption", value: "2 days", probability: 45, trend: "up", impact: "medium" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Predictive AI Engine</h1>
                <p className="text-sm text-muted-foreground">ML-powered forecasts for delays, costs, and risks</p>
              </div>
            </div>
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 gap-1">
              <Activity className="w-3 h-3 animate-pulse" />
              Model Accuracy: 94.2%
            </Badge>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            {predictions.map((pred, idx) => (
              <Card key={idx} className={cn(
                "border-l-4",
                pred.impact === "high" ? "border-l-red-500" :
                pred.impact === "medium" ? "border-l-amber-500" : "border-l-emerald-500"
              )}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{pred.title}</span>
                    {pred.trend === "up" ? <TrendingUp className="w-4 h-4 text-red-500" /> :
                     pred.trend === "down" ? <TrendingDown className="w-4 h-4 text-emerald-500" /> :
                     <Activity className="w-4 h-4 text-amber-500" />}
                  </div>
                  <p className="text-2xl font-bold text-foreground">{pred.value}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Progress value={pred.probability} className="flex-1 h-1" />
                    <span className="text-xs text-muted-foreground">{pred.probability}%</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Project Completion Forecast
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={predictionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                        <Area type="monotone" dataKey="predicted" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.2)" strokeDasharray="5 5" />
                        <Area type="monotone" dataKey="actual" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-4">
              <Card className="border-emerald-500/30 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                    AI Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-emerald-500" />
                      <span className="font-medium text-sm">Add 2 workers to electrical</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Reduces delay probability by 45%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-blue-500" />
                      <span className="font-medium text-sm">Pre-order materials now</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Saves $4,200 before price increase</p>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="w-4 h-4 text-amber-500" />
                      <span className="font-medium text-sm">Schedule safety inspection</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Zone C scaffolding needs review</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PredictiveAIPage;
