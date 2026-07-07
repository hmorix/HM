import { useState } from 'react'
import { Search, Plus, MoreVertical, Download, Filter, Mail, Ban, Edit, Trash2 } from 'lucide-react'

const users = [
  { id: 1, name: 'Meridian Corp', email: 'admin@meridian.com', plan: 'Enterprise', status: 'active', apiCalls: '142,891', revenue: '$4,200', joined: 'Jan 15, 2024', lastActive: '2 min ago' },
  { id: 2, name: 'NovaTech Inc', email: 'ops@novatech.io', plan: 'Business', status: 'active', apiCalls: '89,421', revenue: '$2,100', joined: 'Feb 3, 2024', lastActive: '15 min ago' },
  { id: 3, name: 'Apex Solutions', email: 'team@apex.co', plan: 'Starter', status: 'trial', apiCalls: '12,340', revenue: '$0', joined: 'Jun 20, 2024', lastActive: '1h ago' },
  { id: 4, name: 'Quantum Labs', email: 'dev@quantum.ai', plan: 'Enterprise', status: 'active', apiCalls: '234,102', revenue: '$8,750', joined: 'Dec 1, 2023', lastActive: '5 min ago' },
  { id: 5, name: 'Stellar Digital', email: 'hi@stellar.dev', plan: 'Business', status: 'suspended', apiCalls: '0', revenue: '$1,050', joined: 'Mar 12, 2024', lastActive: '7d ago' },
  { id: 6, name: 'Orbit Systems', email: 'admin@orbit.io', plan: 'Enterprise', status: 'active', apiCalls: '178,923', revenue: '$6,300', joined: 'Nov 8, 2023', lastActive: '30 min ago' },
  { id: 7, name: 'Flux AI', email: 'team@flux.ai', plan: 'Business', status: 'active', apiCalls: '56,789', revenue: '$2,100', joined: 'Apr 5, 2024', lastActive: '2h ago' },
  { id: 8, name: 'Nebula Tech', email: 'ops@nebula.tech', plan: 'Starter', status: 'active', apiCalls: '8,421', revenue: '$490', joined: 'May 18, 2024', lastActive: '4h ago' },
  { id: 9, name: 'Prism Analytics', email: 'admin@prism.co', plan: 'Enterprise', status: 'active', apiCalls: '312,456', revenue: '$12,600', joined: 'Oct 22, 2023', lastActive: '1 min ago' },
  { id: 10, name: 'Vertex Labs', email: 'dev@vertex.io', plan: 'Free', status: 'active', apiCalls: '2,100', revenue: '$0', joined: 'Jun 25, 2024', lastActive: '3d ago' },
]

export default function AdminUsers() {
  const [search, setSearch] = useState('')
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])
  const [actionMenu, setActionMenu] = useState<number | null>(null)

  const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()))

  const toggleSelect = (id: number) => {
    setSelectedUsers(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold mb-1">User Management</h1>
            <p className="text-cream/40 text-sm">Manage all platform users, subscriptions, and permissions.</p>
          </div>
          <div className="flex gap-3">
            <button className="btn-outline text-sm flex items-center gap-2"><Download size={14} />Export</button>
            <button className="btn-primary text-sm flex items-center gap-2"><Plus size={14} />Add User</button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/30" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search users..." className="w-full pl-10 pr-4 py-3 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" />
          </div>
          <select className="px-4 py-3 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream/60 outline-none">
            <option>All Plans</option><option>Enterprise</option><option>Business</option><option>Starter</option><option>Free</option>
          </select>
          <select className="px-4 py-3 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream/60 outline-none">
            <option>All Status</option><option>Active</option><option>Trial</option><option>Suspended</option>
          </select>
        </div>

        {/* Bulk Actions */}
        {selectedUsers.length > 0 && (
          <div className="flex items-center gap-4 mb-4 p-3 bg-[#C8FF00]/5 border border-[#C8FF00]/20 rounded-[8px]">
            <span className="text-sm">{selectedUsers.length} selected</span>
            <button className="text-xs px-3 py-1 bg-white/[0.06] rounded text-cream/60 hover:text-cream">Send Email</button>
            <button className="text-xs px-3 py-1 bg-white/[0.06] rounded text-cream/60 hover:text-cream">Change Plan</button>
            <button className="text-xs px-3 py-1 bg-red-500/10 rounded text-red-400 hover:bg-red-500/20">Suspend</button>
            <button onClick={() => setSelectedUsers([])} className="ml-auto text-xs text-cream/30 hover:text-cream">Clear</button>
          </div>
        )}

        {/* Table */}
        <div className="bg-obsidian-2 border border-glass-border rounded-[16px] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-cream/30 border-b border-glass-border bg-white/[0.02]">
                <th className="text-left px-4 py-3 w-8"><input type="checkbox" className="rounded" /></th>
                <th className="text-left px-4 py-3">User</th>
                <th className="text-left px-4 py-3">Plan</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-left px-4 py-3">API Calls</th>
                <th className="text-left px-4 py-3">Revenue</th>
                <th className="text-left px-4 py-3">Joined</th>
                <th className="text-left px-4 py-3">Last Active</th>
                <th className="text-left px-4 py-3 w-10"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(user => (
                <tr key={user.id} className="border-b border-glass-border/50 hover:bg-white/[0.02]">
                  <td className="px-4 py-3"><input type="checkbox" checked={selectedUsers.includes(user.id)} onChange={() => toggleSelect(user.id)} className="rounded" /></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-obsidian-3 rounded-full flex items-center justify-center text-[10px] font-bold">{user.name.split(' ').map(n => n[0]).join('')}</div>
                      <div><div className="font-medium">{user.name}</div><div className="text-[10px] text-cream/20">{user.email}</div></div>
                    </div>
                  </td>
                  <td className="px-4 py-3"><span className={`px-2 py-0.5 text-[10px] rounded ${user.plan === 'Enterprise' ? 'bg-purple-500/10 text-purple-400' : user.plan === 'Business' ? 'bg-blue-500/10 text-blue-400' : user.plan === 'Starter' ? 'bg-green-500/10 text-green-400' : 'bg-white/[0.06] text-cream/40'}`}>{user.plan}</span></td>
                  <td className="px-4 py-3"><span className={`px-2 py-0.5 text-[10px] rounded-full ${user.status === 'active' ? 'bg-green-500/10 text-green-400' : user.status === 'trial' ? 'bg-blue-500/10 text-blue-400' : 'bg-red-500/10 text-red-400'}`}>{user.status}</span></td>
                  <td className="px-4 py-3 text-cream/50">{user.apiCalls}</td>
                  <td className="px-4 py-3 text-cream/50">{user.revenue}</td>
                  <td className="px-4 py-3 text-cream/30 text-xs">{user.joined}</td>
                  <td className="px-4 py-3 text-cream/30 text-xs">{user.lastActive}</td>
                  <td className="px-4 py-3 relative">
                    <button onClick={() => setActionMenu(actionMenu === user.id ? null : user.id)} className="w-6 h-6 flex items-center justify-center text-cream/30 hover:text-cream rounded hover:bg-white/[0.06]"><MoreVertical size={14} /></button>
                    {actionMenu === user.id && (
                      <div className="absolute right-4 top-full mt-1 w-40 bg-obsidian-2 border border-glass-border rounded-[8px] p-1 z-10">
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-cream/60 hover:text-cream hover:bg-white/[0.04] rounded-[4px]"><Edit size={12} />Edit User</button>
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-cream/60 hover:text-cream hover:bg-white/[0.04] rounded-[4px]"><Mail size={12} />Send Email</button>
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-cream/60 hover:text-cream hover:bg-white/[0.04] rounded-[4px]"><Ban size={12} />Suspend</button>
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-400 hover:bg-red-500/10 rounded-[4px]"><Trash2 size={12} />Delete</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-xs text-cream/30">
          <span>Showing 1-10 of 2,847 users</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 bg-white/[0.04] border border-glass-border rounded text-cream/40 hover:text-cream">Previous</button>
            <button className="px-3 py-1.5 bg-[#C8FF00] text-obsidian rounded font-medium">1</button>
            <button className="px-3 py-1.5 bg-white/[0.04] border border-glass-border rounded text-cream/40 hover:text-cream">2</button>
            <button className="px-3 py-1.5 bg-white/[0.04] border border-glass-border rounded text-cream/40 hover:text-cream">3</button>
            <button className="px-3 py-1.5 bg-white/[0.04] border border-glass-border rounded text-cream/40 hover:text-cream">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
