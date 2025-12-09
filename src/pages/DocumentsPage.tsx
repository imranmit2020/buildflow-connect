import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotSidebar from "@/components/dashboard/AICopilotSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bot,
  Search,
  Upload,
  Download,
  Eye,
  FileImage,
  FileText,
  File,
  Camera,
  BarChart3,
  Sparkles,
  AlertTriangle,
  Tag,
} from "lucide-react";
import { cn } from "@/lib/utils";

const filters = [
  "All",
  "Drawings",
  "Contracts",
  "BOQs",
  "Change Orders",
  "Site Photos",
  "Reports",
  "AI Summaries",
];

const documents = [
  {
    id: "1",
    name: "Electrical Layout v3",
    type: "Drawing",
    updated: "Dec 06",
    status: "review",
    icon: FileImage,
  },
  {
    id: "2",
    name: "Interior Designer Contract",
    type: "Contract",
    updated: "Nov 30",
    status: "signed",
    icon: FileText,
  },
  {
    id: "3",
    name: "Materials Package A",
    type: "BOQ",
    updated: "Dec 04",
    status: "rev2",
    icon: File,
  },
  {
    id: "4",
    name: "Change Order #12 - Tile Upgrade",
    type: "Change Order",
    updated: "Dec 05",
    status: "pending",
    icon: FileText,
  },
  {
    id: "5",
    name: "Bathroom Progress - 2024-12-05",
    type: "Site Photo",
    updated: "Dec 05",
    status: "tagged",
    icon: Camera,
  },
  {
    id: "6",
    name: "Weekly Progress Report",
    type: "Report",
    updated: "Dec 07",
    status: "generated",
    icon: BarChart3,
  },
];

const aiInsights = [
  { type: "warning", message: "3 drawings have mismatched dimensions." },
  { type: "info", message: "Change Order #12 affects budget by +$2,480." },
];

const DocumentsPage = () => {
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "signed":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
      case "review":
        return "bg-accent/10 text-accent border-accent/20";
      case "pending":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "tagged":
        return "bg-violet-500/10 text-violet-600 border-violet-500/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "signed":
        return "Signed";
      case "review":
        return "In Review";
      case "pending":
        return "Pending Approval";
      case "tagged":
        return "Auto-Tagged";
      case "rev2":
        return "Rev 2";
      case "generated":
        return "AI Generated";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 overflow-auto">
          {/* Page header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground">
                Documents Center
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage all project documents, drawings, and reports
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Upload className="w-4 h-4" />
                Upload
              </Button>
              <Button
                variant="accent"
                className="gap-2"
                onClick={() => setCopilotOpen(true)}
              >
                <Bot className="w-4 h-4" />
                AI Copilot
              </Button>
            </div>
          </div>

          {/* Search and filters */}
          <div className="mb-6">
            <div className="relative max-w-md mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    activeFilter === filter
                      ? "bg-accent text-accent-foreground shadow-glow"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-gradient-to-r from-accent/10 to-amber-500/10 rounded-xl border border-accent/20 p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-accent" />
              <h3 className="font-semibold text-foreground">AI Document Insights</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                  {insight.type === "warning" ? (
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                  ) : (
                    <Sparkles className="w-4 h-4 text-accent" />
                  )}
                  {insight.message}
                </div>
              ))}
            </div>
          </div>

          {/* Document list */}
          <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                      Document
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                      Type
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                      Updated
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                      Status
                    </th>
                    <th className="text-right py-4 px-6 text-sm font-medium text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => {
                    const Icon = doc.icon;
                    return (
                      <tr
                        key={doc.id}
                        className="border-b border-border hover:bg-secondary/30 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-accent" />
                            </div>
                            <span className="font-medium text-foreground">{doc.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">{doc.type}</td>
                        <td className="py-4 px-6 text-muted-foreground">{doc.updated}</td>
                        <td className="py-4 px-6">
                          <span
                            className={cn(
                              "text-xs font-medium px-2 py-1 rounded-full border",
                              getStatusBadge(doc.status)
                            )}
                          >
                            {getStatusLabel(doc.status)}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                            {doc.status === "tagged" && (
                              <Button variant="ghost" size="sm">
                                <Tag className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom actions */}
          <div className="flex gap-3 mt-6">
            <Button variant="outline" className="gap-2">
              <Sparkles className="w-4 h-4" />
              AI Summarize Folder
            </Button>
            <Button variant="outline" className="gap-2">
              <Tag className="w-4 h-4" />
              Auto-Tag All Documents
            </Button>
          </div>
        </main>
      </div>

      <AICopilotSidebar isOpen={copilotOpen} onClose={() => setCopilotOpen(false)} />
    </div>
  );
};

export default DocumentsPage;
