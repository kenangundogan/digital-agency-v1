import { CategoryTitle, BlogCards, Container } from "@/components";
import { BlogPost } from "@/types";

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/video-img-2.jpg",
    date: "01",
    month: "/Oct",
    comments: 0,
    title: "Email Marketing Best Practices for Small Businesses",
    href: "/blog/email-marketing-best-practices-for-small-businesses",
  },
  {
    id: 2,
    image: "/video-img-2.jpg",
    date: "01",
    month: "/Oct",
    comments: 0,
    title: "The Role of Influencer Marketing in Building Brand...",
    href: "/blog/the-role-of-influencer-marketing-in-building-brand...",
  },
  {
    id: 3,
    image: "/video-img-2.jpg",
    date: "01",
    month: "/Oct",
    comments: 0,
    title: "The Power of Local SEO: How to Rank Higher in Your Area",
    href: "/blog/the-power-of-local-seo-how-to-rank-higher-in-your-area",
  },
];

const BlogPage = () => {
  return (
    <main className="space-y-12 sm:space-y-16 lg:space-y-24 pb-12 sm:pb-16 lg:pb-24">
      <CategoryTitle title="Blog" title2="Page" />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCards
              key={post.id}
              href={post.href}
              image={post.image}
              title={post.title}
              date={post.date}
              month={post.month}
              comments={post.comments}
            />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default BlogPage;
