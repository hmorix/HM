import { Link } from 'react-router-dom'
import { FileText, Upload, Zap, Database } from 'lucide-react'

export default function PDFAutomation() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-[700px] mb-16">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#C8FF00]/10 border border-[rgba(200,255,0,0.25)] rounded-full w-fit mb-6">
            <span className="w-2 h-2 bg-[#C8FF00] rounded-full" />
            <span className="font-mono text-[0.68rem] text-[#C8FF00]">DOCUMENT INTELLIGENCE</span>
          </div>
          <h1 className="section-title mb-6">PDF Automation</h1>
          <p className="text-lg text-cream/60 leading-relaxed">Enterprise-grade document processing powered by AI. Extract, transform, and manage thousands of documents automatically.</p>
        </div>

        {/* Processing Demo */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="font-mono text-xs text-cream/35 ml-2">PDF Processing Engine</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/[0.04] border border-glass-border rounded-[8px] mb-4">
            <div className="flex items-center gap-3">
              <Upload size={18} className="text-[#C8FF00]" />
              <span className="text-sm">contracts_batch_Q3.csv</span>
            </div>
            <span className="font-mono text-sm text-[#C8FF00]">2,840 docs</span>
          </div>
          <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden mb-2">
            <div className="h-full bg-[#C8FF00] rounded-full w-[72%]" style={{animation:'none'}} />
          </div>
          <div className="text-xs text-cream/35 mb-6">72% — 2,045 / 2,840 documents processed</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white/[0.04] border border-glass-border rounded-[8px] text-center">
              <div className="font-display text-xl font-bold text-[#C8FF00]">2,045</div>
              <div className="text-xs text-cream/40">Completed</div>
            </div>
            <div className="p-4 bg-white/[0.04] border border-glass-border rounded-[8px] text-center">
              <div className="font-display text-xl font-bold">795</div>
              <div className="text-xs text-cream/40">Remaining</div>
            </div>
            <div className="p-4 bg-white/[0.04] border border-glass-border rounded-[8px] text-center">
              <div className="font-display text-xl font-bold text-green-500">99.7%</div>
              <div className="text-xs text-cream/40">Accuracy</div>
            </div>
            <div className="p-4 bg-white/[0.04] border border-glass-border rounded-[8px] text-center">
              <div className="font-display text-xl font-bold">0.3s</div>
              <div className="text-xs text-cream/40">Per Document</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            { icon: FileText, title: 'Data Extraction', desc: 'AI-powered extraction of text, tables, and structured data from any PDF format.' },
            { icon: Zap, title: 'Batch Processing', desc: 'Process thousands of documents simultaneously with parallel processing.' },
            { icon: Database, title: 'Template Matching', desc: 'Define templates for recurring document types and auto-extract fields.' },
            { icon: Upload, title: 'Format Conversion', desc: 'Convert between PDF, Word, Excel, CSV, and JSON formats.' },
            { icon: FileText, title: 'OCR Engine', desc: 'Advanced optical character recognition for scanned documents.' },
            { icon: Zap, title: 'API Integration', desc: 'RESTful API for seamless integration with your existing workflow.' },
          ].map((f, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all">
              <f.icon size={24} className="text-[#C8FF00] mb-4" />
              <h3 className="font-display font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-cream/50">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/playground" className="btn-primary inline-flex">Try PDF Demo →</Link>
        </div>
      </div>
    </div>
  )
}
