import { useState } from 'react'
import SEOHead from '../../components/seo/SEOHead'
import { TrendingUp, Users, Eye, MousePointer, Globe, Clock, ArrowUpRight, ArrowDownRight, BarChart3, PieChart } from 'lucide-react'

const metrics = [
  { label: 'Total Visitors', value: '847,230', change: '+23.4%', up: true, icon: Users },
  { label: 'Page Views', value: '2.4M', change: '+18.7%', up: true, icon: Eye },
  { label: 'Avg. Session', value: '4m 32s', change: '+12.1%', up: true, icon: Clock },
  { label: 'Bounce Rate', value: '32.4%', change: '-5.2%', up: true, icon: MousePointer },
  { label: 'Conversions', value: '12,847', change: '+34.2%', up: true, icon: TrendingUp },
  { label: 'Revenue', value: '$847K', change: '+28.9%', up: true, icon: BarChart3 },
]

const trafficSources = [
  { source: 'Google Organic', visitors: 312400, percentage: 36.9, change: '+12.3%' },
  { source: 'Direct', visitors: 187200, percentage: 22.1, change: '+8.7%' },
  { source: 'LinkedIn', visitors: 98400, percentage: 11.6, change: '+45.2%' },
  { source: 'Twitter/X', visitors: 76800, percentage: 9.1, change: '+23.1%' },
  { source: 'GitHub', visitors: 54200, percentage: 6.4, change: '+67.8%' },
  { source: 'Google Ads', visitors: 48900, percentage: 5.8, change: '+15.4%' },
  { source: 'Referral', visitors: 42100, percentage: 5.0, change: '+9.2%' },
  { source: 'Other', visitors: 27230, percentage: 3.2, change: '+4.1%' },
]

const topPages = [
  { path: '/', title: 'Home', views: 234000, uniqueVisitors: 187000, avgTime: '2:34', bounceRate: '28%' },
  { path: '/services/web-design', title: 'Web Design', views: 98400, uniqueVisitors: 76200, avgTime: '3:45', bounceRate: '24%' },
  { path: '/blog', title: 'Blog', views: 87200, uniqueVisitors: 65400, avgTime: '5:12', bounceRate: '18%' },
  { path: '/pricing', title: 'Pricing', views: 76800, uniqueVisitors: 54300, avgTime: '2:56', bounceRate: '35%' },
  { path: '/services/ai-solutions', title: 'AI Solutions', views: 65400, uniqueVisitors: 48900, avgTime: '4:08', bounceRate: '22%' },
  { path: '/billingflow', title: 'BillingFlow', views: 54200, uniqueVisitors: 42100, avgTime: '3:22', bounceRate: '26%' },
  { path: '/agent', title: 'AI Agent', views: 48900, uniqueVisitors: 36700, avgTime: '4:45', bounceRate: '20%' },
  { path: '/services/digital-marketing', title: 'Digital Marketing', views: 43200, uniqueVisitors: 32400, avgTime: '3:15', bounceRate: '30%' },
]

const geoData = [
  { country: 'United States', visitors: 312400, percentage: 36.9 },
  { country: 'United Kingdom', visitors: 98400, percentage: 11.6 },
  { country: 'Germany', visitors: 76800, percentage: 9.1 },
  { country: 'India', visitors: 65400, percentage: 7.7 },
  { country: 'Canada', visitors: 54200, percentage: 6.4 },
  { country: 'Australia', visitors: 43200, percentage: 5.1 },
  { country: 'France', visitors: 32400, percentage: 3.8 },
  { country: 'Japan', visitors: 28900, percentage: 3.4 },
]

const conversionFunnel = [
  { stage: 'Visitors', count: 847230, percentage: 100 },
  { stage: 'Engaged', count: 423615, percentage: 50 },
  { stage: 'Signed Up', count: 42361, percentage: 5 },
  { stage: 'Activated', count: 21180, percentage: 2.5 },
  { stage: 'Paid', count: 12847, percentage: 1.5 },
]

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('30d')

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SEOHead title="Analytics Dashboard" description="Comprehensive analytics dashboard with traffic analysis, conversion tracking, SEO metrics, user behavior, and revenue analytics." keywords="analytics dashboard, web analytics, traffic analysis, conversion tracking, SEO analytics, user behavior, revenue analytics, marketing analytics, Google Analytics alternative" canonical="/analytics" />
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold">Analytics Dashboard</h1>
            <p className="text-cream/50 text-sm mt-1">Website performance and user insights</p>
          </div>
          <div className="flex items-center gap-3">
            <select value={timeRange} onChange={e => setTimeRange(e.target.value)} className="px-3 py-2 bg-obsidian-2 border border-glass-border rounded-[6px] text-sm text-cream/70">
              <option value="24h">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">This year</option>
            </select>
            <button className="btn-outline text-sm">Export Report</button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          {metrics.map((m, i) => (
            <div key={i} className="p-4 bg-obsidian-2 border border-glass-border rounded-[12px]">
              <div className="flex items-center justify-between mb-2">
                <m.icon size={16} className="text-[#C8FF00]" />
                <span className={`flex items-center gap-0.5 text-[10px] font-medium ${m.up ? 'text-green-400' : 'text-red-400'}`}>
                  {m.up ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />} {m.change}
                </span>
              </div>
              <div className="font-display text-xl font-bold">{m.value}</div>
              <div className="text-[10px] text-cream/30 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Traffic Chart Placeholder + Sources */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 p-6 bg-obsidian-2 border border-glass-border rounded-[12px]">
            <h2 className="font-display text-lg font-semibold mb-4">Traffic Overview</h2>
            {/* Simulated chart with bars */}
            <div className="flex items-end gap-1 h-48">
              {Array.from({ length: 30 }, (_, i) => {
                const height = 30 + Math.random() * 70
                return <div key={i} className="flex-1 bg-[#C8FF00]/20 hover:bg-[#C8FF00]/40 rounded-t transition-all cursor-pointer relative group" style={{ height: `${height}%` }}>
                  <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-obsidian border border-glass-border rounded text-[9px] whitespace-nowrap">{Math.floor(height * 280)}  visitors</div>
                </div>
              })}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-cream/20">
              <span>Jun 1</span><span>Jun 8</span><span>Jun 15</span><span>Jun 22</span><span>Jun 30</span>
            </div>
          </div>

          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[12px]">
            <h2 className="font-display text-lg font-semibold mb-4">Traffic Sources</h2>
            <div className="space-y-3">
              {trafficSources.slice(0, 6).map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium">{s.source}</span>
                      <span className="text-[10px] text-cream/30">{s.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-obsidian-3 rounded-full overflow-hidden">
                      <div className="h-full bg-[#C8FF00] rounded-full" style={{ width: `${s.percentage}%` }} />
                    </div>
                  </div>
                  <span className="text-[10px] text-green-400">{s.change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conversion Funnel + Geo */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[12px]">
            <h2 className="font-display text-lg font-semibold mb-4">Conversion Funnel</h2>
            <div className="space-y-3">
              {conversionFunnel.map((stage, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{stage.stage}</span>
                    <span className="text-xs text-cream/50">{stage.count.toLocaleString()} ({stage.percentage}%)</span>
                  </div>
                  <div className="w-full h-8 bg-obsidian-3 rounded-[4px] overflow-hidden relative">
                    <div className="h-full bg-[#C8FF00]/20 border border-[#C8FF00]/30 rounded-[4px] flex items-center px-3" style={{ width: `${stage.percentage}%` }}>
                      {stage.percentage > 10 && <span className="text-[10px] text-[#C8FF00] font-medium">{stage.percentage}%</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[12px]">
            <h2 className="font-display text-lg font-semibold mb-4">Geographic Distribution</h2>
            <div className="space-y-2">
              {geoData.map((g, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-[4px] hover:bg-white/[0.02]">
                  <Globe size={12} className="text-cream/30" />
                  <span className="flex-1 text-sm">{g.country}</span>
                  <span className="text-xs text-cream/50">{g.visitors.toLocaleString()}</span>
                  <span className="text-[10px] text-cream/30 w-10 text-right">{g.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[12px]">
          <h2 className="font-display text-lg font-semibold mb-4">Top Pages</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-cream/30 text-xs border-b border-glass-border">
                  <th className="pb-3 font-medium">Page</th>
                  <th className="pb-3 font-medium">Views</th>
                  <th className="pb-3 font-medium">Unique Visitors</th>
                  <th className="pb-3 font-medium">Avg. Time</th>
                  <th className="pb-3 font-medium">Bounce Rate</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((page, i) => (
                  <tr key={i} className="border-b border-glass-border/50 hover:bg-white/[0.02]">
                    <td className="py-3">
                      <div className="font-medium">{page.title}</div>
                      <div className="text-[10px] text-cream/30">{page.path}</div>
                    </td>
                    <td className="py-3">{page.views.toLocaleString()}</td>
                    <td className="py-3 text-cream/50">{page.uniqueVisitors.toLocaleString()}</td>
                    <td className="py-3 text-cream/50">{page.avgTime}</td>
                    <td className="py-3"><span className={`${parseInt(page.bounceRate) > 30 ? 'text-yellow-400' : 'text-green-400'}`}>{page.bounceRate}</span></td>
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
