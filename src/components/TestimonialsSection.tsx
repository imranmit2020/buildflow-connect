import { Star, Quote, Building2 } from "lucide-react";

const testimonials = [
  {
    quote: "Construq transformed how we manage our $50M commercial projects. The AI-powered scheduling alone has cut our approval times by 60%.",
    author: "Sarah Chen",
    role: "Director of Operations",
    company: "Meridian Construction",
    avatar: "SC",
  },
  {
    quote: "Finally, a platform that understands construction finance complexity. Our AP/AR team went from chaos to clarity overnight.",
    author: "Michael Torres",
    role: "Chief Financial Officer",
    company: "Atlas Builders",
    avatar: "MT",
  },
  {
    quote: "As an interior designer working with multiple contractors, Construq keeps all my renders, material specs, and vendor communications unified.",
    author: "Elena Rodriguez",
    role: "Principal Designer",
    company: "Studio ER",
    avatar: "ER",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Building2 className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Customer Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4 tracking-tight">
            Trusted by{" "}
            <span className="font-serif italic text-primary">industry leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how construction teams are transforming their workflows.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 right-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary-foreground">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-muted/50 border border-border">
            <div className="flex -space-x-2">
              {['JD', 'AK', 'MR', 'SP'].map((initials, i) => (
                <div 
                  key={initials}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border-2 border-background"
                  style={{ zIndex: 4 - i }}
                >
                  <span className="text-xs font-semibold text-primary-foreground">{initials}</span>
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="font-medium text-foreground">Join 500+ teams</div>
              <div className="text-sm text-muted-foreground">Already building smarter with Construq</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
