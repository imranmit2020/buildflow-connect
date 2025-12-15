import { Check, BarChart3, Search, Truck, Bot, TrendingUp, FileText, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4 tracking-tight">
            Everything you need,{" "}
            <span className="font-serif italic text-primary">unified</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three powerful modules working together seamlessly.
          </p>
        </div>

        {/* Modules grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Project Management */}
          <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Project Management</h3>
                <p className="text-xs text-muted-foreground">AI-powered orchestration</p>
              </div>
            </div>
            
            {/* Visualization */}
            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <div className="flex items-end gap-1.5 h-20">
                {[40, 65, 45, 80, 55, 75, 50, 90, 60].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t group-hover:animate-pulse"
                    style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-muted-foreground">Week 1</span>
                <span className="text-[10px] text-muted-foreground">Week 9</span>
              </div>
            </div>

            <ul className="space-y-2.5">
              {['AI task assignment', 'Predictive scheduling', 'Real-time progress'].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Material Procurement */}
          <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Search className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Procurement</h3>
                <p className="text-xs text-muted-foreground">Automated sourcing</p>
              </div>
            </div>
            
            {/* Visualization */}
            <div className="space-y-3 mb-6">
              {[
                { icon: FileText, label: 'Auto BOQ Generation', status: 'Active' },
                { icon: Users, label: 'Vendor Comparison', status: '12 vendors' },
                { icon: Truck, label: 'Delivery Tracking', status: 'Live' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl group-hover:bg-muted transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-foreground">{item.label}</div>
                    <div className="text-[10px] text-muted-foreground">{item.status}</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              ))}
            </div>

            <ul className="space-y-2.5">
              {['Smart vendor matching', 'Price optimization', 'Automated reordering'].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Financial Intelligence */}
          <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Finance</h3>
                <p className="text-xs text-muted-foreground">Intelligent insights</p>
              </div>
            </div>
            
            {/* Visualization */}
            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground">Budget Overview</span>
                <span className="text-xs font-medium text-primary">$2.4M</span>
              </div>
              <div className="flex items-end justify-between gap-2 h-16">
                {[
                  { h: 80, label: 'Q1', color: 'bg-primary' },
                  { h: 100, label: 'Q2', color: 'bg-primary' },
                  { h: 60, label: 'Q3', color: 'bg-primary/60' },
                  { h: 40, label: 'Q4', color: 'bg-muted' },
                ].map((bar) => (
                  <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
                    <div className={`w-full ${bar.color} rounded-t transition-all duration-500`} style={{ height: `${bar.h}%` }} />
                    <span className="text-[10px] text-muted-foreground">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <ul className="space-y-2.5">
              {['Automated payments', 'Variance alerts', 'Compliance tracking'].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AI Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <Bot className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  AI Copilot included with every plan
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  Get intelligent recommendations, automated workflows, and predictive insights across all modules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
