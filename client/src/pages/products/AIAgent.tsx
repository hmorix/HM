import { Link } from 'react-router-dom'

export default function AIAgent() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-[700px] mb-16">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#C8FF00]/10 border border-[rgba(200,255,0,0.25)] rounded-full w-fit mb-6">
            <span className="w-2 h-2 bg-[#C8FF00] rounded-full animate-pulse" />
            <span className="font-mono text-[0.68rem] text-[#C8FF00]">AI-POWERED</span>
          </div>
          <h1 className="section-title mb-6">HMorix AI Agent</h1>
          <p className="text-lg text-cream/60 leading-relaxed">The most powerful tool in your development stack. Describe what you need and watch as the AI Agent builds it — complete websites, applications, and automations from natural language.</p>
        </div>

        <div className="flex gap-2 flex-wrap mb-12 p-1 bg-obsidian-2 border border-glass-border rounded-[8px] w-fit">
          <Link to="/agent" className="px-4 py-2 text-sm font-medium bg-[#C8FF00]/10 text-[#C8FF00] rounded-[4px]">Overview</Link>
          <Link to="/agent/playground" className="px-4 py-2 text-sm font-medium text-cream/50 hover:text-cream rounded-[4px]">Playground</Link>
        </div>

        {/* Demo */}
        <div className="p-8 bg-obsidian-2 border border-[rgba(200,255,0,0.15)] rounded-[16px] mb-12">
          <div className="font-mono text-sm leading-loose">
            <div className="text-cream/35">// HMorix AI Agent</div>
            <div className="mt-2"><span className="text-green-400">user:</span> <span className="text-cream/80">"Build a SaaS billing dashboard with auth, Stripe integration, and analytics"</span></div>
            <div className="mt-4"><span className="text-[#C8FF00]">agent:</span> Analyzing requirements...</div>
            <div><span className="text-[#C8FF00]">agent:</span> Generating database schema (PostgreSQL)...</div>
            <div><span className="text-[#C8FF00]">agent:</span> Creating API endpoints (12 routes)...</div>
            <div><span className="text-[#C8FF00]">agent:</span> Building React UI components (24 components)...</div>
            <div><span className="text-[#C8FF00]">agent:</span> Integrating Stripe payment gateway...</div>
            <div><span className="text-[#C8FF00]">agent:</span> Adding authentication (JWT + OAuth)...</div>
            <div><span className="text-[#C8FF00]">agent:</span> Writing tests (47 test cases)...</div>
            <div className="text-green-500 mt-4">✓ Project ready in 47 seconds</div>
            <div className="text-cream/35 mt-2">Generated: 24 components, 12 API routes, 8 database tables, 47 tests</div>
          </div>
        </div>

        {/* Capabilities */}
        <h2 className="font-display text-2xl font-bold mb-8">Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            { title: 'Full Stack Generation', desc: 'Generate complete applications with frontend, backend, database, and deployment configuration.' },
            { title: 'Workflow Automation', desc: 'Create complex business workflows with conditional logic, integrations, and scheduling.' },
            { title: 'Code Review & Refactoring', desc: 'Analyze existing codebases, identify issues, and suggest improvements.' },
            { title: 'Data Analysis', desc: 'Process datasets, generate insights, create visualizations, and build reports.' },
            { title: 'API Integration', desc: 'Connect to any API, build middleware, and create data pipelines.' },
            { title: 'Testing & QA', desc: 'Generate comprehensive test suites, perform security audits, and validate code.' },
          ].map((cap, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all">
              <h3 className="font-display font-semibold mb-2">{cap.title}</h3>
              <p className="text-sm text-cream/50">{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/agent/playground" className="btn-primary inline-flex">Try AI Agent Playground →</Link>
        </div>
      </div>
    </div>
  )
}
