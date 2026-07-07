import { useState } from 'react'
import { Globe, FileText, Receipt, GitBranch, MessageCircle } from 'lucide-react'

const demos = [
  { id: 'website', icon: Globe, title: 'Website Generator', desc: 'Generate complete websites from a text description' },
  { id: 'pdf', icon: FileText, title: 'PDF Automation', desc: 'Extract data from uploaded PDF documents' },
  { id: 'invoice', icon: Receipt, title: 'Invoice Generator', desc: 'Create professional invoices instantly' },
  { id: 'workflow', icon: GitBranch, title: 'Workflow Builder', desc: 'Design automated business workflows' },
  { id: 'chat', icon: MessageCircle, title: 'Chat Assistant', desc: 'AI-powered conversational assistant' },
]

export default function Playground() {
  const [activeDemo, setActiveDemo] = useState('website')
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRun = () => {
    if (!input.trim()) return
    setLoading(true)
    setResult('')
    setTimeout(() => {
      const results: Record<string, string> = {
        website: '✓ Website generated!\n\nPages: Home, About, Services, Contact\nFramework: React + TypeScript\nStyling: Tailwind CSS\nDeployment: Ready for Vercel\n\nPreview URL: https://preview.hmorix.dev/abc123',
        pdf: '✓ Document processed!\n\nExtracted Fields:\n- Invoice Number: INV-2024-0847\n- Date: June 15, 2024\n- Vendor: Acme Corporation\n- Total: $4,200.00\n- Tax: $378.00\n- Due Date: July 15, 2024\n\nConfidence: 99.2%',
        invoice: '✓ Invoice created!\n\nInvoice #: HMX-2024-0156\nClient: Your Company\nAmount: $2,500.00\nDue: 30 days\n\nPDF generated and ready for download.\nPayment link: https://pay.hmorix.com/inv_abc123',
        workflow: '✓ Workflow created!\n\nSteps:\n1. Trigger: New email received\n2. Filter: Contains "invoice"\n3. Extract: PDF attachment\n4. Process: Extract data fields\n5. Action: Create entry in database\n6. Notify: Send Slack message\n\nStatus: Active | Runs: Automatic',
        chat: 'Hello! I\'m the HMorix AI Assistant.\n\nI can help you with:\n• Product information\n• Technical documentation\n• Pricing questions\n• Integration support\n• Demo scheduling\n\nHow can I assist you today?',
      }
      setResult(results[activeDemo] || 'Demo complete!')
      setLoading(false)
    }, 1500)
  }

  const placeholders: Record<string, string> = {
    website: 'Describe the website you want to build...',
    pdf: 'Describe what data to extract from your PDF...',
    invoice: 'Enter invoice details (client, amount, items)...',
    workflow: 'Describe the workflow you want to automate...',
    chat: 'Ask me anything about HMorix...',
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-[700px] mb-12">
          <span className="label-mono">AI Playground</span>
          <h1 className="section-title mt-3 mb-6">Try before you buy</h1>
          <p className="text-lg text-cream/60 leading-relaxed">Experience HMorix AI capabilities firsthand. Select a demo below and see what our platform can do.</p>
        </div>

        {/* Demo Selector */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {demos.map(demo => (
            <button key={demo.id} onClick={() => { setActiveDemo(demo.id); setResult(''); setInput('') }} className={`p-4 border rounded-[12px] text-left transition-all ${activeDemo === demo.id ? 'border-[#C8FF00] bg-[#C8FF00]/5' : 'border-glass-border bg-obsidian-2 hover:border-cream/20'}`}>
              <demo.icon size={20} className={activeDemo === demo.id ? 'text-[#C8FF00]' : 'text-cream/40'} />
              <div className="font-display font-semibold text-sm mt-2">{demo.title}</div>
            </button>
          ))}
        </div>

        {/* Playground Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
            <h3 className="font-display font-semibold mb-4">Input</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder={placeholders[activeDemo]} className="w-full h-48 bg-obsidian border border-glass-border rounded-[8px] p-4 text-sm text-cream resize-none outline-none focus:border-[#C8FF00] placeholder:text-cream/30" />
            <button onClick={handleRun} disabled={loading || !input.trim()} className="mt-4 w-full py-3 bg-[#C8FF00] text-obsidian font-display font-semibold rounded-[4px] hover:opacity-90 disabled:opacity-50 transition-all">
              {loading ? 'Processing...' : 'Run Demo'}
            </button>
          </div>
          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
            <h3 className="font-display font-semibold mb-4">Result</h3>
            <div className="bg-obsidian border border-glass-border rounded-[8px] p-4 h-[280px] overflow-y-auto font-mono text-sm whitespace-pre-wrap">
              {loading ? (
                <div className="flex items-center gap-2 text-[#C8FF00]">
                  <div className="w-2 h-2 bg-[#C8FF00] rounded-full animate-pulse" />
                  Processing...
                </div>
              ) : result ? (
                <div className="text-cream/80">{result}</div>
              ) : (
                <div className="text-cream/30 text-center mt-20">Results will appear here...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
