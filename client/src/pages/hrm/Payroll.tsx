import { useState } from 'react'
import SEOHead from '../../components/seo/SEOHead'
import { DollarSign, Download, Calendar, TrendingUp, Users } from 'lucide-react'

const payrollSummary = {
  totalPayroll: '$2,847,000',
  avgSalary: '$142,350',
  totalBenefits: '$568,000',
  taxWithholding: '$712,000',
  nextPayDate: 'July 1, 2024',
}

const employees = [
  { id: 1, name: 'Alex Rivera', department: 'Engineering', role: 'Staff Engineer', baseSalary: 195000, bonus: 20000, deductions: 48750, net: 166250, status: 'processed' },
  { id: 2, name: 'Sarah Chen', department: 'Product', role: 'VP of Product', baseSalary: 220000, bonus: 30000, deductions: 62500, net: 187500, status: 'processed' },
  { id: 3, name: 'Mike Johnson', department: 'Security', role: 'Head of Security', baseSalary: 185000, bonus: 15000, deductions: 50000, net: 150000, status: 'processed' },
  { id: 4, name: 'Dr. Emily Park', department: 'AI/ML', role: 'ML Lead', baseSalary: 210000, bonus: 25000, deductions: 58750, net: 176250, status: 'processed' },
  { id: 5, name: 'Lisa Martinez', department: 'Engineering', role: 'Frontend Lead', baseSalary: 175000, bonus: 15000, deductions: 47500, net: 142500, status: 'pending' },
  { id: 6, name: 'David Kim', department: 'Marketing', role: 'Growth Lead', baseSalary: 155000, bonus: 12000, deductions: 41750, net: 125250, status: 'pending' },
  { id: 7, name: 'James Wu', department: 'Security', role: 'IoT Security Lead', baseSalary: 170000, bonus: 10000, deductions: 45000, net: 135000, status: 'processed' },
  { id: 8, name: 'Anna Petrov', department: 'Engineering', role: 'DevOps Lead', baseSalary: 180000, bonus: 18000, deductions: 49500, net: 148500, status: 'processed' },
]

export default function Payroll() {
  const [period, setPeriod] = useState('june-2024')

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead title="HRM Payroll" description="Payroll management system - process salaries, track deductions, manage benefits, and generate payroll reports." keywords="payroll management, salary processing, employee compensation, tax withholding, benefits management, payroll software, HR payroll" canonical="/hrm/payroll" />
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold">Payroll Management</h1>
            <p className="text-cream/50 text-sm mt-1">Next pay date: <span className="text-[#C8FF00]">{payrollSummary.nextPayDate}</span></p>
          </div>
          <div className="flex items-center gap-3">
            <select value={period} onChange={e => setPeriod(e.target.value)} className="px-3 py-2 bg-obsidian-2 border border-glass-border rounded-[6px] text-sm text-cream/70">
              <option value="june-2024">June 2024</option>
              <option value="may-2024">May 2024</option>
              <option value="april-2024">April 2024</option>
            </select>
            <button className="btn-outline text-sm flex items-center gap-2"><Download size={14} /> Export</button>
            <button className="btn-primary text-sm">Run Payroll</button>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Total Payroll', value: payrollSummary.totalPayroll, icon: DollarSign },
            { label: 'Avg Salary', value: payrollSummary.avgSalary, icon: TrendingUp },
            { label: 'Benefits', value: payrollSummary.totalBenefits, icon: Users },
            { label: 'Tax Withholding', value: payrollSummary.taxWithholding, icon: Calendar },
            { label: 'Employees', value: '247', icon: Users },
          ].map((s, i) => (
            <div key={i} className="p-4 bg-obsidian-2 border border-glass-border rounded-[12px]">
              <s.icon size={16} className="text-[#C8FF00] mb-2" />
              <div className="font-display text-lg font-bold">{s.value}</div>
              <div className="text-[10px] text-cream/30">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Payroll Table */}
        <div className="bg-obsidian-2 border border-glass-border rounded-[12px] overflow-hidden">
          <div className="p-4 border-b border-glass-border flex items-center justify-between">
            <h2 className="font-display font-semibold">Employee Payroll - June 2024</h2>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-[10px]">{employees.filter(e => e.status === 'processed').length} processed</span>
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-[10px]">{employees.filter(e => e.status === 'pending').length} pending</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-cream/30 text-xs border-b border-glass-border bg-white/[0.02]">
                  <th className="p-4 font-medium">Employee</th>
                  <th className="p-4 font-medium">Department</th>
                  <th className="p-4 font-medium">Base Salary</th>
                  <th className="p-4 font-medium">Bonus</th>
                  <th className="p-4 font-medium">Deductions</th>
                  <th className="p-4 font-medium">Net Pay</th>
                  <th className="p-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(emp => (
                  <tr key={emp.id} className="border-b border-glass-border/50 hover:bg-white/[0.02]">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-obsidian-3 rounded-full flex items-center justify-center text-[10px] font-bold">{emp.name.split(' ').map(n => n[0]).join('')}</div>
                        <div>
                          <div className="font-medium">{emp.name}</div>
                          <div className="text-[10px] text-cream/30">{emp.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-cream/50">{emp.department}</td>
                    <td className="p-4">${(emp.baseSalary / 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td className="p-4 text-green-400">+${(emp.bonus / 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td className="p-4 text-red-400">-${(emp.deductions / 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td className="p-4 text-[#C8FF00] font-semibold">${(emp.net / 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td className="p-4"><span className={`px-2 py-0.5 rounded text-[10px] ${emp.status === 'processed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{emp.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
