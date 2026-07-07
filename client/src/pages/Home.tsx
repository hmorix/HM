import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

function CounterNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let current = 0
    const step = target / 60
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      el.textContent = Math.round(current).toString()
      if (current >= target) clearInterval(timer)
    }, 20)
    return () => clearInterval(timer)
  }, [target])
  return <><span ref={ref}>0</span>{suffix}</>
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-end pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(200,255,0,0.06)_0%,transparent_60%),radial-gradient(ellipse_40%_60%_at_20%_80%,rgba(200,255,0,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-40" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',backgroundSize:'80px 80px',maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)'}} />
        
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-[#C8FF00] rounded-full animate-pulse-glow" />
              <span className="label-mono">Creative Technology</span>
            </div>
            <h1 className="font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-8">
              Build the<br/>future with<br/><em className="not-italic text-[#C8FF00]">HMorix</em>
            </h1>
            <p className="text-lg text-cream/60 leading-relaxed max-w-[560px] mb-12">
              Enterprise-grade software, AI agents, and digital transformation solutions that scale with your ambition.
            </p>
            <div className="flex items-center gap-4 flex-wrap mb-20">
              <Link to="/contact" className="px-8 py-3.5 bg-[#C8FF00] text-obsidian font-display font-semibold rounded-[4px] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,255,0,0.25)] transition-all">Start a Project</Link>
              <Link to="/playground" className="px-8 py-3.5 border border-glass-border text-cream/60 font-display rounded-[4px] hover:border-cream hover:text-cream hover:bg-white/[0.04] transition-all">Explore Products</Link>
            </div>
          </div>
          <div className="flex gap-12 pt-12 border-t border-glass-border">
            <div>
              <div className="font-display text-3xl font-bold tracking-tight"><CounterNumber target={120} suffix="+" /></div>
              <div className="text-xs text-cream/35 mt-1">Enterprise Clients</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold tracking-tight"><CounterNumber target={98} suffix="%" /></div>
              <div className="text-xs text-cream/35 mt-1">Client Satisfaction</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold tracking-tight"><CounterNumber target={5} suffix="+" /></div>
              <div className="text-xs text-cream/35 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold tracking-tight"><CounterNumber target={300} suffix="+" /></div>
              <div className="text-xs text-cream/35 mt-1">Projects Delivered</div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] hidden xl:flex items-center justify-center">
          <div className="relative w-[440px] h-[520px]">
            <div className="absolute w-[360px] top-[60px] left-[40px] bg-obsidian-2 border border-[rgba(200,255,0,0.2)] rounded-[16px] p-6 backdrop-blur-[20px] animate-float">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-mono text-[0.7rem] text-cream/35 ml-2">BillingFlow Dashboard</span>
              </div>
              <div className="mb-4">
                <div className="font-mono text-[0.65rem] text-cream/35">Total Revenue</div>
                <div className="font-display text-2xl font-bold tracking-tight">$84,210<span className="text-[#C8FF00] text-base"> ↑12%</span></div>
              </div>
              <div className="flex items-end gap-1 h-[60px] mb-4">
                {[40,65,50,85,70,90,75,100].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-t-sm ${i === 3 || i === 5 || i === 7 ? 'bg-[#C8FF00]' : 'bg-white/10'}`} style={{height:`${h}%`}} />
                ))}
              </div>
              <div className="flex justify-between items-center py-2 border-b border-glass-border text-xs">
                <span className="font-mono text-[#C8FF00]">INV-2841</span>
                <span className="px-2 py-0.5 rounded-full text-[0.65rem] bg-green-500/15 text-green-500">● Paid</span>
              </div>
              <div className="flex justify-between items-center py-2 text-xs">
                <span className="font-mono text-[#C8FF00]">INV-2842</span>
                <span className="px-2 py-0.5 rounded-full text-[0.65rem] bg-yellow-500/15 text-yellow-500">● Pending</span>
              </div>
            </div>
            <div className="absolute w-[200px] top-5 right-5 bg-white/[0.04] border border-glass-border rounded-[16px] p-4 backdrop-blur-[20px]" style={{animation:'float 8s ease-in-out infinite'}}>
              <div className="label-mono mb-3">AI Agent</div>
              <div className="font-mono text-xs text-[#C8FF00] overflow-hidden whitespace-nowrap border-r-2 border-[#C8FF00]" style={{animation:'typing 3.5s steps(30) infinite'}}>Generating website...</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="max-w-[640px]">
            <span className="label-mono">What We Build</span>
            <h2 className="section-title mt-3">Enterprise solutions<br/>for modern business</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-glass-border border border-glass-border rounded-[16px] overflow-hidden mt-16">
            {[
              { icon: '🌐', title: 'Enterprise Websites', desc: 'High-performance, scalable web applications built with modern frameworks.' },
              { icon: '🤖', title: 'AI Agents', desc: 'Custom AI solutions that automate workflows and generate content.' },
              { icon: '🔒', title: 'Cyber Security', desc: 'Penetration testing, audits, and continuous security monitoring.' },
              { icon: '📄', title: 'PDF Automation', desc: 'Intelligent document processing at enterprise scale.' },
              { icon: '💳', title: 'BillingFlow', desc: 'Complete invoicing and payment management platform.' },
              { icon: '🏠', title: 'Smart Home', desc: 'IoT solutions for modern connected living spaces.' },
              { icon: '📊', title: 'Analytics', desc: 'Real-time business intelligence and data visualization.' },
              { icon: '☁️', title: 'Cloud Solutions', desc: 'Scalable infrastructure and deployment pipelines.' },
            ].map((s, i) => (
              <div key={i} className="bg-obsidian p-8 hover:bg-obsidian-2 transition-colors group">
                <div className="text-2xl mb-4">{s.icon}</div>
                <h3 className="font-display font-semibold mb-2 group-hover:text-[#C8FF00] transition-colors">{s.title}</h3>
                <p className="text-sm text-cream/50">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-obsidian-2 border-y border-glass-border py-12">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { num: '120+', label: 'Enterprise Clients' },
              { num: '300+', label: 'Projects Delivered' },
              { num: '98%', label: 'Client Satisfaction' },
              { num: '5+', label: 'Years of Innovation' },
            ].map((s, i) => (
              <div key={i} className="py-8 px-6 text-center border-r border-glass-border last:border-r-0">
                <div className="font-display text-4xl font-bold tracking-tight">{s.num.replace(/[+%]/,'')}<span className="text-[#C8FF00]">{s.num.match(/[+%]/)?.[0]}</span></div>
                <div className="text-sm text-cream/35 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HMORIX */}
      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-8">
          <span className="label-mono">Why HMorix</span>
          <h2 className="section-title mt-3">Technology that works<br/>as hard as you do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
            <div className="md:col-span-2 p-8 border border-glass-border rounded-[16px] bg-white/[0.04] hover:border-[rgba(200,255,0,0.2)] hover:bg-obsidian-2 transition-all">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-2xl mb-4">🎯</div>
                  <h3 className="font-display font-semibold text-lg mb-2">Enterprise-first Approach</h3>
                  <p className="text-sm text-cream/60">Every solution we build is designed for scale, security, and longevity. We architect systems that grow with your business.</p>
                </div>
                <div className="space-y-3">
                  {['99.9% uptime SLA guaranteed','ISO 27001 aligned security','Dedicated project manager'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 border border-glass-border rounded-[4px]">
                      <span className="text-[#C8FF00]">✓</span>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {[
              { icon: '⚡', title: 'Rapid Delivery', desc: 'Streamlined process delivers quality faster without sacrificing depth.' },
              { icon: '🔒', title: 'Security by Design', desc: 'Security embedded at every layer from code review to deployment.' },
              { icon: '📊', title: 'Data-Driven', desc: 'Every choice backed by analytics and real-world performance metrics.' },
              { icon: '🤝', title: 'Long-term Partnership', desc: 'Lasting relationships with ongoing maintenance and support.' },
            ].map((item, i) => (
              <div key={i} className="p-8 border border-glass-border rounded-[16px] bg-white/[0.04] hover:border-[rgba(200,255,0,0.2)] hover:bg-obsidian-2 transition-all">
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-cream/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-12 border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <span className="label-mono">Technology Stack</span>
          <h2 className="font-display text-2xl font-bold tracking-tight mt-3 mb-8">Built with the best tools</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {['React','Next.js','Node.js','Express','PostgreSQL','MongoDB','Python','TensorFlow','Docker','Kubernetes','AWS','TypeScript','GraphQL','Redis','Nginx','Linux','Flutter','React Native'].map(t => (
              <span key={t} className="px-4 py-2 border border-glass-border rounded-full font-mono text-xs text-cream/60 hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all cursor-default">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-obsidian-2">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="border border-glass-border rounded-[24px] p-12 md:p-20 text-center relative overflow-hidden bg-gradient-to-br from-obsidian-3 to-obsidian-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(200,255,0,0.06)_0%,transparent_70%)] pointer-events-none" />
            <span className="label-mono">Ready to Begin?</span>
            <h2 className="font-display text-[clamp(2rem,4vw,4rem)] font-bold tracking-tight mt-6 mb-4">Let's build something<br/><em className="not-italic text-[#C8FF00]">remarkable</em></h2>
            <p className="text-cream/60 max-w-[520px] mx-auto mb-10">Join 120+ enterprise clients who trust HMorix to power their technology.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact" className="px-8 py-3.5 bg-[#C8FF00] text-obsidian font-display font-semibold rounded-[4px] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,255,0,0.25)] transition-all">Schedule a Call</Link>
              <Link to="/pricing" className="px-8 py-3.5 border border-glass-border text-cream/60 font-display rounded-[4px] hover:border-cream hover:text-cream transition-all">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
