import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Security from './pages/Security'
import Status from './pages/Status'
import Trust from './pages/Trust'
import Compliance from './pages/Compliance'
import BillingFlow from './pages/products/BillingFlow'
import BillingFlowFeatures from './pages/products/BillingFlowFeatures'
import BillingFlowPricing from './pages/products/BillingFlowPricing'
import BillingFlowDocs from './pages/products/BillingFlowDocs'
import BillingFlowAPI from './pages/products/BillingFlowAPI'
import BillingFlowDemo from './pages/products/BillingFlowDemo'
import BillingFlowChangelog from './pages/products/BillingFlowChangelog'
import AIAgent from './pages/products/AIAgent'
import AIAgentPlayground from './pages/products/AIAgentPlayground'
import AIAgentDocs from './pages/products/AIAgentDocs'
import AIAgentTemplates from './pages/products/AIAgentTemplates'
import AIAgentWorkflows from './pages/products/AIAgentWorkflows'
import AIAgentExamples from './pages/products/AIAgentExamples'
import PDFAutomation from './pages/products/PDFAutomation'
import PDFDocs from './pages/products/PDFDocs'
import PDFDemo from './pages/products/PDFDemo'
import PDFTemplates from './pages/products/PDFTemplates'
import Developers from './pages/Developers'
import Playground from './pages/Playground'
import SmartHome from './pages/SmartHome'
import Dashboard from './pages/Dashboard'
import Architecture from './pages/Architecture'
import Careers from './pages/Careers'
import Investors from './pages/Investors'
import Partners from './pages/Partners'
import Roadmap from './pages/Roadmap'
import KnowledgeBase from './pages/KnowledgeBase'
import Support from './pages/Support'
import Profile from './pages/Profile'
import Settings from './pages/settings/Settings'
import ClientPortal from './pages/portal/ClientPortal'
import CaseStudies from './pages/CaseStudies'
import Whitepapers from './pages/Whitepapers'
import MediaKit from './pages/MediaKit'
import PressReleases from './pages/PressReleases'
import Certifications from './pages/Certifications'
import ActivityFeed from './pages/ActivityFeed'
import BlogList from './pages/blog/BlogList'
import BlogPost from './pages/blog/BlogPost'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminSettings from './pages/admin/AdminSettings'
import AdminLogs from './pages/admin/AdminLogs'
import EmployeePortal from './pages/employee/EmployeePortal'
import Directory from './pages/employee/Directory'
import Requests from './pages/employee/Requests'
import Tasks from './pages/employee/Tasks'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import ForgotPassword from './pages/auth/ForgotPassword'
import Verify from './pages/auth/Verify'
import SearchAccount from './pages/auth/SearchAccount'
import CommandPalette from './components/CommandPalette'

// Service Pages
import WebDesign from './pages/services/WebDesign'
import MobileApps from './pages/services/MobileApps'
import DigitalMarketing from './pages/services/DigitalMarketing'
import AISolutions from './pages/services/AISolutions'
import SoftwareDev from './pages/services/SoftwareDev'
import Advertising from './pages/services/Advertising'
import Ecommerce from './pages/services/Ecommerce'

// SEO & Legal Pages
import Sitemap from './pages/Sitemap'
import FAQ from './pages/FAQ'
import Testimonials from './pages/Testimonials'
import Terms from './pages/legal/Terms'
import Privacy from './pages/legal/Privacy'

// CRM Pages
import CRMDashboard from './pages/crm/CRMDashboard'
import Contacts from './pages/crm/Contacts'
import Deals from './pages/crm/Deals'

// HRM Pages
import HRMDashboard from './pages/hrm/HRMDashboard'
import Recruitment from './pages/hrm/Recruitment'
import Payroll from './pages/hrm/Payroll'

// Analytics
import AnalyticsDashboard from './pages/analytics/AnalyticsDashboard'

function App() {
  const [commandOpen, setCommandOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setCommandOpen(prev => !prev)
      }
      if (e.key === 'Escape') setCommandOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <CommandPalette isOpen={commandOpen} onClose={() => setCommandOpen(false)} />
      <Routes>
        <Route element={<MainLayout onCommandOpen={() => setCommandOpen(true)} />}>
          {/* Core Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          {/* Service Pages (SEO-optimized) */}
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/ai-solutions" element={<AISolutions />} />
          <Route path="/services/software-development" element={<SoftwareDev />} />
          <Route path="/services/advertising" element={<Advertising />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Enterprise Trust Layer */}
          <Route path="/security" element={<Security />} />
          <Route path="/status" element={<Status />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/support" element={<Support />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/whitepapers" element={<Whitepapers />} />
          <Route path="/certifications" element={<Certifications />} />

          {/* BillingFlow Product Ecosystem */}
          <Route path="/billingflow" element={<BillingFlow />} />
          <Route path="/billingflow/features" element={<BillingFlowFeatures />} />
          <Route path="/billingflow/pricing" element={<BillingFlowPricing />} />
          <Route path="/billingflow/docs" element={<BillingFlowDocs />} />
          <Route path="/billingflow/api" element={<BillingFlowAPI />} />
          <Route path="/billingflow/demo" element={<BillingFlowDemo />} />
          <Route path="/billingflow/changelog" element={<BillingFlowChangelog />} />

          {/* AI Agent Product Ecosystem */}
          <Route path="/agent" element={<AIAgent />} />
          <Route path="/agent/playground" element={<AIAgentPlayground />} />
          <Route path="/agent/docs" element={<AIAgentDocs />} />
          <Route path="/agent/templates" element={<AIAgentTemplates />} />
          <Route path="/agent/workflows" element={<AIAgentWorkflows />} />
          <Route path="/agent/examples" element={<AIAgentExamples />} />

          {/* PDF Automation Product Ecosystem */}
          <Route path="/pdf-automation" element={<PDFAutomation />} />
          <Route path="/pdf-automation/docs" element={<PDFDocs />} />
          <Route path="/pdf-automation/demo" element={<PDFDemo />} />
          <Route path="/pdf-automation/templates" element={<PDFTemplates />} />

          {/* Platform */}
          <Route path="/developers" element={<Developers />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/smart-home" element={<SmartHome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/activity" element={<ActivityFeed />} />

          {/* CRM */}
          <Route path="/crm" element={<CRMDashboard />} />
          <Route path="/crm/contacts" element={<Contacts />} />
          <Route path="/crm/deals" element={<Deals />} />
          <Route path="/crm/pipeline" element={<Deals />} />

          {/* HRM */}
          <Route path="/hrm" element={<HRMDashboard />} />
          <Route path="/hrm/recruitment" element={<Recruitment />} />
          <Route path="/hrm/payroll" element={<Payroll />} />

          {/* Analytics */}
          <Route path="/analytics" element={<AnalyticsDashboard />} />

          {/* Company */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/media-kit" element={<MediaKit />} />
          <Route path="/press" element={<PressReleases />} />

          {/* SEO & Marketing Pages */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/sitemap" element={<Sitemap />} />

          {/* Legal */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* User Pages */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/portal" element={<ClientPortal />} />

          {/* Admin Portal */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/logs" element={<AdminLogs />} />

          {/* Employee Portal */}
          <Route path="/employee" element={<EmployeePortal />} />
          <Route path="/employee/directory" element={<Directory />} />
          <Route path="/employee/requests" element={<Requests />} />
          <Route path="/employee/tasks" element={<Tasks />} />
        </Route>

        {/* Auth Pages (no layout) */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/search-account" element={<SearchAccount />} />
      </Routes>
    </>
  )
}

export default App
