import React, { useState } from 'react'
import { ArrowRight, Mail, ShieldCheck } from 'lucide-react'

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer id="footer" className="bg-brand-slate text-brand-cream/90 pt-16 pb-12 border-t border-brand-grey/25 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand/Philosophy Column */}
          <div className="md:col-span-2 space-y-6">
            <span className="font-serif text-2xl tracking-widest text-white font-semibold uppercase block">
              monnat living
            </span>
            <p className="text-sm text-brand-grey/80 leading-relaxed max-w-sm">
              We curate genuinely beautiful, durable, and thoughtfully designed home goods without the traditional 5–10x luxury markup. Because wanting a considered home and being smart with money shouldn't be at odds.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-grey/60">
              <ShieldCheck size={16} className="text-brand-terracotta" />
              <span>Genuinely premium. Honest pricing. Real value.</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#collection" className="text-brand-grey/85 hover:text-white transition-colors">
                  Shop Collection
                </a>
              </li>
              <li>
                <a href="#philosophy" className="text-brand-grey/85 hover:text-white transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#about" className="text-brand-grey/85 hover:text-white transition-colors">
                  The Story
                </a>
              </li>
              <li>
                <span className="text-brand-grey/50 cursor-not-allowed">
                  Journal (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">The Newsletter</h4>
            <p className="text-xs text-brand-grey/70 leading-relaxed">
              Be the first to hear about curated product drops and limited editions. Strictly values-first, absolutely zero spam.
            </p>
            
            {subscribed ? (
              <div className="p-4 bg-white/5 border border-brand-terracotta/30 flex items-center gap-3 animate-fade-in">
                <Mail size={16} className="text-brand-terracotta" />
                <span className="text-xs text-white">Thank you. You are on the list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-brand-grey/40 px-4 py-2.5 text-xs text-white placeholder-brand-grey/40 focus:outline-none focus:border-brand-terracotta transition-colors rounded-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-brand-terracotta hover:bg-white hover:text-brand-slate px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 rounded-none shrink-0"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-16 pt-8 border-t border-brand-grey/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-grey/50">
          <p>© {new Date().getFullYear()} Monnat Living. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Stripe Guarantee</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
