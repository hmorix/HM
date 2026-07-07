import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <span className="label-mono">Contact</span>
        <h1 className="section-title mt-3 mb-16">Let's talk</h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold mb-4">Get in touch</h2>
            <p className="text-cream/60 mb-8">Ready to start your project? Have questions? We'd love to hear from you.</p>
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email', value: 'hello@hmorix.com' },
                { icon: Phone, title: 'Phone', value: '+1 (555) 000-0000' },
                { icon: MapPin, title: 'Office', value: 'San Francisco, CA' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C8FF00]/10 border border-[rgba(200,255,0,0.2)] rounded-[4px] flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-[#C8FF00]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-sm text-cream/50">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 p-8 bg-obsidian-2 border border-glass-border rounded-[24px]">
            {!submitted ? (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-cream/60 mb-1.5">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-cream/60 mb-1.5">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-cream/60 mb-1.5">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-cream/60 mb-1.5">Service Needed</label>
                  <select className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00]">
                    <option>Web Development</option>
                    <option>AI Solutions</option>
                    <option>Cyber Security</option>
                    <option>Smart Home</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-cream/60 mb-1.5">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-obsidian border border-glass-border rounded-[4px] text-sm text-cream outline-none focus:border-[#C8FF00] resize-none" />
                </div>
                <button type="submit" className="w-full py-3 bg-[#C8FF00] text-obsidian font-display font-semibold rounded-[4px] hover:opacity-90 transition-all">Send Message</button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-display text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-sm text-cream/50">We'll be in touch within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
