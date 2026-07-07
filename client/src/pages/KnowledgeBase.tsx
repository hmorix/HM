import { Search, Book, FileText, Video, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function KnowledgeBase() {
  const [search, setSearch] = useState('')

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-12">
          <span className="label-mono">Knowledge Base</span>
          <h1 className="section-title mt-3 mb-6">How can we help?</h1>
          <div className="max-w-lg mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/30" />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles, guides, and tutorials..." className="w-full pl-12 pr-4 py-4 bg-obsidian-2 border border-glass-border rounded-[12px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Book, title: 'Getting Started', count: '12 articles', desc: 'Setup guides and onboarding' },
            { icon: FileText, title: 'API Reference', count: '48 articles', desc: 'Complete API documentation' },
            { icon: Video, title: 'Tutorials', count: '24 videos', desc: 'Step-by-step walkthroughs' },
            { icon: MessageCircle, title: 'FAQ', count: '36 articles', desc: 'Common questions answered' },
          ].map((cat, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all cursor-pointer text-center">
              <cat.icon size={28} className="text-[#C8FF00] mx-auto mb-3" />
              <h3 className="font-display font-semibold mb-1">{cat.title}</h3>
              <p className="text-xs text-cream/40 mb-1">{cat.count}</p>
              <p className="text-xs text-cream/30">{cat.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold mb-6">Popular Articles</h2>
        <div className="space-y-3">
          {[
            { title: 'How to set up BillingFlow for your business', category: 'Getting Started', views: '2.4k' },
            { title: 'Integrating AI Agent with your existing workflow', category: 'Tutorials', views: '1.8k' },
            { title: 'Understanding API rate limits and quotas', category: 'API Reference', views: '1.5k' },
            { title: 'Setting up webhooks for real-time notifications', category: 'API Reference', views: '1.2k' },
            { title: 'Smart Home device compatibility guide', category: 'Getting Started', views: '980' },
            { title: 'Troubleshooting PDF processing errors', category: 'FAQ', views: '870' },
          ].map((article, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-obsidian-2 border border-glass-border rounded-[12px] hover:border-[rgba(200,255,0,0.2)] transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <FileText size={16} className="text-cream/30" />
                <div>
                  <h3 className="text-sm font-medium">{article.title}</h3>
                  <span className="text-xs text-cream/30">{article.category}</span>
                </div>
              </div>
              <span className="text-xs text-cream/30">{article.views} views</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
