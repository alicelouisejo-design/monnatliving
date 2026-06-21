export interface Product {
  id: string
  title: string
  subtitle: string
  price: number
  image: string
  category: string
  room: string
  description: string
  details: string[]
  materials: string
  dimensions: string
  stripeUrl: string
}

export const products: Product[] = [
  {
    id: "ribbed-glass-mushroom-lamp",
    title: "Ribbed Glass Mushroom Lamp",
    subtitle: "Hand-blown ribbed glass, rechargeable warm bedside light",
    price: 34.50,
    image: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?auto=format&fit=crop&w=800&q=80",
    category: "Lighting",
    room: "Living Space",
    description: "A quiet addition to your evening ritual. Hand-blown from thick, characterful ribbed glass, this rechargeable cordless lamp casts a soft, diffused glow that warms up any space. Featuring three dimmable brightness levels and a sleek minimal form, it combines retro-inspired charm with cordless convenience.",
    details: [
      "Hand-blown ribbed borosilicate glass",
      "Cordless and rechargeable via included USB-C cable",
      "Three-level touch dimming for customizable ambiance",
      "Up to 15 hours of continuous warm light per charge"
    ],
    materials: "Hand-blown Ribbed Glass",
    dimensions: "6\" Diameter x 9\" Height",
    stripeUrl: "https://buy.stripe.com/8x2dR9f2RcPU38Jd5J8Vi02"
  },
  {
    id: "gravity-salt-pepper-grinders",
    title: "Gravity Salt & Pepper Grinders",
    subtitle: "Automatic gravity-activated mill set with adjustable coarseness",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1594431151716-f0e77e2c96d1?auto=format&fit=crop&w=800&q=80",
    category: "Kitchen",
    room: "Smart Living",
    description: "A modern, one-handed cooking ritual. This set of two sleek, automatic mills features a gravity sensor that activates the grinder automatically when tilted downward—no buttons required. Built with a premium ceramic rotor that offers adjustable coarseness, it is a quiet, functional helper in the kitchen.",
    details: [
      "Gravity-activated: simply tilt to grind (one-handed operation)",
      "High-hardness ceramic grinding rotor (rust-free and durable)",
      "Adjustable coarseness from fine powder to coarse texture",
      "Warm LED light activates automatically during use"
    ],
    materials: "Stainless Steel, ABS, Ceramic Grinding Core",
    dimensions: "2.5\" Diameter x 7.8\" Height",
    stripeUrl: "https://buy.stripe.com/7sY3cvf2R2bg9x76Hl8Vi01"
  },
  {
    id: "swivel-faucet-aerator",
    title: "1080° Swivel Faucet Aerator",
    subtitle: "Sleek solid brass robotic-arm extension for standard taps",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1589778655364-2c2c0c6e3d4e?auto=format&fit=crop&w=800&q=80",
    category: "Bathroom",
    room: "Smart Living",
    description: "A modern, highly functional upgrade for your bathroom sink. This solid brass aerator features three rotating joints that allow a full 1080-degree swivel, making facial rinsing, hair washing, and basin cleaning effortless. Features two water flow modes: a soft oxygen bubble stream and a strong spray.",
    details: [
      "Premium solid brass construction with durable finish",
      "Dual water modes: Soft bubble stream and high-pressure spray",
      "1080-degree multi-angle rotation for maximum convenience",
      "Universal thread compatibility (fits 99% of standard household taps)"
    ],
    materials: "Solid Brass",
    dimensions: "3.7\" Length x 1.8\" Height",
    stripeUrl: "https://buy.stripe.com/dRm7sL9Ix9DI9x71n18Vi04"
  },
  {
    id: "olive-wood-serving-board",
    title: "Olive Wood Serving Board",
    subtitle: "Rustic live-edge olive wood, sourced from Mediterranean groves",
    price: 25.87,
    image: "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?auto=format&fit=crop&w=800&q=80",
    category: "Kitchen",
    room: "Living Space",
    description: "Carved from a single block of dense Mediterranean olive wood, this rustic live-edge board is a tactile addition to your kitchen table. The striking, high-contrast wood grain makes each serving board completely unique. Perfect for presenting artisanal cheeses, cured meats, or fresh sourdough.",
    details: [
      "Individually hand-carved Mediterranean Olive Wood",
      "Naturally antibacterial and highly scratch-resistant",
      "Each board features a unique, natural live-edge profile",
      "Finished with food-safe natural olive oil"
    ],
    materials: "100% Mediterranean Olive Wood",
    dimensions: "14\" Length x 7\" Width x 0.8\" Thickness",
    stripeUrl: "https://buy.stripe.com/7sY3cvf2R2bg9x76Hl8Vi01"
  },
  {
    id: "bamboo-bathtub-caddy",
    title: "Bamboo Bathtub Caddy",
    subtitle: "Waterproof organic bamboo caddy with expandable arms",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1570488344392-96e08b6b7ca2?auto=format&fit=crop&w=800&q=80",
    category: "Bath",
    room: "Bathroom",
    description: "Turn your bathroom into a quiet sanctuary. Crafted from sustainable, highly water-resistant organic bamboo, this expandable bathtub caddy features dedicated slots for a book, a tablet, a wine glass, and a soy candle. Its secure, slip-resistant arms adjust to fit almost any tub size, creating a warm, functional bathing ritual.",
    details: [
      "100% Organic Sustainable Bamboo",
      "Waterproof protective lacquer prevents warping and mold",
      "Extendable side arms adjust from 27.5\" to 43.3\"",
      "Features a book/tablet stand, wine glass slot, and accessory tray"
    ],
    materials: "100% Organic Bamboo",
    dimensions: "27.5\" to 43.3\" Length x 8.6\" Width",
    stripeUrl: "https://buy.stripe.com/9B65kDcUJbLQaBb8Pt8Vi05"
  },
  {
    id: "soy-candle-set",
    title: "Soy Candle Set",
    subtitle: "Hand-poured vegan soy wax candles with essential oils",
    price: 48.00,
    image: "https://images.unsplash.com/photo-1602868467337-5a4205e5378f?auto=format&fit=crop&w=800&q=80",
    category: "Decor",
    room: "Living Space",
    description: "A clean, quiet burn that fills your home with nature. Hand-poured in small batches, this set of three essential oil-scented soy wax candles is housed in warm, textured stoneware vessels. Free from synthetic perfumes and paraffin, they offer a clean soot-free burn that gently grounds any room.",
    details: [
      "100% Natural Soy Wax with pure essential oils",
      "Crackling organic wood wicks for a cozy fireplace sound",
      "Three comforting scents: Amber & Cedar, Smoked Hinoki, and Coastal Sage",
      "Reusable stoneware jars designed to hold small plants or studio tools"
    ],
    materials: "100% Natural Soy Wax, Stoneware, Wood Wick",
    dimensions: "3\" Diameter x 3\" Height (6 oz per candle)",
    stripeUrl: "https://buy.stripe.com/8x24gzg6V6rwbFf6Hl8Vi03"
  }
]
