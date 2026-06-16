import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export const Header: React.FC = () => {
  const { cartCount, setIsCartOpen } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-cream/95 backdrop-blur-md border-b border-brand-grey/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-slate hover:text-brand-terracotta transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo / Wordmark */}
          <div className="flex-1 md:flex-none text-center md:text-left flex items-center">
            <Link to="/" className="inline-block">
              <img
                src="/monnat-living-logo.svg"
                alt="Monnat Living Logo"
                className="h-14 sm:h-16 w-auto hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            <Link
              to="/"
              className="text-sm font-medium tracking-wide text-brand-slate/90 hover:text-brand-terracotta transition-colors"
            >
              Collection
            </Link>
            <a
              href="#philosophy"
              className="text-sm font-medium tracking-wide text-brand-slate/90 hover:text-brand-terracotta transition-colors"
            >
              Our Philosophy
            </a>
            <a
              href="#about"
              className="text-sm font-medium tracking-wide text-brand-slate/90 hover:text-brand-terracotta transition-colors"
            >
              The Story
            </a>
            <a
              href="#footer"
              className="text-sm font-medium tracking-wide text-brand-slate/90 hover:text-brand-terracotta transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Search & Cart Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button
              className="text-brand-slate hover:text-brand-terracotta transition-colors focus:outline-none hidden sm:block"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center p-2 text-brand-slate hover:text-brand-terracotta transition-colors focus:outline-none"
              aria-label="Cart"
            >
              <ShoppingBag size={21} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-terracotta text-[10px] font-bold text-white animate-fade-in">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-cream border-b border-brand-grey/30 px-4 py-6 space-y-4 animate-slide-down">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium tracking-wide text-brand-slate hover:text-brand-terracotta transition-colors"
          >
            Collection
          </Link>
          <a
            href="#philosophy"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium tracking-wide text-brand-slate hover:text-brand-terracotta transition-colors"
          >
            Our Philosophy
          </a>
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium tracking-wide text-brand-slate hover:text-brand-terracotta transition-colors"
          >
            The Story
          </a>
          <a
            href="#footer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-medium tracking-wide text-brand-slate hover:text-brand-terracotta transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}
