import { Link } from 'react-router-dom'
import SEOHead from '../../components/seo/SEOHead'
import { Search, TrendingUp, Target, BarChart3, Mail, Share2, CheckCircle, ArrowRight, Globe, Megaphone } from 'lucide-react'

const services = [
  { icon: Search, title: 'Search Engine Optimization (SEO)', desc: 'On-page SEO, technical SEO, link building, keyword research, and content optimization to rank #1 on Google.', features: ['Keyword Research & Strategy', 'On-Page Optimization', 'Technical SEO Audit', 'Link Building', 'Local SEO', 'SEO Reporting'] },
  { icon: Target, title: 'Pay-Per-Click Advertising (PPC)', desc: 'Google Ads, Bing Ads, and programmatic advertising campaigns that maximize ROI and drive qualified traffic.', features: ['Google Ads Management', 'Bing Ads', 'Display Advertising', 'Retargeting Campaigns', 'Shopping Ads', 'A/B Testing'] },
  { icon: Share2, title: 'Social Media Marketing', desc: 'Strategic social media management across all platforms — content creation, community management, and paid social.', features: ['Content Strategy', 'Community Management', 'Paid Social Ads', 'Influencer Marketing', 'Social Analytics', 'Brand Monitoring'] },
  { icon: Mail, title: 'Email Marketing', desc: 'Automated email campaigns, newsletters, drip sequences, and personalized messaging that converts.', features: ['Campaign Strategy', 'Email Automation', 'List Segmentation', 'A/B Testing', 'Deliverability', 'Analytics & Reporting'] },
  { icon: Globe, title: 'Content Marketing', desc: 'High-quality content creation — blog posts, whitepapers, case studies, and video content that drives organic traffic.', features: ['Content Strategy', 'Blog Writing', 'Video Production', 'Infographics', 'Whitepapers', 'Content Distribution'] },
  { icon: Megaphone, title: 'Advertising Automation', desc: 'AI-powered ad automation that optimizes campaigns in real-time across all channels for maximum performance.', features: ['AI Bid Management', 'Cross-Channel Automation', 'Dynamic Creative', 'Audience Targeting', 'Budget Optimization', 'Performance Prediction'] },
]

export default function DigitalMarketing() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead
        title="Digital Marketing, SEO & Advertising Services"
        description="HMorix digital marketing services: SEO, PPC advertising, social media marketing, email marketing, content marketing, and AI-powered advertising automation. Drive traffic, generate leads, and grow your business with data-driven marketing strategies."
        keywords="digital marketing, SEO services, search engine optimization, PPC advertising, Google Ads management, social media marketing, email marketing, content marketing, advertising automation, digital marketing agency, online marketing, internet marketing, inbound marketing, lead generation, conversion optimization, marketing analytics, brand awareness, growth marketing, performance marketing, SEM, search engine marketing, local SEO, ecommerce SEO, B2B marketing, B2C marketing, marketing automation, HubSpot, Mailchimp, Google Analytics, Facebook Ads, Instagram marketing, LinkedIn marketing, TikTok marketing, YouTube marketing, influencer marketing, affiliate marketing, programmatic advertising, retargeting, remarketing, landing page optimization, CRO, conversion rate optimization"
        canonical="/services/digital-marketing"
      />
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-mono rounded-full mb-4">DIGITAL MARKETING & SEO</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Grow Your Business with <span className="text-[#C8FF00]">Data-Driven Marketing</span></h1>
          <p className="text-cream/50 max-w-[700px] mx-auto text-lg">From SEO to advertising automation — we help businesses drive traffic, generate leads, and maximize ROI with AI-powered digital marketing strategies.</p>
        </div>

        {/* Services */}
        <div className="space-y-6 mb-16">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[#C8FF00]/20 transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <s.icon size={20} className="text-[#C8FF00]" />
                    <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  </div>
                  <p className="text-sm text-cream/40 mb-4">{s.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 md:w-[300px]">
                  {s.features.map((f, j) => <div key={j} className="flex items-center gap-1.5 text-xs text-cream/50"><CheckCircle size={10} className="text-[#C8FF00]" />{f}</div>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-8">Results We Deliver</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '312%', label: 'Average ROI Increase' },
              { value: '5.2x', label: 'Traffic Growth' },
              { value: '67%', label: 'Cost Per Lead Reduction' },
              { value: '#1', label: 'Google Rankings Achieved' },
            ].map((r, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl font-bold text-[#C8FF00]">{r.value}</div>
                <div className="text-xs text-cream/30 mt-1">{r.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-8">Marketing Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Growth Starter', price: '$1,499/mo', features: ['SEO (10 keywords)', 'Google Ads ($2K budget)', 'Monthly reporting', 'Social media (2 platforms)', 'Email campaigns (4/mo)'] },
              { name: 'Scale Up', price: '$3,999/mo', features: ['SEO (30 keywords)', 'Google + Social Ads ($5K budget)', 'Weekly reporting', 'Social media (4 platforms)', 'Email automation', 'Content creation (8 posts/mo)', 'Landing page optimization'], popular: true },
              { name: 'Enterprise', price: 'Custom', features: ['Full SEO strategy', 'Multi-channel advertising', 'Real-time dashboard', 'All social platforms', 'AI ad automation', 'Dedicated strategist', 'Custom integrations', 'Quarterly strategy reviews'] },
            ].map((plan, i) => (
              <div key={i} className={`p-6 bg-obsidian-2 border rounded-[16px] ${plan.popular ? 'border-[#C8FF00]' : 'border-glass-border'}`}>
                {plan.popular && <span className="inline-block px-2 py-0.5 bg-[#C8FF00] text-obsidian text-[10px] font-bold rounded mb-3">MOST POPULAR</span>}
                <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                <div className="font-display text-3xl font-bold mt-2 mb-4">{plan.price}</div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => <li key={j} className="flex items-center gap-2 text-xs text-cream/50"><CheckCircle size={12} className="text-[#C8FF00]" />{f}</li>)}
                </ul>
                <Link to="/contact" className={`block text-center py-2.5 rounded-[4px] text-sm font-medium transition-all ${plan.popular ? 'bg-[#C8FF00] text-obsidian hover:bg-[#b8ef00]' : 'border border-glass-border text-cream/60 hover:text-cream hover:border-cream'}`}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center p-12 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <h2 className="font-display text-2xl font-bold mb-3">Ready to Dominate Search Results?</h2>
          <p className="text-cream/40 mb-6">Get a free SEO audit and marketing strategy consultation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8FF00] text-obsidian font-semibold rounded-[4px] hover:bg-[#b8ef00] transition-all">Free SEO Audit <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  )
}
