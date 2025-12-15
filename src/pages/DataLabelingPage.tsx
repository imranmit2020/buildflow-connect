import { useState, useRef } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Upload,
  Image as ImageIcon,
  Tag,
  Square,
  Circle,
  Pencil,
  Trash2,
  Download,
  Sparkles,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Layers,
  Eye,
  EyeOff,
  ChevronRight,
  Bot,
  CheckCircle2,
  AlertTriangle,
  HardHat,
  Wrench,
  Building2,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Label {
  id: string;
  name: string;
  color: string;
  icon: React.ElementType;
  count: number;
}

interface Annotation {
  id: string;
  type: "box" | "polygon" | "point";
  labelId: string;
  coordinates: { x: number; y: number }[];
  aiConfidence?: number;
}

interface UploadedImage {
  id: string;
  name: string;
  url: string;
  annotations: Annotation[];
  aiLabeled: boolean;
  status: "pending" | "in-progress" | "completed";
}

const predefinedLabels: Label[] = [
  { id: "safety-hazard", name: "Safety Hazard", color: "#ef4444", icon: AlertTriangle, count: 0 },
  { id: "worker", name: "Worker", color: "#3b82f6", icon: HardHat, count: 0 },
  { id: "equipment", name: "Equipment", color: "#f59e0b", icon: Wrench, count: 0 },
  { id: "structure", name: "Structure", color: "#10b981", icon: Building2, count: 0 },
  { id: "vehicle", name: "Vehicle", color: "#8b5cf6", icon: Truck, count: 0 },
  { id: "material", name: "Material", color: "#ec4899", icon: Layers, count: 0 },
];

const mockImages: UploadedImage[] = [
  {
    id: "1",
    name: "site_photo_001.jpg",
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
    annotations: [
      { id: "a1", type: "box", labelId: "worker", coordinates: [{ x: 120, y: 80 }, { x: 200, y: 220 }], aiConfidence: 0.94 },
      { id: "a2", type: "box", labelId: "equipment", coordinates: [{ x: 300, y: 150 }, { x: 450, y: 300 }], aiConfidence: 0.87 },
    ],
    aiLabeled: true,
    status: "completed",
  },
  {
    id: "2",
    name: "foundation_work.jpg",
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
    annotations: [],
    aiLabeled: false,
    status: "pending",
  },
  {
    id: "3",
    name: "safety_inspection.jpg",
    url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
    annotations: [
      { id: "a3", type: "box", labelId: "safety-hazard", coordinates: [{ x: 50, y: 100 }, { x: 150, y: 200 }], aiConfidence: 0.91 },
    ],
    aiLabeled: true,
    status: "in-progress",
  },
];

const tools = [
  { id: "select", icon: Square, label: "Select" },
  { id: "box", icon: Square, label: "Bounding Box" },
  { id: "polygon", icon: Layers, label: "Polygon" },
  { id: "point", icon: Circle, label: "Point" },
  { id: "brush", icon: Pencil, label: "Smart Brush" },
];

const DataLabelingPage = () => {
  const [images, setImages] = useState<UploadedImage[]>(mockImages);
  const [selectedImage, setSelectedImage] = useState<UploadedImage | null>(mockImages[0]);
  const [selectedTool, setSelectedTool] = useState("box");
  const [selectedLabel, setSelectedLabel] = useState<string>("worker");
  const [labels, setLabels] = useState<Label[]>(predefinedLabels);
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [zoom, setZoom] = useState(100);
  const [isAIProcessing, setIsAIProcessing] = useState(false);
  const [aiProgress, setAiProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: UploadedImage[] = Array.from(files).map((file, idx) => ({
        id: `new-${Date.now()}-${idx}`,
        name: file.name,
        url: URL.createObjectURL(file),
        annotations: [],
        aiLabeled: false,
        status: "pending" as const,
      }));
      setImages([...images, ...newImages]);
    }
  };

  const handleAIAutoLabel = () => {
    if (!selectedImage) return;
    setIsAIProcessing(true);
    setAiProgress(0);

    const interval = setInterval(() => {
      setAiProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAIProcessing(false);
          // Mock AI labeling result
          const updatedImages = images.map((img) =>
            img.id === selectedImage.id
              ? {
                  ...img,
                  aiLabeled: true,
                  status: "completed" as const,
                  annotations: [
                    ...img.annotations,
                    {
                      id: `ai-${Date.now()}`,
                      type: "box" as const,
                      labelId: "worker",
                      coordinates: [{ x: 100, y: 100 }, { x: 250, y: 300 }],
                      aiConfidence: 0.92,
                    },
                  ],
                }
              : img
          );
          setImages(updatedImages);
          setSelectedImage(updatedImages.find((img) => img.id === selectedImage.id) || null);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "in-progress":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getLabelById = (id: string) => labels.find((l) => l.id === id);

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-gradient rounded-xl flex items-center justify-center shadow-glow">
                  <Tag className="w-5 h-5 text-accent-foreground" />
                </div>
                AI Data Labeling Studio
              </h1>
              <p className="text-muted-foreground mt-1">
                Train AI models with construction-specific annotations
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export Dataset
              </Button>
              <Button variant="accent" className="gap-2" onClick={handleUpload}>
                <Upload className="w-4 h-4" />
                Upload Images
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 h-[calc(100vh-220px)]">
            {/* Left Panel - Image List */}
            <div className="col-span-2 space-y-4">
              <Card className="h-full overflow-hidden">
                <CardHeader className="py-3 px-4 border-b border-border">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    Images ({images.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 overflow-y-auto h-[calc(100%-60px)]">
                  <div className="space-y-2">
                    {images.map((image) => (
                      <div
                        key={image.id}
                        onClick={() => setSelectedImage(image)}
                        className={cn(
                          "relative rounded-lg overflow-hidden cursor-pointer border-2 transition-all",
                          selectedImage?.id === image.id
                            ? "border-accent ring-2 ring-accent/20"
                            : "border-transparent hover:border-border"
                        )}
                      >
                        <img
                          src={image.url}
                          alt={image.name}
                          className="w-full h-20 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-1 left-1 right-1">
                          <p className="text-[10px] text-white truncate">{image.name}</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <Badge
                              variant="outline"
                              className={cn("text-[8px] px-1 py-0", getStatusColor(image.status))}
                            >
                              {image.status}
                            </Badge>
                            {image.aiLabeled && (
                              <Sparkles className="w-3 h-3 text-accent" />
                            )}
                          </div>
                        </div>
                        {image.annotations.length > 0 && (
                          <div className="absolute top-1 right-1 bg-black/50 rounded px-1 py-0.5">
                            <span className="text-[10px] text-white">
                              {image.annotations.length}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Center - Canvas */}
            <div className="col-span-7 flex flex-col gap-4">
              {/* Toolbar */}
              <Card className="p-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {tools.map((tool) => {
                      const Icon = tool.icon;
                      return (
                        <Button
                          key={tool.id}
                          variant={selectedTool === tool.id ? "accent" : "ghost"}
                          size="sm"
                          onClick={() => setSelectedTool(tool.id)}
                          className="gap-1.5"
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-xs">{tool.label}</span>
                        </Button>
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowAnnotations(!showAnnotations)}
                    >
                      {showAnnotations ? (
                        <Eye className="w-4 h-4" />
                      ) : (
                        <EyeOff className="w-4 h-4" />
                      )}
                    </Button>
                    <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => setZoom(Math.max(50, zoom - 10))}
                      >
                        <ZoomOut className="w-3 h-3" />
                      </Button>
                      <span className="text-xs w-10 text-center">{zoom}%</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => setZoom(Math.min(200, zoom + 10))}
                      >
                        <ZoomIn className="w-3 h-3" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setZoom(100)}>
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Canvas Area */}
              <Card className="flex-1 overflow-hidden relative">
                {selectedImage ? (
                  <div className="relative w-full h-full flex items-center justify-center bg-black/20 overflow-auto">
                    <div
                      className="relative"
                      style={{ transform: `scale(${zoom / 100})` }}
                    >
                      <img
                        src={selectedImage.url}
                        alt={selectedImage.name}
                        className="max-w-none"
                        draggable={false}
                      />
                      {/* Render annotations */}
                      {showAnnotations &&
                        selectedImage.annotations.map((annotation) => {
                          const label = getLabelById(annotation.labelId);
                          if (!label || annotation.coordinates.length < 2) return null;
                          const [start, end] = annotation.coordinates;
                          return (
                            <div
                              key={annotation.id}
                              className="absolute border-2 rounded"
                              style={{
                                left: start.x,
                                top: start.y,
                                width: end.x - start.x,
                                height: end.y - start.y,
                                borderColor: label.color,
                                backgroundColor: `${label.color}20`,
                              }}
                            >
                              <div
                                className="absolute -top-5 left-0 px-1.5 py-0.5 rounded text-[10px] text-white flex items-center gap-1"
                                style={{ backgroundColor: label.color }}
                              >
                                {label.name}
                                {annotation.aiConfidence && (
                                  <span className="opacity-75">
                                    {Math.round(annotation.aiConfidence * 100)}%
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                    </div>

                    {/* AI Processing Overlay */}
                    {isAIProcessing && (
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-16 h-16 mx-auto bg-accent-gradient rounded-2xl flex items-center justify-center animate-pulse shadow-glow">
                            <Bot className="w-8 h-8 text-accent-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">AI Auto-Labeling</p>
                            <p className="text-sm text-muted-foreground">
                              Detecting objects in image...
                            </p>
                          </div>
                          <div className="w-64 mx-auto">
                            <Progress value={aiProgress} className="h-2" />
                            <p className="text-xs text-muted-foreground mt-1">{aiProgress}%</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-secondary rounded-2xl flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">No image selected</p>
                        <p className="text-sm text-muted-foreground">
                          Upload or select an image to start labeling
                        </p>
                      </div>
                      <Button variant="accent" onClick={handleUpload}>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Images
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Right Panel - Labels & AI */}
            <div className="col-span-3 space-y-4">
              {/* AI Auto-Label */}
              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    AI Auto-Label
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <p className="text-xs text-muted-foreground mb-3">
                    Let AI automatically detect and label objects in your construction images
                  </p>
                  <Button
                    variant="accent"
                    className="w-full gap-2"
                    onClick={handleAIAutoLabel}
                    disabled={!selectedImage || isAIProcessing}
                  >
                    <Bot className="w-4 h-4" />
                    {isAIProcessing ? "Processing..." : "Auto-Label with AI"}
                  </Button>
                </CardContent>
              </Card>

              {/* Labels */}
              <Card className="flex-1">
                <CardHeader className="py-3 px-4 border-b border-border">
                  <CardTitle className="text-sm flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      Labels
                    </span>
                    <Button variant="ghost" size="sm" className="h-7 text-xs">
                      + Add
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <div className="space-y-1">
                    {labels.map((label) => {
                      const Icon = label.icon;
                      return (
                        <div
                          key={label.id}
                          onClick={() => setSelectedLabel(label.id)}
                          className={cn(
                            "flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors",
                            selectedLabel === label.id
                              ? "bg-accent/10 border border-accent/30"
                              : "hover:bg-secondary"
                          )}
                        >
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${label.color}20` }}
                          >
                            <Icon className="w-4 h-4" style={{ color: label.color }} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{label.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {selectedImage?.annotations.filter((a) => a.labelId === label.id)
                                .length || 0}{" "}
                              annotations
                            </p>
                          </div>
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: label.color }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Annotations List */}
              {selectedImage && selectedImage.annotations.length > 0 && (
                <Card>
                  <CardHeader className="py-3 px-4 border-b border-border">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      Annotations ({selectedImage.annotations.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-2 max-h-48 overflow-y-auto">
                    <div className="space-y-1">
                      {selectedImage.annotations.map((annotation) => {
                        const label = getLabelById(annotation.labelId);
                        if (!label) return null;
                        const Icon = label.icon;
                        return (
                          <div
                            key={annotation.id}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary group"
                          >
                            <div
                              className="w-6 h-6 rounded flex items-center justify-center"
                              style={{ backgroundColor: `${label.color}20` }}
                            >
                              <Icon className="w-3 h-3" style={{ color: label.color }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium truncate">{label.name}</p>
                              {annotation.aiConfidence && (
                                <div className="flex items-center gap-1">
                                  <Sparkles className="w-2.5 h-2.5 text-accent" />
                                  <span className="text-[10px] text-muted-foreground">
                                    {Math.round(annotation.aiConfidence * 100)}% confidence
                                  </span>
                                </div>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 opacity-0 group-hover:opacity-100"
                            >
                              <Trash2 className="w-3 h-3 text-destructive" />
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Quick Stats */}
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">{images.length}</p>
                      <p className="text-xs text-muted-foreground">Total Images</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">
                        {images.reduce((acc, img) => acc + img.annotations.length, 0)}
                      </p>
                      <p className="text-xs text-muted-foreground">Annotations</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-emerald-400">
                        {images.filter((img) => img.status === "completed").length}
                      </p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-amber-400">
                        {images.filter((img) => img.aiLabeled).length}
                      </p>
                      <p className="text-xs text-muted-foreground">AI Labeled</p>
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

export default DataLabelingPage;
