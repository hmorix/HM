import { Router, Request, Response } from 'express'

const router = Router()

// Admin Dashboard Stats
router.get('/stats', (_req: Request, res: Response) => {
  res.json({
    users: { total: 12847, active: 9234, new_today: 47, growth: '+12.3%' },
    revenue: { mrr: 847000, arr: 10164000, growth: '+18.7%', churn: '2.1%' },
    system: { uptime: '99.99%', cpu: 34, memory: 67, requests_per_sec: 2340 },
    security: { threats_blocked: 1247, incidents_today: 0, compliance_score: 98 },
    content: { blog_posts: 12, pages: 87, media_files: 234 },
  })
})

// User Management
router.get('/users', (req: Request, res: Response) => {
  const { page = '1', limit = '20', search, role, status } = req.query
  const users = Array.from({ length: 50 }, (_, i) => ({
    id: `usr_${1000 + i}`,
    name: ['John Doe', 'Sarah Chen', 'Mike Johnson', 'Emily Park', 'Alex Rivera', 'Lisa Martinez', 'David Kim', 'Anna Petrov'][i % 8],
    email: `user${i}@example.com`,
    role: ['admin', 'user', 'editor', 'developer'][i % 4],
    status: i % 10 === 0 ? 'suspended' : 'active',
    plan: ['free', 'starter', 'business', 'enterprise'][i % 4],
    created: new Date(2024, 0, 1 + i).toISOString(),
    lastLogin: new Date(2024, 5, 20 + (i % 10)).toISOString(),
    apiCalls: Math.floor(Math.random() * 10000),
  }))

  let filtered = [...users]
  if (search) filtered = filtered.filter(u => u.name.toLowerCase().includes((search as string).toLowerCase()) || u.email.includes(search as string))
  if (role) filtered = filtered.filter(u => u.role === role)
  if (status) filtered = filtered.filter(u => u.status === status)

  const pageNum = parseInt(page as string)
  const limitNum = parseInt(limit as string)
  res.json({
    users: filtered.slice((pageNum - 1) * limitNum, pageNum * limitNum),
    total: filtered.length,
    page: pageNum,
    pages: Math.ceil(filtered.length / limitNum)
  })
})

router.post('/users', (req: Request, res: Response) => {
  const { name, email, role, plan } = req.body
  res.json({ id: `usr_${Date.now()}`, name, email, role, plan, status: 'active', created: new Date().toISOString() })
})

router.put('/users/:id', (req: Request, res: Response) => {
  res.json({ id: req.params.id, ...req.body, updated: new Date().toISOString() })
})

router.delete('/users/:id', (req: Request, res: Response) => {
  res.json({ success: true, message: `User ${req.params.id} deleted` })
})

router.post('/users/:id/suspend', (req: Request, res: Response) => {
  res.json({ success: true, message: `User ${req.params.id} suspended` })
})

router.post('/users/:id/reset-password', (req: Request, res: Response) => {
  res.json({ success: true, message: `Password reset email sent to user ${req.params.id}` })
})

// System Logs
router.get('/logs', (req: Request, res: Response) => {
  const { level, service, page = '1' } = req.query
  const logs = Array.from({ length: 100 }, (_, i) => ({
    id: `log_${i}`,
    timestamp: new Date(Date.now() - i * 60000).toISOString(),
    level: ['info', 'warn', 'error', 'debug'][i % 4],
    service: ['api-gateway', 'auth-service', 'billing-service', 'ai-engine', 'pdf-processor'][i % 5],
    message: [
      'Request processed successfully',
      'Rate limit approaching threshold',
      'Database connection timeout',
      'Cache miss for key user_session',
      'AI model inference completed',
    ][i % 5],
    metadata: { requestId: `req_${Date.now() + i}`, duration: Math.floor(Math.random() * 500) }
  }))

  let filtered = [...logs]
  if (level) filtered = filtered.filter(l => l.level === level)
  if (service) filtered = filtered.filter(l => l.service === service)

  const pageNum = parseInt(page as string)
  res.json({ logs: filtered.slice((pageNum - 1) * 50, pageNum * 50), total: filtered.length })
})

// Security Events
router.get('/security-events', (_req: Request, res: Response) => {
  res.json([
    { id: 1, type: 'brute_force', severity: 'high', source: '192.168.1.100', target: '/api/auth/login', blocked: true, timestamp: new Date().toISOString() },
    { id: 2, type: 'sql_injection', severity: 'critical', source: '10.0.0.55', target: '/api/users', blocked: true, timestamp: new Date(Date.now() - 3600000).toISOString() },
    { id: 3, type: 'xss_attempt', severity: 'medium', source: '172.16.0.22', target: '/api/blog', blocked: true, timestamp: new Date(Date.now() - 7200000).toISOString() },
    { id: 4, type: 'rate_limit', severity: 'low', source: '192.168.2.50', target: '/api/search', blocked: true, timestamp: new Date(Date.now() - 10800000).toISOString() },
  ])
})

// System Settings
router.get('/settings', (_req: Request, res: Response) => {
  res.json({
    general: { siteName: 'HMorix', siteUrl: 'https://hmorix.com', timezone: 'UTC', language: 'en' },
    email: { provider: 'SendGrid', fromEmail: 'noreply@hmorix.com', fromName: 'HMorix' },
    security: { mfaRequired: true, sessionTimeout: 3600, maxLoginAttempts: 5, ipWhitelist: [] },
    database: { provider: 'Cloudflare D1', region: 'us-east-1', backupFrequency: 'hourly' },
    api: { rateLimit: 1000, rateLimitWindow: 60, corsOrigins: ['https://hmorix.com'] },
    storage: { provider: 'Cloudflare R2', bucket: 'hmorix-assets', maxFileSize: 50 },
  })
})

router.put('/settings', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Settings updated', settings: req.body })
})

// Content Management
router.get('/content/pages', (_req: Request, res: Response) => {
  res.json([
    { id: 1, title: 'Home', path: '/', status: 'published', lastModified: '2024-06-28' },
    { id: 2, title: 'About', path: '/about', status: 'published', lastModified: '2024-06-25' },
    { id: 3, title: 'Services', path: '/services', status: 'published', lastModified: '2024-06-20' },
    { id: 4, title: 'Pricing', path: '/pricing', status: 'published', lastModified: '2024-06-18' },
    { id: 5, title: 'Blog', path: '/blog', status: 'published', lastModified: '2024-06-28' },
  ])
})

// Analytics
router.get('/analytics', (req: Request, res: Response) => {
  const { period = '7d' } = req.query
  res.json({
    visitors: { total: 45230, unique: 32100, returning: 13130, bounceRate: '34.2%' },
    pageViews: { total: 128400, perSession: 2.84 },
    topPages: [
      { path: '/', views: 23400, avgTime: '2:34' },
      { path: '/services/web-design', views: 12300, avgTime: '3:12' },
      { path: '/blog', views: 9800, avgTime: '4:05' },
      { path: '/pricing', views: 8900, avgTime: '2:45' },
      { path: '/services/ai-solutions', views: 7600, avgTime: '3:30' },
    ],
    topSources: [
      { source: 'Google Organic', visitors: 18200, percentage: 40.2 },
      { source: 'Direct', visitors: 9800, percentage: 21.7 },
      { source: 'LinkedIn', visitors: 5400, percentage: 11.9 },
      { source: 'Twitter', visitors: 4200, percentage: 9.3 },
      { source: 'GitHub', visitors: 3100, percentage: 6.9 },
    ],
    conversions: { signups: 234, demos: 67, contactForms: 89, totalLeads: 390 },
    period
  })
})

export default router
