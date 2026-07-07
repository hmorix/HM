import { useState } from 'react'
import { Camera, Mail, Phone, MapPin, Globe, Shield, Key, Bell, Clock } from 'lucide-react'

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="relative">
            <div className="w-28 h-28 bg-obsidian-3 border-2 border-glass-border rounded-full flex items-center justify-center text-3xl font-display font-bold text-[#C8FF00]">JD</div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#C8FF00] rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <Camera size={14} className="text-obsidian" />
            </button>
          </div>
          <div className="flex-1">
            <h1 className="font-display text-3xl font-bold">John Doe</h1>
            <p className="text-cream/50 mt-1">Enterprise Administrator</p>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-cream/40">
              <span className="flex items-center gap-1.5"><Mail size={14} /> admin@hmorix.com</span>
              <span className="flex items-center gap-1.5"><Phone size={14} /> +1 (555) 123-4567</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} /> San Francisco, CA</span>
              <span className="flex items-center gap-1.5"><Globe size={14} /> hmorix.com</span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <span className="px-3 py-1 bg-[#C8FF00]/10 text-[#C8FF00] text-xs rounded-full font-medium">Pro Plan</span>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full font-medium">Verified</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full font-medium">2FA Enabled</span>
            </div>
          </div>
          <button className="btn-primary">Edit Profile</button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 border-b border-glass-border mb-8">
          {['overview', 'activity', 'security', 'billing', 'api-keys'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-3 text-sm font-medium capitalize transition-all border-b-2 ${activeTab === tab ? 'text-[#C8FF00] border-[#C8FF00]' : 'text-cream/40 border-transparent hover:text-cream'}`}>
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs text-cream/40 mb-1">First Name</label><input type="text" defaultValue="John" className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  <div><label className="block text-xs text-cream/40 mb-1">Last Name</label><input type="text" defaultValue="Doe" className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  <div><label className="block text-xs text-cream/40 mb-1">Email</label><input type="email" defaultValue="admin@hmorix.com" className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  <div><label className="block text-xs text-cream/40 mb-1">Phone</label><input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                  <div className="col-span-2"><label className="block text-xs text-cream/40 mb-1">Bio</label><textarea rows={3} defaultValue="Enterprise technology leader with 10+ years of experience in building scalable systems." className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] resize-none" /></div>
                </div>
                <button className="mt-4 btn-primary">Save Changes</button>
              </div>

              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-4">Connected Accounts</h3>
                <div className="space-y-3">
                  {[{name:'GitHub',connected:true,user:'@johndoe'},{name:'Google',connected:true,user:'john@gmail.com'},{name:'Slack',connected:false,user:''},{name:'Microsoft',connected:false,user:''}].map(acc => (
                    <div key={acc.name} className="flex items-center justify-between p-3 bg-white/[0.02] border border-glass-border rounded-[8px]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/[0.06] rounded-[4px] flex items-center justify-center text-xs font-bold">{acc.name[0]}</div>
                        <div>
                          <span className="text-sm font-medium">{acc.name}</span>
                          {acc.connected && <span className="text-xs text-cream/30 ml-2">{acc.user}</span>}
                        </div>
                      </div>
                      <button className={`text-xs px-3 py-1.5 rounded-[4px] ${acc.connected ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20' : 'bg-[#C8FF00]/10 text-[#C8FF00] hover:bg-[#C8FF00]/20'} transition-all`}>
                        {acc.connected ? 'Disconnect' : 'Connect'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-4">Account Stats</h3>
                <div className="space-y-4">
                  {[{label:'Projects',value:'12'},{label:'API Calls (30d)',value:'48,291'},{label:'Storage Used',value:'2.4 GB'},{label:'Team Members',value:'8'}].map(s => (
                    <div key={s.label} className="flex justify-between items-center">
                      <span className="text-sm text-cream/50">{s.label}</span>
                      <span className="text-sm font-mono font-semibold">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
                <h3 className="font-display font-semibold mb-4">Recent Sessions</h3>
                <div className="space-y-3">
                  {[{device:'MacBook Pro',location:'San Francisco',time:'Active now'},{device:'iPhone 15',location:'San Francisco',time:'2h ago'},{device:'Chrome - Windows',location:'New York',time:'3d ago'}].map((s,i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white/[0.02] rounded-[8px]">
                      <Clock size={14} className="text-cream/30 mt-0.5" />
                      <div>
                        <div className="text-sm">{s.device}</div>
                        <div className="text-[10px] text-cream/30">{s.location} · {s.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-3">
            {[
              { action: 'Deployed BillingFlow v2.4', time: '2 hours ago', type: 'deploy' },
              { action: 'Updated security settings', time: '5 hours ago', type: 'security' },
              { action: 'Created new API key', time: '1 day ago', type: 'api' },
              { action: 'Invited team member (sarah@hmorix.com)', time: '2 days ago', type: 'team' },
              { action: 'Resolved ticket TKT-4521', time: '3 days ago', type: 'ticket' },
              { action: 'Updated billing information', time: '5 days ago', type: 'billing' },
              { action: 'Enabled 2FA authentication', time: '1 week ago', type: 'security' },
              { action: 'Created project "CRM Rebuild"', time: '2 weeks ago', type: 'project' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-obsidian-2 border border-glass-border rounded-[12px]">
                <div className={`w-2 h-2 rounded-full ${item.type === 'deploy' ? 'bg-green-400' : item.type === 'security' ? 'bg-yellow-400' : item.type === 'api' ? 'bg-blue-400' : 'bg-cream/30'}`} />
                <span className="flex-1 text-sm">{item.action}</span>
                <span className="text-xs text-cream/30">{item.time}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={20} className="text-[#C8FF00]" />
                <h3 className="font-display font-semibold">Two-Factor Authentication</h3>
                <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-[10px] rounded-full">Enabled</span>
              </div>
              <p className="text-sm text-cream/50 mb-4">Your account is protected with TOTP-based two-factor authentication.</p>
              <button className="btn-outline text-sm">Reconfigure 2FA</button>
            </div>
            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <div className="flex items-center gap-3 mb-4">
                <Key size={20} className="text-[#C8FF00]" />
                <h3 className="font-display font-semibold">Change Password</h3>
              </div>
              <div className="space-y-3 max-w-md">
                <div><label className="block text-xs text-cream/40 mb-1">Current Password</label><input type="password" className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                <div><label className="block text-xs text-cream/40 mb-1">New Password</label><input type="password" className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                <div><label className="block text-xs text-cream/40 mb-1">Confirm New Password</label><input type="password" className="w-full px-4 py-2.5 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" /></div>
                <button className="btn-primary">Update Password</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="space-y-6">
            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-4">Current Plan</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-display font-bold">Enterprise Pro</div>
                  <div className="text-sm text-cream/40 mt-1">$299/month · Billed annually</div>
                </div>
                <button className="btn-outline text-sm">Upgrade Plan</button>
              </div>
            </div>
            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-4">Payment Method</h3>
              <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-glass-border rounded-[8px]">
                <div className="w-12 h-8 bg-blue-600 rounded-[4px] flex items-center justify-center text-[10px] font-bold text-white">VISA</div>
                <div>
                  <div className="text-sm">•••• •••• •••• 4242</div>
                  <div className="text-[10px] text-cream/30">Expires 12/2025</div>
                </div>
                <button className="ml-auto text-xs text-[#C8FF00]">Update</button>
              </div>
            </div>
            <div className="p-6 bg-obsidian-2 border border-glass-border rounded-[16px]">
              <h3 className="font-display font-semibold mb-4">Billing History</h3>
              <div className="space-y-2">
                {[{date:'Jul 1, 2024',amount:'$299.00',status:'Paid'},{date:'Jun 1, 2024',amount:'$299.00',status:'Paid'},{date:'May 1, 2024',amount:'$299.00',status:'Paid'}].map((inv,i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-[8px]">
                    <span className="text-sm">{inv.date}</span>
                    <span className="text-sm font-mono">{inv.amount}</span>
                    <span className="text-xs text-green-400">{inv.status}</span>
                    <button className="text-xs text-[#C8FF00]">Download</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'api-keys' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">API Keys</h3>
              <button className="btn-primary text-sm">Generate New Key</button>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Production Key', key: 'hm_live_sk_...4f2a', created: 'Jun 15, 2024', lastUsed: '2 min ago' },
                { name: 'Development Key', key: 'hm_test_sk_...8b1c', created: 'May 20, 2024', lastUsed: '1 hour ago' },
                { name: 'CI/CD Pipeline', key: 'hm_live_sk_...9d3e', created: 'Apr 10, 2024', lastUsed: '3 days ago' },
              ].map((k, i) => (
                <div key={i} className="p-4 bg-obsidian-2 border border-glass-border rounded-[12px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{k.name}</span>
                    <div className="flex items-center gap-2">
                      <button className="text-xs text-cream/40 hover:text-cream">Reveal</button>
                      <button className="text-xs text-red-400 hover:text-red-300">Revoke</button>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-cream/40 bg-white/[0.02] px-3 py-1.5 rounded-[4px] inline-block">{k.key}</div>
                  <div className="flex items-center gap-4 mt-2 text-[10px] text-cream/30">
                    <span>Created: {k.created}</span>
                    <span>Last used: {k.lastUsed}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
