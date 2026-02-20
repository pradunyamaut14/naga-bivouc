import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, ArrowRight, Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { blogPosts as staticPosts } from "@/data/blog";
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

interface DBPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string | null;
  category: string;
  author: string;
  created_at: string;
  content: string;
}

const Blog = () => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [dbPosts, setDbPosts] = useState<DBPost[]>([]);

  useEffect(() => {
    supabase
      .from("blog_posts")
      .select("id, title, slug, excerpt, cover_image, category, author, created_at, content")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => { if (data) setDbPosts(data); });
  }, []);

  // Merge DB posts with static posts (DB posts first, static as fallback)
  const allPosts = useMemo(() => {
    const dbSlugs = new Set(dbPosts.map(p => p.slug));
    const merged = [
      ...dbPosts.map(p => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        image: p.cover_image || "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        category: p.category,
        tags: [p.category],
        author: p.author,
        date: p.created_at,
        readTime: `${Math.max(3, Math.ceil(p.content.length / 1000))} min read`,
      })),
      ...staticPosts.filter(p => !dbSlugs.has(p.slug)),
    ];
    return merged;
  }, [dbPosts]);

  const categories = useMemo(() => {
    const cats = new Set(allPosts.map((p) => p.category));
    return ["All", ...Array.from(cats).sort()];
  }, [allPosts]);

  const filtered = useMemo(() => {
    return allPosts
      .filter(
        (post) =>
          (categoryFilter === "All" || post.category === categoryFilter) &&
          (post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
            post.tags.some((t) =>
              t.toLowerCase().includes(search.toLowerCase())
            ))
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [search, categoryFilter, allPosts]);

  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Naga Bivouac Travel Blog",
    description: "Expert travel guides, trekking tips, festival guides & insider knowledge for Nagaland and Northeast India.",
    url: "https://naga-bivouc.lovable.app/blog",
    publisher: { "@type": "Organization", name: "Naga Bivouac", url: "https://naga-bivouc.lovable.app" },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Travel Blog – Nagaland & Northeast India Guides"
        description="Expert travel guides for Nagaland & Northeast India. Trekking tips, festival guides, food guides, butterfly watching spots & insider tips from local Naga travel experts."
        keywords="Nagaland travel blog, Northeast India guide, Dzukou Valley trek guide, Hornbill Festival guide, Nagaland food, Khonoma village, Northeast India tips"
        canonicalPath="/blog"
        jsonLd={blogListJsonLd}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920" alt="Northeast India landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative text-center text-white px-4 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/20 text-primary-foreground border-primary/30 backdrop-blur-sm">
            <BookOpen className="h-3 w-3 mr-1" /> Travel Blog
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Nagaland & Northeast India Guides</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Insider tips, trekking guides, festival info & cultural stories from local travel experts based in Nagaland.</p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="sticky top-14 sm:top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button key={cat} variant={categoryFilter === cat ? "default" : "outline"} size="sm" onClick={() => setCategoryFilter(cat)}>
                {cat}
              </Button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 h-9" />
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <main className="container mx-auto px-4 py-12">
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                <Link to={`/blog/${post.slug}`}>
                  <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-500 border-0 shadow-md">
                    <div className="relative h-52 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">{post.category}</Badge>
                    </div>
                    <CardContent className="p-5">
                      <h2 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h2>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-4">Try different search terms or categories</p>
            <Button variant="outline" onClick={() => { setSearch(""); setCategoryFilter("All"); }}>Clear filters</Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
