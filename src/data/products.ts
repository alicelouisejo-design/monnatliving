export interface Product {
  id: string
  title: string
  subtitle: string
  price: number
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
    id: "ribbed-mushroom-lamp",
    title: "The Ribbed Mushroom Lamp",
    subtitle: "Cordless rechargeable ribbed glass light",
    price: 34.50,
    images: [
      "https://images.unsplash.com/photo-1606170033073-9091550948f5?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Lighting",
    room: "Bedroom",
    description: "A beautiful hand-blown ribbed borosilicate glass lamp that casts a soft, diffused glow. Cordless and rechargeable with three dimmable brightness levels, it creates a cozy evening ritual on any bedside table.",
    details: [
      "Hand-blown ribbed borosilicate glass",
      "Cordless rechargeable battery via USB-C",
      "Three-level touch dimming function",
      "Up to 15 hours of continuous warm light"
    ],
    materials: "Hand-blown Ribbed Glass",
    dimensions: "6\" Diameter x 9\" Height",
    stripeUrl: "https://buy.stripe.com/8x2dR9f2RcPU38Jd5J8Vi02"
  },
  {
    id: "linen-throw-stone",
    title: "The Linen Throw (Stone)",
    subtitle: "100% pure stone-washed flax throw",
    price: 95.00,
    images: [
      "/social-linen-throw-hero.png",
      "/texture-linen-stone.jpg"
    ],
    category: "Textiles",
    room: "Bedroom",
    description: "Woven from heavy, premium French flax linen, this stone-washed throw offers a rustic yet incredibly soft texture. Breathable and comforting, it drapes beautifully over a bed or sofa for natural, lived-in comfort.",
    details: [
      "100% Organic French Flax Linen",
      "Pre-washed with volcanic stones for extra softness",
      "Breathable, hypoallergenic, and highly durable",
      "Finished with a classic raw fringe edge"
    ],
    materials: "100% Premium Flax Linen",
    dimensions: "60\" Width x 80\" Length",
    stripeUrl: "https://buy.stripe.com/8x23cv9Ix9DIdNnghV8Vi00"
  },
  {
    id: "linen-pillow-cover-set",
    title: "The Linen Pillow Cover Set",
    subtitle: "Stone-washed pure linen covers",
    price: 38.00,
    images: [
      "/texture-linen-stone.jpg"
    ],
    category: "Textiles",
    room: "Bedroom",
    description: "A set of two standard envelope pillow covers crafted from Belgian flax linen. Pre-washed for a relaxed texture, they grow softer with every wash while providing a cool, breathable night's sleep.",
    details: [
      "100% Pure Belgian Flax Linen",
      "Envelope closure back for a neat fit",
      "Set of two matching pillow covers",
      "Naturally moisture-wicking and eco-friendly"
    ],
    materials: "100% Belgian Linen",
    dimensions: "20\" Width x 26\" Length",
    stripeUrl: "https://buy.stripe.com/8x24gzg6V6rwbFf6Hl8Vi03"
  },
  {
    id: "wooden-jewelry-box",
    title: "The Wooden Jewelry Box",
    subtitle: "Minimalist oak-finish jewelry storage",
    price: 32.00,
    images: [
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Accessories",
    room: "Bedroom",
    description: "Crafted from sustainable white oak with a smooth, matte velvet-lined interior. This minimalist organizer keeps jewelry safe and scratch-free, with modular compartments designed for rings, earrings, and necklaces.",
    details: [
      "Solid white oak outer shell",
      "Ultra-soft anti-scratch velvet lining",
      "Modular dividers for customizable storage",
      "Sleek magnetic closure mechanism"
    ],
    materials: "Solid White Oak, Velvet Lining",
    dimensions: "10\" Length x 6\" Width x 3\" Height",
    stripeUrl: "https://buy.stripe.com/7sY3cvf2R2bg9x76Hl8Vi01"
  },
  {
    id: "seagrass-laundry-basket",
    title: "The Seagrass Laundry Basket",
    subtitle: "Hand-woven seagrass basket with lid",
    price: 42.00,
    images: [
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Organization",
    room: "Bedroom",
    description: "Woven by hand with durable, sustainably harvested seagrass. This breathable laundry basket features a fitted lid and handles, combining natural texture with practical utility to keep closets tidy.",
    details: [
      "100% Natural Hand-woven Seagrass",
      "Integrated side handles for easy carrying",
      "Matching lid hides away laundry neatly",
      "Reinforced structure for shape retention"
    ],
    materials: "100% Sustainable Seagrass",
    dimensions: "16\" Diameter x 22\" Height",
    stripeUrl: "https://buy.stripe.com/9B65kDcUJbLQaBb8Pt8Vi05"
  },
  {
    id: "macrame-wall-hanging",
    title: "The Macrame Wall Hanging",
    subtitle: "Hand-knotted cotton rope decor",
    price: 24.00,
    images: [
      "https://images.unsplash.com/photo-1544207240-8b1025eb7a6c?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Decor",
    room: "Bedroom",
    description: "A beautiful, textured bohemian wall hanging handcrafted from pure, unbleached cotton cord. Suspended from a natural wooden dowel, it adds warmth and geometric interest to any bedroom wall.",
    details: [
      "100% Hand-knotted Natural Cotton",
      "Genuine wood hanging dowel included",
      "Intricate geometric knit detailing",
      "Lightweight and easy to mount"
    ],
    materials: "Natural Cotton Cord, Oak Wood",
    dimensions: "18\" Width x 32\" Length",
    stripeUrl: "https://buy.stripe.com/8x23cv9Ix9DIdNnghV8Vi00"
  },
  {
    id: "bedside-water-carafe",
    title: "The Bedside Water Carafe",
    subtitle: "Mouth-blown glass carafe with tumbler",
    price: 24.00,
    images: [
      "https://images.unsplash.com/photo-1616683693504-3bf76a229d15?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Accessories",
    room: "Bedroom",
    description: "Keep hydration close at hand with this minimalist bedside set. Mouth-blown from durable borosilicate glass, the clever tumbler fits snugly over the carafe's neck to act as a lid and keep water fresh overnight.",
    details: [
      "Heat-resistant borosilicate glass",
      "Tumbler acts as a dust-proof cover",
      "Drip-free spout design for clean pouring",
      "Dishwasher safe and eco-friendly"
    ],
    materials: "Borosilicate Glass",
    dimensions: "4\" Diameter x 8.5\" Height (28 oz)",
    stripeUrl: "https://buy.stripe.com/dRm7sL9Ix9DI9x71n18Vi04"
  },
  {
    id: "celestial-trinket-dish",
    title: "The Celestial Trinket Dish",
    subtitle: "Moon phase gold-leafed ceramic dish",
    price: 12.00,
    images: [
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Decor",
    room: "Bedroom",
    description: "A delicate ceramic jewelry tray finished with a hand-painted gold leaf moon phase cycle. Perfect for holding rings, earrings, and everyday trinkets on your vanity, bedside table, or dresser.",
    details: [
      "High-fire glazed white ceramic",
      "Real gold leaf trim detailing",
      "Protective velvet pads on base",
      "Handcrafted in a boutique ceramic studio"
    ],
    materials: "High-fire Ceramic, Gold Leaf",
    dimensions: "5\" Diameter x 0.5\" Depth",
    stripeUrl: "https://buy.stripe.com/8x24gzg6V6rwbFf6Hl8Vi03"
  },
  {
    id: "white-tea-reed-diffuser",
    title: "The White Tea Reed Diffuser",
    subtitle: "Pure essential oil room fragrance",
    price: 22.00,
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Decor",
    room: "Bedroom",
    description: "Infuse your space with a calming, delicate blend of white tea, bergamot, and cedarwood. Crafted with natural essential oils and housed in a sleek glass vessel, it provides effortless aroma for up to three months.",
    details: [
      "Natural essential oil fragrance blend",
      "Alcohol-free base for slower evaporation",
      "Includes 8 natural rattan reeds",
      "Packaged in an unbleached cardboard box"
    ],
    materials: "Essential Oils, Glass, Rattan Reeds",
    dimensions: "3\" Diameter x 5\" Height (4.5 oz)",
    stripeUrl: "https://buy.stripe.com/8x24gzg6V6rwbFf6Hl8Vi03"
  },
  {
    id: "cotton-knitted-pouffe",
    title: "The Cotton Knitted Pouffe",
    subtitle: "Cozy thick-knit cotton floor ottoman",
    price: 110.00,
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Furniture",
    room: "Bedroom",
    description: "This chunky hand-knitted pouffe provides a cozy, tactile accent for reading nooks or bedside lounging. Filled with dense, shape-retaining beads and wrapped in thick braided cotton rope, it works as a seat or footrest.",
    details: [
      "100% Organic braided cotton outer cover",
      "High-density EPS bead filling for support",
      "Hand-braided using artisan knitting techniques",
      "Sturdy base prevents slipping and sliding"
    ],
    materials: "Natural Cotton, EPS Bead Filling",
    dimensions: "20\" Diameter x 14\" Height",
    stripeUrl: "https://buy.stripe.com/8x23cv9Ix9DIdNnghV8Vi00"
  },
  {
    id: "bamboo-bathtub-caddy",
    title: "The Bamboo Bathtub Caddy",
    subtitle: "Expandable water-resistant bamboo caddy",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Bathroom Accessories",
    room: "Bathroom",
    description: "Turn bathing into an elegant sanctuary. This expandable tub tray is made from highly water-resistant bamboo and features secure, slide-free slots for a book or tablet, a wine glass, and a comforting candle.",
    details: [
      "100% Sustainable Organic Bamboo",
      "Waterproof lacquer protects against warping",
      "Extendable side arms fit almost all bathtubs",
      "Integrated book stand, wine glass slot, tray"
    ],
    materials: "100% Organic Bamboo",
    dimensions: "27.5\" to 43.3\" Length x 8.6\" Width",
    stripeUrl: "https://buy.stripe.com/9B65kDcUJbLQaBb8Pt8Vi05"
  },
  {
    id: "waffle-towel-set",
    title: "The Waffle Towel Set",
    subtitle: "Quick-dry honeycomb weave towels",
    price: 68.00,
    images: [
      "/social-waffle-towels.png"
    ],
    category: "Textiles",
    room: "Bathroom",
    description: "A three-piece towel set woven in a unique honeycomb pattern. Crafted with organic Turkish cotton, the deep waffle texture increases surface area to absorb moisture instantly and dry in half the time of standard terry towels.",
    details: [
      "100% Organic Turkish Cotton",
      "Quick-drying waffle-weave prevents mildew",
      "Includes 1 bath towel, 1 hand towel, 1 face towel",
      "Gets softer and fluffier with every tumble wash"
    ],
    materials: "100% Turkish Cotton",
    dimensions: "Bath Towel: 30\" x 56\", Hand: 18\" x 28\"",
    stripeUrl: "https://buy.stripe.com/8x23cv9Ix9DIdNnghV8Vi00"
  },
  {
    id: "bamboo-soap-dish-set",
    title: "The Bamboo Soap Dish Set",
    subtitle: "Zero-waste natural bamboo soap holders",
    price: 12.00,
    images: [
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Accessories",
    room: "Bathroom",
    description: "Keep your natural soaps dry and long-lasting. This set of two bamboo soap dishes features slotted drains that prevent water pooling, allowing bar soaps to dry naturally. Crafted from water-resistant sustainable bamboo, they look beautiful on any sink.",
    details: [
      "Includes two matching bamboo soap holders",
      "Angled slotted design drains excess water cleanly",
      "Sealed with non-toxic, water-resistant protective oil",
      "Eco-friendly, biodegradable, and completely zero-waste"
    ],
    materials: "100% Natural Bamboo",
    dimensions: "4.5\" Length x 3.1\" Width x 0.8\" Height",
    stripeUrl: "https://buy.stripe.com/dRm7sL9Ix9DI9x71n18Vi04"
  },
  {
    id: "apothecary-glass-jars",
    title: "The Apothecary Glass Jars",
    subtitle: "Set of three amber glass jars with airtight lids",
    price: 28.00,
    images: [
        "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Accessories",
    room: "Bathroom",
    description: "An elegant, clutter-free way to store cotton buds, bath salts, or sponges. This set of three amber apothecary jars is mouth-blown from thick, amber-tinted glass, bringing a classic vintage apothecary feel to your bathroom shelves while hiding plastic packaging.",
    details: [
      "Mouth-blown amber glass prevents light degradation",
      "Set includes Small, Medium, and Large glass jars",
      "Airtight silicone gaskets preserve botanical bath salts",
      "Eco-friendly storage that replaces disposable plastic packaging"
    ],
    materials: "Amber Borosilicate Glass, Silicone Seals",
    dimensions: "Small: 3\" x 3\", Medium: 3.5\" x 4\", Large: 4\" x 5\"",
    stripeUrl: "https://buy.stripe.com/8x24gzg6V6rwbFf6Hl8Vi03"
  },
  {
    id: "stone-toothbrush-holder",
    title: "The Stone Toothbrush Holder",
    subtitle: "Heavyweight cast-stone toothbrush and paste organizer",
    price: 15.00,
    images: [
      "https://images.unsplash.com/photo-1609766857041-ed402ea80c21?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Bathroom",
    room: "Bathroom",
    description: "A grounded, sturdy element on your bathroom counter. Carved from a blend of natural stone powder and resin, this heavy-weight holder organizes your toothbrushes and paste. Its textured, sand-like feel is naturally slip-resistant and easy to rinse.",
    details: [
      "Constructed from durable natural sandstone and resin",
      "Matte textured finish mimics ocean-worn travertine",
      "Weighted base prevents tipping when holding heavy electric brushes",
      "Features a ventilated divider to keep items separate and dry"
    ],
    materials: "Sandstone and Eco-resin Compound",
    dimensions: "3\" Diameter x 4.5\" Height",
    stripeUrl: "https://buy.stripe.com/dRm7sL9Ix9DI9x71n18Vi04"
  },
  {
    id: "essential-oil-shower-steamers",
    title: "The Essential Oil Shower Steamers",
    subtitle: "Six aromatherapy tablets infused with pure plant oils",
    price: 18.00,
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Accessories",
    room: "Bathroom",
    description: "Turn your daily shower into a spa-like eucalyptus ritual. Hand-pressed in small batches, these aromatherapy steamers release pure, non-toxic essential oils when splashed with shower water, filling your bathroom with therapeutic vapors.",
    details: [
      "Set of six tablets in plastic-free parchment wrapping",
      "Infused with pure organic eucalyptus and lavender oils",
      "Formulated without synthetic fragrances or preservatives",
      "Creates a calming, congestion-clearing aromatherapy steam"
    ],
    materials: "Baking Soda, Citric Acid, Essential Oils",
    dimensions: "6-Pack (30g per tablet)",
    stripeUrl: "https://buy.stripe.com/8x24gzg6V6rwbFf6Hl8Vi03"
  },
  {
    id: "tasseled-cotton-bath-mat",
    title: "The Tasseled Cotton Bath Mat",
    subtitle: "Soft thick-pile organic cotton rug with tassels",
    price: 24.00,
    images: [
      "https://images.unsplash.com/photo-1584622650115-6001402a1140?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Textiles",
    room: "Bathroom",
    description: "Step onto cloud-like softness. This luxurious bath mat is tufted from 100% organic cotton yarn, creating a thick, absorbent pile that coddles bare feet. Hand-finished with playful tassels, it adds a warm, bohemian layer to hard bathroom tiles.",
    details: [
      "100% Organic Turkish Cotton pile",
      "Heavy weight absorbs water instantly",
      "Hand-knotted tassel fringe details",
      "Fully machine washable with slide-resistant backing"
    ],
    materials: "100% Organic Cotton",
    dimensions: "20\" Width x 30\" Length",
    stripeUrl: "https://buy.stripe.com/8x23cv9Ix9DIdNnghV8Vi00"
  },
  {
    id: "bamboo-foot-scrubber",
    title: "The Bamboo Foot Scrubber",
    subtitle: "Natural pumice and organic bristle brush",
    price: 12.00,
    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Accessories",
    room: "Bathroom",
    description: "A simple, ancient bathing tool. This double-sided foot scrubber features a natural volcanic pumice stone on one side to soften rough skin, and a firm boar-bristle brush on the other to clean and refresh, all mounted on a sturdy bamboo handle.",
    details: [
      "Sustainable organic bamboo handle",
      "Natural volcanic pumice stone",
      "Biodegradable firm boar bristles",
      "Includes a hanging cotton rope for easy air drying"
    ],
    materials: "Organic Bamboo, Volcanic Pumice, Boar Bristles",
    dimensions: "8\" Length x 2\" Width x 1.5\" Depth",
    stripeUrl: "https://buy.stripe.com/7sY3cvf2R2bg9x76Hl8Vi01"
  },
  {
    id: "rattan-bathroom-storage",
    title: "The Rattan Bathroom Storage",
    subtitle: "Handwoven rattan nesting baskets for organizing",
    price: 45.00,
    images: [
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Organization",
    room: "Bathroom",
    description: "Declutter your bathroom vanity in style. This set of three handwoven rattan nesting baskets keeps toiletries, spare tissues, and cosmetics stored neatly. Durable and moisture-resistant, they add warm golden texture to bathroom surfaces.",
    details: [
      "Set of three nesting storage baskets",
      "Handwoven from natural, moisture-resistant split rattan",
      "Reinforced iron wire frames maintain structural shape",
      "Eco-friendly and ethically made in family workshops"
    ],
    materials: "100% Natural Golden Rattan",
    dimensions: "S: 7\"x7\", M: 9\"x9\", L: 11\"x11\"",
    stripeUrl: "https://buy.stripe.com/9B65kDcUJbLQaBb8Pt8Vi05"
  },
  {
    id: "round-wall-mirror-gold",
    title: "The Round Wall Mirror (Gold)",
    subtitle: "Elegant gold-framed round vanity wall mirror",
    price: 85.00,
    images: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Decor",
    room: "Bathroom",
    description: "An elegant, focal centerpiece for your powder room or vanity. This perfectly round mirror is encased in a slim, moisture-resistant brushed brass-finish iron frame, reflecting natural morning light to make small bathrooms feel airy.",
    details: [
      "Highly reflective high-definition float glass",
      "Rust-proof iron frame with brushed gold finish",
      "D-ring hanging mounts pre-installed on backing",
      "Reinforced MDF backing prevents water damage"
    ],
    materials: "Float Glass, Brass-plated Iron Frame",
    dimensions: "24\" Diameter x 1\" Frame Depth",
    stripeUrl: "https://buy.stripe.com/8x2dR9f2RcPU38Jd5J8Vi02"
  },
  {
    id: "ribbed-glass-vase",
    title: "The Ribbed Glass Vase",
    subtitle: "Contemporary ribbed clear glass flower vase",
    price: 18.50,
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Decor",
    room: "Living Space",
    description: "Designed to catch the morning sun. This contemporary vase is hand-blown from heavy, ribbed borosilicate glass. Perfect for showcasing single wildflowers or dried botanical stems, its textured surface creates beautiful refractions on your table.",
    details: [
      "Hand-blown heavy-weight borosilicate glass",
      "Intricate fluted vertical rib design",
      "Thick, weighted base prevents accidental tipping",
      "Sized perfectly for coffee tables and bookshelves"
    ],
    materials: "Borosilicate Glass",
    dimensions: "4\" Diameter x 8\" Height",
    stripeUrl: "https://buy.stripe.com/8x2dR9f2RcPU38Jd5J8Vi02"
  },
  {
    id: "abstract-face-planter",
    title: "The Abstract Face Planter",
    subtitle: "Minimalist ceramic line-art planter pot",
    price: 14.00,
    images: [
      "https://images.unsplash.com/photo-1581781862590-f9bf0ca9ffdf?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Decor",
    room: "Living Space",
    description: "Add a playful, artistic character to your houseplants. Housed in matte, unglazed off-white ceramic, this pot features an embossed minimalist line-art face. Ideal for trailing succulents, cacti, or fresh herbs.",
    details: [
      "Unglazed, matte textured ceramic exterior",
      "Glazed interior protects against moisture leakage",
      "Features a necessary bottom drainage hole with plug",
      "Embossed minimalist face detail on both sides"
    ],
    materials: "High-fire Unglazed Ceramic",
    dimensions: "5.5\" Diameter x 5\" Height",
    stripeUrl: "https://buy.stripe.com/8x24gzg6V6rwbFf6Hl8Vi03"
  },
  {
    id: "olive-wood-serving-board",
    title: "The Olive Wood Serving Board",
    subtitle: "Artisanal Mediterranean olive wood serving board",
    price: 25.87,
    images: [
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Kitchen & Dining",
    room: "Living Space",
    description: "Carved from a single block of heavy, slow-growing Mediterranean olive wood. Each rustic serving board features a unique organic live-edge, highlighting the striking marble-like grain that makes presenting cheeses, cured meats, or fresh sourdough a daily joy.",
    details: [
      "Handcrafted from sustainably harvested olive wood",
      "Naturally antimicrobial and highly scratch-resistant",
      "Beautiful organic live-edge makes each board unique",
      "Pre-treated with food-safe organic extra virgin olive oil"
    ],
    materials: "100% Mediterranean Olive Wood",
    dimensions: "14\" Length x 7\" Width x 0.8\" Thickness",
    stripeUrl: "https://buy.stripe.com/7sY3cvf2R2bg9x76Hl8Vi01"
  },
  {
    id: "natural-soy-candle-set",
    title: "The Natural Soy Candle Set",
    subtitle: "Stoneware-encased wooden-wick soy candles",
    price: 48.00,
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Decor",
    room: "Living Space",
    description: "A clean, soot-free burn that gently grounds your space. Hand-poured in the UK, this set of three vegan soy wax candles is infused with natural essential oils and housed in textured, reusable ceramic stoneware vessels that can later be replanted with small cacti.",
    details: [
      "100% Natural US-grown soy wax",
      "Crackling organic wood wicks for a cozy sound",
      "Comforting essential oil scents: Sage, Cedarwood, Amber",
      "Stoneware jars can be repurposed as modular small planters"
    ],
    materials: "100% Soy Wax, Stoneware, Essential Oils",
    dimensions: "3\" Diameter x 3\" Height (6 oz per jar)",
    stripeUrl: "https://buy.stripe.com/8x24gzg6V6rwbFf6Hl8Vi03"
  },
  {
    id: "teak-root-serving-bowl",
    title: "The Teak Root Serving Bowl",
    subtitle: "Hand-carved salvaged teak wood root bowl",
    price: 34.00,
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Kitchen & Dining",
    room: "Living Space",
    description: "Carved by hand from salvaged Indonesian teak tree roots that would have otherwise been burned. This heavy, sculptural bowl highlights the natural, rustic contours of the root system, creating an organic focal piece for holding fresh fruit or sourdough.",
    details: [
      "Hand-carved from salvaged, eco-friendly teak root wood",
      "Striking grain and natural knots make each piece a unique sculpture",
      "Extremely dense, water-resistant, and split-resistant",
      "Finished with a food-safe natural matte lacquer"
    ],
    materials: "100% Salvaged Teak Wood Root",
    dimensions: "10\" Diameter x 4\" Height",
    stripeUrl: "https://buy.stripe.com/7sY3cvf2R2bg9x76Hl8Vi01"
  },
  {
    id: "copper-hammered-coasters",
    title: "The Copper Hammered Coasters",
    subtitle: "Set of four hand-pressed copper cup coasters",
    price: 22.00,
    images: [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Kitchen & Dining",
    room: "Living Space",
    description: "Protect your coffee tables with warm metallic accents. This set of four coasters is hand-pressed from pure copper and hammered by artisans to create a faceted, light-catching texture. Features soft, anti-slip felt backing on the underside.",
    details: [
      "Set of four matching copper coasters",
      "Artisanal hand-hammered faceted texture",
      "Protective felt underlays prevent wood scratches",
      "Natural copper will develop a beautiful unique patina over time"
    ],
    materials: "100% Solid Hammered Copper",
    dimensions: "4\" Diameter x 0.1\" Thickness",
    stripeUrl: "https://buy.stripe.com/7sY3cvf2R2bg9x76Hl8Vi01"
  },
  {
    id: "handwoven-jute-rug",
    title: "The Handwoven Jute Rug",
    subtitle: "Chunky looped organic jute fiber rug",
    price: 115.00,
    images: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Rugs",
    room: "Living Space",
    description: "An incredibly robust, warm-textured anchor for busy living rooms. Handwoven from 100% biodegradable golden jute fibers, this chunky loop-woven rug celebrates organic textures, earthy tones, and lifetime durability in active family homes.",
    details: [
      "100% Natural Biodegradable Golden Jute",
      "Ethically hand-loomed in certified family weavers",
      "Chunky loop texture naturally hides dust and tracks",
      "Fully reversible double-weave structure for longevity"
    ],
    materials: "100% Organic Golden Jute",
    dimensions: "4' Width x 6' Length",
    stripeUrl: "https://buy.stripe.com/8x23cv9Ix9DIdNnghV8Vi00"
  },
  {
    id: "velvet-mustard-cushion",
    title: "The Velvet Mustard Cushion",
    subtitle: "Luxuriously soft cotton velvet cushion cover",
    price: 28.00,
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Textiles",
    room: "Living Space",
    description: "A rich pop of warm, mustard-yellow color to elevate neutral sofas. Woven from 100% cotton velvet, this cushion cover offers an exceptionally soft, heavyweight texture that catches the light beautifully, complete with an insert.",
    details: [
      "100% Cotton velvet front and reverse",
      "Concealed heavy-duty YKK zipper closure",
      "Includes a plush, cruelty-free duck feather insert",
      "Dry clean or delicate machine wash cold"
    ],
    materials: "100% Cotton Velvet, Duck Feather Filling",
    dimensions: "18\" Width x 18\" Length",
    stripeUrl: "https://buy.stripe.com/8x23cv9Ix9DIdNnghV8Vi00"
  },
  {
    id: "golden-sun-wall-decor",
    title: "The Golden Sun Wall Decor",
    subtitle: "Mid-century gold sunburst iron wall sculpture",
    price: 38.00,
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Decor",
    room: "Living Space",
    description: "A gorgeous mid-century accent. This striking sunburst wall sculpture is welded by hand from iron rods and coated in a soft, antiqued gold foil finish, creating a stunning graphic statement above fireplaces or consoles.",
    details: [
      "Hand-welded structural iron rods",
      "Finished with a warm, antiqued gold foil overlay",
      "Keyhole hanging mount welded directly to back frame",
      "Extremely lightweight and simple to hang"
    ],
    materials: "Wrought Iron, Gold Leaf Coating",
    dimensions: "18\" Diameter x 1\" Depth",
    stripeUrl: "https://buy.stripe.com/8x2dR9f2RcPU38Jd5J8Vi02"
  },
  {
    id: "marble-wood-tray",
    title: "The Marble & Wood Tray",
    subtitle: "Modern marble and natural acacia wood tray",
    price: 36.00,
    images: [
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Kitchen & Dining",
    room: "Living Space",
    description: "A modern, architecturally inspired serving tray. Combines a heavy, polished slab of white Carrara marble with warm, oil-finished natural acacia wood, creating a beautiful dual-texture tray for perfumes, keys, or coffee.",
    details: [
      "Polished white Carrara marble inset",
      "Sustainable natural acacia wood frame",
      "Anti-scratch rubber pads on base protect surfaces",
      "100% food-safe lacquer finish"
    ],
    materials: "Carrara Marble, Acacia Wood",
    dimensions: "12\" Length x 12\" Width x 1\" Height",
    stripeUrl: "https://buy.stripe.com/7sY3cvf2R2bg9x76Hl8Vi01"
  },
  {
    id: "magnetic-cloud-key-holder",
    title: "The Magnetic Cloud Key Holder",
    subtitle: "Minimalist cloud-shaped adhesive key hanger",
    price: 15.00,
    images: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Organization",
    room: "Smart Living",
    description: "Add a touch of whimsical, clever organization to your foyer. This minimalist cloud holder mounts securely to any wall using damage-free adhesive, holding up to three heavy keychains using powerful hidden magnets.",
    details: [
      "No drilling required: installs with 3M adhesive tape",
      "Hidden neodymium magnets catch keyrings instantly",
      "Holds up to three heavy key rings securely",
      "Durable matte finish is easy to wipe clean"
    ],
    materials: "Matte ABS Plastic, Neodymium Magnets",
    dimensions: "4\" Width x 2.2\" Height x 1.2\" Depth",
    stripeUrl: "https://buy.stripe.com/dRm7sL9Ix9DI9x71n18Vi04"
  },
  {
    id: "gravity-salt-pepper-set",
    title: "The Gravity Salt & Pepper Set",
    subtitle: "Gravity-activated automatic kitchen grinders",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Kitchen Utilities",
    room: "Smart Living",
    description: "An effortless, one-handed cooking ritual. This set of two sleek automatic mills houses a clever gravity sensor that begins grinding spices automatically the moment you tilt them over food—no buttons required.",
    details: [
      "Gravity sensor starts grinding when tilted downwards",
      "Premium, rust-free ceramic grinding core for longevity",
      "Fully adjustable grind size from fine to coarse grain",
      "Bright LED light turns on automatically during use"
    ],
    materials: "Stainless Steel, Acrylic, Ceramic Rotor",
    dimensions: "2.5\" Diameter x 7.8\" Height",
    stripeUrl: "https://buy.stripe.com/7sY3cvf2R2bg9x76Hl8Vi01"
  },
  {
    id: "bamboo-magnetic-knife-strip",
    title: "The Bamboo Magnetic Knife Strip",
    subtitle: "Wall-mounted bamboo block with continuous pull",
    price: 22.95,
    images: [
      "https://images.unsplash.com/photo-1593693411515-c202e974eb15?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Organization",
    room: "Smart Living",
    description: "Free up valuable counter space and keep chef's knives in reach. Crafted from solid natural bamboo, this 40cm strip houses a heavy-duty magnetic core that safely secures knives, scissors, and iron tools on your kitchen wall.",
    details: [
      "Crafted from solid natural eco-friendly bamboo",
      "Dual continuous magnetic cores hold heavy chef knives safely",
      "Protects sharp blades from getting dulled in crowded drawers",
      "Includes standard wall-mounting screws and anchors"
    ],
    materials: "Natural Bamboo, Permanent Magnets",
    dimensions: "15.7\" Length x 2.3\" Width x 0.8\" Thickness",
    stripeUrl: "https://buy.stripe.com/7sY3cvf2R2bg9x76Hl8Vi01"
  },
  {
    id: "rechargeable-led-book-light",
    title: "The Rechargeable LED Book Light",
    subtitle: "Flexible warm-light LED clip book lamp",
    price: 15.00,
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Electronics",
    room: "Smart Living",
    description: "Designed for peaceful midnight readers. This compact, rechargeable light clips securely to books and e-readers. Its flexible silicone neck adjusts to any angle, while the warm, amber LED eliminates sleep-disrupting blue light.",
    details: [
      "Flicker-free warm amber LED prevents eye strain",
      "Fully flexible 360-degree silicone neck",
      "Three dimmable brightness levels (Low, Med, High)",
      "Recharges via integrated USB (up to 30 hours of runtime)"
    ],
    materials: "Silicone, Matte ABS Plastic",
    dimensions: "1.5\" Width x 8.2\" Length x 1.1\" Depth",
    stripeUrl: "https://buy.stripe.com/dRm7sL9Ix9DI9x71n18Vi04"
  },
  {
    id: "wood-effect-cable-box",
    title: "The Wood-Effect Cable Box",
    subtitle: "Minimalist power cord and cable organizer cover",
    price: 22.00,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Organization",
    room: "Smart Living",
    description: "Tuck away cluttered extension cords and charger bricks. Housed in a matte off-white box with a gorgeous wood-grain finished top cover, this organizer keeps living rooms safe for pets and children while looking architectural.",
    details: [
      "Sized to completely hide a standard 6-socket extension lead",
      "Removable top cover with warm natural wood-grain finish",
      "Side slot cutouts allow power cords to feed through cleanly",
      "Heat-ventilated base prevents chargers from overheating"
    ],
    materials: "Flame-retardant ABS Plastic, Wood Laminate",
    dimensions: "12.5\" Length x 4.8\" Width x 4.3\" Height",
    stripeUrl: "https://buy.stripe.com/8x2dR9f2RcPU38Jd5J8Vi02"
  },
  {
    id: "touchless-soap-dispenser",
    title: "The Touchless Soap Dispenser",
    subtitle: "Infrared automatic hands-free soap dispenser",
    price: 28.00,
    images: [
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Electronics",
    room: "Smart Living",
    description: "Upgrade your bathroom hygiene cleanly. This sleek, hands-free soap dispenser houses an ultra-fast infrared motion sensor that automatically dispenses liquid soap in just 0.2 seconds—no dripping, no germ-spreading.",
    details: [
      "High-precision infrared motion sensor detects hands instantly",
      "Leak-proof, IPX4 water-resistant matte white body",
      "Adjustable volume slider controls the amount of soap dispensed",
      "Runs on 4 AAA batteries for up to six months"
    ],
    materials: "Matte ABS Eco-resin",
    dimensions: "2.8\" Diameter x 7.4\" Height (10 oz)",
    stripeUrl: "https://buy.stripe.com/dRm7sL9Ix9DI9x71n18Vi04"
  },
  {
    id: "usb-smart-mug-warmer",
    title: "The USB Smart Mug Warmer",
    subtitle: "Constant temperature hot plate mug coaster",
    price: 24.00,
    images: [
      "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Electronics",
    room: "Smart Living",
    description: "Never drink lukewarm coffee at your desk again. This sleek, USB-powered smart warmer keeps mugs at a constant, perfect drinking temperature of 55°C. Features automatic pressure induction that turns it on when a mug is placed.",
    details: [
      "Smart micro-gravity induction turns on when cup is placed",
      "Keeps beverages at a constant temperature of 55°C",
      "Waterproof, easy-to-wipe black tempered glass surface",
      "Powered by safe, universal 5V USB output"
    ],
    materials: "Tempered Glass, Brushed Aluminum Frame",
    dimensions: "4.7\" Width x 4.7\" Length x 0.6\" Height",
    stripeUrl: "https://buy.stripe.com/dRm7sL9Ix9DI9x71n18Vi04"
  },
  {
    id: "minimalist-kitchen-scale",
    title: "The Minimalist Kitchen Scale",
    subtitle: "Slim black tempered glass digital food scale",
    price: 18.00,
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Kitchen Utilities",
    room: "Smart Living",
    description: "Bake with architectural precision. This slim kitchen scale features high-definition digital touch controls and a single seamless piece of black tempered glass. Cleans effortlessly and measures weight to the single gram.",
    details: [
      "High-precision sensors measure in increments of 1g / 0.1oz",
      "Tactile touch buttons control Unit conversion and Tare",
      "Slim, space-saving design is easy to store flat",
      "Tempered black glass plate wipes clean in seconds"
    ],
    materials: "Tempered Glass, Matte ABS",
    dimensions: "7.8\" Length x 6.2\" Width x 0.6\" Height",
    stripeUrl: "https://buy.stripe.com/7sY3cvf2R2bg9x76Hl8Vi01"
  },
  {
    id: "magnetic-fridge-planner",
    title: "The Magnetic Fridge Planner",
    subtitle: "Dry-erase monthly calendar planner magnet",
    price: 14.00,
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Organization",
    room: "Smart Living",
    description: "Keep family schedules and weekly menus perfectly organized. This flexible, magnetic monthly calendar sheet sticks flat to any magnetic refrigerator door. Coated in a high-gloss protective dry-erase layer for easy cleaning.",
    details: [
      "Thick, high-grip magnetic sheet won't slip or curl",
      "High-gloss dry-erase coating prevents staining or ghosting",
      "Set includes 3 fine-tip dry-erase pens with magnets",
      "Cleans completely blank with a simple damp cloth"
    ],
    materials: "High-grip Magnet, Polyurethane Film",
    dimensions: "16\" Width x 12\" Height",
    stripeUrl: "https://buy.stripe.com/dRm7sL9Ix9DI9x71n18Vi04"
  },
  {
    id: "solar-garden-lantern",
    title: "The Solar Garden Lantern",
    subtitle: "Weatherproof solar-powered warm LED lantern",
    price: 18.00,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    ],
    category: "Lighting",
    room: "Smart Living",
    description: "Bring a warm, grounding illumination to gardens, porches, or pathways. This hanging lantern is solar-powered, charging during the daytime and turning on automatically at dusk with a beautiful, dancing warm candlelight glow.",
    details: [
      "IP65 waterproof and heatproof for outdoor use",
      "High-efficiency integrated solar panel charges in 6 hours",
      "Dusk-to-dawn sensor turns light on automatically",
      "Charming antiqued black iron cage design"
    ],
    materials: "Antiqued Iron Cage, Solar Cell, LED",
    dimensions: "5.5\" Diameter x 9.5\" Height",
    stripeUrl: "https://buy.stripe.com/8x2dR9f2RcPU38Jd5J8Vi02"
  }
]
