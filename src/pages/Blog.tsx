import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import { ArrowRight, Mail, ChevronDown, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const API = import.meta.env.VITE_API_URL || "http://localhost:3001";

const categories = [
  "All",
  "Cybersecurity",
  "Compliance",
  "AI & Automation",
  "IT Strategy",
  "News & Updates",
];

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  ogImage: string;
  tags: string[];
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API}/api/blog/posts?status=published`);
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const featuredPost = posts[0];
  const remainingPosts = filteredPosts.slice(activeCategory === "All" ? 1 : 0);
  const displayedPosts = remainingPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < remainingPosts.length;

  const handleLoadMore = () => setVisiblePosts((prev) => prev + 6);
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisiblePosts(6);
  };

  return (
    <Layout>
      <Helmet>
        <title>Blog - Insights & Resources | NorthStar Technology Group</title>
        <meta name="description" content="Practical guidance on IT, cybersecurity, compliance, and business technology from NorthStar Technology Group." />
        <meta property="og:title" content="Blog - NorthStar Technology Group" />
        <meta property="og:description" content="Practical guidance on IT, cybersecurity, compliance, and business technology." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://northstartechnologygroup.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient-bg hero-grid-pattern relative isolate overflow-hidden border-b border-border/70 py-20 md:py-28">
        <div className="absolute inset-0 grain-texture opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-gradient-shift bg-[length:200%_200%]" aria-hidden="true" />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl animate-fade-in-up" style={{ animationDelay: '0ms', animationFillMode: 'both' }}>
              Insights & <span className="text-gradient-light">Resources</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/78 animate-fade-in-up leading-relaxed" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              Practical guidance on IT, cybersecurity, compliance, and business technology
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/5 p-1.5 text-white/75">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="relative -mt-10 z-20 py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Link to={`/blog/${featuredPost.slug}`} className="block">
              <article className="group grid gap-8 overflow-hidden rounded-3xl border border-border/70 bg-card/80 shadow-elevated backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_28px_70px_-28px_hsl(var(--foreground)/0.9)] lg:grid-cols-2">
                <div className="overflow-hidden relative h-full min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 lg:hidden" />
                  {featuredPost.ogImage ? (
                    <img src={featuredPost.ogImage} alt={featuredPost.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="h-full w-full bg-muted transition-transform duration-700 group-hover:scale-105" />
                  )}
                  <div className="absolute bottom-6 left-6 z-20 lg:hidden">
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">{featuredPost.category}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="hidden lg:inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-6">{featuredPost.category}</span>
                  <h2 className="text-3xl font-bold text-card-foreground md:text-4xl leading-tight group-hover:text-primary transition-colors">{featuredPost.title}</h2>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="mt-8">
                    <span className="inline-flex items-center text-sm font-bold text-primary group-hover:underline">
                      Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="sticky top-[76px] z-30 border-y border-border/70 bg-background/82 pb-6 pt-4 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "border-primary/45 bg-primary/16 text-primary shadow-soft scale-105"
                    : "border-border/75 bg-card/65 text-muted-foreground hover:border-primary/30 hover:bg-primary/10 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,hsl(var(--primary)/0.08),transparent_44%)]" />
        <div className="container relative mx-auto px-4 lg:px-8">
          {loading ? (
            <div className="flex justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-muted-foreground" /></div>
          ) : (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {displayedPosts.map((post, index) => (
                  <div key={post.slug} className="h-full" style={{ animationDelay: `${index * 50}ms` }}>
                    <BlogPostCard
                      category={post.category}
                      title={post.title}
                      excerpt={post.excerpt}
                      image={post.ogImage || undefined}
                      href={`/blog/${post.slug}`}
                      className="h-full"
                    />
                  </div>
                ))}
              </div>
              {hasMorePosts && (
                <div className="mt-16 text-center">
                  <Button variant="outline" size="lg" onClick={handleLoadMore} className="rounded-full border-primary/30 px-8 hover:bg-primary/10">
                    Load More Posts
                  </Button>
                </div>
              )}
              {displayedPosts.length === 0 && !loading && (
                <div className="py-20 text-center text-muted-foreground">
                  <p className="text-xl">No posts found in this category.</p>
                  <Button variant="link" onClick={() => setActiveCategory("All")} className="mt-4">View all posts</Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="hero-gradient-bg hero-grid-pattern relative overflow-hidden border-t border-border/70 py-20">
        <div className="absolute inset-0 grain-texture opacity-30 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-xl rounded-3xl border border-white/15 bg-white/6 p-8 text-center backdrop-blur md:p-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <Mail className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Get IT Insights Delivered to Your Inbox</h2>
            <p className="mb-8 text-lg text-white/78">Subscribe for practical tips, industry updates, and expert guidance.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Input type="email" placeholder="Enter your email" className="h-12 border-white/20 bg-white/10 text-white placeholder:text-white/45 focus-visible:ring-white/30 sm:w-80" />
              <Button className="h-12 px-8">Subscribe</Button>
            </div>
            <p className="mt-4 text-xs text-white/52">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
