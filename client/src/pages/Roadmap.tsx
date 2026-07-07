export default function Roadmap() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">Roadmap</span>
        <h1 className="section-title mt-3 mb-6">What's next for HMorix</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-16">Our public roadmap shows what we're building and what's coming next. Transparency drives trust.</p>

        <div className="space-y-8">
          {[
            { quarter: 'Q3 2024', status: 'In Progress', items: [
              { title: 'BillingFlow 3.0', desc: 'Complete redesign with AI-powered invoice generation', status: 'building' },
              { title: 'AI Agent v2', desc: 'Multi-modal support, code execution, and workflow chaining', status: 'building' },
              { title: 'Smart Home SDK', desc: 'Open SDK for third-party device integration', status: 'planned' },
            ]},
            { quarter: 'Q4 2024', status: 'Planned', items: [
              { title: 'HMorix Cloud Platform', desc: 'Unified platform with single sign-on and shared dashboard', status: 'planned' },
              { title: 'Enterprise SSO', desc: 'SAML 2.0 and OIDC support for enterprise clients', status: 'planned' },
              { title: 'Mobile Apps', desc: 'Native iOS and Android apps for all HMorix products', status: 'planned' },
            ]},
            { quarter: 'Q1 2025', status: 'Exploring', items: [
              { title: 'HMorix Marketplace', desc: 'Third-party integrations and plugin ecosystem', status: 'exploring' },
              { title: 'On-Premise Deployment', desc: 'Self-hosted option for enterprise clients with strict data requirements', status: 'exploring' },
            ]},
          ].map((q, i) => (
            <div key={i} className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-bold">{q.quarter}</h2>
                <span className={`text-xs px-3 py-1 rounded-full ${q.status === 'In Progress' ? 'bg-[#C8FF00]/10 text-[#C8FF00]' : q.status === 'Planned' ? 'bg-blue-500/10 text-blue-400' : 'bg-white/5 text-cream/40'}`}>{q.status}</span>
              </div>
              <div className="space-y-4">
                {q.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-4 p-4 bg-white/[0.02] border border-glass-border rounded-[8px]">
                    <div className={`w-2 h-2 rounded-full mt-2 ${item.status === 'building' ? 'bg-[#C8FF00] animate-pulse' : item.status === 'planned' ? 'bg-blue-400' : 'bg-cream/20'}`} />
                    <div>
                      <h3 className="font-display font-semibold text-sm">{item.title}</h3>
                      <p className="text-xs text-cream/40 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
