import mysql from 'mysql2/promise'

// MySQL/MariaDB Connection Pool
// Supports both MySQL 8.0+ and MariaDB 10.5+
// Configure via environment variables

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'hmorix',
  waitForConnections: true,
  connectionLimit: parseInt(process.env.DB_POOL_SIZE || '10'),
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  // MariaDB compatibility
  charset: 'utf8mb4',
  timezone: '+00:00',
})

// Helper: Execute query with params
export async function query<T = any>(sql: string, params?: any[]): Promise<T[]> {
  const [rows] = await pool.execute(sql, params)
  return rows as T[]
}

// Helper: Execute single row query
export async function queryOne<T = any>(sql: string, params?: any[]): Promise<T | null> {
  const rows = await query<T>(sql, params)
  return rows[0] || null
}

// Helper: Insert and return insertId
export async function insert(sql: string, params?: any[]): Promise<number> {
  const [result] = await pool.execute(sql, params) as any
  return result.insertId
}

// Helper: Update/Delete and return affectedRows
export async function execute(sql: string, params?: any[]): Promise<number> {
  const [result] = await pool.execute(sql, params) as any
  return result.affectedRows
}

// Helper: Transaction wrapper
export async function transaction<T>(callback: (conn: mysql.PoolConnection) => Promise<T>): Promise<T> {
  const conn = await pool.getConnection()
  try {
    await conn.beginTransaction()
    const result = await callback(conn)
    await conn.commit()
    return result
  } catch (error) {
    await conn.rollback()
    throw error
  } finally {
    conn.release()
  }
}

// Health check
export async function healthCheck(): Promise<boolean> {
  try {
    await pool.execute('SELECT 1')
    return true
  } catch {
    return false
  }
}

export default pool
