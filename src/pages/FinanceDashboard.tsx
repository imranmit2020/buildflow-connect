import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";
import {
  Bot,
  FileText,
  DollarSign,
  CreditCard,
  Receipt,
  TrendingDown,
  Check,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const payments = [
  {
    id: "884",
    amount: 4200,
    vendor: "Cement Vendor",
    status: "completed",
  },
  {
    id: "885",
    amount: 1870,
    vendor: "Electrical Vendor",
    status: "processing",
  },
  {
    id: "886",
    amount: 3500,
    vendor: "Plumbing Vendor",
    status: "pending",
  },
  {
    id: "887",
    amount: 2100,
    vendor: "Flooring Vendor",
    status: "pending",
  },
];

const FinanceDashboard = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return {
          className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
          icon: Check,
        };
      case "processing":
        return {
          className: "bg-accent/10 text-accent border-accent/20",
          icon: CreditCard,
        };
      default:
        return {
          className: "bg-muted text-muted-foreground border-border",
          icon: Receipt,
        };
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 overflow-auto">
          {/* Page header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-accent font-medium mb-1">Role: Finance Team</p>
              <h1 className="text-3xl font-display font-bold text-foreground">
                Finance Center
              </h1>
            </div>
            <Button
              variant="accent"
              className="gap-2"
              onClick={() => setCopilotOpen(true)}
            >
              <Bot className="w-4 h-4" />
              AI Copilot
            </Button>
          </div>

          {/* AP/AR Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard
              title="Bills Due"
              value="$28,400"
              subtitle="5 bills pending"
              icon={Receipt}
              trend={{ value: "3 overdue", positive: false }}
              variant="warning"
            />
            <MetricCard
              title="Invoices Pending"
              value="$18,000"
              subtitle="4 awaiting payment"
              icon={FileText}
              variant="accent"
            />
            <MetricCard
              title="Payroll This Month"
              value="$9,600"
              subtitle="24 team members"
              icon={DollarSign}
              variant="success"
            />
          </div>

          {/* Cashflow Forecast */}
          <div className="bg-gradient-to-r from-destructive/10 to-amber-500/10 rounded-xl border border-destructive/20 p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-destructive/20 rounded-xl flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <h3 className="font-display font-semibold text-foreground">
                    Cashflow Forecast (AI)
                  </h3>
                </div>
                <p className="text-foreground">
                  "Projected low balance on Dec 20 due to clustered vendor payments.
                  Consider rescheduling $8,400 in non-critical payments to Dec 27."
                </p>
              </div>
              <Button variant="outline" size="sm">
                View Forecast
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent payments */}
            <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-lg text-foreground">
                  Recent Payments
                </h3>
                <button className="text-sm text-accent hover:underline font-medium">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {payments.map((payment) => {
                  const badge = getStatusBadge(payment.status);
                  const BadgeIcon = badge.icon;

                  return (
                    <div
                      key={payment.id}
                      className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <DollarSign className="w-5 h-5 text-accent" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm text-muted-foreground">
                            #{payment.id}
                          </span>
                          <span className="text-xl font-display font-bold text-foreground">
                            ${payment.amount.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {payment.vendor}
                        </p>
                      </div>

                      <span
                        className={cn(
                          "flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full border capitalize",
                          badge.className
                        )}
                      >
                        <BadgeIcon className="w-3 h-3" />
                        {payment.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick actions */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6 shadow-card">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <Button variant="accent" className="w-full gap-2 justify-start">
                    <Check className="w-4 h-4" />
                    Approve Payment
                  </Button>
                  <Button variant="outline" className="w-full gap-2 justify-start">
                    <CreditCard className="w-4 h-4" />
                    Release Partial Payment
                  </Button>
                  <Button variant="outline" className="w-full gap-2 justify-start">
                    <TrendingDown className="w-4 h-4" />
                    Review Variance Report
                  </Button>
                </div>
              </div>

              {/* Budget summary */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-card">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Monthly Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Inflow</span>
                    <span className="font-bold text-emerald-600">+$124,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Outflow</span>
                    <span className="font-bold text-destructive">-$98,200</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between items-center">
                    <span className="font-medium text-foreground">Net Balance</span>
                    <span className="font-display font-bold text-xl text-accent">
                      +$26,300
                    </span>
                  </div>
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

export default FinanceDashboard;
