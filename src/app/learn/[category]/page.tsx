import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowLeft, BookOpen } from "lucide-react";
import {
  categories,
  knowledgeBase,
  getCategoryBySlug,
  getItemsByCategory,
} from "@/data/knowledgebase";

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: "Category Not Found | Prescott Gutter Guards",
    };
  }

  return {
    title: `${category.name} | Gutter Guard Knowledge Base | Prescott Gutter Guards`,
    description: category.description,
  };
}

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

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const items = getItemsByCategory(categorySlug);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Knowledge Base
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/10 p-3 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {category.name}
            </h1>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Questions */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length > 0 ? (
            <div className="space-y-4">
              {items.map((item) => (
                <details
                  key={item.id}
                  className="group bg-gray-50 rounded-xl"
                >
                  <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 list-none">
                    {item.question}
                    <span className="text-blue-600 group-open:rotate-180 transition-transform ml-4 shrink-0">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                Content coming soon for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Other Topics
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((cat) => cat.slug !== categorySlug)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/learn/${cat.slug}`}
                  className="bg-white hover:bg-blue-50 px-4 py-2 rounded-full text-gray-700 hover:text-blue-700 transition-colors shadow-sm"
                >
                  {cat.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <OpenNowBadge />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have More Questions?
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            We're here to help. Call us anytime for a free consultation.
          </p>
          <a
            href="tel:+19289107578"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            <Phone className="w-6 h-6" /> (928) 910-7578
          </a>
        </div>
      </section>
    </main>
  );
}
