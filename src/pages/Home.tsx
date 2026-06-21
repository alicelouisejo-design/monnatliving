import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, Globe, Heart, Award } from 'lucide-react'
import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'

const ROOM_SECTIONS = [
  {
    name: "Bedroom",
    description: "Heirloom linen throws, organic pillow covers, and cozy organic textures designed for rest.",
    placeholder: "Additional organic cotton sheets and washed-linen duvets coming soon."
  },
  {
    name: "Bathroom",
    description: "Ultra-absorbent waffle bath towels, Turkish cotton basics, and bath organizers.",
    placeholder: "Solid teak bathtub caddies and linen bath mats currently in development."
  },
  {
    name: "Living Space",
    description: "Artisanal ceramic pitchers, grounded mushroom lamps, raw travertine incense holders, and natural soy candles.",
    placeholder: "Sculptural objects, stoneware table settings, and everyday glassware coming soon."
  },
  {
    name: "Smart Living",
    description: "Magnetic key holders and minimal oak organizers that bring warm functionality to your daily flow.",
    placeholder: "Solid wood smart accessories, custom key hangers, and tech-friendly organizers in development."
  }
]

export const Home: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const scrollToProducts = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-brand-cream min-h-screen">
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center justify-center text-center max-w-7xl mx-auto">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          
          {/* Subtle Tagline */}
          <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold bg-brand-terracotta/10 px-4 py-1.5 rounded-full inline-block">
            Warm Minimalism • Direct to Source
          </span>
          
          {/* Main Hero Header */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-slate font-medium tracking-tight leading-tight">
            Genuinely premium home goods.<br className="hidden sm:inline" />
            <span className="italic text-brand-terracotta">Honestly priced.</span>
          </h1>
          
          {/* Supportive Copy */}
          <p className="text-base sm:text-lg text-brand-slate/85 max-w-2xl mx-auto leading-relaxed">
            Every piece in our collection is chosen for the way it lives — the weight of the linen, the warmth of the stone, the way morning light catches the glaze. Because a beautiful home is built slowly, piece by considered piece.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={scrollToProducts}
              className="w-full sm:w-auto px-8 py-4 bg-brand-slate text-white text-xs font-semibold uppercase tracking-widest hover:bg-brand-terracotta transition-all duration-300 rounded-none shadow-sm"
            >
              Explore Collection
            </button>
            <a
              href="#philosophy"
              className="w-full sm:w-auto text-center px-8 py-4 bg-transparent border border-brand-slate/40 text-brand-slate text-xs font-semibold uppercase tracking-widest hover:bg-brand-slate hover:text-white transition-all duration-300 rounded-none"
            >
              Our Philosophy
            </a>
          </div>
          
          {/* Down Indicator */}
          <div className="pt-8 flex justify-center">
            <button
              onClick={scrollToProducts}
              className="text-brand-slate/40 hover:text-brand-terracotta transition-colors animate-bounce p-2"
              aria-label="Scroll down"
            >
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Feature Value Props Grid */}
      <section className="bg-white border-y border-brand-grey/25 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div className="space-y-3 p-4 flex flex-col items-center">
            <div className="p-3 bg-brand-cream rounded-full text-brand-terracotta">
              <Award size={24} />
            </div>
            <h3 className="font-serif text-lg font-medium text-brand-slate">Premium Materials</h3>
            <p className="text-xs text-brand-slate/70 leading-relaxed max-w-xs">
              French flax, solid Italian travertine, Vermont clays, and organic Turkish cotton. We accept no shortcuts.
            </p>
          </div>

          <div className="space-y-3 p-4 flex flex-col items-center">
            <div className="p-3 bg-brand-cream rounded-full text-brand-terracotta">
              <Globe size={24} />
            </div>
            <h3 className="font-serif text-lg font-medium text-brand-slate">Direct from the Atelier</h3>
            <p className="text-xs text-brand-slate/70 leading-relaxed max-w-xs">
              We work directly with family-run mills and artisan studios across Europe — sourcing the same quality as heritage brands, without the layers in between.
            </p>
          </div>

          <div className="space-y-3 p-4 flex flex-col items-center">
            <div className="p-3 bg-brand-cream rounded-full text-brand-terracotta">
              <Heart size={24} />
            </div>
            <h3 className="font-serif text-lg font-medium text-brand-slate">Considered Design</h3>
            <p className="text-xs text-brand-slate/70 leading-relaxed max-w-xs">
              Warm minimalism that embraces organic textures, soft tones, and daily durability. Made to be loved for decades.
            </p>
          </div>
          
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section ref={scrollRef} id="collection" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-brand-grey/20 pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">The Core Edition</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-slate font-medium">Curated Essentials</h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-slate/60 max-w-sm mt-4 md:mt-0 leading-relaxed">
            A small, carefully sourced batch of highly tactile home accessories. Woven, thrown, and carved by historic partner ateliers, organized by room.
          </p>
        </div>

        {/* Grouped by Room Sections */}
        <div className="space-y-16">
          {ROOM_SECTIONS.map((room) => {
            const roomProducts = products.filter((p) => p.room === room.name)
            const slug = room.name.toLowerCase().replace(' ', '-')
            
            return (
              <div key={room.name} className="scroll-mt-24 border-b border-brand-grey/10 pb-12 last:border-b-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-brand-slate font-medium tracking-tight">
                      {room.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-slate/60 mt-1 max-w-2xl">
                      {room.description}
                    </p>
                  </div>
                  <Link
                    to={`/room/${slug}`}
                    className="text-xs font-semibold uppercase tracking-widest text-brand-terracotta hover:text-brand-slate transition-all duration-300 whitespace-nowrap shrink-0 border-b border-brand-terracotta/35 pb-0.5 hover:border-brand-slate"
                  >
                    Explore {room.name} &rarr;
                  </Link>
                </div>

                {roomProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {roomProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="border border-dashed border-brand-grey/30 bg-brand-cream/10 px-6 py-10 text-center rounded-none max-w-md">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-slate/50">
                      {room.name} Essentials Coming Soon
                    </p>
                    <p className="text-[11px] text-brand-slate/40 mt-1 italic">
                      {room.placeholder}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Our Story Section */}
      <section id="philosophy" className="bg-brand-cream/40 border-y border-brand-grey/15 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Large Warm Imagery */}
          <div className="lg:col-span-5 aspect-4/3 lg:aspect-square bg-brand-grey/10 overflow-hidden border border-brand-grey/15 shadow-sm">
            <img
              src="/product-lifestyle-stoneware.jpg"
              alt="Monnat Living warm home detail"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right Column - Warm Personal Story */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold block">Our Story</span>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-slate font-medium leading-tight">
              A home should feel like home.<br />
              <span className="italic text-brand-terracotta">Not a showroom.</span>
            </h2>
            
            <div className="space-y-5 text-brand-slate/85 leading-relaxed text-sm">
              <p>
                Monnat Living was born in a first flat — two working professionals, a three-year-old, and two cats, trying to make a home without overpaying for logos. We realised that quality home goods shouldn't require a trust fund.
              </p>
              <p>
                So we set out to find the best-made pieces from the best workshops — French flax linen, Portuguese stoneware, Turkish cotton — and price them so you can actually live with them.
              </p>
              <p className="font-serif text-base sm:text-lg text-brand-terracotta italic font-medium pt-2">
                "Because a beautiful home and being smart with money shouldn't be at odds."
              </p>
            </div>
            
            <div className="pt-4 border-t border-brand-grey/15 flex items-center gap-3 text-xs text-brand-slate/60">
              <span className="font-semibold uppercase tracking-wider text-brand-slate text-[10px]">The Monnat Family</span>
              <span>•</span>
              <span>Founders, Monnat Living</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* Story / Context Section */}
      <section id="about" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Image grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square bg-brand-grey/10 overflow-hidden border border-brand-grey/15">
            <img
              src="/lifestyle-cat-couch.jpg"
              alt="Lived-in luxury - pet friendly linen"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="aspect-square bg-brand-grey/10 overflow-hidden translate-y-8 border border-brand-grey/15">
            <img
              src="/lifestyle-family-entryway.jpg"
              alt="Premium stoneware and toddler art"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="space-y-6 lg:pl-8 mt-12 lg:mt-0">
          <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold block">
            Crafted with Intention
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-slate font-medium leading-tight">
            Slow living with fewer, better pieces.
          </h2>
          <p className="text-sm text-brand-slate/85 leading-relaxed">
            Our homes are the physical containers of our daily lives. We believe that surrounding yourself with natural textures — organic flax, pure sandstone, cool travertine, and long-staple cotton — brings a quiet grounding energy into your daily routine.
          </p>
          <p className="text-sm text-brand-slate/85 leading-relaxed">
            We don't do seasonal trends or fast flash sales. We build and source slow editions designed to stand the test of time, maturing with character and aging with grace.
          </p>
          
          <div className="border-l-2 border-brand-terracotta pl-4 py-1 italic text-brand-slate/75 text-sm">
            \"Warm minimalism is the art of feeling cozy in an uncluttered space, where everything has an absolute reason to exist.\"
          </div>
        </div>
      </section>
      
    </div>
  )
}
