import express from 'express'
import cors from 'cors'
import Database from 'better-sqlite3'
import path from 'path'
import servicesRouter from './routes/services'
import blogRouter from './routes/blog'
import adminRouter from './routes/admin'
import authRouter from './routes/auth'
import employeeRouter from './routes/employee'
import crmRouter from './routes/crm'
import hrmRouter from './routes/hrm'
import analyticsRouter from './routes/analytics'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Database setup (SQLite - compatible with Cloudflare D1 schema)
const dbPath = path.join(__dirname, '..', 'data', 'hmorix.db')
const db = new Database(dbPath)

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT DEFAULT 'user',
    company TEXT,
    phone TEXT,
    avatar_url TEXT,
    two_factor_enabled INTEGER DEFAULT 0,
    plan TEXT DEFAULT 'free',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    client_name TEXT NOT NULL,
    status TEXT DEFAULT 'in_progress',
    progress INTEGER DEFAULT 0,
    description TEXT,
    deadline TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS support_tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    subject TEXT NOT NULL,
    description TEXT,
    priority TEXT DEFAULT 'medium',
    status TEXT DEFAULT 'open',
    product TEXT,
    assigned_to TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS invoices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    invoice_number TEXT UNIQUE NOT NULL,
    client_name TEXT NOT NULL,
    amount REAL NOT NULL,
    currency TEXT DEFAULT 'USD',
    status TEXT DEFAULT 'pending',
    due_date TEXT,
    items TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS ai_jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    job_id TEXT UNIQUE NOT NULL,
    task_type TEXT NOT NULL,
    client_name TEXT,
    status TEXT DEFAULT 'queued',
    result TEXT,
    tokens_used INTEGER DEFAULT 0,
    duration_ms INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    completed_at DATETIME
  );

  CREATE TABLE IF NOT EXISTS pdf_jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    job_id TEXT UNIQUE NOT NULL,
    filename TEXT NOT NULL,
    total_docs INTEGER DEFAULT 1,
    processed_docs INTEGER DEFAULT 0,
    status TEXT DEFAULT 'processing',
    confidence REAL DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    completed_at DATETIME
  );

  CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    service TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS notifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT DEFAULT 'info',
    read INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS activity_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    action TEXT NOT NULL,
    description TEXT,
    type TEXT DEFAULT 'general',
    metadata TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS api_keys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    name TEXT NOT NULL,
    key_prefix TEXT NOT NULL,
    key_hash TEXT NOT NULL,
    last_used DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    device TEXT NOT NULL,
    ip_address TEXT,
    location TEXT,
    is_current INTEGER DEFAULT 0,
    last_active DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS user_settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER UNIQUE,
    theme TEXT DEFAULT 'dark',
    accent_color TEXT DEFAULT '#C8FF00',
    language TEXT DEFAULT 'en-US',
    timezone TEXT DEFAULT 'America/Los_Angeles',
    date_format TEXT DEFAULT 'MM/DD/YYYY',
    currency TEXT DEFAULT 'USD',
    email_notifications INTEGER DEFAULT 1,
    push_notifications INTEGER DEFAULT 1,
    security_alerts INTEGER DEFAULT 1,
    product_updates INTEGER DEFAULT 0,
    weekly_digest INTEGER DEFAULT 1,
    sidebar_expanded INTEGER DEFAULT 1,
    font_size INTEGER DEFAULT 14,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS integrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    name TEXT NOT NULL,
    provider TEXT NOT NULL,
    connected INTEGER DEFAULT 0,
    config TEXT,
    connected_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`)

// Seed demo data
const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get() as any
if (userCount.count === 0) {
  db.prepare(`INSERT INTO users (email, name, password_hash, role, company, phone, two_factor_enabled, plan) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run('admin@hmorix.com', 'John Doe', 'hashed_password', 'admin', 'HMorix Technologies', '+1 (555) 123-4567', 1, 'enterprise')
  
  db.prepare(`INSERT INTO projects (name, client_name, status, progress, deadline) VALUES (?, ?, ?, ?, ?)`).run('CRM Platform Rebuild', 'Meridian Corp', 'in_progress', 87, '2024-08-15')
  db.prepare(`INSERT INTO projects (name, client_name, status, progress, deadline) VALUES (?, ?, ?, ?, ?)`).run('Security Audit & Compliance', 'NovaTech', 'in_progress', 64, '2024-09-01')
  db.prepare(`INSERT INTO projects (name, client_name, status, progress, deadline) VALUES (?, ?, ?, ?, ?)`).run('PDF Migration System', 'Apex Corp', 'complete', 100, '2024-07-01')

  db.prepare(`INSERT INTO invoices (invoice_number, client_name, amount, status, due_date) VALUES (?, ?, ?, ?, ?)`).run('INV-2841', 'Meridian Corp', 4200, 'paid', '2024-07-15')
  db.prepare(`INSERT INTO invoices (invoice_number, client_name, amount, status, due_date) VALUES (?, ?, ?, ?, ?)`).run('INV-2842', 'NovaTech', 8750, 'pending', '2024-07-20')
  db.prepare(`INSERT INTO invoices (invoice_number, client_name, amount, status, due_date) VALUES (?, ?, ?, ?, ?)`).run('INV-2843', 'Apex Corp', 2100, 'paid', '2024-07-10')

  db.prepare(`INSERT INTO ai_jobs (job_id, task_type, client_name, status, tokens_used, duration_ms) VALUES (?, ?, ?, ?, ?, ?)`).run('AGT-4821', 'Website Generation', 'Meridian', 'complete', 4821, 12400)
  db.prepare(`INSERT INTO ai_jobs (job_id, task_type, client_name, status, tokens_used, duration_ms) VALUES (?, ?, ?, ?, ?, ?)`).run('AGT-4822', 'Workflow Automation', 'NovaTech', 'running', 2100, 0)
  db.prepare(`INSERT INTO ai_jobs (job_id, task_type, client_name, status, tokens_used, duration_ms) VALUES (?, ?, ?, ?, ?, ?)`).run('AGT-4823', 'Document Summarization', 'Apex Corp', 'complete', 1247, 3421)

  db.prepare(`INSERT INTO pdf_jobs (job_id, filename, total_docs, processed_docs, status, confidence) VALUES (?, ?, ?, ?, ?, ?)`).run('PDF-9912', 'contracts_batch_Q3.csv', 2840, 2840, 'complete', 0.987)
  db.prepare(`INSERT INTO pdf_jobs (job_id, filename, total_docs, processed_docs, status, confidence) VALUES (?, ?, ?, ?, ?, ?)`).run('PDF-9913', 'invoices_june.zip', 1420, 1089, 'processing', 0.992)

  db.prepare(`INSERT INTO support_tickets (subject, description, priority, status, product, assigned_to) VALUES (?, ?, ?, ?, ?, ?)`).run('BillingFlow webhook not firing', 'Webhooks configured for invoice.paid event are not being delivered', 'high', 'in_progress', 'BillingFlow', 'Mike Johnson')
  db.prepare(`INSERT INTO support_tickets (subject, description, priority, status, product, assigned_to) VALUES (?, ?, ?, ?, ?, ?)`).run('PDF extraction accuracy issue', 'Tables in scanned documents have lower accuracy', 'medium', 'open', 'PDF Automation', 'Emily Park')

  db.prepare(`INSERT INTO notifications (user_id, title, message, type) VALUES (?, ?, ?, ?)`).run(1, 'Deployment successful', 'BillingFlow v2.4.1 deployed to production', 'deploy')
  db.prepare(`INSERT INTO notifications (user_id, title, message, type) VALUES (?, ?, ?, ?)`).run(1, 'New ticket assigned', 'TKT-4522 requires your attention', 'ticket')
  db.prepare(`INSERT INTO notifications (user_id, title, message, type) VALUES (?, ?, ?, ?)`).run(1, 'Security scan complete', 'No vulnerabilities found in latest scan', 'security')

  db.prepare(`INSERT INTO activity_log (user_id, action, description, type) VALUES (?, ?, ?, ?)`).run(1, 'Deployed BillingFlow v2.4', 'Production deployment to all regions', 'deploy')
  db.prepare(`INSERT INTO activity_log (user_id, action, description, type) VALUES (?, ?, ?, ?)`).run(1, 'Updated security settings', 'Enabled IP allowlisting', 'security')
  db.prepare(`INSERT INTO activity_log (user_id, action, description, type) VALUES (?, ?, ?, ?)`).run(1, 'Created new API key', 'Production key for CI/CD pipeline', 'api')
  db.prepare(`INSERT INTO activity_log (user_id, action, description, type) VALUES (?, ?, ?, ?)`).run(1, 'Invited team member', 'sarah@hmorix.com added to Engineering', 'team')
  db.prepare(`INSERT INTO activity_log (user_id, action, description, type) VALUES (?, ?, ?, ?)`).run(1, 'Resolved ticket TKT-4521', 'BillingFlow webhook issue fixed', 'ticket')

  db.prepare(`INSERT INTO api_keys (user_id, name, key_prefix, key_hash) VALUES (?, ?, ?, ?)`).run(1, 'Production Key', 'hm_live_sk_...4f2a', 'hash1')
  db.prepare(`INSERT INTO api_keys (user_id, name, key_prefix, key_hash) VALUES (?, ?, ?, ?)`).run(1, 'Development Key', 'hm_test_sk_...8b1c', 'hash2')
  db.prepare(`INSERT INTO api_keys (user_id, name, key_prefix, key_hash) VALUES (?, ?, ?, ?)`).run(1, 'CI/CD Pipeline', 'hm_live_sk_...9d3e', 'hash3')

  db.prepare(`INSERT INTO sessions (user_id, device, ip_address, location, is_current) VALUES (?, ?, ?, ?, ?)`).run(1, 'MacBook Pro - Chrome', '192.168.1.1', 'San Francisco, CA', 1)
  db.prepare(`INSERT INTO sessions (user_id, device, ip_address, location, is_current) VALUES (?, ?, ?, ?, ?)`).run(1, 'iPhone 15 - Safari', '192.168.1.2', 'San Francisco, CA', 0)
  db.prepare(`INSERT INTO sessions (user_id, device, ip_address, location, is_current) VALUES (?, ?, ?, ?, ?)`).run(1, 'Windows PC - Firefox', '10.0.0.5', 'New York, NY', 0)

  db.prepare(`INSERT INTO user_settings (user_id) VALUES (?)`).run(1)

  db.prepare(`INSERT INTO integrations (user_id, name, provider, connected) VALUES (?, ?, ?, ?)`).run(1, 'Slack', 'slack', 1)
  db.prepare(`INSERT INTO integrations (user_id, name, provider, connected) VALUES (?, ?, ?, ?)`).run(1, 'GitHub', 'github', 1)
  db.prepare(`INSERT INTO integrations (user_id, name, provider, connected) VALUES (?, ?, ?, ?)`).run(1, 'Stripe', 'stripe', 1)
  db.prepare(`INSERT INTO integrations (user_id, name, provider, connected) VALUES (?, ?, ?, ?)`).run(1, 'AWS', 'aws', 1)
  db.prepare(`INSERT INTO integrations (user_id, name, provider, connected) VALUES (?, ?, ?, ?)`).run(1, 'Jira', 'jira', 0)
  db.prepare(`INSERT INTO integrations (user_id, name, provider, connected) VALUES (?, ?, ?, ?)`).run(1, 'Google Workspace', 'google', 0)
}

// ============ API ROUTES ============

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), version: '2.0.0' })
})

// ============ AUTH ============
app.post('/api/auth/signin', (req, res) => {
  const { email, password } = req.body
  const user = db.prepare('SELECT id, email, name, role, company, plan FROM users WHERE email = ?').get(email) as any
  if (user) {
    res.json({ success: true, user, token: 'demo_jwt_token_' + user.id })
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' })
  }
})

app.post('/api/auth/signup', (req, res) => {
  const { email, name, password, company } = req.body
  try {
    const result = db.prepare('INSERT INTO users (email, name, password_hash, company) VALUES (?, ?, ?, ?)').run(email, name, 'hashed_' + password, company || '')
    res.json({ success: true, id: result.lastInsertRowid, message: 'Account created. Please verify your email.' })
  } catch (e: any) {
    res.status(400).json({ success: false, message: 'Email already registered' })
  }
})

app.post('/api/auth/forgot-password', (req, res) => {
  const { email } = req.body
  res.json({ success: true, message: 'Password reset link sent to ' + email })
})

app.post('/api/auth/verify', (req, res) => {
  const { code } = req.body
  res.json({ success: true, message: 'Account verified successfully' })
})

app.post('/api/auth/search-account', (req, res) => {
  const { query } = req.body
  const user = db.prepare('SELECT id, email, name FROM users WHERE email = ? OR phone = ?').get(query, query) as any
  if (user) {
    res.json({ success: true, found: true, user: { name: user.name, email: user.email.replace(/(.{2})(.*)(@.*)/, '$1***$3') } })
  } else {
    res.json({ success: true, found: false })
  }
})

// ============ PROFILE ============
app.get('/api/profile', (req, res) => {
  const user = db.prepare('SELECT id, email, name, role, company, phone, two_factor_enabled, plan, created_at FROM users WHERE id = 1').get() as any
  res.json({ success: true, data: user })
})

app.put('/api/profile', (req, res) => {
  const { name, email, phone, company } = req.body
  db.prepare('UPDATE users SET name = ?, email = ?, phone = ?, company = ?, updated_at = CURRENT_TIMESTAMP WHERE id = 1').run(name, email, phone, company)
  res.json({ success: true, message: 'Profile updated' })
})

app.put('/api/profile/password', (req, res) => {
  const { current_password, new_password } = req.body
  db.prepare('UPDATE users SET password_hash = ?, updated_at = CURRENT_TIMESTAMP WHERE id = 1').run('hashed_' + new_password)
  res.json({ success: true, message: 'Password updated' })
})

// ============ SETTINGS ============
app.get('/api/settings', (req, res) => {
  const settings = db.prepare('SELECT * FROM user_settings WHERE user_id = 1').get() as any
  res.json({ success: true, data: settings })
})

app.put('/api/settings', (req, res) => {
  const fields = req.body
  const keys = Object.keys(fields)
  const setClause = keys.map(k => `${k} = ?`).join(', ')
  const values = keys.map(k => fields[k])
  db.prepare(`UPDATE user_settings SET ${setClause} WHERE user_id = 1`).run(...values)
  res.json({ success: true, message: 'Settings updated' })
})

// ============ API KEYS ============
app.get('/api/keys', (req, res) => {
  const keys = db.prepare('SELECT id, name, key_prefix, last_used, created_at FROM api_keys WHERE user_id = 1').all()
  res.json({ success: true, data: keys })
})

app.post('/api/keys', (req, res) => {
  const { name } = req.body
  const prefix = 'hm_live_sk_...' + Math.random().toString(36).substring(2, 6)
  const result = db.prepare('INSERT INTO api_keys (user_id, name, key_prefix, key_hash) VALUES (?, ?, ?, ?)').run(1, name, prefix, 'hash_' + Date.now())
  res.json({ success: true, id: result.lastInsertRowid, key: 'hm_live_sk_' + Math.random().toString(36).substring(2, 34) })
})

app.delete('/api/keys/:id', (req, res) => {
  db.prepare('DELETE FROM api_keys WHERE id = ? AND user_id = 1').run(req.params.id)
  res.json({ success: true, message: 'API key revoked' })
})

// ============ SESSIONS ============
app.get('/api/sessions', (req, res) => {
  const sessions = db.prepare('SELECT * FROM sessions WHERE user_id = 1 ORDER BY last_active DESC').all()
  res.json({ success: true, data: sessions })
})

app.delete('/api/sessions/:id', (req, res) => {
  db.prepare('DELETE FROM sessions WHERE id = ? AND user_id = 1 AND is_current = 0').run(req.params.id)
  res.json({ success: true, message: 'Session revoked' })
})

// ============ INTEGRATIONS ============
app.get('/api/integrations', (req, res) => {
  const integrations = db.prepare('SELECT * FROM integrations WHERE user_id = 1').all()
  res.json({ success: true, data: integrations })
})

app.put('/api/integrations/:id/connect', (req, res) => {
  db.prepare('UPDATE integrations SET connected = 1, connected_at = CURRENT_TIMESTAMP WHERE id = ? AND user_id = 1').run(req.params.id)
  res.json({ success: true, message: 'Integration connected' })
})

app.put('/api/integrations/:id/disconnect', (req, res) => {
  db.prepare('UPDATE integrations SET connected = 0, connected_at = NULL WHERE id = ? AND user_id = 1').run(req.params.id)
  res.json({ success: true, message: 'Integration disconnected' })
})

// ============ ACTIVITY ============
app.get('/api/activity', (req, res) => {
  const activity = db.prepare('SELECT * FROM activity_log WHERE user_id = 1 ORDER BY created_at DESC LIMIT 50').all()
  res.json({ success: true, data: activity })
})

// ============ PROJECTS ============
app.get('/api/projects', (req, res) => {
  const projects = db.prepare('SELECT * FROM projects ORDER BY created_at DESC').all()
  res.json({ success: true, data: projects })
})

app.post('/api/projects', (req, res) => {
  const { name, client_name, description, deadline } = req.body
  const result = db.prepare('INSERT INTO projects (name, client_name, description, deadline) VALUES (?, ?, ?, ?)').run(name, client_name, description, deadline)
  res.json({ success: true, id: result.lastInsertRowid })
})

// ============ INVOICES ============
app.get('/api/invoices', (req, res) => {
  const invoices = db.prepare('SELECT * FROM invoices ORDER BY created_at DESC').all()
  res.json({ success: true, data: invoices })
})

app.post('/api/invoices', (req, res) => {
  const { invoice_number, client_name, amount, currency, due_date, items } = req.body
  const result = db.prepare('INSERT INTO invoices (invoice_number, client_name, amount, currency, due_date, items) VALUES (?, ?, ?, ?, ?, ?)').run(invoice_number, client_name, amount, currency || 'USD', due_date, JSON.stringify(items || []))
  res.json({ success: true, id: result.lastInsertRowid })
})

// ============ SUPPORT TICKETS ============
app.get('/api/tickets', (req, res) => {
  const tickets = db.prepare('SELECT * FROM support_tickets ORDER BY created_at DESC').all()
  res.json({ success: true, data: tickets })
})

app.post('/api/tickets', (req, res) => {
  const { subject, description, priority, product } = req.body
  const result = db.prepare('INSERT INTO support_tickets (subject, description, priority, product) VALUES (?, ?, ?, ?)').run(subject, description, priority || 'medium', product)
  res.json({ success: true, id: result.lastInsertRowid })
})

app.put('/api/tickets/:id/status', (req, res) => {
  const { status } = req.body
  db.prepare('UPDATE support_tickets SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(status, req.params.id)
  res.json({ success: true, message: 'Ticket updated' })
})

// ============ AI JOBS ============
app.get('/api/ai-jobs', (req, res) => {
  const jobs = db.prepare('SELECT * FROM ai_jobs ORDER BY created_at DESC').all()
  res.json({ success: true, data: jobs })
})

app.post('/api/ai-jobs', (req, res) => {
  const { task_type, client_name } = req.body
  const jobId = 'AGT-' + Math.floor(Math.random() * 10000)
  const result = db.prepare('INSERT INTO ai_jobs (job_id, task_type, client_name, status) VALUES (?, ?, ?, ?)').run(jobId, task_type, client_name, 'queued')
  res.json({ success: true, id: result.lastInsertRowid, job_id: jobId })
})

// ============ PDF JOBS ============
app.get('/api/pdf-jobs', (req, res) => {
  const jobs = db.prepare('SELECT * FROM pdf_jobs ORDER BY created_at DESC').all()
  res.json({ success: true, data: jobs })
})

app.post('/api/pdf-jobs', (req, res) => {
  const { filename, total_docs } = req.body
  const jobId = 'PDF-' + Math.floor(Math.random() * 10000)
  const result = db.prepare('INSERT INTO pdf_jobs (job_id, filename, total_docs, status) VALUES (?, ?, ?, ?)').run(jobId, filename, total_docs || 1, 'processing')
  res.json({ success: true, id: result.lastInsertRowid, job_id: jobId })
})

// ============ CONTACT ============
app.post('/api/contact', (req, res) => {
  const { first_name, last_name, email, service, message } = req.body
  const result = db.prepare('INSERT INTO contact_submissions (first_name, last_name, email, service, message) VALUES (?, ?, ?, ?, ?)').run(first_name, last_name, email, service, message)
  res.json({ success: true, id: result.lastInsertRowid })
})

// ============ NOTIFICATIONS ============
app.get('/api/notifications', (req, res) => {
  const notifications = db.prepare('SELECT * FROM notifications WHERE user_id = 1 ORDER BY created_at DESC LIMIT 20').all()
  res.json({ success: true, data: notifications })
})

app.put('/api/notifications/read-all', (req, res) => {
  db.prepare('UPDATE notifications SET read = 1 WHERE user_id = 1').run()
  res.json({ success: true, message: 'All notifications marked as read' })
})

app.put('/api/notifications/:id/read', (req, res) => {
  db.prepare('UPDATE notifications SET read = 1 WHERE id = ? AND user_id = 1').run(req.params.id)
  res.json({ success: true })
})

// ============ DASHBOARD STATS ============
app.get('/api/dashboard/stats', (req, res) => {
  const projectCount = (db.prepare('SELECT COUNT(*) as count FROM projects').get() as any).count
  const invoiceTotal = (db.prepare('SELECT COALESCE(SUM(amount), 0) as total FROM invoices WHERE status = ?').get('paid') as any).total
  const aiJobCount = (db.prepare('SELECT COUNT(*) as count FROM ai_jobs').get() as any).count
  const pdfJobCount = (db.prepare('SELECT COUNT(*) as count FROM pdf_jobs').get() as any).count
  const ticketCount = (db.prepare('SELECT COUNT(*) as count FROM support_tickets WHERE status != ?').get('resolved') as any).count

  res.json({
    success: true,
    data: {
      revenue: invoiceTotal,
      revenue_change: '+12.4%',
      active_projects: projectCount,
      ai_jobs_completed: aiJobCount,
      pdf_jobs_total: pdfJobCount,
      open_tickets: ticketCount,
      security_score: 98.7,
      uptime: 99.98,
      api_calls_30d: 48291,
      storage_used_gb: 2.4,
      team_members: 8,
    }
  })
})

// ============ SYSTEM STATUS ============
app.get('/api/status', (req, res) => {
  res.json({
    success: true,
    data: {
      overall: 'operational',
      last_incident: '2024-06-15T10:30:00Z',
      services: [
        { name: 'HMorix Cloud Platform', status: 'operational', uptime: 99.99, latency_ms: 12 },
        { name: 'BillingFlow API', status: 'operational', uptime: 99.98, latency_ms: 45 },
        { name: 'AI Agent Service', status: 'operational', uptime: 99.95, latency_ms: 230 },
        { name: 'PDF Processing Engine', status: 'operational', uptime: 99.97, latency_ms: 180 },
        { name: 'Smart Home Gateway', status: 'operational', uptime: 99.96, latency_ms: 35 },
        { name: 'Authentication Service', status: 'operational', uptime: 99.99, latency_ms: 8 },
        { name: 'CDN & Static Assets', status: 'operational', uptime: 100, latency_ms: 3 },
        { name: 'Database Cluster', status: 'operational', uptime: 99.99, latency_ms: 5 },
        { name: 'Webhook Delivery', status: 'operational', uptime: 99.94, latency_ms: 120 },
        { name: 'Email Service', status: 'operational', uptime: 99.98, latency_ms: 250 },
      ]
    }
  })
})

// ============ SEARCH (Universal) ============
app.get('/api/search', (req, res) => {
  const q = (req.query.q as string || '').toLowerCase()
  const results: any[] = []

  // Search projects
  const projects = db.prepare("SELECT 'project' as type, name as title, client_name as subtitle FROM projects WHERE LOWER(name) LIKE ? OR LOWER(client_name) LIKE ?").all(`%${q}%`, `%${q}%`)
  results.push(...projects)

  // Search invoices
  const invoices = db.prepare("SELECT 'invoice' as type, invoice_number as title, client_name as subtitle FROM invoices WHERE LOWER(invoice_number) LIKE ? OR LOWER(client_name) LIKE ?").all(`%${q}%`, `%${q}%`)
  results.push(...invoices)

  // Search tickets
  const tickets = db.prepare("SELECT 'ticket' as type, subject as title, product as subtitle FROM support_tickets WHERE LOWER(subject) LIKE ? OR LOWER(product) LIKE ?").all(`%${q}%`, `%${q}%`)
  results.push(...tickets)

  res.json({ success: true, data: results, total: results.length })
})

// ============ ADMIN ROUTES ============

// Admin: Get all users with stats
app.get('/api/admin/users', (req, res) => {
  const users = db.prepare('SELECT id, email, name, role, company, plan, created_at FROM users ORDER BY created_at DESC').all()
  res.json({ success: true, data: users, total: users.length })
})

// Admin: Update user
app.put('/api/admin/users/:id', (req, res) => {
  const { name, email, role, plan } = req.body
  db.prepare('UPDATE users SET name = ?, email = ?, role = ?, plan = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(name, email, role, plan, req.params.id)
  res.json({ success: true, message: 'User updated' })
})

// Admin: Suspend user
app.put('/api/admin/users/:id/suspend', (req, res) => {
  db.prepare("UPDATE users SET role = 'suspended', updated_at = CURRENT_TIMESTAMP WHERE id = ?").run(req.params.id)
  res.json({ success: true, message: 'User suspended' })
})

// Admin: Delete user
app.delete('/api/admin/users/:id', (req, res) => {
  db.prepare('DELETE FROM users WHERE id = ?').run(req.params.id)
  res.json({ success: true, message: 'User deleted' })
})

// Admin: Platform stats
app.get('/api/admin/stats', (req, res) => {
  const totalUsers = (db.prepare('SELECT COUNT(*) as count FROM users').get() as any).count
  const totalRevenue = (db.prepare('SELECT COALESCE(SUM(amount), 0) as total FROM invoices').get() as any).total
  const totalApiCalls = 1247891 // Simulated
  const totalTickets = (db.prepare('SELECT COUNT(*) as count FROM support_tickets').get() as any).count
  const totalAiJobs = (db.prepare('SELECT COUNT(*) as count FROM ai_jobs').get() as any).count
  const totalPdfJobs = (db.prepare('SELECT COUNT(*) as count FROM pdf_jobs').get() as any).count

  res.json({
    success: true,
    data: {
      total_users: totalUsers,
      total_revenue: totalRevenue,
      mrr: 284000,
      api_calls_24h: totalApiCalls,
      total_tickets: totalTickets,
      total_ai_jobs: totalAiJobs,
      total_pdf_jobs: totalPdfJobs,
      uptime: 99.98,
      security_score: 98.7,
      server_regions: 4,
      database_nodes: 6,
      edge_locations: 42,
    }
  })
})

// Admin: System logs
app.get('/api/admin/logs', (req, res) => {
  const logs = [
    { time: '2024-06-28 14:32:01', level: 'INFO', service: 'api-gateway', msg: 'Request processed: GET /api/dashboard/stats 200 12ms' },
    { time: '2024-06-28 14:31:58', level: 'INFO', service: 'auth-service', msg: 'Token validated for user_id=1' },
    { time: '2024-06-28 14:31:45', level: 'WARN', service: 'webhook-service', msg: 'Delivery retry #2 for hook_id=wh_4821' },
    { time: '2024-06-28 14:31:30', level: 'INFO', service: 'ai-agent', msg: 'Job AGT-4822 step 3/5 completed' },
    { time: '2024-06-28 14:31:22', level: 'ERROR', service: 'pdf-engine', msg: 'OCR timeout for doc_9913_page_42' },
    { time: '2024-06-28 14:31:15', level: 'INFO', service: 'billing', msg: 'Invoice INV-2844 generated' },
    { time: '2024-06-28 14:30:55', level: 'WARN', service: 'rate-limiter', msg: 'Client exceeded 100 req/min' },
    { time: '2024-06-28 14:30:42', level: 'INFO', service: 'db-cluster', msg: 'Health check passed' },
  ]
  res.json({ success: true, data: logs })
})

// Admin: Security events
app.get('/api/admin/security-events', (req, res) => {
  const events = [
    { event: 'Brute force attempt blocked', ip: '103.42.18.91', time: '2 min ago', severity: 'critical', action: 'IP banned' },
    { event: 'SQL injection attempt', ip: '45.33.22.11', time: '15 min ago', severity: 'high', action: 'Request blocked' },
    { event: 'Rate limit exceeded', ip: '192.168.1.100', time: '30 min ago', severity: 'medium', action: 'Throttled' },
    { event: 'New admin login', ip: '10.0.0.1', time: '1h ago', severity: 'info', action: 'Logged' },
    { event: 'DDoS mitigation activated', ip: 'multiple', time: '6h ago', severity: 'critical', action: 'Mitigated' },
  ]
  res.json({ success: true, data: events })
})

// Admin: Content management
app.get('/api/admin/content', (req, res) => {
  const content = [
    { id: 1, title: 'Building AI Agents at Scale', type: 'blog', status: 'published', views: 4200, date: '2024-06-28' },
    { id: 2, title: 'Introducing BillingFlow v3', type: 'blog', status: 'published', views: 3800, date: '2024-06-25' },
    { id: 3, title: 'Zero-Trust Architecture Guide', type: 'blog', status: 'published', views: 2100, date: '2024-06-22' },
    { id: 4, title: 'Q3 Product Roadmap Preview', type: 'blog', status: 'draft', views: 0, date: '2024-06-30' },
    { id: 5, title: 'Meridian Corp Case Study', type: 'case_study', status: 'published', views: 1200, date: '2024-06-20' },
  ]
  res.json({ success: true, data: content })
})

// Admin: System settings
app.get('/api/admin/system-settings', (req, res) => {
  res.json({
    success: true,
    data: {
      platform_name: 'HMorix Cloud',
      domain: 'hmorix.com',
      support_email: 'support@hmorix.com',
      timezone: 'America/Los_Angeles',
      maintenance_mode: false,
      registration_enabled: true,
      smtp_host: 'smtp.sendgrid.net',
      smtp_port: 587,
      rate_limit: 1000,
      max_payload_mb: 10,
      cors_origins: '*.hmorix.com, localhost:*',
      enforce_2fa: true,
      session_timeout: 30,
      brute_force_protection: true,
      audit_logging: true,
    }
  })
})

app.put('/api/admin/system-settings', (req, res) => {
  // In production, would persist to database
  res.json({ success: true, message: 'System settings updated' })
})

// ============ EMPLOYEE ROUTES ============

// Employee: Get employee profile
app.get('/api/employee/profile', (req, res) => {
  res.json({
    success: true,
    data: {
      id: 'HM-0042',
      name: 'John Doe',
      email: 'john@hmorix.com',
      role: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      manager: 'Sarah Chen',
      joined: '2023-01-15',
      phone: '+1 (555) 123-4567',
    }
  })
})

// Employee: Time tracking
app.get('/api/employee/time', (req, res) => {
  res.json({
    success: true,
    data: {
      today: { clock_in: '08:32', clock_out: null, total_hours: null, status: 'active' },
      week: [
        { day: 'Mon', hours: 8.5, clock_in: '08:45', clock_out: '18:15' },
        { day: 'Tue', hours: 7.5, clock_in: '09:00', clock_out: '17:00' },
        { day: 'Wed', hours: 8.0, clock_in: '08:30', clock_out: '17:30' },
        { day: 'Thu', hours: 8.5, clock_in: '08:15', clock_out: '17:45' },
        { day: 'Fri', hours: 0, clock_in: '08:32', clock_out: null },
      ],
      month: { total_hours: 142.5, working_days: 18, overtime: 4.5, absences: 1 }
    }
  })
})

app.post('/api/employee/clock-in', (req, res) => {
  res.json({ success: true, message: 'Clocked in at ' + new Date().toLocaleTimeString() })
})

app.post('/api/employee/clock-out', (req, res) => {
  res.json({ success: true, message: 'Clocked out at ' + new Date().toLocaleTimeString() })
})

// Employee: Leave balance
app.get('/api/employee/leave', (req, res) => {
  res.json({
    success: true,
    data: {
      balances: [
        { type: 'Annual Leave', used: 8, total: 20 },
        { type: 'Sick Leave', used: 2, total: 10 },
        { type: 'Personal', used: 1, total: 3 },
      ],
      history: [
        { type: 'Annual Leave', start: '2024-07-15', end: '2024-07-19', status: 'approved', days: 5 },
        { type: 'Sick Leave', start: '2024-06-18', end: '2024-06-18', status: 'approved', days: 1 },
        { type: 'Annual Leave', start: '2024-04-01', end: '2024-04-03', status: 'approved', days: 3 },
      ]
    }
  })
})

app.post('/api/employee/leave', (req, res) => {
  const { type, start_date, end_date, reason } = req.body
  res.json({ success: true, message: 'Leave request submitted for approval' })
})

// Employee: Payroll
app.get('/api/employee/payroll', (req, res) => {
  res.json({
    success: true,
    data: {
      salary: { base: 8500, currency: 'USD', frequency: 'monthly' },
      ytd_earnings: 56420,
      next_payday: '2024-07-01',
      tax_bracket: '24%',
      payslips: [
        { month: 'June 2024', gross: 8500, net: 6460, deductions: 2040, date: '2024-06-30' },
        { month: 'May 2024', gross: 8500, net: 6460, deductions: 2040, date: '2024-05-31' },
        { month: 'April 2024', gross: 8500, net: 6460, deductions: 2040, date: '2024-04-30' },
        { month: 'March 2024', gross: 8500, net: 6460, deductions: 2040, date: '2024-03-31' },
        { month: 'February 2024', gross: 8500, net: 6460, deductions: 2040, date: '2024-02-29' },
      ]
    }
  })
})

// Employee: Performance
app.get('/api/employee/performance', (req, res) => {
  res.json({
    success: true,
    data: {
      overall_score: 4.6,
      skills: [
        { name: 'Technical Skills', score: 4.8 },
        { name: 'Communication', score: 4.5 },
        { name: 'Leadership', score: 4.3 },
        { name: 'Innovation', score: 4.7 },
        { name: 'Teamwork', score: 4.6 },
      ],
      okrs: [
        { objective: 'Improve API response time by 40%', progress: 72, status: 'on_track' },
        { objective: 'Ship 3 major features for BillingFlow v3', progress: 66, status: 'on_track' },
        { objective: 'Mentor 2 junior engineers', progress: 50, status: 'at_risk' },
      ]
    }
  })
})

// Employee: Requests
app.get('/api/employee/requests', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 'REQ-001', type: 'Leave', title: 'Annual Leave - Family Vacation', status: 'approved', date: 'Jul 15-19, 2024', submitted: '2024-06-25' },
      { id: 'REQ-002', type: 'Expense', title: 'Conference Travel - React Summit', status: 'pending', amount: 1240, submitted: '2024-06-27' },
      { id: 'REQ-003', type: 'IT Support', title: 'VPN access for remote office', status: 'in_progress', submitted: '2024-06-26' },
      { id: 'REQ-004', type: 'Equipment', title: 'New Monitor - 4K Display', status: 'approved', amount: 599, submitted: '2024-06-20' },
    ]
  })
})

app.post('/api/employee/requests', (req, res) => {
  const { type, title, description, priority } = req.body
  const id = 'REQ-' + String(Math.floor(Math.random() * 1000)).padStart(3, '0')
  res.json({ success: true, id, message: 'Request submitted successfully' })
})

// Employee: Tasks
app.get('/api/employee/tasks', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, title: 'Complete Q2 self-assessment', due: '2024-07-10', priority: 'high', status: 'todo', category: 'HR' },
      { id: 2, title: 'Submit expense report', due: '2024-07-05', priority: 'medium', status: 'todo', category: 'Finance' },
      { id: 3, title: 'Review team OKRs for Q3', due: '2024-07-08', priority: 'medium', status: 'in_progress', category: 'Management' },
      { id: 4, title: 'Complete security training', due: '2024-07-15', priority: 'low', status: 'todo', category: 'Training' },
      { id: 5, title: 'Code review: BillingFlow webhook handler', due: '2024-07-02', priority: 'high', status: 'in_progress', category: 'Engineering' },
    ]
  })
})

app.put('/api/employee/tasks/:id', (req, res) => {
  const { status } = req.body
  res.json({ success: true, message: 'Task updated' })
})

// Employee: Directory
app.get('/api/employee/directory', (req, res) => {
  res.json({
    success: true,
    data: [
      { name: 'Hamza Morix', role: 'CEO & Founder', dept: 'Engineering', location: 'San Francisco', email: 'hamza@hmorix.com', status: 'online' },
      { name: 'Sarah Chen', role: 'VP of Product', dept: 'Product', location: 'San Francisco', email: 'sarah@hmorix.com', status: 'online' },
      { name: 'Mike Johnson', role: 'Head of Security', dept: 'Engineering', location: 'New York', email: 'mike@hmorix.com', status: 'busy' },
      { name: 'Emily Park', role: 'Lead ML Engineer', dept: 'Engineering', location: 'Seattle', email: 'emily@hmorix.com', status: 'online' },
      { name: 'Alex Rivera', role: 'Senior DevOps', dept: 'Engineering', location: 'Austin', email: 'alex@hmorix.com', status: 'offline' },
      { name: 'Lisa Martinez', role: 'Frontend Lead', dept: 'Engineering', location: 'San Francisco', email: 'lisa@hmorix.com', status: 'online' },
      { name: 'David Kim', role: 'Product Manager', dept: 'Product', location: 'San Francisco', email: 'david@hmorix.com', status: 'online' },
      { name: 'James Wu', role: 'IoT Engineer', dept: 'Engineering', location: 'San Francisco', email: 'james@hmorix.com', status: 'busy' },
      { name: 'Rachel Green', role: 'UX Designer', dept: 'Design', location: 'New York', email: 'rachel@hmorix.com', status: 'online' },
      { name: 'Tom Wilson', role: 'Marketing Director', dept: 'Marketing', location: 'Los Angeles', email: 'tom@hmorix.com', status: 'offline' },
      { name: 'Nina Patel', role: 'Sales Manager', dept: 'Sales', location: 'Chicago', email: 'nina@hmorix.com', status: 'online' },
      { name: 'Chris Anderson', role: 'HR Manager', dept: 'HR', location: 'San Francisco', email: 'chris@hmorix.com', status: 'online' },
    ]
  })
})

// ============ BLOG ROUTES ============
app.get('/api/blog', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 'building-ai-agents-at-scale', title: 'Building AI Agents at Scale', category: 'Engineering', author: 'Hamza Morix', date: '2024-06-28', readTime: '12 min', featured: true },
      { id: 'introducing-billingflow-v3', title: 'Introducing BillingFlow v3', category: 'Product Updates', author: 'Sarah Chen', date: '2024-06-25', readTime: '8 min', featured: true },
      { id: 'zero-trust-architecture', title: 'Implementing Zero-Trust Architecture', category: 'Security', author: 'Mike Johnson', date: '2024-06-22', readTime: '15 min', featured: false },
      { id: 'pdf-extraction-ml-pipeline', title: 'ML Pipeline for PDF Extraction', category: 'AI & ML', author: 'Dr. Emily Park', date: '2024-06-20', readTime: '18 min', featured: false },
      { id: 'scaling-to-million-users', title: 'Scaling to 1 Million Users', category: 'Engineering', author: 'Alex Rivera', date: '2024-06-18', readTime: '14 min', featured: false },
      { id: 'smart-home-iot-security', title: 'IoT Security for Smart Homes', category: 'Security', author: 'James Wu', date: '2024-06-15', readTime: '10 min', featured: false },
      { id: 'react-performance-optimization', title: 'React Performance Optimization', category: 'Tutorials', author: 'Lisa Martinez', date: '2024-06-12', readTime: '11 min', featured: false },
      { id: 'series-b-announcement', title: 'HMorix Raises $42M Series B', category: 'Company', author: 'Hamza Morix', date: '2024-06-10', readTime: '5 min', featured: false },
      { id: 'workflow-automation-guide', title: 'Workflow Automation Guide', category: 'Tutorials', author: 'David Kim', date: '2024-06-08', readTime: '20 min', featured: false },
      { id: 'enterprise-case-meridian', title: 'Meridian Corp Case Study', category: 'Case Studies', author: 'Sarah Chen', date: '2024-06-05', readTime: '9 min', featured: false },
      { id: 'kubernetes-deployment-patterns', title: 'Kubernetes for AI Workloads', category: 'Engineering', author: 'Alex Rivera', date: '2024-06-03', readTime: '16 min', featured: false },
      { id: 'gdpr-compliance-automation', title: 'Automating GDPR Compliance', category: 'Security', author: 'Mike Johnson', date: '2024-06-01', readTime: '13 min', featured: false },
    ]
  })
})

app.get('/api/blog/:slug', (req, res) => {
  const { slug } = req.params
  // Return blog post content by slug
  res.json({
    success: true,
    data: {
      slug,
      title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      author: 'HMorix Team',
      date: '2024-06-28',
      readTime: '10 min',
      content: 'Full article content would be loaded from database or CMS.'
    }
  })
})

// Mount modular routes
app.use('/api/services', servicesRouter)
app.use('/api/blog', blogRouter)
app.use('/api/admin', adminRouter)
app.use('/api/auth', authRouter)
app.use('/api/employee', employeeRouter)
app.use('/api/crm', crmRouter)
app.use('/api/hrm', hrmRouter)
app.use('/api/analytics', analyticsRouter)

// SEO: robots.txt
app.get('/robots.txt', (_req, res) => {
  res.type('text/plain').send(`User-agent: *\nAllow: /\nSitemap: https://hmorix.com/sitemap.xml\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: Bingbot\nAllow: /`)
})

// SEO: sitemap.xml
app.get('/sitemap.xml', (_req, res) => {
  const pages = ['/', '/about', '/services', '/services/web-design', '/services/mobile-apps', '/services/digital-marketing', '/services/ai-solutions', '/services/software-development', '/services/advertising', '/services/ecommerce', '/pricing', '/contact', '/blog', '/billingflow', '/agent', '/pdf-automation', '/developers', '/security', '/status', '/trust', '/compliance', '/smart-home', '/careers', '/investors', '/partners', '/roadmap', '/faq', '/testimonials', '/case-studies', '/whitepapers', '/playground', '/architecture', '/dashboard', '/sitemap']
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p => `  <url><loc>https://hmorix.com${p}</loc><changefreq>${p === '/' ? 'daily' : 'weekly'}</changefreq><priority>${p === '/' ? '1.0' : '0.8'}</priority></url>`).join('\n')}\n</urlset>`
  res.type('application/xml').send(xml)
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 HMorix API Server running on port ${PORT}`)
})

export default app
