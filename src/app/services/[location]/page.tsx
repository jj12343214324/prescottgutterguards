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

  const title = `Gutter Guards ${location.name} | Prescott Gutter Guards`;
  const description = `Gutter guard installation in ${location.name}. ${location.description} Free estimates, lifetime warranty.`;

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

function ProductCard({ product, recommended }: { product: Product; recommended: boolean }) {
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

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
        recommended ? "ring-2 ring-amber-400" : ""
      }`}
    >
      {recommended && (
        <div className="bg-amber-500 text-white text-center py-2 text-sm font-bold flex items-center justify-center gap-1">
          <Star className="w-4 h-4 fill-current" /> RECOMMENDED
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
      c.toLowerCase().includes("fire") || c.toLowerCase().includes("wildfire") || c.toLowerCase().includes("wui")
  );
  const hasPineNeedles = location.challenges.some(
    (c) => c.toLowerCase().includes("pine") || c.toLowerCase().includes("needle")
  );
  const recommendedTier = hasFireRisk || hasPineNeedles ? "best" : "better";

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-200 mb-4">
            <MapPin className="w-5 h-5" />
            <span>
              {location.parentCity ? `${location.parentCity}` : location.type === "city" ? "City" : "Community"}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Gutter Guards in {location.name}
          </h1>

          <p className="text-lg text-blue-100 max-w-3xl mb-6">
            {location.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-bold transition-all"
            >
              Get Free Estimate
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

      {/* Challenges */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                Why {location.name} Needs Gutter Guards
              </h2>
              <ul className="space-y-3">
                {location.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-amber-500 rounded-full p-1 mt-0.5 shrink-0">
                      <AlertTriangle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gray-100 rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
              <div className="text-gray-500 font-medium">[Location Image]</div>
              <div className="text-gray-400 text-sm mt-1">{location.name}, AZ</div>
            </div>
          </div>

          {location.zipCodes && (
            <div className="mt-8 text-sm text-gray-500">
              Serving ZIP codes: {location.zipCodes.join(", ")}
            </div>
          )}
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Our Gutter Guard Options
            </h2>
            <p className="text-gray-600">
              Based on {location.name}&apos;s conditions, we recommend{" "}
              <strong>{products.find((p) => p.tier === recommendedTier)?.name}</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                recommended={product.tier === recommendedTier}
              />
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/services"
              className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-2"
            >
              Full Product Comparison
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <ShieldCheck className="w-6 h-6 text-amber-400 mx-auto mb-1" />
              <div className="text-xl font-bold text-white">25-40 Year</div>
              <div className="text-blue-200 text-sm">Warranty</div>
            </div>
            <div>
              <Flame className="w-6 h-6 text-orange-400 mx-auto mb-1" />
              <div className="text-xl font-bold text-white">WUI Certified</div>
              <div className="text-blue-200 text-sm">Fire Protection</div>
            </div>
            <div>
              <Droplets className="w-6 h-6 text-blue-300 mx-auto mb-1" />
              <div className="text-xl font-bold text-white">150+ in/hr</div>
              <div className="text-blue-200 text-sm">Water Capacity</div>
            </div>
            <div>
              <Clock className="w-6 h-6 text-green-400 mx-auto mb-1" />
              <div className="text-xl font-bold text-white">1 Day</div>
              <div className="text-blue-200 text-sm">Most Installs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods (if city) */}
      {neighborhoods.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Neighborhoods in {location.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  href={`/services/${neighborhood.slug}`}
                  className="group bg-gray-50 hover:bg-blue-50 p-4 rounded-xl transition-colors"
                >
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 flex items-center justify-between">
                    {neighborhood.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {neighborhood.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get a Free Estimate in {location.name}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white hover:bg-gray-100 text-amber-600 px-8 py-4 rounded-full text-lg font-bold transition-all"
            >
              Request Estimate
            </Link>
            <a
              href="tel:+19285551234"
              className="bg-amber-600 hover:bg-amber-700 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> (928) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Other Areas We Serve
          </h2>
          <div className="flex flex-wrap gap-2">
            {locations
              .filter((l) => l.slug !== location.slug)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/services/${loc.slug}`}
                  className="bg-gray-100 hover:bg-blue-100 hover:text-blue-700 px-3 py-1.5 rounded-full text-sm text-gray-700 transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
