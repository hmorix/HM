import { Link } from 'react-router-dom'
import SEOHead from '../../components/seo/SEOHead'
import { Monitor, Smartphone, Zap, Palette, Code, Globe, CheckCircle, ArrowRight } from 'lucide-react'

const features = [
  { icon: Palette, title: 'Custom UI/UX Design', desc: 'Bespoke designs tailored to your brand with modern aesthetics and intuitive user experiences.' },
  { icon: Monitor, title: 'Responsive Web Development', desc: 'Pixel-perfect websites that look stunning on desktop, tablet, and mobile devices.' },
  { icon: Code, title: 'Full-Stack Development', desc: 'React, Next.js, Node.js, TypeScript — modern tech stack for scalable web applications.' },
  { icon: Zap, title: 'Performance Optimization', desc: 'Lightning-fast load times with Core Web Vitals optimization, lazy loading, and CDN delivery.' },
  { icon: Globe, title: 'SEO-First Architecture', desc: 'Built-in SEO best practices, structured data, meta tags, and search engine friendly architecture.' },
  { icon: Smartphone, title: 'Progressive Web Apps', desc: 'PWA development for app-like experiences with offline support and push notifications.' },
]

const portfolio = [
  { name: 'Meridian Corp', type: 'Enterprise SaaS Dashboard', tech: 'React, TypeScript, D3.js', result: '60% faster load time' },
  { name: 'NovaTech', type: 'E-commerce Platform', tech: 'Next.js, Stripe, PostgreSQL', result: '340% conversion increase' },
  { name: 'Quantum Labs', type: 'AI Research Portal', tech: 'React, Python, TensorFlow', result: '2M+ monthly visitors' },
  { name: 'Stellar Digital', type: 'Marketing Website', tech: 'Next.js, Tailwind, Vercel', result: '98 Lighthouse score' },
]

export default function WebDesign() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead
        title="Web Design & Development Services"
        description="Professional custom web design and development services by HMorix. We build responsive websites, web applications, ecommerce platforms, and enterprise dashboards using React, Next.js, Node.js, and TypeScript. SEO-optimized, mobile-first, and blazing fast."
        keywords="web design, website development, custom web development, responsive web design, UI UX design, React development, Next.js development, Node.js, TypeScript, full-stack development, ecommerce development, WordPress development, landing page design, web application development, progressive web app, PWA, single page application, SPA, frontend development, backend development, website redesign, corporate website, business website, startup website, portfolio website, SEO web design, mobile-first design, web design agency, web development company, affordable web design, professional web design"
        canonical="/services/web-design"
      />
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-mono rounded-full mb-4">WEB DESIGN & DEVELOPMENT</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Stunning Websites That <span className="text-[#C8FF00]">Convert</span></h1>
          <p className="text-cream/50 max-w-[700px] mx-auto text-lg">We design and develop high-performance websites and web applications that drive business growth. From landing pages to enterprise platforms — built with modern technology and SEO best practices.</p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[#C8FF00]/20 transition-all">
              <f.icon size={24} className="text-[#C8FF00] mb-4" />
              <h3 className="font-display font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-cream/40">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-8">Our Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'Docker', 'AWS', 'Vercel'].map(tech => (
              <div key={tech} className="p-3 bg-white/[0.04] border border-glass-border/50 rounded-[8px] text-center text-sm text-cream/60">{tech}</div>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-8">Recent Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((p, i) => (
              <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h4 className="font-display font-semibold mb-1">{p.name}</h4>
                <p className="text-xs text-cream/30 mb-3">{p.type}</p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="px-2 py-0.5 bg-white/[0.06] rounded text-cream/40">{p.tech}</span>
                  <span className="text-[#C8FF00] flex items-center gap-1"><CheckCircle size={10} />{p.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-8">Web Design Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: '$2,999', desc: 'Perfect for startups and small businesses', features: ['5-page responsive website', 'Custom UI/UX design', 'SEO optimization', 'Mobile-first design', 'Contact forms', '3 revision rounds'] },
              { name: 'Business', price: '$7,999', desc: 'For growing companies that need more', features: ['15-page website', 'Custom animations', 'CMS integration', 'E-commerce ready', 'Blog system', 'Analytics dashboard', 'Priority support'], popular: true },
              { name: 'Enterprise', price: 'Custom', desc: 'Full-scale web applications', features: ['Unlimited pages', 'Custom web application', 'API development', 'Database design', 'CI/CD pipeline', 'Dedicated team', '24/7 support', 'SLA guarantee'] },
            ].map((plan, i) => (
              <div key={i} className={`p-6 bg-obsidian-2 border rounded-[16px] ${plan.popular ? 'border-[#C8FF00]' : 'border-glass-border'}`}>
                {plan.popular && <span className="inline-block px-2 py-0.5 bg-[#C8FF00] text-obsidian text-[10px] font-bold rounded mb-3">MOST POPULAR</span>}
                <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                <div className="font-display text-3xl font-bold mt-2 mb-1">{plan.price}</div>
                <p className="text-xs text-cream/30 mb-4">{plan.desc}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => <li key={j} className="flex items-center gap-2 text-xs text-cream/50"><CheckCircle size={12} className="text-[#C8FF00]" />{f}</li>)}
                </ul>
                <Link to="/contact" className={`block text-center py-2.5 rounded-[4px] text-sm font-medium transition-all ${plan.popular ? 'bg-[#C8FF00] text-obsidian hover:bg-[#b8ef00]' : 'border border-glass-border text-cream/60 hover:text-cream hover:border-cream'}`}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <h2 className="font-display text-2xl font-bold mb-3">Ready to Build Your Dream Website?</h2>
          <p className="text-cream/40 mb-6">Let's discuss your project and create something extraordinary together.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8FF00] text-obsidian font-semibold rounded-[4px] hover:bg-[#b8ef00] transition-all">Start Your Project <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  )
}
