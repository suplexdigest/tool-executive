export type Category = {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  category: string;
  description: string;
  affiliateUrl: string;
  tags: string[];
};

export const AMAZON_TAG = "hookandhull20-20";
export const EBAY_CAMPAIGN_ID = "5339145399";

export function amzn(keywords: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(keywords)}&tag=${AMAZON_TAG}`;
}

export function ebay(keywords: string): string {
  return `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(keywords)}&mkcid=1&mkrid=711-53200-19255-0&campid=${EBAY_CAMPAIGN_ID}&toolid=10001`;
}

export const CATEGORIES: Category[] = [
  { slug: "all", name: "All Tools", tagline: "Every tool worth owning", icon: "sparkles" },
  { slug: "power-tools", name: "Power Tools", tagline: "More power than you probably need", icon: "cpu" },
  { slug: "hand-tools", name: "Hand Tools", tagline: "Old school never dies", icon: "sparkles" },
  { slug: "heavy-equipment", name: "Heavy Equipment", tagline: "The big stuff", icon: "mountain" },
  { slug: "automotive", name: "Automotive", tagline: "Under the hood essentials", icon: "car" },
  { slug: "woodworking", name: "Woodworking", tagline: "Craft meets precision", icon: "home" },
  { slug: "welding", name: "Welding & Fab", tagline: "Metal meets fire", icon: "sparkles" },
  { slug: "electrical", name: "Electrical", tagline: "High voltage, high quality", icon: "cpu" },
  { slug: "plumbing", name: "Plumbing & HVAC", tagline: "Keep it flowing", icon: "home" },
  { slug: "safety", name: "Safety & PPE", tagline: "Come home in one piece", icon: "sparkles" },
  { slug: "storage", name: "Storage & Organization", tagline: "A place for everything", icon: "home" },
  { slug: "outdoor", name: "Outdoor & Landscape", tagline: "Tame the wild", icon: "mountain" },
  { slug: "measuring", name: "Measuring & Layout", tagline: "Measure twice, buy once", icon: "sparkles" },
  { slug: "cool", name: "Cool & Unusual", tagline: "Tools you didn't know existed", icon: "sparkles" },
];
