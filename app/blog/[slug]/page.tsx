import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui";
import BlogSidebar from "@/components/widgets/BlogSidebar";

const page = () => {
  const blogDetails = {
    id: 1,
    title: "The Ultimate Guide to SEO for Small Businesses",
    category: "Digital Studio",
    image: "/video-img-2.jpg",
    date: "30",
    month: "September",
    year: 2024,
    content: `Mauris a diam lorem. Proin lobortis, turpis ac iaculis aliquet, arcu metus volutpat eros, at ullamcorper tellus ligula non ligula. Integer vitae magna a dolor cursus ultrices. Aenean dolor diam, cursus vitae nibh et, cursus ultricies nisl. Donec cursus risus vitae luctus faucibus. Phasellus vestibulum tortor et ex consectetur ullamcorper.

Morbi ac eleifend massa. Cras egestas, erat nec pharetra dignissim, ipsum ante blandit nibh, eget pharetra est est vitae diam. Phasellus id justo ac felis cursus porta ut tempus ligula. Integer aliquam, lacus in tempus laoreet, tortor dolor semper orci, a volutpat justo sapien vel arcu. Nulla at semper nisl. Donec et condimentum ipsum. Duis eu orci vitae tellus feugiat mattis eleifend ac enim. Mauris in facilisis nunc. Proin ac ullamcorper nulla. Morbi ut magna vel enim feugiat condimentum. Suspendisse id lacus nunc. Proin cursus hendrerit urna, at dictum erat. Nulla mattis tempus molestie. Maecenas ac lacus at lorem consequat accumsan.`,
    subtitle: "Our Success Journey We can Provide.",
    additionalContent: `Maecenas pretium nisl ac metus tempor pharetra. Maecenas pulvinar ut arcu nec blandit. Nullam quis risus vulputate, rhoncus ligula imperdiet, varius purus. Sed vel rutrum ipsum. Ut scelerisque tellus id dui aliquam, eget tincidunt ipsum aliquet. Ut turpis sapien, aliquam scelerisque feugiat vel, vulputate non lacus. Nunc blandit auctor massa id venenatis. Vestibulum a blandit dolor. Praesent vel laoreet tellus, at mattis neque. Mauris sapien odio, gravida finibus erat sit amet, viverra lobortis risus.

Integer commodo feugiat nulla ut maximus. Proin tincidunt ut mi et dictum. Maecenas tempor maximus in mi, in pretium risus. In pulvinar viverra dolor, non finibus nisi commodo ac. Nullam consectetur finibus pretium. Integer tempor cursus metus, vitae ultricies nisl vulputate sed. Ut vitae eros pellentesque nisi consequat aliquet. Maecenas eget mauris ante. Sed a finibus nisl, ac ullamcorper massa.`,
  };

  return (
    <main className="pb-12 sm:pb-16 lg:pb-24">
      {/* Hero Image */}
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] mb-12 sm:mb-16 lg:mb-20">
        <div className="relative w-full h-full">
          <Image src={blogDetails.image} alt={blogDetails.title} fill className="object-cover" priority />
        </div>
      </div>

      {/* Content Grid */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content Area */}
          <article className="lg:col-span-7 xl:col-span-8">
            {/* Category and Date */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="w-8 sm:w-10 h-px bg-gray-300" />
              <span className="text-sm sm:text-base font-medium text-gray-700">{blogDetails.category}</span>
              <span className="text-sm sm:text-base text-gray-400">•</span>
              <span className="text-sm sm:text-base text-gray-600">
                {blogDetails.month} {blogDetails.date}, {blogDetails.year}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 sm:mb-10 lg:mb-12">{blogDetails.title}</h1>

            {/* Main Content */}
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none space-y-6 sm:space-y-8">
              {blogDetails.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Subtitle */}
            {blogDetails.subtitle && <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-10 sm:mt-12 lg:mt-16 mb-6 sm:mb-8">{blogDetails.subtitle}</h2>}

            {/* Additional Content */}
            {blogDetails.additionalContent && (
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none space-y-6 sm:space-y-8">
                {blogDetails.additionalContent.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </article>

          {/* Right Sidebar */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-24">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default page;
