import { Zap, Globe, FileText, Mail, Code, BarChart3 } from 'lucide-react'

export default function AIAgentTemplates() {
  const templates = [
    { icon: Globe, name: 'Website Generator', desc: 'Generate complete websites from text descriptions', uses: '12.4k', category: 'Content' },
    { icon: FileText, name: 'Document Summarizer', desc: 'Summarize long documents into key points', uses: '8.9k', category: 'Analysis' },
    { icon: Mail, name: 'Email Composer', desc: 'Draft professional emails from brief prompts', uses: '15.2k', category: 'Communication' },
    { icon: Code, name: 'Code Generator', desc: 'Generate code from natural language descriptions', uses: '21.3k', category: 'Development' },
    { icon: BarChart3, name: 'Data Analyst', desc: 'Analyze datasets and generate insights', uses: '6.7k', category: 'Analysis' },
    { icon: Zap, name: 'Workflow Automator', desc: 'Create multi-step automation workflows', uses: '4.2k', category: 'Automation' },
    { icon: FileText, name: 'Report Generator', desc: 'Generate formatted reports from raw data', uses: '9.1k', category: 'Content' },
    { icon: Globe, name: 'SEO Optimizer', desc: 'Analyze and optimize content for search engines', uses: '7.8k', category: 'Marketing' },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">AI Agent / Templates</span>
        <h1 className="section-title mt-3 mb-6">Agent Templates</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-12">Pre-built agent templates for common tasks. Deploy in one click or customize to your needs.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {templates.map((t, i) => (
            <div key={i} className="p-5 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-3">
                <t.icon size={20} className="text-[#C8FF00]" />
                <span className="text-[10px] text-cream/30">{t.uses} uses</span>
              </div>
              <h3 className="font-display font-semibold text-sm mb-1 group-hover:text-[#C8FF00] transition-colors">{t.name}</h3>
              <p className="text-xs text-cream/40 mb-3">{t.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] px-2 py-0.5 bg-white/[0.04] rounded-full text-cream/30">{t.category}</span>
                <button className="text-xs text-[#C8FF00]">Use →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
