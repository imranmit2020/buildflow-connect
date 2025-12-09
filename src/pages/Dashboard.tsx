import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MetricCard from "@/components/dashboard/MetricCard";
import AISummaryCard from "@/components/dashboard/AISummaryCard";
import UpcomingDeadlines from "@/components/dashboard/UpcomingDeadlines";
import TaskStatusCard from "@/components/dashboard/TaskStatusCard";
import BudgetOverview from "@/components/dashboard/BudgetOverview";
import ProjectProgress from "@/components/dashboard/ProjectProgress";
import { DollarSign, CheckSquare, Package, Users } from "lucide-react";

const Dashboard = () => {
  const aiSummary = {
    summary:
      "Project is on track with no critical risks detected. 2 materials are running low in stock and require attention. Budget variance is within acceptable limits at +4.2%.",
    insights: [
      { type: "success" as const, message: "All milestones on schedule" },
      { type: "warning" as const, message: "Cement stock at 15% - reorder recommended" },
      { type: "warning" as const, message: "Electrical wires need restocking by Dec 15" },
      { type: "info" as const, message: "Next inspection scheduled for Dec 25" },
    ],
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 overflow-auto">
          {/* Page title */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-sm font-medium text-emerald-600">On Track</span>
            </div>
            <h1 className="text-2xl font-semibold text-foreground mb-1">
              Project Overview
            </h1>
            <p className="text-sm text-muted-foreground">
              Green Valley Villa • Last updated 5 mins ago
            </p>
          </div>

          {/* Metrics row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Budget Used"
              value="42%"
              subtitle="$168,500 of $400,000"
              icon={DollarSign}
              trend={{ value: "4.2%", positive: true }}
              variant="accent"
            />
            <MetricCard
              title="Tasks Completed"
              value="18/45"
              subtitle="40% completion rate"
              icon={CheckSquare}
              variant="success"
            />
            <MetricCard
              title="Materials Ready"
              value="76%"
              subtitle="2 items low in stock"
              icon={Package}
              trend={{ value: "2", positive: false }}
              variant="warning"
            />
            <MetricCard
              title="Active Team"
              value="24"
              subtitle="Across 6 roles"
              icon={Users}
            />
          </div>

          {/* AI Summary */}
          <div className="mb-8">
            <AISummaryCard {...aiSummary} />
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <BudgetOverview />
            </div>
            <div>
              <ProjectProgress />
            </div>
          </div>

          {/* Bottom section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UpcomingDeadlines />
            <TaskStatusCard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
