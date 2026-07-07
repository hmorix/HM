import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, ArrowRight, FileText, Code, Shield, Home, Zap, Users, Settings, User, Bell, BookOpen, Award, Newspaper } from 'lucide-react'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

const commands = [
  { label: 'Home', path: '/', icon: Home, category: 'Pages' },
  { label: 'Pricing', path: '/pricing', icon: FileText, category: 'Pages' },
  { label: 'Contact', path: '/contact', icon: Users, category: 'Pages' },
  { label: 'Blog', path: '/blog', icon: Newspaper, category: 'Pages' },

  { label: 'BillingFlow', path: '/billingflow', icon: FileText, category: 'Products' },
  { label: 'BillingFlow Features', path: '/billingflow/features', icon: FileText, category: 'Products' },
  { label: 'BillingFlow Pricing', path: '/billingflow/pricing', icon: FileText, category: 'Products' },
  { label: 'BillingFlow Docs', path: '/billingflow/docs', icon: Code, category: 'Products' },
  { label: 'BillingFlow API', path: '/billingflow/api', icon: Code, category: 'Products' },
  { label: 'BillingFlow Demo', path: '/billingflow/demo', icon: Zap, category: 'Products' },
  { label: 'BillingFlow Changelog', path: '/billingflow/changelog', icon: FileText, category: 'Products' },
  { label: 'AI Agent', path: '/agent', icon: Zap, category: 'Products' },
  { label: 'AI Agent Playground', path: '/agent/playground', icon: Zap, category: 'Products' },
  { label: 'AI Agent Docs', path: '/agent/docs', icon: Code, category: 'Products' },
  { label: 'AI Agent Templates', path: '/agent/templates', icon: FileText, category: 'Products' },
  { label: 'AI Agent Workflows', path: '/agent/workflows', icon: Zap, category: 'Products' },
  { label: 'AI Agent Examples', path: '/agent/examples', icon: Code, category: 'Products' },
  { label: 'PDF Automation', path: '/pdf-automation', icon: FileText, category: 'Products' },
  { label: 'PDF Docs', path: '/pdf-automation/docs', icon: Code, category: 'Products' },
  { label: 'PDF Demo', path: '/pdf-automation/demo', icon: Zap, category: 'Products' },
  { label: 'PDF Templates', path: '/pdf-automation/templates', icon: FileText, category: 'Products' },
  { label: 'Smart Home', path: '/smart-home', icon: Home, category: 'Products' },

  { label: 'Developers', path: '/developers', icon: Code, category: 'Platform' },
  { label: 'AI Playground', path: '/playground', icon: Zap, category: 'Platform' },
  { label: 'Dashboard', path: '/dashboard', icon: FileText, category: 'Platform' },
  { label: 'Architecture', path: '/architecture', icon: Code, category: 'Platform' },
  { label: 'Client Portal', path: '/portal', icon: Users, category: 'Platform' },
  { label: 'Activity Feed', path: '/activity', icon: Bell, category: 'Platform' },

  { label: 'Security Center', path: '/security', icon: Shield, category: 'Trust' },
  { label: 'System Status', path: '/status', icon: Shield, category: 'Trust' },
  { label: 'Trust Center', path: '/trust', icon: Shield, category: 'Trust' },
  { label: 'Compliance', path: '/compliance', icon: Shield, category: 'Trust' },
  { label: 'Certifications', path: '/certifications', icon: Award, category: 'Trust' },

  { label: 'About', path: '/about', icon: Users, category: 'Company' },
  { label: 'Careers', path: '/careers', icon: Users, category: 'Company' },
  { label: 'Investors', path: '/investors', icon: Users, category: 'Company' },
  { label: 'Partners', path: '/partners', icon: Users, category: 'Company' },
  { label: 'Roadmap', path: '/roadmap', icon: FileText, category: 'Company' },
  { label: 'Press Releases', path: '/press', icon: Newspaper, category: 'Company' },
  { label: 'Media Kit', path: '/media-kit', icon: FileText, category: 'Company' },

  { label: 'Case Studies', path: '/case-studies', icon: BookOpen, category: 'Resources' },
  { label: 'Whitepapers', path: '/whitepapers', icon: FileText, category: 'Resources' },
  { label: 'Knowledge Base', path: '/knowledge-base', icon: BookOpen, category: 'Resources' },
  { label: 'Support', path: '/support', icon: Users, category: 'Resources' },

  { label: 'Profile', path: '/profile', icon: User, category: 'Account' },
  { label: 'Settings', path: '/settings', icon: Settings, category: 'Account' },
  { label: 'Sign In', path: '/signin', icon: User, category: 'Account' },
  { label: 'Sign Up', path: '/signup', icon: User, category: 'Account' },
]

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const filtered = commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()) || c.category.toLowerCase().includes(query.toLowerCase()))
  const grouped = filtered.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = []
    acc[cmd.category].push(cmd)
    return acc
  }, {} as Record<string, typeof commands>)

  const handleSelect = (path: string) => {
    navigate(path)
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && filtered.length > 0) {
      handleSelect(filtered[0].path)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[20vh]" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-[560px] bg-obsidian-2 border border-glass-border rounded-[16px] overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 px-4 py-3 border-b border-glass-border">
          <Search size={18} className="text-cream/40" />
          <input ref={inputRef} value={query} onChange={e => setQuery(e.target.value)} onKeyDown={handleKeyDown} placeholder="Search pages, products, commands..." className="flex-1 bg-transparent text-cream text-sm outline-none placeholder:text-cream/30" />
          <kbd className="text-[10px] px-1.5 py-0.5 bg-white/[0.06] border border-glass-border rounded text-cream/40">ESC</kbd>
        </div>
        <div className="max-h-[400px] overflow-y-auto p-2">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="mb-2">
              <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-cream/30">{category}</div>
              {items.map(item => (
                <button key={item.path} onClick={() => handleSelect(item.path)} className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-cream/60 hover:text-cream hover:bg-white/[0.04] rounded-[8px] transition-all group">
                  <item.icon size={16} className="text-[#C8FF00]" />
                  <span className="flex-1 text-left">{item.label}</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          ))}
          {filtered.length === 0 && <div className="px-4 py-8 text-center text-sm text-cream/30">No results found</div>}
        </div>
        <div className="px-4 py-2 border-t border-glass-border flex items-center gap-4 text-[10px] text-cream/20">
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>ESC Close</span>
        </div>
      </div>
    </div>
  )
}
