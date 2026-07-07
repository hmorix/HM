import { Link } from 'react-router-dom'
import SEOHead from '../../components/seo/SEOHead'
import { Smartphone, Download, Shield, Zap, Code, Layers, CheckCircle, ArrowRight, Star } from 'lucide-react'

const platforms = [
  { name: 'Android APK Development', desc: 'Native Android apps and APK development with Kotlin/Java. Custom APK builds, Google Play Store deployment, and enterprise distribution.', icon: '🤖' },
  { name: 'iOS App Development', desc: 'Native iOS applications with Swift/SwiftUI. App Store optimization, TestFlight distribution, and enterprise certificates.', icon: '🍎' },
  { name: 'Cross-Platform Apps', desc: 'React Native and Flutter development for simultaneous Android & iOS deployment. One codebase, two platforms.', icon: '🔄' },
  { name: 'Progressive Web Apps', desc: 'PWA development with offline support, push notifications, and app-like experiences without app store requirements.', icon: '🌐' },
]

const appTypes = [
  'E-commerce Apps', 'Social Media Apps', 'Fitness & Health Apps', 'Food Delivery Apps',
  'Ride-Sharing Apps', 'Banking & Fintech Apps', 'Education Apps', 'Real Estate Apps',
  'Travel & Booking Apps', 'On-Demand Service Apps', 'Chat & Messaging Apps', 'IoT Control Apps',
  'Enterprise Apps', 'CRM Mobile Apps', 'Inventory Management', 'Field Service Apps',
]

export default function MobileApps() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead
        title="Mobile App & APK Development Services"
        description="Professional mobile app development and APK development services by HMorix. We build native Android apps, iOS apps, cross-platform applications with React Native and Flutter. Custom APK builds, Google Play Store deployment, and enterprise mobile solutions."
        keywords="mobile app development, APK development, Android app development, iOS app development, React Native development, Flutter development, cross-platform app development, mobile application development, app design, app development company, custom mobile apps, enterprise mobile apps, ecommerce app, fintech app, healthcare app, education app, social media app, food delivery app, ride sharing app, on-demand app, chat app, IoT app, Kotlin development, Swift development, Google Play Store, App Store, mobile UI design, app prototyping, mobile backend, push notifications, in-app purchases, mobile analytics, app maintenance, APK download, custom APK, Android APK builder"
        canonical="/services/mobile-apps"
      />
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-mono rounded-full mb-4">MOBILE APP & APK DEVELOPMENT</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Build Powerful <span className="text-[#C8FF00]">Mobile Apps</span></h1>
          <p className="text-cream/50 max-w-[700px] mx-auto text-lg">From concept to App Store — we develop high-performance mobile applications and custom APKs for Android and iOS that users love.</p>
        </div>

        {/* Platforms */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {platforms.map((p, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px] hover:border-[#C8FF00]/20 transition-all">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-display text-lg font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-cream/40">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* App Types */}
        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px] mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-6">Types of Apps We Build</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {appTypes.map(type => (
              <div key={type} className="flex items-center gap-2 p-3 bg-white/[0.04] rounded-[8px] text-sm text-cream/60"><CheckCircle size={12} className="text-[#C8FF00] flex-shrink-0" />{type}</div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-center mb-8">Our Development Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Discovery', desc: 'Requirements gathering, market research, and technical planning' },
              { step: '02', title: 'Design', desc: 'UI/UX design, wireframes, prototypes, and user testing' },
              { step: '03', title: 'Development', desc: 'Agile development with sprint cycles and regular demos' },
              { step: '04', title: 'Testing', desc: 'QA testing, performance testing, and beta distribution' },
              { step: '05', title: 'Launch', desc: 'Store submission, APK distribution, and post-launch support' },
            ].map((s, i) => (
              <div key={i} className="p-5 bg-obsidian-2 border border-glass-border rounded-[12px] text-center">
                <div className="text-[#C8FF00] font-mono text-xs mb-2">{s.step}</div>
                <h4 className="font-display font-semibold text-sm mb-1">{s.title}</h4>
                <p className="text-[10px] text-cream/30">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '200+', label: 'Apps Delivered' },
            { value: '4.8★', label: 'Avg Store Rating' },
            { value: '50M+', label: 'Total Downloads' },
            { value: '99.9%', label: 'Crash-Free Rate' },
          ].map((s, i) => (
            <div key={i} className="p-6 bg-obsidian-2 border border-glass-border rounded-[12px] text-center">
              <div className="font-display text-2xl font-bold text-[#C8FF00]">{s.value}</div>
              <div className="text-xs text-cream/30 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <h2 className="font-display text-2xl font-bold mb-3">Ready to Build Your Mobile App?</h2>
          <p className="text-cream/40 mb-6">Get a free consultation and project estimate for your mobile app or APK development.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8FF00] text-obsidian font-semibold rounded-[4px] hover:bg-[#b8ef00] transition-all">Get Free Quote <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  )
}
