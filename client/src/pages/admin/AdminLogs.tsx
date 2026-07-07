import { useState } from 'react'
import { Search, Download, Filter, RefreshCw } from 'lucide-react'

const logs = [
  { time: '2024-06-28 14:32:01', level: 'INFO', service: 'api-gateway', msg: 'Request processed: GET /api/dashboard/stats 200 12ms', ip: '192.168.1.1' },
  { time: '2024-06-28 14:31:58', level: 'INFO', service: 'auth-service', msg: 'Token validated for user_id=1 session=abc123', ip: '192.168.1.1' },
  { time: '2024-06-28 14:31:45', level: 'WARN', service: 'webhook-service', msg: 'Delivery retry #2 for hook_id=wh_4821 endpoint=https://meridian.com/hook', ip: 'internal' },
  { time: '2024-06-28 14:31:30', level: 'INFO', service: 'ai-agent', msg: 'Job AGT-4822 step 3/5 completed. Tokens used: 847', ip: 'internal' },
  { time: '2024-06-28 14:31:22', level: 'ERROR', service: 'pdf-engine', msg: 'OCR timeout for document doc_9913_page_42. Retrying with fallback model.', ip: 'internal' },
  { time: '2024-06-28 14:31:15', level: 'INFO', service: 'billing', msg: 'Invoice INV-2844 generated for client=novatech amount=$8,750', ip: 'internal' },
  { time: '2024-06-28 14:31:01', level: 'INFO', service: 'cdn', msg: 'Cache invalidation completed for /static/assets/* (42 files)', ip: 'internal' },
  { time: '2024-06-28 14:30:55', level: 'WARN', service: 'rate-limiter', msg: 'Client ip=103.42.18.91 exceeded 100 req/min. Throttling.', ip: '103.42.18.91' },
  { time: '2024-06-28 14:30:42', level: 'INFO', service: 'db-cluster', msg: 'Health check passed. Primary: us-east-1, Replicas: 3/3 healthy', ip: 'internal' },
  { time: '2024-06-28 14:30:30', level: 'INFO', service: 'smart-home', msg: 'Device heartbeat received from 1,247 connected devices', ip: 'internal' },
  { time: '2024-06-28 14:30:15', level: 'ERROR', service: 'email-service', msg: 'SMTP connection timeout to smtp.sendgrid.net:587. Retrying in 5s.', ip: 'internal' },
  { time: '2024-06-28 14:30:01', level: 'INFO', service: 'auth-service', msg: 'New user registered: flux@flux.ai plan=business', ip: '45.33.22.11' },
  { time: '2024-06-28 14:29:45', level: 'WARN', service: 'security', msg: 'Failed login attempt #3 for email=admin@stellar.dev from ip=103.42.18.91', ip: '103.42.18.91' },
  { time: '2024-06-28 14:29:30', level: 'INFO', service: 'ai-agent', msg: 'Job AGT-4823 completed successfully. Duration: 3421ms', ip: 'internal' },
  { time: '2024-06-28 14:29:15', level: 'INFO', service: 'billing', msg: 'Payment received: INV-2841 amount=$4,200 method=stripe', ip: 'internal' },
]

export default function AdminLogs() {
  const [search, setSearch] = useState('')
  const [level, setLevel] = useState('All')
  const [service, setService] = useState('All')

  const filtered = logs.filter(log => {
    const matchLevel = level === 'All' || log.level === level
    const matchService = service === 'All' || log.service === service
    const matchSearch = log.msg.toLowerCase().includes(search.toLowerCase()) || log.service.toLowerCase().includes(search.toLowerCase())
    return matchLevel && matchService && matchSearch
  })

  const services = ['All', ...Array.from(new Set(logs.map(l => l.service)))]

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold mb-1">System Logs</h1>
            <p className="text-cream/40 text-sm">Real-time log viewer for all platform services.</p>
          </div>
          <div className="flex gap-3">
            <button className="btn-outline text-sm flex items-center gap-2"><RefreshCw size={14} />Refresh</button>
            <button className="btn-outline text-sm flex items-center gap-2"><Download size={14} />Export</button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/30" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search logs..." className="w-full pl-10 pr-4 py-3 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" />
          </div>
          <select value={level} onChange={e => setLevel(e.target.value)} className="px-4 py-3 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream/60 outline-none">
            <option value="All">All Levels</option><option value="ERROR">Error</option><option value="WARN">Warning</option><option value="INFO">Info</option>
          </select>
          <select value={service} onChange={e => setService(e.target.value)} className="px-4 py-3 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream/60 outline-none">
            {services.map(s => <option key={s} value={s}>{s === 'All' ? 'All Services' : s}</option>)}
          </select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Logs (24h)', value: '1.2M' },
            { label: 'Errors', value: '47', color: 'text-red-400' },
            { label: 'Warnings', value: '312', color: 'text-yellow-400' },
            { label: 'Avg Response', value: '45ms' },
          ].map((s, i) => (
            <div key={i} className="p-3 bg-obsidian-2 border border-glass-border rounded-[8px] text-center">
              <div className={`font-display text-lg font-bold ${s.color || ''}`}>{s.value}</div>
              <div className="text-[10px] text-cream/30">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Log Entries */}
        <div className="bg-obsidian-2 border border-glass-border rounded-[16px] overflow-hidden">
          <div className="p-4 font-mono text-xs space-y-0.5 max-h-[600px] overflow-y-auto">
            {filtered.map((log, i) => (
              <div key={i} className={`p-2 rounded hover:bg-white/[0.02] flex gap-3 ${log.level === 'ERROR' ? 'bg-red-500/5' : log.level === 'WARN' ? 'bg-yellow-500/5' : ''}`}>
                <span className="text-cream/20 whitespace-nowrap">{log.time}</span>
                <span className={`w-12 text-center ${log.level === 'ERROR' ? 'text-red-400' : log.level === 'WARN' ? 'text-yellow-400' : 'text-blue-400'}`}>{log.level}</span>
                <span className="text-purple-400 w-28">[{log.service}]</span>
                <span className={`flex-1 ${log.level === 'ERROR' ? 'text-red-300' : log.level === 'WARN' ? 'text-yellow-300' : 'text-cream/50'}`}>{log.msg}</span>
                <span className="text-cream/15 whitespace-nowrap">{log.ip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
