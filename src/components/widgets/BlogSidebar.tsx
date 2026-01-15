"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { BlogSidebarProps, BlogCategory, BlogTag } from "@/types";
import { cn } from "@/lib/utils";

const defaultCategories: BlogCategory[] = [
  { id: 1, name: "Analytics & Data", count: 3, href: "/blog/category/analytics" },
  { id: 2, name: "Branding", count: 2, href: "/blog/category/branding" },
  { id: 3, name: "Business", count: 1, href: "/blog/category/business" },
  { id: 4, name: "Content Creation", count: 1, href: "/blog/category/content-creation" },
  { id: 5, name: "Content Marketing", count: 2, href: "/blog/category/content-marketing" },
  { id: 6, name: "Creative", count: 2, href: "/blog/category/creative" },
  { id: 7, name: "Digital Marketing", count: 3, href: "/blog/category/digital-marketing" },
  { id: 8, name: "Digital Studio", count: 1, href: "/blog/category/digital-studio" },
  { id: 9, name: "Email Marketing", count: 2, href: "/blog/category/email-marketing" },
  { id: 10, name: "Growth Hacking", count: 2, href: "/blog/category/growth-hacking" },
];

const defaultTags: BlogTag[] = [
  { id: 1, name: "AI Marketing", href: "/blog/tag/ai-marketing" },
  { id: 2, name: "Business", href: "/blog/tag/business" },
  { id: 3, name: "Consistency", href: "/blog/tag/consistency" },
  { id: 4, name: "Content", href: "/blog/tag/content" },
  { id: 5, name: "Digital", href: "/blog/tag/digital" },
  { id: 6, name: "Marketing", href: "/blog/tag/marketing" },
  { id: 7, name: "SEO", href: "/blog/tag/seo" },
  { id: 8, name: "Social Media", href: "/blog/tag/social-media" },
];

const BlogSidebar: React.FC<BlogSidebarProps> = ({ categories = defaultCategories, tags = defaultTags, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <aside className="space-y-8 sm:space-y-10 lg:space-y-12">
      {/* Search Section */}
      <div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Search Here</h3>
        <form onSubmit={handleSearch} className="relative">
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search ..." className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-14 border-2 border-gray-200 focus:border-gray-400 focus:outline-none transition-colors text-sm sm:text-base" />
          <button type="submit" className="absolute right-0 top-0 bottom-0 px-4 sm:px-5 bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center" aria-label="Search">
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </form>
      </div>

      {/* Categories Section */}
      <div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Categories</h3>
        <ul className="space-y-3 sm:space-y-4">
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={category.href || "#"} className="flex items-center justify-between group hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-black transition-colors" />
                  <span className="text-sm sm:text-base lg:text-lg font-medium group-hover:text-black transition-colors">{category.name}</span>
                </div>
                <span className="text-sm sm:text-base text-gray-500">({category.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags Section */}
      <div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Tags</h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {tags.map((tag) => (
            <Link key={tag.id} href={tag.href || "#"} className={cn("px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium", "border-2 border-gray-200 hover:border-black hover:bg-black hover:text-white", "transition-all duration-300")}>
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
