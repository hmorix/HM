import { CheckCircle, AlertTriangle } from 'lucide-react'

const services = [
  { name: 'HMorix Cloud Platform', status: 'operational', uptime: '99.99%' },
  { name: 'BillingFlow API', status: 'operational', uptime: '99.98%' },
  { name: 'AI Agent Service', status: 'operational', uptime: '99.95%' },
  { name: 'PDF Processing Engine', status: 'operational', uptime: '99.97%' },
  { name: 'Smart Home Gateway', status: 'operational', uptime: '99.96%' },
  { name: 'Authentication Service', status: 'operational', uptime: '99.99%' },
  { name: 'CDN & Static Assets', status: 'operational', uptime: '100%' },
  { name: 'Database Cluster', status: 'operational', uptime: '99.99%' },
  { name: 'Email Service', status: 'operational', uptime: '99.94%' },
  { name: 'Webhook Delivery', status: 'operational', uptime: '99.97%' },
]

const incidents = [
  { date: 'Jun 20, 2024', title: 'Scheduled Maintenance - Database Migration', status: 'resolved', duration: '23 min' },
  { date: 'Jun 12, 2024', title: 'Elevated API Latency', status: 'resolved', duration: '8 min' },
  { date: 'May 28, 2024', title: 'PDF Processing Delay', status: 'resolved', duration: '15 min' },
]

export default function Status() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="label-mono">System Status</span>
            <h1 className="section-title mt-3">HMorix Status</h1>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <CheckCircle size={18} className="text-green-500" />
            <span className="text-sm font-medium text-green-500">All Systems Operational</span>
          </div>
        </div>

        {/* Uptime Bar */}
        <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium">90-Day Uptime</span>
            <span className="font-mono text-sm text-[#C8FF00]">99.98%</span>
          </div>
          <div className="flex gap-0.5">
            {Array.from({length: 90}).map((_, i) => (
              <div key={i} className={`flex-1 h-8 rounded-sm ${i === 42 || i === 67 ? 'bg-yellow-500' : 'bg-green-500'}`} title={i === 42 || i === 67 ? 'Partial outage' : 'Operational'} />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-cream/30">
            <span>90 days ago</span>
            <span>Today</span>
          </div>
        </div>

        {/* Services */}
        <div className="bg-obsidian-2 border border-glass-border rounded-[16px] overflow-hidden mb-12">
          <div className="px-6 py-4 border-b border-glass-border">
            <h2 className="font-display font-semibold">Service Status</h2>
          </div>
          {services.map((service, i) => (
            <div key={i} className="flex items-center justify-between px-6 py-4 border-b border-glass-border last:border-b-0 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm">{service.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-cream/40">{service.uptime}</span>
                <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full capitalize">{service.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Incidents */}
        <h2 className="font-display text-2xl font-bold mb-6">Recent Incidents</h2>
        <div className="space-y-4">
          {incidents.map((incident, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-semibold text-sm">{incident.title}</h3>
                <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full capitalize">{incident.status}</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-cream/40">
                <span>{incident.date}</span>
                <span>Duration: {incident.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
