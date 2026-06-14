import React, { useRef, useEffect } from 'react'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
  } = useCart()

  // Find Stripe payment link for the primary checkout item (first item in cart)
  const checkoutUrl = cartItems.length > 0 
    ? products.find((p) => p.id === cartItems[0].id)?.stripeUrl || '#'
    : '#'

  const drawerRef = useRef<HTMLDivElement>(null)

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsCartOpen(false)
    }
    if (isCartOpen) {
      window.addEventListener('keydown', handleKeyDown)
      // Prevent body scrolling when cart is open
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isCartOpen, setIsCartOpen])

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-ink/40 backdrop-blur-xs transition-opacity duration-300 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        {/* Drawer Panel */}
        <div
          ref={drawerRef}
          className="w-screen max-w-md transform bg-brand-cream shadow-2xl transition-transform duration-300 ease-in-out border-l border-brand-grey/20 flex flex-col h-full animate-slide-left"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-brand-grey/20 px-4 py-6 sm:px-6">
            <h2 className="text-lg font-serif font-medium text-brand-slate tracking-wide flex items-center gap-2">
              <ShoppingBag size={20} />
              Shopping Bag
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="rounded-md text-brand-slate hover:text-brand-terracotta transition-colors focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="p-4 bg-brand-grey/10 rounded-full text-brand-grey">
                  <ShoppingBag size={40} />
                </div>
                <div>
                  <h3 className="text-base font-serif font-medium text-brand-slate">Your bag is empty</h3>
                  <p className="text-sm text-brand-slate/60 mt-1">
                    Fill it with beautiful, thoughtfully made home pieces.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 px-6 py-2.5 bg-brand-slate text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-terracotta transition-colors rounded-none"
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex py-2 border-b border-brand-grey/10 last:border-0">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-brand-grey/10 border border-brand-grey/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-sm font-medium text-brand-slate">
                        <h3 className="font-serif hover:text-brand-terracotta transition-colors line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="ml-4 font-mono">${item.price}</p>
                      </div>
                      {item.color && (
                        <p className="mt-1 text-xs text-brand-slate/60">Color: {item.color}</p>
                      )}
                    </div>

                    <div className="flex flex-1 items-end justify-between text-sm">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-brand-grey/40 rounded-none bg-white">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-brand-slate hover:bg-brand-cream transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 py-1 font-mono text-xs">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-brand-slate hover:bg-brand-cream transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-1 text-xs font-semibold text-brand-terracotta/85 hover:text-brand-terracotta transition-colors uppercase tracking-wider focus:outline-none"
                      >
                        <Trash2 size={14} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer - Checkout Details */}
          {cartItems.length > 0 && (
            <div className="border-t border-brand-grey/20 px-4 py-6 sm:px-6 bg-brand-cream/90">
              <div className="flex justify-between text-base font-medium text-brand-slate">
                <p className="font-serif tracking-wide">Subtotal</p>
                <p className="font-mono text-lg font-semibold">${cartTotal}</p>
              </div>
              <p className="mt-1 text-xs text-brand-slate/50">
                Shipping and taxes calculated at checkout.
              </p>
              
              <div className="mt-6">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsCartOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-brand-slate py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-xs hover:bg-brand-terracotta transition-all duration-300 rounded-none group text-center"
                >
                  <span>Proceed To Checkout</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="mt-4 flex justify-center text-center text-xs text-brand-slate/60">
                <p>
                  or{' '}
                  <button
                    type="button"
                    className="font-medium text-brand-terracotta hover:underline focus:outline-none"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue Shopping
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
