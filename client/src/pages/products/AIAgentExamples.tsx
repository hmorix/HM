import { Play, ExternalLink } from 'lucide-react'

export default function AIAgentExamples() {
  const examples = [
    { title: 'Build a Landing Page', input: '"Create a modern SaaS landing page for a project management tool"', output: 'Full HTML/CSS landing page with hero, features, pricing, and CTA sections', time: '4.2s' },
    { title: 'Summarize a Research Paper', input: '"Summarize this 40-page research paper on transformer architectures"', output: 'Structured summary with key findings, methodology, and conclusions', time: '2.8s' },
    { title: 'Generate API Documentation', input: '"Document this Express.js REST API with all endpoints"', output: 'Complete OpenAPI spec with descriptions, parameters, and examples', time: '3.5s' },
    { title: 'Create Email Campaign', input: '"Write a 5-email onboarding sequence for a B2B SaaS product"', output: '5 personalized emails with subject lines, body, and CTAs', time: '5.1s' },
    { title: 'Analyze Sales Data', input: '"Analyze Q3 sales data and identify trends"', output: 'Report with charts, top performers, growth areas, and recommendations', time: '6.3s' },
    { title: 'Code Refactoring', input: '"Refactor this React component to use hooks and TypeScript"', output: 'Refactored code with type definitions, custom hooks, and tests', time: '3.9s' },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">AI Agent / Examples</span>
        <h1 className="section-title mt-3 mb-6">Real Examples</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-12">See what HMorix AI Agent can do with real input/output examples.</p>

        <div className="space-y-6">
          {examples.map((e, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold">{e.title}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-cream/30">{e.time}</span>
                  <button className="flex items-center gap-1 text-xs text-[#C8FF00]"><Play size={12} /> Try it</button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-obsidian rounded-[8px]">
                  <div className="text-[10px] text-cream/30 mb-2 font-mono">INPUT</div>
                  <p className="text-sm text-cream/70 font-mono">{e.input}</p>
                </div>
                <div className="p-4 bg-obsidian rounded-[8px]">
                  <div className="text-[10px] text-[#C8FF00] mb-2 font-mono">OUTPUT</div>
                  <p className="text-sm text-cream/70">{e.output}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
