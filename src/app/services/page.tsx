import { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ShieldCheck,
  Flame,
  Droplets,
  ArrowRight,
  Star,
  Phone,
} from "lucide-react";
import { products, Product } from "@/data/products";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Gutter Guard Services | Prescott Gutter Guards",
  description:
    "Professional gutter guard installation in Prescott, AZ. Choose from our Good, Better, Best options: Raptor, LeafBlaster Pro, and LeafBlaster Pro Frame-Reinforced. Free estimates.",
};

function ProductCard({ product }: { product: Product }) {
  const colorClasses = {
    blue: {
      bg: "bg-blue-600",
      bgLight: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-600",
      badge: "bg-blue-100 text-blue-800",
    },
    green: {
      bg: "bg-green-600",
      bgLight: "bg-green-50",
      text: "text-green-600",
      border: "border-green-600",
      badge: "bg-green-100 text-green-800",
    },
    amber: {
      bg: "bg-amber-500",
      bgLight: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-500",
      badge: "bg-amber-100 text-amber-800",
    },
  };

  const colors = colorClasses[product.color as keyof typeof colorClasses];
  const isBest = product.tier === "best";

  return (
    <div
      className={`relative rounded-3xl overflow-hidden ${
        isBest ? "ring-4 ring-amber-400 shadow-2xl scale-105" : "shadow-xl"
      }`}
    >
      {isBest && (
        <div className="absolute top-0 left-0 right-0 bg-amber-500 text-white text-center py-2 font-bold flex items-center justify-center gap-2">
          <Star className="w-4 h-4 fill-current" /> PREMIUM CHOICE{" "}
          <Star className="w-4 h-4 fill-current" />
        </div>
      )}

      <div className={`${colors.bg} p-6 ${isBest ? "pt-12" : ""}`}>
        <div
          className={`inline-block ${colors.badge} px-3 py-1 rounded-full text-sm font-semibold mb-3`}
        >
          {product.tierLabel}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-white/80 text-sm">{product.tagline}</p>
      </div>

      <div className="bg-white p-6">
        {/* Price */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <div className="text-sm text-gray-500 mb-1">Installed Price</div>
          <div className={`text-3xl font-bold ${colors.text}`}>
            {product.pricePerFoot}
          </div>
          <div className="text-sm text-gray-500 mt-1">
            {product.typicalHome}: {product.priceRange}
          </div>
        </div>

        {/* Image Placeholder */}
        <div className={`${colors.bgLight} rounded-xl p-8 mb-6 text-center`}>
          <div className={`${colors.text} text-sm font-medium`}>
            [Product Image]
          </div>
          <div className="text-gray-400 text-xs mt-1">{product.name}</div>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-6">
          <h4 className="font-bold text-gray-900">Key Features</h4>
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className={`${colors.bg} rounded-full p-1 mt-0.5`}>
                <Check className="w-3 h-3 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">
                  {feature.title}
                </div>
                <div className="text-gray-600 text-sm">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        {product.highlight && (
          <div
            className={`${colors.bgLight} border ${colors.border} rounded-xl p-4 mb-6`}
          >
            <div className={`font-bold ${colors.text} flex items-center gap-2`}>
              {product.tier === "best" ? (
                <Flame className="w-4 h-4" />
              ) : (
                <Droplets className="w-4 h-4" />
              )}
              {product.highlight.title}
            </div>
            <p className="text-gray-600 text-sm mt-1">
              {product.highlight.description}
            </p>
          </div>
        )}

        {/* CTA */}
        <Link
          href="#contact"
          className={`block w-full ${colors.bg} hover:opacity-90 text-white py-4 rounded-full text-lg font-bold text-center transition-all`}
        >
          Get Free Estimate
        </Link>
      </div>
    </div>
  );
}

function SpecsTable({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-gray-900 text-white p-4">
        <h4 className="font-bold text-lg">{product.name} Specifications</h4>
      </div>
      <table className="w-full">
        <tbody>
          {product.specs.map((spec, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-4 py-3 font-semibold text-gray-900 w-1/3">
                {spec.label}
              </td>
              <td className="px-4 py-3 text-gray-600">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4 bg-gray-50 text-xs text-gray-500 italic">
        {product.manufacturer}
      </div>
    </div>
  );
}

function PerfectForSection({ product }: { product: Product }) {
  const colors = {
    good: "text-blue-600",
    better: "text-green-600",
    best: "text-amber-600",
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <h4 className="font-bold text-gray-900 mb-4">
        {product.name} is Perfect For:
      </h4>
      <ul className="space-y-3">
        {product.perfectFor.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className={`w-5 h-5 ${colors[product.tier]} mt-0.5`} />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  const cities = locations.filter((l) => l.type === "city");
  const neighborhoods = locations.filter((l) => l.type === "neighborhood");
  const communities = locations.filter((l) => l.type === "community");

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional Gutter Guard Installation
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Choose the right protection for your home. We offer three tiers of
            Gutterglove products — all backed by industry-leading warranties and
            our satisfaction guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span>25-40 Year Warranties</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-400" />
              <span>WUI Fire Compliant Options</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-blue-300" />
              <span>Handles 150+ in/hr Rain</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Comparison */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">
              Our Products
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Good. Better. Best.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every home is different. We&apos;ll help you choose the right
              protection for your specific needs and budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detailed Specifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare the technical details to find the perfect fit for your
              home.
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product) => (
              <div key={product.id} id={product.id}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <SpecsTable product={product} />
                  <PerfectForSection product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-lg">
              Service Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Serving the Entire Quad Cities Area
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide professional gutter guard installation throughout
              Prescott and surrounding communities.
            </p>
          </div>

          {/* Cities */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Main Cities</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/services/${city.slug}`}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  <div className="font-bold text-gray-900 group-hover:text-blue-600 flex items-center justify-between">
                    {city.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {city.type === "city" ? "City" : "Town"}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Neighborhoods */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Popular Neighborhoods
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  href={`/services/${neighborhood.slug}`}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  <div className="font-bold text-gray-900 group-hover:text-blue-600 flex items-center justify-between">
                    {neighborhood.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {neighborhood.parentCity}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Communities */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Surrounding Communities
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {communities.map((community) => (
                <Link
                  key={community.slug}
                  href={`/services/${community.slug}`}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  <div className="font-bold text-gray-900 group-hover:text-blue-600 flex items-center justify-between">
                    {community.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Community</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Option is Right for You?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We&apos;ll visit your home, assess your gutters, and recommend the
            best solution for your specific situation — no pressure, no
            obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
            >
              Get Your FREE Estimate
            </Link>
            <a
              href="tel:+19285551234"
              className="bg-white/10 hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-full text-xl font-bold transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> (928) 555-1234
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
