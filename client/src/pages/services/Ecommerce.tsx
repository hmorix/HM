import { Link } from 'react-router-dom'
import SEOHead from '../../components/seo/SEOHead'
import { ShoppingCart, CreditCard, Truck, BarChart3, Globe, Shield, CheckCircle, ArrowRight } from 'lucide-react'

export default function Ecommerce() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead
        title="E-commerce Development & Solutions"
        description="HMorix e-commerce development: custom online stores, Shopify, WooCommerce, headless commerce, payment integration, inventory management, and AI-powered product recommendations. Build scalable e-commerce platforms that convert."
        keywords="ecommerce development, online store development, Shopify development, WooCommerce development, headless commerce, custom ecommerce, ecommerce platform, payment gateway integration, Stripe integration, PayPal, shopping cart development, product catalog, inventory management, order management, ecommerce SEO, conversion optimization, ecommerce analytics, multi-vendor marketplace, B2B ecommerce, B2C ecommerce, dropshipping, subscription commerce, ecommerce mobile app, ecommerce API, product recommendations, AI ecommerce, personalization, ecommerce automation, fulfillment integration, shipping integration, ecommerce security, PCI compliance"
        canonical="/services/ecommerce"
      />
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-mono rounded-full mb-4">E-COMMERCE SOLUTIONS</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Build Your <span className="text-[#C8FF00]">Online Empire</span></h1>
          <p className="text-cream/50 max-w-[700px] mx-auto text-lg">From custom storefronts to enterprise marketplaces — we build e-commerce platforms that drive sales and delight customers.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: ShoppingCart, title: 'Custom Online Stores', desc: 'Bespoke e-commerce platforms with unique designs, custom features, and seamless checkout experiences.' },
            { icon: CreditCard, title: 'Payment Integration', desc: 'Stripe, PayPal, Apple Pay, Google Pay — secure payment processing with multi-currency support.' },
            { icon: Truck, title: 'Order & Fulfillment', desc: 'Automated order processing, inventory management, shipping integration, and real-time tracking.' },
            { icon: BarChart3, title: 'Analytics & Optimization', desc: 'Conversion tracking, A/B testing, funnel optimization, and AI-powered product recommendations.' },
            { icon: Globe, title: 'Multi-Channel Commerce', desc: 'Sell on your website, Amazon, eBay, social media — all managed from one unified dashboard.' },
            { icon: Shield, title: 'Security & Compliance', desc: 'PCI DSS compliance, fraud detection, SSL certificates, and secure data handling.' },
          ].map((s, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[#C8FF00]/20 transition-all">
              <s.icon size={24} className="text-[#C8FF00] mb-4" />
              <h3 className="font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-cream/40">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-6">Platforms We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Custom Headless', 'Stripe Commerce', 'Medusa.js', 'Saleor'].map(p => (
              <div key={p} className="p-4 bg-white/[0.04] rounded-[8px] text-center text-sm text-cream/60">{p}</div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '$2.4B+', label: 'GMV Processed' },
            { value: '340%', label: 'Avg Conversion Lift' },
            { value: '150+', label: 'Stores Launched' },
            { value: '99.99%', label: 'Uptime' },
          ].map((s, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[12px] text-center">
              <div className="font-display text-2xl font-bold text-[#C8FF00]">{s.value}</div>
              <div className="text-xs text-cream/30 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center p-12 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <h2 className="font-display text-2xl font-bold mb-3">Ready to Launch Your Online Store?</h2>
          <p className="text-cream/40 mb-6">Get a free e-commerce strategy consultation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8FF00] text-obsidian font-semibold rounded-[4px] hover:bg-[#b8ef00] transition-all">Get Started <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  )
}
