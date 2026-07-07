import { Link } from 'react-router-dom'

export default function BillingFlowFeatures() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">BillingFlow</span>
        <h1 className="section-title mt-3 mb-6">Features</h1>
        <div className="flex gap-2 flex-wrap mb-12 p-1 bg-obsidian-2 border border-glass-border rounded-[8px] w-fit">
          <Link to="/billingflow" className="px-4 py-2 text-sm font-medium text-cream/50 hover:text-cream rounded-[4px]">Overview</Link>
          <Link to="/billingflow/features" className="px-4 py-2 text-sm font-medium bg-[#C8FF00]/10 text-[#C8FF00] rounded-[4px]">Features</Link>
          <Link to="/billingflow/pricing" className="px-4 py-2 text-sm font-medium text-cream/50 hover:text-cream rounded-[4px]">Pricing</Link>
          <Link to="/billingflow/docs" className="px-4 py-2 text-sm font-medium text-cream/50 hover:text-cream rounded-[4px]">Docs</Link>
        </div>
        <div className="space-y-12">
          {[
            { title: 'Smart Invoice Generation', desc: 'Create professional invoices in seconds with customizable templates, automatic line-item calculations, and multi-language support. Supports recurring invoices with flexible scheduling.', features: ['Custom branding & templates','Recurring billing schedules','Multi-currency support','Automatic tax calculation'] },
            { title: 'Payment Gateway Integration', desc: 'Connect with Stripe, PayPal, Razorpay, and 20+ payment providers. Accept credit cards, bank transfers, UPI, and cryptocurrency payments.', features: ['20+ payment providers','One-click payments','Payment links','Automatic reconciliation'] },
            { title: 'Client Management', desc: 'Complete CRM for your billing relationships. Track client history, payment patterns, and communication in one place.', features: ['Client profiles & history','Payment behavior analytics','Custom payment terms','Automated reminders'] },
            { title: 'Financial Reporting', desc: 'Real-time dashboards with revenue forecasting, cash flow projections, and tax-ready reports for your accountant.', features: ['Revenue analytics','Cash flow forecasting','Tax-ready exports','Custom report builder'] },
          ].map((section, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <div>
                <h2 className="font-display text-xl font-bold mb-3">{section.title}</h2>
                <p className="text-sm text-cream/60 leading-relaxed mb-4">{section.desc}</p>
                <ul className="space-y-2">
                  {section.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-cream/60"><span className="text-[#C8FF00]">✓</span>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="h-48 bg-obsidian-3 border border-glass-border rounded-[12px] flex items-center justify-center">
                <span className="text-4xl opacity-20">📊</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
