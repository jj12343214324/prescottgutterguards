export interface Location {
  slug: string;
  name: string;
  type: "city" | "neighborhood" | "community";
  parentCity?: string;
  description: string;
  features: string[];
  challenges: string[];
  popularAreas?: string[];
  zipCodes?: string[];
}

export const locations: Location[] = [
  // Main Cities
  {
    slug: "prescott",
    name: "Prescott",
    type: "city",
    description:
      "Arizona's original capital and the heart of the Quad Cities. With its historic downtown, Whiskey Row, and beautiful Victorian homes, Prescott homeowners take pride in maintaining their properties. The mix of mature trees and seasonal monsoons makes gutter protection essential.",
    features: [
      "Historic Victorian and Craftsman homes",
      "Mature tree canopy throughout neighborhoods",
      "Four distinct seasons with monsoon summer rains",
      "Active arts and culture community",
    ],
    challenges: [
      "Heavy pine needle accumulation from Ponderosa pines",
      "Monsoon season brings intense, sudden downpours",
      "Older homes often have original gutters needing protection",
      "Wildfire risk in surrounding forest areas",
    ],
    popularAreas: [
      "Downtown Historic District",
      "Thumb Butte",
      "Groom Creek",
      "Williamson Valley",
    ],
    zipCodes: ["86301", "86302", "86303", "86304", "86305"],
  },
  {
    slug: "prescott-valley",
    name: "Prescott Valley",
    type: "city",
    description:
      "The largest town in Yavapai County, Prescott Valley offers a mix of established neighborhoods and newer developments. The town's growth has brought diverse housing styles, from starter homes to custom builds, all benefiting from professional gutter protection.",
    features: [
      "Mix of new construction and established homes",
      "Growing family-friendly community",
      "Mountain views and high desert landscape",
      "Diverse housing from townhomes to custom estates",
    ],
    challenges: [
      "Dust and debris from high desert environment",
      "Flash flooding during monsoon season",
      "New construction often lacks adequate gutter protection",
      "Pine and juniper debris in foothill areas",
    ],
    popularAreas: [
      "Granville",
      "Viewpoint",
      "StoneRidge",
      "Mingus West",
    ],
    zipCodes: ["86314", "86315"],
  },
  {
    slug: "chino-valley",
    name: "Chino Valley",
    type: "city",
    description:
      "Known as the 'Grassland Capital of Arizona,' Chino Valley offers a more rural lifestyle with larger properties. The open terrain and agricultural heritage mean homes face unique challenges from dust, tumbleweeds, and seasonal weather patterns.",
    features: [
      "Large lots and rural properties",
      "Agricultural and ranching heritage",
      "Open grassland and prairie views",
      "Growing residential development",
    ],
    challenges: [
      "High winds carry dust and debris",
      "Tumbleweeds and agricultural debris",
      "Limited tree cover means gutters catch everything",
      "Hail during monsoon season",
    ],
    popularAreas: [
      "Old Home Manor",
      "Chino Valley proper",
      "Road 1 South corridor",
      "Perkinsville Road area",
    ],
    zipCodes: ["86323"],
  },
  {
    slug: "dewey-humboldt",
    name: "Dewey-Humboldt",
    type: "city",
    description:
      "A small town with a rich mining history, Dewey-Humboldt offers affordable housing and a tight-knit community. Located between Prescott and Prescott Valley, residents enjoy easy access to both while maintaining a quieter lifestyle.",
    features: [
      "Historic mining town character",
      "Affordable housing options",
      "Close-knit community atmosphere",
      "Easy access to Prescott and Prescott Valley",
    ],
    challenges: [
      "Older homes may have aging gutter systems",
      "Desert vegetation and debris",
      "Monsoon runoff from surrounding hills",
      "Mix of flat and sloped terrain",
    ],
    popularAreas: [
      "Historic Humboldt",
      "Dewey town center",
      "Blue Hills",
      "Agua Fria Ranch",
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
      "An upscale master-planned community featuring a championship golf course, lakes, and luxury homes. Prescott Lakes residents expect the best, and our premium gutter guards protect their investment while maintaining the community's pristine appearance.",
    features: [
      "Master-planned luxury community",
      "Golf course and lake amenities",
      "Custom and semi-custom homes",
      "HOA-maintained common areas",
    ],
    challenges: [
      "Golf course landscaping produces significant debris",
      "Lake-effect moisture increases gutter demands",
      "Premium homes require matching premium protection",
      "HOA standards require clean, professional appearance",
    ],
    zipCodes: ["86301"],
  },
  {
    slug: "thumb-butte",
    name: "Thumb Butte",
    type: "neighborhood",
    parentCity: "Prescott",
    description:
      "Nestled against the iconic Thumb Butte landmark, this area features homes surrounded by national forest. The dense Ponderosa pine coverage makes this one of the most challenging areas for gutter maintenance—and one where our premium guards truly shine.",
    features: [
      "Adjacent to Prescott National Forest",
      "Iconic Thumb Butte views",
      "Dense Ponderosa pine forest",
      "Mix of cabins and custom homes",
    ],
    challenges: [
      "Extreme pine needle accumulation year-round",
      "Forest fire risk requires WUI-compliant materials",
      "Steep terrain increases water velocity",
      "Wildlife (squirrels, birds) add debris",
    ],
    zipCodes: ["86303"],
  },
  {
    slug: "williamson-valley",
    name: "Williamson Valley",
    type: "neighborhood",
    parentCity: "Prescott",
    description:
      "A sprawling area northwest of Prescott offering larger lots and a rural lifestyle while still being close to town. Horse properties and custom homes dot the valley, with residents valuing self-sufficiency and quality craftsmanship.",
    features: [
      "Large lots, many 1+ acres",
      "Horse properties and small ranches",
      "Rural feel with city conveniences nearby",
      "Custom homes and manufactured homes",
    ],
    challenges: [
      "Dust from unpaved roads and open land",
      "Cottonwood and other deciduous tree debris",
      "Well water areas may have mineral buildup concerns",
      "Variable home styles require flexible solutions",
    ],
    zipCodes: ["86305"],
  },
  {
    slug: "groom-creek",
    name: "Groom Creek",
    type: "neighborhood",
    parentCity: "Prescott",
    description:
      "A mountain community south of Prescott at higher elevation, Groom Creek offers a true forest living experience. Snow in winter and monsoons in summer mean gutters work overtime here.",
    features: [
      "Higher elevation mountain living",
      "Dense forest setting",
      "Cooler summer temperatures",
      "Snow in winter months",
    ],
    challenges: [
      "Heavy snow loads on gutters",
      "Year-round pine needle and cone debris",
      "Ice dam potential in winter",
      "Steep rooflines common",
    ],
    zipCodes: ["86303"],
  },
  {
    slug: "downtown-prescott",
    name: "Downtown Prescott",
    type: "neighborhood",
    parentCity: "Prescott",
    description:
      "The historic heart of Prescott, featuring Victorian homes, tree-lined streets, and proximity to the famous Courthouse Square. These cherished homes deserve gutter protection that preserves their character while providing modern performance.",
    features: [
      "Historic Victorian and Craftsman architecture",
      "Mature shade trees throughout",
      "Walking distance to Courthouse Square",
      "Protected historic district areas",
    ],
    challenges: [
      "Historic homes have unique gutter profiles",
      "Large deciduous trees drop heavy leaf loads",
      "Preservation requirements may limit modifications",
      "Narrow lots and close neighbors complicate access",
    ],
    zipCodes: ["86301"],
  },
  {
    slug: "forest-trails",
    name: "Forest Trails",
    type: "neighborhood",
    parentCity: "Prescott",
    description:
      "A beautiful subdivision offering the perfect blend of forest living and modern amenities. Homes here are surrounded by Ponderosa pines, making quality gutter protection not just convenient but essential.",
    features: [
      "Planned community with forest setting",
      "Modern homes with quality construction",
      "Trail access to national forest",
      "Active HOA maintains community standards",
    ],
    challenges: [
      "Significant pine needle debris",
      "Monsoon runoff from forested areas",
      "Fire mitigation important consideration",
      "HOA requires maintained appearance",
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
      "A master-planned community in Prescott Valley featuring diverse housing options, parks, and walking trails. Granville's newer construction benefits from modern gutter guard installation that prevents future maintenance headaches.",
    features: [
      "Master-planned community",
      "Parks and walking trails",
      "Mix of single-family and townhomes",
      "Newer construction (2000s-present)",
    ],
    challenges: [
      "Desert landscaping produces fine debris",
      "New home gutters often undersized",
      "HOA maintains strict appearance standards",
      "Monsoon flooding from impervious surfaces",
    ],
    zipCodes: ["86314"],
  },
  {
    slug: "stoneridge",
    name: "StoneRidge",
    type: "neighborhood",
    parentCity: "Prescott Valley",
    description:
      "An established golf course community with a mix of custom homes and production builds. StoneRidge residents enjoy mountain views and resort-style amenities while our gutter guards handle the debris from mature landscaping.",
    features: [
      "Golf course community",
      "Mountain and valley views",
      "Established landscaping",
      "Active 55+ sections available",
    ],
    challenges: [
      "Golf course trees and landscaping debris",
      "Mature trees throughout community",
      "Varied roof styles and gutter configurations",
      "Retirement homes may need low-maintenance solutions",
    ],
    zipCodes: ["86314"],
  },
  {
    slug: "viewpoint",
    name: "Viewpoint",
    type: "neighborhood",
    parentCity: "Prescott Valley",
    description:
      "Living up to its name, Viewpoint offers stunning panoramic views of the surrounding mountains and valleys. These elevated homes face unique challenges from wind-driven debris and intense sun exposure.",
    features: [
      "Panoramic mountain views",
      "Higher elevation within PV",
      "Mix of custom and production homes",
      "Quiet residential streets",
    ],
    challenges: [
      "Wind-driven debris from open terrain",
      "Intense sun exposure on south-facing gutters",
      "Sloped lots increase runoff velocity",
      "Views mean exposed locations",
    ],
    zipCodes: ["86315"],
  },
  {
    slug: "mingus-west",
    name: "Mingus West",
    type: "neighborhood",
    parentCity: "Prescott Valley",
    description:
      "An affordable area on the eastern edge of Prescott Valley with views toward Mingus Mountain. A mix of older and newer homes means varied gutter conditions and protection needs.",
    features: [
      "Affordable housing options",
      "Views of Mingus Mountain",
      "Mix of home ages and styles",
      "Close to shopping and services",
    ],
    challenges: [
      "Older homes may have deteriorating gutters",
      "High desert dust and debris",
      "Budget-conscious homeowners need value options",
      "Some areas have drainage challenges",
    ],
    zipCodes: ["86315"],
  },
  // Additional Communities
  {
    slug: "paulden",
    name: "Paulden",
    type: "community",
    description:
      "A small unincorporated community north of Chino Valley offering affordable rural living. Large lots and a frontier spirit define this area, where homeowners appreciate straightforward, reliable solutions.",
    features: [
      "Very affordable land and homes",
      "Large lots, often 1+ acres",
      "Rural, independent lifestyle",
      "Growing slowly with families and retirees",
    ],
    challenges: [
      "Remote location limits service options",
      "Well and septic systems common",
      "Dust and wind from open terrain",
      "Mix of manufactured and site-built homes",
    ],
    zipCodes: ["86334"],
  },
  {
    slug: "mayer",
    name: "Mayer",
    type: "community",
    description:
      "A historic mining town along Highway 69 between Prescott Valley and the Verde Valley. Mayer offers affordable housing with a small-town atmosphere, and residents appreciate quality work at fair prices.",
    features: [
      "Historic mining community",
      "Very affordable housing",
      "Small-town atmosphere",
      "Gateway to Verde Valley",
    ],
    challenges: [
      "Older housing stock needs updates",
      "Highway noise and dust near main road",
      "Limited local services",
      "Varied terrain and home styles",
    ],
    zipCodes: ["86333"],
  },
  {
    slug: "spring-valley",
    name: "Spring Valley",
    type: "community",
    description:
      "An unincorporated community between Dewey-Humboldt and Mayer offering rural living at affordable prices. Spring Valley residents value practicality and appreciate products that deliver long-term value.",
    features: [
      "Rural residential area",
      "Affordable larger lots",
      "Mix of retirees and families",
      "Close to Prescott Valley amenities",
    ],
    challenges: [
      "Unpaved roads create dust",
      "Limited infrastructure",
      "Varied home conditions",
      "Monsoon drainage issues in some areas",
    ],
    zipCodes: ["86333"],
  },
  {
    slug: "yarnell",
    name: "Yarnell",
    type: "community",
    description:
      "A small mountain community on the edge of the Prescott area, known for the Shrine of St. Joseph and its artistic community. After the tragic 2013 fire, residents here understand the importance of fire-resistant home protection.",
    features: [
      "Mountain community at 4,800 ft",
      "Artistic and spiritual community",
      "Cooler temperatures",
      "Small-town character",
    ],
    challenges: [
      "Extreme wildfire risk - WUI zone",
      "Pine and chaparral debris",
      "Remote location",
      "Post-fire rebuilding continues",
    ],
    zipCodes: ["85362"],
  },
  {
    slug: "wilhoit",
    name: "Wilhoit",
    type: "community",
    description:
      "A tiny unincorporated community south of Prescott with a rural, off-grid character. Wilhoit residents are self-reliant and appreciate durable solutions that stand up to the elements.",
    features: [
      "Very rural setting",
      "Large parcels",
      "Self-reliant community",
      "Beautiful high desert terrain",
    ],
    challenges: [
      "Remote access",
      "Off-grid homes common",
      "Extreme weather exposure",
      "Limited services nearby",
    ],
    zipCodes: ["86332"],
  },
  {
    slug: "walker",
    name: "Walker",
    type: "community",
    description:
      "A historic mining area southeast of Prescott featuring forest living and a strong sense of community. Walker residents live surrounded by pines and understand the constant battle with needle debris.",
    features: [
      "Historic mining district",
      "Forest setting",
      "Tight-knit community",
      "Access to Lynx Lake recreation",
    ],
    challenges: [
      "Heavy pine needle accumulation",
      "Forest fire risk",
      "Steep terrain common",
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
      "A newer master-planned community in Prescott Valley with modern homes and family-friendly amenities. These newer builds benefit from gutter protection installed right from the start.",
    features: [
      "New master-planned community",
      "Modern energy-efficient homes",
      "Parks and community amenities",
      "Growing family neighborhood",
    ],
    challenges: [
      "Construction dust during buildout",
      "New landscaping establishing",
      "Builder-grade gutters may be undersized",
      "Desert debris accumulation",
    ],
    zipCodes: ["86315"],
  },
  {
    slug: "talking-rock-ranch",
    name: "Talking Rock Ranch",
    type: "neighborhood",
    parentCity: "Prescott",
    description:
      "A premier golf and ranch community offering luxury living with stunning views. Talking Rock residents expect exceptional quality, and our premium gutter guards deliver the performance and aesthetics they demand.",
    features: [
      "Luxury golf community",
      "Custom home sites",
      "Ranch and equestrian facilities",
      "Exceptional mountain views",
    ],
    challenges: [
      "Premium homes need premium solutions",
      "Golf course and ranch debris",
      "Large custom homes with extensive gutters",
      "High expectations for appearance",
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
