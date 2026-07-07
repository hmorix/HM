import { useState } from 'react'
import { User, Bell, Shield, Palette, Globe, Keyboard, Database, Plug } from 'lucide-react'

export default function Settings() {
  const [activeSection, setActiveSection] = useState('general')

  const sections = [
    { id: 'general', label: 'General', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security & Privacy', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'language', label: 'Language & Region', icon: Globe },
    { id: 'shortcuts', label: 'Keyboard Shortcuts', icon: Keyboard },
    { id: 'data', label: 'Data & Storage', icon: Database },
    { id: 'integrations', label: 'Integrations', icon: Plug },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <h1 className="section-title mb-2">Settings</h1>
        <p className="text-cream/50 mb-8">Manage your account preferences and platform configuration.</p>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-1">
            {sections.map(s => (
              <button key={s.id} onClick={() => setActiveSection(s.id)} className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm rounded-[8px] transition-all ${activeSection === s.id ? 'bg-[#C8FF00]/10 text-[#C8FF00]' : 'text-cream/50 hover:text-cream hover:bg-white/[0.04]'}`}>
                <s.icon size={16} />
                {s.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6">
            {activeSection === 'general' && (
              <>
                <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                  <h3 className="font-display font-semibold mb-4">Account Information</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="block text-xs text-cream/40 mb-1">Display Name</label><input type="text" defaultValue="John Doe" className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                      <div><label className="block text-xs text-cream/40 mb-1">Username</label><input type="text" defaultValue="@johndoe" className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                    </div>
                    <div><label className="block text-xs text-cream/40 mb-1">Email</label><input type="email" defaultValue="admin@hmorix.com" className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                    <div><label className="block text-xs text-cream/40 mb-1">Company</label><input type="text" defaultValue="HMorix Technologies" className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  </div>
                  <button className="mt-4 btn-primary">Save Changes</button>
                </div>
                <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                  <h3 className="font-display font-semibold mb-4 text-red-400">Danger Zone</h3>
                  <p className="text-sm text-cream/40 mb-4">Once you delete your account, there is no going back.</p>
                  <button className="px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-[4px] text-sm hover:bg-red-500/20 transition-all">Delete Account</button>
                </div>
              </>
            )}

            {activeSection === 'notifications' && (
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-6">Notification Preferences</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Email notifications', desc: 'Receive email updates for important events', enabled: true },
                    { label: 'Push notifications', desc: 'Browser push notifications for real-time alerts', enabled: true },
                    { label: 'Security alerts', desc: 'Get notified about suspicious login attempts', enabled: true },
                    { label: 'Product updates', desc: 'New features and product announcements', enabled: false },
                    { label: 'Marketing emails', desc: 'Tips, offers, and promotional content', enabled: false },
                    { label: 'Weekly digest', desc: 'Summary of your account activity', enabled: true },
                    { label: 'Ticket updates', desc: 'Status changes on your support tickets', enabled: true },
                    { label: 'Invoice reminders', desc: 'Upcoming payment due dates', enabled: true },
                  ].map((n, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-[8px]">
                      <div>
                        <div className="text-sm font-medium">{n.label}</div>
                        <div className="text-[10px] text-cream/30">{n.desc}</div>
                      </div>
                      <button className={`w-10 h-5 rounded-full transition-all ${n.enabled ? 'bg-[#C8FF00]' : 'bg-white/10'} relative`}>
                        <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-obsidian transition-all ${n.enabled ? 'right-0.5' : 'left-0.5'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'security' && (
              <div className="space-y-6">
                <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                  <h3 className="font-display font-semibold mb-4">Password</h3>
                  <div className="space-y-3 max-w-md">
                    <div><label className="block text-xs text-cream/40 mb-1">Current Password</label><input type="password" className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                    <div><label className="block text-xs text-cream/40 mb-1">New Password</label><input type="password" className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                    <button className="btn-primary">Update Password</button>
                  </div>
                </div>
                <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                  <h3 className="font-display font-semibold mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-cream/50">Add an extra layer of security to your account.</p>
                      <span className="text-xs text-green-400">Currently enabled</span>
                    </div>
                    <button className="btn-outline text-sm">Reconfigure</button>
                  </div>
                </div>
                <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                  <h3 className="font-display font-semibold mb-4">Active Sessions</h3>
                  <div className="space-y-3">
                    {[{device:'MacBook Pro - Chrome',ip:'192.168.1.1',active:true},{device:'iPhone 15 - Safari',ip:'192.168.1.2',active:false},{device:'Windows PC - Firefox',ip:'10.0.0.5',active:false}].map((s,i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-[8px]">
                        <div>
                          <div className="text-sm">{s.device}</div>
                          <div className="text-[10px] text-cream/30">IP: {s.ip}</div>
                        </div>
                        {s.active ? <span className="text-xs text-green-400">Current</span> : <button className="text-xs text-red-400">Revoke</button>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'appearance' && (
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-6">Theme & Appearance</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-3">Theme</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[{name:'Dark',bg:'bg-[#0D0D0D]',active:true},{name:'Light',bg:'bg-[#F5F3EF]',active:false},{name:'System',bg:'bg-gradient-to-r from-[#0D0D0D] to-[#F5F3EF]',active:false}].map(t => (
                        <button key={t.name} className={`p-4 rounded-[8px] border ${t.active ? 'border-[#C8FF00]' : 'border-glass-border'} text-center`}>
                          <div className={`w-full h-12 ${t.bg} rounded-[4px] mb-2 border border-glass-border`} />
                          <span className="text-xs">{t.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3">Accent Color</label>
                    <div className="flex gap-3">
                      {['#C8FF00','#00D4FF','#FF6B6B','#A855F7','#F59E0B','#10B981'].map(c => (
                        <button key={c} className={`w-8 h-8 rounded-full border-2 ${c === '#C8FF00' ? 'border-white' : 'border-transparent'}`} style={{backgroundColor:c}} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3">Font Size</label>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-cream/40">Small</span>
                      <input type="range" min="12" max="18" defaultValue="14" className="flex-1" />
                      <span className="text-xs text-cream/40">Large</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3">Sidebar</label>
                    <div className="flex items-center gap-4">
                      <button className="px-4 py-2 bg-[#C8FF00]/10 text-[#C8FF00] border border-[#C8FF00]/20 rounded-[4px] text-sm">Expanded</button>
                      <button className="px-4 py-2 bg-white/[0.04] border border-glass-border rounded-[4px] text-sm text-cream/50">Collapsed</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'language' && (
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-6">Language & Region</h3>
                <div className="space-y-4 max-w-md">
                  <div><label className="block text-xs text-cream/40 mb-1">Language</label><select className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]"><option>English (US)</option><option>English (UK)</option><option>Spanish</option><option>French</option><option>German</option><option>Japanese</option></select></div>
                  <div><label className="block text-xs text-cream/40 mb-1">Timezone</label><select className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]"><option>Pacific Time (PT)</option><option>Eastern Time (ET)</option><option>Central European (CET)</option><option>India Standard (IST)</option></select></div>
                  <div><label className="block text-xs text-cream/40 mb-1">Date Format</label><select className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]"><option>MM/DD/YYYY</option><option>DD/MM/YYYY</option><option>YYYY-MM-DD</option></select></div>
                  <div><label className="block text-xs text-cream/40 mb-1">Currency</label><select className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]"><option>USD ($)</option><option>EUR (€)</option><option>GBP (£)</option><option>INR (₹)</option></select></div>
                  <button className="btn-primary">Save Preferences</button>
                </div>
              </div>
            )}

            {activeSection === 'shortcuts' && (
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-6">Keyboard Shortcuts</h3>
                <div className="space-y-2">
                  {[
                    { action: 'Open Command Palette', keys: '⌘ + K' },
                    { action: 'Search', keys: '⌘ + /' },
                    { action: 'Go to Dashboard', keys: '⌘ + D' },
                    { action: 'New Project', keys: '⌘ + N' },
                    { action: 'Toggle Sidebar', keys: '⌘ + B' },
                    { action: 'Toggle Theme', keys: '⌘ + Shift + T' },
                    { action: 'Open Notifications', keys: '⌘ + Shift + N' },
                    { action: 'Open Settings', keys: '⌘ + ,' },
                    { action: 'Sign Out', keys: '⌘ + Shift + Q' },
                    { action: 'Go to Home', keys: '⌘ + H' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-[8px]">
                      <span className="text-sm">{s.action}</span>
                      <kbd className="px-2 py-1 bg-white/[0.06] border border-glass-border rounded text-xs font-mono text-cream/60">{s.keys}</kbd>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'data' && (
              <div className="space-y-6">
                <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                  <h3 className="font-display font-semibold mb-4">Storage Usage</h3>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2"><span>2.4 GB used</span><span className="text-cream/40">10 GB total</span></div>
                    <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden"><div className="h-full bg-[#C8FF00] rounded-full" style={{width:'24%'}} /></div>
                  </div>
                  <div className="space-y-2">
                    {[{type:'Documents',size:'1.2 GB',color:'bg-blue-400'},{type:'Images',size:'680 MB',color:'bg-purple-400'},{type:'Backups',size:'420 MB',color:'bg-green-400'},{type:'Other',size:'100 MB',color:'bg-yellow-400'}].map(s => (
                      <div key={s.type} className="flex items-center gap-3 text-sm">
                        <div className={`w-3 h-3 rounded-sm ${s.color}`} />
                        <span className="flex-1">{s.type}</span>
                        <span className="text-cream/40">{s.size}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                  <h3 className="font-display font-semibold mb-4">Export Data</h3>
                  <p className="text-sm text-cream/40 mb-4">Download a copy of all your data including projects, invoices, and settings.</p>
                  <button className="btn-outline text-sm">Request Data Export</button>
                </div>
              </div>
            )}

            {activeSection === 'integrations' && (
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-6">Connected Integrations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Slack', desc: 'Get notifications in Slack channels', connected: true },
                    { name: 'GitHub', desc: 'Sync repositories and deployments', connected: true },
                    { name: 'Jira', desc: 'Sync tickets and project boards', connected: false },
                    { name: 'Zapier', desc: 'Automate workflows with 5000+ apps', connected: false },
                    { name: 'Stripe', desc: 'Payment processing integration', connected: true },
                    { name: 'AWS', desc: 'Cloud infrastructure management', connected: true },
                    { name: 'Google Workspace', desc: 'Calendar, Drive, and Gmail sync', connected: false },
                    { name: 'Datadog', desc: 'Monitoring and observability', connected: false },
                  ].map(int => (
                    <div key={int.name} className="p-4 bg-white/[0.02] border border-glass-border rounded-[12px]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{int.name}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${int.connected ? 'bg-green-500/10 text-green-400' : 'bg-white/5 text-cream/30'}`}>{int.connected ? 'Connected' : 'Not connected'}</span>
                      </div>
                      <p className="text-xs text-cream/40 mb-3">{int.desc}</p>
                      <button className={`text-xs ${int.connected ? 'text-red-400' : 'text-[#C8FF00]'}`}>{int.connected ? 'Disconnect' : 'Connect'}</button>
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
