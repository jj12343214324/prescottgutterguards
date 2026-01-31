export interface Location {
  slug: string;
  name: string;
  type: "city" | "neighborhood" | "community";
  parentCity?: string;
  why: string;
  zipCodes?: string[];
}

export const locations: Location[] = [
  // Main Cities
  {
    slug: "prescott",
    name: "Prescott",
    type: "city",
    why: "Ponderosa pines drop needles year-round, and monsoon season dumps rain fast. Without guards, you're cleaning gutters constantly or paying someone else to.",
    zipCodes: ["86301", "86302", "86303", "86304", "86305"],
  },
  {
    slug: "prescott-valley",
    name: "Prescott Valley",
    type: "city",
    why: "Desert dust builds up fast, and when monsoons hit, clogged gutters overflow and flood landscaping. New homes here often have undersized builder-grade gutters that clog even faster.",
    zipCodes: ["86314", "86315"],
  },
  {
    slug: "chino-valley",
    name: "Chino Valley",
    type: "city",
    why: "Wind blows everything into your gutters: dust, tumbleweeds, debris from the open grassland. No trees to block it means your gutters catch it all.",
    zipCodes: ["86323"],
  },
  {
    slug: "dewey-humboldt",
    name: "Dewey-Humboldt",
    type: "city",
    why: "Mix of older and newer homes with desert vegetation dropping debris year round. Monsoon rains hit hard here and clogged gutters mean water goes where you don't want it.",
    zipCodes: ["86327", "86329"],
  },
  // Prescott Neighborhoods
  {
    slug: "prescott-lakes",
    name: "Prescott Lakes",
    type: "neighborhood",
    parentCity: "Prescott",
    why: "Golf course trees and landscaping produce tons of debris. Premium homes here deserve protection that matches, and HOAs notice when gutters overflow.",
    zipCodes: ["86301"],
  },
  {
    slug: "thumb-butte",
    name: "Thumb Butte",
    type: "neighborhood",
    parentCity: "Prescott",
    why: "You're in the forest. Pine needles pile up fast, and this is a fire zone. Dry needles in gutters are a fire hazard. Our WUI-rated guards help protect your home.",
    zipCodes: ["86303"],
  },
  {
    slug: "williamson-valley",
    name: "Williamson Valley",
    type: "neighborhood",
    parentCity: "Prescott",
    why: "Large lots with cottonwoods and unpaved roads mean gutters fill with leaves and dust. Rural properties can't always get cleaners out quickly. Guards solve that.",
    zipCodes: ["86305"],
  },
  {
    slug: "groom-creek",
    name: "Groom Creek",
    type: "neighborhood",
    parentCity: "Prescott",
    why: "Higher elevation means snow loads on gutters plus year-round pine debris. Ice dams form when gutters clog in winter. Guards keep water flowing.",
    zipCodes: ["86303"],
  },
  {
    slug: "downtown-prescott",
    name: "Downtown Prescott",
    type: "neighborhood",
    parentCity: "Prescott",
    why: "Historic homes with mature trees everywhere. Big oaks and elms drop heavy leaf loads in fall. Older gutter systems need protection to keep working.",
    zipCodes: ["86301"],
  },
  {
    slug: "forest-trails",
    name: "Forest Trails",
    type: "neighborhood",
    parentCity: "Prescott",
    why: "Homes surrounded by pines. You already know the needle problem. Guards mean you stop climbing ladders every few months.",
    zipCodes: ["86303"],
  },
  // Prescott Valley Neighborhoods
  {
    slug: "granville",
    name: "Granville",
    type: "neighborhood",
    parentCity: "Prescott Valley",
    why: "Newer homes with small gutters that builders installed cheap. Desert grit clogs them fast. Guards now prevent problems later.",
    zipCodes: ["86314"],
  },
  {
    slug: "stoneridge",
    name: "StoneRidge",
    type: "neighborhood",
    parentCity: "Prescott Valley",
    why: "Golf course community with mature trees. Lots of retirees here who don't want to deal with ladder work. Guards are a no-brainer.",
    zipCodes: ["86314"],
  },
  {
    slug: "viewpoint",
    name: "Viewpoint",
    type: "neighborhood",
    parentCity: "Prescott Valley",
    why: "Elevated and exposed to wind. Debris blows in from everywhere. Sun also beats down on south-facing gutters, so cheap plastic guards fail fast here.",
    zipCodes: ["86315"],
  },
  {
    slug: "mingus-west",
    name: "Mingus West",
    type: "neighborhood",
    parentCity: "Prescott Valley",
    why: "Mix of older homes that need gutter TLC. Desert dust is constant. Budget-friendly Raptor guards work great here.",
    zipCodes: ["86315"],
  },
  // Additional Communities
  {
    slug: "paulden",
    name: "Paulden",
    type: "community",
    why: "Rural and windy. Dust storms send debris straight into gutters. Getting a cleaner out here is a hassle, so install guards once and forget it.",
    zipCodes: ["86334"],
  },
  {
    slug: "mayer",
    name: "Mayer",
    type: "community",
    why: "Older homes along the highway catch road dust and debris. Guards keep gutters clear so water drains right, not into your walls.",
    zipCodes: ["86333"],
  },
  {
    slug: "spring-valley",
    name: "Spring Valley",
    type: "community",
    why: "Unpaved roads kick up dust that settles in gutters. When monsoons hit, that dust turns to mud and clogs everything.",
    zipCodes: ["86333"],
  },
  {
    slug: "yarnell",
    name: "Yarnell",
    type: "community",
    why: "After the 2013 fire, everyone here knows fire risk is real. Dry debris in gutters is fuel. WUI-rated guards are essential, not optional.",
    zipCodes: ["85362"],
  },
  {
    slug: "wilhoit",
    name: "Wilhoit",
    type: "community",
    why: "Remote and exposed to weather. When your gutters clog out here, you're on your own. Guards mean one less thing to worry about.",
    zipCodes: ["86332"],
  },
  {
    slug: "walker",
    name: "Walker",
    type: "community",
    why: "Forest living near Lynx Lake. Pine needles constantly. Fire risk. If you're in Walker, you need guards that block needles and resist fire.",
    zipCodes: ["86303"],
  },
  {
    slug: "pronghorn-ranch",
    name: "Pronghorn Ranch",
    type: "neighborhood",
    parentCity: "Prescott Valley",
    why: "New development still being built. Construction dust everywhere right now. Get guards before your gutters fill with it.",
    zipCodes: ["86315"],
  },
  {
    slug: "talking-rock-ranch",
    name: "Talking Rock Ranch",
    type: "neighborhood",
    parentCity: "Prescott",
    why: "Custom homes with long gutter runs. Golf course and ranch debris. Premium property deserves premium protection, and LeafBlaster Pro is the move here.",
    zipCodes: ["86305"],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationsByType(type: Location["type"]): Location[] {
  return locations.filter((l) => l.type === type);
}

export function getNeighborhoodsByCity(citySlug: string): Location[] {
  const city = getLocationBySlug(citySlug);
  if (!city) return [];
  return locations.filter(
    (l) => l.type === "neighborhood" && l.parentCity === city.name
  );
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
