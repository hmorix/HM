import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm the HMorix AI Assistant. How can I help you today?" }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages(prev => [...prev, { role: 'user', content: input }])
    setInput('')
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to explore our products or check our documentation.' }])
    }, 1000)
  }

  return (
    <>
      <button onClick={() => setOpen(!open)} className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#C8FF00] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
        {open ? <X size={24} className="text-obsidian" /> : <MessageCircle size={24} className="text-obsidian" />}
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] h-[480px] bg-obsidian-2 border border-glass-border rounded-[16px] flex flex-col overflow-hidden shadow-2xl">
          <div className="px-4 py-3 border-b border-glass-border flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C8FF00]/20 rounded-full flex items-center justify-center"><MessageCircle size={16} className="text-[#C8FF00]" /></div>
            <div>
              <div className="text-sm font-semibold">HMorix AI</div>
              <div className="text-[10px] text-cream/40">Always online</div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-[12px] text-sm ${msg.role === 'user' ? 'bg-[#C8FF00] text-obsidian' : 'bg-white/[0.06] text-cream/80'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-glass-border">
            <div className="flex items-center gap-2">
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Ask anything..." className="flex-1 bg-white/[0.04] border border-glass-border rounded-[8px] px-3 py-2 text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" />
              <button onClick={handleSend} className="w-9 h-9 bg-[#C8FF00] rounded-[8px] flex items-center justify-center hover:opacity-90 transition-opacity"><Send size={16} className="text-obsidian" /></button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
