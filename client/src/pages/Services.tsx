import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">Our Services</span>
        <h1 className="section-title mt-3 mb-6">End-to-end technology solutions</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-16">From concept to deployment and beyond. We handle the entire technology lifecycle for enterprise clients.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Enterprise Web Development', desc: 'High-performance web applications built with React, Next.js, and Node.js. Scalable architecture designed for millions of users.', tech: ['React','Next.js','TypeScript','Node.js'] },
            { title: 'AI & Machine Learning', desc: 'Custom AI solutions including chatbots, recommendation engines, NLP, and computer vision systems.', tech: ['Python','TensorFlow','OpenAI','LangChain'] },
            { title: 'Cyber Security', desc: 'Penetration testing, security audits, compliance consulting, and 24/7 monitoring services.', tech: ['OWASP','SOC 2','ISO 27001','NIST'] },
            { title: 'Cloud Infrastructure', desc: 'Cloud architecture, migration, DevOps, and managed services on AWS, GCP, and Azure.', tech: ['AWS','Docker','Kubernetes','Terraform'] },
            { title: 'Mobile Development', desc: 'Native and cross-platform mobile applications for iOS and Android with enterprise features.', tech: ['React Native','Flutter','Swift','Kotlin'] },
            { title: 'Digital Transformation', desc: 'End-to-end business process automation, legacy modernization, and digital strategy consulting.', tech: ['Process Mining','RPA','Integration','Analytics'] },
          ].map((s, i) => (
            <div key={i} className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all">
              <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-cream/50 mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tech.map(t => <span key={t} className="px-2 py-1 text-[10px] font-mono bg-[#C8FF00]/5 border border-[rgba(200,255,0,0.2)] rounded text-[#C8FF00]">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-primary inline-flex">Discuss Your Project →</Link>
        </div>
      </div>
    </div>
  )
}
