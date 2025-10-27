import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ChurchWebsitePresentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/30 to-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold">Your Church's Online Home</h1>
            <div className="hidden md:flex gap-4 text-sm">
              <a href="#opening" className="hover:text-primary transition-colors">
                Opening
              </a>
              <a href="#design" className="hover:text-primary transition-colors">
                Design
              </a>
              <a href="#functionality" className="hover:text-primary transition-colors">
                Functionality
              </a>
              <a href="#seo" className="hover:text-primary transition-colors">
                SEO
              </a>
              <a href="#platforms" className="hover:text-primary transition-colors">
                Platforms
              </a>
              <a href="#next-steps" className="hover:text-primary transition-colors">
                Next Steps
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="mb-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Eaglesnest Conference - 45 Minutes
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Your Church's Online Home
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            Explore how a well-designed website can serve as a ministry tool covering design, SEO, and functionality to
            connect with members and visitors effectively.
          </p>
        </div>
      </section>

      {/* Opening Section */}
      <section id="opening" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">The Power of First Impressions</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                You have exactly <strong className="text-primary">50 milliseconds</strong>—that's five one-hundredths of
                a second—to make a first impression on your website visitors.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center space-y-2 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="text-5xl font-bold text-primary">75%</div>
              <p className="text-sm text-muted-foreground">
                of visitors judge your church's credibility based on website design alone
              </p>
            </Card>
            <Card className="p-6 text-center space-y-2 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="text-5xl font-bold text-secondary">94%</div>
              <p className="text-sm text-muted-foreground">of first impressions are design-related</p>
            </Card>
            <Card className="p-6 text-center space-y-2 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="text-5xl font-bold text-primary">80%</div>
              <p className="text-sm text-muted-foreground">of people visit your website before attending in person</p>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/30">
            <h3 className="text-2xl font-bold mb-4">The Pre-Visit Research Reality</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>33%</strong> of church attendees found their church online first
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>17 million</strong> Americans regularly visit church websites even though they don't attend in
                  person
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>27%</strong> of Americans now regularly watch religious services online
                </span>
              </li>
            </ul>
          </Card>

          <div className="bg-gradient-to-r from-secondary/20 via-secondary/10 to-primary/10 p-8 rounded-lg border-l-4 border-secondary shadow-lg">
            <h3 className="text-2xl font-bold mb-4">The Vision</h3>
            <p className="text-xl leading-relaxed text-balance italic">
              "We're planting a digital church campus that never closes. People finding hope at 2am when they can't
              sleep. New believers studying during lunch breaks. Seekers across the globe discovering Jesus through your
              teaching."
            </p>
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section id="design" className="bg-gradient-to-b from-muted/50 to-accent/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Design Principles</h2>
              <p className="text-lg text-muted-foreground">
                Creating a website that makes the right impression in milliseconds
              </p>
            </div>

            <div className="space-y-8">
              <Card className="p-8 border-primary/20 shadow-md">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-secondary text-3xl">📱</span> The Mobile-First Reality
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary/15 to-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-lg font-semibold">
                      More than <span className="text-primary">60%</span> of all website traffic comes from mobile
                      devices
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    Google now uses a mobile-first approach to indexing websites. If your site doesn't work well on
                    mobile, Google will actively downrank you in search results.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold mb-2">What mobile-friendly means:</p>
                    <p className="text-sm text-muted-foreground">
                      Responsive design—your website layout automatically adapts to whatever screen size someone is
                      using, whether that's a phone, tablet, or desktop computer.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-secondary/20 shadow-md">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-secondary text-3xl">⏱️</span> The 5-Second Rule
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-destructive/15 to-destructive/5 p-4 rounded-lg border-l-4 border-destructive">
                    <p className="text-lg font-semibold">
                      <span className="text-destructive">61%</span> of website visitors will leave if they don't find
                      what they're looking for in 5 seconds
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    Five seconds. That's how long you have to help someone find service times, your location, or how to
                    contact you. Your design needs to be intuitive and your most important information needs to be
                    immediately visible.
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-primary/20 shadow-md">
                <h3 className="text-2xl font-bold mb-4">Design Elements That Matter Most</h3>
                <p className="text-muted-foreground mb-6">
                  Eye-tracking research found that visitors' eyes settle on key areas within{" "}
                  <strong>2.6 seconds</strong>:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg text-center border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-2">6.5s</div>
                    <p className="text-sm">Logo</p>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-4 rounded-lg text-center border border-secondary/20">
                    <div className="text-3xl font-bold text-secondary mb-2">6.4s</div>
                    <p className="text-sm">Navigation Menu</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg text-center border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-2">6.0s</div>
                    <p className="text-sm">Search Box</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Design Principles:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>
                          <strong>Clean, Professional Layout</strong> - Use white space effectively, don't clutter the
                          homepage
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>
                          <strong>Clear Visual Hierarchy</strong> - Most important information at the top, use headings
                          and subheadings
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>
                          <strong>Consistent Branding</strong> - Use your church colors, consistent fonts throughout
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span>
                        <span>
                          <strong>Accessible Design</strong> - High contrast for readability, text large enough to read
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-secondary/15 via-secondary/5 to-transparent border-secondary/30 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-3xl">🎥</span> The Video Advantage
                </h3>
                <div className="bg-card p-4 rounded-lg mb-4 border-2 border-secondary/30">
                  <p className="text-2xl font-bold text-secondary text-center">
                    Pages with video get 88% more engagement
                  </p>
                </div>
                <p className="text-muted-foreground">
                  A simple welcome video from your pastor, a 60-second "what to expect" video, or clips from recent
                  sermons can dramatically increase how long people stay on your site and how connected they feel to
                  your church before they ever visit.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Functionality Section */}
      <section id="functionality" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Functionality & User Experience</h2>
              <p className="text-lg text-muted-foreground">Essential features that visitors are actually looking for</p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">1. Service Times & Location</h3>
                    <p className="text-muted-foreground">
                      The #1 thing people are looking for. This should be visible without scrolling.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">ℹ️</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">2. About Your Church</h3>
                    <p className="text-muted-foreground">
                      What do you believe? What's your church culture like? Who's the pastor? Is this a place where I'll
                      fit in?
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-secondary/15 via-secondary/5 to-transparent border-secondary/30 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💰</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">3. Online Giving</h3>
                    <div className="space-y-3">
                      <div className="bg-card p-4 rounded-lg border-2 border-secondary/30">
                        <p className="text-lg font-semibold">
                          Churches that provide online giving increase overall donations by{" "}
                          <span className="text-secondary font-bold">32%</span>
                        </p>
                      </div>
                      <p className="text-muted-foreground">
                        Yet 59% of churches don't offer any form of online giving. That's a 32% boost you're leaving on
                        the table.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>60%</strong> of church members now prefer giving online or digitally.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎙️</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">4. Sermon Archive or Resources</h3>
                    <p className="text-muted-foreground">
                      Remember those 17 million people visiting church websites who don't attend in person? They're
                      looking for content. This is your 24/7 ministry in action.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📅</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">5. Events Calendar</h3>
                    <p className="text-muted-foreground">
                      A simple, up-to-date calendar helps both members and visitors. Nothing says "we don't update our
                      website" like events from 2022 still listed.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">👋</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">6. First-Time Visitor Information</h3>
                    <p className="text-muted-foreground">
                      Answer: What should I wear? Where do I park? What about my kids? Where do I go when I arrive?
                      Removing uncertainty removes barriers to visiting.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-md">
              <h3 className="text-2xl font-bold mb-4">The Engagement Factor</h3>
              <p className="text-lg mb-4">
                <strong className="text-primary">64%</strong> of churchgoers say their church's website helps them
                engage with their church.
              </p>
              <p className="text-muted-foreground">
                Your website isn't just for outsiders. It's a tool for discipleship and community for your existing
                members too.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-secondary shadow-md">
              <h3 className="text-2xl font-bold mb-4">Current State & Opportunity</h3>
              <p className="text-muted-foreground mb-4">
                Many churches are still recovering from the pandemic, operating at only{" "}
                <strong className="text-destructive">85%</strong> of pre-pandemic attendance.
              </p>
              <p className="text-muted-foreground">
                But here's the opportunity: Churches that embrace digital ministry, that offer hybrid options—both
                in-person and online access—are seeing growth. Churches with only in-person offerings experienced a{" "}
                <strong className="text-destructive">15.7% decline</strong> in attendance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section id="seo" className="bg-gradient-to-b from-accent/20 to-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">SEO Basics - Being Found</h2>
              <p className="text-lg text-muted-foreground">Making sure people can find you when they search</p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border-primary/30 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Why SEO Matters</h3>
              <div className="bg-card p-6 rounded-lg mb-4 border-2 border-primary/30">
                <p className="text-2xl font-bold text-center">
                  The top 5 Google search results receive more than <span className="text-primary">65%</span> of all
                  clicks
                </p>
              </div>
              <p className="text-muted-foreground">
                If you're not on the first page of Google, you essentially don't exist to people searching online. And
                remember, 33% of church attendees found their church online.
              </p>
            </Card>

            <div>
              <h3 className="text-2xl font-bold mb-6">Top 5 SEO Priorities for Churches</h3>
              <div className="space-y-4">
                <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors shadow-sm">
                  <h4 className="text-lg font-bold mb-2">1. Claim and Optimize Your Google Business Profile</h4>
                  <p className="text-muted-foreground">
                    This is free and has the biggest impact. Go to google.com/business, claim your listing, and fill out
                    every single field. Add photos, service times, and start getting reviews. This is how you show up in
                    map results when people search "churches near me."
                  </p>
                </Card>

                <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors shadow-sm">
                  <h4 className="text-lg font-bold mb-2">2. Get Location Keywords on Your Homepage</h4>
                  <p className="text-muted-foreground">
                    Your homepage title should include your city and state. Don't make Google guess where you are.
                    "[Church Name] | [Denomination] Church in [City, State]" - that simple change can dramatically
                    improve your local rankings.
                  </p>
                </Card>

                <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors shadow-sm">
                  <h4 className="text-lg font-bold mb-2">3. Make Your Site Mobile-Friendly</h4>
                  <p className="text-muted-foreground">
                    Google uses mobile-first indexing. If your site doesn't work well on phones, you won't rank well.
                    Period.
                  </p>
                </Card>

                <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors shadow-sm">
                  <h4 className="text-lg font-bold mb-2">4. Get Google Reviews</h4>
                  <p className="text-muted-foreground">
                    Reviews are social proof and they impact your local search rankings. Ask your happiest members to
                    leave honest Google reviews. Aim for at least 10-20 reviews to start. Always respond to reviews -
                    both positive and negative.
                  </p>
                </Card>

                <Card className="p-6 border-primary/20 hover:border-primary/40 transition-colors shadow-sm">
                  <h4 className="text-lg font-bold mb-2">5. Create Fresh Content Regularly</h4>
                  <p className="text-muted-foreground">
                    Google likes to see that your site is actively maintained. Start a simple blog or news section. Post
                    sermon summaries, event recaps, or ministry spotlights. Once or twice a month is enough to show
                    Google your site is alive and active.
                  </p>
                </Card>
              </div>
            </div>

            <Card className="p-8 border-primary/20 shadow-md">
              <h3 className="text-2xl font-bold mb-4">The SEO Timeline</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="font-bold text-primary min-w-[120px]">Months 0-3:</div>
                  <p className="text-muted-foreground">
                    Building the foundation. You won't see dramatic results yet, but you're doing the important work.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-primary min-w-[120px]">Months 3-6:</div>
                  <p className="text-muted-foreground">
                    Start seeing improvement - better rankings, more traffic, appearing in search results.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-primary min-w-[120px]">Months 6-12:</div>
                  <p className="text-muted-foreground">
                    Significant improvements. You're ranking for key terms, traffic is growing consistently.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-primary min-w-[120px]">12+ months:</div>
                  <p className="text-muted-foreground">
                    Strong local presence. You're the church people find when they search.
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">
                SEO is a marathon, not a sprint. But it's worth it. The results compound over time, and unlike paid ads
                that stop when you stop paying, SEO keeps working for you.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Choosing the Right Platform</h2>
              <p className="text-lg text-muted-foreground">
                Finding the best fit for your church's size, budget, and technical expertise
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Church-Specific Platforms</h3>
                <div className="space-y-4">
                  <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold">Subsplash</h4>
                      <Badge className="bg-secondary text-secondary-foreground">$199-299/mo</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Comprehensive all-in-one solution with website, mobile app, giving, sermon hosting, event
                      management, and live streaming.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Medium-Large Churches</Badge>
                      <Badge variant="outline">200+ Members</Badge>
                    </div>
                  </Card>

                  <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold">Tithe.ly</h4>
                      <Badge className="bg-secondary text-secondary-foreground">$19/mo+</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Affordable all-in-one package with website builder, giving platform, church app, text messaging,
                      and event registration.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Small-Medium Churches</Badge>
                      <Badge variant="outline">Budget-Friendly</Badge>
                    </div>
                  </Card>

                  <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold">Church Community Builder</h4>
                      <Badge className="bg-secondary text-secondary-foreground">$79/mo+</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Focuses on church management with membership database, small group management, volunteer
                      scheduling, and website with member portal.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Management + Website</Badge>
                    </div>
                  </Card>

                  <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold">Pushpay Church</h4>
                      <Badge className="bg-secondary text-secondary-foreground">Custom Pricing</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Started as a giving platform, now offers full church websites with mobile-optimized giving, church
                      app, and check-in systems.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Giving-Focused</Badge>
                    </div>
                  </Card>

                  <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold">Ekklesia 360</h4>
                      <Badge className="bg-secondary text-secondary-foreground">$150/mo+</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Specifically focused on church website design with custom designs, responsive mobile, SEO
                      optimization, and training.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Design-Focused</Badge>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">General Website Builders</h3>
                <div className="space-y-4">
                  <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold">Squarespace</h4>
                      <Badge className="bg-secondary text-secondary-foreground">$16-49/mo</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Known for beautiful, modern design with stunning templates, easy drag-and-drop builder, built-in
                      blogging and events.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Design Priority</Badge>
                      <Badge variant="outline">User-Friendly</Badge>
                    </div>
                  </Card>

                  <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold">Wix</h4>
                      <Badge className="bg-secondary text-secondary-foreground">$16-45/mo</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Maximum flexibility with hundreds of templates, very flexible design customization, app
                      marketplace for added features.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Flexible</Badge>
                      <Badge variant="outline">Affordable</Badge>
                    </div>
                  </Card>

                  <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold">WordPress.org</h4>
                      <Badge className="bg-secondary text-secondary-foreground">$5-30/mo hosting</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Powers 43% of all websites. Ultimate flexibility, thousands of church themes, massive plugin
                      library, complete control.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Most Powerful</Badge>
                      <Badge variant="outline">Tech-Savvy</Badge>
                    </div>
                  </Card>

                  <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold">Weebly</h4>
                      <Badge className="bg-secondary text-secondary-foreground">$10-26/mo</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      One of the simplest builders available with very easy drag-and-drop, good templates, mobile
                      responsive.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Easiest</Badge>
                      <Badge variant="outline">Very Small Churches</Badge>
                    </div>
                  </Card>
                </div>
              </div>

              <Card className="p-8 bg-gradient-to-br from-muted to-accent/30 border-primary/20 shadow-md">
                <h3 className="text-2xl font-bold mb-6">Platform Selection Guide</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-3">By Budget:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        <strong>Under $50/mo:</strong> Wix, Squarespace, Weebly, or Tithe.ly
                      </li>
                      <li>
                        <strong>$50-200/mo:</strong> Subsplash, Ekklesia 360, or WordPress with support
                      </li>
                      <li>
                        <strong>$200+/mo:</strong> Full platforms like Subsplash or custom development
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">By Church Size:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        <strong>Under 100 members:</strong> Tithe.ly, Wix, Squarespace, Weebly
                      </li>
                      <li>
                        <strong>100-500 members:</strong> Any church platforms or WordPress
                      </li>
                      <li>
                        <strong>500+ members:</strong> Subsplash, Pushpay, CCB, or custom
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">By Technical Skill:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        <strong>Limited skills:</strong> Wix, Squarespace, Weebly, Tithe.ly
                      </li>
                      <li>
                        <strong>Moderate skills:</strong> WordPress, Church Community Builder
                      </li>
                      <li>
                        <strong>High skills:</strong> WordPress or custom development
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-destructive shadow-md">
                <h3 className="text-2xl font-bold mb-4">Common Platform Mistakes to Avoid</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold">✗</span>
                    <span>
                      <strong>Choosing based on price alone</strong> - The cheapest option isn't always the best value
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold">✗</span>
                    <span>
                      <strong>Overcomplicating for your size</strong> - A church of 75 doesn't need a $300/month
                      platform
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold">✗</span>
                    <span>
                      <strong>Underestimating maintenance</strong> - Every platform needs someone to update it
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold">✗</span>
                    <span>
                      <strong>Ignoring mobile experience</strong> - Test on your phone before committing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-bold">✗</span>
                    <span>
                      <strong>Not checking integrations</strong> - Ensure it works with giving, email, and streaming
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section id="next-steps" className="bg-gradient-to-b from-muted/50 to-accent/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Practical Next Steps</h2>
              <p className="text-lg text-muted-foreground">Action items you can implement this week</p>
            </div>

            <Card className="p-8 border-primary/20 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Audit Your Current Website</h3>
              <p className="text-muted-foreground mb-4">
                Pull up your church website on your phone right now. Better yet, ask someone who's never visited your
                church to look at it. Ask them:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Can you find our service times in 5 seconds?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Can you tell what we believe and who we are?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Would you feel comfortable visiting based on what you see?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Does everything work on mobile?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Is there a clear next step for visitors?</span>
                </li>
              </ul>
            </Card>

            <div>
              <h3 className="text-2xl font-bold mb-6">Quick Wins You Can Implement This Week</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md hover:scale-105">
                  <h4 className="font-bold mb-2">1. Add Online Giving</h4>
                  <p className="text-sm text-muted-foreground">32% increase in donations</p>
                </Card>
                <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md hover:scale-105">
                  <h4 className="font-bold mb-2">2. Make Service Times Prominent</h4>
                  <p className="text-sm text-muted-foreground">Put them at the top of homepage</p>
                </Card>
                <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md hover:scale-105">
                  <h4 className="font-bold mb-2">3. Add a Welcome Video</h4>
                  <p className="text-sm text-muted-foreground">88% more engagement</p>
                </Card>
                <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md hover:scale-105">
                  <h4 className="font-bold mb-2">4. Check Mobile Experience</h4>
                  <p className="text-sm text-muted-foreground">View on multiple phones</p>
                </Card>
                <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md hover:scale-105">
                  <h4 className="font-bold mb-2">5. Update Old Content</h4>
                  <p className="text-sm text-muted-foreground">Remove outdated events</p>
                </Card>
                <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md hover:scale-105">
                  <h4 className="font-bold mb-2">6. Add "New Here?" Page</h4>
                  <p className="text-sm text-muted-foreground">Answer first-timer questions</p>
                </Card>
                <Card className="p-6 md:col-span-2 bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/30 hover:border-secondary/50 transition-all hover:shadow-md">
                  <h4 className="font-bold mb-2">7. Claim Your Google Business Profile</h4>
                  <p className="text-sm text-muted-foreground">Critical for local search - free and high impact</p>
                </Card>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border-primary/30 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Investment Mindset</h3>
              <p className="text-lg text-muted-foreground">
                Think about your website as a ministry investment, not an expense. We'll spend thousands on building
                maintenance, sound systems, and curriculum. Your website deserves the same investment priority.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 bg-gradient-to-b from-secondary/20 via-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Return to the Vision
            </h2>
            <div className="bg-card p-8 md:p-12 rounded-lg shadow-xl border-2 border-primary/20 space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-secondary text-balance leading-relaxed">
                "We're planting a digital church campus that never closes."
              </p>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="text-balance">
                  Right now, someone in your community is awake at 2am, struggling with anxiety, searching for hope.
                </p>
                <p className="text-balance">
                  Someone is on their lunch break, hungry for spiritual growth, looking for solid teaching.
                </p>
                <p className="text-balance">
                  Someone on the other side of the world is searching for truth and could discover Jesus through your
                  ministry.
                </p>
              </div>
              <p className="text-xl font-semibold">Your website makes all of that possible.</p>
            </div>
            <div className="pt-8">
              <p className="text-lg text-muted-foreground mb-6">
                30% of people are going online to learn about Christianity. The fields are ripe for harvest—they're just
                in a different field than we're used to.
              </p>
              <p className="text-xl font-bold text-balance text-primary">
                That's not just a website. That's ministry. That's the Great Commission in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Church Website Presentation - Eaglesnest Conference</p>
          <p className="mt-2">May your digital campus reach people with the hope of Jesus 24/7/365</p>
        </div>
      </footer>
    </div>
  )
}
