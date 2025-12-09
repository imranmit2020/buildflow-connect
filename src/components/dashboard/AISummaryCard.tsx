import { Bot, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AISummaryCardProps {
  summary: string;
  insights: {
    type: "success" | "warning" | "info";
    message: string;
  }[];
}

const AISummaryCard = ({ summary, insights }: AISummaryCardProps) => {
  const getInsightIcon = (type: "success" | "warning" | "info") => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-amber-500" />;
      default:
        return <Lightbulb className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border/60 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">AI Summary</h3>
          <p className="text-xs text-muted-foreground">Updated 5 mins ago</p>
        </div>
      </div>

      <p className="text-foreground/90 mb-4 leading-relaxed text-sm">"{summary}"</p>

      <div className="space-y-2 mb-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            {getInsightIcon(insight.type)}
            <span>{insight.message}</span>
          </div>
        ))}
      </div>

      <Button size="sm" className="gap-2">
        <Bot className="w-4 h-4" />
        Ask AI Copilot
      </Button>
    </div>
  );
};

export default AISummaryCard;
