export default function Investors() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">Investors</span>
        <h1 className="section-title mt-3 mb-6">Investor Relations</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-16">HMorix is building the next generation of enterprise technology. Here's how we're growing.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          {[{num:'$12M',label:'ARR'},{num:'140%',label:'YoY Growth'},{num:'120+',label:'Enterprise Clients'},{num:'98%',label:'Net Retention'}].map((s,i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] text-center">
              <div className="font-display text-3xl font-bold text-[#C8FF00]">{s.num}</div>
              <div className="text-sm text-cream/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold mb-6">Growth Highlights</h2>
        <div className="space-y-4 mb-16">
          {[
            { year: '2024', milestone: 'Series A funding, expanded to 120+ enterprise clients' },
            { year: '2023', milestone: 'Launched BillingFlow and AI Agent products, reached $5M ARR' },
            { year: '2022', milestone: 'Founded HMorix, first enterprise contracts signed' },
          ].map((m, i) => (
            <div key={i} className="flex items-start gap-6 p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <span className="font-mono text-[#C8FF00] font-bold">{m.year}</span>
              <span className="text-cream/60">{m.milestone}</span>
            </div>
          ))}
        </div>

        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] text-center">
          <h3 className="font-display text-xl font-bold mb-3">Interested in Investing?</h3>
          <p className="text-sm text-cream/50 mb-6">We're always open to conversations with strategic investors.</p>
          <button className="px-8 py-3 bg-[#C8FF00] text-obsidian font-display font-semibold rounded-[4px] hover:opacity-90 transition-all">Contact Investor Relations</button>
        </div>
      </div>
    </div>
  )
}
