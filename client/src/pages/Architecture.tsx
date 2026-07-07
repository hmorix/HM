export default function Architecture() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-[700px] mb-16">
          <span className="label-mono">Technical Architecture</span>
          <h1 className="section-title mt-3 mb-6">How HMorix is built</h1>
          <p className="text-lg text-cream/60 leading-relaxed">A deep dive into our technical infrastructure. Designed for scale, security, and reliability.</p>
        </div>

        {/* Architecture Diagram */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-12">
          <h2 className="font-display text-xl font-bold mb-8 text-center">HMorix Cloud Architecture</h2>
          <div className="relative">
            {/* Animated SVG Diagram */}
            <svg viewBox="0 0 800 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Background Grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                </pattern>
                <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C8FF00" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#C8FF00" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
              <rect width="800" height="400" fill="url(#grid)"/>
              
              {/* Client Layer */}
              <rect x="50" y="30" width="700" height="60" rx="8" fill="rgba(200,255,0,0.05)" stroke="rgba(200,255,0,0.3)" strokeWidth="1">
                <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
              </rect>
              <text x="400" y="55" textAnchor="middle" fill="#C8FF00" fontSize="11" fontFamily="JetBrains Mono">CLIENT LAYER</text>
              <text x="150" y="75" textAnchor="middle" fill="rgba(234,232,227,0.6)" fontSize="10">React SPA</text>
              <text x="300" y="75" textAnchor="middle" fill="rgba(234,232,227,0.6)" fontSize="10">Mobile Apps</text>
              <text x="450" y="75" textAnchor="middle" fill="rgba(234,232,227,0.6)" fontSize="10">SDK Clients</text>
              <text x="600" y="75" textAnchor="middle" fill="rgba(234,232,227,0.6)" fontSize="10">Webhooks</text>

              {/* CDN/Edge */}
              <rect x="50" y="110" width="700" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
              <text x="400" y="135" textAnchor="middle" fill="rgba(234,232,227,0.8)" fontSize="11" fontFamily="JetBrains Mono">CDN / EDGE NETWORK (Cloudflare)</text>

              {/* API Gateway */}
              <rect x="50" y="170" width="700" height="50" rx="8" fill="rgba(200,255,0,0.03)" stroke="rgba(200,255,0,0.15)" strokeWidth="1"/>
              <text x="400" y="190" textAnchor="middle" fill="#C8FF00" fontSize="11" fontFamily="JetBrains Mono">API GATEWAY</text>
              <text x="200" y="208" textAnchor="middle" fill="rgba(234,232,227,0.5)" fontSize="9">Auth</text>
              <text x="350" y="208" textAnchor="middle" fill="rgba(234,232,227,0.5)" fontSize="9">Rate Limiting</text>
              <text x="500" y="208" textAnchor="middle" fill="rgba(234,232,227,0.5)" fontSize="9">Load Balancing</text>
              <text x="650" y="208" textAnchor="middle" fill="rgba(234,232,227,0.5)" fontSize="9">WAF</text>

              {/* Microservices */}
              <rect x="50" y="240" width="160" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
              <text x="130" y="265" textAnchor="middle" fill="rgba(234,232,227,0.8)" fontSize="10">BillingFlow</text>
              <text x="130" y="282" textAnchor="middle" fill="rgba(234,232,227,0.4)" fontSize="8">Node.js</text>

              <rect x="230" y="240" width="160" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
              <text x="310" y="265" textAnchor="middle" fill="rgba(234,232,227,0.8)" fontSize="10">AI Agent</text>
              <text x="310" y="282" textAnchor="middle" fill="rgba(234,232,227,0.4)" fontSize="8">Python + GPU</text>

              <rect x="410" y="240" width="160" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
              <text x="490" y="265" textAnchor="middle" fill="rgba(234,232,227,0.8)" fontSize="10">PDF Engine</text>
              <text x="490" y="282" textAnchor="middle" fill="rgba(234,232,227,0.4)" fontSize="8">Rust + WASM</text>

              <rect x="590" y="240" width="160" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
              <text x="670" y="265" textAnchor="middle" fill="rgba(234,232,227,0.8)" fontSize="10">Smart Home</text>
              <text x="670" y="282" textAnchor="middle" fill="rgba(234,232,227,0.4)" fontSize="8">Go + MQTT</text>

              {/* Data Layer */}
              <rect x="50" y="320" width="700" height="60" rx="8" fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.2)" strokeWidth="1"/>
              <text x="400" y="345" textAnchor="middle" fill="rgb(96,165,250)" fontSize="11" fontFamily="JetBrains Mono">DATA LAYER</text>
              <text x="150" y="365" textAnchor="middle" fill="rgba(234,232,227,0.5)" fontSize="9">PostgreSQL</text>
              <text x="300" y="365" textAnchor="middle" fill="rgba(234,232,227,0.5)" fontSize="9">Redis Cache</text>
              <text x="450" y="365" textAnchor="middle" fill="rgba(234,232,227,0.5)" fontSize="9">Cloudflare D1</text>
              <text x="600" y="365" textAnchor="middle" fill="rgba(234,232,227,0.5)" fontSize="9">R2 Storage</text>

              {/* Animated Connection Lines */}
              <line x1="400" y1="90" x2="400" y2="110" stroke="url(#limeGrad)" strokeWidth="1" strokeDasharray="4 2">
                <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite"/>
              </line>
              <line x1="400" y1="150" x2="400" y2="170" stroke="url(#limeGrad)" strokeWidth="1" strokeDasharray="4 2">
                <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite"/>
              </line>
              <line x1="400" y1="220" x2="400" y2="240" stroke="url(#limeGrad)" strokeWidth="1" strokeDasharray="4 2">
                <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite"/>
              </line>
              <line x1="400" y1="300" x2="400" y2="320" stroke="url(#limeGrad)" strokeWidth="1" strokeDasharray="4 2">
                <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite"/>
              </line>
            </svg>
          </div>
        </div>

        {/* Architecture Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            { title: 'Frontend Architecture', items: ['React 18 with TypeScript','Vite for build tooling','Tailwind CSS + Framer Motion','React Router v6','State: Zustand + React Query','PWA-ready with service workers'] },
            { title: 'Backend Architecture', items: ['Node.js + Express (TypeScript)','Microservices architecture','GraphQL + REST APIs','Event-driven with Redis Pub/Sub','Worker queues for async jobs','gRPC for inter-service comms'] },
            { title: 'AI Architecture', items: ['Custom fine-tuned LLMs','RAG pipeline with vector DB','GPU inference clusters','Model versioning & A/B testing','Prompt engineering framework','Safety & content filtering'] },
            { title: 'Security Layers', items: ['Cloudflare WAF + DDoS','mTLS between services','Vault for secrets management','RBAC + ABAC policies','Audit logging (immutable)','Automated vulnerability scanning'] },
            { title: 'Deployment Pipeline', items: ['GitHub Actions CI/CD','Docker + Kubernetes','Blue-green deployments','Automated rollbacks','Infrastructure as Code (Terraform)','Multi-region failover'] },
            { title: 'Cloud Infrastructure', items: ['Cloudflare Workers (Edge)','AWS EKS (Compute)','Cloudflare D1 (Database)','Cloudflare R2 (Storage)','Redis Cloud (Cache)','Grafana + Prometheus (Monitoring)'] },
          ].map((section, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-cream/60">
                    <span className="w-1.5 h-1.5 bg-[#C8FF00] rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
