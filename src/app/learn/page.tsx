import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, BookOpen, ArrowRight, Search } from "lucide-react";
import { categories, knowledgeBase } from "@/data/knowledgebase";

export const metadata: Metadata = {
  title: "Gutter Guard Knowledge Base | Prescott Gutter Guards",
  description:
    "Learn everything about gutter guards, installation, maintenance, and why Prescott homes need protection from pine needles, monsoons, and fire risk.",
};

function OpenNowBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      Open Now - 7 Days a Week
    </div>
  );
}

export default function LearnPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/gutter-guard-install-prescott.jpg"
          alt="Gutter guard installation in Prescott, Arizona"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center bg-white/10 p-4 rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gutter Guard Knowledge Base
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Everything you need to know about gutter guards, installation, maintenance, and protecting your Prescott home.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Topic
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select a category to learn more about gutter guards and how they can protect your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const itemCount = knowledgeBase.filter(
                (item) => item.category === category.slug
              ).length;
              return (
                <Link
                  key={category.slug}
                  href={`/learn/${category.slug}`}
                  className="group bg-gray-50 hover:bg-blue-50 p-6 rounded-2xl transition-all border-2 border-transparent hover:border-blue-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 flex items-center justify-between mb-2">
                    {category.name}
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {category.description}
                  </p>
                  <span className="text-xs text-gray-500">
                    {itemCount} {itemCount === 1 ? "article" : "articles"}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {knowledgeBase.slice(0, 15).map((item) => (
              <details
                key={item.id}
                className="group bg-white rounded-xl shadow-sm"
              >
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 list-none">
                  {item.question}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">{item.answer}</div>
              </details>
            ))}
          </div>

          {knowledgeBase.length > 15 && (
            <div className="text-center mt-8">
              <p className="text-gray-500">
                Browse categories above to see all {knowledgeBase.length} questions
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <OpenNowBadge />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Give us a call. We're happy to answer any questions about gutter guards for your specific home.
          </p>
          <a
            href="tel:+19289107578"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            <Phone className="w-6 h-6" /> Call Us: (928) 910-7578
          </a>
        </div>
      </section>
    </main>
  );
}
