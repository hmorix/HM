import SEOHead from '../components/seo/SEOHead'
import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Sarah Mitchell', role: 'CTO', company: 'Meridian Corp', text: 'HMorix transformed our entire billing infrastructure. BillingFlow saved us $2.4M annually and reduced invoice processing time from 3 days to 15 minutes. Their AI-powered automation is genuinely enterprise-grade.', rating: 5, category: 'Enterprise Software' },
  { name: 'James Rodriguez', role: 'VP Engineering', company: 'NovaTech', text: 'The web application HMorix built for us handles 2M+ monthly users without breaking a sweat. Their React/Node.js expertise is unmatched. The team delivered on time and the performance metrics exceeded our expectations.', rating: 5, category: 'Web Development' },
  { name: 'Dr. Emily Chen', role: 'Head of AI', company: 'Quantum Labs', text: 'We evaluated 12 AI platform vendors before choosing HMorix. Their agent platform is the most flexible and reliable we\'ve seen. 10,000+ agents running 24/7 with 99.99% uptime — incredible engineering.', rating: 5, category: 'AI Solutions' },
  { name: 'Michael Park', role: 'Marketing Director', company: 'Stellar Digital', text: 'HMorix\'s SEO and digital marketing services took us from page 5 to position 1 on Google in just 4 months. Our organic traffic increased 520% and lead generation is up 340%. Best marketing ROI we\'ve ever seen.', rating: 5, category: 'Digital Marketing' },
  { name: 'Lisa Thompson', role: 'CEO', company: 'GreenLeaf Homes', text: 'The smart home platform HMorix built for us is beautiful and intuitive. Our customers love the mobile app and the IoT integration is seamless. Sales increased 180% after launch.', rating: 5, category: 'Smart Home' },
  { name: 'David Kim', role: 'Founder', company: 'FastCart', text: 'Our e-commerce platform built by HMorix processes $50M+ annually. The custom checkout flow increased conversions by 340% and the AI product recommendations drive 35% of revenue. Game-changing.', rating: 5, category: 'E-commerce' },
  { name: 'Anna Petrov', role: 'COO', company: 'SecureVault', text: 'HMorix\'s cybersecurity audit found 47 vulnerabilities our previous vendor missed. Their zero-trust implementation and SOC 2 compliance support saved us months of work. Truly enterprise-grade security.', rating: 5, category: 'Cybersecurity' },
  { name: 'Robert Chang', role: 'Product Manager', company: 'AppForge', text: 'The mobile app HMorix developed has 4.9 stars on both app stores with 500K+ downloads. Their React Native expertise delivered a beautiful cross-platform experience that feels completely native.', rating: 5, category: 'Mobile Apps' },
  { name: 'Jennifer Walsh', role: 'CFO', company: 'Atlas Financial', text: 'PDF Automation by HMorix processes 50,000+ documents daily for us with 99.2% accuracy. What used to take our team 3 weeks now happens in hours. The ROI was immediate and substantial.', rating: 5, category: 'PDF Automation' },
  { name: 'Tom Anderson', role: 'Head of Growth', company: 'RocketScale', text: 'HMorix\'s advertising automation platform manages our $500K monthly ad spend across Google, Meta, and LinkedIn. Their AI bidding reduced our CPA by 43% while scaling spend 3x. Phenomenal results.', rating: 5, category: 'Advertising' },
]

export default function Testimonials() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead
        title="Client Testimonials & Reviews"
        description="Read what our clients say about HMorix. Testimonials from enterprise companies using our AI software, web design, mobile apps, digital marketing, and advertising services."
        keywords="HMorix reviews, client testimonials, customer reviews, HMorix feedback, enterprise software reviews, web design reviews, AI solutions reviews, digital marketing results, case studies, client success stories, customer satisfaction"
        canonical="/testimonials"
      />
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-mono rounded-full mb-4">TESTIMONIALS</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Trusted by <span className="text-[#C8FF00]">Industry Leaders</span></h1>
          <p className="text-cream/50 max-w-[600px] mx-auto">See what our clients say about working with HMorix across AI, web design, marketing, and enterprise solutions.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '500+', label: 'Happy Clients' },
            { value: '98%', label: 'Client Retention' },
            { value: '2,847', label: 'Reviews' },
          ].map((s, i) => (
            <div key={i} className="p-4 bg-obsidian-2 border border-glass-border rounded-[12px] text-center">
              <div className="font-display text-xl font-bold text-[#C8FF00]">{s.value}</div>
              <div className="text-xs text-cream/30 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[#C8FF00]/20 transition-all">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({length: t.rating}).map((_, j) => <Star key={j} size={14} className="text-[#C8FF00] fill-[#C8FF00]" />)}
              </div>
              <p className="text-sm text-cream/60 leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-obsidian-3 rounded-full flex items-center justify-center text-xs font-bold">{t.name.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-[10px] text-cream/30">{t.role} at {t.company}</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-white/[0.06] text-cream/40 text-[10px] rounded">{t.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
