import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'

const sections = [
  { title: 'Main Pages', links: [
    { to: '/', label: 'Home' }, { to: '/about', label: 'About Us' }, { to: '/services', label: 'Services' },
    { to: '/pricing', label: 'Pricing' }, { to: '/contact', label: 'Contact' }, { to: '/blog', label: 'Blog' },
  ]},
  { title: 'Services', links: [
    { to: '/services/web-design', label: 'Web Design & Development' },
    { to: '/services/mobile-apps', label: 'Mobile App & APK Development' },
    { to: '/services/digital-marketing', label: 'Digital Marketing & SEO' },
    { to: '/services/ai-solutions', label: 'AI & Machine Learning' },
    { to: '/services/software-development', label: 'Custom Software Development' },
    { to: '/services/advertising', label: 'Advertising & Ad Tech' },
    { to: '/services/ecommerce', label: 'E-commerce Solutions' },
  ]},
  { title: 'Products', links: [
    { to: '/billingflow', label: 'BillingFlow' }, { to: '/billingflow/features', label: 'BillingFlow Features' },
    { to: '/billingflow/pricing', label: 'BillingFlow Pricing' }, { to: '/billingflow/docs', label: 'BillingFlow Docs' },
    { to: '/billingflow/api', label: 'BillingFlow API' }, { to: '/billingflow/demo', label: 'BillingFlow Demo' },
    { to: '/agent', label: 'AI Agent' }, { to: '/agent/playground', label: 'AI Agent Playground' },
    { to: '/agent/docs', label: 'AI Agent Docs' }, { to: '/agent/templates', label: 'AI Agent Templates' },
    { to: '/agent/workflows', label: 'AI Agent Workflows' },
    { to: '/pdf-automation', label: 'PDF Automation' }, { to: '/pdf-automation/docs', label: 'PDF Docs' },
    { to: '/pdf-automation/demo', label: 'PDF Demo' }, { to: '/pdf-automation/templates', label: 'PDF Templates' },
  ]},
  { title: 'Enterprise Trust', links: [
    { to: '/security', label: 'Security Center' }, { to: '/status', label: 'System Status' },
    { to: '/trust', label: 'Trust Center' }, { to: '/compliance', label: 'Compliance Center' },
    { to: '/certifications', label: 'Certifications' },
  ]},
  { title: 'Resources', links: [
    { to: '/developers', label: 'Developer Platform' }, { to: '/knowledge-base', label: 'Knowledge Base' },
    { to: '/case-studies', label: 'Case Studies' }, { to: '/whitepapers', label: 'Whitepapers' },
    { to: '/playground', label: 'AI Playground' }, { to: '/architecture', label: 'Technical Architecture' },
  ]},
  { title: 'Smart Home', links: [
    { to: '/smart-home', label: 'Smart Home Division' },
  ]},
  { title: 'Company', links: [
    { to: '/careers', label: 'Careers' }, { to: '/investors', label: 'Investors' },
    { to: '/partners', label: 'Partners' }, { to: '/roadmap', label: 'Roadmap' },
    { to: '/press', label: 'Press Releases' }, { to: '/media-kit', label: 'Media Kit' },
  ]},
  { title: 'Portals', links: [
    { to: '/dashboard', label: 'Enterprise Dashboard' }, { to: '/portal', label: 'Client Portal' },
    { to: '/employee', label: 'Employee Portal' }, { to: '/admin', label: 'Admin Portal' },
    { to: '/support', label: 'Support Center' },
  ]},
  { title: 'Account', links: [
    { to: '/signin', label: 'Sign In' }, { to: '/signup', label: 'Sign Up' },
    { to: '/forgot-password', label: 'Forgot Password' }, { to: '/profile', label: 'Profile' },
    { to: '/settings', label: 'Settings' },
  ]},
]

export default function Sitemap() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead
        title="Sitemap"
        description="Complete sitemap of HMorix.com — navigate all pages including services, products, resources, enterprise trust, company info, and account pages."
        keywords="HMorix sitemap, site map, all pages, navigation, HMorix pages"
        canonical="/sitemap"
      />
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold mb-4">Sitemap</h1>
          <p className="text-cream/50">Complete navigation of all HMorix pages and resources.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h2 className="font-display font-semibold text-[#C8FF00] mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}><Link to={link.to} className="text-sm text-cream/50 hover:text-cream transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
