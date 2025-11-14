"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Opening", href: "#opening" },
  { label: "Design", href: "#design" },
  { label: "Functionality", href: "#functionality" },
  { label: "SEO", href: "#seo" },
  { label: "Platforms", href: "#platforms" },
  { label: "Next Steps", href: "#next-steps" },
];

export default function ChurchWebsitePresentationPage() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Clean Sticky Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">
              Your Church's Online Home
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-3 items-center">
              <div className="flex gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="border-l h-8" />
              <Link href="/seo-checklist">
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  📋 SEO Checklist
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[380px]">
                <SheetHeader className="pb-6">
                  <SheetTitle className="text-xl font-bold text-gray-900">
                    Menu
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col h-full">
                  <div className="flex-1 space-y-1">
                    {navItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full px-4 py-3.5 rounded-xl text-left font-semibold transition-all ${
                          activeSection === item.href.substring(1)
                            ? "bg-blue-600 text-white shadow-md"
                            : "text-gray-700 hover:bg-gray-50 active:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  <div className="pt-6 pb-2 border-t">
                    <Link href="/seo-checklist" className="block">
                      <Button
                        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg"
                        size="lg"
                      >
                        📋 SEO Checklist
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex flex-col items-center space-y-4 mt-12">
            <img
              src="/qr-code.png"
              alt="QR Code"
              className="w-48 h-48 rounded-lg shadow-lg"
            />
            <p className="text-gray-600 font-medium">Scan to view the live website</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900">
            Your Church's
            <br />
            Online Home
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto pb-8">
            Explore how a well-designed website can serve as a ministry tool
            covering design, SEO, and functionality to connect with members and
            visitors effectively.
          </p>
          <div className="bg-blue-50 p-10 rounded-2xl border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                The Vision
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed italic">
                "We're planting a digital church campus that never closes.
                People finding hope at 2am when they can't sleep. New believers
                studying during lunch breaks. Seekers across the globe
                discovering Jesus through your teaching."
              </p>
            </div>
        </div>
      </section>

      {/* Opening Section */}
      <section id="opening" className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                Section 1
              </Badge>

              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                The Power of First Impressions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                You have exactly{" "}
                <a
                  href="https://cxl.com/blog/first-impressions-matter-the-importance-of-great-visual-design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold underline decoration-2 hover:text-blue-700"
                >
                  50 milliseconds
                </a>
                —that's five one-hundredths of a second—to make a first
                impression on your website visitors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="https://theleadpastor.com/church-management/church-website-statistics/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-10 rounded-2xl text-center space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="text-7xl font-bold text-blue-600">75%</div>
                <p className="text-gray-600 leading-relaxed">
                  of visitors judge your church's credibility based on website
                  design alone
                </p>
              </a>
              <a
                href="https://cxl.com/blog/first-impressions-matter-the-importance-of-great-visual-design/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-10 rounded-2xl text-center space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="text-7xl font-bold text-blue-600">94%</div>
                <p className="text-gray-600 leading-relaxed">
                  of first impressions are design-related
                </p>
              </a>
              <a
                href="https://theleadpastor.com/church-management/church-website-statistics/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-10 rounded-2xl text-center space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="text-7xl font-bold text-blue-600">80%</div>
                <p className="text-gray-600 leading-relaxed">
                  of people visit your website before attending in person
                </p>
              </a>
            </div>

            <Card className="p-10 bg-white rounded-2xl border-0 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                The Pre-Visit Research Reality
              </h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">•</span>
                  <a
                    href="https://reachrightstudios.com/blog/church-statistics-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <strong>33%</strong> of church attendees found their church
                    online first
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">•</span>
                  <a
                    href="https://reachrightstudios.com/blog/church-statistics-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <strong>17 million</strong> Americans regularly visit church
                    websites even though they don't attend in person
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">•</span>
                  <a
                    href="https://electroiq.com/stats/online-church-statistics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <strong>27%</strong> of Americans now regularly watch
                    religious services online
                  </a>
                </li>
              </ul>
            </Card>


          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section id="design" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                Section 2
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                Design Principles
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Creating a website that makes the right impression in
                milliseconds
              </p>
            </div>

            <div className="space-y-8">
              <Card className="p-10 bg-white rounded-2xl border-0 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                  <span className="text-3xl">📱</span> The Mobile-First Reality
                </h3>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                    <p className="text-lg font-semibold text-gray-900">
                      More than{" "}
                      <a
                        href="https://theleadpastor.com/church-management/church-website-statistics/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline decoration-2"
                      >
                        60%
                      </a>{" "}
                      of all website traffic comes from mobile devices
                    </p>
                  </div>
                  <p className="text-gray-700">
                    Google now uses a mobile-first approach to indexing
                    websites. If your site doesn't work well on mobile, Google
                    will actively downrank you in search results.
                  </p>
                </div>
              </Card>

              <Card className="p-10 bg-white rounded-2xl border-0 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                  <span className="text-3xl">⏱️</span> The 5-Second Rule
                </h3>
                <div className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
                    <p className="text-lg font-semibold text-gray-900">
                      <a
                        href="https://theleadpastor.com/church-management/church-website-statistics/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 underline decoration-2"
                      >
                        61%
                      </a>{" "}
                      of website visitors will leave if they don't find what
                      they're looking for in 5 seconds
                    </p>
                  </div>
                  <p className="text-gray-700">
                    Five seconds. That's how long you have to help someone find
                    service times, your location, or how to contact you.
                  </p>
                </div>
              </Card>

              <Card className="p-10 bg-white rounded-2xl border-0 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Design Elements That Matter Most
                </h3>
                <p className="text-gray-700 mb-8">
                  Eye-tracking research found that visitors' eyes settle on key
                  areas within{" "}
                  <a
                    href="https://cxl.com/blog/first-impressions-matter-the-importance-of-great-visual-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline decoration-2 hover:text-blue-600"
                  >
                    2.6 seconds
                  </a>
                  :
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <a
                    href="https://cxl.com/blog/first-impressions-matter-the-importance-of-great-visual-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors"
                  >
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      6.5s
                    </div>
                    <p className="text-gray-700">Logo</p>
                  </a>
                  <a
                    href="https://cxl.com/blog/first-impressions-matter-the-importance-of-great-visual-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors"
                  >
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      6.4s
                    </div>
                    <p className="text-gray-700">Navigation Menu</p>
                  </a>
                  <a
                    href="https://cxl.com/blog/first-impressions-matter-the-importance-of-great-visual-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors"
                  >
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      6.0s
                    </div>
                    <p className="text-gray-700">Search Box</p>
                  </a>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-gray-900">
                    Key Design Principles:
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>
                        <strong>Clean, Professional Layout</strong> - Use white
                        space effectively, don't clutter the homepage
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>
                        <strong>Clear Visual Hierarchy</strong> - Most important
                        information at the top
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>
                        <strong>Consistent Branding</strong> - Use your church
                        colors, consistent fonts
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>
                        <strong>Accessible Design</strong> - High contrast for
                        readability
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-10 bg-blue-50 rounded-2xl border-0">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                  <span className="text-3xl">🎥</span> The Video Advantage
                </h3>
                <div className="bg-white p-6 rounded-xl mb-6">
                  <p className="text-2xl font-bold text-blue-600 text-center">
                    Pages with video get{" "}
                    <a
                      href="https://theleadpastor.com/church-management/church-website-statistics/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-2"
                    >
                      88% more engagement
                    </a>
                  </p>
                </div>
                <p className="text-gray-700">
                  A simple welcome video from your pastor can dramatically
                  increase how long people stay on your site and how connected
                  they feel to your church before they ever visit.
                </p>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Functionality Section */}
      <section id="functionality" className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                Section 3
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                Functionality & User Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Essential features that visitors are actually looking for
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      1. Service Times & Location
                    </h3>
                    <p className="text-gray-700">
                      The #1 thing people are looking for.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">ℹ️</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      2. About Your Church
                    </h3>
                    <p className="text-gray-700">
                      What do you believe? What's your church culture like?
                      Who's the pastor?
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-blue-50 rounded-2xl border-0">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💰</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      3. Online Giving
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white p-6 rounded-xl">
                        <p className="text-lg font-semibold text-gray-900">
                          Churches that provide online giving increase overall
                          donations by{" "}
                          <a
                            href="https://theleadpastor.com/church-management/church-website-statistics/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-bold underline decoration-2"
                          >
                            32%
                          </a>
                        </p>
                      </div>
                      <p className="text-gray-700">
                        Yet{" "}
                        <a
                          href="https://oneeighty.digital/2025/02/03/state-of-church-websites-insights/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-2"
                        >
                          59%
                        </a>{" "}
                        of churches don't offer any form of online giving.
                      </p>
                      <p className="text-gray-700">
                        <a
                          href="https://coolest-gadgets.com/online-church-statistics/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors"
                        >
                          <strong>60%</strong> of church members now prefer
                          giving online or digitally.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎙️</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      4. Sermon Archive or Resources
                    </h3>
                    <p className="text-gray-700">
                      17 million people visit church websites who don't attend
                      in person. They're looking for content.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📅</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      5. Events Calendar
                    </h3>
                    <p className="text-gray-700">
                      A simple, up-to-date calendar helps both members and
                      visitors.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">👋</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      6. First-Time Visitor Information
                    </h3>
                    <p className="text-gray-700">
                      Answer: What should I wear? Where do I park? What about my
                      kids?
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-0">
              <div className="flex items-start gap-3 mb-6">
                <div className="text-3xl">👥</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    Two Audiences, One Website
                  </h3>
                  <p className="text-gray-700">
                    Your church website must serve two distinct groups with
                    different needs
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">🚪</div>
                    <h4 className="text-xl font-bold text-gray-900">
                      For Visitors
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>First-timers need answers fast:</strong>
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>When and where do you meet?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>What should I expect?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>What do you believe?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>Is this church right for me?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>How do I take the next step?</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong className="text-blue-600">
                        Design Priority:
                      </strong>{" "}
                      Clear navigation, prominent service times, welcoming
                      imagery, "New Here?" page
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">⛪</div>
                    <h4 className="text-xl font-bold text-gray-900">
                      For Members
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>Regular attenders need tools:</strong>
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>Online giving and contribution history</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>Events calendar and registration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>Sermon archives and resources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>Small group finder</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>Ministry information and volunteer sign-ups</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong className="text-blue-600">
                        Design Priority:
                      </strong>{" "}
                      Quick access to resources, community features,
                      discipleship tools
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-blue-600">
                <p className="text-gray-700">
                  <strong className="text-gray-900">The Balance:</strong> Your
                  homepage should prioritize visitor information (80% visit
                  before attending), while providing clear pathways for members
                  to access their tools. Consider a "Members" or "My Church"
                  section in your main navigation.
                </p>
              </div>
            </Card>

            <Card className="p-10 bg-white rounded-2xl border-0 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                The Engagement Factor
              </h3>
              <p className="text-lg mb-4 text-gray-700">
                <a
                  href="https://theleadpastor.com/church-management/church-website-statistics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  <strong className="text-blue-600">64%</strong> of churchgoers
                  say their church's website helps them engage with their
                  church.
                </a>
              </p>
              <p className="text-gray-700">
                Your website isn't just for outsiders. It's a tool for
                discipleship and community for your existing members too.
              </p>
            </Card>

            <Card className="p-10 rounded-2xl border-0 border-l-4 border-blue-600 bg-white">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Current State & Opportunity
              </h3>
              <p className="text-gray-700 mb-4">
                Many churches are still recovering from the pandemic, operating
                at only{" "}
                <a
                  href="https://reachrightstudios.com/blog/church-stats-2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 font-bold underline decoration-2"
                >
                  85%
                </a>{" "}
                of pre-pandemic attendance.
              </p>
              <p className="text-gray-700">
                But here's the opportunity: Churches that embrace digital
                ministry are seeing growth. Churches with only in-person
                offerings experienced a{" "}
                <a
                  href="https://donorbox.org/nonprofit-blog/church-statistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 font-bold underline decoration-2"
                >
                  15.7% decline
                </a>{" "}
                in attendance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section id="seo" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                Section 4
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                SEO Basics - Being Found
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Making sure people can find you when they search
              </p>
              <Link href="/seo-checklist">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                >
                  📋 View Complete SEO Checklist
                </Button>
              </Link>
            </div>

            <Card className="p-10 bg-blue-50 rounded-2xl border-0">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Why SEO Matters
              </h3>
              <div className="bg-white p-8 rounded-xl mb-6">
                <p className="text-2xl font-bold text-center text-gray-900">
                  The top 5 Google search results receive more than{" "}
                  <a
                    href="https://theleadpastor.com/church-management/church-website-statistics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline decoration-2"
                  >
                    65%
                  </a>{" "}
                  of all clicks
                </p>
              </div>
              <p className="text-gray-700">
                If you're not on the first page of Google, you essentially don't
                exist to people searching online.
              </p>
            </Card>

            <Card className="p-10 bg-white rounded-2xl border-0 shadow-sm">
              <div className="flex items-start gap-3 mb-8">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    Website Performance: A Critical SEO Factor
                  </h3>
                  <p className="text-gray-600">
                    Google uses page speed as a ranking factor. Slow sites get buried in search results, while fast sites rank higher and attract more visitors.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Why Metrics Matter */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">
                    The Critical Impact of Performance on SEO
                  </h4>
                  <div className="space-y-4 text-gray-700">
                    <p className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl">•</span>
                      <span>
                        <strong>53% of mobile users abandon</strong> sites that take longer than 3 seconds to load
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl">•</span>
                      <span>
                        <strong>Google uses page speed</strong> as a ranking factor - slow sites get buried in search results
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl">•</span>
                      <span>
                        <strong>Every second of delay</strong> can reduce conversions by up to 20%
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl">•</span>
                      <span>
                        <strong>Slow websites hurt visibility</strong> - they don't get traffic, so Google can't even measure their performance
                      </span>
                    </p>
                  </div>
                </div>

                {/* Visual Comparison - Metrics */}
                <div>
                  <h4 className="text-xl font-bold mb-6 text-gray-900">
                    Real Examples: Core Web Vitals Comparison
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Core Web Vitals are Google's official metrics for measuring user experience. These real examples show the dramatic difference between poor optimization, insufficient traffic, and excellence:
                  </p>
                  <p className="text-sm text-gray-500 mb-6 italic">
                    💡 Click any image to view full-size
                  </p>

                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {/* Poor Example */}
                      <CarouselItem>
                        <div className="p-1">
                          <Card className="overflow-hidden rounded-xl border-0 shadow-sm">
                            <div className="bg-red-50 p-4 border-b-2 border-red-200">
                              <p className="text-red-700 font-bold text-center text-xl">Poor Performance</p>
                            </div>
                            <div className="bg-gray-50 p-8">
                              <a
                                href="/poor-example-metrics.webp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block cursor-pointer hover:opacity-90 transition-opacity"
                              >
                                <div className="bg-white rounded-xl overflow-hidden border-2 border-red-200 shadow-lg">
                                  <img
                                    src="/poor-example-metrics.webp"
                                    alt="Poor Website Performance Metrics"
                                    className="w-full h-auto"
                                  />
                                </div>
                              </a>
                              <div className="mt-6 bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                                <p className="text-gray-700">
                                  <strong className="text-red-600">Result:</strong> Visitors leave before the page loads, Google downranks your site
                                </p>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>

                      {/* Insufficient Traffic Example */}
                      <CarouselItem>
                        <div className="p-1">
                          <Card className="overflow-hidden rounded-xl border-0 shadow-sm">
                            <div className="bg-orange-50 p-4 border-b-2 border-orange-300">
                              <p className="text-orange-700 font-bold text-center text-xl">Insufficient Traffic Data</p>
                            </div>
                            <div className="bg-gray-50 p-8">
                              <a
                                href="/average-no-metrics.webp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block cursor-pointer hover:opacity-90 transition-opacity"
                              >
                                <div className="bg-white rounded-xl overflow-hidden border-2 border-orange-300 shadow-lg">
                                  <img
                                    src="/average-no-metrics.webp"
                                    alt="Website with Insufficient Traffic Data"
                                    className="w-full h-auto"
                                  />
                                </div>
                              </a>
                              <div className="mt-6 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                                <p className="text-gray-700">
                                  <strong className="text-orange-600">Result:</strong> Not enough visitors for Google to measure - poor SEO means you're invisible in search results
                                </p>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>

                      {/* Good Example */}
                      <CarouselItem>
                        <div className="p-1">
                          <Card className="overflow-hidden rounded-xl border-0 shadow-sm">
                            <div className="bg-green-50 p-4 border-b-2 border-green-200">
                              <p className="text-green-700 font-bold text-center text-xl">Excellent Performance</p>
                            </div>
                            <div className="bg-gray-50 p-8">
                              <a
                                href="/good-example-metrics.webp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block cursor-pointer hover:opacity-90 transition-opacity"
                              >
                                <div className="bg-white rounded-xl overflow-hidden border-2 border-green-200 shadow-lg">
                                  <img
                                    src="/good-example-metrics.webp"
                                    alt="Excellent Website Performance Metrics"
                                    className="w-full h-auto"
                                  />
                                </div>
                              </a>
                              <div className="mt-6 bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <p className="text-gray-700">
                                  <strong className="text-green-600">Result:</strong> Fast loading, better SEO rankings, visitors stay and engage
                                </p>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                  </Carousel>
                </div>

                {/* Visual Comparison - PageSpeed */}
                <div>
                  <h4 className="text-xl font-bold mb-6 text-gray-900">
                    PageSpeed Insights: The Full Picture
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Google's PageSpeed Insights shows how your site performs on both mobile and desktop, plus actionable recommendations:
                  </p>
                  <p className="text-sm text-gray-500 mb-6 italic">
                    💡 Click any image to view full-size
                  </p>

                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {/* Poor Example */}
                      <CarouselItem>
                        <div className="p-1">
                          <Card className="overflow-hidden rounded-xl border-0 shadow-sm">
                            <div className="bg-red-50 p-4 border-b-2 border-red-200">
                              <p className="text-red-700 font-bold text-center text-xl">Needs Improvement</p>
                            </div>
                            <div className="bg-gray-50 p-8">
                              <a
                                href="/poor-example-pagespeed.webp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block cursor-pointer hover:opacity-90 transition-opacity"
                              >
                                <div className="bg-white rounded-xl overflow-hidden border-2 border-red-200 shadow-lg max-w-3xl mx-auto">
                                  <img
                                    src="/poor-example-pagespeed.webp"
                                    alt="Poor PageSpeed Score"
                                    className="w-full h-auto"
                                  />
                                </div>
                              </a>
                              <div className="mt-6 bg-red-50 p-6 rounded-lg border-l-4 border-red-600 max-w-3xl mx-auto">
                                <p className="text-gray-700">
                                  <strong className="text-red-600">Result:</strong> Multiple performance issues, slow load times, poor mobile experience
                                </p>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>

                      {/* Average Example */}
                      <CarouselItem>
                        <div className="p-1">
                          <Card className="overflow-hidden rounded-xl border-0 shadow-sm">
                            <div className="bg-yellow-50 p-4 border-b-2 border-yellow-200">
                              <p className="text-yellow-700 font-bold text-center text-xl">Room for Growth</p>
                            </div>
                            <div className="bg-gray-50 p-8">
                              <a
                                href="/average-example-pagespeed.webp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block cursor-pointer hover:opacity-90 transition-opacity"
                              >
                                <div className="bg-white rounded-xl overflow-hidden border-2 border-yellow-200 shadow-lg max-w-3xl mx-auto">
                                  <img
                                    src="/average-example-pagespeed.webp"
                                    alt="Average PageSpeed Score"
                                    className="w-full h-auto"
                                  />
                                </div>
                              </a>
                              <div className="mt-6 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600 max-w-3xl mx-auto">
                                <p className="text-gray-700">
                                  <strong className="text-yellow-600">Result:</strong> Decent performance but missing optimization opportunities
                                </p>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>

                      {/* Good Example */}
                      <CarouselItem>
                        <div className="p-1">
                          <Card className="overflow-hidden rounded-xl border-0 shadow-sm">
                            <div className="bg-green-50 p-4 border-b-2 border-green-200">
                              <p className="text-green-700 font-bold text-center text-xl">Outstanding</p>
                            </div>
                            <div className="bg-gray-50 p-8">
                              <a
                                href="/good-example-pagespeed.webp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block cursor-pointer hover:opacity-90 transition-opacity"
                              >
                                <div className="bg-white rounded-xl overflow-hidden border-2 border-green-200 shadow-lg max-w-3xl mx-auto">
                                  <img
                                    src="/good-example-pagespeed.webp"
                                    alt="Excellent PageSpeed Score"
                                    className="w-full h-auto"
                                  />
                                </div>
                              </a>
                              <div className="mt-6 bg-green-50 p-6 rounded-lg border-l-4 border-green-600 max-w-3xl mx-auto">
                                <p className="text-gray-700">
                                  <strong className="text-green-600">Result:</strong> Optimized for both speed and user experience, maximum SEO benefit
                                </p>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                  </Carousel>
                </div>

                {/* Key Takeaways */}
                <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600">
                  <h4 className="text-xl font-bold mb-4 text-gray-900">
                    What This Means for Your Church's SEO
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>
                        <strong>Rankings depend on speed:</strong> Google prioritizes fast websites in search results
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>
                        <strong>Mobile-first indexing:</strong> Google judges your site based on mobile performance
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>
                        <strong>Visitor retention:</strong> Slow sites lose visitors before they even see your content
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>
                        <strong>Quality matters:</strong> Well-built sites (like custom development) naturally achieve better performance scores
                      </span>
                    </p>
                  </div>
                </div>

                {/* Test Your Site CTA */}
                {/* <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-white text-center">
                  <h4 className="text-xl font-bold mb-3">Test Your Church Website Performance</h4>
                  <p className="mb-4">Visit Google PageSpeed Insights to see how your site performs and get actionable recommendations</p>
                  <a
                    href="https://pagespeed.web.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Test Your Site Now →
                  </a>
                </div> */}
              </div>
            </Card>

            <Card className="p-10 bg-white rounded-2xl border-0 shadow-sm">
              <div className="flex items-start gap-3 mb-6">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    Real Results: Google Search Console
                  </h3>
                  <p className="text-gray-600">
                    See how effective SEO strategies drive real traffic and
                    engagement
                  </p>
                </div>
              </div>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-xl border-0 shadow-sm">
                        <div className="bg-gray-50 p-8">
                          <div className="aspect-video bg-white rounded-xl overflow-hidden border border-gray-200">
                            <img
                              src="/images/google-search-console/year.png"
                              alt="Google Search Console - Year Performance"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="mt-6">
                            <h4 className="font-bold text-lg mb-2 text-gray-900">
                              Annual Search Performance
                            </h4>
                            <p className="text-gray-600">
                              Year-over-year growth showing long-term SEO
                              success and organic traffic trends
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-xl border-0 shadow-sm">
                        <div className="bg-gray-50 p-8">
                          <a
                            href="/images/google-search-console/last-year-vs-this-year-impressions.webp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block cursor-pointer hover:opacity-90 transition-opacity"
                          >
                            <div className="aspect-video bg-white rounded-xl overflow-hidden border border-gray-200">
                              <img
                                src="/images/google-search-console/last-year-vs-this-year-impressions.webp"
                                alt="Year-over-Year Impressions Comparison"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </a>
                          <div className="mt-6">
                            <h4 className="font-bold text-lg mb-2 text-gray-900">
                              Year-over-Year Impressions Growth
                            </h4>
                            <p className="text-gray-600">
                              Comparing search impressions from last year to this year, demonstrating the impact of consistent SEO efforts
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Card className="overflow-hidden rounded-xl border-0 shadow-sm">
                        <div className="bg-gray-50 p-8">
                          <a
                            href="/images/google-search-console/last-year-vs-this-year-clicks.webp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block cursor-pointer hover:opacity-90 transition-opacity"
                          >
                            <div className="aspect-video bg-white rounded-xl overflow-hidden border border-gray-200">
                              <img
                                src="/images/google-search-console/last-year-vs-this-year-clicks.webp"
                                alt="Year-over-Year Clicks Comparison"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </a>
                          <div className="mt-6">
                            <h4 className="font-bold text-lg mb-2 text-gray-900">
                              Year-over-Year Click Growth
                            </h4>
                            <p className="text-gray-600">
                              Comparing actual clicks from last year to this year, showing measurable traffic increases from SEO optimization
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </Card>

            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                Top 5 SEO Priorities for Churches
              </h3>
              <div className="space-y-6">
                <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold mb-3 text-gray-900">
                    1. Claim Your Google Business Profile
                  </h4>
                  <p className="text-gray-700">
                    Free and high impact. Go to google.com/business and fill out
                    every field. This is how you show up in "churches near me"
                    searches.
                  </p>
                </Card>

                <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold mb-3 text-gray-900">
                    2. Get Location Keywords on Your Homepage
                  </h4>
                  <p className="text-gray-700">
                    Your homepage should include your city and state. "[Church
                    Name] in [City, State]"
                  </p>
                </Card>

                <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold mb-3 text-gray-900">
                    3. Make Your Site Mobile-Friendly
                  </h4>
                  <p className="text-gray-700">
                    Google uses mobile-first indexing. If your site doesn't work
                    well on phones, you won't rank well.
                  </p>
                </Card>

                <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold mb-3 text-gray-900">
                    4. Get Google Reviews
                  </h4>
                  <p className="text-gray-700">
                    Reviews impact local search rankings. Ask your members to
                    leave honest reviews. Aim for at least 10-20 to start.
                  </p>
                </Card>

                <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold mb-3 text-gray-900">
                    5. Create Fresh Content Regularly
                  </h4>
                  <p className="text-gray-700">
                    Google likes active sites. Post sermon summaries or event
                    recaps once or twice a month.
                  </p>
                </Card>
              </div>
            </div>

            <Card className="p-10 bg-white rounded-2xl border-0 shadow-sm">
              <div className="flex items-start gap-3 mb-6">
                <div className="text-3xl">🔑</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    Strategic Keyword Placement
                  </h3>
                  <p className="text-gray-600">
                    Where and how to use keywords for maximum SEO impact
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">
                    1. URL Slug
                  </h4>
                  <p className="text-gray-700 mb-3">
                    The part of the URL after your domain should include your
                    target keyword
                  </p>
                  <div className="bg-white p-4 rounded-lg space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓ Good:</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">
                        yourchurch.com/sunday-worship-service
                      </code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-bold">✗ Bad:</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">
                        yourchurch.com/page-42
                      </code>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">
                    2. Page Title (Title Tag)
                  </h4>
                  <p className="text-gray-700 mb-3">
                    The title that appears in browser tabs and search results -
                    put your main keyword at the beginning
                  </p>
                  <div className="bg-white p-4 rounded-lg space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓ Good:</span>
                      <code className="bg-gray-100 px-2 py-1 rounded flex-1">
                        Sunday Service Times | First Church Riverview
                      </code>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗ Bad:</span>
                      <code className="bg-gray-100 px-2 py-1 rounded flex-1">
                        First Church - About Us
                      </code>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    💡 Keep titles under 60 characters so they don't get cut off
                    in search results
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">
                    3. Meta Description
                  </h4>
                  <p className="text-gray-700 mb-3">
                    The snippet of text that appears under your title in Google
                    - include your keyword naturally
                  </p>
                  <div className="bg-white p-4 rounded-lg space-y-3 text-sm">
                    <div>
                      <span className="text-green-600 font-bold">✓ Good:</span>
                      <p className="bg-gray-100 px-3 py-2 rounded mt-1 italic">
                        "Join us for Sunday worship service at 9am & 11am in
                        Riverview, FL. Family-friendly church with vibrant
                        worship, biblical teaching, and programs for all ages."
                      </p>
                    </div>
                    <div>
                      <span className="text-red-600 font-bold">✗ Bad:</span>
                      <p className="bg-gray-100 px-3 py-2 rounded mt-1 italic">
                        "Welcome to our church. We'd love to see you!"
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    💡 Keep meta descriptions between 150-160 characters
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">
                    4. Headline (H1 Tag)
                  </h4>
                  <p className="text-gray-700 mb-3">
                    The main headline on your page - should include your primary
                    keyword
                  </p>
                  <div className="bg-white p-4 rounded-lg space-y-2 text-sm">
                    <div>
                      <span className="text-green-600 font-bold">✓ Good:</span>
                      <p className="text-lg font-bold mt-1">
                        Sunday Worship Services in Riverview, Florida
                      </p>
                    </div>
                    <div>
                      <span className="text-red-600 font-bold">✗ Bad:</span>
                      <p className="text-lg font-bold mt-1">Welcome!</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    💡 Only use one H1 per page
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">
                    5. First Paragraph
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Include your keyword naturally in the first 100 words of
                    your content
                  </p>
                  <div className="bg-white p-4 rounded-lg space-y-3 text-sm">
                    <div>
                      <span className="text-green-600 font-bold">✓ Good:</span>
                      <p className="bg-gray-100 px-3 py-2 rounded mt-1">
                        "Welcome to First Church Riverview! Our Sunday worship
                        services meet at 9am and 11am every week. Whether you're
                        looking for a church home in Riverview or visiting for
                        the first time, we'd love to meet you."
                      </p>
                    </div>
                    <div>
                      <span className="text-red-600 font-bold">✗ Bad:</span>
                      <p className="bg-gray-100 px-3 py-2 rounded mt-1">
                        "We're so glad you're here! Check out what's happening
                        this week."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                <h4 className="font-bold text-lg mb-3 text-gray-900">
                  ⚠️ Important Keyword Tips
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Don't keyword stuff</strong> - Use keywords
                      naturally, not repeatedly
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Think local</strong> - Include your city/location
                      (e.g., "church in Riverview Florida")
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Use variations</strong> - "worship service",
                      "Sunday service", "church service"
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Write for humans first</strong> - Google rewards
                      content that serves users, not just algorithms
                    </span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-10 bg-blue-50 rounded-2xl border-0">
              <div className="flex items-start gap-3 mb-6">
                <div className="text-3xl">🔖</div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Structured Data (Schema Markup)
                </h3>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Structured data helps search engines understand your church and
                display rich results in Google.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-semibold mb-3 text-gray-900">
                    What is Structured Data?
                  </h4>
                  <p className="text-gray-700">
                    Code that tells search engines exactly what your content
                    means - service times, location, events, and sermons.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600">
                  <h4 className="font-semibold mb-4 text-blue-600">
                    Why It Matters for Churches:
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Rich Snippets:</strong> Service times appear
                        directly in search
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Event Listings:</strong> Events show in Google's
                        event search
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Voice Search:</strong> Helps Siri and Alexa
                        answer questions
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-2xl">🤖</div>
                    <h4 className="font-semibold text-blue-600">
                      Critical for AI-Powered Search
                    </h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>ChatGPT & AI Search:</strong> These tools rely
                        on structured data to cite churches
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Google AI Overviews:</strong> Pull from
                        structured data for answers
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Future-Proofing:</strong> As AI becomes primary
                        search, structured data ensures you're discoverable
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-blue-600">
                    <p className="text-sm text-gray-700">
                      <strong className="text-blue-600">Important:</strong>{" "}
                      Without structured data, AI tools may skip your church
                      when answering questions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <h4 className="font-semibold mb-4 text-gray-900">
                  Key Schema Types:
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <div>
                      <strong>Organization Schema:</strong> Basic church info
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <div>
                      <strong>Place of Worship:</strong> Service times
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <div>
                      <strong>Event Schema:</strong> Special events
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <div>
                      <strong>Local Business:</strong> Location and hours
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-10 bg-white rounded-2xl border-0 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                The SEO Timeline
              </h3>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="font-bold text-blue-600 min-w-[120px]">
                    Months 0-3:
                  </div>
                  <p className="text-gray-700">
                    Building the foundation. You won't see dramatic results yet.
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="font-bold text-blue-600 min-w-[120px]">
                    Months 3-6:
                  </div>
                  <p className="text-gray-700">
                    Start seeing improvement - better rankings, more traffic.
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="font-bold text-blue-600 min-w-[120px]">
                    Months 6-12:
                  </div>
                  <p className="text-gray-700">
                    Significant improvements. Traffic growing consistently.
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="font-bold text-blue-600 min-w-[120px]">
                    12+ months:
                  </div>
                  <p className="text-gray-700">
                    Strong local presence. You're the church people find.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-8 italic">
                SEO is a marathon, not a sprint. Unlike paid ads, SEO keeps
                working for you.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                Section 5
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                Choosing the Right Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Finding the best fit for your church's size, budget, and
                technical expertise
              </p>
            </div>

            <div className="space-y-8">
              {/* Custom Development - Featured */}
              <Card className="p-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-0 border-2 border-blue-600">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">✨</div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Custom-Built Website
                    </h3>
                  </div>
                  <Badge className="bg-blue-600 text-white text-sm px-3 py-1">
                    Most Powerful
                  </Badge>
                </div>
                <p className="text-lg text-gray-700 mb-2">
                  A professionally designed website built from the ground up for
                  your church's unique needs, brand, and vision.
                </p>
                <p className="text-base font-semibold text-blue-600 mb-8">
                  The most flexible, scalable, and powerful option available.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-600 text-lg">
                      Advantages:
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">✓</span>
                        <span>
                          <strong>Complete control</strong> over every design
                          element and feature
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">✓</span>
                        <span>
                          <strong>Unique branding</strong> that stands out from
                          template-based sites
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">✓</span>
                        <span>
                          <strong>Superior performance & SEO</strong> - no
                          bloated plugins or unnecessary code
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">✓</span>
                        <span>
                          <strong>Seamless integrations</strong> with any tool,
                          database, or third-party system
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">✓</span>
                        <span>
                          <strong>Content automation:</strong> Calendars sync
                          automatically, events update dynamically, daily
                          devotionals post on schedule
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">✓</span>
                        <span>
                          <strong>Built for growth</strong> - infinitely
                          scalable as your ministry expands
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">✓</span>
                        <span>
                          <strong>No platform limitations</strong> - build
                          exactly what you need
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 text-xl">✓</span>
                        <span>
                          <strong>Professional ownership</strong> - you own the
                          code, not locked into a platform
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 text-lg">
                      Considerations:
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span>💰</span>
                        <span>
                          <strong>Investment:</strong> $5,000 - $50,000+ upfront
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span>⏱️</span>
                        <span>
                          <strong>Timeline:</strong> 2-6 months to launch
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span>🔧</span>
                        <span>
                          <strong>Maintenance:</strong> Ongoing hosting &
                          support
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span>👥</span>
                        <span>
                          <strong>Requirements:</strong> Active involvement in
                          planning
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Badge variant="outline" className="bg-white border-blue-600 text-blue-600">
                    Most Powerful Solution
                  </Badge>
                  <Badge variant="outline" className="bg-white border-blue-600 text-blue-600">
                    Best for Growing Churches
                  </Badge>
                  <Badge variant="outline" className="bg-white border-blue-600 text-blue-600">
                    Unlimited Possibilities
                  </Badge>
                  <Badge variant="outline" className="bg-white border-blue-600 text-blue-600">
                    Professional Grade
                  </Badge>
                </div>
              </Card>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Church-Specific Platforms
                </h3>
                <div className="space-y-4">
                  <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">
                        Subsplash
                      </h4>
                      <Badge className="bg-blue-600 text-white">
                        $199-299/mo
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Comprehensive all-in-one solution with website, mobile
                      app, giving, sermon hosting, and live streaming.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Medium-Large Churches</Badge>
                      <Badge variant="outline">200+ Members</Badge>
                      <Badge variant="outline">All-in-One</Badge>
                    </div>
                  </Card>

                  <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">
                        Tithe.ly
                      </h4>
                      <Badge className="bg-blue-600 text-white">$19/mo+</Badge>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Affordable package with website builder, giving platform,
                      church app, and event registration.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Small-Medium Churches</Badge>
                      <Badge variant="outline">Budget-Friendly</Badge>
                      <Badge variant="outline">Quick Setup</Badge>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  General Website Builders
                </h3>
                <div className="space-y-4">
                  <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">
                        Squarespace
                      </h4>
                      <Badge className="bg-blue-600 text-white">
                        $16-49/mo
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Beautiful, modern templates with easy drag-and-drop
                      builder, built-in blogging and events.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Design Priority</Badge>
                      <Badge variant="outline">User-Friendly</Badge>
                      <Badge variant="outline">Beautiful Templates</Badge>
                    </div>
                  </Card>

                  <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">
                        WordPress.org
                      </h4>
                      <Badge className="bg-blue-600 text-white">
                        $5-30/mo hosting
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Open-source platform requiring technical maintenance.
                      Plugin-dependent with frequent updates and security
                      concerns. Can be complex to manage without developer help.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Tech Heavy</Badge>
                      <Badge variant="outline">Maintenance Required</Badge>
                      <Badge variant="outline">Plugin Reliant</Badge>
                    </div>
                  </Card>
                </div>
              </div>

              <Card className="p-10 bg-white rounded-2xl border-0 shadow-sm">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">
                  Platform Selection Guide
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold mb-4 text-lg text-gray-900">
                      By Budget:
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>
                        <strong>Under $50/mo:</strong> Squarespace or Tithe.ly
                      </li>
                      <li>
                        <strong>$50-200/mo:</strong> Subsplash
                      </li>
                      <li>
                        <strong>$200+/mo:</strong> Custom-built website
                        (recommended)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4 text-lg text-gray-900">
                      By Church Size:
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>
                        <strong>Under 200 members:</strong> Tithe.ly or
                        Squarespace
                      </li>
                      <li>
                        <strong>200-500 members:</strong> Subsplash or
                        custom-built
                      </li>
                      <li>
                        <strong>500+ members:</strong> Custom-built website
                        (strongly recommended)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4 text-lg text-gray-900">
                      By Priority:
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>
                        <strong>Best Design & Performance:</strong> Custom-built
                        website
                      </li>
                      <li>
                        <strong>All-in-one features:</strong> Subsplash or
                        Tithe.ly
                      </li>
                      <li>
                        <strong>Maximum Flexibility & Power:</strong>
                        Custom-built website
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-10 rounded-2xl border-0 border-l-4 border-red-600 bg-white">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Common Platform Mistakes to Avoid
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-red-600 font-bold text-xl">✗</span>
                    <span className="text-gray-700">
                      <strong>Choosing based on price alone</strong> - The
                      cheapest option isn't always the best value
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-red-600 font-bold text-xl">✗</span>
                    <span className="text-gray-700">
                      <strong>Overcomplicating for your size</strong> - A church
                      of 75 doesn't need a $300/month platform
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-red-600 font-bold text-xl">✗</span>
                    <span className="text-gray-700">
                      <strong>Underestimating maintenance</strong> - Every
                      platform needs someone to update it
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-red-600 font-bold text-xl">✗</span>
                    <span className="text-gray-700">
                      <strong>Ignoring mobile experience</strong> - Test on your
                      phone before committing
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section id="next-steps" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                Section 6
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                Practical Next Steps
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Action items you can implement this week
              </p>
            </div>

            <Card className="p-10 bg-white rounded-2xl border-0 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Audit Your Current Website
              </h3>
              <p className="text-gray-700 mb-6">
                Pull up your church website on your phone right now. Ask someone
                who's never visited your church to look at it:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">•</span>
                  <span>Can you find our service times in 5 seconds?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">•</span>
                  <span>Can you tell what we believe and who we are?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">•</span>
                  <span>
                    Would you feel comfortable visiting based on what you see?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">•</span>
                  <span>Does everything work on mobile?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">•</span>
                  <span>Is there a clear next step for visitors?</span>
                </li>
              </ul>
            </Card>

            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                Quick Wins You Can Implement This Week
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <h4 className="font-bold mb-2 text-gray-900">
                    1. Add Online Giving
                  </h4>
                  <p className="text-sm text-gray-600">
                    32% increase in donations
                  </p>
                </Card>
                <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <h4 className="font-bold mb-2 text-gray-900">
                    2. Make Service Times Prominent
                  </h4>
                  <p className="text-sm text-gray-600">Top of homepage</p>
                </Card>
                <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <h4 className="font-bold mb-2 text-gray-900">
                    3. Add a Welcome Video
                  </h4>
                  <p className="text-sm text-gray-600">88% more engagement</p>
                </Card>
                <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <h4 className="font-bold mb-2 text-gray-900">
                    4. Check Mobile Experience
                  </h4>
                  <p className="text-sm text-gray-600">
                    View on multiple phones
                  </p>
                </Card>
                <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <h4 className="font-bold mb-2 text-gray-900">
                    5. Update Old Content
                  </h4>
                  <p className="text-sm text-gray-600">
                    Remove outdated events
                  </p>
                </Card>
                <Card className="p-8 bg-white rounded-2xl border-0 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <h4 className="font-bold mb-2 text-gray-900">
                    6. Add "New Here?" Page
                  </h4>
                  <p className="text-sm text-gray-600">
                    Answer first-timer questions
                  </p>
                </Card>
                <Card className="p-8 md:col-span-2 bg-blue-50 rounded-2xl border-0">
                  <h4 className="font-bold mb-2 text-gray-900">
                    7. Claim Your Google Business Profile
                  </h4>
                  <p className="text-sm text-gray-700">
                    Critical for local search - free and high impact
                  </p>
                </Card>
              </div>
            </div>

            <Card className="p-10 bg-blue-50 rounded-2xl border-0">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Investment Mindset
              </h3>
              <p className="text-lg text-gray-700">
                Think about your website as a ministry investment, not an
                expense. We'll spend thousands on building maintenance, sound
                systems, and curriculum. Your website deserves the same
                investment priority.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Return to the Vision
            </h2>
            <div className="bg-white p-12 rounded-2xl shadow-sm border-l-4 border-blue-600 space-y-8">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">
                "We're planting a digital church campus that never closes."
              </p>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Right now, someone in your community is awake at 2am,
                  struggling with anxiety, searching for hope.
                </p>
                <p>
                  Someone is on their lunch break, hungry for spiritual growth,
                  looking for solid teaching.
                </p>
                <p>
                  Someone on the other side of the world is searching for truth
                  and could discover Jesus through your ministry.
                </p>
              </div>
              <p className="text-xl font-semibold text-gray-900">
                Your website makes all of that possible.
              </p>
            </div>
            <div className="pt-8 space-y-6">
              <p className="text-lg text-gray-700">
                <a
                  href="https://electroiq.com/stats/online-church-statistics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  30% of people are going online to learn about Christianity
                </a>
                . The fields are ripe for harvest—they're just in a different
                field than we're used to.
              </p>
              <p className="text-2xl font-bold text-blue-600">
                That's not just a website. That's ministry. That's the Great
                Commission in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p className="font-semibold">
            Church Website Presentation - Eaglesnest Conference
          </p>
          <p className="mt-2">
            May your digital campus reach people with the hope of Jesus 24/7/365
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="font-semibold text-gray-900">Kevin Halstead</p>
            <div className="mt-2 space-y-1">
              <p>
                <a
                  href="https://khalstead.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  khalstead.com
                </a>
              </p>
              <p>
                <a
                  href="mailto:mrmichael423@icloud.com"
                  className="text-blue-600 hover:underline"
                >
                  mrmichael423@icloud.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
