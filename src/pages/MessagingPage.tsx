import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bot,
  Send,
  Sparkles,
  Image,
  Paperclip,
  MoreVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";

const threads = [
  { id: "1", name: "Contractor Updates", unread: 4 },
  { id: "2", name: "Architect Feedback", unread: 2 },
  { id: "3", name: "Vendor Delivery Status", unread: 1 },
  { id: "4", name: "Finance Queries", unread: 0 },
  { id: "5", name: "AI Copilot Auto-Alerts", unread: 3 },
];

const messages = [
  {
    id: "1",
    sender: "Contractor",
    role: "contractor",
    content: "Electrical wiring 70% done. Need approval for duct change.",
    time: "10:32 AM",
    hasImage: false,
  },
  {
    id: "2",
    sender: "You (Client)",
    role: "client",
    content: "Why was this needed?",
    time: "10:45 AM",
    hasImage: false,
    isOwn: true,
  },
  {
    id: "3",
    sender: "Contractor",
    role: "contractor",
    content: "Beam interference—see photo attached.",
    time: "11:02 AM",
    hasImage: true,
  },
  {
    id: "4",
    sender: "AI Assistant",
    role: "ai",
    content: "Based on the photo, I can confirm this is a structural beam conflict. The proposed duct rerouting will add approximately $450 to the project cost but prevents potential safety issues.",
    time: "11:03 AM",
    hasImage: false,
    isAI: true,
  },
];

const MessagingPage = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [activeThread, setActiveThread] = useState(threads[0]);
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className="min-h-screen flex w-full bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 flex overflow-hidden">
          {/* Threads list */}
          <div className="w-80 border-r border-border bg-card flex flex-col">
            <div className="p-4 border-b border-border">
              <h2 className="font-display font-semibold text-foreground">Messages</h2>
            </div>

            <div className="flex-1 overflow-y-auto">
              {threads.map((thread) => (
                <button
                  key={thread.id}
                  onClick={() => setActiveThread(thread)}
                  className={cn(
                    "w-full p-4 text-left border-b border-border hover:bg-secondary/50 transition-colors",
                    activeThread.id === thread.id && "bg-secondary"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "font-medium",
                        activeThread.id === thread.id
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {thread.name}
                    </span>
                    {thread.unread > 0 && (
                      <span className="w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                        {thread.unread}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 flex flex-col">
            {/* Thread header */}
            <div className="h-16 border-b border-border flex items-center justify-between px-6 bg-card">
              <h3 className="font-display font-semibold text-foreground">
                {activeThread.name}
              </h3>
              <div className="flex gap-2">
                <Button
                  variant="accent"
                  size="sm"
                  className="gap-2"
                  onClick={() => setCopilotOpen(true)}
                >
                  <Bot className="w-4 h-4" />
                  AI Assist
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.isOwn ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[70%] rounded-2xl p-4",
                      message.isOwn
                        ? "bg-accent text-accent-foreground"
                        : message.isAI
                        ? "bg-gradient-to-br from-accent/20 to-amber-500/20 border border-accent/20"
                        : "bg-secondary"
                    )}
                  >
                    {!message.isOwn && (
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                            message.isAI
                              ? "bg-accent-gradient text-accent-foreground"
                              : "bg-gradient-to-br from-accent to-amber-light text-accent-foreground"
                          )}
                        >
                          {message.isAI ? (
                            <Sparkles className="w-3 h-3" />
                          ) : (
                            message.sender[0]
                          )}
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {message.sender}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {message.time}
                        </span>
                      </div>
                    )}
                    <p className={cn(message.isOwn ? "text-accent-foreground" : "text-foreground")}>
                      {message.content}
                    </p>
                    {message.hasImage && (
                      <div className="mt-3 bg-card/50 rounded-lg p-3 flex items-center gap-2 cursor-pointer hover:bg-card transition-colors">
                        <Image className="w-5 h-5 text-accent" />
                        <span className="text-sm text-foreground">beam_conflict.jpg</span>
                      </div>
                    )}
                    {message.isOwn && (
                      <p className="text-xs text-accent-foreground/70 mt-1 text-right">
                        {message.time}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* AI Assist prompt */}
              <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-xl border border-accent/20">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-sm text-foreground flex-1">
                  "Draft explanation for client about the beam interference?"
                </span>
                <Button variant="accent" size="sm">Yes</Button>
                <Button variant="ghost" size="sm">No</Button>
              </div>
            </div>

            {/* Input area */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-3">
                <Button variant="ghost" size="icon">
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Input
                  placeholder="Type your message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="flex-1"
                />
                <Button variant="outline" size="sm" className="gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI Rewrite
                </Button>
                <Button variant="accent" size="icon">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default MessagingPage;
