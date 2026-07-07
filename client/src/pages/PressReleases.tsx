import { Calendar, ExternalLink } from 'lucide-react'

export default function PressReleases() {
  const releases = [
    { title: 'HMorix Launches AI Agent 2.0 with Multi-Modal Support', date: 'Jul 15, 2024', category: 'Product Launch', excerpt: 'The latest version of HMorix AI Agent introduces multi-modal capabilities, enabling businesses to process text, images, and documents in unified workflows.' },
    { title: 'HMorix Achieves SOC 2 Type II Certification', date: 'Jun 28, 2024', category: 'Security', excerpt: 'HMorix has completed SOC 2 Type II certification, demonstrating our commitment to the highest standards of data security and privacy.' },
    { title: 'HMorix Raises Series A to Accelerate Enterprise AI', date: 'May 10, 2024', category: 'Funding', excerpt: 'HMorix announces successful Series A funding round to expand enterprise AI capabilities and accelerate product development.' },
    { title: 'BillingFlow 2.0: AI-Powered Invoice Processing', date: 'Apr 22, 2024', category: 'Product Launch', excerpt: 'New BillingFlow release features AI-powered invoice generation, smart categorization, and automated reconciliation.' },
    { title: 'HMorix Partners with AWS for Enhanced Cloud Services', date: 'Mar 15, 2024', category: 'Partnership', excerpt: 'Strategic partnership with Amazon Web Services brings enhanced cloud infrastructure and global deployment capabilities to HMorix customers.' },
    { title: 'HMorix Smart Home Division Launches', date: 'Feb 1, 2024', category: 'Company News', excerpt: 'HMorix expands into the smart home market with a comprehensive IoT platform for residential and commercial properties.' },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">Press Releases</span>
        <h1 className="section-title mt-3 mb-6">Latest News</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-16">Official announcements and press releases from HMorix.</p>

        <div className="space-y-6">
          {releases.map((r, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all cursor-pointer group">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 bg-[#C8FF00]/10 text-[#C8FF00] text-[10px] rounded-full font-medium">{r.category}</span>
                    <span className="flex items-center gap-1 text-xs text-cream/30"><Calendar size={12} /> {r.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-[#C8FF00] transition-colors">{r.title}</h3>
                  <p className="text-sm text-cream/50">{r.excerpt}</p>
                </div>
                <ExternalLink size={16} className="text-cream/20 group-hover:text-[#C8FF00] transition-colors flex-shrink-0 mt-2" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-cream/40 mb-4">For media inquiries, please contact:</p>
          <a href="mailto:press@hmorix.com" className="text-[#C8FF00] hover:underline">press@hmorix.com</a>
        </div>
      </div>
    </div>
  )
}
