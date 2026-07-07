import { ArrowRight, Zap, GitBranch } from 'lucide-react'

export default function AIAgentWorkflows() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">AI Agent / Workflows</span>
        <h1 className="section-title mt-3 mb-6">Workflow Builder</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-12">Chain multiple agents together to create powerful automation workflows. Visual builder with drag-and-drop interface.</p>

        {/* Example Workflow */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-8">
          <h3 className="font-display font-semibold mb-6">Example: Invoice Processing Workflow</h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[
              { step: 'Email Trigger', desc: 'Receive invoice email' },
              { step: 'PDF Extract', desc: 'Extract invoice data' },
              { step: 'AI Validate', desc: 'Verify amounts & details' },
              { step: 'BillingFlow', desc: 'Create invoice record' },
              { step: 'Notify', desc: 'Send confirmation' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="p-4 bg-white/[0.04] border border-glass-border rounded-[12px] text-center min-w-[120px]">
                  <div className="text-xs font-semibold text-[#C8FF00] mb-1">{s.step}</div>
                  <div className="text-[10px] text-cream/40">{s.desc}</div>
                </div>
                {i < 4 && <ArrowRight size={16} className="text-cream/20" />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'Content Pipeline', desc: 'Research → Draft → Edit → Publish', steps: 4, runs: '2.3k/week' },
            { name: 'Customer Onboarding', desc: 'Signup → Verify → Setup → Welcome', steps: 5, runs: '890/week' },
            { name: 'Code Review', desc: 'PR → Analyze → Comment → Approve', steps: 4, runs: '1.5k/week' },
            { name: 'Data ETL', desc: 'Extract → Transform → Validate → Load', steps: 4, runs: '4.1k/week' },
            { name: 'Support Triage', desc: 'Receive → Classify → Route → Respond', steps: 4, runs: '3.2k/week' },
            { name: 'Report Generation', desc: 'Query → Analyze → Format → Deliver', steps: 4, runs: '1.8k/week' },
          ].map((w, i) => (
            <div key={i} className="p-5 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <GitBranch size={16} className="text-[#C8FF00]" />
                <h3 className="font-display font-semibold text-sm">{w.name}</h3>
              </div>
              <p className="text-xs text-cream/40 mb-3">{w.desc}</p>
              <div className="flex items-center justify-between text-[10px] text-cream/30">
                <span>{w.steps} steps</span>
                <span>{w.runs}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
