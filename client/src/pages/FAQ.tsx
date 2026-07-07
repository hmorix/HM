import { useState } from 'react'
import SEOHead from '../components/seo/SEOHead'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { category: 'General', items: [
    { q: 'What is HMorix?', a: 'HMorix is an enterprise technology company that provides AI-powered software solutions, custom web design, mobile app development, digital marketing, SEO services, advertising automation, cybersecurity, and smart home IoT products. We serve startups to Fortune 500 companies worldwide.' },
    { q: 'What services does HMorix offer?', a: 'We offer: Web Design & Development, Mobile App & APK Development, AI & Machine Learning Solutions, Custom Software Development, Digital Marketing & SEO, Advertising & Ad Tech, E-commerce Solutions, Cybersecurity, Cloud Computing, and Smart Home IoT products.' },
    { q: 'Where is HMorix located?', a: 'HMorix is headquartered in San Francisco, CA with remote teams across the globe. We serve clients internationally across all time zones.' },
    { q: 'How do I get started with HMorix?', a: 'Simply visit our Contact page or sign up for a free account. You can also book a free consultation call with our team to discuss your project requirements.' },
  ]},
  { category: 'Products & Pricing', items: [
    { q: 'What is BillingFlow?', a: 'BillingFlow is our AI-powered billing automation platform that handles invoicing, payment processing, subscription management, and financial reporting. It supports 135 currencies and integrates with major accounting software.' },
    { q: 'What is the AI Agent platform?', a: 'Our AI Agent platform allows businesses to deploy custom AI agents for customer support, sales automation, data analysis, and workflow automation. Agents can be trained on your data and integrated with your existing tools.' },
    { q: 'Is there a free tier?', a: 'Yes! We offer free tiers for BillingFlow (up to 50 invoices/month), AI Agent (1,000 messages/month), and PDF Automation (100 pages/month). Enterprise features require paid plans starting at $99/month.' },
    { q: 'Do you offer custom pricing for enterprises?', a: 'Absolutely. Enterprise clients get custom pricing based on usage, dedicated support, custom SLAs, and volume discounts. Contact our sales team for a tailored quote.' },
  ]},
  { category: 'Web Design & Development', items: [
    { q: 'What technologies do you use for web development?', a: 'We primarily use React, Next.js, TypeScript, Node.js, and Tailwind CSS for frontend. Backend technologies include Node.js, Python, Go, PostgreSQL, MongoDB, and Redis. We deploy on AWS, Vercel, and Cloudflare.' },
    { q: 'How long does a website project take?', a: 'Timeline depends on complexity: Landing pages (1-2 weeks), Business websites (3-4 weeks), Web applications (6-12 weeks), Enterprise platforms (3-6 months). We provide detailed timelines during the discovery phase.' },
    { q: 'Do you provide SEO services with web design?', a: 'Yes! All our websites are built with SEO best practices including semantic HTML, structured data, meta tags, Core Web Vitals optimization, and mobile-first design. We also offer ongoing SEO services.' },
    { q: 'Can you redesign my existing website?', a: 'Yes, we specialize in website redesigns. We analyze your current site, identify improvements, and create a modern, high-performance version while preserving your SEO rankings and content.' },
  ]},
  { category: 'Mobile App Development', items: [
    { q: 'Do you build Android APKs?', a: 'Yes! We develop native Android applications and provide APK builds for direct distribution, Google Play Store deployment, or enterprise sideloading. We use Kotlin and Java for native Android development.' },
    { q: 'Do you build cross-platform apps?', a: 'Yes, we build cross-platform apps using React Native and Flutter, allowing you to target both Android and iOS with a single codebase while maintaining native performance.' },
    { q: 'What is the cost of mobile app development?', a: 'Costs vary by complexity: Simple apps ($15K-$30K), Medium complexity ($30K-$75K), Complex enterprise apps ($75K-$200K+). We provide detailed estimates after the discovery phase.' },
  ]},
  { category: 'Security & Compliance', items: [
    { q: 'Is HMorix SOC 2 compliant?', a: 'Yes, HMorix maintains SOC 2 Type II certification. We undergo annual audits and maintain strict security controls across all our services.' },
    { q: 'Is my data encrypted?', a: 'Yes, all data is encrypted with AES-256 at rest and TLS 1.3 in transit. We also support customer-managed encryption keys for enterprise clients.' },
    { q: 'Do you comply with GDPR?', a: 'Yes, we are fully GDPR compliant. We provide data processing agreements, support data subject rights, and maintain EU data residency options.' },
  ]},
  { category: 'Support', items: [
    { q: 'What support options are available?', a: 'We offer: Community support (free), Email support (all plans), Priority support (Business plans), 24/7 dedicated support (Enterprise plans), and on-site support for large deployments.' },
    { q: 'What is your SLA?', a: 'We guarantee 99.99% uptime for enterprise clients with service credits for any downtime. Response times: Critical issues (15 min), High priority (1 hour), Normal (4 hours), Low (24 hours).' },
  ]},
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggle = (id: string) => {
    setOpenItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead
        title="Frequently Asked Questions"
        description="Find answers to common questions about HMorix services, products, pricing, web design, mobile app development, AI solutions, SEO, security, and support."
        keywords="HMorix FAQ, frequently asked questions, HMorix pricing, HMorix services, web design FAQ, mobile app FAQ, AI solutions FAQ, SEO FAQ, enterprise software FAQ, BillingFlow FAQ, customer support, help center"
        canonical="/faq"
      />
      <div className="max-w-[900px] mx-auto px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-mono rounded-full mb-4">FAQ</span>
          <h1 className="font-display text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-cream/50">Find answers to common questions about our services and products.</p>
        </div>

        <div className="space-y-8">
          {faqs.map((section, si) => (
            <div key={si}>
              <h2 className="font-display text-lg font-semibold text-[#C8FF00] mb-4">{section.category}</h2>
              <div className="space-y-2">
                {section.items.map((item, ii) => {
                  const id = `${si}-${ii}`
                  const isOpen = openItems.includes(id)
                  return (
                    <div key={id} className="border border-glass-border rounded-[8px] overflow-hidden">
                      <button onClick={() => toggle(id)} className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition-all">
                        <span className="text-sm font-medium pr-4">{item.q}</span>
                        <ChevronDown size={16} className={`text-cream/30 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && <div className="px-4 pb-4 text-sm text-cream/50 leading-relaxed">{item.a}</div>}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
