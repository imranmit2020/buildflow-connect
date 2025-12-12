import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Shield, Zap, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-hero overflow-hidden pt-20 min-h-screen flex items-center noise-overlay">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground/90">
              AI-Powered Construction Platform
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-up delay-100">
            Build Smarter.
            <br />
            <span className="text-gradient">Deliver Faster.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            The autonomous AI platform that orchestrates construction projects, 
            materials, teams, and finances—automatically. One platform. Zero chaos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-base shadow-glow group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base group">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Watch Demo
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-up delay-400">
            {[
              { value: "500+", label: "Enterprise Clients", icon: Shield },
              { value: "99.9%", label: "Uptime SLA", icon: Zap },
              { value: "$2.4B", label: "Projects Managed", icon: TrendingUp },
              { value: "45%", label: "Cost Reduction", icon: Sparkles },
            ].map((stat, i) => (
              <div key={i} className="glass-dark rounded-2xl p-6 text-center group hover:bg-primary-foreground/10 transition-all duration-300">
                <stat.icon className="w-5 h-5 text-accent mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating cards */}
        <div className="absolute top-32 left-8 hidden xl:block animate-float">
          <div className="glass-dark rounded-xl p-4 shadow-elevated">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-primary-foreground">AI Optimization</p>
                <p className="text-xs text-primary-foreground/60">15% efficiency gain</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 right-8 hidden xl:block animate-float-slow">
          <div className="glass-dark rounded-xl p-4 shadow-elevated">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-primary-foreground">Enterprise Ready</p>
                <p className="text-xs text-primary-foreground/60">SOC 2 Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;