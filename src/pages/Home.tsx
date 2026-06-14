import React from 'react'
import { ArrowDown, Percent, Heart, Award } from 'lucide-react'
import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'

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
            Why pay 5x more for a luxury logo when you can have the exact same heirloom quality direct from the ateliers? We curate beautiful, durable pieces designed to elevate daily rituals — keeping margins fair and quality absolute.
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
              <Percent size={24} />
            </div>
            <h3 className="font-serif text-lg font-medium text-brand-slate">Honest Margin</h3>
            <p className="text-xs text-brand-slate/70 leading-relaxed max-w-xs">
              Traditional brands mark up products 5–10x. We cap our margins at 2–3x to keep premium living accessible.
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-brand-grey/20 pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold">The Core Edition</span>
            <h2 className="font-serif text-3xl text-brand-slate font-medium">Curated Essentials</h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-slate/60 max-w-sm mt-4 md:mt-0 leading-relaxed">
            A small, carefully sourced batch of highly tactile home accessories. Woven, thrown, and carved by historic partner ateliers.
          </p>
        </div>

        {/* Product Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Our Story Section - The Monnat Family Backstory */}
      <section id="philosophy" className="bg-brand-slate text-brand-cream py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-grey/25">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-terracotta font-semibold block">Behind the Brand</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium leading-tight">
              Made for living, by a real family.
            </h2>
            <p className="text-sm text-brand-grey/80 leading-relaxed">
              Monnat Living isn't a faceless corporation. We are a real family—two working professionals (an ex-CEO and a company director), an energetic three-year-old, and two very curious cats—who recently bought our first flat. Like many of you, we appreciate premium design but felt the real pinch of the cost-of-living squeeze.
            </p>
            <p className="text-sm text-brand-grey/80 leading-relaxed">
              When furnishing our home, we wanted beautiful, long-lasting pieces—organic French flax blankets that withstand cats on the bed, stoneware pitchers that can survive a toddler's busy mornings, and travertine stone with raw geological character. But we refused to pay a 10x luxury markup just for a fancy logo.
            </p>
            <p className="text-sm text-brand-grey/80 leading-relaxed">
              We started Monnat Living to solve our own problem: providing beautifully designed, tactile home essentials crafted by historic partner ateliers, offered at honest margins. No nonsense, just beautifully made goods built for real, everyday life.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white/5 border border-brand-grey/20 p-8 sm:p-10 space-y-6 backdrop-blur-xs">
            <h3 className="font-serif text-2xl text-white font-medium tracking-wide leading-relaxed">
              "We wanted a lovely home without the luxury premium."
            </h3>
            <p className="text-xs text-brand-grey/70 italic leading-relaxed">
              "Surrounding ourselves with natural textures brought a quiet grounding energy into our chaotic mornings. We wanted that same warmth for your home—priced so it doesn't make you wince."
            </p>
            <div className="pt-4 border-t border-brand-grey/15 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-grey/25 bg-brand-cream/10">
                <img
                  src="/product-lifestyle-stoneware.jpg"
                  alt="Monnat family table detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">The Monnat Family</h4>
                <p className="text-[10px] text-brand-grey/60 mt-0.5">Founders, Monnat Living</p>
              </div>
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
