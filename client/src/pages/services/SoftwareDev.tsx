import { Link } from 'react-router-dom'
import SEOHead from '../../components/seo/SEOHead'
import { Server, Cloud, Shield, Database, GitBranch, Layers, CheckCircle, ArrowRight } from 'lucide-react'

const services = [
  { icon: Layers, title: 'Custom Software Development', desc: 'Bespoke enterprise software built from scratch — CRM, ERP, project management, and industry-specific solutions.' },
  { icon: Cloud, title: 'Cloud Solutions & DevOps', desc: 'AWS, Azure, GCP architecture design, migration, and management. CI/CD pipelines, Kubernetes, and serverless.' },
  { icon: Server, title: 'API & Backend Development', desc: 'RESTful APIs, GraphQL, microservices architecture, and scalable backend systems with Node.js, Python, and Go.' },
  { icon: Database, title: 'Database Design & Management', desc: 'PostgreSQL, MongoDB, Redis, Elasticsearch — schema design, optimization, migration, and real-time sync.' },
  { icon: Shield, title: 'Cybersecurity Solutions', desc: 'Penetration testing, security audits, SOC 2 compliance, encryption, and zero-trust architecture implementation.' },
  { icon: GitBranch, title: 'DevOps & CI/CD', desc: 'Automated deployment pipelines, infrastructure as code, monitoring, and containerization with Docker & Kubernetes.' },
]

export default function SoftwareDev() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead
        title="Custom Software Development Services"
        description="HMorix custom software development: enterprise applications, SaaS platforms, API development, cloud solutions, DevOps, cybersecurity, and database management. Full-stack development with Node.js, Python, React, and TypeScript."
        keywords="custom software development, enterprise software, SaaS development, API development, backend development, cloud computing, AWS, Azure, Google Cloud, DevOps, CI/CD, Kubernetes, Docker, microservices, serverless, database design, PostgreSQL, MongoDB, cybersecurity, penetration testing, security audit, SOC 2 compliance, software architecture, system design, scalable software, high-performance computing, real-time systems, event-driven architecture, message queues, Redis, Elasticsearch, GraphQL, REST API, Node.js, Python, Go, Rust, TypeScript, full-stack development, software consulting, technical architecture, code review, legacy modernization, software maintenance"
        canonical="/services/software-development"
      />
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-mono rounded-full mb-4">SOFTWARE DEVELOPMENT</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Enterprise <span className="text-[#C8FF00]">Software Solutions</span></h1>
          <p className="text-cream/50 max-w-[700px] mx-auto text-lg">From startups to Fortune 500 — we build scalable, secure, and maintainable software that powers businesses worldwide.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[#C8FF00]/20 transition-all">
              <s.icon size={24} className="text-[#C8FF00] mb-4" />
              <h3 className="font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-cream/40">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-6">Technologies We Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { cat: 'Frontend', techs: 'React, Next.js, Vue, Angular, TypeScript' },
              { cat: 'Backend', techs: 'Node.js, Python, Go, Rust, Java' },
              { cat: 'Database', techs: 'PostgreSQL, MongoDB, Redis, DynamoDB' },
              { cat: 'Cloud', techs: 'AWS, Azure, GCP, Cloudflare' },
              { cat: 'DevOps', techs: 'Docker, Kubernetes, Terraform, GitHub Actions' },
              { cat: 'AI/ML', techs: 'TensorFlow, PyTorch, OpenAI, Hugging Face' },
              { cat: 'Mobile', techs: 'React Native, Flutter, Swift, Kotlin' },
              { cat: 'Security', techs: 'OAuth2, JWT, mTLS, WAF, SIEM' },
            ].map((t, i) => (
              <div key={i} className="p-4 bg-white/[0.04] rounded-[8px]">
                <div className="text-xs text-[#C8FF00] font-mono mb-1">{t.cat}</div>
                <div className="text-xs text-cream/50">{t.techs}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '12+', label: 'Years Experience' },
            { value: '50+', label: 'Engineers' },
          ].map((s, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[12px] text-center">
              <div className="font-display text-2xl font-bold text-[#C8FF00]">{s.value}</div>
              <div className="text-xs text-cream/30 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center p-12 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <h2 className="font-display text-2xl font-bold mb-3">Let's Build Something Great Together</h2>
          <p className="text-cream/40 mb-6">Tell us about your project and get a free technical consultation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8FF00] text-obsidian font-semibold rounded-[4px] hover:bg-[#b8ef00] transition-all">Start a Project <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  )
}
