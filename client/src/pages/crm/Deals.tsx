import { useState } from 'react'
import SEOHead from '../../components/seo/SEOHead'
import { Plus, Filter, Search, DollarSign } from 'lucide-react'

const stages = [
  { name: 'Lead', color: 'border-blue-500', deals: [
    { id: 1, name: 'Website Redesign', company: 'TechStart Inc', value: '$45,000', owner: 'Sarah', daysOpen: 3, probability: 20 },
    { id: 2, name: 'Mobile App MVP', company: 'FitPro', value: '$65,000', owner: 'Alex', daysOpen: 1, probability: 15 },
  ]},
  { name: 'Qualification', color: 'border-purple-500', deals: [
    { id: 3, name: 'Smart Home B2B', company: 'GreenLeaf', value: '$150,000', owner: 'David', daysOpen: 5, probability: 30 },
    { id: 4, name: 'SEO Campaign', company: 'LocalBiz', value: '$24,000', owner: 'Lisa', daysOpen: 4, probability: 35 },
    { id: 5, name: 'AI Chatbot', company: 'RetailMax', value: '$85,000', owner: 'Mike', daysOpen: 7, probability: 25 },
  ]},
  { name: 'Discovery', color: 'border-yellow-500', deals: [
    { id: 6, name: 'AI Agent Deploy', company: 'Quantum Labs', value: '$320,000', owner: 'Alex', daysOpen: 2, probability: 40 },
    { id: 7, name: 'E-commerce Platform', company: 'FashionHub', value: '$120,000', owner: 'Sarah', daysOpen: 8, probability: 45 },
  ]},
  { name: 'Proposal', color: 'border-orange-500', deals: [
    { id: 8, name: 'Platform Migration', company: 'NovaTech', value: '$180,000', owner: 'Mike', daysOpen: 7, probability: 60 },
    { id: 9, name: 'Ad Automation', company: 'RocketScale', value: '$95,000', owner: 'David', daysOpen: 3, probability: 65 },
  ]},
  { name: 'Negotiation', color: 'border-pink-500', deals: [
    { id: 10, name: 'Enterprise License', company: 'Meridian Corp', value: '$245,000', owner: 'Sarah', daysOpen: 3, probability: 85 },
    { id: 11, name: 'PDF Automation', company: 'Atlas Financial', value: '$500,000', owner: 'Alex', daysOpen: 5, probability: 80 },
  ]},
  { name: 'Closed Won', color: 'border-green-500', deals: [
    { id: 12, name: 'BillingFlow Integ.', company: 'FastCart', value: '$95,000', owner: 'Lisa', daysOpen: 0, probability: 100 },
  ]},
]

export default function Deals() {
  const [view, setView] = useState<'kanban' | 'list'>('kanban')
  const [search, setSearch] = useState('')

  const totalValue = stages.reduce((sum, s) => sum + s.deals.reduce((ds, d) => ds + parseInt(d.value.replace(/[$,]/g, '')), 0), 0)

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead title="CRM Deals & Pipeline" description="Visual sales pipeline with Kanban board view. Track deals through stages from lead to close." keywords="sales pipeline, deal tracking, Kanban CRM, sales stages, deal management, revenue pipeline" canonical="/crm/deals" />
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold">Deals Pipeline</h1>
            <p className="text-cream/50 text-sm mt-1">Total pipeline value: <span className="text-[#C8FF00] font-semibold">${(totalValue / 1000000).toFixed(1)}M</span></p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex border border-glass-border rounded-[6px] overflow-hidden">
              <button onClick={() => setView('kanban')} className={`px-3 py-1.5 text-xs ${view === 'kanban' ? 'bg-[#C8FF00] text-obsidian' : 'text-cream/50'}`}>Kanban</button>
              <button onClick={() => setView('list')} className={`px-3 py-1.5 text-xs ${view === 'list' ? 'bg-[#C8FF00] text-obsidian' : 'text-cream/50'}`}>List</button>
            </div>
            <button className="btn-primary text-sm flex items-center gap-2"><Plus size={14} /> New Deal</button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex gap-4 overflow-x-auto pb-4">
          {stages.map((stage, si) => (
            <div key={si} className="min-w-[280px] flex-shrink-0">
              <div className={`border-t-2 ${stage.color} bg-obsidian-2 border border-glass-border rounded-[12px] p-4`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{stage.name}</span>
                    <span className="w-5 h-5 bg-white/[0.06] rounded-full text-[10px] flex items-center justify-center">{stage.deals.length}</span>
                  </div>
                  <span className="text-[10px] text-cream/30">${stage.deals.reduce((s, d) => s + parseInt(d.value.replace(/[$,]/g, '')), 0).toLocaleString()}</span>
                </div>
                <div className="space-y-3">
                  {stage.deals.map(deal => (
                    <div key={deal.id} className="p-3 bg-obsidian border border-glass-border rounded-[8px] hover:border-[#C8FF00]/30 transition-all cursor-pointer">
                      <div className="text-sm font-medium mb-1">{deal.name}</div>
                      <div className="text-[10px] text-cream/30 mb-2">{deal.company}</div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-xs text-[#C8FF00]"><DollarSign size={10} />{deal.value}</span>
                        <span className="text-[10px] text-cream/30">{deal.daysOpen}d</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="w-6 h-6 bg-obsidian-3 rounded-full flex items-center justify-center text-[8px] font-bold">{deal.owner[0]}</div>
                        <div className="flex items-center gap-1">
                          <div className="w-16 h-1.5 bg-obsidian-3 rounded-full overflow-hidden">
                            <div className="h-full bg-[#C8FF00] rounded-full" style={{ width: `${deal.probability}%` }} />
                          </div>
                          <span className="text-[9px] text-cream/30">{deal.probability}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-3 py-2 border border-dashed border-glass-border rounded-[6px] text-xs text-cream/30 hover:text-cream hover:border-cream/30 transition-all">+ Add Deal</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
