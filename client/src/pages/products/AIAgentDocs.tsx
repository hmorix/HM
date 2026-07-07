import { Book, Code, Zap, FileText, Terminal } from 'lucide-react'

export default function AIAgentDocs() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">AI Agent / Documentation</span>
        <h1 className="section-title mt-3 mb-6">AI Agent Documentation</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-12">Everything you need to build, deploy, and manage AI agents.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Book, title: 'Quick Start', desc: 'Get your first agent running in 5 minutes', link: '#' },
            { icon: Code, title: 'API Reference', desc: 'Complete REST API documentation', link: '#' },
            { icon: Zap, title: 'Workflows', desc: 'Chain agents into complex workflows', link: '#' },
            { icon: FileText, title: 'Templates', desc: 'Pre-built agent templates for common tasks', link: '#' },
            { icon: Terminal, title: 'SDK Guide', desc: 'TypeScript and Python SDK documentation', link: '#' },
            { icon: Book, title: 'Best Practices', desc: 'Tips for production-grade agent deployments', link: '#' },
          ].map((d, i) => (
            <div key={i} className="p-5 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all cursor-pointer">
              <d.icon size={20} className="text-[#C8FF00] mb-3" />
              <h3 className="font-display font-semibold text-sm mb-1">{d.title}</h3>
              <p className="text-xs text-cream/40">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <h3 className="font-display font-semibold mb-4">Quick Start Example</h3>
          <pre className="p-4 bg-obsidian rounded-[8px] text-xs font-mono text-cream/60 overflow-x-auto">{`import { HMorixAgent } from '@hmorix/agent-sdk';

const agent = new HMorixAgent({
  apiKey: process.env.HMORIX_API_KEY,
  model: 'hmorix-agent-v2',
});

// Create a task
const result = await agent.run({
  task: 'Generate a landing page for a SaaS product',
  context: {
    company: 'Acme Corp',
    product: 'Project Management Tool',
    style: 'modern, minimal',
  },
  output: 'html',
});

console.log(result.content); // Generated HTML
console.log(result.tokens_used); // 1,247
console.log(result.duration_ms); // 3,421`}</pre>
        </div>
      </div>
    </div>
  )
}
