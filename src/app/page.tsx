"use client";

import { useState } from "react";
import {
  Phone,
  Menu,
  X,
  Check,
  AlertTriangle,
  DollarSign,
  Bug,
  ShieldCheck,
  Zap,
  PiggyBank,
  Home as HomeIcon,
  Sun,
  Clock,
  MapPin,
  Lock,
  ChevronDown,
  Star,
} from "lucide-react";

// Navigation Component
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black">
              <span className="text-[#79b939]">Prescott</span> Gutter Guards
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/services" className="text-gray-700 hover:text-[#79b939] font-medium transition-colors">Services</a>
            <a href="#why-us" className="text-gray-700 hover:text-[#79b939] font-medium transition-colors">Why Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#79b939] font-medium transition-colors">Our Promise</a>
            <a href="#guarantee" className="text-gray-700 hover:text-[#79b939] font-medium transition-colors">Guarantee</a>
            <a href="tel:+19289107578" className="bg-[#79b939] hover:bg-[#5a9a1f] text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg">
              (928) 910-7578
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[#79b939] p-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="/services" className="text-gray-700 hover:text-[#79b939] font-medium">Services</a>
              <a href="#why-us" className="text-gray-700 hover:text-[#79b939] font-medium">Why Us</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#79b939] font-medium">Our Promise</a>
              <a href="#guarantee" className="text-gray-700 hover:text-[#79b939] font-medium">Guarantee</a>
              <a href="tel:+19289107578" className="bg-[#79b939] text-white px-6 py-3 rounded-lg font-bold text-center">
                (928) 910-7578
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-[#79b939] mr-2" />
            <span className="text-white text-sm font-medium">Locally Owned & Operated | Licensed & Insured</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow leading-tight">
            Never Pay for Gutter Cleaning
            <span className="block text-[#79b939]">Again. Guaranteed.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Prescott&apos;s professional gutter guard installation protects your home from clogs, water damage, and costly repairs. <strong className="text-white">Backed by our lifetime warranty</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="bg-[#79b939] hover:bg-[#5a9a1f] text-white px-8 py-4 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-xl animate-pulse-glow"
            >
              Get Your FREE Estimate →
            </a>
            <a
              href="tel:+19289107578"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-bold transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" /> (928) 910-7578
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center">
              <Check className="w-6 h-6 text-[#79b939] mr-2" />
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center">
              <Check className="w-6 h-6 text-[#79b939] mr-2" />
              <span>Lifetime Warranty</span>
            </div>
            <div className="flex items-center">
              <Check className="w-6 h-6 text-[#79b939] mr-2" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Check className="w-6 h-6 text-[#79b939] mr-2" />
              <span>Same-Week Install</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem/Agitation Section
function ProblemSection() {
  const problems = [
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: "Dangerous Ladder Climbing",
      description: "Every year, 500,000+ Americans are injured falling from ladders. Why risk it?",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Expensive Water Damage",
      description: "Clogged gutters cause foundation cracks, basement flooding, and roof damage, costing $5,000+ to repair.",
    },
    {
      icon: <Bug className="w-12 h-12" />,
      title: "Pest Infestations",
      description: "Standing water attracts mosquitoes, and debris-filled gutters become homes for rodents and insects.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tired of These Gutter Nightmares?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t wait until it&apos;s too late. Clogged gutters cause thousands in damage every year.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow">
              <div className="text-red-500 mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services/Benefits Section
function ServicesSection() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Lifetime Clog-Free Guarantee",
      description: "Our micro-mesh technology blocks 100% of debris while allowing maximum water flow. If it ever clogs, we'll fix it FREE.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Professional Installation",
      description: "Our certified technicians install your guards perfectly the first time. No drilling, no damage to your existing gutters.",
    },
    {
      icon: <PiggyBank className="w-12 h-12" />,
      title: "Saves You Money",
      description: "No more hiring cleaners twice a year. Our guards pay for themselves in just 3-4 years, then it's pure savings.",
    },
    {
      icon: <HomeIcon className="w-12 h-12" />,
      title: "Protects Your Home Value",
      description: "Prevent water damage, foundation issues, and landscaping erosion. Your home stays beautiful and structurally sound.",
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Arizona-Tough Materials",
      description: "Built to withstand Prescott's monsoons, intense sun, and pine needle storms. Aluminum construction won't rust or sag.",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Fast Installation",
      description: "Most homes completed in just one day. We respect your time and property, and we'll leave your yard cleaner than we found it.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#79b939] font-semibold text-lg">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            The Prescott Gutter Guards Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re not just another contractor. We&apos;re your neighbors, committed to protecting Prescott homes with the best gutter protection available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border-2 border-gray-100"
            >
              <div className="text-[#79b939] mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Promise Stats Section
function StatsSection() {
  const stats = [
    { number: "Lifetime", label: "Clog-Free Warranty" },
    { number: "100%", label: "Satisfaction Guarantee" },
    { number: "Free", label: "Estimates & Inspections" },
    { number: "1 Day", label: "Most Installations" },
  ];

  return (
    <section className="py-16 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#79b939] font-semibold text-lg">Local & Committed</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Your Neighbors in Gutter Protection
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re not a big-box franchise. We&apos;re a local Prescott business committed to doing right by our neighbors. When you call, you&apos;ll talk to a real person who lives right here in the community.
            </p>

            <div className="space-y-6">
              {[
                "Owner on every job site",
                "No high-pressure sales tactics",
                "Honest, upfront pricing with no surprises",
                "We clean up after ourselves",
                "Background-checked, drug-free team",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-[#79b939] rounded-full p-1 mr-4">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-[#79b939]/20 text-black rounded-full px-4 py-2 text-sm font-semibold mb-4">
                <Star className="w-4 h-4 fill-current mr-1" /> Limited Time Offer
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Get 15% OFF Your Installation</h3>
              <p className="text-gray-600 mt-2">Plus FREE gutter cleaning (a $199 value)</p>
            </div>

            <div className="border-t border-b border-gray-200 py-6 my-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Average Home (150 linear ft)</span>
                <span className="text-gray-400 line-through">$2,400</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">Your Price Today</span>
                <span className="text-3xl font-bold text-[#79b939]">$2,040</span>
              </div>
            </div>

            <a
              href="#contact"
              className="block w-full bg-[#79b939] hover:bg-[#5a9a1f] text-white py-4 rounded-lg text-xl font-bold text-center transition-all transform hover:scale-105 shadow-lg"
            >
              Claim Your Discount →
            </a>

            <p className="text-center text-sm text-gray-500 mt-4">
              *Offer valid for new customers. Expires soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Our Promise Section
function PromiseSection() {
  const promises = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "We Show Up On Time",
      description: "We respect your schedule. If we say we'll be there at 9am, we'll be there at 9am. No vague 4-hour windows.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Honest, Upfront Pricing",
      description: "The price we quote is the price you pay. No hidden fees, no surprise charges, no bait-and-switch tactics.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "We Stand Behind Our Work",
      description: "If something isn't right, we'll make it right, no questions asked. Your satisfaction is our reputation.",
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "We Treat Your Home Like Ours",
      description: "Drop cloths down, shoes off if you prefer, and we clean up completely. You won't know we were there (except for the new gutter guards).",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "A Real Person Answers",
      description: "Call us and you'll talk to a real human who can actually help, not a robot or endless phone tree.",
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "No Pressure, Ever",
      description: "We'll give you a quote, answer your questions, and let you decide. No pushy sales tactics or artificial urgency.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#79b939] font-semibold text-lg">Our Commitment</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            What We Promise You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re building our reputation one job at a time. Here&apos;s what you can expect when you work with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="text-[#79b939] mb-4">{promise.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{promise.title}</h3>
              <p className="text-gray-600">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Guarantee Section
function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8">
            <div className="bg-[#79b939] text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-12 h-12" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Triple-Protection Guarantee
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            We stand behind our work with the strongest guarantees in the industry.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lifetime Warranty",
                description: "If your gutters ever clog, we'll come back and fix them for FREE. No questions asked, no fine print.",
              },
              {
                title: "100% Satisfaction",
                description: "Not happy with our work? We'll make it right or give you a full refund. Your satisfaction is everything.",
              },
              {
                title: "Price Match Promise",
                description: "Found a lower quote for the same quality? Show us and we'll match it. Guaranteed.",
              },
            ].map((guarantee, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
                <p className="text-gray-300">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Open Now Badge Component
function OpenNowBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-[#79b939]/20 border border-[#79b939] text-[#79b939] px-4 py-2 rounded-lg text-sm font-semibold">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#79b939] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#79b939]"></span>
      </span>
      Open Now
    </div>
  );
}

// Contact/CTA Section
function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setPhone('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-4">
              <OpenNowBadge />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Ready to Protect Your Home?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get your free, no-obligation estimate today. We&apos;ll assess your gutters, answer all your questions, and provide an honest quote. No pressure, no gimmicks.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[#79b939] text-white p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Call Us Anytime</h4>
                  <a href="tel:+19289107578" className="text-2xl font-bold text-[#79b939] hover:text-[#5a9a1f]">
                    (928) 910-7578
                  </a>
                  <p className="text-gray-500 text-sm mt-1">7 Days a Week</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#79b939] text-white p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Service Area</h4>
                  <p className="text-gray-600">Prescott, Prescott Valley, Chino Valley, Dewey-Humboldt, and surrounding areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your FREE Estimate</h3>
            <p className="text-gray-600 mb-6">Leave your info and we&apos;ll call you back.</p>

            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="bg-[#79b939]/20 text-[#5a9a1f] p-4 rounded-lg mb-4">
                  <Check className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-xl font-bold">Thank you!</p>
                  <p>We&apos;ll call you back shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#79b939] focus:border-[#79b939]"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#79b939] focus:border-[#79b939]"
                    placeholder="(928) 910-7578"
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-100 text-red-800 p-3 rounded-lg text-sm">
                    Something went wrong. Please call us directly at (928) 910-7578.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#79b939] hover:bg-[#5a9a1f] disabled:bg-[#a8d66d] text-white py-4 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-lg"
                >
                  {status === 'loading' ? 'Sending...' : 'Get My FREE Estimate'}
                </button>

                <p className="text-center text-sm text-gray-500 flex items-center justify-center gap-1">
                  <Lock className="w-4 h-4" /> Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "How long does installation take?",
      answer: "Most homes are completed in just one day. Larger homes or those with complex rooflines may take two days. We'll give you an accurate timeline during your free estimate.",
    },
    {
      question: "Will gutter guards work with my existing gutters?",
      answer: "Yes! Our gutter guards are designed to work with virtually all gutter types and sizes. During your free inspection, we'll confirm compatibility and recommend the best solution for your home.",
    },
    {
      question: "What's included in the lifetime warranty?",
      answer: "Our lifetime warranty covers both materials and labor. If your gutters ever clog or the guards fail for any reason, we'll come back and fix them at no cost to you, for as long as you own your home.",
    },
    {
      question: "How do your guards handle heavy rain?",
      answer: "Our micro-mesh design handles up to 22 inches of rain per hour, far exceeding even the heaviest Arizona monsoons. Water flows through while debris slides off.",
    },
    {
      question: "Do you offer financing?",
      answer: "Yes! We offer flexible financing options with approved credit, including 0% interest plans. Ask about our payment options during your free estimate.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#79b939] font-semibold text-lg">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-gray-50 rounded-2xl">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-bold text-lg text-gray-900 list-none">
                {faq.question}
                <ChevronDown className="w-6 h-6 text-[#79b939] group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  return (
    <section className="py-16 gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Stop Worrying About Your Gutters
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Protect your home with gutter guards that actually work, backed by our lifetime warranty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#79b939] hover:bg-[#5a9a1f] text-white px-8 py-4 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            Get Your FREE Estimate →
          </a>
          <a
            href="tel:+19289107578"
            className="bg-white/10 hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-bold transition-all inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" /> (928) 910-7578
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-[#79b939]">Prescott</span> Gutter Guards
            </div>
            <p className="mb-4">
              Your local Prescott gutter protection experts. Protecting homes from water damage with professional installation and lifetime warranties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Google</a>
              <a href="#" className="hover:text-white transition-colors">Yelp</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Our Promise</a></li>
              <li><a href="#guarantee" className="hover:text-white transition-colors">Our Guarantee</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+19289107578" className="hover:text-white transition-colors">
                  (928) 910-7578
                </a>
              </li>
              <li>
                <a href="mailto:prescottgutterguards@gmail.com" className="hover:text-white transition-colors">
                  prescottgutterguards@gmail.com
                </a>
              </li>
              <li>Prescott, AZ</li>
              <li>7 Days a Week</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Prescott Gutter Guards. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <StatsSection />
      <WhyUsSection />
      <PromiseSection />
      <GuaranteeSection />
      <ContactSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
