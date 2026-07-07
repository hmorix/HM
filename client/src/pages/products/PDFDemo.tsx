import { useState } from 'react'
import { Upload, FileText, CheckCircle, Loader } from 'lucide-react'

export default function PDFDemo() {
  const [stage, setStage] = useState<'upload'|'processing'|'done'>('upload')

  const handleProcess = () => {
    setStage('processing')
    setTimeout(() => setStage('done'), 2500)
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">PDF Automation / Demo</span>
        <h1 className="section-title mt-3 mb-6">Try PDF Extraction</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-12">Upload any PDF and watch our AI extract structured data in seconds.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
            {stage === 'upload' && (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-4 border-2 border-dashed border-glass-border rounded-[16px] flex items-center justify-center">
                  <Upload size={32} className="text-cream/30" />
                </div>
                <h3 className="font-display font-semibold mb-2">Upload a PDF</h3>
                <p className="text-sm text-cream/40 mb-6">Drag & drop or click to upload. Max 10MB.</p>
                <button onClick={handleProcess} className="btn-primary">Use Sample Invoice</button>
              </div>
            )}
            {stage === 'processing' && (
              <div className="text-center py-12">
                <Loader size={32} className="text-[#C8FF00] mx-auto mb-4 animate-spin" />
                <h3 className="font-display font-semibold mb-2">Processing...</h3>
                <p className="text-sm text-cream/40">AI is extracting data from your document</p>
                <div className="mt-4 space-y-2">
                  {['Parsing document structure','Identifying tables','Extracting text fields','Validating data'].map((s,i) => (
                    <div key={i} className="flex items-center gap-2 justify-center text-xs text-cream/40">
                      <CheckCircle size={12} className="text-[#C8FF00]" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {stage === 'done' && (
              <div className="text-center py-8">
                <CheckCircle size={48} className="text-[#C8FF00] mx-auto mb-4" />
                <h3 className="font-display font-semibold mb-2">Extraction Complete!</h3>
                <p className="text-sm text-cream/40 mb-4">98.7% confidence score</p>
                <button onClick={() => setStage('upload')} className="text-xs text-cream/30 hover:text-cream">Try another document</button>
              </div>
            )}
          </div>

          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
            <h3 className="font-display font-semibold mb-4">Extracted Data</h3>
            {stage === 'done' ? (
              <pre className="p-4 bg-obsidian rounded-[8px] text-xs font-mono text-cream/60 overflow-x-auto">{`{
  "invoice_number": "INV-2024-0847",
  "date": "2024-07-01",
  "due_date": "2024-07-31",
  "vendor": {
    "name": "TechSupply Inc",
    "address": "123 Tech Blvd, SF, CA"
  },
  "client": {
    "name": "Meridian Corp",
    "address": "456 Enterprise Ave, NY"
  },
  "line_items": [
    {
      "description": "Cloud Hosting - Q3",
      "quantity": 1,
      "unit_price": 2400.00,
      "total": 2400.00
    },
    {
      "description": "SSL Certificates (x5)",
      "quantity": 5,
      "unit_price": 120.00,
      "total": 600.00
    }
  ],
  "subtotal": 3000.00,
  "tax": 270.00,
  "total": 3270.00,
  "confidence": 0.987
}`}</pre>
            ) : (
              <div className="flex items-center justify-center h-48 text-sm text-cream/20">
                <FileText size={32} className="mr-2" /> Upload a document to see results
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
