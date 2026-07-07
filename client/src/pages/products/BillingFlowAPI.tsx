import { Copy } from 'lucide-react'

export default function BillingFlowAPI() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">BillingFlow / API</span>
        <h1 className="section-title mt-3 mb-6">BillingFlow API Reference</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-12">Complete REST API for managing invoices, subscriptions, and payments programmatically.</p>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
          <div className="space-y-1">
            {['Authentication','Invoices','Subscriptions','Payments','Webhooks','Customers'].map(s => (
              <button key={s} className={`w-full text-left px-3 py-2 text-sm rounded-[4px] ${s === 'Invoices' ? 'bg-[#C8FF00]/10 text-[#C8FF00]' : 'text-cream/40 hover:text-cream hover:bg-white/[0.04]'} transition-all`}>{s}</button>
            ))}
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-2">Base URL</h3>
              <div className="flex items-center gap-2 p-3 bg-obsidian rounded-[4px] font-mono text-sm">
                <span className="text-[#C8FF00]">https://api.hmorix.com/billing/v1</span>
                <Copy size={14} className="text-cream/30 cursor-pointer hover:text-cream ml-auto" />
              </div>
            </div>

            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] font-mono rounded">GET</span>
                <span className="font-mono text-sm">/invoices</span>
              </div>
              <p className="text-sm text-cream/50 mb-4">List all invoices for the authenticated account.</p>
              <h4 className="text-xs font-semibold text-cream/60 mb-2">Parameters</h4>
              <div className="space-y-2 mb-4">
                {[{name:'status',type:'string',desc:'Filter by status (draft, pending, paid, overdue)'},{name:'limit',type:'integer',desc:'Number of results (default: 20, max: 100)'},{name:'offset',type:'integer',desc:'Pagination offset'}].map(p => (
                  <div key={p.name} className="flex items-start gap-4 p-2 bg-white/[0.02] rounded-[4px]">
                    <code className="text-xs text-[#C8FF00] font-mono">{p.name}</code>
                    <span className="text-[10px] text-cream/30">{p.type}</span>
                    <span className="text-xs text-cream/40">{p.desc}</span>
                  </div>
                ))}
              </div>
              <h4 className="text-xs font-semibold text-cream/60 mb-2">Response</h4>
              <pre className="p-4 bg-obsidian rounded-[8px] text-xs font-mono text-cream/60 overflow-x-auto">{`{
  "data": [
    {
      "id": "inv_2841",
      "number": "INV-2841",
      "client": "Meridian Corp",
      "amount": 4200.00,
      "currency": "USD",
      "status": "paid",
      "due_date": "2024-07-15",
      "created_at": "2024-07-01T10:00:00Z"
    }
  ],
  "total": 156,
  "has_more": true
}`}</pre>
            </div>

            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] font-mono rounded">POST</span>
                <span className="font-mono text-sm">/invoices</span>
              </div>
              <p className="text-sm text-cream/50 mb-4">Create a new invoice.</p>
              <h4 className="text-xs font-semibold text-cream/60 mb-2">Request Body</h4>
              <pre className="p-4 bg-obsidian rounded-[8px] text-xs font-mono text-cream/60 overflow-x-auto">{`{
  "client_id": "cus_meridian",
  "items": [
    {
      "description": "Enterprise License - Q3 2024",
      "quantity": 1,
      "unit_price": 4200.00
    }
  ],
  "due_date": "2024-08-15",
  "currency": "USD",
  "notes": "Net 30 payment terms"
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
