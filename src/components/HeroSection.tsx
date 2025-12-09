import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-100/40 to-violet-100/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-teal-50/30 to-cyan-50/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <span className="text-teal-600 font-medium text-sm mb-6 block">
              Trusted <span className="text-slate-400">by</span> <span className="text-purple-600">ep-contractee</span>
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.1] mb-6">
              The Autonomous{" "}
              <span className="block">AI Platform for</span>
              <span className="block">Construction,</span>
              <span className="block">Interiors & Procurement</span>
            </h1>

            <p className="text-base text-slate-500 max-w-md mb-8 leading-relaxed">
              Orchestrate projects, materials, teams,<br />
              and finances -automatically, One platform.<br />
              Zero chaos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-purple-200">
                Book Live Demo
              </Button>
              <button className="flex items-center gap-3 text-slate-700 font-medium hover:text-purple-600 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                  <Play className="w-4 h-4 ml-0.5 text-slate-700" fill="currentColor" />
                </div>
                Watch 30-Second video
              </button>
            </div>
          </div>

          {/* Right content - Dashboard mockup */}
          <div className="relative">
            {/* Main dashboard card */}
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200/50 p-4 border border-slate-100">
              {/* Browser header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex items-center gap-2 px-3">
                  <span className="text-purple-600 text-sm font-medium">Pextos</span>
                  <div className="flex gap-4 text-xs text-slate-400">
                    <span>construction</span>
                    <span>project planning</span>
                    <span>Personal Update</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-100" />
                  <div className="w-6 h-6 rounded-full bg-orange-400" />
                </div>
              </div>

              {/* Dashboard content */}
              <div className="grid grid-cols-12 gap-3">
                {/* Sidebar */}
                <div className="col-span-2 space-y-2">
                  <div className="text-purple-600 text-xs font-semibold mb-3">Tumina</div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 py-1">
                    <div className="w-4 h-4 bg-slate-100 rounded" />
                    <span>hello</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs py-1">
                    <div className="w-4 h-4 bg-green-500 rounded" />
                    <span className="text-white bg-green-500 px-2 py-0.5 rounded text-[10px]">Ordering</span>
                  </div>
                </div>

                {/* Main content area */}
                <div className="col-span-7 space-y-3">
                  {/* Timeline/Gantt */}
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-[10px] text-slate-400 mb-2">Started monday</div>
                    <div className="grid grid-cols-6 gap-1 text-[8px] text-slate-400 mb-2">
                      <span>17/07/2025</span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span>PORTION</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-4 bg-purple-400 rounded-full w-3/4" />
                      <div className="h-4 bg-green-400 rounded-full w-1/2" />
                      <div className="h-4 bg-orange-300 rounded-full w-2/3" />
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white border border-slate-100 rounded-lg p-2 text-center">
                      <div className="text-[10px] text-slate-400">BUDGET LIMIT</div>
                      <div className="text-sm font-semibold text-slate-700">3/4/kXk</div>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-lg p-2 text-center">
                      <div className="text-[10px] text-slate-400">USED</div>
                      <div className="text-sm font-semibold text-slate-700">0/4kXk</div>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-lg p-2 text-center">
                      <div className="text-[10px] text-slate-400">1/4kXk</div>
                    </div>
                  </div>
                </div>

                {/* Right sidebar */}
                <div className="col-span-3 space-y-2">
                  <div className="bg-slate-50 rounded-lg p-2">
                    <div className="text-[10px] text-slate-500">CCChi</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification cards */}
            {/* AI Adjustment card */}
            <div className="absolute -top-4 right-8 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl px-4 py-3 shadow-lg shadow-purple-200/50 animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">🤖</span>
                </div>
                <div>
                  <div className="text-xs font-semibold">AI Adjustment</div>
                  <div className="text-[10px] opacity-80">Start a fixed cost withdrawal</div>
                </div>
              </div>
            </div>

            {/* Damage Warning card */}
            <div className="absolute -bottom-2 right-4 bg-white rounded-xl px-4 py-3 shadow-xl shadow-slate-200/50 border border-red-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-500 text-sm">⚠</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-red-600">Damage Reported</div>
                  <div className="text-[10px] text-slate-500">Replace trash drain at the</div>
                  <div className="text-[10px] text-slate-500">East corner room 3rd section</div>
                </div>
              </div>
            </div>

            {/* Small floating elements */}
            <div className="absolute top-1/3 -left-4 bg-white rounded-lg px-3 py-2 shadow-lg border border-slate-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-[10px] text-slate-600">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400">
            Trusted by{" "}
            <span className="text-purple-600 font-medium">contractors</span>,{" "}
            <span className="text-purple-600 font-medium">architects</span>,{" "}
            <span className="text-purple-600 font-medium">designers</span>, and{" "}
            <span className="text-slate-600">project owners worldwide</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
