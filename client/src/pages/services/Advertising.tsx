import { Link } from 'react-router-dom'
import SEOHead from '../../components/seo/SEOHead'
import { Megaphone, Target, BarChart3, Zap, Globe, Users, CheckCircle, ArrowRight } from 'lucide-react'

const channels = [
  { name: 'Google Ads', desc: 'Search, Display, Shopping, YouTube, and Performance Max campaigns', icon: '🔍' },
  { name: 'Meta Ads', desc: 'Facebook, Instagram, Messenger, and WhatsApp advertising', icon: '📱' },
  { name: 'LinkedIn Ads', desc: 'B2B advertising, sponsored content, and InMail campaigns', icon: '💼' },
  { name: 'TikTok Ads', desc: 'Short-form video advertising and creator partnerships', icon: '🎵' },
  { name: 'Programmatic', desc: 'Real-time bidding, DSP management, and connected TV', icon: '🖥️' },
  { name: 'Native Ads', desc: 'Content discovery platforms, sponsored articles, and native placements', icon: '📰' },
]

export default function Advertising() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead
        title="Advertising & Ad Tech Solutions"
        description="HMorix advertising services: Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, programmatic advertising, and AI-powered ad automation. Maximize your ROAS with data-driven advertising strategies across all channels."
        keywords="advertising services, Google Ads management, Facebook Ads, Instagram Ads, LinkedIn advertising, TikTok Ads, programmatic advertising, display advertising, video advertising, YouTube Ads, PPC management, ad automation, AI advertising, ROAS optimization, ad creative, A/B testing, retargeting, remarketing, audience targeting, lookalike audiences, conversion tracking, ad analytics, media buying, ad tech, DSP, demand side platform, real-time bidding, RTB, connected TV advertising, CTV, OTT advertising, native advertising, sponsored content, influencer advertising, affiliate advertising, performance marketing, growth hacking, customer acquisition, ad spend optimization, campaign management, cross-channel advertising"
        canonical="/services/advertising"
      />
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-mono rounded-full mb-4">ADVERTISING & AD TECH</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">AI-Powered <span className="text-[#C8FF00]">Advertising</span></h1>
          <p className="text-cream/50 max-w-[700px] mx-auto text-lg">Maximize your ad spend with AI-driven campaign optimization across Google, Meta, LinkedIn, TikTok, and programmatic channels.</p>
        </div>

        {/* Channels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {channels.map((c, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[#C8FF00]/20 transition-all">
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-display font-semibold mb-2">{c.name}</h3>
              <p className="text-sm text-cream/40">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* AI Features */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-8">AI-Powered Ad Optimization</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Auto-Bidding', desc: 'AI adjusts bids in real-time based on conversion probability' },
              { icon: Target, title: 'Smart Targeting', desc: 'ML-powered audience discovery and lookalike modeling' },
              { icon: BarChart3, title: 'Predictive Analytics', desc: 'Forecast campaign performance before spending a dollar' },
              { icon: Users, title: 'Creative AI', desc: 'Auto-generate and test ad variations at scale' },
            ].map((f, i) => (
              <div key={i} className="text-center">
                <f.icon size={24} className="text-[#C8FF00] mx-auto mb-3" />
                <h4 className="font-display font-semibold text-sm mb-1">{f.title}</h4>
                <p className="text-[10px] text-cream/30">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '5.2x', label: 'Average ROAS' },
            { value: '-43%', label: 'Cost Per Acquisition' },
            { value: '2.8M+', label: 'Monthly Ad Spend Managed' },
            { value: '847%', label: 'Best Campaign ROI' },
          ].map((s, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[12px] text-center">
              <div className="font-display text-2xl font-bold text-[#C8FF00]">{s.value}</div>
              <div className="text-xs text-cream/30 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center p-12 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <h2 className="font-display text-2xl font-bold mb-3">Ready to Scale Your Advertising?</h2>
          <p className="text-cream/40 mb-6">Get a free ad account audit and optimization roadmap.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8FF00] text-obsidian font-semibold rounded-[4px] hover:bg-[#b8ef00] transition-all">Free Ad Audit <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  )
}
