import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-4">
      <div className="w-full max-w-[420px]">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 font-display font-bold text-xl mb-6">
            <div className="w-10 h-10 bg-cream flex items-center justify-center text-obsidian text-sm font-bold" style={{clipPath:'polygon(0 0, 78% 0, 100% 22%, 100% 78%, 78% 100%, 0 100%)'}}>HM</div>
            <span className="text-cream">HMorix</span>
          </Link>
          <h1 className="font-display text-2xl font-bold text-cream mb-2">Reset your password</h1>
          <p className="text-sm text-cream/50">Enter your email and we'll send you a reset link</p>
        </div>

        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px]">
          {!sent ? (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-cream/60 mb-1.5">Email address</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30 transition-colors" />
              </div>
              <button type="submit" className="w-full py-3 bg-[#C8FF00] text-obsidian font-display font-semibold rounded-[4px] hover:opacity-90 transition-all">Send Reset Link</button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-xl">✓</span>
              </div>
              <h3 className="font-display font-semibold mb-2">Check your email</h3>
              <p className="text-sm text-cream/50 mb-4">We've sent a password reset link to <span className="text-cream">{email}</span></p>
              <button onClick={() => setSent(false)} className="text-sm text-[#C8FF00] hover:underline">Didn't receive it? Try again</button>
            </div>
          )}
        </div>

        <Link to="/signin" className="flex items-center justify-center gap-2 text-sm text-cream/40 mt-6 hover:text-cream transition-colors">
          <ArrowLeft size={14} /> Back to Sign In
        </Link>
      </div>
    </div>
  )
}
