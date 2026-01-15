import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogCardsProps {
  image: string;
  title: string;
  date: string;
  month: string;
  comments?: number;
  href?: string;
}

/**
 * Blog card component for displaying individual blog posts
 * Used in Blog section and blog listing pages
 */
const BlogCards: React.FC<BlogCardsProps> = ({ image, title, date, month, comments = 0, href = "#" }) => {
  return (
    <Link href={href} className="group cursor-pointer block">
      {/* Image Container */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 mb-4 sm:mb-6 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>

      {/* Date and Comments */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-2 border-gray-200">
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none">{date}</span>
          <span className="text-xs sm:text-sm text-gray-600">{month}</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm">
            {comments} {comments === 1 ? "Comment" : "Comments"}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight group-hover:text-gray-600 transition-colors duration-300">{title}</h3>
    </Link>
  );
};

export default BlogCards;
