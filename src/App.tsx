import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ContractorDashboard from "./pages/ContractorDashboard";
import ArchitectDashboard from "./pages/ArchitectDashboard";
import InteriorDesignerDashboard from "./pages/InteriorDesignerDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import FinanceDashboard from "./pages/FinanceDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contractor" element={<ContractorDashboard />} />
          <Route path="/architect" element={<ArchitectDashboard />} />
          <Route path="/designer" element={<InteriorDesignerDashboard />} />
          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="/finance-dashboard" element={<FinanceDashboard />} />
          <Route path="/projects" element={<Dashboard />} />
          <Route path="/tasks" element={<Dashboard />} />
          <Route path="/documents" element={<Dashboard />} />
          <Route path="/procurement" element={<Dashboard />} />
          <Route path="/vendors" element={<Dashboard />} />
          <Route path="/finance" element={<Dashboard />} />
          <Route path="/ai-copilot" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
