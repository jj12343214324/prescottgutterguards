export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  tier: "good" | "better" | "best";
  tierLabel: string;
  name: string;
  tagline: string;
  color: string;
  features: {
    title: string;
    description: string;
  }[];
  specs: ProductSpec[];
  perfectFor: string[];
  highlight?: {
    title: string;
    description: string;
  };
  manufacturer: string;
}

export const products: Product[] = [
  {
    id: "raptor",
    tier: "good",
    tierLabel: "Good",
    name: "Raptor Gutter Guard",
    tagline: "Professional-Grade Protection at a Smart Price",
    color: "blue",
    features: [
      {
        title: "Stainless Steel Micro-Mesh",
        description:
          "900 holes per square inch blocks leaves, pine needles, and roof grit while allowing maximum water flow.",
      },
      {
        title: "V-Bend Technology",
        description:
          "Patented design lifts debris off the surface so wind can blow it away naturally.",
      },
      {
        title: "WUI Fire Compliant",
        description:
          "Non-combustible materials protect your home from ember intrusion during wildfires.",
      },
      {
        title: "25-Year Warranty",
        description:
          "Backed by Gutterglove, the nation's most trusted gutter guard manufacturer.",
      },
    ],
    specs: [
      { label: "Mesh Material", value: "Type 304 Stainless Steel (rust & corrosion resistant)" },
      { label: "Mesh Density", value: "30-mesh (900 holes per square inch)" },
      { label: "Frame", value: "Heavy-duty powder-coated aluminum" },
      { label: "Fits Gutters", value: "5-inch and 6-inch K-style and half-round" },
      { label: "Section Length", value: "4 feet" },
      { label: "Warranty", value: "25 years against defects" },
      { label: "Fire Rating", value: "WUI compliant (non-combustible)" },
    ],
    perfectFor: [
      "Budget-conscious homeowners wanting professional-grade protection",
      "Homes with moderate to heavy leaf and debris",
      "Properties in wildfire-prone areas needing ember protection",
      "Rental properties and investment homes",
    ],
    manufacturer: "Raptor Gutter Guard is manufactured by Gutterglove®, The Nation's Most Trusted Gutter Guard®",
  },
  {
    id: "leafblaster-pro",
    tier: "better",
    tierLabel: "Better",
    name: "LeafBlaster Pro All-Aluminum",
    tagline: "The Perfect Balance of Performance & Value",
    color: "green",
    features: [
      {
        title: "RiserStep™ Technology",
        description:
          "Handles up to 45% more water than competing aluminum guards while adding structural rigidity.",
      },
      {
        title: "100% Aluminum Construction",
        description:
          "Will never rust, warp, or corrode. Built to withstand Arizona's intense sun and monsoon seasons.",
      },
      {
        title: "Self-Aligning Sections",
        description:
          "Overlapping notches ensure perfect alignment for a clean, professional appearance.",
      },
      {
        title: "40-Year Warranty",
        description:
          "Industry-leading protection backed by Gutterglove, the nation's most trusted manufacturer.",
      },
    ],
    specs: [
      { label: "Material", value: "3105 Aluminum Alloy (.019-gauge thickness)" },
      { label: "Technology", value: "RiserStep™ water management system" },
      { label: "Water Capacity", value: "45% more than standard aluminum guards" },
      { label: "Fits Gutters", value: "5-inch and 6-inch K-style" },
      { label: "Section Length", value: "4 feet with self-aligning notches" },
      { label: "Warranty", value: "40 years against defects" },
      { label: "Installation", value: "Slides under shingles, no roof penetration" },
    ],
    perfectFor: [
      "Homeowners wanting the best value for long-term protection",
      "Prescott homes dealing with heavy monsoon rains",
      "Properties with large leaves and moderate pine needles",
      "Primary residences where a 40-year warranty provides peace of mind",
    ],
    highlight: {
      title: "Best Value",
      description:
        "Get the same quality and warranty as the big national brands — without the inflated prices or pushy sales tactics.",
    },
    manufacturer: "LeafBlaster Pro® is manufactured by Gutterglove®, The Nation's Most Trusted Gutter Guard®",
  },
  {
    id: "leafblaster-pro-reinforced",
    tier: "best",
    tierLabel: "Best",
    name: "LeafBlaster Pro Frame-Reinforced",
    tagline: "The Ultimate Protection for Prescott's Ponderosa Pines",
    color: "amber",
    features: [
      {
        title: "Surgical-Grade Stainless Steel Micro-Mesh",
        description:
          "540-micron holes block even the finest pine needles, roof grit, and shingle sand.",
      },
      {
        title: "Extruded Aluminum Frame",
        description:
          "T6-hardened 6063 aluminum alloy provides maximum strength to handle heavy debris loads.",
      },
      {
        title: "Z-Bend Technology",
        description:
          "Lifts debris off the mesh surface so wind naturally carries it away. Superior water flow even in 150+ inch/hour downpours.",
      },
      {
        title: "WUI Fire Compliant",
        description:
          "Passes ASTM E2768 and E84-19b testing. Limits flame spread for 30+ minutes, protecting your home from wildfire embers.",
      },
    ],
    specs: [
      { label: "Mesh", value: "Surgical-grade 316 stainless steel micro-mesh" },
      { label: "Hole Size", value: "540 microns (blocks pine needles 75+ microns)" },
      { label: "Frame", value: "6063 extruded aluminum alloy, T6 hardened" },
      { label: "Water Capacity", value: "150+ inches per hour (industry-leading)" },
      { label: "Fits Gutters", value: "5-inch (Standard) and 6-7 inch (Super)" },
      { label: "Warranty", value: "40 years against defects (transferable)" },
      { label: "Fire Rating", value: "WUI compliant (ASTM E2768 & E84-19b tested)" },
    ],
    perfectFor: [
      "Homes surrounded by Ponderosa pines with heavy needle drop",
      "Properties in wildfire zones needing maximum fire protection",
      "Premium homes where only the best protection will do",
      "Homeowners who want a transferable warranty that adds resale value",
    ],
    highlight: {
      title: "Wildfire Protection",
      description:
        "60-90% of wildfire home losses start with ember intrusion. Gutters filled with dry pine needles are a major ignition point. Protect your home with WUI-certified fire-rated gutter guards.",
    },
    manufacturer: "LeafBlaster Pro® is manufactured by Gutterglove®, The Nation's Most Trusted Gutter Guard®",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductByTier(tier: "good" | "better" | "best"): Product | undefined {
  return products.find((p) => p.tier === tier);
}
