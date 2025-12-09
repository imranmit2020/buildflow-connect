import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, Clock, Phone, Bell, Calendar, Package } from "lucide-react";

const DeliveryTrackingPage = () => {
  const deliveries = [
    { id: "PO #0043", item: "Cement", qty: "120 bags", vendor: "Vendor B", eta: "Dec 10", driver: true, trackingId: "XYZ-8832", progress: 45 },
    { id: "PO #0044", item: "Marble Tiles", qty: "420 sqft", vendor: "Vendor C", eta: "Dec 14", driver: false, trackingId: null, progress: 0 },
    { id: "PO #0045", item: "Electrical Wire", qty: "150 coils", vendor: "Vendor A", eta: "Dec 11", driver: true, trackingId: "ABC-4421", progress: 78 },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Truck className="h-6 w-6 text-primary" />
                Delivery Tracking
              </h1>
              <p className="text-muted-foreground">Track vendor deliveries in real-time</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Deliveries */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Upcoming Deliveries
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {deliveries.map((delivery) => (
                    <div key={delivery.id} className="p-4 bg-muted/50 rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-medium text-foreground">{delivery.id} — {delivery.item}</p>
                          <p className="text-sm text-muted-foreground">Qty: {delivery.qty} • {delivery.vendor}</p>
                        </div>
                        <Badge variant={delivery.driver ? "default" : "secondary"}>
                          {delivery.driver ? "Driver Assigned" : "No Driver"}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          ETA: {delivery.eta}
                        </span>
                        {delivery.trackingId && (
                          <span className="text-primary">ID: {delivery.trackingId}</span>
                        )}
                      </div>
                      {delivery.progress > 0 && (
                        <div className="mt-3">
                          <div className="flex justify-between text-xs text-muted-foreground mb-1">
                            <span>En Route</span>
                            <span>{delivery.progress}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${delivery.progress}%` }} />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Map View */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Live Map View
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 mx-auto text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">Map Preview</p>
                      <p className="text-xs text-muted-foreground">Vehicle locations shown here</p>
                    </div>
                  </div>

                  {/* AI Forecast */}
                  <div className="mt-4 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <p className="text-sm text-orange-600 font-medium">AI Forecast</p>
                    <p className="text-foreground">Expected delay of 25 minutes due to traffic on Route 7.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="gap-2">
                <Bell className="h-4 w-4" />
                Notify Contractor
              </Button>
              <Button variant="outline" className="gap-2">
                <Calendar className="h-4 w-4" />
                Reschedule Delivery
              </Button>
              <Button variant="secondary" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Vendor
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DeliveryTrackingPage;