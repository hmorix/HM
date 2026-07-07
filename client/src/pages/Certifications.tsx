import { Shield, CheckCircle, Award } from 'lucide-react'

export default function Certifications() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">Certifications</span>
        <h1 className="section-title mt-3 mb-6">Industry Certifications & Standards</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-16">HMorix maintains the highest industry certifications to ensure enterprise-grade security and compliance.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { name: 'SOC 2 Type II', issuer: 'AICPA', status: 'Active', date: 'Jun 2024', desc: 'Service Organization Control report covering security, availability, and confidentiality.' },
            { name: 'ISO 27001', issuer: 'ISO', status: 'Active', date: 'Mar 2024', desc: 'International standard for information security management systems.' },
            { name: 'GDPR Compliant', issuer: 'EU', status: 'Active', date: 'Jan 2024', desc: 'Full compliance with EU General Data Protection Regulation requirements.' },
            { name: 'HIPAA Compliant', issuer: 'HHS', status: 'Active', date: 'Apr 2024', desc: 'Health Insurance Portability and Accountability Act compliance for healthcare data.' },
            { name: 'PCI DSS Level 1', issuer: 'PCI SSC', status: 'Active', date: 'May 2024', desc: 'Payment Card Industry Data Security Standard for processing card payments.' },
            { name: 'CSA STAR', issuer: 'Cloud Security Alliance', status: 'Active', date: 'Feb 2024', desc: 'Cloud security assessment and certification for cloud service providers.' },
          ].map((cert, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#C8FF00]/10 rounded-[8px] flex items-center justify-center">
                  <Shield size={20} className="text-[#C8FF00]" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm">{cert.name}</h3>
                  <span className="text-[10px] text-cream/30">{cert.issuer}</span>
                </div>
              </div>
              <p className="text-sm text-cream/40 mb-4">{cert.desc}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-green-400"><CheckCircle size={12} /> {cert.status}</span>
                <span className="text-[10px] text-cream/30">Issued: {cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <div className="flex items-center gap-3 mb-4">
            <Award size={24} className="text-[#C8FF00]" />
            <h3 className="font-display text-xl font-bold">Audit Reports</h3>
          </div>
          <p className="text-sm text-cream/50 mb-6">Enterprise customers can request access to our full audit reports and compliance documentation under NDA.</p>
          <button className="btn-primary">Request Audit Reports</button>
        </div>
      </div>
    </div>
  )
}
