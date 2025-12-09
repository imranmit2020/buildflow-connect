import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bot,
  FileText,
  Truck,
  Sparkles,
  Save,
  DollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";

const requests = [
  {
    id: "42",
    material: "Cement",
    qty: "120 bags",
    deliveryDate: "Dec 10",
    status: "pending",
  },
  {
    id: "43",
    material: "Marble Tiles",
    qty: "420 sqft",
    deliveryDate: "Dec 14",
    status: "quoted",
  },
  {
    id: "44",
    material: "Electrical Wires",
    qty: "150 coils",
    deliveryDate: "Dec 16",
    status: "pending",
  },
];

const pricing = [
  { material: "Cement 50kg", current: 5.4, proposed: 5.3 },
  { material: "Marble Tile", current: 12.9, proposed: 13.2 },
  { material: "Electrical Wire", current: 18.0, proposed: 17.5 },
];

const VendorDashboard = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [priceUpdates, setPriceUpdates] = useState<Record<string, number>>({});

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "quoted":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
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
              <p className="text-sm text-accent font-medium mb-1">Role: Vendor</p>
              <h1 className="text-3xl font-display font-bold text-foreground">
                Vendor Portal
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

          {/* Active requests */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-card mb-8">
            <h3 className="font-display font-semibold text-lg text-foreground mb-6">
              Active Requests
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                      Request #
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                      Material
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                      Quantity
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                      Delivery Date
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                      Status
                    </th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <tr
                      key={request.id}
                      className="border-b border-border hover:bg-secondary/30 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <span className="font-mono font-medium text-foreground">
                          #{request.id}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-foreground">{request.material}</td>
                      <td className="py-4 px-4 text-muted-foreground">{request.qty}</td>
                      <td className="py-4 px-4 text-muted-foreground">
                        {request.deliveryDate}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={cn(
                            "text-xs font-medium px-2 py-1 rounded-full border capitalize",
                            getStatusBadge(request.status)
                          )}
                        >
                          {request.status === "pending" ? "Pending Quote" : "Quote Sent"}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Button variant="outline" size="sm">
                          {request.status === "pending" ? "Send Quote" : "View Quote"}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Update pricing */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-card">
              <h3 className="font-display font-semibold text-lg text-foreground mb-6">
                Update Pricing
              </h3>

              <div className="space-y-4">
                {pricing.map((item) => (
                  <div
                    key={item.material}
                    className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{item.material}</p>
                      <p className="text-sm text-muted-foreground">
                        Current: ${item.current.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">$</span>
                      <Input
                        type="number"
                        step="0.01"
                        defaultValue={item.proposed}
                        className="w-24"
                        onChange={(e) =>
                          setPriceUpdates((prev) => ({
                            ...prev,
                            [item.material]: parseFloat(e.target.value),
                          }))
                        }
                      />
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Notification */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-accent/10 to-amber-500/10 rounded-xl border border-accent/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent-gradient rounded-xl flex items-center justify-center shadow-glow">
                    <Sparkles className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">
                    AI Notification
                  </h3>
                </div>
                <p className="text-foreground mb-4">
                  "Contractor may need additional 80 bags of cement this week based on
                  project progress. Pre-generate quote?"
                </p>
                <Button variant="accent" className="gap-2">
                  <DollarSign className="w-4 h-4" />
                  Generate Auto-Quote
                </Button>
              </div>

              {/* Quick actions */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-card">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full gap-2 justify-start">
                    <FileText className="w-4 h-4" />
                    View Invoices
                  </Button>
                  <Button variant="outline" className="w-full gap-2 justify-start">
                    <Truck className="w-4 h-4" />
                    Delivery Schedule
                  </Button>
                  <Button variant="outline" className="w-full gap-2 justify-start">
                    <Save className="w-4 h-4" />
                    Save All Changes
                  </Button>
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

export default VendorDashboard;
