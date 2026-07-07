import { Router, Request, Response } from 'express'

const router = Router()

// Sign Up
router.post('/signup', (req: Request, res: Response) => {
  const { name, email, password, company } = req.body
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' })
  }
  // In production: hash password, save to D1 database, send verification email
  res.json({
    success: true,
    user: { id: `usr_${Date.now()}`, name, email, company, role: 'user', plan: 'free' },
    message: 'Account created. Please check your email for verification.',
    token: `tok_${Date.now()}_demo`
  })
})

// Sign In
router.post('/signin', (req: Request, res: Response) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }
  // In production: verify credentials against D1 database
  res.json({
    success: true,
    user: { id: 'usr_1001', name: 'Demo User', email, role: 'user', plan: 'business' },
    token: `tok_${Date.now()}_demo`,
    expiresIn: 3600
  })
})

// Forgot Password
router.post('/forgot-password', (req: Request, res: Response) => {
  const { email } = req.body
  if (!email) return res.status(400).json({ error: 'Email is required' })
  // In production: generate reset token, send email
  res.json({ success: true, message: 'If an account exists with this email, a reset link has been sent.' })
})

// Reset Password
router.post('/reset-password', (req: Request, res: Response) => {
  const { token, newPassword } = req.body
  if (!token || !newPassword) return res.status(400).json({ error: 'Token and new password are required' })
  res.json({ success: true, message: 'Password has been reset successfully.' })
})

// Verify Email
router.post('/verify', (req: Request, res: Response) => {
  const { code } = req.body
  if (!code) return res.status(400).json({ error: 'Verification code is required' })
  res.json({ success: true, message: 'Email verified successfully.', verified: true })
})

// Search Account
router.post('/search-account', (req: Request, res: Response) => {
  const { query } = req.body // email or phone
  if (!query) return res.status(400).json({ error: 'Email or phone number is required' })
  res.json({
    found: true,
    account: { email: query.includes('@') ? query : `***@***.com`, method: query.includes('@') ? 'email' : 'sms' }
  })
})

// Refresh Token
router.post('/refresh', (req: Request, res: Response) => {
  const { refreshToken } = req.body
  res.json({ token: `tok_${Date.now()}_refreshed`, expiresIn: 3600 })
})

// Logout
router.post('/logout', (_req: Request, res: Response) => {
  res.json({ success: true, message: 'Logged out successfully' })
})

// Get current user
router.get('/me', (_req: Request, res: Response) => {
  res.json({
    id: 'usr_1001',
    name: 'Demo User',
    email: 'demo@hmorix.com',
    company: 'HMorix',
    role: 'admin',
    plan: 'enterprise',
    avatar: null,
    created: '2024-01-15T00:00:00Z',
    lastLogin: new Date().toISOString()
  })
})

export default router
