import { Bot, Sparkles, AlertTriangle, CheckCircle2 } from "lucide-react";
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
        return <Sparkles className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-accent/20 p-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-accent-gradient rounded-xl flex items-center justify-center shadow-glow">
            <Bot className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground">AI Summary</h3>
            <p className="text-xs text-muted-foreground">Updated 5 mins ago</p>
          </div>
        </div>

        <p className="text-foreground mb-4 leading-relaxed">"{summary}"</p>

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

        <Button variant="accent" size="sm" className="gap-2">
          <Sparkles className="w-4 h-4" />
          Ask AI Copilot
        </Button>
      </div>
    </div>
  );
};

export default AISummaryCard;
