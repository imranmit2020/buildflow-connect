import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Briefcase, 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Camera,
  Award,
  Calendar,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Upload,
  FileText,
  Eye
} from "lucide-react";

const mockMatches = [
  {
    id: 1,
    title: "Senior Electrician",
    company: "BuildRight Construction",
    location: "Dubai Marina",
    rate: "$45/hr",
    matchScore: 98,
    skills: ["Electrical", "High Voltage", "Safety Certified"],
    postedBy: "Contractor",
    deadline: "Dec 20, 2024"
  },
  {
    id: 2,
    title: "Plumbing Specialist",
    company: "Urban Developers",
    location: "Downtown Dubai",
    rate: "$38/hr",
    matchScore: 92,
    skills: ["Plumbing", "HVAC", "Commercial"],
    postedBy: "Client",
    deadline: "Dec 18, 2024"
  },
  {
    id: 3,
    title: "Tile & Flooring Expert",
    company: "Luxury Interiors",
    location: "Palm Jumeirah",
    rate: "$42/hr",
    matchScore: 87,
    skills: ["Flooring", "Tiling", "Finishing"],
    postedBy: "Designer",
    deadline: "Dec 22, 2024"
  }
];

const LaborDashboard = () => {
  const [profileCompleteness] = useState(75);

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-6">
          {/* Profile Completeness Banner */}
          <Card className="mb-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Complete Your Profile for Better Matches</h3>
                    <p className="text-sm text-muted-foreground">Add certifications and work photos to increase visibility</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32">
                    <Progress value={profileCompleteness} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">{profileCompleteness}% Complete</p>
                  </div>
                  <Button size="sm">Complete Profile</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-sm text-muted-foreground">Jobs Completed</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4.9</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">$8,450</p>
                  <p className="text-sm text-muted-foreground">Total Earnings</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">94%</p>
                  <p className="text-sm text-muted-foreground">Hire Rate</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Job Matches */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <CardTitle>AI-Matched Opportunities</CardTitle>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Smart Match
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockMatches.map((match) => (
                    <div 
                      key={match.id}
                      className="p-4 border border-border rounded-xl hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{match.title}</h4>
                          <p className="text-sm text-muted-foreground">{match.company}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-right">
                            <div className="flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-primary" />
                              <span className="text-sm font-bold text-primary">{match.matchScore}%</span>
                            </div>
                            <p className="text-xs text-muted-foreground">Match</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {match.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {match.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-3 h-3" /> {match.rate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {match.deadline}
                          </span>
                        </div>
                        <Button size="sm">Apply Now</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Profile & Quick Actions */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                      <Camera className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">John Smith</h4>
                      <p className="text-sm text-muted-foreground">Electrician • 8 yrs exp</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span className="text-sm font-medium">4.9</span>
                        <span className="text-xs text-muted-foreground">(47 reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Hourly Rate</span>
                      <span className="font-medium text-foreground">$45/hr</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium text-foreground">Dubai, UAE</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Availability</span>
                      <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500">Available</Badge>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">Edit Profile</Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Upload className="w-4 h-4" /> Upload Work Photos
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Award className="w-4 h-4" /> Add Certifications
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Calendar className="w-4 h-4" /> Update Availability
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <FileText className="w-4 h-4" /> View Applications
                  </Button>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Licensed Electrician</p>
                      <p className="text-xs text-muted-foreground">Verified • Exp 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <div>
                      <p className="text-sm font-medium text-foreground">OSHA Safety</p>
                      <p className="text-xs text-muted-foreground">Verified • Exp 2024</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full">
                    <Eye className="w-4 h-4 mr-2" /> View All
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LaborDashboard;
