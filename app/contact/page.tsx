import { CategoryTitle, Map, ContactBoxes, ContactUs } from "@/components";

const ContactPage = () => {
  return (
    <main className="space-y-12 sm:space-y-16 lg:space-y-24 pb-12 sm:pb-16 lg:pb-24">
      <CategoryTitle title="Contact" title2="Page" />
      <Map />
      <ContactBoxes />
      <ContactUs darkMode={false} />
    </main>
  );
};

export default ContactPage;
