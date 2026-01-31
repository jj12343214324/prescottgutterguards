import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Check,
  Trash2,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gutter Guard Removal | Prescott Gutter Guards",
  description:
    "Professional gutter guard removal in Prescott, AZ. We safely remove old, failing gutter guards and prepare your gutters for an upgrade. Call us 7 days a week.",
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

export default function GutterRemovalPage() {
  const reasons = [
    {
      title: "Guards Are Clogged or Failing",
      description:
        "Cheap plastic guards warp in Arizona sun. DIY mesh gets clogged with fine debris. If your guards aren't working, we remove them right.",
    },
    {
      title: "Previous Owner Installed Junk",
      description:
        "Bought a home with gutter guards that look terrible or don't work? We'll take them out and give you a fresh start.",
    },
    {
      title: "Ready for a Real Upgrade",
      description:
        "Out with the old, in with the good stuff. We remove your old guards and install professional Gutterglove products the same day.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Inspection",
      description: "We check your current guards and gutters to see what we're working with.",
    },
    {
      step: "2",
      title: "Safe Removal",
      description: "We carefully remove old guards without damaging your gutters or roof.",
    },
    {
      step: "3",
      title: "Clean Up",
      description: "We haul away all the old materials. You won't find a scrap left behind.",
    },
    {
      step: "4",
      title: "Gutter Prep",
      description: "We clean and inspect your gutters so they're ready for new guards or just to flow freely.",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <OpenNowBadge />
          <div className="inline-flex items-center justify-center bg-white/10 p-4 rounded-full mb-6 mt-6">
            <Trash2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gutter Guard Removal
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Got old guards that don't work? Plastic junk that's warped and ugly? We remove them
            properly and leave your gutters clean and ready for whatever comes next.
          </p>
          <a
            href="tel:+19289107578"
            className="inline-flex items-center gap-2 bg-[#79b939] hover:bg-[#5a9a1f] text-white px-8 py-4 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            <Phone className="w-6 h-6" /> Call Us Anytime: (928) 910-7578
          </a>
        </div>
      </section>

      {/* Why Remove */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Remove Old Gutter Guards?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Not all gutter guards are created equal. If yours aren't doing the job, they're just
              in the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Do It
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-[#79b939] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us for Removal?
              </h2>
              <div className="space-y-4">
                {[
                  "Our techs are clean, professional, and respectful of your property",
                  "We won't damage your gutters or roof during removal",
                  "We haul away everything and clean up completely",
                  "Same day upgrade available if you want new guards installed",
                  "Honest assessment of your gutter condition",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#79b939] mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
              <div className="text-gray-500 font-medium">[Before/After Image]</div>
              <div className="text-gray-400 text-sm mt-1">Gutter Guard Removal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="py-12 bg-[#79b939]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-[#79b939]/20 p-4 rounded-xl shrink-0">
                <Sparkles className="w-10 h-10 text-[#79b939]" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready for an Upgrade?
                </h3>
                <p className="text-gray-600">
                  We can remove your old guards and install new Gutterglove products in the same visit.
                  Check out our gutter guard options.
                </p>
              </div>
              <Link
                href="/services"
                className="bg-[#79b939] hover:bg-[#5a9a1f] text-white px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2 transition-colors shrink-0"
              >
                View Products <ArrowRight className="w-4 h-4" />
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
            Get Those Old Guards Out of There
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Call us and we'll come take a look. Free assessment, honest advice, no pressure.
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
