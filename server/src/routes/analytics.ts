import { Router, Request, Response } from 'express'

const router = Router()

// Overview Stats
router.get('/overview', (req: Request, res: Response) => {
  const { period = '30d' } = req.query
  res.json({
    visitors: { total: 847230, unique: 623400, returning: 223830, growth: '+23.4%' },
    pageViews: { total: 2400000, perSession: 2.84, growth: '+18.7%' },
    sessions: { total: 845000, avgDuration: '4m 32s', growth: '+12.1%' },
    bounceRate: { rate: 32.4, change: '-5.2%' },
    conversions: { total: 12847, rate: 1.52, growth: '+34.2%' },
    revenue: { total: 847000, perVisitor: 1.0, growth: '+28.9%' },
    period
  })
})

// Traffic Sources
router.get('/traffic', (_req: Request, res: Response) => {
  res.json({
    sources: [
      { source: 'Google Organic', visitors: 312400, percentage: 36.9, sessions: 298000, bounceRate: 28, conversionRate: 2.1 },
      { source: 'Direct', visitors: 187200, percentage: 22.1, sessions: 175000, bounceRate: 35, conversionRate: 1.8 },
      { source: 'LinkedIn', visitors: 98400, percentage: 11.6, sessions: 92000, bounceRate: 22, conversionRate: 3.2 },
      { source: 'Twitter/X', visitors: 76800, percentage: 9.1, sessions: 71000, bounceRate: 38, conversionRate: 1.2 },
      { source: 'GitHub', visitors: 54200, percentage: 6.4, sessions: 50000, bounceRate: 18, conversionRate: 4.5 },
      { source: 'Google Ads', visitors: 48900, percentage: 5.8, sessions: 46000, bounceRate: 42, conversionRate: 2.8 },
      { source: 'Referral', visitors: 42100, percentage: 5.0, sessions: 39000, bounceRate: 30, conversionRate: 1.9 },
      { source: 'Email', visitors: 27230, percentage: 3.2, sessions: 25000, bounceRate: 20, conversionRate: 5.1 },
    ],
    totalVisitors: 847230
  })
})

// Page Analytics
router.get('/pages', (req: Request, res: Response) => {
  const { sort = 'views', limit = '20' } = req.query
  res.json({
    pages: [
      { path: '/', title: 'Home', views: 234000, uniqueVisitors: 187000, avgTime: '2:34', bounceRate: 28, exitRate: 15 },
      { path: '/services/web-design', title: 'Web Design', views: 98400, uniqueVisitors: 76200, avgTime: '3:45', bounceRate: 24, exitRate: 22 },
      { path: '/blog', title: 'Blog', views: 87200, uniqueVisitors: 65400, avgTime: '5:12', bounceRate: 18, exitRate: 12 },
      { path: '/pricing', title: 'Pricing', views: 76800, uniqueVisitors: 54300, avgTime: '2:56', bounceRate: 35, exitRate: 28 },
      { path: '/services/ai-solutions', title: 'AI Solutions', views: 65400, uniqueVisitors: 48900, avgTime: '4:08', bounceRate: 22, exitRate: 18 },
      { path: '/billingflow', title: 'BillingFlow', views: 54200, uniqueVisitors: 42100, avgTime: '3:22', bounceRate: 26, exitRate: 20 },
      { path: '/agent', title: 'AI Agent', views: 48900, uniqueVisitors: 36700, avgTime: '4:45', bounceRate: 20, exitRate: 16 },
      { path: '/services/digital-marketing', title: 'Digital Marketing', views: 43200, uniqueVisitors: 32400, avgTime: '3:15', bounceRate: 30, exitRate: 25 },
      { path: '/services/mobile-apps', title: 'Mobile Apps', views: 38700, uniqueVisitors: 29100, avgTime: '3:02', bounceRate: 28, exitRate: 22 },
      { path: '/developers', title: 'Developers', views: 34500, uniqueVisitors: 27600, avgTime: '6:18', bounceRate: 15, exitRate: 10 },
    ]
  })
})

// Geographic Data
router.get('/geo', (_req: Request, res: Response) => {
  res.json({
    countries: [
      { country: 'United States', code: 'US', visitors: 312400, percentage: 36.9, sessions: 298000 },
      { country: 'United Kingdom', code: 'GB', visitors: 98400, percentage: 11.6, sessions: 92000 },
      { country: 'Germany', code: 'DE', visitors: 76800, percentage: 9.1, sessions: 71000 },
      { country: 'India', code: 'IN', visitors: 65400, percentage: 7.7, sessions: 60000 },
      { country: 'Canada', code: 'CA', visitors: 54200, percentage: 6.4, sessions: 50000 },
      { country: 'Australia', code: 'AU', visitors: 43200, percentage: 5.1, sessions: 40000 },
      { country: 'France', code: 'FR', visitors: 32400, percentage: 3.8, sessions: 30000 },
      { country: 'Japan', code: 'JP', visitors: 28900, percentage: 3.4, sessions: 27000 },
    ]
  })
})

// Conversion Funnel
router.get('/funnel', (_req: Request, res: Response) => {
  res.json({
    stages: [
      { name: 'Visitors', count: 847230, percentage: 100 },
      { name: 'Engaged (>30s)', count: 423615, percentage: 50 },
      { name: 'Signed Up', count: 42361, percentage: 5 },
      { name: 'Activated', count: 21180, percentage: 2.5 },
      { name: 'Paid', count: 12847, percentage: 1.5 },
    ],
    conversionRate: 1.52,
    avgTimeToConvert: '4.2 days'
  })
})

// Real-time Analytics
router.get('/realtime', (_req: Request, res: Response) => {
  res.json({
    activeUsers: Math.floor(200 + Math.random() * 100),
    pageViewsPerMinute: Math.floor(40 + Math.random() * 30),
    topActivePages: [
      { path: '/', users: Math.floor(30 + Math.random() * 20) },
      { path: '/pricing', users: Math.floor(15 + Math.random() * 10) },
      { path: '/blog', users: Math.floor(12 + Math.random() * 8) },
      { path: '/billingflow', users: Math.floor(8 + Math.random() * 6) },
      { path: '/agent', users: Math.floor(6 + Math.random() * 5) },
    ],
    topCountries: [
      { country: 'US', users: Math.floor(80 + Math.random() * 40) },
      { country: 'UK', users: Math.floor(25 + Math.random() * 15) },
      { country: 'DE', users: Math.floor(15 + Math.random() * 10) },
    ]
  })
})

// SEO Analytics
router.get('/seo', (_req: Request, res: Response) => {
  res.json({
    organicTraffic: { total: 312400, growth: '+12.3%' },
    keywords: { ranking: 847, top10: 124, top3: 34 },
    topKeywords: [
      { keyword: 'web design company', position: 3, volume: 12000, traffic: 2400 },
      { keyword: 'AI software development', position: 2, volume: 8500, traffic: 2550 },
      { keyword: 'billing automation software', position: 1, volume: 6200, traffic: 3720 },
      { keyword: 'mobile app development', position: 5, volume: 22000, traffic: 2200 },
      { keyword: 'digital marketing agency', position: 4, volume: 18000, traffic: 2700 },
      { keyword: 'SEO services', position: 7, volume: 33000, traffic: 1650 },
      { keyword: 'enterprise software company', position: 3, volume: 4500, traffic: 900 },
      { keyword: 'smart home IoT', position: 6, volume: 9800, traffic: 980 },
    ],
    backlinks: { total: 12400, newThisMonth: 342, domains: 2100 },
    domainAuthority: 67,
    coreWebVitals: { lcp: '1.2s', fid: '12ms', cls: 0.05 }
  })
})

// Revenue Analytics
router.get('/revenue', (_req: Request, res: Response) => {
  res.json({
    mrr: 847000,
    arr: 10164000,
    growth: '+18.7%',
    churn: 2.1,
    ltv: 24500,
    cac: 3200,
    ltvCacRatio: 7.66,
    revenueByProduct: [
      { product: 'BillingFlow', revenue: 420000, percentage: 49.6 },
      { product: 'AI Agent', revenue: 210000, percentage: 24.8 },
      { product: 'PDF Automation', revenue: 95000, percentage: 11.2 },
      { product: 'Smart Home', revenue: 72000, percentage: 8.5 },
      { product: 'Services', revenue: 50000, percentage: 5.9 },
    ],
    monthlyTrend: [620000, 650000, 690000, 720000, 780000, 847000]
  })
})

export default router
