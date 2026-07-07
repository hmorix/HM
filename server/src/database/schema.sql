-- HMorix Platform Database Schema
-- Compatible with MySQL 8.0+ and MariaDB 10.5+
-- Run: mysql -u root -p hmorix < schema.sql

CREATE DATABASE IF NOT EXISTS hmorix CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hmorix;

-- ============================================
-- CORE TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS users (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  uuid VARCHAR(36) NOT NULL UNIQUE DEFAULT (UUID()),
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user', 'editor', 'developer', 'employee', 'hr', 'manager') DEFAULT 'user',
  company VARCHAR(255),
  phone VARCHAR(50),
  avatar_url TEXT,
  two_factor_enabled BOOLEAN DEFAULT FALSE,
  plan ENUM('free', 'starter', 'business', 'enterprise') DEFAULT 'free',
  email_verified BOOLEAN DEFAULT FALSE,
  last_login TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_role (role),
  INDEX idx_plan (plan)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS sessions (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  token VARCHAR(512) NOT NULL UNIQUE,
  ip_address VARCHAR(45),
  user_agent TEXT,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_token (token),
  INDEX idx_user_id (user_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS api_keys (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(255) NOT NULL,
  key_hash VARCHAR(255) NOT NULL UNIQUE,
  key_prefix VARCHAR(10) NOT NULL,
  permissions JSON,
  rate_limit INT DEFAULT 1000,
  last_used TIMESTAMP NULL,
  expires_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_key_prefix (key_prefix)
) ENGINE=InnoDB;

-- ============================================
-- CRM TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS crm_contacts (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(50),
  company VARCHAR(255),
  role VARCHAR(255),
  status ENUM('active', 'inactive', 'lead', 'customer', 'churned') DEFAULT 'lead',
  source VARCHAR(100),
  tags JSON,
  notes TEXT,
  last_contacted TIMESTAMP NULL,
  total_deal_value DECIMAL(15, 2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_email (email),
  INDEX idx_company (company),
  INDEX idx_status (status),
  FULLTEXT idx_search (name, email, company)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS crm_deals (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  contact_id BIGINT UNSIGNED,
  owner_id BIGINT UNSIGNED,
  name VARCHAR(255) NOT NULL,
  value DECIMAL(15, 2) NOT NULL DEFAULT 0,
  stage ENUM('lead', 'qualification', 'discovery', 'proposal', 'negotiation', 'closed_won', 'closed_lost') DEFAULT 'lead',
  probability INT DEFAULT 0,
  expected_close_date DATE,
  actual_close_date DATE,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (contact_id) REFERENCES crm_contacts(id) ON DELETE SET NULL,
  FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_stage (stage),
  INDEX idx_owner (owner_id),
  INDEX idx_close_date (expected_close_date)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS crm_activities (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  contact_id BIGINT UNSIGNED,
  deal_id BIGINT UNSIGNED,
  user_id BIGINT UNSIGNED,
  type ENUM('call', 'email', 'meeting', 'note', 'task') NOT NULL,
  subject VARCHAR(255),
  description TEXT,
  duration INT, -- minutes
  outcome VARCHAR(100),
  scheduled_at TIMESTAMP NULL,
  completed_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (contact_id) REFERENCES crm_contacts(id) ON DELETE CASCADE,
  FOREIGN KEY (deal_id) REFERENCES crm_deals(id) ON DELETE SET NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_contact (contact_id),
  INDEX idx_type (type),
  INDEX idx_created (created_at)
) ENGINE=InnoDB;

-- ============================================
-- HRM TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS hrm_employees (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED UNIQUE,
  employee_id VARCHAR(20) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(50),
  department_id BIGINT UNSIGNED,
  role VARCHAR(255) NOT NULL,
  manager_id BIGINT UNSIGNED,
  location VARCHAR(255),
  employment_type ENUM('full_time', 'part_time', 'contract', 'intern') DEFAULT 'full_time',
  status ENUM('active', 'on_leave', 'onboarding', 'terminated', 'resigned') DEFAULT 'onboarding',
  start_date DATE NOT NULL,
  end_date DATE,
  salary DECIMAL(12, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  emergency_contact_name VARCHAR(255),
  emergency_contact_phone VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (manager_id) REFERENCES hrm_employees(id) ON DELETE SET NULL,
  INDEX idx_department (department_id),
  INDEX idx_status (status),
  INDEX idx_employee_id (employee_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS hrm_departments (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  manager_id BIGINT UNSIGNED,
  budget DECIMAL(15, 2) DEFAULT 0,
  headcount INT DEFAULT 0,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (manager_id) REFERENCES hrm_employees(id) ON DELETE SET NULL
) ENGINE=InnoDB;

ALTER TABLE hrm_employees ADD FOREIGN KEY (department_id) REFERENCES hrm_departments(id) ON DELETE SET NULL;

CREATE TABLE IF NOT EXISTS hrm_attendance (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  employee_id BIGINT UNSIGNED NOT NULL,
  date DATE NOT NULL,
  clock_in TIMESTAMP NULL,
  clock_out TIMESTAMP NULL,
  total_hours DECIMAL(4, 2),
  status ENUM('present', 'absent', 'late', 'half_day', 'on_leave', 'holiday') DEFAULT 'present',
  notes TEXT,
  FOREIGN KEY (employee_id) REFERENCES hrm_employees(id) ON DELETE CASCADE,
  UNIQUE KEY uk_employee_date (employee_id, date),
  INDEX idx_date (date)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS hrm_leave_requests (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  employee_id BIGINT UNSIGNED NOT NULL,
  type ENUM('annual', 'sick', 'personal', 'parental', 'bereavement', 'unpaid') NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  days DECIMAL(3, 1) NOT NULL,
  reason TEXT,
  status ENUM('pending', 'approved', 'rejected', 'cancelled') DEFAULT 'pending',
  approved_by BIGINT UNSIGNED,
  approved_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (employee_id) REFERENCES hrm_employees(id) ON DELETE CASCADE,
  FOREIGN KEY (approved_by) REFERENCES hrm_employees(id) ON DELETE SET NULL,
  INDEX idx_status (status),
  INDEX idx_dates (start_date, end_date)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS hrm_payroll (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  employee_id BIGINT UNSIGNED NOT NULL,
  period_start DATE NOT NULL,
  period_end DATE NOT NULL,
  base_salary DECIMAL(12, 2) NOT NULL,
  bonus DECIMAL(12, 2) DEFAULT 0,
  overtime DECIMAL(12, 2) DEFAULT 0,
  deductions DECIMAL(12, 2) DEFAULT 0,
  tax DECIMAL(12, 2) DEFAULT 0,
  benefits DECIMAL(12, 2) DEFAULT 0,
  net_pay DECIMAL(12, 2) NOT NULL,
  status ENUM('pending', 'processed', 'paid', 'failed') DEFAULT 'pending',
  paid_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (employee_id) REFERENCES hrm_employees(id) ON DELETE CASCADE,
  INDEX idx_period (period_start, period_end),
  INDEX idx_status (status)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS hrm_performance_reviews (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  employee_id BIGINT UNSIGNED NOT NULL,
  reviewer_id BIGINT UNSIGNED,
  type ENUM('quarterly', 'annual', 'probation', 'ad_hoc') DEFAULT 'quarterly',
  period VARCHAR(50),
  overall_score DECIMAL(3, 2),
  skills JSON, -- {"technical": 4.5, "communication": 4.0, ...}
  goals JSON, -- [{"objective": "...", "progress": 75, "status": "on_track"}]
  strengths TEXT,
  improvements TEXT,
  comments TEXT,
  status ENUM('draft', 'submitted', 'acknowledged') DEFAULT 'draft',
  due_date DATE,
  completed_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (employee_id) REFERENCES hrm_employees(id) ON DELETE CASCADE,
  FOREIGN KEY (reviewer_id) REFERENCES hrm_employees(id) ON DELETE SET NULL,
  INDEX idx_employee (employee_id),
  INDEX idx_due_date (due_date)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS hrm_recruitment (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  department_id BIGINT UNSIGNED,
  location VARCHAR(255),
  employment_type ENUM('full_time', 'part_time', 'contract', 'intern') DEFAULT 'full_time',
  salary_min DECIMAL(12, 2),
  salary_max DECIMAL(12, 2),
  description TEXT,
  requirements JSON,
  status ENUM('draft', 'active', 'paused', 'closed', 'filled') DEFAULT 'draft',
  applicants_count INT DEFAULT 0,
  posted_at TIMESTAMP NULL,
  closed_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (department_id) REFERENCES hrm_departments(id) ON DELETE SET NULL,
  INDEX idx_status (status)
) ENGINE=InnoDB;

-- ============================================
-- ANALYTICS TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS analytics_page_views (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  session_id VARCHAR(64) NOT NULL,
  visitor_id VARCHAR(64) NOT NULL,
  page_path VARCHAR(500) NOT NULL,
  page_title VARCHAR(255),
  referrer VARCHAR(500),
  source VARCHAR(100),
  medium VARCHAR(100),
  campaign VARCHAR(100),
  country VARCHAR(2),
  city VARCHAR(100),
  device_type ENUM('desktop', 'mobile', 'tablet') DEFAULT 'desktop',
  browser VARCHAR(50),
  os VARCHAR(50),
  duration INT DEFAULT 0, -- seconds
  is_bounce BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_session (session_id),
  INDEX idx_visitor (visitor_id),
  INDEX idx_page (page_path),
  INDEX idx_created (created_at),
  INDEX idx_source (source, medium)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS analytics_events (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  session_id VARCHAR(64) NOT NULL,
  visitor_id VARCHAR(64) NOT NULL,
  event_name VARCHAR(100) NOT NULL,
  event_category VARCHAR(100),
  event_label VARCHAR(255),
  event_value DECIMAL(15, 2),
  properties JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_event_name (event_name),
  INDEX idx_session (session_id),
  INDEX idx_created (created_at)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS analytics_conversions (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  visitor_id VARCHAR(64) NOT NULL,
  user_id BIGINT UNSIGNED,
  type ENUM('signup', 'demo_request', 'contact_form', 'purchase', 'trial_start') NOT NULL,
  source VARCHAR(100),
  medium VARCHAR(100),
  campaign VARCHAR(100),
  value DECIMAL(15, 2) DEFAULT 0,
  properties JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_type (type),
  INDEX idx_created (created_at)
) ENGINE=InnoDB;

-- ============================================
-- PROJECTS & SUPPORT TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS projects (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  client_name VARCHAR(255) NOT NULL,
  client_contact_id BIGINT UNSIGNED,
  status ENUM('planning', 'in_progress', 'review', 'completed', 'on_hold', 'cancelled') DEFAULT 'planning',
  progress INT DEFAULT 0,
  description TEXT,
  budget DECIMAL(15, 2),
  deadline DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (client_contact_id) REFERENCES crm_contacts(id) ON DELETE SET NULL,
  INDEX idx_status (status)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS support_tickets (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED,
  subject VARCHAR(255) NOT NULL,
  description TEXT,
  priority ENUM('low', 'medium', 'high', 'critical') DEFAULT 'medium',
  status ENUM('open', 'in_progress', 'waiting', 'resolved', 'closed') DEFAULT 'open',
  category VARCHAR(100),
  assigned_to BIGINT UNSIGNED,
  sla_deadline TIMESTAMP NULL,
  resolved_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_status (status),
  INDEX idx_priority (priority)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS invoices (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED,
  contact_id BIGINT UNSIGNED,
  invoice_number VARCHAR(50) NOT NULL UNIQUE,
  amount DECIMAL(15, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  status ENUM('draft', 'sent', 'paid', 'overdue', 'cancelled') DEFAULT 'draft',
  due_date DATE,
  paid_at TIMESTAMP NULL,
  items JSON,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (contact_id) REFERENCES crm_contacts(id) ON DELETE SET NULL,
  INDEX idx_status (status),
  INDEX idx_due_date (due_date)
) ENGINE=InnoDB;

-- ============================================
-- NOTIFICATION & ACTIVITY TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS notifications (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  type VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  message TEXT,
  read_at TIMESTAMP NULL,
  action_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_read (user_id, read_at)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS activity_log (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED,
  action VARCHAR(100) NOT NULL,
  entity_type VARCHAR(50),
  entity_id BIGINT UNSIGNED,
  details JSON,
  ip_address VARCHAR(45),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_user (user_id),
  INDEX idx_entity (entity_type, entity_id),
  INDEX idx_created (created_at)
) ENGINE=InnoDB;

-- ============================================
-- BLOG & CONTENT TABLES
-- ============================================

CREATE TABLE IF NOT EXISTS blog_posts (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content LONGTEXT,
  author_id BIGINT UNSIGNED,
  category VARCHAR(100),
  tags JSON,
  featured_image TEXT,
  status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  views INT DEFAULT 0,
  likes INT DEFAULT 0,
  read_time INT, -- minutes
  published_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_slug (slug),
  INDEX idx_status (status),
  INDEX idx_category (category),
  FULLTEXT idx_search (title, excerpt, content)
) ENGINE=InnoDB;

-- ============================================
-- SEED DATA
-- ============================================

INSERT INTO users (email, name, password_hash, role, company, plan) VALUES
('admin@hmorix.com', 'Hamza Morix', '$2b$10$demo_hash', 'admin', 'HMorix', 'enterprise'),
('sarah@hmorix.com', 'Sarah Chen', '$2b$10$demo_hash', 'manager', 'HMorix', 'enterprise'),
('alex@hmorix.com', 'Alex Rivera', '$2b$10$demo_hash', 'developer', 'HMorix', 'enterprise'),
('mike@hmorix.com', 'Mike Johnson', '$2b$10$demo_hash', 'developer', 'HMorix', 'enterprise'),
('demo@hmorix.com', 'Demo User', '$2b$10$demo_hash', 'user', 'Demo Corp', 'business');
