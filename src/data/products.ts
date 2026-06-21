export interface Product {
  id: string
  title: string
  subtitle: string
  price: number
  image: string
  images: string[]
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
    id: "natural-wool-rug",
    title: "The Natural Wool Rug",
    subtitle: "Undyed organic wool, hand-loomed in a Belgian workshop",
    price: 220.00,
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Rugs",
    room: "Bedroom",
    description: "Woven from 100% pure, undyed Belgian wool, this heavyweight rug brings raw texture and natural warmth to your bedside. Each piece is hand-loomed using traditional techniques, celebrating the organic variations in tone and texture that only real, unprocessed wool can provide. It feels wonderfully thick underfoot and is designed to last a lifetime.",
    details: [
      "100% Undyed Belgian Wool",
      "Hand-loomed by traditional weavers in Belgium",
      "Thick, dense flatweave with natural lanolin protection",
      "Naturally flame-retardant and highly durable"
    ],
    materials: "100% Natural Undyed Wool",
    dimensions: "5' x 8'",
    stripeUrl: "https://buy.stripe.com/8x23cv9Ix9DIdNnghV8Vi00"
  },
  {
    id: "ribbed-glass-mushroom-lamp",
    title: "The Ribbed Glass Mushroom Lamp",
    subtitle: "Hand-blown ribbed glass, rechargeable warm bedside light",
    price: 34.50,
    image: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Lighting",
    room: "Bedroom",
    description: "A quiet addition to your evening ritual. Hand-blown from thick, characterful ribbed glass, this rechargeable cordless lamp casts a soft, diffused glow that warms up any bedside table. Featuring three dimmable brightness levels and a sleek minimal form, it combines retro-inspired charm with cordless convenience.",
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
    id: "bamboo-bathtub-caddy",
    title: "The Bamboo Bathtub Caddy",
    subtitle: "Waterproof organic bamboo caddy with expandable arms",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1570488344392-96e08b6b7ca2?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1570488344392-96e08b6b7ca2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Bathroom",
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
    id: "swivel-faucet-aerator",
    title: "The 1080° Swivel Faucet Aerator",
    subtitle: "Sleek solid brass robotic-arm extension for standard taps",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1589778655364-2c2c0c6e3d4e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1589778655364-2c2c0c6e3d4e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Bathroom",
    room: "Bathroom",
    description: "A viral, highly functional upgrade for your bathroom sink. This solid brass, chrome-finished aerator features three rotating joints that allow a full 1080-degree swivel, making facial rinsing, hair washing, and basin cleaning effortless. Features two water flow modes: a soft oxygen bubble stream and a strong spray.",
    details: [
      "Premium solid brass construction with polished chrome finish",
      "Dual water modes: Soft bubble stream and high-pressure spray",
      "1080-degree multi-angle rotation for maximum convenience",
      "Universal thread compatibility (fits 99% of standard household taps)"
    ],
    materials: "Solid Brass, Polished Chrome",
    dimensions: "3.7\" Length x 1.8\" Height",
    stripeUrl: "https://buy.stripe.com/dRm7sL9Ix9DI9x71n18Vi04"
  },
  {
    id: "olive-wood-serving-board",
    title: "The Olive Wood Serving Board",
    subtitle: "Rustic live-edge olive wood, sourced from Mediterranean groves",
    price: 25.87,
    image: "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Kitchen & Dining",
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
    id: "gravity-salt-pepper-grinders",
    title: "The Gravity Salt & Pepper Grinder Set",
    subtitle: "Automatic gravity-activated mill set with adjustable coarseness",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1594431151716-f0e77e2c96d1?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1594431151716-f0e77e2c96d1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Kitchen & Dining",
    room: "Living Space",
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
    id: "natural-soy-candle-set",
    title: "The Natural Soy Candle Set",
    subtitle: "Hand-poured vegan soy wax candles with essential oils",
    price: 48.00,
    image: "https://images.unsplash.com/photo-1602868467337-5a4205e5378f?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1602868467337-5a4205e5378f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Decor",
    room: "Living Space",
    description: "A clean, quiet burn that fills your home with nature. Hand-poured in small batches in the UK, this set of three essential oil-scented soy wax candles is housed in warm, textured stoneware vessels. Free from synthetic perfumes and paraffin, they offer a clean soot-free burn that gently grounds any room.",
    details: [
      "100% Natural Soy Wax with pure essential oils",
      "Crackling organic wood wicks for a cozy fireplace sound",
      "Three comforting scents: Amber & Cedar, Smoked Hinoki, and Coastal Sage",
      "Reusable stoneware jars designed to hold small plants or studio tools"
    ],
    materials: "100% Natural Soy Wax, Stoneware, Wood Wick",
    dimensions: "3\" Diameter x 3\" Height (6 oz per candle)",
    stripeUrl: "https://buy.stripe.com/8x24gzg6V6rwbFf6Hl8Vi03"
  },
  {
    id: "handwoven-jute-rug",
    title: "The Handwoven Jute Rug",
    subtitle: "Robust hand-spun natural jute fiber in a rich loop weave",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Rugs",
    room: "Living Space",
    description: "A robust, warm-textured anchor for your living room. Hand-spun from 100% biodegradable natural jute fibers, this heavy loop-woven rug celebrates raw botanical textures. Thick, characterful, and exceptionally durable, its earthy golden tones bring an unpretentious, organic grounding to busy family spaces.",
    details: [
      "100% Natural Biodegradable Jute",
      "Handwoven in India by certified ethical workshops",
      "Thick, chunky loop texture naturally hides dust and dirt",
      "Reversible design for twice the wear and lifetime durability"
    ],
    materials: "100% Natural Hand-spun Jute",
    dimensions: "4' x 6'",
    stripeUrl: "https://buy.stripe.com/8x23cv9Ix9DIdNnghV8Vi00"
  },
  {
    id: "magnetic-cloud-key-holder",
    title: "The Magnetic Cloud Key Holder",
    subtitle: "Sleek adhesive cloud-shaped key hanger with hidden magnets",
    price: 17.00,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Organization",
    room: "Smart Living",
    description: "Bring a warm, playful functionality to your daily flow. This minimalist cloud-shaped key holder mounts easily to any entryway wall using strong, damage-free adhesive. Equipped with powerful rare-earth magnets hidden inside, it securely catches and holds up to three heavy keychains, keeping your counters clutter-free.",
    details: [
      "Minimalist cloud-shaped design with matte white finish",
      "Hidden ultra-strong neodymium magnets hold keys effortlessly",
      "Strong self-adhesive backing (no drilling or screws required)",
      "Set of two, holding up to three key rings each"
    ],
    materials: "Premium Matte ABS, Neodymium Magnets",
    dimensions: "3.9\" Width x 1.2\" Depth x 2.2\" Height",
    stripeUrl: "https://buy.stripe.com/dRm7sL9Ix9DI9x71n18Vi04"
  },
  {
    id: "bamboo-magnetic-knife-strip",
    title: "The Bamboo Magnetic Knife Strip",
    subtitle: "Solid bamboo wall-mounted block with continuous magnetic pull",
    price: 22.95,
    image: "https://images.unsplash.com/photo-1593693411515-c202e974eb15?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1593693411515-c202e974eb15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Organization",
    room: "Smart Living",
    description: "Clear your kitchen counter and showcase your tools. Crafted from solid natural bamboo, this 40cm wall-mounted strip houses a continuous magnetic core that safely holds heavy kitchen knives, scissors, and utensils in place. Its warm, water-resistant wood grain offers a clean, architectural kitchen display.",
    details: [
      "Solid natural bamboo construction with water-resistant finish",
      "Continuous double-strength magnetic core holds tools securely",
      "Saves drawer and counter space while keeping blades protected",
      "Comes with standard wall-mounting screws and drywall anchors"
    ],
    materials: "Solid Natural Bamboo, Permanent Magnets",
    dimensions: "15.7\" Length x 2.3\" Width x 0.8\" Thickness",
    stripeUrl: "https://buy.stripe.com/7sY3cvf2R2bg9x76Hl8Vi01"
  }
]
