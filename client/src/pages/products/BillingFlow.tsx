import { Link } from 'react-router-dom'

export default function BillingFlow() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-[700px] mb-16">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#C8FF00]/10 border border-[rgba(200,255,0,0.25)] rounded-full w-fit mb-6">
            <span className="w-2 h-2 bg-[#C8FF00] rounded-full" />
            <span className="font-mono text-[0.68rem] text-[#C8FF00]">BILLING PLATFORM</span>
          </div>
          <h1 className="section-title mb-6">BillingFlow</h1>
          <p className="text-lg text-cream/60 leading-relaxed">The complete invoicing and payment management platform for modern businesses. Automate billing, track payments, and scale your financial operations.</p>
        </div>

        {/* Sub-navigation */}
        <div className="flex gap-2 flex-wrap mb-12 p-1 bg-obsidian-2 border border-glass-border rounded-[8px] w-fit">
          <Link to="/billingflow" className="px-4 py-2 text-sm font-medium bg-[#C8FF00]/10 text-[#C8FF00] rounded-[4px]">Overview</Link>
          <Link to="/billingflow/features" className="px-4 py-2 text-sm font-medium text-cream/50 hover:text-cream rounded-[4px] transition-colors">Features</Link>
          <Link to="/billingflow/pricing" className="px-4 py-2 text-sm font-medium text-cream/50 hover:text-cream rounded-[4px] transition-colors">Pricing</Link>
          <Link to="/billingflow/docs" className="px-4 py-2 text-sm font-medium text-cream/50 hover:text-cream rounded-[4px] transition-colors">Docs</Link>
        </div>

        {/* Demo Visual */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="font-mono text-xs text-cream/35 ml-2">BillingFlow Dashboard</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-white/[0.04] border border-glass-border rounded-[8px]">
              <div className="text-xs text-cream/40 mb-1">Total Revenue</div>
              <div className="font-display text-2xl font-bold">$84,210</div>
              <div className="text-xs text-green-500 mt-1">↑ 12.4% from last month</div>
            </div>
            <div className="p-4 bg-white/[0.04] border border-glass-border rounded-[8px]">
              <div className="text-xs text-cream/40 mb-1">Pending Invoices</div>
              <div className="font-display text-2xl font-bold">23</div>
              <div className="text-xs text-yellow-500 mt-1">$12,450 outstanding</div>
            </div>
            <div className="p-4 bg-white/[0.04] border border-glass-border rounded-[8px]">
              <div className="text-xs text-cream/40 mb-1">Paid This Month</div>
              <div className="font-display text-2xl font-bold">147</div>
              <div className="text-xs text-green-500 mt-1">98.2% collection rate</div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { id: 'INV-2841', client: 'Meridian Corp', amount: '$4,200', status: 'Paid', date: 'Jun 15' },
              { id: 'INV-2842', client: 'NovaTech', amount: '$8,750', status: 'Pending', date: 'Jun 18' },
              { id: 'INV-2843', client: 'Apex Corp', amount: '$2,100', status: 'Paid', date: 'Jun 20' },
              { id: 'INV-2844', client: 'Stellar Inc', amount: '$15,000', status: 'Overdue', date: 'Jun 10' },
            ].map((inv, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white/[0.02] border border-glass-border rounded-[8px]">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[#C8FF00]">{inv.id}</span>
                  <span className="text-sm">{inv.client}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm">{inv.amount}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${inv.status === 'Paid' ? 'bg-green-500/15 text-green-500' : inv.status === 'Pending' ? 'bg-yellow-500/15 text-yellow-500' : 'bg-red-500/15 text-red-500'}`}>{inv.status}</span>
                  <span className="text-xs text-cream/30">{inv.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Automated Invoicing', desc: 'Generate and send invoices automatically based on your billing schedule.' },
            { title: 'Payment Tracking', desc: 'Real-time payment status with automatic reminders for overdue invoices.' },
            { title: 'Multi-Currency', desc: 'Support for 135+ currencies with automatic exchange rate conversion.' },
            { title: 'Tax Compliance', desc: 'Automatic tax calculation for GST, VAT, and sales tax across regions.' },
            { title: 'Client Portal', desc: 'Self-service portal where clients can view and pay invoices online.' },
            { title: 'Analytics & Reports', desc: 'Revenue forecasting, cash flow analysis, and financial reporting.' },
          ].map((f, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all">
              <h3 className="font-display font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-cream/50">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
