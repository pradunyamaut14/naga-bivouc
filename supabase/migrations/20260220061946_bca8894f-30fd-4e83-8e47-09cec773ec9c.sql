
-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL DEFAULT '',
  cover_image TEXT,
  category TEXT NOT NULL DEFAULT 'Travel Guide',
  author TEXT NOT NULL DEFAULT 'Naga Bivouac',
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Public can read published posts
CREATE POLICY "Anyone can read published posts"
ON public.blog_posts FOR SELECT
USING (published = true);

-- Authenticated users can read all posts (for admin)
CREATE POLICY "Authenticated users can read all posts"
ON public.blog_posts FOR SELECT
TO authenticated
USING (true);

-- Authenticated users can insert posts
CREATE POLICY "Authenticated users can insert posts"
ON public.blog_posts FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Authenticated users can update their posts
CREATE POLICY "Authenticated users can update posts"
ON public.blog_posts FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Authenticated users can delete their posts
CREATE POLICY "Authenticated users can delete posts"
ON public.blog_posts FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);

-- Storage policies
CREATE POLICY "Anyone can view blog images"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can upload blog images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can delete blog images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'blog-images');
