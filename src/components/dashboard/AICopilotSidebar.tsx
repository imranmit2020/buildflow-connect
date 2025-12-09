import { useState } from "react";
import { Bot, Sparkles, X, Send, FileText, Mail, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AICopilotSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const modes = [
  { id: "project", label: "Project AI" },
  { id: "finance", label: "Finance AI" },
  { id: "vendor", label: "Vendor AI" },
];

const suggestions = [
  "Tile delivery may be delayed. Suggest updating schedule.",
  "Budget variance +3.8% — caused by vendor price change.",
  "3 drawings need review: electrical, flooring, plumbing.",
];

const shortcuts = [
  { icon: ClipboardList, label: "Create PO" },
  { icon: Mail, label: "Draft Email" },
  { icon: FileText, label: "Generate Report" },
];

const AICopilotSidebar = ({ isOpen, onClose }: AICopilotSidebarProps) => {
  const [activeMode, setActiveMode] = useState("project");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI Copilot. How can I help you today?",
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    
    // Mock AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Based on the current project data, here's my analysis: The project is progressing well with 42% completion. I recommend focusing on the electrical planning phase to avoid delays.`,
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div
      className={cn(
        "fixed right-0 top-0 h-full w-96 bg-card border-l border-border shadow-2xl z-50 flex flex-col transition-transform duration-300",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent-gradient rounded-xl flex items-center justify-center shadow-glow">
            <Bot className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground">AI Copilot</h3>
            <p className="text-xs text-muted-foreground">Always ready to help</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Mode selector */}
      <div className="flex gap-2 p-4 border-b border-border">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setActiveMode(mode.id)}
            className={cn(
              "flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-colors",
              activeMode === mode.id
                ? "bg-accent text-accent-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            )}
          >
            {mode.label}
          </button>
        ))}
      </div>

      {/* Suggestions */}
      <div className="p-4 border-b border-border">
        <p className="text-xs font-medium text-muted-foreground mb-3 flex items-center gap-2">
          <Sparkles className="w-3 h-3" />
          Real-Time Suggestions
        </p>
        <div className="space-y-2">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="p-3 bg-accent/5 border border-accent/10 rounded-lg text-sm text-foreground cursor-pointer hover:bg-accent/10 transition-colors"
            >
              {suggestion}
            </div>
          ))}
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[80%] p-3 rounded-xl text-sm",
                message.role === "user"
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-foreground"
              )}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button variant="accent" size="icon" onClick={handleSend}>
            <Send className="w-4 h-4" />
          </Button>
        </div>

        {/* Shortcuts */}
        <div className="flex gap-2">
          {shortcuts.map((shortcut) => {
            const Icon = shortcut.icon;
            return (
              <Button
                key={shortcut.label}
                variant="outline"
                size="sm"
                className="flex-1 text-xs"
              >
                <Icon className="w-3 h-3 mr-1" />
                {shortcut.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AICopilotSidebar;
