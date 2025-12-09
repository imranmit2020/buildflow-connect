const stats = [
  { value: "2,500+", label: "Companies Worldwide" },
  { value: "$4.2B", label: "Projects Managed" },
  { value: "150K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime SLA" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pattern-grid opacity-[0.03]" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-steel-blue/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
