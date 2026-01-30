import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Check,
  AlertTriangle,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Flame,
  Droplets,
  Clock,
  Star,
} from "lucide-react";
import {
  locations,
  getLocationBySlug,
  getNeighborhoodsByCity,
  getAllLocationSlugs,
  Location,
} from "@/data/locations";
import { products, Product } from "@/data/products";

// Generate static params for all locations
export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    location: slug,
  }));
}

// Generate metadata for each location
export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);

  if (!location) {
    return {
      title: "Location Not Found | Prescott Gutter Guards",
    };
  }

  const title = `Gutter Guard Installation in ${location.name} | Prescott Gutter Guards`;
  const description = `Professional gutter guard installation in ${location.name}. Protect your home from clogs, water damage, and pests. Free estimates, lifetime warranty. Serving ${location.name} and surrounding areas.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

function ProductCard({ product, location }: { product: Product; location: Location }) {
  const colorClasses = {
    blue: {
      bg: "bg-blue-600",
      bgLight: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    green: {
      bg: "bg-green-600",
      bgLight: "bg-green-50",
      text: "text-green-600",
      border: "border-green-200",
    },
    amber: {
      bg: "bg-amber-500",
      bgLight: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-200",
    },
  };

  const colors = colorClasses[product.color as keyof typeof colorClasses];
  const isBest = product.tier === "best";

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
        isBest ? "ring-2 ring-amber-400" : ""
      }`}
    >
      {isBest && (
        <div className="bg-amber-500 text-white text-center py-2 text-sm font-bold flex items-center justify-center gap-1">
          <Star className="w-4 h-4 fill-current" /> RECOMMENDED FOR {location.name.toUpperCase()}
        </div>
      )}
      <div className={`${colors.bg} p-4`}>
        <div className="text-white/80 text-sm">{product.tierLabel}</div>
        <h3 className="text-xl font-bold text-white">{product.name}</h3>
      </div>
      <div className="p-6">
        <div className={`text-2xl font-bold ${colors.text} mb-2`}>
          {product.pricePerFoot}
        </div>
        <div className="text-sm text-gray-500 mb-4">
          {product.typicalHome}: {product.priceRange}
        </div>

        {/* Image Placeholder */}
        <div className={`${colors.bgLight} rounded-lg p-6 mb-4 text-center ${colors.border} border`}>
          <div className={`${colors.text} text-sm font-medium`}>[Product Image]</div>
        </div>

        <ul className="space-y-2 mb-4">
          {product.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <Check className={`w-4 h-4 ${colors.text} mt-0.5 shrink-0`} />
              <span className="text-gray-700">{feature.title}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/services"
          className={`block w-full ${colors.bg} text-white py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);

  if (!location) {
    notFound();
  }

  const neighborhoods =
    location.type === "city" ? getNeighborhoodsByCity(location.slug) : [];

  // Determine recommended product based on location challenges
  const hasFireRisk = location.challenges.some(
    (c) =>
      c.toLowerCase().includes("fire") || c.toLowerCase().includes("wildfire")
  );
  const hasPineNeedles = location.challenges.some(
    (c) => c.toLowerCase().includes("pine") || c.toLowerCase().includes("needle")
  );
  const recommendedProduct = hasFireRisk || hasPineNeedles ? "best" : "better";

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-200 mb-4">
            <MapPin className="w-5 h-5" />
            <span>
              {location.parentCity
                ? `${location.parentCity} · ${location.type === "neighborhood" ? "Neighborhood" : "Community"}`
                : location.type === "city"
                ? "City"
                : "Community"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Gutter Guard Installation in{" "}
            <span className="text-amber-300">{location.name}</span>
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            {location.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Get Free Estimate in {location.name}
            </Link>
            <a
              href="tel:+19285551234"
              className="bg-white/10 hover:bg-white/20 border-2 border-white text-white px-6 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" /> (928) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Location Features & Challenges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                About {location.name}
              </h2>
              <ul className="space-y-4">
                {location.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-green-500 rounded-full p-1 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Image Placeholder */}
              <div className="mt-8 bg-gray-100 rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
                <div className="text-gray-500 font-medium">[Location Image]</div>
                <div className="text-gray-400 text-sm mt-1">{location.name}, AZ</div>
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                Gutter Challenges in {location.name}
              </h2>
              <ul className="space-y-4">
                {location.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-amber-500 rounded-full p-1 mt-0.5">
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>

              {/* Why Protection Matters */}
              <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-3">
                  Why {location.name} Homes Need Gutter Guards
                </h3>
                <p className="text-gray-700 text-sm">
                  Based on {location.name}&apos;s unique characteristics, we recommend
                  professional gutter guard installation to protect your home from
                  water damage, foundation issues, and the specific debris
                  challenges in your area. Our guards are built to handle
                  everything {location.name} throws at them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products for this Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gutter Guard Options for {location.name}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer three tiers of protection to fit every budget. Based on{" "}
              {location.name}&apos;s conditions, we often recommend the{" "}
              <strong>
                {products.find((p) => p.tier === recommendedProduct)?.name}
              </strong>{" "}
              for optimal protection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  tier:
                    product.tier === recommendedProduct
                      ? "best"
                      : product.tier === "best" && recommendedProduct !== "best"
                      ? "better"
                      : product.tier,
                }}
                location={location}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-2"
            >
              View Detailed Product Comparison
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-12 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                <ShieldCheck className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-2xl font-bold text-white">25-40 Year</div>
              <div className="text-blue-200">Warranty</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Flame className="w-8 h-8 text-orange-400" />
              </div>
              <div className="text-2xl font-bold text-white">WUI Certified</div>
              <div className="text-blue-200">Fire Protection</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Droplets className="w-8 h-8 text-blue-300" />
              </div>
              <div className="text-2xl font-bold text-white">150+ in/hr</div>
              <div className="text-blue-200">Water Capacity</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Clock className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">1 Day</div>
              <div className="text-blue-200">Most Installs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods (if city) */}
      {neighborhoods.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Neighborhoods We Serve in {location.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  href={`/services/${neighborhood.slug}`}
                  className="group bg-gray-50 hover:bg-blue-50 p-6 rounded-xl transition-colors"
                >
                  <div className="font-bold text-gray-900 group-hover:text-blue-600 flex items-center justify-between">
                    {neighborhood.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {neighborhood.description.slice(0, 100)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular Areas (if available) */}
      {location.popularAreas && location.popularAreas.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Popular Areas in {location.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {location.popularAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm"
                >
                  {area}
                </span>
              ))}
            </div>
            {location.zipCodes && (
              <div className="mt-6 text-sm text-gray-500">
                Serving ZIP codes: {location.zipCodes.join(", ")}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Protect Your {location.name} Home?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free estimate from your local gutter guard experts. We know{" "}
            {location.name} and we know gutters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white hover:bg-gray-100 text-amber-600 px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
            >
              Get FREE Estimate
            </Link>
            <a
              href="tel:+19285551234"
              className="bg-amber-600 hover:bg-amber-700 border-2 border-white text-white px-8 py-4 rounded-full text-xl font-bold transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Other Areas We Serve
          </h2>
          <div className="flex flex-wrap gap-3">
            {locations
              .filter((l) => l.slug !== location.slug)
              .slice(0, 12)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/services/${loc.slug}`}
                  className="bg-gray-100 hover:bg-blue-100 hover:text-blue-700 px-4 py-2 rounded-full text-gray-700 transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white font-semibold"
            >
              View All Areas →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
