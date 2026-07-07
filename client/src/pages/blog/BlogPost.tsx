import { useParams, Link } from 'react-router-dom'
import { Clock, User, Tag, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react'

const postsContent: Record<string, any> = {
  'building-ai-agents-at-scale': {
    title: 'Building AI Agents at Scale: Lessons from 10,000 Deployments',
    author: 'Hamza Morix', role: 'CEO & Founder', date: 'Jun 28, 2024', readTime: '12 min', category: 'Engineering',
    content: [
      { type: 'paragraph', text: 'When we first launched our AI Agent platform in 2023, we had no idea it would scale to over 10,000 active deployments within a year. The journey from prototype to enterprise-grade infrastructure taught us invaluable lessons about building reliable, scalable AI systems.' },
      { type: 'heading', text: 'The Architecture Challenge' },
      { type: 'paragraph', text: 'Traditional request-response architectures don\'t work for AI agents. Agents need to maintain state, handle long-running tasks, and coordinate between multiple services. We built a custom orchestration layer using event-driven architecture with Apache Kafka for message passing and Redis for state management.' },
      { type: 'code', text: '// Agent orchestration example\nconst agent = new HMorixAgent({\n  model: "hmorix-gpt-4",\n  memory: "persistent",\n  tools: ["web-search", "code-exec", "file-ops"],\n  maxSteps: 50,\n  timeout: 300000\n});\n\nawait agent.execute({\n  task: "Analyze Q3 sales data and generate report",\n  context: userContext,\n  callbacks: { onStep, onComplete, onError }\n});' },
      { type: 'heading', text: 'Scaling Challenges' },
      { type: 'paragraph', text: 'At 1,000 concurrent agents, we hit our first major bottleneck: GPU memory. Each agent instance required dedicated inference capacity, and cold starts were killing user experience. Our solution was a multi-tier caching system with pre-warmed model pools.' },
      { type: 'paragraph', text: 'We implemented speculative execution — predicting the next likely tool call and pre-loading resources before the agent requests them. This reduced average step latency from 2.3s to 0.8s.' },
      { type: 'heading', text: 'Reliability at Enterprise Scale' },
      { type: 'paragraph', text: 'Enterprise clients demand 99.99% uptime. We achieved this through: multi-region deployment with automatic failover, circuit breakers on all external service calls, graceful degradation when GPU capacity is constrained, and comprehensive observability with distributed tracing.' },
      { type: 'heading', text: 'Key Takeaways' },
      { type: 'paragraph', text: '1. Design for failure from day one. Every component should be independently deployable and recoverable.\n2. Invest heavily in observability. You can\'t fix what you can\'t see.\n3. Cache aggressively but invalidate carefully.\n4. Build escape hatches for every automated process.\n5. Test with chaos engineering — we run weekly failure injection exercises.' },
    ]
  },
  'introducing-billingflow-v3': {
    title: 'Introducing BillingFlow v3: The Future of Automated Invoicing',
    author: 'Sarah Chen', role: 'VP of Product', date: 'Jun 25, 2024', readTime: '8 min', category: 'Product Updates',
    content: [
      { type: 'paragraph', text: 'Today we\'re excited to announce BillingFlow v3 — a ground-up rewrite that brings real-time sync, multi-currency support, AI-powered anomaly detection, and a completely redesigned API to our billing automation platform.' },
      { type: 'heading', text: 'What\'s New in v3' },
      { type: 'paragraph', text: 'BillingFlow v3 represents 18 months of engineering effort, driven by feedback from over 2,000 enterprise customers. Here are the highlights:' },
      { type: 'paragraph', text: '• Real-time sync: Invoices now sync across all connected systems within 200ms\n• Multi-currency: Native support for 135 currencies with automatic FX rate updates\n• AI Anomaly Detection: Automatically flags unusual billing patterns before they become problems\n• Webhook 2.0: Guaranteed delivery with automatic retries and dead letter queues\n• GraphQL API: In addition to REST, we now offer a full GraphQL API for complex queries' },
      { type: 'code', text: '// BillingFlow v3 API example\nconst invoice = await billingflow.invoices.create({\n  customer: "cus_meridian_001",\n  currency: "USD",\n  items: [\n    { description: "Enterprise License", amount: 4999, quantity: 1 },\n    { description: "API Calls (overage)", amount: 0.002, quantity: 15420 }\n  ],\n  auto_send: true,\n  payment_terms: 30,\n  ai_review: true // Enable AI anomaly check\n});' },
      { type: 'heading', text: 'Migration Path' },
      { type: 'paragraph', text: 'We\'ve built a zero-downtime migration tool that handles the transition from v2 to v3 automatically. Most customers can migrate in under 5 minutes with no code changes required for basic usage.' },
    ]
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = postsContent[slug || '']

  if (!post) {
    return (
      <div className="pt-32 pb-20 min-h-screen text-center">
        <h1 className="font-display text-2xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-[#C8FF00] hover:underline">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[800px] mx-auto px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-cream/40 hover:text-[#C8FF00] mb-8 transition-colors">
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        <span className="inline-block px-2 py-0.5 bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-mono rounded mb-4">{post.category}</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-glass-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-obsidian-3 rounded-full flex items-center justify-center text-xs font-bold">{post.author.split(' ').map((n:string) => n[0]).join('')}</div>
            <div>
              <div className="text-sm font-medium">{post.author}</div>
              <div className="text-xs text-cream/30">{post.role}</div>
            </div>
          </div>
          <span className="flex items-center gap-1 text-xs text-cream/30"><Clock size={12} />{post.readTime}</span>
          <span className="text-xs text-cream/30">{post.date}</span>
          <div className="ml-auto flex items-center gap-2">
            <button className="w-8 h-8 border border-glass-border rounded-[4px] flex items-center justify-center text-cream/40 hover:text-[#C8FF00] hover:border-[#C8FF00] transition-all"><Share2 size={14} /></button>
            <button className="w-8 h-8 border border-glass-border rounded-[4px] flex items-center justify-center text-cream/40 hover:text-[#C8FF00] hover:border-[#C8FF00] transition-all"><Bookmark size={14} /></button>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          {post.content.map((block: any, i: number) => {
            if (block.type === 'heading') return <h2 key={i} className="font-display text-xl font-bold mt-10 mb-4">{block.text}</h2>
            if (block.type === 'code') return <pre key={i} className="bg-obsidian-2 border border-glass-border rounded-[8px] p-4 overflow-x-auto my-6"><code className="text-xs text-cream/70 font-mono whitespace-pre">{block.text}</code></pre>
            return <p key={i} className="text-cream/60 leading-relaxed mb-4 whitespace-pre-line">{block.text}</p>
          })}
        </article>

        {/* Engagement */}
        <div className="mt-12 pt-8 border-t border-glass-border flex items-center justify-between">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-glass-border rounded-[8px] text-sm text-cream/50 hover:text-[#C8FF00] hover:border-[#C8FF00] transition-all">
            <ThumbsUp size={14} /> Helpful · 247
          </button>
          <div className="flex items-center gap-2 text-xs text-cream/30">
            <span>Share:</span>
            <button className="px-2 py-1 bg-white/[0.04] rounded hover:text-cream">Twitter</button>
            <button className="px-2 py-1 bg-white/[0.04] rounded hover:text-cream">LinkedIn</button>
            <button className="px-2 py-1 bg-white/[0.04] rounded hover:text-cream">Copy Link</button>
          </div>
        </div>
      </div>
    </div>
  )
}
