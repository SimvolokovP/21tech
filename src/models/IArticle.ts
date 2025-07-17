export interface IArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number; // в минутах
  category: string;
  tags: string[];
  featured?: boolean;
  image?: string;
}

export type ArticleCategory = "telegram-bots" | "web-development" | "mobile-apps" | "ai-solutions" | "tutorials";
