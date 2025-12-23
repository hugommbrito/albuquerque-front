export type BlogArticleInfo = {
  id: string;
  title: string;
  slug: string;
  tag: string;
  short_description: string;
  cover_image_url: string;
  content: string;
  created_at: string;
}

export type BlogPageInfo = {
  highlighted_articles: BlogArticleInfo[];
  regular_articles: BlogArticleInfo[];
}