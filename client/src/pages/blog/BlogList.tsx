import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, User, Tag, ArrowRight, Search } from 'lucide-react'

const categories = ['All', 'Engineering', 'AI & ML', 'Product Updates', 'Security', 'Company', 'Tutorials', 'Case Studies']

const posts = [
  { id: 'building-ai-agents-at-scale', title: 'Building AI Agents at Scale: Lessons from 10,000 Deployments', excerpt: 'How we architected our AI agent platform to handle enterprise-grade workloads with sub-second response times and 99.99% reliability.', category: 'Engineering', author: 'Hamza Morix', date: 'Jun 28, 2024', readTime: '12 min', featured: true },
  { id: 'introducing-billingflow-v3', title: 'Introducing BillingFlow v3: The Future of Automated Invoicing', excerpt: 'A complete rewrite with real-time sync, multi-currency support, and AI-powered anomaly detection.', category: 'Product Updates', author: 'Sarah Chen', date: 'Jun 25, 2024', readTime: '8 min', featured: true },
  { id: 'zero-trust-architecture', title: 'Implementing Zero-Trust Architecture in Enterprise SaaS', excerpt: 'Our journey to implementing zero-trust security across all HMorix services, reducing attack surface by 94%.', category: 'Security', author: 'Mike Johnson', date: 'Jun 22, 2024', readTime: '15 min', featured: false },
  { id: 'pdf-extraction-ml-pipeline', title: 'How Our ML Pipeline Achieves 99.2% PDF Extraction Accuracy', excerpt: 'Deep dive into the transformer-based models powering our document intelligence engine.', category: 'AI & ML', author: 'Dr. Emily Park', date: 'Jun 20, 2024', readTime: '18 min', featured: false },
  { id: 'scaling-to-million-users', title: 'Scaling HMorix Cloud to 1 Million Users', excerpt: 'Infrastructure decisions, database sharding strategies, and edge computing that made it possible.', category: 'Engineering', author: 'Alex Rivera', date: 'Jun 18, 2024', readTime: '14 min', featured: false },
  { id: 'smart-home-iot-security', title: 'IoT Security Best Practices for Smart Home Systems', excerpt: 'How we secure millions of connected devices with end-to-end encryption and firmware validation.', category: 'Security', author: 'James Wu', date: 'Jun 15, 2024', readTime: '10 min', featured: false },
  { id: 'react-performance-optimization', title: 'React Performance: How We Cut Load Times by 60%', excerpt: 'Code splitting, lazy loading, and virtual scrolling techniques that transformed our dashboard performance.', category: 'Tutorials', author: 'Lisa Martinez', date: 'Jun 12, 2024', readTime: '11 min', featured: false },
  { id: 'series-b-announcement', title: 'HMorix Raises $42M Series B to Expand AI Platform', excerpt: 'We\'re thrilled to announce our Series B funding led by Sequoia Capital to accelerate our enterprise AI vision.', category: 'Company', author: 'Hamza Morix', date: 'Jun 10, 2024', readTime: '5 min', featured: false },
  { id: 'workflow-automation-guide', title: 'Complete Guide to Workflow Automation with HMorix Agent', excerpt: 'Step-by-step tutorial on building complex multi-step workflows with conditional logic and error handling.', category: 'Tutorials', author: 'David Kim', date: 'Jun 8, 2024', readTime: '20 min', featured: false },
  { id: 'enterprise-case-meridian', title: 'How Meridian Corp Saved $2.4M with BillingFlow', excerpt: 'A detailed look at how one of our enterprise clients transformed their billing operations.', category: 'Case Studies', author: 'Sarah Chen', date: 'Jun 5, 2024', readTime: '9 min', featured: false },
  { id: 'kubernetes-deployment-patterns', title: 'Advanced Kubernetes Deployment Patterns for AI Workloads', excerpt: 'GPU scheduling, model serving, and auto-scaling strategies for production ML systems.', category: 'Engineering', author: 'Alex Rivera', date: 'Jun 3, 2024', readTime: '16 min', featured: false },
  { id: 'gdpr-compliance-automation', title: 'Automating GDPR Compliance with AI-Powered Data Discovery', excerpt: 'How our compliance engine automatically identifies, classifies, and manages personal data across systems.', category: 'Security', author: 'Mike Johnson', date: 'Jun 1, 2024', readTime: '13 min', featured: false },
]

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = posts.filter(p => {
    const matchCategory = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  const featured = posts.filter(p => p.featured)

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-mono rounded-full mb-4">BLOG</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Engineering & Insights</h1>
          <p className="text-cream/50 max-w-[600px] mx-auto">Technical deep-dives, product updates, and insights from the team building enterprise AI infrastructure.</p>
        </div>

        {/* Search */}
        <div className="max-w-[500px] mx-auto mb-8">
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/30" />
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search articles..." className="w-full pl-10 pr-4 py-3 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${activeCategory === cat ? 'bg-[#C8FF00] text-obsidian' : 'bg-white/[0.04] text-cream/50 hover:text-cream hover:bg-white/[0.08]'}`}>{cat}</button>
          ))}
        </div>

        {/* Featured Posts */}
        {activeCategory === 'All' && searchQuery === '' && (
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featured.map(post => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group p-8 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[#C8FF00]/30 transition-all">
                <span className="inline-block px-2 py-0.5 bg-[#C8FF00]/10 text-[#C8FF00] text-[10px] font-mono rounded mb-4">FEATURED</span>
                <h2 className="font-display text-xl font-bold mb-3 group-hover:text-[#C8FF00] transition-colors">{post.title}</h2>
                <p className="text-sm text-cream/40 mb-6 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-cream/30">
                  <span className="flex items-center gap-1"><User size={12} />{post.author}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                  <span className="flex items-center gap-1"><Tag size={12} />{post.category}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* All Posts */}
        <div className="space-y-4">
          {filtered.map(post => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group flex items-center gap-6 p-6 bg-obsidian-2 border border-glass-border rounded-[12px] hover:border-[#C8FF00]/30 transition-all">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-0.5 bg-white/[0.06] text-cream/50 text-[10px] font-mono rounded">{post.category}</span>
                  <span className="text-[10px] text-cream/30">{post.date}</span>
                </div>
                <h3 className="font-display font-semibold mb-1 group-hover:text-[#C8FF00] transition-colors">{post.title}</h3>
                <p className="text-sm text-cream/35 line-clamp-1">{post.excerpt}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-cream/25">
                  <span>{post.author}</span>
                  <span>{post.readTime} read</span>
                </div>
              </div>
              <ArrowRight size={16} className="text-cream/20 group-hover:text-[#C8FF00] transition-colors" />
            </Link>
          ))}
        </div>

        {filtered.length === 0 && <div className="text-center py-16 text-cream/30">No articles found matching your criteria.</div>}
      </div>
    </div>
  )
}
