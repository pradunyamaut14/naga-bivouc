import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Calendar,
  ArrowLeft,
  MessageCircle,
  Share2,
  Tag,
} from "lucide-react";
import { blogPosts } from "@/data/blog";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";

const WHATSAPP_NUMBER = "7099623366";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .filter(
      (p) =>
        p.category === post.category ||
        p.tags.some((t) => post.tags.includes(t))
    )
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Naga Bivouac",
      url: "https://naga-bivouc.lovable.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Naga Bivouac",
      logo: {
        "@type": "ImageObject",
        url: "https://naga-bivouc.lovable.app/favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://naga-bivouc.lovable.app/blog/${post.slug}`,
    },
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I just read "${post.title}" on your blog and I'm interested in planning a trip. Can you help?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  // Simple markdown-like renderer for the content
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
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 mb-4 text-muted-foreground">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const flushTable = () => {
      if (inTable && tableHeaders.length > 0) {
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {tableHeaders.map((h, i) => (
                    <th key={i} className="text-left py-2 px-3 font-semibold text-foreground">
                      {h.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    {row.map((cell, j) => (
                      <td key={j} className="py-2 px-3 text-muted-foreground">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableHeaders = [];
        tableRows = [];
        inTable = false;
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (!trimmed) {
        flushList();
        continue;
      }

      // Table row
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        const cells = trimmed.split("|").filter(Boolean);
        // Skip separator row
        if (cells.every((c) => /^[\s-:]+$/.test(c))) continue;

        if (!inTable) {
          inTable = true;
          tableHeaders = cells;
        } else {
          tableRows.push(cells);
        }
        continue;
      } else if (inTable) {
        flushTable();
      }

      // Headings
      if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={`h2-${i}`} className="text-2xl font-bold mt-8 mb-4 text-foreground">
            {trimmed.replace("## ", "")}
          </h2>
        );
        continue;
      }
      if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={`h3-${i}`} className="text-xl font-semibold mt-6 mb-3 text-foreground">
            {trimmed.replace("### ", "")}
          </h3>
        );
        continue;
      }

      // List items
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        inList = true;
        listItems.push(trimmed.replace(/^[-*]\s+/, ""));
        continue;
      }
      if (/^\d+\.\s/.test(trimmed)) {
        inList = true;
        listItems.push(trimmed.replace(/^\d+\.\s+/, ""));
        continue;
      }

      flushList();

      // Bold text processing
      const processInline = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, idx) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={idx} className="font-semibold text-foreground">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        });
      };

      // Regular paragraph
      elements.push(
        <p key={`p-${i}`} className="text-muted-foreground leading-relaxed mb-4">
          {processInline(trimmed)}
        </p>
      );
    }

    flushList();
    flushTable();

    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.metaKeywords}
        canonicalPath={`/blog/${post.slug}`}
        ogImage={post.image}
        type="article"
        jsonLd={articleJsonLd}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 pb-8 max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className="bg-primary text-primary-foreground">
              {post.category}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10">
            {/* Main Content */}
            <article className="prose-like">
              <p className="text-lg text-foreground font-medium mb-6 leading-relaxed border-l-4 border-primary pl-4">
                {post.excerpt}
              </p>
              {renderContent(post.content)}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Share & CTA */}
              <div className="mt-8 p-6 bg-secondary/30 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3">
                  Ready to Experience This?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Let our local team at Naga Bivouac plan your perfect trip.
                  Chat with us on WhatsApp for a customized itinerary.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={handleWhatsApp} className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                    }}
                    className="gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    Share Article
                  </Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Inquiry Form */}
              <div className="bg-card rounded-xl p-5 border shadow-sm sticky top-24">
                <h4 className="font-bold mb-2">Plan Your Trip</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a custom itinerary from our local experts
                </p>
                <WhatsAppInquiryForm destination="Northeast India" />
              </div>
            </aside>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-10 border-t border-border">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="group"
                  >
                    <div className="relative h-40 rounded-xl overflow-hidden mb-3">
                      <img
                        src={rp.image}
                        alt={rp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {rp.category}
                    </Badge>
                    <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {rp.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {rp.readTime}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                All Articles
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
