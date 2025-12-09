import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  variant?: "default" | "accent" | "success" | "warning";
}

const MetricCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = "default",
}: MetricCardProps) => {
  const variantStyles = {
    default: "bg-card border-border",
    accent: "bg-accent/10 border-accent/20",
    success: "bg-emerald-500/10 border-emerald-500/20",
    warning: "bg-amber-500/10 border-amber-500/20",
  };

  const iconStyles = {
    default: "bg-secondary text-foreground",
    accent: "bg-accent/20 text-accent",
    success: "bg-emerald-500/20 text-emerald-600",
    warning: "bg-amber-500/20 text-amber-600",
  };

  return (
    <div
      className={cn(
        "rounded-xl border p-6 shadow-card hover:shadow-lg transition-all duration-300",
        variantStyles[variant]
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center",
            iconStyles[variant]
          )}
        >
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <span
            className={cn(
              "text-sm font-medium px-2 py-1 rounded-full",
              trend.positive
                ? "bg-emerald-500/10 text-emerald-600"
                : "bg-destructive/10 text-destructive"
            )}
          >
            {trend.positive ? "+" : ""}{trend.value}
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-1">{title}</p>
      <p className="text-3xl font-display font-bold text-foreground">{value}</p>
      {subtitle && (
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      )}
    </div>
  );
};

export default MetricCard;
