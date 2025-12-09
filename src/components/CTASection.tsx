import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "14-day free trial",
  "No credit card required",
  "Full feature access",
  "Dedicated onboarding",
];

const CTASection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pattern-grid opacity-[0.03]" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-steel-blue/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
            Ready to Transform Your{" "}
            <span className="text-gradient">Construction Workflow?</span>
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto animate-fade-up delay-100">
            Join thousands of construction professionals who've streamlined their operations with BuildFlow.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-up delay-200">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <Check className="w-5 h-5 text-accent" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="xl">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
