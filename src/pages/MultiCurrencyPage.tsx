import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coins, TrendingUp, AlertTriangle, RefreshCcw, Settings } from "lucide-react";

const MultiCurrencyPage = () => {
  const currencies = [
    { code: "USD", name: "US Dollar", symbol: "$", primary: true },
    { code: "AED", name: "UAE Dirham", symbol: "د.إ", primary: false },
    { code: "INR", name: "Indian Rupee", symbol: "₹", primary: false },
    { code: "GBP", name: "British Pound", symbol: "£", primary: false },
  ];

  const costs = [
    { category: "Labor", currency: "USD", amount: "$28,000", converted: "$28,000" },
    { category: "Materials", currency: "AED", amount: "14,200 AED", converted: "$3,867" },
    { category: "Interior", currency: "INR", amount: "₹1,80,000", converted: "$2,160" },
    { category: "Equipment", currency: "GBP", amount: "£4,500", converted: "$5,693" },
  ];

  const totalUSD = "$48,920";

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
                  <Coins className="h-6 w-6 text-primary" />
                  Multi-Currency Finance
                </h1>
                <p className="text-muted-foreground">Manage costs across multiple currencies</p>
              </div>
              <Button variant="outline" className="gap-2">
                <RefreshCcw className="h-4 w-4" />
                Refresh Rates
              </Button>
            </div>

            {/* Currency Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {currencies.map((currency) => (
                <Card key={currency.code} className={currency.primary ? "border-primary/30 bg-primary/5" : ""}>
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">{currency.symbol}</p>
                    <p className="text-sm text-muted-foreground">{currency.code}</p>
                    {currency.primary && (
                      <Badge variant="secondary" className="mt-2">Primary</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Project Costs */}
            <Card>
              <CardHeader>
                <CardTitle>Project Costs by Currency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {costs.map((cost, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{cost.category}</p>
                      <p className="text-sm text-muted-foreground">Original: {cost.currency}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">{cost.amount}</p>
                      <p className="text-sm text-primary">{cost.converted} USD</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <p className="font-bold text-foreground">Total Equivalent in USD</p>
                  <p className="text-2xl font-bold text-primary">{totalUSD}</p>
                </div>
              </CardContent>
            </Card>

            {/* AI Alert */}
            <Card className="border-orange-500/30 bg-orange-500/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-medium text-foreground">Currency Alert</p>
                    <p className="text-muted-foreground">INR exchange rate rising — impact +1.2% expected on project costs.</p>
                  </div>
                  <TrendingUp className="h-5 w-5 text-orange-500 ml-auto" />
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="gap-2">
                <RefreshCcw className="h-4 w-4" />
                Update Exchange Rates
              </Button>
              <Button variant="outline" className="gap-2">
                <Settings className="h-4 w-4" />
                Currency Settings
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MultiCurrencyPage;