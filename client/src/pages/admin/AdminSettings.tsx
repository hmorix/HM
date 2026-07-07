import { useState } from 'react'
import { Save, Globe, Mail, Shield, Database, Zap, Bell } from 'lucide-react'

const sections = ['General', 'Email', 'Security', 'Database', 'API', 'Notifications']

export default function AdminSettings() {
  const [activeSection, setActiveSection] = useState('General')

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-8">
        <h1 className="font-display text-3xl font-bold mb-2">System Settings</h1>
        <p className="text-cream/40 text-sm mb-8">Configure platform-wide settings and integrations.</p>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="space-y-1">
            {sections.map(s => (
              <button key={s} onClick={() => setActiveSection(s)} className={`w-full text-left px-4 py-2.5 text-sm rounded-[8px] transition-all ${activeSection === s ? 'bg-[#C8FF00]/10 text-[#C8FF00]' : 'text-cream/40 hover:text-cream hover:bg-white/[0.04]'}`}>{s}</button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            {activeSection === 'General' && (
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-6 flex items-center gap-2"><Globe size={16} className="text-[#C8FF00]" />General Settings</h3>
                <div className="space-y-5">
                  <div><label className="block text-xs text-cream/40 mb-1.5">Platform Name</label><input defaultValue="HMorix Cloud" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  <div><label className="block text-xs text-cream/40 mb-1.5">Domain</label><input defaultValue="hmorix.com" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  <div><label className="block text-xs text-cream/40 mb-1.5">Support Email</label><input defaultValue="support@hmorix.com" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  <div><label className="block text-xs text-cream/40 mb-1.5">Default Timezone</label>
                    <select className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]"><option>America/Los_Angeles (PST)</option><option>America/New_York (EST)</option><option>Europe/London (GMT)</option><option>Asia/Tokyo (JST)</option></select>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-[8px]">
                    <div><div className="text-sm">Maintenance Mode</div><div className="text-[10px] text-cream/30">Show maintenance page to all users</div></div>
                    <button className="w-10 h-5 bg-white/[0.1] rounded-full relative"><div className="absolute left-1 top-0.5 w-4 h-4 bg-cream/40 rounded-full" /></button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-[8px]">
                    <div><div className="text-sm">User Registration</div><div className="text-[10px] text-cream/30">Allow new users to sign up</div></div>
                    <button className="w-10 h-5 bg-[#C8FF00] rounded-full relative"><div className="absolute right-1 top-0.5 w-4 h-4 bg-obsidian rounded-full" /></button>
                  </div>
                </div>
                <button className="btn-primary mt-6 flex items-center gap-2"><Save size={14} />Save Changes</button>
              </div>
            )}

            {activeSection === 'Email' && (
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-6 flex items-center gap-2"><Mail size={16} className="text-[#C8FF00]" />Email Configuration</h3>
                <div className="space-y-5">
                  <div><label className="block text-xs text-cream/40 mb-1.5">SMTP Host</label><input defaultValue="smtp.sendgrid.net" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-xs text-cream/40 mb-1.5">SMTP Port</label><input defaultValue="587" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                    <div><label className="block text-xs text-cream/40 mb-1.5">Encryption</label><select className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none"><option>TLS</option><option>SSL</option><option>None</option></select></div>
                  </div>
                  <div><label className="block text-xs text-cream/40 mb-1.5">SMTP Username</label><input defaultValue="apikey" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  <div><label className="block text-xs text-cream/40 mb-1.5">SMTP Password</label><input type="password" defaultValue="••••••••••••" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  <div><label className="block text-xs text-cream/40 mb-1.5">From Email</label><input defaultValue="noreply@hmorix.com" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  <div className="flex gap-3">
                    <button className="btn-primary flex items-center gap-2"><Save size={14} />Save</button>
                    <button className="btn-outline">Send Test Email</button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'Security' && (
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-6 flex items-center gap-2"><Shield size={16} className="text-[#C8FF00]" />Security Settings</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Enforce 2FA for all admins', desc: 'Require two-factor authentication for admin accounts', enabled: true },
                    { label: 'IP Allowlisting', desc: 'Only allow access from approved IP addresses', enabled: false },
                    { label: 'Session Timeout', desc: 'Auto-logout after 30 minutes of inactivity', enabled: true },
                    { label: 'Password Complexity', desc: 'Require uppercase, lowercase, numbers, and symbols', enabled: true },
                    { label: 'Brute Force Protection', desc: 'Lock account after 5 failed login attempts', enabled: true },
                    { label: 'Audit Logging', desc: 'Log all admin actions for compliance', enabled: true },
                  ].map((setting, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/[0.02] rounded-[8px]">
                      <div><div className="text-sm">{setting.label}</div><div className="text-[10px] text-cream/30">{setting.desc}</div></div>
                      <button className={`w-10 h-5 rounded-full relative ${setting.enabled ? 'bg-[#C8FF00]' : 'bg-white/[0.1]'}`}>
                        <div className={`absolute top-0.5 w-4 h-4 rounded-full ${setting.enabled ? 'right-1 bg-obsidian' : 'left-1 bg-cream/40'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'Database' && (
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-6 flex items-center gap-2"><Database size={16} className="text-[#C8FF00]" />Database Configuration</h3>
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-xs text-cream/40 mb-1.5">Provider</label><input defaultValue="Cloudflare D1" disabled className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream/50 outline-none" /></div>
                    <div><label className="block text-xs text-cream/40 mb-1.5">Region</label><input defaultValue="Global (Edge)" disabled className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream/50 outline-none" /></div>
                  </div>
                  <div className="p-4 bg-white/[0.02] rounded-[8px] space-y-2">
                    <div className="flex justify-between text-xs"><span className="text-cream/40">Total Records</span><span>2,847,291</span></div>
                    <div className="flex justify-between text-xs"><span className="text-cream/40">Storage Used</span><span>2.4 GB / 10 GB</span></div>
                    <div className="flex justify-between text-xs"><span className="text-cream/40">Queries (24h)</span><span>1,247,891</span></div>
                    <div className="flex justify-between text-xs"><span className="text-cream/40">Avg Latency</span><span>5ms</span></div>
                  </div>
                  <div className="flex gap-3">
                    <button className="btn-outline text-sm">Run Migration</button>
                    <button className="btn-outline text-sm">Backup Now</button>
                    <button className="btn-outline text-sm text-red-400 border-red-400/30 hover:bg-red-500/10">Reset Database</button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'API' && (
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-6 flex items-center gap-2"><Zap size={16} className="text-[#C8FF00]" />API Configuration</h3>
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-xs text-cream/40 mb-1.5">Rate Limit (per minute)</label><input defaultValue="1000" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                    <div><label className="block text-xs text-cream/40 mb-1.5">Max Payload Size</label><input defaultValue="10 MB" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  </div>
                  <div><label className="block text-xs text-cream/40 mb-1.5">CORS Origins</label><input defaultValue="*.hmorix.com, localhost:*" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  <div><label className="block text-xs text-cream/40 mb-1.5">Webhook Secret</label><input type="password" defaultValue="whsec_••••••••••••" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-[8px]">
                    <div><div className="text-sm">API Versioning</div><div className="text-[10px] text-cream/30">Current: v2, Legacy: v1 (deprecated)</div></div>
                    <span className="px-2 py-0.5 text-[10px] bg-[#C8FF00]/10 text-[#C8FF00] rounded">v2 Active</span>
                  </div>
                  <button className="btn-primary flex items-center gap-2"><Save size={14} />Save Changes</button>
                </div>
              </div>
            )}

            {activeSection === 'Notifications' && (
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-6 flex items-center gap-2"><Bell size={16} className="text-[#C8FF00]" />Notification Settings</h3>
                <div className="space-y-4">
                  {[
                    { label: 'New User Registration', desc: 'Notify admins when a new user signs up', channels: ['email', 'slack'] },
                    { label: 'Payment Failed', desc: 'Alert when a subscription payment fails', channels: ['email', 'slack', 'sms'] },
                    { label: 'Security Alert', desc: 'Critical security events and threats', channels: ['email', 'slack', 'sms', 'pagerduty'] },
                    { label: 'System Downtime', desc: 'Service degradation or outage detected', channels: ['email', 'slack', 'pagerduty'] },
                    { label: 'API Rate Limit', desc: 'User approaching or exceeding rate limits', channels: ['email'] },
                  ].map((notif, i) => (
                    <div key={i} className="p-4 bg-white/[0.02] rounded-[8px]">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm">{notif.label}</div>
                        <button className="w-10 h-5 bg-[#C8FF00] rounded-full relative"><div className="absolute right-1 top-0.5 w-4 h-4 bg-obsidian rounded-full" /></button>
                      </div>
                      <div className="text-[10px] text-cream/30 mb-2">{notif.desc}</div>
                      <div className="flex gap-2">
                        {notif.channels.map(ch => <span key={ch} className="px-2 py-0.5 text-[10px] bg-white/[0.06] rounded text-cream/40">{ch}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
