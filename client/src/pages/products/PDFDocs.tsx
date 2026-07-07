import { Book, Code, FileText, Zap } from 'lucide-react'

export default function PDFDocs() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">PDF Automation / Documentation</span>
        <h1 className="section-title mt-3 mb-6">PDF Automation Docs</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-12">Complete guide to automating document processing with HMorix PDF Engine.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: Book, title: 'Getting Started', desc: 'Set up PDF processing in 5 minutes. Upload, extract, and transform documents.', link: '#' },
            { icon: Code, title: 'API Reference', desc: 'REST API for document upload, processing, extraction, and conversion.', link: '#' },
            { icon: FileText, title: 'Extraction Guide', desc: 'Extract text, tables, images, and metadata from any PDF document.', link: '#' },
            { icon: Zap, title: 'Batch Processing', desc: 'Process thousands of documents in parallel with queue management.', link: '#' },
          ].map((d, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all cursor-pointer">
              <d.icon size={24} className="text-[#C8FF00] mb-3" />
              <h3 className="font-display font-semibold mb-2">{d.title}</h3>
              <p className="text-sm text-cream/40">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <h3 className="font-display font-semibold mb-4">Quick Example</h3>
          <pre className="p-4 bg-obsidian rounded-[8px] text-xs font-mono text-cream/60 overflow-x-auto">{`import { HMorixPDF } from '@hmorix/pdf-sdk';

const pdf = new HMorixPDF({ apiKey: process.env.HMORIX_API_KEY });

// Extract data from an invoice PDF
const result = await pdf.extract({
  file: './invoice.pdf',
  schema: {
    invoice_number: 'string',
    date: 'date',
    total: 'currency',
    line_items: [{
      description: 'string',
      quantity: 'number',
      amount: 'currency'
    }]
  }
});

console.log(result.data);
// { invoice_number: "INV-2841", date: "2024-07-01", total: 4200.00, ... }
console.log(result.confidence); // 0.98`}</pre>
        </div>
      </div>
    </div>
  )
}
