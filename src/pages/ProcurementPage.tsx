import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Package,
  Sparkles,
  DollarSign,
  TrendingDown,
  AlertTriangle,
  ShoppingCart,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const materials = [
  {
    id: "1",
    name: "Cement 50kg",
    qtyNeeded: 120,
    unit: "bags",
    vendorPrice: 5.3,
    aiRecommendation: "Buy now — low stock",
    aiType: "urgent",
  },
  {
    id: "2",
    name: "Marble Tiles",
    qtyNeeded: 420,
    unit: "sq ft",
    vendorPrice: 12.9,
    aiRecommendation: "Price dropping soon",
    aiType: "wait",
  },
  {
    id: "3",
    name: "Electrical Wires",
    qtyNeeded: 150,
    unit: "coils",
    vendorPrice: 18.0,
    aiRecommendation: "Vendor B is cheaper",
    aiType: "switch",
  },
  {
    id: "4",
    name: "Steel Rebar",
    qtyNeeded: 200,
    unit: "pieces",
    vendorPrice: 24.5,
    aiRecommendation: "Good price, buy now",
    aiType: "good",
  },
];

const purchaseOrders = [
  { id: "0043", amount: 12100, vendor: "Vendor B", status: "pending" },
  { id: "0044", amount: 7860, vendor: "Vendor C", status: "approved" },
  { id: "0045", amount: 4200, vendor: "Vendor A", status: "delivered" },
];

const ProcurementPage = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);

  const getAiTypeStyle = (type: string) => {
    switch (type) {
      case "urgent":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "wait":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "switch":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      default:
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
      case "delivered":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      default:
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
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
              <h1 className="text-3xl font-display font-bold text-foreground">
                Procurement Center
              </h1>
              <p className="text-muted-foreground mt-1">
                AI-powered material management and vendor pricing
              </p>
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

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard
              title="Pending Orders"
              value="3"
              subtitle="$24,160 total value"
              icon={ShoppingCart}
              variant="accent"
            />
            <MetricCard
              title="AI Savings Found"
              value="$2,840"
              subtitle="By switching vendors"
              icon={TrendingDown}
              variant="success"
            />
            <MetricCard
              title="Low Stock Items"
              value="2"
              subtitle="Require attention"
              icon={AlertTriangle}
              trend={{ value: "urgent", positive: false }}
              variant="warning"
            />
          </div>

          {/* Material list */}
          <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden mb-8">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <h3 className="font-display font-semibold text-lg text-foreground">
                  Material List (AI-Generated)
                </h3>
              </div>
              <Button variant="accent" size="sm" className="gap-2">
                <ShoppingCart className="w-4 h-4" />
                Create PO from Selection
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                      Material
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                      Qty Needed
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                      Vendor Price
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                      AI Recommendation
                    </th>
                    <th className="text-right py-4 px-6 text-sm font-medium text-muted-foreground">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((material) => (
                    <tr
                      key={material.id}
                      className="border-b border-border hover:bg-secondary/30 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                            <Package className="w-5 h-5 text-accent" />
                          </div>
                          <span className="font-medium text-foreground">{material.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-foreground">
                        {material.qtyNeeded} {material.unit}
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-semibold text-foreground">
                          ${material.vendorPrice.toFixed(2)}
                        </span>
                        <span className="text-muted-foreground">/{material.unit.slice(0, -1)}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={cn(
                            "text-xs font-medium px-3 py-1.5 rounded-full border inline-flex items-center gap-1",
                            getAiTypeStyle(material.aiType)
                          )}
                        >
                          <Sparkles className="w-3 h-3" />
                          {material.aiRecommendation}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <Button variant="outline" size="sm">
                          Add to PO
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Purchase orders */}
          <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="font-display font-semibold text-lg text-foreground">
                Purchase Orders
              </h3>
            </div>

            <div className="divide-y divide-border">
              {purchaseOrders.map((po) => (
                <div
                  key={po.id}
                  className="p-6 flex items-center justify-between hover:bg-secondary/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">PO-{po.id}</p>
                      <p className="text-sm text-muted-foreground">{po.vendor}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-xl font-display font-bold text-foreground">
                      ${po.amount.toLocaleString()}
                    </p>
                    <span
                      className={cn(
                        "text-xs font-medium px-3 py-1.5 rounded-full border capitalize",
                        getStatusStyle(po.status)
                      )}
                    >
                      {po.status}
                    </span>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default ProcurementPage;
