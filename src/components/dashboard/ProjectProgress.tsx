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
    <div className="bg-card rounded-xl border border-border/60 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">Project Progress</h3>
        <span className="text-2xl font-semibold text-primary">42%</span>
      </div>

      <div className="space-y-4">
        {phases.map((phase, index) => (
          <div key={phase.name} className="relative">
            <div className="flex items-center gap-4">
              {/* Timeline dot */}
              <div className="relative flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full z-10 ${
                    phase.status === "completed"
                      ? "bg-primary"
                      : phase.status === "in-progress"
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                />
                {index < phases.length - 1 && (
                  <div
                    className={`absolute top-3 w-0.5 h-8 ${
                      phase.status === "completed"
                        ? "bg-primary"
                        : "bg-muted"
                    }`}
                  />
                )}
              </div>

              {/* Phase info */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span
                    className={`text-sm font-medium ${
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
                        ? "text-primary"
                        : phase.status === "in-progress"
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {phase.progress}%
                  </span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      phase.status === "completed" || phase.status === "in-progress"
                        ? "bg-primary"
                        : "bg-transparent"
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
