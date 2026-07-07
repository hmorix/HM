import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 font-display font-bold text-xl mb-6">
            <div className="w-9 h-9 bg-cream flex items-center justify-center text-obsidian text-xs font-bold" style={{clipPath:'polygon(0 0, 78% 0, 100% 22%, 100% 78%, 78% 100%, 0 100%)'}}>HM</div>
            <span>HMorix</span>
          </Link>
          <h1 className="font-display text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-cream/50 mt-2">Start building with HMorix today.</p>
        </div>

        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div><label className="block text-xs text-cream/40 mb-1.5">First Name</label><input type="text" placeholder="John" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" /></div>
              <div><label className="block text-xs text-cream/40 mb-1.5">Last Name</label><input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" /></div>
            </div>
            <div><label className="block text-xs text-cream/40 mb-1.5">Email</label><input type="email" placeholder="john@company.com" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" /></div>
            <div><label className="block text-xs text-cream/40 mb-1.5">Company</label><input type="text" placeholder="Your company name" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" /></div>
            <div>
              <label className="block text-xs text-cream/40 mb-1.5">Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} placeholder="Min 8 characters" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] placeholder:text-cream/30" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/30 hover:text-cream">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <div className="flex gap-1 mt-2">
                {[1,2,3,4].map(i => <div key={i} className={`flex-1 h-1 rounded-full ${i <= 2 ? 'bg-yellow-400' : 'bg-white/[0.06]'}`} />)}
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-xs text-cream/40">I agree to the <a href="#" className="text-[#C8FF00] hover:underline">Terms of Service</a> and <a href="#" className="text-[#C8FF00] hover:underline">Privacy Policy</a></span>
            </div>
            <button type="submit" className="btn-primary w-full">Create Account</button>
          </form>

          <div className="mt-6 pt-6 border-t border-glass-border">
            <p className="text-xs text-cream/30 text-center mb-4">Or sign up with</p>
            <div className="grid grid-cols-3 gap-3">
              {['Google','GitHub','Microsoft'].map(p => (
                <button key={p} className="px-3 py-2.5 bg-white/[0.04] border border-glass-border rounded-[4px] text-xs text-cream/60 hover:text-cream hover:border-cream transition-all">{p}</button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-cream/40 mt-6">Already have an account? <Link to="/signin" className="text-[#C8FF00] hover:underline">Sign in</Link></p>
      </div>
    </div>
  )
}
