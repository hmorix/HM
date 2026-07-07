import { FileText, Download, Clock } from 'lucide-react'

export default function Whitepapers() {
  const papers = [
    { title: 'The Future of Enterprise AI Automation', desc: 'How AI agents are transforming business operations across industries.', pages: 42, readTime: '25 min', category: 'AI & Automation', date: 'Jun 2024' },
    { title: 'Zero-Trust Security Architecture for SaaS', desc: 'A comprehensive guide to implementing zero-trust security in modern cloud applications.', pages: 38, readTime: '20 min', category: 'Security', date: 'May 2024' },
    { title: 'Intelligent Document Processing at Scale', desc: 'Best practices for automating document workflows with AI-powered extraction.', pages: 28, readTime: '15 min', category: 'PDF Automation', date: 'Apr 2024' },
    { title: 'Building Enterprise Billing Systems', desc: 'Architecture patterns for scalable, compliant billing and invoicing platforms.', pages: 35, readTime: '18 min', category: 'BillingFlow', date: 'Mar 2024' },
    { title: 'Smart Home IoT Security Standards', desc: 'Security considerations and best practices for connected home devices.', pages: 24, readTime: '12 min', category: 'Smart Home', date: 'Feb 2024' },
    { title: 'Cloud-Native Architecture Patterns', desc: 'Modern approaches to building resilient, scalable enterprise applications.', pages: 46, readTime: '28 min', category: 'Architecture', date: 'Jan 2024' },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">Whitepapers</span>
        <h1 className="section-title mt-3 mb-6">Technical deep dives</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-16">In-depth research and technical guides from our engineering team. Free to download.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {papers.map((p, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-14 bg-[#C8FF00]/10 rounded-[4px] flex items-center justify-center flex-shrink-0">
                  <FileText size={20} className="text-[#C8FF00]" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] text-[#C8FF00] font-mono uppercase">{p.category}</span>
                  <h3 className="font-display font-semibold mt-1 mb-2 group-hover:text-[#C8FF00] transition-colors">{p.title}</h3>
                  <p className="text-sm text-cream/40 mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-[10px] text-cream/30">
                      <span>{p.pages} pages</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> {p.readTime}</span>
                      <span>{p.date}</span>
                    </div>
                    <button className="flex items-center gap-1.5 text-xs text-[#C8FF00] hover:underline">
                      <Download size={12} /> Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
