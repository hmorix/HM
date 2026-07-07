import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="label-mono">Pricing</span>
          <h1 className="section-title mt-3 mb-4">Simple, transparent pricing</h1>
          <p className="text-cream/60 max-w-md mx-auto">Choose the plan that fits your needs. All plans include core features with no hidden fees.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { plan: 'Starter', price: '$2,499', period: '/project', desc: 'For small businesses and startups', features: ['Single web application','Up to 10 pages','Basic SEO','3 months support','Source code delivery','Responsive design'], cta: 'Get Started' },
            { plan: 'Professional', price: '$7,999', period: '/project', desc: 'For growing companies', features: ['Full-stack application','Unlimited pages','Advanced SEO & analytics','12 months support','CI/CD pipeline','Custom integrations','Priority support'], cta: 'Get Started', featured: true },
            { plan: 'Enterprise', price: 'Custom', period: '', desc: 'For large organizations', features: ['Multiple applications','Dedicated team','24/7 support','SLA guarantee','Security audits','Custom infrastructure','On-site consulting'], cta: 'Contact Sales' },
          ].map((plan, i) => (
            <div key={i} className={`p-8 border rounded-[24px] relative ${plan.featured ? 'border-[rgba(200,255,0,0.4)] bg-obsidian-3' : 'border-glass-border bg-obsidian-2'}`}>
              {plan.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#C8FF00] text-obsidian text-xs font-bold font-display rounded-full">Most Popular</div>}
              <div className="font-mono text-xs text-[#C8FF00] mb-2">{plan.plan.toUpperCase()}</div>
              <div className="font-display text-4xl font-bold tracking-tight mb-1">{plan.price}<span className="text-base font-normal text-cream/35">{plan.period}</span></div>
              <p className="text-sm text-cream/50 mb-6">{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => <li key={j} className="flex items-center gap-2 text-sm text-cream/60 border-b border-glass-border pb-2"><span className="text-[#C8FF00]">✓</span>{f}</li>)}
              </ul>
              <Link to="/contact" className={`block w-full py-3 rounded-[4px] font-display font-semibold text-sm text-center transition-all ${plan.featured ? 'bg-[#C8FF00] text-obsidian hover:opacity-90' : 'border border-glass-border text-cream hover:border-[#C8FF00] hover:text-[#C8FF00]'}`}>{plan.cta}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
