export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-16">
          <span className="label-mono">About HMorix</span>
          <h1 className="section-title mt-3 mb-6 max-w-[700px]">Creative technology for a more capable world</h1>
          <p className="text-lg text-cream/60 leading-relaxed max-w-[560px]">Founded with a simple belief: technology should empower people and businesses to achieve more.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-cream/60 mb-4">HMorix was born from a frustration with technology that complicated rather than simplified. We set out to build software that genuinely serves its users — clear, powerful, and reliable.</p>
            <p className="text-cream/60">Today we serve enterprise clients across multiple industries, delivering custom software, AI solutions, and security services that drive measurable business outcomes.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{num:'120+',label:'Clients Served'},{num:'300+',label:'Projects Completed'},{num:'5+',label:'Years Experience'},{num:'98%',label:'Satisfaction Rate'}].map((s,i) => (
              <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <div className="font-display text-2xl font-bold text-[#C8FF00]">{s.num}</div>
                <div className="text-xs text-cream/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <h2 className="font-display text-2xl font-bold mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
          {[
            { icon: '🎯', title: 'Excellence', desc: 'We hold ourselves to the highest standards in every line of code and every client interaction.' },
            { icon: '🔐', title: 'Security First', desc: 'Security is not an afterthought. It is embedded in our DNA and every product we build.' },
            { icon: '🤝', title: 'Partnership', desc: 'We build lasting relationships. Your success is our success, and we invest in both.' },
          ].map((v, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all">
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="font-display font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-cream/50">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <h2 className="font-display text-2xl font-bold mb-8">Leadership Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { initials: 'HM', name: 'Hassan Morix', role: 'CEO & Founder' },
            { initials: 'AK', name: 'Aisha Khan', role: 'CTO' },
            { initials: 'JR', name: 'James Rivera', role: 'VP Engineering' },
            { initials: 'SL', name: 'Sarah Lin', role: 'Head of AI' },
          ].map((m, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] text-center hover:border-[rgba(200,255,0,0.2)] transition-all">
              <div className="w-16 h-16 bg-[#C8FF00]/10 border-2 border-[rgba(200,255,0,0.3)] rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-[#C8FF00]">{m.initials}</div>
              <h3 className="font-display font-semibold text-sm">{m.name}</h3>
              <p className="text-xs text-cream/40 mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
