import { Link } from 'react-router-dom'

export default function BillingFlowPricing() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">BillingFlow</span>
        <h1 className="section-title mt-3 mb-6">Pricing</h1>
        <div className="flex gap-2 flex-wrap mb-12 p-1 bg-obsidian-2 border border-glass-border rounded-[8px] w-fit">
          <Link to="/billingflow" className="px-4 py-2 text-sm font-medium text-cream/50 hover:text-cream rounded-[4px]">Overview</Link>
          <Link to="/billingflow/features" className="px-4 py-2 text-sm font-medium text-cream/50 hover:text-cream rounded-[4px]">Features</Link>
          <Link to="/billingflow/pricing" className="px-4 py-2 text-sm font-medium bg-[#C8FF00]/10 text-[#C8FF00] rounded-[4px]">Pricing</Link>
          <Link to="/billingflow/docs" className="px-4 py-2 text-sm font-medium text-cream/50 hover:text-cream rounded-[4px]">Docs</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { plan: 'Starter', price: '$29', period: '/month', desc: 'For freelancers and small teams', features: ['Up to 50 invoices/month','2 payment gateways','Basic analytics','Email support','1 team member'], cta: 'Start Free Trial' },
            { plan: 'Professional', price: '$79', period: '/month', desc: 'For growing businesses', features: ['Unlimited invoices','All payment gateways','Advanced analytics','Priority support','10 team members','Custom branding','API access'], cta: 'Start Free Trial', featured: true },
            { plan: 'Enterprise', price: 'Custom', period: '', desc: 'For large organizations', features: ['Everything in Pro','Unlimited team members','Dedicated account manager','Custom integrations','SLA guarantee','On-premise option','White-label'], cta: 'Contact Sales' },
          ].map((plan, i) => (
            <div key={i} className={`p-8 border rounded-[24px] relative ${plan.featured ? 'border-[rgba(200,255,0,0.4)] bg-obsidian-3' : 'border-glass-border bg-obsidian-2'}`}>
              {plan.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#C8FF00] text-obsidian text-xs font-bold rounded-full">Most Popular</div>}
              <div className="font-mono text-xs text-[#C8FF00] mb-2">{plan.plan.toUpperCase()}</div>
              <div className="font-display text-4xl font-bold tracking-tight mb-1">{plan.price}<span className="text-base font-normal text-cream/35">{plan.period}</span></div>
              <p className="text-sm text-cream/50 mb-6">{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-cream/60 border-b border-glass-border pb-2"><span className="text-[#C8FF00]">✓</span>{f}</li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-[4px] font-display font-semibold text-sm transition-all ${plan.featured ? 'bg-[#C8FF00] text-obsidian hover:opacity-90' : 'border border-glass-border text-cream hover:border-[#C8FF00] hover:text-[#C8FF00]'}`}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
