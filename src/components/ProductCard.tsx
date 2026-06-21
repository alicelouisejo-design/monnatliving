import React from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import type { Product } from '../data/products'
import { useCart } from '../context/CartContext'

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault() // prevent navigating to product detail when clicking the quick-add button
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
    })
  }

  return (
    <div className="group flex flex-col bg-white border border-brand-grey/15 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-brand-grey/40">
      {/* Product Image Link */}
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden aspect-4/3 bg-brand-cream">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Quick Add Overlay Button */}
        <div className="absolute inset-0 bg-brand-ink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
          <button
            onClick={handleAddClick}
            className="flex items-center justify-center h-10 w-10 bg-brand-slate text-white hover:bg-brand-terracotta transition-colors shadow-lg focus:outline-none rounded-none"
            aria-label={`Add ${product.title} to bag`}
          >
            <Plus size={20} />
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-5 bg-white">
        <span className="text-[10px] uppercase tracking-widest text-brand-slate/50 font-semibold">
          {product.category}
        </span>
        
        <Link to={`/product/${product.id}`} className="mt-2 block">
          <h3 className="font-serif text-base font-medium text-brand-slate hover:text-brand-terracotta transition-colors line-clamp-1">
            {product.title}
          </h3>
        </Link>
        
        <p className="mt-1.5 text-xs text-brand-slate/65 line-clamp-2 min-h-[2rem]">
          {product.subtitle}
        </p>
        
        <div className="mt-4 pt-4 border-t border-brand-grey/10 flex items-center justify-between">
          <span className="font-mono text-sm font-semibold text-brand-slate">
            ${product.price}
          </span>
          
          <button
            onClick={handleAddClick}
            className="text-xs font-semibold text-brand-slate hover:text-brand-terracotta transition-colors uppercase tracking-widest focus:outline-none"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  )
}
