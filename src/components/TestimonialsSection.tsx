import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "BuildFlow transformed how we manage our $50M commercial projects. The real-time collaboration between our architects and contractors has cut approval times by 60%.",
    author: "Sarah Chen",
    role: "Director of Operations",
    company: "Meridian Construction Group",
    rating: 5,
  },
  {
    quote: "Finally, a platform that understands the complexity of construction finance. Our AP/AR team went from chaos to clarity overnight.",
    author: "Michael Torres",
    role: "CFO",
    company: "Atlas Builders International",
    rating: 5,
  },
  {
    quote: "As an interior designer working with multiple contractors, BuildFlow keeps all my renders, material specs, and vendor communications in one place. Game-changer.",
    author: "Elena Rodriguez",
    role: "Principal Designer",
    company: "Studio ER Interiors",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Loved by{" "}
            <span className="text-gradient">Industry Leaders</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-lg transition-all duration-300 animate-fade-up relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center shadow-glow">
                <Quote className="w-6 h-6 text-accent-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-amber-light" />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-accent font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
