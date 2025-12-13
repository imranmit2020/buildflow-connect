import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Filter,
  Sparkles,
  CheckCircle2,
  Award,
  Briefcase
} from "lucide-react";

const laborProfiles = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Master Electrician",
    experience: "12 years",
    location: "Dubai Marina",
    rate: "$55/hr",
    rating: 4.9,
    reviews: 89,
    matchScore: 96,
    skills: ["High Voltage", "Industrial", "Solar Installation"],
    availability: "Available",
    verified: true,
    certifications: ["Licensed Electrician", "OSHA Certified"]
  },
  {
    id: 2,
    name: "Mohammed Ali",
    role: "Plumbing Specialist",
    experience: "8 years",
    location: "Downtown Dubai",
    rate: "$42/hr",
    rating: 4.8,
    reviews: 67,
    matchScore: 91,
    skills: ["Commercial", "HVAC", "Pipe Fitting"],
    availability: "Available",
    verified: true,
    certifications: ["Master Plumber", "Gas Safe"]
  },
  {
    id: 3,
    name: "Raj Patel",
    role: "Carpentry Expert",
    experience: "15 years",
    location: "Business Bay",
    rate: "$48/hr",
    rating: 5.0,
    reviews: 124,
    matchScore: 88,
    skills: ["Custom Furniture", "Finishing", "Restoration"],
    availability: "Busy",
    verified: true,
    certifications: ["Master Carpenter"]
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    role: "Tile & Flooring",
    experience: "10 years",
    location: "JBR",
    rate: "$40/hr",
    rating: 4.7,
    reviews: 52,
    matchScore: 85,
    skills: ["Marble", "Porcelain", "Pattern Design"],
    availability: "Available",
    verified: false,
    certifications: ["Flooring Specialist"]
  }
];

const LaborMarketplacePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Labor Marketplace</h1>
              <p className="text-muted-foreground">AI-powered matching to find the perfect skilled workers</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" /> Filters
              </Button>
              <Button className="gap-2">
                <Sparkles className="w-4 h-4" /> AI Match
              </Button>
            </div>
          </div>

          {/* Search */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search by skill, role, or location..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="secondary">Search</Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Suggestion Banner */}
          <Card className="mb-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">AI Recommendation</h3>
                  <p className="text-sm text-muted-foreground">
                    Based on your project "Villa Renovation", we found 4 highly-matched electricians available this week
                  </p>
                </div>
                <Button size="sm">View Matches</Button>
              </div>
            </CardContent>
          </Card>

          {/* Labor Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {laborProfiles.map((profile) => (
              <Card key={profile.id} className="hover:border-primary/50 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center text-lg font-semibold text-muted-foreground">
                        {profile.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-foreground">{profile.name}</h4>
                          {profile.verified && (
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{profile.role}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span className="text-sm font-medium">{profile.rating}</span>
                          <span className="text-xs text-muted-foreground">({profile.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end">
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span className="text-sm font-bold text-primary">{profile.matchScore}%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">AI Match</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {profile.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {profile.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" /> {profile.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" /> {profile.rate}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    {profile.certifications.map((cert) => (
                      <Badge key={cert} variant="secondary" className="text-xs bg-emerald-500/10 text-emerald-600">
                        <Award className="w-3 h-3 mr-1" /> {cert}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="secondary" 
                      className={profile.availability === "Available" 
                        ? "bg-emerald-500/10 text-emerald-500" 
                        : "bg-amber-500/10 text-amber-500"
                      }
                    >
                      <Clock className="w-3 h-3 mr-1" /> {profile.availability}
                    </Badge>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Profile</Button>
                      <Button size="sm">Hire Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LaborMarketplacePage;
