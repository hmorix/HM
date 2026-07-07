import { Router, Request, Response } from 'express'

const router = Router()

// Employee Profile
router.get('/profile', (_req: Request, res: Response) => {
  res.json({
    id: 'emp_0042',
    name: 'John Doe',
    email: 'john.doe@hmorix.com',
    role: 'Senior Software Engineer',
    department: 'Engineering',
    team: 'Platform',
    manager: 'Alex Rivera',
    location: 'San Francisco, CA',
    joined: '2023-01-15',
    employeeId: 'HM-0042',
    phone: '+1-555-0142',
    emergencyContact: { name: 'Jane Doe', phone: '+1-555-0143', relation: 'Spouse' }
  })
})

// Time & Attendance
router.get('/time', (req: Request, res: Response) => {
  const { period = 'week' } = req.query
  res.json({
    today: { clockIn: '08:32', clockOut: null, totalHours: null, status: 'active' },
    week: {
      days: [
        { date: '2024-06-24', clockIn: '08:45', clockOut: '18:15', hours: 8.5 },
        { date: '2024-06-25', clockIn: '08:30', clockOut: '17:30', hours: 8 },
        { date: '2024-06-26', clockIn: '09:00', clockOut: '17:00', hours: 7.5 },
        { date: '2024-06-27', clockIn: '08:15', clockOut: '17:45', hours: 8.5 },
        { date: '2024-06-28', clockIn: '08:32', clockOut: null, hours: null },
      ],
      totalHours: 32.5,
      targetHours: 40,
      overtime: 0
    },
    month: { totalHours: 142.5, targetHours: 176, overtime: 4.5, absences: 1 }
  })
})

router.post('/clock-in', (_req: Request, res: Response) => {
  res.json({ success: true, clockIn: new Date().toISOString(), message: 'Clocked in successfully' })
})

router.post('/clock-out', (_req: Request, res: Response) => {
  res.json({ success: true, clockOut: new Date().toISOString(), totalHours: 8.5, message: 'Clocked out successfully' })
})

// Leave Management
router.get('/leave', (_req: Request, res: Response) => {
  res.json({
    balance: [
      { type: 'Annual Leave', used: 8, total: 20, pending: 2 },
      { type: 'Sick Leave', used: 2, total: 10, pending: 0 },
      { type: 'Personal', used: 1, total: 3, pending: 0 },
      { type: 'Parental', used: 0, total: 12, pending: 0 },
    ],
    requests: [
      { id: 1, type: 'Annual Leave', startDate: '2024-07-15', endDate: '2024-07-19', days: 5, status: 'approved', approver: 'Alex Rivera' },
      { id: 2, type: 'Personal', startDate: '2024-07-22', endDate: '2024-07-22', days: 1, status: 'pending', approver: 'Alex Rivera' },
    ],
    holidays: [
      { date: '2024-07-04', name: 'Independence Day' },
      { date: '2024-09-02', name: 'Labor Day' },
      { date: '2024-11-28', name: 'Thanksgiving' },
    ]
  })
})

router.post('/leave/request', (req: Request, res: Response) => {
  const { type, startDate, endDate, reason } = req.body
  res.json({ success: true, id: Date.now(), status: 'pending', message: 'Leave request submitted for approval' })
})

// Payroll
router.get('/payroll', (_req: Request, res: Response) => {
  res.json({
    current: { baseSalary: 8500, bonus: 0, deductions: 2125, netPay: 6375, nextPayday: '2024-07-01' },
    ytd: { gross: 56420, taxes: 13540, benefits: 4200, net: 38680 },
    payslips: Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      month: ['June', 'May', 'April', 'March', 'February', 'January'][i],
      year: 2024,
      gross: 8500,
      net: 6375,
      date: `2024-0${6 - i}-01`,
      downloadUrl: `/api/employee/payroll/payslip/${i + 1}`
    })),
    taxBracket: '24%',
    benefits: { health: 450, dental: 75, vision: 25, retirement401k: 680, lifeInsurance: 45 }
  })
})

// Performance
router.get('/performance', (_req: Request, res: Response) => {
  res.json({
    overallScore: 4.6,
    skills: [
      { name: 'Technical Skills', score: 4.8 },
      { name: 'Communication', score: 4.5 },
      { name: 'Leadership', score: 4.3 },
      { name: 'Innovation', score: 4.7 },
      { name: 'Teamwork', score: 4.6 },
    ],
    okrs: [
      { objective: 'Improve API response time by 40%', progress: 72, status: 'on_track', dueDate: '2024-09-30' },
      { objective: 'Ship 3 major features for BillingFlow v3', progress: 66, status: 'on_track', dueDate: '2024-09-30' },
      { objective: 'Mentor 2 junior engineers', progress: 50, status: 'at_risk', dueDate: '2024-09-30' },
    ],
    reviews: [
      { period: 'H1 2024', score: 4.6, reviewer: 'Alex Rivera', date: '2024-06-15' },
      { period: 'H2 2023', score: 4.3, reviewer: 'Alex Rivera', date: '2023-12-15' },
    ]
  })
})

// Tasks
router.get('/tasks', (_req: Request, res: Response) => {
  res.json([
    { id: 1, title: 'Complete Q2 self-assessment', due: '2024-07-10', priority: 'high', status: 'pending', category: 'HR' },
    { id: 2, title: 'Submit expense report', due: '2024-07-05', priority: 'medium', status: 'pending', category: 'Finance' },
    { id: 3, title: 'Review team OKRs', due: '2024-07-08', priority: 'medium', status: 'in_progress', category: 'Management' },
    { id: 4, title: 'Complete security training', due: '2024-07-15', priority: 'low', status: 'pending', category: 'Training' },
    { id: 5, title: 'Code review: BillingFlow v3 PR #847', due: '2024-07-02', priority: 'high', status: 'in_progress', category: 'Engineering' },
    { id: 6, title: 'Update API documentation', due: '2024-07-12', priority: 'medium', status: 'pending', category: 'Engineering' },
  ])
})

router.put('/tasks/:id', (req: Request, res: Response) => {
  res.json({ id: req.params.id, ...req.body, updated: new Date().toISOString() })
})

// Employee Directory
router.get('/directory', (req: Request, res: Response) => {
  const { department, search } = req.query
  const employees = [
    { id: 'emp_001', name: 'Hamza Morix', role: 'CEO & Founder', department: 'Executive', location: 'San Francisco', status: 'active' },
    { id: 'emp_002', name: 'Sarah Chen', role: 'VP of Product', department: 'Product', location: 'New York', status: 'active' },
    { id: 'emp_003', name: 'Alex Rivera', role: 'Staff Engineer', department: 'Engineering', location: 'San Francisco', status: 'active' },
    { id: 'emp_004', name: 'Mike Johnson', role: 'Head of Security', department: 'Security', location: 'Austin', status: 'active' },
    { id: 'emp_005', name: 'Dr. Emily Park', role: 'ML Lead', department: 'AI/ML', location: 'Seattle', status: 'active' },
    { id: 'emp_006', name: 'Lisa Martinez', role: 'Frontend Lead', department: 'Engineering', location: 'Remote', status: 'active' },
    { id: 'emp_007', name: 'David Kim', role: 'Growth Lead', department: 'Marketing', location: 'San Francisco', status: 'active' },
    { id: 'emp_008', name: 'James Wu', role: 'IoT Security Lead', department: 'Security', location: 'San Francisco', status: 'active' },
    { id: 'emp_009', name: 'Anna Petrov', role: 'DevOps Lead', department: 'Engineering', location: 'Remote', status: 'in_meeting' },
    { id: 'emp_010', name: 'Tom Anderson', role: 'Ad Tech Lead', department: 'Marketing', location: 'New York', status: 'away' },
  ]

  let filtered = [...employees]
  if (department) filtered = filtered.filter(e => e.department === department)
  if (search) filtered = filtered.filter(e => e.name.toLowerCase().includes((search as string).toLowerCase()))

  res.json({ employees: filtered, departments: ['Executive', 'Engineering', 'Product', 'AI/ML', 'Security', 'Marketing', 'Sales', 'HR'] })
})

// Requests (leave, expense, IT, equipment)
router.get('/requests', (_req: Request, res: Response) => {
  res.json([
    { id: 1, type: 'leave', title: 'Annual Leave - Jul 15-19', status: 'approved', date: '2024-06-20' },
    { id: 2, type: 'expense', title: 'Conference Travel - $1,200', status: 'pending', date: '2024-06-25' },
    { id: 3, type: 'it', title: 'New Monitor Request', status: 'in_progress', date: '2024-06-22' },
    { id: 4, type: 'equipment', title: 'Standing Desk', status: 'approved', date: '2024-06-18' },
  ])
})

router.post('/requests', (req: Request, res: Response) => {
  const { type, title, description, amount } = req.body
  res.json({ success: true, id: Date.now(), type, title, status: 'pending', message: 'Request submitted successfully' })
})

export default router
