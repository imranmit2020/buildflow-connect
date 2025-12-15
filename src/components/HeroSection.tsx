import { Button } from "@/components/ui/button";
import { Play, Bot, AlertTriangle, Wifi, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-background overflow-hidden pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-background to-background" />
      
      {/* Decorative shapes */}
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-[100px]" />
      <div className="absolute top-60 left-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-50/40 to-transparent rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase">
            AI-First Construction Platform
          </span>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] tracking-tight">
            The only{" "}
            <span className="font-serif-italic text-primary">AI-first</span>{" "}
            all-in-one
            <br />
            construction platform
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-center text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Orchestrate projects, materials, teams, and finances — automatically. 
          One platform for contractors, architects, designers, and project owners. Zero chaos.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-10">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-lg shadow-lg shadow-primary/20"
          >
            Request a demo
          </Button>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-2 mb-16">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400 fill-yellow-400'}`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-1">4.8/5 on</span>
          <span className="text-sm font-medium text-foreground">G2</span>
          <span className="text-muted-foreground mx-2">•</span>
          <span className="text-sm text-muted-foreground">and more</span>
        </div>

        {/* Trust bar */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by 500+ construction teams worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {['Turner Construction', 'Skanska', 'Bechtel', 'AECOM', 'PCL', 'Kiewit'].map((company) => (
              <span key={company} className="text-lg font-semibold text-foreground/70 tracking-tight">
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main dashboard card */}
          <div className="relative bg-card rounded-2xl shadow-2xl shadow-foreground/5 p-4 border border-border">
            {/* Browser header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex items-center gap-2 px-3">
                <span className="text-primary text-sm font-medium">Construq</span>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>Dashboard</span>
                  <span>Projects</span>
                  <span>Timeline</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-muted" />
                <div className="w-6 h-6 rounded-full bg-primary" />
              </div>
            </div>

            {/* Dashboard content */}
            <div className="grid grid-cols-12 gap-3">
              {/* Sidebar */}
              <div className="col-span-2 space-y-2">
                <div className="text-primary text-xs font-semibold mb-3">Projects</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground py-1">
                  <div className="w-4 h-4 bg-muted rounded" />
                  <span>Overview</span>
                </div>
                <div className="flex items-center gap-2 text-xs py-1">
                  <div className="w-4 h-4 bg-primary rounded" />
                  <span className="text-primary-foreground bg-primary px-2 py-0.5 rounded text-[10px]">Active</span>
                </div>
              </div>

              {/* Main content area */}
              <div className="col-span-7 space-y-3">
                {/* Timeline/Gantt */}
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="text-[10px] text-muted-foreground mb-2">Project Timeline</div>
                  <div className="grid grid-cols-6 gap-1 text-[8px] text-muted-foreground mb-2">
                    <span>Week 1</span>
                    <span>Week 2</span>
                    <span>Week 3</span>
                    <span>Week 4</span>
                    <span>Week 5</span>
                    <span>Week 6</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-4 bg-primary rounded-full w-3/4" />
                    <div className="h-4 bg-green-500 rounded-full w-1/2" />
                    <div className="h-4 bg-yellow-400 rounded-full w-2/3" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-card border border-border rounded-lg p-2 text-center">
                    <div className="text-[10px] text-muted-foreground">Budget</div>
                    <div className="text-sm font-semibold text-foreground">$2.4M</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-2 text-center">
                    <div className="text-[10px] text-muted-foreground">Spent</div>
                    <div className="text-sm font-semibold text-foreground">$1.8M</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-2 text-center">
                    <div className="text-[10px] text-muted-foreground">Progress</div>
                    <div className="text-sm font-semibold text-primary">75%</div>
                  </div>
                </div>
              </div>

              {/* Right sidebar */}
              <div className="col-span-3 space-y-2">
                <div className="bg-muted/50 rounded-lg p-2">
                  <div className="text-[10px] text-muted-foreground">AI Insights</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating notification cards */}
          {/* AI Adjustment card */}
          <div className="absolute -top-4 right-8 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg shadow-primary/20 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs font-semibold">AI Recommendation</div>
                <div className="text-[10px] opacity-80">Optimize material delivery</div>
              </div>
            </div>
          </div>

          {/* Alert card */}
          <div className="absolute -bottom-2 right-4 bg-card rounded-xl px-4 py-3 shadow-xl shadow-foreground/5 border border-destructive/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-destructive" />
              </div>
              <div>
                <div className="text-xs font-semibold text-destructive">Issue Detected</div>
                <div className="text-[10px] text-muted-foreground">Foundation inspection required</div>
                <div className="text-[10px] text-muted-foreground">Building A, Section 3</div>
              </div>
            </div>
          </div>

          {/* Status indicator */}
          <div className="absolute top-1/3 -left-4 bg-card rounded-lg px-3 py-2 shadow-lg border border-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <Wifi className="w-3 h-3 text-green-500" />
              <span className="text-[10px] text-muted-foreground">Live sync</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
