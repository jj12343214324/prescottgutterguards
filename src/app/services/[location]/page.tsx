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
  const description = `Gutter guard installation in ${location.name}. ${location.why} Free estimates, lifetime warranty.`;

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
      bg: "bg-[#79b939]",
      bgLight: "bg-[#79b939]/10",
      text: "text-[#79b939]",
      border: "border-[#79b939]/30",
    },
    green: {
      bg: "bg-[#79b939]",
      bgLight: "bg-[#79b939]/10",
      text: "text-[#79b939]",
      border: "border-[#79b939]/30",
    },
    amber: {
      bg: "bg-[#79b939]",
      bgLight: "bg-gray-100",
      text: "text-[#79b939]",
      border: "border-gray-200",
    },
  };

  const colors = colorClasses[product.color as keyof typeof colorClasses];

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
        recommended ? "ring-2 ring-[#79b939]" : ""
      }`}
    >
      {recommended && (
        <div className="bg-[#79b939] text-white text-center py-2 text-sm font-bold flex items-center justify-center gap-1">
          <Star className="w-4 h-4 fill-current" /> RECOMMENDED
        </div>
      )}
      <div className={`${colors.bg} p-4`}>
        <div className="text-white/80 text-sm">{product.tierLabel}</div>
        <h3 className="text-xl font-bold text-white">{product.name}</h3>
      </div>
      <div className="p-6">
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
  const why = location.why.toLowerCase();
  const hasFireRisk = why.includes("fire") || why.includes("wildfire") || why.includes("wui");
  const hasPineNeedles = why.includes("pine") || why.includes("needle");
  const recommendedTier = hasFireRisk || hasPineNeedles ? "best" : "better";

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <MapPin className="w-5 h-5" />
            <span>
              {location.parentCity ? `${location.parentCity}` : location.type === "city" ? "City" : "Community"}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Gutter Guards in {location.name}
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mb-6">
            {location.why}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="bg-[#79b939] hover:bg-[#5a9a1f] text-white px-6 py-3 rounded-lg font-bold transition-all"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+19289107578"
              className="bg-white/10 hover:bg-white/20 border-2 border-white text-white px-6 py-3 rounded-lg font-bold transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" /> (928) 910-7578
            </a>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-[#79b939]" />
                Why {location.name} Needs Gutter Guards
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {location.why}
              </p>
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
              className="text-[#79b939] hover:text-[#5a9a1f] font-semibold inline-flex items-center gap-2"
            >
              Full Product Comparison
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <ShieldCheck className="w-6 h-6 text-[#79b939] mx-auto mb-1" />
              <div className="text-xl font-bold text-white">25-40 Year</div>
              <div className="text-gray-400 text-sm">Warranty</div>
            </div>
            <div>
              <Flame className="w-6 h-6 text-orange-400 mx-auto mb-1" />
              <div className="text-xl font-bold text-white">WUI Certified</div>
              <div className="text-gray-400 text-sm">Fire Protection</div>
            </div>
            <div>
              <Droplets className="w-6 h-6 text-blue-300 mx-auto mb-1" />
              <div className="text-xl font-bold text-white">150+ in/hr</div>
              <div className="text-gray-400 text-sm">Water Capacity</div>
            </div>
            <div>
              <Clock className="w-6 h-6 text-[#79b939] mx-auto mb-1" />
              <div className="text-xl font-bold text-white">1 Day</div>
              <div className="text-gray-400 text-sm">Most Installs</div>
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
                  className="group bg-gray-50 hover:bg-[#79b939]/10 p-4 rounded-xl transition-colors"
                >
                  <div className="font-semibold text-gray-900 group-hover:text-[#79b939] flex items-center justify-between">
                    {neighborhood.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {neighborhood.why}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-[#79b939]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get a Free Estimate in {location.name}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white hover:bg-gray-100 text-[#79b939] px-8 py-4 rounded-full text-lg font-bold transition-all"
            >
              Request Estimate
            </Link>
            <a
              href="tel:+19289107578"
              className="bg-[#5a9a1f] hover:bg-[#4a8a10] border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> (928) 910-7578
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
                  className="bg-gray-100 hover:bg-[#79b939]/20 hover:text-[#79b939] px-3 py-1.5 rounded-lg text-sm text-gray-700 transition-colors"
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
