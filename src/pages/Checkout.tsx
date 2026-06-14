import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ShieldCheck, CreditCard, MapPin, Truck, ArrowLeft, Loader2, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'

export const Checkout: React.FC = () => {
  const { cartItems, cartTotal, clearCart } = useCart()

  // Form states
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expDate, setExpDate] = useState('')
  const [cvv, setCvv] = useState('')

  // Processing states
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [orderId, setOrderId] = useState('')

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment gateway delay (e.g. Stripe processing)
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
      setOrderId('LWR-' + Math.floor(100000 + Math.random() * 900000))
      clearCart() // empty cart on success
    }, 2000)
  }

  // Calculate taxes (mock 8%) and total
  const estimatedTax = Math.round(cartTotal * 0.08 * 100) / 100
  const finalTotal = Math.round((cartTotal + estimatedTax) * 100) / 100

  if (isSuccess) {
    return (
      <div className="bg-brand-cream min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-xl w-full bg-white border border-brand-grey/25 p-8 sm:p-12 text-center space-y-8 shadow-md">
          <div className="flex justify-center">
            <CheckCircle size={64} className="text-brand-terracotta animate-bounce" />
          </div>
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
              Thank You For Sourcing With Us
            </span>
            <h1 className="font-serif text-3xl text-brand-slate font-medium">Order Placed Successfully</h1>
            <p className="text-xs font-mono text-brand-slate/60 pt-1">
              Order ID: <span className="font-bold text-brand-slate">{orderId}</span>
            </p>
          </div>

          <p className="text-sm text-brand-slate/75 leading-relaxed">
            We've sent a detailed confirmation invoice to <span className="font-semibold text-brand-slate">{email}</span>. Your carbon-neutral package will be prepared at our workshop and shipped shortly.
          </p>

          <div className="border-t border-brand-grey/15 pt-6 space-y-4 text-left max-w-sm mx-auto">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-slate">Shipping Details</h3>
            <p className="text-xs text-brand-slate/80 leading-relaxed">
              {firstName} {lastName}<br />
              {address}<br />
              {city}, {zipCode}
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-slate text-white text-xs font-semibold uppercase tracking-widest hover:bg-brand-terracotta transition-colors rounded-none"
            >
              <span>Back To Home</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-brand-cream min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10 border-b border-brand-grey/20 pb-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">Secure Checkout</span>
            <h1 className="font-serif text-2xl sm:text-3xl text-brand-slate font-medium">Complete Your Order</h1>
          </div>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-slate hover:text-brand-terracotta transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Shopping</span>
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white border border-brand-grey/25 p-8">
            <h2 className="font-serif text-xl text-brand-slate font-medium">No items in your checkout</h2>
            <p className="text-xs text-brand-slate/60 mt-2">Add some curated goods first to proceed.</p>
            <Link
              to="/"
              className="mt-6 inline-block px-6 py-3 bg-brand-slate text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-terracotta transition-colors rounded-none"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Section */}
            <form onSubmit={handleCheckoutSubmit} className="lg:col-span-7 space-y-8">
              
              {/* Shipping Address */}
              <div className="bg-white border border-brand-grey/15 p-6 sm:p-8 space-y-6">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-slate flex items-center gap-2 border-b border-brand-grey/10 pb-4">
                  <MapPin size={16} className="text-brand-terracotta" />
                  <span>1. Shipping Details</span>
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-brand-slate/75 mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full bg-brand-cream/50 border border-brand-grey/40 px-3 py-2.5 text-xs text-brand-slate focus:outline-none focus:border-brand-terracotta transition-colors rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-brand-slate/75 mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full bg-brand-cream/50 border border-brand-grey/40 px-3 py-2.5 text-xs text-brand-slate focus:outline-none focus:border-brand-terracotta transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-brand-slate/75 mb-1">Email Address (for receipts)</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-brand-cream/50 border border-brand-grey/40 px-3 py-2.5 text-xs text-brand-slate focus:outline-none focus:border-brand-terracotta transition-colors rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-brand-slate/75 mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-brand-cream/50 border border-brand-grey/40 px-3 py-2.5 text-xs text-brand-slate focus:outline-none focus:border-brand-terracotta transition-colors rounded-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-brand-slate/75 mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-brand-cream/50 border border-brand-grey/40 px-3 py-2.5 text-xs text-brand-slate focus:outline-none focus:border-brand-terracotta transition-colors rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-brand-slate/75 mb-1">ZIP / Postal Code</label>
                    <input
                      type="text"
                      required
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full bg-brand-cream/50 border border-brand-grey/40 px-3 py-2.5 text-xs text-brand-slate focus:outline-none focus:border-brand-terracotta transition-colors rounded-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment details */}
              <div className="bg-white border border-brand-grey/15 p-6 sm:p-8 space-y-6">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-slate flex items-center gap-2 border-b border-brand-grey/10 pb-4">
                  <CreditCard size={16} className="text-brand-terracotta" />
                  <span>2. Payment Information</span>
                </h2>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-brand-slate/75 mb-1">Cardholder Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-brand-cream/50 border border-brand-grey/40 px-3 py-2.5 text-xs text-brand-slate focus:outline-none focus:border-brand-terracotta transition-colors rounded-none"
                    placeholder="Same as shipping"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-brand-slate/75 mb-1">Card Number</label>
                  <input
                    type="text"
                    required
                    pattern="[0-9]{16,19}"
                    maxLength={19}
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                    className="w-full bg-brand-cream/50 border border-brand-grey/40 px-3 py-2.5 text-xs text-brand-slate focus:outline-none focus:border-brand-terracotta transition-colors rounded-none font-mono"
                    placeholder="1234 5678 9101 1121"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-brand-slate/75 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      required
                      maxLength={5}
                      value={expDate}
                      onChange={(e) => setExpDate(e.target.value)}
                      className="w-full bg-brand-cream/50 border border-brand-grey/40 px-3 py-2.5 text-xs text-brand-slate focus:outline-none focus:border-brand-terracotta transition-colors rounded-none font-mono"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-brand-slate/75 mb-1">CVV / CVC</label>
                    <input
                      type="password"
                      required
                      maxLength={4}
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                      className="w-full bg-brand-cream/50 border border-brand-grey/40 px-3 py-2.5 text-xs text-brand-slate focus:outline-none focus:border-brand-terracotta transition-colors rounded-none font-mono"
                      placeholder="•••"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-3 bg-brand-slate text-white py-4 text-xs font-semibold uppercase tracking-widest hover:bg-brand-terracotta disabled:bg-brand-grey/50 transition-all duration-300 rounded-none cursor-pointer shadow-md"
              >
                {isProcessing ? (
                  <>
                    <Loader2 size={16} className="animate-spin text-brand-cream" />
                    <span>Processing Securing Checkout...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck size={16} />
                    <span>Pay Securely ${finalTotal}</span>
                  </>
                )}
              </button>
            </form>

            {/* Order Summary Column */}
            <div className="lg:col-span-5 bg-white border border-brand-grey/15 p-6 sm:p-8 space-y-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-slate border-b border-brand-grey/10 pb-4">
                Order Summary
              </h2>

              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-xs">
                    <div className="flex gap-3 items-center">
                      <div className="h-14 w-11 bg-brand-grey/10 border border-brand-grey/15 flex-shrink-0 overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-serif font-medium text-brand-slate line-clamp-1">{item.title}</h4>
                        <p className="text-brand-slate/50">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-mono text-brand-slate">${item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Calculations */}
              <div className="border-t border-brand-grey/20 pt-4 space-y-2.5 text-xs">
                <div className="flex justify-between text-brand-slate/85">
                  <span>Bag Subtotal</span>
                  <span className="font-mono">${cartTotal}</span>
                </div>
                <div className="flex justify-between text-brand-slate/85">
                  <span className="flex items-center gap-1">
                    <Truck size={12} className="text-brand-terracotta" />
                    <span>Sourcing Courier</span>
                  </span>
                  <span className="text-brand-terracotta font-semibold uppercase tracking-wider text-[10px]">Free (Carbon-Neutral)</span>
                </div>
                <div className="flex justify-between text-brand-slate/85 pb-2.5 border-b border-brand-grey/10">
                  <span>Estimated Taxes</span>
                  <span className="font-mono">${estimatedTax}</span>
                </div>
                <div className="flex justify-between text-brand-slate font-bold text-sm pt-2">
                  <span className="font-serif">Total Due</span>
                  <span className="font-mono text-base">${finalTotal}</span>
                </div>
              </div>

              {/* Value reinforcement text */}
              <div className="bg-brand-cream/40 p-4 border border-brand-grey/10 text-center">
                <p className="text-[10px] text-brand-slate/75 leading-relaxed">
                  🔒 Encrypted 256-Bit SSL Payment Guarantee. Your card details are handled in complete alignment with PCI-DSS compliance standards.
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}
