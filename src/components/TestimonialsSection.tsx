import { Star, Quote, Building2, Users, Trophy } from "lucide-react";

const testimonials = [
  {
    quote: "Construq transformed how we manage our $50M commercial projects. The real-time collaboration between our architects and contractors has cut approval times by 60%.",
    author: "Sarah Chen",
    role: "Director of Operations",
    company: "Meridian Construction Group",
    rating: 5,
    avatar: "SC",
  },
  {
    quote: "Finally, a platform that understands the complexity of construction finance. Our AP/AR team went from chaos to clarity overnight. The ROI was immediate.",
    author: "Michael Torres",
    role: "CFO",
    company: "Atlas Builders International",
    rating: 5,
    avatar: "MT",
  },
  {
    quote: "As an interior designer working with multiple contractors, Construq keeps all my renders, material specs, and vendor communications in one place. Game-changer.",
    author: "Elena Rodriguez",
    role: "Principal Designer",
    company: "Studio ER Interiors",
    rating: 5,
    avatar: "ER",
  },
];

const logos = [
  { name: "Turner", icon: Building2 },
  { name: "Bechtel", icon: Building2 },
  { name: "Skanska", icon: Building2 },
  { name: "Fluor", icon: Building2 },
  { name: "Jacobs", icon: Building2 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Trophy className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Customer Success</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry
            <br />
            <span className="text-gradient-accent">Leaders Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See why the world's leading construction companies choose Construq.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative bg-card rounded-3xl p-8 border border-border shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <Quote className="w-6 h-6 text-accent-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos section */}
        <div className="border-t border-border pt-16">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted by leading construction enterprises
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <logo.icon className="w-6 h-6" />
                <span className="font-display font-semibold text-lg">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;