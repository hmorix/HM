import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, FileText, Users, Award, TrendingUp, MessageSquare, CheckCircle, AlertCircle, Briefcase } from 'lucide-react'

const tabs = ['Overview', 'Time & Attendance', 'Leave', 'Payroll', 'Performance', 'Team', 'Documents', 'Training']

const announcements = [
  { title: 'Q3 All-Hands Meeting', date: 'Jul 5, 2024', type: 'event' },
  { title: 'New Health Insurance Plan Available', date: 'Jul 1, 2024', type: 'hr' },
  { title: 'Office Closed: Independence Day', date: 'Jul 4, 2024', type: 'notice' },
]

const tasks = [
  { title: 'Complete Q2 self-assessment', due: 'Jul 10', priority: 'high', status: 'pending' },
  { title: 'Submit expense report', due: 'Jul 5', priority: 'medium', status: 'pending' },
  { title: 'Review team OKRs', due: 'Jul 8', priority: 'medium', status: 'in_progress' },
  { title: 'Complete security training', due: 'Jul 15', priority: 'low', status: 'pending' },
]

const leaveBalance = [
  { type: 'Annual Leave', used: 8, total: 20, color: '#C8FF00' },
  { type: 'Sick Leave', used: 2, total: 10, color: '#00C8FF' },
  { type: 'Personal', used: 1, total: 3, color: '#FF6B6B' },
]

export default function EmployeePortal() {
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold mb-2">Employee Portal</h1>
            <p className="text-cream/40 text-sm">Welcome back, John. Here's your workspace overview.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-outline text-sm">Clock In</button>
            <Link to="/employee/requests" className="btn-primary text-sm">New Request</Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 overflow-x-auto pb-2 border-b border-glass-border">
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-t-[4px] transition-all ${activeTab === tab ? 'text-[#C8FF00] border-b-2 border-[#C8FF00]' : 'text-cream/40 hover:text-cream'}`}>{tab}</button>
          ))}
        </div>

        {activeTab === 'Overview' && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Hours This Week', value: '32.5h', icon: Clock, change: '+2.5h' },
                  { label: 'Tasks Due', value: '4', icon: CheckCircle, change: '2 urgent' },
                  { label: 'Leave Balance', value: '12 days', icon: Calendar, change: '8 used' },
                  { label: 'Performance', value: '4.6/5', icon: TrendingUp, change: '+0.3' },
                ].map((stat, i) => (
                  <div key={i} className="p-4 bg-obsidian-2 border border-glass-border rounded-[12px]">
                    <stat.icon size={16} className="text-[#C8FF00] mb-2" />
                    <div className="font-display text-lg font-bold">{stat.value}</div>
                    <div className="text-[10px] text-cream/30">{stat.label}</div>
                    <div className="text-[10px] text-cream/20 mt-1">{stat.change}</div>
                  </div>
                ))}
              </div>

              {/* Tasks */}
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-semibold">My Tasks</h3>
                  <Link to="/employee/tasks" className="text-xs text-[#C8FF00]">View All</Link>
                </div>
                <div className="space-y-3">
                  {tasks.map((task, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 bg-white/[0.02] rounded-[8px] hover:bg-white/[0.04] transition-all">
                      <div className={`w-2 h-2 rounded-full ${task.priority === 'high' ? 'bg-red-400' : task.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'}`} />
                      <div className="flex-1">
                        <div className="text-sm">{task.title}</div>
                        <div className="text-[10px] text-cream/30">Due: {task.due}</div>
                      </div>
                      <span className={`px-2 py-0.5 text-[10px] rounded-full ${task.status === 'in_progress' ? 'bg-blue-500/10 text-blue-400' : 'bg-white/[0.06] text-cream/40'}`}>{task.status === 'in_progress' ? 'In Progress' : 'Pending'}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Tracking */}
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-4">This Week's Hours</h3>
                <div className="flex items-end gap-2 h-32">
                  {['Mon','Tue','Wed','Thu','Fri'].map((day, i) => {
                    const hours = [8.5, 7.5, 8, 8.5, 0][i]
                    return (
                      <div key={day} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-[#C8FF00]/20 rounded-t-[4px] relative" style={{height: `${(hours/9)*100}%`}}>
                          <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-cream/40">{hours}h</div>
                        </div>
                        <span className="text-[10px] text-cream/30">{day}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] text-center">
                <div className="w-16 h-16 bg-obsidian-3 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">JD</div>
                <h4 className="font-display font-semibold">John Doe</h4>
                <p className="text-xs text-cream/30 mb-3">Senior Software Engineer</p>
                <div className="text-[10px] text-cream/20 space-y-1">
                  <div>Engineering Team · San Francisco</div>
                  <div>Employee ID: HM-0042</div>
                  <div>Joined: Jan 2023</div>
                </div>
                <Link to="/profile" className="block mt-4 text-xs text-[#C8FF00] hover:underline">Edit Profile</Link>
              </div>

              {/* Leave Balance */}
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h4 className="font-display font-semibold text-sm mb-4">Leave Balance</h4>
                <div className="space-y-3">
                  {leaveBalance.map((leave, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-cream/50">{leave.type}</span>
                        <span className="text-cream/30">{leave.used}/{leave.total}</span>
                      </div>
                      <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{width: `${(leave.used/leave.total)*100}%`, backgroundColor: leave.color}} />
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 text-xs text-center border border-glass-border rounded-[4px] text-cream/40 hover:text-cream hover:border-cream transition-all">Request Leave</button>
              </div>

              {/* Announcements */}
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h4 className="font-display font-semibold text-sm mb-4">Announcements</h4>
                <div className="space-y-3">
                  {announcements.map((ann, i) => (
                    <div key={i} className="flex items-start gap-3 p-2 rounded-[4px] hover:bg-white/[0.02]">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${ann.type === 'event' ? 'bg-blue-500/10 text-blue-400' : ann.type === 'hr' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                        {ann.type === 'event' ? <Calendar size={10} /> : ann.type === 'hr' ? <Users size={10} /> : <AlertCircle size={10} />}
                      </div>
                      <div>
                        <div className="text-xs">{ann.title}</div>
                        <div className="text-[10px] text-cream/20">{ann.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h4 className="font-display font-semibold text-sm mb-4">Quick Links</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Payslips', icon: FileText },
                    { label: 'Benefits', icon: Award },
                    { label: 'Directory', icon: Users },
                    { label: 'IT Support', icon: MessageSquare },
                    { label: 'Policies', icon: Briefcase },
                    { label: 'Training', icon: TrendingUp },
                  ].map((link, i) => (
                    <button key={i} className="flex items-center gap-2 p-2 text-xs text-cream/40 hover:text-cream hover:bg-white/[0.04] rounded-[4px] transition-all">
                      <link.icon size={12} />{link.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Time & Attendance' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] text-center">
                <Clock size={24} className="text-[#C8FF00] mx-auto mb-3" />
                <div className="font-display text-2xl font-bold">08:32 AM</div>
                <div className="text-xs text-cream/30 mt-1">Clocked in today</div>
                <button className="btn-primary w-full mt-4 text-sm">Clock Out</button>
              </div>
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h4 className="text-sm font-semibold mb-3">Today's Summary</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-cream/40">Clock In</span><span>08:32 AM</span></div>
                  <div className="flex justify-between"><span className="text-cream/40">Break</span><span>12:00 - 12:45 PM</span></div>
                  <div className="flex justify-between"><span className="text-cream/40">Total Hours</span><span className="text-[#C8FF00]">6h 15m (ongoing)</span></div>
                  <div className="flex justify-between"><span className="text-cream/40">Overtime</span><span>0h</span></div>
                </div>
              </div>
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h4 className="text-sm font-semibold mb-3">Monthly Summary</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-cream/40">Working Days</span><span>18/22</span></div>
                  <div className="flex justify-between"><span className="text-cream/40">Total Hours</span><span>142.5h</span></div>
                  <div className="flex justify-between"><span className="text-cream/40">Overtime</span><span>4.5h</span></div>
                  <div className="flex justify-between"><span className="text-cream/40">Absences</span><span>1 day</span></div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-4">Attendance Log</h3>
              <table className="w-full text-sm">
                <thead><tr className="text-xs text-cream/30 border-b border-glass-border"><th className="text-left py-2">Date</th><th className="text-left py-2">Clock In</th><th className="text-left py-2">Clock Out</th><th className="text-left py-2">Hours</th><th className="text-left py-2">Status</th></tr></thead>
                <tbody>
                  {[
                    { date: 'Jun 28', in: '08:32', out: '—', hours: '—', status: 'Active' },
                    { date: 'Jun 27', in: '08:15', out: '17:45', hours: '8.5h', status: 'Complete' },
                    { date: 'Jun 26', in: '09:00', out: '17:00', hours: '7.5h', status: 'Complete' },
                    { date: 'Jun 25', in: '08:30', out: '17:30', hours: '8h', status: 'Complete' },
                    { date: 'Jun 24', in: '08:45', out: '18:15', hours: '8.5h', status: 'Complete' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-glass-border/50 text-cream/60">
                      <td className="py-3">{row.date}</td>
                      <td className="py-3">{row.in}</td>
                      <td className="py-3">{row.out}</td>
                      <td className="py-3">{row.hours}</td>
                      <td className="py-3"><span className={`px-2 py-0.5 text-[10px] rounded-full ${row.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-white/[0.06] text-cream/40'}`}>{row.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'Payroll' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: 'Base Salary', value: '$8,500/mo' },
                { label: 'YTD Earnings', value: '$56,420' },
                { label: 'Next Payday', value: 'Jul 1, 2024' },
                { label: 'Tax Bracket', value: '24%' },
              ].map((s, i) => (
                <div key={i} className="p-4 bg-obsidian-2 border border-glass-border rounded-[12px]">
                  <div className="text-xs text-cream/30 mb-1">{s.label}</div>
                  <div className="font-display text-lg font-bold">{s.value}</div>
                </div>
              ))}
            </div>
            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-4">Recent Payslips</h3>
              <div className="space-y-2">
                {['June 2024', 'May 2024', 'April 2024', 'March 2024', 'February 2024'].map((month, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-[8px]">
                    <div className="flex items-center gap-3">
                      <FileText size={14} className="text-cream/30" />
                      <span className="text-sm">{month}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-cream/50">$8,500.00</span>
                      <button className="text-xs text-[#C8FF00] hover:underline">Download</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Performance' && (
          <div className="space-y-6">
            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-4">Performance Score</h3>
              <div className="flex items-center gap-8">
                <div className="w-32 h-32 rounded-full border-8 border-[#C8FF00] flex items-center justify-center">
                  <div className="text-center"><div className="font-display text-2xl font-bold">4.6</div><div className="text-[10px] text-cream/30">out of 5</div></div>
                </div>
                <div className="flex-1 space-y-3">
                  {[
                    { label: 'Technical Skills', score: 4.8 },
                    { label: 'Communication', score: 4.5 },
                    { label: 'Leadership', score: 4.3 },
                    { label: 'Innovation', score: 4.7 },
                    { label: 'Teamwork', score: 4.6 },
                  ].map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1"><span className="text-cream/50">{skill.label}</span><span>{skill.score}</span></div>
                      <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden"><div className="h-full bg-[#C8FF00] rounded-full" style={{width: `${(skill.score/5)*100}%`}} /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-4">OKRs - Q3 2024</h3>
              <div className="space-y-4">
                {[
                  { objective: 'Improve API response time by 40%', progress: 72, status: 'on_track' },
                  { objective: 'Ship 3 major features for BillingFlow v3', progress: 66, status: 'on_track' },
                  { objective: 'Mentor 2 junior engineers', progress: 50, status: 'at_risk' },
                ].map((okr, i) => (
                  <div key={i} className="p-4 bg-white/[0.02] rounded-[8px]">
                    <div className="flex justify-between mb-2"><span className="text-sm">{okr.objective}</span><span className={`text-xs ${okr.status === 'on_track' ? 'text-green-400' : 'text-yellow-400'}`}>{okr.status === 'on_track' ? 'On Track' : 'At Risk'}</span></div>
                    <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden"><div className="h-full bg-[#C8FF00] rounded-full" style={{width: `${okr.progress}%`}} /></div>
                    <div className="text-[10px] text-cream/30 mt-1">{okr.progress}% complete</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
