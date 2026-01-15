import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogProps, BlogPost } from "@/types";
import { CircularLinkButton, Container } from "@/components/ui";
import BlogCards from "../widgets/BlogCards";

// Default blog posts
const defaultPosts: BlogPost[] = [
  {
    id: 1,
    image: "/video-img-2.jpg",
    date: "01",
    month: "/Oct",
    href: "/blog/email-marketing-best-practices-for-small-businesses",
    comments: 0,
    title: "Email Marketing Best Practices for Small Businesses",
  },
  {
    id: 2,
    image: "/video-img-2.jpg",
    date: "01",
    month: "/Oct",
    href: "/blog/the-role-of-influencer-marketing-in-building-brand...",
    comments: 0,
    title: "The Role of Influencer Marketing in Building Brand...",
  },
  {
    id: 3,
    image: "/video-img-2.jpg",
    date: "01",
    month: "/Oct",
    href: "/blog/the-power-of-local-seo-how-to-rank-higher-in-your-area",
    comments: 0,
    title: "The Power of Local SEO: How to Rank Higher in Your Area",
  },
];

/**
 * Blog section component
 * Displays latest blog posts in a grid layout
 */
const Blog: React.FC<BlogProps> = ({ category = "Our Blog", title = "Stay Updated with Our Latest Blogs.", posts = defaultPosts, ctaText = "View All", ctaLink = "/blog" }) => {
  return (
    <Container>
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-0.5 bg-gray-400" />
            <span className="text-sm sm:text-base font-medium text-gray-600">{category}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">{title}</h2>
        </div>

        {/* Desktop Link Button */}
        <CircularLinkButton href={ctaLink} text={ctaText} variant="light" className="hidden lg:flex" />
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCards key={post.id} href={post.href} image={post.image} title={post.title} date={post.date} month={post.month} comments={post.comments || 0} />
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="flex items-center justify-center mt-8 sm:mt-10 lg:hidden border border-gray-200 p-4">
        <Link href={ctaLink} className="flex items-center gap-2 text-sm sm:text-base font-medium hover:gap-4 transition-all duration-300">
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>
    </Container>
  );
};

export default Blog;
