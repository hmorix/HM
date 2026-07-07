import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CaseStudies() {
  const cases = [
    { title: 'How Meridian Corp Reduced Invoice Processing by 87%', client: 'Meridian Corp', industry: 'Financial Services', product: 'BillingFlow', result: '87% faster processing', image: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' },
    { title: 'NovaTech Automated 10,000+ Documents with AI', client: 'NovaTech Industries', industry: 'Manufacturing', product: 'PDF Automation', result: '10x throughput increase', image: 'linear-gradient(135deg, #0f3443 0%, #34e89e20 100%)' },
    { title: 'Apex Corp Deployed AI Agents Across 50 Teams', client: 'Apex Corp', industry: 'Technology', product: 'AI Agent', result: '340 hours saved/month', image: 'linear-gradient(135deg, #2d1b69 0%, #6c63ff20 100%)' },
    { title: 'SmartLiving Homes Connected 5,000 Devices', client: 'SmartLiving Homes', industry: 'Real Estate', product: 'Smart Home', result: '30% energy savings', image: 'linear-gradient(135deg, #1a4332 0%, #C8FF0020 100%)' },
    { title: 'FinanceHub Achieved SOC 2 Compliance in 6 Weeks', client: 'FinanceHub', industry: 'FinTech', product: 'Security & Compliance', result: 'SOC 2 Type II certified', image: 'linear-gradient(135deg, #3d1c02 0%, #f5920020 100%)' },
    { title: 'GlobalRetail Unified 12 Systems Into One Platform', client: 'GlobalRetail Inc', industry: 'E-Commerce', product: 'HMorix Cloud', result: '60% cost reduction', image: 'linear-gradient(135deg, #1c1c3d 0%, #ff6b6b20 100%)' },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">Case Studies</span>
        <h1 className="section-title mt-3 mb-6">Real results from real companies</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-16">See how enterprise companies use HMorix to transform their operations, reduce costs, and accelerate growth.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="group bg-obsidian-2 border border-glass-border rounded-[16px] overflow-hidden hover:border-[rgba(200,255,0,0.2)] transition-all cursor-pointer">
              <div className="h-40 relative" style={{background: c.image}}>
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-black/40 backdrop-blur-sm text-[10px] text-cream/80 rounded-full">{c.product}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-cream/40">{c.client}</span>
                  <span className="text-cream/20">·</span>
                  <span className="text-xs text-cream/40">{c.industry}</span>
                </div>
                <h3 className="font-display font-semibold text-sm mb-3 group-hover:text-[#C8FF00] transition-colors">{c.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#C8FF00]">{c.result}</span>
                  <ArrowRight size={14} className="text-cream/30 group-hover:text-[#C8FF00] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-obsidian-2 border border-glass-border rounded-[16px] text-center">
          <h3 className="font-display text-xl font-bold mb-3">Want to be our next success story?</h3>
          <p className="text-sm text-cream/50 mb-6">Join 120+ enterprise companies already using HMorix.</p>
          <Link to="/contact" className="btn-primary inline-flex">Start Your Journey</Link>
        </div>
      </div>
    </div>
  )
}
