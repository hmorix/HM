import { Link } from 'react-router-dom'
import { FolderOpen, FileText, MessageCircle, BarChart3, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function ClientPortal() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="label-mono">Client Portal</span>
            <h1 className="section-title mt-2">Welcome back, Meridian Corp</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 bg-[#C8FF00]/10 text-[#C8FF00] text-xs rounded-full font-medium">Enterprise Plan</span>
            <span className="px-3 py-1.5 bg-green-500/10 text-green-400 text-xs rounded-full font-medium">Active</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Active Projects', value: '3', icon: FolderOpen, change: '+1 this month' },
            { label: 'Open Tickets', value: '2', icon: MessageCircle, change: '1 urgent' },
            { label: 'Invoices Due', value: '$8,750', icon: FileText, change: 'Due Jul 20' },
            { label: 'Uptime SLA', value: '99.98%', icon: BarChart3, change: 'Target: 99.9%' },
          ].map((s, i) => (
            <div key={i} className="p-5 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <div className="flex items-center justify-between mb-3">
                <s.icon size={20} className="text-[#C8FF00]" />
              </div>
              <div className="font-display text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-cream/40 mt-1">{s.label}</div>
              <div className="text-[10px] text-cream/30 mt-0.5">{s.change}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Projects */}
          <div className="lg:col-span-2">
            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-4">Your Projects</h3>
              <div className="space-y-3">
                {[
                  { name: 'CRM Platform Rebuild', status: 'In Progress', progress: 87, deadline: 'Aug 15, 2024' },
                  { name: 'Security Audit & Compliance', status: 'In Progress', progress: 64, deadline: 'Sep 1, 2024' },
                  { name: 'PDF Migration System', status: 'Complete', progress: 100, deadline: 'Jul 1, 2024' },
                ].map((p, i) => (
                  <div key={i} className="p-4 bg-white/[0.02] border border-glass-border rounded-[12px]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{p.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${p.status === 'Complete' ? 'bg-green-500/10 text-green-400' : 'bg-[#C8FF00]/10 text-[#C8FF00]'}`}>{p.status}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${p.progress === 100 ? 'bg-green-400' : 'bg-[#C8FF00]'}`} style={{width:`${p.progress}%`}} />
                      </div>
                      <span className="text-xs text-cream/40">{p.progress}%</span>
                    </div>
                    <div className="text-[10px] text-cream/30 mt-2">Deadline: {p.deadline}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] mt-6">
              <h3 className="font-display font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { action: 'Sprint 14 completed - CRM Platform', time: '2 hours ago', icon: CheckCircle, color: 'text-green-400' },
                  { action: 'New deployment pushed to staging', time: '5 hours ago', icon: Clock, color: 'text-[#C8FF00]' },
                  { action: 'Security scan completed - No issues', time: '1 day ago', icon: CheckCircle, color: 'text-green-400' },
                  { action: 'Invoice INV-2842 generated', time: '2 days ago', icon: FileText, color: 'text-blue-400' },
                  { action: 'Ticket TKT-4520 escalated to priority', time: '3 days ago', icon: AlertCircle, color: 'text-yellow-400' },
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-[8px]">
                    <a.icon size={16} className={a.color} />
                    <span className="flex-1 text-sm">{a.action}</span>
                    <span className="text-[10px] text-cream/30">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-4">Your Team</h3>
              <div className="space-y-3">
                {[{name:'Sarah Chen',role:'Project Manager',status:'online'},{name:'Mike Johnson',role:'Lead Developer',status:'online'},{name:'Emily Park',role:'Security Analyst',status:'away'},{name:'David Kim',role:'QA Engineer',status:'offline'}].map((m,i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 bg-obsidian-3 rounded-full flex items-center justify-center text-xs font-bold">{m.name.split(' ').map(n=>n[0]).join('')}</div>
                      <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-obsidian-2 ${m.status === 'online' ? 'bg-green-400' : m.status === 'away' ? 'bg-yellow-400' : 'bg-cream/20'}`} />
                    </div>
                    <div>
                      <div className="text-sm">{m.name}</div>
                      <div className="text-[10px] text-cream/30">{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/support" className="block px-3 py-2 text-sm text-cream/60 hover:text-[#C8FF00] hover:bg-white/[0.04] rounded-[4px] transition-all">Submit a Ticket</Link>
                <Link to="/knowledge-base" className="block px-3 py-2 text-sm text-cream/60 hover:text-[#C8FF00] hover:bg-white/[0.04] rounded-[4px] transition-all">Knowledge Base</Link>
                <Link to="/status" className="block px-3 py-2 text-sm text-cream/60 hover:text-[#C8FF00] hover:bg-white/[0.04] rounded-[4px] transition-all">System Status</Link>
                <Link to="/developers" className="block px-3 py-2 text-sm text-cream/60 hover:text-[#C8FF00] hover:bg-white/[0.04] rounded-[4px] transition-all">API Documentation</Link>
              </div>
            </div>

            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-4">SLA Status</h3>
              <div className="space-y-3">
                {[{metric:'Uptime',value:'99.98%',target:'99.9%',ok:true},{metric:'Response Time',value:'45ms',target:'<100ms',ok:true},{metric:'Ticket Response',value:'42 min',target:'<1 hour',ok:true},{metric:'Resolution Time',value:'4.2 hrs',target:'<8 hours',ok:true}].map((s,i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-xs text-cream/50">{s.metric}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono">{s.value}</span>
                      <div className={`w-2 h-2 rounded-full ${s.ok ? 'bg-green-400' : 'bg-red-400'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
