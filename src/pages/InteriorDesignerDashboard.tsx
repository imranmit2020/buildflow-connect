import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Check,
  Send,
  Palette,
  Save,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const rooms = ["Living Room", "Bedroom", "Kitchen", "Bathroom"];

const materials = [
  {
    id: "1",
    name: "Marble Tile",
    variant: "White",
    price: 12.5,
    unit: "sqft",
    color: "#f5f5f5",
    selected: true,
  },
  {
    id: "2",
    name: "Wooden Floor",
    variant: "Maple",
    price: 10.2,
    unit: "sqft",
    color: "#d4a574",
    selected: false,
  },
  {
    id: "3",
    name: "Wall Paint",
    variant: "Cream",
    price: 22,
    unit: "gallon",
    color: "#fff5e6",
    selected: true,
  },
  {
    id: "4",
    name: "Ceramic Tile",
    variant: "Gray",
    price: 8.9,
    unit: "sqft",
    color: "#a0a0a0",
    selected: false,
  },
  {
    id: "5",
    name: "Hardwood",
    variant: "Oak",
    price: 15.3,
    unit: "sqft",
    color: "#8b6914",
    selected: false,
  },
  {
    id: "6",
    name: "Wall Paint",
    variant: "Sage",
    price: 24,
    unit: "gallon",
    color: "#b2c9a7",
    selected: false,
  },
];

const InteriorDesignerDashboard = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Living Room");
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>(["1", "3"]);

  const toggleMaterial = (id: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const selectedItems = materials.filter((m) => selectedMaterials.includes(m.id));
  const estimatedCost = selectedItems.reduce((acc, m) => acc + m.price * 100, 0);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 overflow-auto">
          {/* Page header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-accent font-medium mb-1">Role: Interior Designer</p>
              <h1 className="text-3xl font-display font-bold text-foreground">
                Material Selection
              </h1>
            </div>
            <Button
              variant="accent"
              className="gap-2"
              onClick={() => setCopilotOpen(true)}
            >
              <Bot className="w-4 h-4" />
              AI Copilot
            </Button>
          </div>

          {/* Room selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {rooms.map((room) => (
              <button
                key={room}
                onClick={() => setSelectedRoom(room)}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-all",
                  selectedRoom === room
                    ? "bg-accent text-accent-foreground shadow-glow"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                {room}
              </button>
            ))}
          </div>

          {/* AI Filter badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              AI Filter: "Light Modern"
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Material library */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-6 shadow-card">
                <h3 className="font-display font-semibold text-lg text-foreground mb-6">
                  Material Library
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {materials.map((material) => {
                    const isSelected = selectedMaterials.includes(material.id);
                    return (
                      <div
                        key={material.id}
                        onClick={() => toggleMaterial(material.id)}
                        className={cn(
                          "relative rounded-xl border p-4 cursor-pointer transition-all hover:shadow-lg",
                          isSelected
                            ? "border-accent bg-accent/5 shadow-card"
                            : "border-border bg-card hover:border-accent/50"
                        )}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-accent-foreground" />
                          </div>
                        )}

                        {/* Color swatch */}
                        <div
                          className="w-full h-24 rounded-lg mb-4 border border-border"
                          style={{ backgroundColor: material.color }}
                        />

                        <h4 className="font-medium text-foreground">
                          {material.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {material.variant}
                        </p>
                        <p className="text-lg font-bold text-accent">
                          ${material.price}/{material.unit}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">
              {/* AI Recommendation */}
              <div className="bg-gradient-to-br from-accent/10 to-amber-500/10 rounded-xl border border-accent/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent-gradient rounded-xl flex items-center justify-center shadow-glow">
                    <Sparkles className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">
                    AI Recommendation
                  </h3>
                </div>
                <p className="text-foreground">
                  "Matches your theme: <strong>Minimalist Luxury</strong>. Consider
                  adding sage green accents for a modern touch."
                </p>
              </div>

              {/* Selected combo */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-card">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Selected Combo
                </h3>

                {selectedItems.length > 0 ? (
                  <>
                    <div className="space-y-3 mb-4">
                      {selectedItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                        >
                          <div
                            className="w-8 h-8 rounded-lg border border-border"
                            style={{ backgroundColor: item.color }}
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">
                              {item.name} - {item.variant}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              ${item.price}/{item.unit}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-accent/10 rounded-lg mb-4">
                      <p className="text-sm text-muted-foreground">Estimated Cost</p>
                      <p className="text-2xl font-display font-bold text-accent">
                        ${estimatedCost.toLocaleString()}
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    Select materials to see your combo
                  </p>
                )}

                <div className="space-y-2">
                  <Button variant="accent" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Send to Vendor
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Palette className="w-4 h-4" />
                    Make Moodboard
                  </Button>
                  <Button variant="ghost" className="w-full gap-2">
                    <Save className="w-4 h-4" />
                    Save Selection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default InteriorDesignerDashboard;
