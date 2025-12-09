import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Construq transformed how we manage our $50M commercial projects. The real-time collaboration between our architects and contractors has cut approval times by 60%.",
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
    quote: "As an interior designer working with multiple contractors, Construq keeps all my renders, material specs, and vendor communications in one place. Game-changer.",
    author: "Elena Rodriguez",
    role: "Principal Designer",
    company: "Studio ER Interiors",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-teal-50 text-teal-600 font-semibold text-sm rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Loved by Industry Leaders
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400" />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-slate-500">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-teal-600 font-medium">
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
