export default function Partners() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">Partners</span>
        <h1 className="section-title mt-3 mb-6">Partner Ecosystem</h1>
        <p className="text-lg text-cream/60 max-w-[600px] mb-16">We work with leading technology companies to deliver the best solutions for our clients.</p>

        <h2 className="font-display text-2xl font-bold mb-8">Technology Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {['AWS','Cloudflare','Stripe','Google Cloud','Microsoft Azure','Vercel','MongoDB','OpenAI'].map(p => (
            <div key={p} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] text-center hover:border-[rgba(200,255,0,0.2)] transition-all">
              <div className="font-display font-semibold">{p}</div>
              <div className="text-xs text-cream/30 mt-1">Technology Partner</div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold mb-8">Become a Partner</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Referral Partner', desc: 'Earn commissions by referring clients to HMorix products and services.' },
            { title: 'Technology Partner', desc: 'Integrate your product with HMorix platform and reach our enterprise clients.' },
            { title: 'Reseller Partner', desc: 'White-label HMorix solutions and sell them under your brand.' },
          ].map((p, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-cream/50 mb-4">{p.desc}</p>
              <button className="text-sm text-[#C8FF00] hover:underline">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
