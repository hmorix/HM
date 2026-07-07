import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Verify() {
  const [code, setCode] = useState(['', '', '', '', '', ''])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)
    if (value && index < 5) {
      const next = document.getElementById(`code-${index + 1}`)
      next?.focus()
    }
  }

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-4">
      <div className="w-full max-w-[420px]">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 font-display font-bold text-xl mb-6">
            <div className="w-10 h-10 bg-cream flex items-center justify-center text-obsidian text-sm font-bold" style={{clipPath:'polygon(0 0, 78% 0, 100% 22%, 100% 78%, 78% 100%, 0 100%)'}}>HM</div>
            <span className="text-cream">HMorix</span>
          </Link>
          <h1 className="font-display text-2xl font-bold text-cream mb-2">Verify your account</h1>
          <p className="text-sm text-cream/50">Enter the 6-digit code sent to your email</p>
        </div>

        <div className="p-8 bg-obsidian-2 border border-glass-border rounded-[16px]">
          <div className="flex gap-3 justify-center mb-6">
            {code.map((digit, i) => (
              <input key={i} id={`code-${i}`} type="text" maxLength={1} value={digit} onChange={e => handleChange(i, e.target.value)} className="w-12 h-14 bg-obsidian border border-glass-border rounded-[8px] text-center text-xl font-display font-bold text-cream outline-none focus:border-[#C8FF00] transition-colors" />
            ))}
          </div>
          <button className="w-full py-3 bg-[#C8FF00] text-obsidian font-display font-semibold rounded-[4px] hover:opacity-90 transition-all">Verify</button>
          <p className="text-center text-sm text-cream/40 mt-4">
            Didn't receive the code? <button className="text-[#C8FF00] hover:underline">Resend</button>
          </p>
        </div>

        <Link to="/signin" className="block text-center text-sm text-cream/40 mt-6 hover:text-cream transition-colors">
          Back to Sign In
        </Link>
      </div>
    </div>
  )
}
