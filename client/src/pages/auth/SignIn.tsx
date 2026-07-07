import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-4">
      <div className="w-full max-w-[420px]">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 font-display font-bold text-xl mb-6">
            <div className="w-10 h-10 bg-cream flex items-center justify-center text-obsidian text-sm font-bold" style={{clipPath:'polygon(0 0, 78% 0, 100% 22%, 100% 78%, 78% 100%, 0 100%)'}}>HM</div>
            <span className="text-cream">HMorix</span>
          </Link>
          <h1 className="font-display text-2xl font-bold text-cream mb-2">Welcome back</h1>
          <p className="text-sm text-cream/50">Sign in to your HMorix Cloud account</p>
        </div>

        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <form onSubmit={e => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-cream/60 mb-1.5">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-medium text-cream/60 mb-1.5">Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30 transition-colors pr-10" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/40 hover:text-cream transition-colors">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-glass-border bg-obsidian accent-[#C8FF00]" />
                <span className="text-xs text-cream/50">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-xs text-[#C8FF00] hover:underline">Forgot password?</Link>
            </div>
            <button type="submit" className="w-full py-3 bg-[#C8FF00] text-obsidian font-display font-semibold rounded-[4px] hover:opacity-90 transition-all mt-2">Sign In</button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-glass-border" /></div>
            <div className="relative flex justify-center"><span className="px-3 bg-obsidian-2 text-xs text-cream/30">or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-2.5 border border-glass-border rounded-[4px] text-sm text-cream/60 hover:border-cream hover:text-cream transition-all">Google</button>
            <button className="py-2.5 border border-glass-border rounded-[4px] text-sm text-cream/60 hover:border-cream hover:text-cream transition-all">GitHub</button>
          </div>
        </div>

        <p className="text-center text-sm text-cream/40 mt-6">
          Don't have an account? <Link to="/contact" className="text-[#C8FF00] hover:underline">Get Started</Link>
        </p>
      </div>
    </div>
  )
}
