import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

const BudgetOverview = () => {
  const totalBudget = 400000;
  const spent = 168500;
  const remaining = totalBudget - spent;
  const percentUsed = (spent / totalBudget) * 100;

  const categories = [
    { name: "Foundation", budget: 80000, spent: 78500, color: "bg-emerald-500" },
    { name: "Electrical", budget: 60000, spent: 25000, color: "bg-accent" },
    { name: "Plumbing", budget: 45000, spent: 32000, color: "bg-blue-500" },
    { name: "Interior", budget: 120000, spent: 33000, color: "bg-violet-500" },
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display font-semibold text-lg text-foreground">
          Budget Overview
        </h3>
        <div className="flex items-center gap-2 text-sm">
          <TrendingUp className="w-4 h-4 text-emerald-500" />
          <span className="text-emerald-600 font-medium">+4.2% variance</span>
        </div>
      </div>

      {/* Main budget summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 rounded-xl bg-secondary/50">
          <p className="text-sm text-muted-foreground mb-1">Total Budget</p>
          <p className="text-xl font-display font-bold text-foreground">
            ${totalBudget.toLocaleString()}
          </p>
        </div>
        <div className="text-center p-4 rounded-xl bg-accent/10">
          <p className="text-sm text-muted-foreground mb-1">Spent</p>
          <p className="text-xl font-display font-bold text-accent">
            ${spent.toLocaleString()}
          </p>
        </div>
        <div className="text-center p-4 rounded-xl bg-emerald-500/10">
          <p className="text-sm text-muted-foreground mb-1">Remaining</p>
          <p className="text-xl font-display font-bold text-emerald-600">
            ${remaining.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">Budget Utilization</span>
          <span className="font-medium text-foreground">{percentUsed.toFixed(1)}%</span>
        </div>
        <div className="h-3 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-accent-gradient rounded-full transition-all duration-500"
            style={{ width: `${percentUsed}%` }}
          />
        </div>
      </div>

      {/* Category breakdown */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">By Category</p>
        {categories.map((cat) => {
          const catPercent = (cat.spent / cat.budget) * 100;
          return (
            <div key={cat.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-foreground">{cat.name}</span>
                <span className="text-muted-foreground">
                  ${cat.spent.toLocaleString()} / ${cat.budget.toLocaleString()}
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${cat.color}`}
                  style={{ width: `${catPercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetOverview;
