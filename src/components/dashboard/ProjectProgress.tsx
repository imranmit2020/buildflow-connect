const ProjectProgress = () => {
  const phases = [
    { name: "Planning", progress: 100, status: "completed" },
    { name: "Foundation", progress: 100, status: "completed" },
    { name: "Structure", progress: 65, status: "in-progress" },
    { name: "MEP Works", progress: 30, status: "in-progress" },
    { name: "Interior", progress: 0, status: "pending" },
    { name: "Finishing", progress: 0, status: "pending" },
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display font-semibold text-lg text-foreground">
          Project Progress
        </h3>
        <span className="text-2xl font-display font-bold text-accent">42%</span>
      </div>

      <div className="space-y-4">
        {phases.map((phase, index) => (
          <div key={phase.name} className="relative">
            <div className="flex items-center gap-4">
              {/* Timeline dot */}
              <div className="relative flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 z-10 ${
                    phase.status === "completed"
                      ? "bg-emerald-500 border-emerald-500"
                      : phase.status === "in-progress"
                      ? "bg-accent border-accent"
                      : "bg-card border-muted-foreground"
                  }`}
                />
                {index < phases.length - 1 && (
                  <div
                    className={`absolute top-4 w-0.5 h-10 ${
                      phase.status === "completed"
                        ? "bg-emerald-500"
                        : "bg-muted"
                    }`}
                  />
                )}
              </div>

              {/* Phase info */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span
                    className={`font-medium ${
                      phase.status === "pending"
                        ? "text-muted-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {phase.name}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      phase.status === "completed"
                        ? "text-emerald-500"
                        : phase.status === "in-progress"
                        ? "text-accent"
                        : "text-muted-foreground"
                    }`}
                  >
                    {phase.progress}%
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      phase.status === "completed"
                        ? "bg-emerald-500"
                        : "bg-accent"
                    }`}
                    style={{ width: `${phase.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectProgress;
