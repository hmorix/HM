import { useState } from 'react'
import { CheckCircle, Circle, Clock, AlertCircle, Plus, Filter } from 'lucide-react'

const allTasks = [
  { id: 1, title: 'Complete Q2 self-assessment', description: 'Fill out performance review form with accomplishments and goals', due: 'Jul 10, 2024', priority: 'high', status: 'todo', category: 'HR' },
  { id: 2, title: 'Submit expense report - June', description: 'Compile receipts and submit monthly expense report', due: 'Jul 5, 2024', priority: 'medium', status: 'todo', category: 'Finance' },
  { id: 3, title: 'Review team OKRs for Q3', description: 'Provide feedback on proposed Q3 objectives and key results', due: 'Jul 8, 2024', priority: 'medium', status: 'in_progress', category: 'Management' },
  { id: 4, title: 'Complete security awareness training', description: 'Annual cybersecurity training module - 45 min', due: 'Jul 15, 2024', priority: 'low', status: 'todo', category: 'Training' },
  { id: 5, title: 'Code review: BillingFlow webhook handler', description: 'Review PR #4821 - webhook retry logic implementation', due: 'Jul 2, 2024', priority: 'high', status: 'in_progress', category: 'Engineering' },
  { id: 6, title: 'Update API documentation', description: 'Document new endpoints added in v2.4 release', due: 'Jul 12, 2024', priority: 'medium', status: 'todo', category: 'Engineering' },
  { id: 7, title: 'Prepare demo for Quantum Labs', description: 'Set up sandbox environment for client demo on Thursday', due: 'Jul 4, 2024', priority: 'high', status: 'todo', category: 'Client' },
  { id: 8, title: 'Fix PDF extraction edge case', description: 'Handle rotated tables in scanned documents', due: 'Jul 6, 2024', priority: 'medium', status: 'in_progress', category: 'Engineering' },
  { id: 9, title: 'Onboard new team member', description: 'Help Sarah set up dev environment and review codebase', due: 'Jul 3, 2024', priority: 'low', status: 'done', category: 'Team' },
  { id: 10, title: 'Deploy monitoring dashboard', description: 'Set up Grafana dashboards for new microservices', due: 'Jun 28, 2024', priority: 'medium', status: 'done', category: 'Engineering' },
]

export default function Tasks() {
  const [filter, setFilter] = useState('all')

  const filtered = allTasks.filter(t => {
    if (filter === 'all') return true
    return t.status === filter
  })

  const counts = { all: allTasks.length, todo: allTasks.filter(t => t.status === 'todo').length, in_progress: allTasks.filter(t => t.status === 'in_progress').length, done: allTasks.filter(t => t.status === 'done').length }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold mb-2">My Tasks</h1>
            <p className="text-cream/40 text-sm">Track and manage your assigned tasks and deadlines.</p>
          </div>
          <button className="btn-primary text-sm flex items-center gap-2"><Plus size={14} />Add Task</button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { key: 'all', label: `All (${counts.all})` },
            { key: 'todo', label: `To Do (${counts.todo})` },
            { key: 'in_progress', label: `In Progress (${counts.in_progress})` },
            { key: 'done', label: `Done (${counts.done})` },
          ].map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)} className={`px-4 py-2 text-xs rounded-full transition-all ${filter === f.key ? 'bg-[#C8FF00] text-obsidian' : 'bg-white/[0.04] text-cream/50 hover:text-cream'}`}>{f.label}</button>
          ))}
        </div>

        {/* Tasks */}
        <div className="space-y-3">
          {filtered.map(task => (
            <div key={task.id} className={`p-5 bg-obsidian-2 border rounded-[12px] transition-all hover:border-[#C8FF00]/20 ${task.status === 'done' ? 'border-glass-border/50 opacity-60' : 'border-glass-border'}`}>
              <div className="flex items-start gap-4">
                <button className="mt-0.5">
                  {task.status === 'done' ? <CheckCircle size={20} className="text-green-400" /> : task.status === 'in_progress' ? <Clock size={20} className="text-blue-400" /> : <Circle size={20} className="text-cream/20" />}
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className={`font-medium text-sm ${task.status === 'done' ? 'line-through text-cream/40' : ''}`}>{task.title}</h4>
                    <span className={`px-2 py-0.5 text-[10px] rounded ${task.priority === 'high' ? 'bg-red-500/10 text-red-400' : task.priority === 'medium' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-green-500/10 text-green-400'}`}>{task.priority}</span>
                    <span className="px-2 py-0.5 text-[10px] bg-white/[0.06] rounded text-cream/30">{task.category}</span>
                  </div>
                  <p className="text-xs text-cream/30 mb-2">{task.description}</p>
                  <div className="flex items-center gap-2 text-[10px] text-cream/20">
                    <Clock size={10} />
                    <span>Due: {task.due}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
