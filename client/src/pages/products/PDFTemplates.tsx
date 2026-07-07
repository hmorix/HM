import { FileText, Download } from 'lucide-react'

export default function PDFTemplates() {
  const templates = [
    { name: 'Invoice Extractor', desc: 'Extract line items, totals, dates, and vendor info from invoices', fields: 12, accuracy: '99.2%' },
    { name: 'Contract Analyzer', desc: 'Parse legal contracts for key terms, dates, and obligations', fields: 18, accuracy: '97.8%' },
    { name: 'Receipt Scanner', desc: 'Extract merchant, items, and totals from receipts', fields: 8, accuracy: '98.5%' },
    { name: 'Resume Parser', desc: 'Extract contact info, experience, education, and skills', fields: 15, accuracy: '96.4%' },
    { name: 'Bank Statement', desc: 'Parse transactions, balances, and account details', fields: 10, accuracy: '99.1%' },
    { name: 'Medical Records', desc: 'Extract patient info, diagnoses, and prescriptions (HIPAA compliant)', fields: 20, accuracy: '97.2%' },
    { name: 'Tax Forms', desc: 'Parse W-2, 1099, and other tax documents', fields: 14, accuracy: '99.5%' },
    { name: 'Shipping Labels', desc: 'Extract tracking numbers, addresses, and carrier info', fields: 8, accuracy: '98.9%' },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">PDF Automation / Templates</span>
        <h1 className="section-title mt-3 mb-6">Extraction Templates</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-12">Pre-trained extraction templates for common document types. Use as-is or customize for your needs.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((t, i) => (
            <div key={i} className="p-5 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C8FF00]/10 rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <FileText size={18} className="text-[#C8FF00]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-sm mb-1">{t.name}</h3>
                  <p className="text-xs text-cream/40 mb-3">{t.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] text-cream/30">
                      <span>{t.fields} fields</span>
                      <span>{t.accuracy} accuracy</span>
                    </div>
                    <button className="flex items-center gap-1 text-xs text-[#C8FF00]"><Download size={12} /> Use Template</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
