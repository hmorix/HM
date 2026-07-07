import { Router, Request, Response } from 'express'

const router = Router()

// CRM Dashboard Stats
router.get('/stats', (_req: Request, res: Response) => {
  res.json({
    contacts: { total: 12847, active: 9234, newThisMonth: 342, growth: '+12.3%' },
    deals: { active: 234, totalValue: 4200000, avgDealSize: 17948, winRate: 68 },
    pipeline: { lead: 45, qualification: 23, discovery: 18, proposal: 12, negotiation: 8, closedWon: 34 },
    revenue: { mrr: 847000, arr: 10164000, growth: '+18.7%' },
    activities: { callsToday: 34, emailsToday: 87, meetingsToday: 12 }
  })
})

// Contacts CRUD
router.get('/contacts', (req: Request, res: Response) => {
  const { page = '1', limit = '20', search, status, tag } = req.query
  // In production: SELECT * FROM crm_contacts WHERE ... LIMIT ... OFFSET ...
  const contacts = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: ['John Smith', 'Emily Davis', 'Robert Chang', 'Anna Petrov', 'Michael Park'][i % 5],
    email: `contact${i}@company.com`,
    phone: `+1-555-0${100 + i}`,
    company: ['Meridian Corp', 'NovaTech', 'Quantum Labs', 'FastCart', 'Stellar Digital'][i % 5],
    role: ['CTO', 'VP Engineering', 'Head of AI', 'CEO', 'Director'][i % 5],
    status: i % 8 === 0 ? 'inactive' : 'active',
    lastContact: new Date(Date.now() - i * 86400000).toISOString(),
    deals: Math.floor(Math.random() * 5),
    totalValue: Math.floor(Math.random() * 500000),
    tags: [['enterprise'], ['mid-market'], ['startup'], ['hot-lead'], ['enterprise', 'ai']][i % 5],
    created: new Date(2024, 0, 1 + i).toISOString()
  }))

  const pageNum = parseInt(page as string)
  const limitNum = parseInt(limit as string)
  res.json({
    contacts: contacts.slice((pageNum - 1) * limitNum, pageNum * limitNum),
    total: contacts.length,
    page: pageNum,
    pages: Math.ceil(contacts.length / limitNum)
  })
})

router.post('/contacts', (req: Request, res: Response) => {
  const { name, email, phone, company, role, tags } = req.body
  // INSERT INTO crm_contacts (name, email, phone, company, role, tags) VALUES (?, ?, ?, ?, ?, ?)
  res.json({ id: Date.now(), name, email, phone, company, role, tags, status: 'active', created: new Date().toISOString() })
})

router.put('/contacts/:id', (req: Request, res: Response) => {
  // UPDATE crm_contacts SET ... WHERE id = ?
  res.json({ id: req.params.id, ...req.body, updated: new Date().toISOString() })
})

router.delete('/contacts/:id', (req: Request, res: Response) => {
  // DELETE FROM crm_contacts WHERE id = ?
  res.json({ success: true, message: `Contact ${req.params.id} deleted` })
})

// Deals CRUD
router.get('/deals', (req: Request, res: Response) => {
  const { stage, owner, page = '1' } = req.query
  const deals = [
    { id: 1, name: 'Enterprise License - Meridian Corp', value: 245000, stage: 'negotiation', probability: 85, owner: 'Sarah Chen', contact: 'John Smith', company: 'Meridian Corp', created: '2024-06-01', expectedClose: '2024-07-15' },
    { id: 2, name: 'Platform Migration - NovaTech', value: 180000, stage: 'proposal', probability: 60, owner: 'Mike Johnson', contact: 'Emily Davis', company: 'NovaTech', created: '2024-06-05', expectedClose: '2024-08-01' },
    { id: 3, name: 'AI Agent Deployment - Quantum Labs', value: 320000, stage: 'discovery', probability: 40, owner: 'Alex Rivera', contact: 'Robert Chang', company: 'Quantum Labs', created: '2024-06-10', expectedClose: '2024-09-01' },
    { id: 4, name: 'BillingFlow Integration - FastCart', value: 95000, stage: 'closed_won', probability: 100, owner: 'Lisa Martinez', contact: 'Anna Petrov', company: 'FastCart', created: '2024-05-15', expectedClose: '2024-06-28' },
    { id: 5, name: 'Smart Home B2B - GreenLeaf', value: 150000, stage: 'qualification', probability: 30, owner: 'David Kim', contact: 'Lisa Thompson', company: 'GreenLeaf Homes', created: '2024-06-12', expectedClose: '2024-08-15' },
  ]
  res.json({ deals, total: deals.length })
})

router.post('/deals', (req: Request, res: Response) => {
  const { name, value, stage, contactId, probability } = req.body
  // INSERT INTO crm_deals ...
  res.json({ id: Date.now(), name, value, stage, probability, contactId, created: new Date().toISOString() })
})

router.put('/deals/:id', (req: Request, res: Response) => {
  res.json({ id: req.params.id, ...req.body, updated: new Date().toISOString() })
})

router.put('/deals/:id/stage', (req: Request, res: Response) => {
  const { stage } = req.body
  // UPDATE crm_deals SET stage = ? WHERE id = ?
  res.json({ id: req.params.id, stage, updated: new Date().toISOString() })
})

// Activities
router.get('/activities', (req: Request, res: Response) => {
  const { contactId, type, page = '1' } = req.query
  const activities = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    type: ['call', 'email', 'meeting', 'note'][i % 4],
    contactName: ['John Smith', 'Emily Davis', 'Robert Chang'][i % 3],
    company: ['Meridian Corp', 'NovaTech', 'Quantum Labs'][i % 3],
    note: ['Discussed pricing', 'Sent proposal', 'Product demo', 'Follow-up scheduled'][i % 4],
    timestamp: new Date(Date.now() - i * 3600000).toISOString(),
    userId: 'usr_001'
  }))
  res.json({ activities, total: activities.length })
})

router.post('/activities', (req: Request, res: Response) => {
  const { type, contactId, note } = req.body
  // INSERT INTO crm_activities ...
  res.json({ id: Date.now(), type, contactId, note, timestamp: new Date().toISOString() })
})

// Pipeline Summary
router.get('/pipeline', (_req: Request, res: Response) => {
  res.json({
    stages: [
      { name: 'Lead', count: 45, value: 890000 },
      { name: 'Qualification', count: 23, value: 1200000 },
      { name: 'Discovery', count: 18, value: 980000 },
      { name: 'Proposal', count: 12, value: 720000 },
      { name: 'Negotiation', count: 8, value: 540000 },
      { name: 'Closed Won', count: 34, value: 2100000 },
      { name: 'Closed Lost', count: 12, value: 450000 },
    ],
    totalPipeline: 6880000,
    weightedPipeline: 3240000,
    avgDealCycle: 42
  })
})

export default router
