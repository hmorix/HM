import SEOHead from '../../components/seo/SEOHead'

export default function Terms() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead title="Terms of Service" description="HMorix Terms of Service — read our terms and conditions for using HMorix products, services, and platform." keywords="terms of service, terms and conditions, HMorix terms, user agreement, service agreement, legal terms" canonical="/terms" />
      <div className="max-w-[800px] mx-auto px-8">
        <h1 className="font-display text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-cream/60 text-sm leading-relaxed">
          <p className="text-cream/40 text-xs">Last updated: July 1, 2024</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">1. Acceptance of Terms</h2>
          <p>By accessing or using HMorix services, including our website (hmorix.com), products, APIs, and any associated services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">2. Services Description</h2>
          <p>HMorix provides enterprise software solutions including but not limited to: AI-powered automation tools (BillingFlow, PDF Automation, AI Agent), web design and development services, mobile application development, digital marketing services, smart home solutions, and cloud computing infrastructure.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">3. Account Registration</h2>
          <p>To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account. You must provide accurate and complete information during registration.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">4. Acceptable Use</h2>
          <p>You agree not to: (a) use our services for unlawful purposes; (b) attempt to gain unauthorized access to our systems; (c) interfere with the operation of our services; (d) reverse engineer our software; (e) resell or redistribute our services without authorization.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">5. Intellectual Property</h2>
          <p>All content, software, and materials provided through HMorix services are protected by intellectual property laws. You retain ownership of your data. We retain ownership of our platform, tools, and proprietary technology.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">6. Payment Terms</h2>
          <p>Paid services are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days notice.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">7. Service Level Agreement</h2>
          <p>Enterprise customers are covered by our SLA guaranteeing 99.99% uptime. Service credits will be issued for any downtime exceeding the SLA threshold.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">8. Limitation of Liability</h2>
          <p>HMorix shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">9. Termination</h2>
          <p>Either party may terminate this agreement with 30 days written notice. Upon termination, you may export your data within 30 days. We reserve the right to suspend accounts that violate these terms.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">10. Contact</h2>
          <p>For questions about these terms, contact us at legal@hmorix.com or visit our Contact page.</p>
        </div>
      </div>
    </div>
  )
}
