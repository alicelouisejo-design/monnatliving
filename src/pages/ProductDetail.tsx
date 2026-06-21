import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Plus, Minus, ShieldCheck, Truck, RefreshCw, ShoppingBag } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { ProductCard } from '../components/ProductCard'

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  // Find current product
  const product = products.find((p) => p.id === id)
  const [activeImage, setActiveImage] = useState(product?.images[0] || '')

  // Scroll to top on mount / product change
  useEffect(() => {
    window.scrollTo(0, 0)
    setQuantity(1)
    if (product) {
      setActiveImage(product.images[0])
    }
  }, [id, product])

  if (!product) {
    return (
      <div className="bg-brand-cream min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h2 className="font-serif text-2xl text-brand-slate font-medium">Piece Not Found</h2>
        <p className="text-sm text-brand-slate/60 mt-2 max-w-sm">
          We curate small, limited drops. This particular item might have sold out or been archived.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-brand-slate text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-terracotta transition-colors rounded-none"
        >
          Return to Collection
        </Link>
      </div>
    )
  }

  // Get related products (same category or just other items)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3)

  const handleAddToCart = () => {
    // Add multiple quantities
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
      })
    }
  }

  return (
    <div className="bg-brand-cream min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-brand-slate/55 mb-10">
          <Link to="/" className="hover:text-brand-terracotta transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-slate/40">{product.category}</span>
          <span>/</span>
          <span className="text-brand-slate font-medium line-clamp-1">{product.title}</span>
        </nav>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-slate hover:text-brand-terracotta transition-colors mb-8 focus:outline-none"
        >
          <ArrowLeft size={14} />
          <span>Back</span>
        </button>

        {/* Main Product Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Image Container */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white border border-brand-grey/15 overflow-hidden">
              <div className="aspect-4/3 overflow-hidden bg-brand-cream">
                <img
                  src={activeImage || product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
              </div>
            </div>
            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`aspect-4/3 overflow-hidden bg-white border cursor-pointer transition-all ${
                      activeImage === img
                        ? 'border-brand-terracotta ring-1 ring-brand-terracotta'
                        : 'border-brand-grey/15 hover:border-brand-grey/40'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} view ${idx + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
                {product.category}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-slate font-medium leading-tight">
                {product.title}
              </h1>
              <p className="text-xs sm:text-sm text-brand-slate/65 italic">
                {product.subtitle}
              </p>
              <div className="pt-2">
                <span className="font-mono text-xl sm:text-2xl font-bold text-brand-slate">
                  ${product.price}
                </span>
              </div>
            </div>

            <div className="border-t border-brand-grey/20 pt-6">
              <p className="text-sm text-brand-slate/85 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Actions Panel */}
            <div className="border-t border-brand-grey/20 pt-6 space-y-6">
              
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                {/* Quantity Adjustment */}
                <div className="flex items-center justify-between border border-brand-grey/40 bg-white px-3 py-3 w-full sm:w-32 shrink-0">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-brand-slate hover:text-brand-terracotta transition-colors focus:outline-none p-1"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-mono text-sm font-semibold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-brand-slate hover:text-brand-terracotta transition-colors focus:outline-none p-1"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                {/* Add To Bag Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 border border-brand-slate py-4 text-xs font-semibold uppercase tracking-widest text-brand-slate hover:bg-brand-slate hover:text-white transition-colors rounded-none"
                >
                  <ShoppingBag size={14} />
                  <span>Add To Bag</span>
                </button>

                {/* Buy Now Button */}
                <a
                  href={product.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-terracotta py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-brand-slate transition-colors shadow-xs rounded-none text-center"
                >
                  <span>Buy Now</span>
                </a>
              </div>
            </div>

            {/* Quality/Service Highlights */}
            <div className="border-t border-brand-grey/20 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <ShieldCheck size={20} className="text-brand-terracotta shrink-0" />
                <div className="text-xs">
                  <h4 className="font-semibold text-brand-slate">Direct Craft</h4>
                  <p className="text-brand-slate/60 mt-0.5">Ethically made</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Truck size={20} className="text-brand-terracotta shrink-0" />
                <div className="text-xs">
                  <h4 className="font-semibold text-brand-slate">Carbon Neutral</h4>
                  <p className="text-brand-slate/60 mt-0.5">Eco-friendly transit</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <RefreshCw size={18} className="text-brand-terracotta shrink-0" />
                <div className="text-xs">
                  <h4 className="font-semibold text-brand-slate">30-Day Trial</h4>
                  <p className="text-brand-slate/60 mt-0.5">Risk-free returns</p>
                </div>
              </div>
            </div>

            {/* Technical Specifications Dropdown / Info List */}
            <div className="border-t border-brand-grey/20 pt-6 space-y-4">
              <h3 className="font-serif text-base font-semibold text-brand-slate">Craft Details</h3>
              <ul className="space-y-2 text-xs text-brand-slate/80">
                <li className="flex justify-between py-1.5 border-b border-brand-grey/10">
                  <span className="font-medium">Materials</span>
                  <span className="text-right">{product.materials}</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-brand-grey/10">
                  <span className="font-medium">Dimensions</span>
                  <span className="text-right">{product.dimensions}</span>
                </li>
              </ul>
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-slate/75">Atelier Highlights</h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-brand-slate/75 leading-relaxed pl-1">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* RELATED PRODUCTS SECTION */}
        <section className="mt-24 pt-16 border-t border-brand-grey/20">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">Curated Pairings</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-slate font-medium">Complete The Space</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
