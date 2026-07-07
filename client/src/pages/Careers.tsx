import { Link } from 'react-router-dom'

export default function Careers() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">Careers</span>
        <h1 className="section-title mt-3 mb-6">Build the future with us</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-16">Join a team of engineers, designers, and thinkers who are passionate about building technology that matters.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[{num:'35+',label:'Team Members'},{num:'12',label:'Countries'},{num:'100%',label:'Remote-first'}].map((s,i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] text-center">
              <div className="font-display text-3xl font-bold text-[#C8FF00]">{s.num}</div>
              <div className="text-sm text-cream/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold mb-6">Open Positions</h2>
        <div className="space-y-3">
          {[
            { title: 'Senior Full-Stack Engineer', team: 'Engineering', location: 'Remote', type: 'Full-time' },
            { title: 'AI/ML Engineer', team: 'AI Team', location: 'Remote', type: 'Full-time' },
            { title: 'Security Engineer', team: 'Security', location: 'Remote', type: 'Full-time' },
            { title: 'Product Designer', team: 'Design', location: 'Remote', type: 'Full-time' },
            { title: 'DevOps Engineer', team: 'Infrastructure', location: 'Remote', type: 'Full-time' },
            { title: 'Technical Writer', team: 'Developer Experience', location: 'Remote', type: 'Contract' },
          ].map((job, i) => (
            <div key={i} className="flex items-center justify-between p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all cursor-pointer">
              <div>
                <h3 className="font-display font-semibold">{job.title}</h3>
                <div className="flex items-center gap-3 mt-1 text-xs text-cream/40">
                  <span>{job.team}</span><span>·</span><span>{job.location}</span><span>·</span><span>{job.type}</span>
                </div>
              </div>
              <span className="text-[#C8FF00] text-sm">Apply →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
