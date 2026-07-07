import { useState } from 'react'
import SEOHead from '../../components/seo/SEOHead'
import { Briefcase, MapPin, Clock, Users, Eye, ChevronDown } from 'lucide-react'

const jobs = [
  { id: 1, title: 'Senior Frontend Engineer', department: 'Engineering', location: 'San Francisco / Remote', type: 'Full-time', salary: '$150K-$200K', applicants: 47, status: 'active', posted: '2024-06-20', pipeline: { applied: 47, screening: 12, interview: 5, offer: 1 } },
  { id: 2, title: 'ML Engineer', department: 'AI/ML', location: 'Remote', type: 'Full-time', salary: '$160K-$220K', applicants: 63, status: 'active', posted: '2024-06-18', pipeline: { applied: 63, screening: 18, interview: 8, offer: 2 } },
  { id: 3, title: 'Product Designer', department: 'Product', location: 'New York / Remote', type: 'Full-time', salary: '$120K-$160K', applicants: 34, status: 'active', posted: '2024-06-22', pipeline: { applied: 34, screening: 8, interview: 3, offer: 0 } },
  { id: 4, title: 'Account Executive', department: 'Sales', location: 'San Francisco', type: 'Full-time', salary: '$90K-$130K + Commission', applicants: 28, status: 'active', posted: '2024-06-15', pipeline: { applied: 28, screening: 10, interview: 4, offer: 1 } },
  { id: 5, title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time', salary: '$140K-$180K', applicants: 39, status: 'active', posted: '2024-06-12', pipeline: { applied: 39, screening: 14, interview: 6, offer: 0 } },
  { id: 6, title: 'Content Marketing Manager', department: 'Marketing', location: 'Remote', type: 'Full-time', salary: '$100K-$130K', applicants: 52, status: 'active', posted: '2024-06-10', pipeline: { applied: 52, screening: 15, interview: 4, offer: 0 } },
  { id: 7, title: 'Security Engineer', department: 'Security', location: 'San Francisco', type: 'Full-time', salary: '$155K-$200K', applicants: 21, status: 'active', posted: '2024-06-08', pipeline: { applied: 21, screening: 7, interview: 3, offer: 1 } },
  { id: 8, title: 'Data Analyst Intern', department: 'AI/ML', location: 'Remote', type: 'Internship', salary: '$40/hr', applicants: 89, status: 'active', posted: '2024-06-25', pipeline: { applied: 89, screening: 20, interview: 8, offer: 0 } },
]

export default function Recruitment() {
  const [deptFilter, setDeptFilter] = useState('all')

  const filtered = deptFilter === 'all' ? jobs : jobs.filter(j => j.department === deptFilter)
  const totalApplicants = jobs.reduce((s, j) => s + j.applicants, 0)

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead title="HRM Recruitment" description="Recruitment pipeline management - track job openings, applicants, interviews, and hiring progress." keywords="recruitment, hiring, job openings, applicant tracking, ATS, talent acquisition, HR recruitment, interview pipeline" canonical="/hrm/recruitment" />
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold">Recruitment</h1>
            <p className="text-cream/50 text-sm mt-1">{jobs.length} open positions · {totalApplicants} total applicants</p>
          </div>
          <button className="btn-primary text-sm">+ Post New Job</button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-obsidian-2 border border-glass-border rounded-[12px] text-center">
            <div className="text-2xl font-bold text-[#C8FF00]">{jobs.length}</div>
            <div className="text-xs text-cream/30">Open Positions</div>
          </div>
          <div className="p-4 bg-obsidian-2 border border-glass-border rounded-[12px] text-center">
            <div className="text-2xl font-bold">{totalApplicants}</div>
            <div className="text-xs text-cream/30">Total Applicants</div>
          </div>
          <div className="p-4 bg-obsidian-2 border border-glass-border rounded-[12px] text-center">
            <div className="text-2xl font-bold">41</div>
            <div className="text-xs text-cream/30">In Interview</div>
          </div>
          <div className="p-4 bg-obsidian-2 border border-glass-border rounded-[12px] text-center">
            <div className="text-2xl font-bold text-green-400">5</div>
            <div className="text-xs text-cream/30">Offers Extended</div>
          </div>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-3 mb-6">
          <select value={deptFilter} onChange={e => setDeptFilter(e.target.value)} className="px-3 py-2 bg-obsidian-2 border border-glass-border rounded-[6px] text-sm text-cream/70">
            <option value="all">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="AI/ML">AI/ML</option>
            <option value="Product">Product</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Security">Security</option>
          </select>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filtered.map(job => (
            <div key={job.id} className="p-6 bg-obsidian-2 border border-glass-border rounded-[12px] hover:border-[#C8FF00]/20 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-lg font-semibold">{job.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-xs text-cream/40">
                    <span className="flex items-center gap-1"><Briefcase size={12} /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                    <span className="text-[#C8FF00]">{job.salary}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs"><Users size={12} /> {job.applicants}</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">{job.status}</span>
                </div>
              </div>
              {/* Pipeline */}
              <div className="flex gap-2">
                {Object.entries(job.pipeline).map(([stage, count], i) => (
                  <div key={stage} className="flex-1 p-2 bg-obsidian border border-glass-border rounded-[6px] text-center">
                    <div className="text-sm font-bold">{count}</div>
                    <div className="text-[9px] text-cream/30 capitalize">{stage}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
