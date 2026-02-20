import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, LogOut, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  published: boolean;
  created_at: string;
  cover_image: string | null;
}

const AdminDashboard = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    fetchPosts();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) navigate("/admin");
  };

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, category, published, created_at, cover_image")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  const togglePublish = async (id: string, published: boolean) => {
    const { error } = await supabase.from("blog_posts").update({ published: !published }).eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setPosts(posts.map(p => p.id === id ? { ...p, published: !published } : p));
      toast({ title: !published ? "Published" : "Unpublished" });
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setPosts(posts.filter(p => p.id !== id));
      toast({ title: "Post deleted" });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Naga Bivouac" className="h-8 w-8 object-contain" />
            <h1 className="text-xl font-display font-bold">Blog Admin</h1>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => navigate("/admin/editor")} size="sm">
              <Plus className="h-4 w-4 mr-1" /> New Post
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-1" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-display font-bold mb-6">All Posts ({posts.length})</h2>

        {loading ? (
          <p className="text-muted-foreground">Loading...</p>
        ) : posts.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground mb-4">No blog posts yet.</p>
              <Button onClick={() => navigate("/admin/editor")}>
                <Plus className="h-4 w-4 mr-1" /> Create Your First Post
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-4 flex items-center gap-4">
                  {post.cover_image && (
                    <img src={post.cover_image} alt="" className="w-20 h-14 object-cover rounded" />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{post.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <Badge variant={post.published ? "default" : "secondary"} className="text-xs">
                        {post.published ? "Published" : "Draft"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1 flex-shrink-0">
                    <Button variant="ghost" size="icon" onClick={() => togglePublish(post.id, post.published)} title={post.published ? "Unpublish" : "Publish"}>
                      {post.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => navigate(`/admin/editor/${post.id}`)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => deletePost(post.id)} className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
