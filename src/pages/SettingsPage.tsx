import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Building, Users, Shield, Bell, Palette, Globe, Save, Upload } from "lucide-react";

const SettingsPage = () => {
  const roles = [
    { name: "Client", permissions: ["View Projects", "Approve Changes", "Access Reports"] },
    { name: "Contractor", permissions: ["Manage Tasks", "Submit Reports", "View Documents"] },
    { name: "Architect", permissions: ["Upload Drawings", "Review Documents", "Add Comments"] },
    { name: "Designer", permissions: ["Material Selection", "Create Moodboards", "Submit Designs"] },
    { name: "Vendor", permissions: ["View Requests", "Submit Quotes", "Manage Pricing"] },
    { name: "Finance", permissions: ["Process Payments", "View Reports", "Manage Budget"] },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Settings className="h-6 w-6 text-primary" />
                Company Settings
              </h1>
              <p className="text-muted-foreground">Manage your organization settings and preferences</p>
            </div>

            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="roles">Roles</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5" />
                      Company Information
                    </CardTitle>
                    <CardDescription>Basic information about your organization</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        <Input id="company-name" defaultValue="Construq Builders Ltd." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Input id="timezone" defaultValue="Asia/Kolkata (GMT+5:30)" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Company Logo</Label>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center border-2 border-dashed border-border">
                          <Building className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <Button variant="outline" className="gap-2">
                          <Upload className="h-4 w-4" />
                          Upload Logo
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Working Days</Label>
                      <div className="flex gap-2">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                          <Button key={day} variant={index < 6 ? "default" : "outline"} size="sm">
                            {day}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Regional Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currency">Primary Currency</Label>
                        <Input id="currency" defaultValue="USD ($)" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date-format">Date Format</Label>
                        <Input id="date-format" defaultValue="DD/MM/YYYY" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="roles" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Role Permissions
                    </CardTitle>
                    <CardDescription>Configure access levels for each role</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {roles.map((role) => (
                      <div key={role.name} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border">
                        <div>
                          <p className="font-medium text-foreground">{role.name}</p>
                          <p className="text-sm text-muted-foreground">{role.permissions.join(" • ")}</p>
                        </div>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Notification Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { label: "Email notifications", description: "Receive updates via email" },
                      { label: "Push notifications", description: "Browser push notifications" },
                      { label: "AI alerts", description: "Automated AI-generated alerts" },
                      { label: "Daily digest", description: "Daily summary of activities" },
                      { label: "Payment reminders", description: "Upcoming payment notifications" },
                    ].map((setting) => (
                      <div key={setting.label} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">{setting.label}</p>
                          <p className="text-sm text-muted-foreground">{setting.description}</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="appearance" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5" />
                      Theme & Appearance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Theme</Label>
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1">Light</Button>
                        <Button variant="default" className="flex-1">Dark</Button>
                        <Button variant="outline" className="flex-1">System</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Accent Color</Label>
                      <div className="flex gap-2">
                        {["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-pink-500"].map((color) => (
                          <button key={color} className={`w-8 h-8 rounded-full ${color} ring-2 ring-offset-2 ring-transparent hover:ring-primary`} />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Save Settings
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
