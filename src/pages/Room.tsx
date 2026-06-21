import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'

interface RoomInfo {
  name: string
  description: string
  placeholder: string
}

const ROOMS_DATA: Record<string, RoomInfo> = {
  'bedroom': {
    name: "Bedroom",
    description: "Heirloom linen throws, organic pillow covers, and cozy organic textures designed for rest.",
    placeholder: "Additional organic cotton sheets and washed-linen duvets coming soon."
  },
  'bathroom': {
    name: "Bathroom",
    description: "Ultra-absorbent waffle bath towels, Turkish cotton basics, and bath organizers.",
    placeholder: "Solid teak bathtub caddies and linen bath mats currently in development."
  },
  'living-space': {
    name: "Living Space",
    description: "Artisanal ceramic pitchers, grounded mushroom lamps, raw travertine incense holders, and natural soy candles.",
    placeholder: "Sculptural objects, stoneware table settings, and everyday glassware coming soon."
  },
  'smart-living': {
    name: "Smart Living",
    description: "Magnetic key holders and minimal oak organizers that bring warm functionality to your daily flow.",
    placeholder: "Solid wood smart accessories, custom key hangers, and tech-friendly organizers in development."
  }
}

export const Room: React.FC = () => {
  const { roomSlug } = useParams<{ roomSlug: string }>()
  const navigate = useNavigate()

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [roomSlug])

  const slug = roomSlug?.toLowerCase() || ''
  const roomInfo = ROOMS_DATA[slug]

  if (!roomInfo) {
    return (
      <div className="bg-brand-cream min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h2 className="font-serif text-2xl text-brand-slate font-medium">Room Not Found</h2>
        <p className="text-sm text-brand-slate/60 mt-2 max-w-sm">
          The space you are looking for is currently in curation.
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

  // Filter products by room name
  const roomProducts = products.filter((p) => p.room.toLowerCase() === roomInfo.name.toLowerCase())

  return (
    <div className="bg-brand-cream min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-brand-slate/55 mb-8">
          <Link to="/" className="hover:text-brand-terracotta transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-slate font-medium">{roomInfo.name}</span>
        </nav>

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-slate hover:text-brand-terracotta transition-colors mb-12 focus:outline-none"
        >
          <ArrowLeft size={14} />
          <span>Collection Overview</span>
        </button>

        {/* Room Header Banner */}
        <div className="border-b border-brand-grey/20 pb-8 mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">
            Atelier Spaces
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-slate font-medium leading-tight">
            The {roomInfo.name}
          </h1>
          <p className="text-xs sm:text-sm text-brand-slate/60 max-w-3xl leading-relaxed">
            {roomInfo.description}
          </p>
        </div>

        {/* Room Products Catalog */}
        <div className="mb-20">
          {roomProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {roomProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-brand-grey/30 bg-brand-cream/10 px-6 py-16 text-center rounded-none max-w-lg mx-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-slate/50">
                {roomInfo.name} Essentials Coming Soon
              </p>
              <p className="text-[11px] text-brand-slate/40 mt-2 italic max-w-sm mx-auto leading-relaxed">
                {roomInfo.placeholder}
              </p>
              <Link
                to="/"
                className="mt-6 inline-block px-6 py-3 bg-brand-slate text-white text-[10px] font-semibold uppercase tracking-widest hover:bg-brand-terracotta transition-colors rounded-none"
              >
                Browse Available Pieces
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
