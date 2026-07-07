export default function BillingFlowChangelog() {
  const releases = [
    { version: '2.4.1', date: 'Jul 12, 2024', type: 'patch', changes: [
      { type: 'fix', text: 'Fixed webhook delivery retry logic for failed endpoints' },
      { type: 'fix', text: 'Resolved currency formatting issue for JPY invoices' },
      { type: 'improvement', text: 'Improved PDF generation speed by 40%' },
    ]},
    { version: '2.4.0', date: 'Jul 1, 2024', type: 'minor', changes: [
      { type: 'feature', text: 'AI-powered invoice categorization and tagging' },
      { type: 'feature', text: 'Multi-currency support with real-time exchange rates' },
      { type: 'feature', text: 'Automated payment reminders with customizable schedules' },
      { type: 'improvement', text: 'Redesigned invoice template editor' },
      { type: 'fix', text: 'Fixed pagination in invoice list API endpoint' },
    ]},
    { version: '2.3.0', date: 'Jun 15, 2024', type: 'minor', changes: [
      { type: 'feature', text: 'Subscription billing with recurring invoices' },
      { type: 'feature', text: 'Custom invoice templates with drag-and-drop editor' },
      { type: 'improvement', text: 'Enhanced search with full-text invoice content search' },
      { type: 'improvement', text: 'Batch operations for bulk invoice management' },
    ]},
    { version: '2.2.0', date: 'May 20, 2024', type: 'minor', changes: [
      { type: 'feature', text: 'Stripe and PayPal payment gateway integration' },
      { type: 'feature', text: 'Client portal for invoice viewing and payment' },
      { type: 'feature', text: 'Automated tax calculation for 40+ countries' },
      { type: 'fix', text: 'Fixed email delivery issues with certain SMTP providers' },
    ]},
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[800px] mx-auto px-8">
        <span className="label-mono">BillingFlow / Changelog</span>
        <h1 className="section-title mt-3 mb-6">Changelog</h1>
        <p className="text-lg text-cream/60 mb-12">All notable changes to BillingFlow are documented here.</p>

        <div className="space-y-12">
          {releases.map((r, i) => (
            <div key={i} className="relative pl-8 border-l border-glass-border">
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-[#C8FF00]" />
              <div className="flex items-center gap-3 mb-4">
                <h2 className="font-display text-xl font-bold">v{r.version}</h2>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${r.type === 'patch' ? 'bg-blue-500/10 text-blue-400' : 'bg-[#C8FF00]/10 text-[#C8FF00]'}`}>{r.type}</span>
                <span className="text-xs text-cream/30">{r.date}</span>
              </div>
              <div className="space-y-2">
                {r.changes.map((c, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono mt-0.5 ${c.type === 'feature' ? 'bg-green-500/10 text-green-400' : c.type === 'improvement' ? 'bg-blue-500/10 text-blue-400' : 'bg-yellow-500/10 text-yellow-400'}`}>{c.type}</span>
                    <span className="text-sm text-cream/60">{c.text}</span>
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
