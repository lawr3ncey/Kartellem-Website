export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "kartel-cap",
    name: "KARTEL SNAPBACK",
    price: 799,
    image: "/images/products/4_2ace0ced-fc9d-40e6-98e5-f17e8d8ae50a.webp",
    description: "Structured snapback with embroidered KRTLM wordmark. One size fits all. Underground headwear.",
    category: "ACCESSORIES",
  },  
  {
    id: "krtlm-tee-black",
    name: "KRTLM LOGO TEE",
    price: 999,
    image: "/images/products/1_e3cc5d37-0843-46a7-a7aa-02c7aeaff08a.webp",
    description: "Premium heavyweight cotton tee with oversized KRTLM print. Dropped from the underground, built for the streets. 100% cotton, 220 GSM.",
    category: "TOPS",
  },
  {
    id: "tellem-hoodie",
    name: "TELL'EM HOODIE",
    price: 1999,
    image: "/images/products/2_ff1da81d-eace-4686-96fb-d0a40a5fa2e7.webp",
    description: "Oversized hoodie with Tell'em graffiti print on the back. Heavy fleece, dropped hem. A statement piece for the collective.",
    category: "HOODIES",
  },
  {
    id: "manila-cargo",
    name: "MANILA CARGO PANTS",
    price: 1499,
    image: "/images/products/3_ab0d70b9-ad6c-4e08-a685-baa01f321ae2.webp",
    description: "Tactical-inspired cargo pants with KRTLM patch details. Wide leg, multiple pockets. Built for movement.",
    category: "BOTTOMS",
  },
  {
    id: "underground-tee",
    name: "UNDERGROUND TEE",
    price: 999,
    image: "/images/products/5.webp",
    description: "Back-print graphic tee featuring Manila underground skyline. Relaxed fit, premium cotton.",
    category: "TOPS",
  },
  {
    id: "vandal-jacket",
    name: "VANDAL BOMBER",
    price: 2999,
    image: "/images/products/7.webp",
    description: "Bomber jacket with graffiti-inspired embroidery. Satin finish, ribbed cuffs. The ultimate Kartel piece.",
    category: "OUTERWEAR",
  },
];

export const members = [
  { name: "JWUDS", role: "MC / FOUNDER", image: "/images/roasters/jwuds.jpg" },
  { name: "ONEEN", role: "PRODUCER", image: "/images/roasters/oneen.jpg" },
  { name: "UNKNOWN 1", role: "MC / VISUAL ART", image: "/images/roasters/unknown1.jpg" },
  { name: "UNKNOWN 2", role: "MC", image: "/images/roasters/unknown.jpg" },
  { name: "WAIIAN", role: "DJ / ENGINEER", image: "/images/roasters/waiian.jpg" },
  { name: "YORKO", role: "MC / DESIGN", image: "/images/roasters/yorko.jpg" },
];

export const galleryImages = [
  "/images/65770747_1313872668753122_7195827051402625024_n.jpg",
  "/images/91488932_1545360808937639_4582750188099076096_n.jpg",
  "/images/37250068_1072431882897203_8407389350819528704_n.jpg",
  "/images/45487161_1156061471200910_2438748500150714368_n.jpg",
  "/images/47437184_1172096556264068_6374387295885197312_n.jpg",
  "/images/61457607_1288091091331280_892227533884358656_n.jpg",
];
