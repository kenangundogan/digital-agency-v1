import { Banner, CategoryTitle, FaqType2, Partners } from "@/components";
const page = () => {
  return (
    <main className="space-y-12 sm:space-y-16 lg:space-y-24 pb-12 sm:pb-16 lg:pb-24">
      <CategoryTitle title="FAQ" title2="Page" />
      <Banner image="/video-img-2.jpg" title="FAQ" />
      <FaqType2 />
      <Partners />
    </main>
  );
};

export default page;
