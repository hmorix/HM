import { useState } from 'react'
import { Calendar, DollarSign, Monitor, Plus, Clock, CheckCircle, XCircle } from 'lucide-react'

const requestTypes = ['All', 'Leave', 'Expense', 'IT Support', 'Equipment']

const requests = [
  { id: 'REQ-001', type: 'Leave', title: 'Annual Leave - Family Vacation', status: 'approved', date: 'Jul 15-19, 2024', submitted: 'Jun 25', approver: 'Sarah Chen' },
  { id: 'REQ-002', type: 'Expense', title: 'Conference Travel - React Summit', status: 'pending', date: '$1,240', submitted: 'Jun 27', approver: 'Finance Team' },
  { id: 'REQ-003', type: 'IT Support', title: 'VPN access for remote office', status: 'in_progress', date: 'Priority: Medium', submitted: 'Jun 26', approver: 'IT Team' },
  { id: 'REQ-004', type: 'Equipment', title: 'New Monitor - 4K Display', status: 'approved', date: '$599', submitted: 'Jun 20', approver: 'Chris Anderson' },
  { id: 'REQ-005', type: 'Leave', title: 'Sick Leave', status: 'approved', date: 'Jun 18, 2024', submitted: 'Jun 18', approver: 'Auto-approved' },
  { id: 'REQ-006', type: 'Expense', title: 'Client Dinner - Meridian Corp', status: 'rejected', date: '$320', submitted: 'Jun 15', approver: 'Finance Team' },
]

export default function Requests() {
  const [activeType, setActiveType] = useState('All')
  const [showNewForm, setShowNewForm] = useState(false)

  const filtered = requests.filter(r => activeType === 'All' || r.type === activeType)

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold mb-2">My Requests</h1>
            <p className="text-cream/40 text-sm">Submit and track leave, expense, and IT requests.</p>
          </div>
          <button onClick={() => setShowNewForm(!showNewForm)} className="btn-primary text-sm flex items-center gap-2"><Plus size={14} />New Request</button>
        </div>

        {/* New Request Form */}
        {showNewForm && (
          <div className="mb-8 p-6 bg-obsidian-2 border border-[#C8FF00]/20 rounded-[16px]">
            <h3 className="font-display font-semibold mb-4">Submit New Request</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-cream/40 mb-1.5">Request Type</label>
                <select className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]">
                  <option>Leave Request</option><option>Expense Report</option><option>IT Support</option><option>Equipment Request</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-cream/40 mb-1.5">Priority</label>
                <select className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]">
                  <option>Low</option><option>Medium</option><option>High</option><option>Urgent</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-cream/40 mb-1.5">Title</label>
                <input placeholder="Brief description of your request" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-cream/40 mb-1.5">Details</label>
                <textarea rows={3} placeholder="Provide additional details..." className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30 resize-none" />
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="btn-primary text-sm">Submit Request</button>
              <button onClick={() => setShowNewForm(false)} className="btn-outline text-sm">Cancel</button>
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {requestTypes.map(type => (
            <button key={type} onClick={() => setActiveType(type)} className={`px-4 py-2 text-xs rounded-full transition-all ${activeType === type ? 'bg-[#C8FF00] text-obsidian' : 'bg-white/[0.04] text-cream/50 hover:text-cream'}`}>{type}</button>
          ))}
        </div>

        {/* Requests List */}
        <div className="space-y-3">
          {filtered.map(req => (
            <div key={req.id} className="p-5 bg-obsidian-2 border border-glass-border rounded-[12px] hover:border-[#C8FF00]/20 transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-[8px] flex items-center justify-center ${req.type === 'Leave' ? 'bg-blue-500/10 text-blue-400' : req.type === 'Expense' ? 'bg-green-500/10 text-green-400' : req.type === 'IT Support' ? 'bg-purple-500/10 text-purple-400' : 'bg-orange-500/10 text-orange-400'}`}>
                  {req.type === 'Leave' ? <Calendar size={18} /> : req.type === 'Expense' ? <DollarSign size={18} /> : <Monitor size={18} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-cream/20 font-mono">{req.id}</span>
                    <span className="px-2 py-0.5 text-[10px] bg-white/[0.06] rounded text-cream/40">{req.type}</span>
                  </div>
                  <h4 className="font-medium text-sm mt-1">{req.title}</h4>
                  <div className="flex items-center gap-4 mt-1 text-[10px] text-cream/25">
                    <span>{req.date}</span>
                    <span>Submitted: {req.submitted}</span>
                    <span>Approver: {req.approver}</span>
                  </div>
                </div>
                <span className={`flex items-center gap-1 px-3 py-1 text-xs rounded-full ${
                  req.status === 'approved' ? 'bg-green-500/10 text-green-400' :
                  req.status === 'pending' ? 'bg-yellow-500/10 text-yellow-400' :
                  req.status === 'in_progress' ? 'bg-blue-500/10 text-blue-400' :
                  'bg-red-500/10 text-red-400'
                }`}>
                  {req.status === 'approved' ? <CheckCircle size={12} /> : req.status === 'rejected' ? <XCircle size={12} /> : <Clock size={12} />}
                  {req.status.replace('_', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
