import { Container } from "@/components/ui";
import BlogSidebar from "@/components/widgets/BlogSidebar";
import { Banner } from "@/components";
import FaqType1 from "@/components/widgets/faq/type1";

const page = () => {
  const projectDetails = {
    id: 1,
    title: "Digital Masterpieces",
    description: "Duis sed augue condimentum, blandit sapien in, accumsan eros. Curabitur sodales pulvinar libero et venenatis. Nullam eleifend risus a quam dictum auctor. Mauris at leo non dui euismod varius. Cras vel erat at est aliquam laoreet. Donec tincidunt, nunc eu gravida malesuada, tellus leo.",
    image: "/video-img-2.jpg",
    category: "Digital Studio",
    month: "December",
    date: "15",
    year: "2024",
    content: "Duis sed augue condimentum, blandit sapien in, accumsan eros. Curabitur sodales pulvinar libero et venenatis. Nullam eleifend risus a quam dictum auctor. Mauris at leo non dui euismod varius. Cras vel erat at est aliquam laoreet.\n\nDonec tincidunt, nunc eu gravida malesuada, tellus leo venenatis odio, quis efficitur eros velit vel nunc. Sed varius mauris vel eros vehicula, nec facilisis urna cursus.",
    subtitle: "Our Approach",
    additionalContent: "Through data-driven insights and creative solutions, we develop customized marketing plans that resonate with your target audience. Our marketing experts don't just follow trends; we set them.",
    steps: [
      {
        value: "Marketing Experts",
        description: "Our marketing experts don't just follow trends; we set them. Through data-driven insights and creative solutions, we develop customized marketing plans that resonate with your target audience.",
      },
      {
        label: "Marketing Experts",
        value: "Our marketing experts don't just follow trends; we set them. Through data-driven insights and creative solutions, we develop customized marketing plans that resonate with your target audience.",
      },
    ],
    projectSummary: [
      {
        label: "Client",
        value: "John Doe",
      },
      {
        label: "Category",
        value: "Digital Studio",
      },
      {
        label: "Timeframe",
        value: "3 months",
      },
      {
        label: "Website Link",
        value: "https://www.example.com",
      },
      {
        label: "Rating",
        value: "4.5",
      },
    ],
    faq: [
      {
        question: "What is the purpose of this project?",
        answer: "The purpose of this project is to create a visually appealing and user-friendly website tailored to the brand's objectives.",
      },
      {
        question: "What is the purpose of this project?",
        answer: "The purpose of this project is to create a visually appealing and user-friendly website tailored to the brand's objectives.",
      },
      {
        question: "What is the purpose of this project?",
        answer: "The purpose of this project is to create a visually appealing and user-friendly website tailored to the brand's objectives.",
      },
    ],
    TwoColumnContent: [
      {
        title: "Our Approach",
        paragraphs: ["Our marketing experts don't just follow trends; we set them. Through data-driven insights and creative solutions, we develop customized marketing plans that resonate with your target audience."],
        imageSrc: "/image.jpg",
        imageAlt: "Image",
      },
    ],
  };

  return (
    <main className="pb-12 sm:pb-16 lg:pb-24">
      {/* Hero Image */}
      <Banner image={projectDetails.image} title={projectDetails.title} />

      <div className="mx-auto mb-16 border-b border-gray-200 pb-16 gap-8 flex items-center justify-between max-w-384 px-10">
        {projectDetails.projectSummary.map((item, index) => (
          <div key={index} className="col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight">{item.label}</h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{item.value}</p>
          </div>
        ))}
      </div>
      <Container>
        <div className="gap-8 lg:gap-12 xl:gap-16 mb-32">
          <article className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="w-8 sm:w-10 h-px bg-gray-300" />
              <span className="text-sm sm:text-base font-medium text-gray-700">{projectDetails.category}</span>
              <span className="text-sm sm:text-base text-gray-400">•</span>
              <span className="text-sm sm:text-base text-gray-600">
                {projectDetails.month} {projectDetails.date}, {projectDetails.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 sm:mb-10 lg:mb-12">{projectDetails.title}</h1>

            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none space-y-6 sm:space-y-8">
              {projectDetails.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            {projectDetails.subtitle && <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-10 sm:mt-12 lg:mt-16 mb-6 sm:mb-8">{projectDetails.subtitle}</h2>}
            {projectDetails.additionalContent && (
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none space-y-6 sm:space-y-8">
                {projectDetails.additionalContent.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </article>
        </div>
        <div className="max-w-7xl mx-auto mb-16">
          <FaqType1 items={projectDetails.faq} />
        </div>
      </Container>
    </main>
  );
};

export default page;
