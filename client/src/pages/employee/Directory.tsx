import { useState } from 'react'
import { Search, MapPin, Mail, Phone } from 'lucide-react'

const departments = ['All', 'Engineering', 'Product', 'Design', 'Marketing', 'Sales', 'HR', 'Finance']

const employees = [
  { name: 'Hamza Morix', role: 'CEO & Founder', dept: 'Engineering', location: 'San Francisco', email: 'hamza@hmorix.com', status: 'online' },
  { name: 'Sarah Chen', role: 'VP of Product', dept: 'Product', location: 'San Francisco', email: 'sarah@hmorix.com', status: 'online' },
  { name: 'Mike Johnson', role: 'Head of Security', dept: 'Engineering', location: 'New York', email: 'mike@hmorix.com', status: 'busy' },
  { name: 'Emily Park', role: 'Lead ML Engineer', dept: 'Engineering', location: 'Seattle', email: 'emily@hmorix.com', status: 'online' },
  { name: 'Alex Rivera', role: 'Senior DevOps', dept: 'Engineering', location: 'Austin', email: 'alex@hmorix.com', status: 'offline' },
  { name: 'Lisa Martinez', role: 'Frontend Lead', dept: 'Engineering', location: 'San Francisco', email: 'lisa@hmorix.com', status: 'online' },
  { name: 'David Kim', role: 'Product Manager', dept: 'Product', location: 'San Francisco', email: 'david@hmorix.com', status: 'online' },
  { name: 'James Wu', role: 'IoT Engineer', dept: 'Engineering', location: 'San Francisco', email: 'james@hmorix.com', status: 'busy' },
  { name: 'Rachel Green', role: 'UX Designer', dept: 'Design', location: 'New York', email: 'rachel@hmorix.com', status: 'online' },
  { name: 'Tom Wilson', role: 'Marketing Director', dept: 'Marketing', location: 'Los Angeles', email: 'tom@hmorix.com', status: 'offline' },
  { name: 'Nina Patel', role: 'Sales Manager', dept: 'Sales', location: 'Chicago', email: 'nina@hmorix.com', status: 'online' },
  { name: 'Chris Anderson', role: 'HR Manager', dept: 'HR', location: 'San Francisco', email: 'chris@hmorix.com', status: 'online' },
]

export default function Directory() {
  const [search, setSearch] = useState('')
  const [dept, setDept] = useState('All')

  const filtered = employees.filter(e => {
    const matchDept = dept === 'All' || e.dept === dept
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.role.toLowerCase().includes(search.toLowerCase())
    return matchDept && matchSearch
  })

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-8">
        <h1 className="font-display text-3xl font-bold mb-2">Employee Directory</h1>
        <p className="text-cream/40 text-sm mb-8">Find and connect with team members across the organization.</p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/30" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or role..." className="w-full pl-10 pr-4 py-3 bg-obsidian-2 border border-glass-border rounded-[8px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {departments.map(d => (
              <button key={d} onClick={() => setDept(d)} className={`px-3 py-2 text-xs rounded-full whitespace-nowrap transition-all ${dept === d ? 'bg-[#C8FF00] text-obsidian' : 'bg-white/[0.04] text-cream/50 hover:text-cream'}`}>{d}</button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((emp, i) => (
            <div key={i} className="p-5 bg-obsidian-2 border border-glass-border rounded-[12px] hover:border-[#C8FF00]/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-obsidian-3 rounded-full flex items-center justify-center text-sm font-bold">{emp.name.split(' ').map(n => n[0]).join('')}</div>
                  <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-obsidian-2 ${emp.status === 'online' ? 'bg-green-400' : emp.status === 'busy' ? 'bg-yellow-400' : 'bg-gray-500'}`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{emp.name}</h4>
                  <p className="text-xs text-cream/40">{emp.role}</p>
                  <p className="text-[10px] text-cream/20 mt-1">{emp.dept}</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-glass-border/50 space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-cream/30"><MapPin size={10} />{emp.location}</div>
                <div className="flex items-center gap-2 text-xs text-cream/30"><Mail size={10} />{emp.email}</div>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="flex-1 py-1.5 text-[10px] bg-white/[0.04] border border-glass-border rounded-[4px] text-cream/50 hover:text-cream hover:border-cream transition-all">Message</button>
                <button className="flex-1 py-1.5 text-[10px] bg-white/[0.04] border border-glass-border rounded-[4px] text-cream/50 hover:text-cream hover:border-cream transition-all">Schedule</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
