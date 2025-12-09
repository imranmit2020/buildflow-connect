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
import DocumentsPage from "./pages/DocumentsPage";
import TimelinePage from "./pages/TimelinePage";
import ReportsPage from "./pages/ReportsPage";
import MessagingPage from "./pages/MessagingPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProcurementPage from "./pages/ProcurementPage";
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
          <Route path="/projects" element={<PortfolioPage />} />
          <Route path="/tasks" element={<TimelinePage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/procurement" element={<ProcurementPage />} />
          <Route path="/vendors" element={<VendorDashboard />} />
          <Route path="/finance" element={<FinanceDashboard />} />
          <Route path="/ai-copilot" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/messages" element={<MessagingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
