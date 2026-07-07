import { Router, Request, Response } from 'express'

const router = Router()

// HRM Dashboard Stats
router.get('/stats', (_req: Request, res: Response) => {
  res.json({
    employees: { total: 247, active: 240, onLeave: 5, onboarding: 2 },
    recruitment: { openPositions: 18, totalApplicants: 373, inInterview: 41, offersExtended: 5 },
    attendance: { avgRate: 96.4, lateToday: 3, absentToday: 2 },
    payroll: { totalMonthly: 2847000, avgSalary: 142350, nextPayDate: '2024-07-01' },
    performance: { avgScore: 4.2, reviewsDue: 12, goalsMet: 87 },
    turnover: { rate: 8.2, voluntary: 5.1, involuntary: 3.1 }
  })
})

// Employees CRUD
router.get('/employees', (req: Request, res: Response) => {
  const { department, status, search, page = '1', limit = '20' } = req.query
  const employees = Array.from({ length: 50 }, (_, i) => ({
    id: `emp_${1000 + i}`,
    name: ['Alex Rivera', 'Sarah Chen', 'Mike Johnson', 'Emily Park', 'Lisa Martinez', 'David Kim', 'James Wu', 'Anna Petrov'][i % 8],
    email: `employee${i}@hmorix.com`,
    department: ['Engineering', 'Product', 'Marketing', 'Sales', 'AI/ML', 'Security', 'Operations', 'HR'][i % 8],
    role: ['Staff Engineer', 'VP Product', 'Head of Security', 'ML Lead', 'Frontend Lead', 'Growth Lead', 'IoT Lead', 'DevOps Lead'][i % 8],
    location: ['San Francisco', 'New York', 'Remote', 'Austin', 'Seattle'][i % 5],
    status: i % 15 === 0 ? 'on_leave' : i % 20 === 0 ? 'onboarding' : 'active',
    startDate: new Date(2022, i % 12, 1 + (i % 28)).toISOString(),
    salary: 100000 + (i * 5000),
    manager: ['Hamza Morix', 'Alex Rivera', 'Sarah Chen'][i % 3],
    performanceScore: 3.5 + Math.random() * 1.5
  }))

  let filtered = [...employees]
  if (department) filtered = filtered.filter(e => e.department === department)
  if (status) filtered = filtered.filter(e => e.status === status)
  if (search) filtered = filtered.filter(e => e.name.toLowerCase().includes((search as string).toLowerCase()))

  const pageNum = parseInt(page as string)
  const limitNum = parseInt(limit as string)
  res.json({
    employees: filtered.slice((pageNum - 1) * limitNum, pageNum * limitNum),
    total: filtered.length,
    page: pageNum,
    pages: Math.ceil(filtered.length / limitNum)
  })
})

router.post('/employees', (req: Request, res: Response) => {
  const { name, email, department, role, salary, startDate } = req.body
  // INSERT INTO hrm_employees ...
  res.json({ id: `emp_${Date.now()}`, name, email, department, role, salary, startDate, status: 'onboarding' })
})

router.put('/employees/:id', (req: Request, res: Response) => {
  res.json({ id: req.params.id, ...req.body, updated: new Date().toISOString() })
})

router.delete('/employees/:id', (req: Request, res: Response) => {
  res.json({ success: true, message: `Employee ${req.params.id} terminated` })
})

// Departments
router.get('/departments', (_req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'Engineering', headcount: 84, budget: 12400000, manager: 'Alex Rivera', openRoles: 6 },
    { id: 2, name: 'Product', headcount: 28, budget: 4200000, manager: 'Sarah Chen', openRoles: 3 },
    { id: 3, name: 'Marketing', headcount: 32, budget: 3800000, manager: 'David Kim', openRoles: 2 },
    { id: 4, name: 'Sales', headcount: 45, budget: 5600000, manager: 'Tom Anderson', openRoles: 4 },
    { id: 5, name: 'AI/ML', headcount: 24, budget: 6800000, manager: 'Dr. Emily Park', openRoles: 2 },
    { id: 6, name: 'Security', headcount: 18, budget: 2100000, manager: 'Mike Johnson', openRoles: 1 },
    { id: 7, name: 'Operations', headcount: 8, budget: 1200000, manager: 'Anna Petrov', openRoles: 0 },
    { id: 8, name: 'HR', headcount: 8, budget: 1400000, manager: 'Jennifer Walsh', openRoles: 0 },
  ])
})

// Recruitment
router.get('/recruitment/jobs', (_req: Request, res: Response) => {
  res.json([
    { id: 1, title: 'Senior Frontend Engineer', department: 'Engineering', location: 'SF/Remote', type: 'Full-time', salary: '150K-200K', applicants: 47, status: 'active', posted: '2024-06-20' },
    { id: 2, title: 'ML Engineer', department: 'AI/ML', location: 'Remote', type: 'Full-time', salary: '160K-220K', applicants: 63, status: 'active', posted: '2024-06-18' },
    { id: 3, title: 'Product Designer', department: 'Product', location: 'NY/Remote', type: 'Full-time', salary: '120K-160K', applicants: 34, status: 'active', posted: '2024-06-22' },
    { id: 4, title: 'Account Executive', department: 'Sales', location: 'San Francisco', type: 'Full-time', salary: '90K-130K + Comm', applicants: 28, status: 'active', posted: '2024-06-15' },
    { id: 5, title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time', salary: '140K-180K', applicants: 39, status: 'active', posted: '2024-06-12' },
  ])
})

router.post('/recruitment/jobs', (req: Request, res: Response) => {
  res.json({ id: Date.now(), ...req.body, applicants: 0, status: 'active', posted: new Date().toISOString() })
})

// Payroll
router.get('/payroll', (req: Request, res: Response) => {
  const { period = 'june-2024' } = req.query
  res.json({
    summary: { totalPayroll: 2847000, avgSalary: 142350, totalBenefits: 568000, taxWithholding: 712000, nextPayDate: '2024-07-01' },
    employees: Array.from({ length: 20 }, (_, i) => ({
      id: `emp_${1000 + i}`,
      name: ['Alex Rivera', 'Sarah Chen', 'Mike Johnson', 'Emily Park', 'Lisa Martinez'][i % 5],
      department: ['Engineering', 'Product', 'Security', 'AI/ML', 'Engineering'][i % 5],
      baseSalary: 12000 + (i * 500),
      bonus: Math.floor(Math.random() * 3000),
      deductions: 3000 + (i * 200),
      netPay: 9000 + (i * 300),
      status: i % 7 === 0 ? 'pending' : 'processed'
    })),
    period
  })
})

router.post('/payroll/run', (_req: Request, res: Response) => {
  res.json({ success: true, message: 'Payroll processed for 247 employees', totalDisbursed: 2847000 })
})

// Leave Management
router.get('/leave', (_req: Request, res: Response) => {
  res.json({
    pending: [
      { id: 1, employee: 'Emily Chen', type: 'Annual Leave', dates: 'Jul 15-19', days: 5, status: 'pending' },
      { id: 2, employee: 'Lisa Martinez', type: 'Personal', dates: 'Jul 8', days: 1, status: 'pending' },
      { id: 3, employee: 'David Kim', type: 'Annual Leave', dates: 'Jul 22-26', days: 5, status: 'pending' },
    ],
    approved: [
      { id: 4, employee: 'Mike Johnson', type: 'Sick Leave', dates: 'Jul 1', days: 1, status: 'approved' },
    ],
    stats: { totalLeavesTaken: 342, avgLeavesPerEmployee: 8.2, pendingRequests: 3 }
  })
})

router.put('/leave/:id/approve', (req: Request, res: Response) => {
  res.json({ id: req.params.id, status: 'approved', approvedBy: 'admin', approvedAt: new Date().toISOString() })
})

router.put('/leave/:id/reject', (req: Request, res: Response) => {
  res.json({ id: req.params.id, status: 'rejected', rejectedBy: 'admin', reason: req.body.reason })
})

// Performance Reviews
router.get('/performance', (_req: Request, res: Response) => {
  res.json({
    upcoming: [
      { id: 1, employee: 'Alex Rivera', type: 'Quarterly', dueDate: '2024-07-05' },
      { id: 2, employee: 'Sarah Chen', type: 'Annual', dueDate: '2024-07-08' },
      { id: 3, employee: 'Tom Anderson', type: 'Quarterly', dueDate: '2024-07-10' },
    ],
    stats: { avgScore: 4.2, goalsMet: 87, reviewsCompleted: 234, reviewsPending: 12 },
    distribution: { excellent: 45, good: 120, average: 65, needsImprovement: 12, poor: 5 }
  })
})

// Attendance
router.get('/attendance', (req: Request, res: Response) => {
  const { date } = req.query
  res.json({
    today: { present: 232, absent: 5, late: 3, onLeave: 7, total: 247 },
    weeklyAvg: 96.4,
    monthlyTrend: [95.2, 96.1, 97.0, 96.8, 95.5, 96.4, 97.2]
  })
})

export default router
