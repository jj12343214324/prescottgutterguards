import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Check,
  RefreshCw,
  ShieldCheck,
  Droplets,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gutter Replacement | Prescott Gutter Guards",
  description:
    "Professional gutter replacement in Prescott, AZ. We replace old, damaged gutters and install gutter guards in one visit. Call us 7 days a week.",
};

function OpenNowBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-[#79b939]/20 border border-[#79b939] text-[#79b939] px-4 py-2 rounded-lg text-sm font-semibold">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#79b939] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#79b939]"></span>
      </span>
      Open Now - 7 Days a Week
    </div>
  );
}

export default function GutterReplacementPage() {
  const signs = [
    {
      title: "Visible Rust or Corrosion",
      description:
        "Rust means the metal is failing. Once it starts, it spreads. Better to replace now than deal with leaks later.",
    },
    {
      title: "Gutters Pulling Away",
      description:
        "If your gutters are sagging or pulling away from the house, the fascia board might be rotting. We check everything.",
    },
    {
      title: "Cracks, Holes, or Splits",
      description:
        "Patching only goes so far. If you've got multiple problem areas, replacement makes more sense than endless repairs.",
    },
    {
      title: "Water Damage Below Gutters",
      description:
        "Stains on siding, erosion around the foundation, or a soggy basement all point to gutters that aren't doing their job.",
    },
  ];

  const benefits = [
    "New seamless aluminum gutters custom fit to your home",
    "Proper slope for optimal water flow",
    "Heavy duty hangers that won't sag or pull away",
    "Color matched to your home's exterior",
    "Gutter guards installed at the same time for full protection",
    "One crew, one visit, everything done right",
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <OpenNowBadge />
          <div className="inline-flex items-center justify-center bg-white/10 p-4 rounded-full mb-6 mt-6">
            <RefreshCw className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Full Gutter Replacement
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Sometimes gutters are beyond saving. When that happens, we replace your entire system
            with new seamless aluminum gutters and install guards in one visit.
          </p>
          <a
            href="tel:+19289107578"
            className="inline-flex items-center gap-2 bg-[#79b939] hover:bg-[#5a9a1f] text-white px-8 py-4 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            <Phone className="w-6 h-6" /> Call Us Anytime: (928) 910-7578
          </a>
        </div>
      </section>

      {/* Signs You Need Replacement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Signs Your Gutters Need Replacing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Not sure if you need new gutters? Here's what to look for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {signs.map((sign, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sign.title}</h3>
                <p className="text-gray-600">{sign.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What You Get with New Gutters
              </h2>
              <div className="space-y-4">
                {benefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#79b939] mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
              <div className="text-gray-500 font-medium">[New Gutter Installation Image]</div>
              <div className="text-gray-400 text-sm mt-1">Seamless Aluminum Gutters</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We're the Right Choice
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#79b939]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-[#79b939]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Crew</h3>
              <p className="text-gray-600">
                Our techs are clean, courteous, and know what they're doing. We treat your home like it's our own.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#79b939]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-[#79b939]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Materials</h3>
              <p className="text-gray-600">
                Heavy gauge aluminum that won't rust or corrode. Built to handle Prescott's monsoons and sun.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#79b939]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-[#79b939]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Service</h3>
              <p className="text-gray-600">
                Remove old gutters, install new ones, add gutter guards. Everything done in one visit, one price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guard Options */}
      <section className="py-12 bg-[#79b939]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Add Gutter Guards to Your New System
                </h3>
                <p className="text-gray-600">
                  Since we're already up there, it's the perfect time to add gutter guards. Never clean your new gutters.
                </p>
              </div>
              <Link
                href="/services"
                className="bg-[#79b939] hover:bg-[#5a9a1f] text-white px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors shrink-0"
              >
                View Guard Options <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <OpenNowBadge />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Take a Look at Your Gutters
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We'll inspect your gutters and give you an honest assessment. If they can be saved, we'll tell you. If not, we'll give you options.
          </p>
          <a
            href="tel:+19289107578"
            className="inline-flex items-center gap-2 bg-[#79b939] hover:bg-[#5a9a1f] text-white px-8 py-4 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            <Phone className="w-6 h-6" /> Call Us 7 Days a Week: (928) 910-7578
          </a>
        </div>
      </section>
    </main>
  );
}
