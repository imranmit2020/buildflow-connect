import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Store, 
  Plus, 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Eye,
  Send,
  Award,
  CheckCircle,
  Briefcase,
  Paintbrush,
  Hammer,
  TrendingUp
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

type ProjectStatus = "open" | "in-progress" | "awarded" | "completed";
type ProjectCategory = "construction" | "interior" | "architecture" | "renovation";

interface MarketplaceProject {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  budget: string;
  location: string;
  deadline: string;
  postedBy: string;
  postedByRole: string;
  proposals: number;
  status: ProjectStatus;
  skills: string[];
  postedDate: string;
  progress?: number;
}

const MarketplacePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [postDialogOpen, setPostDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<MarketplaceProject | null>(null);
  const [proposalDialogOpen, setProposalDialogOpen] = useState(false);

  const projects: MarketplaceProject[] = [
    {
      id: "1",
      title: "Modern Villa Interior Design",
      description: "Looking for an experienced interior designer to design a 4-bedroom modern villa with contemporary aesthetics. Need complete design including furniture layout, material selection, and 3D visualization.",
      category: "interior",
      budget: "$15,000 - $25,000",
      location: "Dubai, UAE",
      deadline: "Dec 30, 2024",
      postedBy: "Ahmed Al-Rashid",
      postedByRole: "Client",
      proposals: 12,
      status: "open",
      skills: ["3D Visualization", "Modern Design", "Material Selection"],
      postedDate: "2 days ago"
    },
    {
      id: "2",
      title: "Commercial Building Construction",
      description: "Need a reliable contractor for a 5-story commercial building construction. Project includes foundation, structure, MEP, and finishing. Must have experience with similar scale projects.",
      category: "construction",
      budget: "$2.5M - $3M",
      location: "Abu Dhabi, UAE",
      deadline: "Mar 15, 2025",
      postedBy: "Gulf Properties LLC",
      postedByRole: "Client",
      proposals: 8,
      status: "open",
      skills: ["Commercial Construction", "MEP", "Project Management"],
      postedDate: "5 days ago"
    },
    {
      id: "3",
      title: "Residential Complex Architecture",
      description: "Seeking an architect for a 20-unit residential complex. Need complete architectural drawings, permits assistance, and construction supervision support.",
      category: "architecture",
      budget: "$45,000 - $60,000",
      location: "Sharjah, UAE",
      deadline: "Feb 28, 2025",
      postedBy: "Sunrise Developments",
      postedByRole: "Client",
      proposals: 15,
      status: "in-progress",
      skills: ["Residential Architecture", "AutoCAD", "Building Permits"],
      postedDate: "1 week ago",
      progress: 35
    },
    {
      id: "4",
      title: "Kitchen & Bathroom Renovation",
      description: "Complete renovation of 2 bathrooms and 1 kitchen in a luxury apartment. Looking for quality workmanship with premium materials.",
      category: "renovation",
      budget: "$8,000 - $12,000",
      location: "Dubai Marina, UAE",
      deadline: "Jan 20, 2025",
      postedBy: "Sarah Johnson",
      postedByRole: "Client",
      proposals: 20,
      status: "awarded",
      skills: ["Renovation", "Plumbing", "Tiling"],
      postedDate: "3 days ago",
      progress: 15
    },
    {
      id: "5",
      title: "Office Space Fit-Out",
      description: "Professional fit-out required for 2000 sqft office space. Need modern design with meeting rooms, workstations, and break area.",
      category: "interior",
      budget: "$35,000 - $50,000",
      location: "DIFC, Dubai",
      deadline: "Feb 10, 2025",
      postedBy: "TechStart Inc.",
      postedByRole: "Client",
      proposals: 18,
      status: "open",
      skills: ["Office Design", "Fit-Out", "Space Planning"],
      postedDate: "1 day ago"
    },
    {
      id: "6",
      title: "Warehouse Construction Project",
      description: "Industrial warehouse construction - 5000 sqm with loading docks, office section, and storage optimization. Need experienced industrial contractor.",
      category: "construction",
      budget: "$800,000 - $1.2M",
      location: "Jebel Ali, Dubai",
      deadline: "Jun 30, 2025",
      postedBy: "Logistics Hub FZE",
      postedByRole: "Client",
      proposals: 6,
      status: "completed",
      skills: ["Industrial Construction", "Warehouse Design", "Steel Structure"],
      postedDate: "2 weeks ago",
      progress: 100
    }
  ];

  const categoryIcons: Record<ProjectCategory, React.ReactNode> = {
    construction: <Hammer className="h-4 w-4" />,
    interior: <Paintbrush className="h-4 w-4" />,
    architecture: <Briefcase className="h-4 w-4" />,
    renovation: <TrendingUp className="h-4 w-4" />
  };

  const statusColors: Record<ProjectStatus, string> = {
    open: "bg-green-500/10 text-green-600 border-green-500/20",
    "in-progress": "bg-blue-500/10 text-blue-600 border-blue-500/20",
    awarded: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    completed: "bg-purple-500/10 text-purple-600 border-purple-500/20"
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = {
    totalProjects: projects.length,
    openProjects: projects.filter(p => p.status === "open").length,
    totalValue: "$4.5M+",
    avgProposals: Math.round(projects.reduce((sum, p) => sum + p.proposals, 0) / projects.length)
  };

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Store className="h-6 w-6 text-primary" />
                  Project Marketplace
                </h1>
                <p className="text-muted-foreground">Find projects, submit proposals, and grow your business</p>
              </div>
              
              <Dialog open={postDialogOpen} onOpenChange={setPostDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Post a Project
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Post a New Project</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label>Project Title</Label>
                      <Input placeholder="e.g., Modern Villa Interior Design" />
                    </div>
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="interior">Interior Design</SelectItem>
                          <SelectItem value="architecture">Architecture</SelectItem>
                          <SelectItem value="renovation">Renovation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea placeholder="Describe your project requirements in detail..." rows={4} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Budget Range</Label>
                        <Input placeholder="e.g., $10,000 - $15,000" />
                      </div>
                      <div className="space-y-2">
                        <Label>Location</Label>
                        <Input placeholder="e.g., Dubai, UAE" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Deadline</Label>
                        <Input type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label>Required Skills (comma separated)</Label>
                        <Input placeholder="e.g., 3D Design, AutoCAD" />
                      </div>
                    </div>
                    <Button className="w-full" onClick={() => setPostDialogOpen(false)}>
                      Publish Project
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.totalProjects}</p>
                      <p className="text-xs text-muted-foreground">Total Projects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.openProjects}</p>
                      <p className="text-xs text-muted-foreground">Open for Bids</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <DollarSign className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.totalValue}</p>
                      <p className="text-xs text-muted-foreground">Total Value</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.avgProposals}</p>
                      <p className="text-xs text-muted-foreground">Avg. Proposals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search & Filter */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search projects..." 
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-40">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="interior">Interior Design</SelectItem>
                        <SelectItem value="architecture">Architecture</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects Tabs */}
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="open">Open</TabsTrigger>
                <TabsTrigger value="my-proposals">My Proposals</TabsTrigger>
                <TabsTrigger value="my-projects">My Projects</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Badge variant="outline" className="gap-1">
                                  {categoryIcons[project.category]}
                                  {project.category}
                                </Badge>
                                <Badge className={statusColors[project.status]}>
                                  {project.status === "in-progress" ? "In Progress" : 
                                   project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                                </Badge>
                              </div>
                              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4" />
                              {project.budget}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {project.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {project.deadline}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {project.proposals} proposals
                            </span>
                          </div>

                          {project.progress !== undefined && project.status !== "open" && (
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="font-medium">{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-2" />
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col gap-2 lg:w-40">
                          <div className="text-xs text-muted-foreground mb-2">
                            Posted by <span className="text-foreground font-medium">{project.postedBy}</span>
                            <br />
                            <span className="text-muted-foreground">{project.postedDate}</span>
                          </div>
                          
                          {project.status === "open" && (
                            <>
                              <Dialog open={proposalDialogOpen && selectedProject?.id === project.id} 
                                      onOpenChange={(open) => {
                                        setProposalDialogOpen(open);
                                        if (open) setSelectedProject(project);
                                      }}>
                                <DialogTrigger asChild>
                                  <Button className="gap-2 w-full">
                                    <Send className="h-4 w-4" />
                                    Submit Proposal
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-lg">
                                  <DialogHeader>
                                    <DialogTitle>Submit Proposal</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4 py-4">
                                    <div className="p-3 bg-muted/50 rounded-lg">
                                      <p className="font-medium text-sm">{project.title}</p>
                                      <p className="text-xs text-muted-foreground">{project.budget}</p>
                                    </div>
                                    <div className="space-y-2">
                                      <Label>Your Bid Amount</Label>
                                      <Input placeholder="e.g., $18,500" />
                                    </div>
                                    <div className="space-y-2">
                                      <Label>Estimated Duration</Label>
                                      <Input placeholder="e.g., 6 weeks" />
                                    </div>
                                    <div className="space-y-2">
                                      <Label>Cover Letter</Label>
                                      <Textarea 
                                        placeholder="Explain why you're the best fit for this project..." 
                                        rows={5}
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label>Attach Portfolio/Documents</Label>
                                      <Input type="file" multiple />
                                    </div>
                                    <Button className="w-full" onClick={() => setProposalDialogOpen(false)}>
                                      Submit Proposal
                                    </Button>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button variant="outline" className="gap-2 w-full">
                                <Eye className="h-4 w-4" />
                                View Details
                              </Button>
                            </>
                          )}
                          
                          {project.status === "awarded" && (
                            <Button variant="secondary" className="gap-2 w-full">
                              <Award className="h-4 w-4" />
                              View Award
                            </Button>
                          )}
                          
                          {project.status === "in-progress" && (
                            <Button variant="outline" className="gap-2 w-full">
                              <Eye className="h-4 w-4" />
                              Track Progress
                            </Button>
                          )}
                          
                          {project.status === "completed" && (
                            <Button variant="ghost" className="gap-2 w-full">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              Completed
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="open" className="space-y-4">
                {filteredProjects.filter(p => p.status === "open").map((project) => (
                  <Card key={project.id} className="hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="gap-1">
                              {categoryIcons[project.category]}
                              {project.category}
                            </Badge>
                            <Badge className={statusColors[project.status]}>Open</Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                          <p className="text-muted-foreground text-sm">{project.description}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4" />
                              {project.budget}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {project.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 lg:w-40">
                          <Button className="gap-2 w-full">
                            <Send className="h-4 w-4" />
                            Submit Proposal
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="my-proposals">
                <Card>
                  <CardContent className="p-12 text-center">
                    <Send className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="font-semibold text-foreground">No proposals yet</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Start submitting proposals to projects to see them here
                    </p>
                    <Button className="mt-4" variant="outline">
                      Browse Projects
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="my-projects">
                <Card>
                  <CardContent className="p-12 text-center">
                    <Briefcase className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="font-semibold text-foreground">No projects posted</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Post a project to find qualified professionals
                    </p>
                    <Button className="mt-4" onClick={() => setPostDialogOpen(true)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Post a Project
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MarketplacePage;
