import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileSpreadsheet, Upload, Download, ShoppingCart, Sparkles } from "lucide-react";

const BOQGeneratorPage = () => {
  const boqItems = [
    { item: "Cement", quantity: "120 bags", unitCost: "$5.30/bag", total: "$636", aiNote: "Matches load spec" },
    { item: "Marble Tile", quantity: "420 sqft", unitCost: "$12.90/sqft", total: "$5,418", aiNote: "Area auto-detected" },
    { item: "Electrical Wire", quantity: "150 coils", unitCost: "$18.00/coil", total: "$2,700", aiNote: "Based on layout" },
    { item: "Sand", quantity: "25 tons", unitCost: "$45.00/ton", total: "$1,125", aiNote: "Foundation estimate" },
    { item: "Steel Rods", quantity: "80 units", unitCost: "$32.00/unit", total: "$2,560", aiNote: "Structural calc" },
  ];

  const totalCost = boqItems.reduce((sum, item) => sum + parseFloat(item.total.replace(/[$,]/g, '')), 0);

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <FileSpreadsheet className="h-6 w-6 text-primary" />
                AI-Assisted BOQ Generator
              </h1>
              <p className="text-muted-foreground">Generate Bill of Quantities from drawings</p>
            </div>

            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle>Input: Upload Drawing / Floor Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="font-medium text-foreground">Drag & drop your floor plan here</p>
                  <p className="text-sm text-muted-foreground mt-1">or click to browse files</p>
                  <Button variant="outline" className="mt-4 gap-2">
                    <Upload className="h-4 w-4" />
                    Upload File
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Generated BOQ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    AI Output: Material Quantities
                  </span>
                  <Badge variant="secondary">Auto-Generated</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Unit Cost</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>AI Note</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {boqItems.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.item}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.unitCost}</TableCell>
                        <TableCell className="font-semibold">{item.total}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-xs">
                            {item.aiNote}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-muted/50">
                      <TableCell colSpan={3} className="font-bold">Total Estimated Cost</TableCell>
                      <TableCell className="font-bold text-primary">${totalCost.toLocaleString()}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Export BOQ
              </Button>
              <Button variant="outline" className="gap-2">
                <ShoppingCart className="h-4 w-4" />
                Auto-Create PO
              </Button>
              <Button variant="secondary" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Ask AI to Optimize Costs
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BOQGeneratorPage;