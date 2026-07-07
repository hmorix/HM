import { useState } from 'react'
import { Send, Zap } from 'lucide-react'

export default function AIAgentPlayground() {
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const handleGenerate = () => {
    if (!prompt.trim()) return
    setLoading(true)
    setOutput([])
    const steps = [
      'Analyzing requirements...',
      'Generating project structure...',
      'Creating database schema...',
      'Building API endpoints...',
      'Generating UI components...',
      'Adding authentication...',
      'Writing unit tests...',
      '✓ Generation complete! Project ready for deployment.'
    ]
    steps.forEach((step, i) => {
      setTimeout(() => {
        setOutput(prev => [...prev, step])
        if (i === steps.length - 1) setLoading(false)
      }, (i + 1) * 800)
    })
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">AI Agent</span>
        <h1 className="section-title mt-3 mb-6">Playground</h1>
        <p className="text-cream/60 mb-8 max-w-lg">Describe what you want to build and watch the AI Agent generate it in real-time.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input */}
          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
            <h3 className="font-display font-semibold mb-4 flex items-center gap-2"><Zap size={18} className="text-[#C8FF00]" /> Prompt</h3>
            <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="e.g., Build a project management app with task boards, team collaboration, and real-time notifications..." className="w-full h-40 bg-obsidian border border-glass-border rounded-[8px] p-4 text-sm text-cream resize-none outline-none focus:border-[#C8FF00] placeholder:text-cream/30" />
            <div className="flex gap-2 mt-4 flex-wrap">
              {['SaaS Dashboard','E-commerce Store','Blog Platform','Chat Application'].map(eg => (
                <button key={eg} onClick={() => setPrompt(`Build a ${eg.toLowerCase()} with authentication, database, and responsive UI`)} className="px-3 py-1.5 text-xs bg-white/[0.04] border border-glass-border rounded-full text-cream/50 hover:text-[#C8FF00] hover:border-[#C8FF00] transition-all">{eg}</button>
              ))}
            </div>
            <button onClick={handleGenerate} disabled={loading || !prompt.trim()} className="mt-4 w-full py-3 bg-[#C8FF00] text-obsidian font-display font-semibold rounded-[4px] flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all">
              <Send size={16} /> {loading ? 'Generating...' : 'Generate'}
            </button>
          </div>

          {/* Output */}
          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
            <h3 className="font-display font-semibold mb-4">Output</h3>
            <div className="bg-obsidian border border-glass-border rounded-[8px] p-4 h-[320px] overflow-y-auto font-mono text-sm">
              {output.length === 0 ? (
                <div className="text-cream/30 text-center mt-20">Output will appear here...</div>
              ) : (
                <div className="space-y-2">
                  {output.map((line, i) => (
                    <div key={i} className={line.startsWith('✓') ? 'text-green-500' : 'text-[#C8FF00]'}>{line}</div>
                  ))}
                  {loading && <div className="w-2 h-4 bg-[#C8FF00] animate-pulse inline-block" />}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
