import { Download, Image, FileText, Palette } from 'lucide-react'

export default function MediaKit() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">Media Kit</span>
        <h1 className="section-title mt-3 mb-6">Brand Assets & Press Resources</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-16">Everything you need to represent HMorix in publications, presentations, and media coverage.</p>

        {/* Brand Colors */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-6">Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Obsidian', hex: '#0D0D0D', text: 'text-cream' },
              { name: 'Cream', hex: '#EAE8E3', text: 'text-obsidian' },
              { name: 'Lime', hex: '#C8FF00', text: 'text-obsidian' },
              { name: 'Obsidian 2', hex: '#141414', text: 'text-cream' },
              { name: 'Cream 2', hex: '#D8D5CE', text: 'text-obsidian' },
            ].map(c => (
              <div key={c.name} className="rounded-[12px] overflow-hidden border border-glass-border">
                <div className={`h-24 ${c.text} flex items-end p-3`} style={{backgroundColor: c.hex}}>
                  <span className="text-xs font-mono">{c.hex}</span>
                </div>
                <div className="p-3 bg-obsidian-2">
                  <span className="text-sm font-medium">{c.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logos */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-6">Logos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Primary Logo - Dark', bg: 'bg-obsidian' },
              { name: 'Primary Logo - Light', bg: 'bg-[#F5F3EF]' },
              { name: 'Icon Only', bg: 'bg-obsidian-3' },
            ].map(l => (
              <div key={l.name} className="border border-glass-border rounded-[16px] overflow-hidden">
                <div className={`h-32 ${l.bg} flex items-center justify-center`}>
                  <div className="flex items-center gap-3 font-display font-bold text-xl">
                    <div className="w-9 h-9 bg-cream flex items-center justify-center text-obsidian text-xs font-bold" style={{clipPath:'polygon(0 0, 78% 0, 100% 22%, 100% 78%, 78% 100%, 0 100%)'}}>HM</div>
                    {l.name !== 'Icon Only' && <span className={l.bg === 'bg-[#F5F3EF]' ? 'text-obsidian' : 'text-cream'}>HMorix</span>}
                  </div>
                </div>
                <div className="p-4 bg-obsidian-2 flex items-center justify-between">
                  <span className="text-sm">{l.name}</span>
                  <button className="flex items-center gap-1 text-xs text-[#C8FF00]"><Download size={12} /> SVG</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-6">Typography</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Space Grotesk', usage: 'Headlines & Display', sample: 'Aa Bb Cc 123', family: 'font-display' },
              { name: 'Inter', usage: 'Body Text', sample: 'Aa Bb Cc 123', family: 'font-body' },
              { name: 'JetBrains Mono', usage: 'Code & Labels', sample: 'Aa Bb Cc 123', family: 'font-mono' },
            ].map(t => (
              <div key={t.name} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <div className={`text-3xl ${t.family} font-bold mb-3`}>{t.sample}</div>
                <h3 className="font-display font-semibold text-sm">{t.name}</h3>
                <p className="text-xs text-cream/40 mt-1">{t.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-6">Download Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Complete Brand Kit', desc: 'Logos, colors, typography, and usage guidelines', size: '12.4 MB', icon: Palette },
              { name: 'Logo Package', desc: 'All logo variations in SVG, PNG, and PDF formats', size: '4.2 MB', icon: Image },
              { name: 'Press Release Template', desc: 'Editable press release template with brand styling', size: '1.8 MB', icon: FileText },
              { name: 'Product Screenshots', desc: 'High-resolution screenshots of all HMorix products', size: '28.6 MB', icon: Image },
            ].map(d => (
              <div key={d.name} className="flex items-center gap-4 p-5 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all cursor-pointer">
                <div className="w-12 h-12 bg-[#C8FF00]/10 rounded-[8px] flex items-center justify-center">
                  <d.icon size={20} className="text-[#C8FF00]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-sm">{d.name}</h3>
                  <p className="text-xs text-cream/40">{d.desc}</p>
                </div>
                <div className="text-right">
                  <button className="text-xs text-[#C8FF00]">Download</button>
                  <div className="text-[10px] text-cream/30 mt-0.5">{d.size}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Guidelines */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <h3 className="font-display text-xl font-bold mb-3">Brand Usage Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-sm font-semibold text-green-400 mb-3">Do</h4>
              <ul className="space-y-2 text-sm text-cream/50">
                <li>• Use the official logo files provided</li>
                <li>• Maintain minimum clear space around the logo</li>
                <li>• Use approved brand colors only</li>
                <li>• Reference HMorix as "HMorix" (capital H, M)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-red-400 mb-3">Don't</h4>
              <ul className="space-y-2 text-sm text-cream/50">
                <li>• Alter the logo proportions or colors</li>
                <li>• Place the logo on busy backgrounds</li>
                <li>• Use the logo smaller than 24px height</li>
                <li>• Combine with other brand marks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
