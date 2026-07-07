import { Link } from 'react-router-dom'

export default function BillingFlowDocs() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">BillingFlow</span>
        <h1 className="section-title mt-3 mb-6">Documentation</h1>
        <div className="flex gap-2 flex-wrap mb-12 p-1 bg-obsidian-2 border border-glass-border rounded-[8px] w-fit">
          <Link to="/billingflow" className="px-4 py-2 text-sm font-medium text-cream/50 hover:text-cream rounded-[4px]">Overview</Link>
          <Link to="/billingflow/features" className="px-4 py-2 text-sm font-medium text-cream/50 hover:text-cream rounded-[4px]">Features</Link>
          <Link to="/billingflow/pricing" className="px-4 py-2 text-sm font-medium text-cream/50 hover:text-cream rounded-[4px]">Pricing</Link>
          <Link to="/billingflow/docs" className="px-4 py-2 text-sm font-medium bg-[#C8FF00]/10 text-[#C8FF00] rounded-[4px]">Docs</Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <nav className="space-y-1 sticky top-24">
              <div className="text-xs font-semibold text-cream/40 uppercase tracking-wider mb-2">Getting Started</div>
              <a href="#" className="block px-3 py-1.5 text-sm text-[#C8FF00] bg-[#C8FF00]/5 rounded-[4px]">Quick Start</a>
              <a href="#" className="block px-3 py-1.5 text-sm text-cream/50 hover:text-cream">Installation</a>
              <a href="#" className="block px-3 py-1.5 text-sm text-cream/50 hover:text-cream">Authentication</a>
              <div className="text-xs font-semibold text-cream/40 uppercase tracking-wider mb-2 mt-6">API Reference</div>
              <a href="#" className="block px-3 py-1.5 text-sm text-cream/50 hover:text-cream">Invoices</a>
              <a href="#" className="block px-3 py-1.5 text-sm text-cream/50 hover:text-cream">Payments</a>
              <a href="#" className="block px-3 py-1.5 text-sm text-cream/50 hover:text-cream">Clients</a>
              <a href="#" className="block px-3 py-1.5 text-sm text-cream/50 hover:text-cream">Webhooks</a>
            </nav>
          </div>
          <div className="lg:col-span-3">
            <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-8">
              <h2 className="font-display text-xl font-bold mb-4">Quick Start Guide</h2>
              <p className="text-sm text-cream/60 mb-6">Get BillingFlow running in under 5 minutes. Follow these steps to create your first invoice.</p>
              <div className="bg-obsidian border border-glass-border rounded-[8px] p-4 font-mono text-sm">
                <div className="text-cream/40"># Install BillingFlow SDK</div>
                <div className="text-[#C8FF00]">npm install @hmorix/billingflow</div>
                <div className="text-cream/40 mt-4"># Initialize client</div>
                <div><span className="text-blue-400">import</span> {'{'} BillingFlow {'}'} <span className="text-blue-400">from</span> <span className="text-green-400">'@hmorix/billingflow'</span></div>
                <div className="mt-2"><span className="text-blue-400">const</span> client = <span className="text-blue-400">new</span> <span className="text-yellow-400">BillingFlow</span>({'{'}</div>
                <div className="pl-4">apiKey: <span className="text-green-400">'your-api-key'</span>,</div>
                <div className="pl-4">environment: <span className="text-green-400">'production'</span></div>
                <div>{'}'})</div>
                <div className="text-cream/40 mt-4"># Create an invoice</div>
                <div><span className="text-blue-400">const</span> invoice = <span className="text-blue-400">await</span> client.invoices.<span className="text-yellow-400">create</span>({'{'}</div>
                <div className="pl-4">client_id: <span className="text-green-400">'cli_abc123'</span>,</div>
                <div className="pl-4">items: [{'{'} description: <span className="text-green-400">'Web Development'</span>, amount: <span className="text-[#C8FF00]">4200</span> {'}'}],</div>
                <div className="pl-4">due_date: <span className="text-green-400">'2024-07-15'</span></div>
                <div>{'}'})</div>
              </div>
            </div>
            <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h2 className="font-display text-xl font-bold mb-4">API Endpoints</h2>
              <div className="space-y-3">
                {[
                  { method: 'POST', path: '/v1/invoices', desc: 'Create a new invoice' },
                  { method: 'GET', path: '/v1/invoices/:id', desc: 'Retrieve an invoice' },
                  { method: 'GET', path: '/v1/invoices', desc: 'List all invoices' },
                  { method: 'POST', path: '/v1/payments', desc: 'Record a payment' },
                  { method: 'POST', path: '/v1/clients', desc: 'Create a client' },
                  { method: 'POST', path: '/v1/webhooks', desc: 'Register a webhook' },
                ].map((ep, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-white/[0.02] border border-glass-border rounded-[8px]">
                    <span className={`font-mono text-xs px-2 py-0.5 rounded ${ep.method === 'POST' ? 'bg-blue-500/15 text-blue-400' : 'bg-green-500/15 text-green-400'}`}>{ep.method}</span>
                    <span className="font-mono text-sm text-[#C8FF00]">{ep.path}</span>
                    <span className="text-sm text-cream/40 ml-auto">{ep.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
