import { Button } from "@/components/ui/button";
import { Bot, Sparkles, ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-background overflow-hidden pt-24 pb-16">
      {/* Sophisticated gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/8 via-primary/4 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-primary/6 to-transparent rounded-full blur-[100px]" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* AI Badge */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary">Powered by Advanced AI</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-4xl mx-auto mb-8 animate-fade-up delay-100">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-foreground leading-[1.1] tracking-tight">
            The only{" "}
            <span className="font-serif italic text-primary">AI-first</span>{" "}
            all-in-one
            <br className="hidden sm:block" />
            construction platform
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-center text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
          Orchestrate projects, materials, teams, and finances — automatically. 
          Construq brings together everything you need with AI built into every workflow.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up delay-300">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-xl shadow-lg shadow-primary/25 group"
          >
            Request a demo
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="px-8 py-6 text-base font-medium rounded-xl border-border hover:bg-muted group"
          >
            <Play className="w-4 h-4 mr-2 text-primary" />
            Watch demo
          </Button>
        </div>


        {/* Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto animate-fade-up delay-500">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-50" />
          
          {/* Main dashboard card */}
          <div className="relative bg-card rounded-2xl shadow-2xl shadow-foreground/5 border border-border overflow-hidden">
            {/* Browser header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-background border border-border">
                  <div className="w-3 h-3 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-muted-foreground">app.construq.io/dashboard</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-3 h-3 text-primary-foreground" />
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 bg-gradient-to-b from-muted/20 to-background">
              <div className="grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <div className="col-span-2 space-y-3">
                  <div className="text-primary text-xs font-semibold mb-4">WORKSPACE</div>
                  {['Dashboard', 'Projects', 'Timeline', 'Reports'].map((item, i) => (
                    <div key={item} className={`flex items-center gap-2 text-xs py-2 px-2 rounded-lg ${i === 0 ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}>
                      <div className={`w-3 h-3 rounded ${i === 0 ? 'bg-primary' : 'bg-muted'}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Main content area */}
                <div className="col-span-7 space-y-4">
                  {/* Header stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Active Projects', value: '12', change: '+2 this month' },
                      { label: 'Total Budget', value: '$24.5M', change: '92% allocated' },
                      { label: 'Team Members', value: '48', change: '6 online now' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-card border border-border rounded-xl p-3">
                        <div className="text-[10px] text-muted-foreground mb-1">{stat.label}</div>
                        <div className="text-lg font-semibold text-foreground">{stat.value}</div>
                        <div className="text-[10px] text-primary">{stat.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Timeline/Gantt */}
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-foreground">Project Timeline</span>
                      <span className="text-[10px] text-muted-foreground">Q4 2024</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { name: 'Foundation', progress: 100, color: 'bg-green-500' },
                        { name: 'Structure', progress: 75, color: 'bg-primary' },
                        { name: 'Electrical', progress: 45, color: 'bg-primary' },
                        { name: 'Finishing', progress: 20, color: 'bg-yellow-500' },
                      ].map((task) => (
                        <div key={task.name} className="flex items-center gap-3">
                          <span className="text-[10px] text-muted-foreground w-16">{task.name}</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${task.color} rounded-full transition-all duration-500`}
                              style={{ width: `${task.progress}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-muted-foreground w-8">{task.progress}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right sidebar - AI Panel */}
                <div className="col-span-3 space-y-3">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 bg-primary rounded-lg flex items-center justify-center">
                        <Bot className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-medium text-foreground">AI Copilot</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mb-2">3 optimization suggestions available</p>
                    <div className="text-[9px] bg-primary/10 text-primary px-2 py-1 rounded-md">
                      "Schedule conflict detected in Week 12"
                    </div>
                  </div>
                  
                  <div className="bg-card border border-border rounded-xl p-3">
                    <div className="text-[10px] text-muted-foreground mb-2">Recent Activity</div>
                    <div className="space-y-2">
                      {['Invoice approved', 'Material delivered', 'Inspection passed'].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-[10px] text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-6 right-12 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg shadow-primary/30 animate-float">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <div>
                <div className="text-xs font-semibold">AI Insight</div>
                <div className="text-[10px] opacity-80">Save 12% on materials</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
