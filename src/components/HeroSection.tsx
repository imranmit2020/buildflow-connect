import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const highlights = [
    "Real-time project tracking",
    "Multi-role collaboration",
    "Financial management",
  ];

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden pt-20">
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-grid opacity-[0.03]" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-steel-blue/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent">
                Now with AI-powered insights
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-up delay-100">
              Build Smarter.{" "}
              <span className="text-gradient">Deliver Faster.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-lg mb-8 animate-fade-up delay-200">
              The unified construction platform connecting clients, contractors,
              architects, and every stakeholder in your project ecosystem.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-up delay-300">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-primary-foreground/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
              <Button variant="hero" size="xl" asChild>
                <a href="/dashboard">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/10 animate-fade-up delay-500">
              <p className="text-sm text-primary-foreground/50 mb-4">
                Trusted by 2,500+ construction companies worldwide
              </p>
              <div className="flex items-center gap-8">
                {["Fortune 500", "ISO Certified", "SOC 2 Compliant"].map(
                  (badge) => (
                    <div
                      key={badge}
                      className="text-primary-foreground/30 font-semibold text-sm"
                    >
                      {badge}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right content - Dashboard Preview */}
          <div className="relative animate-fade-up delay-300">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="glass rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-primary/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>

                {/* Mock dashboard content */}
                <div className="space-y-4">
                  <div className="h-8 bg-primary-foreground/10 rounded-lg w-3/4" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 bg-accent/20 rounded-xl flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-accent">24</span>
                      <span className="text-xs text-primary-foreground/60">Active Projects</span>
                    </div>
                    <div className="h-24 bg-steel-blue/20 rounded-xl flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-steel-blue">$2.4M</span>
                      <span className="text-xs text-primary-foreground/60">Budget Tracked</span>
                    </div>
                    <div className="h-24 bg-green-500/20 rounded-xl flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-green-400">98%</span>
                      <span className="text-xs text-primary-foreground/60">On-Time Delivery</span>
                    </div>
                  </div>
                  <div className="h-32 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10" />
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -right-4 top-1/4 glass rounded-xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">Phase 2 Approved</p>
                    <p className="text-xs text-primary-foreground/60">Just now</p>
                  </div>
                </div>
              </div>

              {/* Floating user avatars */}
              <div className="absolute -left-8 bottom-1/4 glass rounded-xl p-3 shadow-xl">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-amber-light border-2 border-card"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border-2 border-card">
                    <span className="text-xs font-bold text-secondary-foreground">+12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
