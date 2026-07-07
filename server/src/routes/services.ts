import { Router, Request, Response } from 'express'

const router = Router()

// SEO: Service pages data API
router.get('/web-design', (_req: Request, res: Response) => {
  res.json({
    service: 'Web Design & Development',
    packages: [
      { name: 'Starter', price: 2999, features: ['5-page responsive website', 'Custom UI/UX design', 'SEO optimization', 'Mobile-first design', 'Contact forms', '3 revision rounds'] },
      { name: 'Business', price: 7999, features: ['15-page website', 'Custom animations', 'CMS integration', 'E-commerce ready', 'Blog system', 'Analytics dashboard', 'Priority support'] },
      { name: 'Enterprise', price: null, features: ['Unlimited pages', 'Custom web application', 'API development', 'Database design', 'CI/CD pipeline', 'Dedicated team', '24/7 support', 'SLA guarantee'] },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'Docker', 'AWS', 'Vercel']
  })
})

router.get('/mobile-apps', (_req: Request, res: Response) => {
  res.json({
    service: 'Mobile App & APK Development',
    platforms: ['Android (Kotlin/Java)', 'iOS (Swift/SwiftUI)', 'React Native', 'Flutter'],
    appTypes: ['E-commerce', 'Social Media', 'Fitness', 'Food Delivery', 'Ride-Sharing', 'Banking', 'Education', 'Real Estate', 'Travel', 'On-Demand', 'Chat', 'IoT', 'Enterprise', 'CRM', 'Inventory', 'Field Service'],
    stats: { appsDelivered: 200, avgRating: 4.8, totalDownloads: '50M+', crashFreeRate: '99.9%' }
  })
})

router.get('/digital-marketing', (_req: Request, res: Response) => {
  res.json({
    service: 'Digital Marketing & SEO',
    services: ['SEO', 'PPC', 'Social Media Marketing', 'Email Marketing', 'Content Marketing', 'Advertising Automation'],
    packages: [
      { name: 'Growth Starter', price: 1499, period: 'monthly' },
      { name: 'Scale Up', price: 3999, period: 'monthly' },
      { name: 'Enterprise', price: null, period: 'custom' },
    ],
    results: { avgROI: '312%', trafficGrowth: '5.2x', cplReduction: '67%' }
  })
})

router.get('/ai-solutions', (_req: Request, res: Response) => {
  res.json({
    service: 'AI & Machine Learning Solutions',
    solutions: ['AI Chatbots', 'Machine Learning', 'Generative AI', 'AI Workflow Automation', 'Computer Vision', 'AI Data Platform'],
    industries: ['Healthcare', 'Financial Services', 'E-commerce', 'Manufacturing', 'Legal', 'Real Estate', 'Education', 'Logistics'],
    stats: { agentsDeployed: '10,000+', modelAccuracy: '99.2%', efficiencyGain: '400%', inferenceLatency: '<200ms' }
  })
})

router.get('/software-development', (_req: Request, res: Response) => {
  res.json({
    service: 'Custom Software Development',
    capabilities: ['Custom Software', 'Cloud Solutions', 'API Development', 'Database Design', 'Cybersecurity', 'DevOps'],
    techStack: {
      frontend: ['React', 'Next.js', 'Vue', 'Angular', 'TypeScript'],
      backend: ['Node.js', 'Python', 'Go', 'Rust', 'Java'],
      database: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'],
      cloud: ['AWS', 'Azure', 'GCP', 'Cloudflare'],
      devops: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    }
  })
})

router.get('/advertising', (_req: Request, res: Response) => {
  res.json({
    service: 'Advertising & Ad Tech',
    channels: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'Programmatic', 'Native Ads'],
    features: ['Auto-Bidding AI', 'Smart Targeting', 'Predictive Analytics', 'Creative AI'],
    results: { avgROAS: '5.2x', cpaReduction: '-43%', monthlySpendManaged: '$2.8M+' }
  })
})

router.get('/ecommerce', (_req: Request, res: Response) => {
  res.json({
    service: 'E-commerce Solutions',
    platforms: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Custom Headless', 'Stripe Commerce', 'Medusa.js', 'Saleor'],
    features: ['Custom Stores', 'Payment Integration', 'Order & Fulfillment', 'Analytics', 'Multi-Channel', 'Security'],
    stats: { gmvProcessed: '$2.4B+', conversionLift: '340%', storesLaunched: 150 }
  })
})

// Contact form / Lead generation
router.post('/inquiry', (req: Request, res: Response) => {
  const { name, email, company, service, budget, message } = req.body
  // In production: save to DB, send email notification, add to CRM
  res.json({
    success: true,
    message: 'Thank you for your inquiry. Our team will contact you within 24 hours.',
    referenceId: `INQ-${Date.now()}`
  })
})

// Newsletter subscription
router.post('/newsletter', (req: Request, res: Response) => {
  const { email } = req.body
  res.json({ success: true, message: 'Successfully subscribed to the HMorix newsletter.' })
})

// SEO: Generate sitemap data
router.get('/sitemap-data', (_req: Request, res: Response) => {
  res.json({
    pages: [
      { url: '/', priority: 1.0, changefreq: 'daily' },
      { url: '/about', priority: 0.8, changefreq: 'monthly' },
      { url: '/services', priority: 0.9, changefreq: 'weekly' },
      { url: '/services/web-design', priority: 0.9, changefreq: 'weekly' },
      { url: '/services/mobile-apps', priority: 0.9, changefreq: 'weekly' },
      { url: '/services/digital-marketing', priority: 0.9, changefreq: 'weekly' },
      { url: '/services/ai-solutions', priority: 0.9, changefreq: 'weekly' },
      { url: '/services/software-development', priority: 0.9, changefreq: 'weekly' },
      { url: '/services/advertising', priority: 0.9, changefreq: 'weekly' },
      { url: '/services/ecommerce', priority: 0.9, changefreq: 'weekly' },
      { url: '/pricing', priority: 0.8, changefreq: 'weekly' },
      { url: '/contact', priority: 0.8, changefreq: 'monthly' },
      { url: '/blog', priority: 0.8, changefreq: 'daily' },
      { url: '/billingflow', priority: 0.8, changefreq: 'weekly' },
      { url: '/agent', priority: 0.8, changefreq: 'weekly' },
      { url: '/pdf-automation', priority: 0.8, changefreq: 'weekly' },
      { url: '/developers', priority: 0.7, changefreq: 'weekly' },
      { url: '/security', priority: 0.7, changefreq: 'monthly' },
      { url: '/status', priority: 0.6, changefreq: 'hourly' },
      { url: '/smart-home', priority: 0.7, changefreq: 'weekly' },
      { url: '/careers', priority: 0.6, changefreq: 'weekly' },
      { url: '/faq', priority: 0.6, changefreq: 'monthly' },
      { url: '/testimonials', priority: 0.6, changefreq: 'monthly' },
    ]
  })
})

export default router
