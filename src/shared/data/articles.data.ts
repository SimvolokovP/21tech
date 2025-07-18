import { IArticle } from "@/models/IArticle";

export const ARTICLES: IArticle[] = [
  {
    id: "1",
    slug: "telegram-bot-development-guide",
    title: "article_1_title",
    excerpt: "article_1_excerpt", 
    content: "article_1_content",
    author: "21Tech Team",
    publishedAt: "2025-01-15",
    readTime: 8,
    category: "telegram-bots",
    tags: ["telegram", "bot", "development", "python"],
    featured: true,
    image: undefined
  },
  {
    id: "2",
    slug: "telegram-mini-apps-future",
    title: "article_2_title",
    excerpt: "article_2_excerpt",
    content: "article_2_content", 
    author: "21Tech Team",
    publishedAt: "2025-01-10",
    readTime: 6,
    category: "mobile-apps",
    tags: ["telegram", "mini-apps", "web3", "future"],
    featured: true,
    image: undefined
  },
  {
    id: "3",
    slug: "ai-integration-business",
    title: "article_3_title",
    excerpt: "article_3_excerpt",
    content: "article_3_content",
    author: "21Tech Team", 
    publishedAt: "2025-01-05",
    readTime: 10,
    category: "ai-solutions",
    tags: ["ai", "business", "automation", "integration"],
    featured: false,
    image: undefined
  },
  {
    id: "4",
    slug: "web-development-trends-2025",
    title: "article_4_title",
    excerpt: "article_4_excerpt",
    content: "article_4_content",
    author: "21Tech Team",
    publishedAt: "2025-01-01", 
    readTime: 7,
    category: "web-development",
    tags: ["web", "trends", "2025", "nextjs"],
    featured: false,
    image: undefined
  }
];
