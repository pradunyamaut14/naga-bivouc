import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ArrowLeft, MessageCircle, Share2, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_NUMBER = "7099623366";

interface PostData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const loadPost = async () => {
      // Try DB first
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (data) {
        // Fetch author profile
        let authorName = data.author;
        if (data.user_id) {
          const { data: profile } = await supabase
            .from("profiles")
            .select("display_name")
            .eq("user_id", data.user_id)
            .maybeSingle();
          if (profile?.display_name) authorName = profile.display_name;
        }

        const p: PostData = {
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt,
          content: data.content,
          image: data.cover_image || "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920",
          category: data.category,
          tags: [data.category],
          author: authorName,
          date: data.created_at,
          readTime: `${Math.max(3, Math.ceil(data.content.length / 1000))} min read`,
          metaTitle: `${data.title} – Naga Bivouac Blog`,
          metaDescription: data.excerpt.slice(0, 155),
          metaKeywords: `${data.category}, Nagaland, Northeast India`,
        };
        setPost(p);

        // Load related DB posts
        const { data: related } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("published", true)
          .neq("slug", slug!)
          .eq("category", data.category)
          .limit(3);
        
        if (related) {
          setRelatedPosts(related.map(r => ({
            title: r.title, slug: r.slug, excerpt: r.excerpt, content: r.content,
            image: r.cover_image || "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
            category: r.category, tags: [r.category], author: r.author, date: r.created_at,
            readTime: `${Math.max(3, Math.ceil(r.content.length / 1000))} min read`,
            metaTitle: "", metaDescription: "", metaKeywords: "",
          })));
        }
      } else {
        // Fallback to static
        const staticPost = blogPosts.find(p => p.slug === slug);
        if (staticPost) {
          setPost(staticPost);
          setRelatedPosts(
            blogPosts.filter(p => p.slug !== slug && (p.category === staticPost.category || p.tags.some(t => staticPost.tags.includes(t)))).slice(0, 3)
          );
        }
      }
      setLoading(false);
    };
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog"><Button><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Naga Bivouac" },
    publisher: { "@type": "Organization", name: "Naga Bivouac" },
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I just read "${post.title}" on your blog and I'm interested in planning a trip.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeaders: string[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushList = () => {
      if (inList && listItems.length > 0) {
        elements.push(<ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">{listItems.map((item, i) => <li key={i}>{item}</li>)}</ul>);
        listItems = []; inList = false;
      }
    };

    const flushTable = () => {
      if (inTable && tableHeaders.length > 0) {
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="border-b border-border">{tableHeaders.map((h, i) => <th key={i} className="text-left py-2 px-3 font-semibold text-foreground">{h.trim()}</th>)}</tr></thead>
              <tbody>{tableRows.map((row, i) => <tr key={i} className="border-b border-border/50">{row.map((cell, j) => <td key={j} className="py-2 px-3 text-muted-foreground">{cell.trim()}</td>)}</tr>)}</tbody>
            </table>
          </div>
        );
        tableHeaders = []; tableRows = []; inTable = false;
      }
    };

    // Also handle images: ![alt](url)
    const processInline = (text: string) => {
      // Handle images
      const imgMatch = text.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (imgMatch) {
        return <img src={imgMatch[2]} alt={imgMatch[1]} className="w-full rounded-lg my-4" loading="lazy" />;
      }
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, idx) => {
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={idx} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
        return part;
      });
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      if (!trimmed) { flushList(); continue; }

      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        const cells = trimmed.split("|").filter(Boolean);
        if (cells.every(c => /^[\s-:]+$/.test(c))) continue;
        if (!inTable) { inTable = true; tableHeaders = cells; } else { tableRows.push(cells); }
        continue;
      } else if (inTable) { flushTable(); }

      if (trimmed.startsWith("## ")) { flushList(); elements.push(<h2 key={`h2-${i}`} className="text-2xl font-bold mt-8 mb-4 text-foreground">{trimmed.replace("## ", "")}</h2>); continue; }
      if (trimmed.startsWith("### ")) { flushList(); elements.push(<h3 key={`h3-${i}`} className="text-xl font-semibold mt-6 mb-3 text-foreground">{trimmed.replace("### ", "")}</h3>); continue; }

      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) { inList = true; listItems.push(trimmed.replace(/^[-*]\s+/, "")); continue; }
      if (/^\d+\.\s/.test(trimmed)) { inList = true; listItems.push(trimmed.replace(/^\d+\.\s+/, "")); continue; }

      flushList();

      // Check for image line
      if (/^!\[.*\]\(.*\)$/.test(trimmed)) {
        const result = processInline(trimmed);
        elements.push(<div key={`img-${i}`}>{result}</div>);
        continue;
      }

      elements.push(<p key={`p-${i}`} className="text-muted-foreground leading-relaxed mb-4">{processInline(trimmed)}</p>);
    }

    flushList(); flushTable();
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={post.metaTitle} description={post.metaDescription} keywords={post.metaKeywords} canonicalPath={`/blog/${post.slug}`} ogImage={post.image} type="article" jsonLd={articleJsonLd} />
      <Navigation />

      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 pb-8 max-w-4xl">
          <Badge className="bg-primary text-primary-foreground mb-3">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">By {post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{new Date(post.date).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10">
            <article>
              <p className="text-lg text-foreground font-medium mb-6 leading-relaxed border-l-4 border-primary pl-4">{post.excerpt}</p>
              {renderContent(post.content)}

              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {post.tags.map(tag => <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>)}
              </div>

              <div className="mt-8 p-6 bg-secondary/30 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3">Ready to Experience This?</h3>
                <p className="text-muted-foreground mb-4">Let our local team plan your perfect trip. Chat with us on WhatsApp.</p>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={handleWhatsApp} className="gap-2"><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</Button>
                  <Button variant="outline" onClick={() => navigator.clipboard.writeText(window.location.href)} className="gap-2"><Share2 className="h-4 w-4" /> Share Article</Button>
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="bg-card rounded-xl p-5 border shadow-sm sticky top-24">
                <h4 className="font-bold mb-2">Plan Your Trip</h4>
                <p className="text-sm text-muted-foreground mb-4">Get a custom itinerary from our local experts</p>
                <WhatsAppInquiryForm destination="Northeast India" />
              </div>
            </aside>
          </div>

          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-10 border-t border-border">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map(rp => (
                  <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group">
                    <div className="relative h-40 rounded-xl overflow-hidden mb-3">
                      <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <Badge variant="outline" className="mb-2 text-xs">{rp.category}</Badge>
                    <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">{rp.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{rp.readTime}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 text-center">
            <Link to="/blog"><Button variant="outline" className="gap-2"><ArrowLeft className="h-4 w-4" /> All Articles</Button></Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
