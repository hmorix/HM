import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-glass-border pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-16">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 font-display font-bold text-xl mb-4">
              <div className="w-9 h-9 bg-cream flex items-center justify-center text-obsidian text-xs font-bold" style={{clipPath:'polygon(0 0, 78% 0, 100% 22%, 100% 78%, 78% 100%, 0 100%)'}}>HM</div>
              <span>HMorix</span>
            </Link>
            <p className="text-sm text-cream/35 leading-relaxed max-w-[280px]">Enterprise AI software, web design, mobile apps, digital marketing & smart home solutions.</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Services</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/services/web-design" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Web Design</Link></li>
              <li><Link to="/services/mobile-apps" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Mobile Apps & APK</Link></li>
              <li><Link to="/services/digital-marketing" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">SEO & Marketing</Link></li>
              <li><Link to="/services/ai-solutions" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">AI Solutions</Link></li>
              <li><Link to="/services/advertising" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Advertising</Link></li>
              <li><Link to="/services/ecommerce" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">E-commerce</Link></li>
              <li><Link to="/services/software-development" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Software Dev</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Products</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/billingflow" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">BillingFlow</Link></li>
              <li><Link to="/agent" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">AI Agent</Link></li>
              <li><Link to="/pdf-automation" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">PDF Automation</Link></li>
              <li><Link to="/smart-home" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Smart Home</Link></li>
              <li><Link to="/playground" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">AI Playground</Link></li>
              <li><Link to="/developers" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Developers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Resources</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/blog" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Blog</Link></li>
              <li><Link to="/case-studies" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Case Studies</Link></li>
              <li><Link to="/whitepapers" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Whitepapers</Link></li>
              <li><Link to="/knowledge-base" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Knowledge Base</Link></li>
              <li><Link to="/faq" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">FAQ</Link></li>
              <li><Link to="/testimonials" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Testimonials</Link></li>
              <li><Link to="/support" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Company</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/about" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Careers</Link></li>
              <li><Link to="/investors" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Investors</Link></li>
              <li><Link to="/partners" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Partners</Link></li>
              <li><Link to="/press" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Press</Link></li>
              <li><Link to="/media-kit" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Media Kit</Link></li>
              <li><Link to="/roadmap" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Trust & Legal</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/security" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Security</Link></li>
              <li><Link to="/status" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Status</Link></li>
              <li><Link to="/compliance" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Compliance</Link></li>
              <li><Link to="/certifications" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Certifications</Link></li>
              <li><Link to="/privacy" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Terms of Service</Link></li>
              <li><Link to="/sitemap" className="text-sm text-cream/35 hover:text-[#C8FF00] transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/35">
          <span>© 2024 HMorix. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cream transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-cream transition-colors">Sitemap</Link>
            <Link to="/contact" className="hover:text-cream transition-colors">Contact</Link>
          </div>
          <div className="flex gap-3">
            <a href="https://twitter.com/hmorix" className="w-8 h-8 border border-glass-border rounded-[4px] flex items-center justify-center hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all">𝕏</a>
            <a href="https://linkedin.com/company/hmorix" className="w-8 h-8 border border-glass-border rounded-[4px] flex items-center justify-center hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all">in</a>
            <a href="https://github.com/hmorix" className="w-8 h-8 border border-glass-border rounded-[4px] flex items-center justify-center hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all">GH</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
