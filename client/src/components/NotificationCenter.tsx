import { useState } from 'react'
import { Bell } from 'lucide-react'

const notifications = [
  { id: 1, title: 'System Update', message: 'BillingFlow v2.4 is now live', time: '2 min ago', unread: true },
  { id: 2, title: 'Security Alert', message: 'All systems operating normally', time: '1 hour ago', unread: true },
  { id: 3, title: 'New Feature', message: 'AI Playground now supports GPT-4', time: '3 hours ago', unread: false },
]

export default function NotificationCenter() {
  const [open, setOpen] = useState(false)
  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative w-9 h-9 border border-glass-border rounded-[4px] flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream transition-all">
        <Bell size={16} />
        {unreadCount > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C8FF00] rounded-full text-[10px] font-bold text-obsidian flex items-center justify-center">{unreadCount}</span>}
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-2 w-[320px] bg-obsidian-2 border border-glass-border rounded-[12px] overflow-hidden shadow-xl z-50">
          <div className="px-4 py-3 border-b border-glass-border flex justify-between items-center">
            <span className="text-sm font-semibold">Notifications</span>
            <span className="text-[10px] text-[#C8FF00]">{unreadCount} new</span>
          </div>
          <div className="max-h-[300px] overflow-y-auto">
            {notifications.map(n => (
              <div key={n.id} className={`px-4 py-3 border-b border-glass-border hover:bg-white/[0.02] transition-colors ${n.unread ? 'bg-white/[0.02]' : ''}`}>
                <div className="flex justify-between items-start">
                  <span className="text-sm font-medium">{n.title}</span>
                  {n.unread && <span className="w-2 h-2 bg-[#C8FF00] rounded-full mt-1.5" />}
                </div>
                <p className="text-xs text-cream/50 mt-0.5">{n.message}</p>
                <span className="text-[10px] text-cream/30 mt-1 block">{n.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
