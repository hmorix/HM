import { Lightbulb, Shield, Lock, Zap, Mic, LayoutDashboard } from 'lucide-react'

export default function SmartHome() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-[700px] mb-16">
          <span className="label-mono">Smart Home Division</span>
          <h1 className="section-title mt-3 mb-6">Intelligent living<br/>starts here</h1>
          <p className="text-lg text-cream/60 leading-relaxed">Transform your home with HMorix Smart Home solutions. IoT-powered automation, security, and energy management for the modern connected lifestyle.</p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {[
            { icon: Lightbulb, title: 'Smart Lighting', desc: 'Automated lighting with scene control, scheduling, and energy optimization. Compatible with all major protocols.', features: ['Color temperature control','Motion-activated scenes','Energy usage tracking','Voice control ready'] },
            { icon: Shield, title: 'Smart Security', desc: 'AI-powered security cameras, motion detection, and real-time alerts. 24/7 monitoring with cloud recording.', features: ['4K AI cameras','Person detection','Night vision','Cloud recording'] },
            { icon: Lock, title: 'Smart Locks', desc: 'Keyless entry with biometric, PIN, and mobile access. Complete access logs and remote management.', features: ['Fingerprint unlock','Remote access','Access scheduling','Tamper alerts'] },
            { icon: Zap, title: 'Energy Monitoring', desc: 'Real-time energy consumption tracking with AI-powered optimization recommendations.', features: ['Real-time monitoring','Cost projections','Solar integration','Appliance tracking'] },
            { icon: Mic, title: 'Voice Automation', desc: 'Natural language control for your entire home. Works with Alexa, Google, and Siri.', features: ['Multi-assistant support','Custom routines','Contextual awareness','Offline fallback'] },
            { icon: LayoutDashboard, title: 'Home Dashboard', desc: 'Unified control center for all your smart devices. Beautiful wall-mounted or mobile interface.', features: ['Real-time device status','Automation builder','Energy analytics','Family profiles'] },
          ].map((product, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[rgba(200,255,0,0.2)] transition-all">
              <product.icon size={28} className="text-[#C8FF00] mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">{product.title}</h3>
              <p className="text-sm text-cream/50 mb-4">{product.desc}</p>
              <ul className="space-y-1.5">
                {product.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-cream/40"><span className="text-[#C8FF00]">•</span>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dashboard Mockup */}
        <h2 className="font-display text-2xl font-bold mb-8">Home Dashboard Preview</h2>
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Temperature', value: '72°F', sub: 'Living Room' },
              { label: 'Energy Today', value: '12.4 kWh', sub: '$1.86 cost' },
              { label: 'Devices Online', value: '24/24', sub: 'All connected' },
              { label: 'Security', value: 'Armed', sub: 'All zones secure' },
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-white/[0.04] border border-glass-border rounded-[8px]">
                <div className="text-xs text-cream/40 mb-1">{stat.label}</div>
                <div className="font-display text-lg font-bold">{stat.value}</div>
                <div className="text-[10px] text-green-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/[0.04] border border-glass-border rounded-[8px]">
              <div className="text-sm font-semibold mb-3">Room Controls</div>
              {['Living Room','Bedroom','Kitchen','Office'].map((room, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-glass-border last:border-b-0">
                  <span className="text-sm text-cream/60">{room}</span>
                  <div className="flex items-center gap-2">
                    <Lightbulb size={12} className="text-[#C8FF00]" />
                    <span className="text-xs text-cream/40">On</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-white/[0.04] border border-glass-border rounded-[8px]">
              <div className="text-sm font-semibold mb-3">Security Cameras</div>
              <div className="grid grid-cols-2 gap-2">
                {['Front Door','Backyard','Garage','Hallway'].map((cam, i) => (
                  <div key={i} className="aspect-video bg-obsidian-3 rounded-[4px] flex items-center justify-center">
                    <span className="text-[10px] text-cream/30">{cam}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 bg-white/[0.04] border border-glass-border rounded-[8px]">
              <div className="text-sm font-semibold mb-3">Automations</div>
              {[
                { name: 'Good Morning', time: '7:00 AM', active: true },
                { name: 'Away Mode', time: 'On leave', active: true },
                { name: 'Movie Night', time: 'Manual', active: false },
                { name: 'Sleep Mode', time: '11:00 PM', active: true },
              ].map((auto, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-glass-border last:border-b-0">
                  <div>
                    <div className="text-sm text-cream/60">{auto.name}</div>
                    <div className="text-[10px] text-cream/30">{auto.time}</div>
                  </div>
                  <div className={`w-8 h-4 rounded-full ${auto.active ? 'bg-[#C8FF00]' : 'bg-white/10'} relative`}>
                    <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-obsidian transition-all ${auto.active ? 'right-0.5' : 'left-0.5'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Installation */}
        <h2 className="font-display text-2xl font-bold mb-6">Installation & Setup</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { step: '01', title: 'Consultation', desc: 'Our team assesses your home and designs a custom smart home plan.' },
            { step: '02', title: 'Installation', desc: 'Professional installation by certified technicians. Usually completed in 1-2 days.' },
            { step: '03', title: 'Configuration', desc: 'We configure all devices, set up automations, and train you on the system.' },
          ].map((s, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <div className="font-mono text-2xl text-[#C8FF00] mb-3">{s.step}</div>
              <h3 className="font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-cream/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
