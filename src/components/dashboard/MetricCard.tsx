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
  return (
    <div className="bg-card rounded-xl border border-border/60 p-5 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <Icon className="w-5 h-5 text-muted-foreground/60" />
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-semibold text-foreground tracking-tight">{value}</p>
          {subtitle && (
            <p className={cn(
              "text-sm mt-0.5",
              trend?.positive ? "text-primary" : "text-muted-foreground"
            )}>
              {trend?.positive && "↗ "}{subtitle}
            </p>
          )}
        </div>
        {trend && (
          <span
            className={cn(
              "text-xs font-medium",
              trend.positive ? "text-emerald-600" : "text-destructive"
            )}
          >
            {trend.positive ? "+" : ""}{trend.value}
          </span>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
