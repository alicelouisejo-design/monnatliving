export interface Product {
  id: string
  title: string
  subtitle: string
  price: number
  image: string
  category: string
  description: string
  details: string[]
  materials: string
  dimensions: string
}

export const products: Product[] = [
  {
    id: "linen-waffle-throw",
    title: "The Linen Waffle Throw Blanket",
    subtitle: "French flax linen, woven in a Portuguese family mill",
    price: 120,
    image: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=800&q=80",
    category: "Bedding & Throws",
    description: "Woven from 100% organic French flax and garment-washed for a uniquely soft texture, this waffle blanket offers the perfect balance of weight, breathability, and warmth. Its high-texture waffle knit adds depth to any room, draped over a bed or cozying up a sofa.",
    details: [
      "100% Organic French Flax Linen",
      "Oeko-Tex® certified (free of harmful chemicals)",
      "Garment-washed for instant heirloom softness",
      "Woven in a historic, family-owned mill in Portugal"
    ],
    materials: "100% Organic French Flax",
    dimensions: "50\" x 70\""
  },
  {
    id: "hand-cast-ceramic-pitcher",
    title: "The Hand-Cast Ceramic Pitcher",
    subtitle: "Matte sandstone finish, hand-thrown stoneware",
    price: 75,
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
    category: "Kitchen & Dining",
    description: "Designed for everyday rituals and slow mornings. This double-fired stoneware pitcher features a warm sandstone exterior left unglazed for a raw, tactile touch, contrasted by a milky-white glazed interior. Holds warm or cold liquids perfectly and doubles as an artful flower vase.",
    details: [
      "Double-fired locally sourced stoneware",
      "Food, microwave, and dishwasher safe",
      "Raw textured exterior with smooth satin interior glaze",
      "Each piece is individually thrown, featuring subtle unique details"
    ],
    materials: "Stoneware clay",
    dimensions: "6\" Diameter x 8.5\" Height (Holds 44 oz)"
  },
  {
    id: "belgian-linen-pillow-cover",
    title: "The Belgian Linen Pillow Cover",
    subtitle: "Garment-washed flax in soft terracotta",
    price: 48,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    category: "Decor & Accent",
    description: "Woven from fine Belgian linen, this pillow cover is stonewashed for supreme suppleness and an effortlessly relaxed look. Features a hidden zipper closure and a heavyweight texture that wears beautifully over time. A subtle, natural splash of terracotta tone to warm up any space.",
    details: [
      "100% Belgian Flax Linen",
      "Invisible zipper closure for a clean profile",
      "Insert not included (pairs perfectly with down/feather inserts)",
      "Machine washable and colorfast"
    ],
    materials: "100% Belgian Flax",
    dimensions: "20\" x 20\""
  },
  {
    id: "sandstone-soy-candle-set",
    title: "The Sandstone Soy Candle Set",
    subtitle: "Scented soy wax in hand-textured stoneware vessels",
    price: 60,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    category: "Decor & Scent",
    description: "A trio of hand-poured soy wax candles with crackling wood wicks, nestled inside beautiful hand-textured stoneware jars that you'll want to reuse for plants or desk storage. Includes three grounding, nature-inspired scents: Amber & Cedar, Smoked Hinoki, and Coastal Sage.",
    details: [
      "100% Natural Soy Wax (phthalate-free, non-toxic)",
      "Organic crackling FSC-certified wood wicks",
      "40+ hours burn time per candle",
      "Hand-textured ceramic containers designed for secondary reuse"
    ],
    materials: "Soy Wax, Stoneware Container, Wood Wick",
    dimensions: "3\" Diameter x 3\" Height (6 oz per candle)"
  },
  {
    id: "travertine-incense-holder",
    title: "The Travertine Incense Holder",
    subtitle: "Honed raw travertine marble with unique character",
    price: 35,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    category: "Decor & Scent",
    description: "Carved from a single piece of premium Italian travertine stone, this minimalist incense holder celebrates raw geology. The surface is honed but left with its natural organic pits, creating a gorgeous contrasting texture. The wide flat surface collects ash elegantly.",
    details: [
      "100% Italian Travertine Stone",
      "Honed raw finish (non-filled pits highlight natural uniqueness)",
      "Heavy stone base provides absolute stability",
      "Naturally heat-resistant and easily wiped clean"
    ],
    materials: "Italian Travertine Stone",
    dimensions: "10\" Length x 3.5\" Width x 0.75\" Height"
  },
  {
    id: "cotton-waffle-bath-towels",
    title: "The Waffle Bath Towel Set",
    subtitle: "Set of two ultra-absorbent organic Turkish cotton towels",
    price: 85,
    image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=800&q=80",
    category: "Bath",
    description: "Ditch the heavy, damp towels. Woven in a Turkish atelier, these towels feature a deep waffle weave that expands to absorb moisture instantly and shrinks back down to dry twice as fast as plush terry cloth. Made from long-staple organic cotton that gets softer with every single wash.",
    details: [
      "Set includes 2 Bath Towels",
      "100% Long-Staple Organic Turkish Cotton",
      "Deep waffle weave gently exfoliates and dries incredibly fast",
      "Integrated hanging loop for easy storage"
    ],
    materials: "100% Organic Turkish Cotton",
    dimensions: "30\" x 56\" each"
  }
]
