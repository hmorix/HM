import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, DollarSign, Activity, Shield, Server, AlertTriangle, TrendingUp, Clock, FileText, Zap, Settings, Database, Globe, Lock } from 'lucide-react'

const tabs = ['Overview', 'Users', 'Revenue', 'System', 'Security', 'Content', 'Logs']

const recentUsers = [
  { name: 'Meridian Corp', email: 'admin@meridian.com', plan: 'Enterprise', status: 'active', joined: '2h ago' },
  { name: 'NovaTech Inc', email: 'ops@novatech.io', plan: 'Business', status: 'active', joined: '5h ago' },
  { name: 'Apex Solutions', email: 'team@apex.co', plan: 'Starter', status: 'trial', joined: '1d ago' },
  { name: 'Quantum Labs', email: 'dev@quantum.ai', plan: 'Enterprise', status: 'active', joined: '2d ago' },
  { name: 'Stellar Digital', email: 'hi@stellar.dev', plan: 'Business', status: 'suspended', joined: '3d ago' },
]

const systemMetrics = [
  { label: 'CPU Usage', value: 34, max: 100, unit: '%', status: 'healthy' },
  { label: 'Memory', value: 12.4, max: 32, unit: 'GB', status: 'healthy' },
  { label: 'Storage', value: 2.4, max: 10, unit: 'TB', status: 'healthy' },
  { label: 'Network I/O', value: 840, max: 1000, unit: 'Mbps', status: 'warning' },
]

const securityEvents = [
  { event: 'Failed login attempt (5x)', ip: '103.42.18.91', time: '2 min ago', severity: 'high' },
  { event: 'New API key generated', ip: '192.168.1.1', time: '15 min ago', severity: 'low' },
  { event: 'Firewall rule updated', ip: '10.0.0.1', time: '1h ago', severity: 'medium' },
  { event: 'SSL certificate renewed', ip: 'system', time: '3h ago', severity: 'low' },
  { event: 'Suspicious request pattern', ip: '45.33.22.11', time: '4h ago', severity: 'high' },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Shield size={16} className="text-[#C8FF00]" />
              <span className="text-xs text-[#C8FF00] font-mono">ADMIN PANEL</span>
            </div>
            <h1 className="font-display text-3xl font-bold">Administration</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/admin/settings" className="btn-outline text-sm flex items-center gap-2"><Settings size={14} />System Settings</Link>
            <Link to="/admin/logs" className="btn-primary text-sm flex items-center gap-2"><Activity size={14} />View Logs</Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 overflow-x-auto pb-2 border-b border-glass-border">
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab ? 'text-[#C8FF00] border-b-2 border-[#C8FF00]' : 'text-cream/40 hover:text-cream'}`}>{tab}</button>
          ))}
        </div>

        {activeTab === 'Overview' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {[
                { label: 'Total Users', value: '2,847', icon: Users, change: '+124 this month', color: '#C8FF00' },
                { label: 'MRR', value: '$284K', icon: DollarSign, change: '+12.4%', color: '#00C8FF' },
                { label: 'API Calls (24h)', value: '1.2M', icon: Activity, change: '+8.2%', color: '#C8FF00' },
                { label: 'Uptime', value: '99.98%', icon: Server, change: '30d average', color: '#00FF88' },
                { label: 'Security Score', value: '98.7', icon: Shield, change: 'A+ rating', color: '#C8FF00' },
                { label: 'Open Tickets', value: '12', icon: AlertTriangle, change: '3 critical', color: '#FF6B6B' },
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-obsidian-2 border border-glass-border rounded-[12px]">
                  <stat.icon size={16} style={{color: stat.color}} className="mb-2" />
                  <div className="font-display text-xl font-bold">{stat.value}</div>
                  <div className="text-[10px] text-cream/30">{stat.label}</div>
                  <div className="text-[10px] text-cream/20 mt-1">{stat.change}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <div className="lg:col-span-2 p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-semibold">Revenue Overview</h3>
                  <div className="flex gap-2">
                    {['7d','30d','90d','1y'].map(p => <button key={p} className="px-2 py-1 text-[10px] bg-white/[0.04] rounded text-cream/40 hover:text-cream">{p}</button>)}
                  </div>
                </div>
                <div className="flex items-end gap-1 h-48">
                  {[45,52,48,61,58,72,68,75,82,78,91,88].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full bg-[#C8FF00]/30 rounded-t-[2px] hover:bg-[#C8FF00]/50 transition-all cursor-pointer" style={{height: `${v}%`}} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-cream/20">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
              </div>

              {/* System Health */}
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-4">System Health</h3>
                <div className="space-y-4">
                  {systemMetrics.map((m, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-cream/50">{m.label}</span>
                        <span className={m.status === 'warning' ? 'text-yellow-400' : 'text-cream/60'}>{m.value}{m.unit}</span>
                      </div>
                      <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${m.status === 'warning' ? 'bg-yellow-400' : 'bg-[#C8FF00]'}`} style={{width: `${(m.value/m.max)*100}%`}} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-glass-border">
                  <div className="flex items-center gap-2 text-xs text-green-400"><div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> All systems operational</div>
                </div>
              </div>
            </div>

            {/* Recent Users & Security */}
            <div className="grid lg:grid-cols-2 gap-6 mt-6">
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-semibold">Recent Users</h3>
                  <Link to="/admin/users" className="text-xs text-[#C8FF00]">View All</Link>
                </div>
                <div className="space-y-3">
                  {recentUsers.map((user, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-[4px] hover:bg-white/[0.02]">
                      <div className="w-8 h-8 bg-obsidian-3 rounded-full flex items-center justify-center text-[10px] font-bold">{user.name.split(' ').map(n => n[0]).join('')}</div>
                      <div className="flex-1">
                        <div className="text-sm">{user.name}</div>
                        <div className="text-[10px] text-cream/20">{user.email}</div>
                      </div>
                      <span className={`px-2 py-0.5 text-[10px] rounded-full ${user.status === 'active' ? 'bg-green-500/10 text-green-400' : user.status === 'trial' ? 'bg-blue-500/10 text-blue-400' : 'bg-red-500/10 text-red-400'}`}>{user.status}</span>
                      <span className="text-[10px] text-cream/20">{user.plan}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-semibold">Security Events</h3>
                  <Link to="/admin/security" className="text-xs text-[#C8FF00]">View All</Link>
                </div>
                <div className="space-y-3">
                  {securityEvents.map((ev, i) => (
                    <div key={i} className="flex items-start gap-3 p-2 rounded-[4px] hover:bg-white/[0.02]">
                      <div className={`w-2 h-2 rounded-full mt-1.5 ${ev.severity === 'high' ? 'bg-red-400' : ev.severity === 'medium' ? 'bg-yellow-400' : 'bg-green-400'}`} />
                      <div className="flex-1">
                        <div className="text-sm">{ev.event}</div>
                        <div className="text-[10px] text-cream/20">IP: {ev.ip} · {ev.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'Users' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <input placeholder="Search users..." className="px-4 py-2 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30 w-64" />
                <select className="px-3 py-2 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream/60 outline-none">
                  <option>All Plans</option><option>Enterprise</option><option>Business</option><option>Starter</option><option>Free</option>
                </select>
                <select className="px-3 py-2 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream/60 outline-none">
                  <option>All Status</option><option>Active</option><option>Trial</option><option>Suspended</option>
                </select>
              </div>
              <button className="btn-primary text-sm">+ Add User</button>
            </div>

            <div className="bg-obsidian-2 border border-glass-border rounded-[16px] overflow-hidden">
              <table className="w-full text-sm">
                <thead><tr className="text-xs text-cream/30 border-b border-glass-border bg-white/[0.02]">
                  <th className="text-left px-4 py-3">User</th><th className="text-left px-4 py-3">Plan</th><th className="text-left px-4 py-3">Status</th><th className="text-left px-4 py-3">API Calls</th><th className="text-left px-4 py-3">Last Active</th><th className="text-left px-4 py-3">Actions</th>
                </tr></thead>
                <tbody>
                  {[
                    { name: 'Meridian Corp', email: 'admin@meridian.com', plan: 'Enterprise', status: 'active', calls: '142K', active: '2 min ago' },
                    { name: 'NovaTech Inc', email: 'ops@novatech.io', plan: 'Business', status: 'active', calls: '89K', active: '15 min ago' },
                    { name: 'Apex Solutions', email: 'team@apex.co', plan: 'Starter', status: 'trial', calls: '12K', active: '1h ago' },
                    { name: 'Quantum Labs', email: 'dev@quantum.ai', plan: 'Enterprise', status: 'active', calls: '234K', active: '5 min ago' },
                    { name: 'Stellar Digital', email: 'hi@stellar.dev', plan: 'Business', status: 'suspended', calls: '0', active: '7d ago' },
                    { name: 'Orbit Systems', email: 'admin@orbit.io', plan: 'Enterprise', status: 'active', calls: '178K', active: '30 min ago' },
                    { name: 'Flux AI', email: 'team@flux.ai', plan: 'Business', status: 'active', calls: '56K', active: '2h ago' },
                  ].map((user, i) => (
                    <tr key={i} className="border-b border-glass-border/50 hover:bg-white/[0.02]">
                      <td className="px-4 py-3"><div className="font-medium">{user.name}</div><div className="text-[10px] text-cream/20">{user.email}</div></td>
                      <td className="px-4 py-3"><span className="px-2 py-0.5 text-[10px] bg-white/[0.06] rounded">{user.plan}</span></td>
                      <td className="px-4 py-3"><span className={`px-2 py-0.5 text-[10px] rounded-full ${user.status === 'active' ? 'bg-green-500/10 text-green-400' : user.status === 'trial' ? 'bg-blue-500/10 text-blue-400' : 'bg-red-500/10 text-red-400'}`}>{user.status}</span></td>
                      <td className="px-4 py-3 text-cream/50">{user.calls}</td>
                      <td className="px-4 py-3 text-cream/30 text-xs">{user.active}</td>
                      <td className="px-4 py-3"><button className="text-xs text-[#C8FF00] hover:underline">Manage</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'System' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Server Regions', value: '4', icon: Globe, desc: 'US-East, US-West, EU, APAC' },
                { label: 'Database Nodes', value: '6', icon: Database, desc: '3 primary, 3 replica' },
                { label: 'Edge Locations', value: '42', icon: Zap, desc: 'Global CDN coverage' },
                { label: 'SSL Certs', value: '12', icon: Lock, desc: 'All valid, auto-renewal' },
              ].map((s, i) => (
                <div key={i} className="p-5 bg-obsidian-2 border border-glass-border rounded-[12px]">
                  <s.icon size={18} className="text-[#C8FF00] mb-3" />
                  <div className="font-display text-2xl font-bold">{s.value}</div>
                  <div className="text-xs text-cream/40">{s.label}</div>
                  <div className="text-[10px] text-cream/20 mt-1">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-4">Service Status</h3>
              <div className="space-y-3">
                {[
                  { name: 'HMorix Cloud Platform', status: 'operational', uptime: '99.99%', latency: '12ms' },
                  { name: 'BillingFlow API', status: 'operational', uptime: '99.98%', latency: '45ms' },
                  { name: 'AI Agent Service', status: 'operational', uptime: '99.95%', latency: '230ms' },
                  { name: 'PDF Processing Engine', status: 'operational', uptime: '99.97%', latency: '180ms' },
                  { name: 'Smart Home Gateway', status: 'operational', uptime: '99.96%', latency: '35ms' },
                  { name: 'Authentication Service', status: 'operational', uptime: '99.99%', latency: '8ms' },
                  { name: 'Webhook Delivery', status: 'degraded', uptime: '99.94%', latency: '320ms' },
                  { name: 'Email Service', status: 'operational', uptime: '99.98%', latency: '250ms' },
                ].map((svc, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-white/[0.02] rounded-[8px]">
                    <div className={`w-2 h-2 rounded-full ${svc.status === 'operational' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                    <span className="flex-1 text-sm">{svc.name}</span>
                    <span className="text-xs text-cream/30">{svc.uptime}</span>
                    <span className="text-xs text-cream/30">{svc.latency}</span>
                    <span className={`px-2 py-0.5 text-[10px] rounded-full ${svc.status === 'operational' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>{svc.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Security' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-obsidian-2 border border-glass-border rounded-[12px]">
                <div className="text-xs text-cream/30 mb-2">Threat Level</div>
                <div className="font-display text-2xl font-bold text-green-400">LOW</div>
                <div className="text-[10px] text-cream/20 mt-1">No active threats detected</div>
              </div>
              <div className="p-5 bg-obsidian-2 border border-glass-border rounded-[12px]">
                <div className="text-xs text-cream/30 mb-2">Blocked Attacks (24h)</div>
                <div className="font-display text-2xl font-bold">1,247</div>
                <div className="text-[10px] text-cream/20 mt-1">DDoS, SQL injection, XSS</div>
              </div>
              <div className="p-5 bg-obsidian-2 border border-glass-border rounded-[12px]">
                <div className="text-xs text-cream/30 mb-2">Vulnerability Scan</div>
                <div className="font-display text-2xl font-bold text-[#C8FF00]">PASS</div>
                <div className="text-[10px] text-cream/20 mt-1">Last scan: 2h ago · 0 findings</div>
              </div>
            </div>

            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-4">Security Event Log</h3>
              <div className="space-y-2">
                {[
                  { event: 'Brute force attempt blocked', ip: '103.42.18.91', time: '2 min ago', severity: 'critical', action: 'IP banned' },
                  { event: 'SQL injection attempt', ip: '45.33.22.11', time: '15 min ago', severity: 'high', action: 'Request blocked' },
                  { event: 'Rate limit exceeded', ip: '192.168.1.100', time: '30 min ago', severity: 'medium', action: 'Throttled' },
                  { event: 'New admin login', ip: '10.0.0.1', time: '1h ago', severity: 'info', action: 'Logged' },
                  { event: 'Certificate renewal', ip: 'system', time: '3h ago', severity: 'info', action: 'Auto-renewed' },
                  { event: 'Firewall rule modified', ip: '10.0.0.5', time: '4h ago', severity: 'medium', action: 'Approved' },
                  { event: 'DDoS mitigation activated', ip: 'multiple', time: '6h ago', severity: 'critical', action: 'Mitigated' },
                ].map((ev, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-white/[0.02] rounded-[8px] text-sm">
                    <div className={`w-2 h-2 rounded-full ${ev.severity === 'critical' ? 'bg-red-400' : ev.severity === 'high' ? 'bg-orange-400' : ev.severity === 'medium' ? 'bg-yellow-400' : 'bg-blue-400'}`} />
                    <span className="flex-1">{ev.event}</span>
                    <span className="text-xs text-cream/30">{ev.ip}</span>
                    <span className="text-xs text-cream/20">{ev.time}</span>
                    <span className="px-2 py-0.5 text-[10px] bg-white/[0.06] rounded text-cream/40">{ev.action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Content' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-obsidian-2 border border-glass-border rounded-[12px]">
                <FileText size={18} className="text-[#C8FF00] mb-2" />
                <div className="font-display text-xl font-bold">12</div>
                <div className="text-xs text-cream/30">Blog Posts</div>
              </div>
              <div className="p-5 bg-obsidian-2 border border-glass-border rounded-[12px]">
                <FileText size={18} className="text-[#C8FF00] mb-2" />
                <div className="font-display text-xl font-bold">6</div>
                <div className="text-xs text-cream/30">Case Studies</div>
              </div>
              <div className="p-5 bg-obsidian-2 border border-glass-border rounded-[12px]">
                <FileText size={18} className="text-[#C8FF00] mb-2" />
                <div className="font-display text-xl font-bold">6</div>
                <div className="text-xs text-cream/30">Whitepapers</div>
              </div>
            </div>
            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold">Content Management</h3>
                <button className="btn-primary text-sm">+ New Post</button>
              </div>
              <div className="space-y-2">
                {[
                  { title: 'Building AI Agents at Scale', status: 'published', views: '4.2K', date: 'Jun 28' },
                  { title: 'Introducing BillingFlow v3', status: 'published', views: '3.8K', date: 'Jun 25' },
                  { title: 'Zero-Trust Architecture Guide', status: 'published', views: '2.1K', date: 'Jun 22' },
                  { title: 'Q3 Product Roadmap Preview', status: 'draft', views: '—', date: 'Jun 30' },
                  { title: 'Customer Success: Quantum Labs', status: 'review', views: '—', date: 'Jun 29' },
                ].map((post, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-white/[0.02] rounded-[8px]">
                    <span className="flex-1 text-sm">{post.title}</span>
                    <span className={`px-2 py-0.5 text-[10px] rounded-full ${post.status === 'published' ? 'bg-green-500/10 text-green-400' : post.status === 'draft' ? 'bg-white/[0.06] text-cream/40' : 'bg-yellow-500/10 text-yellow-400'}`}>{post.status}</span>
                    <span className="text-xs text-cream/30 w-12">{post.views}</span>
                    <span className="text-xs text-cream/20">{post.date}</span>
                    <button className="text-xs text-[#C8FF00]">Edit</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Logs' && (
          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold">System Logs</h3>
              <div className="flex gap-2">
                <select className="px-2 py-1 bg-obsidian border border-glass-border rounded text-xs text-cream/60 outline-none">
                  <option>All Levels</option><option>Error</option><option>Warning</option><option>Info</option>
                </select>
                <button className="px-3 py-1 text-xs bg-white/[0.04] border border-glass-border rounded text-cream/40 hover:text-cream">Export</button>
              </div>
            </div>
            <div className="font-mono text-xs space-y-1 max-h-[500px] overflow-y-auto">
              {[
                { time: '14:32:01', level: 'INFO', msg: '[api-gateway] Request processed: GET /api/dashboard/stats 200 12ms' },
                { time: '14:31:58', level: 'INFO', msg: '[auth-service] Token validated for user_id=1 session=abc123' },
                { time: '14:31:45', level: 'WARN', msg: '[webhook-service] Delivery retry #2 for hook_id=wh_4821 endpoint=https://meridian.com/hook' },
                { time: '14:31:30', level: 'INFO', msg: '[ai-agent] Job AGT-4822 step 3/5 completed. Tokens used: 847' },
                { time: '14:31:22', level: 'ERROR', msg: '[pdf-engine] OCR timeout for document doc_9913_page_42. Retrying with fallback model.' },
                { time: '14:31:15', level: 'INFO', msg: '[billing] Invoice INV-2844 generated for client=novatech amount=$8,750' },
                { time: '14:31:01', level: 'INFO', msg: '[cdn] Cache invalidation completed for /static/assets/* (42 files)' },
                { time: '14:30:55', level: 'WARN', msg: '[rate-limiter] Client ip=103.42.18.91 exceeded 100 req/min. Throttling.' },
                { time: '14:30:42', level: 'INFO', msg: '[db-cluster] Health check passed. Primary: us-east-1, Replicas: 3/3 healthy' },
                { time: '14:30:30', level: 'INFO', msg: '[smart-home] Device heartbeat received from 1,247 connected devices' },
              ].map((log, i) => (
                <div key={i} className={`p-1.5 rounded ${log.level === 'ERROR' ? 'bg-red-500/5 text-red-300' : log.level === 'WARN' ? 'bg-yellow-500/5 text-yellow-300' : 'text-cream/40'}`}>
                  <span className="text-cream/20">{log.time}</span> <span className={`${log.level === 'ERROR' ? 'text-red-400' : log.level === 'WARN' ? 'text-yellow-400' : 'text-blue-400'}`}>[{log.level}]</span> {log.msg}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
