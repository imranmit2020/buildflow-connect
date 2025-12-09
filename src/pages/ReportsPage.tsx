import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Download,
  Share2,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Star,
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const costTrendData = [
  { name: "Week 1", cost: 15000, budget: 18000 },
  { name: "Week 2", cost: 28000, budget: 36000 },
  { name: "Week 3", cost: 45000, budget: 54000 },
  { name: "Week 4", cost: 62000, budget: 72000 },
  { name: "Week 5", cost: 85000, budget: 90000 },
  { name: "Week 6", cost: 108000, budget: 108000 },
  { name: "Week 7", cost: 135000, budget: 126000 },
  { name: "Week 8", cost: 168500, budget: 144000 },
];

const taskVelocityData = [
  { name: "Week 1", completed: 4 },
  { name: "Week 2", completed: 6 },
  { name: "Week 3", completed: 3 },
  { name: "Week 4", completed: 5 },
  { name: "Week 5", completed: 8 },
  { name: "Week 6", completed: 7 },
  { name: "Week 7", completed: 9 },
  { name: "Week 8", completed: 6 },
];

const vendorPerformance = [
  { name: "Cement Vendor B", rating: 4.8, onTime: 95 },
  { name: "Electrical Supplies", rating: 4.5, onTime: 88 },
  { name: "Marble Vendor C", rating: 4.2, onTime: 82 },
  { name: "Plumbing Parts", rating: 4.6, onTime: 91 },
];

const ReportsPage = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 overflow-auto">
          {/* Page header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground">
                Analytics & Reports
              </h1>
              <p className="text-muted-foreground mt-1">
                Project performance insights and AI-powered forecasts
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export PDF
              </Button>
              <Button
                variant="accent"
                className="gap-2"
                onClick={() => setCopilotOpen(true)}
              >
                <Bot className="w-4 h-4" />
                Ask AI for Forecast
              </Button>
            </div>
          </div>

          {/* KPI Snapshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard
              title="On-Time Tasks"
              value="78%"
              subtitle="35 of 45 tasks"
              icon={CheckCircle2}
              trend={{ value: "5%", positive: true }}
              variant="success"
            />
            <MetricCard
              title="Budget Variance"
              value="+4.2%"
              subtitle="$16,900 over budget"
              icon={TrendingUp}
              variant="warning"
            />
            <MetricCard
              title="Open Issues"
              value="6"
              subtitle="2 critical, 4 minor"
              icon={AlertTriangle}
              trend={{ value: "2 new", positive: false }}
              variant="accent"
            />
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Cost trend */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-card">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                Cost Trend (Last 60 Days)
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={costTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
                    />
                    <Area
                      type="monotone"
                      dataKey="budget"
                      stroke="hsl(var(--muted-foreground))"
                      fill="hsl(var(--muted))"
                      strokeDasharray="5 5"
                    />
                    <Area
                      type="monotone"
                      dataKey="cost"
                      stroke="hsl(var(--accent))"
                      fill="hsl(var(--accent) / 0.2)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Task velocity */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-card">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                Task Completion Velocity
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={taskVelocityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="completed" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Vendor performance */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-card">
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                Vendor Performance
              </h3>
              <div className="space-y-4">
                {vendorPerformance.map((vendor) => (
                  <div
                    key={vendor.name}
                    className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{vendor.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(vendor.rating)
                                  ? "text-accent fill-accent"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {vendor.rating}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">On-Time</p>
                      <p className="text-lg font-bold text-foreground">{vendor.onTime}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Summary */}
            <div className="bg-gradient-to-br from-accent/10 to-amber-500/10 rounded-xl border border-accent/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-gradient rounded-xl flex items-center justify-center shadow-glow">
                  <Bot className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  AI Summary
                </h3>
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                "Project performing well overall with 78% on-time task completion.
                Schedule risk remains in electrical wiring phase due to material
                delays. Budget variance of +4.2% is acceptable but trending upward.
                Vendor B causing minor delays in 2 deliveries - recommend reviewing
                backup suppliers."
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Strong task completion rate this week
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Monitor electrical phase closely
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  Consider bulk material order for cost savings
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default ReportsPage;
