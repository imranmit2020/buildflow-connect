import { useState, useRef, useCallback, useEffect } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MLDatasetPanel from "@/components/dashboard/MLDatasetPanel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Hand,
  MousePointer2,
  PenTool,
  Undo2,
  Redo2,
  Save,
  Plus,
  X,
  Crosshair,
  Database,
  Cpu,
  FlaskConical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface Label {
  id: string;
  name: string;
  color: string;
  icon: React.ElementType;
  count: number;
  isCustom?: boolean;
}

interface Annotation {
  id: string;
  type: "box" | "polygon" | "point" | "freehand";
  labelId: string;
  coordinates: { x: number; y: number }[];
  aiConfidence?: number;
  isManual?: boolean;
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
  { id: "select", icon: MousePointer2, label: "Select" },
  { id: "box", icon: Square, label: "Bounding Box" },
  { id: "polygon", icon: PenTool, label: "Polygon" },
  { id: "point", icon: Crosshair, label: "Point" },
  { id: "freehand", icon: Pencil, label: "Freehand Draw" },
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
  
  // Manual drawing state
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPoints, setCurrentPoints] = useState<{ x: number; y: number }[]>([]);
  const [drawingHistory, setDrawingHistory] = useState<Annotation[][]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const canvasRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  // Custom label creation
  const [isCreatingLabel, setIsCreatingLabel] = useState(false);
  const [newLabelName, setNewLabelName] = useState("");
  const [newLabelColor, setNewLabelColor] = useState("#6366f1");

  const customColors = [
    "#ef4444", "#f97316", "#f59e0b", "#eab308", "#84cc16",
    "#22c55e", "#10b981", "#14b8a6", "#06b6d4", "#0ea5e9",
    "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#d946ef",
    "#ec4899", "#f43f5e",
  ];

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

  // Get mouse position relative to image
  const getMousePosition = useCallback((e: React.MouseEvent) => {
    if (!imageRef.current) return { x: 0, y: 0 };
    const rect = imageRef.current.getBoundingClientRect();
    const scale = zoom / 100;
    return {
      x: Math.round((e.clientX - rect.left) / scale),
      y: Math.round((e.clientY - rect.top) / scale),
    };
  }, [zoom]);

  // Handle mouse down for drawing
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (selectedTool === "select" || !selectedImage) return;
    const pos = getMousePosition(e);
    
    if (selectedTool === "point") {
      // Add single point annotation immediately
      const newAnnotation: Annotation = {
        id: `manual-${Date.now()}`,
        type: "point",
        labelId: selectedLabel,
        coordinates: [pos],
        isManual: true,
      };
      addAnnotation(newAnnotation);
      toast.success("Point annotation added");
    } else {
      setIsDrawing(true);
      setCurrentPoints([pos]);
    }
  }, [selectedTool, selectedImage, selectedLabel, getMousePosition]);

  // Handle mouse move for drawing
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDrawing) return;
    const pos = getMousePosition(e);
    
    if (selectedTool === "freehand") {
      setCurrentPoints(prev => [...prev, pos]);
    } else if (selectedTool === "box" && currentPoints.length > 0) {
      setCurrentPoints([currentPoints[0], pos]);
    }
  }, [isDrawing, selectedTool, currentPoints, getMousePosition]);

  // Handle mouse up to finish drawing
  const handleMouseUp = useCallback(() => {
    if (!isDrawing || currentPoints.length < 1) {
      setIsDrawing(false);
      return;
    }

    let newAnnotation: Annotation | null = null;

    if (selectedTool === "box" && currentPoints.length >= 2) {
      const [start, end] = currentPoints;
      // Normalize coordinates (ensure start is top-left)
      const normalized = [
        { x: Math.min(start.x, end.x), y: Math.min(start.y, end.y) },
        { x: Math.max(start.x, end.x), y: Math.max(start.y, end.y) },
      ];
      if (Math.abs(normalized[1].x - normalized[0].x) > 10 && Math.abs(normalized[1].y - normalized[0].y) > 10) {
        newAnnotation = {
          id: `manual-${Date.now()}`,
          type: "box",
          labelId: selectedLabel,
          coordinates: normalized,
          isManual: true,
        };
      }
    } else if (selectedTool === "freehand" && currentPoints.length > 5) {
      // Simplify freehand path by sampling every Nth point
      const simplified = currentPoints.filter((_, i) => i % 3 === 0 || i === currentPoints.length - 1);
      newAnnotation = {
        id: `manual-${Date.now()}`,
        type: "freehand",
        labelId: selectedLabel,
        coordinates: simplified,
        isManual: true,
      };
    } else if (selectedTool === "polygon" && currentPoints.length >= 3) {
      newAnnotation = {
        id: `manual-${Date.now()}`,
        type: "polygon",
        labelId: selectedLabel,
        coordinates: currentPoints,
        isManual: true,
      };
    }

    if (newAnnotation) {
      addAnnotation(newAnnotation);
      toast.success(`Manual ${selectedTool} annotation added`);
    }

    setIsDrawing(false);
    setCurrentPoints([]);
  }, [isDrawing, currentPoints, selectedTool, selectedLabel]);

  // Add polygon point on click
  const handleCanvasClick = useCallback((e: React.MouseEvent) => {
    if (selectedTool !== "polygon" || !selectedImage) return;
    const pos = getMousePosition(e);
    setCurrentPoints(prev => [...prev, pos]);
  }, [selectedTool, selectedImage, getMousePosition]);

  // Finish polygon on double click
  const handleDoubleClick = useCallback(() => {
    if (selectedTool !== "polygon" || currentPoints.length < 3) return;
    
    const newAnnotation: Annotation = {
      id: `manual-${Date.now()}`,
      type: "polygon",
      labelId: selectedLabel,
      coordinates: currentPoints,
      isManual: true,
    };
    addAnnotation(newAnnotation);
    toast.success("Polygon annotation completed");
    setCurrentPoints([]);
  }, [selectedTool, currentPoints, selectedLabel]);

  // Add annotation with history tracking
  const addAnnotation = useCallback((annotation: Annotation) => {
    if (!selectedImage) return;
    
    const newAnnotations = [...selectedImage.annotations, annotation];
    const updatedImage = { ...selectedImage, annotations: newAnnotations, status: "in-progress" as const };
    
    setImages(prev => prev.map(img => img.id === selectedImage.id ? updatedImage : img));
    setSelectedImage(updatedImage);
    
    // Update history for undo/redo
    const newHistory = drawingHistory.slice(0, historyIndex + 1);
    newHistory.push(newAnnotations);
    setDrawingHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [selectedImage, drawingHistory, historyIndex]);

  // Undo last annotation
  const handleUndo = useCallback(() => {
    if (historyIndex <= 0 || !selectedImage) return;
    const newIndex = historyIndex - 1;
    const prevAnnotations = drawingHistory[newIndex] || [];
    
    setHistoryIndex(newIndex);
    const updatedImage = { ...selectedImage, annotations: prevAnnotations };
    setImages(prev => prev.map(img => img.id === selectedImage.id ? updatedImage : img));
    setSelectedImage(updatedImage);
    toast.info("Undo successful");
  }, [historyIndex, drawingHistory, selectedImage]);

  // Redo annotation
  const handleRedo = useCallback(() => {
    if (historyIndex >= drawingHistory.length - 1 || !selectedImage) return;
    const newIndex = historyIndex + 1;
    const nextAnnotations = drawingHistory[newIndex];
    
    setHistoryIndex(newIndex);
    const updatedImage = { ...selectedImage, annotations: nextAnnotations };
    setImages(prev => prev.map(img => img.id === selectedImage.id ? updatedImage : img));
    setSelectedImage(updatedImage);
    toast.info("Redo successful");
  }, [historyIndex, drawingHistory, selectedImage]);

  // Create custom label
  const handleCreateLabel = useCallback(() => {
    if (!newLabelName.trim()) {
      toast.error("Please enter a label name");
      return;
    }
    
    const newLabel: Label = {
      id: `custom-${Date.now()}`,
      name: newLabelName.trim(),
      color: newLabelColor,
      icon: Tag,
      count: 0,
      isCustom: true,
    };
    
    setLabels(prev => [...prev, newLabel]);
    setSelectedLabel(newLabel.id);
    setNewLabelName("");
    setIsCreatingLabel(false);
    toast.success(`Custom label "${newLabel.name}" created`);
  }, [newLabelName, newLabelColor]);

  // Delete custom label
  const handleDeleteLabel = useCallback((labelId: string) => {
    const label = labels.find(l => l.id === labelId);
    if (!label?.isCustom) return;
    
    setLabels(prev => prev.filter(l => l.id !== labelId));
    if (selectedLabel === labelId) {
      setSelectedLabel(labels[0]?.id || "");
    }
    toast.success("Custom label deleted");
  }, [labels, selectedLabel]);

  // Delete annotation
  const handleDeleteAnnotation = useCallback((annotationId: string) => {
    if (!selectedImage) return;
    
    const newAnnotations = selectedImage.annotations.filter(a => a.id !== annotationId);
    const updatedImage = { ...selectedImage, annotations: newAnnotations };
    
    setImages(prev => prev.map(img => img.id === selectedImage.id ? updatedImage : img));
    setSelectedImage(updatedImage);
    
    const newHistory = drawingHistory.slice(0, historyIndex + 1);
    newHistory.push(newAnnotations);
    setDrawingHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    toast.success("Annotation deleted");
  }, [selectedImage, drawingHistory, historyIndex]);

  const handleAIAutoLabel = () => {
    if (!selectedImage) return;
    setIsAIProcessing(true);
    setAiProgress(0);

    const interval = setInterval(() => {
      setAiProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAIProcessing(false);
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
          toast.success("AI auto-labeling complete!");
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
                Build high-quality datasets for ML model training
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Tabs defaultValue="labeling" className="w-auto">
                <TabsList className="bg-secondary/50">
                  <TabsTrigger value="labeling" className="gap-2 data-[state=active]:bg-background">
                    <Pencil className="w-3.5 h-3.5" />
                    Labeling
                  </TabsTrigger>
                  <TabsTrigger value="training" className="gap-2 data-[state=active]:bg-background">
                    <FlaskConical className="w-3.5 h-3.5" />
                    ML Training
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="w-px h-8 bg-border" />
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
                    <div className="w-px h-6 bg-border mx-2" />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleUndo}
                      disabled={historyIndex <= 0}
                      className="gap-1"
                    >
                      <Undo2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleRedo}
                      disabled={historyIndex >= drawingHistory.length - 1}
                      className="gap-1"
                    >
                      <Redo2 className="w-4 h-4" />
                    </Button>
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

              {/* Drawing Mode Indicator */}
              {selectedTool !== "select" && (
                <div className="flex items-center gap-2 px-3 py-2 bg-accent/10 border border-accent/20 rounded-lg">
                  <Hand className="w-4 h-4 text-accent" />
                  <span className="text-sm text-accent font-medium">
                    {selectedTool === "polygon" 
                      ? "Click to add points, double-click to finish polygon"
                      : selectedTool === "point"
                      ? "Click to place point annotations"
                      : selectedTool === "freehand"
                      ? "Click and drag to draw freehand annotations"
                      : "Click and drag to draw bounding box"}
                  </span>
                  {currentPoints.length > 0 && selectedTool === "polygon" && (
                    <Badge variant="outline" className="ml-auto">
                      {currentPoints.length} points
                    </Badge>
                  )}
                </div>
              )}

              {/* Canvas Area */}
              <Card className="flex-1 overflow-hidden relative">
                {selectedImage ? (
                  <div 
                    ref={canvasRef}
                    className={cn(
                      "relative w-full h-full flex items-center justify-center bg-black/20 overflow-auto",
                      selectedTool !== "select" && "cursor-crosshair"
                    )}
                    onMouseDown={selectedTool === "polygon" ? undefined : handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onClick={selectedTool === "polygon" ? handleCanvasClick : undefined}
                    onDoubleClick={handleDoubleClick}
                  >
                    <div
                      className="relative"
                      style={{ transform: `scale(${zoom / 100})`, transformOrigin: "center" }}
                    >
                      <img
                        ref={imageRef}
                        src={selectedImage.url}
                        alt={selectedImage.name}
                        className="max-w-none select-none"
                        draggable={false}
                      />
                      
                      {/* Render existing annotations */}
                      {showAnnotations &&
                        selectedImage.annotations.map((annotation) => {
                          const label = getLabelById(annotation.labelId);
                          if (!label) return null;
                          
                          // Render based on annotation type
                          if (annotation.type === "point" && annotation.coordinates.length >= 1) {
                            const point = annotation.coordinates[0];
                            return (
                              <div
                                key={annotation.id}
                                className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 shadow-lg"
                                style={{
                                  left: point.x,
                                  top: point.y,
                                  borderColor: label.color,
                                  backgroundColor: `${label.color}60`,
                                }}
                              >
                                <div
                                  className="absolute -top-5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded text-[10px] text-white whitespace-nowrap flex items-center gap-1"
                                  style={{ backgroundColor: label.color }}
                                >
                                  {annotation.isManual && <Hand className="w-2.5 h-2.5" />}
                                  {label.name}
                                </div>
                              </div>
                            );
                          }
                          
                          if (annotation.type === "freehand" && annotation.coordinates.length > 1) {
                            const pathData = annotation.coordinates
                              .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
                              .join(' ');
                            return (
                              <svg
                                key={annotation.id}
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                style={{ overflow: 'visible' }}
                              >
                                <path
                                  d={pathData}
                                  fill="none"
                                  stroke={label.color}
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  opacity="0.8"
                                />
                              </svg>
                            );
                          }
                          
                          if (annotation.type === "polygon" && annotation.coordinates.length >= 3) {
                            const pathData = annotation.coordinates
                              .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
                              .join(' ') + ' Z';
                            return (
                              <svg
                                key={annotation.id}
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                style={{ overflow: 'visible' }}
                              >
                                <path
                                  d={pathData}
                                  fill={`${label.color}20`}
                                  stroke={label.color}
                                  strokeWidth="2"
                                />
                              </svg>
                            );
                          }
                          
                          // Box annotation
                          if (annotation.coordinates.length >= 2) {
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
                                  {annotation.isManual && <Hand className="w-2.5 h-2.5" />}
                                  {label.name}
                                  {annotation.aiConfidence && (
                                    <span className="opacity-75">
                                      {Math.round(annotation.aiConfidence * 100)}%
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          }
                          
                          return null;
                        })}
                      
                      {/* Render current drawing in progress */}
                      {isDrawing && currentPoints.length > 0 && (
                        <>
                          {selectedTool === "box" && currentPoints.length >= 2 && (
                            <div
                              className="absolute border-2 border-dashed rounded pointer-events-none"
                              style={{
                                left: Math.min(currentPoints[0].x, currentPoints[1].x),
                                top: Math.min(currentPoints[0].y, currentPoints[1].y),
                                width: Math.abs(currentPoints[1].x - currentPoints[0].x),
                                height: Math.abs(currentPoints[1].y - currentPoints[0].y),
                                borderColor: getLabelById(selectedLabel)?.color || "#fff",
                                backgroundColor: `${getLabelById(selectedLabel)?.color || "#fff"}10`,
                              }}
                            />
                          )}
                          {selectedTool === "freehand" && currentPoints.length > 1 && (
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                              <path
                                d={currentPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}
                                fill="none"
                                stroke={getLabelById(selectedLabel)?.color || "#fff"}
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray="5,5"
                                opacity="0.8"
                              />
                            </svg>
                          )}
                        </>
                      )}
                      
                      {/* Polygon drawing preview */}
                      {selectedTool === "polygon" && currentPoints.length > 0 && (
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                          <path
                            d={currentPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}
                            fill={`${getLabelById(selectedLabel)?.color || "#fff"}10`}
                            stroke={getLabelById(selectedLabel)?.color || "#fff"}
                            strokeWidth="2"
                            strokeDasharray="5,5"
                          />
                          {currentPoints.map((point, i) => (
                            <circle
                              key={i}
                              cx={point.x}
                              cy={point.y}
                              r="4"
                              fill={getLabelById(selectedLabel)?.color || "#fff"}
                            />
                          ))}
                        </svg>
                      )}
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

            {/* Right Panel - Labels & AI / ML Training */}
            <div className="col-span-3 space-y-4 overflow-y-auto">
              <Tabs defaultValue="labeling" className="w-full">
                <TabsList className="w-full bg-secondary/50 mb-4">
                  <TabsTrigger value="labeling" className="flex-1 gap-1.5 data-[state=active]:bg-background">
                    <Pencil className="w-3 h-3" />
                    <span className="text-xs">Labeling</span>
                  </TabsTrigger>
                  <TabsTrigger value="training" className="flex-1 gap-1.5 data-[state=active]:bg-background">
                    <Cpu className="w-3 h-3" />
                    <span className="text-xs">ML Export</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="labeling" className="mt-0 space-y-4">
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

                  {/* Manual Labeling - Custom Labels */}
                  <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-emerald-500/20">
                    <CardHeader className="py-3 px-4">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Hand className="w-4 h-4 text-emerald-400" />
                        Manual Labeling
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <p className="text-xs text-muted-foreground mb-3">
                        Create custom labels not available in standard datasets for specialized construction elements
                      </p>
                      {!isCreatingLabel ? (
                        <Button
                          variant="outline"
                          className="w-full gap-2 border-emerald-500/30 hover:bg-emerald-500/10"
                          onClick={() => setIsCreatingLabel(true)}
                        >
                          <Plus className="w-4 h-4" />
                          Create Custom Label
                        </Button>
                      ) : (
                        <div className="space-y-3">
                          <Input
                            placeholder="Label name (e.g., Scaffolding Joint)"
                            value={newLabelName}
                            onChange={(e) => setNewLabelName(e.target.value)}
                            className="h-9"
                          />
                          <div>
                            <p className="text-xs text-muted-foreground mb-2">Select color:</p>
                            <div className="flex flex-wrap gap-1.5">
                              {customColors.map((color) => (
                                <button
                                  key={color}
                                  onClick={() => setNewLabelColor(color)}
                                  className={cn(
                                    "w-6 h-6 rounded-full border-2 transition-transform hover:scale-110",
                                    newLabelColor === color ? "border-foreground scale-110" : "border-transparent"
                                  )}
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setIsCreatingLabel(false);
                                setNewLabelName("");
                              }}
                              className="flex-1"
                            >
                              Cancel
                            </Button>
                            <Button
                              size="sm"
                              onClick={handleCreateLabel}
                              className="flex-1 bg-emerald-500 hover:bg-emerald-600"
                            >
                              <Save className="w-3 h-3 mr-1" />
                              Save
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Labels */}
                  <Card className="flex-1">
                    <CardHeader className="py-3 px-4 border-b border-border">
                      <CardTitle className="text-sm flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          Labels ({labels.length})
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 max-h-64 overflow-y-auto">
                      <div className="space-y-1">
                        {labels.map((label) => {
                          const Icon = label.icon;
                          return (
                            <div
                              key={label.id}
                              onClick={() => setSelectedLabel(label.id)}
                              className={cn(
                                "flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors group",
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
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <p className="text-sm font-medium truncate">{label.name}</p>
                                  {label.isCustom && (
                                    <Badge variant="outline" className="text-[9px] px-1 py-0 h-4 border-emerald-500/30 text-emerald-400">
                                      Custom
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  {selectedImage?.annotations.filter((a) => a.labelId === label.id)
                                    .length || 0}{" "}
                                  annotations
                                </p>
                              </div>
                              {label.isCustom && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6 opacity-0 group-hover:opacity-100"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteLabel(label.id);
                                  }}
                                >
                                  <X className="w-3 h-3 text-destructive" />
                                </Button>
                              )}
                              <div
                                className="w-3 h-3 rounded-full flex-shrink-0"
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
                        <CardTitle className="text-sm flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <Layers className="w-4 h-4" />
                            Annotations ({selectedImage.annotations.length})
                          </span>
                          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                            <Hand className="w-3 h-3" />
                            {selectedImage.annotations.filter(a => a.isManual).length} manual
                          </div>
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
                                  <div className="flex items-center gap-1.5">
                                    <p className="text-xs font-medium truncate">{label.name}</p>
                                    <Badge 
                                      variant="outline" 
                                      className={cn(
                                        "text-[8px] px-1 py-0 h-3.5",
                                        annotation.isManual 
                                          ? "border-emerald-500/30 text-emerald-400" 
                                          : "border-accent/30 text-accent"
                                      )}
                                    >
                                      {annotation.type}
                                    </Badge>
                                  </div>
                                  {annotation.aiConfidence ? (
                                    <div className="flex items-center gap-1">
                                      <Sparkles className="w-2.5 h-2.5 text-accent" />
                                      <span className="text-[10px] text-muted-foreground">
                                        {Math.round(annotation.aiConfidence * 100)}% confidence
                                      </span>
                                    </div>
                                  ) : annotation.isManual && (
                                    <div className="flex items-center gap-1">
                                      <Hand className="w-2.5 h-2.5 text-emerald-400" />
                                      <span className="text-[10px] text-muted-foreground">
                                        Manual annotation
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6 opacity-0 group-hover:opacity-100"
                                  onClick={() => handleDeleteAnnotation(annotation.id)}
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
                </TabsContent>

                <TabsContent value="training" className="mt-0">
                  <MLDatasetPanel
                    totalImages={images.length}
                    totalAnnotations={images.reduce((acc, img) => acc + img.annotations.length, 0)}
                    completedImages={images.filter((img) => img.status === "completed").length}
                    labels={labels.map(l => ({
                      id: l.id,
                      name: l.name,
                      color: l.color,
                      count: images.reduce((acc, img) => 
                        acc + img.annotations.filter(a => a.labelId === l.id).length, 0
                      ),
                    }))}
                    onExport={(format, options) => {
                      toast.success(`Dataset exported as ${format}`);
                    }}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DataLabelingPage;
