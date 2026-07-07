import { useState } from 'react'
import SEOHead from '../../components/seo/SEOHead'
import { Search, Filter, Plus, Mail, Phone, Building, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react'

const contacts = [
  { id: 1, name: 'John Smith', email: 'john@meridian.com', phone: '+1-555-0101', company: 'Meridian Corp', role: 'CTO', status: 'active', lastContact: '2 days ago', deals: 3, value: '$450K', tags: ['enterprise', 'hot-lead'] },
  { id: 2, name: 'Emily Davis', email: 'emily@novatech.io', phone: '+1-555-0102', company: 'NovaTech', role: 'VP Engineering', status: 'active', lastContact: '1 day ago', deals: 2, value: '$280K', tags: ['mid-market'] },
  { id: 3, name: 'Robert Chang', email: 'robert@quantumlabs.ai', phone: '+1-555-0103', company: 'Quantum Labs', role: 'Head of AI', status: 'active', lastContact: 'Today', deals: 1, value: '$320K', tags: ['enterprise', 'ai'] },
  { id: 4, name: 'Anna Petrov', email: 'anna@fastcart.com', phone: '+1-555-0104', company: 'FastCart', role: 'CEO', status: 'active', lastContact: '3 days ago', deals: 2, value: '$195K', tags: ['startup', 'ecommerce'] },
  { id: 5, name: 'Michael Park', email: 'michael@stellar.io', phone: '+1-555-0105', company: 'Stellar Digital', role: 'Marketing Director', status: 'inactive', lastContact: '2 weeks ago', deals: 1, value: '$75K', tags: ['marketing'] },
  { id: 6, name: 'Lisa Thompson', email: 'lisa@greenleaf.com', phone: '+1-555-0106', company: 'GreenLeaf Homes', role: 'CEO', status: 'active', lastContact: '5 days ago', deals: 1, value: '$150K', tags: ['smart-home', 'b2b'] },
  { id: 7, name: 'David Kim', email: 'david@rocketscale.io', phone: '+1-555-0107', company: 'RocketScale', role: 'Head of Growth', status: 'active', lastContact: '1 day ago', deals: 2, value: '$210K', tags: ['growth', 'advertising'] },
  { id: 8, name: 'Jennifer Walsh', email: 'jennifer@atlas.com', phone: '+1-555-0108', company: 'Atlas Financial', role: 'CFO', status: 'active', lastContact: 'Today', deals: 1, value: '$500K', tags: ['enterprise', 'finance'] },
  { id: 9, name: 'Tom Anderson', email: 'tom@appforge.dev', phone: '+1-555-0109', company: 'AppForge', role: 'Founder', status: 'active', lastContact: '4 days ago', deals: 1, value: '$85K', tags: ['startup', 'mobile'] },
  { id: 10, name: 'Sarah Mitchell', email: 'sarah@securevault.io', phone: '+1-555-0110', company: 'SecureVault', role: 'COO', status: 'active', lastContact: '1 week ago', deals: 1, value: '$340K', tags: ['enterprise', 'security'] },
]

export default function Contacts() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filtered = contacts.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.company.toLowerCase().includes(search.toLowerCase()) || c.email.includes(search.toLowerCase())
    const matchStatus = statusFilter === 'all' || c.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead title="CRM Contacts" description="Manage all your business contacts, leads, and customer relationships in one place." keywords="CRM contacts, contact management, lead management, customer database, sales contacts" canonical="/crm/contacts" />
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold">Contacts</h1>
            <p className="text-cream/50 text-sm mt-1">{contacts.length} total contacts</p>
          </div>
          <button className="btn-primary text-sm flex items-center gap-2"><Plus size={14} /> Add Contact</button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/30" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search contacts, companies, emails..." className="w-full pl-10 pr-4 py-2.5 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-[#C8FF00]/50" />
          </div>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="px-3 py-2.5 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream/70">
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="px-3 py-2.5 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream/70 flex items-center gap-2"><Filter size={14} /> More Filters</button>
        </div>

        {/* Contacts Table */}
        <div className="bg-obsidian-2 border border-glass-border rounded-[12px] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-cream/30 text-xs border-b border-glass-border bg-white/[0.02]">
                  <th className="p-4 font-medium"><input type="checkbox" className="rounded" /></th>
                  <th className="p-4 font-medium">Contact</th>
                  <th className="p-4 font-medium">Company</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Deals</th>
                  <th className="p-4 font-medium">Value</th>
                  <th className="p-4 font-medium">Last Contact</th>
                  <th className="p-4 font-medium">Tags</th>
                  <th className="p-4 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(contact => (
                  <tr key={contact.id} className="border-b border-glass-border/50 hover:bg-white/[0.02] transition-colors">
                    <td className="p-4"><input type="checkbox" className="rounded" /></td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-obsidian-3 rounded-full flex items-center justify-center text-xs font-bold">{contact.name.split(' ').map(n => n[0]).join('')}</div>
                        <div>
                          <div className="font-medium">{contact.name}</div>
                          <div className="text-[10px] text-cream/30 flex items-center gap-2">
                            <span className="flex items-center gap-1"><Mail size={8} /> {contact.email}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Building size={12} className="text-cream/30" />
                        <div>
                          <div className="text-sm">{contact.company}</div>
                          <div className="text-[10px] text-cream/30">{contact.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${contact.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>{contact.status}</span>
                    </td>
                    <td className="p-4">{contact.deals}</td>
                    <td className="p-4 text-[#C8FF00]">{contact.value}</td>
                    <td className="p-4 text-cream/50">{contact.lastContact}</td>
                    <td className="p-4">
                      <div className="flex gap-1 flex-wrap">
                        {contact.tags.map((tag, i) => <span key={i} className="px-1.5 py-0.5 bg-white/[0.06] text-cream/40 text-[9px] rounded">{tag}</span>)}
                      </div>
                    </td>
                    <td className="p-4"><button className="text-cream/30 hover:text-cream"><MoreVertical size={14} /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between p-4 border-t border-glass-border">
            <span className="text-xs text-cream/30">Showing {filtered.length} of {contacts.length} contacts</span>
            <div className="flex items-center gap-2">
              <button className="p-1.5 border border-glass-border rounded hover:border-cream/30"><ChevronLeft size={14} /></button>
              <span className="text-xs text-cream/50">Page 1 of 1</span>
              <button className="p-1.5 border border-glass-border rounded hover:border-cream/30"><ChevronRight size={14} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
