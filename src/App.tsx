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
import SiteInspectionPage from "./pages/SiteInspectionPage";
import RiskManagementPage from "./pages/RiskManagementPage";
import SafetyScannerPage from "./pages/SafetyScannerPage";
import ResourceSchedulingPage from "./pages/ResourceSchedulingPage";
import AttendancePage from "./pages/AttendancePage";
import DailyLogbookPage from "./pages/DailyLogbookPage";
import EquipmentMaintenancePage from "./pages/EquipmentMaintenancePage";
import SettingsPage from "./pages/SettingsPage";
import NotificationsPage from "./pages/NotificationsPage";
import ChangeOrderPage from "./pages/ChangeOrderPage";
import SubcontractorAssignmentPage from "./pages/SubcontractorAssignmentPage";
import DeliveryTrackingPage from "./pages/DeliveryTrackingPage";
import BudgetPlanningPage from "./pages/BudgetPlanningPage";
import VisualizerPage from "./pages/VisualizerPage";
import BOQGeneratorPage from "./pages/BOQGeneratorPage";
import PaymentReleasePage from "./pages/PaymentReleasePage";
import AICopilotFullPage from "./pages/AICopilotFullPage";
import AuditLogsPage from "./pages/AuditLogsPage";
import MultiCurrencyPage from "./pages/MultiCurrencyPage";
import HandoverChecklistPage from "./pages/HandoverChecklistPage";
import LoginPage from "./pages/LoginPage";
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
          <Route path="/login" element={<LoginPage />} />
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
          <Route path="/ai-copilot" element={<AICopilotFullPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/messages" element={<MessagingPage />} />
          <Route path="/site-inspection" element={<SiteInspectionPage />} />
          <Route path="/risk-management" element={<RiskManagementPage />} />
          <Route path="/safety-scanner" element={<SafetyScannerPage />} />
          <Route path="/resources" element={<ResourceSchedulingPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/daily-log" element={<DailyLogbookPage />} />
          <Route path="/equipment" element={<EquipmentMaintenancePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/change-order" element={<ChangeOrderPage />} />
          <Route path="/subcontractor-assignment" element={<SubcontractorAssignmentPage />} />
          <Route path="/delivery-tracking" element={<DeliveryTrackingPage />} />
          <Route path="/budget-planning" element={<BudgetPlanningPage />} />
          <Route path="/visualizer" element={<VisualizerPage />} />
          <Route path="/boq-generator" element={<BOQGeneratorPage />} />
          <Route path="/payment-release" element={<PaymentReleasePage />} />
          <Route path="/audit-logs" element={<AuditLogsPage />} />
          <Route path="/multi-currency" element={<MultiCurrencyPage />} />
          <Route path="/handover" element={<HandoverChecklistPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
