const stats = [
  { value: "2,500+", label: "Companies Worldwide" },
  { value: "$4.2B", label: "Projects Managed" },
  { value: "150K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime SLA" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-teal-100 font-medium text-sm">
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
