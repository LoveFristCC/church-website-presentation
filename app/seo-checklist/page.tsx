"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: "basics" | "content" | "technical" | "local" | "ongoing";
}

const checklistItems: ChecklistItem[] = [
  // BASICS
  {
    id: "google-business",
    title: "Claim Your Google Business Profile",
    description:
      "Go to google.com/business and claim your church. Fill out every field: address, phone, hours, photos, and description. This is the #1 most important step for local SEO.",
    category: "basics",
  },
  {
    id: "location-homepage",
    title: "Add Your Location to Homepage",
    description:
      'Include your city and state prominently on your homepage. Example: "Welcome to [Church Name] in Riverview, Florida"',
    category: "basics",
  },
  {
    id: "service-times",
    title: "Make Service Times Easy to Find",
    description:
      "Service times should be visible within 5 seconds on mobile. Put them on the homepage, in the header, or in a prominent banner.",
    category: "basics",
  },
  {
    id: "mobile-test",
    title: "Test Mobile Experience",
    description:
      "Visit your site on multiple phones. Everything should load fast, be readable, and work properly. Google prioritizes mobile-friendly sites.",
    category: "basics",
  },
  {
    id: "ssl-certificate",
    title: "Ensure Your Site Has HTTPS",
    description:
      "Your URL should start with 'https://' not 'http://'. This shows a padlock icon in the browser and is required for good SEO.",
    category: "basics",
  },

  // CONTENT
  {
    id: "page-titles",
    title: "Optimize All Page Titles",
    description:
      'Each page needs a unique title under 60 characters with keywords first. Example: "Sunday Service Times | [Church Name] Riverview"',
    category: "content",
  },
  {
    id: "meta-descriptions",
    title: "Write Meta Descriptions for Key Pages",
    description:
      "Every important page needs a 150-160 character description that includes your location and what the page offers.",
    category: "content",
  },
  {
    id: "h1-tags",
    title: "Add One H1 Headline Per Page",
    description:
      "Each page needs exactly one H1 tag (main headline) that includes your primary keyword for that page.",
    category: "content",
  },
  {
    id: "url-slugs",
    title: "Use Descriptive URL Slugs",
    description:
      'URLs should describe the page content. Good: /sunday-worship-service Bad: /page-42 or /p=123',
    category: "content",
  },
  {
    id: "first-paragraph",
    title: "Include Keywords in First 100 Words",
    description:
      "Start each page with natural keyword usage. Include your church name, location, and what you offer in the opening paragraph.",
    category: "content",
  },
  {
    id: "image-alt-text",
    title: "Add Alt Text to All Images",
    description:
      "Every image needs descriptive alt text. This helps visually impaired visitors and tells Google what the image shows.",
    category: "content",
  },
  {
    id: "internal-links",
    title: "Link Between Your Pages",
    description:
      "Link from your homepage to important pages (About, Service Times, Contact). Link from blog posts to relevant pages.",
    category: "content",
  },

  // TECHNICAL
  {
    id: "site-speed",
    title: "Check Your Site Speed",
    description:
      "Test at pagespeed.web.dev. Aim for scores above 80. Compress images, enable caching, and minimize code.",
    category: "technical",
  },
  {
    id: "sitemap",
    title: "Create and Submit an XML Sitemap",
    description:
      "Generate a sitemap.xml file with all your pages. Submit it to Google Search Console so Google can find all your content.",
    category: "technical",
  },
  {
    id: "robots-txt",
    title: "Add a Robots.txt File",
    description:
      "Create a robots.txt file at yoursite.com/robots.txt to tell search engines which pages to crawl.",
    category: "technical",
  },
  {
    id: "broken-links",
    title: "Fix Broken Links",
    description:
      "Check for and fix any broken links (404 errors). Use a tool like Dead Link Checker or Screaming Frog.",
    category: "technical",
  },
  {
    id: "structured-data",
    title: "Add Structured Data (Schema)",
    description:
      "Add schema markup for your church (Organization, Place of Worship, Events). This helps Google understand your content and show rich results.",
    category: "technical",
  },
  {
    id: "search-console",
    title: "Set Up Google Search Console",
    description:
      "Create a free account at search.google.com/search-console. Verify your site and monitor performance, errors, and search queries.",
    category: "technical",
  },

  // LOCAL SEO
  {
    id: "nap-consistency",
    title: "Ensure NAP Consistency",
    description:
      "Your Name, Address, and Phone number must be identical everywhere online: website, Google Business, Facebook, directories.",
    category: "local",
  },
  {
    id: "google-reviews",
    title: "Get Google Reviews",
    description:
      "Ask members to leave honest Google reviews. Aim for at least 10-20 to start. Reviews improve local search rankings.",
    category: "local",
  },
  {
    id: "local-keywords",
    title: "Target Local Keywords",
    description:
      'Use phrases like "church in [city]", "[denomination] church [city]", "church near [landmark]" throughout your site.',
    category: "local",
  },
  {
    id: "location-pages",
    title: "Create Location-Specific Content",
    description:
      "Write content about your neighborhood, community involvement, and local events. This strengthens local relevance.",
    category: "local",
  },
  {
    id: "embed-map",
    title: "Embed a Google Map",
    description:
      "Add a Google Map embed on your Contact or Location page. This reinforces your location to search engines.",
    category: "local",
  },

  // ONGOING
  {
    id: "fresh-content",
    title: "Post Fresh Content Regularly",
    description:
      "Add new content monthly: blog posts, sermon summaries, event announcements. Google favors active sites.",
    category: "ongoing",
  },
  {
    id: "update-old-content",
    title: "Update Old Content",
    description:
      "Refresh outdated pages every 6-12 months. Update stats, remove old events, and improve content based on what you've learned.",
    category: "ongoing",
  },
  {
    id: "monitor-analytics",
    title: "Check Analytics Monthly",
    description:
      "Review Google Analytics and Search Console monthly. Track traffic, top pages, search queries, and identify opportunities.",
    category: "ongoing",
  },
  {
    id: "fix-errors",
    title: "Fix Technical Errors Promptly",
    description:
      "When Search Console reports errors (404s, crawl issues, mobile problems), fix them within a week.",
    category: "ongoing",
  },
  {
    id: "competitor-research",
    title: "Research Competitor Churches",
    description:
      "Look at other churches' websites in your area. What keywords are they targeting? What pages do they have? Learn and adapt.",
    category: "ongoing",
  },
];

const categories = {
  basics: {
    name: "Getting Started (Do These First)",
    icon: "🚀",
    description: "Essential foundation for church SEO",
  },
  content: {
    name: "Content Optimization",
    icon: "✍️",
    description: "Optimizing your website content for search",
  },
  technical: {
    name: "Technical SEO",
    icon: "⚙️",
    description: "Behind-the-scenes technical improvements",
  },
  local: {
    name: "Local SEO",
    icon: "📍",
    description: "Helping your community find you",
  },
  ongoing: {
    name: "Ongoing Maintenance",
    icon: "🔄",
    description: "Regular tasks to maintain and improve rankings",
  },
};

export default function SEOChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const getProgress = (category: keyof typeof categories) => {
    const categoryItems = checklistItems.filter(
      (item) => item.category === category
    );
    const checked = categoryItems.filter((item) =>
      checkedItems.has(item.id)
    ).length;
    return {
      checked,
      total: categoryItems.length,
      percentage: Math.round((checked / categoryItems.length) * 100),
    };
  };

  const overallProgress = () => {
    const percentage = Math.round(
      (checkedItems.size / checklistItems.length) * 100
    );
    return {
      checked: checkedItems.size,
      total: checklistItems.length,
      percentage,
    };
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Church SEO Checklist
              </h1>
              <p className="text-gray-600 mt-1">
                A beginner-friendly guide to improving your church's search
                rankings
              </p>
            </div>
            <Link href="/">
              <Button variant="outline">
                ← Back to Presentation
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Progress Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Progress
                </h2>
                <p className="text-gray-600">
                  {overallProgress().checked} of {overallProgress().total} tasks
                  completed
                </p>
              </div>
              <div className="text-4xl font-bold text-blue-600">
                {overallProgress().percentage}%
              </div>
            </div>
            <div className="w-full bg-white rounded-full h-4 overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-300"
                style={{ width: `${overallProgress().percentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Instructions */}
          <Card className="p-8 bg-blue-50 rounded-2xl border-0">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl">💡</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  How to Use This Checklist
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      Start with "Getting Started" section - these are the most
                      important
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      Check off items as you complete them (progress is saved in
                      your browser)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      Don't try to do everything at once - pace yourself over
                      weeks or months
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      Focus on "Ongoing Maintenance" items after completing the
                      others
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Checklist Sections */}
          {(Object.keys(categories) as Array<keyof typeof categories>).map(
            (categoryKey) => {
              const category = categories[categoryKey];
              const items = checklistItems.filter(
                (item) => item.category === categoryKey
              );
              const progress = getProgress(categoryKey);

              return (
                <div key={categoryKey}>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{category.icon}</span>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">
                            {category.name}
                          </h2>
                          <p className="text-gray-600 text-sm">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-blue-600 text-white">
                        {progress.checked}/{progress.total}
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-blue-600 h-full transition-all duration-300"
                        style={{ width: `${progress.percentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {items.map((item) => {
                      const isChecked = checkedItems.has(item.id);
                      return (
                        <Card
                          key={item.id}
                          className={`p-6 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md ${
                            isChecked
                              ? "bg-green-50 border-green-500"
                              : "bg-white border-gray-200 hover:border-blue-300"
                          }`}
                          onClick={() => toggleItem(item.id)}
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                              <div
                                className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                                  isChecked
                                    ? "bg-green-500 border-green-500"
                                    : "border-gray-300 bg-white"
                                }`}
                              >
                                {isChecked && (
                                  <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={3}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                )}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3
                                className={`font-bold text-lg mb-2 ${
                                  isChecked
                                    ? "text-green-900 line-through"
                                    : "text-gray-900"
                                }`}
                              >
                                {item.title}
                              </h3>
                              <p
                                className={
                                  isChecked ? "text-green-700" : "text-gray-700"
                                }
                              >
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            }
          )}

          {/* Footer Tips */}
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-0">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  SEO Timeline Expectations
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <strong className="text-blue-600">Months 0-3:</strong>{" "}
                    Building foundation, minimal visible results
                  </div>
                  <div>
                    <strong className="text-blue-600">Months 3-6:</strong>{" "}
                    Starting to see better rankings and traffic
                  </div>
                  <div>
                    <strong className="text-blue-600">Months 6-12:</strong>{" "}
                    Significant improvements, consistent growth
                  </div>
                  <div>
                    <strong className="text-blue-600">12+ months:</strong>{" "}
                    Strong local presence, you're the church people find
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-700">
                <strong className="text-blue-600">Remember:</strong> SEO is a
                marathon, not a sprint. Stay consistent, keep improving, and
                you'll see results. Focus on serving your visitors first, and
                the search rankings will follow.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
