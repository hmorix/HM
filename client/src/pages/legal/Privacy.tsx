import SEOHead from '../../components/seo/SEOHead'

export default function Privacy() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead title="Privacy Policy" description="HMorix Privacy Policy — learn how we collect, use, and protect your personal data. GDPR and CCPA compliant." keywords="privacy policy, data protection, GDPR, CCPA, personal data, data privacy, HMorix privacy, cookie policy, data security" canonical="/privacy" />
      <div className="max-w-[800px] mx-auto px-8">
        <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-cream/60 text-sm leading-relaxed">
          <p className="text-cream/40 text-xs">Last updated: July 1, 2024</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">1. Information We Collect</h2>
          <p>We collect information you provide directly (name, email, company, payment info), information collected automatically (IP address, browser type, device info, usage data), and information from third parties (OAuth providers, analytics).</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">2. How We Use Your Information</h2>
          <p>We use your data to: provide and improve our services, process transactions, send communications, ensure security, comply with legal obligations, and personalize your experience.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">3. Data Sharing</h2>
          <p>We do not sell your personal data. We may share data with: service providers (hosting, analytics, payment processors), legal authorities when required, and business partners with your consent.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">4. Data Security</h2>
          <p>We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 Type II compliance, regular security audits, and access controls.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">5. Your Rights (GDPR/CCPA)</h2>
          <p>You have the right to: access your data, correct inaccuracies, delete your data, restrict processing, data portability, opt-out of marketing, and withdraw consent at any time.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">6. Cookies</h2>
          <p>We use essential cookies for functionality, analytics cookies for performance insights, and marketing cookies for personalized advertising. You can manage preferences through our cookie settings.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">7. Data Retention</h2>
          <p>We retain your data for as long as your account is active or as needed to provide services. You may request deletion at any time. Some data may be retained for legal compliance.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">8. International Transfers</h2>
          <p>Your data may be transferred to servers in the United States and European Union. We ensure appropriate safeguards through Standard Contractual Clauses and Privacy Shield frameworks.</p>
          
          <h2 className="font-display text-xl font-semibold text-cream !mt-8">9. Contact</h2>
          <p>For privacy inquiries, contact our Data Protection Officer at privacy@hmorix.com.</p>
        </div>
      </div>
    </div>
  )
}
