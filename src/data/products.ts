import heroPlants from "@/assets/hero-plants-new.webp";
import catDecor from "@/assets/cat-decor.webp";
import catFurniture from "@/assets/cat-furniture.webp";
import catBedding from "@/assets/cat-bedding.webp";
import catKitchen from "@/assets/cat-kitchen.webp";
import catBath from "@/assets/cat-bath.webp";
import prod1 from "@/assets/prod-1.webp";
import prod2 from "@/assets/prod-2.webp";
import prod3 from "@/assets/prod-3.webp";
import prod4 from "@/assets/prod-4.webp";
import reel1 from "@/assets/reel-1.webp";
import reel2 from "@/assets/reel-2.webp";
import reel3 from "@/assets/reel-3.webp";
import reel4 from "@/assets/reel-4.webp";
import reel5 from "@/assets/reel-5.webp";
import livingRoomVases from "@/assets/living-room-vases.webp";
import bathroomAroma from "@/assets/bathroom-aroma.webp";
import woodenBeadsDecor from "@/assets/wooden-beads-decor.webp";
import aboutUsWindow from "@/assets/about-us-window.webp";
import blogPlants from "@/assets/blog-plants.webp";
import blogStyling from "@/assets/blog-styling.webp";
import blogVases from "@/assets/blog-vases.webp";
import logo from "@/assets/logo.webp";
import feature1 from "@/assets/feature-1.webp";
import feature2 from "@/assets/feature-2.webp";
import feature3 from "@/assets/feature-3.webp";
import feature4 from "@/assets/feature-4.webp";
import feature5 from "@/assets/feature-5.webp";
import feature6 from "@/assets/feature-6.webp";
import feature7 from "@/assets/feature-7.webp";
import feature8 from "@/assets/feature-8.webp";
import feature9 from "@/assets/feature-9.webp";
import feature10 from "@/assets/feature-10.webp";
import feature11 from "@/assets/feature-11.webp";
import feature12 from "@/assets/feature-12.webp";
import potBg from "@/assets/pot-bg.webp";

export {
  heroPlants,
  catDecor,
  catFurniture,
  catBedding,
  catKitchen,
  catBath,
  prod1,
  prod2,
  prod3,
  prod4,
  reel1,
  reel2,
  reel3,
  reel4,
  reel5,
  livingRoomVases,
  bathroomAroma,
  woodenBeadsDecor,
  aboutUsWindow,
  blogPlants,
  blogStyling,
  blogVases,
  logo,
  potBg,
};

export const featuresImages = [
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  feature7,
  feature8,
  feature9,
  feature10,
  feature11,
  feature12,
];

export const announcements = [
  "100% Secure Online Payments & Pan India Delivery",
  "Last Chance — Up to 60% Off | Limited Pieces",
  "Use PREPAID5 for 5% OFF above ₹2000",
];

export const navLinks = ["New Arrival", "Shop", "Blogs", "About Us", "Our Stores", "Contact Us"];

export const categories = [
  {
    name: "FRP Pots",
    href: "/frp-pots",
    shopSearch: { category: "frp-pots" },
    img: potBg,
  },
  {
    name: "Artificial Plants",
    href: "/artificial-plants",
    shopSearch: { category: "artificial-plants" },
    img: potBg,
  },
  {
    name: "Terracotta Pots",
    href: "/terracotta-pots",
    shopSearch: { category: "terracotta-pots" },
    img: potBg,
  },
  {
    name: "Pebbles",
    href: "/pebbles",
    shopSearch: { category: "pebbles" },
    img: potBg,
  },
  {
    name: "New Arrivals",
    href: "/new-arrivals",
    shopSearch: { filter: "new-arrivals" },
    img: potBg,
  },
];

export const products = [
  {
    name: "Flax Series Tapered Vases",
    img: "/products/flax/flax_a.webp",
    thumbnails: [
      "/products/flax/flax_a.webp",
      "/products/flax/flax_size_reference.webp"
    ],
    code: "FLX48",
    color: "Sea Green / Matte Teal",
    material: "Premium Matte Fiber-Glass",
    dimensions: "D: H 21\" | C: H 28\" | B: H 33\" | A: H 40\"",
    insideBox: "1 Tapered Floor Vase",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Sleek, minimalist floor vases boasting organic curves and a calming sea green matte finish. Available in four progressive sizes to create a striking architectural landscape in entryways or corners.",
    pairsWith: { code: "DSV2299", name: "Dune Stoneware Vase", img: potBg },
    sizes: [
      { name: "Flax-D (H: 21\")", dimensions: "Height: 21\", Top: 8.5\", Bottom: 6.5\"", price: 4800, mrp: 5500 },
      { name: "Flax-C (H: 28\")", dimensions: "Height: 28\", Top: 11\", Bottom: 8.5\"", price: 6800, mrp: 7800 },
      { name: "Flax-B (H: 33\")", dimensions: "Height: 33\", Top: 13.5\", Bottom: 10\"", price: 9800, mrp: 11200 },
      { name: "Flax-A (H: 40\")", dimensions: "Height: 40\", Top: 16\", Bottom: 12\"", price: 14910, mrp: 16800 }
    ]
  },
  {
    name: "Leaf Textured Planters - Set of 2",
    img: "/products/leafset_2/leafset_2_yellow_sizea.webp",
    thumbnails: [
      "/products/leafset_2/leafset_2_yellow_sizea.webp",
      "/products/leafset_2/leafset_2_black_sizeb.webp",
      "/products/leafset_2/leafset2_sizereference.webp"
    ],
    code: "LFS70",
    color: "Light Grey / Leaf Pattern",
    material: "Textured Ceramic",
    dimensions: "Small: H 16.5\", Top 10.5\" | Large: H 25.5\", Top 17\"",
    insideBox: "Set of 2 Leaf-Patterned Planters",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "A set of two elegant tapered planters featuring subtle leaf texture on a neutral light grey backdrop. Designed to complement tall foliage and architectural indoor plants.",
    pairsWith: { code: "DSV2299", name: "Dune Stoneware Vase", img: potBg },
    sizes: [
      { name: "Size B (Small - H: 16.5\")", dimensions: "Height: 16.5\", Top: 10.5\", Bottom: 10.5\"", price: 4500, mrp: 5200 },
      { name: "Size A (Large - H: 25.5\")", dimensions: "Height: 25.5\", Top: 17\", Bottom: 17\"", price: 9000, mrp: 10200 }
    ]
  },
  {
    name: "Leaf Textured Planters - Set of 3",
    img: "/products/leafset_3/leafset3_a_black.webp",
    thumbnails: [
      "/products/leafset_3/leafset3_a_black.webp",
      "/products/leafset_3/leafset3_a_yellow.webp",
      "/products/leafset_3/leafset3_b_yellow.webp",
      "/products/leafset_3/leafset3_c_yellow.webp",
      "/products/leafset_3/leafset3_size_reference.webp"
    ],
    code: "LFS69",
    color: "Charcoal Grey / Leaf Pattern",
    material: "Stone-finished Ceramic",
    dimensions: "Small: H 13.5\", Top 12.5\" | Medium: H 17.5\", Top 16\" | Large: H 21\", Top 19.5\"",
    insideBox: "Set of 3 Leaf-Patterned Planters",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Embellished with detailed leaf engravings, these charcoal grey planters introduce depth and quiet texture to your plant arrangements. Perfect for modern, rustic, or minimal settings.",
    pairsWith: { code: "DSV2299", name: "Dune Stoneware Vase", img: potBg },
    sizes: [
      { name: "Size C (Small - H: 13.5\")", dimensions: "Height: 13.5\", Top: 12.5\", Bottom: 7.5\"", price: 4500, mrp: 5200 },
      { name: "Size B (Medium - H: 17.5\")", dimensions: "Height: 17.5\", Top: 16\", Bottom: 9\"", price: 7200, mrp: 8100 },
      { name: "Size A (Large - H: 21\")", dimensions: "Height: 21\", Top: 19.5\", Bottom: 10.5\"", price: 8000, mrp: 9100 }
    ]
  },
  {
    name: "VANILLA Planters - Set of 3",
    img: "/products/vanilla/vanilla_sizea_plain.webp",
    thumbnails: [
      "/products/vanilla/vanilla_sizea_plain.webp",
      "/products/vanilla/vanilla_sizea_shining.webp",
      "/products/vanilla/vanilla_sizeb_plain.webp",
      "/products/vanilla/vanilla_sizeb_shining.webp",
      "/products/vanilla/vanilla_sizec_plain.webp",
      "/products/vanilla/vanilla_sizec_shining.webp",
      "/products/vanilla/vanilla_size_reference.webp"
    ],
    code: "VNL83",
    color: "Plain / Shining Finish",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "Small: Top 9\", H 8\" | Medium: Top 13.5\", H 12\" | Large: Top 18\", H 16\"",
    insideBox: "Set of 3 Planters (Sizes A, B, C)",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Add a touch of contemporary refinement to your botanical displays with our Vanilla Planters. Featuring an intricate textured pattern available in Plain and Shining finishes, this set of three rounded planters brings organic charm to any space.",
    pairsWith: { code: "DSV2299", name: "Dune Stoneware Vase", img: "/products/vanilla/vanilla_sizea_plain.webp" },
    sizes: [
      { name: "Size C (Small - H: 8\")", dimensions: "Top: 9\", Bottom: 6\", Height: 8\"", price: 3000, mrp: 3400 },
      { name: "Size B (Medium - H: 12\")", dimensions: "Top: 13.5\", Bottom: 10\", Height: 12\"", price: 5000, mrp: 5700 },
      { name: "Size A (Large - H: 16\")", dimensions: "Top: 18\", Bottom: 14\", Height: 16\"", price: 7300, mrp: 8300 }
    ]
  },
  {
    name: "Areca Ribbed Planters - Set of 3",
    img: "/products/areca/areca_sizea_blackandgrey.webp",
    thumbnails: [
      "/products/areca/areca_sizea_blackandgrey.webp",
      "/products/areca/areca_sizea_greenandgrey.webp",
      "/products/areca/areca_sizeb_blackandgrey.webp",
      "/products/areca/areca_sizeb_greenandgrey.webp",
      "/products/areca/areca_sizec_blackandgrey.webp",
      "/products/areca/areca_sizec_greenandgrey.webp",
      "/products/areca/areca_size_reference.webp"
    ],
    code: "ARC84",
    color: "Charcoal Black / Ribbed",
    material: "Heavy-textured Ceramic",
    dimensions: "Small: H 15\", Top 8\" | Medium: H 20\", Top 11\" | Large: H 26\", Top 15\"",
    insideBox: "Set of 3 Ribbed Planters",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Add a touch of structural drama to your corners with these tall, charcoal black ribbed planters. Their heavy horizontal ribbing provides a beautiful backdrop for bright foliage.",
    pairsWith: { code: "DSV2299", name: "Dune Stoneware Vase", img: potBg },
    sizes: [
      { name: "Size C (Small - H: 15\")", dimensions: "Height: 15\", Top: 8\", Bottom: 5.5\"", price: 5500, mrp: 6200 },
      { name: "Size B (Medium - H: 20\")", dimensions: "Height: 20\", Top: 11\", Bottom: 7.5\"", price: 7000, mrp: 7900 },
      { name: "Size A (Large - H: 26\")", dimensions: "Height: 26\", Top: 15\", Bottom: 10\"", price: 8500, mrp: 9600 }
    ]
  },
  {
    name: "Faux Ficus Tree — 6 Feet",
    img: potBg,
    thumbnails: [potBg, potBg, potBg],
    code: "FFT2399",
    color: "Green",
    price: 2399,
    mrp: 2999,
    material: "Natural wood trunk & Silk leaves",
    dimensions: "Height: 180 cm Approx.",
    insideBox: "1 Ficus Tree in starter pot",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description:
      "A favorite of designers everywhere, the Ficus tree softens hard corners and adds heights to blank walls. Hand-finished with lifelike green leaves and natural wood branches for a realistic look.",
    pairsWith: { code: "DSV2299", name: "Dune Stoneware Vase", img: potBg },
  },
  {
    name: "Dune Stoneware Vase",
    img: potBg,
    thumbnails: [potBg, potBg, potBg],
    code: "DSV2299",
    color: "Sandy Beige",
    price: 2299,
    mrp: 2799,
    material: "Rough-textured Ceramic",
    dimensions: "Height: 30 cm, Width: 18 cm",
    insideBox: "1 Stoneware Vase",
    delivery: "3-5 Working Days",
    payment: "100% Secure Online Payment",
    description:
      "Crafted in small batches, this textured stoneware vessel features a raw, organic finish that accentuates the beauty of dry branches or simple botanical stems.",
    pairsWith: { code: "AVP2500", name: "Artificial Variegated Pothos Plant", img: potBg },
  },
  {
    name: "Loom Rattan Storage Basket",
    img: potBg,
    thumbnails: [potBg, potBg, potBg],
    code: "LRB2799",
    color: "Natural Rattan",
    price: 2799,
    mrp: 3299,
    material: "Woven Rattan & Iron frame",
    dimensions: "Height: 40 cm, Diameter: 35 cm",
    insideBox: "1 Woven Rattan Basket",
    delivery: "3-5 Working Days",
    payment: "100% Secure Online Payment",
    description:
      "Woven by hand using traditional techniques, this rattan basket is the perfect outer cover for your plastic starter pots or as a stylish organic storage solution.",
    pairsWith: { code: "AMD3999", name: "Artificial Monstera Deliciosa Plant", img: potBg },
  },
  // ── PDF Catalog FRP Pot Series ──
  {
    name: "Rock Series Tapered Planters",
    img: "/products/ROCK/ROCK-B_BLACK.webp",
    thumbnails: [
      "/products/ROCK/ROCK-B_BLACK.webp",
      "/products/ROCK/ROCK-C_BLACK.webp",
      "/products/ROCK/ROCK-D_BLACK.webp",
      "/products/ROCK/ROCK_SIZE_REFERENCE.webp"
    ],
    code: "ROCK",
    color: "Black",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "ROCK-B: Top 17x17\", H 18\" | ROCK-C: Top 14x14\", H 15\" | ROCK-D: Top 12x12\", H 12\"",
    insideBox: "1 Rock Series FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Rugged rock-textured planters featuring a distinctive natural stone surface and angular tapered profile. Engineered from weather-resistant fiberglass.",
    sizes: [
      { name: "ROCK-B (17\"x17\" x H: 18\")", dimensions: "Top: 17x17\", Bottom: 12x12\", Height: 18\"", price: 8700, mrp: 9900 },
      { name: "ROCK-C (14\"x14\" x H: 15\")", dimensions: "Top: 14x14\", Bottom: 9x9\", Height: 15\"", price: 6600, mrp: 7500 },
      { name: "ROCK-D (12\"x12\" x H: 12\")", dimensions: "Top: 12x12\", Bottom: 7x7\", Height: 12\"", price: 3850, mrp: 4400 }
    ]
  },
  {
    name: "Diamond Series Geometric Planters",
    img: "/products/DIAMOND/DIAMOND_GENERATED_01.webp",
    thumbnails: [
      "/products/DIAMOND/DIAMOND_GENERATED_01.webp",
      "/products/DIAMOND/DIAMOND_GENERATED_02.webp",
      "/products/DIAMOND/DIAMOND_SIZE_REFERENCE.webp"
    ],
    code: "DIAMOND",
    color: "White",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "DIAMOND-A: Top 12\", H 8.5\" | DIAMOND-B: Top 9\", H 6\"",
    insideBox: "1 Diamond Series Geometric Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Geometric multifaceted planters crafted with sharp precision angles. Light stippled white finish gives a luxury architectural stoneware impression.",
    sizes: [
      { name: "DIAMOND-A (12\" x H: 8.5\")", dimensions: "Top: 12\", Bottom: 12\", Height: 8.5\"", price: 3850, mrp: 4400 },
      { name: "DIAMOND-B (9\" x H: 6\")", dimensions: "Top: 9\", Bottom: 9\", Height: 6\"", price: 2000, mrp: 2300 }
    ]
  },
  {
    name: "Big Shark Series Tall Bullet Planters",
    img: "/products/BIG_SHARK/BIG_SHARK-A_BLACK-1.webp",
    thumbnails: [
      "/products/BIG_SHARK/BIG_SHARK-A_BLACK-1.webp",
      "/products/BIG_SHARK/BIG_SHARK-B_BLACK-3.webp",
      "/products/BIG_SHARK/BIG_SHARK-C_BLACK-1.webp",
      "/products/BIG_SHARK/BIG_SHARK-D_BLACK-3.webp",
      "/products/BIG_SHARK/BIG_SHARK_SIZE_REFERENCE.webp"
    ],
    code: "BSHARK",
    color: "Matte Black",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "B.SHARK-A: H 40\" | B.SHARK-B: H 31\" | B.SHARK-C: H 24\" | B.SHARK-D: H 18.5\"",
    insideBox: "1 Big Shark FRP Bullet Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Commanding tall bullet-profile planters with smooth contoured curves. Ideal for grand entrances, foyers, and high-ceiling atrium spaces.",
    sizes: [
      { name: "B.SHARK-A (Top: 21.5\", H: 40\")", dimensions: "Top: 21.5\", Bottom: 13\", Height: 40\"", price: 16600, mrp: 18900 },
      { name: "B.SHARK-B (Top: 16.5\", H: 31\")", dimensions: "Top: 16.5\", Bottom: 10\", Height: 31\"", price: 8800, mrp: 9900 },
      { name: "B.SHARK-C (Top: 12.5\", H: 24\")", dimensions: "Top: 12.5\", Bottom: 7\", Height: 24\"", price: 6500, mrp: 7400 },
      { name: "B.SHARK-D (Top: 9\", H: 18.5\")", dimensions: "Top: 9\", Bottom: 5.5\", Height: 18.5\"", price: 3240, mrp: 3700 }
    ]
  },
  {
    name: "Flora Series Speckled Planters",
    img: "/products/FLORA/FLORA-B_BLACK-2.webp",
    thumbnails: [
      "/products/FLORA/FLORA-B_BLACK-2.webp",
      "/products/FLORA/FLORA-D_BLACK-2.webp",
      "/products/FLORA/FLORA_SIZE_REFERENCE.webp"
    ],
    code: "FLORA",
    color: "Black Speckled",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "FLORA-B: Top 18\", H 18\" | FLORA-D: Top 10\", H 10\"",
    insideBox: "1 Flora Series FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Deep round basin planters with fine stone speckling. Designed to house full bushy botanicals and indoor specimen plants.",
    sizes: [
      { name: "FLORA-B (Top: 18\", H: 18\")", dimensions: "Top: 18\", Bottom: 11\", Height: 18\"", price: 6580, mrp: 7500 },
      { name: "FLORA-D (Top: 10\", H: 10\")", dimensions: "Top: 10\", Bottom: 6\", Height: 10\"", price: 2500, mrp: 2900 }
    ]
  },
  {
    name: "Pool Series Low Bowl Planters",
    img: "/products/POOL/POOL-A_BLACK-1.webp",
    thumbnails: [
      "/products/POOL/POOL-A_BLACK-1.webp",
      "/products/POOL/POOL-C_BLACK-1.webp",
      "/products/POOL/POOL-C_WHITE-1.webp",
      "/products/POOL/POOL_SIZE_REFERENCE.webp"
    ],
    code: "POOL",
    color: "Black / White",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "POOL-A: Top 19\", H 16\" | POOL-C: Top 11\", H 9.5\"",
    insideBox: "1 Pool Series FRP Bowl Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Curved spherical bowl planters with smooth rounded bases. Creates low-profile elegance for coffee tables, balconies, and lounge areas.",
    sizes: [
      { name: "POOL-A (Top: 19\", H: 16\")", dimensions: "Top: 19\", Bottom: 10\", Height: 16\"", price: 8000, mrp: 9100 },
      { name: "POOL-C (Top: 11\", H: 9.5\")", dimensions: "Top: 11\", Bottom: 5.5\", Height: 9.5\"", price: 3000, mrp: 3400 }
    ]
  },
  {
    name: "Cone Series Ribbed Cylinder Planters",
    img: "/products/CONE/CONE-A_GREY-1.webp",
    thumbnails: [
      "/products/CONE/CONE-A_GREY-1.webp",
      "/products/CONE/CONE-B_GREY-2.webp",
      "/products/CONE/CONE-C_GREY-1.webp",
      "/products/CONE/CONE_SIZE_REFERENCE.webp"
    ],
    code: "CONE",
    color: "Textured Grey",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "CONE-A: Top 14.5\", H 15\" | CONE-B: Top 11\", H 12.5\" | CONE-C: Top 9\", H 9.5\"",
    insideBox: "1 Cone Series Ribbed Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Horizontal grooved cylindrical planters with subtle rustic banding. Soft grey tone seamlessly blends with Scandinavian and modern interiors.",
    sizes: [
      { name: "CONE-A (Top: 14.5\", H: 15\")", dimensions: "Top: 14.5\", Bottom: 11\", Height: 15\"", price: 7200, mrp: 8200 },
      { name: "CONE-B (Top: 11\", H: 12.5\")", dimensions: "Top: 11\", Bottom: 9\", Height: 12.5\"", price: 4800, mrp: 5500 },
      { name: "CONE-C (Top: 9\", H: 9.5\")", dimensions: "Top: 9\", Bottom: 8\", Height: 9.5\"", price: 3000, mrp: 3400 }
    ]
  },
  {
    name: "King Series Vertical Fluted Planter",
    img: "/products/KING/KING-A_product.webp",
    thumbnails: [
      "/products/KING/KING-A_product.webp",
      "/products/KING/KING_size_reference.webp"
    ],
    code: "KING",
    color: "Matte Black",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "Top 13.5\", Bottom 14\", Height 21\"",
    insideBox: "1 King Series Fluted FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Regal cylindrical vessel featuring crisp vertical fluting. Adds rhythmic architectural texture to living rooms and executive suites.",
    sizes: [
      { name: "KING-A (Top: 13.5\", H: 21\")", dimensions: "Top: 13.5\", Bottom: 14\", Height: 21\"", price: 8650, mrp: 9800 }
    ]
  },
  {
    name: "Cool Series Bouclé Textured Planter",
    img: "/products/COOL/COOL-B_BROWN-1.webp",
    thumbnails: [
      "/products/COOL/COOL-B_BROWN-1.webp",
      "/products/COOL/COOL_SIZE_REFERENCE.webp"
    ],
    code: "COOL",
    color: "Earth Brown",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "Top 11\", Bottom 9\", Height 16\"",
    insideBox: "1 Cool Series Brown FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Tactile cylinder planter with a warm brown stone finish. Designed to bring grounded organic warmth into contemporary interiors.",
    sizes: [
      { name: "COOL-B (Top: 11\", H: 16\")", dimensions: "Top: 11\", Bottom: 9\", Height: 16\"", price: 4200, mrp: 4800 }
    ]
  },
  {
    name: "E-Pot Series Abstract Face Planters",
    img: "/products/E_POT/E-POT-A_black.webp",
    thumbnails: [
      "/products/E_POT/E-POT-A_black.webp",
      "/products/E_POT/E-POT-A_white.webp",
      "/products/E_POT/E-POT-B_black.webp",
      "/products/E_POT/E-POT-B_white.webp",
      "/products/E_POT/E-POT_size_reference.webp"
    ],
    code: "EPOT",
    color: "Black / White",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "E.POT-A: Top 12\", H 21\" | E.POT-B: Top 12\", H 12\"",
    insideBox: "1 E-Pot Abstract Face FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Sculptural abstract face planters blending modern art with functional pottery. Statement art pieces for consoles, side tables, and plant shelves.",
    sizes: [
      { name: "E.POT-A (Top: 12\", H: 21\")", dimensions: "Top: 12\", Bottom: 15\", Height: 21\"", price: 7500, mrp: 8500 },
      { name: "E.POT-B (Top: 12\", H: 12\")", dimensions: "Top: 12\", Bottom: 11\", Height: 12\"", price: 3300, mrp: 3800 }
    ]
  },
  {
    name: "Ball Series Spherical Planters",
    img: "/products/BALL/BALL_product_pair_1.webp",
    thumbnails: [
      "/products/BALL/BALL_product_pair_1.webp",
      "/products/BALL/BALL_product_pair_2.webp",
      "/products/BALL/BALL_size_reference.webp"
    ],
    code: "BALL",
    color: "Granite Black",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "BALL-A: Top 13\", H 15.5\" | BALL-B: Top 9\", H 11.5\"",
    insideBox: "1 Ball Series Spherical FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Stunning orb-shaped spherical planters with textured granite coating. Soft rounded form creates a calming visual centerpiece.",
    sizes: [
      { name: "BALL-A (Top: 13\", H: 15.5\")", dimensions: "Top: 13\", Bottom: 8\", Height: 15.5\"", price: 5400, mrp: 6100 },
      { name: "BALL-B (Top: 9\", H: 11.5\")", dimensions: "Top: 9\", Bottom: 6\", Height: 11.5\"", price: 3600, mrp: 4100 }
    ]
  },
  {
    name: "Pota Series Grooved Basin Planters",
    img: "/products/pota/pota_a.webp",
    thumbnails: [
      "/products/pota/pota_a.webp",
      "/products/pota/pota_b.webp",
      "/products/pota/pota_c.webp",
      "/products/pota/pota_size_reference.webp"
    ],
    code: "POTA",
    color: "Dark Charcoal",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "POTA-A: Top 20\", H 19\" | POTA-B: Top 16\", H 16\" | POTA-C: Top 14\", H 13\"",
    insideBox: "1 Pota Series Grooved FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Heavy horizontal grooved planters with wide upper rims. Designed for large root systems and outdoor garden displays.",
    sizes: [
      { name: "POTA-A (Top: 20\", H: 19\")", dimensions: "Top: 20\", Bottom: 13\", Height: 19\"", price: 9000, mrp: 10200 },
      { name: "POTA-B (Top: 16\", H: 16\")", dimensions: "Top: 16\", Bottom: 11\", Height: 16\"", price: 6500, mrp: 7400 },
      { name: "POTA-C (Top: 14\", H: 13\")", dimensions: "Top: 14\", Bottom: 9\", Height: 13\"", price: 3800, mrp: 4300 }
    ]
  },
  {
    name: "Poppy Series Fluted Pillar Planters",
    img: "/products/poppy/poppy_a.webp",
    thumbnails: [
      "/products/poppy/poppy_a.webp",
      "/products/poppy/poppy_b.webp",
      "/products/poppy/poppy_size_reference_image.webp"
    ],
    code: "POPPY",
    color: "Concrete Grey",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "POPPY-A: Top 14.5\", H 25\" | POPPY-B: Top 14\", H 20\"",
    insideBox: "1 Poppy Series Fluted FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Industrial chic pillar planters with micro-ribbed vertical textures. Perfect for architectural greens, palms, and fiddle-leaf figs.",
    sizes: [
      { name: "POPPY-A (Top: 14.5\", H: 25\")", dimensions: "Top: 14.5\", Bottom: 16\", Height: 25\"", price: 7770, mrp: 8800 },
      { name: "POPPY-B (Top: 14\", H: 20\")", dimensions: "Top: 14\", Bottom: 15\", Height: 20\"", price: 6100, mrp: 6900 }
    ]
  },
  {
    name: "Tulip Series Flared Floor Vases",
    img: "/products/tulip/tulip_a.webp",
    thumbnails: [
      "/products/tulip/tulip_a.webp",
      "/products/tulip/tulip_e.webp",
      "/products/tulip/tulip_size_reference_image.webp"
    ],
    code: "TULIP",
    color: "Warm Beige",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "TULIP-A: Top 21\", H 42\" | TULIP-E: Top 7\", H 13\"",
    insideBox: "1 Tulip Series Flared FRP Urn",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Gracefully flared urn planters with smooth organic curves. High-end beige sandstone texture suits luxury hotel lobbies and open plan living.",
    sizes: [
      { name: "TULIP-A (Top: 21\", H: 42\")", dimensions: "Top: 21\", Bottom: 12.5\", Height: 42\"", price: 16170, mrp: 18300 },
      { name: "TULIP-E (Top: 7\", H: 13\")", dimensions: "Top: 7\", Bottom: 4\", Height: 13\"", price: 3280, mrp: 3700 }
    ]
  },
  {
    name: "Lilly Series Curved Urn Planters",
    img: "/products/LILLY/lily_a_green.webp",
    thumbnails: [
      "/products/LILLY/lily_a_green.webp",
      "/products/LILLY/lily_b_whit.webp",
      "/products/LILLY/lily_size_reference.webp"
    ],
    code: "LILLY",
    color: "Forest Green / Light Grey",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "LILLY-A: Top 14\", H 42\" | LILLY-B: Top 16\", H 30\"",
    insideBox: "1 Lilly Series Curved FRP Urn",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Elegant organic teardrop planters boasting smooth rounded sides. Hand-finished in calm neutral hues for timeless appeal.",
    sizes: [
      { name: "LILLY-A (Green - Top: 14\", H: 42\")", dimensions: "Top: 14\", Bottom: 12.5\", Height: 42\"", price: 16140, mrp: 18300 },
      { name: "LILLY-B (Grey - Top: 16\", H: 30\")", dimensions: "Top: 16\", Bottom: 14.5\", Height: 30\"", price: 10350, mrp: 11700 }
    ]
  },
  {
    name: "Sunflower Series Tapered Cylinders",
    img: "/products/SUNFLOWER/sun_b_yellow.webp",
    thumbnails: [
      "/products/SUNFLOWER/sun_b_yellow.webp",
      "/products/SUNFLOWER/sun_c_brown.webp",
      "/products/SUNFLOWER/sun_d_brown.webp",
      "/products/SUNFLOWER/sun_size_reference.webp"
    ],
    code: "SUNFLOWER",
    color: "Beige / Earth Brown",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "SUN-B: Top 14\", H 22\" | SUN-C: Top 12\", H 16\" | SUN-D: Top 10\", H 11\"",
    insideBox: "1 Sunflower Series FRP Cylinder",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Modern tapered cylindrical planters with clean straight walls and subtle warm undertones. Versatile choice for desk and floor plants.",
    sizes: [
      { name: "SUN-B (Beige - Top: 14\", H: 22\")", dimensions: "Top: 14\", Bottom: 5.75\", Height: 22\"", price: 6450, mrp: 7300 },
      { name: "SUN-C (Brown - Top: 12\", H: 16\")", dimensions: "Top: 12\", Bottom: 4.75\", Height: 16\"", price: 5200, mrp: 5900 },
      { name: "SUN-D (Brown - Top: 10\", H: 11\")", dimensions: "Top: 10\", Bottom: 4\", Height: 11\"", price: 2950, mrp: 3300 }
    ]
  },
  {
    name: "Pansy Series Tapered Column Planters",
    img: "/products/PANSY/PANSY_A.webp",
    thumbnails: [
      "/products/PANSY/PANSY_A.webp",
      "/products/PANSY/PANSY_B.webp",
      "/products/PANSY/PANSY_C.webp",
      "/products/PANSY/PANSY_SIZE_REFERENCE.webp"
    ],
    code: "PANSY",
    color: "Speckled Black",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "PANSY-A: Top 12\", H 30\" | PANSY-B: Top 11\", H 24\" | PANSY-C: Top 8\", H 18\"",
    insideBox: "1 Pansy Series Tapered FRP Column",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Sleek bullet-profile planters with subtle terrazzo speckling. High height-to-width ratio ideal for elevating indoor trees.",
    sizes: [
      { name: "PANSY-A (Top: 12\", H: 30\")", dimensions: "Top: 12\", Bottom: 12\", Height: 30\"", price: 7200, mrp: 8100 },
      { name: "PANSY-B (Top: 11\", H: 24\")", dimensions: "Top: 11\", Bottom: 11\", Height: 24\"", price: 5760, mrp: 6500 },
      { name: "PANSY-C (Top: 8\", H: 18\")", dimensions: "Top: 8\", Bottom: 8\", Height: 18\"", price: 4430, mrp: 5000 }
    ]
  },
  {
    name: "Hollyhock Wide Drum Planter",
    img: "/products/HOLLY/holly_b.webp",
    thumbnails: [
      "/products/HOLLY/holly_b.webp",
      "/products/HOLLY/holly_size_reference.webp"
    ],
    code: "HOLLY",
    color: "Sandstone Beige",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "Top 30\", Bottom 17\", Height 30\"",
    insideBox: "1 Hollyhock Wide FRP Drum Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Monumental wide-mouth drum planter engineered for large root balls and statement specimen trees. Beautiful raw stone texture.",
    sizes: [
      { name: "HOLLY-B (Top: 30\", H: 30\")", dimensions: "Top: 30\", Bottom: 17\", Height: 30\"", price: 22600, mrp: 25500 }
    ]
  },
  {
    name: "Rose Series Terracotta Red Bowls",
    img: "/products/ROSE/rose_b.webp",
    thumbnails: [
      "/products/ROSE/rose_b.webp",
      "/products/ROSE/rose_c.webp",
      "/products/ROSE/rose_size_reference.webp"
    ],
    code: "ROSE",
    color: "Terracotta Red",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "ROSE-B: Top 17\", H 15\" | ROSE-C: Top 13\", H 10\"",
    insideBox: "1 Rose Series FRP Bowl Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Low-slung rounded bowl planters in vibrant terracotta red tone. Excellent for bonsai, succulents, and cascading floral arrangements.",
    sizes: [
      { name: "ROSE-B (Top: 17\", H: 15\")", dimensions: "Top: 17\", Bottom: 6\", Height: 15\"", price: 6280, mrp: 7100 },
      { name: "ROSE-C (Top: 13\", H: 10\")", dimensions: "Top: 13\", Bottom: 4.5\", Height: 10\"", price: 4240, mrp: 4800 }
    ]
  },
  {
    name: "Glory Series Tapered Stone Pots",
    img: "/products/GLORY/glory_b.webp",
    thumbnails: [
      "/products/GLORY/glory_b.webp",
      "/products/GLORY/glory_c.webp",
      "/products/GLORY/glory_d.webp",
      "/products/GLORY/glory_e.webp",
      "/products/GLORY/GLORY_SIZE_REFERENCE.webp"
    ],
    code: "GLORY",
    color: "Stone Grey",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "GLORY-B: Top 20\", H 23\" | GLORY-C: Top 16\", H 18\" | GLORY-D: Top 12\", H 14\" | GLORY-E: Top 9\", H 10\"",
    insideBox: "1 Glory Series FRP Tapered Pot",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Classic minimalist tapered planters in granite grey finish. Available in 4 nested sizes for cohesive landscaping across indoor and outdoor spaces.",
    sizes: [
      { name: "GLORY-B (Top: 20\", H: 23\")", dimensions: "Top: 20\", Bottom: 10.3\", Height: 23\"", price: 8180, mrp: 9200 },
      { name: "GLORY-C (Top: 16\", H: 18\")", dimensions: "Top: 16\", Bottom: 8.5\", Height: 18\"", price: 6360, mrp: 7200 },
      { name: "GLORY-D (Top: 12\", H: 14\")", dimensions: "Top: 12\", Bottom: 6.5\", Height: 14\"", price: 4580, mrp: 5100 },
      { name: "GLORY-E (Top: 9\", H: 10\")", dimensions: "Top: 9\", Bottom: 4.5\", Height: 10\"", price: 3610, mrp: 4000 }
    ]
  },
  {
    name: "Star Series Wide Angle Planter",
    img: "/products/STAR/STAR-A.webp",
    thumbnails: [
      "/products/STAR/STAR-A.webp",
      "/products/STAR/STAR_SIZE_REFERENCE.webp"
    ],
    code: "STAR",
    color: "Moss Green",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "Top 28\", Bottom 17\", Height 32\"",
    insideBox: "1 Star Series Wide Angle FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Substantial wide-base conical planter featuring a deep textured moss green skin. High-impact luxury planter for entry lobbies.",
    sizes: [
      { name: "STAR-A (Top: 28\", H: 32\")", dimensions: "Top: 28\", Bottom: 17\", Height: 32\"", price: 22700, mrp: 25600 }
    ]
  },
  {
    name: "Daisy Series Column Pillars",
    img: "/products/daisy/daisy_a.webp",
    thumbnails: [
      "/products/daisy/daisy_a.webp",
      "/products/daisy/daisy_b.webp",
      "/products/daisy/daisy_c.webp",
      "/products/daisy/daisy_size_reference.webp"
    ],
    code: "DAISY",
    color: "Yellow Beige",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "DAISY-A: Top 10\", H 30\" | DAISY-B: Top 10\", H 20\" | DAISY-C: Top 10\", H 10\"",
    insideBox: "1 Daisy Series FRP Column Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Straight-walled cylindrical pillar planters in warm sunny beige sandstone. Great for creating vertical height variations.",
    sizes: [
      { name: "DAISY-A (Top: 10\", H: 30\")", dimensions: "Top: 10\", Bottom: 10\", Height: 30\"", price: 7900, mrp: 8900 },
      { name: "DAISY-B (Top: 10\", H: 20\")", dimensions: "Top: 10\", Bottom: 10\", Height: 20\"", price: 6500, mrp: 7300 },
      { name: "DAISY-C (Top: 10\", H: 10\")", dimensions: "Top: 10\", Bottom: 10\", Height: 10\"", price: 5010, mrp: 5600 }
    ]
  },
  {
    name: "Orchid Series Fluted Round Planters",
    img: "/products/orchid/orchid_a_beige.webp",
    thumbnails: [
      "/products/orchid/orchid_a_beige.webp",
      "/products/orchid/orchid_a_white.webp",
      "/products/orchid/orchid_b_beige.webp",
      "/products/orchid/orchid_b_white.webp",
      "/products/orchid/orchid_c_beige.webp",
      "/products/orchid/orchid_c_white.webp",
      "/products/orchid/orchid_d_beige.webp",
      "/products/orchid/orchid_d_white.webp",
      "/products/orchid/orchid_size_reference.webp"
    ],
    code: "ORCHID",
    color: "Off-White / Natural Beige",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "ORCHID-A: Top 17\", H 33\" | ORCHID-B: Top 19\", H 24\" | ORCHID-C: Top 11\", H 15.5\" | ORCHID-D: Top 19\", H 12.5\"",
    insideBox: "1 Orchid Series Fluted FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Tactile fluted planters featuring fine vertical ribbing and soft rounded profiles. High-end Scandinavian luxury aesthetic.",
    sizes: [
      { name: "ORCHID-A (Top: 17\", H: 33\")", dimensions: "Top: 17\", Bottom: 12\", Height: 33\"", price: 22000, mrp: 24800 },
      { name: "ORCHID-B (Top: 19\", H: 24\")", dimensions: "Top: 19\", Bottom: 16.5\", Height: 24\"", price: 18000, mrp: 20300 },
      { name: "ORCHID-C (Top: 11\", H: 15.5\")", dimensions: "Top: 11\", Bottom: 8\", Height: 15.5\"", price: 13000, mrp: 14600 },
      { name: "ORCHID-D (Top: 19\", H: 12.5\")", dimensions: "Top: 19\", Bottom: 17\", Height: 12.5\"", price: 10000, mrp: 11300 }
    ]
  },
  {
    name: "Jupiter Series Salt & Pepper Planters",
    img: "/products/jupiter/jupiter_a_black.webp",
    thumbnails: [
      "/products/jupiter/jupiter_a_black.webp",
      "/products/jupiter/jupiter_a_grey.webp",
      "/products/jupiter/jupiter_b_black.webp",
      "/products/jupiter/jupiter_b_grey.webp",
      "/products/jupiter/jupiter_c_black.webp",
      "/products/jupiter/jupiter_c_grey.webp",
      "/products/jupiter/jupiter_d_black.webp",
      "/products/jupiter/jupiter_d_grey.webp",
      "/products/jupiter/jupiter_size_reference.webp"
    ],
    code: "JUPITER",
    color: "Black & Grey Speckled",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "JUPITER-A: Top 19\", H 19\" | JUPITER-B: Top 16\", H 16\" | JUPITER-C: Top 13\", H 12.5\" | JUPITER-D: Top 10\", H 9.5\"",
    insideBox: "1 Jupiter Series Speckled FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Heavy speckled cylindrical planters inspired by planetary textures. Charcoal grey with fine white quartz flecks.",
    sizes: [
      { name: "JUPITER-A (Top: 19\", H: 19\")", dimensions: "Top: 19\", Bottom: 19\", Height: 19\"", price: 12000, mrp: 13500 },
      { name: "JUPITER-B (Top: 16\", H: 16\")", dimensions: "Top: 16\", Bottom: 16\", Height: 16\"", price: 8000, mrp: 9000 },
      { name: "JUPITER-C (Top: 13\", H: 12.5\")", dimensions: "Top: 13\", Bottom: 13\", Height: 12.5\"", price: 5000, mrp: 5600 },
      { name: "JUPITER-D (Top: 10\", H: 9.5\")", dimensions: "Top: 10\", Bottom: 10\", Height: 9.5\"", price: 3000, mrp: 3400 }
    ]
  },
  {
    name: "Orange Series Ribbed Globe Planters",
    img: "/products/orange/orange_a.webp",
    thumbnails: [
      "/products/orange/orange_a.webp",
      "/products/orange/orange_b.webp",
      "/products/orange/orange_c.webp",
      "/products/orange/orange_size_reference.webp"
    ],
    code: "ORANGE",
    color: "Olive Green",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "ORANGE-A: Top 18\", H 16\" | ORANGE-B: Top 13\", H 12\" | ORANGE-C: Top 10\", H 9\"",
    insideBox: "1 Orange Series Ribbed FRP Globe Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Distinctive globe-shaped planters featuring horizontal linear ribbing. Olive green stone finish brings natural elegance.",
    sizes: [
      { name: "ORANGE-A (Top: 18\", H: 16\")", dimensions: "Top: 18\", Bottom: 11\", Height: 16\"", price: 10500, mrp: 11800 },
      { name: "ORANGE-B (Top: 13\", H: 12\")", dimensions: "Top: 13\", Bottom: 8\", Height: 12\"", price: 5600, mrp: 6300 },
      { name: "ORANGE-C (Top: 10\", H: 9\")", dimensions: "Top: 10\", Bottom: 6\", Height: 9\"", price: 3000, mrp: 3400 }
    ]
  },
  {
    name: "Iris Full Body Tall Pillar Planter",
    img: "/products/iris/iris_sizea_black.webp",
    thumbnails: [
      "/products/iris/iris_sizea_black.webp",
      "/products/iris/iris_size_reference.webp"
    ],
    code: "IRIS",
    color: "Granite Black",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "Top 8\", Bottom 8\", Height 36\"",
    insideBox: "1 Iris Full Body Tall FRP Pillar Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Ultra-tall 36-inch tapered pillar planter designed for grand statement plants, bamboos, and entry archways.",
    sizes: [
      { name: "IRIS-A (Top: 8\", H: 36\")", dimensions: "Top: 8\", Bottom: 8\", Height: 36\"", price: 7200, mrp: 8100 }
    ]
  },
  {
    name: "Patato Full Body Urn Planter",
    img: "/products/potato/potato_sizea_white.webp",
    thumbnails: [
      "/products/potato/potato_sizea_white.webp",
      "/products/potato/potato_size_reference.webp"
    ],
    code: "PATATO",
    color: "Off-White Sandstone",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "Top 17x16\", Bottom 14.5\", Height 44\"",
    insideBox: "1 Patato Full Body FRP Urn Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Substantial egg-shaped urn planter standing 44 inches tall. Smooth off-white sandstone texture adds luxury quiet sophistication.",
    sizes: [
      { name: "PATATO-A (Top: 17\"x16\", H: 44\")", dimensions: "Top: 17x16\", Bottom: 14.5\", Height: 44\"", price: 16850, mrp: 18900 }
    ]
  },
  {
    name: "Boat Series Oval Trough Planters",
    img: "/products/boat/boat_size_a_black.webp",
    thumbnails: [
      "/products/boat/boat_size_a_black.webp",
      "/products/boat/boat_size_b_black.webp",
      "/products/boat/boat_size_b_red.webp",
      "/products/boat/boat_size_c_black.webp",
      "/products/boat/boat_size_c_red.webp"
    ],
    code: "BOAT",
    color: "Black / Red",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "BOAT-A: Top 39x16\", H 13.5\" | BOAT-B: Top 33x13\", H 11\" | BOAT-C: Top 29x10\", H 8.5\"",
    insideBox: "1 Boat Series Oval FRP Trough Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Elongated boat-shaped trough planters ideal for window sills, long consoles, dining tables, and balcony railings.",
    sizes: [
      { name: "BOAT-A (Top: 39\"x16\", H: 13.5\")", dimensions: "Top: 39x16\", Bottom: 32x10\", Height: 13.5\"", price: 11800, mrp: 13300 },
      { name: "BOAT-B (Top: 33\"x13\", H: 11\")", dimensions: "Top: 33x13\", Bottom: 28x8\", Height: 11\"", price: 8000, mrp: 9000 },
      { name: "BOAT-C (Top: 29\"x10\", H: 8.5\")", dimensions: "Top: 29x10\", Bottom: 25x6\", Height: 8.5\"", price: 5400, mrp: 6100 }
    ]
  },
  {
    name: "Juniper Series Horizontal Grooved Bowls",
    img: "/products/juniper/juniper-sizea_black.webp",
    thumbnails: [
      "/products/juniper/juniper-sizea_black.webp",
      "/products/juniper/juniper_sizeb_grey.webp",
      "/products/juniper/juniper_sizec_black.webp",
      "/products/juniper/juniper_sizec_grey.webp",
      "/products/juniper/juniper_sized_black.webp",
      "/products/juniper/juniper_sized_grey.webp",
      "/products/juniper/juniper_size_reference.webp"
    ],
    code: "JUNIPER",
    color: "Black / Concrete Grey",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "JUNIPER-A: Top 21.5\", H 17.5\" | JUNIPER-B: Top 16\", H 13\" | JUNIPER-C: Top 12\", H 10\" | JUNIPER-D: Top 8\", H 7\"",
    insideBox: "1 Juniper Series FRP Grooved Bowl",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Broad rounded bowl planters with fine horizontal lathe grooves. Soft curved silhouette cradles indoor palms and ferns.",
    sizes: [
      { name: "JUNIPER-A (Top: 21.5\", H: 17.5\")", dimensions: "Top: 21.5\", Bottom: 16\", Height: 17.5\"", price: 9000, mrp: 10100 },
      { name: "JUNIPER-B (Top: 16\", H: 13\")", dimensions: "Top: 16\", Bottom: 12\", Height: 13\"", price: 7000, mrp: 7900 },
      { name: "JUNIPER-C (Top: 12\", H: 10\")", dimensions: "Top: 12\", Bottom: 8\", Height: 10\"", price: 5000, mrp: 5600 },
      { name: "JUNIPER-D (Top: 8\", H: 7\")", dimensions: "Top: 8\", Bottom: 5\", Height: 7\"", price: 3000, mrp: 3400 }
    ]
  },
  {
    name: "Jack Diamond Lattice Planters",
    img: "/products/jack/jack_sizea_plain.webp",
    thumbnails: [
      "/products/jack/jack_sizea_plain.webp",
      "/products/jack/jack_sizea_shining.webp",
      "/products/jack/jack_sizeb_plain.webp",
      "/products/jack/jack_sizeb_shining.webp",
      "/products/jack/jack_sizec_plain.webp",
      "/products/jack/jack_sizec_shining.webp",
      "/products/jack/jack_size_reference.webp"
    ],
    code: "JACK",
    color: "Sage Green Textured",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "JACK-A: Top 18\", H 19.5\" | JACK-B: Top 13.5\", H 15\" | JACK-C: Top 11.5\", H 12\"",
    insideBox: "1 Jack Diamond Lattice FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Diamond grid cross-hatched planters with a tactile textured finish. Complements floral greenery and statement indoor trees.",
    sizes: [
      { name: "JACK-A (Top: 18\", H: 19.5\")", dimensions: "Top: 18\", Bottom: 11\", Height: 19.5\"", price: 7500, mrp: 8500 },
      { name: "JACK-B (Top: 13.5\", H: 15\")", dimensions: "Top: 13.5\", Bottom: 9\", Height: 15\"", price: 5500, mrp: 6200 },
      { name: "JACK-C (Top: 11.5\", H: 12\")", dimensions: "Top: 11.5\", Bottom: 7\", Height: 12\"", price: 3500, mrp: 3900 }
    ]
  },
  {
    name: "Drum Series Hourglass Pedestal Planter",
    img: "/products/drum/drum_sizeb_white.webp",
    thumbnails: [
      "/products/drum/drum_sizeb_white.webp",
      "/products/drum/drum_size_reference.webp"
    ],
    code: "DRUM",
    color: "Off-White Speckled",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "Top 14\", Bottom 10\", Height 23\"",
    insideBox: "1 Drum Series Hourglass FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Architectural hourglass drum planter with a central waist constriction. Carved stippled stone finish.",
    sizes: [
      { name: "DRUM-B (Top: 14\", H: 23\")", dimensions: "Top: 14\", Bottom: 10\", Height: 23\"", price: 8500, mrp: 9600 }
    ]
  },
  {
    name: "Panda Terracotta Orange Cylinder",
    img: "/products/panda/panda_sizea_orange.webp",
    thumbnails: [
      "/products/panda/panda_sizea_orange.webp",
      "/products/panda/panda_size_reference.webp"
    ],
    code: "PANDA",
    color: "Terracotta Orange",
    material: "Premium Fiber-Glass (FRP)",
    dimensions: "Top 18.5\", Bottom 17\", Height 16\"",
    insideBox: "1 Panda Terracotta Orange FRP Planter",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description: "Bold vibrant orange cylindrical planter with fine stippled finish. Adds a warm pop of Mediterranean sunshine to modern living rooms.",
    sizes: [
      { name: "PANDA-A (Top: 18.5\", H: 16\")", dimensions: "Top: 18.5\", Bottom: 17\", Height: 16\"", price: 9000, mrp: 10100 }
    ]
  },
];

export const vases = [
  {
    name: "Aero Black Ceramic Vessel",
    img: potBg,
    thumbnails: [potBg, potBg, potBg],
    code: "ABV2999",
    color: "Matte Black",
    material: "Ceramic",
    dimensions: "Height: 35 cm Approx.",
    insideBox: "1 Black Ceramic Vessel",
    delivery: "3-5 Working Days",
    payment: "100% Secure Online Payment",
    description:
      "Add a bold sculptural touch to your shelves with the Aero Matte Black Ceramic Vessel. Its sleek, geometric silhouette is designed to contrast beautifully with soft organic branches.",
    pairsWith: { code: "DSV2299", name: "Dune Stoneware Vase", img: potBg },
  },
  {
    name: "Dune Stoneware Vase",
    img: potBg,
    thumbnails: [potBg, potBg, potBg],
    code: "DSV2299",
    color: "Sandy Beige",
    material: "Rough-textured Ceramic",
    dimensions: "Height: 30 cm, Width: 18 cm",
    insideBox: "1 Stoneware Vase",
    delivery: "3-5 Working Days",
    payment: "100% Secure Online Payment",
    description:
      "Crafted in small batches, this textured stoneware vessel features a raw, organic finish that accentuates the beauty of dry branches or simple botanical stems.",
    pairsWith: { code: "ABV2999", name: "Aero Black Ceramic Vessel", img: potBg },
  },
  {
    name: "Halo Marble Bowl",
    img: potBg,
    thumbnails: [potBg, potBg, potBg],
    code: "HMB4999",
    color: "White Marble",
    material: "Genuine Marble",
    dimensions: "Diameter: 25 cm Approx.",
    insideBox: "1 Marble Bowl",
    delivery: "3-5 Working Days",
    payment: "100% Secure Online Payment",
    description:
      "Carved from solid white marble, this decorative bowl features beautiful grey veining. Perfect as a keys dish on your entryway console or a centerpiece on your dining table.",
    pairsWith: { code: "LRB2799", name: "Loom Rattan Basket", img: potBg },
  },
  {
    name: "Loom Rattan Basket",
    img: potBg,
    thumbnails: [potBg, potBg, potBg],
    code: "LRB2799",
    color: "Natural Rattan",
    material: "Woven Rattan",
    dimensions: "Height: 40 cm, Diameter: 35 cm",
    insideBox: "1 Woven Rattan Basket",
    delivery: "3-5 Working Days",
    payment: "100% Secure Online Payment",
    description:
      "Woven by hand using traditional techniques, this rattan basket is the perfect outer cover for your plastic starter pots or as a stylish organic storage solution.",
    pairsWith: { code: "HMB4999", name: "Halo Marble Bowl", img: potBg },
  },
];

// Additional products in reels/related sections
export const auxiliaryProducts = [
  {
    name: "Faux Bougainvillea — 4 ft",
    img: potBg,
    thumbnails: [potBg, potBg, potBg],
    code: "FBV3999",
    color: "Magenta Pink",
    material: "Premium Silk flowers & plastic stem",
    dimensions: "Height: 120 cm (4 Feet) Approx.",
    insideBox: "1 Faux Bougainvillea Plant",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description:
      "Bring a vibrant, maintenance-free pop of Mediterranean pink to your home. This Faux Bougainvillea is crafted with realistic silk blossoms and detailed green leaves.",
    pairsWith: { code: "DSV2299", name: "Dune Stoneware Vase", img: potBg },
  },
  {
    name: "Magnetic Floating Shelf",
    img: potBg,
    thumbnails: [potBg, potBg, potBg],
    code: "MFS1899",
    color: "Walnut Brown",
    material: "Solid Oak wood & Neodymium magnets",
    dimensions: "Length: 30 cm, Width: 12 cm",
    insideBox: "1 Magnetic Shelf & Mounting Hardware",
    delivery: "3-5 Working Days",
    payment: "100% Secure Online Payment",
    description:
      "An elegant floating shelf with invisible magnetic mounts. Perfect for exhibiting small vases, keys, or accessories in modern entryways and hallways.",
    pairsWith: { code: "DSV2299", name: "Dune Stoneware Vase", img: potBg },
  },
  {
    name: "Travellers Palm — Tall",
    img: potBg,
    thumbnails: [potBg, potBg, potBg],
    code: "TPT2399",
    color: "Tropical Green",
    material: "PVC & iron core stem",
    dimensions: "Height: 150 cm (5 Feet) Approx.",
    insideBox: "1 Travellers Palm in Starter Pot",
    delivery: "5-7 Working Days",
    payment: "100% Secure Online Payment",
    description:
      "The classic architectural plant for statement-making corners. Featuring large, fan-like split leaves that filter light beautifully and elevate any minimalist living room.",
    pairsWith: { code: "LRB2799", name: "Loom Rattan Storage Basket", img: potBg },
  },
  {
    name: "Halo Marble Coffee Table",
    img: potBg,
    thumbnails: [potBg, potBg, potBg],
    code: "HCT12999",
    color: "Carrara White",
    material: "Polished Marble top & Iron frame",
    dimensions: "Diameter: 60 cm, Height: 45 cm",
    insideBox: "1 Marble Top & 1 Metal Base",
    delivery: "7-10 Working Days",
    payment: "100% Secure Online Payment",
    description:
      "A luxurious accent piece with a solid polished white Carrara marble top. Features natural grey veining and a sleek black powder-coated steel base.",
    pairsWith: { code: "LRB2799", name: "Loom Rattan Storage Basket", img: prod4 },
  },
  {
    name: "Hammered Bronze Dispenser",
    img: prod3,
    thumbnails: [prod3, prod1, prod2, prod4, prod3],
    code: "HBD949",
    color: "Antique Bronze",
    material: "Hammered Metal & Plastic pump",
    dimensions: "Height: 18 cm, Diameter: 8 cm",
    insideBox: "1 Soap Dispenser",
    delivery: "3-5 Working Days",
    payment: "100% Secure Online Payment",
    description:
      "Elevate your bathroom styling with this hand-hammered metal soap dispenser. Antique bronze finish adds warmth and quiet texture to ceramic countertops.",
    pairsWith: { code: "ABV2999", name: "Aero Black Ceramic Vessel", img: prod3 },
  },
  {
    name: "Indo Mocha Laundry Basket",
    img: prod4,
    thumbnails: [prod4, prod1, prod2, prod3, prod4],
    code: "IMB9000",
    color: "Mocha Brown",
    material: "Woven Natural Fibers & Wood frame",
    dimensions: "Height: 55 cm, Width: 40 cm, Depth: 30 cm",
    insideBox: "1 Laundry Basket",
    delivery: "3-5 Working Days",
    payment: "100% Secure Online Payment",
    description:
      "A premium hand-styled laundry basket crafted from organic mocha fibers on a sturdy wooden skeleton. Blends beautifully with warm linen and wood textures.",
    pairsWith: { code: "MFS1899", name: "Magnetic Floating Shelf", img: prod4 },
  },
];

// Note: prices removed from reels — they are display-only snippets, no pricing shown.
export const reels = [
  {
    video:
      "https://res.cloudinary.com/dfzqcxko0/video/upload/AQMA0vULbKjbHfxFN_LbafPaKgsUHCq22TJBQBYPzAEYtz9V79L9IHeYis2UJfqonVr-BGtqEr4M6wMk-TRBBqLua3kXCTEevUwN48Y_x7a1bz.mp4",
    img: reel1,
    caption: "Every corner deserves a bloom",
    products: [
      { code: "VNL83", name: "VANILLA Planters - Set of 3", img: "/products/vanilla/vanilla_sizea_plain.webp" },
      { code: "FLX48", name: "Flax Series Tapered Vases", img: "/products/flax/flax_a.webp" },
    ],
  },
  {
    video:
      "https://res.cloudinary.com/dfzqcxko0/video/upload/AQMsOUr1JFuY-dTcsSzS2N21MKxwidc4kCRysIzRyPPodtGekEc5niA8WcNJiwSRmbIquQgqcXk3vU5mXINQ8kVlZtdI7WLcbwLudBA_ae0joa.mp4",
    img: reel2,
    caption: "Magnetic shelves are a vibe",
    products: [
      { code: "ARC84", name: "Areca Ribbed Planters - Set of 3", img: "/products/areca/areca_sizea_blackandgrey.webp" },
      { code: "LFS69", name: "Leaf Textured Planters - Set of 3", img: "/products/leafset_3/leafset3_a_black.webp" },
    ],
  },
  {
    video:
      "https://res.cloudinary.com/dfzqcxko0/video/upload/AQMjRBPofM9zfHPjPwGDEOHgg_bdVENW7kC2_mXiG-hWPz_7US7whu8Z7Mq1gOstGgSl96EVCCPUn_ONLqJ4STJW_baeutd.mp4",
    img: reel3,
    caption: "I always wanted one",
    products: [
      { code: "LFS70", name: "Leaf Textured Planters - Set of 2", img: "/products/leafset_2/leafset_2_yellow_sizea.webp" },
      { code: "VNL83", name: "VANILLA Planters - Set of 3", img: "/products/vanilla/vanilla_sizea_plain.webp" },
    ],
  },
  {
    video:
      "https://res.cloudinary.com/dfzqcxko0/video/upload/AQNxeraW9vP0dfy9OtOue_QpufN66WSNSgCS9kOAgQqf_4IC_YNOnbP2l4KvbPVJWG6MldKCLa9_mgV6J6PANedYrZ6n3AgoIDTc5Cw_llnzv7.mp4",
    img: reel4,
    caption: "Tiny upgrades, big shift",
    products: [
      { code: "FLX48", name: "Flax Series Tapered Vases", img: "/products/flax/flax_a.webp" },
      { code: "ARC84", name: "Areca Ribbed Planters - Set of 3", img: "/products/areca/areca_sizea_blackandgrey.webp" },
    ],
  },
  {
    video:
      "https://res.cloudinary.com/dfzqcxko0/video/upload/AQOOBxA7Pe1Qctu_Ndi62Vu3pgZJTF0z2p59svgA92WyX38Fvo_kozI05zsjZhDOaBS4nIs3FcvLu3ypCRIFzTfhUOalURGYAdwjbuc_yzzbr4.mp4",
    img: reel5,
    caption: "Designer-look in one piece",
    products: [
      { code: "LFS69", name: "Leaf Textured Planters - Set of 3", img: "/products/leafset_3/leafset3_a_black.webp" },
      { code: "LFS70", name: "Leaf Textured Planters - Set of 2", img: "/products/leafset_2/leafset_2_yellow_sizea.webp" },
    ],
  },
];

export const blogs = [
  {
    title: "Artificial Plants vs Live Plants",
    desc: "The ultimate guide to choosing the right greenery for your home's light conditions and maintenance lifestyle.",
    date: "June 12, 2026",
    img: blogPlants,
  },
  {
    title: "Minimalist Decor Ideas",
    desc: "How to design a calming, spacious environment using neutral tones, tactile natural fibers and single statement pieces.",
    date: "June 08, 2026",
    img: blogStyling,
  },
  {
    title: "Vase Styling for Beginners",
    desc: "3 rules for arranging dry branches, eucalyptus stems, or bouquets to create beautiful focal points in any room.",
    date: "May 29, 2026",
    img: blogVases,
  },
];

export function getProductByCode(code: string | undefined | null) {
  if (!code) return null;
  const rawCode = String(code).trim();
  const cleanCode = rawCode.toUpperCase();
  const normalizedCode = cleanCode.replace(/[^A-Z0-9]/g, "");
  const codeSlug = rawCode.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const allItems = [...products, ...vases, ...auxiliaryProducts];

  // 1. Exact code match
  let found = allItems.find((p) => p.code && p.code.toUpperCase() === cleanCode);
  if (found) return found;

  // 2. Normalized code match (ignoring hyphens/spaces)
  found = allItems.find((p) => p.code && p.code.toUpperCase().replace(/[^A-Z0-9]/g, "") === normalizedCode);
  if (found) return found;

  // 3. Exact slug match against product name
  found = allItems.find((p) => {
    if (!p.name) return false;
    const nameSlug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return nameSlug === codeSlug;
  });
  if (found) return found;

  // 4. Partial slug/keyword match against product name or code
  found = allItems.find((p) => {
    if (!p.name) return false;
    const nameLower = p.name.toLowerCase();
    const cleanLower = rawCode.toLowerCase().replace(/[-_]/g, " ");
    const words = cleanLower.split(/\s+/).filter((w) => w.length > 2);
    return words.length > 0 && words.every((w) => nameLower.includes(w) || p.code.toLowerCase().includes(w));
  });
  if (found) return found;

  // 5. Fallback: match first word of slug against product name
  const firstWord = codeSlug.split("-")[0];
  if (firstWord && firstWord.length > 2) {
    found = allItems.find((p) => p.name && p.name.toLowerCase().includes(firstWord));
    if (found) return found;
  }

  return null;
}

/**
 * All products from every collection combined.
 * Use this for search, wishlist, and any cross-collection queries.
 * Future: replace/augment with a Supabase query.
 */
export const allProducts = [...products, ...vases, ...auxiliaryProducts];

