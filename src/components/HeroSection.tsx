import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-emerald-50 overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-teal-200/30 to-emerald-200/20 rounded-full blur-[100px]" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-gradient-to-br from-teal-100/40 to-cyan-100/30 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <span className="text-teal-600 font-semibold text-sm tracking-wide uppercase mb-4 block">
              CONSTRUQ NEXUS AI
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              The Autonomous{" "}
              <span className="block">AI Platform for</span>
              <span className="block">Construction,</span>
              <span className="block">Interiors & Procurement</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-md mb-8">
              Orchestrate projects, materials, teams, and finances — automatically. One platform, Zero chaos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium">
                Book Live Demo
              </Button>
              <button className="flex items-center gap-2 text-slate-700 font-medium hover:text-teal-600 transition-colors">
                <div className="w-10 h-10 rounded-full border-2 border-slate-300 flex items-center justify-center">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                Watch 30-Second Video
              </button>
            </div>
          </div>

          {/* Right content - Laptop mockup */}
          <div className="relative">
            <div className="relative bg-slate-800 rounded-t-xl p-2 shadow-2xl">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-700 rounded-t-lg">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-slate-600 rounded h-5 w-48" />
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="bg-slate-100 p-4 rounded-b-lg">
                <div className="flex gap-4 mb-4">
                  <div className="w-48 bg-white rounded-lg p-3 shadow-sm">
                    <div className="h-3 bg-slate-200 rounded w-20 mb-2" />
                    <div className="h-4 bg-teal-100 rounded w-16" />
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex gap-2 mb-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex-1 h-16 bg-gradient-to-b from-teal-50 to-white rounded border border-teal-100" />
                      ))}
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-8 bg-slate-50 rounded" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 h-24 bg-white rounded-lg shadow-sm p-3">
                    <div className="flex gap-2 h-full">
                      {[60, 80, 45, 90, 70, 85].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-teal-400 to-teal-200 rounded-t self-end" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="h-24 bg-white rounded-lg shadow-sm p-3">
                    <div className="w-full h-full rounded-full border-4 border-teal-400 border-t-slate-200" />
                  </div>
                </div>
              </div>
            </div>
            {/* Laptop base */}
            <div className="bg-slate-700 h-4 rounded-b-xl mx-8" />
            <div className="bg-slate-600 h-2 rounded-b-lg mx-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
