import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Mail, Phone } from 'lucide-react'

export default function SearchAccount() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [searched, setSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearched(true)
    if (query.includes('@')) {
      setResults([{ email: query, name: 'Account Found', method: 'email' }])
    } else {
      setResults([])
    }
  }

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 font-display font-bold text-xl mb-6">
            <div className="w-9 h-9 bg-cream flex items-center justify-center text-obsidian text-xs font-bold" style={{clipPath:'polygon(0 0, 78% 0, 100% 22%, 100% 78%, 78% 100%, 0 100%)'}}>HM</div>
            <span>HMorix</span>
          </Link>
          <h1 className="font-display text-2xl font-bold">Find your account</h1>
          <p className="text-sm text-cream/50 mt-2">Enter your email or phone number to find your account.</p>
        </div>

        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/30" />
              <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Email address or phone number" className="w-full pl-10 pr-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" />
            </div>
            <button type="submit" className="btn-primary w-full">Search</button>
          </form>

          {searched && (
            <div className="mt-6">
              {results.length > 0 ? (
                <div className="space-y-3">
                  <p className="text-xs text-cream/40">Account found:</p>
                  {results.map((r, i) => (
                    <div key={i} className="p-4 bg-white/[0.02] border border-glass-border rounded-[8px]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-obsidian-3 rounded-full flex items-center justify-center text-sm font-bold">{r.name[0]}</div>
                        <div>
                          <div className="text-sm font-medium">{r.name}</div>
                          <div className="text-xs text-cream/30 flex items-center gap-1">
                            {r.method === 'email' ? <Mail size={10} /> : <Phone size={10} />}
                            {r.email || r.phone}
                          </div>
                        </div>
                      </div>
                      <Link to="/forgot-password" className="block mt-3 text-center text-xs text-[#C8FF00] hover:underline">Send recovery link</Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-sm text-cream/40">No account found with that information.</p>
                  <Link to="/contact" className="text-xs text-[#C8FF00] hover:underline mt-2 inline-block">Contact support</Link>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <Link to="/signin" className="text-sm text-cream/40 hover:text-cream">Back to Sign In</Link>
        </div>
      </div>
    </div>
  )
}
