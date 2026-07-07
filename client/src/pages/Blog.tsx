export default function Blog() {
  const posts = [
    { tag: 'AI', title: 'How AI Agents Are Transforming Enterprise Development', date: 'Jun 20, 2024', read: '8 min' },
    { tag: 'Security', title: 'Zero Trust Architecture: A Complete Implementation Guide', date: 'Jun 15, 2024', read: '12 min' },
    { tag: 'Product', title: 'BillingFlow 2.4: Multi-Currency Support & Tax Automation', date: 'Jun 10, 2024', read: '5 min' },
    { tag: 'Engineering', title: 'Scaling PDF Processing to 1 Million Documents Per Day', date: 'Jun 5, 2024', read: '10 min' },
    { tag: 'Smart Home', title: 'The Future of Connected Living: IoT Trends 2024', date: 'May 28, 2024', read: '7 min' },
    { tag: 'DevOps', title: 'Our Journey to Zero-Downtime Deployments', date: 'May 20, 2024', read: '9 min' },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">Blog</span>
        <h1 className="section-title mt-3 mb-6">Insights & Updates</h1>
        <p className="text-cream/60 mb-16 max-w-lg">Technical deep-dives, product updates, and industry insights from the HMorix team.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="bg-obsidian-2 border border-glass-border rounded-[16px] overflow-hidden hover:border-[rgba(200,255,0,0.2)] hover:-translate-y-1 transition-all cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-obsidian-3 to-obsidian-2 flex items-center justify-center text-4xl opacity-20">📝</div>
              <div className="p-6">
                <span className="inline-block px-2 py-0.5 bg-[#C8FF00]/10 rounded text-[10px] font-mono text-[#C8FF00] mb-3">{post.tag}</span>
                <h3 className="font-display font-semibold text-sm leading-snug mb-3">{post.title}</h3>
                <div className="text-xs text-cream/35">{post.date} · {post.read} read</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
