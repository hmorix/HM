import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle } from 'lucide-react'

export default function Security() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-[700px] mb-16">
          <span className="label-mono">Security Center</span>
          <h1 className="section-title mt-3 mb-6">Enterprise-grade security<br/>at every layer</h1>
          <p className="text-lg text-cream/60 leading-relaxed">HMorix implements defense-in-depth security across all products and services. Our security practices are aligned with ISO 27001, SOC 2, and GDPR requirements.</p>
        </div>

        {/* Security Score */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] text-center">
            <div className="font-display text-5xl font-bold text-[#C8FF00] mb-2">A+</div>
            <div className="text-sm text-cream/50">Security Rating</div>
          </div>
          <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] text-center">
            <div className="font-display text-5xl font-bold mb-2">99.9%</div>
            <div className="text-sm text-cream/50">Uptime SLA</div>
          </div>
          <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] text-center">
            <div className="font-display text-5xl font-bold mb-2">0</div>
            <div className="text-sm text-cream/50">Data Breaches</div>
          </div>
        </div>

        {/* Security Layers */}
        <h2 className="font-display text-2xl font-bold mb-8">Security Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {[
            { icon: Shield, title: 'Network Security', items: ['DDoS Protection', 'WAF Filtering', 'TLS 1.3 Encryption', 'IP Whitelisting'] },
            { icon: Lock, title: 'Application Security', items: ['OWASP Top 10 Protection', 'Input Validation', 'CSRF/XSS Prevention', 'Rate Limiting'] },
            { icon: Eye, title: 'Monitoring & Detection', items: ['24/7 SOC Monitoring', 'Anomaly Detection', 'Real-time Alerting', 'Threat Intelligence'] },
            { icon: Server, title: 'Infrastructure', items: ['Isolated Environments', 'Encrypted Storage', 'Automated Backups', 'Disaster Recovery'] },
            { icon: CheckCircle, title: 'Access Control', items: ['Multi-factor Auth', 'Role-based Access', 'SSO Integration', 'Session Management'] },
            { icon: AlertTriangle, title: 'Incident Response', items: ['< 15min Response Time', 'Automated Containment', 'Forensic Analysis', 'Post-mortem Reports'] },
          ].map((section, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all">
              <section.icon size={24} className="text-[#C8FF00] mb-4" />
              <h3 className="font-display font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-cream/60">
                    <span className="text-[#C8FF00] text-xs">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h2 className="font-display text-2xl font-bold mb-8">Certifications & Compliance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {['ISO 27001','SOC 2 Type II','GDPR','PCI DSS','HIPAA','CCPA','CSA STAR','NIST'].map(cert => (
            <div key={cert} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] text-center hover:border-[rgba(200,255,0,0.2)] transition-all">
              <Shield size={24} className="text-[#C8FF00] mx-auto mb-3" />
              <div className="font-display font-semibold text-sm">{cert}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] text-center">
          <h3 className="font-display text-xl font-bold mb-3">Need a Security Assessment?</h3>
          <p className="text-sm text-cream/50 mb-6 max-w-md mx-auto">Our security team can perform a comprehensive audit of your infrastructure.</p>
          <Link to="/contact" className="btn-primary inline-flex">Request Security Audit</Link>
        </div>
      </div>
    </div>
  )
}
