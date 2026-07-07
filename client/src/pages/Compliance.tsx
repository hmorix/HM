import { Shield, FileText, Globe, Lock } from 'lucide-react'

export default function Compliance() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-[700px] mb-16">
          <span className="label-mono">Compliance Center</span>
          <h1 className="section-title mt-3 mb-6">Meeting the highest<br/>regulatory standards</h1>
          <p className="text-lg text-cream/60 leading-relaxed">HMorix maintains compliance with global regulatory frameworks to ensure your data is protected and your business meets its obligations.</p>
        </div>

        {/* Frameworks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {[
            { title: 'ISO 27001', status: 'Certified', desc: 'Information Security Management System certification covering all HMorix operations.', icon: Shield },
            { title: 'SOC 2 Type II', status: 'Certified', desc: 'Independent audit of security, availability, processing integrity, and confidentiality.', icon: FileText },
            { title: 'GDPR', status: 'Compliant', desc: 'Full compliance with EU General Data Protection Regulation for all EU clients.', icon: Globe },
            { title: 'PCI DSS Level 1', status: 'Certified', desc: 'Payment Card Industry compliance for BillingFlow payment processing.', icon: Lock },
            { title: 'HIPAA', status: 'Compliant', desc: 'Healthcare data protection standards for medical industry clients.', icon: Shield },
            { title: 'CCPA', status: 'Compliant', desc: 'California Consumer Privacy Act compliance for US-based operations.', icon: Globe },
          ].map((fw, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all">
              <div className="flex items-center justify-between mb-4">
                <fw.icon size={24} className="text-[#C8FF00]" />
                <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full">{fw.status}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{fw.title}</h3>
              <p className="text-sm text-cream/50">{fw.desc}</p>
            </div>
          ))}
        </div>

        {/* Data Handling */}
        <h2 className="font-display text-2xl font-bold mb-8">Data Handling Practices</h2>
        <div className="space-y-4 mb-16">
          {[
            { title: 'Data Encryption', desc: 'All data encrypted at rest (AES-256) and in transit (TLS 1.3). Database-level encryption with customer-managed keys available.' },
            { title: 'Data Retention', desc: 'Configurable retention policies. Data automatically purged after contract termination with certificate of destruction provided.' },
            { title: 'Data Residency', desc: 'Choose from US, EU, or APAC data centers. Data never leaves your chosen region without explicit consent.' },
            { title: 'Access Logging', desc: 'Complete audit trail of all data access. Immutable logs retained for 7 years. Available for client review on request.' },
            { title: 'Vendor Management', desc: 'All sub-processors vetted and contractually bound. Regular third-party security assessments conducted.' },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-cream/50">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Whitepapers */}
        <h2 className="font-display text-2xl font-bold mb-8">Security Whitepapers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'HMorix Security Architecture', pages: '24 pages', date: 'Updated Jun 2024' },
            { title: 'Data Protection & Privacy', pages: '18 pages', date: 'Updated May 2024' },
            { title: 'AI Safety & Ethics Framework', pages: '32 pages', date: 'Updated Apr 2024' },
          ].map((wp, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all cursor-pointer">
              <FileText size={24} className="text-[#C8FF00] mb-4" />
              <h3 className="font-display font-semibold text-sm mb-2">{wp.title}</h3>
              <div className="flex items-center gap-3 text-xs text-cream/40">
                <span>{wp.pages}</span>
                <span>{wp.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
