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
    name: "New Arrivals",
    href: "/new-arrivals",
    shopSearch: { filter: "new-arrivals" },
    img: potBg,
  },
];

export const products = [
  // 1. ROCK SERIES
  {
    name: 'Rock Series Tapered Planters',
    img: '/products/panda/panda_sizea_orange.webp',
    thumbnails: [
      "/products/panda/panda_sizea_orange.webp",
      "/products/panda/panda_size_reference.webp"
    ],
    code: 'ROCK',
    color: 'Black',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'ROCK-B: Top 17x17", H 18" | ROCK-C: Top 14x14", H 15" | ROCK-D: Top 12x12", H 12"',
    insideBox: '1 Rock Series FRP Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Rugged rock-textured planters featuring a distinctive natural stone surface and angular tapered profile. Engineered from weather-resistant fiberglass.',
    sizes: [
      { name: 'ROCK-B', label: 'B', dimensions: 'Top: 17x17", Bottom: 12x12", Height: 18"', price: 8700, mrp: 9900, stock: 1, colors: ['Black'] },
      { name: 'ROCK-C', label: 'C', dimensions: 'Top: 14x14", Bottom: 9x9", Height: 15"', price: 6600, mrp: 7500, stock: 2, colors: ['Black'] },
      { name: 'ROCK-D', label: 'D', dimensions: 'Top: 12x12", Bottom: 7x7", Height: 12"', price: 3850, mrp: 4400, stock: 1, colors: ['Black'] }
    ]
  },
  // 2. DIAMOND SERIES
  {
    name: 'Diamond Series Geometric Planters',
    img: '/products/ROCK/ROCK-B_BLACK.webp',
    thumbnails: [
      "/products/ROCK/ROCK-B_BLACK.webp",
      "/products/ROCK/ROCK-C_BLACK.webp",
      "/products/ROCK/ROCK-D_BLACK.webp",
      "/products/ROCK/ROCK_SIZE_REFERENCE.webp"
    ],
    code: 'DIAMOND',
    color: 'White',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'DIAMOND-A: Top 12", H 8.5" | DIAMOND-B: Top 9", H 6"',
    insideBox: '1 Diamond Series Geometric Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Geometric multifaceted planters crafted with sharp precision angles. Light stippled white finish gives a luxury architectural stoneware impression.',
    sizes: [
      { name: 'DIAMOND-A', label: 'A', dimensions: 'Top: 12", Bottom: 12", Height: 8.5"', price: 3850, mrp: 4400, stock: 3, colors: ['White'] },
      { name: 'DIAMOND-B', label: 'B', dimensions: 'Top: 9", Bottom: 9", Height: 6"', price: 2000, mrp: 2300, stock: 2, colors: ['White'] }
    ]
  },
  // 3. BIG SHARK SERIES
  {
    name: 'Big Shark Series Tall Bullet Planters',
    img: '/products/DIAMOND/DIAMOND_GENERATED_01.webp',
    thumbnails: [
      "/products/DIAMOND/DIAMOND_GENERATED_01.webp",
      "/products/DIAMOND/DIAMOND_GENERATED_02.webp",
      "/products/DIAMOND/DIAMOND_SIZE_REFERENCE.webp"
    ],
    code: 'BSHARK',
    color: 'Black',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'B.SHARK-A: H 40" | B.SHARK-B: H 31" | B.SHARK-C: H 24" | B.SHARK-D: H 18.5"',
    insideBox: '1 Big Shark FRP Bullet Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Commanding tall bullet-profile planters with smooth contoured curves. Ideal for grand entrances, foyers, and high-ceiling atrium spaces.',
    sizes: [
      { name: 'B.SHARK-A', label: 'A', dimensions: 'Top: 21.5", Bottom: 13", Height: 40"', price: 16600, mrp: 18900, stock: 1, colors: ['Black'] },
      { name: 'B.SHARK-B', label: 'B', dimensions: 'Top: 16.5", Bottom: 10", Height: 31"', price: 8800, mrp: 9900, stock: 3, colors: ['Black'] },
      { name: 'B.SHARK-C', label: 'C', dimensions: 'Top: 12.5", Bottom: 7", Height: 24"', price: 6500, mrp: 7400, stock: 1, colors: ['Black'] },
      { name: 'B.SHARK-D', label: 'D', dimensions: 'Top: 9", Bottom: 5.5", Height: 18.5"', price: 3240, mrp: 3700, stock: 3, colors: ['Black'] }
    ]
  },
  // 4. FLORA SERIES
  {
    name: 'Flora Series Speckled Planters',
    img: '/products/BIG_SHARK/BIG_SHARK-A_BLACK-1.webp',
    thumbnails: [
      "/products/BIG_SHARK/BIG_SHARK-A_BLACK-1.webp",
      "/products/BIG_SHARK/BIG_SHARK-B_BLACK-3.webp",
      "/products/BIG_SHARK/BIG_SHARK-C_BLACK-1.webp",
      "/products/BIG_SHARK/BIG_SHARK-D_BLACK-3.webp",
      "/products/BIG_SHARK/BIG_SHARK_SIZE_REFERENCE.webp"
    ],
    code: 'FLORA',
    color: 'Black',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'FLORA-B: Top 18", H 18" | FLORA-D: Top 10", H 10"',
    insideBox: '1 Flora Series FRP Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Deep round basin planters with fine stone speckling. Designed to house full bushy botanicals and indoor specimen plants.',
    sizes: [
      { name: 'FLORA-B', label: 'B', dimensions: 'Top: 18", Bottom: 11", Height: 18"', price: 6580, mrp: 7500, stock: 2, colors: ['Black'] },
      { name: 'FLORA-D', label: 'D', dimensions: 'Top: 10", Bottom: 6", Height: 10"', price: 2500, mrp: 2900, stock: 2, colors: ['Black'] }
    ]
  },
  // 5. POOL SERIES
  {
    name: 'Pool Series Low Bowl Planters',
    img: '/products/FLORA/FLORA-B_BLACK-2.webp',
    thumbnails: [
      "/products/FLORA/FLORA-B_BLACK-2.webp",
      "/products/FLORA/FLORA-D_BLACK-2.webp",
      "/products/FLORA/FLORA_SIZE_REFERENCE.webp"
    ],
    code: 'POOL',
    color: 'Black / White',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'POOL-A: Top 19", H 16" | POOL-C: Top 11", H 9.5"',
    insideBox: '1 Pool Series FRP Bowl Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Curved spherical bowl planters with smooth rounded bases. Creates low-profile elegance for coffee tables, balconies, and lounge areas.',
    sizes: [
      { name: 'POOL-A', label: 'A', dimensions: 'Top: 19", Bottom: 10", Height: 16"', price: 8000, mrp: 9100, stock: 1, colors: ['Black'] },
      { name: 'POOL-C', label: 'C', dimensions: 'Top: 11", Bottom: 5.5", Height: 9.5"', price: 3000, mrp: 3400, stock: 2, colors: ['Black', 'White'] }
    ]
  },
  // 6. CONE SERIES
  {
    name: 'Cone Series Ribbed Cylinder Planters',
    img: '/products/POOL/POOL-A_BLACK-1.webp',
    thumbnails: [
      "/products/POOL/POOL-A_BLACK-1.webp",
      "/products/POOL/POOL-C_BLACK-1.webp",
      "/products/POOL/POOL-C_WHITE-1.webp",
      "/products/POOL/POOL_SIZE_REFERENCE.webp"
    ],
    code: 'CONE',
    color: 'Grey',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'CONE-A: Top 14.5", H 15" | CONE-B: Top 11", H 12.5" | CONE-C: Top 9", H 9.5"',
    insideBox: '1 Cone Series Ribbed Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Horizontal grooved cylindrical planters with subtle rustic banding. Soft grey tone seamlessly blends with Scandinavian and modern interiors.',
    sizes: [
      { name: 'CONE-A', label: 'A', dimensions: 'Top: 14.5", Bottom: 11", Height: 15"', price: 7200, mrp: 8200, stock: 1, colors: ['Grey'] },
      { name: 'CONE-B', label: 'B', dimensions: 'Top: 11", Bottom: 9", Height: 12.5"', price: 4800, mrp: 5500, stock: 2, colors: ['Grey'] },
      { name: 'CONE-C', label: 'C', dimensions: 'Top: 9", Bottom: 8", Height: 9.5"', price: 3000, mrp: 3400, stock: 1, colors: ['Grey'] }
    ]
  },
  // 7. KING SERIES
  {
    name: 'King Series Vertical Fluted Planter',
    img: '/products/CONE/CONE-A_GREY-1.webp',
    thumbnails: [
      "/products/CONE/CONE-A_GREY-1.webp",
      "/products/CONE/CONE-B_GREY-2.webp",
      "/products/CONE/CONE-C_GREY-1.webp",
      "/products/CONE/CONE_SIZE_REFERENCE.webp"
    ],
    code: 'KING',
    color: 'Black',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'Top: 13.5", Bottom: 14", Height: 21"',
    insideBox: '1 King Series Fluted FRP Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Regal cylindrical vessel featuring crisp vertical fluting. Adds rhythmic architectural texture to living rooms and executive suites.',
    sizes: [
      { name: 'KING-A', label: 'A', dimensions: 'Top: 13.5", Bottom: 14", Height: 21"', price: 8650, mrp: 9800, stock: 1, colors: ['Black'] }
    ]
  },
  // 8. COOL SERIES
  {
    name: 'Cool Series Bouclé Textured Planter',
    img: '/products/KING/KING-A_product.webp',
    thumbnails: [
      "/products/KING/KING-A_product.webp",
      "/products/KING/KING_size_reference.webp"
    ],
    code: 'COOL',
    color: 'Brown',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'Top: 11", Bottom: 9", Height: 16"',
    insideBox: '1 Cool Series Brown FRP Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Tactile cylinder planter with a warm brown stone finish. Designed to bring grounded organic warmth into contemporary interiors.',
    sizes: [
      { name: 'COOL-B', label: 'B', dimensions: 'Top: 11", Bottom: 9", Height: 16"', price: 4200, mrp: 4800, stock: 1, colors: ['Brown'] }
    ]
  },
  // 9. E-POT SERIES
  {
    name: 'E-Pot Series Abstract Face Planters',
    img: '/products/COOL/COOL-B_BROWN-1.webp',
    thumbnails: [
      "/products/COOL/COOL-B_BROWN-1.webp",
      "/products/COOL/COOL_SIZE_REFERENCE.webp"
    ],
    code: 'EPOT',
    color: 'Black / White',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'E.POT-A: Top 12", H 21" | E.POT-B: Top 12", H 12"',
    insideBox: '1 E-Pot Abstract Face FRP Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Sculptural abstract face planters blending modern art with functional pottery. Statement art pieces for consoles, side tables, and plant shelves.',
    sizes: [
      { name: 'E.POT-A', label: 'A', dimensions: 'Top: 12", Bottom: 15", Height: 21"', price: 7500, mrp: 8500, stock: 4, colors: ['Black', 'White'] },
      { name: 'E.POT-B', label: 'B', dimensions: 'Top: 12", Bottom: 11", Height: 12"', price: 3300, mrp: 3800, stock: 3, colors: ['Black', 'White'] }
    ]
  },
  // 10. BALL SERIES
  {
    name: 'Ball Series Spherical Planters',
    img: '/products/E_POT/E-POT-A_black.webp',
    thumbnails: [
      "/products/E_POT/E-POT-A_black.webp",
      "/products/E_POT/E-POT-A_white.webp",
      "/products/E_POT/E-POT-B_black.webp",
      "/products/E_POT/E-POT-B_white.webp",
      "/products/E_POT/E-POT_size_reference.webp"
    ],
    code: 'BALL',
    color: 'Black',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'BALL-A: Top 13", H 15.5" | BALL-B: Top 9", H 11.5"',
    insideBox: '1 Ball Series Spherical FRP Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Voluptuous spherical orb planters with textured granite black finish. Provides soft organic curves to balance modern linear furniture.',
    sizes: [
      { name: 'BALL-A', label: 'A', dimensions: 'Top: 13", Bottom: 8", Height: 15.5"', price: 5400, mrp: 6200, stock: 1, colors: ['Black'] },
      { name: 'BALL-B', label: 'B', dimensions: 'Top: 9", Bottom: 6", Height: 11.5"', price: 3600, mrp: 4100, stock: 1, colors: ['Black'] }
    ]
  },
  // 11. POTA SERIES
  {
    name: 'Pota Series Grooved Basin Planters',
    img: '/products/BALL/BALL_product_pair_1.webp',
    thumbnails: [
      "/products/BALL/BALL_product_pair_1.webp",
      "/products/BALL/BALL_product_pair_2.webp",
      "/products/BALL/BALL_size_reference.webp"
    ],
    code: 'POTA',
    color: 'Black',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'POTA-A: Top 20", H 19" | POTA-B: Top 16", H 16" | POTA-C: Top 14", H 13"',
    insideBox: '1 Pota Series FRP Basin Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Heavyweight grooved basin planters with deep horizontal ridges. Sturdy architectural presence for indoors or covered patios.',
    sizes: [
      { name: 'POTA-A', label: 'A', dimensions: 'Top: 20", Bottom: 13", Height: 19"', price: 9000, mrp: 10200, stock: 1, colors: ['Black'] },
      { name: 'POTA-B', label: 'B', dimensions: 'Top: 16", Bottom: 11", Height: 16"', price: 6500, mrp: 7400, stock: 1, colors: ['Black'] },
      { name: 'POTA-C', label: 'C', dimensions: 'Top: 14", Bottom: 9", Height: 13"', price: 3800, mrp: 4300, stock: 1, colors: ['Black'] }
    ]
  },
  // 12. POPPY SERIES
  {
    name: 'Poppy Series Fluted Pillar Planters',
    img: '/products/pota/pota_a.webp',
    thumbnails: [
      "/products/pota/pota_a.webp",
      "/products/pota/pota_b.webp",
      "/products/pota/pota_c.webp",
      "/products/pota/pota_size_reference.webp"
    ],
    code: 'POPPY',
    color: 'Grey',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'POPPY-A: Top 14.5", H 25" | POPPY-B: Top 14", H 20"',
    insideBox: '1 Poppy Series Fluted FRP Pillar Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Architectural pillar planters featuring fine vertical ribbing and a soft concrete grey texture.',
    sizes: [
      { name: 'POPPY-A', label: 'A', dimensions: 'Top: 14.5", Bottom: 16", Height: 25"', price: 7770, mrp: 8800, stock: 1, colors: ['Grey'] },
      { name: 'POPPY-B', label: 'B', dimensions: 'Top: 14", Bottom: 15", Height: 20"', price: 6100, mrp: 6900, stock: 1, colors: ['Grey'] }
    ]
  },
  // 13. TULIP SERIES
  {
    name: 'Tulip Series Flared Floor Vases',
    img: '/products/poppy/poppy_a.webp',
    thumbnails: [
      "/products/poppy/poppy_a.webp",
      "/products/poppy/poppy_b.webp",
      "/products/poppy/poppy_size_reference_image.webp"
    ],
    code: 'TULIP',
    color: 'Beige',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'TULIP-A: Top 21", H 42" | TULIP-E: Top 7", H 13"',
    insideBox: '1 Tulip Series FRP Flared Vase',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Gracefully flared floor vessels mimicking an opening tulip petal. Warm sandy beige texture anchors formal dining rooms and entry foyers.',
    sizes: [
      { name: 'TULIP-A', label: 'A', dimensions: 'Top: 21", Bottom: 12.5", Height: 42"', price: 16170, mrp: 18300, stock: 1, colors: ['Beige'] },
      { name: 'TULIP-E', label: 'E', dimensions: 'Top: 7", Bottom: 4", Height: 13"', price: 3280, mrp: 3700, stock: 1, colors: ['Beige'] }
    ]
  },
  // 14. LILLY SERIES
  {
    name: 'Lilly Series Curved Urn Planters',
    img: '/products/tulip/tulip_a.webp',
    thumbnails: [
      "/products/tulip/tulip_a.webp",
      "/products/tulip/tulip_e.webp",
      "/products/tulip/tulip_size_reference_image.webp"
    ],
    code: 'LILLY',
    color: 'Green / Grey',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'LILLY-A: Top 14", H 42" | LILLY-B: Top 16", H 30"',
    insideBox: '1 Lilly Series FRP Curved Urn Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Curved urn planters with smooth organic silhouettes. Available in forest green and light grey stone finishes.',
    sizes: [
      { name: 'LILLY-A', label: 'A', dimensions: 'Top: 14", Bottom: 12.5", Height: 42"', price: 16140, mrp: 18200, stock: 1, colors: ['Green'] },
      { name: 'LILLY-B', label: 'B', dimensions: 'Top: 16", Bottom: 14.5", Height: 30"', price: 10350, mrp: 11700, stock: 1, colors: ['Grey'] }
    ]
  },
  // 15. SUNFLOWER SERIES
  {
    name: 'Sunflower Series Tapered Cylinders',
    img: '/products/LILLY/lily_a_green.webp',
    thumbnails: [
      "/products/LILLY/lily_a_green.webp",
      "/products/LILLY/lily_b_whit.webp",
      "/products/LILLY/lily_size_reference.webp"
    ],
    code: 'SUNFLOWER',
    color: 'Beige / Brown',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'SUN-B: Top 14", H 22" | SUN-C: Top 12", H 16" | SUN-D: Top 10", H 11"',
    insideBox: '1 Sunflower Series FRP Cylinder Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Warm earthy tapered cylinder planters in beige and brown stone textures.',
    sizes: [
      { name: 'SUN-B', label: 'B', dimensions: 'Top: 14", Bottom: 5.75", Height: 22"', price: 6450, mrp: 7300, stock: 1, colors: ['Beige'] },
      { name: 'SUN-C', label: 'C', dimensions: 'Top: 12", Bottom: 4.75", Height: 16"', price: 5200, mrp: 5900, stock: 1, colors: ['Brown'] },
      { name: 'SUN-D', label: 'D', dimensions: 'Top: 10", Bottom: 4", Height: 11"', price: 2950, mrp: 3300, stock: 1, colors: ['Brown'] }
    ]
  },
  // 16. PANSY SERIES
  {
    name: 'Pansy Series Tapered Column Planters',
    img: '/products/SUNFLOWER/sun_b_yellow.webp',
    thumbnails: [
      "/products/SUNFLOWER/sun_b_yellow.webp",
      "/products/SUNFLOWER/sun_c_brown.webp",
      "/products/SUNFLOWER/sun_d_brown.webp",
      "/products/SUNFLOWER/sun_size_reference.webp"
    ],
    code: 'PANSY',
    color: 'Black',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'PANSY-A: Top 12", H 30" | PANSY-B: Top 11", H 24" | PANSY-C: Top 8", H 18"',
    insideBox: '1 Pansy Series FRP Column Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Slender tapered column planters with fine granite speckling. Perfect for framing doorways and hallway passages.',
    sizes: [
      { name: 'PANSY-A', label: 'A', dimensions: 'Top: 12", Bottom: 12", Height: 30"', price: 7200, mrp: 8100, stock: 2, colors: ['Black'] },
      { name: 'PANSY-B', label: 'B', dimensions: 'Top: 11", Bottom: 11", Height: 24"', price: 5760, mrp: 6500, stock: 2, colors: ['Black'] },
      { name: 'PANSY-C', label: 'C', dimensions: 'Top: 8", Bottom: 8", Height: 18"', price: 4430, mrp: 5000, stock: 3, colors: ['Black'] }
    ]
  },
  // 17. HOLLYHOCK SERIES
  {
    name: 'Hollyhock Wide Drum Planter',
    img: "/products/PANSY/PANSY_A.webp",
    thumbnails: [
      "/products/PANSY/PANSY_A.webp",
      "/products/PANSY/PANSY_B.webp",
      "/products/PANSY/PANSY_C.webp",
      "/products/PANSY/PANSY_SIZE_REFERENCE.webp"
    ],
    code: 'HOLLY',
    color: 'Beige',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'Top: 30", Bottom: 17", Height: 30"',
    insideBox: '1 Hollyhock Wide Drum FRP Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Extra-large 30-inch wide drum planter in a warm beige stone texture. Designed for mature indoor trees and courtyard landscaping.',
    sizes: [
      { name: 'HOLLY-B', label: 'B', dimensions: 'Top: 30", Bottom: 17", Height: 30"', price: 22600, mrp: 25500, stock: 1, colors: ['Beige'] }
    ]
  },
  // 18. ROSE SERIES
  {
    name: 'Rose Series Terracotta Red Bowls',
    img: '/products/HOLLY/holly_b.webp',
    thumbnails: [
      "/products/HOLLY/holly_b.webp",
      "/products/HOLLY/holly_size_reference.webp"
    ],
    code: 'ROSE',
    color: 'Red',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'ROSE-B: Top 17", H 15" | ROSE-C: Top 13", H 10"',
    insideBox: '1 Rose Series Terracotta Red FRP Bowl Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Low rounded bowl planters with a rich terracotta red textured finish. Infuses Mediterranean warmth into indoor gardens.',
    sizes: [
      { name: 'ROSE-B', label: 'B', dimensions: 'Top: 17", Bottom: 6", Height: 15"', price: 6280, mrp: 7100, stock: 1, colors: ['Red'] },
      { name: 'ROSE-C', label: 'C', dimensions: 'Top: 13", Bottom: 4.5", Height: 10"', price: 4240, mrp: 4800, stock: 1, colors: ['Red'] }
    ]
  },
  // 19. GLORY SERIES
  {
    name: 'Glory Series Tapered Stone Pots',
    img: '/products/ROSE/rose_b.webp',
    thumbnails: [
      "/products/ROSE/rose_b.webp",
      "/products/ROSE/rose_c.webp",
      "/products/ROSE/rose_size_reference.webp"
    ],
    code: 'GLORY',
    color: 'Grey',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'GLORY-B: Top 20", H 23" | GLORY-C: Top 16", H 18" | GLORY-D: Top 12", H 14" | GLORY-E: Top 9", H 10"',
    insideBox: '1 Glory Series FRP Stone Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Classic tapered stone-texture planters in stone grey finish. Versatile nesting proportions suit both indoor and patio settings.',
    sizes: [
      { name: 'GLORY-B', label: 'B', dimensions: 'Top: 20", Bottom: 10.3", Height: 23"', price: 8180, mrp: 9200, stock: 1, colors: ['Grey'] },
      { name: 'GLORY-C', label: 'C', dimensions: 'Top: 16", Bottom: 8.5", Height: 18"', price: 6360, mrp: 7200, stock: 2, colors: ['Grey'] },
      { name: 'GLORY-D', label: 'D', dimensions: 'Top: 12", Bottom: 6.5", Height: 14"', price: 4580, mrp: 5200, stock: 2, colors: ['Grey'] },
      { name: 'GLORY-E', label: 'E', dimensions: 'Top: 9", Bottom: 4.5", Height: 10"', price: 3610, mrp: 4100, stock: 1, colors: ['Grey'] }
    ]
  },
  // 20. STAR SERIES
  {
    name: 'Star Series Wide Angle Planter',
    img: '/products/GLORY/glory_b.webp',
    thumbnails: [
      "/products/GLORY/glory_b.webp",
      "/products/GLORY/glory_c.webp",
      "/products/GLORY/glory_d.webp",
      "/products/GLORY/glory_e.webp",
      "/products/GLORY/GLORY_SIZE_REFERENCE.webp"
    ],
    code: 'STAR',
    color: 'Green',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'Top: 28", Bottom: 17", Height: 32"',
    insideBox: '1 Star Series Moss Green FRP Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Substantial wide-angled conical planter in a textured moss green stone finish. Ideal anchor for broad specimen foliage.',
    sizes: [
      { name: 'STAR-A', label: 'A', dimensions: 'Top: 28", Bottom: 17", Height: 32"', price: 22700, mrp: 25600, stock: 1, colors: ['Green'] }
    ]
  },
  // 21. FLAX SERIES (FLX48)
  {
    name: 'Flax Series Tapered Vases',
    img: '/products/STAR/STAR-A.webp',
    thumbnails: [
      "/products/STAR/STAR-A.webp",
      "/products/STAR/STAR_SIZE_REFERENCE.webp"
    ],
    code: 'FLX48',
    color: 'Beige',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'Top: 16", Bottom: 12", Height: 40"',
    insideBox: '1 Flax Series FRP Floor Vase',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Sleek, minimalist floor vase boasting organic curves and a warm textured beige finish.',
    sizes: [
      { name: 'FLAX-A', label: 'A', dimensions: 'Top: 16", Bottom: 12", Height: 40"', price: 14910, mrp: 16800, stock: 1, colors: ['Beige'] }
    ]
  },
  // 22. DAISY SERIES
  {
    name: 'Daisy Series Column Pillars',
    img: '/products/flax/flax_a.webp',
    thumbnails: [
      "/products/flax/flax_a.webp",
      "/products/flax/flax_size_reference.webp"
    ],
    code: 'DAISY',
    color: 'Yellow',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'DAISY-A: Top 10", H 30" | DAISY-B: Top 10", H 20" | DAISY-C: Top 10", H 10"',
    insideBox: '1 Daisy Series FRP Column Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Cylindrical column planters in warm yellow beige stone textures. Provides sleek vertical accents.',
    sizes: [
      { name: 'DAISY-A', label: 'A', dimensions: 'Top: 10", Bottom: 10", Height: 30"', price: 7900, mrp: 8900, stock: 2, colors: ['Yellow'] },
      { name: 'DAISY-B', label: 'B', dimensions: 'Top: 10", Bottom: 10", Height: 20"', price: 6500, mrp: 7300, stock: 1, colors: ['Yellow'] },
      { name: 'DAISY-C', label: 'C', dimensions: 'Top: 10", Bottom: 10", Height: 10"', price: 5010, mrp: 5700, stock: 3, colors: ['Yellow'] }
    ]
  },
  // 23. ORCHID SERIES
  {
    name: 'Orchid Series Fluted Round Planters',
    img: '/products/daisy/daisy_a.webp',
    thumbnails: [
      "/products/daisy/daisy_a.webp",
      "/products/daisy/daisy_b.webp",
      "/products/daisy/daisy_c.webp",
      "/products/daisy/daisy_size_reference.webp"
    ],
    code: 'ORCHID',
    color: 'White / Beige',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'A: Top 17", H 33" | B: Top 19", H 24" | C: Top 11", H 15.5" | D: Top 19", H 12.5"',
    insideBox: '1 Orchid Series Fluted FRP Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Elegant rounded planters with fine fluted vertical ribs. Offered in off-white and natural beige stone textures.',
    sizes: [
      { name: 'A', label: 'A', dimensions: 'Top: 17", Bottom: 12", Height: 33"', price: 22000, mrp: 24800, stock: 4, colors: ['White', 'Beige'] },
      { name: 'B', label: 'B', dimensions: 'Top: 19", Bottom: 16.5", Height: 24"', price: 18000, mrp: 20300, stock: 3, colors: ['White', 'Beige'] },
      { name: 'C', label: 'C', dimensions: 'Top: 11", Bottom: 8", Height: 15.5"', price: 13000, mrp: 14600, stock: 6, colors: ['White', 'Beige'] },
      { name: 'D', label: 'D', dimensions: 'Top: 19", Bottom: 17", Height: 12.5"', price: 10000, mrp: 11300, stock: 5, colors: ['White', 'Beige'] }
    ]
  },
  // 24. JUPITER SERIES
  {
    name: 'Jupiter Series Salt & Pepper Planters',
    img: '/products/orchid/orchid_a_white.webp',
    thumbnails: [
      "/products/orchid/orchid_a_white.webp",
      "/products/orchid/orchid_a_beige.webp",
      "/products/orchid/orchid_b_beige.webp",
      "/products/orchid/orchid_b_white.webp",
      "/products/orchid/orchid_c_beige.webp",
      "/products/orchid/orchid_c_white.webp",
      "/products/orchid/orchid_d_beige.webp",
      "/products/orchid/orchid_d_white.webp",
      "/products/orchid/orchid_size_reference.webp"
    ],
    code: 'JUPITER',
    color: 'Black & Grey',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'A: Top 19", H 19" | B: Top 16", H 16" | C: Top 13", H 12.5" | D: Top 10", H 9.5"',
    insideBox: '1 Jupiter Series FRP Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Straight cylindrical planters in salt & pepper black and grey stone speckling.',
    sizes: [
      { name: 'A', label: 'A', dimensions: 'Top: 19", Bottom: 19", Height: 19"', price: 12000, mrp: 13500, stock: 4, colors: ['Black & Grey'] },
      { name: 'B', label: 'B', dimensions: 'Top: 16", Bottom: 16", Height: 16"', price: 8000, mrp: 9000, stock: 3, colors: ['Black & Grey'] },
      { name: 'C', label: 'C', dimensions: 'Top: 13", Bottom: 13", Height: 12.5"', price: 5000, mrp: 5600, stock: 4, colors: ['Black & Grey'] },
      { name: 'D', label: 'D', dimensions: 'Top: 10", Bottom: 10", Height: 9.5"', price: 3000, mrp: 3400, stock: 4, colors: ['Black & Grey'] }
    ]
  },
  // 25. ORANGE SERIES
  {
    name: 'Orange Series Ribbed Globe Planters',
    img: '/products/jupiter/jupiter_a_black.webp',
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
    code: 'ORANGE',
    color: 'Green',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'A: Top 18", H 16" | B: Top 13", H 12" | C: Top 10", H 9"',
    insideBox: '1 Orange Series Ribbed FRP Globe Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Distinctive globe-shaped planters featuring horizontal linear ribbing in an olive green stone finish.',
    sizes: [
      { name: 'A', label: 'A', dimensions: 'Top: 18", Bottom: 11", Height: 16"', price: 10500, mrp: 11800, stock: 3, colors: ['Green'] },
      { name: 'B', label: 'B', dimensions: 'Top: 13", Bottom: 8", Height: 12"', price: 5600, mrp: 6300, stock: 3, colors: ['Green'] },
      { name: 'C', label: 'C', dimensions: 'Top: 10", Bottom: 6", Height: 9"', price: 3000, mrp: 3400, stock: 4, colors: ['Green'] }
    ]
  },
  // 26. LEAF SET 3PCS (LFS69)
  {
    name: 'Leaf Textured Planters - Set of 3',
    img: '/products/orange/orange_a.webp',
    thumbnails: [
      "/products/orange/orange_a.webp",
      "/products/orange/orange_b.webp",
      "/products/orange/orange_c.webp",
      "/products/orange/orange_size_reference.webp"
    ],
    code: 'LFS69',
    color: 'Yellow / Black',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'A: Top 19.5", H 21" | B: Top 16", H 17.5" | C: Top 12.5", H 13.5"',
    insideBox: 'Set of 3 Leaf-Patterned FRP Planters',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Embellished with detailed leaf engravings, these yellow and black planters introduce depth and quiet texture to your plant arrangements.',
    sizes: [
      { name: 'A', label: 'A', dimensions: 'Top: 19.5", Bottom: 10.5", Height: 21"', price: 8000, mrp: 9100, stock: 4, colors: ['Yellow', 'Black'] },
      { name: 'B', label: 'B', dimensions: 'Top: 16", Bottom: 9", Height: 17.5"', price: 7200, mrp: 8100, stock: 2, colors: ['Yellow'] },
      { name: 'C', label: 'C', dimensions: 'Top: 12.5", Bottom: 7.5", Height: 13.5"', price: 4500, mrp: 5200, stock: 1, colors: ['Yellow'] }
    ]
  },
  // 27. LEAF SET 2PCS (LFS70)
  {
    name: 'Leaf Textured Planters - Set of 2',
    img: '/products/leafset_3/leafset3_a_yellow.webp',
    thumbnails: [
      "/products/leafset_3/leafset3_a_yellow.webp",
      "/products/leafset_3/leafset3_a_black.webp",
      "/products/leafset_3/leafset3_b_yellow.webp",
      "/products/leafset_3/leafset3_c_yellow.webp",
      "/products/leafset_3/leafset3_size_reference.webp"
    ],
    code: 'LFS70',
    color: 'Yellow / Black',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'A: Top 17", H 25.5" | B: Top 10.5", H 16.5"',
    insideBox: 'Set of 2 Leaf-Patterned FRP Planters',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'A set of two elegant tapered planters featuring subtle leaf texture on neutral yellow and black stone backdrops.',
    sizes: [
      { name: 'A', label: 'A', dimensions: 'Top: 17", Bottom: 17", Height: 25.5"', price: 9000, mrp: 10200, stock: 1, colors: ['Yellow'] },
      { name: 'B', label: 'B', dimensions: 'Top: 10.5", Bottom: 10.5", Height: 16.5"', price: 4500, mrp: 5200, stock: 2, colors: ['Black'] }
    ]
  },
  // 28. IRIS SET - FULL BODY (IRIS)
  {
    name: 'Iris Full Body Tall Pillar Planter',
    img: '/products/leafset_2/leafset_2_yellow_sizea.webp',
    thumbnails: [
      "/products/leafset_2/leafset_2_yellow_sizea.webp",
      "/products/leafset_2/leafset_2_black_sizeb.webp",
      "/products/leafset_2/leafset2_sizereference.webp"
    ],
    code: 'IRIS',
    color: 'Black',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'Top: 8", Bottom: 8", Height: 36"',
    insideBox: '1 Iris Full Body Tall FRP Pillar Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Ultra-tall 36-inch tapered pillar planter designed for grand statement plants, bamboos, and entry archways.',
    sizes: [
      { name: 'A', label: 'A', dimensions: 'Top: 8", Bottom: 8", Height: 36"', price: 7200, mrp: 8100, stock: 1, colors: ['Black'] }
    ]
  },
  // 29. PATATO SET - FULL BODY (PATATO)
  {
    name: 'Patato Full Body Urn Planter',
    img: '/products/iris/iris_sizea_black.webp',
    thumbnails: [
      "/products/iris/iris_sizea_black.webp",
      "/products/iris/iris_size_reference.webp"
    ],
    code: 'PATATO',
    color: 'White',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'Top: 17x16", Bottom: 14.5", Height: 44"',
    insideBox: '1 Patato Full Body FRP Urn Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Substantial egg-shaped urn planter standing 44 inches tall. Smooth off-white sandstone texture adds luxury quiet sophistication.',
    sizes: [
      { name: 'A', label: 'A', dimensions: 'Top: 17x16", Bottom: 14.5", Height: 44"', price: 16850, mrp: 19000, stock: 1, colors: ['White'] }
    ]
  },
  // 30. BOAT SET - NEW (BOAT)
  {
    name: 'Boat Series Oval Trough Planters',
    img: '/products/potato/potato_sizea_white.webp',
    thumbnails: [
      "/products/potato/potato_sizea_white.webp",
      "/products/potato/potato_size_reference.webp"
    ],
    code: 'BOAT',
    color: 'Black / Red',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'A: Top 39x16", H 13.5" | B: Top 33x13", H 11" | C: Top 29x10", H 8.5"',
    insideBox: '1 Boat Series Oval FRP Trough Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Elongated boat-shaped trough planters ideal for window sills, long consoles, dining tables, and balcony railings.',
    sizes: [
      { name: 'A', label: 'A', dimensions: 'Top: 39x16", Bottom: 32x10", Height: 13.5"', price: 11800, mrp: 13300, stock: 2, colors: ['Black'] },
      { name: 'B', label: 'B', dimensions: 'Top: 33x13", Bottom: 28x8", Height: 11"', price: 8000, mrp: 9000, stock: 2, colors: ['Black', 'Red'] },
      { name: 'C', label: 'C', dimensions: 'Top: 29x10", Bottom: 25x6", Height: 8.5"', price: 5400, mrp: 6100, stock: 2, colors: ['Black', 'Red'] }
    ]
  },
  // 31. JUNIPER (JUNIPER)
  {
    name: 'Juniper Series Horizontal Grooved Bowls',
    img: '/products/boat/boat_size_a_black.webp',
    thumbnails: [
      "/products/boat/boat_size_a_black.webp",
      "/products/boat/boat_size_b_black.webp",
      "/products/boat/boat_size_b_red.webp",
      "/products/boat/boat_size_c_black.webp",
      "/products/boat/boat_size_c_red.webp"
    ],
    code: 'JUNIPER',
    color: 'Black / Grey',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'A: Top 21.5", H 17.5" | B: Top 16", H 13" | C: Top 12", H 10" | D: Top 8", H 7"',
    insideBox: '1 Juniper Series FRP Grooved Bowl',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Broad rounded bowl planters with fine horizontal lathe grooves. Soft curved silhouette cradles indoor palms and ferns.',
    sizes: [
      { name: 'A', label: 'A', dimensions: 'Top: 21.5", Bottom: 16", Height: 17.5"', price: 9000, mrp: 10200, stock: 3, colors: ['Black'] },
      { name: 'B', label: 'B', dimensions: 'Top: 16", Bottom: 12", Height: 13"', price: 7000, mrp: 7900, stock: 1, colors: ['Grey'] },
      { name: 'C', label: 'C', dimensions: 'Top: 12", Bottom: 8", Height: 10"', price: 5000, mrp: 5600, stock: 4, colors: ['Black', 'Grey'] },
      { name: 'D', label: 'D', dimensions: 'Top: 8", Bottom: 5", Height: 7"', price: 3000, mrp: 3400, stock: 4, colors: ['Black', 'Grey'] }
    ]
  },
  // 32. VANILLA (VNL83 / VANILLA)
  {
    name: 'VANILLA Planters - Set of 3',
    img: '/products/juniper/juniper-sizea_black.webp',
    thumbnails: [
      "/products/juniper/juniper-sizea_black.webp",
      "/products/juniper/juniper_sizeb_grey.webp",
      "/products/juniper/juniper_sizec_black.webp",
      "/products/juniper/juniper_sizec_grey.webp",
      "/products/juniper/juniper_sized_black.webp",
      "/products/juniper/juniper_sized_grey.webp",
      "/products/juniper/juniper_size_reference.webp"
    ],
    code: 'VNL83',
    color: 'Plain / Shining',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'A: Top 18", H 16" | B: Top 13.5", H 12" | C: Top 9", H 8"',
    insideBox: 'Set of 3 Planters (Sizes A, B, C)',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Add a touch of contemporary refinement to your botanical displays with our Vanilla Planters. Featuring an intricate textured pattern available in Plain and Shining finishes.',
    sizes: [
      { name: 'A', label: 'A', dimensions: 'Top: 18", Bottom: 14", Height: 16"', price: 7300, mrp: 8300, stock: 3, colors: ['Plain', 'Shining'] },
      { name: 'B', label: 'B', dimensions: 'Top: 13.5", Bottom: 10", Height: 12"', price: 5000, mrp: 5700, stock: 4, colors: ['Plain', 'Shining'] },
      { name: 'C', label: 'C', dimensions: 'Top: 9", Bottom: 6", Height: 8"', price: 3000, mrp: 3400, stock: 4, colors: ['Plain', 'Shining'] }
    ]
  },
  // 33. JACK (JACK)
  {
    name: 'Jack Diamond Lattice Planters',
    img: '/products/vanilla/vanilla_sizea_plain.webp',
    thumbnails: [
      "/products/vanilla/vanilla_sizea_plain.webp",
      "/products/vanilla/vanilla_sizea_shining.webp",
      "/products/vanilla/vanilla_sizeb_plain.webp",
      "/products/vanilla/vanilla_sizeb_shining.webp",
      "/products/vanilla/vanilla_sizec_plain.webp",
      "/products/vanilla/vanilla_sizec_shining.webp",
      "/products/vanilla/vanilla_size_reference.webp"
    ],
    code: 'JACK',
    color: 'Plain / Shining',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'A: Top 18", H 19.5" | B: Top 13.5", H 15" | C: Top 11.5", H 12"',
    insideBox: '1 Jack Diamond Lattice FRP Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Diamond grid cross-hatched planters with a tactile textured finish. Complements floral greenery and statement indoor trees.',
    sizes: [
      { name: 'A', label: 'A', dimensions: 'Top: 18", Bottom: 11", Height: 19.5"', price: 7500, mrp: 8500, stock: 4, colors: ['Plain', 'Shining'] },
      { name: 'B', label: 'B', dimensions: 'Top: 13.5", Bottom: 9", Height: 15"', price: 5500, mrp: 6200, stock: 4, colors: ['Plain', 'Shining'] },
      { name: 'C', label: 'C', dimensions: 'Top: 11.5", Bottom: 7", Height: 12"', price: 3500, mrp: 4000, stock: 1, colors: ['Shining'] }
    ]
  },
  // 34. DRUM (DRUM)
  {
    name: 'Drum Series Hourglass Pedestal Planter',
    img: '/products/jack/jack_sizea_plain.webp',
    thumbnails: [
      "/products/jack/jack_sizea_plain.webp",
      "/products/jack/jack_sizea_shining.webp",
      "/products/jack/jack_sizeb_plain.webp",
      "/products/jack/jack_sizeb_shining.webp",
      "/products/jack/jack_sizec_plain.webp",
      "/products/jack/jack_sizec_shining.webp",
      "/products/jack/jack_size_reference.webp"
    ],
    code: 'DRUM',
    color: 'White',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'Top: 14", Bottom: 10", Height: 23"',
    insideBox: '1 Drum Series Hourglass FRP Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Architectural hourglass drum planter with a central waist constriction. Carved stippled stone finish.',
    sizes: [
      { name: 'B', label: 'B', dimensions: 'Top: 14", Bottom: 10", Height: 23"', price: 8500, mrp: 9600, stock: 1, colors: ['White'] }
    ]
  },
  // 35. ARECA (ARC84 / ARECA)
  {
    name: 'Areca Ribbed Planters - Set of 3',
    img: '/products/drum/drum_sizeb_white.webp',
    thumbnails: [
      "/products/drum/drum_sizeb_white.webp",
      "/products/drum/drum_size_reference.webp"
    ],
    code: 'ARC84',
    color: 'Black & Grey / Green & Grey',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'A: Top 15", H 26" | B: Top 11", H 20" | C: Top 8", H 15"',
    insideBox: 'Set of 3 Ribbed FRP Planters',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Add a touch of structural drama to your corners with these tall ribbed planters. Their heavy horizontal ribbing provides a beautiful backdrop for bright foliage.',
    sizes: [
      { name: 'A', label: 'A', dimensions: 'Top: 15", Bottom: 10", Height: 26"', price: 8500, mrp: 9600, stock: 4, colors: ['Black & Grey', 'Green & Grey'] },
      { name: 'B', label: 'B', dimensions: 'Top: 11", Bottom: 7.5", Height: 20"', price: 7000, mrp: 7900, stock: 7, colors: ['Black & Grey', 'Green & Grey'] },
      { name: 'C', label: 'C', dimensions: 'Top: 8", Bottom: 5.5", Height: 15"', price: 5500, mrp: 6200, stock: 8, colors: ['Black & Grey', 'Green & Grey'] }
    ]
  },
  // 36. PANDA (PANDA)
  {
    name: 'Panda Terracotta Orange Cylinder',
    img: '/products/areca/areca_sizea_blackandgrey.webp',
    thumbnails: [
      "/products/areca/areca_sizea_blackandgrey.webp",
      "/products/areca/areca_sizea_greenandgrey.webp",
      "/products/areca/areca_sizeb_blackandgrey.webp",
      "/products/areca/areca_sizeb_greenandgrey.webp",
      "/products/areca/areca_sizec_blackandgrey.webp",
      "/products/areca/areca_sizec_greenandgrey.webp",
      "/products/areca/areca_size_reference.webp"
    ],
    code: 'PANDA',
    color: 'Orange',
    material: 'Premium Fiber-Glass (FRP)',
    dimensions: 'Top: 18.5", Bottom: 17", Height: 16"',
    insideBox: '1 Panda Terracotta Orange FRP Planter',
    delivery: '5-7 Working Days',
    payment: '100% Secure Online Payment',
    description: 'Bold vibrant orange cylindrical planter with fine stippled finish. Adds a warm pop of Mediterranean sunshine to modern living rooms.',
    sizes: [
      { name: 'A', label: 'A', dimensions: 'Top: 18.5", Bottom: 17", Height: 16"', price: 9000, mrp: 10200, stock: 1, colors: ['Orange'] }
    ]
  }
];

export const vases = [];
export const auxiliaryProducts = [];

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

export const reels = [
  {
    caption: "Rock Series",
    label: "Rock Series",
    code: "ROCK",
    img: reel1,
    video: reel1,
    products: [{ name: "Rock Series Tapered Planters", code: "ROCK", price: "₹3,850", img: prod1 }],
  },
  {
    caption: "Big Shark Series",
    label: "Big Shark Series",
    code: "BSHARK",
    img: reel2,
    video: reel2,
    products: [{ name: "Big Shark Series Tall Bullet Planters", code: "BSHARK", price: "₹3,240", img: prod2 }],
  },
  {
    caption: "Pota Series",
    label: "Pota Series",
    code: "POTA",
    img: reel3,
    video: reel3,
    products: [{ name: "Pota Series Grooved Basin Planters", code: "POTA", price: "₹3,800", img: prod3 }],
  },
  {
    caption: "Orchid Series",
    label: "Orchid Series",
    code: "ORCHID",
    img: reel4,
    video: reel4,
    products: [{ name: "Orchid Series Fluted Round Planters", code: "ORCHID", price: "₹10,000", img: prod4 }],
  },
  {
    caption: "Vanilla Series",
    label: "Vanilla Series",
    code: "VNL83",
    img: reel5,
    video: reel5,
    products: [{ name: "VANILLA Planters - Set of 3", code: "VNL83", price: "₹3,000", img: prod1 }],
  },
];

export function getProductByCode(code: string | undefined | null) {
  if (!code) return null;
  const rawCode = String(code).trim();
  const cleanCode = rawCode.toUpperCase();
  const normalizedCode = cleanCode.replace(/[^A-Z0-9]/g, "");
  const codeSlug = rawCode.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const allItems = [...products, ...vases, ...auxiliaryProducts];

  let found = allItems.find((p) => p.code && p.code.toUpperCase() === cleanCode);
  if (found) return found;

  found = allItems.find((p) => p.code && p.code.toUpperCase().replace(/[^A-Z0-9]/g, "") === normalizedCode);
  if (found) return found;

  found = allItems.find((p) => {
    if (!p.name) return false;
    const nameSlug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return nameSlug === codeSlug;
  });
  if (found) return found;

  found = allItems.find((p) => {
    if (!p.name) return false;
    const nameLower = p.name.toLowerCase();
    const cleanLower = rawCode.toLowerCase().replace(/[-_]/g, " ");
    const words = cleanLower.split(/\s+/).filter((w) => w.length > 2);
    return words.length > 0 && words.every((w) => nameLower.includes(w) || p.code.toLowerCase().includes(w));
  });
  if (found) return found;

  const firstWord = codeSlug.split("-")[0];
  if (firstWord && firstWord.length > 2) {
    found = allItems.find((p) => p.name && p.name.toLowerCase().includes(firstWord));
    if (found) return found;
  }

  return null;
}

export const allProducts = [...products, ...vases, ...auxiliaryProducts];
