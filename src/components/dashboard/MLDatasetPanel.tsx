import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Download,
  FileJson,
  FileCode2,
  Shuffle,
  FlipHorizontal,
  Sun,
  Contrast,
  RotateCw,
  Crop,
  Sparkles,
  TrendingUp,
  BarChart3,
  PieChart,
  GitBranch,
  Clock,
  CheckCircle2,
  AlertCircle,
  Database,
  Cpu,
  Zap,
  Target,
  Layers,
  Image as ImageIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface Label {
  id: string;
  name: string;
  color: string;
  count: number;
}

interface DatasetVersion {
  id: string;
  name: string;
  date: string;
  images: number;
  annotations: number;
  status: "current" | "archived" | "training";
}

interface ExportFormat {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  extension: string;
}

interface AugmentationOption {
  id: string;
  name: string;
  icon: React.ElementType;
  enabled: boolean;
  value?: number;
}

interface MLDatasetPanelProps {
  totalImages: number;
  totalAnnotations: number;
  completedImages: number;
  labels: Label[];
  onExport: (format: string, options: ExportOptions) => void;
}

interface ExportOptions {
  format: string;
  trainSplit: number;
  includeAugmentation: boolean;
  augmentations: string[];
}

const exportFormats: ExportFormat[] = [
  { id: "coco", name: "COCO JSON", description: "Common Objects in Context format", icon: FileJson, extension: ".json" },
  { id: "yolo", name: "YOLO", description: "You Only Look Once format", icon: FileCode2, extension: ".txt" },
  { id: "pascal", name: "Pascal VOC", description: "XML annotation format", icon: FileCode2, extension: ".xml" },
  { id: "tensorflow", name: "TFRecord", description: "TensorFlow record format", icon: Cpu, extension: ".tfrecord" },
];

const mockVersions: DatasetVersion[] = [
  { id: "v3", name: "v3.0 - Production Ready", date: "2024-12-19", images: 156, annotations: 892, status: "current" },
  { id: "v2", name: "v2.1 - With Safety Labels", date: "2024-12-15", images: 124, annotations: 645, status: "archived" },
  { id: "v1", name: "v1.0 - Initial Dataset", date: "2024-12-10", images: 85, annotations: 312, status: "archived" },
];

const MLDatasetPanel = ({
  totalImages,
  totalAnnotations,
  completedImages,
  labels,
  onExport,
}: MLDatasetPanelProps) => {
  const [selectedFormat, setSelectedFormat] = useState("coco");
  const [trainSplit, setTrainSplit] = useState([80]);
  const [showAugmentation, setShowAugmentation] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [augmentations, setAugmentations] = useState<AugmentationOption[]>([
    { id: "flip", name: "Horizontal Flip", icon: FlipHorizontal, enabled: true },
    { id: "rotate", name: "Random Rotation", icon: RotateCw, enabled: true, value: 15 },
    { id: "brightness", name: "Brightness Adjust", icon: Sun, enabled: false, value: 20 },
    { id: "contrast", name: "Contrast Adjust", icon: Contrast, enabled: false, value: 20 },
    { id: "crop", name: "Random Crop", icon: Crop, enabled: false, value: 10 },
    { id: "noise", name: "Add Noise", icon: Sparkles, enabled: false, value: 5 },
  ]);

  const toggleAugmentation = (id: string) => {
    setAugmentations(prev =>
      prev.map(aug => aug.id === id ? { ...aug, enabled: !aug.enabled } : aug)
    );
  };

  const updateAugmentationValue = (id: string, value: number) => {
    setAugmentations(prev =>
      prev.map(aug => aug.id === id ? { ...aug, value } : aug)
    );
  };

  const handleExport = async () => {
    setIsExporting(true);
    
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const enabledAugs = augmentations.filter(a => a.enabled).map(a => a.id);
    onExport(selectedFormat, {
      format: selectedFormat,
      trainSplit: trainSplit[0],
      includeAugmentation: showAugmentation,
      augmentations: enabledAugs,
    });
    
    setIsExporting(false);
    toast.success(`Dataset exported in ${exportFormats.find(f => f.id === selectedFormat)?.name} format`);
  };

  // Calculate dataset quality score
  const qualityScore = Math.min(100, Math.round(
    (completedImages / Math.max(totalImages, 1)) * 40 +
    (totalAnnotations / Math.max(totalImages, 1) / 5) * 30 +
    (labels.length >= 5 ? 30 : labels.length * 6)
  ));

  // Calculate class balance
  const totalLabelCount = labels.reduce((sum, l) => sum + l.count, 0);
  const avgPerClass = totalLabelCount / Math.max(labels.length, 1);
  const classImbalance = labels.length > 0
    ? Math.max(...labels.map(l => Math.abs(l.count - avgPerClass) / Math.max(avgPerClass, 1)))
    : 0;
  const isBalanced = classImbalance < 0.5;

  const trainCount = Math.round(totalImages * trainSplit[0] / 100);
  const valCount = totalImages - trainCount;

  return (
    <div className="space-y-4">
      {/* Dataset Quality Score */}
      <Card className="bg-gradient-to-br from-violet-500/10 to-violet-500/5 border-violet-500/20">
        <CardHeader className="py-3 px-4">
          <CardTitle className="text-sm flex items-center gap-2">
            <Target className="w-4 h-4 text-violet-400" />
            Dataset Quality Score
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-muted/30"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  stroke="url(#qualityGradient)"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${qualityScore * 2.2} 220`}
                />
                <defs>
                  <linearGradient id="qualityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-foreground">{qualityScore}</span>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Completion</span>
                <span className="font-medium">{Math.round(completedImages / Math.max(totalImages, 1) * 100)}%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Density</span>
                <span className="font-medium">{(totalAnnotations / Math.max(totalImages, 1)).toFixed(1)} ann/img</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Class Balance</span>
                <Badge variant="outline" className={cn(
                  "text-[9px] h-4",
                  isBalanced ? "border-emerald-500/30 text-emerald-400" : "border-amber-500/30 text-amber-400"
                )}>
                  {isBalanced ? "Balanced" : "Imbalanced"}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Class Distribution */}
      <Card>
        <CardHeader className="py-3 px-4 border-b border-border">
          <CardTitle className="text-sm flex items-center gap-2">
            <PieChart className="w-4 h-4" />
            Class Distribution
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <div className="space-y-2">
            {labels.slice(0, 6).map((label) => {
              const percentage = totalLabelCount > 0 
                ? Math.round((label.count / totalLabelCount) * 100) 
                : 0;
              return (
                <div key={label.id} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-2.5 h-2.5 rounded-full" 
                        style={{ backgroundColor: label.color }}
                      />
                      <span className="truncate max-w-[80px]">{label.name}</span>
                    </div>
                    <span className="text-muted-foreground">{label.count} ({percentage}%)</span>
                  </div>
                  <Progress 
                    value={percentage} 
                    className="h-1.5"
                    style={{ 
                      ["--progress-color" as string]: label.color,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Train/Val Split */}
      <Card>
        <CardHeader className="py-3 px-4 border-b border-border">
          <CardTitle className="text-sm flex items-center gap-2">
            <Shuffle className="w-4 h-4" />
            Train / Validation Split
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-3 rounded-full overflow-hidden bg-muted">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300"
                style={{ width: `${trainSplit[0]}%` }}
              />
            </div>
          </div>
          <Slider
            value={trainSplit}
            onValueChange={setTrainSplit}
            min={50}
            max={95}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-blue-500" />
              <span>Train: {trainCount} images ({trainSplit[0]}%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-muted" />
              <span>Val: {valCount} images ({100 - trainSplit[0]}%)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Augmentation */}
      <Card>
        <CardHeader className="py-3 px-4 border-b border-border">
          <CardTitle className="text-sm flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Data Augmentation
            </span>
            <Switch
              checked={showAugmentation}
              onCheckedChange={setShowAugmentation}
            />
          </CardTitle>
        </CardHeader>
        {showAugmentation && (
          <CardContent className="p-3">
            <div className="space-y-2">
              {augmentations.map((aug) => {
                const Icon = aug.icon;
                return (
                  <div
                    key={aug.id}
                    className={cn(
                      "flex items-center gap-3 p-2 rounded-lg transition-colors cursor-pointer",
                      aug.enabled ? "bg-accent/10" : "hover:bg-secondary"
                    )}
                    onClick={() => toggleAugmentation(aug.id)}
                  >
                    <div className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center transition-colors",
                      aug.enabled ? "bg-accent/20" : "bg-muted"
                    )}>
                      <Icon className={cn(
                        "w-3.5 h-3.5",
                        aug.enabled ? "text-accent" : "text-muted-foreground"
                      )} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium">{aug.name}</p>
                      {aug.value !== undefined && aug.enabled && (
                        <p className="text-[10px] text-muted-foreground">±{aug.value}%</p>
                      )}
                    </div>
                    <Switch
                      checked={aug.enabled}
                      onCheckedChange={() => toggleAugmentation(aug.id)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                );
              })}
            </div>
            <p className="text-[10px] text-muted-foreground mt-3 text-center">
              Augmentation increases dataset size by ~{augmentations.filter(a => a.enabled).length * 2}x
            </p>
          </CardContent>
        )}
      </Card>

      {/* Export Formats */}
      <Card>
        <CardHeader className="py-3 px-4 border-b border-border">
          <CardTitle className="text-sm flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Format
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <div className="grid grid-cols-2 gap-2">
            {exportFormats.map((format) => {
              const Icon = format.icon;
              return (
                <div
                  key={format.id}
                  onClick={() => setSelectedFormat(format.id)}
                  className={cn(
                    "p-3 rounded-lg border cursor-pointer transition-all",
                    selectedFormat === format.id
                      ? "border-accent bg-accent/10 ring-1 ring-accent/20"
                      : "border-border hover:border-accent/50"
                  )}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={cn(
                      "w-4 h-4",
                      selectedFormat === format.id ? "text-accent" : "text-muted-foreground"
                    )} />
                    <span className="text-xs font-medium">{format.name}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">{format.description}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Dataset Versions */}
      <Card>
        <CardHeader className="py-3 px-4 border-b border-border">
          <CardTitle className="text-sm flex items-center gap-2">
            <GitBranch className="w-4 h-4" />
            Dataset Versions
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2">
          <div className="space-y-1.5">
            {mockVersions.map((version) => (
              <div
                key={version.id}
                className={cn(
                  "flex items-center gap-3 p-2 rounded-lg",
                  version.status === "current" ? "bg-accent/10" : "hover:bg-secondary"
                )}
              >
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center",
                  version.status === "current" 
                    ? "bg-emerald-500/20" 
                    : version.status === "training"
                    ? "bg-amber-500/20"
                    : "bg-muted"
                )}>
                  {version.status === "current" ? (
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  ) : version.status === "training" ? (
                    <Zap className="w-3 h-3 text-amber-400 animate-pulse" />
                  ) : (
                    <Clock className="w-3 h-3 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium truncate">{version.name}</p>
                  <p className="text-[10px] text-muted-foreground">
                    {version.images} images • {version.annotations} annotations
                  </p>
                </div>
                {version.status === "current" && (
                  <Badge variant="outline" className="text-[9px] border-emerald-500/30 text-emerald-400">
                    Active
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Export Button */}
      <Button
        className="w-full gap-2"
        variant="accent"
        onClick={handleExport}
        disabled={isExporting || totalAnnotations === 0}
      >
        {isExporting ? (
          <>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Exporting Dataset...
          </>
        ) : (
          <>
            <Database className="w-4 h-4" />
            Export for Training
          </>
        )}
      </Button>

      <p className="text-[10px] text-center text-muted-foreground">
        Ready for PyTorch, TensorFlow, or any ML framework
      </p>
    </div>
  );
};

export default MLDatasetPanel;