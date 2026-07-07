import { useState } from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 42000, expenses: 28000 },
  { month: 'Feb', revenue: 48000, expenses: 30000 },
  { month: 'Mar', revenue: 55000, expenses: 32000 },
  { month: 'Apr', revenue: 51000, expenses: 29000 },
  { month: 'May', revenue: 62000, expenses: 34000 },
  { month: 'Jun', revenue: 71000, expenses: 36000 },
  { month: 'Jul', revenue: 84210, expenses: 38000 },
]

const systemHealth = [
  { time: '00:00', cpu: 42, memory: 65, requests: 1200 },
  { time: '04:00', cpu: 35, memory: 62, requests: 800 },
  { time: '08:00', cpu: 68, memory: 71, requests: 3400 },
  { time: '12:00', cpu: 82, memory: 78, requests: 5200 },
  { time: '16:00', cpu: 75, memory: 74, requests: 4800 },
  { time: '20:00', cpu: 58, memory: 69, requests: 2900 },
  { time: '23:59', cpu: 45, memory: 66, requests: 1500 },
]

const securityEvents = [
  { type: 'Blocked', count: 2847 },
  { type: 'Flagged', count: 142 },
  { type: 'Resolved', count: 2705 },
  { type: 'Active', count: 3 },
]

const COLORS = ['#C8FF00', '#22c55e', '#3b82f6', '#ef4444']

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="label-mono">Enterprise Dashboard</span>
            <h1 className="font-display text-3xl font-bold tracking-tight mt-2">HMorix Platform Overview</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs text-green-500">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> All Systems Operational
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 border-b border-glass-border">
          {['overview','security','ai-jobs','billing'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2.5 text-sm font-medium capitalize transition-all border-b-2 -mb-px ${activeTab === tab ? 'text-[#C8FF00] border-[#C8FF00]' : 'text-cream/50 border-transparent hover:text-cream'}`}>
              {tab.replace('-',' ')}
            </button>
          ))}
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Monthly Revenue', value: '$84,210', change: '+12.4%', up: true },
            { label: 'Active Clients', value: '127', change: '+3', up: true },
            { label: 'AI Jobs Completed', value: '14,892', change: '+847 today', up: true },
            { label: 'Security Score', value: '98.7%', change: 'A+ Rating', up: true },
          ].map((kpi, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all">
              <div className="text-xs text-cream/40 mb-2">{kpi.label}</div>
              <div className="font-display text-2xl font-bold tracking-tight">{kpi.value}</div>
              <div className={`text-xs mt-1 ${kpi.up ? 'text-green-500' : 'text-red-500'}`}>{kpi.change}</div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-semibold">Revenue Analytics</h3>
              <span className="text-xs text-cream/40">Last 7 months</span>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" fontSize={12} />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} />
                <Tooltip contentStyle={{ background: '#141414', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: '#EAE8E3' }} />
                <Bar dataKey="revenue" fill="#C8FF00" radius={[4,4,0,0]} />
                <Bar dataKey="expenses" fill="rgba(255,255,255,0.1)" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Security Events */}
          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
            <h3 className="font-display font-semibold mb-6">Cyber Security Events</h3>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={securityEvents} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="count" nameKey="type">
                  {securityEvents.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: '#141414', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: '#EAE8E3' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {securityEvents.map((e, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full" style={{background: COLORS[i]}} />
                  <span className="text-cream/50">{e.type}: {e.count.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
            <h3 className="font-display font-semibold mb-6">System Health</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={systemHealth}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="time" stroke="rgba(255,255,255,0.3)" fontSize={11} />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={11} />
                <Tooltip contentStyle={{ background: '#141414', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: '#EAE8E3' }} />
                <Line type="monotone" dataKey="cpu" stroke="#C8FF00" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="memory" stroke="#3b82f6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex gap-4 mt-3">
              <span className="flex items-center gap-2 text-xs text-cream/50"><span className="w-3 h-0.5 bg-[#C8FF00]" /> CPU</span>
              <span className="flex items-center gap-2 text-xs text-cream/50"><span className="w-3 h-0.5 bg-blue-500" /> Memory</span>
            </div>
          </div>

          {/* Active Projects */}
          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
            <h3 className="font-display font-semibold mb-6">Client Projects</h3>
            <div className="space-y-3">
              {[
                { name: 'Meridian Corp - CRM Rebuild', progress: 87, status: 'On Track' },
                { name: 'NovaTech - Security Audit', progress: 64, status: 'In Progress' },
                { name: 'Apex - PDF Migration', progress: 100, status: 'Complete' },
                { name: 'Stellar - AI Integration', progress: 32, status: 'In Progress' },
                { name: 'Quantum - Smart Home', progress: 51, status: 'On Track' },
              ].map((p, i) => (
                <div key={i} className="p-3 bg-white/[0.02] border border-glass-border rounded-[8px]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{p.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${p.status === 'Complete' ? 'bg-green-500/15 text-green-500' : p.status === 'On Track' ? 'bg-[#C8FF00]/15 text-[#C8FF00]' : 'bg-blue-500/15 text-blue-500'}`}>{p.status}</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full bg-[#C8FF00] rounded-full transition-all" style={{width:`${p.progress}%`}} />
                  </div>
                  <span className="text-[10px] text-cream/30 mt-1 block">{p.progress}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Jobs & PDF Processing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
            <h3 className="font-display font-semibold mb-6">AI Agent Jobs</h3>
            <div className="space-y-2">
              {[
                { id: 'AGT-4821', task: 'Website Generation', client: 'Meridian', time: '2m ago', status: 'Complete' },
                { id: 'AGT-4822', task: 'Workflow Automation', client: 'NovaTech', time: '5m ago', status: 'Running' },
                { id: 'AGT-4823', task: 'Data Analysis', client: 'Apex Corp', time: '12m ago', status: 'Complete' },
                { id: 'AGT-4824', task: 'Code Review', client: 'Stellar', time: '18m ago', status: 'Complete' },
              ].map((job, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/[0.02] border border-glass-border rounded-[8px]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#C8FF00]">{job.id}</span>
                    <div>
                      <div className="text-sm">{job.task}</div>
                      <div className="text-[10px] text-cream/30">{job.client} · {job.time}</div>
                    </div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${job.status === 'Complete' ? 'bg-green-500/15 text-green-500' : 'bg-[#C8FF00]/15 text-[#C8FF00]'}`}>{job.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
            <h3 className="font-display font-semibold mb-6">PDF Processing Jobs</h3>
            <div className="space-y-2">
              {[
                { id: 'PDF-9912', file: 'contracts_batch_Q3.csv', docs: 2840, processed: 2840, status: 'Complete' },
                { id: 'PDF-9913', file: 'invoices_june.zip', docs: 1420, processed: 1089, status: 'Processing' },
                { id: 'PDF-9914', file: 'reports_annual.pdf', docs: 1, processed: 1, status: 'Complete' },
                { id: 'PDF-9915', file: 'hr_documents.zip', docs: 340, processed: 127, status: 'Processing' },
              ].map((job, i) => (
                <div key={i} className="p-3 bg-white/[0.02] border border-glass-border rounded-[8px]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-xs text-[#C8FF00]">{job.id}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${job.status === 'Complete' ? 'bg-green-500/15 text-green-500' : 'bg-blue-500/15 text-blue-500'}`}>{job.status}</span>
                  </div>
                  <div className="text-sm mb-1">{job.file}</div>
                  <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full bg-[#C8FF00] rounded-full" style={{width:`${(job.processed/job.docs)*100}%`}} />
                  </div>
                  <span className="text-[10px] text-cream/30 mt-1 block">{job.processed.toLocaleString()} / {job.docs.toLocaleString()} docs</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
