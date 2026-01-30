export interface Location {
  slug: string;
  name: string;
  type: "city" | "neighborhood" | "community";
  parentCity?: string;
  description: string;
  challenges: string[];
  zipCodes?: string[];
}

export const locations: Location[] = [
  // Main Cities
  {
    slug: "prescott",
    name: "Prescott",
    type: "city",
    description:
      "Heavy Ponderosa pine coverage plus monsoon rains. Older homes with original gutters that clog constantly.",
    challenges: [
      "Pine needles year-round",
      "Intense monsoon downpours",
      "Wildfire risk — WUI zone",
      "Older homes with aging gutters",
    ],
    zipCodes: ["86301", "86302", "86303", "86304", "86305"],
  },
  {
    slug: "prescott-valley",
    name: "Prescott Valley",
    type: "city",
    description:
      "High desert dust and debris. New construction often has undersized gutters. Flash flooding during monsoons.",
    challenges: [
      "Desert dust accumulation",
      "Flash flood runoff",
      "Builder-grade gutters undersized",
      "Pine/juniper debris in foothills",
    ],
    zipCodes: ["86314", "86315"],
  },
  {
    slug: "chino-valley",
    name: "Chino Valley",
    type: "city",
    description:
      "Open grassland means high winds carry dust, tumbleweeds, and debris directly into gutters.",
    challenges: [
      "High winds carry debris",
      "Tumbleweeds and ag debris",
      "Hail during monsoons",
      "No tree cover = gutters catch everything",
    ],
    zipCodes: ["86323"],
  },
  {
    slug: "dewey-humboldt",
    name: "Dewey-Humboldt",
    type: "city",
    description:
      "Mix of older and newer homes. Desert vegetation debris. Monsoon runoff from surrounding hills.",
    challenges: [
      "Older homes need gutter updates",
      "Desert debris buildup",
      "Hill runoff during storms",
      "Mixed terrain drainage issues",
    ],
    zipCodes: ["86327", "86329"],
  },
  // Prescott Neighborhoods
  {
    slug: "prescott-lakes",
    name: "Prescott Lakes",
    type: "neighborhood",
    parentCity: "Prescott",
    description:
      "Golf course community. Landscaping debris from course plus lake moisture increases gutter demands.",
    challenges: [
      "Golf course tree debris",
      "Lake moisture = more gutter load",
      "HOA requires clean appearance",
      "Premium homes need premium protection",
    ],
    zipCodes: ["86301"],
  },
  {
    slug: "thumb-butte",
    name: "Thumb Butte",
    type: "neighborhood",
    parentCity: "Prescott",
    description:
      "Dense Ponderosa forest. Extreme pine needle accumulation. High fire risk zone.",
    challenges: [
      "Extreme pine needle buildup",
      "WUI fire zone — need fire-rated guards",
      "Steep terrain = fast water flow",
      "Squirrels and birds add debris",
    ],
    zipCodes: ["86303"],
  },
  {
    slug: "williamson-valley",
    name: "Williamson Valley",
    type: "neighborhood",
    parentCity: "Prescott",
    description:
      "Large rural lots. Dust from unpaved roads. Cottonwood and deciduous tree debris.",
    challenges: [
      "Road dust accumulation",
      "Cottonwood fluff and leaves",
      "Mix of home styles",
      "Well water mineral concerns",
    ],
    zipCodes: ["86305"],
  },
  {
    slug: "groom-creek",
    name: "Groom Creek",
    type: "neighborhood",
    parentCity: "Prescott",
    description:
      "Higher elevation forest. Snow in winter, monsoons in summer. Pine needles and cones year-round.",
    challenges: [
      "Snow loads on gutters",
      "Ice dam potential",
      "Year-round pine debris",
      "Steep rooflines",
    ],
    zipCodes: ["86303"],
  },
  {
    slug: "downtown-prescott",
    name: "Downtown Prescott",
    type: "neighborhood",
    parentCity: "Prescott",
    description:
      "Historic homes with unique gutter profiles. Mature shade trees drop heavy leaf loads.",
    challenges: [
      "Historic gutters need special fit",
      "Heavy deciduous leaf drop",
      "Narrow lots complicate access",
      "Preservation requirements",
    ],
    zipCodes: ["86301"],
  },
  {
    slug: "forest-trails",
    name: "Forest Trails",
    type: "neighborhood",
    parentCity: "Prescott",
    description:
      "Surrounded by Ponderosa pines. Significant needle debris. Fire mitigation area.",
    challenges: [
      "Heavy pine needle debris",
      "Forest runoff during monsoons",
      "Fire mitigation zone",
      "HOA appearance standards",
    ],
    zipCodes: ["86303"],
  },
  // Prescott Valley Neighborhoods
  {
    slug: "granville",
    name: "Granville",
    type: "neighborhood",
    parentCity: "Prescott Valley",
    description:
      "Newer construction with undersized builder gutters. Desert landscaping produces fine debris.",
    challenges: [
      "Fine desert debris",
      "New home gutters often too small",
      "HOA strict on appearance",
      "Monsoon flooding from hardscape",
    ],
    zipCodes: ["86314"],
  },
  {
    slug: "stoneridge",
    name: "StoneRidge",
    type: "neighborhood",
    parentCity: "Prescott Valley",
    description:
      "Golf course community with mature trees. Established landscaping means lots of debris.",
    challenges: [
      "Golf course tree debris",
      "Mature landscaping",
      "Varied gutter configurations",
      "55+ residents want zero maintenance",
    ],
    zipCodes: ["86314"],
  },
  {
    slug: "viewpoint",
    name: "Viewpoint",
    type: "neighborhood",
    parentCity: "Prescott Valley",
    description:
      "Elevated location. Wind-driven debris from open terrain. Intense sun exposure.",
    challenges: [
      "Wind drives debris into gutters",
      "Sun degrades cheap guards fast",
      "Sloped lots = fast runoff",
      "Exposed to weather",
    ],
    zipCodes: ["86315"],
  },
  {
    slug: "mingus-west",
    name: "Mingus West",
    type: "neighborhood",
    parentCity: "Prescott Valley",
    description:
      "Mix of older and newer homes. High desert dust. Budget-conscious area needs value options.",
    challenges: [
      "Older gutters deteriorating",
      "Desert dust buildup",
      "Drainage challenges in some areas",
      "Need affordable solutions",
    ],
    zipCodes: ["86315"],
  },
  // Additional Communities
  {
    slug: "paulden",
    name: "Paulden",
    type: "community",
    description:
      "Rural area north of Chino Valley. Dust and wind from open terrain. Mix of home types.",
    challenges: [
      "Remote location",
      "Dust and wind exposure",
      "Mix of manufactured and site-built",
      "Well/septic properties",
    ],
    zipCodes: ["86334"],
  },
  {
    slug: "mayer",
    name: "Mayer",
    type: "community",
    description:
      "Historic mining town. Older housing stock. Highway dust near main road.",
    challenges: [
      "Older homes need updates",
      "Highway dust",
      "Limited local services",
      "Varied terrain",
    ],
    zipCodes: ["86333"],
  },
  {
    slug: "spring-valley",
    name: "Spring Valley",
    type: "community",
    description:
      "Rural area between Dewey-Humboldt and Mayer. Unpaved roads create dust. Monsoon drainage issues.",
    challenges: [
      "Unpaved road dust",
      "Limited infrastructure",
      "Monsoon drainage problems",
      "Varied home conditions",
    ],
    zipCodes: ["86333"],
  },
  {
    slug: "yarnell",
    name: "Yarnell",
    type: "community",
    description:
      "Mountain community. Extreme wildfire risk after 2013 fire. Pine and chaparral debris.",
    challenges: [
      "Extreme wildfire risk — WUI critical",
      "Pine and chaparral debris",
      "Remote location",
      "Post-fire rebuilding area",
    ],
    zipCodes: ["85362"],
  },
  {
    slug: "wilhoit",
    name: "Wilhoit",
    type: "community",
    description:
      "Very rural, off-grid character. Extreme weather exposure. Self-reliant homeowners.",
    challenges: [
      "Remote access",
      "Off-grid homes common",
      "Extreme weather exposure",
      "Limited nearby services",
    ],
    zipCodes: ["86332"],
  },
  {
    slug: "walker",
    name: "Walker",
    type: "community",
    description:
      "Historic mining area in the forest. Heavy pine needle accumulation. Fire risk zone.",
    challenges: [
      "Heavy pine needle debris",
      "Forest fire risk",
      "Steep terrain",
      "Older cabins and homes",
    ],
    zipCodes: ["86303"],
  },
  {
    slug: "pronghorn-ranch",
    name: "Pronghorn Ranch",
    type: "neighborhood",
    parentCity: "Prescott Valley",
    description:
      "New development. Construction dust during buildout. Builder-grade gutters may be undersized.",
    challenges: [
      "Construction dust",
      "New landscaping establishing",
      "Builder gutters undersized",
      "Desert debris",
    ],
    zipCodes: ["86315"],
  },
  {
    slug: "talking-rock-ranch",
    name: "Talking Rock Ranch",
    type: "neighborhood",
    parentCity: "Prescott",
    description:
      "Luxury golf and ranch community. Large custom homes with extensive gutter runs. Premium expectations.",
    challenges: [
      "Premium homes need premium guards",
      "Golf course and ranch debris",
      "Large homes = lots of gutters",
      "High appearance standards",
    ],
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
