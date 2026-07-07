import { GitCommit, Zap, FileText, Shield, Users, Bell, Server, Code } from 'lucide-react'

export default function ActivityFeed() {
  const activities = [
    { type: 'deploy', icon: Server, color: 'text-green-400', title: 'Production deployment successful', desc: 'BillingFlow v2.4.1 deployed to all regions', time: '2 min ago', user: 'CI/CD Pipeline' },
    { type: 'security', icon: Shield, color: 'text-yellow-400', title: 'Security scan completed', desc: '0 vulnerabilities found in latest scan', time: '15 min ago', user: 'Security Bot' },
    { type: 'ai', icon: Zap, color: 'text-purple-400', title: 'AI Agent job completed', desc: 'Generated 12 website pages for Meridian Corp', time: '32 min ago', user: 'AI Agent v2' },
    { type: 'commit', icon: GitCommit, color: 'text-blue-400', title: 'Code merged to main', desc: 'feat: add multi-language support to PDF engine', time: '1 hour ago', user: 'Sarah Chen' },
    { type: 'ticket', icon: FileText, color: 'text-orange-400', title: 'Support ticket resolved', desc: 'TKT-4521: BillingFlow webhook not firing', time: '2 hours ago', user: 'Mike Johnson' },
    { type: 'team', icon: Users, color: 'text-cyan-400', title: 'New team member added', desc: 'Emily Park joined the Security team', time: '3 hours ago', user: 'Admin' },
    { type: 'alert', icon: Bell, color: 'text-[#C8FF00]', title: 'System alert resolved', desc: 'PDF processing queue cleared - all jobs complete', time: '4 hours ago', user: 'System' },
    { type: 'api', icon: Code, color: 'text-pink-400', title: 'API key generated', desc: 'New production key created for CI/CD pipeline', time: '5 hours ago', user: 'John Doe' },
    { type: 'deploy', icon: Server, color: 'text-green-400', title: 'Staging deployment', desc: 'AI Agent v2.1-beta deployed to staging', time: '6 hours ago', user: 'CI/CD Pipeline' },
    { type: 'security', icon: Shield, color: 'text-yellow-400', title: 'SSL certificate renewed', desc: 'Wildcard cert for *.hmorix.com renewed (365 days)', time: '8 hours ago', user: 'Security Bot' },
    { type: 'commit', icon: GitCommit, color: 'text-blue-400', title: '3 PRs merged', desc: 'fix: rate limiter, feat: webhook retry, chore: deps update', time: '10 hours ago', user: 'Multiple authors' },
    { type: 'ai', icon: Zap, color: 'text-purple-400', title: 'PDF batch processing complete', desc: 'Processed 1,420 invoices for NovaTech (99.8% accuracy)', time: '12 hours ago', user: 'PDF Engine' },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="label-mono">Activity Feed</span>
            <h1 className="section-title mt-2">Platform Activity</h1>
          </div>
          <div className="flex items-center gap-2">
            {['All','Deploys','Security','AI','Code'].map(f => (
              <button key={f} className={`px-3 py-1.5 text-xs rounded-full border ${f === 'All' ? 'border-[#C8FF00] text-[#C8FF00] bg-[#C8FF00]/10' : 'border-glass-border text-cream/40 hover:text-cream'} transition-all`}>{f}</button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-glass-border" />

          <div className="space-y-4">
            {activities.map((a, i) => (
              <div key={i} className="relative flex items-start gap-4 pl-12">
                {/* Timeline dot */}
                <div className={`absolute left-[18px] w-3 h-3 rounded-full border-2 border-obsidian-2 ${a.type === 'deploy' ? 'bg-green-400' : a.type === 'security' ? 'bg-yellow-400' : a.type === 'ai' ? 'bg-purple-400' : a.type === 'commit' ? 'bg-blue-400' : 'bg-cream/30'}`} />
                
                <div className="flex-1 p-4 bg-obsidian-2 border border-glass-border rounded-[12px] hover:border-[rgba(200,255,0,0.1)] transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <a.icon size={16} className={a.color} />
                      <span className="text-sm font-medium">{a.title}</span>
                    </div>
                    <span className="text-[10px] text-cream/30 whitespace-nowrap">{a.time}</span>
                  </div>
                  <p className="text-xs text-cream/40 mt-1 ml-6">{a.desc}</p>
                  <span className="text-[10px] text-cream/20 mt-2 ml-6 block">by {a.user}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="btn-outline text-sm">Load More Activity</button>
        </div>
      </div>
    </div>
  )
}
