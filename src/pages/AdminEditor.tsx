import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Bold, Italic, Heading2, Heading3, List, ListOrdered,
  Image, Save, ArrowLeft, Eye, Upload, Link as LinkIcon,
} from "lucide-react";

const CATEGORIES = ["Travel Guide", "Trekking", "Festival", "Destination", "Food & Culture", "Butterfly Watching", "Tips"];

const AdminEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Travel Guide");
  const [coverImage, setCoverImage] = useState("");
  const [published, setPublished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    checkAuth();
    if (id) loadPost();
  }, [id]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { navigate("/admin"); return; }
    setUserId(session.user.id);
  };

  const loadPost = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("id", id)
      .single();
    if (error || !data) {
      toast({ title: "Post not found", variant: "destructive" });
      navigate("/admin/dashboard");
      return;
    }
    setTitle(data.title);
    setSlug(data.slug);
    setExcerpt(data.excerpt);
    setContent(data.content);
    setCategory(data.category);
    setCoverImage(data.cover_image || "");
    setPublished(data.published);
  };

  const generateSlug = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!id) setSlug(generateSlug(val));
  };

  const insertFormat = (before: string, after: string = "") => {
    const ta = textareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = content.substring(start, end);
    const newContent = content.substring(0, start) + before + selected + after + content.substring(end);
    setContent(newContent);
    setTimeout(() => {
      ta.focus();
      ta.selectionStart = start + before.length;
      ta.selectionEnd = start + before.length + selected.length;
    }, 0);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);

    const ext = file.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error } = await supabase.storage.from("blog-images").upload(path, file);
    if (error) {
      toast({ title: "Upload failed", description: error.message, variant: "destructive" });
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(path);
    const url = urlData.publicUrl;

    // If no cover image yet, set it
    if (!coverImage) setCoverImage(url);

    // Insert into content
    insertFormat(`\n![Image](${url})\n`);
    setUploading(false);
    toast({ title: "Image uploaded!" });
  };

  const handleSave = async () => {
    if (!title.trim() || !slug.trim()) {
      toast({ title: "Title and slug are required", variant: "destructive" });
      return;
    }
    setSaving(true);

    const postData: Record<string, any> = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      content,
      category,
      cover_image: coverImage || null,
      published,
      user_id: userId,
    };

    let error;
    if (id) {
      ({ error } = await supabase.from("blog_posts").update(postData).eq("id", id));
    } else {
      ({ error } = await supabase.from("blog_posts").insert(postData as any));
    }

    setSaving(false);

    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: id ? "Post updated!" : "Post created!" });
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => navigate("/admin/dashboard")}>
            <ArrowLeft className="h-4 w-4 mr-1" /> Back
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setPublished(!published)}>
              <Eye className="h-4 w-4 mr-1" />
              {published ? "Published" : "Draft"}
            </Button>
            <Button size="sm" onClick={handleSave} disabled={saving}>
              <Save className="h-4 w-4 mr-1" />
              {saving ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Title */}
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="Your blog post title..." className="text-lg font-semibold mt-1" />
          </div>

          {/* Slug */}
          <div>
            <Label htmlFor="slug">Slug (URL)</Label>
            <Input id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="your-blog-post-url" className="mt-1" />
          </div>

          {/* Category */}
          <div>
            <Label htmlFor="category">Category</Label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Cover Image */}
          <div>
            <Label>Cover Image</Label>
            <div className="flex gap-2 mt-1">
              <Input value={coverImage} onChange={(e) => setCoverImage(e.target.value)} placeholder="Image URL or upload below" className="flex-1" />
              <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} disabled={uploading}>
                <Upload className="h-4 w-4 mr-1" /> {uploading ? "Uploading..." : "Upload"}
              </Button>
            </div>
            {coverImage && (
              <img src={coverImage} alt="Cover" className="mt-2 h-40 w-full object-cover rounded-md border" />
            )}
          </div>

          {/* Excerpt */}
          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea id="excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Brief summary of the post..." rows={3} className="mt-1" />
          </div>

          {/* Content Editor */}
          <div>
            <Label>Content (Markdown)</Label>
            {/* Toolbar */}
            <div className="flex flex-wrap gap-1 mt-1 mb-2 p-2 bg-card border border-border rounded-t-md">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertFormat("**", "**")} title="Bold">
                <Bold className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertFormat("*", "*")} title="Italic">
                <Italic className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertFormat("\n## ")} title="Heading 2">
                <Heading2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertFormat("\n### ")} title="Heading 3">
                <Heading3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertFormat("\n- ")} title="Bullet List">
                <List className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertFormat("\n1. ")} title="Numbered List">
                <ListOrdered className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertFormat("[", "](url)")} title="Link">
                <LinkIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => fileInputRef.current?.click()} disabled={uploading} title="Insert Image">
                <Image className="h-4 w-4" />
              </Button>
            </div>
            <Textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog post content in markdown..."
              rows={20}
              className="rounded-t-none font-mono text-sm"
            />
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </main>
    </div>
  );
};

export default AdminEditor;
