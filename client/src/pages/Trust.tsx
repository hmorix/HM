import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, FileText, Users, Globe } from 'lucide-react'

export default function Trust() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-[700px] mb-16">
          <span className="label-mono">Trust Center</span>
          <h1 className="section-title mt-3 mb-6">Built on trust,<br/>verified by results</h1>
          <p className="text-lg text-cream/60 leading-relaxed">Transparency is at the core of everything we do. Explore our security practices, compliance certifications, and data handling policies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {[
            { icon: Shield, title: 'Security', desc: 'Enterprise-grade protection with A+ security rating across all services.', link: '/security' },
            { icon: Lock, title: 'Compliance', desc: 'ISO 27001, SOC 2, GDPR, and PCI DSS compliant infrastructure.', link: '/compliance' },
            { icon: Eye, title: 'Transparency', desc: 'Real-time system status, incident reports, and uptime guarantees.', link: '/status' },
            { icon: FileText, title: 'Data Privacy', desc: 'Your data belongs to you. We never sell or share client data.', link: '/compliance' },
            { icon: Users, title: 'Access Control', desc: 'Role-based permissions, MFA, and SSO for enterprise clients.', link: '/security' },
            { icon: Globe, title: 'Data Residency', desc: 'Choose where your data lives. Multi-region deployment available.', link: '/compliance' },
          ].map((item, i) => (
            <Link key={i} to={item.link} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all group">
              <item.icon size={24} className="text-[#C8FF00] mb-4" />
              <h3 className="font-display font-semibold mb-2 group-hover:text-[#C8FF00] transition-colors">{item.title}</h3>
              <p className="text-sm text-cream/50">{item.desc}</p>
            </Link>
          ))}
        </div>

        {/* SLA */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-12">
          <h2 className="font-display text-2xl font-bold mb-6">Service Level Agreements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: 'Uptime', value: '99.9%', desc: 'Guaranteed platform availability' },
              { metric: 'Response Time', value: '< 200ms', desc: 'API response time p95' },
              { metric: 'Support', value: '< 1 hour', desc: 'Critical issue response time' },
            ].map((sla, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl font-bold text-[#C8FF00] mb-1">{sla.value}</div>
                <div className="font-semibold text-sm mb-1">{sla.metric}</div>
                <div className="text-xs text-cream/40">{sla.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <h2 className="font-display text-2xl font-bold mb-6">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            { client: 'Meridian Enterprises', industry: 'Finance', result: '60% reduction in billing errors', desc: 'Implemented BillingFlow to automate their entire invoicing pipeline.' },
            { client: 'NovaTech Solutions', industry: 'Technology', result: '14 vulnerabilities patched', desc: 'Comprehensive security audit and remediation of critical infrastructure.' },
            { client: 'Apex Corp', industry: 'Legal', result: '3,000 docs/month automated', desc: 'PDF Automation system processing legal documents at scale.' },
            { client: 'Stellar Industries', industry: 'Manufacturing', result: '40% cost reduction', desc: 'Smart Home IoT deployment across 200+ facilities.' },
          ].map((cs, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-0.5 bg-[#C8FF00]/10 text-[#C8FF00] rounded-full">{cs.industry}</span>
              </div>
              <h3 className="font-display font-semibold mb-1">{cs.client}</h3>
              <p className="text-sm text-cream/50 mb-3">{cs.desc}</p>
              <div className="text-sm font-semibold text-[#C8FF00]">{cs.result}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
