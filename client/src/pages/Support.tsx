import { useState } from 'react'
import { MessageCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function Support() {
  const [ticketForm, setTicketForm] = useState(false)

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">Support Center</span>
        <h1 className="section-title mt-3 mb-6">How can we help?</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-12">Our support team is available 24/7 for enterprise clients. Submit a ticket or browse our knowledge base.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Clock, label: 'Avg Response', value: '< 1 hour', sub: 'Enterprise SLA' },
            { icon: CheckCircle, label: 'Resolution Rate', value: '97.8%', sub: 'First contact' },
            { icon: MessageCircle, label: 'Satisfaction', value: '4.9/5', sub: 'CSAT Score' },
          ].map((s, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] text-center">
              <s.icon size={24} className="text-[#C8FF00] mx-auto mb-3" />
              <div className="font-display text-2xl font-bold">{s.value}</div>
              <div className="text-xs text-cream/40 mt-1">{s.label} · {s.sub}</div>
            </div>
          ))}
        </div>

        {/* Tickets */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold">Support Tickets</h2>
          <button onClick={() => setTicketForm(!ticketForm)} className="px-4 py-2 bg-[#C8FF00] text-obsidian font-display font-semibold text-sm rounded-[4px] hover:opacity-90 transition-all">
            {ticketForm ? 'View Tickets' : '+ New Ticket'}
          </button>
        </div>

        {ticketForm ? (
          <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px]">
            <h3 className="font-display font-semibold mb-4">Submit a Ticket</h3>
            <form onSubmit={e => { e.preventDefault(); setTicketForm(false) }} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-cream/60 mb-1.5">Subject</label>
                <input type="text" placeholder="Brief description of your issue" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-cream/60 mb-1.5">Priority</label>
                  <select className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]">
                    <option>Low</option><option>Medium</option><option>High</option><option>Critical</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-cream/60 mb-1.5">Product</label>
                  <select className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]">
                    <option>BillingFlow</option><option>AI Agent</option><option>PDF Automation</option><option>Smart Home</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-cream/60 mb-1.5">Description</label>
                <textarea rows={4} placeholder="Detailed description..." className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] resize-none placeholder:text-cream/30" />
              </div>
              <button type="submit" className="px-6 py-3 bg-[#C8FF00] text-obsidian font-display font-semibold rounded-[4px] hover:opacity-90 transition-all">Submit Ticket</button>
            </form>
          </div>
        ) : (
          <div className="bg-obsidian-2 border border-glass-border rounded-[16px] overflow-hidden">
            {[
              { id: 'TKT-4521', subject: 'BillingFlow webhook not firing', priority: 'High', status: 'In Progress', time: '2h ago' },
              { id: 'TKT-4520', subject: 'PDF extraction accuracy issue', priority: 'Medium', status: 'Open', time: '5h ago' },
              { id: 'TKT-4519', subject: 'API rate limit increase request', priority: 'Low', status: 'Resolved', time: '1d ago' },
              { id: 'TKT-4518', subject: 'Smart Home device offline', priority: 'High', status: 'Resolved', time: '2d ago' },
              { id: 'TKT-4517', subject: 'Invoice template customization', priority: 'Low', status: 'Resolved', time: '3d ago' },
            ].map((ticket, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4 border-b border-glass-border last:border-b-0 hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-4">
                  {ticket.status === 'Resolved' ? <CheckCircle size={16} className="text-green-500" /> : ticket.status === 'In Progress' ? <Clock size={16} className="text-[#C8FF00]" /> : <AlertCircle size={16} className="text-yellow-500" />}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-cream/40">{ticket.id}</span>
                      <span className="text-sm">{ticket.subject}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${ticket.priority === 'High' ? 'bg-red-500/10 text-red-400' : ticket.priority === 'Medium' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-white/5 text-cream/40'}`}>{ticket.priority}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${ticket.status === 'Resolved' ? 'bg-green-500/10 text-green-500' : ticket.status === 'In Progress' ? 'bg-[#C8FF00]/10 text-[#C8FF00]' : 'bg-yellow-500/10 text-yellow-500'}`}>{ticket.status}</span>
                  <span className="text-xs text-cream/30">{ticket.time}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
