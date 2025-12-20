import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Volume2, MessageCircle, Zap, Clock, CheckCircle2, AlertCircle, Loader2, Bot, Wand2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const VoiceCommandPage = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [processing, setProcessing] = useState(false);

  const recentCommands = [
    { id: 1, command: "Show me the budget for Tower A", status: "completed", time: "2 min ago", response: "Budget overview displayed for Tower A project" },
    { id: 2, command: "Schedule a meeting with contractors", status: "completed", time: "5 min ago", response: "Meeting scheduled for tomorrow at 10 AM" },
    { id: 3, command: "What's the delay status on Phase 2?", status: "completed", time: "12 min ago", response: "Phase 2 is 3 days behind schedule due to material delays" },
  ];

  const suggestedCommands = [
    { icon: "📊", text: "Show project analytics" },
    { icon: "📅", text: "What's due this week?" },
    { icon: "⚠️", text: "Any critical risks?" },
    { icon: "💰", text: "Budget summary" },
    { icon: "👷", text: "Team availability" },
    { icon: "📋", text: "Pending approvals" },
  ];

  const capabilities = [
    { icon: MessageCircle, title: "Natural Language", desc: "Speak naturally, AI understands context" },
    { icon: Zap, title: "Instant Actions", desc: "Execute commands in real-time" },
    { icon: Bot, title: "Multi-modal AI", desc: "Voice, text, and visual responses" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Voice Command Interface</h1>
              <p className="text-sm text-muted-foreground">Control your projects with natural voice commands</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Main Voice Interface */}
            <div className="col-span-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Voice Visualizer */}
                  <div className={cn(
                    "h-64 flex flex-col items-center justify-center transition-all duration-500",
                    isListening 
                      ? "bg-gradient-to-br from-emerald-500/20 to-teal-600/20" 
                      : "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
                  )}>
                    {/* Sound Wave Animation */}
                    <div className="relative mb-6">
                      <div className={cn(
                        "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300",
                        isListening 
                          ? "bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30 animate-pulse" 
                          : "bg-muted"
                      )}>
                        {processing ? (
                          <Loader2 className="w-10 h-10 text-white animate-spin" />
                        ) : isListening ? (
                          <Mic className="w-10 h-10 text-white" />
                        ) : (
                          <MicOff className="w-10 h-10 text-muted-foreground" />
                        )}
                      </div>
                      {isListening && (
                        <>
                          <div className="absolute inset-0 rounded-full border-4 border-emerald-500/50 animate-ping" />
                          <div className="absolute -inset-4 rounded-full border-2 border-emerald-500/30 animate-pulse" />
                        </>
                      )}
                    </div>
                    
                    <p className="text-lg font-medium text-foreground mb-2">
                      {processing ? "Processing your command..." : isListening ? "Listening..." : "Click to start speaking"}
                    </p>
                    {transcript && (
                      <p className="text-muted-foreground italic max-w-md text-center">"{transcript}"</p>
                    )}
                  </div>

                  {/* Controls */}
                  <div className="p-6 border-t border-border">
                    <div className="flex items-center justify-center gap-4">
                      <Button 
                        size="lg"
                        variant={isListening ? "destructive" : "default"}
                        onClick={() => {
                          if (isListening) {
                            setIsListening(false);
                            setProcessing(true);
                            setTimeout(() => setProcessing(false), 2000);
                          } else {
                            setIsListening(true);
                            setTranscript("Show me the project timeline for Q1...");
                          }
                        }}
                        className="gap-2 px-8"
                      >
                        {isListening ? (
                          <>
                            <MicOff className="w-5 h-5" />
                            Stop Listening
                          </>
                        ) : (
                          <>
                            <Mic className="w-5 h-5" />
                            Start Voice Command
                          </>
                        )}
                      </Button>
                      <Button variant="outline" size="lg" className="gap-2">
                        <Volume2 className="w-5 h-5" />
                        Audio Settings
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Suggested Commands */}
              <Card className="mt-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Wand2 className="w-4 h-4" />
                    Try Saying...
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {suggestedCommands.map((cmd, i) => (
                      <Button 
                        key={i} 
                        variant="outline" 
                        className="justify-start gap-2 h-auto py-3"
                        onClick={() => {
                          setTranscript(cmd.text);
                          setIsListening(true);
                        }}
                      >
                        <span className="text-lg">{cmd.icon}</span>
                        <span className="text-sm">{cmd.text}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Panel */}
            <div className="col-span-4 space-y-6">
              {/* Capabilities */}
              <Card className="border-emerald-500/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">AI Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <cap.icon className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{cap.title}</p>
                        <p className="text-xs text-muted-foreground">{cap.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Commands */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Recent Commands
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentCommands.map((cmd) => (
                    <div key={cmd.id} className="p-3 rounded-lg bg-secondary/50">
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-medium text-sm">"{cmd.command}"</p>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{cmd.response}</p>
                      <p className="text-xs text-muted-foreground/60">{cmd.time}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 border-emerald-500/20">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-emerald-500">156</p>
                      <p className="text-xs text-muted-foreground">Commands Today</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-emerald-500">98%</p>
                      <p className="text-xs text-muted-foreground">Recognition Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VoiceCommandPage;
