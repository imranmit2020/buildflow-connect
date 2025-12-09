import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Mail, Lock, ArrowRight, User, HardHat, Ruler, Palette, Truck, DollarSign } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    { id: "client", label: "Client", icon: User, path: "/dashboard" },
    { id: "contractor", label: "Contractor", icon: HardHat, path: "/contractor" },
    { id: "architect", label: "Architect", icon: Ruler, path: "/architect" },
    { id: "designer", label: "Interior Designer", icon: Palette, path: "/designer" },
    { id: "vendor", label: "Vendor", icon: Truck, path: "/vendor" },
    { id: "finance", label: "Finance", icon: DollarSign, path: "/finance-dashboard" },
  ];

  const handleLogin = () => {
    const role = roles.find(r => r.id === selectedRole);
    if (role) {
      navigate(role.path);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="text-center">
          <div className="w-16 h-16 bg-accent-gradient rounded-2xl flex items-center justify-center shadow-glow mx-auto mb-4">
            <Building2 className="w-8 h-8 text-accent-foreground" />
          </div>
          <h1 className="text-3xl font-display font-bold text-foreground">Construq</h1>
          <p className="text-accent font-semibold">NEXUS AI</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Sign in to your account to continue</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Select Role</Label>
              <div className="grid grid-cols-2 gap-2">
                {roles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${
                        selectedRole === role.id 
                          ? "bg-primary/10 border-primary text-primary" 
                          : "bg-muted/50 border-border hover:border-primary/50 text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{role.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <Button 
              className="w-full gap-2" 
              onClick={handleLogin}
              disabled={!selectedRole}
            >
              Login
              <ArrowRight className="h-4 w-4" />
            </Button>

            <div className="text-center">
              <button className="text-sm text-primary hover:underline">
                Forgot Password?
              </button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <button className="text-primary hover:underline">Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;